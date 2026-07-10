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
  relatedSlugOrImageIndex?: string | number,
  imageIndex?: number,
): PcbV2ProjectExperienceEntry {
  const relatedSlug =
    typeof relatedSlugOrImageIndex === "string"
      ? relatedSlugOrImageIndex
      : undefined;
  const resolvedImageIndex =
    typeof relatedSlugOrImageIndex === "number"
      ? relatedSlugOrImageIndex
      : imageIndex;

  const study = getFullProductDevelopmentCaseStudy(slug);
  if (!study) {
    throw new Error(`PCB v2 case study not found: ${slug}`);
  }

  const imageStudy = relatedSlug
    ? getFullProductDevelopmentCaseStudy(relatedSlug)
    : study;
  if (!imageStudy) {
    throw new Error(`PCB v2 related case study not found: ${relatedSlug}`);
  }

  const imageSrc =
    resolvedImageIndex !== undefined
      ? imageStudy.images[resolvedImageIndex]
      : getFullProductDevelopmentCardImage(imageStudy);
  if (!imageSrc) {
    throw new Error(
      `Image index ${resolvedImageIndex} out of range for: ${relatedSlug ?? slug}`,
    );
  }

  return {
    id,
    listTitle,
    captionTitle: imageStudy.title,
    description,
    imageSrc,
    imageAlt: imageStudy.title,
    caseStudyHref: `/case-studies/${imageStudy.slug}`,
  };
}
