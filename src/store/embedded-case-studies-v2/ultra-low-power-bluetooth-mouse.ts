import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const ultraLowPowerBluetoothMouseImages = [
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluetooth_mouse/1.3.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluetooth_mouse/1.1.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluetooth_mouse/1.2.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluetooth_mouse/MOUSE_BOARD_BL2.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/bluetooth_mouse/MOUSE_BOARD_TL1.png",
];

export const ultraLowPowerBluetoothMouseCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "ultra-low-power-bluetooth-mouse",
    slug: "ultra-low-power-bluetooth-mouse",
    section: "embedded",
    title: "Ultra-Low-Power Bluetooth Mouse Reference Design Platform",
    // subtitle: "Embedded Systems Case Study",
    metaTags: [
      "Domain: Consumer Electronics",
      "Industry: Semiconductor Reference Design",
      "Market: Global",
    ],
    ribbonStats: [
      {
        value: "100× Lower",
        label: "Power Consumption",
      },
      {
        value: "BLE 5",
        label: "Atmosic SoC Platform",
      },
      {
        value: "2× AAA",
        label: "Multi-Year Battery Life",
      },
      {
        value: "4-Layer",
        label: "Compact RF PCB",
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
    images: ultraLowPowerBluetoothMouseImages,
    cardImageIndex: 2,
    enlargedImages: { 0: 1.4, 1: 1.3, 2: 1.3 },
    overview: [
      "Atmosic, a fabless semiconductor company pioneering ultra-low-power wireless SoCs, engaged Qmax Systems to develop a complete Bluetooth mouse reference design platform showcasing its BLE 5 silicon. Qmax delivered the full reference design — system architecture, hardware design, firmware, PCB design, prototype manufacturing, and full Design Verification Testing (DVT) — creating a production-ready HID mouse platform that Atmosic and its customers could take directly into high-volume consumer products.",
      "The result demonstrated roughly 100× lower power consumption than contemporary wireless mice, translating to multi-year operation from a pair of AAA batteries.",
    ],
    brief: [
      "The reference design is a full-featured BLE 5 optical mouse built around the Atmosic ultra-low-power Bluetooth SoC platform, which extends battery life by harvesting energy from ambient RF and waking its higher-power primary radio only when needed. A PixArt ultra-low-power IR optical sensor tracks X-Y motion over SPI, a quadrature Z-encoder handles scroll-wheel input, and three mouse buttons plus a dedicated pairing button complete the standard HID feature set.",
      "The entire system — SoC, low-power QSPI flash, nano-quiescent-current power tree, chip antenna, and RF test port — fits on a compact 4-layer PCB shaped to a standard mouse form factor, running from two AAA cells.",
    ],
    scopeIntro:
      "Qmax Systems delivered the complete reference design platform for Atmosic's BLE 5 silicon:",
    scopeItems: [
      "System architecture definition for an ultra-low-power BLE 5 HID mouse reference platform",
      "Hardware design around the Atmosic BLE SoC, including RF front-end, chip antenna, and nano-quiescent-current power tree",
      "Bare-metal firmware development — HID mouse application, optical sensor driver, and aggressive power management",
      "Compact 4-layer PCB design in a mouse form factor with controlled-impedance RF routing",
      "Prototype manufacturing and full DVT, delivering a customer-ready reference design",
    ],
    challenges: [
      {
        challenge:
          "~100× lower power than contemporary wireless mice through system-wide energy budgeting",
        resolution:
          "Every component selected for nano-amp quiescent current — Atmosic BLE SoC with RF harvesting, PixArt PMW3610 optical sensor, Macronix MX25R QSPI flash, and TI TPS62743 nano-quiescent buck converter — with power rails budgeted across the full sleep/active cycle",
      },
      {
        challenge: "Highly optimized sleep/wake cycles for the primary radio",
        resolution:
          "Ultra-low-power firmware architecture with deep sleep, retain, and hibernate modes scheduling the higher-power primary radio to activate only when motion or input demands it",
      },
      {
        challenge:
          "Integrating RF energy harvesting into a consumer HID product's power architecture",
        resolution:
          "Leveraged the Atmosic SoC's ambient RF energy harvesting to supplement battery power, extending operational life while maintaining standard HID mouse responsiveness and pairing behavior",
      },
      {
        challenge:
          "Responsive, lag-free cursor tracking at 10 ms report cadence while mostly asleep",
        resolution:
          "Optical sensor driver with 10 ms X-Y-Z polling and event-driven HID reporting, waking the radio only on motion interrupts or button events to sustain sub-10 ms cursor latency without continuous active power draw",
      },
      {
        challenge:
          "Fitting complete RF design onto a compact mouse-shaped 4-layer PCB",
        resolution:
          '4-layer PCB layout with controlled-impedance RF routing, antenna keep-outs, matching network, and RF switch connector for conducted test and certification — all within a ~1.85" × 2.75" mouse form factor',
      },
    ],
    hardwareComponents: [
      {
        title: "Atmosic BLE 5 Ultra-Low-Power SoC",
        description:
          "BLE 5 wireless platform with RF energy harvesting technology, waking the primary radio only when motion or input demands it",
      },
      {
        title: "PixArt PMW3610 Optical Mouse Sensor",
        description:
          "Ultra-low-power IR optical sensor connected via SPI with motion interrupt for event-driven wake and X-Y tracking",
      },
      {
        title: "Macronix MX25R-Series QSPI Flash",
        description:
          "Ultra-low-power QSPI flash for firmware storage and BLE bonding data with minimal standby current",
      },
      {
        title: "TI TPS62743 Buck Converter",
        description:
          "Nano-quiescent-current buck converter powering the 1.8 V rail from 2× AAA cells with sub-microamp standby",
      },
      {
        title: "2.4 GHz Chip Antenna with RF Switch Connector",
        description:
          "Integrated chip antenna with RF switch connector for conducted RF test and certification of the BLE link",
      },
    ],
    interfaces: [
      {
        title: "BLE 5 Wireless Link",
        description:
          "HID-over-GATT mouse reports to the host PC or laptop — 3-button, scroll wheel, and pairing support",
      },
      {
        title: "SPI — Optical Sensor",
        description:
          "High-speed SPI interface to the PixArt PMW3610 for X-Y motion tracking with motion-interrupt wake",
      },
      {
        title: "Quadrature Encoder — Scroll Wheel",
        description:
          "Quadrature Z-encoder input for scroll-wheel position and direction detection",
      },
      {
        title: "GPIO — Buttons & Pairing",
        description:
          "Three mouse button inputs plus a dedicated pairing button with LED status indication",
      },
      {
        title: "SWD / UART Debug",
        description:
          "Serial wire debug and UART interfaces for firmware development, bring-up, and DVT",
      },
    ],
    firmwareItems: [
      {
        title: "BLE HID Mouse Profile Implementation",
        description:
          "HID-over-GATT mouse profile with 3-button, scroll, and pairing support on a custom-tuned BLE stack for the Atmosic SoC platform.",
      },
      {
        title: "Ultra-Low-Power Firmware Architecture",
        description:
          "Optimized sleep/wake scheduling across deep sleep, retain, and hibernate modes — minimizing active radio time while preserving instant wake on motion or button events.",
      },
      {
        title: "Optical Sensor Driver",
        description:
          "PixArt PMW3610 SPI driver with 10 ms X-Y-Z polling and event-driven HID reporting, triggering BLE transmission only when motion or input state changes.",
      },
      {
        title: "Pairing, Bonding & Reconnection State Machine",
        description:
          "One-touch unbond and LED status indication with robust bonding storage in QSPI flash and automatic reconnection to previously paired hosts.",
      },
      {
        title: "Power Characterization & DVT Tuning",
        description:
          "Full power characterization and firmware tuning through DVT to validate multi-year battery life from 2× AAA cells at the ~100× lower consumption target.",
      },
    ],
    specs: [
      {
        key: "Wireless",
        value:
          "BLE 5 — HID-over-GATT mouse profile; Atmosic ultra-low-power SoC with RF energy harvesting",
      },
      {
        key: "Power Source",
        value:
          "2× AAA cells — multi-year battery life at ~100× lower consumption than contemporary wireless mice",
      },
      {
        key: "Optical Sensor",
        value:
          "PixArt PMW3610 — ultra-low-power IR sensor via SPI with motion interrupt",
      },
      {
        key: "HID Features",
        value:
          "3 mouse buttons, scroll wheel (quadrature encoder), dedicated pairing button, LED status",
      },
      {
        key: "Report Cadence",
        value: "10 ms X-Y-Z polling with event-driven HID reporting",
      },
      {
        key: "PCB — Layer Count",
        value: "4 layers",
      },
      {
        key: "PCB — Thickness",
        value: "65.6 mils (~1.6 mm)",
      },
      {
        key: "PCB — Board Size",
        value: '~1.85" × 2.75" (~2.5 sq. in.), mouse form factor',
      },
      {
        key: "PCB — Components",
        value: "96 placed components; 312 pins / 69 nets",
      },
      {
        key: "RF Design",
        value:
          "2.4 GHz chip antenna with matching network, keep-outs, and RF switch connector for conducted test",
      },
      {
        key: "Qmax Scope",
        value:
          "Architecture, hardware, bare-metal firmware, 4-layer RF PCB, prototypes, and full DVT — production-ready reference design for Atmosic customers",
      },
    ],
    summary: [
      "Qmax Systems delivered a complete ultra-low-power Bluetooth mouse reference design — architecture, hardware, firmware, PCB, prototypes, and full DVT — that showcases Atmosic's energy-harvesting BLE 5 silicon at its best. Consuming roughly 100× less power than contemporary wireless mice, the platform proved multi-year battery life from two AAA cells and gave the silicon vendor's customers a direct, production-ready path to market.",
      "The project highlights Qmax's strength in reference design development for semiconductor companies — combining nano-quiescent hardware design, aggressive bare-metal power management, compact RF PCB layout, and full DVT validation into a turnkey platform that customers can take directly into high-volume consumer products.",
    ],
    contactCtaPrefix:
      "Need a reference design platform for your silicon? Qmax Systems builds reference designs and ultra-low-power embedded products for semiconductor companies and OEMs — architecture, hardware, firmware, RF PCB design, prototypes, and DVT.",
    listingSummary:
      "Embedded reference design — ultra-low-power BLE 5 optical mouse platform with ~100× lower power consumption and multi-year AAA battery life for Atmosic.",
    metadata: {
      title: "Ultra-Low-Power Bluetooth Mouse Reference Design | Case Study",
      description:
        "Embedded case study — BLE 5 optical mouse reference design with Atmosic SoC, RF energy harvesting, 4-layer RF PCB, and multi-year battery life from 2× AAA cells.",
    },
  };
