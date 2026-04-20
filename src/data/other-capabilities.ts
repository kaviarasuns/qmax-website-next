/**
 * Centralized other-capabilities data.
 *
 * Each service page shows a curated list of 3 "other" capabilities to
 * cross-link related services. Define each capability once here as a
 * CapabilityBase (no image), then compose per-page arrays using `build()`,
 * which automatically assigns the rotating image set by position.
 *
 * To add or update a page's capabilities, edit the relevant export at the
 * bottom of this file.
 */

interface CapabilityBase {
  title: string;
  summary: string;
  link: string;
}

export interface Capability extends CapabilityBase {
  image: string;
}

const IMAGES = [
  "https://framerusercontent.com/images/xZdrZACUdNYgULp5M3m2BcUhBI.png",
  "https://framerusercontent.com/images/URP1Krg4uds9qGHII952XUGsc4.png",
  "https://framerusercontent.com/images/7CnP7xCaEUuDiSvOyIyHs36cw4I.png",
  "https://framerusercontent.com/images/kTPtpORfLevVY4rDMRwjeXD72sc.png",
  "https://framerusercontent.com/images/8tZqdkd46foyx5TeIzPw8YhbA.png",
  "https://framerusercontent.com/images/fwoTbHaje1iNRvuK7dPxw0nq3Kg.png",
] as const;

/** Assigns rotating images by index position. */
function build(...caps: CapabilityBase[]): Capability[] {
  return caps.map((cap, i) => ({ ...cap, image: IMAGES[i % IMAGES.length] }));
}

// ---------------------------------------------------------------------------
// Top-level service capability definitions
// ---------------------------------------------------------------------------

const hwDevelopment: CapabilityBase = {
  title: "Hardware Development Services",
  summary:
    "End-to-end hardware engineering from schematic to production, covering digital, analog, RF, and power electronics.",
  link: "/hardware-development-services",
};

const pcbDesign: CapabilityBase = {
  title: "PCB Design Services",
  summary:
    "Expert PCB layout and design for high-speed digital, analog, RF, and power electronics applications.",
  link: "/pcb-design",
};

const embeddedDev: CapabilityBase = {
  title: "Embedded System Development",
  summary:
    "Firmware development, microcontroller selection, and real-time systems optimization for reliable performance.",
  link: "/embedded-design-services",
};

const mechanicalIndustrialDesign: CapabilityBase = {
  title: "Mechanical Industrial Design",
  summary:
    "Structural engineering, CAD modeling, and enclosure design for robust mechanical solutions.",
  link: "/mechanical-industrial-design-services",
};

// ---------------------------------------------------------------------------
// Hardware Development sub-service capability definitions
// ---------------------------------------------------------------------------

const hwHighSpeedDigital: CapabilityBase = {
  title: "High-Speed Digital Design",
  summary:
    "High-performance digital systems development with expertise in multi-gigabit interfaces and complex processors.",
  link: "/hardware-development-services/high-speed-digital-design",
};

const hwAnalogDesign: CapabilityBase = {
  title: "Analog Design Services",
  summary:
    "Precision analog and mixed-signal design for sensing, measurement, and low-noise applications.",
  link: "/hardware-development-services/analog-design",
};

const hwPowerElectronics: CapabilityBase = {
  title: "Power Electronics Design",
  summary:
    "High-efficiency power converter and motor drive design for demanding industrial and consumer applications.",
  link: "/hardware-development-services/power-electorincs",
};

const hwRfMicrowave: CapabilityBase = {
  title: "RF and Microwave Design",
  summary:
    "RF front-end and microwave circuit design for wireless, radar, and communications systems.",
  link: "/hardware-development-services/rf-and-microwave",
};

// ---------------------------------------------------------------------------
// PCB Design sub-service capability definitions
// ---------------------------------------------------------------------------

const pcbHighSpeedDigital: CapabilityBase = {
  title: "High Speed Digital PCB Design",
  summary:
    "Expert PCB layout for high-speed digital interfaces including DDR, PCIe, and SerDes up to 112Gbps.",
  link: "/pcb-design/high-speed-digital-pcb-design",
};

const pcbAnalogMixedSignal: CapabilityBase = {
  title: "Analog and Mixed Signal PCB Design",
  summary:
    "Precision PCB layout for analog and mixed-signal circuits requiring low noise and high dynamic range.",
  link: "/pcb-design/analog-and-mixed-signal",
};

const pcbPowerElectronics: CapabilityBase = {
  title: "Power Electronics PCB Design",
  summary:
    "Thermal and electromagnetic PCB engineering for high-current power converters and motor drives.",
  link: "/pcb-design/power-electorinics",
};

const pcbRfMicrowave: CapabilityBase = {
  title: "RF and Microwave PCB Design",
  summary:
    "Controlled-impedance RF PCB design for wireless, radar, and high-frequency microwave applications.",
  link: "/pcb-design/rf-and-microwave-pcb-design",
};

const pcbSiPiAnalysis: CapabilityBase = {
  title: "SI & PI Analysis Services",
  summary:
    "Channel simulation and power integrity analysis to validate signal quality before fabrication.",
  link: "/pcb-design/si-pi-analysis",
};

const pcbLibraryServices: CapabilityBase = {
  title: "PCB Library Services",
  summary:
    "Accurate, standards-compliant component libraries for reliable PCB design across all platforms.",
  link: "/pcb-design/pcb-library-services",
};

const pcbDesignReview: CapabilityBase = {
  title: "PCB Design Review Services",
  summary:
    "Engineering-led design reviews that identify schematic errors, layout violations, and compliance gaps before production.",
  link: "/pcb-design/pcb-design-review-services",
};

// ---------------------------------------------------------------------------
// Mechanical & Industrial Design sub-service capability definitions
// ---------------------------------------------------------------------------

const mechanicalDesign: CapabilityBase = {
  title: "Mechanical Design Services",
  summary:
    "Precision mechanical engineering for electronics products, from concept through production-ready hardware.",
  link: "/mechanical-industrial-design-services/mechanical-design",
};

const industrialDesign: CapabilityBase = {
  title: "Industrial Design Services",
  summary:
    "Product aesthetics, user ergonomics, and form factor optimization for market-ready solutions.",
  link: "/mechanical-industrial-design-services/industrial-design",
};

// ---------------------------------------------------------------------------
// Per-page capability arrays
// ---------------------------------------------------------------------------

// /hardware-development-services
export const hwDevelopmentOtherCapabilities = build(
  pcbDesign,
  embeddedDev,
  mechanicalIndustrialDesign,
);

// /hardware-development-services/high-speed-digital-design
export const hwHighSpeedDigitalOtherCapabilities = build(
  pcbDesign,
  hwAnalogDesign,
  embeddedDev,
);

// /hardware-development-services/analog-design
export const hwAnalogDesignOtherCapabilities = build(
  hwHighSpeedDigital,
  pcbDesign,
  embeddedDev,
);

// /hardware-development-services/power-electorincs
export const hwPowerElectronicsOtherCapabilities = build(
  hwHighSpeedDigital,
  pcbDesign,
  embeddedDev,
);

// /hardware-development-services/rf-and-microwave
export const hwRfMicrowaveOtherCapabilities = build(
  hwHighSpeedDigital,
  pcbDesign,
  embeddedDev,
);

// /pcb-design
export const pcbDesignOtherCapabilities = build(
  embeddedDev,
  mechanicalIndustrialDesign,
  hwDevelopment,
);

// /pcb-design/high-speed-digital-pcb-design
export const pcbHighSpeedDigitalOtherCapabilities = build(
  hwDevelopment,
  embeddedDev,
  mechanicalIndustrialDesign,
);

// /pcb-design/analog-and-mixed-signal
export const pcbAnalogMixedSignalOtherCapabilities = build(
  hwDevelopment,
  embeddedDev,
  mechanicalIndustrialDesign,
);

// /pcb-design/power-electorinics
export const pcbPowerElectronicsOtherCapabilities = build(
  pcbHighSpeedDigital,
  pcbAnalogMixedSignal,
  pcbRfMicrowave,
);

// /pcb-design/rf-and-microwave-pcb-design
export const pcbRfMicrowaveOtherCapabilities = build(
  pcbHighSpeedDigital,
  pcbAnalogMixedSignal,
  pcbSiPiAnalysis,
);

// /pcb-design/si-pi-analysis
export const pcbSiPiAnalysisOtherCapabilities = build(
  pcbHighSpeedDigital,
  pcbAnalogMixedSignal,
  pcbRfMicrowave,
);

// /pcb-design/pcb-library-services
export const pcbLibraryServicesOtherCapabilities = build(
  pcbHighSpeedDigital,
  pcbAnalogMixedSignal,
  pcbDesignReview,
);

// /pcb-design/pcb-design-review-services
export const pcbDesignReviewOtherCapabilities = build(
  pcbHighSpeedDigital,
  pcbAnalogMixedSignal,
  pcbSiPiAnalysis,
);

// /embedded-design-services
export const embeddedDesignOtherCapabilities = build(
  hwDevelopment,
  pcbDesign,
  mechanicalIndustrialDesign,
);

// /mechanical-industrial-design-services
export const mechanicalIndustrialDesignOtherCapabilities = build(
  hwDevelopment,
  pcbDesign,
  embeddedDev,
);

// /mechanical-industrial-design-services/mechanical-design
export const mechanicalDesignOtherCapabilities = build(
  industrialDesign,
  pcbDesign,
  hwDevelopment,
);

// /mechanical-industrial-design-services/industrial-design
export const industrialDesignOtherCapabilities = build(
  mechanicalDesign,
  pcbDesign,
  hwDevelopment,
);

// ---------------------------------------------------------------------------
// Unused sub-service definitions kept for completeness
// (available for future pages to compose their own arrays)
// ---------------------------------------------------------------------------
export { hwPowerElectronics, hwRfMicrowave, pcbPowerElectronics, pcbLibraryServices };
