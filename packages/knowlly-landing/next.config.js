/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: {
      ssr: true,
      fileName: true,
      displayName: true,
      pure: true,
    },
  },
};

module.exports = nextConfig;
