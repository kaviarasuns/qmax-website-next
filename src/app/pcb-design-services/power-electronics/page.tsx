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
    id: "current",
    tab: "High-Current Distribution",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    headline:
      "Heavy copper and busbar integration for extreme current demands.",
    intro:
      "Qmax Systems designs power circuits for environments where parasitic inductance and thermal bottlenecks can compromise the entire system. Qmax's engineers build heavy-copper stackups (4oz–14oz+), embedded and laminated busbar structures, and balanced parallel-MOSFET routing to carry 1000A+ DC without hotspots. These designs go into EV inverters, industrial motor drives, DC-DC converters, welding equipment, and UPS systems.",
    points: [
      {
        boldLead: "Heavy Copper PCBs (4oz to 14oz+)",
        rest: " — Qmax builds purpose-built stackups for high-current bus bars and power planes handling 1000A+ DC sources.",
      },
      {
        boldLead: "Busbar Integration",
        rest: " — Embedded and laminated busbar structures form ultra-low-inductance current paths in inverter and converter stages.",
      },
      {
        boldLead: "Current Sharing & Balancing",
        rest: " — Symmetric trace routing and copper balancing prevent hotspots in parallel-MOSFET configurations.",
      },
    ],
    applications:
      "EV inverters · Industrial motor drives · DC-DC converters · Welding equipment · UPS systems",
  },
  {
    id: "creepage",
    tab: "Creepage & Clearance",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    headline:
      "High-voltage isolation designed for safety certification from day one.",
    intro:
      "Qmax Systems designs high-voltage isolation to IEC 60601, UL 62368-1, and IPC-2221 for working voltages up to 1500VDC, building creepage and clearance into the board from the schematic — not as a late-stage correction. The team adds slot cuts, routed channels, reinforced isolation zones, and pollution-degree/CTI-based spacing. These designs serve medical power supplies, EV battery management, solar inverters, and industrial HV controllers.",
    points: [
      {
        boldLead: "Safety Standard Compliance",
        rest: " — Qmax maps creepage/clearance rules to IEC 60601 (medical), UL 62368-1 (IT/AV), and IPC-2221 from schematic through layout.",
      },
      {
        boldLead: "Isolation Barrier Design",
        rest: " — Slot cuts, routed channels, and reinforced isolation zones hold primary-to-secondary boundaries up to 1500VDC.",
      },
      {
        boldLead: "Pollution Degree & CTI Analysis",
        rest: " — Qmax's engineers select materials and spacing based on operating environment, altitude, and Comparative Tracking Index (CTI) requirements.",
      },
    ],
    applications:
      "Medical power supplies · EV battery management · Solar inverters · Industrial HV controllers",
  },
  {
    id: "noise",
    tab: "Switching Noise Mitigation",
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
      "Reducing conducted and radiated emissions in high-frequency switching designs.",
    intro:
      "Qmax Systems contains EMI at the source in high-frequency SiC and GaN designs, where MOSFET slew rates turn every trace into an antenna. Qmax's engineers minimize gate-loop and power-loop parasitic inductance, tightly couple DC-bus capacitors to switching devices, and place CM chokes, Pi-filters, and snubbers for CISPR 32 and CE/RE compliance. These designs serve GaN/SiC converters, high-frequency DC-DC, telecom rectifiers, and plasma generators.",
    points: [
      {
        boldLead: "Gate Driver Loop Optimization",
        rest: " — Qmax minimizes parasitic inductance in gate-source loops to control ringing and overshoot in SiC/GaN circuits.",
      },
      {
        boldLead: "Power Loop Minimization",
        rest: " — Tight coupling of DC-bus capacitors to switching devices shrinks the hot-loop area that drives radiated emissions.",
      },
      {
        boldLead: "EMI Filter Placement",
        rest: " — CM chokes, Pi-filters, and snubbers reach CISPR 32 and CE/RE compliance without late-stage redesign.",
      },
    ],
    applications:
      "GaN/SiC converters · High-frequency DC-DC · Telecom rectifiers · Plasma generators",
  },
  {
    id: "thermal",
    tab: "Thermal Considerations",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
    headline:
      "Thermal management engineered into the PCB — not bolted on after.",
    intro:
      "Qmax Systems engineers thermal management into the PCB rather than bolting it on afterward, using insulated metal substrates (IMS), thermal via arrays, and specialized cooling interfaces to prevent junction-temperature violations under sustained load. Qmax's engineers coordinate copper pours and stackup with thermal-simulation results. These designs serve LED drivers, motor controllers, battery chargers, induction heating, and high-power RF amplifiers.",
    points: [
      {
        boldLead: "Thermal Via Arrays",
        rest: " — Qmax optimizes via patterns under power devices for direct heat transfer to heatsink or chassis ground planes.",
      },
      {
        boldLead: "IMS & Metal-Core Substrates",
        rest: " — Insulated-metal-substrate (IMS) and metal-core PCBs serve LED drivers, motor controllers, and high-dissipation modules.",
      },
      {
        boldLead: "Thermal Simulation Alignment",
        rest: " — Copper pours and stackup track thermal-simulation results to prevent junction-temperature violations.",
      },
    ],
    applications:
      "LED drivers · Motor controllers · Battery chargers · Induction heating · High-power RF amplifiers",
  },
];

const projectExperience: ProjectExperienceItem[] = [
  projectExperienceEntry(
    "high-current-layout",
    "High-Current PCB Layout Design",
    "bms-controller",
    {
      description:
        "BMS controller PCB with high-current power distribution, heavy copper routing, and thermal-aware layout for battery pack monitoring and cell balancing under sustained load.",
      imageSrc: "/case-studies/MICROSCOPIC CAMERA/4.png",
    },
  ),
  projectExperienceEntry(
    "smps-power-converter",
    "SMPS & Power Converter PCB Development",
    "stellar-power-board",
    {
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/alphion/ALPHION-AOLT-PR1_SIG136.svg",
    },
  ),
  projectExperienceEntry(
    "thermal-management",
    "Thermal Management & Heat Dissipation",
    "thermal-management-system",
    {
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/thermal_analysis_and_management/1.4.png",
    },
  ),
  projectExperienceEntry(
    "power-integrity-grounding",
    "Power Integrity & Grounding Optimization",
    "100gbe-high-speed-networking-board",
    "Multi-layer layout with optimized power distribution planes, ground isolation regions, and stable PDN design for high-current and high-speed coexistence on a 100GbE networking board.",
  ),
  projectExperienceEntry(
    "emi-emc-power-pcb",
    "EMI/EMC Compliant Power PCB Design",
    "connected-car-demonstration-unit",
    {
      description:
        "Power PCB layout for a connected car demonstration unit with disciplined switching-node placement, filtered power rails, and EMI containment for automotive EMC compliance.",
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/tekion_ott/TEK_OTT_REV1P0_BRD_PR3.svg",
    },
  ),
  projectExperienceEntry(
    "hv-isolation-safety",
    "High-Voltage Isolation & Safety Layout",
    "3-phase-smart-energy-meter",
    "Precision 3-phase smart energy meter PCB with high-accuracy sensing, reinforced isolation barriers, and clearance/creepage compliance for mains-connected metering applications.",
  ),
];

const WHY_CARDS = [
  {
    title: "Engineering-Led Design",
    desc: "All our PCB designers are Electrical Engineers capable of understanding circuit functionality and performing circuit analysis.",
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
    title: "First-Time-Right Philosophy",
    desc: "Qmax Systems follows a structured, 25-year evolved process with checklists covering HV safety, EMI, thermal, and manufacturability.",
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
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Compliance-Ready Layout",
    desc: "CE, FCC, UL, and IEC certification requirements addressed from Day 1, not as a late-stage retrofit.",
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
    title: "IP Ownership",
    desc: "The customer retains 100% ownership of all native CAD files, libraries, and simulation data.",
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
//     id: "hv-lv-isolation",
//     title: "HV/LV Isolation Strategy",
//     description:
//       "Reviewing opto-isolation, creepage paths, and magnetic barriers for IEC 60601 and UL 62368-1 safety compliance.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//       </svg>
//     ),
//   },
//   {
//     id: "magnetics-filtering",
//     title: "Magnetics & Filtering",
//     description:
//       "Validating transformer winding geometries and EMI filter stages — Pi-filters and Common Mode Chokes — for clean CE/RE performance.",
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
//     id: "component-lifecycle",
//     title: "Component Lifecycle",
//     description:
//       'Screening for EOL and "at-risk" components to ensure long-term production stability.',
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
    q: "How do you handle high-current requirements in small form factors?",
    a: "Qmax Systems uses heavy copper PCBs (up to 14oz+), busbar integration, and thermal via arrays to maximize current-carrying capacity while maintaining a compact footprint, supporting 1000A+ DC sources.",
  },
  {
    q: "What standards do you follow for high-voltage isolation?",
    a: "We adhere to IPC-2221B for generic design and IEC 60601 (medical) or UL 62368-1 (IT/AV) for specific safety clearances and creepage distances, up to 1500VDC working voltage.",
  },
  {
    q: "How do you mitigate switching noise in SiC or GaN designs?",
    a: "We minimize loop inductance in the gate-drive and power loops, place Pi-filters and snubbers, and use 3D EM simulation to identify and suppress high-frequency harmonics for CISPR 32 compliance.",
  },
  {
    q: "Do you design custom magnetics for power converters?",
    a: "Yes. Qmax Systems specifies core materials, winding geometries, and litz wire for custom inductors and transformers to optimize efficiency and thermal performance in power converters.",
  },
  {
    q: "How do you validate thermal management?",
    a: "We perform 3D thermal analysis to identify hotspots and optimize the interface between the PCB, power components, and heatsinks or enclosures, preventing junction-temperature violations.",
  },
  {
    q: "Can you assist with boards that failed EMI (CE/RE) testing?",
    a: "Yes. Qmax Systems provides rescue services, using near-field probes to locate noise sources and redesigning layouts to meet CE and FCC compliance.",
  },
  {
    q: "Do you support busbar-to-PCB integration?",
    a: "Yes. We design the mechanical and electrical interfaces for high-current busbars, ensuring reliable connections for industrial PDUs and motor drives.",
  },
  {
    q: "What materials do you recommend for high-power applications?",
    a: "Qmax Systems uses standard FR-4 where suitable, metal-clad substrates (IMS) for heat dissipation, and high-Tg materials for high-temperature environments.",
  },
  {
    q: "How do you manage THD in PFC controllers?",
    a: "We focus on precision current-sensing layout and low-impedance feedback paths so PFC controllers maintain high power factor and low Total Harmonic Distortion (THD).",
  },
  {
    q: "Do you provide fabrication support?",
    a: "Yes. Qmax Systems acts as a direct technical liaison with fabrication houses, resolving stackup, material, and DFM issues before production.",
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

const powerElectronicsCaseStudies: ServiceCaseStudy[] = pcbServiceCaseStudies([
  "lbm",
  "fedarant-pcb-top-layer",
  "qualcomm-wifi4-routers",
  "arc-detector",
]);

export default function PowerElectronicsPage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="/pcb-design/Power-Electronics-PCB.png"
        imageAlt="Power Electronics PCB Design — Qmax Systems"
        title="Qmax Systems Designs Power Electronics PCBs"
        description={
          <>
            <p>
              Qmax Systems designs power electronics PCBs as functional circuit
              elements, balancing high-current density, extreme voltage
              gradients, and rapid switching transients (di/dt and dv/dt). A
              First-Time-Right methodology — front-loading electromagnetic and
              thermal risk analysis — takes 800V EV architectures and kW-level
              plasma generators to production without costly re-spins.
            </p>
          </>
        }
        ctaHref="/pcb-design-services/contact"
        ctaLabel="Talk to Our Engineers"
      />
      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        title="Introduction to Power Electronics "
        titleHighlight="PCB Engineering"
        contactHref="/pcb-design-services/contact"
      />
      <ApplicationsProjectExperienceSection projects={projectExperience} />
      <WhySection
        whyCards={WHY_CARDS}
        title="Why Choose Qmax"
        titleHighlight="Systems?"
        description="25 years of power electronics PCB expertise — from HV isolation to EMI-compliant production files."
        consultationCta={{
          heading:
            "Get A Complimentary Consultation With Our Power Electronics Experts.",
          subtitle:
            "1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven — no sales pitch.",
          ctaHref: "/pcb-design-services/contact",
        }}
      />
      {/* <ComplimentarySchematicReviewSection
        items={schematicReviewItems}
        titleHighlight="Power Electronics PCB Design"
        subtitle="Every power electronics engagement includes a complimentary schematic review to identify architectural risks before layout begins."
      /> */}

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={powerElectronicsCaseStudies}
        hideTopBorder
      />

      <FAQSection faqItems={FAQ_ITEMS} />
      <div className="pb-28" />
    </>
  );
}
