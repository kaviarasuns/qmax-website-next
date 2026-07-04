import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const evVcuDemoPlatformImages = [
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/connected_car_demonstration_unit/1.1.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/connected_car_demonstration_unit/1.2.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/connected_car_demonstration_unit/1.3.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/connected_car_demonstration_unit/1.4.png",

  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluebinaries/1.1.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluebinaries/1.2.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluebinaries/BLUE_BINARIES_PR1.svg",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluebinaries/BLUE_BINARIES_PR1BOT.svg",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluebinaries/BLUE_BINARIES_PR1SIG1.svg",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluebinaries/BLUE_BINARIES_PR1SIG2.svg",
];

export const evVcuDemoPlatformCaseStudy: FullProductDevelopmentCaseStudy = {
  id: "ev-vcu-demo-platform",
  slug: "ev-vcu-demo-platform",
  section: "embedded",
  title: "EV Vehicle Control Unit (VCU) – Demo Platform",
  subtitle: "Embedded Systems — Connected EV Reference Design",
  metaTags: [
    "Domain: Electric Mobility",
    "Industry: Automotive / EV",
    "Market: Global",
  ],
  ribbonStats: [
    {
      value: "8+ Interfaces",
      label: "Vehicle & Comms",
    },
    {
      value: "3 Radios",
      label: "BLE / Cellular / GNSS",
    },
    {
      value: "2W & 4W",
      label: "EV Platform Coverage",
    },
    {
      value: "VCU + Gateway",
      label: "Connected Vehicle",
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
  images: evVcuDemoPlatformImages,
  cardImageIndex: 0,
  overview: [
    "Qmax Systems architected, designed, and delivered a fully functional EV Vehicle Control Unit (VCU) demo platform for a customer building connected, electrified mobility solutions across two-wheeler and four-wheeler EV platforms. Qmax owned the complete development lifecycle — architecture, hardware design, firmware, PCB design, prototyping, and full Design Verification Testing (DVT) — carrying the product from a blank-sheet requirement through to working prototypes.",
    "The customer now uses the platform as a reference design to showcase full-fledged VCU and connectivity gateway capabilities to automotive OEMs and market leaders, and has carried the architecture forward into subsequent projects.",
  ],
  brief: [
    "The EV VCU demo platform is a two-board embedded system built around an ST SPC560B60 automotive-grade microcontroller, targeted at low-cost EV applications spanning electric two-wheelers and four-wheelers. A dedicated ECU board hosts the microcontroller, power regulation, and load-driving peripherals — including a dual-channel H-bridge motor driver, a 16-channel high-side switch driver, and a 24-input Multiple Switch Detection Interface (MSDI) — while a companion radio board adds Bluetooth Low Energy, cellular, and GNSS connectivity across 8+ vehicle and communication interfaces.",
    "The two boards interface through a board-to-board mating connector, and Qmax validated and released tested firmware binaries covering every hardware interface, letting the customer layer its own connected-vehicle demo application directly on top.",
  ],
  scopeIntro:
    "Qmax Systems executed the complete embedded development lifecycle for this EV VCU reference platform:",
  scopeItems: [
    "End-to-end embedded system architecture definition from customer requirements",
    "Hardware design of a 2-board EV VCU platform (ECU board + radio/connectivity board)",
    "Bare-metal C firmware development on SPC5 automotive microcontrollers using SPC5Studio IDE",
    "PCB design and layout across a 6-layer main board and a 4-layer radio board",
    "Integration of BLE, cellular, and GNSS radio modules with antenna matching circuits",
    "Power architecture design with reverse-polarity, over/under-voltage, and ESD/EMI protection",
    "Prototype build and full Design Verification Testing (DVT) of all interfaces",
    "Release of validated test firmware binaries to the customer for demo application development",
  ],
  challenges: [
    {
      challenge:
        "Selecting a low-cost automotive MCU platform capable of covering the full breadth of VCU functions for entry-level EVs",
      resolution:
        "Selected the ST SPC560B60 automotive-grade MCU with 5× CAN, 8× UART, 4× SPI, and I2C — providing sufficient peripheral capacity for VCU, gateway, and load-driving functions on a single cost-optimized platform",
    },
    {
      challenge:
        "Integrating multiple wireless radios (BLE, cellular, GNSS) alongside high-current motor and switching loads on one platform",
      resolution:
        "Split the design into a dedicated ECU board for load driving and a companion radio board for BLE, LTE Cat 1, and GNSS, with RF-conscious layout and antenna matching on the connectivity board",
    },
    {
      challenge:
        "Splitting the design across two boards while preserving signal integrity through a board-to-board mating connector",
      resolution:
        "Engineered a board-to-board mating connector interface with controlled impedance routing and validated signal integrity for SPI, UART, and power rails across the ECU and radio boards",
    },
    {
      challenge:
        "Designing robust input protection to survive automotive transients — load dump, over/under-voltage, and reverse polarity",
      resolution:
        "Implemented MAX16126 automotive input-protection and supervisory ICs with reverse-polarity, over/under-voltage, and ESD/EMI protection across vehicle power and field inputs",
    },
    {
      challenge:
        "Driving mixed load types — H-bridge motor outputs, high-side relays/actuators, and 24 switch inputs — from a single MCU over SPI",
      resolution:
        "Integrated VNH5019ATR-E dual-channel H-bridge, TLE75080ESHXUMA1 16-channel high-side driver, and TIC12400 MSDI ICs with SPI-based control firmware for unified load management from the SPC560B60",
    },
    {
      challenge:
        "Handling 1.8V-tolerant cellular module signaling alongside 3.3V/5V board logic",
      resolution:
        "Designed level-appropriate signal conditioning and interface circuitry between the Telit LTE module's 1.8V I/O and the board's 3.3V/5V logic domains",
    },
    {
      challenge:
        "Validating every radio and peripheral interface independently within DVT ahead of customer handoff",
      resolution:
        "Developed interface-by-interface hardware validation firmware with PC-terminal debug logging, completing full DVT coverage of CAN, LIN, UART, SPI, BLE, cellular, GNSS, and all load drivers before release",
    },
    {
      challenge:
        "Keeping the design flexible enough to serve as a general-purpose reference platform rather than a single fixed product",
      resolution:
        "Architected a modular two-board platform with validated test firmware binaries released to the customer, enabling flexible demo application development for both 2W and 4W EV programs",
    },
  ],
  hardwareComponents: [
    {
      title: "SPC560B60",
      description:
        "ST automotive-grade microcontroller (Power Architecture, 144-pin LQFP) — 5× CAN, 8× UART, 4× SPI, I2C central control",
    },
    {
      title: "BlueMod+S50",
      description:
        "Telit Bluetooth Low Energy module with internal antenna for connected-vehicle demo connectivity",
    },
    {
      title: "LE910-C1",
      description:
        "Telit LTE Cat 1 cellular module with external antenna and SIM interface",
    },
    {
      title: "SL869-T3I",
      description: "Telit GNSS module for location tracking",
    },
    {
      title: "VNH5019ATR-E",
      description: "Dual-channel H-bridge motor driver for EV load actuation",
    },
    {
      title: "TLE75080ESHXUMA1",
      description:
        "16-channel high-side smart switch driver for relay and actuator outputs",
    },
    {
      title: "TIC12400",
      description:
        "24-input Multiple Switch Detection Interface (MSDI) ICs for vehicle switch scanning",
    },
    {
      title: "MAX16126",
      description:
        "Automotive input-protection and supervisory ICs for transient and polarity protection",
    },
  ],
  interfaces: [
    {
      title: "CAN Bus (Multiple Channels)",
      description: "Vehicle network communication",
    },
    {
      title: "LIN Bus",
      description: "Peripheral and body electronics communication",
    },
    {
      title: "UART",
      description: "Cellular, GNSS, and BLE module communication and debug",
    },
    {
      title: "SPI",
      description: "MSDI switch inputs, H-bridge, and high-side driver control",
    },
    {
      title: "I2C",
      description: "On-board I/O expansion",
    },
    {
      title: "Board-to-Board Mating Connector",
      description: "Links the ECU board and radio/connectivity board",
    },
    {
      title: "14-Pin JTAG",
      description: "Debug and programming interface",
    },
    {
      title: "ECU Connector",
      description: "Vehicle power, switch inputs, and load-driving outputs",
    },
  ],
  firmwareIntro:
    "Bare-metal C firmware on SPC5 automotive MCU developed using SPC5Studio IDE:",
  firmwareItems: [
    {
      title: "Peripheral Driver Development",
      description:
        "Drivers for CAN, LIN, UART, SPI, and I2C peripherals on the SPC560B60 platform",
    },
    {
      title: "Load Control Firmware",
      description:
        "H-bridge and high-side switch control with SPI-based PWM and direction control",
    },
    {
      title: "MSDI Switch Scanning",
      description:
        "Switch-input scanning and debounce firmware across 24 MSDI channels",
    },
    {
      title: "Radio Module Bring-Up",
      description:
        "BLE, cellular, and GNSS module integration and communication stack bring-up",
    },
    {
      title: "Watchdog & Fault Recovery",
      description:
        "Watchdog timer configuration (62 ms – 72 s) and fault-recovery logic",
    },
    {
      title: "Interface Validation Firmware",
      description:
        "Interface-by-interface hardware validation with PC-terminal debug logging for DVT",
    },
    {
      title: "Test Binary Release",
      description:
        "Validated test firmware binaries packaged and released for customer demo application development",
    },
  ],
  specs: [
    {
      key: "Product Name",
      value: "EV Vehicle Control Unit (VCU) – Demo Platform",
    },
    {
      key: "Domain / Industry",
      value: "Electric Mobility | Automotive EV | Connected Vehicle Gateway",
    },
    {
      key: "Host Microcontroller",
      value:
        "ST SPC560B60 automotive MCU (Power Architecture) — 144-pin LQFP, 5× CAN, 8× UART, 4× SPI, I2C",
    },
    {
      key: "Board Configuration",
      value:
        "2 boards — ECU board + Radio/Connectivity board, linked via board-to-board mating connector",
    },
    {
      key: "ECU Board",
      value: "6 layers, 73.4 mils thick, 855 components, 2,352 pins",
    },
    {
      key: "Radio Board",
      value: "4 layers, 55.0 mils thick, 469 components, 1,203 pins",
    },
    {
      key: "Wireless Connectivity",
      value:
        "Bluetooth Low Energy, cellular (LTE Cat 1), and GNSS with external antenna support",
    },
    {
      key: "Digital I/O Capacity",
      value:
        "16-channel high-side output driver, dual-channel H-bridge driver, 24-channel MSDI switch input",
    },
    {
      key: "Programming / Debug",
      value:
        "14-pin JTAG debug/programming interface; on-board watchdog timer (62 ms – 72 s)",
    },
    {
      key: "Firmware Toolchain",
      value: "Bare-metal C, SPC5Studio IDE",
    },
    {
      key: "EV Platform Coverage",
      value: "Electric two-wheeler and four-wheeler reference platform",
    },
    {
      key: "Scope Delivered",
      value:
        "Full embedded development: Architecture → HW → FW → PCB → Prototype → DVT → Test Binary Release",
    },
  ],
  summary: [
    "Qmax Systems delivered a complete EV VCU demo platform — spanning architecture, hardware, firmware, PCB design, and DVT — built around a low-cost automotive microcontroller and a full suite of vehicle and wireless interfaces. The validated, two-board reference design gave the customer a working platform to demonstrate VCU capabilities to automotive OEMs and to carry forward into future EV programs.",
    "With BLE, LTE Cat 1, and GNSS connectivity alongside CAN, LIN, motor driving, and 24-channel switch detection, the platform demonstrates Qmax's ability to deliver connected automotive embedded systems from blank-sheet requirements through validated prototypes ready for customer demo application development.",
  ],
  contactCtaPrefix:
    "Building a VCU or embedded control platform for your EV program? Qmax Systems takes embedded automotive products from concept through architecture, hardware, firmware, PCB design, prototyping, and DVT to production. Talk to us about your next EV or automotive embedded design.",
  listingSummary:
    "Two-board EV VCU demo platform with BLE, LTE, and GNSS — automotive-grade reference design for 2W and 4W connected vehicle programs.",
  metadata: {
    title: "EV VCU Demo Platform | Case Study",
    description:
      "Embedded systems case study — EV Vehicle Control Unit demo platform with VCU, connectivity gateway, and validated test firmware for automotive OEM demonstrations.",
  },
};
