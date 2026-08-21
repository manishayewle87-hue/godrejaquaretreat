import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Godrej The Retreat Hinjewadi | Godrej Park World Pune',
    short_name: 'Godrej The Retreat',
    description: 'Ultra-luxury resort-style 2 & 3 BHK residences at Godrej The Retreat, Godrej Park World Hinjewadi Phase 1, Pune.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#15181E',
    theme_color: '#0D211C',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/aqua-logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'Priority EOI',
        url: '/eoi',
        description: 'Submit Expression of Interest for Priority Allotment',
      },
      {
        name: 'Master Plan',
        url: '/godrej-park-world-pune-masterplan',
        description: 'Explore the 3.5+ Acre Central Green Masterplan',
      },
      {
        name: 'Floor Plans & Pricing',
        url: '/configurations/2-bhk-apartments',
        description: 'Explore 2 & 3 BHK Layouts & Pricing',
      },
    ],
  };
}
