import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const thirtyTwoChannelUltraLowNoiseDaqImages = [
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/acellenttech_br/1.1.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/acellenttech_br/1.2.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/acellenttech_br/1.3.png",
];

export const thirtyTwoChannelUltraLowNoiseDaqCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "32-channel-ultra-low-noise-daq",
    slug: "32-channel-ultra-low-noise-daq",
    section: "embedded",
    title: "32-Channel Ultra-Low-Noise Data Acquisition System",
    subtitle: "Embedded Systems Case Study",
    metaTags: [
      "Domain: Aerospace & Defence",
      "Industry: Structural Health Monitoring",
      "Market: Global",
    ],
    ribbonStats: [
      {
        value: "32 Channels",
        label: "Simultaneous Capture",
      },
      {
        value: "90 dB",
        label: "Signal-to-Noise Ratio",
      },
      {
        value: "16-bit / 30 KSPS",
        label: "Per Channel",
      },
      {
        value: "8-Layer",
        label: "Mixed-Signal PCB",
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
    images: thirtyTwoChannelUltraLowNoiseDaqImages,
    cardImageIndex: 1,
    overview: [
      "A structural health monitoring (SHM) systems company engaged Qmax Systems to develop a high-precision impact detection platform for aerospace and defence applications — identifying and localizing impacts on small aircraft and helicopters in real time. Qmax delivered the complete embedded system: architecture, hardware design, firmware, Linux software, mixed-signal PCB design, prototype manufacturing, and full Design Verification Testing (DVT).",
      "The resulting 32-channel ultra-low-noise Data Acquisition (DAQ) system feeds the customer's proprietary analysis engine, which determines where the airframe was hit and supports continue/abort mission decisions.",
    ],
    brief: [
      "The system is a 32-channel, 16-bit simultaneous-sampling data acquisition board that continuously monitors piezoelectric sensors bonded to aircraft structures. Four 8-channel simultaneous-sampling SAR ADCs capture all 32 channels in parallel at 30 KSPS per channel with 90 dB SNR, behind a precision analog front-end of anti-aliasing and low-pass filter stages.",
      "A parallel hardware trigger path — programmable-threshold comparators with Schmitt trigger and monoshot circuits — detects impact events and instantly initiates buffered capture. A quad-core NXP i.MX6 applications processor on an industrial SODIMM System-on-Module runs Linux, drives all four ADCs over dedicated high-speed SPI ports, and streams event data to the decision engine over Gigabit Ethernet. The design is industrial temperature rated for airborne and field deployment.",
    ],
    scopeIntro:
      "Qmax Systems delivered the complete embedded DAQ platform for structural health monitoring:",
    scopeItems: [
      "System architecture definition for a 32-channel simultaneous-capture, trigger-based DAQ platform",
      "Mixed-signal hardware design — precision analog front-end, multi-ADC array, and processor section",
      "Linux driver development for high-speed multi-ADC capture and application software",
      "8-layer mixed-signal PCB design with dedicated analog/digital ground and power plane strategy",
      "Signal integrity analysis and ultra-low-noise layout for 90 dB SNR performance",
      "Analog/digital grounding, isolation, and power distribution design across multiple ADCs",
      "Prototype manufacturing and board bring-up",
      "Full Design Verification Testing (DVT) including noise, SNR, and trigger characterization",
    ],
    challenges: [
      {
        challenge:
          "Ultra-low-noise 90 dB SNR on a dense mixed-signal board alongside a quad-core processor",
        resolution:
          "8-layer stackup with dedicated analog/digital ground and power planes, precision zero-drift op-amp front-end (AD8630), and ultra-low-noise layout validated through signal integrity analysis to preserve measurement-grade fidelity",
      },
      {
        challenge:
          "Simultaneous 32-channel capture with no inter-channel skew for impact localization",
        resolution:
          "Four TI ADS8568 simultaneous-sampling SAR ADCs — one dedicated high-speed SPI port each — with software alignment and packetization ensuring phase-coherent data across all 32 channels",
      },
      {
        challenge:
          "Sustaining 32 channels × 16-bit × 30 KSPS continuous throughput over four SPI ports",
        resolution:
          "Multi-core Linux architecture dedicating all four i.MX6 CPU cores to parallel acquisition, ring buffering, and Gigabit Ethernet forwarding pipelines running in real time",
      },
      {
        challenge:
          "Analog/digital grounding and isolation across four ADCs on a single board",
        resolution:
          "8-layer PCB stackup with dedicated analog and digital ground planes, isolated power distribution, and careful return-path planning across the four-ADC array and processor section",
      },
      {
        challenge:
          "Low-latency hardware trigger path so no impact transient is ever missed",
        resolution:
          "Programmable-threshold comparator chain with Schmitt trigger and monoshot circuits, I2C DAC threshold control, and direct GPIO trigger input to the CPU for instant capture initiation",
      },
      {
        challenge:
          "Continuous pre-trigger buffering to preserve the waveform before each impact",
        resolution:
          "Trigger-based capture engine with continuous ring buffering and pre/post-trigger storage, preserving the full waveform leading up to each detected impact event",
      },
      {
        challenge:
          "Fully utilizing all four CPU cores for real-time acquire, buffer, and forward",
        resolution:
          "Dedicated per-core pipelines for SPI ADC read, data alignment, packetization, and Ethernet streaming — maximizing throughput without dropping samples during impact events",
      },
      {
        challenge:
          "Protecting sensitive analog inputs from overvoltage while preserving signal fidelity",
        resolution:
          "TVS and clamp protection network on all 32 DB37 sensor inputs, engineered to suppress transients without degrading the precision analog front-end or SNR performance",
      },
    ],
    hardwareComponents: [
      {
        title: "4× TI ADS8568 SAR ADCs",
        description:
          "16-bit, 8-channel simultaneous-sampling bipolar SAR ADCs providing 32 channels total at 30 KSPS per channel with dedicated SPI interfaces",
      },
      {
        title: "NXP i.MX6 Quad-Core Applications Processor",
        description:
          "Industrial-grade 200-pin SODIMM System-on-Module running embedded Linux for multi-ADC capture, buffering, and event streaming",
      },
      {
        title: "AD8630 Zero-Drift Op-Amp Array",
        description:
          "Precision anti-aliasing and low-pass filter front-end for each sensor channel, preserving ultra-low-noise performance across the full input range",
      },
      {
        title: "Programmable-Threshold Trigger Chain",
        description:
          "Comparators, Schmitt trigger, and monoshot circuits with I2C DAC threshold control for hardware impact-event detection and instant capture initiation",
      },
      {
        title: "Precision Voltage Reference & Analog Power Tree",
        description:
          "Multi-rail analog power distribution (±15 V, +5 V analog, 3.3 V digital) with precision reference for consistent ADC performance across temperature",
      },
      {
        title: "TVS & Clamp Protection Network",
        description:
          "Overvoltage protection on all 32 piezoelectric sensor inputs via DB37 connector, safeguarding the precision front-end in field deployment",
      },
    ],
    interfaces: [
      {
        title: "32× Analog Input Channels",
        description:
          "DB37 connector interface for piezoelectric sensors bonded to aircraft structures — continuous monitoring with per-channel precision front-end",
      },
      {
        title: "4× High-Speed SPI",
        description:
          "One dedicated SPI port per ADS8568 ADC for parallel simultaneous data capture at 30 KSPS per channel",
      },
      {
        title: "Hardware Trigger Input",
        description:
          "CPU GPIO trigger path from the comparator chain — programmable thresholds with instant impact-event detection",
      },
      {
        title: "Gigabit Ethernet",
        description:
          "Low-latency streaming of captured event data to the customer's analysis and continue/abort decision engine",
      },
      {
        title: "USB Host, USB OTG & UART-to-USB",
        description:
          "Debug console, peripheral attachment, and field diagnostics interfaces on the i.MX6 platform",
      },
      {
        title: "Micro SD Card",
        description:
          "Local storage for capture data, system configuration, and field logging",
      },
    ],
    firmwareItems: [
      {
        title: "Embedded Linux BSP Bring-up",
        description:
          "Quad-core i.MX6 platform BSP configured with device tree support for four SPI ADC ports, Gigabit Ethernet, GPIO trigger, I2C DAC, USB, and SD card storage.",
      },
      {
        title: "Custom Multi-ADC Linux Drivers",
        description:
          "High-speed SPI drivers for four simultaneous ADS8568 capture streams with per-channel configuration, calibration, and continuous sampling at 30 KSPS.",
      },
      {
        title: "Multi-Core Acquisition Architecture",
        description:
          "All four CPU cores dedicated to parallel pipelines — SPI acquisition, ring buffering, data alignment, and Ethernet forwarding — sustaining real-time 32-channel throughput.",
      },
      {
        title: "Trigger-Based Capture Engine",
        description:
          "Continuous monitoring with pre/post-trigger ring buffering, instant capture initiation on hardware trigger events, and preservation of pre-impact waveform data.",
      },
      {
        title: "32-Channel Data Alignment & Packetization",
        description:
          "Simultaneous channel alignment and structured packetization for the customer's proprietary impact localization and decision engine.",
      },
      {
        title: "Programmable Trigger Threshold Control",
        description:
          "I2C DAC-driven threshold configuration and calibration routines for field-adjustable impact detection sensitivity.",
      },
      {
        title: "Gigabit Ethernet Streaming Stack",
        description:
          "Low-latency event data delivery over Gigabit Ethernet with buffering and retry logic for reliable transmission to the analysis system.",
      },
      {
        title: "DVT Validation Software",
        description:
          "System validation tools for SNR, noise floor, and channel-to-channel skew measurement during full Design Verification Testing.",
      },
    ],
    specs: [
      {
        key: "Channels",
        value:
          "32 simultaneous analog inputs — 4× TI ADS8568 8-channel simultaneous-sampling SAR ADCs",
      },
      {
        key: "Resolution & Rate",
        value: "16-bit at 30 KSPS per channel — parallel capture across all 32 channels",
      },
      {
        key: "SNR",
        value: "90 dB signal-to-noise ratio with precision anti-aliasing and low-pass filter front-end",
      },
      {
        key: "Processor",
        value:
          "Quad-core NXP i.MX6 on industrial 200-pin SODIMM SoM — embedded Linux",
      },
      {
        key: "Trigger",
        value:
          "Hardware comparator chain with Schmitt trigger, monoshot, and I2C DAC programmable thresholds; pre/post-trigger ring buffering",
      },
      {
        key: "Connectivity",
        value:
          "Gigabit Ethernet event streaming; USB Host/OTG; UART-to-USB debug; Micro SD local storage",
      },
      {
        key: "Sensor Interface",
        value: "32× analog inputs via DB37 — piezoelectric sensors on aircraft structures",
      },
      {
        key: "Analog Power",
        value: "±15 V, +5 V analog, 3.3 V digital — precision reference and multi-rail distribution",
      },
      {
        key: "PCB — Layer Count",
        value: "8 layers — mixed-signal with dedicated analog/digital ground and power planes",
      },
      {
        key: "PCB — Thickness",
        value: "64 mils",
      },
      {
        key: "PCB — Board Size",
        value: "20 sq. in.",
      },
      {
        key: "PCB — Components",
        value: "1,565 placed components",
      },
      {
        key: "Operating Environment",
        value: "Industrial temperature rated for airborne and field deployment",
      },
      {
        key: "Qmax Scope",
        value:
          "Architecture, mixed-signal hardware, Linux drivers and application software, 8-layer PCB, SI analysis, prototypes, and full DVT",
      },
    ],
    summary: [
      "Qmax Systems delivered a complete 32-channel ultra-low-noise data acquisition system — from architecture and mixed-signal hardware through Linux drivers, application software, 8-layer PCB design, prototypes, and full DVT. Capturing all 32 piezoelectric sensor channels simultaneously at 16-bit / 30 KSPS with 90 dB SNR, the platform gives structural health monitoring and defence customers the raw fidelity needed to detect and localize impacts on aircraft structures in real time.",
      "The project showcases Qmax's depth in precision mixed-signal design and high-throughput embedded Linux systems — combining ultra-low-noise analog front-end engineering, multi-ADC simultaneous capture, hardware trigger paths, and multi-core real-time data pipelines into a single airborne-grade platform.",
    ],
    contactCtaPrefix:
      "Building a precision data acquisition or mixed-signal system? Qmax Systems develops high-precision DAQ, mixed-signal, and embedded Linux platforms end to end — architecture, hardware, firmware, software, PCB design, signal integrity analysis, prototypes, and DVT.",
    listingSummary:
      "Embedded systems case study — 32-channel ultra-low-noise DAQ for aerospace structural health monitoring with 90 dB SNR and simultaneous 30 KSPS capture.",
    metadata: {
      title: "32-Channel Ultra-Low-Noise Data Acquisition System | Case Study",
      description:
        "Embedded case study — 32-channel simultaneous-sampling DAQ for structural health monitoring with 90 dB SNR, i.MX6 Linux, and 8-layer mixed-signal PCB.",
    },
  };
