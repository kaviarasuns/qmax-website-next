import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";
import { canFdIndustrialIoControllerCaseStudy } from "@/store/embedded-case-studies-v2/can-fd-industrial-io-controller";
import { evVcuDemoPlatformCaseStudy } from "@/store/embedded-case-studies-v2/ev-vcu-demo-platform";
import { smartLubricationControllerCaseStudy } from "@/store/embedded-case-studies-v2/smart-lubrication-controller";

export const embeddedCaseStudiesV2Data: FullProductDevelopmentCaseStudy[] = [
  canFdIndustrialIoControllerCaseStudy,
  smartLubricationControllerCaseStudy,
  evVcuDemoPlatformCaseStudy,
];

export {
  canFdIndustrialIoControllerCaseStudy,
  evVcuDemoPlatformCaseStudy,
  smartLubricationControllerCaseStudy,
};
