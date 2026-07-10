import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const rfPlasmaGeneratorEnclosureImages = [
  "/case-studies/mechanicalCaseStudies/4/PG10_RENDER_28_OCT_2024_MG1.1.png",
  "/case-studies/mechanicalCaseStudies/4/PG10_RENDER_28_OCT_2024_MG1.2.png",
  "/case-studies/mechanicalCaseStudies/4/PG10_RENDER_28_OCT_2024_MG1.3.png",
];

export const rfPlasmaGeneratorEnclosureCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "rf-plasma-generator-enclosure",
    slug: "rf-plasma-generator-enclosure",
    section: "mechanical",
    title: "EMI-Shielded Enclosure Design for a 1 kW RF Plasma Generator",
    subtitle:
      "Mechanical Design Case Study — EMI Shielding, Thermal Architecture & TÜV Certification",
    metaTags: [
      "Domain: Semiconductor",
      "Industry: Plasma Processing Equipment",
      "Market: Global",
    ],
    ribbonStats: [
      { value: "1 kW RF", label: "Continuous Operation" },
      { value: "3-Layer", label: "EMI Shielding Architecture" },
      { value: "TÜV Certified", label: "CISPR 11 Class A, Group 2" },
      { value: "3U Half-Rack", label: "~3 kg Modular Chassis" },
    ],
    navSections: [
      { id: "overview", num: "01", label: "Project Overview" },
      { id: "brief", num: "02", label: "Product Brief" },
      { id: "scope", num: "03", label: "Qmax Scope" },
      { id: "challenges", num: "04", label: "Design Challenges & Resolutions" },
      {
        id: "components",
        num: "05",
        label: "Materials & Key Mechanical Components",
      },
      {
        id: "interfaces",
        num: "06",
        label: "Sealed Openings & External Interfaces",
      },
      {
        id: "firmware",
        num: "07",
        label: "Manufacturing & Validation",
      },
      { id: "specs", num: "08", label: "Technical Specifications" },
      { id: "summary", num: "09", label: "Summary" },
    ],
    images: rfPlasmaGeneratorEnclosureImages,
    overview: [
      "An OEM supplying plasma-generation equipment to the semiconductor industry approached Qmax Systems with a clear business problem: comparable RF generators on the market were expensive and carried long lead times, and the company wanted its own product. Qmax developed the complete 1 kW RF plasma generator; this case study covers the mechanical engineering — an enclosure where every panel, shield, heatsink, and even fastener behaves as an RF component. Qmax owned the mechanical workstream end to end: enclosure architecture, multi-layer EMI shielding design, thermal and airflow engineering, sheet-metal DFM, prototyping, compliance testing support through TÜV certification, and production.",
      "For the complete electronics and firmware story, see the RF Signal Generator Enclosure full product development case study at /case-studies/rf-signal-generator-enclosure.",
    ],
    brief: [
      "The product is a 1000 W RF generator producing cold plasma for wafer cleaning in semiconductor manufacturing — a half-width 3U rack-mount industrial controller that runs continuously at full power. Mechanically, it is one of the hardest classes of enclosure to engineer: kilowatt-level RF must be contained inside a chassis that simultaneously breathes enough air to cool a large RF transformer and power stages, while the instrument itself sits beside a plasma chamber radiating massive external RF that must be kept out.",
      "Shielding, cooling, safety isolation, and serviceability all compete for the same sheet metal — and the enclosure had to clear EMC and safety certification at Class A industrial levels.",
    ],
    scopeIntro:
      "Qmax Systems delivered the complete mechanical engineering scope for the 1 kW RF plasma generator:",
    scopeItems: [
      "Mechanical architecture of a half-width 3U rack enclosure for continuous kilowatt-class RF operation",
      "Three-layer EMI shielding design — enclosure, internal shields, and module-level segregation engineered jointly by mechanical and RF engineers",
      "Thermal and airflow engineering — end-to-end forced-air path with acoustic noise management",
      "Material and finish selection for shielding effectiveness, grounding, and industrial durability",
      "Sheet-metal DFM, prototyping, and modular assembly design for production and field service",
      "Testing and validation through EMC, safety, and thermal programs to TÜV certification and volume manufacturing",
    ],
    challenges: [
      {
        challenge: "Containing kilowatt-level RF emissions",
        resolution:
          "At kW power, even small enclosure gaps leak enough RF to fail radiated emission limits; a three-layer shielding architecture (grounded enclosure, internal copper/steel shields, and module segregation) achieved EN 55011 / CISPR 11 Class A, Group 2 and EN 55032 Class A compliance",
      },
      {
        challenge: "Shielding that breathes",
        resolution:
          "An engineered stainless steel honeycomb vent acts as a waveguide-below-cutoff barrier: cooling air flows freely through it while kilowatt-level RF cannot escape",
      },
      {
        challenge: "One part, three jobs",
        resolution:
          "An innovative skived copper heatsink was engineered to serve simultaneously as heatsink, RF shield, and electrical reference plane, saving space and parts while improving both thermal and EMI performance",
      },
      {
        challenge: "Dissipating heavy RF transformer heat",
        resolution:
          "The heatsink and duct geometry were shaped so the transformer's heat is swept into the main airflow path without opening shielding gaps, supporting continuous full-power operation",
      },
      {
        challenge: "End-to-end airflow design",
        resolution:
          "Air enters one end of the chassis and exits the other, sweeping every module in sequence with high-speed fans, with duct shaping to keep airflow acoustic noise low",
      },
      {
        challenge: "High-voltage safety isolation",
        resolution:
          "Multiple HV points required controlled clearance and creepage distances in the mechanical layout, meeting EN 61010-1 electrical safety with proper grounding provisions",
      },
      {
        challenge: "Mechanical parts as RF components",
        resolution:
          "Shields were designed to avoid altering the electrical characteristics of inductors and transmission lines; enclosure panels, heatsinks, screws, and wire routing were all treated as part of the RF circuit, with mechanical and RF engineers designing together, down to module orientation",
      },
      {
        challenge: "Immunity in a hostile RF environment",
        resolution:
          "The generator operates beside a plasma chamber radiating massive RF; the same shielding system blocks external interference from entering, meeting EN 55035 immunity requirements",
      },
    ],
    hardwareComponents: [
      {
        title: "Powder-coated MS sheet-metal enclosure",
        description:
          "Rigid, cost-effective industrial housing with a durable finish",
      },
      {
        title: "Tin-plated, grounded MS internal chassis surfaces",
        description:
          "Low-impedance, corrosion-stable metal-to-metal bonding for shielding effectiveness",
      },
      {
        title: "Skived copper heatsink",
        description:
          "Chosen for maximum thermal conductivity while doubling as RF shield and reference plane",
      },
      {
        title: "Stainless steel honeycomb vent panels",
        description: "EMI-tight ventilation at kilowatt RF power levels",
      },
      {
        title: "Copper and steel internal shield partitions",
        description:
          "Section-by-section RF segregation inside the managed airflow path, with high-speed cooling fans",
      },
    ],
    interfaces: [
      {
        title: "RF output connector",
        description:
          "Precision panel opening with 360° shield bonding at the primary power interface",
      },
      {
        title: "Honeycomb air intake and exhaust panels",
        description:
          "The only large openings in the chassis, EMI-sealed by design",
      },
      {
        title: "AC power inlet and control/interface connector cutouts",
        description:
          "Filtered, gasketed penetrations preserving shield integrity",
      },
      {
        title: "Chassis grounding provisions",
        description:
          "Dedicated bonding points supporting safety and EMC performance",
      },
      {
        title: "Rack integration and panel marking",
        description:
          "Half-width 3U mounting features with laser-engraved and screen-printed panel identification",
      },
    ],
    firmwareIntro:
      "Qmax supported the enclosure from sheet-metal prototyping through TÜV certification and production deployment:",
    firmwareItems: [
      {
        title: "Precision sheet-metal fabrication",
        description:
          "Enclosure, internal shields, and mounting structures fabricated to tight tolerances",
      },
      {
        title: "Finishing chain",
        description:
          "Tin plating (conductive internal surfaces) and powder coating (exterior), with laser engraving and screen printing for panel marking",
      },
      {
        title: "Modular mechanical architecture",
        description:
          "SMPS, digital control, RF amplifier, and filter sections built as separate modules for fast assembly and easy field maintenance",
      },
      {
        title: "Volume production",
        description:
          "Production units manufactured and deployed in the field following TÜV certification",
      },
      {
        title: "Radiated and conducted emissions",
        description:
          "Passed EN 55011 / CISPR 11 (Class A, Group 2) and EN 55032 Class A",
      },
      {
        title: "EMC immunity",
        description:
          "Passed EN 55035, validating operation beside high-power plasma chambers",
      },
      {
        title: "Electrical safety",
        description: "Met EN 61010-1 with TÜV certification completed",
      },
      {
        title: "Thermal cycling",
        description:
          "Continuous full-power operation across 0 to +60 °C — passed",
      },
    ],
    specs: [
      {
        key: "Form Factor",
        value: "Half-width 3U rack-mount enclosure",
      },
      { key: "Weight", value: "~3 kg" },
      {
        key: "Ingress Rating",
        value: "IP40 (rack-mount industrial equipment)",
      },
      {
        key: "Operating Temperature",
        value: "0 °C to +60 °C, continuous full-power operation",
      },
      {
        key: "Enclosure Materials & Finish",
        value:
          "Powder-coated MS sheet metal; tin-plated grounded internal chassis; skived copper heatsink; stainless steel honeycomb vents",
      },
      {
        key: "Mechanical Architecture",
        value:
          "Modular SMPS / control / RF amplifier / filter sections",
      },
      {
        key: "Standards & Compliance",
        value:
          "EN 55011 / CISPR 11 (Class A, Group 2) | EN 55032 Class A | EN 55035 | EN 61010-1 | RoHS | TÜV certified",
      },
      {
        key: "Scope Delivered",
        value:
          "Enclosure architecture → EMI shielding → thermal/airflow → sheet-metal DFM → TÜV certification support → production",
      },
    ],
    summary: [
      "Qmax Systems delivered the complete mechanical design of a 1 kW RF plasma generator — a TÜV-certified, half-width 3U rack enclosure in which the sheet metal, shields, honeycomb vents, and a triple-duty skived copper heatsink work together as both a cooling system and an RF circuit. The product cleared Class A industrial EMC and EN 61010-1 safety requirements, and is manufactured and deployed in semiconductor fabs, giving the customer a cost-effective, readily available alternative to expensive long-lead-time incumbents.",
      "The project demonstrates Qmax's rare combination of mechanical, thermal, and RF shielding engineering under one roof — treating every enclosure panel, heatsink, vent, and fastener as part of the RF circuit while delivering forced-air cooling, high-voltage safety isolation, and modular serviceability in a single 3U chassis.",
      "Qmax Systems engineers EMI-shielded enclosures, thermal and airflow architectures, and sheet-metal designs for high-power RF, industrial, and semiconductor equipment — from concept through EMC/safety certification and volume production.",
    ],
    contactCtaPrefix:
      "Designing high-power RF or EMI-critical equipment? Contact Qmax Systems at",
    listingSummary:
      "Mechanical design case study — EMI-shielded 1 kW RF plasma generator enclosure with three-layer shielding, honeycomb vents, and TÜV certification.",
    metadata: {
      title:
        "EMI-Shielded 1 kW RF Plasma Generator Enclosure | Mechanical Design Case Study",
      description:
        "Mechanical design case study — TÜV-certified half-width 3U rack enclosure for a 1 kW RF plasma generator, with three-layer EMI shielding and forced-air thermal architecture.",
    },
  };
