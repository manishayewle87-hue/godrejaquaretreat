import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getClientIp, rateLimitAuth } from '@/lib/rate-limit';
import { sanitizeString } from '@/lib/security';

// Constant-time string comparison to prevent timing attacks
function timingSafeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) {
    // Perform dummy comparison to keep timing uniform
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const rateCheck = rateLimitAuth(ip);

    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: `Too many login attempts. Please try again in ${rateCheck.reset} seconds.` },
        { status: 429, headers: { 'Retry-After': String(rateCheck.reset) } }
      );
    }

    const body = await req.json().catch(() => ({}));
    const key = sanitizeString(body.key || body.password || '', 100);

    const configuredSecret = process.env.ADMIN_SECRET_KEY || process.env.ADMIN_PASSWORD || 'godrej2026';

    if (!key || !timingSafeCompare(key, configuredSecret)) {
      return NextResponse.json(
        { error: 'Invalid access credentials' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      token: configuredSecret,
    });
  } catch (error) {
    console.error('Admin Auth Error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
