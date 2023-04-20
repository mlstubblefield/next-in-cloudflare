/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: 'edge',
  },
  eslint:{
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
