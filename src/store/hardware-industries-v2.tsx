import { PCBIndustry } from "@/components/services-cmp/PCBIndustriesSection";
import { advancedModularMedicalSimulatorCaseStudy } from "@/store/embedded-case-studies-v2/advanced-modular-medical-simulator";
import { canFdIndustrialIoControllerCaseStudy } from "@/store/embedded-case-studies-v2/can-fd-industrial-io-controller";
import { thirtyTwoChannelUltraLowNoiseDaqCaseStudy } from "@/store/embedded-case-studies-v2/32-channel-ultra-low-noise-daq";
import { obdIiDiagnosticsDeviceCaseStudy } from "@/store/full-product-development-case-studies/obd-ii-diagnostics-device";
import { smartRackPduCaseStudy } from "@/store/full-product-development-case-studies/smart-rack-pdu";
import { wifi6eCybersecurityGatewayCaseStudy } from "@/store/full-product-development-case-studies/wifi-6e-cybersecurity-gateway";
import { toRelatedCaseStudy } from "@/store/full-product-development-case-studies";

export const HARDWARE_INDUSTRIES_V2_INTRO =
  "Qmax Systems brings deep domain expertise and a thorough understanding of industry-specific standards to full-lifecycle hardware engineering. We bridge high-complexity hardware architecture with production-ready execution across diverse sectors. From initial schematic capture and high-speed layout to compliance testing, our end-to-end hardware design services ensure robust performance, signal integrity, and seamless firmware-hardware integration for enterprise clients worldwide.";

export const HARDWARE_INDUSTRIES_V2: PCBIndustry[] = [
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
      "We engineer Class II and III medical hardware compliant with ISO 13485, IEC 60601-1, and IEC 60601-1-2 EMI/EMC standards. Our team designs low-noise analog front-ends (AFE), mixed-signal PCBs, and ultra-reliable power distribution networks (PDN) tailored for critical clinical environments.",
    subDescription:
      "Our capabilities span lung sound recorders, gingival oximeters, operation theater light cameras, and phaco machine foot switches. We also develop control electronics for O2/O3 generators and ICU UV-C disinfection systems.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/medical.png",
    relatedCaseStudies: [
      toRelatedCaseStudy(advancedModularMedicalSimulatorCaseStudy, {
        imageIndices: [0, 1, 2],
      }),
    ],
  },
  {
    id: "industrial-iot-controls",
    label: "Industrial IoT & Controls",
    title: "Industrial IoT & Controls",
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
      "We design industrial-grade hardware built to operate reliably under severe thermal stress and harsh electromagnetic environments per IEC 61000 specifications. Our architectures emphasize robust fieldbus communications, isolated I/O interfaces, and long-term component availability.",
    subDescription:
      "Our hardware portfolio includes high-density industrial I/O controllers and inline splice detectors. Additionally, we engineer edge hardware for cold storage monitoring, liquid level sensing, and precision energy measurement systems.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/industry.png",
    relatedCaseStudies: [
      toRelatedCaseStudy(canFdIndustrialIoControllerCaseStudy, {
        imageIndices: [0, 1, 2],
      }),
    ],
  },
  {
    id: "automotive-ev",
    label: "Automotive & EV",
    title: "Automotive & EV",
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
      "Our team delivers automotive hardware adhering to ISO 26262 (ASIL A-D) functional safety requirements and AEC-Q100 component standards. We specialize in high-voltage isolation, efficient thermal management, power conversion, and high-speed CAN-FD/LIN bus integration.",
    subDescription:
      "We design custom Battery Management Systems (BMS), onboard chargers (OBC), and EV motor controllers. Our experience extends to connected vehicle control units (VCU) and OBD-II diagnostic devices.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/automotive.png",
    relatedCaseStudies: [
      toRelatedCaseStudy(obdIiDiagnosticsDeviceCaseStudy, {
        imageIndices: [3, 4, 5],
      }),
    ],
  },
  {
    id: "data-center-ai-infrastructure",
    label: "Data Center & AI Infrastructure",
    title: "Data Center & AI Infrastructure",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="6" rx="1" />
        <rect x="2" y="15" width="20" height="6" rx="1" />
        <path d="M6 6h.01M6 18h.01" />
      </svg>
    ),
    description:
      "We engineer high-density, high-speed hardware for data centers and compute-heavy AI infrastructure. Our designs focus on PCIe Gen 5/6 signal integrity, high-density interconnect (HDI) PCB stackups, dynamic power delivery, and advanced thermal dissipation.",
    subDescription:
      "Our hardware developments encompass GPU expansion boards/chassis and intelligent Power Distribution Units (PDUs). We also design environmental sensors and real-time power monitoring boards for rack-scale deployments.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/ev and power.png",
    relatedCaseStudies: [
      toRelatedCaseStudy(smartRackPduCaseStudy, {
        imageIndices: [0, 1, 2],
      }),
    ],
  },
  {
    id: "telecom-networking-infrastructure",
    label: "Telecom & Networking Infrastructure",
    title: "Telecom & Networking Infrastructure",
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
      "Qmax Systems designs high-frequency telecom and networking hardware in compliance with Telcordia GR-63-CORE and NEBS standards. We excel at complex RF layout, controlled-impedance routing, and low-latency hardware packet-processing architectures.",
    subDescription:
      "Our product history includes Open RAN (ORAN) DU outdoor units, Software Defined Radios (SDR), and Ethernet switches. We also develop enterprise Wi-Fi routers, Wi-Fi security devices, and GPON OLT hardware.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/communication.png",
    relatedCaseStudies: [
      toRelatedCaseStudy(wifi6eCybersecurityGatewayCaseStudy, {
        imageIndices: [0, 1],
      }),
    ],
  },
  {
    id: "scientific-instrumentation",
    label: "Scientific Instrumentation",
    title: "Scientific Instrumentation",
    labelMaxWidth: 100,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3h6M10 3v7.5L5.5 19a2 2 0 0 0 1.7 3h10a2 2 0 0 0 1.7-3L14 10.5V3" />
        <path d="M8.5 14h7" />
      </svg>
    ),
    description:
      "We build ultra-precise instrumentation hardware engineered for demanding scientific and aerospace testing environments. Our design methodology prioritizes sub-nanovolt noise floors, high sampling rates, sub-picofarad sensing accuracy, and zero thermal drift.",
    subDescription:
      "Our portfolio features ultra-high-speed data acquisition systems, plasma generators, and structural health monitoring hardware. We also build ultra-low-noise amplifiers (LNA) for jet engines, cable tension meters, and EIS battery impedance analyzers.",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/pcb-design/PCBIndustriesSection/aerospace.png",
    relatedCaseStudies: [
      toRelatedCaseStudy(thirtyTwoChannelUltraLowNoiseDaqCaseStudy, {
        imageIndices: [0, 1, 2],
      }),
    ],
  },
];
