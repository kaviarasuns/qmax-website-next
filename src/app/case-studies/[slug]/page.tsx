import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CaseStudy } from "../../../../types/case-study";
import { CaseStudyCard } from "@/components/case-study-card";
import CaseStudyListCard from "@/components/CaseStudyCard";

// This would typically come from a database or API
const caseStudiesData: CaseStudy[] = [
  {
    id: "Security-System-Controller",
    title: "Security System Controller",
    category: "Embedded System Design",
    images: [
      "/case-studies/BLUECOLD/1.png",
      "/case-studies/BLUECOLD/2.png",
      "/case-studies/BLUECOLD/3.png",
    ],
    features: [
      "Hardware / Firmware design and Development",
      "Mechanical /Enclosure Design / DFM",
      "IMx6 CPU / STM32",
      "Linux / RTOS",
      "High Density Digital",
      "FCC Class B certified",
    ],
    summary:
      "It is a powerful Edge controller device used in high security applications with multi-protocol sensors and reader inputs. The system is powered through POE+ and has options for power backup using an external power supply or battery. It can work as a stand alone device or can be cascaded to control multiple access points.",
    importantParts: [
      "Freescale iMX6 Application Processor",
      "ST Micro High Performance MCU",
      "Lattice Programmable Logic Device",
      "Linear Technologies POE+ Controller",
    ],
    salientFeatures: [
      "POE+ powered edge controller.",
      "Multiple dedicated Processors.",
      "Hardware encrypted communication.",
      "Scalable from one to networked multi-unit configuration.",
      "OSDP and Weigand Protocol for connection to card readers.",
      "Auxiliary input and output.",
      "Wet or Dry Relay setting.",
      "Remote Firmware Upgrade",
      "Built-in Inrush and overvoltage protection.",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Board Bring-up and testing",
      "ID / Enclosure Design",
    ],
  },
  {
    id: "fpga-based-health-monitoring-system",
    title: "FPGA Based Health Monitoring System",
    category: "Medical Device Design",
    images: [
      "/case-studies/CHARA/1.png",
      "/case-studies/CHARA/2.png",
      "/case-studies/CHARA/3.png",
    ],
    features: [
      "FPGA-based signal processing",
      "Real-time health monitoring",
      "Multi-sensor integration",
      "Wireless connectivity",
      "Low power consumption",
      "Medical grade certification",
    ],
    summary:
      "An advanced health monitoring system utilizing FPGA technology for real-time processing of multiple biosignals. The system integrates various sensors to monitor vital signs and provides wireless connectivity for remote monitoring. Designed with medical-grade standards for reliability and accuracy in clinical environments.",
    importantParts: [
      "Xilinx Zynq FPGA",
      "Analog Devices Precision ADCs",
      "Texas Instruments Power Management",
      "Nordic Semiconductor Wireless Module",
    ],
    salientFeatures: [
      "Real-time signal processing using FPGA.",
      "Multi-channel biosignal acquisition.",
      "Wireless data transmission.",
      "Low noise analog front-end.",
      "Battery-powered operation.",
      "Medical device compliance (FDA/CE).",
      "Secure data encryption.",
      "Remote monitoring capabilities.",
      "Alarm and alert system.",
    ],
    scopeOfWork: [
      "System Architecture Design",
      "FPGA Development and Programming",
      "Analog Circuit Design",
      "PCB Layout and Design",
      "Firmware Development",
      "Testing and Validation",
      "Regulatory Compliance",
    ],
  },
  {
    id: "Control-system-with-POE-Switch-and-RTOS",
    title: "Control System with POE Switch and RTOS",
    category: "Industrial Control Systems",
    images: [
      "/case-studies/CLIMATE CONTROL/1.png",
      "/case-studies/CLIMATE CONTROL/2.png",
      "/case-studies/CLIMATE CONTROL/3.png",
    ],
    paddedImages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    features: [
      "Real-Time Operating System",
      "POE+ Switch Integration",
      "Industrial Grade Components",
      "Ethernet Communication",
      "Modular Design Architecture",
      "Remote Management Capability",
    ],
    summary:
      "A comprehensive industrial control system featuring integrated POE+ switching capabilities and real-time operating system. The system provides centralized control for multiple devices while delivering power and data through a single ethernet connection. Designed for harsh industrial environments with robust communication protocols.",
    importantParts: [
      "ARM Cortex-A9 Processor",
      "Marvell POE+ Switch Controller",
      "Industrial Ethernet PHY",
      "Isolated Power Supplies",
    ],
    salientFeatures: [
      "Integrated POE+ switching (up to 24 ports).",
      "Real-time deterministic control.",
      "Industrial temperature range operation.",
      "Redundant power supply options.",
      "SNMP network management.",
      "Web-based configuration interface.",
      "Modbus and Ethernet/IP protocols.",
      "DIN rail mounting.",
      "LED status indicators.",
    ],
    scopeOfWork: [
      "System Requirements Analysis",
      "Hardware Architecture Design",
      "RTOS Implementation",
      "Network Stack Development",
      "Power Management Design",
      "EMC/EMI Compliance Testing",
      "Industrial Certification",
    ],
  },
  {
    id: "Lithium-Titanate-Power-Bank",
    title: "Lithium Titanate Power Bank",
    category: "Power Electronics Design",
    images: [
      "/case-studies/MICROSCOPIC CAMERA/1.png",
      "/case-studies/MICROSCOPIC CAMERA/2.png",
      "/case-studies/MICROSCOPIC CAMERA/3.png",
    ],
    features: [
      "3000 mAh Power Bank",
      "High Current, Super Fast Charging (under 10 Mins)",
      "Inbuilt Safety Features",
      "OLED Display",
      "Firmware Development",
      "Enclosure Design",
    ],
    summary:
      "A power bank using a Lithium Titanate battery with super-fast charging characteristics. The design is based on a high power current source and monitoring system using a PIC Microcontroller. The lithium-titanate battery's unique anode structure allows for rapid recharging, achieving a full charge in less than 10 minutes. The power bank can also be charged conventionally via Micro USB and includes built-in safety features to prevent overcharging and deep discharge.",
    importantParts: [
      "Analog Devices High power current source",
      "Microchip 8 bit Microcontroller",
      "Electronics Assembly OLED display 96 x 16 dots",
      "Richtek Boost regulator",
      "Texas Instruments 10-A Fully-Integrated Synchronous Boost Converter",
      "Texas Instrument Current Sense Amplifier",
      "Texas Instrument Buck Switching Regulator",
    ],
    salientFeatures: [
      "High Current, Super-Fast charging",
      "Inherently safe Design",
      "3000 mAh Capacity",
      "Normal and Fast charge Modes",
      "OLED for Status display",
    ],
    scopeOfWork: [
      "Hardware Design",
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware development",
      "Board Bring-up and testing",
      "Enclosure Design",
    ],
  },
  {
    id: "OBD-2-Device-with-LoRa-and-BLE",
    title: "Automotive OBD Device with LoRa and BLE",
    category: "Automotive Electronics",
    images: [
      "/case-studies/OTT/1.png",
      "/case-studies/OTT/2.png",
      "/case-studies/OTT/3.png",
      "/case-studies/OTT/4.png",
      "/ott/TEK_OTT_REV1P0_BOT.svg",
      "/ott/TEK_OTT_REV1P0_BRD_PR3.svg",
    ],
    features: [
      "Complete product development",
      "HW / FW / Linux System Integration",
      "Charging and Firmware upgrade of Custom OBD2 Devices",
      "Mechanical / Enclosure Design",
      "Contract Manufacturing",
    ],
    summary:
      "Developed for an automotive solutions company, this device reads car data via the OBD port, transmitting it to a central server using LoRa for on-premises communication and indoor location tracking. It features an STM32F Microcontroller, supports multiple OBD protocols (ISO, J1850, CAN), and includes two BLE radios for device communication and beaconing. A key feature is its pass-through design, allowing other OBD devices to be used simultaneously. The handheld, battery-operated device has an 800 mAh Li-Po battery, chargeable from the OBD port, with a cut-off mechanism to prevent draining the car battery. It also includes an accelerometer to detect car status, a special connector for a Smart OBD charging station for diagnostics and firmware updates, and an integrated LED torch for locating the OBD port in low light.",
    importantParts: [
      "ST Microelectronics ARMCortex-M0 32-bit RISC MCU.",
      "OBDSOL OBD Translator.",
      "MultiTech LoRa Module.",
      "Raytac BLE Module.",
      "ST Microelectronics Accelerometer.",
      "Atmel EEPROM.",
      "Texas Instruments Li-Po Charger.",
    ],
    salientFeatures: [
      "Rugged Automotive Product.",
      "Multi Radio Design - LoRa, BLE, BLE Beacon.",
      "Automotive grade ESD/ EMI / Voltage spike protection.",
      "Multiprotocol OBD communication.",
      "Integrated LED torchlight.",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware development",
      "Board Bring-up and testing",
      "Enclosure Design.",
      "Coordination with Mold manufacturer",
      "FCC / CE certification",
      "Packing Box Design",
      "Low volume production",
    ],
  },
  {
    id: "BLE-tag-with-Wireless-Charging",
    title: "Low Power BLE Tag with Wireless Charging",
    category: "IoT Devices",
    images: ["/case-studies/POE/1.png", "/case-studies/POE/2.png"],
    features: [
      "Low power BLE Tag - NRF52 Chipset",
      "AirFuel RF wireless Charging",
      "Multiple sensors - Light, Motion, temperature, SoS Switch, etc",
      "Hardware / Firmware Development",
      "ID / Mechanical Design",
    ],
    summary:
      "This project combines a Low power BLE tag and WattUp wireless charging technology. The device has a press button switch and multiple sensors on board. It can be programmed to send a message when either a switch press or any sensor event is triggered. The wireless charging capability is provided by proprietary WattUp wireless charging technology. It allows for contact-less orientation-free charging of the tags. The device is super low power consuming and will run for upto a month on a single charge. They can be recharged easily by dropping them on a charging pad. The devices are BLE 5.0 compliant and can be used to form BLE mesh networks. They can be used as Indoor location sensing beacons, Indoor Asset tracking, SOS buttons, Etc.",
    importantParts: [
      "Nordic Semi BLE 5.0 Chipset",
      "Dialog WattUp Wireless Charging SOC",
      "ST Micro Accelerometer, Gyro, Magnetometer, Temperature Sensor",
      "Lite-on Ambient Light Photo Sensor",
      "Texas Instruments LiPo battery charger",
      "ST Micro LDO Voltage regulator",
    ],
    salientFeatures: [
      "BLE 5.0 Device",
      "Ultra-Low power tag.",
      "WattUp RF wireless Charging Technology",
      "Multiple sensors - Light, Motion, temperature, etc",
      "Push Button",
      "Meshing capability",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware development",
      "Enclosure Design",
      "Board Bring-up and testing",
    ],
  },
  {
    id: "IOT-Module-with-Wi-Fi-BLE-ZigBee",
    title: "Connectivity Module based on Qualcomm QCA4020",
    category: "IoT Devices",
    images: ["/case-studies/POE/3.png", "/case-studies/POE/4.png"],
    features: [
      "Qualcomm QCA4020 Chipset",
      "Dual Wi-Fi / BLE 5.0 / ZigBee / Thread",
      "Hardware Design",
      "PCB Design",
      "Firmware Development",
      "RF Calibration",
    ],
    summary:
      "It is a connectivity module based on the Qualcomm QCA 4020 Wireless SoC. The QCA4020 is a Qualcomm solution for the IOT domain. It has dual band Wi-Fi, BLE 5.0 and ZigBee radios all in one SoC. The module can be used in a multitude of IOT applications. The device can act as a Gateway between the internet and other IOT devices with BLE or ZigBee connectivity. The QCA4020 is a low power SOC that integrates a Cortex M4F for application processing, Cortex M0 for network stack processing, and a separate processor for Wi-Fi. It has hardware level encryption and Co-Existence capability for Wi-Fi and BLE radios. The Module can be used in a range of applications like Smart Home, Networking, Entertainment and Smart Cities.",
    importantParts: [
      "Qualcomm Wi-Fi, BLE, ZigBee, Thread",
      "Skyworks Wi-Fi Front End Module",
      "Skyworks RF Amplifier",
      "Macronix 16Mb NOR Flash Memory",
    ],
    salientFeatures: [
      "Dual Band Wi-Fi, BLE 5.0, ZigBee, Thread.",
      "Meshing Capability",
      "Multiple I/O pins",
      "Compact Design: 39mm x 28mm x 4mm",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Firmware development",
      "RF Calibration and Tuning",
      "Board Bring-up and testing",
    ],
  },
  {
    id: "IOT-micro-gateway",
    title: "IOT Micro Gateway",
    category: "IoT Devices",
    images: ["/case-studies/POE/5.png", "/case-studies/POE/6.png"],
    features: [
      "Qualcomm QCA4020 Chipset",
      "Dual Band Wi-Fi, Bluetooth 5.0, ZigBee",
      "Hardware / Firmware / RF Development",
      "Power Supply Design",
      "Enclosure design / ID",
      "Compact Design: 42mm x 36mm x 27mm",
    ],
    summary:
      "This device is an IOT Micro Gateway powered by Qualcomm QCA 4020 chipset. It has Wi-Fi, Bluetooth 5.0 and ZigBee. It will bridge IOT devices through BLE or ZigBee and the Internet, through Wi-Fi. It has an in-built power supply and comes in a sleek form factor which can be plugged into any wall outlet just like a mobile phone charger. The device can handle multiple wireless devices at a time while being connected through Wi-Fi as well. It finds numerous applications in both consumer and industrial settings.",
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
      "Meshing Capability",
      "Compact Design: 42mm x 36mm x 27mm",
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
    id: "Industrial-Controller",
    title: "Industrial Controller",
    category: "Robotics",
    images: ["/ott/CHARA-top.svg"],
    features: [
      "Robotics Controller Board",
      "6 Layer PCB",
      "Interfaces: PCIE, HDMI, USB3.0, USB2.0, SPI, I2C",
      "Total pin count: 3089",
      "Packages Used: QFN 64, LQFP 144",
    ],
    summary: "",
    importantParts: [],
    salientFeatures: [],
    scopeOfWork: [],
  },
  {
    id: "Aerospace-PCB",
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
    id: "Automotive-OBD",
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
    id: "Video-Processor",
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
    id: "Set-Top-Box",
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
    id: "Wi-Fi-AP",
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
    id: "fedarant",
    title: "Fedarant – IoT Micro Gateway",
    category: "IoT Devices",
    images: [
      "/case-studies/FEDERANT/1.png",
      "/case-studies/FEDERANT/2.png",
      "/case-studies/FEDERANT/3.png",
      "/case-studies/FEDERANT/4.png",
      "/case-studies/FEDERANT/5.png",
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
