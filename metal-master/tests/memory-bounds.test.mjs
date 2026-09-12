import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRateLimiter } from '../src/lib/rate-limit.ts';
import { readLimitedText, BodyTooLargeError } from '../src/lib/limited-body.ts';

test('limiter caps identities without evicting existing limits and recovers after TTL', () => {
  const limited = createRateLimiter({ windowMs: 100, maxRequests: 2, maxEntries: 2 });
  assert.equal(limited('a', 0), false);
  assert.equal(limited('a', 1), false);
  assert.equal(limited('a', 2), true);
  assert.equal(limited('b', 10), false);
  for (let i = 0; i < 10000; i++) assert.equal(limited(`new-${i}`, 20), true);
  assert.equal(limited('a', 30), true);
  assert.equal(limited('b', 30), false);
  assert.equal(limited('c', 100), false);
  assert.equal(limited('b', 100), true);
  assert.equal(limited('b', 110), false);
});

function requestFromChunks(chunks, onCancel = () => {}) {
  return new Request('http://localhost', { method: 'POST', duplex: 'half', body: new ReadableStream({
    pull(controller) {
      if (chunks.length) controller.enqueue(chunks.shift());
      else controller.close();
    },
    cancel: onCancel,
  }) });
}

test('streamed body preserves Unicode split across chunks at byte limit', async () => {
  const bytes = new TextEncoder().encode('Zażółć 😀');
  const request = requestFromChunks([...bytes].map(byte => Uint8Array.of(byte)));
  assert.equal(await readLimitedText(request, bytes.length), 'Zażółć 😀');
  assert.equal(request.body.locked, false);
});

test('oversized chunked body is cancelled before consuming remaining input', async () => {
  let cancelled = false;
  const request = requestFromChunks([new Uint8Array(8), new Uint8Array(8), new Uint8Array(100)], () => { cancelled = true; });
  await assert.rejects(readLimitedText(request, 10), BodyTooLargeError);
  assert.equal(cancelled, true);
  assert.equal(request.body.locked, false);
});

test('oversized declared length is rejected and empty body is supported', async () => {
  const request = new Request('http://localhost', { method: 'POST', body: 'large', headers: { 'content-length': '100' } });
  await assert.rejects(readLimitedText(request, 10), BodyTooLargeError);
  assert.equal(await readLimitedText(new Request('http://localhost'), 10), '');
});
