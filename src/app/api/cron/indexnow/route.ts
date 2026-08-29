import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';

const CORE_URLS = [
  `${siteConfig.url}/`,
  `${siteConfig.url}/godrej-the-aqua-retreat-hinjewadi`,
  `${siteConfig.url}/godrej-properties-pune`,
  `${siteConfig.url}/godrej-the-retreat-hinjewadi`,
  `${siteConfig.url}/godrej-park-world-hinjewadi`,
  `${siteConfig.url}/godrej-properties-hinjewadi-pune`,
  `${siteConfig.url}/godrej-park-world-pune-masterplan`,
  `${siteConfig.url}/godrej-park-world-pune-luxury-residences`,
  `${siteConfig.url}/godrej-park-world-pune-premium-amenities`,
  `${siteConfig.url}/godrej-park-world-pune-hinjewadi-location`,
  `${siteConfig.url}/directory`,
  `${siteConfig.url}/eoi`,
  `${siteConfig.url}/blog`
];

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    // Optional verification for Vercel Cron
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const host = new URL(siteConfig.url).hostname;
    const key = process.env.INDEXNOW_KEY || 'godrejparkworldindexnow2026';

    const payload = {
      host: host,
      key: key,
      keyLocation: `https://${host}/${key}.txt`,
      urlList: CORE_URLS,
    };

    const indexNowRes = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: true,
      engine: 'IndexNow (Bing, Yandex, Seznam, Naver)',
      urlsSubmitted: CORE_URLS.length,
      status: indexNowRes.status,
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
