import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
    domains: ["d1yetprhniwywz.cloudfront.net"],
  },

};

export default nextConfig;
