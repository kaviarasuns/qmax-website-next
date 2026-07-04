import { buildMetadata } from "@/lib/seo";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import type { ServiceCaseStudy } from "@/data/service-case-studies";
import {
  ApplicationsProjectExperienceSection,
  type ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import {
  CoreServiceOfferingsSection,
  HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import {
  getCaseStudyCardImage,
  allCaseStudiesData,
  servicePageCaseStudies,
} from "@/store/case-studies";

export const metadata = buildMetadata({
  title: "Analog & Mixed-Signal PCB Design | ADC/DAC Layout | Qmax",
  description:
    "Analog and mixed-signal PCB layout - ADC/DAC signal chain isolation, ground plane partitioning, low-noise routing, and EMC-compliant design. Altium & Cadence.",
  path: "/pcb-design-services/analog-and-mixed-signal",
});

const pcbCaseStudies: ServiceCaseStudy[] = servicePageCaseStudies;

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
    id: "noise",
    tab: "Noise & Sensitivity",
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
      "Analog circuits are extremely sensitive to noise sources that digital designs can tolerate.",
    intro:
      "Qmax Systems designs analog signal chains that operate in a continuous voltage domain, where circuits are far more sensitive to noise than digital logic running at discrete levels. Qmax's engineers identify and suppress the dominant coupling paths - digital switching transients, power-supply ripple on shared PDN rails, ground-return disturbances, and trace-to-trace crosstalk at high-impedance nodes - before layout begins. These designs serve scientific instruments, industrial sensing, medical electronics, and measurement systems.",
    points: [
      {
        boldLead: "Digital Switching Transients",
        rest: " - fast edge rates from digital ICs couple into sensitive analog traces through shared ground planes and adjacent routing.",
      },
      {
        boldLead: "Power Supply Ripple",
        rest: " - switching-regulator noise propagates through shared PDN rails to precision analog front-ends and ADC reference pins.",
      },
      {
        boldLead: "Ground Return Current Disturbances",
        rest: " - return currents from digital loads flow through analog ground regions, introducing voltage offsets.",
      },
      {
        boldLead: "Crosstalk Between Signal Traces",
        rest: " - electromagnetic coupling between adjacent traces rises at high-impedance analog nodes.",
      },
    ],
    applications:
      "Scientific instruments · Industrial sensing · Medical electronics · Measurement systems",
  },
  {
    id: "coexistence",
    tab: "Mixed-Signal Coexistence",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <rect x="6" y="4" width="12" height="16" rx="2" />
      </svg>
    ),
    headline:
      "When analog and digital share a PCB, the layout determines the outcome.",
    intro:
      "Qmax Systems treats mixed-signal layout as the decisive factor when sensitive analog and aggressive digital circuits must share a board, since poor placement introduces measurable performance degradation. The team manages the hardest cases - microvolt preamplifiers beside high-speed processors, 16-bit+ ADCs sharing real estate with DC-DC regulators, and precision measurement paths near RF and digital clocks. These designs control the typical risks: raised noise floor, measurement drift, reduced ADC ENOB, and EMI compliance failures.",
    points: [
      {
        boldLead: "Low-Noise Preamplifiers Near Digital Processors",
        rest: " - analog front-ends operate microvolt signals within millimeters of high-speed digital switching.",
      },
      {
        boldLead: "High-Resolution ADCs with Noisy Switching Supplies",
        rest: " - 16-bit+ converters share PCB real estate with DC-DC regulators that generate broadband noise.",
      },
      {
        boldLead: "Sensitive Measurement Circuits with RF/Digital Clocks",
        rest: " - precision measurement paths coexist with clock oscillators and high-speed serial interfaces.",
      },
    ],
    applications:
      "Increased noise floor · Measurement drift · Reduced ADC ENOB · EMI compliance failures",
  },
  {
    id: "layout",
    tab: "Disciplined Layout Techniques",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    headline:
      "Structured layout techniques that prevent noise coupling at the source.",
    intro:
      "Qmax Systems prevents noise coupling at the source by applying disciplined layout techniques rooted in electromagnetic first principles, not rules of thumb. Qmax's engineers use analog/digital partitioning, controlled ground-return paths with star and split-ground strategies, guard traces and shielding around high-impedance nodes, and dedicated low-noise power networks with LDO-filtered analog rails. These techniques serve scientific instruments, industrial sensing, medical electronics, and bio-potential monitoring.",
    points: [
      {
        boldLead: "Analog/Digital Partitioning",
        rest: " - Qmax physically separates analog and digital domains and defines zones with controlled boundary transitions.",
      },
      {
        boldLead: "Controlled Ground Return Paths",
        rest: " - Star and split-ground strategies keep digital return currents out of analog regions.",
      },
      {
        boldLead: "Guard Traces & Shielding",
        rest: " - Qmax's engineers place guard traces around high-impedance nodes, add analog shielding, and dedicate ground planes to sensitive signal domains.",
      },
      {
        boldLead: "Dedicated Low-Noise Power Networks",
        rest: " - Isolated power networks with LDO filtering feed precision analog rails, separated from digital power domains.",
      },
    ],
    applications:
      "Star grounding · Split ground planes · Guard traces · Analog shielding · Isolated LDO rails",
  },
  {
    id: "outcomes",
    tab: "Measurement-Grade Outcomes",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    headline:
      "PCB designs that are measurement-accurate, EMI-robust, and manufacturing-ready.",
    intro:
      "Qmax Systems delivers analog and mixed-signal PCBs that are measurement-accurate, EMI-robust, and manufacturing-ready for scientific instruments, industrial sensing platforms, medical electronics, and measurement systems where microvolt-level signals must operate reliably in electrically noisy environments. Qmax's engineers - all Electrical Engineers - apply a first-time-right methodology with rigorous design reviews and validate every layout for noise floor, ENOB preservation, and thermal stability across the full operating range.",
    points: [
      {
        boldLead: "First-Time-Right Engineering",
        rest: " - Qmax's experienced PCB designers apply a first-time-right methodology with rigorous design reviews and production-ready validation.",
      },
      {
        boldLead: "All-Engineer Design Team",
        rest: " - every PCB designer at Qmax Systems is an Electrical Engineer with extensive experience in analog hardware and mixed-signal layout.",
      },
      {
        boldLead: "Measurement-Grade Performance",
        rest: " - Each layout passes validation for noise floor, ENOB preservation, and thermal stability across the full operating range.",
      },
    ],
    applications:
      "Scientific instruments · Industrial sensing · Medical electronics · Process control · Bio-potential monitoring",
  },
];

const projectExperience: ProjectExperienceItem[] = [
  projectExperienceEntry(
    "precision-analog-layout",
    "Precision Analog PCB Layout",
    "high-speed-analog-board",
    {
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/high_speed_analog_board/BCW_TOP_S14.svg",
    },
  ),
  projectExperienceEntry(
    "low-noise-signal-routing",
    "Low-Noise Signal Routing",
    "digital-stethoscope",
    "Compact multi-layer layout with optimized signal routing, stable power distribution, and dedicated ground reference planes for low-noise analog capture on a digital stethoscope platform.",
  ),
  projectExperienceEntry(
    "power-ground-plane",
    "Power & Ground Plane Optimization",
    "poe-power-injector",
    {
      imageSrc: "https://dev.qmaxsys.com/case-studies/POE/2.1.svg",
    },
  ),
  projectExperienceEntry(
    "mixed-signal-design",
    "Mixed-Signal PCB Design",
    "high-speed-analog-mux",
    {
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies-comp/pcb/typheon/Typhoon_SIG78.png",
    },
  ),
  projectExperienceEntry(
    "emi-emc-reduction",
    "EMI/EMC Reduction Techniques",
    "high-speed-camera-interface",
    {
      description:
        "EMI-hardened layout for a high-speed camera interface board, with controlled return paths, shielding discipline, and noise isolation between sensitive analog front-ends and high-speed digital processing.",
      imageSrc:
        "https://dev.qmaxsys.com/case-studies/embedded/HIPPACK1/2.2.svg",
    },
  ),
  projectExperienceEntry(
    "thermal-component-placement",
    "Thermal & Component Placement Optimization",
    "ultra-low-cost-bldc-motor-controller-for-evs",
    {
      imageSrc:
        "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/lucas_tvs/1.png",
    },
  ),
];

const WHY_CARDS = [
  {
    title: "First-Time-Right Philosophy",
    desc: "Qmax Systems prioritizes early risk identification at the schematic stage to eliminate costly PCB re-spins.",
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
    title: "Engineering-Led Design",
    desc: "All our PCB designers are Electrical Engineers capable of performing complex circuit and noise analysis.",
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
    title: "DFM/DFT Validation",
    desc: "We deliver 100% DFM-verified files tailored to each fabrication house's specific capabilities.",
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
    desc: "All design files, libraries, and simulation data remain the sole property of the customer.",
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
//     id: "analog-digital-isolation",
//     title: "Analog/Digital Isolation Strategy",
//     description:
//       "Reviewing partitioning and noise-coupling paths to protect sensitive analog stages from digital aggressors.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <line x1="2" y1="12" x2="6" y2="12" />
//         <line x1="18" y1="12" x2="22" y2="12" />
//         <rect x="6" y="4" width="12" height="16" rx="2" />
//         <line x1="6" y1="12" x2="18" y2="12" strokeDasharray="2 2" />
//       </svg>
//     ),
//   },
//   {
//     id: "power-supply-filtering",
//     title: "Power Supply Filtering",
//     description:
//       "Optimizing low-noise LDOs and decoupling networks for high-resolution ADCs and precision analog front-ends.",
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
//     id: "termination-impedance",
//     title: "Termination & Impedance",
//     description:
//       "Validating signal termination schemes for high-speed converters and instrumentation interfaces.",
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
//       'Screening for EOL and "at-risk" components to ensure long-term manufacturability.',
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
    q: "How do you manage noise in mixed-signal PCB designs?",
    a: "Qmax Systems manages noise through strategic analog/digital partitioning that physically separates sensitive analog components from noisy digital switching, combined with dedicated return paths and shielding around high-impedance nodes.",
  },
  {
    q: "Do you support split ground planes?",
    a: "Yes, where appropriate. We evaluate whether a single solid ground or a split plane bridged at the converters better suits your signal frequencies, preventing common-mode noise and return-path discontinuities.",
  },
  {
    q: "Can you design for low-noise amplifiers (LNA)?",
    a: "Yes. We implement guard traces and Faraday shielding to protect low-level signals from external EMI and internal crosstalk in low-noise amplifier front-ends.",
  },
  {
    q: "Do you handle high-resolution ADC/DAC layout (24-bit+)?",
    a: "Yes. Qmax Systems focuses on reference-voltage stability, thermal gradient control, and meticulous grounding to preserve the effective number of bits (ENOB) in 24-bit+ converter layouts.",
  },
  {
    q: "What materials do you recommend for precision analog?",
    a: "We use FR-4 where suitable, but specify low-loss materials such as Rogers or Megtron 6 for high-frequency or high-impedance analog applications to minimize dielectric absorption.",
  },
  {
    q: "Do you perform SI/PI simulations for analog boards?",
    a: "Yes. We use SPICE modeling and 3D EM simulation to validate signal paths and confirm the Power Distribution Network (PDN) is noise-free before fabrication.",
  },
  {
    q: "How do you mitigate EMI/EMC issues?",
    a: "We apply an EMC-by-design approach, addressing return-path discontinuities and placing filtering - Pi-filters and ferrite beads - at the noise source.",
  },
  {
    q: "Can you help with designs that failed ESD/EFT testing?",
    a: "Yes. Qmax Systems provides rescue services that identify and fix vulnerabilities in existing layouts to pass ESD and EFT compliance.",
  },
  {
    q: "Do you support medical isolation requirements?",
    a: "Yes. We design to IEC 60601, ensuring proper creepage and clearance distances for patient safety in medical measurement electronics.",
  },
  {
    q: "Who owns the IP for a design?",
    a: "The customer retains 100% ownership of all design files and IP. Qmax Systems retains no rights to schematics, layouts, libraries, or simulation data.",
  },
  {
    q: "Do you design medical measurement electronics?",
    a: "Yes. Qmax Systems is an ISO 13485-certified design house and designs medical measurement electronics to IEC 60601 isolation and safety requirements.",
  },
];

export default function AnalogAndMixedSignalPage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="/pcb-design/analog-and-mixed-signal.jpg"
        imageAlt="High-Performance Digital Systems - Qmax Systems"
        title="Analog and Mixed-Signal PCB Design - Grounding, Shielding, and Noise Control"
        description={
          <>
            <p>
              Qmax Systems provides analog and mixed-signal PCB design that
              combines high-sensitivity analog signal chains with high-speed
              digital processing on a single board. Qmax Systems engineers treat
              the layout as part of the electrical system - controlling
              grounding topology, shielding, and power filtering so signal
              integrity, noise floor, and measurement accuracy hold under real
              conditions.
            </p>
          </>
        }
        ctaHref="/pcb-design-services/contact"
        ctaLabel="Talk to Our Engineers"
      />
      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        title="Our Core Service "
        titleHighlight="Offerings"
        contactHref="/pcb-design-services/contact"
      />
      <ApplicationsProjectExperienceSection projects={projectExperience} />

      <WhySection
        whyCards={WHY_CARDS}
        title="Why Choose Qmax"
        titleHighlight="Systems?"
        description="Engineering-led analog and mixed-signal PCB design - built for first-time-right performance from schematic to production."
        consultationCta={{
          heading:
            "Get a Complimentary Consultation with Our Analog & Mixed-Signal PCB Experts.",
          subtitle:
            "1-hour session with a Qmax Systems Senior PCB Design Engineer. Practical, engineering-driven - no sales pitch.",
          ctaHref: "/pcb-design-services/contact",
        }}
      />

      {/* <section className="bg-white px-16 pb-24 max-[900px]:px-6 max-[900px]:pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-xl border border-slate-200 border-l-4 border-l-[#F33117] bg-white px-7 py-7 md:px-8">
            <h3 className="text-lg font-semibold">Compliance-Ready Layout</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground">
              Qmax Systems focuses on compliance from Day 1 for CE, FCC, and UL
              certification. Qmax Systems delivers production-ready PCB designs
              that function correctly on the first prototype build.
            </p>
          </div>
        </div>
      </section> */}

      {/* <ComplimentarySchematicReviewSection
        items={schematicReviewItems}
        titleHighlight="Analog & Mixed-Signal PCB Design"
        subtitle="Every PCB layout engagement at Qmax Systems includes a complimentary schematic review. Before a single trace is routed, our engineers analyze:"
      /> */}

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
        hideTopBorder
      />

      <FAQSection faqItems={FAQ_ITEMS} />
      <div className="pb-28"></div>
    </>
  );
}
