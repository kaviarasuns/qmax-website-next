"use client";

import "../../components/hardware-design.css";
import { CapabilitiesSection } from "@/components/services-cmp/CapabilitiesSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import { PCBIndustriesSection } from "@/components/services-cmp/PCBIndustriesSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { WorkflowSection } from "@/components/services-cmp/WorkflowSection";
import { PCB_INDUSTRIES } from "@/store/pcb-industries";

/* ============================================================
   DATA
   ============================================================ */

const WORKFLOW_STEPS = [
  {
    number: 1,
    title: "Requirements",
    description:
      "We begin with full PCB requirements capture — schematic intent, electrical specs, mechanical constraints, and environment. Stack-up, layer count, and impedance targets are locked early to set a clear baseline.",
  },
  {
    number: 2,
    title: "Library & Stack-up",
    description:
      "Footprints, 3D models, and pads are validated against IPC-7351 and your fab partner's rules. Stack-up and impedance profiles are simulated and locked, ensuring a dimensionally accurate, electrically sound foundation.",
  },
  {
    number: 3,
    title: "Placement & Floorplanning",
    description:
      "Components are placed for optimal signal flow, thermal dissipation, and mechanical fit. Critical nets, RF zones, and power sections are isolated early, easing every later stage of the layout and minimizing crosstalk.",
  },
  {
    number: 4,
    title: "Routing & Layout Execution",
    description:
      "Our designers route controlled-impedance lanes, length-tuned differential pairs, and clean return paths. Power integrity is engineered through plane partitioning, decoupling strategy, and disciplined via stitching.",
  },
  {
    number: 5,
    title: "SI / PI / EMI Analysis & Review",
    description:
      "Pre-layout and post-layout simulations validate signal integrity, power integrity, and EMI behavior across every critical channel. Peer reviews and customer checkpoints catch issues before fabrication release.",
  },
  {
    number: 6,
    title: "DFM Review & Fab Handover",
    description:
      "Final DFM, DFA, and DFT reviews are run with your fab and assembly partners to eliminate yield risks. We deliver a complete manufacturing package — Gerbers, ODB++, drill files, and assembly notes ready for production.",
  },
];

const CAPABILITIES = [
  {
    id: "high-speed",
    tabLabel: "High-Speed",
    learnMoreHref: "/pcb-design/high-speed-digital-pcb-design",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </svg>
    ),
    headline:
      "High-speed PCB layout governed by signal-integrity and timing margins.",
    intro:
      "We layout high-speed digital boards where signal integrity, timing margin, and power delivery decide whether the board boots. Our team handles DDR4/DDR5 routing, PCIe Gen3/Gen4 channel design, and 10/25G SerDes lanes, validated through pre- and post-layout SI/PI simulation.",
    bullets: [
      {
        title: "Standards & Interfaces",
        items: [
          "IPC-2221, IPC-2152, IPC-2141 controlled-impedance routing.",
          "DDR3/4/5, PCIe Gen3/4, 10G/25G SerDes, USB 3.x, HDMI.",
        ],
      },
      {
        title: "Tools & Verification",
        items: [
          "Cadence Sigrity, Ansys SIwave for SI/PI simulation.",
          "Length-matched differential pairs, return-path integrity, decap optimisation.",
        ],
      },
    ],
  },
  {
    id: "rf-microwave",
    tabLabel: "RF & Microwave",
    learnMoreHref: "/pcb-design/rf-and-microwave-pcb-design",
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
    learnMoreHref: "/pcb-design/analog-and-mixed-signal",
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
    learnMoreHref: "/pcb-design/power-electronics",
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
  {
    id: "si-pi-analysis",
    tabLabel: "SI / PI Analysis",
    learnMoreHref: "/pcb-design/si-pi-analysis",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h3l2-7 4 14 2-7h7" />
      </svg>
    ),
    headline:
      "Pre- and post-layout signal & power integrity analysis before a single board is fabricated.",
    intro:
      "Our engineers perform transmission line simulation, eye diagram analysis, IBIS-based driver/receiver modeling, and PDN impedance analysis. SI/PI is offered as a standalone service or as an integrated element of any PCB layout engagement.",
    bullets: [
      {
        title: "Simulation & Modeling",
        items: [
          "Transmission line simulation, eye diagram, and IBIS-based driver/receiver modeling.",
        ],
      },
      {
        title: "PDN & Decoupling",
        items: [
          "Power delivery network impedance analysis and decoupling capacitor optimization.",
        ],
      },
    ],
  },
  {
    id: "pcb-library",
    tabLabel: "PCB Library",
    learnMoreHref: "/pcb-design/pcb-library-services",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h6v16H4zM10 4h6v16h-6zM16 6l4 1-3 14-4-1z" />
      </svg>
    ),
    headline: "A PCB design is only as reliable as its component library.",
    intro:
      "Over three decades, Qmax has built a verified, well-documented library covering schematic symbols, PCB footprints, and 3D STEP models. Every part is validated against manufacturer datasheets and IPC-7351 land pattern standards.",
    bullets: [
      {
        title: "Library Standards",
        items: [
          "Schematic symbols, PCB footprints, and 3D STEP models validated to IPC-7351.",
        ],
      },
      {
        title: "Lifecycle Management",
        items: [
          "Footprint accuracy maintained through component revisions, reducing manufacturing errors.",
        ],
      },
    ],
  },
  {
    id: "design-review",
    tabLabel: "Design Review",
    learnMoreHref: "/pcb-design/pcb-design-review-services",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    headline:
      "An independent PCB design review — identifying risks before you release to fabrication.",
    intro:
      "Qmax engineers review your existing layout against a structured checklist covering layer stack-up, placement, routing, silkscreen, drill notes, and documentation. Findings are delivered as a formal technical report with prioritized recommendations.",
    bullets: [
      {
        title: "Review Coverage",
        items: [
          "Stack-up, placement, routing, silkscreen, drill notes, and documentation completeness.",
        ],
      },
      {
        title: "Deliverable",
        items: [
          "Formal technical report with prioritized SI, DFM, thermal, and compliance findings.",
        ],
      },
    ],
  },
];

// const PCB_CAPABILITIES_STRIP = [
//   {
//     title: "Design Tools",
//     description:
//       "Cadence Allegro · Mentor Xpedition / PADS · Altium Designer · OrCAD · KiCad · Valor Genesis · SI/PI simulation suites",
//   },
//   {
//     title: "Layer & Stack-Up Range",
//     description:
//       "Up to 64 layers · Fine-pitch BGA (0.3 / 0.4 mm) · HDI / ELIC / stacked vias · Multi-impedance (50 / 90 / 100 Ω) on a single board",
//   },
//   {
//     title: "Materials We Support",
//     description:
//       "FR-4 (standard and high-Tg) · Rogers · Tachyon · Arlon 85N · PTFE-based RF laminates",
//   },
//   {
//     title: "Fabrication Partners",
//     description:
//       "Direct relationships with qualified PCB fabricators worldwide. Every layout is optimized for the chosen fab and target volume.",
//   },
// ];

const WHY_CARDS = [
  {
    title: "First-Time-Right Philosophy",
    desc: "DRC, SI, and thermal simulations run before Gerbers leave the building. First fabricated board behaves as designed — no costly re-spins.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="18" />
        <path d="M14 25 L21 32 L34 18" />
      </svg>
    ),
  },
  {
    title: "30,000+ Verified Component Libraries",
    desc: "Every symbol, footprint, and 3D model validated against manufacturer datasheets. No pad mismatches, no assembly surprises.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="24" cy="12" rx="16" ry="5" />
        <path d="M8 12 V24 C8 26.8 15.2 29 24 29 C32.8 29 40 26.8 40 24 V12" />
        <path d="M8 24 V36 C8 38.8 15.2 41 24 41 C32.8 41 40 38.8 40 36 V24" />
      </svg>
    ),
  },
  {
    title: "Strict IP Protection",
    desc: "Mutual NDA from day one. Files stored in an access-controlled vault, never on shared drives.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="10" y="22" width="28" height="20" rx="2" />
        <path d="M16 22 V14 a8 8 0 0 1 16 0 V22" />
        <circle cx="24" cy="32" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Global Compliance Expertise",
    desc: "CE, FCC, UL, and IPC requirements designed in at layout stage. Compliance testing is a confirmation, not a gamble.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="18" />
        <path d="M6 24 H42" />
        <path d="M24 6 C30 12 30 36 24 42 C18 36 18 12 24 6 Z" />
      </svg>
    ),
  },
  {
    title: "Fabrication Partner Network",
    desc: "Qualified fabs and assembly houses with competitive lead times, controlled processes, and traceable material sourcing.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 42 V22 L18 28 V22 L30 28 V14 L42 14 V42 Z" />
        <path d="M12 36 H16 M22 36 H26 M34 36 H38" />
      </svg>
    ),
  },
  {
    title: "Multi-Domain Systems Experience",
    desc: "Cross-domain background across automotive, medical, aerospace, and industrial. Complex mixed-signal and safety-critical designs handled by experienced engineers.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="6" width="15" height="15" rx="1.5" />
        <rect x="27" y="6" width="15" height="15" rx="1.5" />
        <rect x="6" y="27" width="15" height="15" rx="1.5" />
        <rect x="27" y="27" width="15" height="15" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Engineering Depth Over Surface-Level Layout",
    desc: "Engineers understand the full signal chain. Every layer decision is driven by electrical, thermal, and mechanical constraints, not routing convenience.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 6 L34 6 L34 18 L42 26 L34 34 L34 42 L14 42 L14 34 L6 26 L14 18 Z" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
  },
];

// const PCB_SPECIALISATIONS = [
//   {
//     title: "Design Tools",
//     items: [
//       "Cadence Allegro",
//       "Mentor Xpedition / PADS",
//       "Altium Designer",
//       "OrCAD",
//       "KiCad",
//       "Valor Genesis",
//       "SI/PI simulation suites",
//     ],
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
//         <path d="M8 12h8M12 8v8" />
//       </svg>
//     ),
//   },
//   {
//     title: "Layer & Stack-Up Range",
//     items: [
//       "Up to 64 layers",
//       "Fine-pitch BGA (0.3 / 0.4 mm)",
//       "HDI / ELIC / stacked vias",
//       "Multi-impedance (50 / 90 / 100 Ω) on a single board",
//     ],
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <rect x="3" y="3" width="18" height="18" rx="2" />
//         <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
//       </svg>
//     ),
//   },
//   {
//     title: "Materials We Support",
//     items: [
//       "FR-4 (standard and high-Tg)",
//       "Rogers",
//       "Tachyon",
//       "Arlon 85N",
//       "PTFE-based RF laminates",
//     ],
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="12" r="10" />
//         <path d="M8 14s1.5 2 4 2 4-2 4-2" />
//         <line x1="9" y1="9" x2="9.01" y2="9" />
//         <line x1="15" y1="9" x2="15.01" y2="9" />
//       </svg>
//     ),
//   },
//   {
//     title: "Fabrication Partners",
//     items: [
//       "Direct relationships with qualified PCB fabricators worldwide",
//       "Every layout is optimized for the chosen fab and target volume",
//     ],
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//       </svg>
//     ),
//   },
// ];

// const TESTIMONIALS = [
//   {
//     tab: "Temperature Control System",
//     logo: (
//       <svg
//         viewBox="0 0 180 36"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-label="Velocon Mobility"
//         style={{ height: 36, width: "auto" }}
//       >
//         <circle
//           cx="18"
//           cy="18"
//           r="12"
//           fill="none"
//           stroke="#E63329"
//           strokeWidth="2.5"
//         />
//         <path
//           d="M18 8 L28 18 L18 28 L8 18 Z"
//           fill="none"
//           stroke="#E63329"
//           strokeWidth="1.5"
//         />
//         <text
//           x="38"
//           y="24"
//           fontFamily="sans-serif"
//           fontSize="16"
//           fontWeight="700"
//           fill="#1C2A3A"
//         >
//           Velocon
//         </text>
//         <text
//           x="103"
//           y="24"
//           fontFamily="sans-serif"
//           fontSize="16"
//           fill="#5A6778"
//         >
//           Mobility
//         </text>
//       </svg>
//     ),
//     quote:
//       "Qmax delivered a production-ready ECU that passed AEC-Q100 qualification on the first build. Their EMC-first layout approach saved us two full spins and kept the entire program on schedule. The upfront signal integrity work and meticulous component selection gave our compliance team total confidence in the final design.",
//     authorName: "VP, Hardware Engineering",
//     authorRole: "US-based Tier-1 Automotive Supplier",
//     avatarColor: "#0B5FA5",
//     avatarInitials: "JR",
//     caseTag: "AUTOMOTIVE",
//     caseTitle: "Industrial Temperature Control System",
//     caseDesc:
//       "Multi-zone PID temperature control built on SAMA5D3, with POE+ single-cable deployment for cold-chain and manufacturing environments.",
//     caseImage: "/case-studies/BLUECOLD/1.png",
//     caseHref: "/case-studies/industrial-temperature-control-system",
//   },
//   {
//     tab: "Multi IO card",
//     logo: (
//       <svg
//         viewBox="0 0 180 36"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-label="MedCore"
//         style={{ height: 36, width: "auto" }}
//       >
//         <rect x="2" y="8" width="20" height="20" rx="4" fill="#158B4E" />
//         <path
//           d="M7 18h10M12 13v10"
//           stroke="#fff"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//         />
//         <text
//           x="28"
//           y="25"
//           fontFamily="sans-serif"
//           fontSize="18"
//           fontWeight="700"
//           fill="#1C2A3A"
//         >
//           MedCore
//         </text>
//       </svg>
//     ),
//     quote:
//       "The DHF package Qmax delivered was the most thorough we've seen from any contract partner. Our FDA reviewer specifically complimented the traceability and the clean linkage between requirements, design inputs, and verification evidence. It made our submission timeline noticeably shorter and far less stressful for the team.",
//     authorName: "Director of Engineering",
//     authorRole: "European Medical Diagnostics OEM",
//     avatarColor: "#158B4E",
//     avatarInitials: "PS",
//     caseTag: "MEDICAL",
//     caseTitle: "Multi IO Card for ATE",
//     caseDesc:
//       "Spartan-6 FPGA-based ATE IO card with high-speed ADC/DAC channels, fiber optic connectivity, and 12× faster sampling than conventional solutions.",
//     caseImage: "/case-studies/CHARA/1.png",
//     caseHref: "/case-studies/multi-io-card-for-ate",
//   },
//   {
//     tab: "Smart Monitoring System",
//     logo: (
//       <svg
//         viewBox="0 0 180 36"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-label="VoltArc Energy"
//         style={{ height: 36, width: "auto" }}
//       >
//         <polygon points="14,6 6,20 13,20 11,30 22,14 15,14" fill="#E63329" />
//         <text
//           x="28"
//           y="24"
//           fontFamily="sans-serif"
//           fontSize="16"
//           fontWeight="700"
//           fill="#1C2A3A"
//         >
//           VoltArc
//         </text>
//         <text
//           x="89"
//           y="24"
//           fontFamily="sans-serif"
//           fontSize="16"
//           fill="#5A6778"
//         >
//           Energy
//         </text>
//       </svg>
//     ),
//     quote:
//       "Qmax's BMS handled our 96-cell pack flawlessly on the very first revision. The thermal simulation and power integrity work meant we hit every efficiency target with no board respins, no late surprises, and a clean handoff to our pack assembly team. Their deep domain experience really showed in the finer details.",
//     authorName: "CTO",
//     authorRole: "Series-B EV Battery Systems Startup",
//     avatarColor: "#E63329",
//     avatarInitials: "DK",
//     caseTag: "ENERGY / EV",
//     caseTitle: "Smart Monitoring System",
//     caseDesc:
//       "ARM Cortex-M7 system with FreeRTOS tracking temperature, humidity, and air quality across zones via L2 managed switch, achieving 40% better power efficiency.",
//     caseImage:
//       "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/climate_control/1.png",
//     caseHref: "/case-studies/smart-monitoring-system",
//   },
//   {
//     tab: "Microscopic Camera Control",
//     logo: (
//       <svg
//         viewBox="0 0 180 36"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-label="AeroTech"
//         style={{ height: 36, width: "auto" }}
//       >
//         <path
//           d="M18 4 L28 16 L18 28 L8 16 Z"
//           fill="none"
//           stroke="#0B5FA5"
//           strokeWidth="2"
//         />
//         <circle cx="18" cy="16" r="4" fill="#0B5FA5" />
//         <text
//           x="36"
//           y="23"
//           fontFamily="sans-serif"
//           fontSize="17"
//           fontWeight="700"
//           fill="#1C2A3A"
//         >
//           AeroTech
//         </text>
//       </svg>
//     ),
//     quote:
//       "They understood DO-254 from day one and built it into the program rather than around it. Every design assurance artifact was integrated into the engineering workflow, not bolted on at the end. That single decision saved us weeks of audit prep and gave our certification authority full visibility throughout the project.",
//     authorName: "Systems Director",
//     authorRole: "Aerospace & Defense Avionics Contractor",
//     avatarColor: "#374151",
//     avatarInitials: "MS",
//     caseTag: "AEROSPACE",
//     caseTitle: "Microscopic Camera Control",
//     caseDesc:
//       "Stepper motor-driven focus and zoom system with high-resolution CMOS imaging, USB 3.0 and Ethernet streaming, and OLED status display for lab and inspection use.",
//     caseImage:
//       "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/microscopic_camera/1.png",
//     caseHref: "/case-studies/microscopic-camera-control",
//   },
//   {
//     tab: "Industrial IoT Gateway",
//     logo: (
//       <svg
//         viewBox="0 0 180 36"
//         xmlns="http://www.w3.org/2000/svg"
//         aria-label="IndustriLink"
//         style={{ height: 36, width: "auto" }}
//       >
//         <rect
//           x="2"
//           y="10"
//           width="16"
//           height="16"
//           rx="2"
//           fill="none"
//           stroke="#0B5FA5"
//           strokeWidth="2"
//         />
//         <circle cx="10" cy="18" r="3" fill="#0B5FA5" />
//         <path
//           d="M18 18h4M24 14l4 4-4 4"
//           stroke="#0B5FA5"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <text
//           x="36"
//           y="23"
//           fontFamily="sans-serif"
//           fontSize="15"
//           fontWeight="700"
//           fill="#1C2A3A"
//         >
//           IndustriLink
//         </text>
//       </svg>
//     ),
//     quote:
//       "The gateway has been running on our factory floor for 18 months straight with zero field failures across more than forty deployed units. The EMC hardening and isolation strategy Qmax insisted on early in the design proved its worth in a brutally noisy industrial environment. It just keeps working, shift after shift.",
//     authorName: "Head of IIoT",
//     authorRole: "European Industrial Automation Firm",
//     avatarColor: "#374151",
//     avatarInitials: "TY",
//     caseTag: "INDUSTRIAL",
//     caseTitle: "Industrial IoT Gateway with POE",
//     caseDesc:
//       "POE+-powered multi-radio gateway aggregating LoRa, BLE, and CAN bus data to cloud, with 15 km LoRa range and 99.9% uplink accuracy for factory deployments.",
//     caseImage: "/case-studies/OTT/4.png",
//     caseHref: "/case-studies/industrial-iot-gateway-with-poe",
//   },
// ];

const FAQ_ITEMS = [
  {
    q: "Do you provide end-to-end PCB design services?",
    a: "Yes. We handle the full PCB design cycle — from schematic capture and stack-up planning to detailed layout, signal integrity analysis, and Gerber generation. Our IPC-trained designers manage every step from initial netlist to fabrication-ready output, giving you one accountable team for every PCB your product depends on.",
  },
  {
    q: "What PCB technologies and complexities do you handle?",
    a: "We design from 2-layer boards to 32+ layer HDI, rigid-flex, and mixed-signal PCBs. Our team routinely delivers high-density BGA fanouts, controlled impedance routing, blind and buried vias, and length-tuned high-speed channels — every layout engineered for performance, manufacturability, and reliable operation across demanding environments.",
  },
  {
    q: "Which PCB design CAD tools do you support?",
    a: "Our team is proficient across all major PCB CAD platforms, including Altium Designer, Cadence Allegro, Mentor Xpedition, OrCAD, KiCad, and PADS. We adapt to your existing toolchain and library standards, ensuring seamless collaboration with your in-house engineering teams and full design data compatibility from start to finish.",
  },
  {
    q: "Do you handle high-speed and signal integrity design?",
    a: "Yes. Our high-speed expertise covers DDR4/DDR5, PCIe Gen5, USB 4.0, Ethernet up to 112G SerDes, and RF up to mmWave. We run pre-layout and post-layout SI/PI/EMI simulations using industry-grade tools, deliver controlled-impedance stack-ups, and rigorously manage crosstalk, return paths, and power integrity across every critical net.",
  },
  {
    q: "Do you perform DFM and pre-fabrication reviews?",
    a: "Yes. Every design passes through internal DFM, DFA, and DFT reviews before fabrication release. We coordinate directly with your manufacturing partners on stack-up, panelization, and tolerance, identifying yield risks early. The result is a manufacture-ready design package that minimizes spins, reduces NRE, and shortens time to volume.",
  },
  {
    q: "How do you protect our PCB design data and IP?",
    a: "All engagements operate under strict NDAs with our employees, customers, and third-party vendors. Design files are stored on access-controlled, encrypted servers with role-based permissions and complete audit trails. You retain 100% IP ownership, and your schematics, layouts, and libraries are never reused, shared, or referenced beyond your project.",
  },
];

export default function HardwareDevelopmentServicesComponentV2() {
  return (
    <div className="hd-root">
      {/* HERO */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center overflow-hidden after:absolute after:inset-0 after:bg-black/45 after:pointer-events-none after:content-['']"
        id="hero"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(11,95,165,0.45), rgba(14,20,27,0.55)), url('/pcb-design/images/image1.jpg')",
        }}
      >
        <div className="relative z-[2] w-full py-20 px-16 max-w-[1400px] mx-auto max-[900px]:py-16 max-[900px]:px-6">
          <div className="max-w-[820px]">
            <h1 className="text-white mb-6 font-bold leading-[1.1] tracking-[-0.01em] text-balance text-[clamp(36px,5vw,60px)]">
              PCB Design Services: A Multi-Physics Engineering Discipline
            </h1>
            <p className="text-white/[0.92] text-xl leading-[1.6] font-normal mb-10 max-w-[720px]">
              <strong>Engineering Beyond Connectivity.</strong> Qmax Systems
              treats PCB design as a critical engineering discipline, not just
              interconnection. Our experts deliver reliable, first-time-right
              PCB layouts optimized for performance, compliance, and
              manufacturability.
            </p>
            <a
              className="bg-[#E63329] text-white font-semibold text-base tracking-[0.04em] py-[14px] px-8 rounded-md cursor-pointer transition-colors duration-150 no-underline inline-block hover:bg-[#C72A21] hover:text-white hover:no-underline"
              href="/pcb-design/contact"
            >
              EXPLORE OUR APPROACH
            </a>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <CapabilitiesSection capabilities={CAPABILITIES} />

      {/* PCB CAPABILITIES STRIP — Design Tools, Stack-Up, Materials, Fab Partners */}
      {/* <PCBCapabilitiesStripSection items={PCB_CAPABILITIES_STRIP} /> */}

      {/* PCB DESIGN ACROSS INDUSTRIES (tabbed) */}
      <PCBIndustriesSection
        industries={PCB_INDUSTRIES}
        ctaLabel="Get a PCB Design Quote"
      />

      {/* WHY CHOOSE QMAX */}
      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="PCB Design?"
        ctaHref="/pcb-design/contact"
      />

      {/* PARTNERSHIPS */}
      {/* <PartnershipsSection /> */}

      {/* WORKFLOW TIMELINE */}
      {/* <div id="workflow">
        <WorkflowSection steps={WORKFLOW_STEPS} title="Our Custom PCB" />
      </div> */}

      {/* CUSTOMER SUCCESS STORIES */}
      {/* <TestimonialsSection testimonials={TESTIMONIALS} /> */}

      {/* CTA BANNER update con*/}
      {/* <CTABannerSection /> */}

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
