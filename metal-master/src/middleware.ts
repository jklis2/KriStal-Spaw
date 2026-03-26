import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Block known malicious paths that attackers probe for
const BLOCKED_PATHS = [
  '/wp-admin',
  '/wp-login',
  '/wp-content',
  '/wp-includes',
  '/xmlrpc.php',
  '/administrator',
  '/phpmyadmin',
  '/pma',
  '/admin',
  '/cgi-bin',
  '/shell',
  '/cmd',
  '/eval',
  '/.env',
  '/.git',
  '/.ssh',
  '/config.php',
  '/setup.php',
  '/install.php',
  '/backup',
  '/db',
  '/database',
  '/sql',
  '/dump',
];

// Block known malicious user agents
const BLOCKED_USER_AGENTS = [
  'sqlmap',
  'nikto',
  'nmap',
  'masscan',
  'zgrab',
  'gobuster',
  'dirbuster',
  'wpscan',
  'nuclei',
  'httpx',
  'subfinder',
  'curl/',
  'wget/',
  'python-requests',
  'go-http-client',
  'scrapy',
];

// Simple in-memory rate limiter for middleware (per IP, per minute)
const MW_RATE_LIMIT_WINDOW_MS = 60_000;
const MW_RATE_LIMIT_MAX = 100; // max 100 requests per minute per IP

interface MwRateLimitEntry {
  count: number;
  windowStart: number;
}

const mwRateLimitMap = new Map<string, MwRateLimitEntry>();

function cleanupMwRateLimit() {
  const now = Date.now();
  for (const [key, entry] of mwRateLimitMap) {
    if (now - entry.windowStart > MW_RATE_LIMIT_WINDOW_MS) {
      mwRateLimitMap.delete(key);
    }
  }
}

function isMwRateLimited(ip: string): boolean {
  cleanupMwRateLimit();
  const now = Date.now();
  const entry = mwRateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > MW_RATE_LIMIT_WINDOW_MS) {
    mwRateLimitMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  entry.count++;
  return entry.count > MW_RATE_LIMIT_MAX;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  // --- Global rate limiting ---
  if (isMwRateLimited(ip)) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  // --- Block probing of known attack paths ---
  const lowerPath = pathname.toLowerCase();
  if (BLOCKED_PATHS.some((blocked) => lowerPath.startsWith(blocked))) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // --- Block suspicious file extensions (server-side scripts that shouldn't exist in Next.js) ---
  const BLOCKED_EXTENSIONS = ['.php', '.asp', '.aspx', '.jsp', '.cgi', '.sh', '.bash', '.pl', '.py', '.rb', '.sql', '.bak', '.old', '.orig', '.swp', '.conf'];
  if (BLOCKED_EXTENSIONS.some((ext) => lowerPath.endsWith(ext))) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // --- Block malicious user agents ---
  const ua = request.headers.get('user-agent')?.toLowerCase() || '';
  if (BLOCKED_USER_AGENTS.some((bot) => ua.includes(bot))) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // --- Block requests with suspicious query parameters ---
  const url = request.nextUrl.toString().toLowerCase();
  const SUSPICIOUS_PATTERNS = [
    '<script', 'javascript:', 'union+select', 'union%20select',
    '../', '..\\', 'etc/passwd', 'etc/shadow',
    'proc/self', '/bin/bash', '/bin/sh',
    'cmd.exe', 'powershell', 'wget ', 'curl ',
    'base64_decode', 'eval(', 'exec(',
  ];
  if (SUSPICIOUS_PATTERNS.some((pattern) => url.includes(pattern))) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  const response = NextResponse.next();

  // --- Hide API routes from search engines (but allow SEO on public pages) ---
  if (lowerPath.startsWith('/api')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, nosnippet, noarchive');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public folder assets
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)',
  ],
};
