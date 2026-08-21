import { siteConfig } from '@/config/site';

export async function GET() {
  const securityPolicy = [
    `Contact: mailto:security@godrejparkworld.com`,
    `Expires: 2027-12-31T23:59:59.000Z`,
    `Preferred-Languages: en`,
    `Canonical: ${siteConfig.url}/.well-known/security.txt`,
    `Policy: ${siteConfig.url}/privacy-policy`,
  ].join('\n');

  return new Response(securityPolicy, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
