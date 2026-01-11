import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Skip problematic routes for static export
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

export default nextConfig;
