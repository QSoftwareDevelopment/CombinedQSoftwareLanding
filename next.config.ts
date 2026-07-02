import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return [
      // Catch lives as a self-contained static page under /public/catch.
      // Serve it at the clean URL /catch.
      { source: "/catch", destination: "/catch/index.html" },
    ];
  },
};

export default nextConfig;
