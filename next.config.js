/* jshint esversion: 9 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Custom domain configuration - no need for basePath with custom domain
  ...(process.env.GITHUB_ACTIONS && {
    // No basePath needed for custom domain
    // No assetPrefix needed for custom domain
  }),
};

module.exports = nextConfig;
