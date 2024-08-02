const { hostname } = require('os')
const { withStoreConfig } = require('./store-config')
const store = require('./store.config.json')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:'http',
        hostname:'tailwindui.com'
      },
      {
        protocol:'https',
        hostname:'tailwindui.com'
      },
      {
        protocol:'http',
        hostname:'anvogue.vercel.app'
      },
      {
        protocol:'https',
        hostname: 'anvogue.vercel.app'
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'http',
        hostname:'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname:'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'medusa-server-testing.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'medusa-server-testing.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname:'asset.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'medusa-server-testing.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'medusa-server-testing.s3.us-east-1.amazonaws.com',
      },
    ],
  },
})

console.log('next.config.js', JSON.stringify(module.exports, null, 2))

module.exports = nextConfig