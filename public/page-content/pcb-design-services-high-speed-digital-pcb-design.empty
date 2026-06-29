import { buildMetadata } from "@/lib/seo";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import {
  ApplicationsProjectExperienceSection,
  type ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import {
  CoreServiceOfferingsSection,
  HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { getCaseStudyCardImage } from "@/store/case-studies";
import { pcbCaseStudiesData } from "@/store/pcb-case-studies";

export const metadata = buildMetadata({
  title: "High-Speed PCB Design | DDR4/5, PCIe Gen 5 & SerDes | Qmax",
  description:
    "High-speed PCB layout - DDR4/5 trace routing, PCIe Gen 5, USB 3.x, SerDes to 32 Gbps. Impedance-controlled stack-ups and SI simulation. Altium & Cadence.",
  path: "/pcb-design-services/high-speed-digital-pcb-design",
});

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
  const study = pcbCaseStudiesData.find(
    (caseStudy) => caseStudy.id === caseStudyId,
  );
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
    caseStudyHref: `/case-studies/${study.id}`,
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
      "High-speed memory and serial interfaces, routed at the edge of physics.",
    intro:
      "Qmax Systems designs PCB layouts for the leading edge of digital signaling - DDR5/LPDDR5, PCIe Gen5/Gen6, and 112G SerDes - validated against the tightest timing and loss budgets in the industry. Qmax's engineers route every interface against simulation-derived constraints in Cadence Sigrity and Ansys SIwave before the first net is placed. These boards ship into AI GPU chassis, O-RAN distributed units, server motherboards, and 100G network interface cards.",
    points: [
      {
        boldLead: "DDR5 & LPDDR5",
        rest: " - The DDR5/LPDDR5 interface runs DFE, CA parity, and CRC, while Qmax manages ultra-tight timing margins and on-DIMM PMIC complexity.",
      },
      {
        boldLead: "PCIe Gen5 & Gen6",
        rest: " - Qmax's engineers route PAM4 signaling to strict jitter and noise-floor compliance.",
      },
      {
        boldLead: "112G SerDes",
        rest: " - Each lane carries 112 Gbps, and full-wave simulation drives the routing to minimize reflections and crosstalk.",
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
      "Qmax Systems masters advanced HDI fabrication - Type I, II, and III structures with stacked and staggered microvias, via-in-pad, and ELIC - to maximize routing density while preserving signal integrity and manufacturability. The team regularly delivers 30+ layer HDI boards. These designs go into high-density server boards, multi-chip module substrates, and advanced networking equipment.",
    points: [
      {
        boldLead: "30-Layer HDI PCB Design",
        rest: " - Qmax builds Type I, II, and III HDI structures, including stacked and staggered microvias, via-in-pad, and ELIC (Every Layer Interconnect).",
      },
      {
        boldLead: "USB4 & Thunderbolt 4",
        rest: " - These links use matched differential-pair routing with integrated ESD protection and EMI containment.",
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
      "Qmax Systems performs rigorous stackup optimization to balance electrical performance against fabrication yield, because a robust high-speed design begins with the substrate. Qmax's engineers select ultra-low-loss laminates such as Megtron 6/7/8, Tachyon 100G, and Rogers hybrids, model single-ended (50 Ω) and differential (85/90/100 Ω) impedance, and apply spread-glass fabrics to eliminate fiber-weave skew. These stackups support 28+ layer PCBs, controlled-impedance backplanes, and mixed-dielectric hybrid designs.",
    points: [
      {
        boldLead: "Material Expertise",
        rest: " - Qmax selects ultra-low-loss laminates such as Megtron 6/7/8, Tachyon 100G, and Rogers hybrids.",
      },
      {
        boldLead: "Impedance Control",
        rest: " - Controlled-impedance routing holds single-ended (50 Ω) and differential (85/90/100 Ω) traces to target.",
      },
      {
        boldLead: "Glass Weave Mitigation",
        rest: " - Spread-glass fabrics and zig-zag routing eliminate fiber-weave skew.",
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
    headline:
      'Simulation-driven workflow - Qmax Systems does not "guess and check."',
    intro:
      "Qmax Systems runs a simulation-driven workflow, never guess-and-check. Pre- and post-layout simulation in Cadence Sigrity and Ansys SIwave backs every high-speed design, covering signal integrity, power delivery, and electromagnetic compliance. Qmax's engineers verify eye diagrams, BER, and TDR through full-wave extraction before the prototype stage. These methods validate PCIe Gen6, DDR5, and 112G SerDes platforms against compliance margin.",
    points: [
      {
        boldLead: "Pre-Layout Analysis",
        rest: " - Qmax determines stackup, material, and topology constraints up front.",
      },
      {
        boldLead: "Post-Layout Verification",
        rest: " - Full-wave extraction verifies eye diagrams, BER (Bit Error Rate), and TDR (Time Domain Reflectometry).",
      },
      {
        boldLead: "Power Integrity (PI)",
        rest: " - Qmax's engineers analyze DC IR drop and AC impedance profiles, and optimize decoupling capacitors for high-transient current demands.",
      },
      {
        boldLead: "EMI/EMC",
        rest: " - Pre-prototype analysis flags radiation hotspots and resonance issues before the prototype stage.",
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
//       "Compliance readiness for CE, FCC, UL 62368-1, and CISPR 32 - eliminating late-stage certification surprises.",
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
    desc: "Qmax Systems applies architecture-first engineering with simulation-driven constraints defined before layout begins - over 95% of designs reach production without a second spin.",
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
    desc: "We deliver production-ready, DFM/DFT-verified files for high first-time-right yields, tailored to each fabrication house's specific capabilities.",
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
    desc: "100% customer ownership - all schematics, layout files, and simulation data remain the sole property of the customer; we retain no rights.",
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
    desc: "Qmax Systems coordinates directly with Tier-1 fabrication and assembly houses for stackup and impedance alignment.",
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
    desc: "We design for EMI/EMC (CISPR 32) and safety (UL 62368-1) from day one.",
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
    a: "Qmax Systems designs for data rates from DDR5-6400 (9.6 GT/s) to PCIe Gen6 (64 GT/s) and 112G SerDes (112 Gbps per lane). Our engineers cover NRZ, PAM4, and the equalization technologies required for modern high-speed serial interfaces.",
  },
  {
    q: "Does Qmax Systems support PCIe Gen6 PCB layout?",
    a: "Yes. We design PCIe Gen6 layouts, managing the transition to PAM4 signaling and tight loss budgets, with via-stub back-drilling and pad-stack optimization to hold compliance margin.",
  },
  {
    q: "Can you design 30-layer HDI PCBs?",
    a: "Yes. We regularly design 30+ layer boards with complex stacked and staggered microvia structures and ELIC (Every Layer Interconnect).",
  },
  {
    q: "Do you provide SI/PI simulation services separately?",
    a: "Yes. Qmax Systems offers standalone SI/PI analysis or simulation integrated within the layout process, using Cadence Sigrity and Ansys SIwave.",
  },
  {
    q: "How do you mitigate crosstalk in high-density designs?",
    a: "We mitigate crosstalk through rigorous 3D EM modeling and enforced 3W/5W spacing rules and guard traces, validated by full-wave extraction before fabrication.",
  },
  {
    q: "Which EDA tools do you use?",
    a: "Qmax Systems primarily uses Cadence Allegro/OrCAD, Altium Designer, and Mentor Xpedition, with Cadence Sigrity and Ansys SIwave for SI/PI simulation.",
  },
  {
    q: 'What is a "simulation-driven" constraint?',
    a: "A simulation-driven constraint means we run SI simulations to determine the exact routing rules - trace width, gap, and length - before layout begins, rather than guessing and checking.",
  },
  {
    q: "Do you provide DFM reports?",
    a: "Yes. We run a comprehensive DFM/DFT check on every design to ensure high manufacturing yields and production-ready output.",
  },
  {
    q: "Can you help with component obsolescence?",
    a: "Yes. During schematic review, Qmax Systems engineers identify at-risk parts and recommend pin-compatible or functional alternatives, screening for EOL across long-lifecycle programs.",
  },
  {
    q: "What is your experience with 112G SerDes?",
    a: "We have designed 112G PAM4 interfaces, focusing on via-stub removal (back-drilling) and pad-stack optimization to minimize reflections at 112 Gbps per lane.",
  },
  {
    q: "Do you support 100G Ethernet NIC design?",
    a: "Yes. We have designed multi-port 100G NICs in QSFP-DD and OSFP form factors.",
  },
  {
    q: "What materials do you recommend for high-speed digital PCBs?",
    a: "We typically specify Megtron 6/7, Isola I-Tera, or Rogers 4350B/4003C, selected by operating frequency and budget.",
  },
  {
    q: "How do you handle high-current PDNs?",
    a: "We use PI simulation to map DC IR drop and confirm copper density meets thermal and electrical requirements across the power delivery network.",
  },
  {
    q: "Is Qmax Systems an Indian PCB design company?",
    a: "Yes. Qmax Systems is a leading high-speed digital PCB design services provider based in India, serving global clients.",
  },
  {
    q: "Do you design server motherboards?",
    a: "Yes. We design multi-processor server motherboards for Intel, AMD, and ARM architectures.",
  },
  {
    q: "What is your first-time-right ratio?",
    a: "Over 95% of our high-speed designs move to production without requiring a second spin for electrical issues.",
  },
  {
    q: "Can you design O-RAN hardware?",
    a: "Yes. We have specific experience designing O-RAN Radio Units (RU) and Distributed Units (DU).",
  },
  {
    q: "Do you manage the fabrication process?",
    a: "Qmax Systems coordinates directly with your preferred fab house or recommends one from our audited Tier-1 partner list, aligning stackup and impedance targets.",
  },
  {
    q: "What is back-drilling, and when do you use it?",
    a: "Back-drilling removes unused via stubs to prevent signal reflections. We apply it to signals above 10 Gbps, including PCIe Gen6 and 112G SerDes routing.",
  },
  {
    q: "Do you support USB4 design?",
    a: "Yes. We design USB4 routing for 40 Gbps throughput with Type-C Power Delivery (PD) integration.",
  },
  {
    q: "How do you minimize EMI?",
    a: "We minimize EMI through disciplined ground-plane referencing, shielding, and balanced routing to suppress common-mode noise, validated against CISPR 32.",
  },
  {
    q: "What is ELIC, and do you use it?",
    a: "ELIC (Every Layer Interconnect) is an HDI technology where any layer connects to any other using stacked copper-filled microvias. We use ELIC in our 30+ layer HDI designs.",
  },
  {
    q: "Does Qmax Systems provide the source files?",
    a: "Yes. All design IP - source schematics, layout files, and simulation models - belongs to the customer; Qmax Systems retains no ownership.",
  },
  {
    q: "How do you handle differential pair skew?",
    a: "We apply serpentine trace compensation and phase-matching at the point of mismatch, plus spread-glass fabrics to mitigate fiber-weave skew.",
  },
  {
    q: "Can you design AI GPU chassis PCBs?",
    a: "Yes. We specialize in the high-speed backplanes and switch boards required for AI GPU clusters, including PCIe Gen6-class fabrics.",
  },
  {
    q: "What is a PDN impedance profile, and how do you use it?",
    a: "A PDN impedance profile plots the power network's impedance versus frequency. We design the PDN to stay below target impedance across the band to prevent noise.",
  },
  {
    q: "Do you support NXP i.MX8 designs?",
    a: "Yes. Qmax Systems has extensive experience with the NXP i.MX8 family and its LPDDR4 memory routing requirements.",
  },
  {
    q: "What are fiber weave effects, and how do you mitigate them?",
    a: "Fiber weave effects are dielectric-constant variations caused by the glass/resin pattern. We mitigate them with angled (zig-zag) routing and spread-glass fabric styles.",
  },
  {
    q: "Do you offer thermal simulation?",
    a: "Yes. We perform thermal analysis to identify hotspots and optimize heatsink and fan placement.",
  },
  {
    q: "How do I get started?",
    a: "Book a 1-hour complimentary engineering consultation with a Qmax Systems Senior Hardware Architect via our website.",
  },
];

export default function HighSpeedDigitalPCBDesignPage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="/pcb-design/images/image1.jpg"
        imageAlt="High-Performance Digital Systems - Qmax Systems"
        title="High-Speed PCB Design - DDR5, PCIe Gen6, and 112G SerDes Routing"
        description={
          <>
            <p>
              Qmax Systems provides high-speed PCB design for 112G SerDes, DDR5,
              and PCIe Gen6 systems, where signal behavior is governed by
              physics, not connectivity alone. Qmax Systems engineers run Signal
              Integrity (SI) and Power Integrity (PI) simulation before routing,
              achieving an over-95% first-time-right rate on boards from AI GPU
              chassis to O-RAN Distributed Units.
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
        description="Architecture-first engineering with simulation-driven constraints - delivering high-speed digital PCBs that work on the first build."
        consultationCta={{
          heading:
            "Get a Complimentary Consultation with Our High-Speed Digital PCB Experts.",
          subtitle:
            "1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven - no sales pitch.",
          ctaHref: "/pcb-design-services/contact",
        }}
      />
      {/* <ComplimentarySchematicReviewSection items={schematicReviewItems} /> */}

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
