import {
  type RelatedCaseStudy,
  type RelatedCaseStudyImage,
} from "@/components/services-cmp/RelatedCaseStudiesCarousel";
import { advancedModularMedicalSimulatorCaseStudy } from "@/store/full-product-development-case-studies/advanced-modular-medical-simulator";
import { canFdIndustrialIoControllerCaseStudy } from "@/store/full-product-development-case-studies/can-fd-industrial-io-controller";
import { coldStorageIotMonitoringSystemCaseStudy } from "@/store/full-product-development-case-studies/cold-storage-iot-monitoring-system";
import { fortyPort10gbeCoreRouterLineCardCaseStudy } from "@/store/pcb-case-studies-v2/40-port-10gbe-core-router-line-card";
import { highCapacityAtcaLineCardCaseStudy } from "@/store/pcb-case-studies-v2/high-capacity-atca-line-card";
import { highDensityPcbDesignAiGpuChassisMotherboardCaseStudy } from "@/store/pcb-case-studies-v2/high-density-pcb-design-ai-gpu-chassis-motherboard";
import { highDensityPcbDesignGponOltCaseStudy } from "@/store/pcb-case-studies-v2/high-density-pcb-design-gpon-olt";
import { multiFapPacketProcessingLineCardCaseStudy } from "@/store/pcb-case-studies-v2/multi-fap-packet-processing-line-card";
import { obdIiDiagnosticsDeviceCaseStudy } from "@/store/full-product-development-case-studies/obd-ii-diagnostics-device";
import { outdoorWifi6AccessPointCaseStudy } from "@/store/full-product-development-case-studies/outdoor-wifi-6-access-point";
import { terabitSwitchFabricBoardCaseStudy } from "@/store/pcb-case-studies-v2/terabit-switch-fabric-board";
import { wifi6eCybersecurityGatewayCaseStudy } from "@/store/full-product-development-case-studies/wifi-6e-cybersecurity-gateway";
import { ruggedAndroidDigitalSignagePlayerCaseStudy } from "./full-product-development-case-studies/rugged-android-digital-signage-player";
import { evVcuDemoPlatformCaseStudy } from "@/store/full-product-development-case-studies/ev-vcu-demo-platform";
import { smartLubricationControllerCaseStudy } from "@/store/full-product-development-case-studies/smart-lubrication-controller";

export type FullProductDevelopmentNavSection = {
  id: string;
  num: string;
  label: string;
};

export type FullProductDevelopmentChallenge = {
  challenge: string;
  resolution: string;
};

export type FullProductDevelopmentCard = {
  title: string;
  description: string;
};

export type FullProductDevelopmentSpec = {
  key: string;
  value: string;
};

export type FullProductDevelopmentCaseStudy = {
  id: string;
  slug: string;
  /** Listing section override for /case-studies. Defaults to "Full Product Development". */
  section?: "pcb" | "embedded";
  title: string;
  subtitle?: string;
  metaTags: string[];
  ribbonStats: { value: string; label: string }[];
  navSections: FullProductDevelopmentNavSection[];
  images: string[];
  cardImageIndex?: number;
  /** Scale multiplier applied to the listing-card thumbnail (e.g. 1.3 enlarges by 30%) */
  cardImageZoom?: number;
  /** Map of zero-based image index to scale multiplier for the header carousel (e.g. { 5: 1.3 }) */
  enlargedImages?: Record<number, number>;
  overview: string[];
  brief: string[];
  scopeIntro: string;
  scopeItems: string[];
  challenges: FullProductDevelopmentChallenge[];
  hardwareComponents: FullProductDevelopmentCard[];
  interfaces: FullProductDevelopmentCard[];
  firmwareIntro?: string;
  firmwareItems: FullProductDevelopmentCard[];
  specs: FullProductDevelopmentSpec[];
  summary: string[];
  /** Text before the contact email link in the summary CTA. */
  contactCtaPrefix?: string;
  listingSummary: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const fullProductDevelopmentCaseStudiesData: FullProductDevelopmentCaseStudy[] =
  [
    canFdIndustrialIoControllerCaseStudy,
    smartLubricationControllerCaseStudy,
    evVcuDemoPlatformCaseStudy,
    ruggedAndroidDigitalSignagePlayerCaseStudy,
    obdIiDiagnosticsDeviceCaseStudy,
    wifi6eCybersecurityGatewayCaseStudy,
    outdoorWifi6AccessPointCaseStudy,
    coldStorageIotMonitoringSystemCaseStudy,
    advancedModularMedicalSimulatorCaseStudy,
    highDensityPcbDesignGponOltCaseStudy,
    highDensityPcbDesignAiGpuChassisMotherboardCaseStudy,
    highCapacityAtcaLineCardCaseStudy,
    terabitSwitchFabricBoardCaseStudy,
    fortyPort10gbeCoreRouterLineCardCaseStudy,
    multiFapPacketProcessingLineCardCaseStudy,
  ];

export function getFullProductDevelopmentCaseStudy(
  slug: string,
): FullProductDevelopmentCaseStudy | undefined {
  return fullProductDevelopmentCaseStudiesData.find(
    (study) => study.slug === slug,
  );
}

export function getFullProductDevelopmentCardImage(
  study: FullProductDevelopmentCaseStudy,
): string {
  const index = Math.min(
    Math.max(study.cardImageIndex ?? 0, 0),
    Math.max(study.images.length - 1, 0),
  );
  const preferred = study.images[index] ?? study.images[0];
  if (!preferred?.endsWith(".mp4")) return preferred;

  return study.images.find((image) => !image.endsWith(".mp4")) ?? preferred;
}

export type ToRelatedCaseStudyOptions = {
  /** Override the card title (defaults to the case study's title). */
  title?: string;
  /** Pick specific preview images by their index in `study.images`. */
  imageIndices?: number[];
  /** Provide preview images explicitly (takes precedence over `imageIndices`). */
  images?: Array<string | RelatedCaseStudyImage>;
  /** Rotation applied to string-based images. */
  rotation?: number;
};

export function toRelatedCaseStudy(
  study: FullProductDevelopmentCaseStudy,
  options: ToRelatedCaseStudyOptions = {},
): RelatedCaseStudy {
  const { title, imageIndices, images, rotation } = options;

  const resolvedImages =
    images ??
    imageIndices
      ?.map((index) => study.images[index])
      .filter((src): src is string => Boolean(src));

  return {
    title: title ?? study.title,
    href: `/case-studies/${study.slug}`,
    ...(rotation !== undefined ? { rotation } : {}),
    ...(resolvedImages?.length
      ? { images: resolvedImages }
      : { image: getFullProductDevelopmentCardImage(study) }),
  };
}
