/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    TEST_TOKEN: process.env.NEXT_PUBLIC_TEST_TOKEN,
  },
};

module.exports = nextConfig;
