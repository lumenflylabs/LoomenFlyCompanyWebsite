import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.trycloudflare.com"],
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/data-deletion-instructions",
        destination: "/data-deletion",
        permanent: true,
      },
      {
        source: "/user-data-deletion",
        destination: "/data-deletion",
        permanent: true,
      },
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
