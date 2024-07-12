/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API: "http://34.101.147.150:8080/api",
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgtr.ee",
      },
    ],
  },
};

export default nextConfig;
