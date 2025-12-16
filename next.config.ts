import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output: "export",
  images: {
    unoptimized: true,
    domains: [
      "d1yetprhniwywz.cloudfront.net",
      "framerusercontent.com",
      "images.pexels.com",
      "encrypted-tbn0.gstatic.com",
      "www.cirexx.com",
    ],
  },
};

export default nextConfig;