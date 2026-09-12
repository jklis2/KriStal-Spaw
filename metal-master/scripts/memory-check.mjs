// Local production workload. Does not send email or modify source images.
import { spawn } from 'node:child_process';
import { mkdtemp, writeFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { once } from 'node:events';
import assert from 'node:assert/strict';

const temp = await mkdtemp(join(tmpdir(), 'kristal-memory-'));
const preload = join(temp, 'sample.cjs');
await writeFile(preload, `setInterval(() => console.log('MEMORY ' + JSON.stringify(process.memoryUsage())), 500).unref();`);
const port = 3138;
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['--require', preload, 'node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1', '-p', String(port)], {
  env: { ...process.env, NODE_ENV: 'production', UV_THREADPOOL_SIZE: '2', MALLOC_ARENA_MAX: '2' },
  stdio: ['ignore', 'pipe', 'pipe'],
});
const samples = [];
let pending = '';
let ready = false;
server.stdout.on('data', chunk => {
  pending += chunk;
  const lines = pending.split('\n');
  pending = lines.pop();
  for (const line of lines) {
    if (line.startsWith('MEMORY ')) samples.push(JSON.parse(line.slice(7)));
    else if (line.includes('Ready in')) ready = true;
  }
});
server.stderr.on('data', chunk => process.stderr.write(chunk));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let requestCount = 0;
async function request(path, options = {}, status = 200) {
  const response = await fetch(base + path, {
    ...options,
    signal: AbortSignal.timeout(60000),
    headers: {
      'user-agent': 'MemoryVerification/1.0',
      accept: 'image/avif,image/webp,*/*',
      // Local-only synthetic identities keep workload separate from rate-limit tests.
      'x-forwarded-for': `198.51.${Math.floor(requestCount / 200) % 255}.${requestCount++ % 200 + 1}`,
      ...options.headers,
    },
  });
  await response.arrayBuffer();
  assert.equal(response.status, status, path);
  return response;
}
function report(stage) {
  const latest = samples.at(-1);
  assert.ok(latest, 'No memory samples collected');
  console.log(JSON.stringify({ stage, node: process.version, requests: requestCount,
    ...Object.fromEntries(Object.entries(latest).map(([key, value]) => [key + 'MiB', +(value / 1048576).toFixed(1)])),
    peakRssMiB: +(Math.max(...samples.map(s => s.rss)) / 1048576).toFixed(1),
  }));
}
try {
  for (let i = 0; !ready && i < 100; i++) {
    if (server.exitCode !== null) throw new Error('Production server exited');
    await sleep(100);
  }
  assert.ok(ready, 'Production server did not become ready');
  await sleep(1500);
  report('startup');
  const pages = ['/', '/galeria', '/oferta', '/kontakt', '/faq', '/blog', '/regulamin', '/polityka-prywatnosci'];
  for (let i = 0; i < 120; i++) {
    await request(pages[i % pages.length]);
    if (i === 7) { await sleep(600); report('8 pages'); }
  }
  await sleep(600);
  report('120 pages');
  const files = (await readdir('public/portfolio', { recursive: true })).filter(f => f.endsWith('.webp')).sort().slice(0, 40);
  const run = Date.now(); // New cache keys, without deleting an existing cache.
  for (let round = 0; round < 3; round++) {
    let misses = 0;
    for (let i = 0; i < files.length; i += 4) {
      const responses = await Promise.all(files.slice(i, i + 4).map(f => request('/_next/image?' + new URLSearchParams({
        url: '/portfolio/' + f + '?memory-check=' + run, w: '1920', q: '85',
      }))));
      for (const response of responses) {
        assert.equal(response.headers.get('content-type'), 'image/webp');
        if (response.headers.get('x-nextjs-cache') === 'MISS') misses++;
      }
    }
    await sleep(3000);
    report(`image round ${round + 1}, cache misses ${misses}`);
  }
  const json = { 'content-type': 'application/json' };
  await request('/api/contact', {}, 405);
  await request('/api/contact', { method: 'POST', body: '{}' }, 415);
  await request('/api/contact', { method: 'POST', headers: json, body: '{' }, 400);
  await request('/api/contact', { method: 'POST', headers: json, body: 'null' }, 400);
  await request('/api/contact', { method: 'POST', headers: json, body: '{}' }, 400);
  await request('/api/contact', { method: 'POST', headers: json, body: JSON.stringify({ _honey: 'test' }) });
  await request('/api/contact', { method: 'POST', headers: json, body: 'a'.repeat(40001) }, 413);
  for (let i = 0; i < 6; i++) {
    await request('/api/contact', { method: 'POST', headers: { ...json, 'x-forwarded-for': '192.0.2.1' }, body: JSON.stringify({ _honey: 'test' }) }, i < 5 ? 200 : 429);
  }
  await request('/wp-admin', {}, 404);
  await request('/missing-memory-test', {}, 404);
  await sleep(15000);
  report('idle 15 seconds; API smoke checks passed');
} finally {
  const exited = once(server, 'exit');
  if (server.exitCode === null && server.signalCode === null) {
    server.kill('SIGTERM');
    const force = setTimeout(() => server.kill('SIGKILL'), 5000);
    force.unref();
    await exited;
    clearTimeout(force);
  }
  await rm(temp, { recursive: true, force: true });
}
