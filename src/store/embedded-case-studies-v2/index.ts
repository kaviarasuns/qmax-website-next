import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";
import { advancedModularMedicalSimulatorCaseStudy } from "@/store/embedded-case-studies-v2/advanced-modular-medical-simulator";
import { canFdIndustrialIoControllerCaseStudy } from "@/store/embedded-case-studies-v2/can-fd-industrial-io-controller";
import { evVcuDemoPlatformCaseStudy } from "@/store/embedded-case-studies-v2/ev-vcu-demo-platform";
import { outdoorWifi6AccessPointCaseStudy } from "@/store/embedded-case-studies-v2/outdoor-wifi-6-access-point";
import { smartLubricationControllerCaseStudy } from "@/store/embedded-case-studies-v2/smart-lubrication-controller";

export const embeddedCaseStudiesV2Data: FullProductDevelopmentCaseStudy[] = [
  canFdIndustrialIoControllerCaseStudy,
  smartLubricationControllerCaseStudy,
  evVcuDemoPlatformCaseStudy,
  outdoorWifi6AccessPointCaseStudy,
  advancedModularMedicalSimulatorCaseStudy,
];

export {
  advancedModularMedicalSimulatorCaseStudy,
  canFdIndustrialIoControllerCaseStudy,
  evVcuDemoPlatformCaseStudy,
  outdoorWifi6AccessPointCaseStudy,
  smartLubricationControllerCaseStudy,
};
