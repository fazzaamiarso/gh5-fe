/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_API: "https://12bb-111-67-81-50.ngrok-free.app/api",
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
