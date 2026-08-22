import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      // 1. Universal Fallback - Allow All Public Pages
      {
        userAgent: '*',
        allow: [
          '/',
          '/godrej-the-retreat-hinjewadi',
          '/eoi',
          '/godrej-properties-hinjewadi-pune',
          '/godrej-park-world-pune-masterplan',
          '/godrej-park-world-pune-luxury-residences',
          '/godrej-park-world-pune-aqua-lifestyle',
          '/godrej-park-world-pune-premium-amenities',
          '/godrej-park-world-pune-hinjewadi-location',
          '/godrej-park-world-pune-gallery',
          '/directory',
          '/clusters/',
          '/configurations/',
          '/amenities/',
          '/investments/',
          '/properties/',
          '/blog/',
          '/images/',
          '/_next/image',
          '/_next/static/',
          '/favicon.ico',
          '/aqua-logo.svg',
          '/manifest.webmanifest',
          '/llms.txt',
          '/llms-full.txt',
          '/.well-known/security.txt',
        ],
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/_next/data/',
        ],
      },
      // 2. Google Web Crawler (Desktop & Mobile Smartphone) - #1 Priority
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/', '/_next/data/'],
      },
      // 3. Googlebot Smartphone (Mobile First Indexing)
      {
        userAgent: 'Googlebot-Mobile',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 4. Google Image Crawler (Rich High-Res Media & Floor Plans)
      {
        userAgent: 'Googlebot-Image',
        allow: ['/', '/images/', '/_next/image', '/_next/static/'],
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 5. Google Video Crawler (360° Virtual Walkthrough & Tours)
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 6. Google News & Real Estate Updates
      {
        userAgent: 'Googlebot-News',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 7. Google Search Console Live Inspection & Verification Tool
      {
        userAgent: 'Google-InspectionTool',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 8. Google Shopping & Product Inventory Crawlers
      {
        userAgent: 'Storebot-Google',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 9. Google Ads Landing Page Quality Crawlers (10/10 Quality Score)
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
      {
        userAgent: 'AdsBot-Google-Mobile',
        allow: '/',
      },
      // 10. Google AI Overviews, SGE & Gemini Search Grounding
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 11. OpenAI Search & ChatGPT Grounding
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // 12. Perplexity AI Search Engine
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 13. Anthropic Claude AI Search
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // 14. Apple Siri, Safari & iOS Spotlight
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 15. Microsoft Bing Search & Copilot
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
        crawlDelay: 1,
      },
      // 16. Global Search Engines (DuckDuckGo, Yahoo, Yandex, Baidu)
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/feed.xml`,
      `${baseUrl}/realestate-feed.xml`
    ],
    host: baseUrl,
  };
}
