import { embeddedCaseStudiesData } from "@/store/embedded-case-studies";
import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const obdIiDiagnosticsDeviceImages =
  embeddedCaseStudiesData.find((study) => study.id === "smart-obd2")?.images ??
  [];

export const obdIiDiagnosticsDeviceCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "obd-ii-diagnostics-device",
    slug: "obd-ii-diagnostics-device",
    title: "OBD-II Diagnostics Device",
    subtitle:
      "Smart OBD-II Diagnostics Device for Automotive Dealer Management",
    metaTags: [
      "Domain: Automotive",
      "Industry: Dealer Management Systems",
      "Market: North America",
    ],
    ribbonStats: [
      {
        value: "FCC Certified",
        label: "FCC Part 15 Class A",
      },
      {
        value: "IP65 Rated",
        label: "ABS Enclosure",
      },
      {
        value: "LTE + Wi-Fi + BLE",
        label: "Multi-Radio",
      },
      {
        value: "Mass Production",
        label: "1,000s Shipped to USA",
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
    images: obdIiDiagnosticsDeviceImages,
    cardImageIndex: 10,
    overview: [
      "A leading Automotive Retail Cloud (ARC) platform provider based in the USA engaged Qmax Systems India Pvt Ltd to design and manufacture a next-generation handheld OBD-II diagnostics device — the OBD-II Diagnostics Device. The device was purpose-built for deployment in automotive dealership service lanes across North America, enabling service advisors and technicians to instantly access vehicle data the moment a car arrives.",
      "Qmax delivered the complete product — from initial concept and industrial design through hardware, firmware, PCB design, compliance certifications, mass production, and direct shipment to the USA. Thousands of units were produced and deployed across the client's dealership network across North America, making this a flagship end-to-end product development engagement.",
    ],
    brief: [
      "The OBD-II Diagnostics Device is a rugged, portable, handheld smart OBD-II diagnostics device designed for professional use in automotive service environments. It plugs into any vehicle's OBD-II port and instantly reads VIN, mileage, and Diagnostic Trouble Codes (DTCs), transmitting this data to the client's cloud platform in real time — enabling the service advisor to greet the customer by name, view the vehicle's full history, and open a Repair Order automatically.",
      "The device runs embedded Linux on a dual-core ARM Cortex-A7 processor with onboard Wi-Fi, BLE, LTE, and GPS, housed in a compact IP65-rated ABS enclosure with a built-in Li-Po battery, wireless charging, USB-C, and a small LCD display. It is designed to stay powered on and cloud-connected at all times, delivering sub-second response from plug-in to data availability.",
      "The OBD-II Diagnostics Device automatically detects the vehicle OEM and dynamically switches OBD-II communication protocols — supporting CAN, ISO 15765, SAE J1850 VPW (GM), and SAE J1850 PWM (Ford) — using the STN2120 OBD translator IC. The device meets FCC, RoHS, and California Proposition 65 compliance requirements.",
    ],
    scopeItems: [
      "Industrial Design (ID) — Ergonomic, compact, and rugged form factor designed for one-handed use by workshop technicians",
      "Hardware Architecture & Circuit Design — Multi-radio SoC platform with automotive-grade power management, OBD interface, and protection circuits",
      "PCB Design — Multi-layer PCB design (4-layer main board, 2-layer sub-board) with high-density component placement",
      "Firmware Development — Embedded Linux (device drivers, BSP, power management, OBD protocol stack, cloud connectivity)",
      "Mechanical Design — ABS enclosure with IP65 sealing, OBDII connector integration, wireless charging receiver alignment",
      "Prototype Manufacturing — PCB assembly, bring-up, and functional verification of early engineering samples",
      "DVT (Design Verification Testing) — Full environmental, electrical, and functional validation including drop tests, temperature cycling, OBD plug/unplug endurance",
      "Compliance Certifications — FCC Part 15, RoHS, California Proposition 65 (CP65), SAR",
      "PVT (Production Validation Testing) — Production line setup, diagnostic fixture design, yield optimization",
      "Mass Production & Shipping — Manufactured thousands of units; packaged in custom carton boxes with UL-certified power adapters and accessories; shipped directly to the USA",
    ],
    challenges: [
      {
        challenge: "Compact, Rugged Form Factor",
        resolution:
          "Packaging a multi-radio platform (LTE, Wi-Fi, BLE, GPS, OBD), battery, LCD, and full wireless charging coil into a 130 × 60 × 30 mm IP65-rated handheld enclosure",
      },
      {
        challenge: "Multi-Antenna RF Performance",
        resolution:
          "Fitting LTE, Wi-Fi/BLE, and GPS antennas within a small metal-free plastic enclosure without inter-antenna interference or de-sensitization",
      },
      {
        challenge: "OBD Protocol Auto-Detection",
        resolution:
          "Ensuring compatibility with all vehicle OEMs by auto-detecting and switching among CAN, ISO 15765-4, SAE J1850 VPW (GM), and SAE J1850 PWM (Ford) protocols dynamically using relay-switched hardware",
      },
      {
        challenge: "Automotive Voltage Transients",
        resolution:
          "Protecting all electronics from vehicle OBD port voltage spikes, load dumps, and reverse polarity events typical of automotive environments",
      },
      {
        challenge: "Battery Safety & Longevity",
        resolution:
          "Implementing multi-layer Li-Po battery protection (overcharge, over-discharge, over-current, short circuit) for a device that may be dropped, stored in a hot car (Phoenix summer) or a cold trunk (Detroit winter)",
      },
      {
        challenge: "Thermal Management",
        resolution:
          "Ensuring safe operation when the device is left plugged into a vehicle's OBD port in extreme temperatures (−20°C to +70°C ambient)",
      },
      {
        challenge: "Mechanical Durability",
        resolution:
          "Designed to survive the harsh reality of a workshop environment: dropped onto concrete, tossed into a toolbox, and subjected to thousands of OBD plug-in/plug-out cycles",
      },
      {
        challenge: "Always-On Cloud Connectivity",
        resolution:
          "Keeping the device in a low-power but cloud-ready state so vehicle data is available on the cloud platform the instant the device is inserted into the OBD port",
      },
      {
        challenge: "GPS Time-to-First-Fix & Accuracy",
        resolution:
          "Optimizing GPS antenna placement and AGPS configuration to achieve fast location lock inside a service lane environment with partial sky visibility",
      },
      {
        challenge: "Multiple Compliance Certifications",
        resolution:
          "Achieving FCC Part 15, SAR, RoHS, and CP65 certification simultaneously within a tight development schedule, with parallel LTE module carrier approval",
      },
    ],
    hardwareComponents: [
      {
        title: "STM32MP157C",
        description:
          "Main application processor: dual-core ARM Cortex-A7 @ 650 MHz + Cortex-M4 co-processor (STMicroelectronics)",
      },
      {
        title: "512 MB DDR3 RAM",
        description: "System memory for Linux OS and application runtime",
      },
      {
        title: "4 GB eMMC Flash",
        description: "Storage for OS image, firmware, logs, and configuration",
      },
      {
        title: "STN2120",
        description:
          "OBD Translator IC: supports all standard OBD-II protocols with automatic protocol detection and relay-switched hardware interface",
      },
      {
        title: "MCP2518FD",
        description:
          "CAN FD Controller: high-speed CAN FD (up to 8 Mbps) for modern vehicle diagnostics",
      },
      {
        title: "AP6256",
        description:
          "Wi-Fi 5 (802.11ac) + Bluetooth 5.0 combo module (2.4/5 GHz)",
      },
      {
        title: "LTE Module",
        description:
          "4G LTE modem for cloud connectivity in areas outside dealership Wi-Fi coverage",
      },
      {
        title: "MAX17201",
        description:
          "Fuel Gauge IC: coulomb-counting battery state-of-charge monitoring",
      },
      {
        title: "BQ24195",
        description:
          "Battery Charger IC: multi-source input (USB / OBD port), supports 5V@2A USB-C charging",
      },
      {
        title: "BQ51050B",
        description:
          "Wireless Charging Receiver IC: Qi-compatible inductive charging receiver",
      },
      {
        title: "RTL8211EG",
        description: "Ethernet PHY (100/1000BASE-T) for wired LAN interface",
      },
      {
        title: "MAX16126, ISL6146, ECLAMP2410, PJE5V0U8",
        description:
          "Protection ICs: automotive transient protection, reverse polarity, and ESD clamping",
      },
    ],
    interfaces: [
      {
        title: "OBD-II (SAE J1962)",
        description:
          "Primary vehicle interface connector; supports all standard OBD-II protocol variants",
      },
      {
        title: "ISO 15765-4 (CAN)",
        description: "Standard CAN-based OBD protocol for modern vehicles",
      },
      {
        title: "SAE J1850 VPW",
        description:
          "Variable Pulse Width Modulation protocol used in GM vehicles",
      },
      {
        title: "SAE J1850 PWM",
        description: "Pulse Width Modulation protocol used in Ford vehicles",
      },
      {
        title: "CAN FD",
        description:
          "High-speed CAN Flexible Data Rate for next-generation vehicle diagnostics via MCP2518FD",
      },
      {
        title: "LTE (4G)",
        description:
          "Cloud connectivity via embedded LTE modem; FCC-certified bands including Band 255 and Band 46",
      },
      {
        title: "Wi-Fi 802.11a/b/g/n/ac",
        description:
          "Dealership Wi-Fi connectivity via AP6256 module (2.4 GHz & 5 GHz dual-band)",
      },
      {
        title: "Bluetooth 5.0 BLE",
        description:
          "Pairing with the client mobile app for provisioning, status display, and local data transfer",
      },
      {
        title: "GPS/GNSS",
        description:
          "Location tracking for vehicle movement detection and telematics",
      },
      {
        title: "USB Type-C",
        description:
          "Firmware update, diagnostics, and battery charging (5V @ 2A)",
      },
      {
        title: "Qi Wireless Charging",
        description:
          "Inductive charging via BQ51050B receiver; compatible with standard Qi charging pads",
      },
      {
        title: "LCD Display",
        description:
          "Status display: shows device state, username, brand logo, and key parameters",
      },
      {
        title: "I²C, SPI, UART, GPIO",
        description:
          "Internal inter-IC communication buses for sensor, display, and peripheral control",
      },
    ],
    firmwareItems: [
      {
        title: "BSP & Linux Kernel Bringup",
        description:
          "Board Support Package for STM32MP157C including U-Boot bootloader, kernel configuration, and device tree customization",
      },
      {
        title: "OBD Protocol Stack",
        description:
          "Implementation of multi-protocol OBD-II communication layer with auto-detection and relay switching logic via STN2120",
      },
      {
        title: "LTE Modem Driver & Connectivity Manager",
        description:
          "AT command interface, PPP/MBIM data connection management, automatic reconnect, and cloud keep-alive",
      },
      {
        title: "Wi-Fi & BLE Driver Integration",
        description:
          "AP6256 module integration for dual-band Wi-Fi and BLE 5.0; BLE GATT service for mobile app pairing and provisioning",
      },
      {
        title: "GPS Driver & Location Services",
        description:
          "NMEA parsing, AGPS support for fast time-to-first-fix, vehicle motion detection using OBD speed + GPS cross-validation",
      },
      {
        title: "Power Management Subsystem",
        description:
          "Active/Sleep/Deep-Sleep state machine; 2-minute idle sleep timer (cloud-configurable); wake-on-OBD-plug, wake-on-charger, wake-on-button",
      },
      {
        title: "Battery Management",
        description:
          "Fuel gauge integration (MAX17201), charger control (BQ24195), over-temperature and safety cut-off logic",
      },
      {
        title: "Wireless Charging Integration",
        description:
          "BQ51050B status monitoring, charge state reporting to LCD and cloud",
      },
      {
        title: "Production Diagnostic Firmware",
        description:
          "Factory test firmware for automated functional testing on the production line (RF, OBD interface, LCD, battery, GPS)",
      },
      {
        title: "OTA Firmware Update",
        description:
          "Secure over-the-air firmware update mechanism via the client's cloud platform for field-deployed devices",
      },
    ],
    specs: [
      {
        key: "Product Name",
        value: "OBD-II Diagnostics Device — OBD-II Diagnostics Device",
      },
      {
        key: "Domain / Industry",
        value:
          "Automotive | Dealer Management System (DMS) | IoT / Connected Devices",
      },
      {
        key: "Application",
        value:
          "Smart OBD-II Vehicle Diagnostics for Automotive Dealership Service Lanes",
      },
      {
        key: "Main Processor",
        value:
          "STMicroelectronics STM32MP157C — Dual-Core ARM Cortex-A7 @ 650 MHz + Cortex-M4",
      },
      {
        key: "Memory",
        value: "512 MB DDR3 RAM | 4 GB eMMC Flash",
      },
      {
        key: "OBD Translator",
        value:
          "STN2120 — Multi-protocol OBD-II translator with automatic protocol detection",
      },
      {
        key: "CAN FD Controller",
        value: "Microchip MCP2518FD — CAN FD up to 8 Mbps",
      },
      {
        key: "Wi-Fi / BLE Module",
        value: "AP6256 — IEEE 802.11a/b/g/n/ac (2.4/5 GHz) + Bluetooth 5.0 BLE",
      },
      {
        key: "Cellular",
        value:
          "4G LTE Module — FCC-approved; LTE Band 255, Band 46 (TD Unlicensed / NII-3)",
      },
      {
        key: "GNSS",
        value: "GPS / GNSS — Integrated location and vehicle motion detection",
      },
      {
        key: "Ethernet PHY",
        value: "Realtek RTL8211EG — 10/100/1000BASE-T",
      },
      {
        key: "Battery",
        value: "On-board Li-Po 2000 mAh | Fuel Gauge: Maxim MAX17201",
      },
      {
        key: "Battery Charger",
        value: "Texas Instruments BQ24195 — Multi-input (USB-C / OBD port)",
      },
      {
        key: "Wireless Charging",
        value: "Texas Instruments BQ51050B — Qi-compatible receiver",
      },
      {
        key: "Protection ICs",
        value:
          "MAX16126, ISL6146, ECLAMP2410, PJE5V0U8 — Automotive transient, ESD, reverse polarity",
      },
      {
        key: "OBD-II Protocols",
        value:
          "ISO 15765-4 (CAN) | SAE J1850 VPW (GM) | SAE J1850 PWM (Ford) | CAN FD",
      },
      {
        key: "Other Interfaces",
        value: "USB Type-C | LCD Display | I²C | SPI | UART | GPIO",
      },
      {
        key: "Enclosure",
        value: "ABS Plastic with IP65 Ingress Protection",
      },
      {
        key: "Charging Methods",
        value: "Qi Wireless Pad | USB Type-C (5V @ 2A) | Vehicle OBD Port",
      },
      {
        key: "Display & Controls",
        value:
          "LCD | Power Button | User Button | Torch Button | RGB LED | Built-in Torch",
      },
      {
        key: "OS / Platform",
        value:
          "Embedded Linux (Yocto) | U-Boot Bootloader | Application layer by client",
      },
      {
        key: "Certifications",
        value:
          "FCC Part 15 (Class A) | RoHS Compliant | California Proposition 65 (CP65) | SAR",
      },
      {
        key: "Power Supply",
        value: "UL-certified power adapter (US market) | 5V @ 2A USB-C",
      },
      {
        key: "Production Volume",
        value: "1,000s of units — Mass manufactured and shipped to USA",
      },
      {
        key: "Scope Delivered",
        value:
          "Full product development: ID → HW → FW → PCB → DVT → PVT → Certification → Mass Production → Shipping",
      },
    ],
    summary: [
      "The OBD-II Diagnostics Device is a testament to Qmax Systems' capability to deliver a complex, multi-technology IoT product — from concept to mass production — for a demanding North American automotive market customer. The project required deep expertise across hardware architecture, embedded Linux firmware, multi-protocol OBD-II vehicle communication, RF/antenna engineering, automotive-grade protection design, and compliance certification.",
      "By maintaining always-on cloud connectivity, auto-detecting vehicle protocols, and delivering data to the client's cloud platform the moment the device is plugged into a vehicle, the OBD-II Diagnostics Device transformed the dealership service lane experience — enabling service advisors to greet customers by name, pull vehicle history instantly, and create repair orders automatically. The device continues to be deployed across the client's growing dealership network across North America.",
      "This engagement demonstrates Qmax Systems' ability to serve as a complete product development partner — handling every phase from industrial design and hardware through compliance certification, production diagnostics, mass manufacturing, and direct international shipment — making Qmax a trusted full-stack R&D and manufacturing partner for IoT and connected device companies worldwide.",
    ],
    listingSummary:
      "Full product development from concept to mass production — handheld OBD-II diagnostics device for North American automotive dealership service lanes.",
    metadata: {
      title: "OBD-II Diagnostics Device | Case Study",
      description:
        "Full product development case study — smart OBD-II diagnostics device for automotive dealer management, from concept to mass production.",
    },
  };
