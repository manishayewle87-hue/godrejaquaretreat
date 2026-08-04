import { MetadataRoute } from 'next';
import { LOCATIONS } from './properties/[location]/page';
import { CLUSTERS } from './clusters/[cluster]/page';
import { CONFIGURATIONS } from './configurations/[config]/page';
import { AMENITIES } from './amenities/[amenity]/page';
import { INVESTMENTS } from './investments/[investment]/page';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://godrejaquaretreat.godrejparkworld.com';

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Static Pages
  const staticPages = [
    "",
    "/eoi",
    "/godrej-properties-hinjewadi-pune",
    "/godrej-park-world-pune-aqua-lifestyle",
    "/godrej-park-world-pune-gallery",
    "/godrej-park-world-pune-hinjewadi-location",
    "/godrej-park-world-pune-luxury-residences",
    "/godrej-park-world-pune-masterplan",
    "/godrej-park-world-pune-premium-amenities",
    "/blog",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.95,
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

  // 4. Inject Configuration Silos (Property Types)
  CONFIGURATIONS.forEach((config) => {
    sitemapEntries.push({
      url: `${baseUrl}/configurations/${config}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // 5. Inject Amenity Silos (Lifestyle Capture)
  AMENITIES.forEach((amenity) => {
    sitemapEntries.push({
      url: `${baseUrl}/amenities/${amenity}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // 6. Inject Investment Silos (Financial Intent)
  INVESTMENTS.forEach((investment) => {
    sitemapEntries.push({
      url: `${baseUrl}/investments/${investment}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // 7. Inject Blog Posts (Content Marketing)
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
