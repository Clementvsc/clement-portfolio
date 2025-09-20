/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Enable SWC minification for better performance
  swcMinify: true,

  // Configure experimental features
  experimental: {
    // Enable app directory (Next.js 13+)
    appDir: true,
  },

  // Image optimization settings
  images: {
    // Optimize images for better performance
    formats: ['image/webp', 'image/avif'],
    // Allow external image domains if needed
    domains: [
      'avatars.githubusercontent.com',
      'github.com',
      'img.shields.io',
    ],
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://clement-portfolio.vercel.app',
    SITE_NAME: 'Clement Portfolio',
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Enable static exports for better deployment flexibility
  output: 'export',
  trailingSlash: true,

  // Configure build output
  distDir: '.next',

  // Disable x-powered-by header for security
  poweredByHeader: false,
};

module.exports = nextConfig;
