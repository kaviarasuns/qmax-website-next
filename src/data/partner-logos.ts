/**
 * Centralized partner/partnership logo data.
 *
 * Each service page has its own export so pages can diverge independently -
 * to customize a page, replace its alias with a page-specific array.
 */

export type PartnerLogoInset = "default" | "tight" | "snug" | "medium";

export interface PartnerLogo {
  name: string;
  file: string;
  inset?: PartnerLogoInset;
  imageClass?: string;
}

// Smaller inset = larger logo; compensates for whitespace baked into some files.
const DEFAULT_PARTNER_LOGOS: readonly PartnerLogo[] = [
  {
    name: "Qualcomm",
    file: "qualcomm-logo.webp",
    inset: "tight",
  },
  { name: "NXP", file: "nxp-logo-300x225.webp" },
  {
    name: "Broadcom",
    file: "Broadcom_logo.png",
    inset: "snug",
  },
  {
    name: "Analog Devices",
    file: "analog_devices.png",
    inset: "tight",
    imageClass: "object-contain scale-150",
  },
  { name: "onsemi", file: "Onsemi_logo.svg" },
  { name: "Infineon", file: "Infineon-Technologies-AG-logo.svg" },
  {
    name: "Rockchip",
    file: "Rockship_V2.png",
    inset: "medium",
    // The PNG has whitespace baked in; scale up to crop it out.
    imageClass: "object-contain scale-150",
  },
  { name: "Texas Instruments", file: "TexasInstruments-Logo.svg" },
  { name: "Microchip", file: "Microchip_Technology_logo.svg" },
  { name: "Wolfspeed", file: "Wolfspeed_logo.svg" },
];

export const HARDWARE_PARTNER_LOGOS = DEFAULT_PARTNER_LOGOS;
export const EMBEDDED_PARTNER_LOGOS: readonly PartnerLogo[] = [
  {
    name: "Qualcomm",
    file: "qualcomm-logo.webp",
    inset: "tight",
  },
  { name: "NXP", file: "nxp-logo-300x225.webp" },
  {
    name: "Analog Devices",
    file: "analog_devices.png",
    inset: "tight",
    imageClass: "object-contain scale-150",
  },
  {
    name: "MediaTek",
    file: "mediatek.png",
    inset: "tight",
    imageClass: "object-contain scale-150",
  },
  { name: "Ampere", file: "ampere.png" },
  { name: "Infineon", file: "Infineon-Technologies-AG-logo.svg" },
  {
    name: "Rockchip",
    file: "Rockship_V2.png",
    inset: "medium",
    // The PNG has whitespace baked in; scale up to crop it out.
    imageClass: "object-contain scale-150",
  },
  { name: "Texas Instruments", file: "TexasInstruments-Logo.svg" },
  { name: "Microchip", file: "Microchip_Technology_logo.svg" },
  {
    name: "Nordic Semiconductor",
    file: "nordic-semicunductor.png",
    inset: "tight",
    imageClass: "object-contain scale-[1.35]",
  },
  {
    name: "Silicon Labs",
    file: "siliconlabs.webp",
    inset: "tight",
    imageClass: "object-contain scale-[1.45]",
  },
  {
    name: "ST Microelectronics",
    file: "STMicroelectronics_2025.jpg",
    inset: "snug",
    imageClass: "object-contain scale-[1.35]",
  },
];
export const PCB_PARTNER_LOGOS = DEFAULT_PARTNER_LOGOS;
