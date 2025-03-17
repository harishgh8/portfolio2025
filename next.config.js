/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    metadataBase:
      process.env.NODE_ENV === "development"
        ? new URL("http://localhost:3000")
        : new URL("https://yourwebsite.com"),
  },
};

module.exports = nextConfig;
