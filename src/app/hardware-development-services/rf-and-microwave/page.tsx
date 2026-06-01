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
import { ConsultationCtaBar } from "@/components/services-cmp/ConsultationCtaBar";
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
      "We provide a vertical suite of engineering services tailored to modern communication and industrial RF needs — from stackup definition through validated layout release.",
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
      "End-to-end RFFE engineering covering amplification, filtering, and impedance matching for 4G/5G and beyond.",
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
      "Simulation-first methodology ensuring RF performance is validated before a single trace is routed.",
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
    desc: "Our designs are optimized for DFM (Design for Manufacturing) and DFT (Design for Test).",
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
    desc: "Proactive design for Radiated Emissions (RE) and Conducted Emissions (CE) optimization.",
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
    desc: "Proven reference designs and modular blocks accelerate the development cycle — backed by RF, high-performance PCB vendor relationships, and silicon vendor partnerships.",
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
    desc: "Utilization of advanced instrumentation, including the Rohde & Schwarz CMW500, high-bandwidth oscilloscopes, and spectrum analyzers.",
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
    desc: "Strategic partitioning of analog, digital, and RF grounds to prevent parasitic interference.",
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
    desc: "Deep experience with Qualcomm, MediaTek, Nordic, and TI wireless platforms.",
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
];

const RF_TECHNICAL_CARDS: TechnicalAdvantageCard[] = [
  {
    title: "Signal Integrity (SI)",
    body: "Mitigation of skin effect losses, copper roughness impact, and via-stub resonance at frequencies exceeding 24 GHz.",
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
    body: "Strategic partitioning of analog, digital, power, and RF domains to prevent cross-talk and desensitization.",
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
    body: "Design of high-power HF/LF generators (up to 1 kW) for plasma etching, thin-film deposition, and medical ablation.",
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
    body: "Implementation of High-Efficiency (HE) and Extremely High Throughput (EHT) standards. Expertise in 4×4 and 8×8 MU-MIMO antenna configurations and OFDMA sub-carrier mapping.",
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
    body: "Design of RFFE involving Low Noise Amplifiers (LNA) and Power Amplifiers (PA). We manage complex carrier aggregation and beamforming architectures for sub-6 GHz and mmWave bands.",
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
    body: "Specialized low-power optimization for LoRaWAN, Sigfox, and BLE 5.4. We focus on maximizing battery life through rigorous sleep-current profiling and impedance matching at the antenna feed point.",
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
    body: "Development of microwave-based sensors for non-destructive testing (NDT), including high-accuracy moisture measurement and material density analysis using phase-shift detection.",
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
    body: "Expert utilization of low-loss materials including Rogers 4350B/3003, Panasonic Megtron 6, and Tachyon 100G to minimize dissipation factors — with surface finish and skin-effect analysis for minimal I²R losses.",
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
    body: "Early-stage simulation and internal testing to address Radiated Emissions (RE) and Conducted Emissions (CE). We specialize in ground loop elimination and common-mode choke selection.",
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
    body: "Managing thermal dissipation and EMI shielding in high-density power RF modules.",
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
    body: "Utilization of Smith Charts for complex conjugate matching, ensuring VSWR < 1.5:1 across operational bandwidths.",
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
    body: "Implementation of controlled impedance traces with strict adherence to phase matching and propagation delay requirements.",
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
    q: "What frequency ranges do your RF services cover?",
    a: "We cover the spectrum from Low Frequency (LF) and High Frequency (HF) up to Millimeter Wave (mmWave) bands (24GHz to 77GHz+).",
  },
  {
    q: "Can you assist with WiFi 6/6E and WiFi 7 transitions?",
    a: "Yes. We have extensive experience with 4x4 MIMO configurations and the latest tri-band architectures using advanced SoCs.",
  },
  {
    q: "How do you handle EMI/EMC issues in compact designs?",
    a: "We utilize specialized shielding, component partitioning, and multi-layer PCB stackups to mitigate electromagnetic interference at the source.",
  },
  {
    q: "Do you provide antenna design and tuning services?",
    a: "We offer custom PCB antenna design, antenna selection, and impedance matching to ensure optimal radiation patterns and efficiency.",
  },
  {
    q: "What tools do you use for RF simulation?",
    a: "We utilize industry-standard EDA tools for schematic capture, layout, and 3D electromagnetic field simulation.",
  },
  {
    q: "Can Qmax Systems help with 4G/5G private network hardware?",
    a: "Yes, we design RF front-ends, including LNAs and Power Amplifiers, specifically for cellular infrastructure.",
  },
  {
    q: "What is your experience with high-power RF?",
    a: "We have successfully developed RF generators up to 1KW for industrial plasma applications, focusing on thermal management and power stability.",
  },
  {
    q: "Do you support LoRa and other Long Range LPWAN protocols?",
    a: "Yes, we have designed several LoRa-based devices for industrial and agricultural sensing.",
  },
  {
    q: "How do you ensure ground loop elimination?",
    a: "We implement star-grounding, split planes, and differential signaling where appropriate to prevent common-mode noise.",
  },
  {
    q: "What in-house testing capabilities do you have?",
    a: "Our lab is equipped with the R&S CMW500, spectrum analyzers, and high-speed oscilloscopes for comprehensive signal characterization.",
  },
  {
    q: "Can you optimize a design for low power consumption?",
    a: "Our work on BLE reference designs for semiconductor companies demonstrates our ability to maximize battery life through hardware and firmware optimization.",
  },
  {
    q: "Do you handle mmWave sensor integration?",
    a: "Yes, we have implemented several mmWave sensors for proximity and velocity detection in industrial environments.",
  },
  {
    q: "What materials do you recommend for Microwave PCBs?",
    a: "Depending on the frequency and loss budget, we typically specify Rogers, Taconic, or Panasonic Megtron series materials.",
  },
  {
    q: "Can you help with FCC/CE certification?",
    a: "While we are a design house, we perform extensive pre-compliance testing to help ensure your product passes official certification on the first attempt.",
  },
  {
    q: "What information is needed to start an RF project?",
    a: "Ideally, we require the link budget, required frequency bands, power output targets, and any mechanical constraints regarding PCB size or enclosure.",
  },
  {
    q: "How does WiFi 7 improve throughput compared to WiFi 6?",
    a: "WiFi 7 achieves speeds up to 46 Gbps by utilizing 320 MHz channels and 4096-QAM. WiFi 6 is limited to 160 MHz and 1024-QAM. WiFi 7 also introduces Multi-Link Operation (MLO), allowing devices to transmit data across 2.4, 5, and 6 GHz simultaneously to reduce latency and congestion.",
  },
  {
    q: "What are the primary challenges in 5G mmWave PCB design?",
    a: "High atmospheric attenuation and extreme sensitivity to trace geometry are the critical hurdles. At mmWave frequencies (24GHz+), even a 0.1mm deviation in trace width can cause impedance mismatches. We use low-loss substrates and 3D EM simulation to mitigate these parasitic effects.",
  },
  {
    q: "How do you prevent desensitization (Desense) in multi-radio IoT devices?",
    a: "We reduce Desense through high-rejection BAW filters and strategic spatial isolation. By partitioning the RF front-end and optimizing the PDN, we prevent harmonics from digital clocks or LTE transmitters from raising the noise floor of sensitive WiFi or GPS receivers.",
  },
  {
    q: "Why is MU-MIMO essential for enterprise WiFi networks?",
    a: "MU-MIMO allows an access point to communicate with multiple clients simultaneously rather than sequentially. In high-density environments, this reduces airtime fairness issues. We optimize antenna arrays for low Envelope Correlation Coefficient (ECC) to maintain distinct spatial streams.",
  },
  {
    q: "What is the maximum range of a LoRaWAN link in an urban environment?",
    a: "Typical urban range is 2-5 km, depending on link budget and building density. We optimize range by selecting high-gain antennas and tuning spreading factor to balance data rate against receiver sensitivity.",
  },
  {
    q: "How do you protect a 1kW RF generator from high VSWR?",
    a: "We implement high-speed directional couplers and foldback circuitry. When plasma loads become unmatched, reflected power can damage the PA. Our designs detect these shifts quickly and reduce output power until impedance is stabilized.",
  },
  {
    q: "Why is 13.56 MHz a standard frequency for industrial plasma generators?",
    a: "13.56 MHz is an assigned ISM band that offers a practical balance between ion energy and plasma density. It enables efficient power delivery while keeping interference manageable when the matching network is tuned for chamber impedance.",
  },
  {
    q: "What is the best PCB substrate for high-power RF applications?",
    a: "Rogers 4350B and Megtron 6 are common standards due to low dissipation factor (tan delta). Standard FR-4 absorbs more RF energy, causing dielectric heating and higher signal loss.",
  },
  {
    q: "How do you manage thermal dissipation in GaN-on-SiC power amplifiers?",
    a: "We use copper-filled thermal vias and embedded coins to pull heat directly from the die. GaN devices operate at high power density, so low-resistance thermal paths to a heatsink are essential for safe junction temperatures.",
  },
  {
    q: "What is the role of a matching network in an RF system?",
    a: "A matching network maximizes power transfer by aligning source and load impedance to 50 Ohm. Using Smith chart synthesis, we design LC or microstrip networks to reduce reflections and improve efficiency.",
  },
  {
    q: "Why did my product fail FCC Part 15 Radiated Emissions?",
    a: "Failures are often caused by unintended antennas such as unshielded cables or poorly bypassed traces. We use near-field probes to identify leakage and apply common-mode chokes or shielding to suppress offending harmonics.",
  },
  {
    q: "What is the difference between pre-compliance and full certification?",
    a: "Pre-compliance is an engineering phase used to find and fix issues early. Full certification is the final formal testing required for market access. We use pre-compliance to reduce risk before accredited testing.",
  },
  {
    q: "How can I reduce Conducted Emissions (CE) in a switching power supply?",
    a: "A tuned Pi-filter at the power input is typically effective. We also apply ground-loop control and snubbers on switching FETs to reduce high-frequency ringing that couples into power lines.",
  },
  {
    q: "What are FCC requirements for modular approval vs full integration?",
    a: "Modular approval can use a pre-certified radio, but products still require unintentional radiator testing. Full on-board radio integration requires stricter intentional radiator certification.",
  },
  {
    q: "How do you shield sensitive analog signals from RF interference?",
    a: "We use Faraday shielding, differential signaling, and internal stripline routing between ground planes to isolate sensitive traces from high-power RF fields.",
  },
  {
    q: "What is controlled impedance and why is it critical for RF?",
    a: "Controlled impedance maintains target line impedance, typically 50 Ohm, to reduce reflections. Changes in trace geometry or stubs cause VSWR spikes, lower signal quality, and potential component stress.",
  },
  {
    q: "How does skin effect impact RF PCB layout?",
    a: "At higher frequencies, current crowding near the copper surface increases effective resistance. We address this with suitable trace geometry and surface finish choices to reduce loss.",
  },
  {
    q: "What is the fiber weave effect in high-speed RF boards?",
    a: "Fiber weave can create differential timing skew because one trace may travel over resin while the other travels over glass. We mitigate this using routing strategies and spread-weave materials.",
  },
  {
    q: "Why should I avoid via stubs in high-frequency designs?",
    a: "Via stubs can behave as resonant discontinuities and reflect energy. For high-frequency channels, we specify back-drilling or blind/buried vias to remove unused stub length.",
  },
  {
    q: "How do you calculate the link budget for a wireless product?",
    a: "Link budget equals transmit power plus antenna gain minus path loss minus fade margin. We use this to estimate real-world range and verify receiver sensitivity margins.",
  },
  {
    q: "What is a VNA (Vector Network Analyzer) used for?",
    a: "A VNA measures S-parameters for impedance match and transmission behavior. It quantifies how much power is reflected (S11) versus transmitted (S21).",
  },
  {
    q: "What is EVM (Error Vector Magnitude) and why does it matter for WiFi?",
    a: "EVM is a metric of modulation quality. Higher EVM indicates noisier constellation points, which can force lower modulation schemes and reduce throughput.",
  },
  {
    q: "How do you perform RF near-field vs far-field testing?",
    a: "Near-field probing helps identify local PCB noise sources. Far-field testing, typically in an anechoic environment, measures actual radiation behavior and patterns.",
  },
  {
    q: "Can you simulate an antenna's performance before building the PCB?",
    a: "Yes. We use 3D EM simulation to model gain, bandwidth, matching, and radiation patterns before physical prototyping.",
  },
  {
    q: "What is TRP (Total Radiated Power) in mobile device testing?",
    a: "TRP measures total emitted antenna power across all directions. It captures both antenna efficiency and enclosure effects that are not visible in simple conducted cable tests.",
  },
  {
    q: "What is the typical cost of an RF design re-spin?",
    a: "A re-spin can cost thousands to tens of thousands of dollars in fabrication and testing, plus schedule delay. We prioritize simulation and pre-compliance to reduce this risk.",
  },
  {
    q: "How do you ensure unit-to-unit consistency in mass production?",
    a: "We specify controlled-impedance coupons per panel and use production test strategies to verify RF behavior, helping ensure repeatability from pilot builds to volume manufacturing.",
  },
  {
    q: "Does Qmax help with component sourcing and BOM optimization?",
    a: "Yes. We balance performance, cost, and lifecycle availability, and proactively identify second-source options for critical components.",
  },
  {
    q: "What is phase noise and how does it impact high-speed data?",
    a: "Phase noise is frequency-domain instability in oscillators. For high-order modulation schemes, excess phase noise degrades demodulation margin and data integrity.",
  },
  {
    q: "How do you approach RF design for medical vs military applications?",
    a: "Medical designs emphasize coexistence and patient safety, while military designs emphasize robustness and interference resilience. We adapt design and validation strategy to target standards and use environments.",
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
            robust, manufacturable hardware. From sub-GHz IoT modules to
            high-power plasma generators and mmWave sensor arrays, we deliver
            end-to-end design, simulation, and validation services that ensure
            optimal signal integrity and regulatory compliance.
          </p>
        }
        ctaHref="/hardware-development-services/contact"
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
        title="Why Choose Qmax "
        titleHighlight="Systems"
        description="Qmax Systems distinguishes itself through a rigorous focus on the physics of high-frequency signals."
      />
      <ConsultationCtaBar
        heading="Get A Complimentary Consultation With Our RF & Microwave Experts."
        subtitle="1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven — no sales pitch."
        ctaHref="/hardware-development-services/contact"
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
