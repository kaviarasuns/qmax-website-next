import { embeddedCaseStudiesData } from "@/store/embedded-case-studies";

const iotGatewayImages =
  embeddedCaseStudiesData.find(
    (study) => study.id === "industrial-iot-gateway-with-poe",
  )?.images ?? [];

export const GALLERY_SLIDES = iotGatewayImages.map((src, index) => ({
  src,
  thumb: src,
  alt: `Rugged Android Digital Signage Player — image ${index + 1}`,
}));

export const RIBBON_STATS = [
  { value: "1,000s of Units", label: "Shipped to USA" },
  { value: "4 Years", label: "Field proven" },
  { value: "~0 Failures", label: "In the field" },
  { value: "FCC Certified", label: "RoHS Compliant" },
];

export const META_TAGS = [
  "Domain: Commercial",
  "Industry: Digital Signage",
  "Market: North America",
];

export const NAV_SECTIONS = [
  { id: "overview", num: "01", label: "Project Overview" },
  { id: "brief", num: "02", label: "Product Brief" },
  { id: "scope", num: "03", label: "Scope of Work" },
  { id: "challenges", num: "04", label: "Engineering Challenges" },
  { id: "components", num: "05", label: "Hardware Components" },
  { id: "interfaces", num: "06", label: "Interfaces & Protocols" },
  { id: "firmware", num: "07", label: "Firmware & Software" },
  { id: "specs", num: "08", label: "Technical Specifications" },
  { id: "summary", num: "09", label: "Summary" },
];

export const SCOPE_ITEMS = [
  "Full hardware architecture, schematic design, and BOM development for the RK3566-based mainboard",
  "6-layer HDI PCB design including high-speed LPDDR4, HDMI 2.0, and USB 3.0 routing with controlled impedance",
  "Prototype builds, bring-up, and design iterations through DVT (Design Validation Testing) and PVT (Production Validation Testing)",
  "Low-level Linux kernel driver development: LT6911 V4L2 HDMI-to-CSI driver, Android Camera HAL adaptation, I2S audio pipeline, IR remote driver, and status LCD driver",
  "Full Android BSP bring-up including kernel configuration, device tree authoring, and PMIC bring-up on RK3566",
  "Android application development: HDMI live input viewer, picture-in-picture signage engine, content scheduler, IR remote control integration, and OTA update client",
  "HDCP license acquisition and provisioning into the LT6911 firmware for compliant display of protected TV content",
  "Industrial and mechanical design of the CNC-machined aluminum fanless enclosure with IP54 rating and integrated thermal management",
  "FCC Part 15 certification management including EMI/EMC troubleshooting, filter design, and re-test coordination",
  "Full production manufacturing, test jig development, accessory sourcing (UL power adapter, HDMI cables with ferrite, custom remote), carton packaging, and direct shipment to the customer's US warehouse",
];

export const CHALLENGES = [
  {
    challenge: "HDMI input on Android SoC",
    resolution:
      "No commercial RK3566-class SoC provides a native HDMI RX interface; a creative bridge architecture using the Lontium LT6911 HDMI-to-MIPI CSI-2 converter was designed and kernel-driver developed from scratch",
  },
  {
    challenge: "Lip sync between HDMI input audio and video",
    resolution:
      "The RK3566 audio and video pipelines run on independent clock domains; extensive driver-level tuning of PTS timestamps across the V4L2 and ALSA subsystems was required to achieve compliant A/V synchronisation",
  },
  {
    challenge: "FCC Part 15 first-attempt failure",
    resolution:
      "Radiated emissions exceeded limits on HDMI lines; resolved by adding EMI filter arrays on HDMI signal lines and specifying HDMI cables with ferrite clamp cores",
  },
  {
    challenge: "Fanless thermal management",
    resolution:
      "The RK3566 under full 4K decode and WiFi load generates significant heat; the aluminum enclosure was engineered as a heatsink with direct thermal interface material paths, enabling sustained operation without active cooling",
  },
  {
    challenge: "Dense 6-layer PCB layout",
    resolution:
      "Routing LPDDR4 (64-bit bus), HDMI 2.0 differential pairs, USB 3.0 SuperSpeed, and GbE on a compact board required meticulous impedance control, layer stack-up planning, and via-in-pad techniques",
  },
  {
    challenge: "HDCP key provisioning at scale",
    resolution:
      "Each unit requires unique HDCP keys programmed into SPI flash at production; a custom factory fixture, automated provisioning script, and traceability database were developed to handle volume production reliably",
  },
];

export const HARDWARE_COMPONENTS = [
  {
    title: "Rockchip RK3566",
    description:
      "Quad-core ARM Cortex-A55 SoC at 1.8 GHz with Mali-G52 GPU, 1 TOPS NPU, 4K H.264/H.265 hardware decode, HDMI 2.0a output, and MIPI CSI-2 RX interface",
  },
  {
    title: "RK809-5 PMIC",
    description:
      "Multi-channel power management IC providing all core, DDR, IO, and peripheral voltage rails for the RK3566 with programmable DVFS for thermal regulation",
  },
  {
    title: "Lontium LT6911UXC",
    description:
      "HDMI 2.0 to MIPI CSI-2 bridge IC; converts incoming 1080p60 HDMI signal to 4-lane CSI-2 YUV422 stream with embedded I2S audio output and HDCP 2.2/1.4 RX support",
  },
  {
    title: "LPDDR4 SDRAM",
    description:
      "High-speed 64-bit wide memory providing the bandwidth required for simultaneous 4K decode, CSI-2 DMA capture, and Android workloads",
  },
  {
    title: "eMMC 5.1 Flash",
    description:
      "Embedded storage in HS400 mode for Android OS, applications, and local signage content with A/B partition layout for OTA updates",
  },
  {
    title: "Gigabit Ethernet PHY",
    description:
      "RGMII-interface PHY (Realtek RTL8211F) supporting 10/100/1000 Mbps with EEE and MDI/MDIX auto-negotiation",
  },
  {
    title: "24 W PoE Module",
    description:
      "IEEE 802.3af/at compliant PD controller with integrated DC-DC conversion, providing up to 24 W from a standard PoE switch to power the complete unit",
  },
  {
    title: "WiFi 6 + Bluetooth 5 combo module",
    description:
      "Dual-band 802.11ax and BT 5.x module connected via PCIe and UART, with U.FL antenna connectors for external antennas",
  },
  {
    title: "SPI NOR flash (W25Q16)",
    description:
      "Dedicated 16 Mbit flash for LT6911 firmware and HDCP key storage, programmed at factory with Lontium-provided firmware",
  },
  {
    title: "CNC-machined aluminum enclosure",
    description:
      "IP54-rated fanless enclosure precision machined from 6061 aluminum alloy, acting as both mechanical chassis and primary heatsink with thermal interface material pads",
  },
  {
    title: "Custom IR remote control",
    description:
      "38 kHz NEC-protocol remote with custom keylayout; keymapped to signage application functions and branded for the end customer",
  },
  {
    title: "Status LCD / OLED display",
    description:
      "Small front-panel display connected via SPI/I2C showing IP address, PoE power state, HDMI input lock, content schedule state, and fault codes",
  },
];

export const INTERFACES = [
  {
    title: "HDMI Input (HDCP 2.2)",
    description:
      "1080p60 HDMI 2.0 source input via LT6911 bridge; supports HDCP 1.4 and 2.2 protected content from set-top boxes and satellite receivers",
  },
  {
    title: "HDMI Output (4K @ 60 Hz)",
    description:
      "Native HDMI 2.0a output from RK3566 driving 4K commercial displays; supports 4K30 and 1080p60 with HDR metadata pass-through",
  },
  {
    title: "Gigabit Ethernet with PoE",
    description:
      "IEEE 802.3af/at PoE PD on the RJ45 port; supports 10/100/1000 Mbps for content delivery, OTA updates, and CMS connectivity",
  },
  {
    title: "WiFi",
    description:
      "Dual-band 802.11 a/b/g/n/ac/ax (2.4 GHz + 5 GHz) for wireless content and management connectivity in environments where Ethernet cabling is impractical",
  },
  {
    title: "Bluetooth 5.x",
    description:
      "BLE and Classic Bluetooth for proximity sensors, BLE beacons, and wireless peripheral pairing",
  },
  {
    title: "USB 3.0",
    description:
      "SuperSpeed USB Type-A host port for external storage, capture cards, or USB-connected accessories",
  },
  {
    title: "USB 2.0",
    description:
      "Two Type-A USB 2.0 host ports for keyboards, mice, USB hubs, and provisioning during manufacture and deployment",
  },
  {
    title: "IR Remote Interface",
    description:
      "38 kHz IR receiver with rc-core driver supporting NEC and RC5 protocols; custom remote control programmed to the signage application keylayout",
  },
  {
    title: "Status LCD",
    description:
      "Small SPI/I2C connected OLED/LCD display on the unit face showing IP address, PoE status, HDMI signal state, content schedule status, and error codes",
  },
  {
    title: "I2C / SPI / RTC / GPIO",
    description:
      "Internal interfaces for PMIC, LT6911 control, RTC (real-time clock for scheduling), status LCD, and board management functions",
  },
];

export const FIRMWARE_ITEMS = [
  {
    title: "BSP & kernel bring-up",
    description:
      "RK3566 Android 12 SDK configured for custom board; full device tree written covering MIPI CSI-2, I2S RX, IR, SPI LCD, GbE PHY, PoE GPIO, and USB3. PMIC sequencing and DVFS tuning validated.",
  },
  {
    title: "LT6911 HDMI-to-CSI driver development",
    description:
      "Full V4L2 subdev kernel driver written for RK3566 rkcif stack: probe, hot-plug interrupt handling, DV timings negotiation, and dynamic resolution change support. LT6911 firmware sourced from Lontium and provisioned via SPI flash at factory.",
  },
  {
    title: "HDCP key provisioning & license management",
    description:
      "HDCP 1.4 and 2.2 RX keys provisioned into each unit's LT6911 SPI flash during production. Custom factory fixture and traceability log developed for compliance.",
  },
  {
    title: "Android Camera HAL3 & zero-copy display pipeline",
    description:
      "Camera HAL3 adapted to expose LT6911 CSI-2 stream as an Android camera device. Zero-copy display path built: CSI-2 DMA → rkcif → DRM/KMS overlay plane → HDMI TX, bypassing GPU compositing for minimal latency passthrough.",
  },
  {
    title: "Audio pipeline & lip sync tuning",
    description:
      "I2S RX brought up with LT6911 as I2S master. ASoC machine driver and Android Audio HAL written. PTS timestamp correlation between V4L2 video capture and ALSA I2S audio implemented; compensating frame queue applied to achieve HDMI-spec lip sync tolerance (±15/45 ms).",
  },
  {
    title: "IR remote driver & keylayout",
    description:
      "rc-core NEC/RC5 driver enabled and Android .kl keylayout file written for custom remote control. Keys mapped to signage app functions: source select, volume, PiP toggle, content navigation, and menu.",
  },
  {
    title: "Signage application & PiP engine",
    description:
      "Android application built for dual-source picture-in-picture: live HDMI input rendered via SurfaceView with Camera2 API; signage overlay rendered via a second SurfaceView with hardware-accelerated compositing. Content scheduler, OTA update client, and CMS integration included.",
  },
  {
    title: "OTA update infrastructure",
    description:
      "A/B partition OTA update mechanism implemented using Android's RecoverySystem API. Signage content and application updates delivered over Ethernet or WiFi, with rollback on failure and remote reboot capability.",
  },
];

export const SPECS = [
  { key: "SoC", value: "Rockchip RK3566 — Quad-core Cortex-A55 @ 1.8 GHz, Mali-G52 GPU, 1 TOPS NPU" },
  { key: "PMIC", value: "RK809-5 with DVFS support" },
  { key: "HDMI Input Bridge", value: "Lontium LT6911UXC — HDMI 2.0 to MIPI CSI-2, HDCP 2.2/1.4" },
  { key: "Memory", value: "LPDDR4 (64-bit), eMMC 5.1 HS400" },
  { key: "PCB", value: "6-layer HDI, controlled impedance" },
  { key: "Connectivity", value: "GbE (PoE 802.3af/at), WiFi 6 dual-band, Bluetooth 5.x" },
  { key: "Video Output", value: "HDMI 2.0a — 4K @ 60 Hz" },
  { key: "Audio", value: "HDMI ARC, I2S capture from LT6911" },
  { key: "USB", value: "USB 3.0 × 1, USB 2.0 × 2" },
  { key: "Enclosure", value: "CNC-machined 6061 aluminum, IP54, fanless" },
  { key: "OS", value: "Android 12 (custom BSP)" },
  { key: "Certifications", value: "FCC Part 15 Class B, RoHS, HDCP 2.2" },
  { key: "Power", value: "24 W PoE (802.3af/at) or 12 V DC jack" },
];
