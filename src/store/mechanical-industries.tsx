import { PCBIndustry } from "@/components/services-cmp/PCBIndustriesSection";

export const MECHANICAL_INDUSTRIES: PCBIndustry[] = [
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
      "Designing automotive PCBs for ECUs, infotainment, ADAS, and EV powertrain systems built to meet AEC-Q100 and IATF 16949 standards. Our layouts are engineered to handle harsh thermal cycling, severe vibration, and aggressive EMI across every cabin, chassis, and under-the-hood application.",
    subDescription:
      "From multi-layer ECU boards to high-current EV battery management PCBs, we deliver designs that meet zero-defect quality and full automotive traceability.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/automotive.png",
    relatedCaseStudies: [
      {
        title: "OBD V4 Smart Diagnostic Unit",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/OBD2/OBD_V4_RENDER_23_NOV_2024_MG2_2.1.png",
        href: "/case-studies/obd-v4-system",
      },
      {
        title: "OBD Enclosure",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/OBD/10April2022TekionOBD.1.png",
        href: "/case-studies/obd-enclosure",
      },
      {
        title: "Megawatt Charging Station",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/MCS/1.png",
        href: "/case-studies/mega-watt-charging-station",
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
      "Designing PCBs for medical devices, diagnostics, imaging, and life-critical patient systems. From wearable monitors to surgical and implantable equipment, our layouts meet IPC-6012 Class 3 standards, ISO 13485 design controls, and the strict isolation, creepage, and clearance requirements of regulated healthcare environments.",
    subDescription:
      "We engineer leakage-current-safe routing, reinforced isolation barriers, and long-life stack-ups built for sterilization, longevity, and clinical reliability.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/medical.png",
    relatedCaseStudies: [
      {
        title: "Pulse Oximeter Enclosure",
        image:
          "/case-studies/mechanicalCaseStudies/5/PULSE_OXIMETER_RENDER_2.1.png",
        href: "/case-studies/pulse-oximeter-enclosure",
      },
      {
        title: "Footswitch",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/footswitch/FOOTSWITCH_27_APR_2026_S1.10.png",
        href: "/case-studies/footswitch",
      },
      {
        title: "PC & Oxygen Assembly",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/PC&OXY/OXY_ASSY_RENDER_02_MAY_2026_S1.25.png",
        href: "/case-studies/pc-oxy",
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
      "Designing PCBs for avionics, satellite payloads, defense electronics, and flight-critical and safety-critical aerospace systems where failure is not an option. Our layouts conform to IPC-6012 Class 3/A, support DO-254 design assurance, and survive extreme thermal, vibration, radiation, and altitude environments.",
    subDescription:
      "From rigid-flex avionics boards to high-reliability digital backbones, we deliver PCBs proven to withstand the harshest aerospace mission profiles.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/aerospace.png",
    relatedCaseStudies: [
      {
        title: "Stellar",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/stellar/STELLAR_RENDER_07_MAY_2026_S1.4.png",
        href: "/case-studies/stellar",
      },
      {
        title: "4-Axis Gimbal",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/GIMBAL/GIMBAL_4_AXIS.1.png",
        href: "/case-studies/gimbal",
      },
      {
        title: "RF Signal Generator Enclosure",
        image:
          "/case-studies/mechanicalCaseStudies/4/PG10_RENDER_28_OCT_2024_MG1.1.png",
        href: "/case-studies/rf-signal-generator-enclosure",
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
      "Designing power-dense PCBs for EV charging, battery management, solar inverters, and grid-scale energy storage systems. Our layouts handle high voltages, heavy currents, and aggressive electromagnetic and thermal loads using thick-copper stack-ups, GaN/SiC topologies, and meticulously routed commutation loops.",
    subDescription:
      "We deliver layouts that minimize parasitics, maximize efficiency, and survive the demanding duty cycles of modern electrification and renewable platforms.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/ev and power.png",
    relatedCaseStudies: [
      {
        title: "Mega Watt Charging Station",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/MCS/1.png",
        href: "/case-studies/mega-watt-charging-station",
      },
      {
        title: "ECL Fuel Cell Generator",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/ecl_fuel_cell/ECL_FUEL_CELL_GENERATOR_RENDER_08_MAY_2026_S1.10.png",
        href: "/case-studies/ecl-fuel-cell-generator",
      },
      {
        title: "EMF Flow Meter",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/hydronet/1.png",
        href: "/case-studies/emf-flow-meter",
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
      "Designing high-frequency PCBs for 5G infrastructure, satellite communication, IoT gateways, and broadband networking equipment. Our RF, mixed-signal, and high-speed digital layouts deliver controlled impedance, low-loss laminates, and tight signal integrity from sub-GHz applications through to mmWave.",
    subDescription:
      "We optimize antenna routing, ground plane integrity, and EMI containment to ensure reliable, low-noise performance across complex multi-layer boards.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/communication.png",
    relatedCaseStudies: [
      {
        title: "5G Router",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/SMOAD/SMOAD.1.1.png",
        href: "/case-studies/5g-router",
      },
      {
        title: "OTT Media Gateway",
        image:
          "/case-studies/mechanicalCaseStudies/3/OTT_RENDER_27_NOV_2024_MG2.1.png",
        href: "/case-studies/ott-media-gateway",
      },
      {
        title: "Rugged Communication Control System Enclosure",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/SDR/SDR_RENDERING_11_JAN_2025_S1.1.png",
        href: "/case-studies/rugged-communication-control-system-enclosure",
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
      "Designing PCBs for PLCs, servo drives, motor controllers, factory IoT, robotics, and process automation equipment. Our high-reliability layouts handle heavy electrical noise, wide temperature ranges, and the long operational lifespans demanded by 24/7 factory floors and mission-critical industrial control environments.",
    subDescription:
      "Heavy-copper power planes, isolated I/O zones, and EMI-hardened layouts deliver the reliability and durability that industrial deployments require.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/industry.png",
    relatedCaseStudies: [
      {
        title: "Industrial Splice Detector",
        image:
          "/case-studies/mechanicalCaseStudies/2/SPLICE_DETECTOR_RENDER_2.4.png",
        href: "/case-studies/industrial-splice-detector",
      },
      {
        title: "Industrial Camera Controller Unit",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/IDOCK/FRIZB_IDOCK_RENDER_02_MAY_2026_S1.15.png",
        href: "/case-studies/industrial-camera-controller-unit",
      },
      {
        title: "600Kg Cable Tension Measurement System",
        image:
          "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/tensionmeter/TM450LB_RENDERING_28_MAR_2025_S1.1png.10.png",
        href: "/case-studies/600kg-cable-tension-measurement-system",
      },
    ],
  },
];
