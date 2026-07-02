import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";
import { pcbCaseStudyContactCtaPrefix } from "@/store/pcb-case-studies-v2/contact-cta";

export const terabitSwitchFabricBoardCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "terabit-switch-fabric-board",
    slug: "terabit-switch-fabric-board",
    section: "pcb",
    title: "Terabit-Scale Switch Fabric Board",
    subtitle:
      "30-Layer Carrier-Grade Fabric Card for a Packet-Optical Transport Platform",
    metaTags: [
      "Domain: Telecom & Datacom Networking",
      "Industry: Telecom / Datacom Networking",
      "Services: PCB Layout, SI Review, Power Integrity, DFM",
    ],
    ribbonStats: [
      { value: "~3.2 Tbps", label: "Aggregate Fabric" },
      { value: "30 Layers", label: "14 Routing + 16 Power/Ground" },
      { value: "96", label: "SerDes Pairs" },
      { value: "14", label: "Line-Card Slots" },
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
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/FE1600/1.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/FE1600/FE1600_MODULE_REV-02_PR4.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/FE1600/2.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/FE1600/FE1600_MODULE_REV-02_PR5.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/FE1600/4.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/FE1600/FE1600_MODULE_REV-02_PR6.png",
    ],
    cardImageIndex: 3,
    overview: [
      "Qmax Systems was engaged by an Indian networking equipment company to execute the full physical PCB design of a terabit-scale switch fabric board built around dual Broadcom BCM88750 (FE1600) fabric elements. The customer supplied verified schematics and a design-input package; Qmax owned the layout of a 30-layer, controlled-impedance, carrier-grade backplane fabric card. The board switches cell-based traffic between up to 14 line-card slots across a chassis midplane, making high-speed SerDes routing, power integrity, and manufacturability the central engineering challenges. Qmax delivered a fabrication-ready design closing on signal integrity, PDN, and DFM targets for a regulated telecom-class product.",
    ],
    brief: [
      "The board is the central switch fabric card inside a modular, chassis-based packet-optical transport platform used by service providers for metro and core Carrier Ethernet / MPLS aggregation. Two BCM88750 (FE1600) fabric elements — each rated at 1.6 Tbps of full-duplex switching capacity, giving up to ~3.2 Tbps of aggregate installed fabric bandwidth on a single board — form a non-blocking, self-routing switching mesh that interconnects up to 14 line-card slots over the chassis backplane. The platform runs on redundant -48 V DC telecom power, carries IPMC-based shelf management for hot-swap operation, and distributes precision network timing (IRIG / BITS-class reference). At the PCB level this terabit-scale throughput translates into 96 matched high-speed SerDes links, deep power/ground plane segmentation, and full hot-swap and manageability support — all on a single controlled-impedance card.",
    ],
    scopeIntro:
      "Qmax Systems owned the full PCB design of the switch fabric card, from design-input review through fabrication data release:",
    scopeItems: [
      "Design-input review — captured customer schematics, mechanical outline, BoM, net classes, and electrical constraints (HV, high-current, high-speed digital, analog, and mixed-signal domains)",
      "30-layer stackup design — defined a controlled-impedance stackup with 14 routing layers and 16 power/ground planes at 127 mil finished thickness",
      "High-speed SerDes routing — routed 96 fabric SerDes differential pairs (48 RX + 48 TX ARAD links) plus the 14-slot backplane fabric buses with strict impedance and skew control",
      "Dual-fabric placement — floor-planned both BCM88750 BGA devices and their far-side backplane connectors to equalise lane lengths to all line-card slots",
      "Power delivery network design — planned multi-rail PDN spanning -48 V input, 12 V intermediate, and sub-1 V core rails with sensed core supplies and isolated analog rails",
      "Signal integrity review — impedance, insertion/return-loss, crosstalk, and skew verification for all fabric SerDes and backplane channels",
      "Power integrity review — PDN impedance targeting and decoupling strategy across the segmented plane structure feeding the fabric BGAs",
      "Backplane connector escape — designed the high-density Molex Fabric Farside and Impact mezzanine escape routing under fine-pitch fields",
      "Manageability & timing routing — laid out I²C/SMBus, JTAG, MDIO, UART, and IPMC control nets plus precision clock and IRIG timing distribution",
      "DFM and fabrication release — DFM review against fab and assembly constraints, drill/padstack audit, and full Gerber / fabrication data package release",
    ],
    challenges: [
      {
        challenge: "Dual 2,397-Ball Fabric BGA Breakout",
        resolution:
          "Each BCM88750 required a multi-layer escape; Qmax used a structured via-and-plane escape across inner signal layers to release all SerDes without starving top-layer routing.",
      },
      {
        challenge: "96 Length- and Skew-Matched SerDes Pairs",
        resolution:
          "Intra-pair, intra-lane, and lane-to-lane matching was applied across 48 RX and 48 TX ARAD differential pairs to preserve eye margin at fabric line rates.",
      },
      {
        challenge: "Equalising 14 Backplane Slot Links",
        resolution:
          "Central placement of the two fabric devices balanced trace lengths from the switch cores to all 14 far-side backplane connectors, minimising slot-to-slot skew.",
      },
      {
        challenge: "Dense Plane Segmentation on 30 Layers",
        resolution:
          "16 power/ground planes were partitioned to give every high-speed layer a continuous adjacent reference while isolating the four sensed 1V0 analog fabric rails.",
      },
      {
        challenge: "High Through-Via Count Management",
        resolution:
          "Over 10,300 through-vias were planned with disciplined via-field and antipad strategy to protect impedance and keep routing channels open.",
      },
      {
        challenge: "-48 V Telecom Power Integrity",
        resolution:
          "Redundant fused -48 V feeds and hot-swap-capable conversion were laid out with wide, low-impedance copper and careful creepage/clearance for the high-voltage input section.",
      },
      {
        challenge: "Isolated Analog Fabric Supplies",
        resolution:
          "Four separate 1V0 analog rails (per fabric quadrant) were routed with sensed feedback and local decoupling to protect SerDes PLL performance from digital-rail noise.",
      },
      {
        challenge: "Precision Timing Distribution",
        resolution:
          "Low-jitter reference clocks and IRIG-A/B timing nets were routed with guarding and matched lengths, kept clear of noisy switching and power regions.",
      },
      {
        challenge: "Hot-Swap / IPMC Manageability",
        resolution:
          "The SmartFusion-based IPMC domain, I²C/SMBus trees, and standby rails were laid out to support live insertion/removal without disturbing the active fabric.",
      },
      {
        challenge: "Carrier-Grade DFM Closure",
        resolution:
          "The layout was reviewed against fabrication and EMS constraints (drill sizes, aspect ratio, connector press-fit, padstacks) to release manufacturing data without a re-spin.",
      },
    ],
    hardwareComponents: [
      {
        title: "Dual Broadcom BCM88750 (FE1600)",
        description:
          "2,397-ball fabric element devices forming the redundant, non-blocking switching mesh (U1, U2)",
      },
      {
        title: "IDT 89HPES16NT16G2",
        description:
          "16-lane PCIe Gen2 non-transparent switch routing the control plane between the local processor and fabric domain",
      },
      {
        title: "Microsemi A2F200M3F SmartFusion",
        description:
          "FPGA + Cortex-M3 device serving as the Intelligent Platform Management Controller (IPMC) for hot-swap and health monitoring",
      },
      {
        title: "Altera EP2AGX95 Arria II GX FPGA",
        description:
          "High-speed SerDes-capable FPGA handling fabric-side glue logic and control interfacing",
      },
      {
        title: "Silicon Labs Si5374 / Si530 / Si5330",
        description:
          "Jitter attenuator and low-jitter clock generators/oscillators for network synchronisation",
      },
      {
        title: "Ericsson BMR462 / BMR464 / PIM4000",
        description:
          "Digital point-of-load and intermediate-bus power modules for the multi-rail PDN",
      },
      {
        title: "Molex Fabric Farside Connectors (J1–J14)",
        description:
          "High-density backplane connectors carrying the 14-slot fabric SerDes to the chassis midplane",
      },
      {
        title: "Molex Impact Mezzanine Headers (J25–J27)",
        description:
          "High-speed mezzanine interfaces for the control/management daughter interface",
      },
      {
        title: "Atmel AT24Cxx / AT25DF321 / EPCS128",
        description:
          "Board-ID EEPROMs and configuration flash for FPGA boot and FRU data",
      },
      {
        title: "LM84 / DS75 Thermal Sensors & LTC4300/LTC4313",
        description:
          "Temperature monitoring and I²C bus buffering for the shelf-management subsystem",
      },
    ],
    interfaces: [
      {
        title: "Fabric SerDes Links",
        description:
          "96 high-speed differential pairs (48 RX + 48 TX ARAD channels) between the fabric elements and line-card connectors",
      },
      {
        title: "14-Slot Backplane Fabric Buses",
        description:
          "NODE1–NODE14 multi-lane differential buses to the chassis midplane, one bus per line-card slot",
      },
      {
        title: "PCIe Gen2 (Control Plane)",
        description:
          "16-lane non-transparent PCIe fabric via the IDT switch linking the local processor to the management domain",
      },
      {
        title: "I²C / SMBus",
        description:
          "Multi-segment management topology with bus buffers and multiplexers across the shelf-management subsystem",
      },
      {
        title: "JTAG",
        description:
          "Boundary-scan and configuration chains across the fabric BGAs, FPGAs, and CPLDs",
      },
      {
        title: "MDIO",
        description: "Management data interface for PHY/SerDes-side control",
      },
      {
        title: "UART / RS-232",
        description:
          "Console and inter-processor serial links for the control and management processors",
      },
      {
        title: "SPI",
        description:
          "Configuration-flash and peripheral interface for FPGA boot and device setup",
      },
      {
        title: "Precision Timing (IRIG-A/B, BP_REF_CLK)",
        description:
          "Backplane reference-clock and IRIG timecode distribution for network synchronisation",
      },
      {
        title: "Redundant -48 V DC Power",
        description:
          "Dual fused -48 V telecom feeds with 12 V intermediate bus and sub-1 V core rails",
      },
    ],
    firmwareItems: [],
    specs: [
      {
        key: "Layer Count",
        value: "30 layers (14 routing + 16 power/ground planes)",
      },
      {
        key: "PCB Thickness",
        value: "127 mils (controlled-impedance stackup)",
      },
      { key: "Board Area", value: "86 sq in" },
      { key: "Total Components", value: "4,300" },
      { key: "Total Pins", value: "18,800 pins" },
    ],
    summary: [
      "Qmax Systems delivered a complete, fabrication-ready layout of a 30-layer, terabit-scale switch fabric card built on dual Broadcom BCM88750 (FE1600) fabric elements, carrying up to ~3.2 Tbps of aggregate installed switching bandwidth. The design closed on signal integrity, power integrity, and DFM targets across 96 matched SerDes pairs, a 14-slot backplane, deep plane segmentation, and carrier-grade -48 V power — from customer design inputs through to Gerber release. The project demonstrates Qmax's capability to take on the most demanding high-speed, high-layer-count telecom fabric designs and drive them to manufacturing without a re-spin.",
    ],
    contactCtaPrefix: pcbCaseStudyContactCtaPrefix,
    listingSummary:
      "30-layer, terabit-scale switch fabric card — ~3.2 Tbps aggregate bandwidth across 96 matched SerDes pairs, delivered to Gerber release without a re-spin.",
    metadata: {
      title: "Terabit-Scale Switch Fabric Board | Case Study",
      description:
        "PCB design case study — 30-layer terabit-scale switch fabric card built on dual Broadcom BCM88750 (FE1600) fabric elements, delivered to fabrication without a re-spin.",
    },
  };
