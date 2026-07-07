import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

export const coldStorageIotMonitoringSystemCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "cold-storage-iot-monitoring-system",
    slug: "cold-storage-iot-monitoring-system",
    title: "Cold Storage IoT Monitoring System",
    cardImageZoom: 1.2,
    subtitle: "Full Product Development — Concept to Volume Production",
    metaTags: [
      "Domain: Cold Chain Logistics",
      "Industry: Refrigeration & IoT",
      "Market: India",
    ],
    ribbonStats: [
      {
        value: "6,000+ Units",
        label: "Manufactured & Shipped",
      },
      {
        value: "DVT / PVT",
        label: "Completed",
      },
      {
        value: "WPC & RoHS",
        label: "Certified",
      },
      {
        value: "AWS IoT",
        label: "Cloud Connected",
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
      "/case-studies/BLUECOLD/5.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/cold_storage_iot/1.png",
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/cold_storage_iot/cold_storage_v2.png",
      "/case-studies/BLUECOLD/BLUE_COLD_REV-01_BRD_03_TOP.svg",
      "/case-studies/BLUECOLD/BLUE_COLD_REV-01_BRD_03_TP.svg",
    ],
    overview: [
      "An Indian cold chain technology company approached Qmax Systems to design and manufacture a fully connected IoT monitoring system for cold storage units — refrigerated trucks, warehouses, and walk-in cold rooms. The device needed to monitor multiple temperature and pressure zones in real time, transmit data securely to an AWS IoT cloud platform, and operate reliably during transport across harsh environmental conditions including extreme cold and road vibration.",
      "Qmax Systems delivered the complete product from the ground up: hardware architecture, PCB design, embedded firmware, cloud application, industrial design, rugged enclosure, commissioning utilities, and mass production of 6,000 units — all manufactured and shipped within India. The device carries WPC certification (India's equivalent of FCC) and is fully RoHS compliant.",
    ],
    brief: [
      "The Cold Storage IoT Monitoring System (model: QMCCS1-01) is a LiPo battery-operated and DC-powered connected device housed in a rugged, compact aluminium enclosure. It continuously monitors up to four NTC temperature sensors and two pressure sensors, providing a complete picture of cold chain environmental conditions. Cellular (LTE/GSM), Wi-Fi, and Bluetooth connectivity ensure data reaches the cloud via the best available link, while GPS enables real-time asset tracking and RTC time synchronisation.",
      "Four relay outputs allow direct control of refrigeration equipment — compressors, fans, alarms — from the cloud or on-device logic. A buzzer provides local alerts. When connectivity is unavailable, the device stores timestamped sensor logs locally and performs a seamless, lossless data sync to AWS IoT once a link is restored. OTA firmware updates keep the fleet current without physical access. The product is designed and manufactured entirely in India.",
    ],
    scopeIntro:
      "Qmax Systems executed the entire product lifecycle under one roof, from the first architectural sketch to palletized shipments bound for North America:",
    scopeItems: [
      "Full product architecture definition: connectivity strategy, power topology, sensor interface design, and cloud integration framework",
      "Hardware design: schematic capture, BOM development, power management (LiPo charge/discharge, DC input, battery monitoring, protection), and relay output driver design",
      "PCB design and layout: 2-layer controlled impedance board with RF-conscious placement for LTE, Wi-Fi, BLE, and GPS modules",
      "Embedded firmware development: FreeRTOS-based application for sensor acquisition, relay control, cellular/Wi-Fi/BLE stack integration, GPS parsing, and secure MQTT to AWS IoT",
      "Local data logging and seamless cloud sync: circular buffer on flash memory with automatic replay on connectivity restoration, ensuring zero data loss",
      "OTA firmware update client with rollback and remote diagnostics capability",
      "Cloud application development: AWS IoT Core integration, real-time dashboard, alerts and notifications, device fleet management, and data analytics",
      "Commissioning and remote diagnostics utilities: factory test tool, field provisioning utility, and remote diagnostic interface",
      "Industrial design and mechanical design: rugged aluminium enclosure engineered to IP-rated ingress protection, vibration resistance per transport standards, and operation down to -40°C",
      "DVT (Design Validation Testing) and PVT (Production Validation Testing) completion",
      "WPC certification (India wireless product certification), RoHS compliance verification",
      "Mass production of 6,000 units including test jig development, production test firmware, and delivery within India",
      "Warranty support and post-production field issue resolution",
    ],
    challenges: [
      {
        challenge: "Multi-radio RF coexistence on a compact board",
        resolution:
          "LTE, Wi-Fi 2.4/5 GHz, BLE, and GPS all operating simultaneously required careful RF partitioning, antenna placement, and trace routing to avoid desensitisation. Each radio was isolated to its own PCB zone with keep-out areas, and antenna placement was validated through conducted and radiated measurements.",
      },
      {
        challenge: "Reliable operation in extreme cold (-40°C)",
        resolution:
          "LiPo battery chemistry degrades severely at sub-zero temperatures; component selection was constrained to AEC-Q100 / industrial-grade parts rated for the full operating range. Battery charge management firmware was tuned to prevent charging below 0°C and to compensate for capacity reduction in cold environments.",
      },
      {
        challenge: "Vibration resistance during refrigerated transport",
        resolution:
          "Connector retention, component solder joint reliability, and PCB mounting were all engineered for road vibration profiles. All connectors use locking mechanisms; heavy components are adhesive-bonded; the PCB is mounted on vibration-dampening standoffs within the enclosure.",
      },
      {
        challenge: "Zero data loss across intermittent connectivity",
        resolution:
          "Cold chain vehicles transit tunnels, remote routes, and areas with poor cellular coverage. A flash-backed circular log stores sensor records with GPS timestamps at 1-minute resolution; a state machine manages seamless re-sync to AWS IoT on link restoration without duplicates or gaps.",
      },
      {
        challenge: "Accurate RTC in a GPS-synced system",
        resolution:
          "Deriving a reliable real-time clock from GPS (which has signal outages) required a temperature-compensated RTC IC with battery backup, disciplined by GPS 1PPS when a fix is available and free-running with drift compensation during GPS outages.",
      },
      {
        challenge: "Secure cloud communication and AWS IoT integration",
        resolution:
          "All MQTT traffic to AWS IoT Core is protected with TLS 1.2 / X.509 mutual authentication. Device certificates are provisioned at the factory using AWS IoT Fleet Provisioning; a unique certificate and private key are written to secure storage on each unit during production test.",
      },
      {
        challenge: "LiPo battery safety and charging in an unattended device",
        resolution:
          "The device operates unattended in refrigerated environments; a battery protection IC monitors cell voltage, temperature, and current for over-voltage, under-voltage, over-current, and short-circuit conditions, with independent hardware cut-off independent of the MCU.",
      },
    ],
    hardwareComponents: [
      {
        title: "ESP32-WROOM-32 (or equivalent)",
        description:
          "Dual-core 240 MHz Wi-Fi + BLE SoC serving as the main application processor; handles sensor acquisition, relay control, local logic, Wi-Fi/BLE stack, and OTA update client",
      },
      {
        title: "LTE / GSM Cellular Module (MC60 / SIM7600 class)",
        description:
          "Quad-band GSM/GPRS or LTE Cat-M1/NB-IoT module providing primary wide-area connectivity for AWS IoT MQTT, SMS alerts, and remote diagnostics",
      },
      {
        title: "GPS Module",
        description:
          "NMEA-outputting GPS receiver for real-time asset location tracking, 1PPS RTC disciplining, and geo-fencing support",
      },
      {
        title: "NTC Temperature Sensor Interface (×4)",
        description:
          "Precision signal conditioning for up to four NTC thermistor channels with 16-bit ADC; provides ±0.2°C accuracy across the -40°C to +85°C operating range",
      },
      {
        title: "Pressure Sensor Interface (×2)",
        description:
          "Dual analogue pressure sensor inputs (AGND/VCC/PRES) for refrigerant pressure monitoring with transient protection",
      },
      {
        title: "4 × Relay Outputs",
        description:
          "Electromechanical relays rated for inductive loads (compressor contactors, fan motors); opto-isolated drive circuits protect the MCU from back-EMF",
      },
      {
        title: "LiPo Battery Charger + Fuel Gauge",
        description:
          "Integrated charge management IC (MCP73xx class) with CC/CV profile, temperature-gated charging below 0°C; fuel gauge IC for state-of-charge reporting to cloud",
      },
      {
        title: "Battery Protection IC",
        description:
          "Hardware-level OVP, UVP, OCP, and short-circuit protection independent of firmware, with low-battery alert output",
      },
      {
        title: "TCXO / RTC (DS3231 class)",
        description:
          "Temperature-compensated real-time clock with battery backup; disciplined by GPS 1PPS when signal is available, providing ±2 ppm accuracy in GPS-denied conditions",
      },
      {
        title: "SPI NOR Flash",
        description:
          "External serial flash for local sensor data logging; circular buffer stores ≥30 days of 1-minute records in the absence of connectivity",
      },
      {
        title: "Buzzer",
        description:
          "Piezoelectric buzzer for local audible alerts on temperature excursion, connectivity loss, or relay trip events",
      },
      {
        title: "SIM Card Socket",
        description:
          "Push-push nano-SIM holder with ESD protection for cellular module SIM",
      },
    ],
    interfaces: [
      {
        title: "LTE / GSM (Cellular)",
        description:
          "Primary WAN connectivity over Cat-M1, NB-IoT, or GPRS for AWS IoT MQTT, remote diagnostics, and OTA; SIM card provisioned per-unit at factory",
      },
      {
        title: "Wi-Fi 2.4 GHz (802.11 b/g/n)",
        description:
          "Secondary WAN / local network connectivity; used for high-bandwidth OTA downloads and configuration when in range of a known AP",
      },
      {
        title: "Bluetooth 5 / BLE",
        description:
          "Short-range commissioning, local configuration via smartphone app, and proximity-based alerts; also supports BLE beacons for zone identification",
      },
      {
        title: "GPS / GNSS",
        description:
          "Satellite positioning for asset tracking and map display; 1PPS output for RTC synchronisation",
      },
      {
        title: "MQTT over TLS 1.2 (AWS IoT Core)",
        description:
          "All telemetry, alerts, and commands exchanged over MQTT with X.509 mutual authentication; topic structure follows AWS IoT Shadow model for device state management",
      },
      {
        title: "UART",
        description:
          "Internal communication between MCU and cellular module (AT commands), GPS module (NMEA), and debug port",
      },
      {
        title: "SPI",
        description:
          "Interface to SPI NOR flash for data logging and to GSM module for high-speed data paths",
      },
      {
        title: "I2C",
        description:
          "Bus for RTC, battery fuel gauge, I/O expander, and auxiliary sensor interfaces",
      },
      {
        title: "ADC (12-/16-bit)",
        description:
          "Multichannel ADC for NTC temperature sensor acquisition, pressure sensor inputs, and battery voltage / current monitoring",
      },
      {
        title: "GPIO / Relay Control",
        description:
          "Opto-isolated GPIO outputs driving 4 × relay coils; digital inputs for door sensors, tamper detection, and external alarms",
      },
    ],
    firmwareItems: [
      {
        title: "FreeRTOS-Based Firmware Architecture",
        description:
          "FreeRTOS-based firmware architecture with dedicated tasks for each subsystem: sensor acquisition task, communication manager task, relay control task, data logger task, GPS parser task, and OTA update task — each with independent stack and priority assignment",
      },
      {
        title: "FreeRTOS Inter-Task Communication",
        description:
          "Queue-based message passing between sensor and communication tasks; event group flags for connectivity state synchronisation; mutex-protected access to shared SPI flash and I²C bus resources",
      },
      {
        title: "FreeRTOS Task Watchdog",
        description:
          "Hardware watchdog fed only when all critical tasks check in within their deadline; any task stall triggers a supervised reboot with fault log written to flash before reset",
      },
      {
        title: "FreeRTOS Power Management",
        description:
          "Tickless idle mode with dynamic clock gating during inter-sample periods; deep sleep scheduling during known connectivity blackout windows to extend LiPo run-time",
      },
      {
        title: "Multi-Radio Connectivity Manager",
        description:
          "Automatic failover between LTE and Wi-Fi for MQTT uplink; exponential back-off reconnect strategy with local buffering during outages; connection quality metrics reported to cloud",
      },
      {
        title: "Sensor Acquisition Engine",
        description:
          "1-minute polling of all 4 NTC and 2 pressure channels with per-channel calibration coefficients stored in NVS; min/max/average/std-dev statistics computed per interval and packed into CBOR payload",
      },
      {
        title: "Flash Data Logger",
        description:
          "Circular buffer on SPI NOR flash storing timestamped CBOR records; deduplication and ordered replay to AWS IoT on link restoration, guaranteeing zero data loss across connectivity gaps of up to 30 days",
      },
      {
        title: "AWS IoT Core Integration",
        description:
          "MQTT client with X.509 mutual TLS 1.2, Device Shadow for remote relay control and threshold configuration, and IoT Rules Engine triggers for real-time alerting via SNS/Lambda",
      },
      {
        title: "GPS NMEA Parser & RTC Disciplining",
        description:
          "1PPS-based hardware RTC synchronisation; Kalman-filtered position for asset tracking; RTC drift compensation algorithm during GPS-denied periods",
      },
      {
        title: "OTA Firmware Update Client",
        description:
          "Chunked HTTPS download with SHA-256 integrity verification, dual-partition (A/B) scheme, and automatic rollback on three consecutive boot failures",
      },
      {
        title: "Cloud Dashboard",
        description:
          "Real-time sensor visualisation, temperature excursion alerts with configurable thresholds, relay status and remote control, live asset map, historical data export (CSV/PDF), and fleet management for the full 6,000-device deployment",
      },
      {
        title: "Commissioning Utility",
        description:
          "Factory test tool running on Windows PC that exercises all I/O channels, verifies sensor calibration, programs AWS IoT device certificate, and logs serial number and test results to production database",
      },
      {
        title: "Remote Diagnostics Interface",
        description:
          "Over-the-air access to device event logs, raw sensor values, network signal quality (RSSI, RSRP), battery SoC, task CPU utilisation, and relay state — enabling field issues to be diagnosed without physical access",
      },
      {
        title: "BLE Companion App (Android / iOS)",
        description:
          "Smartphone-based provisioning of Wi-Fi credentials, cellular APN, alert thresholds, and relay schedules; also displays live sensor readings and device health over BLE without needing cloud connectivity",
      },
    ],
    specs: [
      {
        key: "Project Title",
        value: "Cold Storage IoT Monitoring System",
      },
      {
        key: "Product Model",
        value: "QMCCS1-01",
      },
      {
        key: "Domain / Industry",
        value: "Cold Chain Logistics / Refrigeration & IoT",
      },
      {
        key: "Application",
        value:
          "Multi-zone temperature & pressure monitoring, relay control, GPS tracking, cloud connectivity",
      },
      {
        key: "Main MCU / SoC",
        value: "ESP32-WROOM-32UE (Dual-core 240 MHz, Wi-Fi 2.4 GHz, BLE 5.0)",
      },
      {
        key: "Cellular Module",
        value: "LTE Cat-M1 / NB-IoT / GSM GPRS (SIM card, WPC certified)",
      },
      {
        key: "GPS Module",
        value: "u-blox or equivalent NMEA GNSS receiver with 1PPS",
      },
      {
        key: "Temperature Inputs",
        value: "4 × NTC thermistor channels, ±0.2°C accuracy, −40°C to +85°C",
      },
      {
        key: "Pressure Inputs",
        value: "2 × analogue pressure sensor channels (AGND/VCC/PRES)",
      },
      {
        key: "Relay Outputs",
        value: "4 × SPDT relay, opto-isolated, inductive load rated",
      },
      {
        key: "Connectivity",
        value: "LTE/GSM + Wi-Fi 2.4 GHz (802.11 b/g/n) + BLE 5.0 + GPS",
      },
      {
        key: "Cloud Platform",
        value: "AWS IoT Core (MQTT, TLS 1.2, X.509, Device Shadow)",
      },
      {
        key: "Power",
        value:
          "LiPo battery (rechargeable) + DC input; temperature-gated charging",
      },
      {
        key: "Battery Safety",
        value:
          "Hardware OVP, UVP, OCP, short-circuit protection; fuel gauge reporting",
      },
      {
        key: "Local Storage",
        value: "SPI NOR Flash; ≥30 days of 1-minute sensor records offline",
      },
      {
        key: "RTC",
        value: "TCXO-compensated RTC; GPS 1PPS disciplined; battery backup",
      },
      {
        key: "PCB",
        value: "2-layer, controlled impedance, RF-optimised layout",
      },
      {
        key: "Enclosure",
        value:
          "Rugged aluminium, IP-rated, vibration resistant, −40°C to +70°C operating",
      },
      {
        key: "Certifications",
        value: "WPC (India wireless), RoHS compliant",
      },
      {
        key: "OTA",
        value:
          "Chunked HTTPS with SHA-256 verification, A/B partition, auto rollback",
      },
      {
        key: "Production Volume",
        value: "6,000 units manufactured and shipped within India",
      },
      {
        key: "Scope",
        value:
          "Architecture, HW, FW, Cloud App, Industrial Design, Mechanical, Mass Production, Warranty Support",
      },
    ],
    summary: [
      "The Cold Storage IoT Monitoring System demonstrates Qmax Systems' end-to-end product development capability across the full hardware-firmware-cloud stack. The project demanded simultaneous expertise in multi-radio RF design, extreme cold hardware engineering, LiPo power systems, real-time embedded firmware, secure AWS IoT integration, and high-volume Indian manufacturing — all delivered under one roof by the Qmax team in Poonamallee, Chennai.",
      "With 6,000 units manufactured and deployed across cold chain operations in India, the product stands as a strong reference for Qmax's concept-to-production methodology in the Industrial IoT segment. DVT and PVT were completed to schedule, WPC and RoHS certifications were achieved, and the cloud platform now manages the entire deployed fleet with real-time visibility and remote control.",
      "The same full-stack capability — architecture, PCB design, firmware, cloud application, industrial design, certification, and mass production — is available to customers bringing new connected product ideas to market.",
    ],
    listingSummary:
      "Full product development from concept to volume production — cold storage IoT monitoring system with AWS cloud connectivity for Indian cold chain deployment.",
    metadata: {
      title: "Cold Storage IoT Monitoring System | Case Study",
      description:
        "Full product development case study — cold storage IoT monitoring system with multi-radio connectivity, AWS IoT integration, and 6,000-unit production.",
    },
  };
