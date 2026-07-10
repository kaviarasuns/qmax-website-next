import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const signageAluminumEnclosureImages = [
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/tekion_ott/teck_new_v1.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/tekion_ott/teck_new_v2.png",
];

export const signageAluminumEnclosureCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "signage-aluminum-enclosure",
    slug: "signage-aluminum-enclosure",
    section: "mechanical",
    title:
      "Premium CNC-Machined Aluminum Fanless Enclosure for a 4K Digital Signage Player",
    subtitle:
      "Mechanical Design Case Study — Passive Thermal Architecture to Volume Production",
    metaTags: [
      "Domain: Commercial",
      "Industry: Digital Signage",
      "Market: North America",
    ],
    ribbonStats: [
      { value: "CNC Aluminum", label: "Premium Machined Enclosure" },
      { value: "Fanless 24/7", label: "Enclosure as Heatsink" },
      { value: "IP54", label: "Per IEC 60529" },
      { value: "2,000+ Shipped", label: "Units Deployed" },
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
    images: signageAluminumEnclosureImages,
    enlargedImages: { 7: 1.2, 8: 1.3 },
    overview: [
      "A leading automotive retail SaaS provider in the USA needed its own media player product to display managed signage content alongside live TV in the customer lounges of luxury car showrooms — environments where the hardware itself is on display and must look the part. The customer's brief was explicit: the enclosure had to look and feel premium. Qmax Systems delivered the complete product; this case study covers the mechanical and industrial design — a sleek, CNC-machined aluminum enclosure that doubles as the product's heatsink, enabling silent, fanless 24/7 operation. Qmax owned the mechanical workstream end to end: industrial design, thermal architecture, machining and finishing design, DFM, prototyping, validation, and mass production support.",
      "For the complete electronics and firmware story, see the Rugged Android Digital Signage Player full product development case study at /case-studies/rugged-android-digital-signage-player.",
    ],
    brief: [
      "The product is a fanless, wall-mountable 4K digital signage media appliance installed behind or beside commercial displays in showroom lounges. Mechanically, it is defined by two competing demands: showroom-grade aesthetics — a sand-blasted, matte black anodized aluminum body that belongs in a luxury retail space — and hard engineering reality: a quad-core media processor decoding 4K video around the clock across multiple wired and wireless interfaces, generating significant sustained heat that must be removed silently, with no fan, no vents disturbing the clean form, and no maintenance for years of 24/7 duty.",
      "The IP54-rated, ITE-grade enclosure also serves as the product's EMI shield and structural chassis.",
    ],
    scopeIntro:
      "Qmax Systems delivered the complete mechanical and industrial design scope for the fanless digital signage appliance:",
    scopeItems: [
      "Industrial design and styling — premium machined form language and finish direction for luxury retail environments",
      "Mechanical and thermal enclosure architecture — fanless design with the enclosure body engineered as the system heatsink",
      "Material and finish selection — aluminum grade, sand-blasting texture, anodizing specification, and overlay materials",
      "Design for CNC manufacturing — machining strategy, tolerances, and finishing process flow for repeatable volume production",
      "Prototyping and thermal validation of machined samples before production release",
      "Testing and validation (thermal cycling, ingress, drop, life cycle) and mass production support to 2,000+ units",
    ],
    challenges: [
      {
        challenge: "Showroom-grade premium aesthetics",
        resolution:
          "A sleek, minimal machined-aluminum form with sand-blasted matte black anodized finish, engineered to sit in luxury car showroom lounges without looking like IT equipment",
      },
      {
        challenge: "Fanless cooling of a 4K media processor",
        resolution:
          "The entire enclosure was engineered as the heatsink: heat from the processor is conducted through a thermal interface directly into the aluminum body and spread across its full surface area, eliminating the fan altogether",
      },
      {
        challenge: "24/7 continuous operation",
        resolution:
          "Thermal mass and surface area sized so the processor stays within limits during sustained round-the-clock video decoding at up to +55 °C ambient, validated by extended thermal soak and cycling",
      },
      {
        challenge: "Silent, zero-maintenance reliability",
        resolution:
          "No fan means no noise in a customer lounge, no dust pumped through the electronics, and no moving parts to fail over years of continuous duty",
      },
      {
        challenge: "EMI shielding for a high-speed, multi-interface product",
        resolution:
          "The machined aluminum body forms a continuous conductive shield around the electronics, directly supporting the product's FCC certification",
      },
      {
        challenge: "Wireless antennas inside a metal enclosure",
        resolution:
          "Resolved the fundamental conflict between a full-metal body and multiple radios through engineered RF-transparent windows and antenna placement, preserving wireless performance and FCC compliance",
      },
      {
        challenge: "Precision interface cutouts",
        resolution:
          "Tight-tolerance machined openings for the product's multiple video, network, and power interfaces with clean anodized edges and gap-free connector fitment",
      },
      {
        challenge: "IP54 protection on a passively cooled enclosure",
        resolution:
          "Sealed the housing against dust and splashes while keeping the exterior surfaces fully available for heat dissipation and the form vent-free",
      },
    ],
    hardwareComponents: [
      {
        title: "CNC-machined aluminum enclosure",
        description:
          "Chosen for its thermal conductivity (the enclosure is the heatsink), EMI shielding, structural rigidity, and premium feel",
      },
      {
        title: "Sand-blasted, matte black anodized finish",
        description:
          "Delivers the luxury-retail appearance while providing a durable, scratch- and corrosion-resistant surface",
      },
      {
        title: "Thermal interface materials",
        description:
          "Engineered conduction path coupling the processor to the enclosure body",
      },
      {
        title: "Polycarbonate overlay",
        description:
          "Serving the front window and branding surface while acting as an RF/IR-transparent zone in the metal body",
      },
      {
        title: "Sealing gaskets and stainless fasteners",
        description:
          "Maintaining IP54 integrity and finish quality through repeated service access",
      },
    ],
    interfaces: [
      {
        title: "Video interface cutouts",
        description:
          "Precision-machined HDMI input/output openings with tight connector fitment",
      },
      {
        title: "Network / PoE port",
        description:
          "Machined opening supporting single-cable power-plus-data installations",
      },
      {
        title: "Power inlet",
        description:
          "Sealed entry for the UL-certified power adapter connection",
      },
      {
        title: "IR / front window",
        description:
          "Polycarbonate overlay zone for remote-control reception and product branding",
      },
      {
        title: "Wall-mount features",
        description:
          "Integrated mounting provisions machined into the body, keeping thermal surfaces effective in the installed orientation",
      },
    ],
    firmwareIntro:
      "Qmax supported the enclosure from CNC prototyping through volume machining and finishing:",
    firmwareItems: [
      {
        title: "CNC machining",
        description:
          "Aluminum enclosure machined with a strategy optimized for cycle time and repeatability at volume",
      },
      {
        title: "Sand blasting and black anodizing",
        description:
          "Process parameters controlled for consistent texture and color across production batches",
      },
      {
        title: "DFM refinement",
        description:
          "Features, radii, and tolerances refined to hold the premium fit and finish while keeping machining cost in check",
      },
      {
        title: "Volume production",
        description:
          "2,000+ units machined, finished, assembled, packed in retail-style cartons, and shipped to the customer",
      },
    ],
    testingIntro:
      "Mechanical qualification was performed on production-representative units:",
    testingItems: [
      {
        title: "Thermal cycling and sustained soak",
        description:
          "Passed, confirming fanless operation across the 0 to +55 °C range",
      },
      {
        title: "Dust ingress testing",
        description:
          "IP54 rating verified per IEC 60529 on production-representative units",
      },
      {
        title: "Drop and life-cycle testing",
        description: "Drop testing and fatigue / life-cycle testing — passed",
      },
      {
        title: "FCC certification support",
        description:
          "FCC certification achieved — with the enclosure's EMI shielding and RF window design validated as part of product compliance",
      },
    ],
    specs: [
      { key: "Weight", value: "~350 g" },
      {
        key: "Ingress Rating",
        value: "IP54 per IEC 60529 (dust-protected, splash-resistant)",
      },
      {
        key: "Operating Temperature",
        value: "0 °C to +55 °C, continuous 24/7 fanless operation",
      },
      {
        key: "Enclosure Materials & Finish",
        value:
          "CNC-machined aluminum, sand-blasted, matte black anodized; polycarbonate overlay",
      },
      {
        key: "Standards & Compliance",
        value:
          "IP54 (IEC 60529) | FCC certified product | ITE-grade commercial equipment | Drop tested",
      },
      {
        key: "Production Volume",
        value: "2,000+ units — machined, finished, and shipped to USA",
      },
      {
        key: "Scope Delivered",
        value:
          "Industrial design → passive thermal architecture → CNC machining & finishing → validation → mass production support",
      },
    ],
    summary: [
      "Qmax Systems delivered the complete mechanical and industrial design of a premium, fanless digital signage appliance — a CNC-machined, matte black anodized aluminum enclosure that is simultaneously the product's heatsink, EMI shield, and showroom-grade exterior. Over 2,000 units have been manufactured and deployed in luxury automotive showrooms across the USA, running silently 24/7 with all validation targets met.",
      "The project demonstrates Qmax's ability to unite industrial design, passive thermal engineering, and precision machining in one manufacturable product — balancing luxury retail aesthetics with fanless 24/7 thermal performance, EMI shielding, and IP54 protection in a single aluminum body.",
      "Qmax Systems delivers mechanical engineering end to end — industrial design, passive thermal architecture, CNC machining and finishing, DFM, prototyping, environmental validation, and mass production support.",
    ],
    contactCtaPrefix:
      "Need a premium, fanless enclosure that runs silent 24/7? Contact Qmax Systems at",
    listingSummary:
      "Mechanical design case study — premium CNC-machined aluminum fanless enclosure for a 4K digital signage player, from passive thermal architecture through volume production.",
    metadata: {
      title:
        "Premium CNC Aluminum Fanless Signage Enclosure | Mechanical Design Case Study",
      description:
        "Mechanical design case study — CNC-machined aluminum fanless enclosure for a 4K digital signage player, engineered as the system heatsink for silent 24/7 showroom deployment.",
    },
  };
