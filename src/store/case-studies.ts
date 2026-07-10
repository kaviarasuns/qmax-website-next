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

const toFullProductDevelopmentListItem = (
  study: (typeof fullProductDevelopmentCaseStudiesData)[number],
  index: number,
  category: string,
): CaseStudyListItem => ({
  id: index + 1,
  title: study.title,
  image: getFullProductDevelopmentCardImage(study),
  link: `/case-studies/${study.slug}`,
  category,
  summary: study.listingSummary,
  cardImageZoom: study.cardImageZoom,
});

type FpdSection = NonNullable<
  (typeof fullProductDevelopmentCaseStudiesData)[number]["section"]
>;

/**
 * Builds the two listing variants for a section that has both legacy and v2
 * (Full Product Development) case studies:
 *   - `v2`:       only the v2/FPD-sourced entries (shown in production).
 *   - `combined`: legacy entries followed by v2 entries, with ids
 *                 re-sequenced across the full list (shown in dev).
 */
const buildSectionListVariants = (
  section: FpdSection,
  legacyData: CaseStudy[],
  category: string,
): { v2: CaseStudyListItem[]; combined: CaseStudyListItem[] } => {
  const v2 = fullProductDevelopmentCaseStudiesData
    .filter((study) => study.section === section)
    .map((study, index) =>
      toFullProductDevelopmentListItem(study, index, category),
    );

  const combined: CaseStudyListItem[] = [
    ...legacyData.map((caseStudy, index) =>
      toCaseStudyListItem(caseStudy, index, category),
    ),
    ...v2.map((study, index) => ({
      ...study,
      id: legacyData.length + index + 1,
    })),
  ];

  return { v2, combined };
};

const embeddedLists = buildSectionListVariants(
  "embedded",
  embeddedCaseStudiesData,
  "development",
);
export const embeddedCaseStudiesV2 = embeddedLists.v2;
export const embeddedCaseStudies = embeddedLists.combined;

const pcbLists = buildSectionListVariants(
  "pcb",
  pcbCaseStudiesData,
  "development",
);
export const pcbCaseStudiesV2 = pcbLists.v2;
export const pcbCaseStudies = pcbLists.combined;

const mechanicalLists = buildSectionListVariants(
  "mechanical",
  mechanicalCaseStudiesData,
  "mechanical",
);
export const mechanicalCaseStudiesV2 = mechanicalLists.v2;
export const mechanicalCaseStudies = mechanicalLists.combined;

export const industrialCaseStudies = industrialCaseStudiesData.map(
  (caseStudy, index) => toCaseStudyListItem(caseStudy, index, "industrial"),
);

export const engineeringSupportCaseStudies =
  engineeringSupportCaseStudiesData.map((caseStudy, index) =>
    toCaseStudyListItem(caseStudy, index, "services"),
  );

export const fullProductDevelopmentCaseStudies: CaseStudyListItem[] =
  fullProductDevelopmentCaseStudiesData
    .filter(
      (study) =>
        study.section !== "pcb" &&
        study.section !== "embedded" &&
        study.section !== "mechanical",
    )
    .map((study, index) =>
      toFullProductDevelopmentListItem(study, index, "development"),
    );

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
