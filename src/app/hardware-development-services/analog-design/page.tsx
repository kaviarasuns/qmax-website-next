import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import type { ServiceCaseStudy } from "@/data/service-case-studies";
import { industrialCaseStudiesData } from "@/store/industrial-case-studies";
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
  ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import { getCaseStudyCardImage } from "@/store/case-studies";

function industrialServiceCaseStudies(ids: string[]): ServiceCaseStudy[] {
  return ids.map((id) => {
    const study = industrialCaseStudiesData.find((c) => c.id === id);
    const image = study?.images[0];
    if (!study || !image) {
      throw new Error(`Industrial case study missing or has no image: ${id}`);
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
    };
  });
}

const analogCaseStudies: ServiceCaseStudy[] = industrialServiceCaseStudies([
  "medical-diagnostic-system",
  "medical-recording-device",
  "smart-wifi-stethoscope",
  "oxygen-generator",
]);

const projectExperience: ProjectExperienceItem[] = [
  {
    id: "aerospace-shm",
    listTitle: "Aerospace Structural Health Monitoring",
    captionTitle: "High-EMI Environments",
    description:
      "Developed ruggedized sensing nodes for commercial aircraft, capable of high-precision strain and vibration analysis in high-EMI environments.",
    imageSrc: getCaseStudyCardImage("high-speed-analog-board"),
    imageAlt: "Aerospace Structural Health Monitoring",
  },
  {
    id: "32-channel-daq",
    listTitle: "32-Channel High-Speed DAQ",
    captionTitle: "FPGA-Based Real-Time Capture",
    description:
      "Engineering a simultaneous sampling system for industrial physics applications, utilizing FPGA-based real-time data capture.",
    imageSrc: getCaseStudyCardImage("multi-io-card-for-ate"),
    imageAlt: "32-Channel High-Speed DAQ",
  },
  {
    id: "medical-acoustic-sensing",
    listTitle: "Medical Acoustic Sensing",
    captionTitle: "Clinical-Grade Diagnostic Audio",
    description:
      "Designed a wearable lung sound recorder featuring a low-noise analog front-end for clinical-grade diagnostic audio.",
    imageSrc: getCaseStudyCardImage("lung-sound-recorder"),
    imageAlt: "Medical Acoustic Sensing",
  },
  {
    id: "femto-farad-capacitance",
    listTitle: "Femto-Farad Capacitance Measurement",
    captionTitle: "Industrial Proximity & Material Analysis",
    description:
      "Implementation of ultra-high sensitivity measurement systems for specialized industrial proximity and material analysis.",
    imageSrc: getCaseStudyCardImage("capserve"),
    imageAlt: "Femto-Farad Capacitance Measurement",
  },
  {
    id: "aerospace-cable-tension",
    listTitle: "Aerospace Cable Tension Meters",
    captionTitle: "Flight-Critical Force Measurement",
    description:
      "High-reliability force measurement systems with calibrated analog outputs for flight-critical applications.",
    imageSrc: getCaseStudyCardImage("600kg-cable-tension-measurement-system"),
    imageAlt: "Aerospace Cable Tension Meters",
  },
  {
    id: "ultra-low-cost-hearing-aid",
    listTitle: "Ultra-Low-Cost Hearing Aid",
    captionTitle: "Mass-Market Accessibility",
    description:
      "Engineering a low-power, high-gain analog signal path optimized for mass-market accessibility and long battery life.",
    imageSrc: getCaseStudyCardImage("animal-tracker"),
    imageAlt: "Ultra-Low-Cost Hearing Aid",
  },
];

const coreServiceOfferings: HighSpeedCoreOffering[] = [
  {
    id: "afe",
    tab: "Precision AFE",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h3l3-9 4 18 3-12 2 6h5" />
      </svg>
    ),
    headline:
      "Precision analog front-end design that converts microvolt sensor signals into reliable digital data.",
    intro:
      "Qmax Systems designs custom Analog Front-End (AFE) circuits for capacitive, inductive, resistive, and piezoelectric transducer modalities. Our AFE designs are optimized for Signal-to-Noise Ratio (SNR) and Spurious-Free Dynamic Range (SFDR) — critical for industrial sensing, medical instrumentation, and automotive sensor electronics where measurement integrity is non-negotiable.",
    points: [
      {
        boldLead: "Multi-Modality Sensor Conditioning",
        rest: " — instrumentation amplifiers, charge amplifiers, and Wheatstone bridge front-ends for strain, pressure, capacitive, and piezoelectric transducers.",
      },
      {
        boldLead: "Low-Noise Signal Path Design",
        rest: " — careful component selection, return-path planning, and impedance matching to preserve signal fidelity from the sensor element to the ADC input.",
      },
      {
        boldLead: "Calibration & Linearization Circuitry",
        rest: " — temperature compensation, gain trim, and offset correction designed in from the start, not bolted on post-hoc.",
      },
    ],
    applications:
      "Industrial sensors · Medical instrumentation · Automotive sensor electronics · Process control · Bio-potential monitoring",
  },
  {
    id: "mixed-signal",
    tab: "Mixed-Signal SoM",
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
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M7 8.5h3M14 8.5h3M7 15.5h3M14 15.5h3" />
      </svg>
    ),
    headline:
      "Mixed-signal System-on-Module integration that lets high-resolution converters talk reliably to FPGAs and SoCs.",
    intro:
      "Qmax Systems integrates high-resolution ADCs (up to 24-bit) and high-speed DACs (up to 4 Gbps) with FPGAs and SoCs, including JESD204B/C interface timing management and LVDS signaling — for software-defined radio, instrumentation, defense electronics, and high-speed data acquisition systems.",
    points: [
      {
        boldLead: "High-Resolution ADC Integration",
        rest: " — up to 24-bit converters with strict thermal management, voltage reference design, and digital interface optimization for noise-critical measurements.",
      },
      {
        boldLead: "High-Speed DAC Integration",
        rest: " — up to 4 Gbps converters with controlled-impedance routing, clock distribution, and synchronization strategies for multi-channel coherence.",
      },
      {
        boldLead: "JESD204B/C & LVDS Signaling",
        rest: " — interface timing closure, deterministic latency configuration, and lane skew compensation between converters and FPGA/SoC hosts.",
      },
    ],
    applications:
      "Software-defined radio (SDR) · Test & measurement instrumentation · Defense electronics · Scientific instrumentation · High-speed DAQ",
  },
  {
    id: "interconnect",
    tab: "RF & High-Speed Interconnect",
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
      "RF and high-speed interconnect design for multi-gigahertz mixed-signal systems.",
    intro:
      "Qmax Systems designs and simulates transmission lines, controlled-impedance routing, and return path optimization for multi-gigahertz analog and mixed-signal interconnects. Our engineers handle the signal integrity challenges that surface in software-defined radio, telecom backhaul, and high-bandwidth data converter implementations — where even small layout deviations can ruin EVM, eye margin, or BER.",
    points: [
      {
        boldLead: "Transmission Line Design",
        rest: " — controlled-impedance microstrip and stripline routing for multi-gigahertz analog and digital channels.",
      },
      {
        boldLead: "Return Path Optimization",
        rest: " — reference plane planning, via stitching, and ground return strategies to prevent common-mode noise and ensure EMC compliance.",
      },
      {
        boldLead: "Signal Integrity Simulation",
        rest: " — full-wave EM, S-parameter extraction, and channel modeling for high-speed lanes before fabrication.",
      },
    ],
    applications:
      "SDR platforms · Telecom backhaul · High-speed data converters · Phased-array systems · Multi-GHz instrumentation",
  },
  {
    id: "wearable",
    tab: "Low-Power Wearable",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="7" width="12" height="10" rx="2" />
        <path d="M9 7V4h6v3M9 17v3h6v-3" />
        <path d="M9 12h2l1-2 1 4 1-2h2" />
      </svg>
    ),
    headline:
      "Low-power wearable electronics where nano-ampere currents don't compromise signal fidelity.",
    intro:
      "Qmax Systems designs ultra-low-power analog circuits for battery-operated medical and consumer wearables — achieving nano-ampere quiescent currents without compromising signal fidelity. Our designs power medical monitoring patches, hearables, fitness wearables, and continuously-monitoring sensor platforms where battery life and measurement accuracy must coexist.",
    points: [
      {
        boldLead: "Nano-Ampere Quiescent Designs",
        rest: " — sub-microamp standby currents across the full analog signal chain, extending battery life from days to weeks.",
      },
      {
        boldLead: "Bio-Potential & Bio-Sensor AFEs",
        rest: " — precision conditioning for ECG, PPG, GSR, and bio-impedance signals in body-worn form factors.",
      },
      {
        boldLead: "Power Domain Partitioning",
        rest: " — multi-rail architectures that isolate sensitive analog from digital switching noise without sacrificing duty-cycled efficiency.",
      },
    ],
    applications:
      "Medical monitoring patches · Hearables · Fitness wearables · Continuous health monitoring · Body-worn sensors",
  },
];

const WHY_CARDS = [
  {
    title: "Transparent & Supervised Process",
    desc: "You see every milestone, design review, and risk register as it happens. Qmax Systems program managers run a weekly cadence with traceable deliverables, on-time builds, and zero hidden surprises at handover.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="14" r="3" />
        <circle cx="38" cy="14" r="3" />
        <circle cx="10" cy="34" r="3" />
        <circle cx="38" cy="34" r="3" />
        <circle cx="24" cy="24" r="4" />
        <path d="M13 14h8M27 14h8M13 34h8M27 34h8M14 16l8 6M34 16l-8 6M14 32l8-6M34 32l-8-6" />
      </svg>
    ),
  },
  {
    title: "Mixed-Signal Designs Built from Scratch",
    desc: "Every analog and mixed-signal program starts with R&D and a proof-of-concept build to retire architectural risk early. We confirm feasibility, characterize noise floor, validate AFE topology, and prove critical assumptions before a single production layer is committed.",
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
        <path d="M34 16 L34 24 L42 24" />
        <path d="M6 38 L42 38" />
        <path d="M14 12 L18 16 L22 12" />
      </svg>
    ),
  },
  {
    title: "Smooth Hardware-Software Integration",
    desc: "We select AFEs, ADCs, DACs, FPGAs, and toolchains that fit your existing platform rather than forcing a re-platform. The result is firmware that brings up cleanly, drivers that drop into your OS, and lower long-term maintenance cost.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 6 L24 18 M18 12 L24 18 L30 12" />
        <path d="M24 42 L24 30 M18 36 L24 30 L30 36" />
        <path d="M6 24 L18 24 M12 18 L18 24 L12 30" />
        <path d="M42 24 L30 24 M36 18 L30 24 L36 30" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
  },
  {
    title: "Expert Analog & Mixed-Signal Engineers",
    desc: "Qmax Systems analog and mixed-signal engineers average 12+ years across medical instrumentation, industrial sensing, defense electronics, automotive sensor electronics, and consumer wearables. Only senior engineers touch your design — no junior hand-offs, no learning on your timeline.",
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
        <circle cx="24" cy="24" r="9" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
  },
];

const ANALOG_TECHNICAL_CARDS: TechnicalAdvantageCard[] = [
  {
    title: "Low-Noise Signal Conditioning",
    body: "Implementation of precision instrumentation amplifiers, active filtering, and impedance matching for microvolt-level signals from sensors, transducers, and bio-potential sources.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <path d="M2 12 Q5 4 8 12 T14 12 T20 12 H22" />
      </svg>
    ),
  },
  {
    title: "High-Speed Data Acquisition (DAQ)",
    body: "Multi-channel DAQ design with simultaneous sampling, synchronized clock distribution, and JESD204B/C interface management for SDR, instrumentation, and high-resolution measurement systems.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <line x1="4" y1="4" x2="4" y2="20" />
        <line x1="4" y1="20" x2="20" y2="20" />
        <line x1="7" y1="16" x2="7" y2="12" />
        <line x1="11" y1="16" x2="11" y2="9" />
        <line x1="15" y1="16" x2="15" y2="6" />
        <line x1="19" y1="16" x2="19" y2="10" />
      </svg>
    ),
  },
  {
    title: "Power Integrity for Analog",
    body: "LDO-based precision regulation, split-rail generation, and decoupling strategies to minimize PSRR-related noise and protect microvolt-level sensitive analog signals from power-rail contamination.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <polygon points="11 3 5 13 11 13 9 21 17 11 11 11" />
      </svg>
    ),
  },
  {
    title: "Noise Reduction & Isolation",
    body: "Rigorous physical isolation techniques — Moat-and-Bridge PCB structures and Faraday shielding — to protect sensitive analog nodes from digital switching noise and external EMI.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <path d="M12 3 L20 6 L20 12 C20 17 16 20 12 21 C8 20 4 17 4 12 L4 6 Z" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    title: "Return Path Optimization",
    body: "Detailed analysis of current return paths to prevent common-mode noise injection and ensure electromagnetic compatibility (EMC) in dense mixed-signal layouts.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <path d="M4 8 H16 A4 4 0 0 1 16 16 H6" />
        <polyline points="9 13 6 16 9 19" />
      </svg>
    ),
  },
  {
    title: "Real-Time FPGA Signal Processing",
    body: "Pairing analog hardware with FPGA-based DSP enables real-time filtering, FFTs, and decimation at the edge — reducing downstream processor load and accelerating system response.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <line x1="9" y1="3" x2="9" y2="6" />
        <line x1="15" y1="3" x2="15" y2="6" />
        <line x1="9" y1="18" x2="9" y2="21" />
        <line x1="15" y1="18" x2="15" y2="21" />
        <line x1="3" y1="9" x2="6" y2="9" />
        <line x1="3" y1="15" x2="6" y2="15" />
        <line x1="18" y1="9" x2="21" y2="9" />
        <line x1="18" y1="15" x2="21" y2="15" />
        <line x1="10" y1="10" x2="14" y2="10" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "What sensor types does Qmax Systems design analog front-ends for?",
    a: "Qmax Systems designs precision AFE circuits for capacitive, inductive, resistive, piezoelectric, bio-potential, and optical transducers. Our AFEs are optimized for Signal-to-Noise Ratio (SNR) and Spurious-Free Dynamic Range (SFDR), and are used in industrial sensors, medical instruments, automotive sensor electronics, and process control systems.",
  },
  {
    q: "What ADC and DAC resolutions does Qmax Systems integrate into mixed-signal designs?",
    a: "Qmax Systems integrates high-resolution ADCs up to 24-bit and high-speed DACs up to 4 Gbps with FPGAs and SoCs. We handle JESD204B/C interface timing, LVDS signaling, deterministic latency, and lane skew compensation for software-defined radio, test & measurement, and high-speed data acquisition platforms.",
  },
  {
    q: "Does Qmax Systems handle low-power analog design for wearables and battery-operated devices?",
    a: "Yes. Qmax Systems specializes in ultra-low-power analog design achieving nano-ampere quiescent currents without compromising signal fidelity — for medical monitoring patches, hearables, fitness wearables, and continuous-monitoring sensor platforms.",
  },
  {
    q: "How does Qmax Systems prevent digital switching noise from corrupting sensitive analog signals?",
    a: "Qmax Systems uses Moat-and-Bridge PCB structures, Faraday shielding, dedicated reference planes, careful return-path routing, and split-rail power architectures with LDO post-regulation. Each technique is selected based on the noise floor target and the dynamic range of the analog signal chain.",
  },
  {
    q: "Can Qmax Systems design multi-gigahertz analog and mixed-signal interconnects?",
    a: "Yes. Qmax Systems designs controlled-impedance transmission lines, runs full-wave EM simulation, and optimizes return paths for multi-gigahertz channels used in SDR, telecom backhaul, and high-bandwidth data converter implementations.",
  },
  {
    q: "What is included in the 1-hour complimentary consulting session?",
    a: "During this session, you will speak directly with a Senior Hardware Architect from Qmax Systems. We can review your analog signal chain, discuss SNR and noise budget challenges, validate AFE topology choices, or help refine your mixed-signal roadmap. We can sign an NDA if required.",
  },
  {
    q: "How does Qmax Systems protect customer design data and intellectual property?",
    a: "Qmax Systems treats every engagement under strict IP protection: NDAs signed before any technical discussion, dedicated secure project workspaces, role-based access control to design files, and customer-owned IP at every milestone — schematics, layouts, BoMs, and firmware. Qmax Systems engineers never reuse or repurpose customer IP across other client engagements.",
  },
  {
    q: "How does Qmax Systems ensure noise performance and signal integrity in mixed-signal designs?",
    a: "Qmax Systems' methodology combines full-wave 3D EM simulation, S-parameter extraction for high-speed converter lanes, return-path planning, and PSRR-driven power-rail design. Every mixed-signal design is validated against SNR, SFDR, and BER margin before fabrication, eliminating costly re-spins.",
  },
];

export const metadata: Metadata = {
  title: "Analog Design Services | Qmax",
  description:
    "Analog and mixed-signal design — precision AFEs, high-resolution converters, RF interconnect, and ultra-low-power wearables.",
};

export default function AnalogDesignPage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="/hw-main/hw-sub/image1.jpg"
        imageAlt="Analog and Mixed-Signal Design — Qmax Systems"
        title={
          <>
            Analog &amp; Mixed-Signal Design Services: Precision Engineering for
            Complex Signal Chains
          </>
        }
        description={
          <p>
            In an increasingly digital world, the interface between the physical
            and digital domains remains the most critical bottleneck in
            high-performance electronics. Qmax Systems provides comprehensive
            analog and mixed-signal development services, specializing in
            high-fidelity signal acquisition, precision conditioning, and
            ultra-low-noise environments. From femto-farad capacitance sensing
            to giga-sample data converters, our engineering team addresses the
            fundamental challenges of electromagnetic interference, signal
            integrity, and thermal stability to ensure laboratory-grade accuracy
            in field-deployed hardware.
          </p>
        }
        ctaHref="/hardware-development-services/contact"
        ctaLabel="Talk to our engineers"
      />

      <CoreServiceOfferingsSection offerings={coreServiceOfferings} />

      <ApplicationsProjectExperienceSection projects={projectExperience} />
      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="Analog & Mixed-Signal Design?"
      />
      <TechnicalAdvantageSection
        headingHighlight="Analog & Mixed-Signal"
        lede="Qmax Systems bridges the gap between raw physical phenomena and actionable digital data — with rigorous control of noise, signal integrity, and timing across the entire signal chain."
        cards={ANALOG_TECHNICAL_CARDS}
        columns="three"
        sectionHeadingId="technical-advantage-analog-heading"
      />
      <FAQSection faqs={faqs} hideTopBorder />
      <ConsultationCtaBar
        heading="Get a complimentary consultation with our analog & mixed-signal experts."
        subtitle="1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven — no sales pitch."
        ctaHref="/hardware-development-services/contact"
      />
      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={analogCaseStudies}
        hideTopBorder
      />
    </>
  );
}
