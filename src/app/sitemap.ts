import { MetadataRoute } from 'next';
import { LOCATIONS } from './properties/[location]/page';
import { CLUSTERS } from './clusters/[cluster]/page';
import { CONFIGURATIONS } from './configurations/[config]/page';
import { AMENITIES } from './amenities/[amenity]/page';
import { INVESTMENTS } from './investments/[investment]/page';
import { BLOG_POSTS } from '@/data/blog';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Tier 1: Core Flagship Authority Pages (Priority 1.0 - 0.95)
  const tier1Pages: { route: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/godrej-the-retreat-hinjewadi", priority: 1.0, changeFrequency: "daily" },
    { route: "/godrej-properties-hinjewadi-pune", priority: 0.99, changeFrequency: "daily" },
    { route: "/eoi", priority: 0.98, changeFrequency: "daily" },
    { route: "/godrej-park-world-pune-masterplan", priority: 0.96, changeFrequency: "daily" },
    { route: "/godrej-park-world-pune-luxury-residences", priority: 0.96, changeFrequency: "daily" },
    { route: "/godrej-park-world-pune-aqua-lifestyle", priority: 0.95, changeFrequency: "daily" },
    { route: "/godrej-park-world-pune-premium-amenities", priority: 0.95, changeFrequency: "daily" },
    { route: "/godrej-park-world-pune-hinjewadi-location", priority: 0.95, changeFrequency: "daily" },
    { route: "/godrej-park-world-pune-gallery", priority: 0.93, changeFrequency: "daily" },
    { route: "/blog", priority: 0.90, changeFrequency: "daily" },
    { route: "/privacy-policy", priority: 0.70, changeFrequency: "monthly" },
    { route: "/terms-of-service", priority: 0.70, changeFrequency: "monthly" },
    { route: "/disclaimer", priority: 0.70, changeFrequency: "monthly" }
  ];

  tier1Pages.forEach((item) => {
    sitemapEntries.push({
      url: `${baseUrl}${item.route}`,
      lastModified: now,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    });
  });

  // 2. Tier 2: Core Configurations & Property Layouts (Priority 0.92)
  CONFIGURATIONS.forEach((config) => {
    sitemapEntries.push({
      url: `${baseUrl}/configurations/${config}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    });
  });

  // 3. Tier 3: Township Clusters & Competitor Capture Hubs (Priority 0.90)
  CLUSTERS.forEach((cluster) => {
    sitemapEntries.push({
      url: `${baseUrl}/clusters/${cluster}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.90,
    });
  });

  // 4. Tier 4: Micro-Market Location Silos (Priority 0.88)
  LOCATIONS.forEach((location) => {
    sitemapEntries.push({
      url: `${baseUrl}/properties/${location}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.88,
    });
  });

  // 5. Tier 5: Resort Lifestyle & Amenities Silos (Priority 0.86)
  AMENITIES.forEach((amenity) => {
    sitemapEntries.push({
      url: `${baseUrl}/amenities/${amenity}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.86,
    });
  });

  // 6. Tier 6: Financial ROI & Investment Silos (Priority 0.85)
  INVESTMENTS.forEach((investment) => {
    sitemapEntries.push({
      url: `${baseUrl}/investments/${investment}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  });

  // 7. Tier 7: Authority Blog & Market Insights (Priority 0.82)
  BLOG_POSTS.forEach((post) => {
    sitemapEntries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.82,
    });
  });

  return sitemapEntries;
}
