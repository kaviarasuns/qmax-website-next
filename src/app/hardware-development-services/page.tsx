import type { Metadata } from "next";
import { CapabilitiesSection } from "@/components/services-cmp/CapabilitiesSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { PartnershipsSection } from "@/components/services-cmp/PartnershipsSection";
import { CTABannerSection } from "@/components/services-cmp/CTABannerSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import "../../components/hardware-design.css";
import { HeroConceptToSilicon } from "@/components/services-cmp/HeroConceptToSilicon";
import { PCBIndustriesSection } from "@/components/services-cmp/PCBIndustriesSection";
import { HARDWARE_INDUSTRIES } from "@/store/hardware-industries";
import { ServiceVideoHero } from "@/components/services-cmp/service-video-hero";

export const metadata: Metadata = {
  title: "Hardware Development Services | Qmax",
  description:
    "Hardware development services with complete lifecycle ownership from requirements to production handover.",
};

/* ============================================================
   DATA
   ============================================================ */

// const WORKFLOW_STEPS = [
//   {
//     number: 1,
//     title: "Requirements & Architecture",
//     description:
//       "We translate product requirements into a hardware architecture. Block diagrams, interface definitions, power budgets, and a risk register are agreed before a single component is selected.",
//   },
//   {
//     number: 2,
//     title: "PoC & Feasibility (EVT0)",
//     description:
//       "For high-risk sub-systems — novel power topologies, untested RF links, new sensors — we build a minimal proof-of-concept to validate the architecture and de-risk the main program.",
//   },
//   {
//     number: 3,
//     title: "Detailed Design (Schematic & Layout)",
//     description:
//       "Full schematic capture with design-rule checks, component selection and second-source planning, PCB stack-up definition, constraint-driven layout, and SI/PI simulations where required.",
//   },
//   {
//     number: 4,
//     title: "EVT (Engineering Validation Test)",
//     description:
//       "First prototypes go through functional bring-up, debug, and iterative fixes. A final functional check confirms every interface and feature works to spec before advancing to design validation.",
//   },
//   {
//     number: 5,
//     title: "DVT (Design Validation Test)",
//     description:
//       "The hardware is stress-tested across environmental, reliability, and compliance regimes. This phase proves the design is robust, regulatory-ready, and fit for production-grade conditions.",
//   },
//   {
//     number: 6,
//     title: "PVT (Production Validation Test)",
//     description:
//       "We develop test jigs, production programming flows, and end-of-line tests for the manufacturing partner. The output is a fully characterized, production-ready design with full handover documentation.",
//   },
// ];

const CAPABILITIES = [
  {
    id: "digital-design",
    tabLabel: "High Speed Digital Design",
    learnMoreHref: "/hardware-development-services/high-speed-digital-design",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    ),
    headline:
      "High-performance digital electronics from MCU boards to multi-processor systems.",
    intro:
      "We design digital hardware that scales from single-MCU boards to multi-processor systems running real-time workloads. Our engineers deliver schematic capture, high-speed PCB layout, and bring-up firmware, validated against signal-integrity and power-integrity targets.",
    bullets: [
      {
        title: "Platforms",
        items: ["MCU, MPU, SoC, and FPGA-based platforms."],
      },
      {
        title: "High-Speed Interfaces",
        items: [
          "PCIe, USB 3.x, DDR memory, and other high-speed digital protocols.",
        ],
      },
    ],
  },
  {
    id: "rf-microwave",
    tabLabel: "RF & Microwave",
    learnMoreHref: "/hardware-development-services/rf-and-microwave",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M20.49 4.51a10 10 0 0 1 0 14.14M3.51 19.49a10 10 0 0 1 0-14.14" />
      </svg>
    ),
    headline:
      "RF designs validated in real-world conditions, not just simulations.",
    intro:
      "RF & microwave design is where simulation and reality diverge, so we validate every link budget on real hardware in our labs. Our team handles front-end architecture, antenna integration, and EMC-aware layout, qualified across ISM, Wi-Fi, BLE, LTE, and Sub-GHz bands.",
    bullets: [
      {
        title: "Components & Antennas",
        items: [
          "RF front-end design (LNA, PA, filters, matching networks).",
          "PCB, external, horn, and custom antenna integration.",
        ],
      },
      {
        title: "Protocols & Validation",
        items: [
          "ISM, Wi-Fi, BLE, LTE, and Sub-GHz systems.",
          "RF simulation, tuning, calibration, and EMC-aware layout.",
        ],
      },
    ],
  },
  {
    id: "analog-design",
    tabLabel: "Analog & Mixed-Signal",
    learnMoreHref: "/hardware-development-services/analog-design",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h3l3-9 4 18 3-12 2 6h5" />
      </svg>
    ),
    headline:
      "Precision analog and mixed-signal design for sensing, measurement, and control.",
    intro:
      "To recover clean signal from noisy environments, we build precision analog and mixed-signal front-ends for sensing, measurement, and control. Our engineers deliver low-noise sensor interfaces, ADC/DAC conditioning chains, and EMI-hardened layout, integrated into a single qualified board.",
    bullets: [
      {
        title: "Sensing & Front-Ends",
        items: [
          "Low-noise analog front-ends and sensor interfacing.",
          "Pressure, vibration, biomedical, and optical signal acquisition.",
        ],
      },
      {
        title: "Processing & Integrity",
        items: [
          "Signal conditioning, filtering, amplification, ADC/DAC integration.",
          "EMI-aware analog layout and grounding techniques.",
        ],
      },
    ],
  },
  {
    id: "power-electronics",
    tabLabel: "Power Electronics",
    learnMoreHref: "/hardware-development-services/power-electronics",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    headline:
      "Robust power electronics for industrial, automotive, and energy applications.",
    intro:
      "We design power electronics for industrial, automotive, and energy systems where efficiency, isolation, and thermal margin are non-negotiable. Our team builds AC-DC and DC-DC converters, battery management systems, and HV/HC PCBs, each verified against derating and reliability targets before sign-off.",
    bullets: [
      {
        title: "Conversion & Topologies",
        items: [
          "AC-DC/DC-DC converters and isolated/non-isolated SMPS.",
          "Resonant, LLC, CLLC, and Class-D topologies.",
        ],
      },
      {
        title: "High Power & Reliability",
        items: [
          "Battery systems (BMS), chargers, inverters, HV/HC PCB design.",
          "Thermal simulation, derating, and reliability analysis.",
        ],
      },
    ],
  },
];

// const INDUSTRIES = {
//   left: [
//     {
//       title: "Automotive Electronics",
//       desc: "Powertrain control units, infotainment, and ADAS sensor electronics designed to AEC-Q100 with EMC, thermal, and vibration qualification baked into the workflow.",
//       badge: "AEC-Q100 · ISO 26262",
//       icon: (
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M5 17h14l-1.5-5.5a2 2 0 0 0-1.9-1.5H8.4a2 2 0 0 0-1.9 1.5L5 17z" />
//           <circle cx="7.5" cy="17.5" r="1.5" />
//           <circle cx="16.5" cy="17.5" r="1.5" />
//         </svg>
//       ),
//     },
//     {
//       title: "Medical & Healthcare",
//       desc: "Patient monitors, point-of-care diagnostics, and connected wearables developed under IEC 60601 and ISO 13485, with full DHF traceability from concept to PVT.",
//       badge: "IEC 60601 · ISO 13485",
//       icon: (
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M3.5 12.5h3l2-5 4 10 2-5h6" />
//         </svg>
//       ),
//     },
//     {
//       title: "Aerospace Systems",
//       desc: "Avionics interfaces, radar sub-systems, and ruggedized SBCs validated to MIL-STD-810/461 and DO-160, with conformal coating and obsolescence management built in.",
//       badge: "MIL-STD-810/461 · DO-160",
//       icon: (
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M21 16v-2l-8-5V4a1.5 1.5 0 0 0-3 0v5l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1L15 22v-1.5L13 19v-5.5z" />
//         </svg>
//       ),
//     },
//   ],
//   right: [
//     {
//       title: "Energy, EV & Power",
//       desc: "Battery management systems, on-board chargers, and grid-tied inverters engineered for high-efficiency power conversion, with isolation and creepage rigorously verified.",
//       badge: "UL 2580 · IEC 62133",
//       icon: (
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Communication Systems",
//       desc: "RF transceivers, 5G baseband boards, and optical network nodes engineered for O-RAN and IEEE standards, with rigorous signal integrity (SI/PI) and strict impedance control.",
//       badge: "FCC / CE · IEEE Compliant",
//       icon: (
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Industrial Automation",
//       desc: "PLC interface boards, motor drives, and IIoT edge nodes engineered for 24/7 operation in harsh factory environments — extended temperature, surge, and EMC hardened.",
//       badge: "IEC 61131 · IEC 61000",
//       icon: (
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <circle cx="12" cy="12" r="3" />
//           <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
//         </svg>
//       ),
//     },
//   ],
// };

// const INDUSTRY_SLIDES = [
//   { src: "/hardware-design/ind-automotive.jpg", alt: "Automotive Electronics" },
//   { src: "/hardware-design/ind-medical.jpg", alt: "Medical & Healthcare" },
//   { src: "/hardware-design/aerospace.png", alt: "Aerospace Systems" },
//   { src: "/hardware-design/ind-energy.png", alt: "Energy, EV & Power" },
//   { src: "/hardware-design/communications.png", alt: "Defense Electronics" },
//   {
//     src: "/hardware-design/industrial_automation.png",
//     alt: "Industrial Automation",
//   },
// ];

const WHY_CARDS = [
  {
    title: "Transparent & Supervised Process",
    desc: "You see every milestone, design review, and risk register as it happens. Our program managers run weekly cadence with traceable deliverables, on-time builds, and zero hidden surprises at handover.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="14" r="3" />
        <circle cx="38" cy="14" r="3" />
        <circle cx="10" cy="34" r="3" />
        <circle cx="38" cy="34" r="3" />
        <circle cx="24" cy="24" r="4" />
        <path d="M13 14h8M27 14h8M13 34h8M27 34h8M14 16l8 6M34 16l-8 6M14 32l8-6M34 32l-8-6" />
      </svg>
    ),
  },
  {
    title: "Hardware Development from Scratch",
    desc: "Every program starts with R&D and a proof-of-concept build to retire architectural risk early. We confirm feasibility, lock the BoM, and validate critical assumptions before a single production layer is committed.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 30 L18 20 L24 26 L34 16 L42 24" />
        <path d="M34 16 L34 24 L42 24" />
        <path d="M6 38 L42 38" />
        <path d="M14 12 L18 16 L22 12" />
      </svg>
    ),
  },
  {
    title: "Smooth Hardware-Software Integration",
    desc: "We choose components, interfaces, and toolchains that fit your existing stack rather than forcing a re-platform. The result is firmware that brings up cleanly, drivers that drop into your OS, and lower long-term maintenance cost.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 6 L24 18 M18 12 L24 18 L30 12" />
        <path d="M24 42 L24 30 M18 36 L24 30 L30 36" />
        <path d="M6 24 L18 24 M12 18 L18 24 L12 30" />
        <path d="M42 24 L30 24 M36 18 L30 24 L36 30" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
  },
  {
    title: "Expert Engineers",
    desc: "Our team averages 12+ years in hardware development across automotive, medical, aerospace, and industrial domains. Only senior engineers touch your design — no junior hand-offs, no learning on your timeline.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="6" />
        <path d="M24 8 A 16 16 0 0 1 40 24" />
        <path d="M40 24 A 16 16 0 0 1 24 40" />
        <path d="M24 40 A 16 16 0 0 1 8 24" />
        <path d="M8 24 A 16 16 0 0 1 24 8" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Design Approach",
    desc: "We treat schematic, layout, mechanical, thermal, and EMC as a single coupled problem from day one. Every sub-system is interconnected through a coherent architecture, which is why our boards survive certification on the first spin.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="16" />
        <path d="M24 12 L29 21 L39 22 L31 29 L33 39 L24 34 L15 39 L17 29 L9 22 L19 21 Z" />
      </svg>
    ),
  },
];

const FAQ_ITEMS = [
  {
    q: "Do you provide end-to-end hardware development?",
    a: "Yes. We manage the complete hardware lifecycle — from concept, architecture, schematic design, and PCB layout to prototyping, compliance testing, and production handover. Our structured, architecture-first approach minimizes risk and shortens development cycles, giving you a single accountable partner from idea to certified, market-ready product.",
  },
  {
    q: "Who owns the Intellectual Property (IP)?",
    a: "You do — 100%. Unless otherwise agreed in writing, all IP generated during your project belongs exclusively to you. This includes schematics, PCB designs, firmware, and documentation. We operate under strict NDAs with our customers, employees, and third-party vendors to fully safeguard your innovations throughout the engagement.",
  },
  {
    q: "What compliance standards can you help with?",
    a: "We support readiness for FCC, CE, IEC, UL, and BIS standards. Compliance work begins at the design stage through DFM reviews and pre-compliance testing, coordinated with NABL-certified labs. Our ISO 9001 and ISO 13485-certified processes ensure complete documentation and traceability to meet global regulatory requirements.",
  },
  {
    q: "Do you support manufacturing and scaling?",
    a: "Yes. We provide Design for Manufacturability (DFM) reviews, BOM optimization, and vendor coordination to ensure a smooth transition from prototype to volume production. We support pilot builds and manage full production handover, delivering your supply chain team a thoroughly validated, manufacture-ready design package.",
  },
  {
    q: "Do you perform testing in-house?",
    a: "Yes. Our in-house labs include high-bandwidth oscilloscopes, spectrum analyzers, thermal cameras, temperature cycling chambers, and Hi-Pot testers. We perform functional validation, thermal stress, and environmental reliability testing on-site, identifying and resolving design weaknesses early — before coordinating final certification with NABL-accredited external laboratories.",
  },
  {
    q: "Do you support product maintenance after design?",
    a: "Yes. Our engagement extends well beyond launch. We offer lifecycle maintenance services covering design updates, component obsolescence management, and ongoing technical support. Whether you need minor revisions or a next-generation redesign, our team remains your long-term engineering partner throughout your product's entire commercial life.",
  },
];

const HERO = {
  title:
    "Hardware Development Services: The Complete Hardware Product Lifecycle",
  description:
    "We provide full hardware lifecycle ownership, taking your product from early requirement analysis to production handover. Our lifecycle-driven approach minimizes risk, shortens development cycles, and ensures compliance readiness from day one.",
  ctaLabel: "Talk to our engineers",
  ctaHref: "/hardware-development-services/contact",
  videoSrc: "https://d1yetprhniwywz.cloudfront.net/v2/hardware_hero_bg.mp4",
};

export default function HardwareDevelopmentServicesPage() {
  return (
    <div className="hd-root">
      <ServiceVideoHero {...HERO} />
      <HeroConceptToSilicon />

      {/* CORE CAPABILITIES */}
      <CapabilitiesSection
        capabilities={CAPABILITIES}
        getInTouchHref="/hardware-development-services/contact"
      />

      {/* INDUSTRIES WE SERVE */}
      {/* <IndustriesSection industries={INDUSTRIES} slides={INDUSTRY_SLIDES} /> */}
      <PCBIndustriesSection
        industries={HARDWARE_INDUSTRIES}
        headingPrefix="Hardware Development"
        ctaLabel="Get a Hardware Design Quote"
      />

      {/* WHY CHOOSE QMAX */}
      <WhySection whyCards={WHY_CARDS} />

      <div className="pb-12"></div>
      {/* PARTNERSHIPS */}
      <PartnershipsSection
        heading="Partnerships"
        paragraph="With a strong focus on new product development, Qmax maintains strategic partnerships with leading platform providers including Qualcomm, NXP, Nvidia, Analog Devices, onsemi, Infineon, Ambarella, Texas Instruments, Microchip, and Wolfspeed. Our teams gain early access to upcoming silicon, roadmap visibility, and training on the latest technologies — with reference modules and evaluation kits ready to kick-start your product development."
      />

      <div className="pb-12"></div>

      {/* WORKFLOW TIMELINE */}
      {/* <div id="workflow">
        <WorkflowSection steps={WORKFLOW_STEPS} />
      </div> */}

      {/* CUSTOMER SUCCESS STORIES */}
      {/* <TestimonialsSection testimonials={TESTIMONIALS} /> */}

      {/* CTA BANNER */}
      <CTABannerSection />

      {/* FEATURED ARTICLES */}
      {/* <FeaturedArticlesSection /> */}

      {/* FAQ */}
      <FAQSection faqItems={FAQ_ITEMS} />
      <div className="pb-28"></div>

      {/* OTHER CAPABILITIES */}
      {/* <OtherCapabilitiesScrollSection
        capabilities={hardwareDevelopmentOtherCapabilities}
      /> */}
    </div>
  );
}
