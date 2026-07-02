import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";
import { pcbCaseStudyContactCtaPrefix } from "@/store/pcb-case-studies-v2/contact-cta";

export const multiFapPacketProcessingLineCardCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "multi-fap-packet-processing-line-card",
    slug: "multi-fap-packet-processing-line-card",
    section: "pcb",
    title: "Multi-FAP Packet-Processing Line Card",
    metaTags: [
      "Domain: Telecom & Datacom Networking",
      "Industry: Telecom / Datacom Networking",
      "Services: PCB Layout, SI Review, Power Integrity, DFM",
    ],
    ribbonStats: [
      { value: "4 × FAP", label: "Fabric Access Processors" },
      { value: "52", label: "Memory Devices" },
      { value: "28 Layers", label: "172 sq in Layout Area" },
      { value: "28,445", label: "Total Pins" },
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
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/typheon/4.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies-comp/pcb/typheon/Typhoon_SIG78.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/typheon/5.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies-comp/pcb/typheon/Typhoon_SIG123.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/typheon/6.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies-comp/pcb/typheon/Typhoon_SIG456.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies-comp/pcb/typheon/Typhoon_SIG910.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies-comp/pcb/typheon/Typhoon_SIGALL.png",
    ],
    cardImageIndex: 1,
    overview: [
      "Qmax Systems was engaged to execute the full physical PCB design of a high-density packet-processing line card built around four Broadcom (Dune) PETRA-B Fabric Access Processors for a modular core switch/router chassis. The customer supplied verified schematics and a complete design-input package; Qmax owned the layout of a 28-layer, controlled-impedance, carrier-grade line card that classifies, buffers, and forwards traffic and connects to the chassis switch fabric over a high-speed backplane. With over 28,000 pins, an extensive multi-technology memory subsystem, and dense high-speed fabric SerDes on the largest board of its platform, signal integrity, memory-interface timing, and manufacturability were the central engineering challenges. Qmax delivered a fabrication-ready design closing on SI, PI, and DFM targets without a re-spin.",
    ],
    brief: [
      "The board is a packet-processing line card for a modular, chassis-based core switch/router used by service providers and large enterprises for high-capacity Ethernet aggregation and routing. Four PETRA-B Fabric Access Processors provide integrated packet processing, deep-buffer traffic management, and the fabric interface, backed by a large mixed DDR3 and QDR-II memory subsystem for packet buffering and forwarding/lookup tables. The card connects to the chassis switch-fabric cards through high-speed backplane connectors, carries a Broadcom BCM5389 managed Gigabit Ethernet switch and an Altera Cyclone IV FPGA for control and management, and runs on a sequenced multi-rail PDN with hot-swap support. At the PCB level this translates into dense high-speed fabric SerDes routing, an extensive memory-interface routing problem, and deep power/ground plane segmentation on a single controlled-impedance card.",
    ],
    scopeIntro:
      "Qmax Systems owned the full PCB design of the line card, from design-input review through fabrication data release:",
    scopeItems: [
      "Design-input review — captured customer schematics, mechanical outline, BoM, net classes, and electrical constraints across high-speed serial, memory, analog, and power domains",
      "28-layer stackup design — defined a controlled-impedance stackup with 12 routing layers and 16 power/ground planes for a very high pin- and via-density board",
      "Quad-FAP floor-planning — placed the four PETRA-B FAP devices (1669-ball FCBGA each) to balance fabric SerDes, DDR3, QDR-II, and control routing across the board",
      "Multi-technology memory layout — routed a 48-device DDR3 array and a 4-device QDR-II array with length- and skew-matched data, address, and control buses",
      "High-speed fabric SerDes routing — routed the PETRA-B fabric SerDes to the backplane connectors with strict impedance and skew control",
      "Backplane fabric escape — designed the high-speed connector escape (P1–P8) carrying line-card traffic to the chassis switch fabric",
      "Power delivery network design — planned a multi-rail PDN (12 V main through sub-1 V FAP core rails) with margining, sequencing, and power-good/hot-swap supervision",
      "Signal integrity review — impedance, insertion/return-loss, crosstalk, and skew verification for the fabric SerDes and memory interfaces",
      "Power integrity review — PDN impedance targeting and decoupling strategy across the segmented plane structure feeding the four FAP devices and memory arrays",
      "DFM and fabrication release — DFM review against fab and assembly constraints, drill/padstack audit, and full Gerber / fabrication data package release",
    ],
    challenges: [
      {
        challenge: "Four 1669-Ball FAP Breakouts",
        resolution:
          "Each PETRA-B device required a deep multi-layer escape; Qmax used a structured via-and-plane escape to release all fabric SerDes, DDR3, QDR-II, and control nets without starving upper routing layers.",
      },
      {
        challenge: "28,000+ Pins on 28 Layers",
        resolution:
          "An exceptionally high pin and net density was resolved through careful device placement, layer-pair assignment, and via-field discipline to fit all routing within the layer budget.",
      },
      {
        challenge: "Mixed DDR3 + QDR-II Timing",
        resolution:
          "The 48-device DDR3 array and 4-device QDR-II array were length- and skew-matched with matched terminations to close read/write timing at line rate across both memory technologies.",
      },
      {
        challenge: "Fabric SerDes Eye Margin",
        resolution:
          "PETRA-B fabric SerDes were length- and skew-matched with reference-continuous routing to preserve eye margin across the backplane.",
      },
      {
        challenge: "Deep Plane Segmentation on 28 Layers",
        resolution:
          "16 power/ground planes were partitioned so every high-speed layer had a continuous adjacent reference while isolating sensitive FAP analog and memory rails.",
      },
      {
        challenge: "Isolated & Sequenced Power",
        resolution:
          "An isolated management domain (ADuM6404 digital isolator) and a sequenced, margined multi-rail PDN with hot-swap control (LTC4261/LTC4354) were laid out for reliable live insertion/removal.",
      },
      {
        challenge: "Carrier-Grade DFM Closure",
        resolution:
          "The layout was reviewed against fabrication and EMS constraints (drill sizes, aspect ratio, connector press-fit, padstacks) to release manufacturing data without a re-spin.",
      },
    ],
    hardwareComponents: [
      {
        title: "Broadcom (Dune) PETRA-B FAP (×4)",
        description:
          "1669-ball Fabric Access Processor devices providing integrated packet processing, deep-buffer traffic management, and the fabric interface",
      },
      {
        title: "DDR3 SDRAM (48 Devices)",
        description: "Large 128M×16 DDR3 array for FAP packet buffering and table memory",
      },
      {
        title: "QDR-II SRAM (4 Devices)",
        description: "4M×18 QDR-II SRAM for high-bandwidth lookup / statistics memory",
      },
      {
        title: "Broadcom BCM5389",
        description: "8-port managed Gigabit Ethernet switch for the on-board management network",
      },
      {
        title: "Altera Cyclone IV FPGA",
        description: "Control-plane / glue-logic FPGA for line-card configuration and management",
      },
      {
        title: "IDT 89H12NT12G2",
        description: "12-lane PCIe Gen2 non-transparent switch for the control-plane interconnect",
      },
      {
        title: "ICS85408 / IDT5V41066",
        description:
          "Low-jitter clock generators and fanout buffers for the high-speed serial and memory interfaces",
      },
      {
        title: "LTC4261 / LTC4354 & ADuM6404",
        description:
          "Hot-swap / OR-ing controllers and a quad digital isolator for the isolated management and power domains",
      },
      {
        title: "M29EW Flash & AT24C64 / EEPROM",
        description: "Boot/configuration flash and board-ID/FRU EEPROMs",
      },
      {
        title: "AirMax Backplane & Power Connectors",
        description:
          "High-speed AirMax fabric connectors (P1–P8) into the chassis, plus power-entry and management connectors",
      },
    ],
    interfaces: [
      {
        title: "Fabric SerDes",
        description:
          "High-speed PETRA-B fabric serial links to the chassis switch fabric over the AirMax backplane",
      },
      {
        title: "DDR3 Memory Buses",
        description: "Matched data, address, and command buses to the 48-device DDR3 array",
      },
      {
        title: "QDR-II SRAM Buses",
        description: "Matched read/write buses to the 4-device QDR-II SRAM array",
      },
      {
        title: "PCIe Gen2 (Control Plane)",
        description:
          "12-lane non-transparent PCIe via the IDT switch for the control-plane interconnect",
      },
      {
        title: "Managed Gigabit Ethernet",
        description: "On-board management network via the BCM5389 GbE switch",
      },
      {
        title: "Multi-Rail DC Power",
        description:
          "12 V main input with sub-1 V FAP core rails and sequenced, margined, hot-swap-capable supplies",
      },
    ],
    firmwareItems: [],
    specs: [
      { key: "Layer Count", value: "28 layers (controlled-impedance stackup)" },
      { key: "PCB Thickness", value: "149 mils" },
      { key: "Board Area / Size", value: "172 sq in" },
      { key: "Total Components", value: "5,974" },
      { key: "Total Pins / Nets", value: "28,445 pins / 4,685 nets" },
    ],
    summary: [
      "Qmax Systems delivered a complete, fabrication-ready layout of a 28-layer packet-processing line card built on four Broadcom (Dune) PETRA-B Fabric Access Processors with a large mixed DDR3 and QDR-II memory subsystem. At 172 sq in with over 28,000 pins and nearly 22,000 through-vias, it was the largest and most component-dense board of its platform. The design closed on signal integrity, power integrity, and DFM targets from customer design inputs through to Gerber release, demonstrating Qmax's capability to route the most demanding high-speed, high-layer-count line cards to manufacturing without a re-spin.",
    ],
    contactCtaPrefix: pcbCaseStudyContactCtaPrefix,
    listingSummary:
      "28-layer, multi-FAP packet-processing line card — the largest and most component-dense board of its platform, delivered to Gerber release without a re-spin.",
    metadata: {
      title: "Multi-FAP Packet-Processing Line Card | Case Study",
      description:
        "PCB design case study — 28-layer packet-processing line card built on four Broadcom PETRA-B Fabric Access Processors, delivered to fabrication without a re-spin.",
    },
  };
