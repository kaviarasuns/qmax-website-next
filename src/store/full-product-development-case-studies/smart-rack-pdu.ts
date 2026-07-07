import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

export const smartRackPduCaseStudy: FullProductDevelopmentCaseStudy = {
  id: "smart-rack-pdu",
  slug: "smart-rack-pdu",
  title:
    "High Power Intelligent Power Distribution Unit (PDU) for AI Data Centers",
  subtitle: "Full Product Development — Concept to Volume Production",
  rotatedImages: {
    0: -45,
    1: -45,
    2: -45,
    3: -45,
    4: -45,
    5: -45,
  },
  enlargedImages: {
    0: 1.6,
    1: 1.6,
    2: 1.6,
    3: 1.6,
    4: 1.6,
    5: 1.6,
  },
  metaTags: [
    "Domain: Data Center Infrastructure",
    "Industry: Power Distribution & Energy Metering",
    "Market: North America",
  ],
  ribbonStats: [
    {
      value: "100s of Units",
      label: "Shipped to the USA",
    },
    {
      value: "30 Outlets",
      label: "Individually Metered & Switched",
    },
    {
      value: "45 kVA / 415 VAC",
      label: "3-Phase, 4-Wire Input",
    },
    {
      value: "UL489 / UL1077",
      label: "Certified, RoHS Compliant",
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
  images: [
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/PDU/V1/PDU3_VAR1_1.png",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/PDU/V2/PDU3_VAR2_1_.png",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/PDU/V3/PDU3_VAR3_1.png",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/PDU/V4/PDU3_VAR_4_C13__1.png",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/PDU/V5/PDU3_VAR5_C13_C19_1.png",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/PDU/V6/PDU3_VAR6_C13_C19_1.png",

    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/product_picture_power_board/PW_board_v2.png",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/PCB_layout _power_board/POWER BOARD_TOP.svg",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/PCB_layout _power_board/POWER BOARD_TB.svg",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/PCB_layout _power_board/POWER BOARD_BOT.svg",

    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/product_picture_processor_board/PR_TOP.png",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/PCB_layout_processor_board/PDU_Processor board_TOP.svg",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/PCB_layout_processor_board/PDU_Processor board_BOT.svg",

    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/product_%20pictures_meter_board/meter_board_v2.png",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/PCB_layout_meter_board/RACK_PDU_TOP.svg",
    "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/pdu/PCB_layout_meter_board/RACK_PDU_TB.svg",
  ],
  overview: [
    "A data center infrastructure provider in the United States approached Qmax Systems to design and manufacture an intelligent, high-power rack Power Distribution Unit (PDU) for deployment across its data center facilities. The unit needed to deliver reliable 3-phase power to 30 individually metered and switched outlets while providing remote monitoring and control from the data center's central management system.",
    "Qmax Systems delivered the complete product lifecycle under one roof: hardware architecture and PCB design across three interconnected boards, embedded Linux firmware and application software, industrial and mechanical design, EVT/DVT/PVT validation, UL safety certification, and volume manufacturing — culminating in shipment of hundreds of units into live production data centers with a fully RoHS-compliant bill of materials.",
  ],
  brief: [
    "The PDU is a vertical, 72-inch, 0U rack-mount unit designed to run the full height of a data center rack, engineered as a 3-phase 4-wire (3P4W) unit rated 415 VAC, 45 kVA, 63 A per phase, feeding 30 individually switched and metered C13 outlets across three branch circuits per phase. Each outlet is independently monitored for voltage, current, power, power factor, and energy consumption to approximately 1% accuracy, and can be remotely switched on or off from the data center control system.",
    "The system is built on a high-reliability, mains-isolated three-board architecture: a Power board carrying the outlet relays and C13 receptacles, a Meter board with dedicated metering ICs sandwiched directly against the Power board, and a Processor board running an embedded Linux management stack that bridges outlet-level telemetry to the customer's dual-redundant Ethernet network. Hydraulic-magnetic circuit breakers at the main and branch level, together with a UL-certified design, ensure the PDU meets the safety and reliability standards required for continuous data center operation.",
  ],
  scopeIntro:
    "Qmax Systems executed the entire product lifecycle under one roof, from architecture through UL-certified volume production:",
  scopeItems: [
    "Complete hardware architecture and schematic design across the Processor, Meter, and Power boards",
    "PCB design and layout: 4-layer boards for the Processor and Meter functions, 3-layer for the high-current Power board",
    "Precision analog front-end design for per-outlet voltage, current, power, and energy metering to ~1% accuracy",
    "Embedded Linux BSP and kernel bring-up on an i.MX6ULL Cortex-A7 System-on-Module (256 MB DDR3, eMMC storage)",
    "Metering and relay-control firmware development on the Meter board microcontroller, including MODBUS communication",
    "Cloud/control-system application software for outlet telemetry reporting and remote on/off switching",
    "Industrial and mechanical design of the slim, vertical 72-inch (0U) rack-mount chassis housing the sandwiched board assembly",
    "Prototype builds, bring-up, and iteration through EVT, DVT (Design Validation Testing), and PVT (Production Validation Testing)",
    "UL safety certification management for the PDU assembly and its hydraulic-magnetic circuit breakers",
    "Production test fixture development, volume manufacturing, RoHS-compliant BOM management, and direct shipment of hundreds of units to the customer's US facilities",
  ],
  challenges: [
    {
      challenge:
        "Safe isolation between mains-referenced and low-voltage logic domains",
      resolution:
        "Three-board architecture with galvanic isolation between the metering/switching domain and the Processor board, while maintaining high-integrity UART and control signaling across the isolation boundary",
    },
    {
      challenge:
        "~1% metering accuracy per outlet across 5 simultaneous STPM34 channels",
      resolution:
        "Real-time SPI polling of all five STPM34 metering channels with per-channel gain/offset calibration stored in SPI flash to achieve ~1% accuracy across all 30 outlets",
    },
    {
      challenge: "Reliable per-outlet overcurrent protection above 15 A",
      resolution:
        "Per-outlet current monitoring with automatic relay de-energization for any outlet exceeding 15 A, independent of neighboring branches and without affecting other outlets on the same phase",
    },
    {
      challenge:
        "Coordinating branch-level hydraulic-magnetic breakers with outlet relays",
      resolution:
        "40 A hydraulic-magnetic branch breakers configured to trip correctly under fault conditions while individual outlet relays handle everyday overload events at the per-outlet level",
    },
    {
      challenge:
        "Fitting the Meter–Power board sandwich into a slim 72-inch vertical chassis",
      resolution:
        "Industrial and mechanical design of the 0U rack-mount enclosure optimised for high-current relay contacts, busbars, and the sandwiched Meter/Power board assembly spanning the full rack height",
    },
    {
      challenge:
        "Robust MODBUS communication across an isolation boundary in a noisy environment",
      resolution:
        "MODBUS slave implementation on the Meter board with master polling on the Processor board, engineered for reliable telemetry exchange across the isolation-rated RS-485 link in an electrically noisy switching environment",
    },
    {
      challenge:
        "i.MX6ULL Linux BSP servicing dual Ethernet, RS-485, I2C, and wireless simultaneously",
      resolution:
        "Custom device tree and BSP bring-up on the i.MX6ULL SoM with validated DDR3 and eMMC storage, supporting dual Ethernet MACs, RS-485 UART, I2C, and GPIO without impacting real-time telemetry polling",
    },
    {
      challenge:
        "Dual-redundant Ethernet with automatic failover for 24/7 cloud reporting",
      resolution:
        "Dual 10/100 Ethernet PHY with redundant RJ45 ports and application-level automatic failover to guarantee continuous telemetry reporting to the data center control system",
    },
    {
      challenge:
        "UL and component-level certification across the PDU assembly and breakers",
      resolution:
        "UL489 and UL1077 certification managed for the PDU assembly and its main/branch hydraulic-magnetic circuit breakers, with EN60934 and GB17701 compliance at the component level",
    },
    {
      challenge:
        "EMI/surge immunity and safety isolation on mains-connected sensing circuitry",
      resolution:
        "EVT/DVT/PVT validation of mains-connected analog front-end and isolation barriers to the standards required for continuous data center-grade operation",
    },
  ],
  hardwareComponents: [
    {
      title: "NXP i.MX6ULL Cortex-A7 System-on-Module",
      description:
        "Embedded Linux management processor with 256 MB DDR3 and eMMC storage, running the cloud connectivity and outlet control application stack",
    },
    {
      title: "STMicroelectronics STPM34 Metering AFE",
      description:
        "Per-outlet voltage, current, power, power factor, and energy measurement across five simultaneous metering channels on the Meter board",
    },
    {
      title: "16-bit I2C GPIO Expander",
      description:
        "Drives relay control lines from the Processor board's outlet on/off commands via the I2C interface to the Meter board",
    },
    {
      title: "SPST Power Relays",
      description:
        "One relay per C13 outlet on the Power board, individually switching mains power to each of the 30 rack outlets",
    },
    {
      title: "10/100 Ethernet PHY with Dual RJ45 Ports",
      description:
        "Redundant network connectivity to the data center's central control and cloud management system with automatic failover",
    },
  ],
  interfaces: [
    {
      title: "RS-485 / MODBUS",
      description:
        "Meter board to Processor board communication carrying per-outlet metering data and status across the isolation boundary",
    },
    {
      title: "I2C",
      description:
        "Processor board to Meter board for outlet on/off relay commands, and to the LED indicator board for status display",
    },
    {
      title: "Dual 10/100 Ethernet (Redundant)",
      description:
        "Processor board to the data center's central control and cloud system with automatic failover for continuous 24/7 reporting",
    },
    {
      title: "SPI",
      description:
        "Meter board microcontroller to the 5-channel STPM34 metering array for real-time per-outlet analog front-end polling",
    },
  ],
  firmwareItems: [
    {
      title: "Embedded Linux BSP & Kernel Bring-up",
      description:
        "i.MX6ULL Cortex-A7 Linux BSP configured for the custom board, with device tree support for dual Ethernet MACs, RS-485 UART, I2C, and GPIO. DDR3 and eMMC storage validated for high-reliability continuous operation.",
    },
    {
      title: "Metering Firmware on the Meter Board Microcontroller",
      description:
        "SPI driver developed to poll all 5 STPM34 metering channels in real time for voltage, current, power, power factor, and energy per outlet. Per-channel gain/offset calibration implemented and stored in SPI flash to achieve ~1% accuracy.",
    },
    {
      title: "MODBUS Communication Stack",
      description:
        "MODBUS slave implementation on the Meter board and master polling logic on the Processor board, aggregating telemetry from all outlets across the isolation boundary reliably in an electrically noisy switching environment.",
    },
    {
      title: "Relay and Outlet-Control Logic",
      description:
        "I2C-driven GPIO expander sequencing developed to switch individual outlet relays. Per-outlet overcurrent detection (>15 A) implemented with automatic relay shutdown, independent of the branch-level hydraulic-magnetic breaker.",
    },
    {
      title: "Cloud/Control-System Connectivity Application",
      description:
        "Dual-redundant Ethernet application with automatic failover developed to continuously report 30-outlet telemetry to the data center control system and receive remote on/off switching commands.",
    },
    {
      title: "Production Test Firmware & Test Jig",
      description:
        "Automated test application developed to validate every relay, metering channel, and communication bus (Ethernet, RS-485, I2C, SPI) across the three boards prior to final assembly.",
    },
    {
      title: "Calibration and Traceability Workflow",
      description:
        "Per-unit calibration routine developed for the metering front end, with calibration coefficients and test results logged for full production traceability.",
    },
    {
      title: "High-Reliability Fault Recovery Framework",
      description:
        "Watchdog and fault-recovery logic implemented across the Linux application and Meter board firmware to sustain uninterrupted 24/7 operation expected of data center infrastructure.",
    },
  ],
  specs: [
    {
      key: "Form Factor",
      value:
        "Vertical 72-inch 0U rack-mount PDU spanning full data center rack height",
    },
    {
      key: "Input Power",
      value:
        "415 VAC, 3-phase 4-wire (3P4W), 45 kVA, 63 A per phase; hydraulic-magnetic main and branch circuit breakers",
    },
    {
      key: "Outlets",
      value:
        "30 × C13 outlets, individually switched and metered across three branch circuits per phase",
    },
    {
      key: "Metering Accuracy",
      value:
        "~1% per outlet for voltage, current, power, power factor, and energy consumption",
    },
    {
      key: "Management Processor",
      value:
        "NXP i.MX6ULL Cortex-A7 SoM — 256 MB DDR3, eMMC storage, embedded Linux",
    },
    {
      key: "Metering AFE",
      value:
        "STMicroelectronics STPM34 — 5-channel array on Meter board microcontroller via SPI",
    },
    {
      key: "Processor Board PCB",
      value: "4-layer, 64 mils, 343 components",
    },
    {
      key: "Meter Board PCB",
      value: "2-layer, 64 mils, 323 components",
    },
    {
      key: "Power Board PCB",
      value: "2-layer, ~64 mils, 71 components",
    },
    {
      key: "Connectivity",
      value:
        "Dual redundant 10/100 Ethernet; RS-485 MODBUS; I2C (relay control, LED status)",
    },
    {
      key: "Protection",
      value:
        "Per-outlet overcurrent shutdown (>15 A); branch-level 40 A hydraulic-magnetic breakers; UL489 / UL1077 certified assembly",
    },
    {
      key: "Certifications",
      value:
        "UL489, UL1077, EN60934, GB17701 (circuit breakers); RoHS-compliant BOM",
    },
    {
      key: "Production Volume",
      value:
        "Hundreds of units manufactured and shipped to US data center facilities",
    },
  ],
  summary: [
    "The Smart Rack PDU demonstrates Qmax Systems' full-stack, concept-to-production capability on a high-reliability, safety-critical power infrastructure product. Delivering a mains-isolated, three-board architecture with 30 individually metered and switched outlets required deep expertise spanning precision analog metering design, embedded Linux systems engineering, industrial and mechanical design, and UL safety certification — all under one roof.",
    "With hundreds of units shipped and deployed across live data center environments in the United States, the project stands as a reference for Qmax's ability to take a high-power, high-reliability electronics product from architecture through UL-certified volume production.",
    "The same full-stack capability — hardware, PCB design, firmware, industrial design, certification, and manufacturing — is available to customers building the next generation of power and infrastructure products.",
  ],
  listingSummary:
    "Full product development from concept to volume production — high-power intelligent rack PDU with 30 individually metered and switched outlets for US data center deployment.",
  metadata: {
    title: "High Power Intelligent PDU for AI Data Centers | Case Study",
    description:
      "Full product development case study — intelligent 45 kVA rack PDU with per-outlet metering, embedded Linux management, UL certification, and volume production for US data centers.",
  },
};
