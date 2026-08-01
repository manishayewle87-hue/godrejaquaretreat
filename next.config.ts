import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gplwebsitecdnblob.blob.core.windows.net',
      },
    ],
  },
};

export default nextConfig;
