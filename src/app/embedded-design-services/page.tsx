import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { DayOneThinkingSection } from "@/components/services-cmp/embedded/DayOneThinkingSection";
import { EmbeddedSoftwareCapabilitiesSection } from "@/components/services-cmp/embedded/EmbeddedSoftwareCapabilitiesSection";
import { FirmwareLifecycleSection } from "@/components/services-cmp/embedded/FirmwareLifecycleSection";
import { ModularFirmwareFrameworksSection } from "@/components/services-cmp/embedded/ModularFirmwareFrameworksSection";
import type { DayOneInsight } from "@/components/services-cmp/embedded/DayOneThinkingSection";
import type { EmbeddedSoftwareCapability } from "@/components/services-cmp/embedded/EmbeddedSoftwareCapabilitiesSection";
import type { FirmwareLifecyclePhase } from "@/components/services-cmp/embedded/FirmwareLifecycleSection";
import type { FirmwareFramework } from "@/components/services-cmp/embedded/ModularFirmwareFrameworksSection";
import { ServiceVideoHero } from "@/components/services-cmp/service-video-hero";
import { PCBIndustriesSection } from "@/components/services-cmp/PCBIndustriesSection";
import { HARDWARE_INDUSTRIES } from "@/store/hardware-industries";
import { WhySection } from "@/components/services-cmp/WhySection";
import { PartnershipsSection } from "@/components/services-cmp/PartnershipsSection";
import { EMBEDDED_PARTNER_LOGOS } from "@/data/partner-logos";
import { CTABannerSection } from "@/components/services-cmp/CTABannerSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { ServiceCaseStudy } from "@/data/service-case-studies";
import {
  allCaseStudiesData,
  getCaseStudyCardImage,
} from "@/store/case-studies";

export const metadata = buildMetadata({
  title: "Embedded Design Services | Firmware, BSP & FPGA | Qmax",
  description:
    "Embedded design services - firmware development, BSP and driver development, FPGA design on Xilinx Zynq, RTOS integration, and cross-platform applications.",
  path: "/embedded-design-services",
});

const HERO = {
  title:
    "Embedded Design Services - Firmware, Bring-Up, and OTA Across the Lifecycle",
  description:
    "Qmax Systems provides embedded design services across the complete product lifecycle - from requirements and architecture through board bring-up, validation, and OTA-based fleet maintenance. Qmax Systems engineers design for real-world deployment from Day 1: ASIL traceability for automotive (ISO 26262), IEC 62304 for medical devices, DO-178C for avionics, and OPC-UA determinism for industrial systems - not retrofitted at sign-off.",
  ctaLabel: "Talk to our engineers",
  ctaHref: "/embedded-design-services/contact",
  videoSrc:
    "https://d1yetprhniwywz.cloudfront.net/v2/services_video/embedded_hero_video.mp4",
};

const FIRMWARE_LIFECYCLE = {
  title: "Firmware Lifecycle",
  subtitleHighlight: "requirement to production",
  phases: [
    {
      phase: 1,
      title: "Requirements",
      items: ["Firmware PRD", "Feasibility & toolchain"],
    },
    {
      phase: 2,
      title: "Architecture",
      items: ["SW architecture", "RTOS / Linux selection"],
    },
    {
      phase: 3,
      title: "Detailed Design",
      items: ["Drivers & BSP", "Middleware & app", "Code reviews"],
    },
    {
      phase: 4,
      title: "Bring-Up",
      items: ["Bootloader & BSP", "Functional bring-up", "Debug & iterate"],
    },
    {
      phase: 5,
      title: "Validation",
      items: ["Stress & endurance", "HIL & integration"],
    },
    {
      phase: 6,
      title: "QA & Compliance",
      items: ["MISRA & static analysis", "Security audit", "Cert readiness"],
    },
    {
      phase: 7,
      title: "Production",
      items: ["Mfg firmware & jigs", "Provisioning", "OTA & maintenance"],
    },
  ] satisfies FirmwareLifecyclePhase[],
};

const DAY_ONE_INSIGHTS: DayOneInsight[] = [
  {
    title: "OTA Updates",
    description:
      "Signed, encrypted firmware delivery with dual‑bank rollback and delta updates - designed in before line one.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 10h-1A5 5 0 0 0 6 9.5 4 4 0 0 0 6.5 17H17a3.5 3.5 0 0 0 0-7z" />
        <path d="M12 11v6" />
        <polyline points="9 14 12 17 15 14" />
      </svg>
    ),
  },
  {
    title: "Battery Optimization",
    description:
      "Adaptive duty cycling, deep‑sleep wake sources, and energy profiling - so devices last years on a single charge.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="7" width="16" height="11" rx="2" />
        <line x1="19" y1="11" x2="21.5" y2="11" />
        <line x1="19" y1="14" x2="21.5" y2="14" />
        <polyline
          points="8 15 11 11 10 11 13 8"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Certification",
    description:
      "FCC, CE, BIS, IEC, UL, ISO 13485, IEC 62304, AEC‑Q100 - compliance considered in architecture, not bolted on later.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
        <polyline points="9 12 11 14 15 10" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Commissioning",
    description:
      "QR or mobile‑assisted onboarding, identity provisioning, cloud registration, and secure key exchange built‑in.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3h-3zM18 18h3v3h-3z" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "On‑Field Troubleshooting",
    description:
      "Logging, remote diagnostics, watchdog telemetry, and remote command interfaces - engineered for fleet operations, not lab demos.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path
          d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-1.5-1.5 2.5-2.5z"
          stroke="currentColor"
        />
        <circle cx="17" cy="17" r="3" />
        <line x1="17" y1="14" x2="17" y2="17" />
        <line x1="17" y1="17" x2="19" y2="17" />
      </svg>
    ),
  },
  {
    title: "Communication Cost",
    description:
      "Payload compression, delta encoding, and smart backoff - measured against your cellular / LPWAN bill from day one.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="4" y1="20" x2="4" y2="16" />
        <line x1="9" y1="20" x2="9" y2="13" />
        <line x1="14" y1="20" x2="14" y2="10" />
        <line x1="19" y1="20" x2="19" y2="6" />
        <circle cx="19" cy="6" r="2.5" stroke="currentColor" />
        <text
          x="16.5"
          y="9"
          fontSize="6"
          fill="#EF4444"
          stroke="none"
          fontFamily="sans-serif"
          fontWeight="700"
        >
          $
        </text>
      </svg>
    ),
  },
  {
    title: "MTBF & Reliability",
    description:
      "Component derating, thermal margin, watchdogs, and 24‑72h endurance runs - reliability designed and proven, not assumed.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="13" r="8" />
        <polyline points="12 8 12 13 16 15" stroke="currentColor" />
        <line x1="12" y1="3" x2="12" y2="5" />
        <line x1="9" y1="3" x2="15" y2="3" />
      </svg>
    ),
  },
  {
    title: "Security Updates",
    description:
      "Secure boot, signed images, X.509 identity, TPM/secure element anchoring, and a patch pipeline that survives the whole product life.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        <path d="M12 15v2" stroke="currentColor" />
        <circle
          cx="12"
          cy="15"
          r="0.5"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    ),
  },
];

const DAY_ONE_THINKING = {
  title: "Day 1 Thinking For",
  titleHighlight: "Real‑World Deployment",
  description:
    "Qmax Systems engineers plan for field deployment from Day 1 - before the first line of production firmware is written. OTA pipeline design, battery duty-cycling, certification readiness (FCC, CE, IEC 62304, ISO 26262, AEC-Q100), commissioning workflows, remote diagnostics, communication cost budgeting, MTBF planning, and security patch cadence are all architected at project start - not added after the first field failure.",
  insights: DAY_ONE_INSIGHTS,
  calloutTitle: "...and many more domain‑specific factors",
  calloutDescription:
    "From IEC 62304 software life‑cycle for medical, to ISO 26262 ASIL traceability for automotive, to DO‑178C for avionics, to OPC‑UA determinism for industrial - we anticipate the factors unique to your domain and engineer for them from Day 1, not after the first field failure.",
};

const EMBEDDED_SOFTWARE_CAPABILITIES: EmbeddedSoftwareCapability[] = [
  {
    id: "bare-metal",
    tabLabel: "Bare-metal Firmware (C / C++)",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    ),
    headline: "Bare-metal firmware in C / C++ across leading MCU silicon.",
    intro:
      "Qmax Systems engineers start at first power-on - clock tree configuration, boot ROM initialization, and flash memory map - and deliver deterministic, MISRA-C/C++ compliant firmware. Peripheral drivers (SPI, I²C, UART, USB, CAN, ADC), bootloader design, and application code are engineered for the tight constraints of MCU targets including STM32, ESP32, NXP i.MX RT, and Nordic nRF52/53.",
    bullets: [
      {
        title: "Multi-Vendor MCU Expertise",
        items: [
          "STM32 (F0 / F4 / H7 / WB).",
          "ESP32 family (ESP32, S3, C3).",
          "NXP (LPC, i.MX RT series).",
          "Renesas (RA, RX), TI (MSP430, Sitara, SimpleLink).",
          "Nordic (nRF52 / nRF53 BLE).",
        ],
      },
      {
        title: "Bare-Metal Engineering",
        items: [
          "Board bring-up & silicon validation.",
          "Peripheral drivers (SPI, I²C, UART, ADC, USB, CAN).",
          "Clock tree & power management.",
          "Bootloader design & flash memory management.",
          "MISRA-C / C++ compliance & static analysis.",
        ],
      },
    ],
  },
  {
    id: "rtos-linux",
    tabLabel: "RTOS & Embedded Linux",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
      </svg>
    ),
    headline:
      "RTOS and Embedded Linux platforms tuned for real-time and reliability.",
    intro:
      "Qmax Systems engineers real-time platforms from FreeRTOS and Zephyr RTOS on Cortex-M to Yocto and Buildroot Linux on Cortex-A. Qmax Systems tunes scheduler behavior, ISR design, and memory layout against measurable timing and footprint targets - delivering bounded latency guarantees, secure boot with dm-verity, and device-tree-based driver models on production hardware.",
    bullets: [
      {
        title: "RTOS Platforms",
        items: [
          "FreeRTOS, Zephyr, ThreadX, RT-Thread.",
          "Scheduler tuning & ISR design.",
          "Inter-task communication & timing budget.",
          "Bounded latency & determinism analysis.",
        ],
      },
      {
        title: "Embedded Linux",
        items: [
          "Yocto / Buildroot custom distributions.",
          "U-Boot, kernel patches, device tree.",
          "Linux drivers (char, I²C, SPI, USB, V4L2).",
          "Secure boot, dm-verity, signed root FS.",
        ],
      },
    ],
  },
  {
    id: "router-netos",
    tabLabel: "Router & Network OS",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="13" width="18" height="7" rx="1.5" />
        <path d="M7 17h.01M11 17h.01" />
        <path d="M12 13V9M8 9a4 4 0 0 1 8 0M5 6a7 7 0 0 1 14 0" />
      </svg>
    ),
    headline:
      "Router platforms and network operating systems for carrier-grade reliability.",
    intro:
      "Qmax Systems develops OpenWrt-based router firmware, OpenWiFi integration, and Wi-Fi 6/6E mesh networking platforms for service-provider and enterprise deployments. Qmax Systems engineers build and integrate VPN stacks (IPsec, WireGuard, OpenVPN), VLAN, QoS, and advanced routing protocols, with full OTA fleet management and remote diagnostics pipelines.",
    bullets: [
      {
        title: "Router & AP Platforms",
        items: [
          "OpenWrt-based router firmware.",
          "OpenWiFi integration.",
          "Wi-Fi 6 / 6E mesh networking.",
          "Access point firmware.",
        ],
      },
      {
        title: "Network Stacks & Management",
        items: [
          "Firewall and VPN stacks (IPsec, WireGuard, OpenVPN).",
          "VLAN, QoS, and advanced routing protocols.",
          "Network monitoring & diagnostics.",
          "Remote OTA updates & fleet management.",
        ],
      },
    ],
  },
  {
    id: "server-grade",
    tabLabel: "Server-Grade Systems · Full Stack",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="7" rx="1.5" />
        <rect x="3" y="14" width="18" height="7" rx="1.5" />
        <path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" />
      </svg>
    ),
    headline: "Server-grade systems - full stack from BMC to BIOS to power.",
    intro:
      "Qmax Systems delivers end-to-end server platform firmware - from board bring-up and power sequencing through OpenBMC, IPMI, Redfish remote management, and UEFI/EDK-II BIOS development. Qmax Systems integrates CPLD/FPGA board control firmware, TPM-anchored secure boot, and Linux bring-up for server platforms under a single accountable engineering team.",
    bullets: [
      {
        title: "BMC, BIOS & OS Bring-up",
        items: [
          "OpenBMC, IPMI, Redfish.",
          "BIOS / UEFI development (EDK-II).",
          "Linux bring-up for server platforms.",
          "Power sequencing & management.",
        ],
      },
      {
        title: "Board Control & Security",
        items: [
          "CPLD / FPGA firmware for board control.",
          "Sensor monitoring & telemetry.",
          "Secure boot, TPM, and integrity.",
          "Remote management & diagnostics.",
        ],
      },
    ],
  },
];

const EMBEDDED_SOFTWARE = {
  title: "Embedded Software Across The Full Stack —",
  titleHighlight: "Bare‑Metal To Server‑Grade",
  description:
    "Qmax Systems delivers embedded software across the full firmware stack - bare-metal C/C++ on resource-constrained MCUs, FreeRTOS and Zephyr RTOS on Cortex-M, Yocto Linux on Cortex-A, OpenWrt-based networking platforms, and OpenBMC/UEFI server firmware. All work is developed to MISRA-C/C++ coding standards and validated on production silicon.",
  capabilities: EMBEDDED_SOFTWARE_CAPABILITIES,
};

const MODULAR_FIRMWARE_FRAMEWORKS: FirmwareFramework[] = [
  {
    title: "Secure OTA",
    subtitle: "Over-the-Air firmware updates for remote upgrades.",
    items: [
      "Signed & encrypted images",
      "Dual-bank rollback",
      "Delta updates",
      "Device authentication",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 10h-1A5 5 0 0 0 6 9.5 4 4 0 0 0 6.5 17H17a3.5 3.5 0 0 0 0-7z" />
        <path d="M12 11v6" />
        <polyline points="9 14 12 17 15 14" />
      </svg>
    ),
  },
  {
    title: "Battery Management",
    subtitle: "Efficient power usage for remote IoT devices.",
    items: [
      "Advanced sleep states",
      "Adaptive duty cycling",
      "Battery health monitoring",
      "Dynamic frequency scaling",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="7" width="16" height="11" rx="2" />
        <line x1="19" y1="11" x2="21.5" y2="11" />
        <line x1="19" y1="14" x2="21.5" y2="14" />
        <polyline
          points="8 15 11 11 10 11 13 8"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Cellular Communication",
    subtitle: "Secure communication stacks for cellular devices.",
    items: [
      "LTE-M / NB-IoT / GSM",
      "TLS / DTLS messaging",
      "MQTT / CoAP",
      "Auto-recovery & backoff",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12.5 a8 8 0 0 1 14 0" />
        <path d="M8 14.5 a5 5 0 0 1 8 0" />
        <path d="M11 16.5 a2 2 0 0 1 2 0" />
        <circle cx="12" cy="19" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Commissioning",
    subtitle: "Secure onboarding infrastructure for IoT ecosystems.",
    items: [
      "Identity provisioning",
      "QR / mobile assisted",
      "Cloud registration",
      "Secure key exchange",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3h-3zM18 18h3v3h-3z" />
      </svg>
    ),
  },
];

const MODULAR_FIRMWARE = {
  title: "Modular Firmware Frameworks Built For",
  titleHighlight: "Reuse, Scale, And Security",
  description:
    "Qmax Systems builds four production-ready modular firmware frameworks - Secure OTA, Battery Management, Cellular Communication, and Device Commissioning - deployed across Qmax Systems programs in IoT, medical, and industrial markets. These reusable libraries shorten time-to-market and reduce long-term maintenance cost for fleets ranging from hundreds to hundreds of thousands of devices.",
  frameworks: MODULAR_FIRMWARE_FRAMEWORKS,
};

const WHY_CARDS = [
  {
    title: "Transparent & Supervised Process",
    desc: "Qmax Systems provides full milestone visibility - every design review, risk register, and build delivered on a weekly cadence with traceable deliverables and zero hidden surprises at handover.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 24c0-8 8-14 16-14s16 6 16 14" />
        <circle cx="24" cy="24" r="4" />
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4" />
        <path d="M14 14l3 3M31 31l3 3M14 34l3-3M31 17l3-3" />
      </svg>
    ),
  },
  {
    title: "Lifecycle Maintenance",
    desc: "Qmax Systems engagement extends well beyond launch - feature updates, silicon obsolescence management, security patches, and OTA fleet rollouts keep firmware healthy across the full commercial life of the product.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M24 8v8l6 4" />
        <path d="M40 24a16 16 0 1 1-6.2-12.7" />
        <path d="M32 8h8v8" />
      </svg>
    ),
  },
  {
    title: "Smooth Hardware-Firmware Integration",
    desc: "Qmax Systems firmware engineers sit next to the hardware team - board bring-up timelines collapse, schematic risks surface early, and the system comes up clean on the first prototype spin.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="8" y="10" width="14" height="14" rx="2" />
        <rect x="26" y="24" width="14" height="14" rx="2" />
        <path d="M22 17h4M22 20h2" />
        <path d="M30 30h4M30 33h2" />
        <path d="M22 17l8 13" />
      </svg>
    ),
  },
  {
    title: "Expert Engineers",
    desc: "Qmax Systems engineers average 12+ years of experience across automotive, medical, aerospace, IoT, and networking. Senior engineers own every design - no junior hand-offs, no learning on the client's timeline.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
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
    title: "Strict Coding Standards & Quality",
    desc: "Qmax Systems enforces MISRA‑C/C++, automated static analysis, HIL testing, and 24–72 hour endurance runs with memory-leak and OTA-rollback validation as part of every release.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M24 6 10 12v10c0 9 6 16 14 18 8-2 14-9 14-18V12L24 6z" />
        <path d="M18 24l4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "Reusable Frameworks",
    desc: "Qmax Systems battle-tested libraries for Secure OTA, Battery Management, Cellular Communications, and Device Commissioning shorten time-to-market and lower long-term maintenance cost across programs.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="10" y="26" width="28" height="12" rx="2" />
        <rect x="14" y="16" width="20" height="10" rx="2" />
        <rect x="18" y="8" width="12" height="8" rx="2" />
      </svg>
    ),
  },
];

const FAQ_ITEMS = [
  {
    q: "Does Qmax Systems provide end-to-end embedded firmware development?",
    a: "Yes. Qmax Systems owns the entire firmware lifecycle - from requirements capture, architecture, and driver development through board bring-up, validation, and production handover. Qmax Systems engineers align firmware milestones with hardware prototype spins and continue engagement into OTA-based field maintenance, giving clients a single accountable partner from concept to fleet operation.",
  },
  {
    q: "Who owns the IP when working with Qmax Systems?",
    a: "The client does - 100%. Unless otherwise agreed in writing, all IP generated during a Qmax Systems engagement - including source code, build scripts, test suites, and documentation - belongs exclusively to the client. Qmax Systems operates under strict NDAs with customers, employees, and third-party vendors to fully safeguard client innovations throughout and after the engagement.",
  },
  {
    q: "What chipsets and platforms does Qmax Systems support?",
    a: "Qmax Systems supports STM32 (F0/F4/H7/WB), ESP32 (ESP32, S3, C3), NXP (LPC, i.MX RT), Renesas (RA, RX), TI (MSP430, Sitara, SimpleLink), Nordic (nRF52/nRF53), Qualcomm, NVIDIA, Analog Devices, Infineon, and Microchip. Qmax Systems also delivers server firmware on OpenBMC/EDK-II UEFI platforms and network firmware on OpenWrt and OpenWiFi router platforms.",
  },
  {
    q: "How does Qmax Systems handle firmware security and OTA updates?",
    a: "Security is a Day 1 decision at Qmax Systems. Qmax Systems designs signed and encrypted OTA pipelines with dual-bank rollback, delta updates, and device authentication. Secure boot with signed images, X.509 device identity, and TPM/secure-element anchoring are built into the Qmax Systems reference firmware framework - not added as an afterthought.",
  },
  {
    q: "What coding standards does Qmax Systems follow?",
    a: "Qmax Systems enforces MISRA-C/C++ for all safety-critical firmware, automated static analysis at every pull request, peer code review, HIL (hardware-in-the-loop) testing, and 24–72 hour endurance runs with memory-leak and OTA-rollback validation as part of every release cycle.",
  },
  {
    q: "Does Qmax Systems support long-term firmware maintenance?",
    a: "Yes. Qmax Systems engagement extends well beyond product launch. Qmax Systems provides lifecycle maintenance covering feature updates, silicon obsolescence management, security patches, and OTA fleet rollouts - keeping firmware healthy across the full commercial life of the product, including field variants and updated silicon revisions.",
  },
];

function serviceCaseStudies(ids: string[]): ServiceCaseStudy[] {
  return ids.map((id) => {
    const study = allCaseStudiesData.find((c) => c.id === id);
    const image = getCaseStudyCardImage(id);
    if (!study || !image) {
      throw new Error(`Case study missing or has no image: ${id}`);
    }
    const sentenceMatch = study.summary.match(/^[\s\S]*?[.!?](?=\s|$)/);
    const first = (sentenceMatch ? sentenceMatch[0] : study.summary).trim();
    const summary =
      first.length > 200 ? `${first.slice(0, 197).trimEnd()}…` : first;
    return {
      title: study.title,
      image,
      link: `/case-studies/${study.id}`,
      category: "hardware",
      summary,
      imageRotation: study.rotatedImages?.[study.cardImageIndex ?? 0],
    };
  });
}

const embeddedCaseStudies: ServiceCaseStudy[] = serviceCaseStudies([
  "industrial-iot-gateway-with-poe",
  "smart-monitoring-system",
  "wifi-6e-router",
  "lung-sound-recorder",
]);

export default function EmbeddedDesignServicesPage() {
  return (
    <>
      <ServiceVideoHero {...HERO} />
      <FirmwareLifecycleSection {...FIRMWARE_LIFECYCLE} />
      <DayOneThinkingSection {...DAY_ONE_THINKING} />
      <EmbeddedSoftwareCapabilitiesSection
        {...EMBEDDED_SOFTWARE}
        getInTouchHref="/embedded-design-services/contact"
      />
      <ModularFirmwareFrameworksSection {...MODULAR_FIRMWARE} />
      <PCBIndustriesSection
        industries={HARDWARE_INDUSTRIES.map((industry) => ({
          ...industry,
          ctaHref: "/embedded-design-services/contact",
        }))}
        headingPrefix="Embedded Engineering"
        ctaLabel="Learn More"
      />
      {/* WHY CHOOSE QMAX */}
      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="Embedded Firmware?"
        className="pb-0 max-[900px]:pb-0"
      />

      <section
        className="bg-white px-16 pt-0 pb-24 max-[900px]:px-6 max-[900px]:pb-16"
        aria-label="Contact founder"
      >
        <div className="mx-auto max-w-[1200px]">
          <a
            className="relative block aspect-[2396/520] w-full cursor-pointer overflow-hidden rounded-xl bg-black no-underline shadow-[0_1px_2px_rgba(16,24,40,0.06)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:no-underline hover:shadow-[0_6px_16px_rgba(16,24,40,0.10)]"
            href="/embedded-design-services/contact"
            aria-label="Have your questions answered - contact Saravanaperumal Annamalai, VP - SWE Engineering"
          >
            <Image
              src="/embedded-design-services/founder-cta-banner.png"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              className="object-cover object-center"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-between px-[5%] py-6 max-[900px]:px-5 max-[900px]:py-4">
              <div className="flex max-w-[54%] flex-col gap-3 max-[900px]:max-w-[62%] max-[900px]:gap-2">
                <h2 className="text-[clamp(1rem,2.8vw,2.35rem)] font-semibold leading-[1.12] tracking-[0.2px] text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.45)]">
                  Have Your Questions Answered!
                </h2>
                <p className="text-[clamp(0.5rem,1.15vw,0.9rem)] uppercase leading-[1.35] tracking-[0.1em] text-white/95 [text-shadow:_0_1px_3px_rgba(0,0,0,0.4)]">
                  Send your requirements and get an assessment
                </p>
                <span className="mt-0.5 inline-flex w-fit rounded-md bg-white px-5 py-2.5 text-[clamp(0.7rem,1.25vw,1.05rem)] font-bold tracking-[0.2px] text-[#0a0a0a] shadow-[0_2px_8px_rgba(0,0,0,0.18)] max-[900px]:px-4 max-[900px]:py-2">
                  Ask a Question
                </span>
              </div>
              <div className="absolute bottom-4 right-[5%] shrink-0 text-right text-[clamp(0.7rem,1.35vw,1.125rem)] font-semibold leading-[1.3] tracking-[0.2px] text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.45)] max-[900px]:right-5">
                <span className="block font-bold">
                  Saravanaperumal Annamalai
                </span>
                <span className="block font-normal">VP - SWE Engineering</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <PartnershipsSection
        heading="Silicon Platforms"
        headingHighlight="We Build On"
        paragraph="Across hundreds of programs, Qmax Systems firmware engineers have shipped production code on the silicon below - carrying hands-on experience with toolchains, SDKs, errata sheets, and reference designs so every project starts from working ground, not from scratch."
        logos={EMBEDDED_PARTNER_LOGOS}
      />

      {/* CTA BANNER */}
      <CTABannerSection
        href="/embedded-design-services/contact"
        heading="Ready To Bring Your Embedded Design Project To Life?"
      />

      <ServiceCaseStudiesSection
        eyebrow="Embedded Programs"
        studies={embeddedCaseStudies}
        hideTopBorder
      />

      {/* FAQ */}
      <FAQSection faqItems={FAQ_ITEMS} />
      <div className="pb-28"></div>
    </>
  );
}
