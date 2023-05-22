const baseConfig = require('./next.config.base');

/** @type {import('next').NextConfig} */
const nextConfig = {
...baseConfig,
experimental: {
legacyBrowsers: false,
outputFileTracingIgnores: ['canvas'],
},
};

module.exports = nextConfig;
