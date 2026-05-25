import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import {
  ApplicationsProjectExperienceSection,
  type ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import { ComplimentaryConsultationSection } from "@/components/services-cmp/ComplimentaryConsultationSection";
import {
  ComplimentarySchematicReviewSection,
  type SchematicReviewItem,
} from "@/components/services-cmp/ComplimentarySchematicReviewSection";
import {
  CoreServiceOfferingsSection,
  type HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { ServiceCaseStudy } from "@/data/service-case-studies";
import { getCaseStudyCardImage } from "@/store/case-studies";
import { pcbCaseStudiesData } from "@/store/pcb-case-studies";

const coreServiceOfferings: HighSpeedCoreOffering[] = [
  {
    id: "services",
    tab: "RF Design Services",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    headline: "Comprehensive RF and microwave PCB design from MHz to 80 GHz.",
    intro:
      "RF PCB layout is fundamentally an electromagnetic design problem. At frequencies above a few hundred MHz, traditional digital PCB practices become insufficient. Our services cover the full RF design spectrum.",
    points: [
      {
        boldLead: "RF PCB Layout Services",
        rest: " — precision layout for single- and multi-band RF systems with controlled impedance and shielding strategies.",
      },
      {
        boldLead: "Microwave PCB Engineering",
        rest: " — design for microwave frequencies requiring specialized substrate selection and transition management.",
      },
      {
        boldLead: "mmWave PCB Design (24 GHz–80 GHz)",
        rest: " — millimeter-wave layouts for 5G, radar, and imaging systems with ultra-tight tolerances.",
      },
      {
        boldLead: "Antenna Integration & RF Front-End Layout",
        rest: " — co-design of antenna structures, matching networks, and RF front-end modules on a single PCB.",
      },
    ],
    applications:
      "5G wireless · Radar sensors · RF instrumentation · Industrial RF generators · Satellite communications",
  },
  {
    id: "transmission",
    tab: "Transmission Line & Stackup",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    headline:
      "Precision transmission line modeling and RF-optimized stackup engineering.",
    intro:
      "We work closely with fabrication partners using Rogers, Taconic, Isola, Megtron and hybrid stackups to achieve controlled impedance, low loss, and repeatable manufacturing yields.",
    points: [
      {
        boldLead: "Transmission Line Modeling",
        rest: " — precise modeling of microstrip, stripline, coplanar waveguide, and GCPW structures to meet target impedance and insertion loss budgets.",
      },
      {
        boldLead: "Stackup Engineering",
        rest: " — RF-optimized layer stackups balancing signal performance, isolation, and fabrication feasibility across mixed-dielectric builds.",
      },
      {
        boldLead: "Low-Loss Substrate Selection",
        rest: " — material selection guidance for Rogers 4350B/4003C, Taconic TLY, Isola Astra, and hybrid FR-4/PTFE constructions.",
      },
    ],
    applications:
      "Rogers · Taconic · Isola · Megtron · Hybrid FR-4/PTFE stackups",
  },
  {
    id: "emsim",
    tab: "EM Simulation & Layout",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    headline: "Full-wave EM simulation driving constraint-based RF layout.",
    intro:
      "At Qmax Systems, we apply a structured RF engineering workflow where simulation drives every layout decision — ensuring first-pass RF performance without iterative tuning.",
    points: [
      {
        boldLead: "Architecture Analysis",
        rest: " — RF signal chain review covering gain stages, filter placement, and link-budget assumptions before layout begins.",
      },
      {
        boldLead: "EM Simulation",
        rest: " — full-wave electromagnetic simulation of critical structures including transitions, matching networks, and filter responses.",
      },
      {
        boldLead: "Constraint-Driven Layout",
        rest: " — routing rules derived from simulation results, not rules-of-thumb, ensuring every trace meets insertion loss and VSWR targets.",
      },
    ],
    applications:
      "Architecture review → EM simulation → Constraint generation → Layout → Post-layout verification",
  },
  {
    id: "mfg",
    tab: "Manufacturing & Compliance",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    headline:
      "Production-ready deliverables aligned with fabrication and certification.",
    intro:
      "This workflow ensures the design is production-ready and compliance-ready before the PCB is fabricated. Direct coordination with fabrication partners for impedance accuracy and yield.",
    points: [
      {
        boldLead: "Manufacturing Alignment",
        rest: " — direct coordination with PCB fabrication houses for low-loss substrate availability, impedance accuracy, and controlled-impedance test coupons.",
      },
      {
        boldLead: "EMI-Ready Layout Strategy",
        rest: " — shielding, grounding, and filtering designed for FCC and CE certification through EMI-by-design methodology.",
      },
      {
        boldLead: "Production-Ready Deliverables",
        rest: " — DFM/DFT-validated Gerbers, ODB++, impedance reports, and assembly documentation ready for handoff.",
      },
    ],
    applications:
      "Gerbers · ODB++ · Impedance reports · DFM/DFT validation · Assembly drawings",
  },
];

const projectExperience: ProjectExperienceItem[] = [
  {
    id: "rf-pa-13mhz",
    listTitle: "High-Power RF Power Amplifier - 1 kW @ 13.56 MHz",
    captionTitle: "Industrial RF Power Delivery",
    description:
      "High-power RF amplifier design for industrial heating and plasma applications, featuring precision impedance matching, thermal management, and harmonic suppression at 13.56 MHz ISM band.",
    imageSrc: getCaseStudyCardImage("rf-power-processor"),
    imageAlt: "High-Power RF Power Amplifier - 1 kW @ 13.56 MHz",
  },
  {
    id: "wifi6-mimo",
    listTitle: "WiFi-6 MIMO RF PCB Design",
    captionTitle: "Multi-Antenna WiFi 6 Systems",
    description:
      "4x4 MIMO WiFi 6 router design with optimized antenna placement, RF isolation techniques, and dual-band 2.4/5 GHz front-end architecture for maximum throughput and coverage.",
    imageSrc: getCaseStudyCardImage("wifi6-triband-router"),
    imageAlt: "WiFi-6 MIMO RF PCB Design",
  },
  {
    id: "sdr-platforms",
    listTitle: "Software Defined Radio (SDR) RF Platforms",
    captionTitle: "Wideband SDR Design",
    description:
      "Multi-band SDR platform supporting 70 MHz to 6 GHz coverage with integrated RF front-end, LNA/PA switching, and high-dynamic-range signal path for research and communications applications.",
    imageSrc: getCaseStudyCardImage("rf-signal-generator-enclosure"),
    imageAlt: "Software Defined Radio (SDR) RF Platforms",
  },
  {
    id: "60ghz-moisture",
    listTitle: "60 GHz Microwave Moisture Measurement System",
    captionTitle: "mmWave Sensor Electronics",
    description:
      "60 GHz mmWave radar system for non-contact moisture measurement in industrial processes, featuring specialized RF substrates, precise impedance control, and advanced EMI shielding for V-band operation.",
    imageSrc: getCaseStudyCardImage("inline-moisture-meter"),
    imageAlt: "60 GHz Microwave Moisture Measurement System",
  },
  {
    id: "lora-wifi-ble",
    listTitle: "LoRa, WiFi, BLE Wireless Modules",
    captionTitle: "Multi-Protocol IoT Modules",
    description:
      "Compact wireless modules integrating LoRa sub-GHz, WiFi, and BLE radios with antenna diversity, RF coexistence filtering, and ultra-low power design for battery-operated IoT deployments.",
    imageSrc: getCaseStudyCardImage("iot-gateway-pcb"),
    imageAlt: "LoRa, WiFi, BLE Wireless Modules",
  },
];

const WHY_CARDS = [
  {
    title: "Architecture-First Engineering",
    desc: "RF architecture validated before layout begins, preventing late-stage rework.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Simulation-Driven Constraints",
    desc: "RF routing rules defined by SI/EM simulation before the first trace is drawn.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "RF Measurement Expertise",
    desc: "Familiarity with RF test workflows including CMW500, spectrum analyzers, and VNAs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Manufacturing Alignment",
    desc: "Direct coordination with PCB fabrication houses for low-loss substrate and impedance accuracy.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Compliance Readiness",
    desc: "Designs prepared for FCC and CE certification through EMI-by-design layout.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Production-Ready Deliverables",
    desc: "DFM/DFT-validated Gerbers, ODB++, and impedance reports ready for handoff.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const schematicReviewItems: SchematicReviewItem[] = [
  {
    id: "rf-signal-chain",
    title: "RF Signal Chain Architecture",
    description:
      "Gain stages, filter placement, and link-budget assumptions for first-pass RF performance.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "impedance-matching",
    title: "Impedance Matching Networks",
    description:
      "Matching topologies and component values aligned to VSWR and return-loss targets.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "power-supply-filtering",
    title: "Power Supply Filtering",
    description:
      "Decoupling and bias networks to keep PA, LNA, and transceiver rails RF-clean.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "rf-ground",
    title: "RF Ground References",
    description:
      "Ground continuity and return-path strategy to prevent radiation and desensitization.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    id: "component-lifecycle",
    title: "Component Lifecycle Risk",
    description:
      "EOL and obsolescence screening for long-life wireless, defense, and instrumentation programs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const FAQ_ITEMS = [
  {
    q: "What frequency range do you support?",
    a: "We design RF PCBs from sub-GHz to millimeter-wave frequencies up to 80 GHz.",
  },
  {
    q: "Do you design microwave PCBs?",
    a: "Yes. We support microwave PCB designs using low-loss laminates and transmission line modeling.",
  },
  {
    q: "Do you design WiFi RF boards?",
    a: "Yes. We have designed WiFi 5 and WiFi 6 RF PCBs with multiple MIMO chains.",
  },
  {
    q: "Do you support antenna integration?",
    a: "Yes. We design antenna feedlines, matching networks, and RF isolation structures.",
  },
  {
    q: "Do you perform RF simulations?",
    a: "Yes. SI, PI, and EM simulations are performed before layout completion.",
  },
  {
    q: "Do you support mmWave PCB designs?",
    a: "Yes. We have experience with 60 GHz radar-based sensing systems.",
  },
  {
    q: "What materials are used for RF PCBs?",
    a: "Common materials include Rogers, Taconic, Isola Astra, and hybrid RF-FR4 stackups.",
  },
  {
    q: "Do you coordinate with PCB fabrication houses?",
    a: "Yes. Stackups and impedance targets are aligned with the chosen manufacturer.",
  },
  {
    q: "Can you redesign RF boards that failed FCC testing?",
    a: "Yes. We provide RF layout troubleshooting and redesign services.",
  },
  {
    q: "Do you support RF power amplifier boards?",
    a: "Yes. We have designed 1 kW RF PA systems.",
  },
  {
    q: "Can you design LoRa RF boards?",
    a: "Yes. LoRa transceiver boards with antenna tuning networks are supported.",
  },
  {
    q: "Do you support BLE RF designs?",
    a: "Yes. BLE modules with RF filtering and antenna matching are designed.",
  },
  {
    q: "Do you support SDR hardware?",
    a: "Yes. SDR RF front-ends and RF amplifier chains.",
  },
  {
    q: "Can you design RF front-end modules?",
    a: "Yes. Including LNAs, mixers, filters, and PAs.",
  },
  {
    q: "Do you provide RF tuning support?",
    a: "Yes. We support RF bring-up and calibration.",
  },
  {
    q: "What tools are used for RF simulation?",
    a: "HFSS, HyperLynx, and other EM modeling tools.",
  },
  {
    q: "Can you design RF filters on PCB?",
    a: "Yes. Microstrip and distributed RF filters.",
  },
  {
    q: "Do you provide DFM review?",
    a: "Yes. All designs undergo DFM validation.",
  },
  {
    q: "Do you support mmWave antenna feeds?",
    a: "Yes. Controlled impedance CPW and microstrip lines.",
  },
  {
    q: "Can you design RF test equipment PCBs?",
    a: "Yes.",
  },
  {
    q: "What deliverables do you provide?",
    a: "Gerbers, ODB++, impedance reports, and assembly documentation.",
  },
  {
    q: "Do you handle RF shielding design?",
    a: "Yes. Shield cans and RF compartments.",
  },
  {
    q: "Do you design high-power RF boards?",
    a: "Yes.",
  },
  {
    q: "What RF test equipment are you familiar with?",
    a: "CMW500, spectrum analyzers, vector network analyzers.",
  },
  {
    q: "Do you design microwave sensors?",
    a: "Yes.",
  },
  {
    q: "Do you support FCC compliance preparation?",
    a: "Yes.",
  },
  {
    q: "Do you support CE compliance preparation?",
    a: "Yes.",
  },
  {
    q: "Who owns the design IP?",
    a: "The customer owns all design IP.",
  },
  {
    q: "Do you support prototype bring-up?",
    a: "Yes.",
  },
  {
    q: "Can you support production transfer?",
    a: "Yes.",
  },
];

function pcbServiceCaseStudies(ids: string[]): ServiceCaseStudy[] {
  return ids.map((id) => {
    const study = pcbCaseStudiesData.find((c) => c.id === id);
    const image = study?.images[0];
    if (!study || !image) {
      throw new Error(`PCB case study missing or has no image: ${id}`);
    }
    const sentenceMatch = study.summary.match(/^[\s\S]*?[.!?](?=\s|$)/);
    const first = (sentenceMatch ? sentenceMatch[0] : study.summary).trim();
    const summary =
      first.length > 200 ? `${first.slice(0, 197).trimEnd()}…` : first;
    return {
      title: study.title,
      image,
      link: `/case-studies/${study.id}`,
      category: "development",
      summary,
      imageRotation: study.rotatedImages?.[0],
    };
  });
}

const rfMicrowaveCaseStudies: ServiceCaseStudy[] = pcbServiceCaseStudies([
  "ai-gpu-expansion-chassis-motherboard",
  "iot-gateway-pcb",
  "pcie-gen5-cpo-board",
  "ultra-low-cost-bldc-motor-controller",
]);

export default function RFMicrowavePCBDesignPage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="/pcb-design/images/rf-pcb-service.jpg"
        imageAlt="RF and Microwave PCB Design — Qmax Systems"
        title="RF and Microwave PCB Design Services."
        description={
          <>
            <p>
              Modern RF and microwave systems demand far more than conventional
              PCB routing. At frequencies from hundreds of MHz to
              millimeter-wave bands, the PCB becomes part of the RF circuit
              itself. Trace geometry, dielectric loss, via transitions,
              grounding topology, shielding strategy, and impedance
              discontinuities directly influence insertion loss, phase
              stability, noise floor, and EMI compliance.
            </p>
            <p>
              Qmax Systems provides advanced RF PCB design services for wireless
              communication systems, RF instrumentation, radar sensors,
              industrial RF generators, and microwave measurement platforms.
            </p>
          </>
        }
        ctaHref="/hardware-development-services/contact"
        ctaLabel="Talk to Our Engineers"
      />
      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        title="RF PCB Engineering "
        titleHighlight="Approach"
      />
      <ApplicationsProjectExperienceSection projects={projectExperience} />
      <WhySection
        whyCards={WHY_CARDS}
        title="Why Choose Qmax Systems for"
        titleHighlight="RF PCB Design"
        description="RF architecture validated before layout begins — backed by simulation-driven constraints and RF measurement expertise."
        className="pb-8 max-[900px]:pb-8"
      />
      {/* <ComplimentarySchematicReviewSection
        items={schematicReviewItems}
        titleHighlight="RF & Microwave PCB Design"
        subtitle="When customers engage Qmax Systems for RF PCB layout services, we perform a complimentary schematic review before layout begins. The review covers:"
      /> */}
      <ComplimentaryConsultationSection
        variant="pcb"
        subtitleSuffix=" This early validation prevents costly PCB re-spins and RF tuning delays."
      />
      <FAQSection faqItems={FAQ_ITEMS} />
      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={rfMicrowaveCaseStudies}
        hideTopBorder
      />
      <div className="pb-28" />
    </>
  );
}
