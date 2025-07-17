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
      // Specific redirects for case study pages
      {
        source: "/Embedded-Case-study.html",
        destination: "/Embedded-Case-study",
        permanent: true,
      },
      {
        source: "/PCB-Design-Case-study.html",
        destination: "/PCB-Design-Case-study",
        permanent: true,
      },
      // General pattern to handle all .html extensions
      {
        source: "/:path(.+).html",
        destination: "/:path",
        permanent: true,
      },
      {
        source: "/Qmax_Systems_Electronics_Engineering_Services_Std.pdf",
        destination:
          "https://d1yetprhniwywz.cloudfront.net/brochure/qmaxsystems_electronic_engineering_services_29_jan_2024.pdf",
        permanent: true, // 308 redirect
      },
      // ...other redirects if any...
    ];
  },
};

export default nextConfig;
