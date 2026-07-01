import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

export const highDensityPcbDesignGponOltCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "high-density-pcb-design-gpon-olt",
    slug: "high-density-pcb-design-gpon-olt",
    section: "pcb",
    title: "High-Density PCB Design for a GPON OLT Networking Platform",
    metaTags: [
      "Domain: Telecom & Networking",
      "Industry: Telecom & Networking Infrastructure",
      "Services: PCB Design, SI/PI Analysis, DFM, Design Verification",
    ],
    ribbonStats: [
      { value: "20-layer", label: "Stack-Up" },
      { value: "2,600", label: "Components" },
      { value: "60", label: "Pins per sq inch" },
      { value: "2.5 mm", label: "FR-4 PCB Thickness" },
    ],
    navSections: [
      { id: "overview", num: "01", label: "Project Overview" },
      { id: "brief", num: "02", label: "Application Brief" },
      { id: "scope", num: "03", label: "Qmax Scope" },
      { id: "challenges", num: "04", label: "Challenges & Resolutions" },
      { id: "components", num: "05", label: "Major HW Components" },
      { id: "interfaces", num: "06", label: "Major Interfaces" },
      { id: "specs", num: "07", label: "PCB Design Specifications" },
      { id: "summary", num: "08", label: "Summary" },
    ],
    images: [
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/alphion/1.1.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/alphion/ALPHION-AOLT-PR1_SIG12.svg",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/alphion/1.2.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/alphion/ALPHION-AOLT-PR1_SIG136.svg",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/alphion/ALPHION-AOLT-PR1_SIG23.svg",
    ],
    cardImageIndex: 3,
    overview: [
      "Qmax Systems partnered with a telecom networking equipment manufacturer to design a high-density, 20-layer printed circuit board for a multi-port fiber-optic access platform. Working from customer-supplied schematics, mechanical drawings, and a detailed bill of materials, Qmax's PCB design team translated a complex mixed-signal, high-speed digital architecture into a fully routed, manufacturing-ready Cadence Allegro board. The design integrates over 2,100 components, including multiple high pin-count BGA devices, DDR3 memory, and several power management ICs, on a compact double-sided layout. The fabricated board powered up and operated correctly at first bring-up with zero design defects, and was delivered on schedule to the customer's production timeline.",
    ],
    brief: [
      "The end product is a compact, carrier-grade GPON Optical Line Terminal (OLT) used to deliver fiber-based broadband, voice, and video services to residential and business subscribers. The board combines a GPON access processor system-on-chip, an integrated Ethernet switch, and multiple physical-layer transceivers to aggregate traffic from fiber and copper uplinks onto multiple downstream optical ports. Because the platform is deployed in central-office and outdoor cabinet environments, the design demanded tight component placement, robust signal integrity across high-speed serial links, and a thermally efficient layout suitable for 24/7 continuous operation.",
    ],
    scopeIntro:
      "Qmax Systems delivered the complete PCB design scope for the GPON OLT platform, from initial schematic review through fabrication-ready release:",
    scopeItems: [
      "Performed detailed schematic review to validate design intent before layout began",
      "Reviewed and updated the customer-supplied BoM for part availability, footprint accuracy, and DFM fit",
      "Worked closely with the customer through every design stage, from input capture to final release",
      "Defined stack-up requirements for a 20-layer board with 10 routing layers and 10 plane layers",
      "Performed component footprint creation and verification, followed by constraint-driven placement of 2,161 components across a 91.89 sq. in. routed area",
      "Routed high-speed memory, SerDes, and Ethernet PHY interfaces under length-matching and impedance rules",
      "Performed Signal Integrity (SI) and Power Integrity (PI) analysis to validate high-speed routing and power delivery",
      "Ran DFM checks aligned to the customer's preferred fabrication and assembly partners",
      "Executed full design rule checking and design verification, with the fabricated board powering up and operating correctly at first bring-up",
      "Generated complete fabrication and assembly documentation, including BoM, netlist, and drawing reports",
    ],
    challenges: [
      {
        challenge: "High component density",
        resolution:
          "2,161 parts and 9,564 pins were placed within a constrained 14.5 x 6.4 inch keep-in by sequencing placement around the largest BGAs first",
      },
      {
        challenge: "Mixed fine-pitch and large-pitch BGAs",
        resolution:
          "Multiple 0.8 mm and 1.0 mm pitch BGA devices required dedicated escape and fan-out planning to avoid via congestion",
      },
      {
        challenge: "20-layer stack-up complexity",
        resolution:
          "A 10 routing / 10 plane layer stack-up was structured to balance signal integrity needs with overall board thickness of approximately 21 mils",
      },
      {
        challenge: "High via count",
        resolution:
          "7,963 vias were managed through systematic via stitching and selective backdrilling to control stub effects on high-speed layers",
      },
      {
        challenge: "DDR3 memory routing",
        resolution:
          "Length and skew matching across multiple DDR3 devices was achieved using topology-aware autorouting with manual tuning",
      },
      {
        challenge: "Multi-rate SerDes interfaces",
        resolution:
          "1G and 10G optical port differential pairs were routed with controlled impedance and minimized crosstalk on dedicated signal layers",
      },
      {
        challenge: "Dense power distribution",
        resolution:
          "Numerous point-of-load regulators required careful plane segmentation to avoid noise coupling into sensitive analog and clock circuits",
      },
      {
        challenge: "Mixed-signal isolation",
        resolution:
          "Clock generation, real-time clock, and sensor circuits were isolated from high-speed switching sections through layer assignment and guard routing",
      },
      {
        challenge: "Connector and SFP cage placement",
        resolution:
          "Optical module footprints and connectors were positioned to meet customer mechanical drawing clearances without compromising routing channels",
      },
      {
        challenge: "First-pass design success",
        resolution:
          "Thorough verification across 7,410 connections paid off when the fabricated board powered up and ran correctly at first bring-up, with zero design defects and a satisfied customer",
      },
    ],
    hardwareComponents: [
      {
        title: "Broadcom GPON Access Processor SoC",
        description: "BGA1369 package",
      },
      {
        title: "Broadcom Multi-Port Ethernet Switch IC",
        description: "BGA1440 package",
      },
      {
        title:
          "Multiple Broadcom Quad/Multi-Port Gigabit Ethernet PHY Transceivers",
        description: "",
      },
      {
        title: "Lattice MachXO2 CPLD/FPGA",
        description: "Board-level logic and port control",
      },
      {
        title: "DDR3 SDRAM Memory Devices",
        description: "Multiple 2 Gb and 4 Gb parts",
      },
      {
        title: "NAND Flash and SPI NOR Flash",
        description: "Boot and firmware storage",
      },
      {
        title: "Point-of-Load DC-DC and LDO Regulators",
        description: "Distributed power delivery",
      },
      {
        title: "Precision Clock Generator and Multiple Crystal Oscillators",
        description: "",
      },
      {
        title:
          "I2C EEPROM, Real-Time Clock, I2C Bus Multiplexers, and Temperature Sensors",
        description: "",
      },
      {
        title: "Battery-Backed Real-Time Clock and Supervisory/Reset ICs",
        description: "",
      },
    ],
    interfaces: [
      {
        title: "Multiple 1G and 10G SFP/SFP+ optical port interfaces",
        description: "",
      },
      {
        title: "Gigabit Ethernet combo copper/optical uplink ports",
        description: "",
      },
      {
        title: "DDR3 memory interface to the access processor SoC",
        description: "",
      },
      {
        title: "SGMII/serial high-speed links between switch and PHY devices",
        description: "",
      },
      {
        title: "I2C management buses for optical module and sensor monitoring",
        description: "",
      },
      {
        title: "SPI boot interface for flash memory",
        description: "",
      },
      {
        title: "JTAG debug and programming interfaces",
        description: "",
      },
      {
        title: "UART console interface for system debug",
        description: "",
      },
      {
        title: "PCIe-capable boot configuration interface",
        description: "",
      },
      {
        title:
          "Multiple regulated power rails distributed via dedicated plane layers",
        description: "",
      },
    ],
    firmwareItems: [],
    specs: [
      { key: "Stack-Up", value: "20-layer stack-up" },
      { key: "Components", value: "2,600 components" },
      { key: "Pin Density", value: "60 pins per sq inch" },
      { key: "Board Thickness", value: "2.5 mm thickness FR-4 PCB" },
    ],
    summary: [
      "This engagement showcases Qmax Systems' ability to take customer-supplied schematics through to a fully verified, manufacturing-ready PCB design for a high-density, high-speed networking platform. By combining disciplined stack-up planning, SI/PI-driven signal integrity routing, and rigorous DFM and design verification, Qmax delivered a 20-layer, 2,000-plus component design that powered up and operated correctly at first bring-up, with zero design defects and a satisfied customer.",
      "The project reflects Qmax's full-stack PCB design capability for telecom and networking customers requiring complex, mixed-signal, high-pin-count board designs — from schematic review and BoM validation through SI/PI analysis, DFM, and final release documentation.",
    ],
    listingSummary:
      "High-density, 20-layer PCB design for a carrier-grade GPON Optical Line Terminal — first-pass bring-up success with zero design defects.",
    metadata: {
      title:
        "High-Density PCB Design for a GPON OLT Networking Platform | Case Study",
      description:
        "PCB design case study — 20-layer, high-density PCB for a carrier-grade GPON Optical Line Terminal, delivered with zero design defects at first bring-up.",
    },
  };
