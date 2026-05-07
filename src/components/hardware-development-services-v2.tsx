"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import "./hardware-design.css";
import { OtherCapabilitiesScrollSection } from "@/components/other-capabilities-scroll-section";
import { hardwareDevelopmentOtherCapabilities, hwDevelopmentOtherCapabilities as otherCapabilities } from "@/data/other-capabilities";

/* ============================================================
   DATA
   ============================================================ */

const WORKFLOW_STEPS = [
  {
    number: 1,
    title: "Requirements & Architecture",
    description:
      "We translate product requirements into a hardware architecture. Block diagrams, interface definitions, power budgets, and a risk register are agreed before a single component is selected.",
  },
  {
    number: 2,
    title: "PoC & Feasibility (EVT0)",
    description:
      "For high-risk sub-systems — novel power topologies, untested RF links, new sensors — we build a minimal proof-of-concept to validate the architecture and de-risk the main program.",
  },
  {
    number: 3,
    title: "Detailed Design (Schematic & Layout)",
    description:
      "Full schematic capture with design-rule checks, component selection and second-source planning, PCB stack-up definition, constraint-driven layout, and SI/PI simulations where required.",
  },
  {
    number: 4,
    title: "EVT (Engineering Validation Test)",
    description:
      "First prototypes go through functional bring-up, debug, and iterative fixes. A final functional check confirms every interface and feature works to spec before advancing to design validation.",
  },
  {
    number: 5,
    title: "DVT (Design Validation Test)",
    description:
      "The hardware is stress-tested across environmental, reliability, and compliance regimes. This phase proves the design is robust, regulatory-ready, and fit for production-grade conditions.",
  },
  {
    number: 6,
    title: "PVT (Production Validation Test)",
    description:
      "We develop test jigs, production programming flows, and end-of-line tests for the manufacturing partner. The output is a fully characterized, production-ready design with full handover documentation.",
  },
];

const CAPABILITIES = [
  {
    id: "digital-design",
    tabLabel: "Digital",
    tabIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    ),
    headline: "High-performance digital electronics from MCU boards to multi-processor systems.",
    intro:
      "We design digital hardware that scales from single-MCU boards to multi-processor systems running real-time workloads. Our engineers deliver schematic capture, high-speed PCB layout, and bring-up firmware, validated against signal-integrity and power-integrity targets.",
    bullets: [
      {
        title: "Platforms",
        items: ["MCU, MPU, SoC, and FPGA-based platforms."],
      },
      {
        title: "High-Speed Interfaces",
        items: ["PCIe, USB 3.x, DDR memory, and other high-speed digital protocols."],
      },
    ],
  },
  {
    id: "rf-microwave",
    tabLabel: "RF & Microwave",
    tabIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M20.49 4.51a10 10 0 0 1 0 14.14M3.51 19.49a10 10 0 0 1 0-14.14" />
      </svg>
    ),
    headline: "RF designs validated in real-world conditions, not just simulations.",
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
    tabIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h3l3-9 4 18 3-12 2 6h5" />
      </svg>
    ),
    headline: "Precision analog and mixed-signal design for sensing, measurement, and control.",
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
    tabIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    headline: "Robust power electronics for industrial, automotive, and energy applications.",
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
    id: "labs-infrastructure",
    tabLabel: "Labs & Infrastructure",
    tabIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6L4 18a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3L15 8V2" />
        <path d="M8 2h8M7 14h10" />
      </svg>
    ),
    headline: "In-house labs that accelerate debug, validation, and reduce external dependency.",
    intro:
      "Our in-house labs exist so debug and validation never wait on an external vendor. We operate high-bandwidth scopes and spectrum analyzers, environmental and thermal-cycling chambers, and a full prototype-assembly workshop, integrated into every program from bring-up to PVT.",
    bullets: [
      {
        title: "Electronics & Environmental Test",
        items: [
          "High-bandwidth scopes (Keysight, R&S), spectrum analyzers, CMW-500 RF testers.",
          "Temperature chambers, thermal cycling, drop-stress, and acoustic chambers.",
        ],
      },
      {
        title: "Assembly & Workshop",
        items: [
          "Prototype PCB assembly and professional soldering/rework.",
          "Mechanical workshop and dedicated bring-up facilities.",
        ],
      },
    ],
  },
];

const INDUSTRIES = {
  left: [
    {
      title: "Automotive Electronics",
      desc: "Powertrain control units, infotainment, and ADAS sensor electronics designed to AEC-Q100 with EMC, thermal, and vibration qualification baked into the workflow.",
      badge: "AEC-Q100 · ISO 26262",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 17h14l-1.5-5.5a2 2 0 0 0-1.9-1.5H8.4a2 2 0 0 0-1.9 1.5L5 17z" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="16.5" cy="17.5" r="1.5" />
        </svg>
      ),
    },
    {
      title: "Medical & Healthcare",
      desc: "Patient monitors, point-of-care diagnostics, and connected wearables developed under IEC 60601 and ISO 13485, with full DHF traceability from concept to PVT.",
      badge: "IEC 60601 · ISO 13485",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.5 12.5h3l2-5 4 10 2-5h6" />
        </svg>
      ),
    },
    {
      title: "Aerospace Systems",
      desc: "Avionics interfaces, radar sub-systems, and ruggedized SBCs validated to MIL-STD-810/461 and DO-160, with conformal coating and obsolescence management built in.",
      badge: "MIL-STD-810/461 · DO-160",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16v-2l-8-5V4a1.5 1.5 0 0 0-3 0v5l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1L15 22v-1.5L13 19v-5.5z" />
        </svg>
      ),
    },
  ],
  right: [
    {
      title: "Energy, EV & Power",
      desc: "Battery management systems, on-board chargers, and grid-tied inverters engineered for high-efficiency power conversion, with isolation and creepage rigorously verified.",
      badge: "UL 2580 · IEC 62133",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      ),
    },
    {
      title: "Communication Systems",
      desc: "RF transceivers, 5G baseband boards, and optical network nodes engineered for O-RAN and IEEE standards, with rigorous signal integrity (SI/PI) and strict impedance control.",
      badge: "FCC / CE · IEEE Compliant ➔",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7z" />
        </svg>
      ),
    },
    {
      title: "Industrial Automation",
      desc: "PLC interface boards, motor drives, and IIoT edge nodes engineered for 24/7 operation in harsh factory environments — extended temperature, surge, and EMC hardened.",
      badge: "IEC 61131 · IEC 61000",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ],
};

const INDUSTRY_SLIDES = [
  { src: "/hardware-design/ind-automotive.jpg", alt: "Automotive Electronics" },
  { src: "/hardware-design/ind-medical.jpg", alt: "Medical & Healthcare" },
  { src: "/hardware-design/aerospace.png", alt: "Aerospace Systems" },
  { src: "/hardware-design/ind-energy.png", alt: "Energy, EV & Power" },
  { src: "/hardware-design/communications.png", alt: "Defense Electronics" },
  { src: "/hardware-design/industrial_automation.png", alt: "Industrial Automation" },
];

const WHY_CARDS = [
  {
    title: "Transparent & Supervised Process",
    desc: "You see every milestone, design review, and risk register as it happens. Our program managers run weekly cadence with traceable deliverables, on-time builds, and zero hidden surprises at handover.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="14" r="3" /><circle cx="38" cy="14" r="3" />
        <circle cx="10" cy="34" r="3" /><circle cx="38" cy="34" r="3" />
        <circle cx="24" cy="24" r="4" />
        <path d="M13 14h8M27 14h8M13 34h8M27 34h8M14 16l8 6M34 16l-8 6M14 32l8-6M34 32l-8-6" />
      </svg>
    ),
  },
  {
    title: "Hardware Development from Scratch",
    desc: "Every program starts with R&D and a proof-of-concept build to retire architectural risk early. We confirm feasibility, lock the BoM, and validate critical assumptions before a single production layer is committed.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 12 L29 21 L39 22 L31 29 L33 39 L24 34 L15 39 L17 29 L9 22 L19 21 Z" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    tab: "Temperature Control System",
    logo: (
      <svg viewBox="0 0 180 36" xmlns="http://www.w3.org/2000/svg" aria-label="Velocon Mobility" style={{ height: 36, width: "auto" }}>
        <circle cx="18" cy="18" r="12" fill="none" stroke="#E63329" strokeWidth="2.5" />
        <path d="M18 8 L28 18 L18 28 L8 18 Z" fill="none" stroke="#E63329" strokeWidth="1.5" />
        <text x="38" y="24" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#1C2A3A">Velocon</text>
        <text x="103" y="24" fontFamily="sans-serif" fontSize="16" fill="#5A6778">Mobility</text>
      </svg>
    ),
    quote: "Qmax delivered a production-ready ECU that passed AEC-Q100 qualification on the first build. Their EMC-first layout approach saved us two full spins.",
    authorName: "James R.",
    authorRole: "VP Hardware Engineering, Velocon Mobility",
    avatarColor: "#0B5FA5",
    avatarInitials: "JR",
    caseTag: "AUTOMOTIVE",
    caseTitle: "Industrial Temperature Control System",
    caseDesc: "Multi-zone PID temperature control built on SAMA5D3, with POE+ single-cable deployment for cold-chain and manufacturing environments.",
    caseImage: "/case-studies/BLUECOLD/1.png",
  },
  {
    tab: "Multi IO card",
    logo: (
      <svg viewBox="0 0 180 36" xmlns="http://www.w3.org/2000/svg" aria-label="MedCore" style={{ height: 36, width: "auto" }}>
        <rect x="2" y="8" width="20" height="20" rx="4" fill="#158B4E" />
        <path d="M7 18h10M12 13v10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <text x="28" y="25" fontFamily="sans-serif" fontSize="18" fontWeight="700" fill="#1C2A3A">MedCore</text>
      </svg>
    ),
    quote: "The DHF package Qmax delivered was the most thorough we've seen from a contract partner. Our FDA reviewer complimented the traceability.",
    authorName: "Priya S.",
    authorRole: "Director of Engineering, MedCore Diagnostics",
    avatarColor: "#158B4E",
    avatarInitials: "PS",
    caseTag: "MEDICAL",
    caseTitle: "Multi IO Card for ATE",
    caseDesc: "Spartan-6 FPGA-based ATE IO card with high-speed ADC/DAC channels, fiber optic connectivity, and 12× faster sampling than conventional solutions.",
    caseImage: "/case-studies/CHARA/1.png",
  },
  {
    tab: "Smart Monitoring System",
    logo: (
      <svg viewBox="0 0 180 36" xmlns="http://www.w3.org/2000/svg" aria-label="VoltArc Energy" style={{ height: 36, width: "auto" }}>
        <polygon points="14,6 6,20 13,20 11,30 22,14 15,14" fill="#E63329" />
        <text x="28" y="24" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#1C2A3A">VoltArc</text>
        <text x="89" y="24" fontFamily="sans-serif" fontSize="16" fill="#5A6778">Energy</text>
      </svg>
    ),
    quote: "Qmax's BMS handled our 96-cell pack on the first revision. The thermal simulation work meant we hit our efficiency targets with no board respins.",
    authorName: "David K.",
    authorRole: "CTO, VoltArc Energy",
    avatarColor: "#E63329",
    avatarInitials: "DK",
    caseTag: "ENERGY / EV",
    caseTitle: "Smart Monitoring System",
    caseDesc: "ARM Cortex-M7 system with FreeRTOS tracking temperature, humidity, and air quality across zones via L2 managed switch, achieving 40% better power efficiency.",
    caseImage: "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/climate_control/1.png",
  },
  {
    tab: "Microscopic Camera Control",
    logo: (
      <svg viewBox="0 0 180 36" xmlns="http://www.w3.org/2000/svg" aria-label="AeroTech" style={{ height: 36, width: "auto" }}>
        <path d="M18 4 L28 16 L18 28 L8 16 Z" fill="none" stroke="#0B5FA5" strokeWidth="2" />
        <circle cx="18" cy="16" r="4" fill="#0B5FA5" />
        <text x="36" y="23" fontFamily="sans-serif" fontSize="17" fontWeight="700" fill="#1C2A3A">AeroTech</text>
      </svg>
    ),
    quote: "They understood DO-254 from day one. The design assurance documentation was integrated into the workflow, not bolted on at the end.",
    authorName: "Col. M. Santos",
    authorRole: "Systems Director, AeroTech Systems",
    avatarColor: "#374151",
    avatarInitials: "MS",
    caseTag: "AEROSPACE",
    caseTitle: "Microscopic Camera Control",
    caseDesc: "Stepper motor-driven focus and zoom system with high-resolution CMOS imaging, USB 3.0 and Ethernet streaming, and OLED status display for lab and inspection use.",
    caseImage: "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/microscopic_camera/1.png",
  },
  {
    tab: "Industrial IoT Gateway",
    logo: (
      <svg viewBox="0 0 180 36" xmlns="http://www.w3.org/2000/svg" aria-label="IndustriLink" style={{ height: 36, width: "auto" }}>
        <rect x="2" y="10" width="16" height="16" rx="2" fill="none" stroke="#0B5FA5" strokeWidth="2" />
        <circle cx="10" cy="18" r="3" fill="#0B5FA5" />
        <path d="M18 18h4M24 14l4 4-4 4" stroke="#0B5FA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="36" y="23" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#1C2A3A">IndustriLink</text>
      </svg>
    ),
    quote: "The gateway has been running on our factory floor for 18 months with zero field failures. The EMC hardening Qmax insisted on proved its worth.",
    authorName: "T. Yamamoto",
    authorRole: "Head of IIoT, IndustriLink GmbH",
    avatarColor: "#374151",
    avatarInitials: "TY",
    caseTag: "INDUSTRIAL",
    caseTitle: "Industrial IoT Gateway with POE",
    caseDesc: "POE+-powered multi-radio gateway aggregating LoRa, BLE, and CAN bus data to cloud, with 15 km LoRa range and 99.9% uplink accuracy for factory deployments.",
    caseImage: "/case-studies/OTT/4.png",
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

/* ============================================================
   SUBCOMPONENTS
   ============================================================ */

function CapabilitiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <section className="bg-white px-16 py-24 max-[900px]:px-6 max-[900px]:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="m-0 p-0">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-center">Core Engineering <span className="text-brand-500">Capabilities</span></h2>
          {/* <p>We deliver high-performance designs validated by decades of experience. Our HW engineering stack covers:</p> */}
        </div>
        {/* Tabs */}
        <div className="my-14 mb-16 grid grid-cols-5 gap-0 border-b border-gray-200 max-[900px]:grid-cols-2 max-[900px]:gap-1 max-[900px]:overflow-x-auto" role="tablist">
          {CAPABILITIES.map((cap, i) => (
            <button
              key={cap.id}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`text-m font-bold relative flex cursor-pointer items-center justify-center gap-3 bg-transparent px-3 py-[18px] text-left text-black transition-colors duration-200 hover:text-red-500 max-[900px]:px-2 max-[900px]:py-3.5 ${
                activeIdx === i ? "text-red-500 after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-red-500" : ""
              }`}
              onClick={() => setActiveIdx(i)}
            >
              <span className="h-[22px] w-[22px] shrink-0 transition-colors duration-200">{cap.tabIcon}</span>
              <span>{cap.tabLabel}</span>
            </button>
          ))}
        </div>
        {/* Panels */}
        {CAPABILITIES.map((cap, i) => (
          <div
            key={cap.id}
            role="tabpanel"
            className={`${activeIdx === i ? "grid" : "hidden"} grid-cols-[1fr_1.4fr] items-start gap-24 max-[900px]:grid-cols-1 max-[900px]:gap-8`}
          >
            <div>
              <h3 className="mb-8 max-w-[480px] text-2xl font-light tracking-wide text-black md:text-3xl">{cap.headline}</h3>
              <div className="flex flex-wrap items-center gap-3">
                <a className="inline-block rounded-md border-[1.5px] border-slate-900 bg-transparent px-7 py-[7px] text-slate-900 no-underline transition-colors duration-200 hover:bg-slate-900 hover:text-white hover:no-underline" href="/contact">Learn more</a>
                <a className="inline-block rounded-md bg-[var(--qmax-red-500)] px-7 py-[7px] text-white no-underline transition-colors duration-200 hover:bg-[var(--qmax-red-600)] hover:text-white hover:no-underline" href="/contact">Get in Touch</a>
              </div>
            </div>
            <div>
              <p className="mb-9 text-[#383838]">{cap.intro}</p>
              <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-7">
                {cap.bullets.map((b) => (
                  <div key={b.title}>
                    <h4 className="mb-[18px] text-lg font-light tracking-wide text-[#383838] md:text-xl">{b.title}</h4>
                    <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                      {b.items.map((item) => (
                        <li key={item} className="relative pl-[22px] text-[#383838] before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-red-500">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IndustriesSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const TOTAL = INDUSTRY_SLIDES.length;

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(((idx % TOTAL) + TOTAL) % TOTAL);
    },
    [TOTAL]
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => goTo(current + 1), 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current, paused, goTo]);

  // Mapping: index 0-2 = left items, 3-5 = right items
  const isActive = (col: "left" | "right", itemIdx: number) => {
    const slideIdx = col === "left" ? itemIdx : itemIdx + 3;
    return current === slideIdx;
  };

  return (
    <section className="industries" id="industries-section">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="industries-inner">
        <div className="industries-head">
          <h2 className="text-4xl md:text-5xl mb-6 font-light tracking-wide">Industries We <span className="text-brand-500">Serve</span></h2>
        
          {/* <p>Multi-domain hardware development with design rigor and documentation depth calibrated to each industry&apos;s regulatory and reliability bar.</p> */}
        </div>
        <div className="ind-cols">
          {/* LEFT */}
          <div className="ind-col-list left">
            {INDUSTRIES.left.map((ind, i) => (
              <div
                key={ind.title}
                className={`ind-item${isActive("left", i) ? " slideshow-active" : ""}`}
                onMouseEnter={() => { setPaused(true); goTo(i); }}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="ind-item-head">
                  <div className="ind-icon-wrap">{ind.icon}</div>
                  <h3 className="text-base md:text-lg font-medium tracking-wide">{ind.title}</h3>
                </div>
                <p>{ind.desc}</p>
                <div className="learn-more">
                  <span>{ind.badge}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER SLIDESHOW */}
          <div className="ind-feature">
            <div className="ind-feature-frame">
              <div className="ind-feature-image">
                <div className="ind-slideshow">
                  {INDUSTRY_SLIDES.map((slide, i) => (
                    <div key={i} className={`ind-slide${current === i ? " active" : ""}`}>
                      <Image src={slide.src} alt={slide.alt} fill style={{ objectFit: "cover", objectPosition: "center" }} sizes="(max-width: 900px) 100vw, 40vw" />
                    </div>
                  ))}
                  <div className="ind-progress">
                    {INDUSTRY_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        className={`ind-prog-dot${current === i ? " active" : ""}`}
                        aria-label={`Slide ${i + 1}`}
                        onClick={() => { goTo(i); }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ind-col-list right">
            {INDUSTRIES.right.map((ind, i) => (
              <div
                key={ind.title}
                className={`ind-item${isActive("right", i) ? " slideshow-active" : ""}`}
                onMouseEnter={() => { setPaused(true); goTo(i + 3); }}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="ind-item-head">
                  <div className="ind-icon-wrap">{ind.icon}</div>
                  <h3 className="text-base md:text-lg font-medium tracking-wide">{ind.title}</h3>
                </div>
                <p>{ind.desc}</p>
                <div className="learn-more">
                  <span>{ind.badge}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="why" id="why-section">
      <div className="why-inner">
        <div className="why-head">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-center">Why Choose Qmax for <span className="text-brand-500">Hardware Design?</span></h2>
        </div>
        <div className="why-grid">
          {WHY_CARDS.map((card) => (
            <article key={card.title} className="why-card">
              <div className="why-card-head">
                <div className="why-icon">{card.icon}</div>
                <h3 className="text-lg md:text-xl font-medium tracking-wide">{card.title}</h3>
              </div>
              <p>{card.desc}</p>
            </article>
          ))}
          {/* Founder CTA tile — baked PNG */}
          <a
            className="why-cta-card"
            href="/contact"
            aria-label="Questions? Let's Talk! Contact Saravanabhavan, Founder & CEO"
          >
            <Image
              src="/hardware-design/founder_csb.png"
              alt="Questions? Let's Talk! Contact us. Saravanabhavan, Founder & CEO"
              width={600}
              height={340}
              style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
            <span className="why-cta-overlay why-cta-top-left">
              Questions?
              <br />
              Let&apos;s Talk!
            </span>
            <span className="why-cta-overlay why-cta-bottom-left">Contact Us</span>
            <span className="why-cta-overlay why-cta-bottom-right">
              Saravanabhavan
              <br />
              Founder &amp; CEO
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

const TILE_CLASS = "flex aspect-[16/11] items-center justify-content-center rounded-md border border-gray-200 bg-white px-[26px] py-[22px] transition-all duration-300 [&>svg]:block [&>svg]:h-auto [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:max-w-full [&>svg]:object-contain hover:-translate-y-[3px] hover:border-[rgba(230,51,41,0.35)] hover:shadow-[0_8px_20px_rgba(16,24,40,0.08)]";

function PartnershipsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-8 pb-[72px] pt-16 text-[#1C2A3A] max-[900px]:px-6 max-[900px]:py-12" id="partnerships-section">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-9 flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-light tracking-wide">Partnerships</h2>
          <p className="mx-auto max-w-[820px] text-[#5A6778]">
            With a strong focus on new product development, <strong className="text-[#1C2A3A]">Qmax</strong> maintains strategic partnerships with leading platform providers including Qualcomm, NXP, Nvidia, Analog Devices, onsemi, Infineon, Ambarella, Texas Instruments, Microchip, and Wolfspeed. Our teams gain early access to upcoming silicon, roadmap visibility, and training on the latest technologies — with reference modules and evaluation kits ready to kick-start your product development.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4 max-[900px]:grid-cols-2 max-[900px]:gap-3">
          {/* Qualcomm */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="Qualcomm">
              <text x="110" y="40" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="26" fontWeight="700" fill="#3253DC" letterSpacing="-0.5">Qualcomm</text>
              <path d="M148 44 q4 5 9 0" stroke="#3253DC" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          {/* NXP */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="NXP">
              <g transform="translate(56 12)">
                <rect x="0" y="0" width="36" height="40" fill="#E8B22B" />
                <rect x="36" y="0" width="36" height="40" fill="#79A341" />
                <rect x="72" y="0" width="36" height="40" fill="#E8B22B" />
                <text x="18" y="28" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="22" fontWeight="900" fill="#1F1F1F">N</text>
                <text x="54" y="28" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="22" fontWeight="900" fill="#FFFFFF">X</text>
                <text x="90" y="28" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="22" fontWeight="900" fill="#1F1F1F">P</text>
              </g>
            </svg>
          </div>
          {/* NVIDIA */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="NVIDIA">
              <g transform="translate(20 18)">
                <path d="M14 0 C6 0 0 6 0 14 C0 22 6 28 14 28 C20 28 24 25 26 21 C22 23 18 23 15 21 C11 19 9 16 9 13 C9 9 13 6 17 7 C20 7.5 23 9 26 12 C24 5 19 0 14 0 Z" fill="#76B900" />
              </g>
              <text x="135" y="40" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="26" fontWeight="800" fill="#1F1F1F" letterSpacing="0.5">NVIDIA</text>
            </svg>
          </div>
          {/* Analog Devices */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="Analog Devices">
              <polygon points="22,18 22,46 50,32" fill="#1F1F1F" />
              <text x="58" y="30" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="14" fontWeight="800" fill="#1F1F1F" letterSpacing="1">ANALOG</text>
              <text x="58" y="48" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="14" fontWeight="800" fill="#1F1F1F" letterSpacing="1">DEVICES</text>
            </svg>
          </div>
          {/* onsemi */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="onsemi">
              <text x="100" y="42" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="32" fontWeight="400" fill="#3F4A52" letterSpacing="-1">onsemi</text>
              <line x1="156" y1="44" x2="166" y2="22" stroke="#E63329" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          {/* Infineon */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="Infineon">
              <text x="110" y="36" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="26" fontWeight="500" fill="#0B3D6F" letterSpacing="-0.3">Infineon</text>
              <path d="M50 50 q60 -22 120 0" stroke="#E63329" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          {/* Ambarella */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="Ambarella">
              <g transform="translate(76 4)">
                <polygon points="0,24 10,10 20,24" fill="#7BB661" />
                <polygon points="14,24 26,2 38,24" fill="#3FA9DB" />
                <polygon points="32,24 42,12 52,24" fill="#7BB661" />
                <polygon points="46,24 54,16 62,24" fill="#3FA9DB" />
              </g>
              <text x="110" y="52" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="17" fontWeight="600" fill="#3253DC" letterSpacing="0.3">Ambarella</text>
            </svg>
          </div>
          {/* Texas Instruments */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="Texas Instruments">
              <g transform="translate(20 16)">
                <rect x="0" y="0" width="36" height="36" rx="3" fill="#CC0000" />
                <text x="18" y="26" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="22" fontWeight="700" fill="#FFFFFF" fontStyle="italic">TI</text>
              </g>
              <text x="64" y="30" fontFamily="Georgia, 'Times New Roman', serif" fontSize="13" fontWeight="700" fill="#1F1F1F" letterSpacing="0.5">TEXAS</text>
              <text x="64" y="46" fontFamily="Georgia, 'Times New Roman', serif" fontSize="13" fontWeight="700" fill="#1F1F1F" letterSpacing="0.5">INSTRUMENTS</text>
            </svg>
          </div>
          {/* Microchip */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="Microchip">
              <g transform="translate(28 14)">
                <path d="M18 0 L0 18 L6 18 L6 36 L30 36 L30 18 L36 18 Z" fill="#E63329" />
                <path d="M9 22 L13 28 L18 22 L23 28 L27 22 L27 33 L9 33 Z" fill="#FFFFFF" />
              </g>
              <text x="138" y="40" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="16" fontWeight="800" fill="#1F1F1F" letterSpacing="1.5">MICROCHIP</text>
            </svg>
          </div>
          {/* Wolfspeed */}
          <div className={TILE_CLASS} style={{ justifyContent: "center" }}>
            <svg viewBox="0 0 220 64" xmlns="http://www.w3.org/2000/svg" aria-label="Wolfspeed">
              <path d="M28 26 q12 -14 26 -6 q8 5 16 -2 q10 -8 22 -2 q12 6 24 -4" stroke="#5C2D91" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <circle cx="148" cy="14" r="3" fill="#5C2D91" />
              <text x="110" y="50" textAnchor="middle" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="22" fontWeight="700" fontStyle="italic" fill="#5C2D91" letterSpacing="-0.5">Wolfspeed</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );
    stepRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="workflow">
      <h2 className="workflow-title text-4xl md:text-5xl font-light tracking-wide text-center">Our Custom Hardware <span className="text-brand-500"> Design Approach</span></h2>
      <div className="timeline-wrap">
        <div className="timeline-line" />
        {WORKFLOW_STEPS.map((step, i) => {
          const isRight = i % 2 === 0;
          return (
            <div
              key={step.number}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={`step ${isRight ? "right" : "left"}`}
            >
              <div className="step-content">
                <h3 className="text-2xl md:text-3xl font-base tracking-wide">{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="step-badge">{step.number}</div>
              <div className="step-spacer" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <section className="bg-white overflow-hidden px-16 py-12 max-[900px]:px-6 max-[900px]:py-16" id="testi-section">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-5 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8">Customer Success <span className="text-brand-500">Stories</span></h2>
        </div>
        <div className="mb-5 flex flex-wrap justify-center border-b-2 border-gray-200 max-[900px]:flex-nowrap max-[900px]:justify-start max-[900px]:overflow-x-auto">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.tab}
              className={`relative -mb-0.5 cursor-pointer border-none bg-transparent px-5 py-2 whitespace-nowrap transition-colors max-[900px]:px-[18px] max-[900px]:py-2.5 ${
                activeIdx === i
                  ? "text-red-500 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:rounded-t-sm after:bg-[#E63329] after:content-['']"
                  : "text-gray-500 hover:text-[#1C2A3A]"
              }`}
              onClick={() => setActiveIdx(i)}
            >
              {t.tab}
            </button>
          ))}
        </div>
        <div className="relative overflow-hidden py-2">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.tab}
              className={`${
                activeIdx === i ? "grid animate-[tFadeIn_0.4s_ease]" : "hidden"
              } grid-cols-2 items-stretch gap-8 max-[900px]:grid-cols-1`}
            >
              {/* Left: quote */}
              <div className="flex flex-col justify-center gap-4">
                {/* <div className="flex max-h-10 items-center">{t.logo}</div> */}
                <p className="m-0 text-gray-800 !font-medium !text-lg md:text-xl !font-medium tracking-wide">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-2">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: t.avatarColor }}
                  >
                    {t.avatarInitials}
                  </div>
                  <div>
                    <p className="m-0 text-[#1C2A3A]">{t.authorName}</p>
                    <p className="m-0 mt-0.5 text-sm text-gray-500">{t.authorRole}</p>
                  </div>
                </div>
              </div>
              {/* Right: case card */}
              <div className="flex h-full flex-col gap-2.5 rounded-lg bg-white p-5 shadow-[0_3px_12px_0_rgba(0,92,136,0.15)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_0_rgba(0,92,136,0.20)]">
                {/* <span className="w-fit text-sm font-medium uppercase text-red-500">{t.caseTag}</span> */}
                <h3 className="text-xl md:text-2xl font-medium tracking-wide">{t.caseTitle}</h3>
                <div style={{ position: "relative", width: "100%", aspectRatio: "21/9", borderRadius: 8, overflow: "hidden", marginTop: 4, background: "#f3f4f6" }}>
                  <Image src={t.caseImage} alt={t.caseTitle} fill style={{ objectFit: "contain" }} sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <p className="m-0 text-gray-600">{t.caseDesc}</p>
                <a
                  className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-md bg-[#E63329] px-3 py-1.5 text-sm text-white no-underline transition-colors hover:bg-[#C72A21] hover:text-white hover:no-underline"
                  href="/contact"
                >
                  View Case Study
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}>
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedArticlesSection() {
  return (
    <section className="feat">
      <div className="feat-inner">
        <div className="feat-head">
          <div className="feat-title-block">
            {/* <div className="feat-eyebrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Featured Articles
            </div> */}
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-center">Insights From Our <span className="text-brand-500">Engineers</span></h2>
            {/* <div className="feat-divider" /> */}
          </div>
        </div>
        <div className="feat-grid">
          {/* Card 1: PCB Design */}
          <article className="feat-card">
            <div className="feat-thumb">
              <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <linearGradient id="pcbBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0E2336" />
                    <stop offset="1" stopColor="#0B5FA5" />
                  </linearGradient>
                </defs>
                <rect width="400" height="280" fill="url(#pcbBg)" />
                <g stroke="#39C2A4" strokeWidth="1.6" fill="none" opacity="0.85">
                  <path d="M60 90 L180 90 L210 120 L360 120 L390 90" />
                  <path d="M60 150 L120 150 L150 180 L300 180 L330 150 L450 150" />
                  <path d="M60 240 L150 240 L180 270 L270 270 L300 240 L420 240" />
                </g>
                <g fill="#FFC857">
                  <circle cx="180" cy="90" r="5" /><circle cx="360" cy="120" r="5" />
                  <circle cx="150" cy="180" r="5" /><circle cx="330" cy="150" r="5" />
                </g>
                <rect x="230" y="165" width="140" height="120" rx="4" fill="#1C2A3A" stroke="#39C2A4" strokeWidth="1.5" />
                <text x="300" y="232" textAnchor="middle" fontFamily="monospace" fontSize="14" fill="#39C2A4" letterSpacing="2">QMAX-SOC</text>
                <g fill="#E63329">
                  <rect x="100" y="135" width="22" height="10" rx="1" />
                  <rect x="480" y="255" width="22" height="10" rx="1" />
                </g>
              </svg>
            </div>
            <div className="feat-meta">Article · PCB Design</div>
            <h3 className="text-lg md:text-xl !font-medium tracking-wide">High-Speed PCB Layout: Controlling Impedance &amp; Crosstalk in Mixed-Signal Boards</h3>
            <p className="feat-excerpt">Stack-up planning, return-path discipline, and EMC pre-compliance practices that get a board through certification on the first spin.</p>
            <a className="feat-readmore" href="#">
              Read article
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </article>
          {/* Card 2: Embedded */}
          <article className="feat-card">
            <div className="feat-thumb">
              <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
                <rect width="400" height="280" fill="#1C2A3A" />
                <g>
                  <rect x="20" y="20" width="40" height="6" rx="1" fill="#5A6B7B" />
                  <rect x="64" y="20" width="120" height="6" rx="1" fill="#39C2A4" />
                  <rect x="20" y="34" width="20" height="6" rx="1" fill="#5A6B7B" />
                  <rect x="44" y="34" width="80" height="6" rx="1" fill="#FFC857" />
                  <rect x="36" y="48" width="60" height="6" rx="1" fill="#0B5FA5" />
                  <rect x="100" y="48" width="40" height="6" rx="1" fill="#E63329" />
                  <rect x="36" y="62" width="100" height="6" rx="1" fill="#39C2A4" />
                  <rect x="20" y="82" width="30" height="6" rx="1" fill="#5A6B7B" />
                  <rect x="54" y="82" width="140" height="6" rx="1" fill="#E5E7EB" opacity="0.4" />
                  <rect x="36" y="96" width="80" height="6" rx="1" fill="#0B5FA5" />
                  <rect x="120" y="96" width="50" height="6" rx="1" fill="#39C2A4" />
                </g>
                <text x="295" y="32" fontFamily="monospace" fontSize="10" fill="#39C2A4">{"// RTOS task"}</text>
                <text x="295" y="50" fontFamily="monospace" fontSize="10" fill="#E5E7EB">priority: 3</text>
                <text x="295" y="68" fontFamily="monospace" fontSize="10" fill="#FFC857">RUNNING</text>
              </svg>
            </div>
            <div className="feat-meta">Article · Embedded Systems</div>
            <h3 className="text-lg md:text-xl !font-medium tracking-wide">Hardening Firmware for Functional Safety: From RTOS Choice to Field Updates</h3>
            <p className="feat-excerpt">A practical look at memory protection, watchdog strategy, and OTA architectures that hold up under ISO 26262 and IEC 62304 audits.</p>
            <a className="feat-readmore" href="#">
              Read article
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </article>
          {/* Card 3: Mechanical */}
          <article className="feat-card">
            <div className="feat-thumb">
              <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <linearGradient id="mechBg2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#F5F0E8" />
                    <stop offset="1" stopColor="#E5DDD0" />
                  </linearGradient>
                </defs>
                <rect width="400" height="280" fill="url(#mechBg2)" />
                <g stroke="#C8B79C" strokeWidth="0.5" opacity="0.5">
                  <line x1="0" y1="40" x2="400" y2="40" /><line x1="0" y1="80" x2="400" y2="80" />
                  <line x1="0" y1="120" x2="400" y2="120" /><line x1="0" y1="160" x2="400" y2="160" />
                  <line x1="40" y1="0" x2="40" y2="280" /><line x1="80" y1="0" x2="80" y2="280" />
                  <line x1="120" y1="0" x2="120" y2="280" /><line x1="160" y1="0" x2="160" y2="280" />
                  <line x1="200" y1="0" x2="200" y2="280" /><line x1="240" y1="0" x2="240" y2="280" />
                </g>
                <g transform="translate(120 80)">
                  <polygon points="0,40 80,0 200,0 200,100 120,140 0,140" fill="#3A4A5A" />
                  <polygon points="0,40 80,0 200,0 120,40 0,40" fill="#5A6B7B" opacity="0.9" />
                  <polygon points="200,0 200,100 120,140 120,40" fill="#0E1822" opacity="0.85" />
                  <g stroke="#39C2A4" strokeWidth="1" opacity="0.6">
                    <line x1="20" y1="60" x2="100" y2="60" />
                    <line x1="20" y1="74" x2="100" y2="74" />
                    <line x1="20" y1="88" x2="100" y2="88" />
                  </g>
                  <circle cx="60" cy="125" r="3" fill="#E63329" />
                  <circle cx="60" cy="125" r="6" fill="#E63329" opacity="0.3" />
                </g>
                <text x="220" y="258" fontFamily="monospace" fontSize="10" fill="#1C2A3A">180 mm</text>
              </svg>
            </div>
            <div className="feat-meta">Article · Mechanical &amp; Industrial</div>
            <h3 className="text-lg md:text-xl !font-medium tracking-wide">Designing Enclosures That Survive: DFM, Thermal Paths &amp; IP-Rated Sealing</h3>
            <p className="feat-excerpt">How early CAD-to-CAE collaboration on the mechanical envelope avoids the late-stage rework that derails most hardware programs.</p>
            <a className="feat-readmore" href="#">
              Read article
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function CTABannerSection() {
  return (
    <section className="cta-banner" id="cta-banner-section">
      <div className="cta-banner-inner">
        <span className="cta-square cta-square-tl" aria-hidden="true" />
        <span className="cta-square cta-square-br" aria-hidden="true" />
        <div className="cta-banner-panel">
          <div className="cta-banner-copy">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">Ready to bring your hardware design project to life?</h2>
            <p>Contact us today to get started.</p>
          </div>
          <a href="/contact" className="cta-banner-btn">
            <span>BOOK A MEETING</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 14, height: 14 }}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-white py-24 px-16 max-[900px]:px-6 max-[900px]:py-16">
      <div className="mx-auto max-w-[960px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-center">Frequently Asked <span className="text-brand-500">Questions</span></h2>
        </div>
        <div className="flex flex-col">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="border-b border-gray-200 py-6 group">
              <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex justify-between items-center gap-4 text-zinc-900 text-lg md:text-2xl font-light leading-relaxed tracking-tight hover:text-gray-700 transition-colors duration-200">
                {item.q}
                <svg className="flex-shrink-0 w-6 h-6 text-red-600 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="mt-4 text-base font-light leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// function OtherCapabilitiesSection() {
//   const ocCards = [
//     {
//       title: "PCB Design Services",
//       desc: "Expert PCB design, layout optimization, signal integrity analysis, and DFM reviews for reliable high-performance boards from concept to manufacturing.",
//       img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80&auto=format&fit=crop",
//       href: "/pcb-design",
//     },
//     {
//       title: "Firmware Development Services",
//       desc: "Firmware development, microcontroller selection, and real-time systems optimization for reliable embedded solutions.",
//       img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
//       href: "/embedded-design-services",
//     },
//     {
//       title: "Apps and Cloud",
//       desc: "Mobile and web applications with cloud integration, IoT connectivity, and scalable backend architecture.",
//       img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format&fit=crop",
//       href: "/apps-and-cloud",
//     },
//   ];

//   return (
//     <section className="other-caps">
//       <div className="other-caps-inner">
//         <div className="other-caps-head">
//           <h2>Our other Engineering <span className="accent">capabilities</span></h2>
//         </div>
//         <div className="other-caps-grid">
//           {ocCards.map((card) => (
//             <article key={card.title} className="oc-card">
//               <div className="oc-media">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img src={card.img} alt={card.title} loading="lazy" />
//               </div>
//               <div className="oc-body">
//                 <h3>{card.title}</h3>
//                 <div className="oc-desc"><p>{card.desc}</p></div>
//                 <div className="oc-foot">
//                   <span className="label">Explore Service</span>
//                   <Link href={card.href} className="oc-arrow" aria-label={`Explore ${card.title}`}>
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                       <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ============================================================
   PAGE
   ============================================================ */

export default function HardwareDevelopmentServicesComponentV2() {
  
  return (
    <div className="hd-root">
      {/* HERO */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center overflow-hidden after:absolute after:inset-0 after:bg-black/45 after:pointer-events-none after:content-['']"
        id="hero"
        style={{ backgroundImage: "linear-gradient(135deg, rgba(11,95,165,0.45), rgba(14,20,27,0.55)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&q=80&auto=format&fit=crop')" }}
      >
        <div className="relative z-[2] w-full py-20 px-16 max-w-[1400px] mx-auto max-[900px]:py-16 max-[900px]:px-6">
          <div className="max-w-[820px]">
            <h1 className="text-white mb-6 font-bold leading-[1.1] tracking-[-0.01em] text-balance text-[clamp(36px,5vw,60px)]">Hardware Development Services: The Complete Hardware Product Lifecycle</h1>
            <p className="text-white/[0.92] text-xl leading-[1.6] font-normal mb-10 max-w-[720px]">
              We provide full hardware lifecycle ownership, taking your product from early requirement analysis to production handover. Our lifecycle-driven approach minimizes risk, shortens development cycles, and ensures compliance readiness from day one.
            </p>
            <a className="bg-[#E63329] text-white font-semibold text-base tracking-[0.04em] py-[14px] px-8 rounded-md cursor-pointer transition-colors duration-150 no-underline inline-block hover:bg-[#C72A21] hover:text-white hover:no-underline" href="#workflow">EXPLORE OUR APPROACH</a>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <CapabilitiesSection />

      {/* INDUSTRIES WE SERVE */}
      <IndustriesSection />

      {/* WHY CHOOSE QMAX */}
      <WhySection />

      {/* PARTNERSHIPS */}
      <PartnershipsSection />

      {/* WORKFLOW TIMELINE */}
      <div id="workflow">
        <WorkflowSection />
      </div>

      {/* CUSTOMER SUCCESS STORIES */}
      <TestimonialsSection />

      {/* CTA BANNER */}
      <CTABannerSection />

      {/* FEATURED ARTICLES */}
      <FeaturedArticlesSection />

      {/* FAQ */}
      <FAQSection />

      {/* OTHER CAPABILITIES */}
      <OtherCapabilitiesScrollSection capabilities={hardwareDevelopmentOtherCapabilities} />
    </div>
  );
}
