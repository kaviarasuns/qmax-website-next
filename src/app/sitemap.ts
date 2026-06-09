import type { MetadataRoute } from "next";
import { allCaseStudiesData } from "@/store/case-studies";
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
  "/value-added-services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const staticEntries = staticRoutes.map((path) => ({
    url: `${base}${path}`,
  }));
  const caseStudyEntries = allCaseStudiesData.map((cs) => ({
    url: `${base}/case-studies/${cs.id}`,
  }));
  return [...staticEntries, ...caseStudyEntries];
}
