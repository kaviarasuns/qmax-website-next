import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";
import { mechanicalCaseStudyContactCtaPrefix } from "@/store/mechanical-case-studies-v2/contact-cta";

const obdIiHandheldEnclosureImages = [
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/connected_on_board_diagnostic_device/Picture8.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/connected_on_board_diagnostic_device/Picture9.png",
];

export const obdIiHandheldEnclosureCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "obd-ii-handheld-enclosure",
    slug: "obd-ii-handheld-enclosure",
    section: "mechanical",
    title: "Rugged IP65 Handheld Enclosure for an OBD-II Diagnostics Device",
    subtitle:
      "Mechanical Design Case Study — Industrial Design to Volume Production",
    metaTags: [
      "Domain: Automotive",
      "Industry: Dealer Management Systems",
      "Market: North America",
    ],
    ribbonStats: [
      { value: "IP65 Sealed", label: "Enclosure Rating" },
      { value: "~250 g", label: "Rugged Handheld" },
      { value: "−20 to +55 °C", label: "Operating Range" },
      { value: "1,000s Shipped", label: "Units Deployed" },
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
        label: "Manufacturing & Production",
      },
      {
        id: "testing",
        num: "08",
        label: "Testing & Validation",
      },
      { id: "specs", num: "09", label: "Technical Specifications" },
      { id: "summary", num: "10", label: "Summary" },
    ],
    images: obdIiHandheldEnclosureImages,
    overview: [
      "A leading automotive retail SaaS provider in the USA wanted its own purpose-built hardware to acquire data directly from vehicles in dealership service lanes, and engaged Qmax Systems to develop the complete product. This case study focuses on the mechanical and industrial design of that device: a rugged, handheld OBD-II diagnostics unit engineered to survive daily professional use in automotive workshops. Qmax owned the mechanical workstream end to end — industrial design, enclosure engineering, material selection, DFM/DFA, tooling, prototyping, validation, and mass production support.",
    ],
    brief: [
      "The device is a compact, handheld OBD-II diagnostics unit used by workshop technicians and service advisors: it plugs into a vehicle's OBD-II port the moment a car arrives and streams vehicle data to the cloud. Mechanically, that means a one-handed, pocketable form factor that lives a hard life — plugged and unplugged thousands of times, dropped onto concrete floors, tossed into toolboxes, and exposed to oil, dust, and washdown in the service lane.",
      "The enclosure had to be IP65 sealed, drop-resistant, comfortable to grip, and attractive enough to sit customer-facing at the reception lane — all within a ~250 g handheld package measuring 130 × 60 × 30 mm.",
    ],
    scopeIntro:
      "Qmax Systems delivered the complete mechanical and industrial design scope for the handheld OBD-II diagnostics device:",
    scopeItems: [
      "Industrial design and styling — custom ergonomic form factor for one-handed technician use",
      "Mechanical and structural enclosure design, including internal ribbing, bosses, and PCB mounting",
      "Material and finish selection — resins, seals, gaskets, overlays, and surface textures",
      "DFM/DFA and injection mold tooling design, including mold flow and gating strategy",
      "Prototyping through 3D-printed models for ergonomic and fitment iteration before tooling",
      "Mechanical validation (drop, vibration, thermal, ingress, life cycle) and mass production support",
    ],
    challenges: [
      {
        challenge: "Custom ergonomic form factor",
        resolution:
          "Sculpted a compact, one-handed grip with balanced ~250 g weight distribution, validated through 3D-printed ergonomic prototypes with actual workshop users",
      },
      {
        challenge: "IP65 sealing on a feature-dense handheld",
        resolution:
          "Architected a complete sealing system of NBR O-rings at housing joints and silicone gaskets at every opening, verified by ingress testing",
      },
      {
        challenge: "Drop and shock resistance for workshop life",
        resolution:
          "ABS+PC enclosure with internal rib structures and shock-isolating PCB mounting, proven through repeated drop tests onto hard surfaces",
      },
      {
        challenge: "Waterproofing functional openings",
        resolution:
          "USB port, buttons, and display area each received dedicated gasketed sealing designs without compromising usability",
      },
      {
        challenge: "Heat dissipation in a sealed enclosure",
        resolution:
          "Managed internal electronics heat through conductive paths and material selection while keeping the housing fully vent-free for IP65",
      },
      {
        challenge:
          "Antenna placement for multiple radios in a constrained space",
        resolution:
          "Defined metal-free zones and keep-outs in the plastic architecture so RF performance survived the compact packaging, and supported SAR compliance for a handheld, body-worn use case",
      },
      {
        challenge: "Custom OBD connector with integrated light pipe",
        resolution:
          "Engineered a customized connector housing that channels status LED light to the plug-in point for at-a-glance feedback",
      },
      {
        challenge: "Cosmetic quality and fitment",
        resolution:
          "Hot gating for a smooth molded finish, matte surface texture chosen to conceal workshop scratches, and tight tolerance control for crisp edge finish and gap-free part fitment",
      },
    ],
    hardwareComponents: [
      {
        title: "ABS+PC blend enclosure",
        description:
          "Chosen for its balance of impact strength, dimensional stability, and moldability; all materials selected for RoHS and California Prop 65 compliance",
      },
      {
        title: "NBR O-rings",
        description:
          "Compression sealing at the main housing joints for reliable IP65 performance",
      },
      {
        title: "Silicone gaskets",
        description:
          "Sealing of openings and interfaces, retaining elasticity across −20 to +55 °C",
      },
      {
        title: "Polycarbonate display overlay",
        description:
          "Scratch-resistant, optically clear protection for the display area",
      },
      {
        title: "Matte textured mold finish",
        description:
          "Conceals scratches and fingerprints while improving grip in oily workshop hands",
      },
    ],
    interfaces: [
      {
        title: "Customized OBD-II connector with integrated light pipe",
        description:
          "The primary vehicle interface, engineered for thousands of insertion cycles",
      },
      {
        title: "USB port",
        description: "Gasket-sealed opening maintaining the IP65 rating",
      },
      {
        title: "Buttons",
        description:
          "Sealed actuator design with tactile feel preserved through the sealing membrane",
      },
      {
        title: "Display window",
        description:
          "Polycarbonate overlay bonded and gasketed into the front housing",
      },
      {
        title: "Housing parting line",
        description:
          "Continuous O-ring seal around the enclosure perimeter with controlled compression",
      },
    ],
    firmwareIntro:
      "Qmax supported the device from tooling through volume manufacturing:",
    firmwareItems: [
      {
        title: "Injection molding",
        description:
          "All enclosure parts molded in ABS+PC, with hot gating (hot runner) for smooth, blemish-free cosmetic surfaces",
      },
      {
        title: "In-house tooling design",
        description:
          "Gating, draft, and parting line placement optimized for cosmetics and mold flow",
      },
      {
        title: "DFM/DFA-driven assembly",
        description:
          "Part consolidation and assembly design for fast, repeatable production assembly",
      },
      {
        title: "Volume manufacturing",
        description:
          "Scaled to volume manufacturing — thousands of units produced, packaged, and shipped to the customer",
      },
    ],
    testingIntro:
      "Mechanical qualification was performed on production-representative units:",
    testingItems: [
      {
        title: "Drop and shock testing",
        description:
          "Passed, confirming survival of workshop drops onto hard flooring",
      },
      {
        title: "Vibration and thermal cycling",
        description: "Passed across the −20 to +55 °C operating range",
      },
      {
        title: "Water and dust ingress testing",
        description:
          "IP65 rating verified per IEC 60529 on production-representative units",
      },
      {
        title: "Fatigue, SAR, and ergonomic trials",
        description:
          "Life-cycle testing including connector insertion cycles, SAR testing for handheld use, and ergonomic usability trials — all passed",
      },
    ],
    specs: [
      { key: "Dimensions (L × W × H)", value: "130 × 60 × 30 mm" },
      { key: "Weight", value: "~250 g" },
      {
        key: "Ingress Rating",
        value: "IP65 per IEC 60529 (dust-tight, protected against water jets)",
      },
      { key: "Operating Temperature", value: "−20 °C to +55 °C" },
      {
        key: "Enclosure Materials & Finish",
        value:
          "ABS+PC blend, matte textured finish, polycarbonate display overlay",
      },
      {
        key: "Standards & Compliance",
        value:
          "IP65 (IEC 60529) | SAR-tested handheld | RoHS | California Prop 65 compliant materials",
      },
      {
        key: "Production Volume",
        value: "Thousands of units — mass manufactured and shipped to USA",
      },
      {
        key: "Scope Delivered",
        value:
          "Industrial design → enclosure engineering → tooling → validation → mass production support",
      },
    ],
    summary: [
      "Qmax Systems delivered the complete mechanical and industrial design of a rugged, IP65-rated handheld OBD-II diagnostics device — from concept sketches and ergonomic prototypes through tooling, validation, and volume manufacturing. Thousands of units have been produced and deployed in dealership service lanes, with all mechanical validation targets met.",
      "The project demonstrates Qmax's ability to take a demanding handheld product from industrial design to sealed, drop-proof, mass-manufactured reality — integrating ergonomic industrial design, IP-rated sealing architecture, RF-aware plastic engineering, and DFM/DFA-driven injection molding into a single mechanical workstream.",
      "Qmax Systems delivers mechanical engineering end to end — industrial design, enclosure and structural design, material selection, DFM/DFA, injection mold tooling, prototyping, environmental validation, and mass production support.",
    ],
    contactCtaPrefix: mechanicalCaseStudyContactCtaPrefix,
    listingSummary:
      "Mechanical design case study — rugged IP65 handheld OBD-II enclosure from industrial design through tooling, validation, and volume production.",
    metadata: {
      title:
        "Rugged IP65 Handheld OBD-II Enclosure | Mechanical Design Case Study",
      description:
        "Mechanical design case study — IP65 sealed handheld OBD-II diagnostics enclosure, from ergonomic industrial design through injection molding and environmental validation.",
    },
  };
