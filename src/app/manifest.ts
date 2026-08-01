import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Godrej Park World | The Aqua Retreat',
    short_name: 'Godrej Aqua Retreat',
    description: 'Premium resort-style living at Godrej Park World, Hinjewadi Phase 1, Pune.',
    start_url: '/',
    display: 'standalone',
    background_color: '#15181E',
    theme_color: '#0D211C',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
