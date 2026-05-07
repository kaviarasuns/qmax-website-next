/**
 * Centralized other-capabilities data.
 *
 * All service pages share the same 3 capability cards and images.
 * Every per-page export is an alias of `otherCapabilities` so no
 * page file needs to change.
 */

export interface Capability {
  title: string;
  summary: string;
  link: string;
  image: string;
}

export const hardwareDevelopmentOtherCapabilities: Capability[] = [
  {
    title: "PCB Design Services",
    summary:
    "PCB design services for digital, analog, RF, and power electronics systems.",
    link: "/pcb-design",
    image: "https://d1yetprhniwywz.cloudfront.net/v2/hardware-development-services/pcb_design_services.webp",

  },
  {
    title: "Firmware Development Services",
    summary:
      "Firmware development, microcontroller selection, and real-time systems optimization for reliable performance.",
    link: "/pcb-design",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/hardware-development-services/firmware_development_services.webp",
  },
  {
    title: "Apps and Cloud",
    summary:
      "Build full-stack software that connects devices to digital experiences.",
    link: "/apps-and-cloud",
    image:
    "https://d1yetprhniwywz.cloudfront.net/v2/hardware-development-services/apps&cloud_services.webp",
  },
];

export const otherCapabilities: Capability[] = [
  {
    title: "Hardware Development Services",
    summary:
      "End-to-end hardware engineering from schematic to production, covering digital, analog, RF, and power electronics.",
    link: "/hardware-development-services",
    image:
      "https://framerusercontent.com/images/xZdrZACUdNYgULp5M3m2BcUhBI.png",
  },
  {
    title: "Firmware Development Services",
    summary:
      "Firmware development, microcontroller selection, and real-time systems optimization for reliable performance.",
    link: "/pcb-design",
    image:
      "https://framerusercontent.com/images/URP1Krg4uds9qGHII952XUGsc4.png",
  },
  {
    title: "Apps and Cloud",
    summary:
      "Build full-stack software that connects devices to digital experiences.",
    link: "/apps-and-cloud",
    image: "https://framerusercontent.com/images/8tZqdkd46foyx5TeIzPw8YhbA.png",
  },
];

// ---------------------------------------------------------------------------
// Per-page aliases — every page imports its own name but gets the same cards
// ---------------------------------------------------------------------------

export const hwDevelopmentOtherCapabilities = otherCapabilities;
export const hwHighSpeedDigitalOtherCapabilities = otherCapabilities;
export const hwAnalogDesignOtherCapabilities = otherCapabilities;
export const hwPowerElectronicsOtherCapabilities = otherCapabilities;
export const hwRfMicrowaveOtherCapabilities = otherCapabilities;

export const pcbDesignOtherCapabilities = otherCapabilities;
export const pcbHighSpeedDigitalOtherCapabilities = otherCapabilities;
export const pcbAnalogMixedSignalOtherCapabilities = otherCapabilities;
export const pcbPowerElectronicsOtherCapabilities = otherCapabilities;
export const pcbRfMicrowaveOtherCapabilities = otherCapabilities;
export const pcbSiPiAnalysisOtherCapabilities = otherCapabilities;
export const pcbLibraryServicesOtherCapabilities = otherCapabilities;
export const pcbDesignReviewOtherCapabilities = otherCapabilities;

export const embeddedDesignOtherCapabilities = otherCapabilities;

export const mechanicalIndustrialDesignOtherCapabilities = otherCapabilities;
export const mechanicalDesignOtherCapabilities = otherCapabilities;
export const industrialDesignOtherCapabilities = otherCapabilities;
