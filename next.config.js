/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable Tailwind CSS via PostCSS (handled by tailwind.config.js and postcss.config.js)
  // No additional webpack config needed for basic Tailwind usage
};

module.exports = nextConfig;