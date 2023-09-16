/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/app",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
