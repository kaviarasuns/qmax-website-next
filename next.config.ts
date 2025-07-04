import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["d1yetprhniwywz.cloudfront.net"],
  },
  async redirects() {
    return [
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true, // or false if you want a temporary redirect
      },
      {
        source: "/case-studies/:slug(.+).html",
        destination: "/case-studies/:slug",
        permanent: true, // Use 301 for SEO benefits
      },
      {
        source: "/embedded-design-services.html",
        destination: "/embedded-design-services",
        permanent: true,
      },
      {
        source: "/pcb-design.html",
        destination: "/pcb-design",
        permanent: true,
      },
      // ...other redirects if any...
    ];
  },
};

export default nextConfig;
