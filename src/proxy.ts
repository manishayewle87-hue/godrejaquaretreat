import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Known vulnerability scanner / probe patterns to block immediately
const BLOCKED_PATH_PATTERNS = [
  /^\/\.env/i,
  /^\/\.git/i,
  /^\/\.aws/i,
  /^\/\.well-known\/(?!security\.txt$)/i,
  /^\/wp-admin/i,
  /^\/wp-login/i,
  /^\/wp-content/i,
  /^\/wp-includes/i,
  /^\/xmlrpc\.php/i,
  /^\/phpmyadmin/i,
  /^\/pma/i,
  /^\/adminer/i,
  /^\/actuator/i,
  /^\/server-status/i,
  /^\/\.ds_store/i,
  /^\/config\.(json|yaml|yml|ini)/i,
  /^\/database\.(sql|sqlite|db)/i,
];

// Allowed HTTP methods for API routes
const ALLOWED_API_METHODS = new Set(['GET', 'POST', 'OPTIONS', 'HEAD']);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Block Path Traversal and Null Byte Attacks
  if (
    pathname.includes('..') ||
    pathname.includes('%2e%2e') ||
    pathname.includes('%2E%2E') ||
    pathname.includes('\0') ||
    pathname.includes('%00')
  ) {
    return new NextResponse('Bad Request: Invalid Path', { status: 400 });
  }

  // 2. Reject Known Probe & Exploit Scanners
  for (const pattern of BLOCKED_PATH_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse('Not Found', { status: 404 });
    }
  }

  // 3. Restrict HTTP Methods on API routes
  if (pathname.startsWith('/api/')) {
    if (!ALLOWED_API_METHODS.has(request.method)) {
      return new NextResponse(`Method ${request.method} Not Allowed`, {
        status: 405,
        headers: {
          Allow: 'GET, POST, OPTIONS, HEAD',
        },
      });
    }
  }

  // 4. Forward with standard security response
  const response = NextResponse.next();

  // Edge Security & SEO Performance Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self)');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

  // Vercel Edge Geolocation Forwarding
  const country = request.headers.get('x-vercel-ip-country') || 'IN';
  const city = request.headers.get('x-vercel-ip-city') || 'Pune';
  response.headers.set('x-user-country', country);
  response.headers.set('x-user-city', city);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
