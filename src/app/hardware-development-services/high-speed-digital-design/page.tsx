import type { Metadata } from "next";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import type { ServiceCaseStudy } from "@/data/service-case-studies";
import { industrialCaseStudiesData } from "@/store/industrial-case-studies";
import {
  CoreServiceOfferingsSection,
  type HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { DigitalHardwareTechnicalAdvantageSection } from "@/components/services-cmp/TechnicalAdvantageSection";
import { ConsultationCtaBar } from "@/components/services-cmp/ConsultationCtaBar";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import {
  ApplicationsProjectExperienceSection,
  type ProjectExperienceItem,
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

// First three IDs differ from rf-and-microwave (gateway + 6E router + 360° camera);
// 6e-wifi-router-enclosure still appears on both pages.
const highSpeedCaseStudies: ServiceCaseStudy[] = industrialServiceCaseStudies([
  "warehouse-camera-controller-unit",
  "medical-recording-device",
  "6e-wifi-router-enclosure",
  "compact-edge-gateway-enclosure",
]);

const projectExperience: ProjectExperienceItem[] = [
  {
    id: "ai-compute-servers",
    listTitle: "AI Compute Servers",
    captionTitle: "High-Density GPU Infrastructure",
    description:
      "Custom hardware engineering for AI training and inference workloads, with robust power delivery networks and advanced thermal management for high-TDP NVIDIA and AMD GPU clusters.",
    imageSrc: getCaseStudyCardImage("ai-gpu-expansion-chassis-motherboard"),
    imageAlt: "AI Compute Servers",
  },
  {
    id: "oran-du-systems",
    listTitle: "O-RAN DU Systems",
    captionTitle: "Open RAN Infrastructure",
    description:
      "Specialized hardware development for Open RAN Distributed Units, enabling scalable 4G and 5G rollouts with synchronized timing and high-integrity digital signal routing.",
    imageSrc: getCaseStudyCardImage("stellar-main-board"),
    imageAlt: "O-RAN DU Systems",
  },
  {
    id: "fpga-accelerators",
    listTitle: "FPGA Accelerators",
    captionTitle: "Hardware Acceleration Platforms",
    description:
      "Custom FPGA-based platforms on Xilinx and Intel devices for real-time signal processing, parallel I/O, and flexible high-speed acceleration at the edge.",
    imageSrc: getCaseStudyCardImage("multi-io-card-for-ate"),
    imageAlt: "FPGA Accelerators",
  },
  {
    id: "server-motherboards",
    listTitle: "Server Motherboards",
    captionTitle: "Enterprise-Grade Compute",
    description:
      "Tailor-made server motherboard designs spanning Intel Xeon, AMD EPYC, and Ampere Altra architectures, validated for power integrity and signal integrity in data center deployments.",
    imageSrc: getCaseStudyCardImage("typheon"),
    imageAlt: "Server Motherboards",
  },
  {
    id: "high-speed-nics",
    listTitle: "High-Speed NICs",
    captionTitle: "Ultra-High-Bandwidth Connectivity",
    description:
      "100 Gbps Network Interface Cards for blade server environments, delivering maximum bandwidth and minimal latency with QSFP-DD and high-speed SerDes lanes.",
    imageSrc: getCaseStudyCardImage("100gbe-high-speed-networking-board"),
    imageAlt: "High-Speed NICs",
  },
  {
    id: "embedded-controllers",
    listTitle: "Embedded Controllers",
    captionTitle: "Industrial Edge Platforms",
    description:
      "Robust, power-optimized embedded controller designs using ARM, ESP32, and PIC architectures for Industrial IoT, edge compute, and connected field devices.",
    imageSrc: getCaseStudyCardImage("mx1"),
    imageAlt: "Embedded Controllers",
  },
];

const faqs = [
  {
    q: "What high-speed design standards does Qmax Systems support?",
    a: "Qmax Systems specializes in the latest high-speed communication standards, including PCIe Gen 5/6, DDR5, and 112G SerDes. The Qmax Systems engineering team utilizes advanced simulation tools — full-wave EM, IBIS-AMI channel modeling, and target-impedance methodologies — to ensure signal integrity (SI) and power integrity (PI) for data rates exceeding 100 Gbps.",
  },
  {
    q: "Can Qmax Systems design custom hardware for AI and Deep Learning?",
    a: "Yes. Qmax Systems develops High-Density AI GPU Compute Servers tailored for massive parallel processing workloads. Our designs focus on robust Power Delivery Networks (PDN) and advanced thermal management strategies required to sustain the performance of high-TDP NVIDIA and AMD GPU clusters used in AI training and inference.",
  },
  {
    q: "Does Qmax Systems provide O-RAN and 5G infrastructure hardware?",
    a: "Absolutely. Qmax Systems is active in the O-RAN ecosystem, designing Distributed Units (DU) and specialized Network Interface Cards (NIC). We help telecom providers and private network operators deploy scalable, open-architecture hardware for 4G and 5G rollouts.",
  },
  {
    q: "What processor architectures does Qmax Systems work with for server motherboards?",
    a: "Qmax Systems' expertise spans the leading x86 and ARM-based enterprise architectures, including Intel Xeon, AMD EPYC, and Ampere Altra CPUs. We design custom server motherboards and Single Board Computers (SBCs) in OCP-compliant, 1U/2U rackmount, and rugged industrial form factors that meet specific environmental and compliance requirements.",
  },
  {
    q: "Does Qmax Systems handle complex, high-layer count PCB designs?",
    a: "Yes. Qmax Systems engineers are experienced in high-density interconnect (HDI) technology, regularly managing 20+ layer PCB stacks with blind and buried microvias for DDR5, PCIe Gen6, and 112G SerDes routing. We ensure every design is optimized for DFM (Design for Manufacturing) and DFT (Design for Test) to streamline the transition to mass production.",
  },
  {
    q: "What is included in the 1-hour complimentary consulting session?",
    a: "During this session, you will speak directly with a Senior Hardware Architect from Qmax Systems. We can review your block diagrams, discuss thermal or signal integrity challenges, provide high-level architecture validation, or help refine your hardware roadmap to reduce time-to-market. We can sign an NDA if required.",
  },
  {
    q: "How does Qmax Systems protect customer design data and intellectual property?",
    a: "Qmax Systems treats every engagement under strict IP protection: NDAs signed before any technical discussion, dedicated secure project workspaces, role-based access control to design files, and customer-owned IP at every milestone — schematics, layouts, BoMs, and firmware. Qmax Systems engineers never reuse or repurpose customer IP across other client engagements.",
  },
  {
    q: "How does Qmax Systems ensure signal integrity and power integrity in high-speed digital designs?",
    a: "Qmax Systems' SI/PI methodology combines full-wave 3D electromagnetic simulation, IBIS-AMI channel modeling for DDR5 and SerDes interfaces, and target-impedance PDN design backed by simulation-driven decoupling. Every high-speed design — DDR5, PCIe Gen5/Gen6, 100GbE, 112G SerDes — is validated against compliance margin before fabrication, eliminating costly re-spins.",
  },
];

const coreServiceOfferings: HighSpeedCoreOffering[] = [
  {
    id: "compute",
    tab: "Compute & Servers",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="6" rx="1" />
        <rect x="3" y="15" width="18" height="6" rx="1" />
        <line x1="7" y1="6" x2="7.01" y2="6" />
        <line x1="7" y1="18" x2="7.01" y2="18" />
      </svg>
    ),
    headline:
      "High-performance compute and server hardware built for AI, data centers, and rugged industrial deployment.",
    intro:
      "Qmax Systems engineers high-performance digital compute platforms — from multicore CPU systems to dense AI GPU servers and ruggedized single-board computers. Our hardware design team builds for AI training and inference workloads, hyperscale data centers, telecom edge deployments, and industrial environments where signal integrity and thermal performance are non-negotiable.",
    points: [
      {
        boldLead: "Multicore CPU Systems",
        rest: " — high-performance digital designs utilizing the latest Intel Xeon, AMD EPYC, and Ampere Altra CPUs, optimized for thermal efficiency and high-speed data throughput.",
      },
      {
        boldLead: "High-Density AI GPU Compute Servers",
        rest: " — custom hardware engineering for parallel processing workloads, designed to house and power NVIDIA and AMD GPU clusters for AI training and inference.",
      },
      {
        boldLead: "Single Board Computers (SBCs) & Server Motherboards",
        rest: " — tailor-made designs for data centers and rugged industrial environments, validated for Power Integrity (PI) and Signal Integrity (SI).",
      },
    ],
    applications:
      "AI training infrastructure · Hyperscale data centers · Telecom edge compute · Rugged industrial computing · High-performance computing (HPC)",
  },
  {
    id: "connectivity",
    tab: "Connectivity & O-RAN",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
    headline:
      "Ultra-high-speed connectivity hardware powering 5G and next-generation telecom infrastructure.",
    intro:
      "Qmax Systems designs the high-speed networking and telecom hardware that drives modern data center fabrics and global 5G rollouts. From 100 Gbps Network Interface Cards to O-RAN Distributed Units and Fabric Interface Cards for photonic networks, our team builds the connectivity layer for telecom operators, hyperscalers, and network equipment vendors.",
    points: [
      {
        boldLead: "100 Gbps Network Interface Cards (NIC)",
        rest: " — ultra-high-speed connectivity solutions for high-end blade servers, delivering maximum bandwidth and minimal latency for modern workloads.",
      },
      {
        boldLead: "O-RAN Distributed Units (DU)",
        rest: " — specialized hardware development for Open RAN architecture, accelerating global 4G and 5G infrastructure deployments.",
      },
      {
        boldLead: "Fabric Interface Cards (FIC)",
        rest: " — innovative designs for Photonic Resource Units, enabling seamless optical-to-electrical resource management in disaggregated data centers.",
      },
    ],
    applications:
      "4G and 5G telecom infrastructure · Open RAN (O-RAN) deployments · Hyperscale data centers · Photonic networks · Disaggregated network fabrics",
  },
  {
    id: "embedded",
    tab: "Embedded & FPGA",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <rect x="10" y="10" width="4" height="4" />
        <path d="M2 10h4M2 14h4M18 10h4M18 14h4M10 2v4M14 2v4M10 18v4M14 18v4" />
      </svg>
    ),
    headline:
      "Custom FPGA and embedded platforms engineered for acceleration, real-time processing, and Industrial IoT.",
    intro:
      "Qmax Systems develops custom FPGA platforms and embedded systems for hardware acceleration, real-time digital signal processing, and connected edge devices. Our team works across Xilinx (AMD) and Intel (Altera) FPGA families, plus ARM Cortex-M, ESP32, and PIC microcontroller architectures, building precision hardware for Industrial IoT, edge AI, robotics, and motor control applications.",
    points: [
      {
        boldLead: "FPGA-Based Hardware",
        rest: " — custom development on Xilinx and Intel platforms for hardware acceleration, real-time signal processing, and flexible high-speed I/O.",
      },
      {
        boldLead: "Microcontroller-Based Products",
        rest: " — robust, power-optimized embedded systems using ARM Cortex-M, ESP32, and PIC architectures for Industrial IoT (IIoT) deployments.",
      },
    ],
    applications:
      "Industrial IoT (IIoT) · Edge AI inference · Robotics & automation · Real-time DSP · Motor control · Smart sensors",
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
    title: "Digital Platforms Built from Scratch",
    desc: "Every digital hardware program starts with R&D and a proof-of-concept build to retire architectural risk early. We confirm feasibility, lock the BoM, validate stackup and high-speed channel margin, and prove critical assumptions before a single production layer is committed.",
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
    desc: "We select SoCs, FPGAs, memories, and toolchains that fit your existing platform rather than forcing a re-platform. The result is firmware that brings up cleanly, board support packages that drop into your OS, and lower long-term maintenance cost.",
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
    title: "Expert Digital Hardware Engineers",
    desc: "Qmax Systems digital hardware engineers average 12+ years across AI infrastructure, telecom and O-RAN, embedded edge computing, defense electronics, and industrial IoT. Only senior engineers touch your design — no junior hand-offs, no learning on your timeline.",
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

export const metadata: Metadata = {
  title: "High Speed Digital Design Services | Qmax",
  description:
    "High-Performance Digital Systems Development. At Qmax Systems, we bridge the gap between complex conceptual requirements and market-ready hardware.",
};

export default function HighSpeedDigitalDesignPage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="/hw-main/HW-High-Speed-Digital-Design/image1.jpg"
        imageAlt="High-Performance Digital Systems — Qmax Systems"
        title="High-Performance Digital Systems Development"
        description={
          <p>
            At Qmax Systems, we bridge the gap between complex conceptual
            requirements and market-ready hardware. In an era where AI
            computing, telecom infrastructure, edge servers, and data-intensive
            applications demand unprecedented speed and reliability, our
            Hardware Engineering Team delivers robust, scalable, and
            high-integrity systems tailored for next-generation digital
            infrastructure.
          </p>
        }
        ctaHref="/hardware-development-services/contact"
        ctaLabel="Talk to Our Engineers"
      />

      <CoreServiceOfferingsSection offerings={coreServiceOfferings} />
      <ApplicationsProjectExperienceSection
        projects={projectExperience}
        subtitle="We have successfully delivered hundreds of advanced digital hardware platforms, including:"
      />
      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="Digital Hardware Design?"
      />

      <DigitalHardwareTechnicalAdvantageSection />

      <FAQSection faqItems={faqs} />
      <div className="pb-28"></div>

      <ConsultationCtaBar
        heading="Get a complimentary consultation with our digital hardware experts."
        subtitle="1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven — no sales pitch."
        ctaHref="/hardware-development-services/contact"
      />

      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={highSpeedCaseStudies}
        hideTopBorder
      />
    </>
  );
}
