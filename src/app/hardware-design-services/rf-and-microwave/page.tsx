import type { Metadata } from "next";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import type { ServiceCaseStudy } from "@/data/service-case-studies";
import {
  CoreServiceOfferingsSection,
  type HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import {
  TechnicalAdvantageSection,
  type TechnicalAdvantageCard,
} from "@/components/services-cmp/TechnicalAdvantageSection";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
import {
  ApplicationsProjectExperienceSection,
  type ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import {
  allCaseStudiesData,
  getCaseStudyCardImage,
} from "@/store/case-studies";
import { FAQSection } from "@/components/services-cmp/FAQSection";

function rfMicrowaveProjectExperienceEntry(
  id: string,
  listTitle: string,
  caseStudyId: string,
  description: string,
): ProjectExperienceItem {
  const study = allCaseStudiesData.find(
    (caseStudy) => caseStudy.id === caseStudyId,
  );
  if (!study) {
    throw new Error(`Case study not found: ${caseStudyId}`);
  }

  return {
    id,
    listTitle,
    captionTitle: listTitle,
    description,
    imageSrc: getCaseStudyCardImage(caseStudyId),
    imageAlt: listTitle,
    caseStudyHref: `/case-studies/${study.id}`,
  };
}

function serviceCaseStudies(ids: string[]): ServiceCaseStudy[] {
  return ids.map((id) => {
    const study = allCaseStudiesData.find((c) => c.id === id);
    const image = getCaseStudyCardImage(id);
    if (!study || !image) {
      throw new Error(`Case study missing or has no image: ${id}`);
    }
    const sentenceMatch = study.summary.match(/^[\s\S]*?[.!?](?=\s|$)/);
    const first = (sentenceMatch ? sentenceMatch[0] : study.summary).trim();
    const summary =
      first.length > 200 ? `${first.slice(0, 197).trimEnd()}…` : first;
    return {
      title: study.title,
      image,
      link: `/case-studies/${study.id}`,
      category: "hardware",
      summary,
      imageRotation: study.rotatedImages?.[study.cardImageIndex ?? 0],
    };
  });
}

const rfCaseStudies: ServiceCaseStudy[] = serviceCaseStudies([
  "wifi6-triband-router",
  "ultra-low-power-ble-mouse",
  "capserve",
  "smart-obd2",
]);

const projectExperience: ProjectExperienceItem[] = [
  rfMicrowaveProjectExperienceEntry(
    "antenna-matching-network-design",
    "Antenna & Matching Network Design",
    "capserve",
    "Antenna and matching network design for the Capserve embedded platform, with tuned impedance matching, RF front-end integration, and optimized PCB antenna placement for reliable wireless performance.",
  ),
  rfMicrowaveProjectExperienceEntry(
    "rf-transceiver-system-design",
    "RF Transceiver System Design",
    "ultra-low-power-ble-mouse",
    "Ultra low-power BLE transceiver system design for a wireless mouse reference platform, with optimized RF link budget, multi-device switching, and extended battery life across 2.4 GHz operation.",
  ),
  rfMicrowaveProjectExperienceEntry(
    "lna-design",
    "Low Noise Amplifier (LNA) Design",
    "ir-ble-ac-controller",
    "Low-noise amplifier and RF front-end design for an IR BLE AC controller, with sensitive receive paths, BLE mesh connectivity, and low-power wireless control for smart home automation.",
  ),
  rfMicrowaveProjectExperienceEntry(
    "signal-integrity-rf-shielding",
    "Signal Integrity & RF Shielding",
    "wifi6-triband-router",
    "WiFi 6 triband router with signal integrity and RF shielding across concurrent 2.4, 5, and 6 GHz bands, including compartmentalized RF sections, ground plane integrity, and EMI containment for multi-radio coexistence.",
  ),
  rfMicrowaveProjectExperienceEntry(
    "rf-testing-compliance-validation",
    "RF Testing & Compliance Validation",
    "smart-obd2",
    "RF testing and compliance validation for a Smart OBD2 automotive diagnostics platform, with EMC-hardened automotive RF design, vehicle communication interface verification, and regulatory-ready validation workflows.",
  ),
];

const coreServiceOfferings: HighSpeedCoreOffering[] = [
  {
    id: "rf-pcb",
    tab: "RF PCB Design and Layout",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="M7 9h4M13 9h4M7 13h10M7 17h6" />
      </svg>
    ),
    headline:
      "Precision PCB layout engineered for high-frequency performance, controlled impedance, and RF/digital isolation across complex multi-layer stackups.",
    intro:
      "Qmax Systems provides a vertical suite of engineering services tailored to modern communication and industrial RF needs — from stackup definition through validated layout release. Qmax Systems designs RF PCBs with controlled impedance — 50 Ohm single-ended and 100 Ohm differential — on high-frequency substrates including Rogers 4350B, Taconic, and Panasonic Megtron 6. Qmax Systems engineers optimize multi-layer stackups and apply microstrip, stripline, and coplanar waveguide (CPW) routing with strict RF-to-digital isolation, from stackup definition through validated layout release.",
    points: [
      "Multi-layer stackup optimization for controlled impedance (50 Ohm single-ended, 100 Ohm differential).",
      "Utilization of high-frequency substrates (Rogers, Taconic, Megtron 6).",
      "Microstrip, stripline, and coplanar waveguide (CPW) design.",
      "Strict isolation techniques to prevent crosstalk between RF and digital domains.",
    ],
    applications:
      "Rogers · Taconic · Megtron 6 · Hybrid stackups · WiFi/Cellular modules · Industrial RF",
  },
  {
    id: "rffe",
    tab: "RF Front-End (RFFE) Design",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M20.49 4.51a10 10 0 0 1 0 14.14M3.51 19.49a10 10 0 0 1 0-14.14" />
      </svg>
    ),
    headline:
      "Complete RF front-end design from low-noise amplifiers to power amplifiers and precision filter integration.",
    intro:
      "Qmax Systems designs complete RF front-ends covering Low Noise Amplifiers (LNAs) and Power Amplifiers (PAs) for 4G LTE and 5G NR infrastructure. Qmax Systems integrates SAW, BAW, and discrete LC filters for harmonic suppression and uses Smith chart-based matching networks to maximize power transfer, holding VSWR below 1.5:1 across the operating band for private 5G and IoT radios.",
    points: [
      {
        boldLead: "LNA and PA Design",
        rest: " — development of Low Noise Amplifiers and Power Amplifiers for 4G/5G infrastructure.",
      },
      {
        boldLead: "Filter Design",
        rest: " — integration of SAW, BAW, and discrete LC filters for harmonic suppression.",
      },
      {
        boldLead: "Impedance Matching",
        rest: " — Smith chart-based matching network optimization for maximum power transfer.",
      },
    ],
    applications:
      "SAW · BAW · LC Filters · LNA · PA · Smith Chart Matching · Private 5G · IoT radios",
  },
  {
    id: "simulation",
    tab: "Simulation and Modeling",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 17l6-6 4 4 8-10" />
        <path d="M14 5h7v7" />
      </svg>
    ),
    headline:
      "Full-wave 3D electromagnetic simulation and link budget analysis driving every design decision.",
    intro:
      "Qmax Systems runs a simulation-first methodology, validating RF performance with full-wave 3D electromagnetic simulation before the first trace is routed. Qmax Systems engineers perform link budget analysis with range estimation and thermal modeling for high-power RF components, feeding exact routing constraints into layout so designs meet signal-integrity and regulatory targets on first build.",
    points: [
      "Full-wave 3D electromagnetic simulation.",
      "Link budget analysis and range estimation.",
      "Thermal modeling for high-power RF components.",
    ],
    applications:
      "EM Simulation → Link Budget → Thermal Analysis → Layout → Validation",
  },
];

const WHY_CARDS = [
  {
    title: "Manufacturing Readiness",
    desc: "Every design is optimized for DFM (Design for Manufacturing) and DFT (Design for Test) before production release.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="10" width="32" height="28" rx="2" />
        <path d="M16 20h16M16 26h10M16 32h14" />
      </svg>
    ),
  },
  {
    title: "EMI/EMC Mitigation",
    desc: "Our designs proactively for Radiated Emissions (RE) and Conducted Emissions (CE) optimization.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 L20 6 L20 12 C20 17 16 20 12 21 C8 20 4 17 4 12 L4 6 Z" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    title: "Reduced Time-to-Market",
    desc: "We accelerate the development cycle with proven reference designs and modular blocks - backed by high-performance PCB vendor relationships and silicon vendor partnerships.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v10l7 4" />
      </svg>
    ),
  },
  {
    title: "In-House Validation",
    desc: "Our engineers validate designs on advanced instrumentation, including the Rohde & Schwarz CMW500, high-bandwidth oscilloscopes, and spectrum analyzers.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 30 L18 20 L24 26 L34 16 L42 24" />
        <path d="M6 38 L42 38" />
      </svg>
    ),
  },
  {
    title: "Ground Loop Elimination",
    desc: "We  partition analog, digital, and RF grounds to prevent parasitic interference.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8 H16 A4 4 0 0 1 16 16 H8" />
        <polyline points="11 13 8 16 11 19" />
        <path d="M44 40 H32 A4 4 0 0 1 32 32 H40" />
        <polyline points="37 35 40 32 37 29" />
      </svg>
    ),
  },
  {
    title: "Platform Versatility",
    desc: "We have extensive experience with Qualcomm, MediaTek, Nordic, and TI wireless platforms.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="10" y="14" width="28" height="20" rx="2" />
        <path d="M18 10h12v4H18z" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
  },
  {
    title: "Noise Reduction & Signal Conditioning",
    desc: "We apply advanced techniques for lowering the noise floor in sensitive receiver chains, with strategic domain partitioning to prevent cross-talk and desensitization.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 24h8l4-10 8 20 4-10h8" />
      </svg>
    ),
  },
  {
    title: "Domain Expertise",
    desc: "With decades of experience in high-speed digital and RF co-existence, Qmax Systems engineers bring deep, proven knowledge to every design challenge across commercial, industrial, medical, and defense applications.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 6l16 8v12c0 10-7 14-16 16C15 40 8 36 8 26V14l16-8z" />
        <path d="M24 18v12" />
        <path d="M18 24h12" />
      </svg>
    ),
  },
];

const RF_TECHNICAL_CARDS: TechnicalAdvantageCard[] = [
  {
    title: "Signal Integrity (SI)",
    body: "Our engineers mitigate skin-effect losses, copper-roughness impact, and via-stub resonance at frequencies exceeding 24 GHz.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <path d="M2 12h3l3-9 4 18 3-12 2 6h5" />
      </svg>
    ),
  },
  {
    title: "Noise Floor Reduction",
    body: "We partition analog, digital, power, and RF domains to prevent cross-talk and receiver desensitization.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <path d="M12 3 L20 6 L20 12 C20 17 16 20 12 21 C8 20 4 17 4 12 L4 6 Z" />
      </svg>
    ),
  },
  {
    title: "RF Generators",
    body: "Our team designs high-power RF generators - including 1 kW HF and 500W LF configurations - for plasma etching, thin-film deposition, and medical ablation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <polygon points="11 3 5 13 11 13 9 21 17 11 11 11" />
      </svg>
    ),
  },
  {
    title: "WiFi 6/6E and WiFi 7",
    body: "We implement High-Efficiency (HE) and Extremely High Throughput (EHT) standards, with 4x4 and 8x8 MU-MIMO antenna configurations and OFDMA sub-carrier mapping.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Cellular (4G LTE / 5G NR)",
    body: "Our experts design RFFE with Low Noise Amplifiers (LNA) and Power Amplifiers (PA), managing carrier aggregation and beamforming architectures for sub-6 GHz and mmWave bands.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 18h6" />
      </svg>
    ),
  },
  {
    title: "LPWAN and Short Range",
    body: "We optimize LoRaWAN, Sigfox, and BLE 5.4 for low power, maximizing battery life through sleep-current profiling and impedance matching at the antenna feed point.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Industrial Sensing",
    body: "Our engineers develop microwave-based sensors for non-destructive testing (NDT), including high-accuracy moisture measurement and material-density analysis using phase-shift detection.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
  },
  {
    title: "Substrate Selection",
    body: "We utilize low-loss materials including Rogers 4350B/3003, Panasonic Megtron 6, and Tachyon 100G to minimize dissipation factor - with surface-finish selection, precise surface-roughness calculations, and skin-effect analysis to ensure minimal I2R losses.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    ),
  },
  {
    title: "EMI/EMC Pre-compliance",
    body: "Our team runs early-stage simulation and internal testing for Radiated Emissions (RE) and Conducted Emissions (CE), specializing in ground-loop elimination and common-mode choke selection.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Power Electronics Integration",
    body: "We manage thermal dissipation and EMI shielding in high-density power RF modules.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: "Impedance Matching",
    body: "Our engineers use Smith Charts for complex conjugate matching, holding VSWR < 1.5:1 across operational bandwidths.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="16" cy="12" r="5" />
      </svg>
    ),
  },
  {
    title: "Precision Layout",
    body: "We implement controlled-impedance traces with strict adherence to phase matching and propagation-delay requirements.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <path d="M4 6h16M4 12h10M4 18h16" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "What frequency ranges do Qmax Systems RF services cover?",
    a: "Qmax Systems covers RF and microwave design from Low Frequency (LF) and High Frequency (HF) bands through Millimeter Wave (mmWave) from 24 GHz to 77 GHz and above. This range spans sub-GHz LPWAN, 2.4/5/6 GHz WiFi, sub-6 GHz 5G NR, and automotive 77 GHz radar. Qmax Systems selects substrates and stackups for each band, using FR-4 below 1 GHz and Rogers 4350B or Megtron 6 above it.",
  },
  {
    q: "Can Qmax Systems assist with WiFi 6/6E and WiFi 7 transitions?",
    a: "Yes. Qmax Systems designs WiFi 6, 6E, and WiFi 7 hardware, including 4x4 and 8x8 MU-MIMO configurations and concurrent tri-band (2.4/5/6 GHz) architectures. Qmax Systems implements 320 MHz channels, 4096-QAM, and Multi-Link Operation (MLO) on current Qualcomm and MediaTek SoCs, managing OFDMA sub-carrier mapping and RF isolation between radios to sustain throughput in dense deployments.",
  },
  {
    q: "How does Qmax Systems handle EMI/EMC issues in compact designs?",
    a: "Qmax Systems controls EMI/EMC at the source through board-level shielding cans, analog/digital/RF domain partitioning, and multi-layer stackups with continuous ground reference planes. Qmax Systems engineers run pre-compliance scans with near-field probes to locate radiated and conducted emission hotspots early, then add common-mode chokes and filtering before formal FCC Part 15 or CE testing.",
  },
  {
    q: "Does Qmax Systems provide antenna design and tuning services?",
    a: "Yes. Qmax Systems designs custom PCB antennas, selects chip and external antennas, and tunes impedance matching networks for optimal radiation pattern and efficiency. Qmax Systems engineers use Smith chart-based L, Pi, and T matching to hold VSWR below 1.5:1 at the antenna feed point and validate radiation performance on a vector network analyzer (VNA) against S11 targets.",
  },
  {
    q: "What tools does Qmax Systems use for RF simulation?",
    a: "Qmax Systems runs RF simulation using full-wave 3D electromagnetic solvers including HFSS, alongside circuit/EDA tools for schematic capture, controlled-impedance layout, and link-budget analysis. Qmax Systems engineers use these tools to simulate trace geometry, matching networks, and antenna structures before routing - establishing exact width, gap, and length-matching constraints so first-build hardware meets signal-integrity and VSWR targets without iterative respins.",
  },
  {
    q: "Can Qmax Systems help with 4G/5G private network hardware?",
    a: "Yes. Qmax Systems designs RF front-ends - including Low Noise Amplifiers (LNAs) and Power Amplifiers (PAs) - for 4G LTE and private 5G NR network hardware. Qmax Systems handles sub-6 GHz and mmWave bands, carrier aggregation, and beamforming front-ends, integrating SAW/BAW filtering and Smith chart matching to meet sensitivity and linearity targets for small-cell and CBRS deployments.",
  },
  {
    q: "What is Qmax Systems' experience with high-power RF?",
    a: "Qmax Systems has engineered RF generators in both 1 kW HF and 500W LF configurations for industrial plasma applications including etching, thin-film deposition, and medical ablation. Qmax Systems engineers focus on 13.56 MHz ISM-band power delivery, automatic impedance matching to dynamic plasma loads, thermal management, and high-VSWR protection using directional couplers and foldback circuitry to safeguard the power amplifier.",
  },
  {
    q: "Does Qmax Systems support LoRa and other Long Range LPWAN protocols?",
    a: "Yes. Qmax Systems designs LoRaWAN, Sigfox, and other LPWAN devices for industrial and agricultural sensing. Qmax Systems engineers tune spreading factor against receiver sensitivity and select high-gain antennas to achieve typical urban link ranges of 2-5 km, while profiling sleep current and matching the antenna feed point to maximize multi-year battery life.",
  },
  {
    q: "How does Qmax Systems ensure ground loop elimination?",
    a: "Qmax Systems eliminates ground loops with star-grounding, controlled split planes, and differential signaling between circuit domains. Qmax Systems engineers partition analog, digital, power, and RF grounds with single-point connections to block common-mode noise coupling, and validate the strategy in pre-compliance testing to confirm low conducted emissions before formal certification.",
  },
  {
    q: "What in-house testing capabilities does Qmax Systems have?",
    a: "Qmax Systems operates an in-house RF lab equipped with the Rohde & Schwarz CMW500 radio communication tester, spectrum analyzers, vector network analyzers, and high-bandwidth oscilloscopes. Qmax Systems engineers run RF conformance, signal-integrity, and EMI/EMC pre-compliance validation on this equipment, measuring EVM, S-parameters, and emissions before designs proceed to accredited certification testing.",
  },
  {
    q: "Can Qmax Systems optimize a design for low power consumption?",
    a: "Yes. Qmax Systems optimizes wireless designs for low power consumption through hardware and firmware co-design, demonstrated in ultra-low-power BLE reference designs created for global semiconductor leaders. Qmax Systems engineers profile sleep and active current, tune duty cycling and RF output power, and match the antenna feed point to extend battery life in BLE 5.4 and LPWAN devices.",
  },
  {
    q: "Does Qmax Systems handle mmWave sensor integration?",
    a: "Yes. Qmax Systems integrates mmWave sensors for proximity, velocity, and presence detection in industrial environments, operating in the 24 GHz to 77 GHz+ range. Qmax Systems engineers manage extreme trace-geometry sensitivity on low-loss substrates such as Rogers 4350B, where minor width variation causes impedance discontinuity, and validate radiation and detection performance before release.",
  },
  {
    q: "What materials does Qmax Systems recommend for Microwave PCBs?",
    a: "Qmax Systems specifies microwave PCB substrates by frequency and loss budget. Below 1 GHz, FR-4 is adequate; above it, Qmax Systems engineers select low-loss laminates such as Rogers 4350B/3003, Panasonic Megtron 6, Taconic, or Tachyon 100G for their low dissipation factor (tan delta). Material choice is paired with surface-finish and skin-effect analysis to minimize I2R loss at high frequency.",
  },
  {
    q: "Can Qmax Systems help with FCC/CE certification?",
    a: "Qmax Systems is a design house that performs extensive in-house pre-compliance testing to help products pass FCC Part 15 and CE certification on the first attempt. Qmax Systems engineers measure radiated and conducted emissions with near-field probes and spectrum analyzers, fixing emission sources before accredited lab testing - though final certification is issued by an accredited test house.",
  },
  {
    q: "What information does Qmax Systems need to start an RF project?",
    a: "To start an RF project, Qmax Systems needs the target frequency bands, link budget, power output targets, and any mechanical constraints on PCB size or enclosure. With these inputs, Qmax Systems engineers define the stackup, substrate, and matching strategy up front, then validate the approach in simulation before layout to reduce respins and protect the schedule.",
  },
  {
    q: "Does Qmax Systems help with component sourcing and BOM optimization?",
    a: "Yes. Qmax Systems optimizes the bill of materials (BOM) by balancing RF performance, cost, and lifecycle availability. Qmax Systems engineers proactively identify second-source options for critical RF components such as amplifiers, SAW/BAW filters, and SoCs, reducing supply risk and end-of-life exposure while holding the design to its signal-integrity and compliance targets.",
  },
  {
    q: "How does Qmax Systems approach RF design for medical vs military applications?",
    a: "Qmax Systems tailors RF design to each domain's governing standards. For medical devices (IEC 60601), Qmax Systems engineers prioritize wireless coexistence and patient safety; for defense electronics (MIL-STD-461), they prioritize robustness and interference resilience. Qmax Systems adapts shielding, redundancy, and validation strategy to the target environment and certification regime rather than applying a single fixed approach.",
  },
  {
    q: "How does Qmax Systems leverage WiFi 7 to improve throughput over WiFi 6?",
    a: "Qmax Systems builds WiFi 7 hardware that reaches up to 46 Gbps using 320 MHz channels and 4096-QAM, versus WiFi 6's 160 MHz and 1024-QAM ceiling. Qmax Systems also implements Multi-Link Operation (MLO) for simultaneous multi-band transmission, designing the RF isolation and stackup needed to sustain these rates across concurrent 2.4/5/6 GHz radios.",
  },
  {
    q: "What are the primary challenges Qmax Systems addresses in 5G mmWave PCB design?",
    a: "Qmax Systems addresses two primary 5G mmWave PCB challenges: high atmospheric attenuation and extreme sensitivity to trace geometry. At mmWave frequencies, Qmax Systems engineers note that even minor trace-width variation causes significant impedance discontinuity, so designs use low-loss substrates such as Rogers 4350B, tight etch tolerance, and full-wave EM simulation to control loss and matching.",
  },
  {
    q: "How does Qmax Systems prevent desensitization (Desense) in multi-radio IoT devices?",
    a: "Qmax Systems reduces desensitization (Desense) in multi-radio IoT devices with high-rejection BAW filters and strategic spatial isolation between antennas. Qmax Systems engineers partition RF sections and manage frequency planning so harmonics and spurs from one radio fall outside the receive band of another, minimizing inter-radio interference in dense WiFi/BLE/cellular coexistence.",
  },
  {
    q: "Why does Qmax Systems use MU-MIMO for enterprise WiFi networks?",
    a: "Qmax Systems uses MU-MIMO in enterprise WiFi designs because it lets an access point serve multiple clients simultaneously instead of sequentially, sharply raising capacity in high-density environments. Qmax Systems engineers implement 4x4 and 8x8 MU-MIMO with careful antenna spacing and RF isolation so beamformed streams stay separable under heavy client load.",
  },
  {
    q: "What LoRaWAN link range does Qmax Systems achieve in an urban environment?",
    a: "Qmax Systems achieves typical urban LoRaWAN link ranges of 2-5 km, depending on link budget and building density. Qmax Systems engineers extend range by selecting high-gain antennas and tuning the spreading factor to balance data rate against receiver sensitivity, while matching the antenna feed point to preserve link margin in cluttered RF environments.",
  },
  {
    q: "How does Qmax Systems protect a 1 kW RF generator from high VSWR?",
    a: "Qmax Systems protects 1 kW RF generators from high VSWR with high-speed directional couplers and foldback circuitry. When plasma loads become unmatched, reflected power can damage the power amplifier; Qmax Systems engineers detect these impedance shifts in real time and reduce output power until the matching network re-stabilizes the load, preventing PA failure during process transients.",
  },
  {
    q: "Why does Qmax Systems use 13.56 MHz for industrial plasma generators?",
    a: "Qmax Systems designs industrial plasma generators at 13.56 MHz because it is an assigned ISM band that balances ion energy and plasma density. Qmax Systems engineers use this frequency for efficient power delivery while keeping interference manageable, provided the matching network is tuned to the chamber impedance - the basis of stable etch and deposition processes.",
  },
  {
    q: "What PCB substrate does Qmax Systems use for high-power RF applications?",
    a: "Qmax Systems specifies Rogers 4350B and Panasonic Megtron 6 for high-power RF applications because of their low dissipation factor (tan delta). Standard FR-4 has too high a loss tangent above 1 GHz for efficient power transfer, so Qmax Systems engineers reserve it for sub-1 GHz sections and route high-power, high-frequency paths on low-loss laminate.",
  },
  {
    q: "How does Qmax Systems manage thermal dissipation in GaN-on-SiC power amplifiers?",
    a: "Qmax Systems manages GaN-on-SiC power amplifier heat with copper-filled thermal vias and embedded copper coins that pull heat directly from the die. Because GaN devices run at high junction temperatures, Qmax Systems engineers treat die-to-heatsink thermal resistance as a primary design constraint, modeling it alongside the RF path to keep junction temperature within reliable limits.",
  },
  {
    q: "How does Qmax Systems use a matching network in an RF system?",
    a: "Qmax Systems uses a matching network to maximize power transfer by aligning source and load impedance to 50 Ohm. Using Smith Charts, Qmax Systems engineers design L, Pi, or T networks that hold VSWR below 1.5:1 across the operating bandwidth, reducing reflected power and protecting amplifier output in both communication and high-power RF systems.",
  },
  {
    q: "Why do products fail FCC Part 15 Radiated Emissions, and how does Qmax Systems prevent it?",
    a: "Qmax Systems finds that FCC Part 15 radiated-emission failures are usually caused by unintended antennas - unshielded cables or poorly bypassed traces that radiate. Qmax Systems engineers run pre-compliance testing with near-field probes to locate emission sources before formal testing, then add shielding, filtering, and bypassing to bring the design under the Part 15 limit on the first official attempt.",
  },
  {
    q: "What is the difference between pre-compliance and full certification at Qmax Systems?",
    a: "Qmax Systems treats pre-compliance as the engineering phase that finds and fixes EMI/EMC issues early, while full certification is the final formal testing required for market access. Qmax Systems engineers run pre-compliance in-house with spectrum analyzers and near-field probes to reduce risk and cost before designs reach an accredited test house for FCC or CE certification.",
  },
  {
    q: "How does Qmax Systems reduce Conducted Emissions (CE) in a switching power supply?",
    a: "Qmax Systems reduces conducted emissions (CE) in switching power supplies with a tuned Pi-filter at the power input. Qmax Systems engineers also apply ground-loop control and add snubbers across switching FETs to damp high-frequency ringing that would otherwise couple onto power lines, validating the result in pre-compliance before formal CE testing.",
  },
  {
    q: "What is controlled impedance, and why does Qmax Systems treat it as critical for RF?",
    a: "Controlled impedance maintains a target line impedance, typically 50 Ohm, to minimize reflections. Qmax Systems treats it as critical because impedance changes cause signal reflections that degrade receiver sensitivity and raise emissions. Qmax Systems engineers achieve it through defined trace width, dielectric height, and stackup control, verified against the substrate's dielectric constant during layout.",
  },
  {
    q: "How does Qmax Systems account for skin effect in RF PCB layout?",
    a: "Qmax Systems accounts for skin effect, where high-frequency current crowds near the copper surface and raises effective resistance. Qmax Systems engineers specify surface finish, conductor roughness, and trace geometry to minimize I2R loss, choosing smoother copper and low-loss laminate such as Megtron 6 on high-frequency paths where roughness-driven loss would otherwise dominate.",
  },
  {
    q: "What does Qmax Systems use a VNA (Vector Network Analyzer) for?",
    a: "Qmax Systems uses a vector network analyzer (VNA) to measure S-parameters that characterize impedance match and transmission behavior. Qmax Systems engineers read S11 to quantify reflected power and S21 to quantify transmitted power, using these measurements to verify matching networks, filters, and antennas against VSWR and insertion-loss targets during validation.",
  },
  {
    q: "What is EVM (Error Vector Magnitude), and why does Qmax Systems track it for WiFi?",
    a: "EVM (Error Vector Magnitude) is a measure of modulation quality, and Qmax Systems tracks it because higher EVM means noisier constellation points. Qmax Systems engineers monitor EVM on the CMW500 because degraded EVM forces lower modulation schemes - dropping from 4096-QAM toward 1024-QAM - which reduces WiFi throughput. Tight EVM keeps high-order modulation and peak data rates intact.",
  },
  {
    q: "What is the difference between FCC Modular Approval and Full Integration?",
    a: "FCC Modular Approval lets a product use a pre-certified radio module, but the host device still requires testing for unintentional radiation. Full Integration - where the radio is designed on-board - requires the stricter Intentional Radiator certification under FCC Part 15C. Qmax Systems engineers design for both paths, selecting the appropriate certification strategy based on the product's radio architecture, schedule, and cost constraints.",
  },
  {
    q: "What is the Fiber Weave Effect and how does Qmax Systems address it?",
    a: "The Fiber Weave Effect is a timing skew caused by uneven glass fiber distribution in a PCB substrate. If one trace sits on a fiber bundle and its pair sits on resin, they travel at different speeds, causing impedance variation and signal skew. Qmax Systems engineers address this using zig-zag routing, spread-weave glass fabrics, or low-Dk filled laminates on high-frequency differential pairs to equalize propagation delay and maintain controlled impedance.",
  },
  {
    q: "Why should via stubs be avoided in high-frequency RF designs?",
    a: "Via stubs act as resonant stubs that trap and reflect RF energy at specific frequencies, causing impedance discontinuities and signal loss. In designs above 10 GHz, Qmax Systems engineers eliminate via stubs using back-drilling to remove the unused barrel portion, or by specifying blind and buried vias - ensuring a clean, low-reflection signal path across mmWave and high-speed digital layers.",
  },
  {
    q: "How does Qmax Systems perform RF near-field versus far-field testing?",
    a: "Qmax Systems uses near-field probing in its in-house lab to locate specific PCB noise sources - identifying radiating traces, unshielded cables, or coupling paths at the board level. Far-field testing, conducted in an anechoic chamber at an accredited test house, measures the actual radiation pattern and power of the finished device as it will behave in the real world, providing the data required for FCC and CE certification.",
  },
  {
    q: "What is TRP (Total Radiated Power) and why does it matter for device testing?",
    a: "TRP (Total Radiated Power) measures total power emitted by an antenna across all directions. Unlike a simple conducted cable test, TRP captures both antenna efficiency and the impact of the device enclosure on signal strength - making it the accurate measure of real-world transmit performance. Qmax Systems engineers account for TRP targets during antenna design to ensure conducted output power translates into sufficient radiated power at the device level.",
  },
  {
    q: "What is the typical cost of an RF design re-spin, and how does Qmax Systems prevent it?",
    a: "A single RF design re-spin can cost $5,000 to $50,000 in PCB fabrication, assembly, and re-testing - plus weeks or months of market delay. Qmax Systems prevents re-spins through a simulation-first methodology: full-wave 3D EM simulation and pre-compliance testing identify signal-integrity and emission issues before the first board is built, targeting first-time-right designs that avoid these expenses entirely.",
  },
  {
    q: "How does Qmax Systems ensure unit-to-unit RF consistency in mass production?",
    a: "Qmax Systems specifies controlled-impedance test coupons on every PCB panel to verify that the fabricated stackup matches the design target, and designs automated RF functional test (FCT) coverage into the manufacturing flow. This ensures that the 10,000th unit off the production line performs identically to the prototype validated in the lab - with documented impedance, VSWR, and emissions data tied to each production lot.",
  },
  {
    q: "What is Phase Noise and how does it impact WiFi 7's 4096-QAM?",
    a: "Phase noise is jitter in a radio's frequency source that causes the signal's phase to wander, making constellation points ambiguous. For WiFi 7's 4096-QAM, even small phase noise forces the link to drop to a lower, slower modulation rate or fail entirely. Qmax Systems engineers specify low phase-noise oscillators and PLLs, and validate EVM on the Rohde & Schwarz CMW500 to confirm the radio sustains high-order modulation under real operating conditions.",
  },
];

export const metadata: Metadata = {
  title: "RF and Microwave Engineering Services | Qmax",
  description:
    "RF and microwave engineering from sub-GHz IoT to mmWave — PCB layout, RFFE design, simulation, validation, and manufacturable wireless hardware.",
};

export default function RfAndMicrowavePage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="/hw-main/hw_rf_and_microwave.jpg"
        imageAlt="RF and Microwave Engineering — Qmax Systems"
        title="RF and Microwave Engineering Services"
        description={
          <p>
            Qmax Systems provides comprehensive RF and Microwave Engineering
            services, bridging the gap between theoretical electromagnetics and
            robust, manufacturable hardware. From sub-GHz IoT modules to mmWave
            sensor arrays and 1 kW industrial plasma generators, Qmax Systems
            delivers end-to-end RF PCB design, RF front-end (RFFE) engineering,
            full-wave electromagnetic simulation, and EMI/EMC pre-compliance
            validation - covering LF/HF through 77 GHz+ mmWave bands with
            controlled-impedance layout on Rogers and Megtron 6 substrates -
            ensuring optimal signal integrity and regulatory compliance on first
            build.
          </p>
        }
        ctaHref="/hardware-design-services/contact"
        ctaLabel="Talk to Our Engineers"
      />

      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        title="Core Service "
        titleHighlight="Capabilities"
      />

      <ApplicationsProjectExperienceSection
        projects={projectExperience}
        title="Applications & Real-World "
        titleHighlight="Project Experience"
        subtitle="Our portfolio reflects a deep understanding of hardware constraints and high-performance requirements."
      />

      <TechnicalAdvantageSection
        headingHighlight="RF and Microwave"
        lede="From WiFi 7 and 5G NR to industrial plasma generators and mmWave sensing — Qmax Systems applies simulation-first RF engineering across the full wireless stack."
        cards={RF_TECHNICAL_CARDS}
        columns="three"
        sectionHeadingId="technical-advantage-rf-heading"
      />

      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight=" RF and Microwave?"
        description="Qmax Systems distinguishes itself through a rigorous focus on the physics of high-frequency signals."
        consultationCta={{
          heading:
            "Get A Complimentary Consultation With Our RF & Microwave Experts.",
          subtitle:
            "1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven — no sales pitch.",
          ctaHref: "/hardware-design-services/contact",
        }}
      />

      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={rfCaseStudies}
        hideTopBorder
      />

      <FAQSection faqItems={faqs} />
      <div className="pb-28"></div>
    </>
  );
}
