/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/lu-ocp-website',
    assetPrefix: '/lu-ocp-website/',
  } : {}),
}

module.exports = nextConfig 