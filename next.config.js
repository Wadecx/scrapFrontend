/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
