/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['t3.gstatic.com', 'cdn.pixabay.com'],
  },
}

module.exports = nextConfig
