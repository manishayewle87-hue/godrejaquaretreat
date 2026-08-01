import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://godrejaquaretreat.godrejparkworld.com';

  const routes = [
    '',
    '/godrej-park-world-pune-masterplan',
    '/godrej-park-world-pune-aqua-lifestyle',
    '/godrej-park-world-pune-luxury-residences',
    '/godrej-park-world-pune-premium-amenities',
    '/godrej-park-world-pune-hinjewadi-location',
    '/godrej-park-world-pune-gallery',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.9,
  }));
}
