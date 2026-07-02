import type { ServiceCaseStudy } from "@/data/service-case-studies";
import {
  getFullProductDevelopmentCardImage,
  getFullProductDevelopmentCaseStudy,
} from "@/store/full-product-development-case-studies";

export function pcbV2ServiceCaseStudy(slug: string): ServiceCaseStudy {
  const study = getFullProductDevelopmentCaseStudy(slug);
  if (!study) {
    throw new Error(`PCB v2 case study not found: ${slug}`);
  }

  return {
    title: study.title,
    image: getFullProductDevelopmentCardImage(study),
    link: `/case-studies/${study.slug}`,
    category: "development",
    summary: study.listingSummary,
  };
}

export type PcbV2ProjectExperienceEntry = {
  id: string;
  listTitle: string;
  captionTitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  caseStudyHref: string;
};

export function pcbV2ProjectExperienceEntry(
  id: string,
  listTitle: string,
  slug: string,
  description: string,
): PcbV2ProjectExperienceEntry {
  const study = getFullProductDevelopmentCaseStudy(slug);
  if (!study) {
    throw new Error(`PCB v2 case study not found: ${slug}`);
  }

  return {
    id,
    listTitle,
    captionTitle: study.title,
    description,
    imageSrc: getFullProductDevelopmentCardImage(study),
    imageAlt: study.title,
    caseStudyHref: `/case-studies/${study.slug}`,
  };
}
