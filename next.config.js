/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')

const plugins = [
  [
    withTM,
    {
      transpileModules: ['react-syntax-highlighter']
    }
  ]
]

const nextConfig = {
  webpack5: true,
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = withPlugins([...plugins], nextConfig)
