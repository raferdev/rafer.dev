/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx', 'ts'],
  compress: true,
  compiler: {
    removeConsole: true,
  },

  webpack: (config) => {
    config.experiments.topLevelAwait = true

    return config
  },
  poweredByHeader: false,
}

export default nextConfig
