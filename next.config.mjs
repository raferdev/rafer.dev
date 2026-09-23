/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  eslint: {
    ignoreDuringBuilds: true,
  },
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
