import { PCBIndustry } from "@/components/services-cmp/PCBIndustriesSection";

export const PCB_INDUSTRIES: PCBIndustry[] = [
  {
    id: "automotive-electronics",
    label: "Automotive Electronics",
    title: "Automotive Electronics",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 17h14l-1.5-5.5a2 2 0 0 0-1.9-1.5H8.4a2 2 0 0 0-1.9 1.5L5 17z" />
        <circle cx="7.5" cy="17.5" r="2" />
        <circle cx="16.5" cy="17.5" r="2" />
      </svg>
    ),
    description:
      "Qmax Systems designs automotive PCBs for ECUs, infotainment, ADAS, and EV powertrain systems built to AEC-Q100 and IATF 16949 standards. These layouts handle harsh thermal cycling, severe vibration, and aggressive EMI across every cabin, chassis, and under-the-hood application.",
    subDescription:
      "From multi-layer ECU boards to high-current EV battery management PCBs, Qmax Systems delivers zero-defect quality and full automotive traceability.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/automotive.png",
    relatedCaseStudies: [
      {
        title: "Qualcomm WIFI-6 TriBand Router",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/UBIHUB/2.png",
        href: "/case-studies/qualcomm-wifi-6-triband-router",
      },
      {
        title: "Rugged OBD",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/rugged_obd/I01256CB1_20JUN2024_RUG_PR1_tb.svg",
        href: "/case-studies/rugged-obd",
      },
      {
        title: "Qualcomm WIFI-4 Routers",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/lightning/LIGHTNING-PR1_TOP.svg",
        href: "/case-studies/qualcomm-wifi4-routers",
      },
    ],
  },
  {
    id: "medical-healthcare",
    label: "Medical & Healthcare",
    title: "Medical & Healthcare",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 12.5h3l2-5 4 10 2-5h6" />
      </svg>
    ),
    description:
      "Qmax Systems designs PCBs for medical devices, diagnostics, imaging, and life-critical patient systems. From wearable monitors to surgical and implantable equipment, these layouts meet IPC-6012 Class 3, ISO 13485 design controls, and strict isolation, creepage, and clearance rules of regulated healthcare environments.",
    subDescription:
      "Qmax Systems builds leakage-current-safe routing, reinforced isolation barriers, and long-life stack-ups for sterilization and clinical reliability.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/medical.png",
    relatedCaseStudies: [
      {
        title: "AI GPU Expansion Chassis Motherboard",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/innovide/INNOVIDE_SIG123.svg",
        href: "/case-studies/ai-gpu-expansion-chassis-motherboard",
        rotation: 90,
      },
      {
        title: "Pegasus",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/pegasus/1.4.png",
        href: "/case-studies/pegasus",
      },
      {
        title: "Typheon",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/typheon/4.png",
        href: "/case-studies/typheon",
      },
    ],
  },
  {
    id: "aerospace-systems",
    label: "Aerospace Systems",
    title: "Aerospace Systems",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16v-2l-8-5V4a1.5 1.5 0 0 0-3 0v5l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1L15 22v-1.5L13 19v-5.5L21 16z" />
      </svg>
    ),
    description:
      "Qmax Systems designs PCBs for avionics, satellite payloads, defense electronics, and flight-critical and safety-critical aerospace systems where failure is not an option. These layouts conform to IPC-6012 Class 3/A, support DO-254 design assurance, and survive extreme thermal, vibration, radiation, and altitude environments.",
    subDescription:
      "From rigid-flex avionics boards to high-reliability digital backbones, Qmax Systems delivers PCBs that withstand harsh aerospace mission profiles.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/aerospace.png",
    relatedCaseStudies: [
      {
        title: "Smart OBD2 Device",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/OBD/OBD_PR1_BOT.svg",
        href: "/case-studies/smart-obd2-device",
        rotation: 90,
      },
      {
        title: "Digital Stethoscope",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/LSR/P01186LS7_PR1_TOP.svg",
        href: "/case-studies/digital-stethoscope",
      },
      {
        title: "LBM",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/LBM/1.1.png",
        href: "/case-studies/lbm",
      },
    ],
  },
  {
    id: "energy-ev-power",
    label: "Energy, EV & Power",
    title: "Energy, EV & Power",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
    description:
      "Qmax Systems designs power-dense PCBs for EV charging, battery management, solar inverters, and grid-scale energy storage. These layouts handle high voltages, heavy currents, and aggressive EMI and thermal loads using thick-copper stack-ups, GaN/SiC topologies, and tightly routed commutation loops.",
    subDescription:
      "Qmax Systems delivers layouts that minimize parasitics, maximize efficiency, and survive demanding duty cycles of electrification and renewable platforms.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/ev and power.png",
    relatedCaseStudies: [
      {
        title: "Arc Detector",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/arc_detector/1.1.png",
        href: "/case-studies/arc-detector",
      },
      {
        title: "3 phase Smart Energy Meter",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/energy_meter/ENERGY_METER_BOT_PR1.svg",
        href: "/case-studies/3-phase-smart-energy-meter",
        rotation: 90,
      },
      {
        title: "MX1",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/MX1/Mx1_PR1_ALL.svg",
        href: "/case-studies/mx1",
      },
    ],
  },
  {
    id: "communication-systems",
    label: "Communication Systems",
    title: "Communication Systems",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M20.49 3.51a12 12 0 0 1 0 16.97M3.51 20.49a12 12 0 0 1 0-16.97" />
      </svg>
    ),
    description:
      "Qmax Systems designs high-frequency PCBs for 5G infrastructure, satellite communication, IoT gateways, and broadband networking equipment. These RF, mixed-signal, and high-speed digital layouts deliver controlled impedance, low-loss laminates, and tight signal integrity from sub-GHz to mmWave.",
    subDescription:
      "Qmax Systems optimizes antenna routing, ground-plane integrity, and EMI containment for reliable, low-noise performance across multi-layer boards.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/communication.png",
    relatedCaseStudies: [
      {
        title: "Fedarant PCB – Top Layer",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/seat_sensor_signal/P01201CB2-SEATSENSOR-SINGLE_PR1_TOP.svg",
        href: "/case-studies/fedarant-pcb-top-layer",
      },
      {
        title: "PCIe Gen5 CPO Board",
        image: "/case-studies/PCB/PCB-0541/PCB-0541-00_BRD_PR_SIG12.svg",
        href: "/case-studies/pcie-gen5-cpo-board",
      },
      {
        title: "IoT Gateway PCB",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/alphion/1.1.png",
        href: "/case-studies/iot-gateway-pcb",
      },
    ],
  },
  {
    id: "industrial-automation",
    label: "Industrial Automation",
    title: "Industrial Automation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20h20M4 20V8l4-3v15M12 20V4l4 3v13M20 20v-9l-4-2" />
      </svg>
    ),
    description:
      "Qmax Systems designs PCBs for PLCs, servo drives, motor controllers, factory IoT, robotics, and process automation equipment. These high-reliability layouts handle heavy electrical noise, wide temperature ranges, and the long lifespans demanded by 24/7 factory floors and mission-critical industrial control environments.",
    subDescription:
      "Qmax Systems uses heavy-copper power planes, isolated I/O zones, and EMI-hardened layouts to deliver the reliability and durability industrial deployments require.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/industry.png",
    relatedCaseStudies: [
      {
        title: "Ultra Low Cost BLDC motor controller for EVs",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/lucas_tvs/LUCAS TVS_PR1_BOT.svg",
        href: "/case-studies/ultra-low-cost-bldc-motor-controller-for-evs",
        rotation: 90,
      },
      {
        title: "Planar Motor",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/stator_coil/STATOR-COIL-LAYER12.svg",
        href: "/case-studies/planar-motor",
      },
      {
        title: "FE1600",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/FE1600/1.png",
        href: "/case-studies/fe1600",
      },
    ],
  },
];
