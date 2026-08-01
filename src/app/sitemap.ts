import { MetadataRoute } from 'next';

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
  ];

  const programmaticLocations = [
    "hinjewadi", "wakad", "baner", "balewadi", "mahalunge", 
    "kharadi", "viman-nagar", "kalyani-nagar", "koregaon-park",
    "pimple-saudagar", "aundh", "bavdhan", "tathawade", "punawale"
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
  programmaticLocations.forEach((location) => {
    sitemapEntries.push({
      url: `${baseUrl}/properties/${location}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return sitemapEntries;
}
