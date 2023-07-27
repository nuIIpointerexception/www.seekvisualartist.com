// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === 'dev' ? 'dev' : '.next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: outputDir,
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  experimental: {
    legacyBrowsers: false,
    swcFileReading: true,
    appDir: true,
  },
  optimizeFonts: true,
  productionBrowserSourceMaps: isProduction,
  swcMinify: !isProduction,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
