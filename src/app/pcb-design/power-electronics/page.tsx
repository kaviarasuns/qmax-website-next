import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import {
  ApplicationsProjectExperienceSection,
  type ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import { ComplimentaryConsultationSection } from "@/components/services-cmp/ComplimentaryConsultationSection";
import {
  CoreServiceOfferingsSection,
  type HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { ServiceCaseStudy } from "@/data/service-case-studies";
import { allCaseStudiesData, getCaseStudyCardImage } from "@/store/case-studies";
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
      "Power circuits operate in environments where parasitic inductance and thermal bottlenecks can compromise the entire system. Our PCB designs handle the most demanding current distribution challenges.",
    points: [
      {
        boldLead: "Heavy Copper PCBs (4oz to 14oz+)",
        rest: " — purpose-built stackups for high-current bus bars and power planes handling 1000A+ DC sources.",
      },
      {
        boldLead: "Busbar Integration",
        rest: " — embedded and laminated busbar structures for ultra-low-inductance current paths in inverter and converter stages.",
      },
      {
        boldLead: "Current Sharing & Balancing",
        rest: " — symmetric trace routing and copper balancing techniques to prevent hotspots in parallel MOSFET configurations.",
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
      "Adhering to IEC 60601, UL 62368-1, and IPC-2221 standards for high-voltage isolation up to 1500VDC. We design creepage and clearance into the board from the start — not as a late-stage correction.",
    points: [
      {
        boldLead: "Safety Standard Compliance",
        rest: " — creepage/clearance rules mapped to IEC 60601 (medical), UL 62368-1 (IT/AV), and IPC-2221 from schematic through layout.",
      },
      {
        boldLead: "Isolation Barrier Design",
        rest: " — slot cuts, routed channels, and reinforced isolation zones for primary-to-secondary boundaries up to 1500VDC.",
      },
      {
        boldLead: "Pollution Degree & CTI Analysis",
        rest: " — material and spacing selection based on operating environment, altitude, and Comparative Tracking Index requirements.",
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
      "High-frequency SiC and GaN MOSFETs switch at slew rates that turn every trace into an antenna. Our layouts are designed to contain EMI at the source.",
    points: [
      {
        boldLead: "Gate Driver Loop Optimization",
        rest: " — minimizing parasitic inductance in gate-source loops to control ringing and overshoot in SiC/GaN circuits.",
      },
      {
        boldLead: "Power Loop Minimization",
        rest: " — tight coupling of DC bus capacitors to switching devices, reducing the hot loop area that drives radiated emissions.",
      },
      {
        boldLead: "EMI Filter Placement",
        rest: " — strategic positioning of CM chokes, Pi-filters, and snubbers for CISPR 32 and CE/RE compliance without late-stage redesign.",
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
      "Utilizing metal substrates (IMS), thermal via arrays, and specialized cooling interfaces to prevent junction temperature violations under sustained load.",
    points: [
      {
        boldLead: "Thermal Via Arrays",
        rest: " — optimized via patterns under power devices for direct heat transfer to heatsink or chassis ground planes.",
      },
      {
        boldLead: "IMS & Metal-Core Substrates",
        rest: " — insulated metal substrate (IMS) and metal-core PCB designs for LED drivers, motor controllers, and high-dissipation modules.",
      },
      {
        boldLead: "Thermal Simulation Alignment",
        rest: " — copper pours and stackup design coordinated with thermal simulation results to prevent junction temperature violations.",
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
    desc: "All PCB designers at Qmax are Electrical Engineers capable of understanding circuit functionality and performing circuit analysis.",
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
    desc: "A structured, 25-year evolved process with checklists covering HV safety, EMI, thermal, and manufacturability.",
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
    a: "We utilize heavy copper PCBs (up to 14oz+), busbar integration, and thermal via arrays to maximize current-carrying capacity while maintaining a compact footprint.",
  },
  {
    q: "What standards do you follow for high-voltage isolation?",
    a: "We strictly adhere to IPC-2221B for generic design and IEC 60601 (Medical) or UL 62368-1 for specific safety clearances and creepage distances.",
  },
  {
    q: "How do you mitigate switching noise in SiC or GaN designs?",
    a: "By minimizing loop inductance in the gate drive and power loops, implementing Pi-filters, and using 3D EM simulation to identify and suppress high-frequency harmonics.",
  },
  {
    q: "Do you design custom magnetics for power converters?",
    a: "Yes. We specify core materials, winding geometries, and litz wire for custom inductors and transformers to optimize efficiency and thermal performance.",
  },
  {
    q: "How is thermal management validated?",
    a: "We perform 3D Thermal Analysis to identify hotspots and optimize the interface between the PCB, components, and heatsinks or enclosures.",
  },
  {
    q: "Can you assist with boards that failed EMI (CE/RE) testing?",
    a: 'Yes. We provide "rescue" services, using near-field probes to locate noise sources and redesigning layouts to ensure compliance with CE/FCC standards.',
  },
  {
    q: "Do you support busbar-to-PCB integration?",
    a: "Absolutely. We design the mechanical and electrical interfaces for high-current busbars, ensuring reliable connections for industrial PDUs and motor drives.",
  },
  {
    q: "What materials are recommended for high-power applications?",
    a: "Beyond standard FR-4, we utilize metal-clad substrates (IMS) for heat dissipation or high-Tg materials for high-temperature environments.",
  },
  {
    q: "How do you manage THD in PFC controllers?",
    a: "We focus on precision current sensing layout and low-impedance feedback paths to ensure the controller maintains high power factor and low Total Harmonic Distortion.",
  },
  {
    q: "Do you provide fabrication support?",
    a: "Yes. We act as a direct technical liaison with fabrication houses to resolve stackup, material queries, and DFM issues before production.",
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
        title="Power Electronics PCB Design."
        description={
          <>
            <p>
              Modern power electronics systems demand more than simple
              interconnects; they require a holistic electromagnetic and thermal
              engineering strategy where the PCB is a functional element of the
              circuit. At Qmax Systems, we treat power electronics PCB design as
              a discipline of balancing high-current density, extreme voltage
              gradients, and rapid switching transients (di/dt and dv/dt).
            </p>
            <p>
              Our engineering team specializes in First-Time-Right PCB design,
              prioritizing early risk identification to eliminate the costly
              re-spins often associated with high-power R&amp;D. Whether your
              project involves 800V EV architectures or kW-level plasma
              generators, our designs are optimized for reliability, safety, and
              manufacturability from day one.
            </p>
          </>
        }
        ctaHref="/hardware-development-services/contact"
        ctaLabel="Talk to Our Engineers"
      />
      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        title="Introduction to Power Electronics "
        titleHighlight="PCB Engineering"
      />
      <ApplicationsProjectExperienceSection
        projects={projectExperience}
      />
      <WhySection
        whyCards={WHY_CARDS}
        title="Why Choose Qmax"
        titleHighlight="Systems?"
        description="25 years of power electronics PCB expertise — from HV isolation to EMI-compliant production files."
        className="pb-8 max-[900px]:pb-8"
      />
      {/* <ComplimentarySchematicReviewSection
        items={schematicReviewItems}
        titleHighlight="Power Electronics PCB Design"
        subtitle="Every power electronics engagement includes a complimentary schematic review to identify architectural risks before layout begins."
      /> */}
      <ComplimentaryConsultationSection
        variant="pcb"
        title="Get a Complimentary Consultation with Our Power Electronics Experts"
      />
      <FAQSection
        faqItems={FAQ_ITEMS}
      />
      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={powerElectronicsCaseStudies}
        hideTopBorder
      />
      <div className="pb-28" />
    </>
  );
}
