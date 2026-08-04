import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.trycloudflare.com"],
  async redirects() {
    return [
      {
        source: "/terms-conditions",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;