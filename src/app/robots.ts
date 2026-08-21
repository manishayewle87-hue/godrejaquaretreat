import { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      // 1. Google Search Engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
      // 2. Google AI Overviews & Gemini Crawlers
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // 3. OpenAI & ChatGPT Search
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      // 4. Perplexity AI Search Engine
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // 5. Anthropic Claude AI
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      // 6. Apple Siri & iOS Spotlight Search
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      // 7. Microsoft Bing & Copilot
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
