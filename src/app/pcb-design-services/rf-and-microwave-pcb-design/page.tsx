import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import {
  ApplicationsProjectExperienceSection,
  type ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import {
  CoreServiceOfferingsSection,
  type HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { ServiceCaseStudy } from "@/data/service-case-studies";
import {
  allCaseStudiesData,
  getCaseStudyCardImage,
} from "@/store/case-studies";
import { pcbCaseStudiesData } from "@/store/pcb-case-studies";

type ProjectExperienceEntryOptions = {
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

function projectExperienceEntry(
  id: string,
  listTitle: string,
  caseStudyId: string,
  descriptionOrOptions?: string | ProjectExperienceEntryOptions,
): ProjectExperienceItem {
  const study = allCaseStudiesData.find(
    (caseStudy) => caseStudy.id === caseStudyId,
  );
  if (!study) {
    throw new Error(`Case study not found: ${caseStudyId}`);
  }

  const options =
    typeof descriptionOrOptions === "string"
      ? { description: descriptionOrOptions }
      : descriptionOrOptions;

  return {
    id,
    listTitle,
    captionTitle: study.title,
    description: options?.description ?? study.summary,
    imageSrc: options?.imageSrc ?? getCaseStudyCardImage(caseStudyId),
    imageAlt: options?.imageAlt ?? study.title,
    caseStudyHref: `/case-studies/${study.id}`,
  };
}

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
      "Qmax Systems treats RF PCB layout as fundamentally an electromagnetic design problem — above a few hundred MHz, traditional digital PCB practices become insufficient. Qmax's RF engineers cover the full RF spectrum, from controlled-impedance RF layout to microwave engineering and millimeter-wave design from 24 GHz to 80 GHz, plus antenna and RF front-end integration. These designs serve 5G wireless, radar sensors, RF instrumentation, industrial RF generators, and satellite communications.",
    points: [
      {
        boldLead: "RF PCB Layout Services",
        rest: " — Qmax delivers precision layout for single- and multi-band RF systems with controlled impedance and shielding strategies.",
      },
      {
        boldLead: "Microwave PCB Engineering",
        rest: " — Microwave-frequency designs use specialized substrate selection and transition management.",
      },
      {
        boldLead: "mmWave PCB Design (24 GHz–80 GHz)",
        rest: " — Qmax's RF engineers build millimeter-wave layouts for 5G, radar, and imaging systems with ultra-tight tolerances.",
      },
      {
        boldLead: "Antenna Integration & RF Front-End Layout",
        rest: " — Antenna structures, matching networks, and RF front-end modules share a single PCB.",
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
      "Qmax Systems engineers RF-optimized stackups in partnership with fabrication houses, using Rogers, Taconic, Isola, Megtron, and hybrid FR-4/PTFE builds to achieve controlled impedance, low loss, and repeatable yields. The team models microstrip, stripline, coplanar-waveguide, and GCPW structures to meet target impedance and insertion-loss budgets. These stackups draw on Rogers 4350B/4003C, Taconic TLY, Isola Astra, and hybrid FR-4/PTFE materials.",
    points: [
      {
        boldLead: "Transmission Line Modeling",
        rest: " — Qmax precisely models microstrip, stripline, coplanar-waveguide, and GCPW structures to meet target impedance and insertion-loss budgets.",
      },
      {
        boldLead: "Stackup Engineering",
        rest: " — RF-optimized layer stackups balance signal performance, isolation, and fabrication feasibility across mixed-dielectric builds.",
      },
      {
        boldLead: "Low-Loss Substrate Selection",
        rest: " — Qmax's engineers guide material selection across Rogers 4350B/4003C, Taconic TLY, Isola Astra, and hybrid FR-4/PTFE constructions.",
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
      "Qmax Systems applies a structured RF engineering workflow where full-wave EM simulation drives every layout decision, achieving first-pass RF performance without iterative tuning. Qmax's engineers review the RF signal chain, simulate critical transitions, matching networks, and filters, then derive routing rules that hold every trace to its insertion-loss and VSWR targets. These projects follow a typical flow: architecture review → EM simulation → constraint generation → layout → post-layout verification.",
    points: [
      {
        boldLead: "Architecture Analysis",
        rest: " — Qmax reviews the RF signal chain — gain stages, filter placement, and link-budget assumptions — before layout begins.",
      },
      {
        boldLead: "EM Simulation",
        rest: " — Full-wave electromagnetic simulation covers critical structures, including transitions, matching networks, and filter responses.",
      },
      {
        boldLead: "Constraint-Driven Layout",
        rest: " — Routing rules derived from simulation hold every trace to insertion-loss and VSWR targets, not rules of thumb.",
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
      "Qmax Systems delivers production-ready, compliance-ready RF designs before fabrication, coordinating directly with fabrication partners for impedance accuracy and yield. Qmax's engineers apply EMI-by-design shielding, grounding, and filtering for FCC and CE certification, and hand off DFM/DFT-validated Gerbers, ODB++, impedance reports, and assembly documentation. These deliverables include Gerbers, ODB++, impedance reports, DFM/DFT validation, and assembly drawings.",
    points: [
      {
        boldLead: "Manufacturing Alignment",
        rest: " — Qmax coordinates directly with PCB fabrication houses for low-loss substrate availability, impedance accuracy, and controlled-impedance test coupons.",
      },
      {
        boldLead: "EMI-Ready Layout Strategy",
        rest: " — Shielding, grounding, and filtering reach FCC and CE certification through an EMI-by-design methodology.",
      },
      {
        boldLead: "Production-Ready Deliverables",
        rest: " — Qmax's engineers hand off DFM/DFT-validated Gerbers, ODB++, impedance reports, and assembly documentation.",
      },
    ],
    applications:
      "Gerbers · ODB++ · Impedance reports · DFM/DFT validation · Assembly drawings",
  },
];

const projectExperience: ProjectExperienceItem[] = [
  projectExperienceEntry(
    "rf-multilayer-layout",
    "RF Multilayer PCB Layout",
    "high-speed-analog-board",
    {
      description:
        "Multi-layer RF PCB layout with high-frequency signal integrity support, precision routing, and thermally optimized stack design for reliable microwave operation.",
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/high_speed_analog_board/BCW_TOP_S14.svg",
    },
  ),
  projectExperienceEntry(
    "controlled-impedance-rf",
    "Controlled Impedance RF Routing",
    "wifi6-triband-router",
    {
      description:
        "Controlled 50 Ω microstrip and differential RF routing on a WiFi 6 triband router platform, with stackup-tuned impedance targets across 2.4, 5, and 6 GHz bands.",
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/UBIHUB/V2.9.png",
    },
  ),
  projectExperienceEntry(
    "antenna-pcb-integration",
    "Antenna PCB Integration",
    "animal-tracker",
  ),
  projectExperienceEntry(
    "microwave-transmission-line",
    "Microwave Transmission Line Design",
    "wifi-6e-router",
    {
      description:
        "Microwave transmission line design for a WiFi 6E router, with multi-band microstrip routing, low-loss interconnect, and impedance-matched RF paths for 6 GHz operation.",
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/OBD/1.png",
    },
  ),
  projectExperienceEntry(
    "rf-shielding-emi",
    "RF Shielding & EMI Reduction",
    "wifi6-triband-router",
    {
      description:
        "RF shielding and EMI reduction layout on a WiFi 6 triband router, with grounded coplanar structures, isolation between RF chains, and containment of radiated emissions.",
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/UBIHUB/V2.1.png",
    },
  ),
  projectExperienceEntry(
    "hf-material-optimization",
    "High-Frequency Material & Optimization",
    "lbm",
    "High-frequency material selection and stackup optimization on an LBM multi-layer PCB, balancing low-loss laminates, thermal copper distribution, and manufacturing-ready RF layout.",
  ),
];

const WHY_CARDS = [
  {
    title: "Architecture-First Engineering",
    desc: "Qmax Systems validates RF architecture before layout begins, preventing late-stage rework.",
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
    desc: "Our team has deep familiarity with RF test workflows including CMW500, spectrum analyzers, and VNAs.",
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
    desc: "Qmax Systems coordinates directly with PCB fabrication houses for low-loss substrate and impedance accuracy.",
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
    desc: "We prepare designs for FCC and CE certification through EMI-by-design layout.",
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
    desc: "DFM/DFT-validated Gerbers, ODB++, and impedance reports are delivered production-ready for handoff.",
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

// const schematicReviewItems: SchematicReviewItem[] = [
//   {
//     id: "rf-signal-chain",
//     title: "RF Signal Chain Architecture",
//     description:
//       "Gain stages, filter placement, and link-budget assumptions for first-pass RF performance.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
//         <circle cx="12" cy="12" r="3" />
//       </svg>
//     ),
//   },
//   {
//     id: "impedance-matching",
//     title: "Impedance Matching Networks",
//     description:
//       "Matching topologies and component values aligned to VSWR and return-loss targets.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//       </svg>
//     ),
//   },
//   {
//     id: "power-supply-filtering",
//     title: "Power Supply Filtering",
//     description:
//       "Decoupling and bias networks to keep PA, LNA, and transceiver rails RF-clean.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//       </svg>
//     ),
//   },
//   {
//     id: "rf-ground",
//     title: "RF Ground References",
//     description:
//       "Ground continuity and return-path strategy to prevent radiation and desensitization.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <rect x="2" y="2" width="20" height="20" rx="3" />
//         <line x1="2" y1="12" x2="22" y2="12" />
//         <line x1="12" y1="2" x2="12" y2="22" />
//       </svg>
//     ),
//   },
//   {
//     id: "component-lifecycle",
//     title: "Component Lifecycle Risk",
//     description:
//       "EOL and obsolescence screening for long-life wireless, defense, and instrumentation programs.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="12 6 12 12 16 14" />
//       </svg>
//     ),
//   },
// ];

const FAQ_ITEMS = [
  {
    q: "What frequency range do you support for RF PCB design?",
    a: "Qmax Systems designs RF PCBs from sub-GHz through millimeter-wave frequencies up to 80 GHz, covering single- and multi-band wireless, radar, and instrumentation platforms.",
  },
  {
    q: "Do you design microwave PCBs?",
    a: "Yes. We design microwave PCBs using low-loss laminates such as Rogers and Taconic, with microstrip, stripline, and coplanar-waveguide transmission-line modeling.",
  },
  {
    q: "Do you design WiFi RF boards?",
    a: "Yes. Qmax Systems has designed WiFi 5 and WiFi 6 RF PCBs with multiple MIMO chains and controlled 50 Ω impedance across the 2.4, 5, and 6 GHz bands.",
  },
  {
    q: "Do you support antenna integration?",
    a: "Yes. We design antenna feedlines, matching networks, and RF isolation structures, co-locating the antenna and RF front-end on a single PCB.",
  },
  {
    q: "Do you perform RF simulations?",
    a: "Yes. Qmax Systems performs SI, PI, and full-wave EM simulation before layout completion, deriving routing constraints from simulation rather than rules-of-thumb.",
  },
  {
    q: "Do you support mmWave PCB designs?",
    a: "Yes. We design millimeter-wave PCBs from 24 GHz to 80 GHz and have experience with 60 GHz radar-based sensing systems.",
  },
  {
    q: "What materials do you use for RF PCBs?",
    a: "Qmax Systems uses low-loss RF materials including Rogers, Taconic, and Isola Astra, plus hybrid RF/FR-4 stackups selected by frequency and loss budget.",
  },
  {
    q: "Do you coordinate with PCB fabrication houses?",
    a: "Yes. We align stackups and impedance targets directly with the chosen manufacturer, including controlled-impedance test coupons for yield.",
  },
  {
    q: "Can you redesign RF boards that failed FCC testing?",
    a: "Yes. Qmax Systems provides RF layout troubleshooting and redesign services to bring boards into FCC and CE compliance through EMI-by-design corrections.",
  },
  {
    q: "Do you support RF power amplifier boards?",
    a: "Yes. We have designed RF power amplifier systems up to 1 kW, including bias networks and thermal management for the PA stage.",
  },
  {
    q: "Can you design LoRa RF boards?",
    a: "Yes. Qmax Systems designs LoRa transceiver boards with antenna tuning networks and RF matching.",
  },
  {
    q: "Do you support BLE RF designs?",
    a: "Yes. We design BLE modules with RF filtering and antenna matching.",
  },
  {
    q: "Do you support SDR hardware?",
    a: "Yes. We design SDR RF front-ends and RF amplifier chains.",
  },
  {
    q: "Can you design RF front-end modules?",
    a: "Yes. We design RF front-end modules including LNAs, mixers, filters, and power amplifiers.",
  },
  {
    q: "Do you provide RF tuning support?",
    a: "Yes. Qmax Systems supports RF bring-up and calibration during prototype validation.",
  },
  {
    q: "What tools do you use for RF simulation?",
    a: "Qmax Systems uses Ansys HFSS, Mentor HyperLynx, and other full-wave EM modeling tools for RF simulation.",
  },
  {
    q: "Can you design RF filters on PCB?",
    a: "Yes. We design microstrip and distributed RF filters validated by full-wave EM simulation.",
  },
  {
    q: "Do you provide DFM review?",
    a: "Yes. Every Qmax Systems design undergoes DFM/DFT validation before production handoff.",
  },
  {
    q: "Do you support mmWave antenna feeds?",
    a: "Yes. We design controlled-impedance coplanar-waveguide (CPW) and microstrip antenna feeds for millimeter-wave bands.",
  },
  {
    q: "Can you design RF test equipment PCBs?",
    a: "Yes. We design RF test and instrumentation PCBs with controlled impedance and low-loss laminates.",
  },
  {
    q: "What deliverables do you provide?",
    a: "Qmax Systems provides DFM/DFT-validated Gerbers, ODB++, impedance reports, and assembly documentation ready for production handoff.",
  },
  {
    q: "Do you handle RF shielding design?",
    a: "Yes. We design shield cans and RF compartments with grounding and isolation between RF chains.",
  },
  {
    q: "Do you design high-power RF boards?",
    a: "Yes. We design high-power RF boards, including PA systems up to 1 kW with dedicated thermal management.",
  },
  {
    q: "What RF test equipment are you familiar with?",
    a: "Qmax Systems engineers work with the R&S CMW500, spectrum analyzers, and vector network analyzers (VNAs) for RF bring-up and characterization.",
  },
  {
    q: "Do you design microwave sensors?",
    a: "Yes. We design microwave sensor PCBs, including radar-based sensing up to 60 GHz.",
  },
  {
    q: "Do you support FCC compliance preparation?",
    a: "Yes. We prepare RF designs for FCC certification through EMI-by-design shielding, grounding, and filtering.",
  },
  {
    q: "Do you support CE compliance preparation?",
    a: "Yes. Qmax Systems prepares RF designs for CE certification through EMI-by-design layout.",
  },
  {
    q: "Who owns the design IP?",
    a: "The customer owns 100% of all design IP. Qmax Systems retains no rights to schematics, layouts, or simulation data.",
  },
  {
    q: "Do you support prototype bring-up?",
    a: "Yes. We support prototype bring-up, RF tuning, and calibration.",
  },
  {
    q: "Can you support production transfer?",
    a: "Yes. Qmax Systems supports production transfer with manufacturing alignment and production-ready deliverables.",
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
  "100gbe-high-speed-networking-board",
  "typheon",
  "mx1",
  "ultra-low-cost-bldc-motor-controller",
]);

export default function RFMicrowavePCBDesignPage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="/pcb-design-services/images/rf-pcb-service.jpg"
        imageAlt="RF and Microwave PCB Design — Qmax Systems"
        title="Qmax Systems Designs RF and Microwave PCBs"
        description={
          <>
            <p>
              Qmax Systems designs RF and microwave PCBs from hundreds of MHz to
              millimeter-wave bands, where the board is part of the RF circuit
              itself. Qmax&apos;s RF engineers control trace geometry,
              dielectric loss, via transitions, grounding, and shielding to hold
              insertion loss, phase stability, noise floor, and EMI compliance —
              across radar sensors, RF instrumentation, and wireless
              communication platforms.
            </p>
          </>
        }
        ctaHref="/pcb-design-services/contact"
        ctaLabel="Talk to Our Engineers"
      />
      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        title="RF PCB Engineering "
        titleHighlight="Approach"
        contactHref="/pcb-design-services/contact"
      />
      <ApplicationsProjectExperienceSection projects={projectExperience} />
      <WhySection
        whyCards={WHY_CARDS}
        title="Why Choose Qmax Systems for"
        titleHighlight="RF PCB Design"
        description="RF architecture validated before layout begins — backed by simulation-driven constraints and RF measurement expertise."
        consultationCta={{
          heading:
            "Get A Complimentary Consultation With Our RF & Microwave Experts.",
          subtitle:
            "1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven — no sales pitch.",
          ctaHref: "/pcb-design-services/contact",
        }}
      />

      {/* <ComplimentarySchematicReviewSection
        items={schematicReviewItems}
        titleHighlight="RF & Microwave PCB Design"
        subtitle="When customers engage Qmax Systems for RF PCB layout services, we perform a complimentary schematic review before layout begins. The review covers:"
      /> */}

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={rfMicrowaveCaseStudies}
        hideTopBorder
      />

      <FAQSection faqItems={FAQ_ITEMS} />
      <div className="pb-28" />
    </>
  );
}
