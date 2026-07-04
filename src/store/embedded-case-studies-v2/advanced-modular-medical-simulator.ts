import { embeddedCaseStudiesData } from "@/store/embedded-case-studies";
import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const advancedModularMedicalSimulatorImages = [
  ...[
    "poe-control-unit",
    "poe-power-injector",
    "industrial-poe-switch",
  ].flatMap(
    (id) =>
      embeddedCaseStudiesData.find((study) => study.id === id)?.images ?? [],
  ),
  "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/full-product-development/advanced-modular-medical-simulator/7.png",
];

export const advancedModularMedicalSimulatorCaseStudy: FullProductDevelopmentCaseStudy =
  {
    id: "advanced-modular-medical-simulator",
    slug: "advanced-modular-medical-simulator",
    section: "embedded",
    title: "Advanced Modular Medical Simulator — Developer Kit",
    subtitle:
      "Snapdragon 820-Based Embedded Electronics Platform with 9-Port Gigabit Ethernet PoE Backbone for Modular Medical Simulation Training",
    metaTags: [
      "Domain: Medical Simulation",
      "Industry: Embedded Electronics & Networking",
      "Market: North America",
    ],
    ribbonStats: [
      { value: "EVT → DVT", label: "Validated platform" },
      { value: "Snapdragon 820", label: "Qualcomm SoM" },
      { value: "9-Port GbE", label: "Broadcom switch" },
      { value: "High-Power PoE", label: "PSE backbone" },
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
    images: advancedModularMedicalSimulatorImages,
    cardImageIndex: 13,
    overview: [
      "A Minneapolis, MN-based medical simulation company engaged Qmax Systems to design and develop the complete embedded electronics platform for an Advanced Modular Medical Simulator Developer Kit (AMMDK) — the central computing, networking, and power backbone of a next-generation open-standard, interoperable medical training manikin. Qmax delivered the full hardware platform — architecture, PCB design, firmware, Linux/RTOS bring-up, peripheral driver APIs, EVT, DVT, and small-volume production — enabling any third-party developer to build AMM-compatible simulation modules.",
    ],
    brief: [
      "The AMMDK is a multi-board embedded electronics platform built around the Qualcomm Snapdragon 820 System-on-Module (SoM) as the main application processor, a dedicated 9-port Broadcom BCM53128 Gigabit Ethernet switch board as the module network backbone, and a very high-power PoE Sourcing Equipment stage that delivers both data and actuation power to each manikin segment over a single Ethernet cable. The Snapdragon SoM runs Linux; an NXP Kinetis K66 ARM Cortex-M4F runs an RTOS for hard real-time peripheral I/O, with a K20 for non-intrusive debug. The platform exposes GbE, USB 3.0, HDMI, CAN, SPI, I²C, UART, GPIO, ADC, DAC, and PWM through a main board and an interchangeable Application Board. Qmax developed the entire hardware platform, the Linux BSP, the RTOS layer, and the full peripheral driver API and test suite; the application software was built by the customer and third parties on the open-source AMM standards.",
    ],
    scopeIntro:
      "The customer provided the overall system architecture concept and program requirements. Qmax Systems executed the complete hardware platform development — through EVT, DVT, and small-volume production. Qmax did not develop the end-application software; Qmax delivered the hardware, firmware, OS bring-up, and all peripheral driver APIs on which the application layer was built:",
    scopeItems: [
      "Hardware Architecture — full system architecture refinement and multi-board schematic design covering the Qualcomm Snapdragon 820 SoM, the 9-port Broadcom BCM53128 Gigabit Ethernet switch board, the high-power PoE PSE stage, Kinetis K66 / K20 MCUs, USB 3.0 hub, CAN transceiver, level translators, and all peripheral I/O",
      "PCB Design — multi-layer impedance-controlled PCB layout for the AMMDK main board, the 9-port Gigabit Ethernet switch board, and the Application Board; high-speed routing for 8× GbE channels, USB 3.0, PCIe, HDMI, and DDR; power-domain isolation between the high-power PoE / 48V actuator bus and 3.3V / 1.8V logic",
      "9-Port Gigabit Ethernet Switch Board — dedicated network switch board built on the Broadcom BCM53128 — one uplink port to the Qualcomm SoM and eight downstream PoE-injected ports feeding distributed manikin module segments; full MDIO switch management and VLAN/QoS channel isolation",
      "High-Power PoE PSE Design — very high-power Power-over-Ethernet Sourcing Equipment stage delivering both Gigabit data and high-current actuation power to each manikin segment over a single Ethernet cable, with per-port power negotiation, budgeting, and fault protection",
      "Firmware & RTOS — U-Boot bootloader and Linux BSP/device tree on the Snapdragon 820 SoM; RTOS-based real-time firmware on the Kinetis K66 for all peripheral I/O (CAN, SPI, I²C, UART, GPIO, ADC, DAC, PWM); K20 debug firmware; switch and PoE management firmware",
      "Peripheral Driver APIs — complete, documented peripheral driver API layer for every interface — GbE switch, PoE control, CAN, USB, SPI, I²C, UART, GPIO, ADC, DAC, PWM, HDMI — enabling the customer and third-party module developers to build application software without low-level embedded effort",
      "Peripheral Testing & Validation — bring-up and exhaustive functional testing of every peripheral and interface — all 8 switch ports, PoE delivery per port, CAN, USB 3.0, HDMI, analog ADC/DAC channels, and all serial buses — with documented test results and test firmware",
      "EVT (Engineering Validation Test) — engineering validation builds, design verification of all subsystems, and resolution of hardware bring-up issues prior to design freeze",
      "DVT (Design Validation Test) — formal design validation through multi-contractor system integration events (Mule 1, May 2018; Mule 2, October 2018) — full integration with fluidics, physiology engine, chest-rise module, and peripheral modules",
      "Small-Volume Production — small-volume manufacturing of the AMMDK main board, the 9-port switch board, and Application Boards for prototype manikin builds, validation studies, and external module developer kits; all hardware/firmware released open-source under Creative Commons 4.0",
    ],
    challenges: [
      {
        challenge: "9-port Gigabit switch with per-port PoE",
        resolution:
          "Designing a single switch board around the Broadcom BCM53128 that combines eight downstream Gigabit data ports — each carrying high-power PoE injection — plus one uplink to the Qualcomm SoM, while maintaining signal integrity on all channels and keeping the high-current PoE planes isolated from the GbE pairs",
      },
      {
        challenge: "Very high-power PoE budgeting across segments",
        resolution:
          "Delivering high-current actuation power to multiple manikin segments simultaneously over Ethernet required careful per-port power negotiation, total-budget management, magnetics selection, and thermal design so distributed actuators could run concurrently without exceeding the PSE budget",
      },
      {
        challenge: "Multi-processor Linux + RTOS architecture",
        resolution:
          "Running a Linux application stack on the Snapdragon 820 SoM for high-level networking and simulation management alongside a hard real-time RTOS loop on the Kinetis K66 for deterministic actuator and sensor timing — bridging the two domains over USB while preserving sub-millisecond real-time response",
      },
      {
        challenge: "High-power actuator bus alongside sensitive logic",
        resolution:
          "The 48V high-current actuator/PoE bus had to be fully isolated from 3.3V / 1.8V digital logic; galvanic isolation, high-side power MOSFET drive, ground-plane splits, and layered protection were required on densely populated boards",
      },
      {
        challenge: "High-density multi-protocol PCB layout",
        resolution:
          "Routing eight Gigabit Ethernet channels, USB 3.0, HDMI, PCIe, CAN, SPI, I²C, UART, ADC, DAC, and PWM across the main board and switch board — with correct impedance control, differential-pair matching, and power-plane partitioning around the SoM, switch IC, and two MCUs",
      },
      {
        challenge: "Gigabit switch management and channel isolation",
        resolution:
          "Configuring the BCM53128 over MDIO for VLAN/QoS so each manikin module segment gets an isolated, prioritized network channel — preventing cross-talk of time-critical physiology and actuator data between segments on the shared switch fabric",
      },
      {
        challenge: "CAN bus signal integrity with level translation",
        resolution:
          "The K66's 3.3V CAN interface had to drive an external transceiver and module bus at differing voltage levels; level translators (SN74AVC2T4, FXMAR2104) were placed and tuned to preserve clean CAN edges at 1 Mbps without reflections",
      },
      {
        challenge: "EMI / EMC on a dense networking + power board",
        resolution:
          "Combining a Gigabit switch fabric, high-power PoE, switching regulators, and a multi-core SoM on adjacent boards demanded disciplined shielding, ferrite placement, and layout to meet emissions targets without compromising density",
      },
      {
        challenge: "ADC / DAC signal quality with RC filter + ESD",
        resolution:
          "Analog sensor signals (pressure, flow, force) are susceptible to noise from the switching supplies and the high-current PoE bus; RC filter and ESD networks were designed to preserve ADC SINAD and clean DAC actuator-reference outputs",
      },
      {
        challenge: "Documented open hardware + driver API package",
        resolution:
          "The entire platform — main board, switch board, firmware, and every peripheral driver API — had to be documented and structured so any third party could build AMM-compatible modules without engaging Qmax; this required a design and documentation discipline well beyond a standard DVT package",
      },
    ],
    hardwareComponents: [
      {
        title: "Qualcomm Snapdragon 820 (SoM_u820)",
        description:
          "High-performance quad-core Kryo ARM SoM with Adreno GPU — the main application processor; runs Linux, the DDS data-bus middleware, and the high-level simulation management stack; connects to the Gigabit switch uplink and USB hub; HDMI output for instructor display",
      },
      {
        title: "Broadcom BCM53128 — 9-Port Gigabit Ethernet Switch",
        description:
          "The network backbone of the platform on a dedicated switch board — one uplink port to the Qualcomm SoM and eight downstream Gigabit ports, each combined with high-power PoE injection, to connect distributed manikin module segments; MDIO-managed with VLAN/QoS channel isolation",
      },
      {
        title: "Very High-Power PoE PSE Stage",
        description:
          "Power Sourcing Equipment that injects both Gigabit data and high-current actuation power onto each of the eight downstream ports — powering manikin limb, torso, fluidics, and actuator modules over a single Ethernet cable with per-port management and fault protection",
      },
      {
        title: "NXP Kinetis K66 (MK66FN2M0)",
        description:
          "ARM Cortex-M4F 180 MHz real-time MCU running an RTOS — the primary peripheral I/O controller handling CAN, SPI, I²C, UART, ADC, DAC, PWM, and GPIO for all manikin sensor and actuator interfaces; connected to the Snapdragon SoM via USB",
      },
      {
        title: "NXP Kinetis K20 (MK20DX128)",
        description:
          "ARM Cortex-M4 MCU dedicated to non-intrusive real-time debugging of the K66 via SWD/JTAG, providing a USB OpenSDA debugger interface without disturbing the K66's real-time tasks",
      },
      {
        title: "USB 3.0 Hub (USB5537B)",
        description:
          "USB 3.0 hub providing multiple downstream ports for peripheral sensor modules and accessories, and the high-speed link from the Snapdragon SoM to the Kinetis K66",
      },
      {
        title: "CAN Transceiver",
        description:
          "High-speed ISO 11898-2 CAN transceiver providing differential CAN signaling from the K66 to the manikin module data bus at up to 1 Mbps",
      },
      {
        title: "Motor Drive MOSFET (BUK7M22-80E)",
        description:
          "High-side 80V N-channel power MOSFET driving fluidics pumps, hemorrhage valves, and chest-rise bellows motors from the high-current actuator bus under K66 PWM control",
      },
      {
        title: "Power Converters (TPS54020, RT7258, TPS63000, SSQ15)",
        description:
          "Buck regulators for the 5V / 3.3V / 1.8V logic rails optimized for low ADC noise; a TPS63000 buck-boost stage for battery-backed portable operation; and an SSQ15 isolated DC-DC module",
      },
      {
        title:
          "Level Translators & Protection (SN74AVC2T4, FXMAR2104, TPD12S016, FT230RQ)",
        description:
          "Voltage level translation for CAN and mixed-rail interfaces; HDMI ESD/level protection; and a USB-UART bridge for the serial diagnostics console",
      },
    ],
    interfaces: [
      {
        title: "9-Port Gigabit Ethernet (Module Backbone)",
        description:
          "The Broadcom BCM53128 switch provides one uplink to the Qualcomm SoM and eight downstream Gigabit ports to distributed manikin modules; the AMM DDS (Data Distribution Services) middleware runs over this Ethernet fabric connecting all physical and virtual modules",
      },
      {
        title: "High-Power Power-over-Ethernet (Per-Port)",
        description:
          "Each of the eight downstream switch ports injects high-current PoE alongside Gigabit data, delivering both power and connectivity to each manikin segment over a single cable — with per-port power-class negotiation and budgeting",
      },
      {
        title: "MDIO (Switch Management)",
        description:
          "Management interface to configure the BCM53128 switch — VLAN assignment, QoS prioritization, and per-port control for isolated, time-critical manikin module channels",
      },
      {
        title: "USB 3.0 (Peripheral Expansion)",
        description:
          "USB 3.0 hub provides multiple downstream ports for sensor modules and accessories, and the primary high-speed link between the Snapdragon SoM and the Kinetis K66",
      },
      {
        title: "CAN Bus (Sensor / Actuator Bus)",
        description:
          "ISO 11898-2 CAN at up to 1 Mbps for low-latency sensor and actuator data between the K66 and manikin modules; level-translated for module voltage compatibility",
      },
      {
        title: "SPI / I²C / UART / GPIO",
        description:
          "Full suite of low-speed peripheral interfaces from the K66 to on-board sensors, configuration ICs, SD card, LEDs, and Application Board peripherals; UART bridged via FT230RQ for diagnostics and serial console",
      },
      {
        title: "ADC / DAC / PWM (Analog Actuation)",
        description:
          "K66 ADC inputs read analog sensor signals through RC filter + ESD networks; DAC outputs provide actuator reference signals; PWM drives motor control via the BUK7M22-80E MOSFET — all from the K66 real-time core",
      },
      {
        title: "HDMI (Instructor Display)",
        description:
          "Snapdragon SoM HDMI output (via TPD12S016 protection) to an external instructor display for the web-based simulation dashboard and patient-monitor visualization",
      },
      {
        title: "JTAG / OpenSDA Debug",
        description:
          "Independent JTAG headers on the K66 and K20; K20 provides non-intrusive USB OpenSDA debug of the K66; separate JTAG on the Snapdragon SoM for Linux BSP development",
      },
      {
        title: "DDS Data Bus (Middleware)",
        description:
          "Data Distribution Services middleware over the Gigabit fabric forms the AMM inter-module communication layer; REST Adapter, TCP Bridge, and Serial Bridge extend it to web, network, and serial modules",
      },
    ],
    firmwareIntro:
      "Qmax developed the complete hardware-enablement software stack — bootloader, Linux BSP, RTOS, peripheral drivers, and APIs. Qmax did not develop the end-application software; the application layer was built by the customer and third-party developers on top of these Qmax-delivered APIs and the open AMM standards.",
    firmwareItems: [
      {
        title: "Linux BSP & Snapdragon 820 Bring-Up",
        description:
          "U-Boot bootloader ported to the Snapdragon 820 SoM; Linux kernel configured with a custom device tree covering PCIe, the USB 3.0 hub, HDMI, I²C, SPI, UART, GPIO, and the USB link to the Kinetis K66; all SoM and peripheral power-rail sequencing validated.",
      },
      {
        title: "RTOS & Kinetis K66 Real-Time Firmware",
        description:
          "RTOS-based real-time firmware on the K66 Cortex-M4F covering all peripheral I/O: CAN (ISO 11898-2, 1 Mbps), SPI, I²C, UART, PWM for motor actuation, DMA-driven ADC sampling, DAC output, and GPIO; a deterministic interrupt-driven loop maintains sub-millisecond response for closed-loop actuator feedback.",
      },
      {
        title: "9-Port Gigabit Switch Firmware",
        description:
          "Broadcom BCM53128 configuration and management firmware over MDIO: per-port enable, VLAN assignment, and QoS prioritization to give each manikin module segment an isolated, time-critical network channel; uplink configuration to the Qualcomm SoM.",
      },
      {
        title: "High-Power PoE Management Firmware",
        description:
          "PoE Sourcing Equipment firmware: per-port power-class negotiation, dynamic power allocation across the eight downstream ports, total-budget management for simultaneous multi-segment operation, and overcurrent / thermal fault protection.",
      },
      {
        title: "Peripheral Driver API Layer",
        description:
          "Complete, documented driver API layer for every interface — GbE switch control, PoE control, CAN, USB, SPI, I²C, UART, GPIO, ADC, DAC, PWM, and HDMI — packaged so the customer and third-party module developers can build application software without low-level embedded work.",
      },
      {
        title: "DDS Middleware & Module Manager Integration",
        description:
          "Integration of the DDS data-bus middleware and Module Manager on Linux: module registration handshake, capability advertisement, configuration publishing, and status aggregation across connected modules; REST Adapter, TCP Bridge, and Serial Bridge for web, network, and serial modules — open-source: https://github.com/AdvancedModularManikin/DDS.",
      },
      {
        title: "Fluidics & Actuator Control Firmware",
        description:
          "K66 real-time firmware for the fluidics and actuator subsystems: closed-loop pressure control for blood simulant and clear fluid via motor-driven pump + transducer feedback, hemorrhage-valve control, and chest-rise bellows motor drive on the high-current actuator bus via the BUK7M22-80E MOSFET.",
      },
      {
        title: "Portable / Battery Operation Firmware",
        description:
          "Power-management firmware for portable, battery-backed operation: regulated output across the Li-ion discharge range via TPS63000, ordered multi-rail power sequencing, sleep/wake state machine, and battery state-of-charge monitoring with low-battery shutdown protection.",
      },
      {
        title: "Peripheral Test Software & Diagnostics",
        description:
          "Bring-up and production test software exercising every interface — all 8 switch ports, per-port PoE delivery, CAN, USB 3.0, HDMI, analog ADC/DAC channels, and all serial buses — with logged results for EVT/DVT verification and production-line functional test.",
      },
      {
        title: "Open-Source Developer Kit Package",
        description:
          "All firmware and peripheral driver libraries packaged as the AMM Developer Kit (AMMDK) — standardized registration, configuration, and status-reporting APIs enabling third-party module developers to integrate AMM-compatible hardware rapidly; released under Creative Commons 4.0 with the open AMM standards.",
      },
    ],
    specs: [
      {
        key: "Domain / Industry",
        value:
          "Medical Simulation | Embedded Electronics | Networking | Robotics & Actuation",
      },
      {
        key: "Application",
        value:
          "Advanced Modular Medical Manikin Developer Kit — embedded electronics, networking, and power core for interoperable simulation modules",
      },
      {
        key: "Main Application Processor",
        value:
          "Qualcomm Snapdragon 820 — quad-core Kryo ARM SoM (SoM_u820); PCIe + USB; HDMI",
      },
      {
        key: "Network Switch",
        value:
          "Broadcom BCM53128 — 9-port Gigabit Ethernet switch (1 uplink to SoM + 8 downstream PoE ports); MDIO-managed, VLAN/QoS",
      },
      {
        key: "PoE",
        value:
          "Very high-power PoE PSE — per-port data + actuation power injection over a single Ethernet cable to each manikin segment",
      },
      {
        key: "Real-Time MCU",
        value:
          "NXP Kinetis K66 (MK66FN2M0) — ARM Cortex-M4F 180 MHz, RTOS; CAN, SPI, I²C, UART, ADC, DAC, PWM, GPIO",
      },
      {
        key: "Debug MCU",
        value:
          "NXP Kinetis K20 (MK20DX128) — ARM Cortex-M4; non-intrusive OpenSDA real-time debug of K66",
      },
      {
        key: "USB Hub",
        value:
          "USB5537B — USB 3.0 hub; downstream ports for peripherals + SoM-to-K66 link",
      },
      {
        key: "CAN Transceiver",
        value:
          "ISO 11898-2 CAN bus; 1 Mbps; level-translated for module compatibility",
      },
      {
        key: "Motor Drive MOSFET",
        value:
          "BUK7M22-80E — 80V N-channel; actuator bus control under K66 PWM",
      },
      {
        key: "Power Converters",
        value:
          "TPS54020 + RT7258 (buck); TPS63000 (buck-boost for battery); SSQ15 (isolated DC-DC)",
      },
      {
        key: "Level Translators / Protection",
        value:
          "SN74AVC2T4, FXMAR2104; HDMI protection TPD12S016; USB-UART bridge FT230RQ",
      },
      {
        key: "Interfaces",
        value:
          "9× GbE (PoE), USB 3.0, HDMI, PCIe, CAN, SPI, I²C, UART, GPIO, ADC, DAC, PWM, MDIO, JTAG, OpenSDA",
      },
      {
        key: "Software / OS",
        value:
          "Linux (Snapdragon SoM) + RTOS (K66) + DDS middleware + full peripheral driver APIs (Qmax); application layer by customer/3rd party",
      },
      {
        key: "PCB",
        value:
          "Multi-board: AMMDK main board + 9-port Gigabit switch board + interchangeable Application Board; impedance-controlled; 4–6 layers",
      },
      {
        key: "Pin Count",
        value: "Up to 3,348 pins (main controller board)",
      },
      {
        key: "Component Count",
        value: "Up to 975 components (main controller board)",
      },
      {
        key: "High Voltage / Power",
        value:
          "Yes — high-current PoE / 48V actuator bus; isolated from control logic",
      },
      {
        key: "Analog / Mixed Signal",
        value:
          "Yes — ADC inputs, DAC outputs, RC filter + ESD networks on all analog paths",
      },
      {
        key: "Power Input",
        value:
          "12V supply or PoE (single Ethernet cable for power + data); Li-ion battery via TPS63000 for portable operation",
      },
      {
        key: "Open Source",
        value:
          "Hardware + firmware + APIs published Creative Commons 4.0 — github.com/AdvancedModularManikin",
      },
      {
        key: "Scope Delivered",
        value:
          "Architecture → Schematic → PCB → Firmware/RTOS → Driver APIs → Peripheral Testing → EVT → DVT → Small-volume production",
      },
    ],
    summary: [
      "The Advanced Modular Medical Simulator Developer Kit demonstrates Qmax Systems' ability to deliver a complete, research-grade embedded electronics platform: a Qualcomm Snapdragon 820 application SoM, a 9-port Broadcom BCM53128 Gigabit Ethernet switch backbone, a very high-power PoE Sourcing Equipment stage, dual real-time ARM Cortex-M4 MCUs, CAN module I/O, high-current actuator drive, and mixed-signal sensor interfaces across a multi-board system.",
      "Qmax developed the full hardware platform along with the Linux BSP, RTOS, peripheral driver APIs, and test software, then validated it through EVT, DVT, and small-volume production — the application layer being built by the customer and third parties on the open AMM standards. The engagement showcases Qmax's capability to take a complex networked embedded product from architecture to validated, production-ready hardware.",
    ],
    listingSummary:
      "Complete embedded electronics platform for an open-standard medical simulation manikin — Snapdragon 820 SoM, 9-port GbE PoE backbone, Linux + RTOS, EVT through small-volume production.",
    metadata: {
      title: "Advanced Modular Medical Simulator Developer Kit | Case Study",
      description:
        "Full product development case study — Snapdragon 820-based medical simulation developer kit with 9-port Gigabit Ethernet PoE backbone, Linux BSP, RTOS, and open-source driver APIs.",
    },
  };
