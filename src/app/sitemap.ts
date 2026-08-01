import { MetadataRoute } from 'next';
import { LOCATIONS } from './properties/[location]/page';
import { CLUSTERS } from './clusters/[cluster]/page';
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

  // 1. Static Pages
  const staticPages = [
    "",
    "/admin",
    "/eoi",
    "/godrej-properties-hinjewadi-pune"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.9,
  }));
  
  staticPages.forEach((entry) => sitemapEntries.push(entry));

  // 2. Inject Programmatic Location Pages (Secondary Priority)
  LOCATIONS.forEach((location) => {
    sitemapEntries.push({
      url: `${baseUrl}/properties/${location}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // 3. Inject Cluster Silos (Sister Projects / Competitor Capture)
  CLUSTERS.forEach((cluster) => {
    sitemapEntries.push({
      url: `${baseUrl}/clusters/${cluster}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  });

  // 4. Inject Blog Posts (Content Marketing)
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
