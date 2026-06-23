// Temporarily disabled — uncomment to re-enable custom robots.txt.
//
// import type { MetadataRoute } from "next";
// import { isProductionHost, siteUrl } from "@/lib/site-url";
//
// export default function robots(): MetadataRoute.Robots {
//   if (isProductionHost()) {
//     return {
//       rules: { userAgent: "*", allow: "/" },
//       sitemap: `${siteUrl()}/sitemap.xml`,
//     };
//   }
//   return {
//     rules: { userAgent: "*", disallow: "/" },
//   };
// }
