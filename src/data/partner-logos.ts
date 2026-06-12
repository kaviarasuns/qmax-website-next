/**
 * Centralized partner/partnership logo data.
 *
 * Each service page has its own export so pages can diverge independently —
 * to customize a page, replace its alias with a page-specific array.
 */

export interface PartnerLogo {
  name: string;
  file: string;
  inset?: string;
  imageClass?: string;
}

// Smaller inset = larger logo; compensates for whitespace baked into some files.
const DEFAULT_PARTNER_LOGOS: readonly PartnerLogo[] = [
  {
    name: "Qualcomm",
    file: "qualcomm-logo.webp",
    inset: "absolute inset-2 max-[900px]:inset-1",
  },
  { name: "NXP", file: "nxp-logo-300x225.webp" },
  {
    name: "Broadcom",
    file: "Broadcom_logo.png",
    inset: "absolute inset-3 max-[900px]:inset-2",
  },
  {
    name: "Analog Devices",
    file: "analog_devices.png",
    inset: "absolute inset-2 max-[900px]:inset-1",
    imageClass: "object-contain scale-150",
  },
  { name: "onsemi", file: "Onsemi_logo.svg" },
  { name: "Infineon", file: "Infineon-Technologies-AG-logo.svg" },
  {
    name: "Rockchip",
    file: "Rockship_V2.png",
    inset: "absolute inset-1.5 max-[900px]:inset-1",
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
    inset: "absolute inset-2 max-[900px]:inset-1",
  },
  { name: "NXP", file: "nxp-logo-300x225.webp" },
  {
    name: "Analog Devices",
    file: "analog_devices.png",
    inset: "absolute inset-2 max-[900px]:inset-1",
    imageClass: "object-contain scale-150",
  },
  {
    name: "MediaTek",
    file: "mediatek.png",
    inset: "absolute inset-2 max-[900px]:inset-1",
    imageClass: "object-contain scale-150",
  },
  { name: "Ampere", file: "ampere.png" },
  { name: "Infineon", file: "Infineon-Technologies-AG-logo.svg" },
  {
    name: "Rockchip",
    file: "Rockship_V2.png",
    inset: "absolute inset-1.5 max-[900px]:inset-1",
    // The PNG has whitespace baked in; scale up to crop it out.
    imageClass: "object-contain scale-150",
  },
  { name: "Texas Instruments", file: "TexasInstruments-Logo.svg" },
  { name: "Microchip", file: "Microchip_Technology_logo.svg" },
  {
    name: "Nordic Semiconductor",
    file: "nordic-semicunductor.png",
    inset: "absolute inset-2 max-[900px]:inset-1",
    imageClass: "object-contain scale-135",
  },
  {
    name: "Silicon Labs",
    file: "siliconlabs.webp",
    inset: "absolute inset-2 max-[900px]:inset-1",
    imageClass: "object-contain scale-145",
  },
  {
    name: "ST Microelectronics",
    file: "STMicroelectronics_2025.jpg",
    inset: "absolute inset-3 max-[900px]:inset-2",
    imageClass: "object-contain scale-135",
  },
];
export const PCB_PARTNER_LOGOS = DEFAULT_PARTNER_LOGOS;
