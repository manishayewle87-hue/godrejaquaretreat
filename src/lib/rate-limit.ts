/**
 * In-memory sliding window rate limiter
 */

type RateLimitRecord = {
  timestamps: number[];
};

class RateLimiter {
  private requests: Map<string, RateLimitRecord> = new Map();
  private lastCleanup: number = Date.now();

  /**
   * Check if an identifier (e.g. IP) has exceeded limit within the window (in seconds)
   */
  check(identifier: string, limit: number, windowSeconds: number): { allowed: boolean; remaining: number; reset: number } {
    const now = Date.now();
    const windowMs = windowSeconds * 1000;

    // Periodic cleanup every 5 minutes
    if (now - this.lastCleanup > 300000) {
      this.cleanup(now, windowMs);
    }

    const record = this.requests.get(identifier) || { timestamps: [] };
    // Filter timestamps within current window
    const recentTimestamps = record.timestamps.filter(ts => now - ts < windowMs);

    if (recentTimestamps.length >= limit) {
      const oldest = recentTimestamps[0];
      const reset = Math.ceil((oldest + windowMs - now) / 1000);
      return {
        allowed: false,
        remaining: 0,
        reset: Math.max(1, reset),
      };
    }

    recentTimestamps.push(now);
    this.requests.set(identifier, { timestamps: recentTimestamps });

    return {
      allowed: true,
      remaining: limit - recentTimestamps.length,
      reset: windowSeconds,
    };
  }

  private cleanup(now: number, maxAge: number) {
    for (const [key, record] of this.requests.entries()) {
      const valid = record.timestamps.filter(ts => now - ts < maxAge);
      if (valid.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, { timestamps: valid });
      }
    }
    this.lastCleanup = now;
  }
}

// Global instances across invocations
const leadRateLimiter = new RateLimiter();
const authRateLimiter = new RateLimiter();

export function rateLimitLeadSubmission(ip: string): { allowed: boolean; remaining: number; reset: number } {
  // Max 5 lead submissions per 60 seconds per IP
  return leadRateLimiter.check(ip, 5, 60);
}

export function rateLimitAuth(ip: string): { allowed: boolean; remaining: number; reset: number } {
  // Max 5 failed login attempts per 15 minutes (900 seconds) per IP
  return authRateLimiter.check(ip, 5, 900);
}

/**
 * Extracts client IP from standard Next.js / Vercel proxy headers
 */
export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return '127.0.0.1';
}
