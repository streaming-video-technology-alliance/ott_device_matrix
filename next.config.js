/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(process.env.GITHUB_ACTIONS && {
    basePath: '/ott_device_matrix',
    assetPrefix: '/ott_device_matrix/',
  }),
}

module.exports = nextConfig
