import { FAQSection } from "@/components/services-cmp/FAQSection";
import {
  ApplicationsProjectExperienceSection,
  type ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import { ComplimentaryConsultationSection } from "@/components/services-cmp/ComplimentaryConsultationSection";
import {
  CoreServiceOfferingsSection,
  HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { getCaseStudyCardImage } from "@/store/case-studies";
import { pcbCaseStudiesData } from "@/store/pcb-case-studies";

const pcbCaseStudies = pcbCaseStudiesData.slice(0, 4).map((caseStudy) => ({
  title: caseStudy.title,
  image: caseStudy.images[0],
  link: `/case-studies/${caseStudy.id}`,
  category: "development",
  summary: caseStudy.summary,
  imageRotation: caseStudy.rotatedImages?.[0],
}));

function pcbProjectExperienceEntry(
  id: string,
  listTitle: string,
  caseStudyId: string,
  description?: string,
): ProjectExperienceItem {
  const study = pcbCaseStudiesData.find((caseStudy) => caseStudy.id === caseStudyId);
  if (!study) {
    throw new Error(`PCB case study not found: ${caseStudyId}`);
  }

  return {
    id,
    listTitle,
    captionTitle: study.title,
    description: description ?? study.summary,
    imageSrc: getCaseStudyCardImage(caseStudyId),
    imageAlt: study.title,
  };
}

const projectExperience: ProjectExperienceItem[] = [
  pcbProjectExperienceEntry(
    "multilayer-layout",
    "High-Speed Multilayer PCB Layout",
    "ai-gpu-expansion-chassis-motherboard",
    "Complex multi-layer layout for AI GPU expansion chassis motherboards, featuring high pin-count BGA escape routing, HDI microvia structures, and dense interconnect for ultra-high-bandwidth PCIe fabrics.",
  ),
  pcbProjectExperienceEntry(
    "controlled-impedance-routing",
    "Controlled Impedance Routing",
    "qualcomm-wifi-6-triband-router",
    "Precision single-ended and differential impedance routing on a Qualcomm WiFi 6 triband router platform, with stackup optimization for consistent 50 Ω and 100 Ω targets across all high-speed data paths.",
  ),
  pcbProjectExperienceEntry(
    "signal-integrity-analysis",
    "Signal Integrity Analysis",
    "ai-gpu-expansion-chassis-motherboard",
    "Pre- and post-layout signal integrity verification for AI GPU expansion chassis motherboards, including eye diagram analysis, TDR characterization, and crosstalk modeling for PCIe Gen6-class signaling.",
  ),
  pcbProjectExperienceEntry(
    "ddr-memory-routing",
    "DDR & High-Speed Memory Routing",
    "video-processor-pcb",
  ),
  pcbProjectExperienceEntry(
    "high-frequency-pcb-design",
    "High-Frequency PCB Design",
    "pcie-gen5-cpo-board",
  ),
  pcbProjectExperienceEntry(
    "differential-pair-routing",
    "Differential Pair Routing & Length Matching",
    "qualcomm-wifi4-routers",
  ),
];

const coreServiceOfferings: HighSpeedCoreOffering[] = [
  {
    id: "memory",
    tab: "Memory & High-Speed Interfaces",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <line x1="6" y1="10" x2="6" y2="14" />
        <line x1="10" y1="10" x2="10" y2="14" />
        <line x1="14" y1="10" x2="14" y2="14" />
        <line x1="18" y1="10" x2="18" y2="14" />
      </svg>
    ),
    headline:
      "High-speed memory and serial interfaces routed at the edge of physics.",
    intro:
      "Our design team operates at the leading edge of digital signaling standards, delivering PCB layouts validated against the tightest timing and loss budgets in the industry.",
    points: [
      {
        boldLead: "DDR5 & LPDDR5",
        rest: " — implementation of Decision Feedback Equalization (DFE), CA parity, and CRC. We manage ultra-tight timing margins and address the complexities of on-DIMM PMICs.",
      },
      {
        boldLead: "PCIe Gen5 & Gen6",
        rest: " — expertise in PAM4 signaling, ensuring compliance with strict jitter and noise floor requirements.",
      },
      {
        boldLead: "112G SerDes",
        rest: " — advanced routing for 112 Gbps per lane, utilizing state-of-the-art simulation to minimize reflections and crosstalk.",
      },
    ],
    applications:
      "AI GPU chassis · O-RAN distributed units · Server motherboards · Network interface cards · FPGA-based imaging",
  },
  {
    id: "hdi",
    tab: "Advanced HDI & Fabrication",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <line x1="2" y1="8" x2="22" y2="8" />
        <line x1="8" y1="2" x2="8" y2="22" />
        <line x1="16" y1="2" x2="16" y2="22" />
      </svg>
    ),
    headline:
      "Complex interconnect structures for the densest digital designs.",
    intro:
      "Mastery of advanced HDI fabrication techniques that enable maximum routing density while maintaining signal integrity and manufacturability.",
    points: [
      {
        boldLead: "30-Layer HDI PCB Design",
        rest: " — mastery of Type I, II, and III HDI structures, including stacked and staggered microvias, via-in-pad, and ELIC (Every Layer Interconnect).",
      },
      {
        boldLead: "USB4 & Thunderbolt 4",
        rest: " — high-speed differential pair routing with integrated ESD protection and EMI containment.",
      },
    ],
    applications:
      "High-density server boards · Multi-chip module substrates · Advanced networking equipment",
  },
  {
    id: "stackup",
    tab: "Stackup & Material Selection",
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
      "Rigorous stackup optimization balancing electrical performance with fabrication yield.",
    intro:
      "A robust high-speed design begins with the substrate. We perform rigorous stackup optimization to balance electrical performance with fabrication yield.",
    points: [
      {
        boldLead: "Material Expertise",
        rest: " — selection of ultra-low-loss laminates such as Megtron 6/7/8, Tachyon 100G, and Rogers hybrids.",
      },
      {
        boldLead: "Impedance Control",
        rest: " — precision modeling of single-ended (50 Ohm) and differential (85 Ohm/90 Ohm/100 Ohm) traces.",
      },
      {
        boldLead: "Glass Weave Mitigation",
        rest: ' — use of "spread glass" fabrics and zig-zag routing techniques to eliminate skew.',
      },
    ],
    applications:
      "28+ layer PCBs · Controlled-impedance backplanes · Mixed-dielectric hybrid stackups",
  },
  {
    id: "simulation",
    tab: "SI/PI/EMI Simulation",
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
    headline: 'Simulation-driven workflow — we do not "guess and check."',
    intro:
      "Every high-speed design is backed by pre- and post-layout simulation covering signal integrity, power delivery, and electromagnetic compliance.",
    points: [
      {
        boldLead: "Pre-Layout Analysis",
        rest: " — determining stackup, material, and topology constraints.",
      },
      {
        boldLead: "Post-Layout Verification",
        rest: " — full-wave extraction of routing to verify Eye Diagrams, BER (Bit Error Rate), and TDR (Time Domain Reflectometry).",
      },
      {
        boldLead: "Power Integrity (PI)",
        rest: " — analyzing DC IR Drop, AC impedance profiles, and decoupling capacitor optimization to support high-transient current demands.",
      },
      {
        boldLead: "EMI/EMC",
        rest: " — identifying potential radiation hotspots and resonance issues before the prototype stage.",
      },
    ],
    applications: "Cadence Sigrity · Ansys SIwave · Full-wave EM extraction",
  },
];

// const schematicReviewItems: SchematicReviewItem[] = [
//   {
//     id: "pin-mapping",
//     title: "Pin-Mapping Optimization",
//     description:
//       "Pin-mapping optimization for BGA escape efficiency and clean DDR5 / PCIe Gen6 / SerDes routing within your stackup.",
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
//         <circle cx="12" cy="12" r="3" />
//         <line x1="12" y1="2" x2="12" y2="5" />
//         <line x1="12" y1="19" x2="12" y2="22" />
//         <line x1="2" y1="12" x2="5" y2="12" />
//         <line x1="19" y1="12" x2="22" y2="12" />
//       </svg>
//     ),
//   },
//   {
//     id: "power-tree",
//     title: "Power Tree Verification",
//     description:
//       "Power tree verification and decoupling strategy to support high-current, low-noise rails across the PDN.",
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
//     id: "bom-risk",
//     title: "BOM Risk Mitigation",
//     description:
//       "BOM risk mitigation with EOL and obsolescence screening to protect long-lifecycle data center, telecom, and defense programs.",
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
//     id: "compliance",
//     title: "Compliance Readiness",
//     description:
//       "Compliance readiness for CE, FCC, UL 62368-1, and CISPR 32 — eliminating late-stage certification surprises.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M9 11l3 3L22 4" />
//         <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
//       </svg>
//     ),
//   },
// ];

const WHY_CARDS = [
  {
    title: "First-Time-Right Philosophy",
    desc: "Architecture-first engineering with simulation-driven constraints defined before layout begins.",
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
    desc: "All Qmax PCB designers are Electrical Engineers capable of performing complex circuit and noise analysis.",
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
    desc: "Production-ready DFM/DFT-verified files for high first-time-right yields tailored to each fabrication house's specific capabilities.",
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
    desc: "100% customer ownership of all schematics, layout files, and simulation data remain the sole property of the customer.",
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
  {
    title: "Manufacturing Alignment",
    desc: "Direct coordination with Tier-1 fabrication and assembly houses for stackup and impedance alignment.",
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
    title: "Compliance-Ready",
    desc: "Designed for EMI/EMC (CISPR 32) and Safety (UL 62368-1) from day one.",
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
    q: "What data rates do you support?",
    a: "We design for data rates ranging from DDR5-6400 (9.6 GT/s) to PCIe Gen6 (64 GT/s) and 112G SerDes (112 Gbps per lane). Our expertise spans NRZ, PAM4, and equalization technologies required for modern high-speed serial interfaces.",
  },
  {
    q: "Do you support PCIe Gen6 PCB layout?",
    a: "Yes, we are experts in PCIe Gen6 layout, specifically managing the transition to PAM4 signaling and tight loss budgets.",
  },
  {
    q: "Can you handle 30-layer HDI PCB designs?",
    a: "Absolutely. We regularly design 30+ layer boards with complex microvia structures and ELIC.",
  },
  {
    q: "Do you provide SI/PI simulation services separately?",
    a: "Yes, we offer standalone SI/PI analysis or integrated simulation within the layout process.",
  },
  {
    q: "How do you mitigate crosstalk in high-density designs?",
    a: "Through rigorous 3D EM modeling and implementing specific 3W/5W spacing rules and guard traces.",
  },
  {
    q: "Which EDA tools do you use?",
    a: "We primarily utilize Cadence Allegro/Orcad, Altium Designer, and Mentor Xpedition.",
  },
  {
    q: 'What is a "Simulation-driven" constraint?',
    a: "It means we run SI simulations to determine the exact routing rules (width, gap, length) before the layout starts.",
  },
  {
    q: "Do you provide DFM reports?",
    a: "Yes, every design undergoes a comprehensive DFM/DFT check to ensure high manufacturing yields.",
  },
  {
    q: "Can you help with component obsolescence?",
    a: "Yes, during schematic review, we identify at-risk parts and suggest pin-compatible or functional alternatives.",
  },
  {
    q: "What is your experience with 112G SerDes?",
    a: "We have designed interfaces for 112G PAM4, focusing on via stub removal (back-drilling) and pad stack optimization.",
  },
  {
    q: "Do you support 100G Ethernet NIC design?",
    a: "Yes, we have experience with multi-port 100G NICs and QSFP-DD/OSFP form factors.",
  },
  {
    q: "What materials do you recommend for high-speed digital PCBs?",
    a: "Typically Megtron 6/7, Isola I-Tera, or Rogers 4350B/4003C depending on the frequency and budget.",
  },
  {
    q: "How do you handle high-current PDNs?",
    a: "We use PI simulation to map DC IR drop and ensure copper density is sufficient for thermal and electrical requirements.",
  },
  {
    q: "Is Qmax an Indian PCB design company?",
    a: "Yes, Qmax Systems is a leading high-speed digital PCB design services provider in India, serving global clients.",
  },
  {
    q: "Do you design server motherboards?",
    a: "Yes, we design multi-processor server motherboards for Intel, AMD, and ARM architectures.",
  },
  {
    q: "What is your first-time-right ratio?",
    a: "Over 95% of our high-speed designs move to production without requiring a second spin for electrical issues.",
  },
  {
    q: "Can you design for O-RAN hardware?",
    a: "Yes, we have specific experience with O-RAN Radio Units (RU) and Distributed Units (DU).",
  },
  {
    q: "Do you manage the fabrication process?",
    a: "We coordinate directly with your preferred fab house or recommend one from our audited partner list.",
  },
  {
    q: "What is back-drilling, and when is it used?",
    a: "It is the removal of unused via stubs to prevent signal reflections, critical for signals above 10Gbps.",
  },
  {
    q: "Do you support USB4 design?",
    a: "Yes, including routing for 40Gbps throughput and Type-C PD integration.",
  },
  {
    q: "How do you minimize EMI?",
    a: "Through proper ground plane referencing, shielding, and minimizing common-mode noise via balanced routing.",
  },
  {
    q: "What is ELIC?",
    a: "Every Layer Interconnect — an HDI technology where any layer can be connected to any other layer using stacked copper-filled microvias.",
  },
  {
    q: "Do you provide the source files?",
    a: "Yes, all design IP, including source schematics, layout files, and simulation models, belongs to the customer.",
  },
  {
    q: "How do you handle differential pair skew?",
    a: "We implement serpentine trace compensation and phase-matching at the point of mismatch.",
  },
  {
    q: "Can you design AI GPU chassis PCBs?",
    a: "Yes, we specialize in the high-speed backplanes and switch boards required for AI clusters.",
  },
  {
    q: "What is a PDN impedance profile?",
    a: "It is a plot of the power network's impedance vs. frequency, ensuring it stays below the target impedance to prevent noise.",
  },
  {
    q: "Do you support NXP i.MX8 designs?",
    a: "Yes, we have extensive experience with the i.MX8 family and its LPDDR4 memory requirements.",
  },
  {
    q: "What are fiber weave effects?",
    a: "Variations in the dielectric constant caused by the resin/glass pattern. We mitigate this with angled routing or specific glass styles.",
  },
  {
    q: "Do you offer thermal simulation?",
    a: "Yes, we can perform thermal analysis to identify hotspots and optimize heatsink/fan placement.",
  },
  {
    q: "How do I get started?",
    a: "You can book a 1-hour complimentary engineering consultation via our website.",
  },
];

export default function HighSpeedDigitalPCBDesignPage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="/pcb-design/images/image1.jpg"
        imageAlt="High-Performance Digital Systems — Qmax Systems"
        title="Advanced High-Speed Digital PCB Engineering."
        description={
          <>
            <p>
              In an era defined by 112G SerDes, DDR5 memory architectures, and
              PCIe Gen6 protocols, PCB design is no longer just about
              connectivity — it is about physics. Qmax Systems provides
              specialized high-speed digital PCB design services that bridge the
              gap between complex architectural requirements and reliable,
              production-ready hardware.
            </p>
            <p>
              Our engineering-first approach prioritizes Signal Integrity (SI)
              and Power Integrity (PI) simulation long before a single trace is
              routed. By implementing a simulation-driven constraint
              methodology, we ensure your high-complexity boards — from AI GPU
              chassis to O-RAN Distributed Units — achieve first-time-right
              success.
            </p>
          </>
        }
        ctaHref="/hardware-development-services/contact"
        ctaLabel="Talk to Our Engineers"
      />
      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        title="Technical Capabilities: "
        titleHighlight="Pushing the Limits of Physics"
      />
      <ApplicationsProjectExperienceSection
        projects={projectExperience}
      />
      <WhySection
        whyCards={WHY_CARDS}
        title="Why Choose Qmax"
        titleHighlight="Systems?"
        description="Architecture-first engineering with simulation-driven constraints — delivering high-speed digital PCBs that work on the first build."
        className="pb-8 max-[900px]:pb-8"
      />
      {/* <ComplimentarySchematicReviewSection items={schematicReviewItems} /> */}
      <ComplimentaryConsultationSection variant="pcb" />

      <FAQSection
        faqItems={FAQ_ITEMS}
      />

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
        hideTopBorder
      />
      <div className="pb-28"></div>
    </>
  );
}
