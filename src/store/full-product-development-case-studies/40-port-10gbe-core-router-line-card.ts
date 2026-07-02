import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

export const fortyPort10gbeCoreRouterLineCardCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "40-port-10gbe-core-router-line-card",
    slug: "40-port-10gbe-core-router-line-card",
    section: "pcb",
    title: "40-Port 10GbE Core-Router Line Card",
    metaTags: [
      "Domain: Telecom & Datacom Networking",
      "Industry: Telecom / Datacom Networking",
      "Services: PCB Layout, SI Review, Power Integrity, DFM",
    ],
    ribbonStats: [
      { value: "40 × 10GbE", label: "SFP+ Ports" },
      { value: "400 GbE", label: "Aggregate Line-Side" },
      { value: "24 Layers", label: "134 sq in Layout Area" },
      { value: "36,000", label: "Total Pins" },
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
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/pegasus/1.4.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/pegasus/Pegasus_ALL LAYER_PR10.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/pegasus/1.5.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/pegasus/Pegasus_ALL LAYER_PR11.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/pegasus/1.6.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/pegasus/Pegasus_ALL LAYER_PR12.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/pegasus/Pegasus_ALL LAYER_PR13.png",
    ],
    cardImageIndex: 1,
    overview: [
      "Qmax Systems was engaged to execute the full physical PCB design of a high-density 40-port 10 Gigabit Ethernet line card for a modular core switch/router chassis. The customer supplied verified schematics and a complete design-input package; Qmax owned the layout of a 24-layer, controlled-impedance, carrier-grade line card carrying 400 GbE of aggregate line-side capacity into the chassis switch fabric. With over 36,000 pins, a very large high-speed SRAM subsystem, and 40 optical ports to route on a single card, high-speed signal integrity, memory-interface timing, and manufacturability were the central engineering challenges. Qmax delivered a fabrication-ready design closing on SI, PI, and DFM targets without a re-spin.",
    ],
    brief: [
      "The board is a front-line traffic-ingress line card for a modular, chassis-based core switch/router used by service providers and large enterprises for high-capacity Ethernet aggregation and routing. It presents 40 × 10 Gigabit Ethernet SFP+ optical ports on the front panel — 400 GbE of aggregate line-side capacity — driven by ten Cortina Systems CS3487 multi-port 10GbE devices, and connects to the chassis switch-fabric cards through high-speed backplane fabric connectors. Line-rate packet framing, classification, and forwarding are backed by a large JEDEC-standard QDR-II SRAM subsystem for packet buffering and lookup tables, with low-jitter LVPECL clock distribution feeding the high-speed serial interfaces. At the PCB level this translates into dense high-speed serial routing for 40 optical ports, an extensive memory-interface routing problem, and full hot-swap power and manageability support on a single controlled-impedance card.",
    ],
    scopeIntro:
      "Qmax Systems owned the full PCB design of the line card, from design-input review through fabrication data release:",
    scopeItems: [
      "Design-input review — captured customer schematics, mechanical outline, BoM, net classes, and electrical constraints across high-speed serial, memory, analog, and power domains",
      "24-layer stackup design — defined a controlled-impedance stackup with 10 routing layers and 10 power/ground planes for a very high pin- and via-density board",
      "40-port optical routing — floor-planned and routed the 40 × 10GbE SFP+ front-panel ports with matched high-speed serial (XAUI-class) attachment to the ten Cortina CS3487 port devices",
      "High-speed SRAM subsystem — routed a large high-speed SRAM memory array (packet-buffer / lookup) with length- and skew-matched data, address, and control buses",
      "Backplane fabric escape — designed the high-speed backplane fabric connector escape carrying line-card traffic to the chassis switch fabric",
      "Power delivery network design — planned a multi-rail PDN (12 V main through 3V3 / 2V5 / 1V8 / 1V2) with margining, sequencing, and power-good supervision for hot-swap operation",
      "Signal integrity review — impedance, insertion/return-loss, crosstalk, and skew verification for the optical-port serial links and memory interfaces",
      "Power integrity review — PDN impedance targeting and decoupling strategy across the plane structure feeding the high pin-count logic and QDR-II SRAM array",
      "High-density via planning — managed nearly 25,000 through-vias with disciplined via-field and antipad strategy to keep routing channels open on a 24-layer board",
      "DFM and fabrication release — DFM review against fab and assembly constraints, drill/padstack audit, and full Gerber / fabrication data package release",
    ],
    challenges: [
      {
        challenge: "Routing 40 Optical Ports on One Card",
        resolution:
          "The 40 × 10GbE SFP+ ports and their high-speed serial attachment were floor-planned in port banks with matched-length, reference-continuous routing to preserve eye margin across every port.",
      },
      {
        challenge: "36,000+ Pins on 24 Layers",
        resolution:
          "An exceptionally high pin and net density was resolved through careful device placement, layer-pair assignment, and via-field discipline to fit all routing within the layer budget.",
      },
      {
        challenge: "Large High-Speed SRAM Timing",
        resolution:
          "The multi-device SRAM array's data, address, and control buses were length- and skew-matched with matched terminations to close read/write timing at line rate.",
      },
      {
        challenge: "Backplane Fabric Integrity",
        resolution:
          "High-speed serial links to the chassis fabric connectors were routed with controlled impedance and matched skew to sustain signal integrity across the backplane.",
      },
      {
        challenge: "Front-Panel Optical Density",
        resolution:
          "The SFP+ cage banks were placed and escaped to balance thermal, mechanical, and high-speed routing constraints along the front edge.",
      },
      {
        challenge: "Low-Jitter Clock Distribution",
        resolution:
          "Multiple low-jitter LVPECL reference clocks were distributed to the high-speed serial interfaces with guarding and matched lengths, isolated from noisy regions.",
      },
      {
        challenge: "Multi-Rail Hot-Swap Power",
        resolution:
          "The sequenced, margined multi-rail PDN with power-good supervision was laid out with wide, low-impedance copper for reliable live insertion/removal.",
      },
      {
        challenge: "Mixed-Signal Isolation",
        resolution:
          "Analog supply and sensing nets were partitioned from digital switching and high-current regions to protect the sensitive serial and memory interfaces.",
      },
      {
        challenge: "Carrier-Grade DFM Closure",
        resolution:
          "The layout was reviewed against fabrication and EMS constraints (drill sizes, aspect ratio, connector press-fit, padstacks) to release manufacturing data without a re-spin.",
      },
    ],
    hardwareComponents: [
      {
        title: "Cortina Systems CS3487 (×10)",
        description:
          "Multi-port 10GbE MAC/PHY-class devices providing the port interface across the 40-port array (four 10GbE ports per device)",
      },
      {
        title: "QDR-II High-Speed SRAM (30 Devices)",
        description:
          "Large JEDEC-standard QDR-II SRAM array (2M×36 devices) for packet buffering and forwarding/lookup tables",
      },
      {
        title: "ON Semiconductor NB4L7210 (×5)",
        description:
          "1:10 LVPECL/LVDS clock fanout buffers distributing low-jitter references to the high-speed serial interfaces",
      },
      {
        title: "40 × SFP+ Optical Cages",
        description: "",
      },
    ],
    interfaces: [
      {
        title: "40 × 10GbE Optical Ports",
        description:
          "Front-panel SFP+ optical ports delivering 400 GbE of aggregate line-side capacity",
      },
      {
        title: "High-Speed Serial Attach (XAUI-Class)",
        description:
          "Matched multi-lane serial links between the SFP+ optical ports and the Cortina CS3487 port devices",
      },
      {
        title: "Backplane Switch-Fabric Links",
        description:
          "High-speed serial connections via 144-pin backplane connectors into the chassis switch fabric",
      },
      {
        title: "QDR-II SRAM Buses",
        description:
          "Matched data, address, and control buses to the 30-device QDR-II SRAM array, with LTC3413 bus termination",
      },
      {
        title: "Thermal Monitoring",
        description:
          "Temperature-sensor interfaces for line-card health and fan/thermal control",
      },
      {
        title: "Multi-Rail DC Power",
        description:
          "12 V main input with 3V3 / 2V5 / 1V8 / 1V2 derived rails for the processing, memory, and optical subsystems",
      },
    ],
    firmwareItems: [],
    specs: [
      {
        key: "Layer Count",
        value: "24 layers (controlled-impedance stackup)",
      },
      { key: "PCB Thickness", value: "130 mils" },
      { key: "Board Area / Size", value: "140 sq in" },
      { key: "Total Components", value: "6,200" },
      { key: "Total Pins / Nets", value: "36,000" },
    ],
    summary: [
      "Qmax Systems delivered a complete, fabrication-ready layout of a 24-layer, 40-port 10 Gigabit Ethernet core-router line card carrying 400 GbE of aggregate line-side capacity. Despite fewer layers than a comparable fabric card, this was the highest-density board of its platform — over 36,000 pins, and a large high-speed SRAM subsystem packed onto a single controlled-impedance card. The design closed on signal integrity, power integrity, and DFM targets from customer design inputs through to Gerber release, demonstrating Qmax's capability to route the most pin- and via-dense high-speed boards to manufacturing without a re-spin.",
    ],
    listingSummary:
      "24-layer, 40-port 10GbE core-router line card — 400 GbE aggregate line-side capacity across 36,000+ pins, delivered to Gerber release without a re-spin.",
    metadata: {
      title: "40-Port 10GbE Core-Router Line Card | Case Study",
      description:
        "PCB design case study — 24-layer, 40-port 10GbE core-router line card with 400 GbE aggregate line-side capacity, delivered to fabrication without a re-spin.",
    },
  };
