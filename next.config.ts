import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  env: {
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:4200/uploads/:path*',
      },
    ]
  },
}

export default nextConfig
