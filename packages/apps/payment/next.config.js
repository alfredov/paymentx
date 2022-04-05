/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // this will allow nextjs to resolve files (js, ts, css)
    // outside packages/app directory. 
    externalDir: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'off'
          }
        ],
      },
    ]
  } 
}

module.exports = nextConfig
