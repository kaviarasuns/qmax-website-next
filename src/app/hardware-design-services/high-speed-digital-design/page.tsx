import { buildMetadata } from "@/lib/seo";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import type { ServiceCaseStudy } from "@/data/service-case-studies";
import {
  CoreServiceOfferingsSection,
  type HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { DigitalHardwareTechnicalAdvantageSection } from "@/components/services-cmp/TechnicalAdvantageSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import {
  ApplicationsProjectExperienceSection,
  type ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import {
  allCaseStudiesData,
  getCaseStudyCardImage,
} from "@/store/case-studies";
import {
  fullProductDevelopmentCaseStudiesData,
  getFullProductDevelopmentCardImage,
} from "@/store/full-product-development-case-studies";
import { HardwareServiceHeroSectionV2 } from "@/components/services-cmp/HardwareServiceHeroSectionV2";
import { HERO_TITLE_SUBLINE_CLASS } from "@/components/services-cmp/hero-title";
import { OurCoreServiceOfferings } from "@/components/services-cmp/OurCoreServiceOfferings";
function highSpeedProjectExperienceEntry(
  id: string,
  listTitle: string,
  relatedCaseStudySlug: string,
  description: string,
  imageIndex?: number,
): ProjectExperienceItem {
  const relatedStudy = fullProductDevelopmentCaseStudiesData.find(
    (caseStudy) => caseStudy.slug === relatedCaseStudySlug,
  );
  if (!relatedStudy) {
    throw new Error(`Related case study not found: ${relatedCaseStudySlug}`);
  }

  const imageSrc =
    imageIndex !== undefined
      ? relatedStudy.images[imageIndex]
      : getFullProductDevelopmentCardImage(relatedStudy);
  if (!imageSrc) {
    throw new Error(
      `Image index ${imageIndex} out of range for: ${relatedCaseStudySlug}`,
    );
  }

  return {
    id,
    listTitle,
    captionTitle: relatedStudy.title,
    description,
    imageSrc,
    imageAlt: relatedStudy.title,
    caseStudyHref: `/case-studies/${relatedStudy.slug}`,
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

const highSpeedCaseStudies: ServiceCaseStudy[] = serviceCaseStudies([
  "industrial-iot-gateway-with-poe",
  "microscopic-camera-control",
  "high-speed-analog-board",
  "smart-obd2",
]);

const projectExperience: ProjectExperienceItem[] = [
  highSpeedProjectExperienceEntry(
    "advanced-modular-medical-simulator",
    "Advanced Modular Medical Simulator",
    "advanced-modular-medical-simulator",
    "Complete high-speed embedded platform for an open-standard medical simulation manikin, built around a Qualcomm Snapdragon 820 SoM, a 9-port Gigabit Ethernet switch backbone, and a high-power PoE PSE stage - routed across a multi-board stack from EVT through small-volume production.",
  ),
  highSpeedProjectExperienceEntry(
    "wifi-6e-cybersecurity-gateway",
    "WiFi 6E Triband Cybersecurity Gateway",
    "wifi-6e-cybersecurity-gateway",
    "Signal integrity and timing analysis for a tri-band WiFi 6E cybersecurity gateway on a MediaTek MT7986AV platform, covering DDR4, HS400 eMMC, PCIe Gen 2, and concurrent 2.4/5/6 GHz radio chains driving a 12-element internal antenna array.",
    3,
  ),
  highSpeedProjectExperienceEntry(
    "outdoor-wifi-6-access-point",
    "Outdoor Wi-Fi 6 Access Point",
    "outdoor-wifi-6-access-point",
    "Multi-gigabit design for an outdoor tri-band Wi-Fi 6 access point on a Qualcomm IPQ8078 platform, integrating PCIe Gen 3 radio links, a 10G SFP+ fibre uplink, dual Gigabit Ethernet, and an LTE/5G modem across a 12-FEM RF front end.",
    1,
  ),
  highSpeedProjectExperienceEntry(
    "can-fd-industrial-io-controller",
    "CAN FD Industrial I/O Controller",
    "can-fd-industrial-io-controller",
    "High-density digital I/O platform with five synchronized automotive-grade MCUs driving 240 configurable channels over CAN FD, with controlled-impedance routing and multi-MCU timing lock across a 6-layer, 2,600+ component board.",
  ),
  highSpeedProjectExperienceEntry(
    "ev-vcu-demo-platform",
    "EV VCU Demo Platform",
    "ev-vcu-demo-platform",
    "Connected EV Vehicle Control Unit demo platform on an ST SPC560 automotive MCU, integrating high-side switch drivers, H-bridge motor control, MSDI inputs, and a companion radio board for BLE, cellular, and GNSS across 8+ vehicle interfaces.",
    0,
  ),
  highSpeedProjectExperienceEntry(
    "rugged-android-digital-signage-player",
    "Rugged Android Digital Signage Player",
    "rugged-android-digital-signage-player",
    "High-speed video interface development for a rugged Android signage player, with a Lontium LT6911UXC HDMI-to-MIPI CSI-2 bridge, HDCP 2.2 HDMI input, 4K@60 HDMI output, and LPDDR4 routing around a Rockchip RK3566 SoC.",
    2,
  ),
];

const faqs = [
  {
    q: "What high-speed design standards does Qmax Systems support?",
    a: "Qmax Systems specializes in the latest high-speed communication standards, including PCIe Gen 5/6, DDR5, and 112G SerDes. The Qmax Systems engineering team utilizes advanced simulation tools - full-wave EM, IBIS-AMI channel modeling, and target-impedance methodologies - to ensure signal integrity (SI) and power integrity (PI) for data rates exceeding 100 Gbps.",
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
    a: "Qmax Systems treats every engagement under strict IP protection: NDAs signed before any technical discussion, dedicated secure project workspaces, role-based access control to design files, and customer-owned IP at every milestone - schematics, layouts, BoMs, and firmware. Qmax Systems engineers never reuse or repurpose customer IP across other client engagements.",
  },
  {
    q: "How does Qmax Systems ensure signal integrity and power integrity in high-speed digital designs?",
    a: "Qmax Systems' SI/PI methodology combines full-wave 3D electromagnetic simulation, IBIS-AMI channel modeling for DDR5 and SerDes interfaces, and target-impedance PDN design backed by simulation-driven decoupling. Every high-speed design - DDR5, PCIe Gen5/Gen6, 100GbE, 112G SerDes - is validated against compliance margin before fabrication, eliminating costly re-spins.",
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
      "Qmax Systems engineers high-performance digital compute platforms - from multicore CPU systems to dense AI GPU servers and ruggedized single-board computers. Our hardware design team builds for AI training and inference workloads, hyperscale data centers, telecom edge deployments, and industrial environments where signal integrity and thermal performance are non-negotiable.",
    points: [
      {
        boldLead: "Multicore CPU Systems",
        rest: " - high-performance digital designs utilizing the latest Intel Xeon, AMD EPYC, and Ampere Altra CPUs, optimized for thermal efficiency and high-speed data throughput.",
      },
      {
        boldLead: "High-Density AI GPU Compute Servers",
        rest: " - custom hardware engineering for parallel processing workloads, designed to house and power NVIDIA and AMD GPU clusters for AI training and inference.",
      },
      {
        boldLead: "Single Board Computers (SBCs) & Server Motherboards",
        rest: " - tailor-made designs for data centers and rugged industrial environments, validated for Power Integrity (PI) and Signal Integrity (SI).",
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
        rest: " - ultra-high-speed connectivity solutions for high-end blade servers, delivering maximum bandwidth and minimal latency for modern workloads.",
      },
      {
        boldLead: "O-RAN Distributed Units (DU)",
        rest: " - specialized hardware development for Open RAN architecture, accelerating global 4G and 5G infrastructure deployments.",
      },
      {
        boldLead: "Fabric Interface Cards (FIC)",
        rest: " - innovative designs for Photonic Resource Units, enabling seamless optical-to-electrical resource management in disaggregated data centers.",
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
        rest: " - custom development on Xilinx and Intel platforms for hardware acceleration, real-time signal processing, and flexible high-speed I/O.",
      },
      {
        boldLead: "Microcontroller-Based Products",
        rest: " - robust, power-optimized embedded systems using ARM Cortex-M, ESP32, and PIC architectures for Industrial IoT (IIoT) deployments.",
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
    desc: "Qmax Systems digital hardware engineers average 12+ years across AI infrastructure, telecom and O-RAN, embedded edge computing, defense electronics, and industrial IoT. Only senior engineers touch your design - no junior hand-offs, no learning on your timeline.",
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

export const metadata = buildMetadata({
  title: "High-Speed Digital Design | DDR5, PCIe Gen6 & 112G SerDes | Qmax",
  description:
    "High-speed digital design - DDR5 topology, PCIe Gen6 architecture, 112G SerDes signal budget, and component selection. Schematic to bring-up.",
  path: "/hardware-design-services/high-speed-digital-design",
});

export default function HighSpeedDigitalDesignPage() {
  return (
    <>
      {/* <HardwareServiceHeroSection
        imageSrc="/hw-main/HW-High-Speed-Digital-Design/image1.jpg"
        imageAlt="High-Speed Digital Design - Qmax Systems"
        title="High-Speed Digital Design - DDR5, PCIe Gen6, and 112G SerDes Architecture"
        description={
          <p>
            Qmax Systems provides high-speed digital design for AI computing,
            telecom, edge servers, and data-intensive infrastructure. Qmax
            Systems engineers high-speed, high-density, high-reliability systems
            around signal integrity (SI) and power integrity (PI) - from DDR5
            and PCIe Gen6 to 112G SerDes, with architecture set before layout -
            delivering production-ready platforms, not just prototypes.
          </p>
        }
        ctaHref="/hardware-design-services/contact"
        ctaLabel="Talk to Our Engineers"
      /> */}

      <HardwareServiceHeroSectionV2
        imageSrc="https://d1yetprhniwywz.cloudfront.net/v2/services_hero/hardware/hardware_high_speed_v2.JPG"
        imageAlt="High-Speed Digital Design - Qmax Systems"
        title={
          <>
            High-Speed Digital Design{" "}
            <span className={HERO_TITLE_SUBLINE_CLASS}>
              DDR5, PCIe Gen6, and 112G SerDes Architecture
            </span>
          </>
        }
        ctaHref="/hardware-design-services/contact"
        ctaLabel="Talk to Our Engineers"
      />

      <OurCoreServiceOfferings
        description={
          <p>
            Qmax Systems provides high-speed digital design for AI computing,
            telecom, edge servers, and data-intensive infrastructure. Qmax
            Systems engineers high-speed, high-density, high-reliability systems
            around signal integrity (SI) and power integrity (PI) - from DDR5
            and PCIe Gen6 to 112G SerDes, with architecture set before layout -
            delivering production-ready platforms, not just prototypes.
          </p>
        }
      />

      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        // description={
        //   <p>
        //     Qmax Systems provides high-speed digital design for AI computing,
        //     telecom, edge servers, and data-intensive infrastructure. Qmax
        //     Systems engineers high-speed, high-density, high-reliability systems
        //     around signal integrity (SI) and power integrity (PI) - from DDR5
        //     and PCIe Gen6 to 112G SerDes, with architecture set before layout -
        //     delivering production-ready platforms, not just prototypes.
        //   </p>
        // }
      />
      <ApplicationsProjectExperienceSection
        projects={projectExperience}
        subtitle="We have successfully delivered hundreds of advanced digital hardware platforms, including:"
      />

      <DigitalHardwareTechnicalAdvantageSection />

      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="Digital Hardware Design?"
        consultationCta={{
          heading:
            "Get a Complimentary Consultation with Our Digital Hardware Experts.",
          subtitle:
            "1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven - no sales pitch.",
          ctaHref: "/hardware-design-services/contact",
        }}
      />

      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={highSpeedCaseStudies}
        hideTopBorder
      />

      <FAQSection faqItems={faqs} />
      <div className="pb-28"></div>
    </>
  );
}
