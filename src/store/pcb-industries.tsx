import { PCBIndustry } from "@/components/services-cmp/PCBIndustriesSection";
import { advancedModularMedicalSimulatorCaseStudy } from "@/store/full-product-development-case-studies/advanced-modular-medical-simulator";
import { obdIiDiagnosticsDeviceCaseStudy } from "@/store/full-product-development-case-studies/obd-ii-diagnostics-device";
import { fortyPort10gbeCoreRouterLineCardCaseStudy } from "@/store/pcb-case-studies-v2/40-port-10gbe-core-router-line-card";
import { highDensityPcbDesignAiGpuChassisMotherboardCaseStudy } from "@/store/pcb-case-studies-v2/high-density-pcb-design-ai-gpu-chassis-motherboard";
import { highDensityPcbDesignGponOltCaseStudy } from "@/store/pcb-case-studies-v2/high-density-pcb-design-gpon-olt";
import { multiFapPacketProcessingLineCardCaseStudy } from "@/store/pcb-case-studies-v2/multi-fap-packet-processing-line-card";
import { toRelatedCaseStudy } from "@/store/full-product-development-case-studies";

export const PCB_INDUSTRIES: PCBIndustry[] = [
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
      toRelatedCaseStudy(advancedModularMedicalSimulatorCaseStudy, {
        imageIndices: [0, 5, 9],
      }),
    ],
  },
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
      toRelatedCaseStudy(obdIiDiagnosticsDeviceCaseStudy, {
        imageIndices: [0, 1, 2],
      }),
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
      toRelatedCaseStudy(highDensityPcbDesignAiGpuChassisMotherboardCaseStudy, {
        imageIndices: [0, 1, 2],
      }),
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
      toRelatedCaseStudy(fortyPort10gbeCoreRouterLineCardCaseStudy, {
        imageIndices: [0, 1, 2],
      }),
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
      toRelatedCaseStudy(highDensityPcbDesignGponOltCaseStudy, {
        imageIndices: [0, 1, 2],
      }),
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
      toRelatedCaseStudy(multiFapPacketProcessingLineCardCaseStudy, {
        imageIndices: [0, 1, 2],
      }),
    ],
  },
];
