import { MetadataRoute } from 'next';
import { LOCATIONS } from './properties/[location]/page';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://godrejaquaretreat.godrejparkworld.com';

  const coreRoutes = [
    '',
    '/godrej-park-world-pune-masterplan',
    '/godrej-park-world-pune-aqua-lifestyle',
    '/godrej-park-world-pune-luxury-residences',
    '/godrej-park-world-pune-premium-amenities',
    '/godrej-park-world-pune-hinjewadi-location',
    '/godrej-park-world-pune-gallery',
    '/blog',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Inject Core SEO Pages (Highest Priority)
  coreRoutes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : 0.9,
    });
  });

  // 2. Inject Programmatic Location Pages (Secondary Priority)
  LOCATIONS.forEach((location) => {
    sitemapEntries.push({
      url: `${baseUrl}/properties/${location}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // 3. Inject Blog Posts (Content Marketing)
  BLOG_POSTS.forEach((post) => {
    sitemapEntries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return sitemapEntries;
}
