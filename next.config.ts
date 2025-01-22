import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
      },
      {
        protocol: 'https',
        hostname: 'external-preview.redd.it'
      },
      {
        protocol: 'https',
        hostname: 'b.thumbs.redditmedia.com'
      }
    ],
  },
};

export default nextConfig;
