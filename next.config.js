/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    TEST_TOKEN: process.env.NEXT_PUBLIC_TEST_TOKEN,
  },
  images: {
    domains: ['knowllydev-web.hkpark.net'],
  },
};

module.exports = withInterceptStdout(nextConfig, (text) =>
  text.includes('Duplicate atom key') ? '' : text
);
