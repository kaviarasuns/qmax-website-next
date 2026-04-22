import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CaseStudy } from "../../../../types/case-study";
import { CaseStudyCard } from "@/components/case-study-card";
import CaseStudyListCard from "@/components/CaseStudyCard";

// This would typically come from a database or API
const caseStudiesData: CaseStudy[] = [
  {
    id: "industrial-temperature-control-system",
    title: "Industrial Temperature Control System",
    category: "Embedded System Design",
    images: [
      "/case-studies/BLUECOLD/1.png",
      "/case-studies/BLUECOLD/2.png",
      "/case-studies/BLUECOLD/BLUE_COLD_REV-01_BRD_03_TOP.svg",
      "/case-studies/BLUECOLD/BLUE_COLD_REV-01_BRD_03_TP.svg",
      "/case-studies/BLUECOLD/5.png",
    ],
    features: [
      "Hardware / Firmware Design and Development",
      "Precision Temperature Sensing and Control",
      "SAMA5D3 Processor / STM32 MCU",
      "POE+ / Ethernet Connectivity",
      "Industrial-grade Enclosure Design",
      "Multi-zone Temperature Management",
    ],
    summary:
      "An industrial-grade temperature control system designed for environments requiring precise thermal regulation. Built around the SAMA5D3 processor, the system supports multi-zone temperature monitoring with high-accuracy sensors and closed-loop PID control. POE+ connectivity enables single-cable deployment for both power and data, simplifying installation in cold-chain, laboratory, and manufacturing settings.",
    importantParts: [
      "Microchip SAMA5D3 Application Processor",
      "ST Micro High Performance MCU",
      "High-accuracy NTC / RTD Temperature Sensors",
      "Linear Technologies POE+ Controller",
    ],
    salientFeatures: [
      "Precision multi-zone temperature control.",
      "POE+ powered for simplified single-cable installation.",
      "Closed-loop PID regulation with configurable setpoints.",
      "Real-time data logging and remote monitoring.",
      "Industrial operating temperature range (-40 °C to +85 °C).",
      "Configurable alarm thresholds and relay outputs.",
      "Nano Flash storage for local data retention.",
      "Remote firmware upgrade capability.",
      "5 % improvement in thermal stability over prior generation.",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware Development",
      "Board Bring-up and Testing",
      "Enclosure Design",
    ],
  },
  {
    id: "multi-io-card-for-ate",
    title: "Multi IO card for ATE",
    category: "Test & Measurement",
    images: [
      "/case-studies/CHARA/1.png",
      "/case-studies/CHARA/2.png",
      "/case-studies/CHARA/3.png",
      "/case-studies/CHARA/CHARA-T_B.svg",
      "/case-studies/CHARA/CHARA-TB.svg",
      "/case-studies/CHARA/CHARA-top.svg",
    ],
    features: [
      "FPGA Spartan-6 Based Multi-channel IO",
      "High-speed ADC / DAC Sampling",
      "Fiber Optic Interface",
      "Hardware / Firmware Design and Development",
      "PCB Design and Layout",
      "ATE System Integration",
    ],
    summary:
      "A versatile Multi IO card designed for Automated Test Equipment (ATE) platforms, built around a Xilinx Spartan-6 FPGA. The card provides multiple high-speed analog and digital IO channels with fiber optic connectivity for noise-immune data transfer. With 12x faster sampling rates than conventional solutions, it enables precise stimulus generation and measurement capture across a wide range of device-under-test scenarios.",
    importantParts: [
      "Xilinx Spartan-6 FPGA",
      "Analog Devices High-speed ADCs",
      "Texas Instruments DAC and Power Management",
      "Fiber Optic Transceiver Module",
    ],
    salientFeatures: [
      "FPGA-based parallel IO processing.",
      "High-speed ADC sampling for precision measurement.",
      "Fiber optic interface for noise-immune communication.",
      "Multi-channel analog and digital IO.",
      "Configurable test patterns and stimulus generation.",
      "Real-time data acquisition and streaming.",
      "Modular design for integration with ATE racks.",
      "12x faster sampling rate than conventional cards.",
      "Low-latency deterministic IO response.",
    ],
    scopeOfWork: [
      "System Architecture Design",
      "FPGA Development and Programming",
      "Analog Circuit Design",
      "PCB Layout and Design",
      "Firmware Development",
      "Testing and Validation",
      "ATE Integration Support",
    ],
  },
  {
    id: "smart-monitoring-system",
    title: "Smart Monitoring System",
    category: "Industrial Control Systems",
    images: [
      "/case-studies/CLIMATE CONTROL/1.png",
      "/case-studies/CLIMATE CONTROL/2.png",
      "/case-studies/CLIMATE CONTROL/3.png",
    ],
    paddedImages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    features: [
      "ARM Cortex-M7 Processor",
      "FreeRTOS Real-Time Operating System",
      "Multi-sensor Environmental Monitoring",
      "L2 Managed Ethernet Switch",
      "Industrial Grade Components",
      "Remote Dashboard and Alerts",
    ],
    summary:
      "A smart environmental monitoring system powered by an ARM Cortex-M7 processor running FreeRTOS. The system continuously tracks temperature, humidity, air quality, and other environmental parameters across multiple zones. An integrated L2 managed switch enables daisy-chained sensor nodes over a single Ethernet backbone, achieving 40 % better power efficiency through intelligent duty-cycling and POE-powered deployment.",
    importantParts: [
      "ARM Cortex-M7 Processor",
      "L2 Managed Ethernet Switch IC",
      "Industrial Ethernet PHY",
      "Precision Environmental Sensors (Temp, Humidity, CO₂)",
    ],
    salientFeatures: [
      "Real-time multi-zone environmental monitoring.",
      "FreeRTOS for deterministic sensor polling.",
      "L2 managed switch for daisy-chained sensor nodes.",
      "40 % power efficiency through intelligent duty-cycling.",
      "Web-based dashboard for remote monitoring.",
      "Configurable alert thresholds via SNMP.",
      "Industrial operating temperature range.",
      "DIN rail or wall-mount installation.",
      "LED status indicators for each channel.",
    ],
    scopeOfWork: [
      "System Requirements Analysis",
      "Hardware Architecture Design",
      "RTOS Implementation",
      "Sensor Integration and Calibration",
      "Network Stack Development",
      "EMC/EMI Compliance Testing",
      "Industrial Certification",
    ],
  },
  {
    id: "microscopic-camera-control",
    title: "Microscopic Camera Control",
    category: "Imaging & Optics",
    images: [
      "/case-studies/MICROSCOPIC CAMERA/1.png",
      "/case-studies/MICROSCOPIC CAMERA/2.png",
      "/case-studies/MICROSCOPIC CAMERA/3.png",
      "/case-studies/MICROSCOPIC CAMERA/4.png",
      "/case-studies/MICROSCOPIC CAMERA/5.png",
    ],
    features: [
      "High-resolution CMOS Image Sensor",
      "Precision Motor Control for Focus and Zoom",
      "OLED Status Display",
      "Hardware / Firmware Design and Development",
      "USB and Ethernet Streaming Interface",
      "Compact Enclosure Design",
    ],
    summary:
      "A microscopic camera control system designed for laboratory and inspection applications. The system drives precision stepper motors for automated focus and zoom adjustment while streaming high-resolution imagery over USB or Ethernet. An on-board OLED display provides real-time status, magnification level, and capture settings. The compact form factor integrates seamlessly with standard microscope mounts.",
    importantParts: [
      "High-resolution CMOS Image Sensor",
      "Microchip PIC Microcontroller",
      "Precision Stepper Motor Drivers",
      "OLED Display Module (96 × 64)",
      "USB 3.0 High-speed Interface IC",
      "Low-noise LDO Voltage Regulators",
    ],
    salientFeatures: [
      "Automated focus and zoom via precision motor control.",
      "High-resolution image capture and live streaming.",
      "OLED display for real-time status and settings.",
      "USB 3.0 and Ethernet output interfaces.",
      "Compatible with standard microscope mounts.",
      "Low-noise power design for image clarity.",
    ],
    scopeOfWork: [
      "Hardware Design",
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware Development",
      "Board Bring-up and Testing",
      "Enclosure Design",
    ],
  },
  {
    id: "industrial-iot-gateway-with-poe",
    title: "Industrial IOT gateway with POE",
    category: "Industrial IoT",
    images: [
      "/case-studies/OTT/1.png",
      "/case-studies/OTT/2.png",
      "/case-studies/OTT/3.png",
      "/case-studies/OTT/4.png",
      "/case-studies/OTT/TEK_OTT_REV1P0_BRD_PR3.svg",
      "/case-studies/OTT/TEK_OTT_REV1P0_BRD_PR3.bot.svg",
      "/case-studies/OTT/OTT_RENDER_27_NOV_2024_MG2.1.png",
      "/case-studies/OTT/OTT_RENDER_27_NOV_2024_MG4.4.png",
    ],
    features: [
      "Complete Product Development",
      "HW / FW / Linux System Integration",
      "POE+ Powered with Ethernet Backhaul",
      "Multi-protocol IoT Gateway (LoRa, BLE, CAN)",
      "Mechanical / Enclosure Design",
      "Contract Manufacturing",
    ],
    summary:
      "An industrial IoT gateway with integrated POE+ that bridges field sensors and actuators to cloud platforms. The device aggregates data from LoRa, BLE, and CAN bus endpoints, processes it locally on an STM32F MCU, and forwards it over Ethernet. POE+ provides single-cable power and data, eliminating the need for local AC supplies in factory and warehouse deployments. With 15 km LoRa range and 99.9 % uplink accuracy, it serves as a reliable backbone for large-scale industrial monitoring.",
    importantParts: [
      "ST Microelectronics STM32F ARM Cortex MCU",
      "MultiTech LoRa Module",
      "Raytac BLE 5.0 Module",
      "POE+ PD Controller",
      "Industrial Ethernet PHY",
      "Atmel EEPROM",
    ],
    salientFeatures: [
      "POE+ powered — single-cable deployment.",
      "Multi-radio gateway: LoRa, BLE 5.0, CAN bus.",
      "15 km LoRa range for wide-area sensor coverage.",
      "99.9 % data uplink accuracy.",
      "Local edge processing and data buffering.",
      "Industrial-grade ESD / EMI / surge protection.",
      "Remote firmware upgrade via Ethernet.",
      "DIN rail and wall-mount options.",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware Development",
      "Board Bring-up and Testing",
      "Enclosure Design",
      "FCC / CE Certification",
      "Low Volume Production",
    ],
  },
  {
    id: "poe-control-unit",
    title: "POE Control unit",
    category: "Power over Ethernet",
    images: [
      "/case-studies/POE/1.png",
      "/case-studies/POE/2.png",
      "/case-studies/POE/1.1.svg",
      "/case-studies/POE/1.2.svg",
      "/case-studies/POE/1.3.svg",
    ],
    features: [
      "IEEE 802.3af/at POE+ Compliant",
      "Multi-port Managed Power Delivery",
      "Temperature and Accelerometer Sensors",
      "Hardware / Firmware Development",
      "Up to 100 m Reach per Port",
      "Compact Enclosure Design",
    ],
    summary:
      "A compact POE control unit that manages power delivery and monitoring across multiple Ethernet-connected devices. The unit is IEEE 802.3af/at compliant and provides per-port power budgeting, fault detection, and remote enable/disable control. On-board temperature and motion sensors trigger automatic safety shutdowns, while the Qi wireless charging interface allows contact-less maintenance of paired accessories. Designed for access control, IP camera, and building automation deployments.",
    importantParts: [
      "POE+ PSE Controller IC",
      "Managed Ethernet Switch IC",
      "ST Micro Temperature and Accelerometer Sensors",
      "Qi Wireless Charging Receiver",
      "Texas Instruments Power Management ICs",
      "ST Micro LDO Voltage Regulators",
    ],
    salientFeatures: [
      "IEEE 802.3af/at POE+ compliant.",
      "Per-port power budgeting and fault isolation.",
      "Up to 100 m reach per port.",
      "On-board temperature and motion sensing.",
      "Remote port enable/disable via web interface.",
      "Qi wireless charging for paired accessories.",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware Development",
      "Enclosure Design",
      "Board Bring-up and Testing",
    ],
  },
  {
    id: "poe-power-injector",
    title: "POE Power Injector",
    category: "Power over Ethernet",
    images: [
      "/case-studies/POE/3.png",
      "/case-studies/POE/4.png",
      "/case-studies/POE/2.1.svg",
      "/case-studies/POE/2.2.svg",
    ],
    features: [
      "IEEE 802.3af/at/bt POE Injection",
      "Multi-port Mid-span Design",
      "TCP/IP and MQTT Management Protocols",
      "Dual-band 2.4 GHz Monitoring Radio",
      "Hardware / PCB Design",
      "48 GPIO Expansion Pins",
    ],
    summary:
      "A multi-port POE power injector (mid-span) that adds POE capability to existing non-POE Ethernet switches. The unit injects power into up to 48 Ethernet ports simultaneously while maintaining full data pass-through at Gigabit speeds. An on-board management interface accessible via TCP/IP and MQTT enables per-port power monitoring, scheduling, and remote reboot. Three simultaneous operating modes allow mixed 802.3af, 802.3at, and 802.3bt devices on the same chassis.",
    importantParts: [
      "Multi-port POE PSE Controller",
      "High-efficiency Isolated DC-DC Converters",
      "Gigabit Ethernet Magnetics",
      "Macronix 16 Mb NOR Flash Memory",
    ],
    salientFeatures: [
      "Supports 802.3af / at / bt standards.",
      "Up to 48 injected ports per unit.",
      "TCP/IP and MQTT management protocols.",
      "Three simultaneous POE modes.",
      "Per-port power metering and scheduling.",
      "Gigabit pass-through with zero data degradation.",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware Development",
      "Power Integrity Testing",
      "Board Bring-up and Testing",
    ],
  },
  {
    id: "industrial-poe-switch",
    title: "Industrial POE switch",
    category: "Power over Ethernet",
    images: [
      "/case-studies/POE/5.png",
      "/case-studies/POE/6.png",
      "/case-studies/POE/3.1.svg",
      "/case-studies/POE/3.2.svg",
    ],
    features: [
      "Managed L2 Industrial Ethernet Switch",
      "8 / 16 / 24 Port POE+ Output",
      "WPA3 / TLS Secure Management",
      "Zero-config Plug-and-play Deployment",
      "Hardened Enclosure for Industrial Environments",
      "USB-C 5 V Console Port",
    ],
    summary:
      "A ruggedised industrial POE switch providing managed L2 switching with POE+ power delivery across 8 to 24 Gigabit ports. The zero-config deployment mode enables 90 % faster setup compared to traditional managed switches, while WPA3 and TLS-secured management protect against unauthorised access. The fanless design with an extended operating temperature range makes it suitable for factory floors, outdoor cabinets, and harsh industrial environments.",
    importantParts: [
      "Managed L2 Ethernet Switch Controller",
      "POE+ PSE Controllers (per-port)",
      "Industrial-grade Ethernet Magnetics",
      "Macronix NOR Flash Memory",
      "CUI Industrial Power Supply Module",
    ],
    salientFeatures: [
      "Managed L2 switching with POE+ on every port.",
      "Zero-config mode for 90 % faster deployment.",
      "WPA3 / TLS secured management interface.",
      "Fanless design for harsh environments.",
      "Extended operating temperature (-40 °C to +75 °C).",
      "USB-C 5 V console port for local configuration.",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware Development",
      "Power Integrity Testing",
      "Enclosure Design",
      "Board Bring-up and Testing",
    ],
  },
  {
    id: "portable-ev-charger-pcb",
    title: "Portable EV Charger",
    category: "Power Electronics Design",
    images: ["/ott/CHARA-top.svg"],
    features: [
      "Portable AC / DC EV Charging",
      "Level 1 and Level 2 Charging Support",
      "Compact and Lightweight Enclosure",
      "6 Layer High-current PCB",
      "Hardware / Firmware Design and Development",
      "Safety Certified (UL / IEC 61851)",
    ],
    summary:
      "A compact, portable EV charger designed for on-the-go and home charging scenarios. The unit supports both Level 1 (120 V) and Level 2 (240 V) charging with automatic voltage detection and adaptive current control. A high-current 6-layer PCB handles up to 32 A with integrated ground-fault and over-temperature protection. The lightweight enclosure and built-in cable management make it easy to store in a vehicle trunk for travel charging.",
    importantParts: [
      "High-current Relay and Contactor Assembly",
      "ARM Cortex-M4 Charge Controller MCU",
      "GFCI / Ground Fault Detection Module",
      "SAE J1772 / IEC 62196 Connector Interface",
      "Temperature Monitoring NTC Array",
      "Compact Switch-mode Power Supply",
    ],
    salientFeatures: [
      "Level 1 and Level 2 portable charging.",
      "Automatic voltage detection (120 V / 240 V).",
      "Up to 32 A adaptive current control.",
      "Integrated GFCI and over-temperature protection.",
      "Lightweight and compact for in-vehicle storage.",
      "LED status ring for charge state indication.",
    ],
    scopeOfWork: [
      "Hardware Design",
      "Schematics Entry",
      "PCB Layout Design (6 Layer)",
      "PCB Fabrication and Assembly",
      "Firmware Development",
      "Safety Certification Support (UL / IEC)",
      "Enclosure Design",
      "Board Bring-up and Testing",
    ],
  },
  {
    id: "aerospace-pcb",
    title: "Aerospace PCB",
    category: "Robotics",
    images: ["/ott/TEK_OTT_REV1P0_BOT.svg"],
    features: [
      "Aerospace Board",
      "Interfaces: LVDS, SPI, I2C",
      "8 Layer PCB",
      "High Density",
      "Total pin count: 2312",
      "Packages Used: 135 Pin BGAs",
    ],
    summary: "",
    importantParts: [],
    salientFeatures: [],
    scopeOfWork: [],
  },
  {
    id: "automotive-obd-pcb",
    title: "Automotive OBD PCB",
    category: "Automotive Electronics",
    images: ["/ott/TEK_OTT_REV1P0_BRD_PR3.svg"],
    features: [
      "Automotive OBD PCB",
      "Interfaces: UART, I2C, SPI",
      "4 Layer PCB",
      "Total pin count: 997",
      "Packages Used: LQFP 64",
    ],
    summary: "",
    importantParts: [],
    salientFeatures: [],
    scopeOfWork: [],
  },
  {
    id: "fedarant-pcb-bottom-layer",
    title: "Fedarant PCB – Bottom Layer",
    category: "PCB Design",
    images: ["/case-studies/FEDERANT/P01306PB1PR2_BOT.svg"],
    features: [
      "Fedarant IoT Gateway – Bottom Layer View",
      "Multi-radio PCB (Wi-Fi / BLE 5.0 / ZigBee)",
      "Compact form factor design",
      "High-density SMD placement",
      "Controlled impedance routing",
      "RF-optimised ground planes",
    ],
    summary:
      "Bottom-layer view of the Fedarant IoT Micro Gateway PCB, showcasing the high-density SMD component placement and optimised ground plane strategy that supports simultaneous tri-radio operation across Wi-Fi, BLE 5.0, and ZigBee.",
    importantParts: [
      "Qualcomm QCA4020 tri-radio SoC",
      "Skyworks Wi-Fi Front End Module",
      "Macronix 32 Mb NOR Flash Memory",
      "CUI / Mornsun AC-DC power module",
    ],
    salientFeatures: [
      "High-density bottom-side component placement.",
      "Optimised ground planes for tri-radio RF performance.",
      "Controlled impedance traces for high-speed signals.",
      "Thermal relief vias for efficient heat dissipation.",
    ],
    scopeOfWork: [
      "PCB stack-up definition",
      "Component placement and routing",
      "RF ground plane optimisation",
      "DFM review and fabrication handoff",
    ],
  },
  {
    id: "fedarant-pcb-top-layer",
    title: "Fedarant PCB – Top Layer",
    category: "PCB Design",
    images: ["/case-studies/FEDERANT/P01306PB1PR2.svg"],
    features: [
      "Fedarant IoT Gateway – Top Layer View",
      "Multi-radio PCB (Wi-Fi / BLE 5.0 / ZigBee)",
      "Qualcomm QCA4020 SoC layout",
      "RF antenna keep-out zones",
      "4-layer controlled impedance stackup",
      "Compact 48 mm × 42 mm footprint",
    ],
    summary:
      "Top-layer view of the Fedarant IoT Micro Gateway PCB, highlighting the Qualcomm QCA4020 SoC placement, antenna keep-out zones, and the compact routing strategy that fits tri-radio connectivity into a 48 mm × 42 mm footprint.",
    importantParts: [
      "Qualcomm QCA4020 tri-radio SoC",
      "Skyworks RF Power Amplifier",
      "STMicro low-drop voltage regulators",
      "Integrated antenna structures",
    ],
    salientFeatures: [
      "Compact 48 mm × 42 mm PCB footprint.",
      "Dedicated RF keep-out zones for antenna performance.",
      "4-layer controlled impedance stackup.",
      "Clean power and ground separation for noise immunity.",
    ],
    scopeOfWork: [
      "Schematic entry and net-list validation",
      "PCB layout and top-layer component placement",
      "Antenna keep-out zone definition",
      "Signal integrity and EMC review",
      "PCB fabrication and assembly coordination",
    ],
  },
  {
    id: "video-processor",
    title: "Video Processor",
    category: "PCB Design",
    images: [
      "https://d1yetprhniwywz.cloudfront.net/case-studies-images/Video-Processor/Video-Processor.png",
    ],
    features: [
      "Video Processing Hardware",
      "High speed digital / PCIE / DDR3",
      "Cadence Allegro",
      "High Current",
      "Total pin count : 16533",
    ],
    summary: "",
    importantParts: [],
    salientFeatures: [],
    scopeOfWork: [],
  },
  {
    id: "set-top-box",
    title: "Set Top Box",
    category: "PCB Design",
    images: [
      "https://d1yetprhniwywz.cloudfront.net/case-studies-images/STB-PCB/STB-a.png",
    ],
    features: [
      "Set Top Box",
      "4 layers",
      "High speed Digital / Analog",
      "Medium density / High volume product",
      "Consumer Electronics",
    ],
    summary: "",
    importantParts: [],
    salientFeatures: [],
    scopeOfWork: [],
  },
  {
    id: "wifi-ap",
    title: "WiFi AP",
    category: "PCB Design",
    images: [
      "https://d1yetprhniwywz.cloudfront.net/case-studies-images/WiFi-AP/WiFi-AP.png",
    ],
    features: [
      "Low density, Consumer grade wireless AP",
      "Wireless LAN Application",
      "4 layer",
      "High Speed Digital, RF",
      "High Volume product",
    ],
    summary: "",
    importantParts: [],
    salientFeatures: [],
    scopeOfWork: [],
  },
  {
    id: "handheld-industrial-controller",
    title: "Handheld Industrial Controller",
    category: "Industrial Design",
    images: ["/industrial_design_case_studies/product_1.png"],
    features: [
      "Handheld controller enclosure optimised for factory floor use",
      "Balanced grip ergonomics for long-duration operation",
      "IP54-rated sealed I/O ports and robust mounting points",
      "Split-housing concept aligned to DFM and assembly feasibility",
      "Tactile button layout with glove-friendly actuation force",
      "ABS / TPE over-mould construction",
    ],
    summary:
      "An industrial design study focused on a handheld automation controller built for demanding shop-floor environments. The concept prioritises operator comfort, clear visual hierarchy on the front face, and manufacturable geometry so the product can move from concept to pilot production with minimal redesign. The split-housing strategy enables straightforward assembly and in-field serviceability.",
    importantParts: [
      "Impact-resistant ABS primary shell",
      "TPE over-mould grip zones",
      "Sealed membrane keypad with tactile dome switches",
      "Integrated lanyard lug and belt-clip boss",
      "Snap-fit PCB retention system",
      "Colour-coded I/O port surround",
    ],
    salientFeatures: [
      "Rugged visual language suited to industrial settings.",
      "Improved hand feel and confident grip geometry.",
      "Clear front-face interaction zones reduce operator errors.",
      "IP54 rated enclosure resists dust and splash.",
      "DFM-reviewed design ready for tooling transition.",
      "Service-accessible battery and PCB compartment.",
    ],
    scopeOfWork: [
      "Industrial design concepting and ideation",
      "Form exploration and refinement",
      "3D CAD surfacing and detailing",
      "Design-for-manufacture review",
      "Prototype build and ergonomics evaluation",
    ],
  },
  {
    id: "medical-diagnostic-system",
    title: "Medical Diagnostic System",
    category: "Industrial Design",
    images: ["/industrial_design_case_studies/product_2.png"],
    features: [
      "IEC 60601-compliant enclosure design",
      "Antimicrobial surface finish for clinical environments",
      "5-inch capacitive touch display with glove-mode support",
      "User-centred control layout validated through HF testing",
      "Cable management and mounting arm compatibility",
      "Designed for sterilisation wipe-down procedures",
    ],
    summary:
      "A user-centred medical diagnostic device concept developed to improve diagnostic workflow speed and reduce clinician cognitive load. The enclosure features a clean, uncluttered visual language, an intuitive control hierarchy, and geometry that supports routine sterile wipe-down protocols. Human factors testing informed button placement and screen tilt angle to serve seated and standing operators.",
    importantParts: [
      "Medical-grade polycarbonate enclosure",
      "Antimicrobial textured surface treatment",
      "Flush-mounted 5″ capacitive touch panel",
      "Rubber-sealed connector bulkhead",
      "Integrated VESA / arm mount interface",
      "Internal cable routing channels",
    ],
    salientFeatures: [
      "IEC 60601 compliant form factor.",
      "Antimicrobial finish withstands repeated disinfection.",
      "Touch panel supports glove and stylus input.",
      "Cable management minimises clutter at point of care.",
      "30% faster diagnosis workflow in usability trials.",
      "Compliant with IEC 62366 usability engineering standard.",
    ],
    scopeOfWork: [
      "Human factors and use-environment research",
      "Industrial design and CMF specification",
      "3D CAD enclosure modelling",
      "Medical standards compliance review",
      "Prototype fabrication and usability evaluation",
      "Design-for-manufacture documentation",
    ],
  },
  {
    id: "wearable-health-monitor",
    title: "Wearable Health Monitor",
    category: "Industrial Design",
    images: ["/industrial_design_case_studies/product_3.png"],
    features: [
      "Continuous PPG and SpO₂ biometric sensing",
      "Low-profile wrist-worn enclosure under 11 mm thick",
      "Qi wireless inductive charging",
      "5-day battery life with always-on display mode",
      "Interchangeable silicone strap system",
      "IPX7 water-resistant construction",
    ],
    summary:
      "A compact wrist-worn health monitor designed for continuous patient monitoring in both clinical and home settings. The ultra-slim form factor conceals the sensor array and battery within an 11 mm profile. Industrial design focused on comfort-first strap geometry, a scratch-resistant mineral glass lens, and a wireless charging surface that is flush with the underside of the device for one-hand dock placement.",
    importantParts: [
      "Mineral glass display lens",
      "Aluminium mid-frame with integrated antenna keep-out",
      "Custom silicone strap with quick-release lug",
      "Optical PPG / SpO₂ sensor window",
      "Inductive charging coil housing",
      "Haptic feedback motor mount",
    ],
    salientFeatures: [
      "Sub-11 mm total thickness for all-day comfort.",
      "Continuous 72-hour biometric monitoring.",
      "Qi wireless charging — no exposed contacts.",
      "IPX7 rated for swimming and showering.",
      "Interchangeable strap system for clinical and consumer use.",
      "Scratch-resistant mineral glass lens.",
    ],
    scopeOfWork: [
      "Wearable concept design and CMF",
      "Ergonomic wrist-geometry study",
      "3D CAD and DFM for injection moulding",
      "Strap and clasp mechanism design",
      "Prototype build and fit evaluation",
      "IP rating compliance review",
    ],
  },
  {
    id: "portable-field-tester",
    title: "Portable Field Tester",
    category: "Industrial Design",
    images: ["/industrial_design_case_studies/product_4.png"],
    features: [
      "IP67 and MIL-STD-810G rated enclosure",
      "Transflective LCD for sunlight-readable operation",
      "Reinforced TPE over-mould drop protection",
      "Large tactile buttons operable with thick gloves",
      "3.6 Ah Li-Ion battery with hot-swap capability",
      "Integrated probe storage and belt-clip holster",
    ],
    summary:
      "A ruggedised portable tester for electrical field diagnostics, engineered to survive harsh outdoor and industrial environments. The reinforced over-mould body absorbs 1.8 m drop impacts while the transflective display remains readable in direct sunlight. The control layout was validated with field technicians to ensure all primary functions are accessible single-handed, with large glove-safe buttons and a recessed joystick navigation cluster.",
    importantParts: [
      "PC/ABS primary shell with integral stiffening ribs",
      "TPE 1.8 m drop-rated over-mould frame",
      "Transflective 3.5″ display with gorilla glass",
      "IP67-sealed probe and power port bay",
      "Hot-swap 3.6 Ah Li-Ion battery system",
      "Rubberised tactile dome keypad",
    ],
    salientFeatures: [
      "IP67 and MIL-STD-810G certified.",
      "1.8 m drop-test compliant.",
      "Transflective display readable in full sunlight.",
      "All functions accessible single-handed.",
      "Hot-swap battery for uninterrupted field operation.",
      "Integrated test-lead storage reduces accessory loss.",
    ],
    scopeOfWork: [
      "Ruggedised industrial design concepting",
      "Drop and ingress protection engineering",
      "3D CAD surfacing and assembly modelling",
      "Field-technician usability study",
      "Prototype drop and environmental testing",
      "MIL-STD compliance documentation",
    ],
  },
  {
    id: "portable-ev-charger",
    title: "Portable EV Charger",
    category: "IoT Devices",
    images: [
      "/case-studies/FEDERANT/1.png",
      "/case-studies/FEDERANT/2.png",
      "/case-studies/FEDERANT/3.png",
      "/case-studies/FEDERANT/4.png",
      "/case-studies/FEDERANT/5.png",
      "/case-studies/FEDERANT/P01306PB1PR2_BOT.svg",
      "/case-studies/FEDERANT/P01306PB1PR2.svg",
    ],
    features: [
      "Qualcomm QCA4020 tri-radio SoC (Wi-Fi / BLE 5.0 / ZigBee)",
      "Plug-and-play wall-outlet form factor",
      "Inbuilt universal power supply (100–240 V AC)",
      "Hardware / Firmware / RF development",
      "Cloud-ready MQTT & REST API stack",
      "Compact Design: 48 mm × 42 mm × 30 mm",
    ],
    summary:
      "Fedarant is a compact, plug-and-play IoT Micro Gateway built around the Qualcomm QCA4020 tri-radio SoC. It bridges BLE and ZigBee end-devices to the Internet over dual-band Wi-Fi, eliminating the need for a separate hub. The sleek wall-outlet enclosure houses an inbuilt universal power supply so no external adapter is required. Fedarant can manage dozens of wireless endpoints simultaneously and exposes a cloud-ready MQTT / REST interface, making it a drop-in gateway for smart-home, retail, and light-industrial IoT deployments.",
    importantParts: [
      "Qualcomm QCA4020 – Wi-Fi 2.4 / 5 GHz, BLE 5.0, ZigBee 3.0",
      "Skyworks Wi-Fi Front End Module",
      "Skyworks RF Power Amplifier",
      "Macronix 32 Mb NOR Flash Memory",
      "CUI / Mornsun compact AC-DC power module",
      "STMicro low-drop voltage regulators",
    ],
    salientFeatures: [
      "Tri-radio operation: Wi-Fi, BLE 5.0, and ZigBee simultaneously.",
      "No external power adapter — inbuilt universal AC-DC supply.",
      "Plug-and-play wall-outlet form factor with zero exposed wiring.",
      "Manages multiple BLE / ZigBee devices concurrently.",
      "Secure TLS 1.3 cloud communication with WPA3 Wi-Fi.",
      "OTA firmware update support for remote maintenance.",
    ],
    scopeOfWork: [
      "System architecture and chipset selection",
      "Schematic entry and PCB layout",
      "PCB fabrication and assembly",
      "RF calibration and antenna tuning",
      "Firmware development and MQTT stack integration",
      "Enclosure and industrial design",
      "Board bring-up and end-to-end testing",
    ],
  },
  {
    id: "capserve-cell-sensor",
    title: "CapServe Cell Sensor",
    category: "Mechanical Design",
    images: [
      "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.1.png",
      "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.2.png",
      "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.3.png",
      "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.4.png",
    ],
    features: [
      "Compact cell sensor enclosure for field deployment",
      "IP65-rated sealed housing with snap-fit assembly",
      "Integrated mounting bracket for pole and surface installation",
      "Optimised internal cavity for PCB and battery stack",
      "UV-stable ABS construction for outdoor environments",
      "Designed for DFM and low-volume injection moulding",
    ],
    summary:
      "A precision mechanical enclosure developed for the CapServe cell sensor platform. The design balances a compact footprint with full IP65 ingress protection, enabling reliable outdoor deployment in cellular monitoring applications. The snap-fit housing strategy eliminates exposed fasteners and speeds field servicing, while the integrated pole-mount bracket allows flexible installation across diverse site conditions. All geometry was reviewed for injection-moulding feasibility before handoff to tooling.",
    importantParts: [
      "UV-stable ABS primary enclosure shell",
      "TPE gasket seal for IP65 ingress protection",
      "Snap-fit lid retention with tool-free access",
      "Integrated pole and flat-surface mounting bracket",
      "Internal PCB stand-offs and battery retention ribs",
      "Overmoulded cable entry gland",
    ],
    salientFeatures: [
      "IP65 sealed enclosure for outdoor and industrial use.",
      "Snap-fit assembly — no visible fasteners.",
      "Flexible mounting: pole, wall, or flat surface.",
      "UV-stable materials rated for extended outdoor exposure.",
      "Service-friendly design with tool-free lid removal.",
      "DFM-approved geometry ready for production tooling.",
    ],
    scopeOfWork: [
      "Concept ideation and form factor exploration",
      "3D CAD enclosure modelling and detailing",
      "Gasket and sealing strategy for IP65 compliance",
      "Mounting bracket design and load analysis",
      "Design-for-manufacture review",
      "Prototype build and fit/seal evaluation",
      "Tooling handoff documentation",
    ],
  },
  {
    id: "smart-home-controller",
    title: "Smart Home Controller",
    category: "Industrial Design",
    images: ["/industrial_design_case_studies/product_5.png"],
    features: [
      "Wall-mount and in-panel installation in under 5 minutes",
      "Full-surface capacitive touch with haptic feedback",
      "Integrated ambient LED ring with 16M colour support",
      "Wi-Fi 6 and Zigbee 3.0 dual-radio connectivity",
      "Premium matte-white and brushed-aluminium CMF",
      "Snap-in clip system with no visible fasteners",
    ],
    summary:
      "A minimalist wall-mount smart home hub designed to blend into premium interior spaces while delivering whole-home control. The frameless full-surface capacitive touch panel eliminates visible buttons, and the integrated ambient LED ring provides status feedback without interrupting the clean aesthetic. The flush snap-in installation system requires no visible screws and takes under five minutes to mount into a standard back-box.",
    importantParts: [
      "Tempered glass front panel with AR coating",
      "Aluminium accent bezel with brushed finish",
      "Full-surface PCAP touch controller",
      "Integrated LED ring diffuser",
      "Snap-in wall-mount retention clip assembly",
      "Thermal management back-plate",
    ],
    salientFeatures: [
      "Zero visible fasteners — seamless flush-mount finish.",
      "Full-surface touch panel with glove and stylus support.",
      "Ambient LED ring with 16M colour zones.",
      "Wi-Fi 6 and Zigbee 3.0 simultaneous operation.",
      "Under 5-minute installation into standard back-box.",
      "Premium matte-white and brushed-aluminium CMF.",
    ],
    scopeOfWork: [
      "Premium CMF and brand language development",
      "Enclosure industrial design and 3D CAD",
      "Snap-in mount mechanism design",
      "LED diffuser optics study",
      "Pre-production prototype review",
      "Design-for-manufacture and tooling handoff",
    ],
  },
  {
    id: "fedarant",
    title: "Fedarant",
    category: "IoT Devices",
    images: ["/case-studies/FEDERANT/1.png"],
    features: [
      "Qualcomm QCA4020 Chipset",
      "Dual Band Wi-Fi, Bluetooth 5.0, ZigBee",
      "Hardware / Firmware / RF Development",
      "Power Supply Design",
      "Enclosure design / ID",
      "Zero-Config Setup",
    ],
    summary:
      "Compact IoT Micro Gateway powered by Qualcomm QCA4020. Bridges IoT devices via BLE/ZigBee to the Internet through Wi-Fi. Features an inbuilt power supply in a sleek plug-and-play form factor. Capable of managing multiple wireless devices simultaneously for consumer and industrial settings.",
    importantParts: [
      "Qualcomm Wi-Fi, BLE, ZigBee, Thread",
      "Skyworks Wi-Fi Front End Module",
      "Skyworks RF Amplifier",
      "Macronix NOR Flash Memory",
      "CUI Power Supply Module",
    ],
    salientFeatures: [
      "Dual Band Wi-Fi, BLE 5.0, ZigBee, Thread.",
      "Inbuilt power supply",
      "Zero-Config Setup",
      "WPA3 / TLS Security",
      "USB-C 5V Power",
      "90% Setup time reduction",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware development",
      "RF Calibration and Tuning",
      "Enclosure Design",
      "Board Bring-up and testing",
    ],
  },
  {
    id: "stellar-main-board",
    title: "Stellar Main Board",
    category: "Embedded System Design",
    images: [
      // "/case-studies/STELLAR MAIN BORD/1.1.png",
      // "/case-studies/STELLAR MAIN BORD/1.2.png",
      // "/case-studies/STELLAR MAIN BORD/1.3.png",
      "/case-studies/STELLAR MAIN BORD/MAIN BOARD 1.svg",
      "/case-studies/STELLAR MAIN BORD/MAIN BOARD 2.svg",
    ],
    features: [
      "High-density Multi-layer Main Board",
      "SFP+ Network Ports (Grandmaster / Backhaul / Auxiliary)",
      "GPS / RTC Precision Timing",
      "LOM (Lights Out Management) Module",
      "Hardware / Firmware Design and Development",
      "USB-C and Power Board Interface",
    ],
    summary:
      "A high-density embedded main board designed for network timing and synchronisation applications. Built around the FEDERON 2600 platform, the board integrates multiple SFP+ network interfaces for Grandmaster, Backhaul, and Auxiliary channels alongside a GPS/RTC subsystem for precision time-keeping. A dedicated LOM (Lights Out Management) module enables remote board management, while the power board connector supports modular power delivery. The dense multi-layer design accommodates high-speed signal routing across hundreds of components in a compact footprint.",
    importantParts: [
      "High-performance Application Processor",
      "SFP+ Transceiver Modules (Grandmaster, Backhaul, Auxiliary)",
      "GPS Receiver and RTC Module",
      "LOM (Lights Out Management) Controller",
      "USB-C Interface Controller",
      "Multi-rail Power Management ICs",
    ],
    salientFeatures: [
      "Multi-channel SFP+ network interfaces.",
      "GPS / RTC for precision timing and synchronisation.",
      "LOM module for remote management and monitoring.",
      "High-density multi-layer PCB design.",
      "Modular power board interconnect.",
      "USB-C interface for configuration and diagnostics.",
      "Compact footprint with high component density.",
    ],
    scopeOfWork: [
      "System Architecture Design",
      "Schematics Entry",
      "PCB Layout Design (Multi-layer)",
      "PCB Fabrication and Assembly",
      "Firmware Development",
      "Board Bring-up and Testing",
      "Signal Integrity Analysis",
    ],
  },
  {
    id: "compact-edge-gateway-enclosure",
    title: "Compact Edge Gateway Enclosure",
    category: "Industrial Design",
    images: [
      "/case-studies/industrialCaseStudies/1/ENCLOSURE_ASSM_1.9.png",
      "/case-studies/industrialCaseStudies/1/ENCLOSURE_ASSM_1.10.png",
      "/case-studies/industrialCaseStudies/1/ENCLOSURE_ASSM_1.11.png",
    ],
    features: [
      "Fanless aluminium heatsink enclosure for passive cooling",
      "Compact form factor with multiple SMA antenna ports",
      "Integrated Ethernet (RJ45), USB, and M12 connectors",
      "Finned top cover for thermal management",
      "Industrial-grade aluminium construction",
      "Designed for edge computing and IoT gateway applications",
    ],
    summary:
      "A compact, fanless edge gateway enclosure designed for continuous industrial operation without active cooling. The finned aluminium top cover provides efficient passive heat dissipation, while the silver die-cast body houses multiple SMA antenna connectors, Ethernet, USB, and M12 industrial interfaces. The robust construction and thermal design make it suitable for deployment in harsh environments where reliability and silent operation are critical.",
    importantParts: [
      "Die-cast aluminium primary enclosure shell",
      "Finned heatsink top cover for passive cooling",
      "SMA antenna connector array",
      "RJ45 Ethernet and USB interface ports",
      "M12 industrial circular connector",
      "Internal PCB mounting and retention system",
    ],
    salientFeatures: [
      "Fanless passive cooling via finned heatsink top.",
      "Multiple SMA ports for multi-radio antenna support.",
      "Integrated Ethernet, USB, and M12 connectivity.",
      "Compact footprint for space-constrained deployments.",
      "Industrial-grade aluminium construction.",
      "Silent operation with no moving parts.",
    ],
    scopeOfWork: [
      "Industrial design concepting and form exploration",
      "Thermal management and heatsink design",
      "3D CAD enclosure modelling and detailing",
      "Connector panel layout and I/O planning",
      "Design-for-manufacture review",
      "Prototype build and thermal evaluation",
    ],
  },
  {
    id: "medical-recording-device",
    title: "Medical Recording Device",
    category: "Industrial Design",
    images: [
      "/case-studies/industrialCaseStudies/2/LSR-1.png",
      "/case-studies/industrialCaseStudies/2/LSR-6.png",
      "/case-studies/industrialCaseStudies/2/LSR-7.png",
      "/case-studies/industrialCaseStudies/2/LSR-8.png",
      "/case-studies/industrialCaseStudies/2/LSR-9.png",
      "/case-studies/industrialCaseStudies/2/LSR-10.png",
      "/case-studies/industrialCaseStudies/2/LSR-11.png",
    ],
    features: [
      "Compact puck-shaped form factor for clinical use",
      "LSR (Liquid Silicone Rubber) overmould construction",
      "USB-C charging and data interface",
      "Integrated power button and status LED",
      "Medical-grade surface finish for easy sterilisation",
      "Designed for bedside recording and monitoring",
    ],
    summary:
      "A compact, puck-shaped medical recording device designed for clinical environments. The device features an LSR (Liquid Silicone Rubber) overmoulded enclosure that provides a soft, antimicrobial surface finish suitable for repeated sterilisation. The minimalist design includes a single power button, status LED, and USB-C interface, enabling bedside data recording with minimal clinician interaction. The low-profile form factor sits discreetly on any surface while maintaining a premium medical aesthetic.",
    importantParts: [
      "LSR (Liquid Silicone Rubber) overmoulded shell",
      "Medical-grade polycarbonate base plate",
      "USB-C charging and data port",
      "Tactile power button with LED indicator",
      "Anti-slip rubber base pad",
      "Internal PCB and battery retention cradle",
    ],
    salientFeatures: [
      "LSR overmould for antimicrobial surface properties.",
      "Compact puck form factor for unobtrusive placement.",
      "USB-C interface for charging and data transfer.",
      "Medical-grade finish for repeated wipe-down sterilisation.",
      "Single-button operation for clinical simplicity.",
      "Low-profile design for bedside deployment.",
    ],
    scopeOfWork: [
      "Industrial design and CMF specification",
      "LSR overmould tooling design",
      "3D CAD enclosure modelling",
      "Medical standards compliance review",
      "Prototype fabrication and usability evaluation",
      "Design-for-manufacture documentation",
    ],
  },
  {
    id: "uv-disinfection-system",
    title: "UV Disinfection System",
    category: "Mechanical Design",
    images: [
      "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER__1.0.png",
      "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER__3.2.png",
      "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_4.17.png",
      "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_9_TOP_ISO_1.png",
      "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_9_BOTTOM_ISO_1.png",
      "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_9_LEFT.png",
      "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER_9_RIGHT.png",
    ],
    features: [
      "Wall-mounted UV-C disinfection unit",
      "Triple UV lamp array for wide-area coverage",
      "Sleek white and silver two-tone enclosure",
      "Integrated occupancy and ambient light sensors",
      "Sealed lamp windows for safe UV containment",
      "Designed for healthcare and commercial spaces",
    ],
    summary:
      "A wall-mounted UV disinfection system branded SafeSpaceUV, engineered for continuous air and surface sanitisation in healthcare, commercial, and public environments. The enclosure houses a triple UV-C lamp array behind sealed optical windows, delivering broad-area coverage while containing UV radiation safely. The two-tone white and silver finish blends into modern interiors, while the wall-mount design keeps floor space free and positions the unit at optimal height for effective disinfection.",
    importantParts: [
      "UV-C lamp modules with sealed optical windows",
      "Two-tone ABS / polycarbonate enclosure shell",
      "Wall-mount bracket and retention system",
      "Integrated occupancy sensor module",
      "Internal reflector array for UV distribution",
      "Thermal management and airflow channels",
    ],
    salientFeatures: [
      "Triple UV-C lamp array for wide-area disinfection.",
      "Sealed optical windows for safe UV containment.",
      "Wall-mount design for optimal positioning.",
      "Two-tone premium finish for modern interiors.",
      "Integrated sensors for automated operation.",
      "DFM-reviewed geometry for production readiness.",
    ],
    scopeOfWork: [
      "Concept ideation and form factor exploration",
      "3D CAD enclosure modelling and detailing",
      "UV optics and reflector design",
      "Thermal management analysis",
      "Wall-mount bracket engineering",
      "Design-for-manufacture review",
      "Prototype build and fit evaluation",
    ],
  },
  {
    id: "industrial-splice-detector",
    title: "Industrial Splice Detector",
    category: "Mechanical Design",
    images: [
      "/case-studies/mechanicalCaseStudies/2/SPLICE_DETECTOR_RENDER_2.4.png",
      "/case-studies/mechanicalCaseStudies/2/SPLICE_DETECTOR_RENDER_2.5.png",
      "/case-studies/mechanicalCaseStudies/2/SPLICE_DETECTOR_RENDER_2.6.png",
    ],
    features: [
      "Extruded aluminium enclosure with heatsink fins",
      "M12 industrial circular connectors",
      "RS-232, RS-485, and EtherCAT / Profinet interfaces",
      "7-segment LED threshold display",
      "LED status indicators for real-time diagnostics",
      "24 VDC powered for industrial environments",
    ],
    summary:
      "A ruggedised industrial splice detector enclosure designed for manufacturing and quality inspection lines. The extruded aluminium body with integrated heatsink fins ensures reliable thermal performance during continuous operation. Industrial M12 connectors provide robust RS-232, RS-485, and EtherCAT/Profinet connectivity, while front-panel LED indicators and a 7-segment display give operators instant visibility into detection thresholds and system status. The 24 VDC power input and QR code traceability label support seamless factory floor integration.",
    importantParts: [
      "Extruded aluminium enclosure with heatsink fins",
      "M12 industrial circular connectors (multiple)",
      "7-segment LED display module",
      "LED status indicator array",
      "DIN rail or panel mounting hardware",
      "Industrial-grade PCB retention system",
    ],
    salientFeatures: [
      "Extruded aluminium construction with integral heatsink.",
      "M12 connectors for vibration-proof industrial wiring.",
      "RS-232, RS-485, and EtherCAT / Profinet support.",
      "Front-panel 7-segment threshold display.",
      "LED status indicators for real-time diagnostics.",
      "24 VDC industrial power input.",
    ],
    scopeOfWork: [
      "Mechanical enclosure design and aluminium extrusion profile",
      "Connector panel layout and I/O planning",
      "3D CAD modelling and detailing",
      "Thermal analysis and heatsink optimisation",
      "Design-for-manufacture review",
      "Prototype build and environmental testing",
    ],
  },
  {
    id: "ott-media-gateway",
    title: "OTT Media Gateway",
    category: "Mechanical Design",
    images: [
      "/case-studies/mechanicalCaseStudies/3/OTT_RENDER_27_NOV_2024_MG2.1.png",
      "/case-studies/mechanicalCaseStudies/3/OTT_RENDER_27_NOV_2024_MG2.2.png",
      "/case-studies/mechanicalCaseStudies/3/OTT_RENDER_27_NOV_2024_MG4.4.png",
      "/case-studies/mechanicalCaseStudies/3/OTT_RENDER_27_NOV_2024_MG4.5.png",
      "/case-studies/mechanicalCaseStudies/3/OTT_RENDER_27_NOV_2024_MG4.6.png",
      "/case-studies/mechanicalCaseStudies/3/OTT_RENDER_27_NOV_2024_MG5.7.png",
      "/case-studies/mechanicalCaseStudies/3/OTT_RENDER_27_NOV_2024_MG5.8.png",
    ],
    features: [
      "Compact desktop enclosure with dual antenna mounts",
      "Angular faceted design language for premium shelf presence",
      "Front-panel Debug, IR EXT, USB, and SD Card ports",
      "Integrated antenna hinge mechanisms",
      "Ventilated base for passive thermal management",
      "Designed for consumer and commercial OTT streaming",
    ],
    summary:
      "A sleek OTT media gateway enclosure branded TEKION, designed for consumer and commercial streaming applications. The angular, faceted enclosure features dual external antenna mounts with articulating hinges, providing flexible positioning for optimal wireless reception. Front-panel access to Debug, IR EXT, USB, and SD Card interfaces simplifies setup and maintenance, while the ventilated base plate ensures reliable passive cooling during continuous streaming operation.",
    importantParts: [
      "Injection-moulded ABS primary enclosure shell",
      "Dual articulating antenna hinge mounts",
      "Front-panel I/O port assembly (USB, SD, IR, Debug)",
      "Ventilated base plate with rubber feet",
      "Internal antenna cable routing channels",
      "PCB and heatsink retention system",
    ],
    salientFeatures: [
      "Angular faceted design for premium shelf presence.",
      "Dual articulating antenna mounts for flexible positioning.",
      "Front-panel access to all user-facing ports.",
      "Passive cooling via ventilated base plate.",
      "Compact footprint for living room or rack placement.",
      "DFM-reviewed for high-volume injection moulding.",
    ],
    scopeOfWork: [
      "Industrial design and form exploration",
      "3D CAD enclosure modelling and detailing",
      "Antenna hinge mechanism design",
      "Thermal management analysis",
      "Design-for-manufacture review",
      "Prototype build and fit evaluation",
    ],
  },
  {
    id: "rf-signal-generator-enclosure",
    title: "RF Signal Generator Enclosure",
    category: "Mechanical Design",
    images: [
      "/case-studies/mechanicalCaseStudies/4/PG10_RENDER_28_OCT_2024_MG1.1.png",
      "/case-studies/mechanicalCaseStudies/4/PG10_RENDER_28_OCT_2024_MG1.2.png",
      "/case-studies/mechanicalCaseStudies/4/PG10_RENDER_28_OCT_2024_MG1.3.png",
    ],
    features: [
      "Heavy-duty sheet metal enclosure with ventilated panels",
      "Front-panel Ethernet, Analog Interface, and RF Output ports",
      "Integrated AC input (170 – 240 V) with IEC power entry",
      "LED status indicators (RST, PWR, STAT, CFG)",
      "N-type RF output connector and earth terminal",
      "Rack-mount and benchtop compatible form factor",
    ],
    summary:
      "A robust sheet metal enclosure designed for an RF signal generator platform. The heavy-duty construction provides effective EMI shielding and structural rigidity, while ventilated side panels ensure adequate airflow for sustained operation. The front panel houses Ethernet, analog interface, and N-type RF output connectors alongside LED status indicators and a main power switch. The universal AC input (170 – 240 V) and earth terminal support worldwide deployment in laboratory and production test environments.",
    importantParts: [
      "Powder-coated sheet metal enclosure panels",
      "IEC C14 power entry module with fuse",
      "N-type RF output connector",
      "D-sub analog interface connector",
      "RJ45 Ethernet management port",
      "LED indicator and switch assembly",
    ],
    salientFeatures: [
      "Heavy-duty sheet metal for EMI shielding.",
      "Ventilated panels for sustained thermal performance.",
      "Universal AC input (170 – 240 V, 50 – 60 Hz).",
      "N-type RF output for test and measurement.",
      "Front-panel LED indicators for system status.",
      "Rack-mount and benchtop compatible.",
    ],
    scopeOfWork: [
      "Sheet metal enclosure design and detailing",
      "Connector panel layout and cut-out engineering",
      "Ventilation and thermal management analysis",
      "EMI shielding strategy and review",
      "3D CAD modelling and drawing package",
      "Prototype fabrication and fit evaluation",
    ],
  },
  {
    id: "pulse-oximeter-enclosure",
    title: "Pulse Oximeter Enclosure",
    category: "Mechanical Design",
    images: [
      "/case-studies/mechanicalCaseStudies/5/PULSE_OXIMETER_RENDER_2.1.png",
      "/case-studies/mechanicalCaseStudies/5/PULSE_OXIMETER_RENDER_2.2.png",
      "/case-studies/mechanicalCaseStudies/5/PULSE_OXIMETER_RENDER_3.1.png",
    ],
    features: [
      "Compact fingertip clip-on form factor",
      "Two-piece snap-fit shell with contrasting colours",
      "Finger channel optimised for comfort and sensor contact",
      "Medical-grade polycarbonate and ABS construction",
      "Designed for single-hand operation",
      "Ventilation slots for sensor heat dissipation",
    ],
    summary:
      "A compact pulse oximeter enclosure designed for clinical and point-of-care SpO2 monitoring. The two-piece clip-on design features a white polycarbonate upper shell and blue ABS cradle, providing a clean medical aesthetic and intuitive finger insertion. The internal finger channel geometry is optimised for consistent optical sensor contact across a range of finger sizes, while ventilation slots manage sensor heat during prolonged monitoring sessions.",
    importantParts: [
      "Medical-grade polycarbonate upper shell",
      "ABS lower cradle with finger channel",
      "Spring-loaded clip hinge mechanism",
      "Optical sensor window and alignment features",
      "Ventilation slots for thermal management",
      "Screw-fastened assembly for serviceability",
    ],
    salientFeatures: [
      "Clip-on design for single-hand operation.",
      "Optimised finger channel for consistent sensor contact.",
      "Medical-grade materials for clinical environments.",
      "Two-tone colour scheme for clear orientation.",
      "Ventilated design for extended monitoring.",
      "DFM-reviewed for injection moulding production.",
    ],
    scopeOfWork: [
      "Medical device enclosure concept design",
      "Finger channel ergonomic study",
      "3D CAD modelling and assembly detailing",
      "Material selection and biocompatibility review",
      "Hinge mechanism design and testing",
      "Design-for-manufacture documentation",
    ],
  },
  {
    id: "qsafe-tilt-sensor",
    title: "QSafe Tilt Sensor",
    category: "Mechanical Design",
    images: [
      "/case-studies/mechanicalCaseStudies/6/QSAFE_TILT_SENSOR_RENDER_23_DEC_2023.16.png",
      "/case-studies/mechanicalCaseStudies/6/QSAFE_TILT_SENSOR_RENDER_23_DEC_2023.17.png",
      "/case-studies/mechanicalCaseStudies/6/QSAFE_TILT_SENSOR_RENDER_23_DEC_2023.20.png",
    ],
    features: [
      "Sealed industrial enclosure with flanged mounting base",
      "Power button and status LED for field diagnostics",
      "IP-rated construction for outdoor and industrial use",
      "Four-point flange mounting for structural installations",
      "UV-stable grey ABS construction",
      "Compact form factor for pole and surface mounting",
    ],
    summary:
      "A ruggedised tilt sensor enclosure branded QSafe, designed for structural monitoring and safety applications in outdoor and industrial environments. The sealed grey ABS enclosure features a flanged four-point mounting base for secure attachment to poles, walls, and structural members. A front-panel power button and green status LED provide quick field diagnostics without requiring a connected display. The IP-rated construction ensures reliable operation in rain, dust, and temperature extremes.",
    importantParts: [
      "UV-stable ABS enclosure shell",
      "Flanged four-point mounting base",
      "Sealed power button assembly",
      "Status LED indicator module",
      "Internal gasket for IP-rated sealing",
      "PCB and battery retention features",
    ],
    salientFeatures: [
      "IP-rated sealed enclosure for outdoor deployment.",
      "Four-point flange mounting for structural installations.",
      "Front-panel power button and status LED.",
      "UV-stable materials for extended sun exposure.",
      "Compact form factor for unobtrusive installation.",
      "DFM-approved geometry for production tooling.",
    ],
    scopeOfWork: [
      "Enclosure concept design and form exploration",
      "Mounting bracket and flange design",
      "3D CAD modelling and detailing",
      "Gasket and sealing strategy for IP compliance",
      "Design-for-manufacture review",
      "Prototype build and environmental testing",
    ],
  },
  {
    id: "capes-cell-sensor",
    title: "CAPES Cell Sensor",
    category: "Medical Device Design",
    images: [
      "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.1.png",
      "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.2.png",
      "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.3.png",
      "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.4.png",
    ],
    features: [
      "Advanced Cell Analysis Technology",
      "Real-time Sensor Integration",
      "High-precision Measurement",
      "Medical-grade Certification",
      "Data Acquisition and Processing",
      "Portable Design",
    ],
    summary:
      "A sophisticated cell sensing device designed for advanced medical diagnostics and research applications. The CAPES Cell Sensor combines precision measurement technology with real-time data acquisition to enable comprehensive cellular analysis. Built with medical-grade components and rigorous quality standards, the device delivers reliable results in clinical and laboratory environments.",
    importantParts: [
      "High-precision sensor array",
      "Real-time data acquisition circuitry",
      "Medical-grade connectors and enclosure",
      "Advanced signal conditioning electronics",
      "Microcontroller-based processing unit",
      "Isolated power supply for noise immunity",
    ],
    salientFeatures: [
      "Real-time cellular measurement and analysis.",
      "High-precision sensor array for accurate diagnostics.",
      "Medical-grade component selection and certification.",
      "Compact portable form factor.",
      "Data logging and wireless transmission capability.",
      "Integrated calibration and quality assurance.",
      "Low power consumption for extended operation.",
    ],
    scopeOfWork: [
      "System Architecture Design",
      "Hardware Design and Development",
      "PCB Layout and Design",
      "Firmware Development",
      "Sensor Integration and Calibration",
      "Testing and Validation",
      "Medical Compliance and Certification",
      "Enclosure and Industrial Design",
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudiesData.find((cs) => cs.id === slug);
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }
  return {
    title: caseStudy.title,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = caseStudiesData.findIndex((cs) => cs.id === slug);
  const caseStudy = caseStudiesData[currentIndex];

  if (!caseStudy) {
    return <div>Case Study Not Found</div>;
  }

  const prevStudy = currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudiesData.length - 1
      ? caseStudiesData[currentIndex + 1]
      : null;

  // Pick 3 other studies spread evenly across the list so each page shows different cards
  const otherStudies = caseStudiesData.filter((cs) => cs.id !== slug);
  const total = otherStudies.length;
  const step = Math.max(1, Math.floor(total / 3));
  const relatedStudies = [
    otherStudies[currentIndex % total],
    otherStudies[(currentIndex + step) % total],
    otherStudies[(currentIndex + step * 2) % total],
  ].filter(
    // dedupe in the rare case of a very short list
    (s, i, arr) => arr.findIndex((x) => x.id === s.id) === i,
  );

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyCard caseStudy={caseStudy} />

      {/* ── More Case Studies ── */}
      {relatedStudies.length > 0 && (
        <section className="relative overflow-hidden bg-[#f7f7f4] py-16 md:py-20">
          {/* Background accents */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(243,49,23,0.06),transparent_45%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.5),rgba(255,255,255,0))]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Heading */}
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.3em] text-[#E31E24]">
                  Explore More
                </span>
                <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
                  More Case Studies
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-zinc-500 hover:text-[#E31E24] transition-colors duration-200"
              >
                View all →
              </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedStudies.map((study) => (
                <CaseStudyListCard
                  key={study.id}
                  title={study.title}
                  image={study.images[0]}
                  link={`/case-studies/${study.id}`}
                  category={study.category}
                  summary={study.summary || undefined}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Previous case study arrow (left-middle) ── */}
      {prevStudy && (
        <Link
          href={`/case-studies/${prevStudy.id}`}
          aria-label={`Previous: ${prevStudy.title}`}
          className="fixed left-3 top-1/2 -translate-y-1/2 z-50 flex items-center gap-3"
        >
          {/* Circle button */}
          <div className="group peer flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-[#E31E24] hover:bg-[#E31E24] hover:shadow-lg">
            <ChevronLeft className="h-5 w-5 text-zinc-500 transition-colors duration-200 group-hover:text-white" />
          </div>

          {/* Hover tooltip — hidden on mobile */}
          <div className="pointer-events-none hidden opacity-0 transition-opacity duration-200 peer-hover:opacity-100 md:block">
            <div className="rounded-xl border border-zinc-200 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
              <p className="mb-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#E31E24]">
                Previous
              </p>
              <p className="max-w-[160px] text-[12px] font-medium leading-tight text-zinc-700 line-clamp-2">
                {prevStudy.title}
              </p>
            </div>
          </div>
        </Link>
      )}

      {/* ── Next case study arrow (right-middle) ── */}
      {nextStudy && (
        <Link
          href={`/case-studies/${nextStudy.id}`}
          aria-label={`Next: ${nextStudy.title}`}
          className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-row-reverse items-center gap-3"
        >
          {/* Circle button */}
          <div className="group peer flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-[#E31E24] hover:bg-[#E31E24] hover:shadow-lg">
            <ChevronRight className="h-5 w-5 text-zinc-500 transition-colors duration-200 group-hover:text-white" />
          </div>

          {/* Hover tooltip — hidden on mobile */}
          <div className="pointer-events-none hidden opacity-0 transition-opacity duration-200 peer-hover:opacity-100 md:block">
            <div className="rounded-xl border border-zinc-200 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm text-right">
              <p className="mb-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#E31E24]">
                Next
              </p>
              <p className="max-w-[160px] text-[12px] font-medium leading-tight text-zinc-700 line-clamp-2">
                {nextStudy.title}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return caseStudiesData.map((caseStudy) => ({
    slug: caseStudy.id,
  }));
}
