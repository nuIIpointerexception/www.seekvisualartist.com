/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "raw.githubusercontent.com", "cdn.hashnode.com", "media.tenor.com"], // TODO: Add everything to one repo.-
  },
};

module.exports = nextConfig;
