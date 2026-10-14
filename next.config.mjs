/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow Unsplash images via next/image if we ever adopt it
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Keep React 19 strict mode
  reactStrictMode: true,
};

export default nextConfig;
