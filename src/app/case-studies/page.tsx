"use client";

import React, { useState, useEffect } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";

const embeddedCaseStudies = [
  {
    id: 1,
    title: "Industrial Temperature Control System",
    image: "/case-studies/BLUECOLD/1.png",
    link: "/case-studies/industrial-temperature-control-system",
    category: "development",
    summary:
      "A powerful Edge controller device used in high security applications with multi-protocol sensors and reader inputs. The system is powered through POE+ and has options for power backup using an external power supply or battery. It can work as a stand alone device or can be cascaded to control multiple access points.",
    specs: [
      { label: "Controller", value: "SAMA5D3" },
      { label: "Connectivity", value: "POE+ / Ethernet" },
      { label: "Storage", value: "Nano Flash" },
    ],
    stats: { value: "5%", label: "Stability improved by" },
  },
  {
    id: 2,
    title: "Multi IO card for ATE",
    image: "/case-studies/CHARA/1.png",
    link: "/case-studies/multi-io-card-for-ate",
    category: "development",
    summary:
      "An advanced health monitoring system utilizing FPGA technology for real-time processing of multiple biosignals. The system integrates various sensors to monitor vital signs and provides wireless connectivity for remote monitoring. Designed with medical-grade standards for reliability and accuracy in clinical environments.",
    specs: [
      { label: "Architecture", value: "FPGA Spartan-6" },
      { label: "Sampling", value: "High-speed ADC" },
      { label: "Interface", value: "Fiber Optic" },
    ],
    stats: { value: "12x", label: "Faster sampling rate" },
  },
  {
    id: 3,
    title: "Smart Monitoring System",
    image: "/case-studies/CLIMATE CONTROL/1.png",
    link: "/case-studies/smart-monitoring-system",
    category: "development",
    summary:
      "A comprehensive industrial control system featuring integrated POE+ switching capabilities and real-time operating system. The system provides centralized control for multiple devices while delivering power and data through a single ethernet connection. Designed for harsh industrial environments with robust communication protocols.",
    specs: [
      { label: "Processor", value: "Cortex-M7" },
      { label: "OS", value: "FreeRTOS" },
      { label: "Switch", value: "L2 Managed" },
    ],
    stats: { value: "40%", label: "Power efficiency" },
  },
  {
    id: 4,
    title: "Microscopic Camera Control",
    image: "/case-studies/MICROSCOPIC CAMERA/1.png",
    link: "/case-studies/microscopic-camera-control",
    category: "development",
    summary:
      "A power bank using a Lithium Titanate battery with super-fast charging characteristics. The design is based on a high power current source and monitoring system using a PIC Microcontroller. The lithium-titanate battery's unique anode structure allows for rapid recharging, achieving a full charge in less than 10 minutes. Includes built-in safety features to prevent overcharging and deep discharge.",
    specs: [
      { label: "Capacity", value: "10,000 mAh" },
      { label: "Charge Time", value: "10 Mins" },
      { label: "Chemistry", value: "LTO Cells" },
    ],
    stats: { value: "20k", label: "Lifecycle cycles" },
  },
  {
    id: 5,
    title: "Industrial IOT gateway with POE",
    image: "/case-studies/OTT/1.png",
    link: "/case-studies/industrial-iot-gateway-with-poe",
    category: "development",
    summary:
      "Handheld, battery-operated device that reads car data via the OBD port, transmitting it via LoRa and BLE. Features an STM32F Microcontroller, support for multiple OBD protocols, and a pass-through design. Includes an 800 mAh Li-Po battery with a cut-off mechanism to prevent car battery drain.",
    specs: [
      { label: "Protocol", value: "CAN / K-Line" },
      { label: "Wireless", value: "LoRa & BLE 5.0" },
      { label: "Accuracy", value: "99.9%" },
    ],
    stats: { value: "15km", label: "Long range LoRa" },
  },
  {
    id: 6,
    title: "POE Control unit",
    image: "/case-studies/POE/1.png",
    link: "/case-studies/poe-control-unit",
    category: "development",
    summary:
      "Low power BLE tag integrated with WattUp wireless charging technology. Includes multiple on-board sensors for light, motion, and temperature. Contact-less, orientation-free charging allows for easy maintenance. BLE 5.0 compliant and supports mesh networking for asset tracking and indoor location sensing.",
    specs: [
      { label: "Range", value: "Up to 100m" },
      { label: "Charging", value: "Qi Wireless" },
      { label: "Sensors", value: "Temp & Accel" },
    ],
    stats: { value: "2yr", label: "Battery life" },
  },
  {
    id: 7,
    title: "POE Power Injector",
    image: "/case-studies/POE/3.png",
    link: "/case-studies/poe-power-injector",
    category: "mobile",
    summary:
      "Connectivity module based on the Qualcomm QCA4020, featuring dual-band Wi-Fi, BLE 5.0, and ZigBee. Integrates Cortex M4F for applications and Cortex M0 for networking. Includes hardware-level encryption and co-existence capability, making it ideal for Smart Home and industrial IoT gateways.",
    specs: [
      { label: "Protocols", value: "TCP/IP, MQTT" },
      { label: "Band", value: "2.4GHz Dual" },
      { label: "Pins", value: "48 GPIOs" },
    ],
    stats: { value: "3", label: "Simultaneous modes" },
  },
  {
    id: 8,
    title: "Industrial POE switch",
    image: "/case-studies/POE/5.png",
    link: "/case-studies/industrial-poe-switch",
    category: "design",
    summary:
      "Compact IoT Micro Gateway powered by Qualcomm QCA4020. Bridges IoT devices via BLE/ZigBee to the Internet through Wi-Fi. Features an inbuilt power supply in a sleek plug-and-play form factor. Capable of managing multiple wireless devices simultaneously for consumer and industrial settings.",
    specs: [
      { label: "Setup", value: "Zero Config" },
      { label: "Security", value: "WPA3 / TLS" },
      { label: "Power", value: "USB-C 5V" },
    ],
    stats: { value: "90%", label: "Setup time reduction" },
  },
  {
    id: 9,
    title: "Portable EV Charger",
    image: "/case-studies/FEDERANT/1.png",
    link: "/case-studies/portable-ev-charger",
    category: "design",
    summary:
      "Compact IoT Micro Gateway powered by Qualcomm QCA4020. Bridges IoT devices via BLE/ZigBee to the Internet through Wi-Fi. Features an inbuilt power supply in a sleek plug-and-play form factor. Capable of managing multiple wireless devices simultaneously for consumer and industrial settings.",
    specs: [
      { label: "Setup", value: "Zero Config" },
      { label: "Security", value: "WPA3 / TLS" },
      { label: "Power", value: "USB-C 5V" },
    ],
    stats: { value: "90%", label: "Setup time reduction" },
  },
  {
    id: 10,
    title: "Stellar Main Board",
    image: "/case-studies/STELLAR MAIN BORD/1.1.png",
    link: "/case-studies/stellar-main-board",
    category: "development",
    summary:
      "High-density embedded main board for network timing and synchronisation, featuring multiple SFP+ ports (Grandmaster, Backhaul, Auxiliary), GPS/RTC precision timing, and a LOM module for remote management.",
    specs: [
      { label: "Platform", value: "FEDERON 2600" },
      { label: "Timing", value: "GPS / RTC" },
      { label: "Network", value: "SFP+ Multi-ch" },
    ],
    stats: { value: "3", label: "SFP+ network channels" },
  },
  {
    id: 11,
    title: "Industrial Automation Controller",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/industrial-automation-controller",
    category: "development",
    summary:
      "Advanced industrial automation controller with real-time processing capabilities, supporting multiple communication protocols and modular I/O expansion. Designed for manufacturing and process control applications.",
    specs: [
      { label: "Processor", value: "Cortex-A9" },
      { label: "Protocols", value: "Modbus / EtherCAT" },
      { label: "I/O", value: "16 DI/DO Ports" },
    ],
    stats: { value: "99.9%", label: "System uptime" },
  },
  {
    id: 12,
    title: "Wireless Sensor Network Hub",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/wireless-sensor-network-hub",
    category: "development",
    summary:
      "Multi-protocol wireless hub aggregating sensor data from distributed IoT devices. Features advanced mesh networking with automatic routing and cloud connectivity for analytics.",
    specs: [
      { label: "Protocols", value: "BLE / Wi-Fi / Zigbee" },
      { label: "Memory", value: "512 MB RAM" },
      { label: "Range", value: "500m (Open space)" },
    ],
    stats: { value: "256", label: "Max connected devices" },
  },
  {
    id: 13,
    title: "Real-time Data Logger",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/real-time-data-logger",
    category: "development",
    summary:
      "High-speed data logging device for industrial monitoring with onboard storage and real-time analytics. Supports multiple analog and digital input channels with configurable sampling rates.",
    specs: [
      { label: "Sampling", value: "100 kHz max" },
      { label: "Storage", value: "1 TB eMMC" },
      { label: "Channels", value: "32 analog inputs" },
    ],
    stats: { value: "32", label: "Parallel data channels" },
  },
  {
    id: 14,
    title: "Environmental Monitoring Station",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/environmental-monitoring-station",
    category: "development",
    summary:
      "Compact environmental monitoring system with integrated sensors for temperature, humidity, air quality, and atmospheric pressure. Features solar charging and extended battery life.",
    specs: [
      { label: "Sensors", value: "6-point Environmental" },
      { label: "Power", value: "Solar + Battery" },
      { label: "Connectivity", value: "LoRaWAN" },
    ],
    stats: { value: "2yr", label: "Battery autonomy" },
  },
  {
    id: 15,
    title: "Smart Building Controller",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/smart-building-controller",
    category: "development",
    summary:
      "Intelligent building management system controller coordinating HVAC, lighting, and security systems. Provides energy optimization and occupancy-based automation.",
    specs: [
      { label: "Zones", value: "Up to 128 zones" },
      { label: "Interface", value: "BACnet / KNX" },
      { label: "Processing", value: "Dual-core ARM" },
    ],
    stats: { value: "40%", label: "Energy consumption reduction" },
  },
  {
    id: 16,
    title: "Medical Device Interface",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/medical-device-interface",
    category: "development",
    summary:
      "FDA-compliant interface module for connecting legacy medical equipment to modern networked healthcare systems. Includes rigorous data validation and secure communication.",
    specs: [
      { label: "Standards", value: "HL7 / DICOM" },
      { label: "Grade", value: "Medical Class II" },
      { label: "Uptime", value: "99.99% SLA" },
    ],
    stats: { value: "Zero", label: "Data loss incidents" },
  },
  {
    id: 17,
    title: "Robotics Motion Controller",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/robotics-motion-controller",
    category: "development",
    summary:
      "High-precision motion controller for industrial robotic arms with real-time servo control and trajectory planning. Supports multiple kinematic configurations.",
    specs: [
      { label: "Axes", value: "Up to 16 axes" },
      { label: "Control Loop", value: "4 kHz refresh" },
      { label: "Accuracy", value: "±0.1mm" },
    ],
    stats: { value: "16", label: "Simultaneous axes" },
  },
  {
    id: 18,
    title: "Power Distribution Monitor",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/power-distribution-monitor",
    category: "development",
    summary:
      "Three-phase power distribution monitoring device with comprehensive metering, harmonics analysis, and fault detection. Enables predictive maintenance of electrical infrastructure.",
    specs: [
      { label: "Phases", value: "3-phase 480V" },
      { label: "Accuracy", value: "Class 0.5" },
      { label: "Harmonics", value: "63rd order" },
    ],
    stats: { value: "25", label: "Measurable parameters" },
  },
  {
    id: 19,
    title: "Vehicular Telematics Unit",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/vehicular-telematics-unit",
    category: "development",
    summary:
      "Compact vehicle telematics module for fleet management and vehicle diagnostics. Integrates GPS, accelerometer, and CAN bus interfaces with real-time event logging.",
    specs: [
      { label: "GPS", value: "Multi-constellation GNSS" },
      { label: "Accuracy", value: "±5m CEP" },
      { label: "CAN", value: "Dual CAN FD" },
    ],
    stats: { value: "99.5%", label: "Location uptime" },
  },
  {
    id: 20,
    title: "Security Access Control Hub",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/security-access-control-hub",
    category: "development",
    summary:
      "Enterprise-grade access control hub with biometric integration, encrypted communication, and offline operation capability. Manages thousands of credentials securely.",
    specs: [
      { label: "Capacity", value: "50k credentials" },
      { label: "Authentication", value: "Biometric + RFID" },
      { label: "Encryption", value: "AES-256" },
    ],
    stats: { value: "99.99%", label: "Availability guarantee" },
  },
];

const pcbCaseStudies = [
  {
    id: 1,
    title: "Industrial Controller",
    image: "/ott/CHARA-top.svg",
    link: "/case-studies/portable-ev-charger-pcb",
    category: "development",
  },
  {
    id: 2,
    title: "Aerospace PCB",
    image: "/ott/TEK_OTT_REV1P0_BOT.svg",
    link: "/case-studies/aerospace-pcb",
    category: "development",
  },
  {
    id: 3,
    title: "Automotive OBD",
    image: "/ott/TEK_OTT_REV1P0_BRD_PR3.svg",
    link: "/case-studies/automotive-obd-pcb",
    category: "development",
  },
  {
    id: 4,
    title: "Fedarant PCB – Bottom Layer",
    image: "/case-studies/FEDERANT/P01306PB1PR2_BOT.svg",
    link: "/case-studies/fedarant-pcb-bottom-layer",
    category: "development",
  },
  {
    id: 5,
    title: "Fedarant PCB – Top Layer",
    image: "/case-studies/FEDERANT/P01306PB1PR2.svg",
    link: "/case-studies/fedarant-pcb-top-layer",
    category: "development",
  },
  {
    id: 6,
    title: "Medical Sensing Board",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/medical-sensing-board",
    category: "development",
  },
  {
    id: 7,
    title: "IoT Gateway PCB",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/iot-gateway-pcb",
    category: "development",
  },
  {
    id: 8,
    title: "High-Speed Data Interface",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/high-speed-data-interface",
    category: "development",
  },
  {
    id: 9,
    title: "RF Front-End Module",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/rf-front-end-module",
    category: "development",
  },
  {
    id: 10,
    title: "Power Management Board",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/power-management-board",
    category: "development",
  },
  {
    id: 11,
    title: "Battery Management System",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/battery-management-system",
    category: "development",
  },
  {
    id: 12,
    title: "Sensor Interface Board",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/sensor-interface-board",
    category: "development",
  },
  {
    id: 13,
    title: "Motor Control PCB",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/motor-control-pcb",
    category: "development",
  },
  {
    id: 14,
    title: "Communication Module",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/communication-module",
    category: "development",
  },
  {
    id: 15,
    title: "Audio Processing Board",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/audio-processing-board",
    category: "development",
  },
  {
    id: 16,
    title: "Lighting Control PCB",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/lighting-control-pcb",
    category: "development",
  },
  {
    id: 17,
    title: "FPGA Development Board",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/fpga-development-board",
    category: "development",
  },
  {
    id: 18,
    title: "Thermal Management PCB",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/thermal-management-pcb",
    category: "development",
  },
  {
    id: 19,
    title: "Security Module Board",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/security-module-board",
    category: "development",
  },
  {
    id: 20,
    title: "Testing Interface PCB",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/testing-interface-pcb",
    category: "development",
  },
];

const mechanicalCaseStudies: {
  id: number;
  title: string;
  image: string;
  link: string;
  category: string;
  summary?: string;
  specs?: { label: string; value: string }[];
  stats?: { value: string; label: string };
}[] = [
  {
    id: 1,
    title: "CapServe Cell Sensor",
    image: "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.1.png",
    link: "/case-studies/capserve-cell-sensor",
    category: "mechanical",
    summary:
      "IP65-rated outdoor cell sensor enclosure with snap-fit assembly, integrated pole-mount bracket, and DFM-reviewed geometry ready for injection-moulding production.",
    specs: [
      { label: "Rating", value: "IP65 Sealed" },
      { label: "Material", value: "UV-stable ABS" },
      { label: "Mount", value: "Pole / Wall" },
    ],
    stats: { value: "IP65", label: "Ingress protection rating" },
  },
  {
    id: 2,
    title: "UV Disinfection System",
    image: "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER__1.0.png",
    link: "/case-studies/uv-disinfection-system",
    category: "mechanical",
    summary:
      "Wall-mounted UV-C disinfection unit branded SafeSpaceUV with triple lamp array, sealed optical windows, and two-tone enclosure for healthcare and commercial spaces.",
    specs: [
      { label: "Lamps", value: "Triple UV-C" },
      { label: "Mount", value: "Wall-mount" },
      { label: "Finish", value: "Two-tone" },
    ],
    stats: { value: "3x", label: "UV-C lamp coverage" },
  },
  {
    id: 3,
    title: "Industrial Splice Detector",
    image:
      "/case-studies/mechanicalCaseStudies/2/SPLICE_DETECTOR_RENDER_2.4.png",
    link: "/case-studies/industrial-splice-detector",
    category: "mechanical",
    summary:
      "Ruggedised splice detector with extruded aluminium heatsink enclosure, M12 industrial connectors, and RS-232 / RS-485 / EtherCAT interfaces for manufacturing lines.",
    specs: [
      { label: "Material", value: "Aluminium" },
      { label: "Connectors", value: "M12 Industrial" },
      { label: "Power", value: "24 VDC" },
    ],
    stats: { value: "24V", label: "Industrial power input" },
  },
  {
    id: 4,
    title: "OTT Media Gateway",
    image:
      "/case-studies/mechanicalCaseStudies/3/OTT_RENDER_27_NOV_2024_MG2.1.png",
    link: "/case-studies/ott-media-gateway",
    category: "mechanical",
    summary:
      "Sleek OTT media gateway enclosure branded TEKION with dual articulating antenna mounts, angular faceted design, and ventilated base for consumer and commercial streaming.",
    specs: [
      { label: "Antennas", value: "Dual Articulating" },
      { label: "Ports", value: "USB / SD / IR" },
      { label: "Cooling", value: "Passive" },
    ],
    stats: { value: "Fanless", label: "Thermal design" },
  },
  {
    id: 5,
    title: "RF Signal Generator Enclosure",
    image:
      "/case-studies/mechanicalCaseStudies/4/PG10_RENDER_28_OCT_2024_MG1.1.png",
    link: "/case-studies/rf-signal-generator-enclosure",
    category: "mechanical",
    summary:
      "Heavy-duty sheet metal enclosure with EMI shielding, ventilated panels, N-type RF output, and universal AC input for laboratory and production test environments.",
    specs: [
      { label: "Material", value: "Sheet Metal" },
      { label: "RF Output", value: "N-type" },
      { label: "AC Input", value: "170 – 240 V" },
    ],
    stats: { value: "EMI", label: "Shielded enclosure" },
  },
  {
    id: 6,
    title: "Pulse Oximeter Enclosure",
    image:
      "/case-studies/mechanicalCaseStudies/5/PULSE_OXIMETER_RENDER_2.1.png",
    link: "/case-studies/pulse-oximeter-enclosure",
    category: "mechanical",
    summary:
      "Compact fingertip pulse oximeter with two-piece clip-on design, medical-grade polycarbonate and ABS construction, and optimised finger channel for consistent sensor contact.",
    specs: [
      { label: "Form", value: "Finger-clip" },
      { label: "Material", value: "PC / ABS" },
      { label: "Grade", value: "Medical" },
    ],
    stats: { value: "SpO2", label: "Clinical monitoring" },
  },
  {
    id: 7,
    title: "QSafe Tilt Sensor",
    image:
      "/case-studies/mechanicalCaseStudies/6/QSAFE_TILT_SENSOR_RENDER_23_DEC_2023.16.png",
    link: "/case-studies/qsafe-tilt-sensor",
    category: "mechanical",
    summary:
      "Ruggedised tilt sensor enclosure with IP-rated sealed construction, four-point flange mounting, and UV-stable ABS for structural monitoring in outdoor environments.",
    specs: [
      { label: "Mount", value: "4-point Flange" },
      { label: "Material", value: "UV-stable ABS" },
      { label: "Indicator", value: "Status LED" },
    ],
    stats: { value: "IP", label: "Sealed for outdoor use" },
  },
  {
    id: 8,
    title: "Industrial Pressure Gauge",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/industrial-pressure-gauge",
    category: "mechanical",
    summary:
      "Robust pressure gauge enclosure with stainless steel wetted parts, IP65 rating, and panel-mount configuration for harsh industrial environments.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Rating", value: "IP65" },
      { label: "Range", value: "0-1000 PSI" },
    ],
    stats: { value: "±0.5%", label: "Accuracy class" },
  },
  {
    id: 9,
    title: "Compact Flow Meter Housing",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/compact-flow-meter-housing",
    category: "mechanical",
    summary:
      "Lightweight composite flow meter housing with integrated display window, snap-fit assembly, and optimised for inline installation in fluid systems.",
    specs: [
      { label: "Material", value: "Engineering Plastic" },
      { label: "Assembly", value: "Snap-fit" },
      { label: "Flow Rate", value: "1-100 L/min" },
    ],
    stats: { value: "Minimal", label: "Pressure drop" },
  },
  {
    id: 10,
    title: "Temperature Transmitter Pod",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/temperature-transmitter-pod",
    category: "mechanical",
    summary:
      "Submersible temperature transmitter with corrosion-resistant titanium probe, precision thermowell design, and IP68 waterproof rating for marine applications.",
    specs: [
      { label: "Material", value: "Titanium / IP68" },
      { label: "Range", value: "-40°C to +125°C" },
      { label: "Accuracy", value: "±0.5°C" },
    ],
    stats: { value: "5000m", label: "Submersion depth" },
  },
  {
    id: 11,
    title: "Ventilation Control Damper",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/ventilation-control-damper",
    category: "mechanical",
    summary:
      "Motorised ventilation damper with low-friction blade mechanism, sealed bearing design, and position feedback for building automation integration.",
    specs: [
      { label: "Actuation", value: "24V DC Motor" },
      { label: "Control", value: "0-10V Modulating" },
      { label: "Frame", value: "Extruded Aluminium" },
    ],
    stats: { value: "100k", label: "Cycle life rating" },
  },
  {
    id: 12,
    title: "Safety Relief Valve Housing",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/safety-relief-valve-housing",
    category: "mechanical",
    summary:
      "Certified pressure relief valve with redundant safety features, manifold-block integration, and compliance with ASME standards for petrochemical applications.",
    specs: [
      { label: "Standard", value: "ASME Certified" },
      { label: "Pressure", value: "Up to 5000 PSI" },
      { label: "Material", value: "Ductile Iron" },
    ],
    stats: { value: "Zero", label: "Leakage rating" },
  },
  {
    id: 13,
    title: "Wireless Sensor Node Case",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/wireless-sensor-node-case",
    category: "mechanical",
    summary:
      "Compact multi-sensor enclosure with tool-free battery access, integrated antenna mounting, and desiccant cartridge support for extended outdoor deployment.",
    specs: [
      { label: "Form", value: "Compact Module" },
      { label: "Material", value: "UV-resistant ABS" },
      { label: "IP Rating", value: "IP66" },
    ],
    stats: { value: "1yr", label: "Sealed operation" },
  },
  {
    id: 14,
    title: "Energy Meter Enclosure",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/energy-meter-enclosure",
    category: "mechanical",
    summary:
      "Wall-mounted smart meter enclosure with tamper-evident features, DIN rail mounting compatibility, and thermal management for utility deployment.",
    specs: [
      { label: "Mount", value: "DIN Rail / Wall" },
      { label: "Material", value: "Fire-rated Plastic" },
      { label: "Capacity", value: "4 Module slots" },
    ],
    stats: { value: "IEC61439", label: "Compliance standard" },
  },
  {
    id: 15,
    title: "Cable Gland Junction Box",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/cable-gland-junction-box",
    category: "mechanical",
    summary:
      "Industrial cable management junction box with pre-installed glands, strain relief channels, and internal cable routing guides for panel integration.",
    specs: [
      { label: "Size", value: "200x300x120mm" },
      { label: "Glands", value: "12x M20" },
      { label: "Rating", value: "IP66/IP67" },
    ],
    stats: { value: "32A", label: "Wire capacity" },
  },
  {
    id: 16,
    title: "Modular Connector Panel",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/modular-connector-panel",
    category: "mechanical",
    summary:
      "Standardised connector panel with hot-swappable module slots, keyed insertion design, and label space for industrial equipment front-facing connections.",
    specs: [
      { label: "Modules", value: "6-position" },
      { label: "Keying", value: "Mechanical" },
      { label: "Material", value: "Anodised Aluminium" },
    ],
    stats: { value: "500", label: "Insert/removal cycles" },
  },
  {
    id: 17,
    title: "Thermal Dissipation Heatsink",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/thermal-dissipation-heatsink",
    category: "mechanical",
    summary:
      "Extruded aluminum heatsink with optimised fin geometry, forced convection cooling, and compact form factor for high-power semiconductor mounting.",
    specs: [
      { label: "Material", value: "6061-T6 Aluminium" },
      { label: "Finish", value: "Black Anodise" },
      { label: "Thermal", value: "0.25°C/W" },
    ],
    stats: { value: "300W", label: "Heat dissipation" },
  },
  {
    id: 18,
    title: "Vibration Isolation Mount",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/vibration-isolation-mount",
    category: "mechanical",
    summary:
      "Elastomer-based vibration isolation mount with load rating plate, low resonance frequency, and corrosion-resistant fastening for equipment stabilisation.",
    specs: [
      { label: "Material", value: "Natural Rubber" },
      { label: "Load", value: "Up to 500 kg" },
      { label: "Damping", value: "0.05 Q-factor" },
    ],
    stats: { value: "10Hz", label: "Isolation frequency" },
  },
  {
    id: 19,
    title: "EMI Shielding Gasket Strip",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/emi-shielding-gasket-strip",
    category: "mechanical",
    summary:
      "Conductive silicone gasket strip with integrated EMI shielding, compression set resistance, and design flexibility for custom sealing in electronic enclosures.",
    specs: [
      { label: "Material", value: "Conductive Silicone" },
      { label: "Conductivity", value: "10^-3 S/m" },
      { label: "Temp Range", value: "-50°C to +200°C" },
    ],
    stats: { value: "60dB", label: "Shielding effectiveness" },
  },
  {
    id: 20,
    title: "Flexible Cable Conduit Assembly",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/flexible-cable-conduit-assembly",
    category: "mechanical",
    summary:
      "Pre-assembled flexible conduit with strain relief fittings, sleeving protection, and colour-coded identification bands for cable route management and protection.",
    specs: [
      { label: "Diameter", value: "6-25mm" },
      { label: "Material", value: "Nylon-reinforced" },
      { label: "Bend Radius", value: "3x diameter" },
    ],
    stats: { value: "1000+", label: "Bend cycle rating" },
  },
];

const industrialCaseStudies = [
  {
    id: 1,
    title: "Handheld Industrial Controller",
    image: "/industrial_design_case_studies/product_1.png",
    link: "/case-studies/handheld-industrial-controller",
    category: "industrial",
    summary:
      "Ergonomic handheld controller designed for factory floor use, with a balanced grip, sealed I/O ports, and a production-ready split-housing concept.",
    specs: [
      { label: "Form", value: "Handheld" },
      { label: "Standard", value: "IP54 Rated" },
      { label: "Material", value: "ABS / TPE" },
    ],
    stats: { value: "40%", label: "Reduction in operator fatigue" },
  },
  {
    id: 2,
    title: "Medical Diagnostic System",
    image: "/industrial_design_case_studies/product_2.png",
    link: "/case-studies/medical-diagnostic-system",
    category: "industrial",
    summary:
      "User-centered medical diagnostic device with a clean visual language, intuitive control layout, and enclosure geometry optimised for sterile wipe-down.",
    specs: [
      { label: "Compliance", value: "IEC 60601" },
      { label: "Finish", value: "Antimicrobial" },
      { label: "Display", value: "5″ Touch" },
    ],
    stats: { value: "30%", label: "Faster diagnosis workflow" },
  },
  {
    id: 3,
    title: "Compact Edge Gateway Enclosure",
    image: "/case-studies/industrialCaseStudies/1/ENCLOSURE_ASSM_1.9.png",
    link: "/case-studies/compact-edge-gateway-enclosure",
    category: "industrial",
    summary:
      "Fanless aluminium edge gateway enclosure with finned heatsink top cover, multiple SMA antenna ports, and integrated Ethernet, USB, and M12 industrial interfaces.",
    specs: [
      { label: "Material", value: "Aluminium" },
      { label: "Cooling", value: "Passive Heatsink" },
      { label: "Connectors", value: "SMA / M12" },
    ],
    stats: { value: "Fanless", label: "Silent passive cooling" },
  },
  {
    id: 4,
    title: "Medical Recording Device",
    image: "/case-studies/industrialCaseStudies/2/LSR-1.png",
    link: "/case-studies/medical-recording-device",
    category: "industrial",
    summary:
      "Compact puck-shaped medical recording device with LSR (Liquid Silicone Rubber) overmoulded enclosure, USB-C interface, and antimicrobial surface finish for clinical environments.",
    specs: [
      { label: "Material", value: "LSR Overmould" },
      { label: "Interface", value: "USB-C" },
      { label: "Form", value: "Puck" },
    ],
    stats: { value: "LSR", label: "Antimicrobial surface" },
  },
  {
    id: 5,
    title: "Portable Test Equipment Case",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/portable-test-equipment-case",
    category: "industrial",
    summary:
      "Rugged carrying case for field test equipment with shock-absorbing foam inserts, weatherproof sealing, and ergonomic handle design for technician field work.",
    specs: [
      { label: "Material", value: "Impact-resistant Polymer" },
      { label: "Sealing", value: "IP67 Rated" },
      { label: "Form", value: "Compact Case" },
    ],
    stats: { value: "5kg", label: "Lightweight design" },
  },
  {
    id: 6,
    title: "Industrial Pump Assembly",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/industrial-pump-assembly",
    category: "industrial",
    summary:
      "Heavy-duty industrial pump with cast iron body, stainless steel impeller, and balanced design for continuous operation in processing plants.",
    specs: [
      { label: "Material", value: "Cast Iron / SS" },
      { label: "Capacity", value: "500 GPM" },
      { label: "Head", value: "150 ft" },
    ],
    stats: { value: "10yr", label: "Design life" },
  },
  {
    id: 7,
    title: "Smart Vending Machine Interface",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/smart-vending-machine-interface",
    category: "industrial",
    summary:
      "Touchscreen interface module for vending machines with anti-vandal construction, integrated card reader slot, and weather-resistant design.",
    specs: [
      { label: "Display", value: '10.1" Touch' },
      { label: "Security", value: "Anti-tamper" },
      { label: "Finish", value: "Polished Stainless" },
    ],
    stats: { value: "99.5%", label: "Uptime reliability" },
  },
  {
    id: 8,
    title: "Safety Instrumented Controller",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/safety-instrumented-controller",
    category: "industrial",
    summary:
      "Safety-rated control module with redundant input monitoring, integrated emergency shutdown interface, and certified for high-risk industrial applications.",
    specs: [
      { label: "Rating", value: "SIL 3 Certified" },
      { label: "Redundancy", value: "2oo3 logic" },
      { label: "Response Time", value: "50ms max" },
    ],
    stats: { value: "Zero", label: "Safety incidents" },
  },
  {
    id: 9,
    title: "Modular Workstation Cart",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/modular-workstation-cart",
    category: "industrial",
    summary:
      "Height-adjustable workstation cart with removable component trays, integrated cable management, and smooth-rolling casters for facility flexibility.",
    specs: [
      { label: "Adjustment", value: "0-30cm range" },
      { label: "Weight Capacity", value: "50kg per shelf" },
      { label: "Wheels", value: "Brake-equipped" },
    ],
    stats: { value: "4", label: "Configurable shelves" },
  },
  {
    id: 10,
    title: "Control Room Dashboard Panel",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/control-room-dashboard-panel",
    category: "industrial",
    summary:
      "Integrated control panel with organized button layout, status indicator array, large display zone, and ergonomic mounting for operator comfort.",
    specs: [
      { label: "Controls", value: "36 interface points" },
      { label: "Display", value: "7-segment LCD" },
      { label: "Material", value: "Brushed Aluminium" },
    ],
    stats: { value: "16", label: "Simultaneous readouts" },
  },
  {
    id: 11,
    title: "Rack-Mount Server Chassis",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/rack-mount-server-chassis",
    category: "industrial",
    summary:
      "Standard 2U rackmount chassis with optimised airflow design, tool-less drive bays, and front panel space for status indicators and emergency controls.",
    specs: [
      { label: "Form", value: "2U Rackmount" },
      { label: "Expansion", value: '4x 3.5" bays' },
      { label: "Power", value: "Redundant PSU ready" },
    ],
    stats: { value: "55W", label: "Max thermal design" },
  },
  {
    id: 12,
    title: "Heavy Equipment Control Console",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/heavy-equipment-control-console",
    category: "industrial",
    summary:
      "Rugged operator console for heavy machinery with multi-function joystick, tactile feedback buttons, and sealed construction for dust-heavy environments.",
    specs: [
      { label: "Input", value: "6-axis Joystick" },
      { label: "Sealing", value: "IP65 Rated" },
      { label: "Cable", value: "50m coiled" },
    ],
    stats: { value: "30%", label: "Operator fatigue reduction" },
  },
  {
    id: 13,
    title: "Laboratory Instrument Enclosure",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/laboratory-instrument-enclosure",
    category: "industrial",
    summary:
      "Precision instrument enclosure with vibration isolation feet, temperature-controlled chamber, and optical access windows for laboratory analysis equipment.",
    specs: [
      { label: "Isolation", value: "<1Hz resonance" },
      { label: "Temperature", value: "±1°C stability" },
      { label: "Optics", value: "Anti-reflection coated" },
    ],
    stats: { value: "Class A", label: "Precision grade" },
  },
  {
    id: 14,
    title: "Water Treatment Control Module",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/water-treatment-control-module",
    category: "industrial",
    summary:
      "Industrial water treatment controller with multi-parameter sensor integration, automated dosing interface, and data logging for regulatory compliance.",
    specs: [
      { label: "Parameters", value: "8-point monitoring" },
      { label: "Dosing", value: "4-channel peristaltic" },
      { label: "Logging", value: "365-day storage" },
    ],
    stats: { value: "NSF", label: "Certification standard" },
  },
  {
    id: 15,
    title: "Conveyor System Drive Unit",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/conveyor-system-drive-unit",
    category: "industrial",
    summary:
      "Sealed conveyor drive motor with integrated gearbox, oversized bearings for continuous duty, and quick-disconnect coupling for maintenance.",
    specs: [
      { label: "Power", value: "7.5 kW" },
      { label: "Ratio", value: "30:1 reducer" },
      { label: "Duty", value: "Continuous rated" },
    ],
    stats: { value: "50000hr", label: "MTBF rating" },
  },
  {
    id: 16,
    title: "Radiation Shielding Enclosure",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/radiation-shielding-enclosure",
    category: "industrial",
    summary:
      "Lead-lined containment enclosure with interlocked access door, radiation monitoring port, and sealed seam construction for hazardous material handling.",
    specs: [
      { label: "Shielding", value: "10mm lead-lined" },
      { label: "Interlocks", value: "Safety certified" },
      { label: "Seal", value: "Welded seams" },
    ],
    stats: { value: "100%", label: "Containment rating" },
  },
  {
    id: 17,
    title: "Clean Room Equipment Trolley",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/clean-room-equipment-trolley",
    category: "industrial",
    summary:
      "Cleanroom-compatible equipment trolley with smooth surfaces, low particle generation wheels, and stainless steel construction for biotech facilities.",
    specs: [
      { label: "Material", value: "304 Stainless Steel" },
      { label: "Wheels", value: "Low-particle elastomer" },
      { label: "Cleanliness", value: "Class 100 rated" },
    ],
    stats: { value: "Zero", label: "Particle shedding" },
  },
  {
    id: 18,
    title: "Laboratory Balance Housing",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/laboratory-balance-housing",
    category: "industrial",
    summary:
      "Precision analytical balance enclosure with draft shield, static-dissipative platform, and integrated mass calibration system for metrology labs.",
    specs: [
      { label: "Accuracy", value: "0.1mg precision" },
      { label: "Capacity", value: "310g" },
      { label: "Draft Shield", value: "Acrylic windows" },
    ],
    stats: { value: "ISO 6683", label: "Compliance standard" },
  },
  {
    id: 19,
    title: "Sterile Processing Containment",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/sterile-processing-containment",
    category: "industrial",
    summary:
      "Medical-grade sterile processing containment with removable sterilisable components, positive pressure airflow, and integrated HEPA filtration.",
    specs: [
      { label: "Standard", value: "ISO 13485" },
      { label: "Material", value: "Biocompatible" },
      { label: "Filtration", value: "HEPA / ULPA" },
    ],
    stats: { value: "Class A", label: "Sterility assurance" },
  },
  {
    id: 20,
    title: "Field Service Tool Kit Case",
    image: "/case-studies/image_vacationing.png",
    link: "/case-studies/field-service-tool-kit-case",
    category: "industrial",
    summary:
      "Organizer case for field service technicians with custom-fitted tool storage, protective padding, and quick-access front pocket for documentation.",
    specs: [
      { label: "Material", value: "Reinforced Polymer" },
      { label: "Customization", value: "Modular inserts" },
      { label: "Weight", value: "3.2kg empty" },
    ],
    stats: { value: "25", label: "Tool storage capacity" },
  },
];

const sections = [
  { id: "embedded", label: "Embedded Systems" },
  { id: "pcb", label: "PCB Design" },
  { id: "mechanical", label: "Mechanical Design" },
  { id: "industrial", label: "Industrial Design" },
];

const sectionCounts: { [key: string]: number } = {
  embedded: embeddedCaseStudies.length,
  pcb: pcbCaseStudies.length,
  mechanical: mechanicalCaseStudies.length,
  industrial: industrialCaseStudies.length,
};

const SCROLL_OFFSET = 120;

export default function CaseStudiesPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = sections[0].id;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const sectionTop =
            el.getBoundingClientRect().top + scrollY - SCROLL_OFFSET;
          if (scrollY >= sectionTop - 5) {
            current = section.id;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-24 pb-24 bg-[#f8f8f6]">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.82))]" />

      <div className="relative flex w-full max-w-[1600px] mx-auto">
        {/* Quick Navigation Sidebar */}
        <aside className="hidden xl:block w-72 shrink-0 pl-10 pt-8 sticky top-24 h-screen self-start">
          <nav className="relative flex flex-col">
            {/* Vertical track line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" />

            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative text-left pl-6 py-4 transition-all duration-300"
                >
                  {/* Active indicator line */}
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#E31E24] scale-y-100"
                        : "bg-transparent scale-y-0 group-hover:bg-gray-400 group-hover:scale-y-100"
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-lg font-semibold transition-colors duration-300 leading-tight ${
                        isActive
                          ? "text-[#E31E24]"
                          : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {section.label}
                    </span>
                    <span
                      className={`text-xs font-medium tabular-nums ml-3 px-2 py-0.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#E31E24]/10 text-[#E31E24]"
                          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
                      }`}
                    >
                      {sectionCounts[section.id]}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          data-budge-target
          className="flex-1 w-full max-w-6xl px-8 lg:px-12 mx-auto"
          style={{ paddingLeft: "32px", paddingRight: "32px" }}
        >
          {/* Embedded Section */}
          <div id="embedded" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 01</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">
                  Embedded Systems
                </h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {embeddedCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {embeddedCaseStudies.map((study) => (
                <CaseStudyCard
                  key={`estudy-${study.id}`}
                  {...study}
                  // imageBackgroundClassName="bg-blue-200"
                />
              ))}
            </div>
          </div>

          {/* PCB Section */}
          <div id="pcb" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 02</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">PCB Design</h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {pcbCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {pcbCaseStudies.map((study) => (
                <CaseStudyCard
                  key={`pstudy-${study.id}`}
                  {...study}
                  imageClassName="object-contain px-14 py-5"
                />
              ))}
            </div>
          </div>

          {/* Mechanical Section */}
          <div id="mechanical" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 03</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">
                  Mechanical Design
                </h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {mechanicalCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {mechanicalCaseStudies.map((study) => (
                <CaseStudyCard key={`mstudy-${study.id}`} {...study} />
              ))}
            </div>
          </div>

          {/* Industrial Section */}
          <div id="industrial" className="mb-10 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 04</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">
                  Industrial Design
                </h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {industrialCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {industrialCaseStudies.map((study) => (
                <CaseStudyCard
                  key={`istudy-${study.id}`}
                  {...study}
                  // imageBackgroundClassName="bg-blue-200"
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
