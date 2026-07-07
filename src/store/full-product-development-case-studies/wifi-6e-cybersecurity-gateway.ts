import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const wifi6eCybersecurityGatewayImages = [
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/marma/marma_qmax_ui.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/marma/WH_1_Front.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/marma/Final_2_Picsart.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/wi-fi_66e_router-_marma/1.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/wi-fi_66e_router-_marma/2.png",
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/wi-fi_66e_router-_marma/3.png",
];

export const wifi6eCybersecurityGatewayCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "wifi-6e-cybersecurity-gateway",
    slug: "wifi-6e-cybersecurity-gateway",
    title: "WiFi 6E Triband Cybersecurity Gateway",
    cardImageZoom: 1.2,
    subtitle: "Full Product Development — Concept to Volume Production",
    metaTags: [
      "Domain: Networking",
      "Industry: Cybersecurity",
      "Market: North America",
    ],
    ribbonStats: [
      {
        value: "1,000s of Units",
        label: "Shipped to USA",
      },
      {
        value: "2 Years",
        label: "Field proven",
      },
      {
        value: "~0 Failures",
        label: "In the field",
      },
      {
        value: "FCC Certified",
        label: "RoHS Compliant",
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
    images: wifi6eCybersecurityGatewayImages,
    overview: [
      "A US-based cybersecurity company approached Qmax Systems to design and manufacture a WiFi 6E Triband Cybersecurity Gateway for deployment across small and medium-sized enterprises (SMEs) in North America. The product needed to combine a high-performance tri-band WiFi 6E router with an AI-powered network security stack — delivering enterprise-grade threat protection in a compact, easy-to-deploy appliance managed through iOS and Android mobile apps and a cloud-based dashboard.",
      "Qmax Systems delivered the complete product from concept to volume production: hardware design, OpenWRT firmware development, Android and iOS mobile app development, cloud management platform, industrial design, FCC certification, and fulfilment — packaging thousands of units and shipping them directly to the customer's US distribution point. The product has been running in the field for nearly two years with zero reported hardware failures.",
    ],
    brief: [
      "The WiFi 6E Triband Cybersecurity Gateway is a compact, wall-mountable security appliance built around the MediaTek MT7986AV quad-core SoC. It operates simultaneously on three WiFi bands — 2.4 GHz, 5.1 GHz, and 5.8 GHz — with 4×4 MU-MIMO on each band, driven by dedicated MediaTek radio chips, and housed entirely within the enclosure using a 12-element internal antenna array with no protruding external antennas.",
      "The unit runs a custom OpenWRT firmware stack enhanced with a multi-layer AI-powered cybersecurity engine: DNS-level threat blocking, IP/domain/URL reputation filtering, network attack prevention, IoT device monitoring, and scam detection — all processed on-device without packet payload inspection. Onboard 4 GB DDR4 and 32 GB eMMC provide the memory footprint for real-time threat intelligence databases. It ships with a UL-certified US power adapter, packed in a custom carton ready for end-user installation, with OTA firmware and security-policy updates fully operational from day one.",
    ],
    scopeIntro:
      "Qmax Systems executed the entire product lifecycle under one roof, from the first architectural sketch to palletized shipments bound for North America:",
    scopeItems: [
      "Hardware Architecture — full schematic design and BOM development centred on the MediaTek MT7986AV SoC and WiFi radio ecosystem",
      "PCB Design — 6-layer impedance-controlled PCB layout covering RF, high-speed DDR4/PCIe, power, and analog design domains",
      "RF Engineering — 12-antenna tri-band internal array design, antenna placement optimisation, RF isolation between bands, and antenna matching network design",
      "Prototype & DVT — prototype builds, bring-up, design iterations through DVT (Design Validation Testing) and PVT (Production Validation Testing)",
      "Firmware (OpenWRT) — U-Boot bootloader porting, Linux kernel and BSP bring-up, WiFi driver integration, cybersecurity stack integration, and throughput optimisation on MT7986AV",
      "Android Application — native Kotlin app for device setup, real-time security monitoring, threat notifications, parental controls, and OTA management",
      "iOS Application — native Swift/SwiftUI app with full feature parity to the Android app, passing Apple review on first submission",
      "Cloud Management Dashboard — web-based fleet management portal with centralised OTA update delivery, threat analytics, and device health monitoring",
      "WiFi Calibration & Testing — DVT WiFi calibration achieving rated throughput on all three bands; FCC Part 15B certification passed on first regulatory submission; full RoHS compliance",
      "Manufacturing & Logistics — PVT, mass manufacturing of thousands of units, UL-certified power adapter sourcing, custom packaging design, and cross-border fulfilment to North America",
    ],
    challenges: [
      {
        challenge: "12-antenna internal array in a sealed enclosure",
        resolution:
          "Packing three 4×4 MU-MIMO antenna sets (12 antennas total) inside a compact, antenna-less enclosure required custom antenna layout engineering and RF isolation techniques to prevent inter-band interference while maintaining rated throughput on all three bands",
      },
      {
        challenge: "Simultaneous tri-band WiFi 6E throughput",
        resolution:
          "Achieving maximum 802.11ax throughput on 2.4 GHz, 5.1 GHz, and 5.8 GHz simultaneously under real-world multi-user loads demanded careful radio coexistence tuning and OpenWRT scheduler optimisation",
      },
      {
        challenge: "SI/PI/EMI on a dense BGA PCB",
        resolution:
          "Routing DDR4 (high-speed memory), PCIe Gen 2, Gigabit Ethernet RGMII, and three RF radio interfaces on a compact 6-layer PCB required meticulous impedance control, layer stack-up planning, and SI/PI analysis",
      },
      {
        challenge: "Fanless thermal management in plastic enclosure",
        resolution:
          "The MT7986AV under full WiFi load and security processing generates significant heat; the enclosure and PCB were engineered with thermal via arrays and airflow paths to sustain continuous operation without active cooling",
      },
      {
        challenge:
          "Concurrent security processing without throughput degradation",
        resolution:
          "Running DNS blocking, IP/domain reputation filtering, AI-powered threat detection, and firewall rules simultaneously with high-throughput WiFi routing required hardware NAT offload, kernel flow offload, and multi-core packet-processing tuning",
      },
      {
        challenge: "Onboard threat-intelligence database management",
        resolution:
          "Storing, updating, and hot-reloading large blocklists (IPs, domains, URLs) within cost-optimised 32 GB eMMC without service interruption required atomic staging and reload mechanisms in firmware",
      },
      {
        challenge: "Dual-platform mobile app with shared backend",
        resolution:
          "Developing and maintaining feature-parity Android and iOS apps, each meeting their respective platform review requirements, while sharing a common REST API backend",
      },
      {
        challenge: "Cryptographically signed OTA at scale",
        resolution:
          "Implementing a reliable, RSA-signed OTA update mechanism for firmware and security-policy updates across thousands of deployed field units, with staged rollout and automatic rollback on failure",
      },
      {
        challenge: "FCC Part 15B first-submission pass — tri-band device",
        resolution:
          "Achieving FCC certification on the first submission for a device with 12 internal antennas across three simultaneous RF bands required precise antenna placement, controlled impedance routing, and careful EMC management",
      },
      {
        challenge: "Mass manufacturing and cross-border logistics",
        resolution:
          "Producing thousands of units on schedule including custom packaging, UL-certified power adapters, and cross-border fulfilment to North America within cost and time targets",
      },
    ],
    hardwareComponents: [
      {
        title: "MediaTek MT7986AV",
        description:
          "Quad-core ARM Cortex-A53 main SoC with integrated Network Processing Unit (NPU), hardware NAT offload, and the processing headroom to run the full cybersecurity stack concurrently with multi-band WiFi routing",
      },
      {
        title: "MediaTek MT7531AE",
        description:
          "5-port Gigabit Ethernet switch providing WAN and LAN ports via RGMII interface to the main SoC",
      },
      {
        title: "MediaTek MT7976AN",
        description:
          "WiFi 6E 5.1 GHz band 4×4 MU-MIMO radio chip connected via PCIe",
      },
      {
        title: "MediaTek MT7915AN",
        description:
          "WiFi 6 5.8 GHz band 4×4 MU-MIMO radio chip connected via PCIe",
      },
      {
        title: "MediaTek MT7976GN",
        description:
          "WiFi 6 2.4 GHz band 4×4 MU-MIMO radio chip connected via PCIe",
      },
      {
        title: "4 GB DDR4 DRAM",
        description:
          "High-speed system memory providing the bandwidth required for simultaneous WiFi packet processing, threat-intelligence lookups, and OpenWRT workloads",
      },
      {
        title: "32 GB eMMC Flash",
        description:
          "Embedded storage (HS400 mode) for OS, firmware, blocklists, security logs, and OTA staging with A/B partition support",
      },
      {
        title: "USB 3.0 Controller",
        description:
          "SuperSpeed host port for external storage or diagnostic interface",
      },
      {
        title: "12-Element Internal Antenna Array",
        description:
          "Custom-designed tri-band antenna set for 4×4 MU-MIMO on all three bands, fully enclosed inside the sealed plastic enclosure with no external protrusions",
      },
      {
        title: "UL-Certified 12 V DC Power Supply",
        description:
          "UL-listed power adapter selected and qualified for US/North American market compliance and bundled with every unit",
      },
    ],
    interfaces: [
      {
        title: "Gigabit Ethernet (WAN + LAN)",
        description:
          "Via RGMII interface to MT7531AE 5-port Gigabit switch; supports 10/100/1000 Mbps on all ports",
      },
      {
        title: "Wi-Fi 6E 802.11ax — Triband",
        description:
          "Simultaneous 4×4 MU-MIMO on 2.4 GHz, 5.1 GHz, and 5.8 GHz; OFDMA; BSS Colouring; WPA3; Target Wake Time (TWT)",
      },
      {
        title: "PCIe Gen 2",
        description:
          "Internal interconnect between the MT7986AV SoC and the three WiFi radio modules",
      },
      {
        title: "DDR4",
        description:
          "High-speed 64-bit wide memory interface between MT7986AV and system RAM",
      },
      {
        title: "eMMC (HS400)",
        description:
          "Embedded storage interface between SoC and onboard flash for OS and data",
      },
      {
        title: "USB 3.0",
        description:
          "SuperSpeed host port for external storage attachment or diagnostic console",
      },
      {
        title: "SPI",
        description: "Bootloader NOR flash and peripheral configuration",
      },
      {
        title: "I2C",
        description:
          "Power management IC (PMIC) control and peripheral sensor communication",
      },
      {
        title: "UART",
        description:
          "Serial debug console for firmware development, bring-up, and factory test",
      },
      {
        title: "DC Power Jack",
        description:
          "12 V DC input; UL-certified power adapter supplied for the US market",
      },
    ],
    firmwareItems: [
      {
        title: "OpenWRT BSP & Platform Bring-up",
        description:
          "U-Boot bootloader ported to MT7986AV; Linux kernel configured and brought up with custom device tree covering PCIe (WiFi radios), RGMII (Ethernet switch), USB 3.0, eMMC, SPI, I2C, UART, and GPIO. PMIC sequencing validated.",
      },
      {
        title: "WiFi Driver Integration & RF Calibration",
        description:
          "WiFi drivers integrated for all three bands (MT7976AN, MT7915AN, MT7976GN); per-band RF calibration performed to achieve rated 802.11ax throughput; radio coexistence tuned for simultaneous tri-band operation under full load. FCC Part 15B passed on first regulatory submission.",
      },
      {
        title: "OpenWRT Performance & Throughput Optimisation",
        description:
          "Hardware NAT offload and kernel flow offload enabled; multi-core packet-processing affinity tuned on MT7986AV to sustain maximum WiFi throughput under high concurrent-user loads while running the full security stack — with no measurable latency increase.",
      },
      {
        title: "Security Stack — Multi-Layer Threat Detection",
        description:
          "AI-powered cloud threat intelligence integrated with on-device enforcement across multiple protection layers: DNS-level phishing and malware blocking, IP/domain/URL reputation filtering, network attack prevention (DDoS/brute-force), IoT device traffic monitoring, identity theft detection, and scam detection — all without packet payload inspection.",
      },
      {
        title: "DNS Security, URL Filtering & Firewall Engine",
        description:
          "On-device DNS resolver integrated with continuously updated cloud blocklists; malicious domain queries blocked at resolution time before any connection is established. Domain and IP reputation-based URL blocking enforced at network level. Stateful firewall rules engine with zone-based policy management, connection tracking, and geo-IP blocking.",
      },
      {
        title: "Threat-Intelligence Database & Secure OTA",
        description:
          "Automated pull, cryptographic verification, staging, and atomic hot-reload of IP/domain/URL blocklists to eMMC without service interruption. RSA-signed OTA update engine for firmware and security-policy packages with staged rollout, delta update support, and automatic rollback on failure.",
      },
      {
        title: "Factory Test Firmware",
        description:
          "Automated production-line self-test application written to validate all interfaces: all Ethernet ports, WiFi RF on all three bands, USB enumeration, eMMC read/write, power-rail verification, LED, and button GPIO. Custom test fixture built for rapid in-line testing during manufacture.",
      },
      {
        title: "Android Application — Security Dashboard & Controls",
        description:
          "Native Android app (Kotlin): guided QR-code/mDNS device setup, real-time threat and device dashboard, FCM push notifications for threat alerts and OTA events, parental controls with per-device scheduling, remote firewall rule management, biometric login, and in-app network speed test.",
      },
      {
        title: "iOS Application — Native App with Feature Parity",
        description:
          "Native iOS app (Swift/SwiftUI) with full Android feature parity: guided setup, encrypted REST API dashboard sync, APNs push notifications, iOS Screen Time integration for parental controls, Touch ID/Face ID authentication, and pre-built security policy templates. Passed Apple App Store review on first submission.",
      },
      {
        title: "Cloud Management Dashboard & Fleet OTA",
        description:
          "Web-based portal for IT administrators and MSPs: centralised OTA update scheduling and tracking across the fleet, aggregated threat analytics with trend reporting, per-unit device health monitoring, multi-tenant user and role management (SSO-ready), and REST API for webhook alerting and future SIEM/SOC integrations.",
      },
    ],
    specs: [
      {
        key: "SoC",
        value:
          "MediaTek MT7986AV — Quad-core ARM Cortex-A53 with integrated Network Processing Unit (NPU) and hardware NAT offload",
      },
      {
        key: "WiFi Radios",
        value:
          "MT7976AN (5.1 GHz, 4×4), MT7915AN (5.8 GHz, 4×4), MT7976GN (2.4 GHz, 4×4) — 12-element internal antenna array",
      },
      {
        key: "WiFi Standard",
        value: "Wi-Fi 6E 802.11ax Triband; MU-MIMO; OFDMA; WPA3; BSS Colouring",
      },
      {
        key: "Memory",
        value: "4 GB DDR4 DRAM; 32 GB eMMC Flash (HS400, A/B OTA partition)",
      },
      {
        key: "PCB",
        value:
          "6-Layer, impedance-controlled; controlled impedance routing for RF and high-speed interfaces",
      },
      {
        key: "Ethernet",
        value:
          "Gigabit WAN + LAN via MT7531AE 5-port switch (RGMII); 10/100/1000 Mbps",
      },
      {
        key: "Interfaces",
        value: "USB 3.0 ×1, PCIe Gen 2, SPI, I2C, UART, DC Power Jack (12 V)",
      },
      {
        key: "Firmware / OS",
        value:
          "OpenWRT (custom BSP on MT7986AV) with AI-powered multi-layer cybersecurity stack",
      },
      {
        key: "Mobile Apps",
        value:
          "Android (Kotlin), iOS (Swift/SwiftUI) — device setup, real-time security dashboard, parental controls, OTA management",
      },
      {
        key: "Cloud Platform",
        value:
          "Web-based fleet management dashboard; centralised OTA; threat analytics; multi-tenant; REST API",
      },
      {
        key: "Enclosure",
        value:
          "Custom plastic enclosure; compact form factor; no external antennas; 12-antenna internal array",
      },
      {
        key: "Certifications",
        value:
          "FCC Part 15B (first-submission pass); RoHS compliant; UL-certified power adapter (US market)",
      },
      {
        key: "Power",
        value:
          "12 V DC; UL-certified power adapter supplied for North American market",
      },
    ],
    summary: [
      "The WiFi 6E Triband Cybersecurity Gateway demonstrates Qmax Systems' end-to-end product development capability — from an architecturally demanding challenge (12 internal antennas across three simultaneous RF bands in a sealed, compact enclosure) through to volume-manufactured units running in SME networks across North America. The project required deep simultaneous expertise across hardware design, RF engineering, OpenWRT firmware development, mobile application engineering (Android and iOS), cloud platform development, regulatory certification, and manufacturing operations.",
      "With thousands of units deployed and zero field failures over nearly two years of continuous operation, the product stands as a flagship reference for Qmax's concept-to-production methodology. The WiFi calibration hitting rated throughput on all three bands and FCC Part 15B certification achieved on the first submission underscore the rigour of Qmax's engineering and testing processes.",
      "The same full-stack capability — hardware architecture, PCB design, RF engineering, OpenWRT firmware, cross-platform mobile apps, cloud platforms, industrial design, certification, and manufacturing — is available to customers bringing connected-security and networking products to market.",
    ],
    listingSummary:
      "Full product development from concept to volume production — WiFi 6E tri-band cybersecurity gateway for North American SME deployment.",
    metadata: {
      title: "WiFi 6E Triband Cybersecurity Gateway | Case Study",
      description:
        "Full product development case study — WiFi 6E tri-band cybersecurity gateway with OpenWRT firmware, mobile apps, and cloud management.",
    },
  };
