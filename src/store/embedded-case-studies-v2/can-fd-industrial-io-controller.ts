import { embeddedCaseStudiesData } from "@/store/embedded-case-studies";
import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const canFdIndustrialIoControllerImages = [
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/CHARA/1.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/CHARA/2.1.PNG",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/CHARA/3.1.PNG",

  "/case-studies/CHARA/CHARA-T_B.svg",
  "/case-studies/CHARA/CHARA-TB.svg",
  "/case-studies/CHARA/CHARA-top.svg",
];

export const canFdIndustrialIoControllerCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "can-fd-industrial-io-controller",
    slug: "can-fd-industrial-io-controller",
    section: "embedded",
    title: "CAN FD-Based High-Density Industrial I/O Controller",
    subtitle: "Embedded Systems — Full Product Development",
    metaTags: [
      "Domain: Industrial Automation",
      "Industry: Automotive Wiring Harness Testing",
      "Market: Global",
    ],
    ribbonStats: [
      {
        value: "240 Channels",
        label: "Digital I/O",
      },
      {
        value: "5 MCUs",
        label: "Synchronized",
      },
      {
        value: "500+ Units",
        label: "Shipped",
      },
      {
        value: "6-Layer PCB",
        label: "High-Density Design",
      },
    ],
    navSections: [
      { id: "overview", num: "01", label: "Project Overview" },
      { id: "brief", num: "02", label: "Product Brief" },
      { id: "scope", num: "03", label: "Scope of Work" },
      { id: "challenges", num: "04", label: "Engineering Challenges" },
      { id: "components", num: "05", label: "Hardware Components" },
      { id: "interfaces", num: "06", label: "Interfaces & Protocols" },
      { id: "firmware", num: "07", label: "Firmware & Software" },
      { id: "specs", num: "08", label: "Technical Specifications" },
      { id: "summary", num: "09", label: "Summary" },
    ],
    images: canFdIndustrialIoControllerImages,
    overview: [
      "Qmax Systems designed and delivered a CAN FD-based, high-density Industrial I/O Controller for a customer serving the automotive wiring harness manufacturing industry. The system replaces multiple high-end PLCs and I/O cards with a single, PC-programmable platform capable of testing hundreds of wire-to-wire connections across complex automotive wiring harnesses at production speed.",
      "Qmax owned the complete development lifecycle — architecture, hardware design, firmware, PCB design, prototyping, and full Design Verification Testing (DVT) — carrying the product from customer requirement through to volume manufacturing. The customer has since manufactured and shipped 500+ units to automotive wiring harness manufacturers.",
    ],
    brief: [
      "The Industrial I/O Controller is a massive digital I/O card supporting 240 discrete DIO channels, built around five automotive-grade microcontrollers operating in synchronization to manage this channel density within tight timing budgets. Each I/O channel is individually configurable over a CAN interface (FlexCAN 2.0B / CAN FD), letting operators define input, output, and test-signal behavior directly from a PC without reprogramming firmware.",
      "The controller integrates analog inputs, pressure sensor / switch inputs, and LED and buzzer status indicators, and is architected to be cascaded so multiple cards can be linked together to scale I/O count for larger harness assemblies. Deployed on the factory floor, it performs rapid short/open testing across the many wire-to-wire connection combinations found in modern automotive wiring harnesses.",
    ],
    scopeIntro:
      "Qmax Systems executed the complete product development lifecycle for this industrial I/O platform:",
    scopeItems: [
      "End-to-end system architecture definition based on customer test requirements",
      "Hardware design of a 5-MCU synchronized, high-density digital I/O controller",
      "Firmware development in bare-metal C on ST SPC5 automotive microcontrollers (SPC5 Studio IDE)",
      "6-layer, high-density PCB design (2,600+ components, 6,800+ pins)",
      "CAN FD interface and communication protocol implementation",
      "Analog front-end design for pressure sensor / switch inputs",
      "Prototype build and full Design Verification Testing (DVT)",
      "Ongoing design support through production ramp to 500+ units shipped",
    ],
    challenges: [
      {
        challenge:
          "Synchronizing 5 automotive-grade MCUs to manage 240 I/O channels without timing drift",
        resolution:
          "Implemented a coordinated multi-MCU firmware architecture with deterministic scan cycles and shared timing references, ensuring all five SPC5 controllers maintain lockstep I/O operation across the full 240-channel matrix",
      },
      {
        challenge:
          "Achieving very high component density (2,600+ parts) on a compact 6-layer board",
        resolution:
          "Applied high-density PCB layout techniques across a 6-layer stack-up with optimized power/ground planes, micro-via routing, and disciplined component placement to fit 2,616 parts within a 75 sq. in. board area",
      },
      {
        challenge:
          "Designing a configurable I/O architecture flexible enough for varied harness test patterns",
        resolution:
          "Built a CAN FD-configurable channel model where each of the 240 DIO lines can be individually set as input, output, or test signal from a PC-based configuration utility — eliminating firmware changes for new test sequences",
      },
      {
        challenge:
          "Maintaining signal integrity across a high pin-count, densely routed digital I/O design",
        resolution:
          "Engineered controlled-impedance routing, dedicated return paths, and careful layer assignment for high-speed digital switching across 6,800+ pins while preserving clean signal transitions at production test speeds",
      },
      {
        challenge:
          "Supporting cascading of multiple cards while preserving CAN bus reliability",
        resolution:
          "Designed a dedicated cascading connector interface with robust CAN FD bus topology and termination strategy, allowing multiple I/O cards to be linked for expanded channel count without compromising communication integrity",
      },
      {
        challenge:
          "Meeting industrial-grade robustness requirements for continuous factory-floor operation",
        resolution:
          "Selected automotive-grade components, implemented multi-rail power distribution with protection, and validated the design through full DVT cycles simulating continuous factory-floor operating conditions",
      },
      {
        challenge:
          "Integrating precision analog sensing alongside high-speed digital switching on one board",
        resolution:
          "Partitioned analog and digital domains with dedicated front-end circuitry (instrumentation amplifiers, delta-sigma ADC) isolated from high-side switch noise, enabling accurate pressure sensor / switch monitoring on the same board as 240 digital channels",
      },
      {
        challenge:
          "Minimizing full test-cycle time despite the combinatorial growth of wire-to-wire test combinations",
        resolution:
          "Optimized multi-MCU parallel scanning firmware and fault detection logic to rapidly identify open/short conditions across harness connections, delivering production-speed test throughput despite the combinatorial test matrix",
      },
    ],
    hardwareComponents: [
      {
        title: "ST SPC560B50L5C6E0Y",
        description:
          "5× automotive-grade microcontrollers — synchronized multi-MCU control of 240 I/O channels (STMicroelectronics SPC5 family)",
      },
      {
        title: "MCP2542FD",
        description:
          "CAN FD transceivers for FlexCAN 2.0B communication and PC-based configuration interface",
      },
      {
        title: "ISL81487",
        description: "RS-485 transceiver for auxiliary serial communication",
      },
      {
        title: "AD8221",
        description:
          "Instrumentation amplifiers for precision pressure sensor / switch sensing",
      },
      {
        title: "MCP3426",
        description: "16-bit delta-sigma ADC for analog input conversion",
      },
      {
        title: "TPS4H160",
        description:
          "Multi-channel high-side smart power switches for digital output driving",
      },
      {
        title: "TPS563208, MIC5377",
        description:
          "Buck regulators and LDOs for multi-rail power distribution",
      },
      {
        title: "AT24C08C",
        description: "I2C EEPROM for configuration and calibration storage",
      },
    ],
    interfaces: [
      {
        title: "CAN FD (FlexCAN 2.0B)",
        description:
          "Primary configuration and control interface — field-programmable I/O behavior from a host PC",
      },
      {
        title: "RS-485",
        description: "Auxiliary serial communication",
      },
      {
        title: "Digital I/O",
        description:
          "240 configurable channels for wiring harness test connections",
      },
      {
        title: "Analog Inputs",
        description: "Pressure sensor / switch monitoring",
      },
      {
        title: "I2C",
        description: "EEPROM configuration and calibration storage",
      },
      {
        title: "PC Programming Interface",
        description:
          "Field configuration of I/O behavior from a host PC without firmware reprogramming",
      },
      {
        title: "Cascading Connector",
        description:
          "Links multiple I/O cards for expanded channel count on larger harness assemblies",
      },
      {
        title: "Status / Indicator",
        description: "LEDs and buzzer for pass/fail and operational feedback",
      },
    ],
    firmwareIntro:
      "Bare-metal C firmware developed on ST SPC5 automotive microcontrollers using SPC5 Studio:",
    firmwareItems: [
      {
        title: "Multi-MCU Synchronization",
        description:
          "Coordinated firmware for five SPC560B50 controllers managing synchronized 240-channel I/O scanning without timing drift",
      },
      {
        title: "CAN FD Protocol Stack",
        description:
          "FlexCAN 2.0B / CAN FD implementation for configuration commands and data exchange with the host PC",
      },
      {
        title: "PC Configuration Utility Integration",
        description:
          "Integration with a PC-based configuration tool for field-programmable I/O channel behavior",
      },
      {
        title: "Analog Signal Acquisition",
        description:
          "Calibration routines and acquisition logic for pressure sensor / switch inputs via MCP3426 ADC",
      },
      {
        title: "Fault Detection Logic",
        description:
          "Open/short circuit identification across harness wire-to-wire connection combinations",
      },
      {
        title: "Status Indication",
        description:
          "LED and buzzer control logic for pass/fail test feedback on the factory floor",
      },
      {
        title: "DVT Validation",
        description:
          "Firmware validated across full Design Verification Testing test cycles before production release",
      },
    ],
    specs: [
      {
        key: "Product Name",
        value: "CAN FD-Based High-Density Industrial I/O Controller",
      },
      {
        key: "Domain / Industry",
        value:
          "Industrial Automation | Automotive Wiring Harness Testing | Test & Measurement",
      },
      {
        key: "Digital I/O Channels",
        value: "240 configurable discrete DIO channels",
      },
      {
        key: "Microcontrollers",
        value: "5× ST SPC560B50L5C6E0Y automotive-grade MCUs (synchronized)",
      },
      {
        key: "Primary Interface",
        value: "CAN FD (FlexCAN 2.0B) — PC-configurable I/O behavior",
      },
      {
        key: "Auxiliary Interface",
        value: "RS-485 serial communication",
      },
      {
        key: "Analog Inputs",
        value:
          "Pressure sensor / switch inputs via AD8221 instrumentation amplifiers and MCP3426 16-bit ADC",
      },
      {
        key: "Layer Count",
        value: "6 layers",
      },
      {
        key: "PCB Thickness",
        value: "64 mils",
      },
      {
        key: "Board Area",
        value: "75 sq. in.",
      },
      {
        key: "Total Components",
        value: "2,616",
      },
      {
        key: "Total Pins",
        value: "6,800+",
      },
      {
        key: "Cascading",
        value: "Multiple cards linkable for expanded I/O count",
      },
      {
        key: "Production Volume",
        value: "500+ units shipped to automotive wiring harness manufacturers",
      },
      {
        key: "Scope Delivered",
        value:
          "Full product development: Architecture → HW → FW → PCB → Prototype → DVT → Production Support",
      },
    ],
    summary: [
      "Qmax Systems delivered a complete CAN FD-based Industrial I/O Controller from architecture through production support, giving the customer a single, PC-programmable platform that replaces multiple high-end PLCs and I/O cards. With 240 configurable digital I/O channels driven by five synchronized automotive-grade microcontrollers, the system performs fast, reliable connection testing across complex automotive wiring harnesses.",
      "The product has scaled to 500+ units shipped to automotive wiring harness manufacturers, demonstrating Qmax Systems' capability to take high-density embedded controller platforms from concept through architecture, hardware, firmware, PCB design, prototyping, and DVT to volume production.",
    ],
    contactCtaPrefix:
      "Need a high-density industrial I/O or embedded controller platform? Qmax Systems takes embedded products from concept through architecture, hardware, firmware, PCB design, prototyping, and DVT to production. Talk to us about your next industrial or embedded controller design.",
    listingSummary:
      "CAN FD-based industrial I/O controller with 240 configurable channels, five synchronized automotive MCUs, and PC-programmable harness testing — 500+ units shipped.",
    metadata: {
      title: "CAN FD Industrial I/O Controller | Case Study",
      description:
        "Full product development case study — CAN FD-based high-density industrial I/O controller with 240 channels and five synchronized MCUs for automotive wiring harness testing.",
    },
  };
