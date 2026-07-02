import type { CaseStudy } from "../../types/case-study";
import { embeddedCaseStudiesData } from "./embedded-case-studies";
import { engineeringSupportCaseStudiesData } from "./engineering-support-case-studies";
import {
  fullProductDevelopmentCaseStudiesData,
  getFullProductDevelopmentCardImage,
} from "./full-product-development-case-studies";
import { industrialCaseStudiesData } from "./industrial-case-studies";
import { mechanicalCaseStudiesData } from "./mechanical-case-studies";
import { pcbCaseStudiesData } from "./pcb-case-studies";

// ─── Combined dataset (preserves existing navigation & related-cards logic) ───
export const allCaseStudiesData: CaseStudy[] = [
  ...embeddedCaseStudiesData,
  ...pcbCaseStudiesData,
  ...mechanicalCaseStudiesData,
  ...industrialCaseStudiesData,
  ...engineeringSupportCaseStudiesData,
];

export type CaseStudyListItem = {
  id: number;
  title: string;
  image: string;
  link: string;
  category: string;
  summary?: string;
  specs?: { label: string; value: string }[];
  stats?: { value: string; label: string };
  cardImageClassName?: string;
  cardImageZoom?: number;
  /** Rotation in degrees applied to the listing card image */
  imageRotation?: number;
};

const getCardImageIndex = (caseStudy: CaseStudy): number =>
  Math.min(
    Math.max(caseStudy.cardImageIndex ?? 0, 0),
    Math.max(caseStudy.images.length - 1, 0),
  );

/** Returns the listing-card image for a case study slug, or undefined if not found. */
export function getCaseStudyCardImage(caseStudyId: string): string | undefined {
  const caseStudy = allCaseStudiesData.find(
    (study) => study.id === caseStudyId,
  );
  if (!caseStudy?.images.length) return undefined;

  const preferred =
    caseStudy.images[getCardImageIndex(caseStudy)] ?? caseStudy.images[0];
  if (!preferred.endsWith(".mp4")) return preferred;

  return caseStudy.images.find((image) => !image.endsWith(".mp4"));
}

const toCaseStudyListItem = (
  caseStudy: CaseStudy,
  index: number,
  category: string,
): CaseStudyListItem => {
  const cardImageIndex = getCardImageIndex(caseStudy);

  return {
    id: index + 1,
    title: caseStudy.title,
    image: caseStudy.images[cardImageIndex] ?? caseStudy.images[0],
    link: "/case-studies/" + caseStudy.id,
    category,
    summary: caseStudy.summary,
    specs: caseStudy.specs,
    stats: caseStudy.stats,
    imageRotation: caseStudy.rotatedImages?.[cardImageIndex],
    cardImageZoom: caseStudy.cardImageZoom,
  };
};

export const embeddedCaseStudies = embeddedCaseStudiesData.map(
  (caseStudy, index) => toCaseStudyListItem(caseStudy, index, "development"),
);

const pcbSectionFullProductDevelopmentStudies =
  fullProductDevelopmentCaseStudiesData.filter(
    (study) => study.section === "pcb",
  );

export const pcbCaseStudies: CaseStudyListItem[] = [
  ...pcbCaseStudiesData.map((caseStudy, index) =>
    toCaseStudyListItem(caseStudy, index, "development"),
  ),
  ...pcbSectionFullProductDevelopmentStudies.map((study, index) => ({
    id: pcbCaseStudiesData.length + index + 1,
    title: study.title,
    image: getFullProductDevelopmentCardImage(study),
    link: `/case-studies/${study.slug}`,
    category: "development",
    summary: study.listingSummary,
    cardImageZoom: study.cardImageZoom,
  })),
];

export const mechanicalCaseStudies = mechanicalCaseStudiesData.map(
  (caseStudy, index) => toCaseStudyListItem(caseStudy, index, "mechanical"),
);

export const industrialCaseStudies = industrialCaseStudiesData.map(
  (caseStudy, index) => toCaseStudyListItem(caseStudy, index, "industrial"),
);

export const engineeringSupportCaseStudies = engineeringSupportCaseStudiesData.map(
  (caseStudy, index) => toCaseStudyListItem(caseStudy, index, "services"),
);

export const fullProductDevelopmentCaseStudies: CaseStudyListItem[] =
  fullProductDevelopmentCaseStudiesData
    .filter((study) => study.section !== "pcb")
    .map((study, index) => ({
      id: index + 1,
      title: study.title,
      image: getFullProductDevelopmentCardImage(study),
      link: `/case-studies/${study.slug}`,
      category: "development",
      summary: study.listingSummary,
      cardImageZoom: study.cardImageZoom,
    }));

const countPendingImages = (studies: CaseStudy[]): number => {
  return studies.filter(
    (study) =>
      study.images.length > 0 &&
      study.images[0] === "/case-studies/image_vacationing.png",
  ).length;
};

export const pendingImageCounts = {
  embedded: countPendingImages(embeddedCaseStudiesData),
  pcb: countPendingImages(pcbCaseStudiesData),
  mechanical: countPendingImages(mechanicalCaseStudiesData),
  industrial: countPendingImages(industrialCaseStudiesData),
  engineeringSupport: countPendingImages(engineeringSupportCaseStudiesData),
};

export const caseStudiesData = allCaseStudiesData;
