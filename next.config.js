const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    disable: !isProd,
    dest: 'public',
    runtimeCaching,
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
});
