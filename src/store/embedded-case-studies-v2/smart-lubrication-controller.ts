import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const smartLubricationControllerImages = [
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/LUBER/Luber_V2.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/LUBER/1.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/LUBER/2.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/LUBER/3.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/LUBER/4.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/LUBER/LUBE_TOP.svg",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/LUBER/LUBE_BOT.svg",
];

export const smartLubricationControllerCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "smart-lubrication-controller",
    slug: "smart-lubrication-controller",
    section: "embedded",
    title: "Smart Lubrication Controller for Rail & Metro Applications",
    subtitle: "Embedded Systems — Railway-Grade IoT Controller",
    metaTags: [
      "Domain: Railway & Metro",
      "Industry: Track Lubrication Systems",
      "Market: India",
    ],
    ribbonStats: [
      {
        value: "1000+ Units",
        label: "Deployed",
      },
      {
        value: "IP65",
        label: "Outdoor Enclosure",
      },
      {
        value: "BLE + GSM",
        label: "Wireless Connectivity",
      },
      {
        value: "14 Inputs",
        label: "Protected Field I/O",
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
    images: smartLubricationControllerImages,
    overview: [
      "Qmax Systems designed and delivered a Smart Lubrication Controller — a rugged, cloud-connected embedded system that automates rail track lubrication for railway and metro rail installations. The customer, a lubrication systems and equipment manufacturer, came to Qmax with a requirement to build electronics that meet railway-grade environmental standards.",
      "Qmax delivered the complete electronics development — architecture, hardware, firmware, PCB design, IP65 enclosure design, EVT, full DVT, and prototypes — and supported the transition to volume production. The customer has since manufactured 1000+ units, deployed across railway and metro rail projects throughout India, including remote off-grid locations.",
    ],
    brief: [
      "The Smart Lubrication Controller manages track-side lubrication equipment: it senses passing train wheels, counts axles, and precisely actuates the lubrication pump and solenoid valves so grease is applied only when and where needed. Built around a Microchip PIC18 low-power microcontroller, it integrates BLE for on-site commissioning from a mobile phone, GSM connectivity for cloud-based remote monitoring, a character LCD with keypad navigation for local configuration, and battery-backed RTC-based scheduling and logging.",
      "Housed in an IP65 enclosure, the controller is engineered for continuous operation track-side — withstanding extreme vibration, temperature swings, and exposure to high-voltage spikes and surges near electrified lines.",
    ],
    scopeIntro:
      "Qmax Systems executed the complete electronics development lifecycle for this railway-grade lubrication platform:",
    scopeItems: [
      "End-to-end system architecture definition to meet railway-grade environmental requirements",
      "Hardware design of a low-power, surge-hardened embedded controller platform",
      "Firmware development in bare-metal C on a Microchip PIC18 MCU using MPLAB X IDE",
      "Android application development for commissioning and remote diagnostics over BLE",
      "2-layer PCB design optimized for cost, EMI robustness, and volume manufacturing",
      "IP65 enclosure design for harsh outdoor track-side deployment",
      "Prototype manufacturing, EVT, and full Design Verification Testing (DVT)",
      "Volume production support scaling to 1000+ deployed units",
    ],
    challenges: [
      {
        challenge:
          "Surviving high-voltage spikes and surges near electrified railway tracks",
        resolution:
          "Implemented layered TVS diodes, zener clamping, and fused protection on every field input and power rail, with a 15 A fuse and ESD arrays hardening all 14 field I/O channels against track-side electrical events",
      },
      {
        challenge:
          "Reliable wheel detection and counting under extreme vibration and all-weather outdoor conditions",
        resolution:
          "Developed debounced wheel-count and train detection firmware with noise filtering tuned for track-side sensor inputs operating under continuous vibration and variable weather",
      },
      {
        challenge:
          "Achieving ultra-low standby power for solar-powered operation at remote, off-grid sites",
        resolution:
          "Designed a low-power PIC18F66J94-based platform with optimized sleep/wake cycles and efficient power regulation, enabling sustained operation from solar supplies at remote rail sections",
      },
      {
        challenge:
          "Maintaining GSM cloud connectivity from remote locations with weak, intermittent networks",
        resolution:
          "Built a resilient GSM telemetry stack with buffered event logging and retry logic, ensuring pump status, pressure, and wheel-count data reaches the cloud even over intermittent GPRS links",
      },
      {
        challenge:
          "Integrating BLE, GSM, LCD, sensor inputs, and relay loads on a compact 2-layer board without EMI issues",
        resolution:
          "Applied EMI-conscious 2-layer PCB layout with careful RF module placement, ground partitioning, and signal routing to co-locate BLE, GSM, LCD, and relay drive circuits without cross-interference",
      },
      {
        challenge:
          "Designing an IP65-sealed enclosure while managing antenna performance and thermal behavior",
        resolution:
          "Engineered an IP65 outdoor enclosure with antenna placement validated for BLE and GSM performance, and thermal design suited to continuous track-side operation across temperature extremes",
      },
      {
        challenge:
          "Ensuring accurate, battery-backed time-keeping and event logging through power outages",
        resolution:
          "Integrated an NXP PCF85263 RTC with 32.768 kHz crystal and lithium coin-cell backup, paired with 2-Mbit I2C EEPROM for non-volatile configuration and event log retention through power loss",
      },
      {
        challenge:
          "Building a field-friendly commissioning flow usable by non-technical maintenance crews",
        resolution:
          "Delivered a BLE-connected Android commissioning app and an on-device LCD menu system with 5-way keypad navigation, enabling local setup and remote diagnostics without specialized tools",
      },
    ],
    hardwareComponents: [
      {
        title: "PIC18F66J94",
        description:
          "Microchip low-power microcontroller (TQFP-64) — central control and lubrication logic",
      },
      {
        title: "CC2541-based BLE Module",
        description:
          "Texas Instruments BLE radio for mobile phone commissioning and field diagnostics",
      },
      {
        title: "Quad-band GSM/GPRS Modem",
        description:
          "Cellular modem module with SIM interface for cloud telemetry and remote monitoring",
      },
      {
        title: "PCF85263 RTC",
        description:
          "NXP real-time clock with 32.768 kHz crystal and lithium coin-cell backup for scheduling and logging",
      },
      {
        title: "2-Mbit I2C EEPROM",
        description:
          "Non-volatile storage for configuration, calibration, and event log data",
      },
      {
        title: "Power Relays",
        description:
          "Relay outputs for lubrication pump motor and solenoid valve actuation",
      },
      {
        title: "Character LCD + Keypad",
        description:
          "Local display module with level translator and 5-way keypad for on-site configuration",
      },
      {
        title: "Multi-Stage Protection",
        description:
          "15 A fuse, TVS diodes, zener clamps, and ESD arrays on all field I/O and power rails",
      },
    ],
    interfaces: [
      {
        title: "Wheel Count Sensor",
        description:
          "Train detection and axle counting for lubrication trigger logic",
      },
      {
        title: "Proximity Sensor",
        description: "Equipment position and presence sensing",
      },
      {
        title: "Pressure Switch / Transmitter",
        description: "Grease line pressure monitoring",
      },
      {
        title: "Limit Switch Inputs (10×)",
        description: "System status and level monitoring",
      },
      {
        title: "Relay Outputs",
        description: "Lubrication pump motor and solenoid valve drive",
      },
      {
        title: "BLE",
        description:
          "Mobile app-based commissioning, configuration, and diagnostics",
      },
      {
        title: "GSM/GPRS",
        description:
          "Cloud telemetry for remote monitoring of pump status, pressure, and wheel counts",
      },
      {
        title: "USB / LCD / Keypad / Buzzer",
        description:
          "USB-UART bridge for service access, LCD + keypad for local setup, and buzzer/LED indication",
      },
    ],
    firmwareIntro:
      "Bare-metal C firmware on Microchip PIC18 developed using MPLAB X IDE, with companion Android application:",
    firmwareItems: [
      {
        title: "Wheel Counting & Train Detection",
        description:
          "Debounce and noise filtering logic for reliable track-side sensor inputs under vibration",
      },
      {
        title: "Lubrication Control Algorithms",
        description:
          "Wheel-count and schedule-based pump and solenoid actuation for precise grease application",
      },
      {
        title: "BLE Protocol & Android App",
        description:
          "BLE communication stack and Android application for commissioning and remote diagnostics",
      },
      {
        title: "GSM Cloud Telemetry",
        description:
          "Periodic upload of pump run status, pressure, grease events, and wheel counts to cloud platform",
      },
      {
        title: "RTC Scheduling & Event Logging",
        description:
          "Battery-backed time-keeping, scheduled operation, and non-volatile configuration management",
      },
      {
        title: "LCD Menu System",
        description:
          "Keypad-navigated on-device menus for local setup without external tools",
      },
      {
        title: "Fault Recovery",
        description:
          "Watchdog, brown-out detection, and fault-recovery mechanisms for unattended remote operation",
      },
    ],
    specs: [
      {
        key: "Product Name",
        value: "Smart Lubrication Controller for Rail & Metro Applications",
      },
      {
        key: "Domain / Industry",
        value: "Railway & Metro | Track Lubrication Systems | Industrial IoT",
      },
      {
        key: "Application",
        value:
          "Automated track-side lubrication with train wheel detection and cloud monitoring",
      },
      {
        key: "Main Processor",
        value: "Microchip PIC18F66J94 — Low-power TQFP-64 microcontroller",
      },
      {
        key: "Wireless Connectivity",
        value: "BLE (CC2541-based) + Quad-band GSM/GPRS",
      },
      {
        key: "Field Inputs",
        value:
          "14 protected inputs — wheel count, proximity, pressure, and 10× limit switches",
      },
      {
        key: "Outputs",
        value: "Power relays — lubrication pump motor and solenoid valve drive",
      },
      {
        key: "Local Interface",
        value:
          "Character LCD with 5-way keypad | USB-UART | Buzzer/LED indication",
      },
      {
        key: "Enclosure",
        value: "IP65 rugged outdoor enclosure for track-side deployment",
      },
      {
        key: "Layer Count",
        value: "2 layers",
      },
      {
        key: "PCB Thickness",
        value: "64 mils",
      },
      {
        key: "Total Components",
        value: "360",
      },
      {
        key: "Production Volume",
        value:
          "1000+ units deployed across railway and metro projects in India",
      },
      {
        key: "Scope Delivered",
        value:
          "Full electronics development: Architecture → HW → FW → Android App → PCB → Enclosure → EVT → DVT → Production Support",
      },
    ],
    summary: [
      "Qmax Systems delivered a complete railway-grade Smart Lubrication Controller — from architecture and hardware through firmware, Android application, enclosure design, DVT, and volume production support. The result is a rugged, cloud-connected controller that reliably automates track lubrication in some of the harshest outdoor environments, from metro networks to remote off-grid rail sections.",
      "With 1000+ units deployed across India, the product demonstrates Qmax's ability to take demanding industrial IoT products from concept to the field — combining surge-hardened hardware, low-power embedded firmware, wireless connectivity, and field-friendly commissioning tools in a single railway-grade platform.",
    ],
    contactCtaPrefix:
      "Building a rugged, connected industrial controller? Qmax Systems develops railway-grade and industrial embedded products end to end — architecture, hardware, firmware, mobile apps, PCB design, enclosure design, DVT, and production support. Talk to us about your next embedded IoT design.",
    listingSummary:
      "Railway-grade smart lubrication controller with BLE + GSM connectivity, IP65 enclosure, and 1000+ units deployed across India.",
    metadata: {
      title: "Smart Lubrication Controller | Case Study",
      description:
        "Embedded systems case study — railway-grade smart lubrication controller with BLE, GSM cloud connectivity, and IP65 track-side deployment.",
    },
  };
