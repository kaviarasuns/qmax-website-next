import { embeddedCaseStudiesData } from "@/store/embedded-case-studies";
import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const outdoorWifi6AccessPointImages =
  embeddedCaseStudiesData.find((study) => study.id === "wifi6-triband-router")
    ?.images ?? [];

export const outdoorWifi6AccessPointCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "outdoor-wifi-6-access-point",
    slug: "outdoor-wifi-6-access-point",
    section: "embedded",
    title: "Outdoor Wi-Fi 6 Access Point",
    subtitle: "Full Product Development — Concept to DVT",
    metaTags: [
      "Domain: Networking",
      "Industry: Smart City / Public Wi-Fi",
      "Market: North America",
    ],
    ribbonStats: [
      {
        value: "Concept to DVT",
        label: "Qmax Scope",
      },
      {
        value: "Tri-Band Wi-Fi 6",
        label: "802.11ax — 12 Antennas",
      },
      {
        value: "FCC Certified",
        label: "First Submission",
      },
      {
        value: "OpenWRT",
        label: "Full BSP & Drivers",
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
    images: outdoorWifi6AccessPointImages,
    cardImageIndex: 4,
    overview: [
      "A US-based networking company brought Qmax Systems a product concept and high-level architecture for a professional-grade outdoor Wi-Fi 6 (802.11ax) Access Point — intended for deployment in public spaces such as smart city poles, campuses, stadiums, and transit hubs across North America. The product concept called for enterprise-class wireless performance delivered to the general public while surviving harsh outdoor environments without a fan or active cooling.",
      "Qmax Systems executed the complete hardware design engagement from concept to DVT: hardware architecture refinement, schematic design, PCB layout, RF engineering, OpenWRT firmware development, hardware bringup, Wi-Fi calibration, DVT builds, and FCC certification support. The product is built around the Qualcomm IPQ8078 (Hawkeye) SoC. Volume manufacturing is handled by the customer.",
    ],
    brief: [
      "The product is a fanless, compact outdoor Wi-Fi 6 Access Point built around the Qualcomm IPQ8078 (Hawkeye) quad-core SoC. It delivers tri-band 802.11ax simultaneously — 4×4 MIMO on 2.4 GHz, 4×4 on 5.1 GHz, and 4×4 on 5.8 GHz — driven by three independent QCN5054/QCN5024 radio chains with 12 antennas. The primary backhaul options are LTE/5G cellular (PCIe modem with dual SIM) and 10G SFP+ fibre; Gigabit Ethernet via PoE is available as an optional backhaul path. A DOCSIS connector is present on the design as a customer-provided module interface.",
      "The device is designed to mount on street-light poles and city infrastructure. It is fully sealed for outdoor operation across extreme temperature ranges, with thermal design that sustains full performance without active cooling. Optional expansion enables an AI inference module or IP camera with PoE, four microphones for ambient sensing, BLE 4.1 for IoT provisioning, GPS for location and timing, and a TPM for hardware-rooted security. The product runs OpenWRT with a full suite of custom drivers for all peripherals and interfaces.",
    ],
    scopeIntro:
      "Qmax Systems executed the entire product lifecycle under one roof, from the first architectural sketch to palletized shipments bound for North America:",
    scopeItems: [
      "Hardware Architecture — detailed hardware architecture refinement based on customer concept; full schematic design and BOM development centred on the Qualcomm IPQ8078 Hawkeye SoC, PMP8078 PMIC, QCN5054/5024 Wi-Fi radios, and QCA8075 GbE PHY",
      "PCB Design — high-density, multi-layer impedance-controlled PCB layout integrating tri-band RF, high-speed DDR3, PCIe Gen 3, USB 3.0, and multiple power domains — with shielding cans on every RF section",
      "RF Engineering — tri-band 12-antenna system design for 4×4 MIMO per band, antenna placement strategy, co-existence planning for Wi-Fi + LTE/5G + BLE + GPS in a compact outdoor enclosure, FEM (PA/LNA) integration, and narrow-band filter placement",
      "Prototype & EVT/DVT Builds — prototype builds, hardware bringup, design validation through EVT (Engineering Validation Test) and DVT (Design Validation Test) cycles, and full functional qualification",
      "Firmware (OpenWRT) — U-Boot bootloader porting, Linux kernel and BSP bringup on IPQ8078, Wi-Fi driver integration for all three radio chains, LTE/5G modem driver, GPS/BLE/TPM driver development, and system-level throughput optimisation",
      "Wi-Fi Calibration — per-band RF calibration on all three 802.11ax radio chains to achieve rated MU-MIMO throughput; radio coexistence validation under simultaneous tri-band full-load conditions",
      "FCC Certification Support — pre-compliance EMC testing, PCB layout and shielding iterations, antenna pattern measurements, and regulatory submission support — FCC certification achieved",
      "DVT Test Firmware — automated DVT self-test firmware covering all interfaces: Wi-Fi RF on all three bands, Ethernet ports, LTE modem, GPS, BLE, USB, eMMC, power rails, LED, and GPIO — handed over to customer for production use",
      "Design Package Handover — complete design package delivered to customer for volume manufacturing: schematics, PCB Gerbers, BOM, test firmware, OpenWRT BSP, and RF calibration data",
      "Post-DVT Engineering Support — engineering support during customer's production bring-up phase covering yield issues, component alternatives, and firmware updates",
    ],
    challenges: [
      {
        challenge: "Fanless outdoor thermal management",
        resolution:
          "The IPQ8078 SoC and three Wi-Fi radio chains generate significant heat under full load; the PCB and mechanical enclosure were designed with thermal vias, copper pours, heat-spreader contact pads, and passive convection paths to sustain continuous rated performance across the full outdoor temperature range with zero active cooling",
      },
      {
        challenge: "Wireless co-existence in a compact enclosure",
        resolution:
          "Twelve antennas (Wi-Fi 2.4 GHz, 5.1 GHz, 5.8 GHz), LTE/5G, BLE, and GPS must co-exist in a small outdoor housing mounted on a street pole; careful frequency planning, physical separation, and narrow-band filtering were applied to prevent TX-to-RX desensitisation across all radios simultaneously",
      },
      {
        challenge: "Narrow-band filter strategy",
        resolution:
          "A high-power Wi-Fi TX antenna placed close to a sensitive GPS or LTE RX antenna can saturate the receive LNA; narrow-band filters and physical antenna placement strategy were used to maintain sensitivity across all receive paths",
      },
      {
        challenge: "PCB layout complexity",
        resolution:
          "A single board carries high-speed digital (DDR3, PCIe Gen 3, USB 3.0), three independent RF TX/RX paths with FEM control, multiple power domains, and low-level I/O — all while meeting Wi-Fi performance targets and passing FCC Part 15B",
      },
      {
        challenge: "EMC / FCC compliance with tri-band simultaneous RF",
        resolution:
          "Achieving FCC certification for a device with 12 antennas operating simultaneously across three 802.11ax bands, plus LTE/5G, required precise shielding-can placement, controlled impedance PCB routing, and iterative pre-compliance testing",
      },
      {
        challenge: "RF isolation between high-power TX and sensitive RX",
        resolution:
          "Shields were added to every RF section to contain interference and prevent cross-coupling between the Wi-Fi radios, the LTE module, GPS, and BLE — without compromising antenna radiation patterns",
      },
      {
        challenge: "Multiple backhaul options from a single hardware platform",
        resolution:
          "Supporting LTE/5G (PCIe modem), 10G SFP+ fibre, and optional PoE GbE from a single hardware design required careful PCIe lane allocation, power budgeting per backhaul option, and firmware abstraction for backhaul failover; the DOCSIS connector interfaces to a customer-supplied module",
      },
      {
        challenge: "Tri-band 802.11ax throughput under real-world load",
        resolution:
          "Achieving rated 4×4 MU-MIMO throughput on all three bands simultaneously under multi-user public Wi-Fi load required careful OpenWRT scheduler configuration, hardware NSS offload tuning, and per-band RF calibration",
      },
      {
        challenge: "Mechanical constraint: pole-mount form factor",
        resolution:
          "The device must be compact enough to mount on street-light infrastructure; every board dimension, connector placement, and antenna location was constrained by the mechanical envelope of an outdoor pole-mount enclosure",
      },
      {
        challenge: "Design-for-manufacturing handover",
        resolution:
          "The complete design package — schematics, PCB files, BOM, OpenWRT BSP, RF calibration data, and DVT test firmware — had to be structured and documented to a standard suitable for the customer to hand directly to a volume contract manufacturer in Asia",
      },
    ],
    hardwareComponents: [
      {
        title: "Qualcomm IPQ8078 (Hawkeye)",
        description:
          "Quad-core ARM Cortex-A53 SoC with integrated Wi-Fi 6 NSS offload engines, PCIe 3.0 ×3, USB 3.0, and full peripheral I/O — the central processing and networking engine of the platform",
      },
      {
        title: "Qualcomm PMP8078 PMIC",
        description:
          "Purpose-paired power management IC for the IPQ8078, providing all SoC supply rails, 19.2 MHz / 38.4 MHz reference clocks, and hardware reset sequencing",
      },
      {
        title: "QCN5054 × 2 (Wi-Fi 6 5 GHz radios)",
        description:
          "Two independent 5 GHz 4×4 MU-MIMO 802.11ax radio chips, each driving 4× FEMs at 152 MHz reference — covering the 5.1 GHz and 5.8 GHz bands",
      },
      {
        title: "QCN5024 (Wi-Fi 6 2.4 GHz radio)",
        description:
          "2.4 GHz 4×4 MU-MIMO 802.11ax radio chip driving 4× FEMs at 192 MHz reference — providing the 2.4 GHz band coverage",
      },
      {
        title: "Front-End Modules (FEMs) × 12",
        description:
          "TX/RX switching and PA/LNA enable on all three radio chains — one FEM per antenna — providing amplification and band-specific filtering for all 12 antenna elements",
      },
      {
        title: "QCA8075 GbE PHY",
        description:
          "5-port Gigabit Ethernet PHY providing two RJ45 ports (one with PoE 802.3at PSE at 48 VDC) and backbone connectivity to the SoC",
      },
      {
        title: "DDR3 SDRAM — 512 Mb × 2",
        description:
          "Dual DDR3-512Mb (x16 width each) providing 1 Gb total system memory on a 32-bit bus to the IPQ8078",
      },
      {
        title: "NOR Flash 256 Mb + eMMC 8 GB",
        description:
          "SPI NOR Flash for bootloader and factory firmware; 8 GB eMMC for OS, OpenWRT, drivers, and application storage",
      },
      {
        title: "LTE/5G PCIe Modem + Dual SIM",
        description:
          "PCIe-attached cellular modem module (PCIe #2) with two SIM card slots for primary and failover cellular backhaul",
      },
      {
        title: "SFP+ Cage + DOCSIS Connector",
        description:
          "1× SFP+ for 10G fibre backhaul; DOCSIS connector interfaces to a customer-supplied cable modem module — Qmax designed the connector interface and power rail only",
      },
    ],
    interfaces: [
      {
        title: "Wi-Fi 6 802.11ax — Tri-Band",
        description:
          "Simultaneous 4×4 MU-MIMO on 2.4 GHz, 5.1 GHz, and 5.8 GHz; OFDMA; BSS Colouring; WPA3; Target Wake Time (TWT); 12-antenna array",
      },
      {
        title: "PCIe Gen 3 × 3",
        description:
          "Internal interconnect: PCIe #1 (SWIFT accelerator), PCIe #2 (LTE/5G modem), PCIe #3 (future expansion) — all routed from IPQ8078 to respective modules",
      },
      {
        title: "1v8 Differential (LVDS) — Radio Interface",
        description:
          "3× high-speed I/O 1v8 differential links plus WDI between the IPQ8078 and each QCN5054/5024 radio chip for baseband data and control",
      },
      {
        title: "Gigabit Ethernet — RJ45 × 2",
        description:
          "QCA8075 GbE PHY; Port 1: standard 1000BASE-T; Port 2: PoE IEEE 802.3at (48 VDC PSE); both ports with isolation magnetics",
      },
      {
        title: "SFP+ — 10G fibre uplink",
        description:
          "For fibre-connected backhaul deployments — SFP+ fibre only; no copper SFP",
      },
      {
        title: "DOCSIS Connector",
        description:
          "Connector interface to customer-supplied cable modem module; Qmax scope covers the PCB connector and 12 VDC power rail only — DOCSIS module design is outside Qmax scope",
      },
      {
        title: "USB 3.0",
        description:
          "SuperSpeed host port from SoC; also exposed via AIRCB expansion connector with GPIO",
      },
      {
        title: "UART / SPI / I2C / GPIO / JTAG",
        description:
          "Full suite of low-speed debug and peripheral interfaces from IPQ8078 — UART for serial console and GPS MUX, SPI for NOR Flash, I2C for peripheral control, JTAG for factory programming",
      },
      {
        title: "BLE 4.1 (Nordic nRF)",
        description:
          "Bluetooth Low Energy module for IoT device provisioning, device configuration, and short-range wireless",
      },
      {
        title: "GPS (UART via MUX Switch)",
        description:
          "GPS receiver module connected to IPQ8078 UART through a MUX switch, supporting location stamping, timing synchronisation, and smart-city telemetry",
      },
    ],
    firmwareItems: [
      {
        title: "OpenWRT BSP & Platform Bringup",
        description:
          "U-Boot bootloader ported to IPQ8078; Linux kernel configured and brought up with custom device tree covering PCIe (Wi-Fi radios, LTE modem), DDR3 memory, USB 3.0, eMMC, SPI NOR, I2C, UART, GPIO, and JTAG. PMIC power sequencing validated on PMP8078. Full SoC hardware NSS (Network Sub-System) offload engines initialised for packet processing acceleration.",
      },
      {
        title: "Wi-Fi Driver Integration & RF Calibration",
        description:
          "Wi-Fi drivers integrated for all three 802.11ax radio chains (QCN5054 × 2 for 5.1 GHz and 5.8 GHz; QCN5024 for 2.4 GHz); per-band RF calibration performed to achieve rated 4×4 MU-MIMO throughput; FEM PA/LNA enable sequencing validated; radio coexistence tuned for simultaneous tri-band full-load operation. FCC Part 15B certification achieved.",
      },
      {
        title: "OpenWRT Throughput & NSS Offload Optimisation",
        description:
          "Hardware NSS offload and kernel flow offload enabled on IPQ8078; multi-core packet-processing affinity tuned to sustain maximum Wi-Fi throughput under high concurrent public-user load across all three bands simultaneously — with no measurable throughput degradation under full tri-band load.",
      },
      {
        title: "LTE / 5G Modem Driver & Backhaul Management",
        description:
          "PCIe-attached LTE/5G modem driver integrated and qualified; dual-SIM management with SIM failover logic implemented; backhaul management logic developed to handle LTE/5G and SFP+ fibre as primary backhaul paths, with optional PoE GbE as fallback — maintaining persistent Wi-Fi service during backhaul disruption.",
      },
      {
        title: "GPS Driver & UART MUX Management",
        description:
          "GPS receiver driver integrated; UART MUX switch firmware arbitration between SoC host UART and GPS module implemented; GPS NMEA data parsed and exposed to system for location-based features, network timing, and smart-city telemetry integrations.",
      },
      {
        title: "BLE 4.1 Driver & Provisioning Stack",
        description:
          "Nordic nRF BLE 4.1 module driver integrated; BLE-based device provisioning stack implemented allowing zero-touch Wi-Fi configuration and IoT device onboarding over BLE; coexistence with 2.4 GHz Wi-Fi validated and frequency interleaving configured.",
      },
      {
        title: "TPM Integration & Secure Boot",
        description:
          "Trusted Platform Module (TPM) driver integrated; hardware-rooted secure boot chain implemented from bootloader through OS; cryptographic key storage and attestation APIs exposed for application-layer security; TPM-backed device identity provisioning for secure cloud management integration.",
      },
      {
        title: "Wi-Fi Mesh Firmware",
        description:
          "Wi-Fi mesh networking stack enabled and validated on OpenWRT; IEEE 802.11s mesh protocol configured for multi-AP deployments enabling seamless roaming and distributed coverage across large outdoor venues; inter-AP backhaul optimisation for mesh throughput.",
      },
      {
        title: "DVT Test Firmware & Interface Validation",
        description:
          "Automated DVT self-test application developed to validate all interfaces: all Ethernet ports, Wi-Fi RF on all three bands, LTE modem registration, GPS lock, BLE advertising, USB enumeration, eMMC read/write, power-rail verification, SFP+ presence, LED, and GPIO. Test results logged to SD card and serial console. Complete test firmware package handed over to customer for use in volume production.",
      },
      {
        title: "AI Module / IP Camera PoE & Microphone Array Drivers",
        description:
          "Optional expansion hardware support implemented: PoE-powered IP camera interface driver, 4-channel microphone array driver (I2S/PCM), and PCIe AI inference module bringup — enabling smart-city surveillance, ambient audio analytics, and edge AI applications from the same hardware platform.",
      },
    ],
    specs: [
      {
        key: "SoC",
        value:
          "Qualcomm IPQ8078 (Hawkeye) — Quad-core ARM Cortex-A53 with Wi-Fi 6 NSS offload engines",
      },
      {
        key: "PMIC",
        value:
          "Qualcomm PMP8078 — purpose-paired power management with 19.2/38.4 MHz reference clocks",
      },
      {
        key: "Wi-Fi Radios",
        value:
          "QCN5054 × 2 (5.1 GHz + 5.8 GHz, 4×4 MIMO each); QCN5024 × 1 (2.4 GHz, 4×4 MIMO); 12-antenna array",
      },
      {
        key: "Wi-Fi Standard",
        value:
          "Wi-Fi 6 802.11ax Tri-Band; MU-MIMO; OFDMA; WPA3; BSS Colouring; TWT",
      },
      {
        key: "Memory",
        value:
          "DDR3-512Mb × 2 (1 Gb total); 256 Mb SPI NOR Flash; 8 GB eMMC; SD Card slot",
      },
      {
        key: "Ethernet",
        value:
          "2× GbE RJ45 (QCA8075); Port 2 PoE 802.3at (48 VDC); 1× SFP+ (10G)",
      },
      {
        key: "Backhaul",
        value:
          "LTE/5G PCIe modem (2× SIM); 10G SFP+ fibre; GbE PoE (optional backhaul); DOCSIS connector (customer module)",
      },
      {
        key: "Expansion PCIe",
        value:
          "PCIe #1: SWIFT accelerator; PCIe #2: LTE/5G modem; PCIe #3: Future",
      },
      {
        key: "Connectivity",
        value:
          "BLE 4.1 (Nordic nRF); GPS (UART via MUX); TPM; USB 3.0; AIRCB connector",
      },
      {
        key: "Optional",
        value:
          "AI inference module; IP camera with PoE; 4× microphone array",
      },
      {
        key: "Interfaces",
        value:
          "PCIe Gen 3 ×3; USB 3.0 ×1; UART ×2; SPI; I2C; GPIO; JTAG; SD Card",
      },
      {
        key: "Firmware / OS",
        value:
          "OpenWRT (custom BSP on IPQ8078) with full driver suite for all peripherals",
      },
      {
        key: "PCB",
        value:
          "Multi-layer, impedance-controlled; shielding cans on all RF sections; outdoor-rated",
      },
      {
        key: "Certifications",
        value:
          "FCC Part 15B; RoHS compliant; designed for outdoor IP-rated enclosure",
      },
      {
        key: "Power",
        value:
          "15 VDC main; 48 VDC PoE PSE (IEEE 802.3at); 12 VDC DOCSIS rail",
      },
      {
        key: "Qmax Scope",
        value:
          "Concept to DVT — hardware architecture, PCB design, RF engineering, OpenWRT BSP, Wi-Fi calibration, FCC support, DVT test firmware; volume manufacturing by customer",
      },
    ],
    summary: [
      "This outdoor Wi-Fi 6 AP engagement demonstrates Qmax Systems' full-stack hardware design capability across one of the most demanding Wi-Fi engineering challenges: a fanless outdoor tri-band 802.11ax Access Point with 12 antennas, multi-mode backhaul, and smart-city expansion capability — all in a compact pole-mount enclosure that must survive extreme outdoor conditions and pass FCC certification. The customer provided the product concept and major platform architecture; Qmax delivered everything from detailed hardware architecture through DVT, including OpenWRT BSP, all peripheral drivers, Wi-Fi calibration, and a complete design handover package ready for volume manufacturing.",
      "The project required simultaneous deep expertise across Qualcomm SoC hardware architecture, multi-band RF engineering, high-speed PCB design, wireless co-existence strategy, and OpenWRT firmware development. Tri-band Wi-Fi calibration achieving rated 4×4 MU-MIMO throughput on all three simultaneous 802.11ax bands, and FCC certification achieved, underscore the rigour of Qmax's RF engineering and testing processes.",
      "The same design capability — hardware architecture, RF engineering, PCB design, OpenWRT firmware, FCC certification support, and DVT — is available to customers bringing outdoor connected infrastructure, smart city, and enterprise wireless products to market.",
    ],
    listingSummary:
      "Full product development from concept to DVT — outdoor tri-band Wi-Fi 6 access point for North American smart city and public Wi-Fi deployment.",
    metadata: {
      title: "Outdoor Wi-Fi 6 Access Point | Case Study",
      description:
        "Full product development case study — outdoor Wi-Fi 6 tri-band access point with OpenWRT BSP, 12-antenna RF design, and FCC certification.",
    },
  };
