import type { MetadataRoute } from "next";
import { fullProductDevelopmentCaseStudiesData } from "@/store/full-product-development-case-studies";
import { siteUrl } from "@/lib/site-url";

const staticRoutes = [
  "",
  "/about-us",
  "/careers",
  "/contact",
  "/case-studies",
  "/embedded-design-services",
  "/hardware-design-services",
  "/mechanical-industrial-design-services",
  "/pcb-design-services",
  // "/value-added-services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const staticEntries = staticRoutes.map((path) => ({
    url: `${base}${path}`,
  }));
  const caseStudyEntries = fullProductDevelopmentCaseStudiesData.map((study) => ({
    url: `${base}/case-studies/${study.slug}`,
  }));
  return [...staticEntries, ...caseStudyEntries];
}
