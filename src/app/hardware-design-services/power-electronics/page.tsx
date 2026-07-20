import { buildMetadata } from "@/lib/seo";

import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import type { ServiceCaseStudy } from "@/data/service-case-studies";
import {
  CoreServiceOfferingsSection,
  type HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import {
  TechnicalAdvantageSection,
  type TechnicalAdvantageCard,
} from "@/components/services-cmp/TechnicalAdvantageSection";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
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
import { FAQSection } from "@/components/services-cmp/FAQSection";
import {
  ComplianceStandardsSection,
  POWER_ELECTRONICS_COMPLIANCE_CATEGORIES,
} from "@/components/services-cmp/ComplianceStandardSection";
import { HardwareServiceHeroSectionV2 } from "@/components/services-cmp/HardwareServiceHeroSectionV2";
import { HERO_TITLE_SUBLINE_CLASS } from "@/components/services-cmp/hero-title";

function powerElectronicsProjectExperienceEntry(
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

const powerElectronicsCaseStudies: ServiceCaseStudy[] = serviceCaseStudies([
  "high-speed-camera-interface",
  "ultra-low-noise-adc-board",
  "bms-controller",
  "rf-power-processor",
]);

const projectExperience: ProjectExperienceItem[] = [
  powerElectronicsProjectExperienceEntry(
    "ev-vcu-demo-platform",
    "EV VCU Demo Platform",
    "ev-vcu-demo-platform",
    "Automotive power and load-driving design for an EV VCU demo platform, with multi-rail regulation, dual-channel H-bridge motor drive, 16-channel high-side switching, and load-dump / reverse-polarity protection across vehicle power inputs.",
    0,
  ),
  powerElectronicsProjectExperienceEntry(
    "advanced-modular-medical-simulator",
    "Advanced Modular Medical Simulator",
    "advanced-modular-medical-simulator",
    "Multi-rail power architecture for a modular medical simulator, delivering a high-power PoE Sourcing Equipment (PSE) stage and regulated buck, buck-boost, and LDO rails that power and actuate each manikin segment over a single Ethernet cable.",
    0,
  ),
  powerElectronicsProjectExperienceEntry(
    "can-fd-industrial-io-controller",
    "CAN FD Industrial I/O Controller",
    "can-fd-industrial-io-controller",
    "Multi-rail power distribution and high-side switch drive for a 240-channel industrial I/O controller, with protected power stages and isolated domains supporting continuous factory-floor operation across five synchronized MCUs.",
    0,
  ),
  powerElectronicsProjectExperienceEntry(
    "cold-storage-iot-monitoring-system",
    "Cold Storage IoT Monitoring System",
    "cold-storage-iot-monitoring-system",
    "Rugged, transport-grade power design for a cold-storage IoT monitor, combining wide-input DC-DC conversion, LiPo charging with fuel-gauging, and battery-protection circuitry for uninterrupted operation across refrigerated transport and warehouse deployments.",
    1,
  ),
  powerElectronicsProjectExperienceEntry(
    "smart-lubrication-controller",
    "Smart Lubrication Controller",
    "smart-lubrication-controller",
    "Surge-hardened, low-power supply design for a railway-grade lubrication controller, with TVS/zener-protected rails, solar-capable standby efficiency, and battery-backed RTC retention for continuous track-side operation.",
    1,
  ),
];

const coreServiceOfferings: HighSpeedCoreOffering[] = [
  {
    id: "ev-e-mobility",
    tab: "EV & E-Mobility",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 2v6M15 2v6" />
        <path d="M6 8h12v3a6 6 0 0 1-12 0V8z" />
        <path d="M12 17v5" />
      </svg>
    ),
    headline:
      "Electric Vehicle (EV) and E-Mobility power electronics with chargers, motor control, and scalable BMS.",
    intro:
      "Qmax Systems designs electric-vehicle and e-mobility power electronics, including 1-phase and 3-phase On-Board Chargers (OBC) with integrated Power Factor Correction (PFC) for global grid compatibility. Qmax Systems develops high-performance motor controllers for PMSM and BLDC motors using Field-Oriented Control (FOC) algorithms. Qmax Systems also builds scalable Battery Management Systems (BMS) with active and passive balancing, high-accuracy cell monitoring, State-of-Charge (SoC) estimation, and multi-stage protection.",
    points: [
      {
        boldLead: "On-Board Chargers (OBC)",
        rest: " - 1-phase and 3-phase chargers with integrated PFC for global grid compatibility.",
      },
      {
        boldLead: "Motor Controllers",
        rest: " - PMSM and BLDC drive electronics using Field-Oriented Control (FOC) algorithms.",
      },
      {
        boldLead: "BMS with active/passive balancing",
        rest: " - high-accuracy cell monitoring, SoC estimation, and multi-stage protection.",
      },
    ],
    applications:
      "Electric vehicles · E-mobility · Vehicle-to-Grid (V2G) · EV charging · Automotive powertrain",
  },
  {
    id: "datacenter-infrastructure",
    tab: "Datacenter & Infrastructure",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    headline:
      "Datacenter and infrastructure power hardware for hyperscale workloads and high-efficiency conversion.",
    intro:
      "Qmax Systems designs datacenter and infrastructure power hardware, including high-current intelligent Power Distribution Units (PDUs) for hyperscale environments with real-time telemetry and remote load management. Qmax Systems engineers high-efficiency AC-DC and DC-DC power supplies with high-frequency switching, minimizing footprint while maintaining greater than 96% efficiency.",
    points: [
      {
        boldLead: "Intelligent PDUs",
        rest: " - high-current distribution for hyperscale environments, with real-time telemetry and remote load management.",
      },
      {
        boldLead: "High-Efficiency AC-DC and DC-DC",
        rest: " - high-frequency switching delivering >96% efficiency in a minimal footprint.",
      },
    ],
    applications:
      "Hyperscale data centers · AI GPU clusters · 48V DC distribution · Telecom power · Enterprise infrastructure",
  },
  {
    id: "precision-embedded-control",
    tab: "Precision Embedded Control",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="18" height="10" rx="2" />
        <line x1="22" y1="11" x2="22" y2="13" />
        <line x1="6" y1="11" x2="6" y2="13" />
        <line x1="10" y1="11" x2="10" y2="13" />
        <line x1="14" y1="11" x2="14" y2="13" />
      </svg>
    ),
    headline:
      "Precision embedded control for high-performance power systems in noisy, high-voltage environments.",
    intro:
      "Qmax Systems designs precision embedded control for power systems, integrating ARM Cortex-M and FPGA-based controllers for microsecond-level loop response and fault detection. Qmax Systems implements high-CMRR isolated gate drivers to ensure robust switching in high-noise, high-voltage environments.",
    points: [
      {
        boldLead: "Real-Time Signal Processing",
        rest: " - ARM Cortex-M and FPGA controllers for microsecond-level loop response and fault detection.",
      },
      {
        boldLead: "Isolated Gate-Drive Design",
        rest: " - high-CMRR isolated gate drivers for robust switching in high-noise environments.",
      },
    ],
    applications:
      "Digital power control · Fault detection · High-voltage switching · Motor control loops · Telemetry",
  },
];

const WHY_CARDS = [
  {
    title: "HV Clearance & Creepage Mastery",
    desc: "Qmax Systems adheres strictly to IPC-2221 and IEC 60601 standards for high-voltage isolation, using 3D modeling to validate safety distances in compact enclosures.",
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
    title: "EMI/EMC Mitigation at Source",
    desc: "Qmax Systems uses pre-compliance simulation to address Radiated (RE) and Conducted Emissions (CE) through proper Pi-filter tuning and snubber design.",
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
    title: "Ground Loop Elimination",
    desc: "Qmax Systems strategically partitions power and signal grounds to prevent common-mode noise injection in sensitive analog feedback loops.",
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
    title: "Advanced PCB Topology",
    desc: "Qmax Systems masters high-current heavy-copper PCBs (up to 6 oz) and multi-layer HDI stacks with optimized thermal-via arrays.",
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

const POWER_TECHNICAL_CARDS: TechnicalAdvantageCard[] = [
  {
    title: "Advanced Topology Implementation",
    body: "Qmax Systems implements Resonant LLC converters, Phase-Shifted Full Bridge (PSFB), and multi-phase interleaved topologies for optimized efficiency.",
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
        <polygon points="13 2 4 14 12 14 11 22 20 10 12 10" />
      </svg>
    ),
  },
  {
    title: "Wide-Bandgap Integration",
    body: "Qmax Systems designs with Silicon Carbide (SiC) and Gallium Nitride (GaN) FETs to achieve higher switching frequencies and power densities.",
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
        <rect x="3" y="7" width="16" height="10" rx="1.5" />
        <line x1="19" y1="10" x2="19" y2="14" />
        <line x1="7" y1="12" x2="11" y2="12" />
        <line x1="9" y1="10" x2="9" y2="14" />
        <line x1="14" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    title: "Thermal & Fluid Dynamics",
    body: "Qmax Systems designs advanced cooling, including liquid-cooled cold plates and optimized forced-air heat-sink geometries.",
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
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Magnetics Design",
    body: "Qmax Systems designs custom inductors and transformers, minimizing core loss and controlling leakage inductance.",
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
        <polyline points="8 12 10 14 14 9" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How does Qmax Systems manage thermal dissipation in high-density power modules?",
    a: "Qmax Systems manages thermal dissipation using heavy-copper traces, thermal-via arrays, and specialized substrates such as Insulated Metal Substrate (IMS) and high-Tg FR-4. For extreme power densities, Qmax Systems designs custom liquid-cooling systems and integrated cold plates. Qmax Systems validates every thermal design in simulation before prototyping to keep junction temperatures within derated limits.",
  },
  {
    q: "What experience does Qmax Systems have with wide-bandgap (SiC/GaN) semiconductors?",
    a: "Qmax Systems designs with Silicon Carbide (SiC) and Gallium Nitride (GaN) FETs in high-frequency converters to reduce magnetics size and increase efficiency. Qmax Systems focuses specifically on managing the high dv/dt and di/dt of wide-bandgap devices to prevent EMI issues, through careful gate-drive, layout, and snubber design.",
  },
  {
    q: "How does Qmax Systems ensure safety in high-voltage (800V+) designs?",
    a: "Qmax Systems ensures high-voltage safety through rigorous clearance and creepage analysis per IEC standards, galvanic isolation of control circuitry, and active-discharge circuits. Qmax Systems validates safety distances with 3D modeling in compact enclosures, adhering to IPC-2221 and IEC 60601 high-voltage isolation requirements.",
  },
  {
    q: "How does Qmax Systems achieve high efficiency in AC-DC converters?",
    a: "Qmax Systems achieves high efficiency in AC-DC converters using Bridgeless Totem-Pole PFC topologies and synchronous rectification to minimize conduction losses. Qmax Systems regularly designs power supplies that reach 80 PLUS Titanium efficiency levels, using high-frequency switching that also reduces the converter footprint.",
  },
  {
    q: "Does Qmax Systems support Battery Management System (BMS) development?",
    a: "Yes. Qmax Systems develops Battery Management Systems for Lithium-ion and LiFePO4 chemistries, including active and passive cell balancing, fuel gauging, and State-of-Charge estimation. Qmax Systems integrates communication protocols such as CANbus and RS-485, with multi-stage protection for scalable, high-voltage battery packs.",
  },
  {
    q: "Does Qmax Systems design custom magnetic components?",
    a: "Yes. Qmax Systems designs custom magnetic components, specifying core materials, winding geometries, and litz-wire gauges to optimize inductors and transformers for specific switching frequencies and ripple requirements. Qmax Systems minimizes core loss and controls leakage inductance for high-efficiency power conversion.",
  },
  {
    q: "What is included in the 1-hour complimentary consulting session with Qmax Systems?",
    a: "During this session, you will speak directly with a Senior Hardware Architect from Qmax Systems. The team can review your block diagrams, discuss thermal, signal integrity, or noise challenges, provide high-level architecture validation, or help refine your hardware roadmap to reduce time-to-market. An NDA can be signed before the session if required.",
  },
  {
    q: "How does Qmax Systems protect customer design data and intellectual property?",
    a: "Qmax Systems treats every engagement under strict IP protection: NDAs are signed before any technical discussion, dedicated secure project workspaces are maintained, and role-based access controls are applied to all design files. Customers own all IP at every milestone - schematics, layouts, BoMs, and firmware. Qmax Systems engineers never reuse or repurpose customer IP across other client engagements.",
  },
];

export const metadata = buildMetadata({
  title: "Power Electronics Design | SMPS, DC-DC & Motor Drive | Qmax",
  description:
    "Power electronics design services - SMPS, DC-DC converters, motor drive, battery management, and thermal engineering. Schematic to board bring-up. USA & India.",
  path: "/hardware-design-services/power-electronics",
});

export default function PowerElectronicsPage() {
  return (
    <>
      {/* <HardwareServiceHeroSectionV2
        imageSrc="https://d1yetprhniwywz.cloudfront.net/v2/services_hero/hardware/hardware+_power.JPG"
        imageAlt="Power Electronics Design - Qmax Systems"
        title={
          <>
            Power Electronics Design Services{" "}
            <span className={HERO_TITLE_SUBLINE_CLASS}>
              GaN/SiC Conversion, Thermal, and BMS
            </span>
          </>
        }
        ctaHref="/hardware-design-services/contact"
        ctaLabel="Talk to Our Engineers"
      /> */}

      <HardwareServiceHeroSection
        // imageSrc="/hw-main/image2.png"
        imageSrc="https://d1yetprhniwywz.cloudfront.net/v2/services_hero/hardware/hardware+_power.JPG"
        imageAlt="Power Electronics Design - Qmax Systems"
        // title={
        //   <>
        //     Power Electronics Design Services: Efficient, Stable, and Scalable
        //     Power for Mission-Critical Hardware
        //   </>
        // }
        title="Power Electronics Design Services - GaN/SiC Conversion, Thermal, and BMS"
        description={
          <>
            <p>
              Qmax Systems provides power electronics design services -
              high-density, high-efficiency power conversion and energy
              management for electrified transport, hyperscale data centers, and
              industrial automation. Qmax Systems bridges wide-bandgap (GaN/SiC)
              semiconductor capability and rugged, market-ready hardware,
              engineering thermal management, EMI/EMC mitigation, and
              high-voltage safety from kilowatt-scale PDUs to precision Battery
              Management Systems.
            </p>
          </>
        }
        ctaHref="/hardware-design-services/contact"
        ctaLabel="Talk to Our Engineers"
      />

      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        // description={
        //   <>
        //     <p>
        //       Qmax Systems provides power electronics design services -
        //       high-density, high-efficiency power conversion and energy
        //       management for electrified transport, hyperscale data centers, and
        //       industrial automation. Qmax Systems bridges wide-bandgap (GaN/SiC)
        //       semiconductor capability and rugged, market-ready hardware,
        //       engineering thermal management, EMI/EMC mitigation, and
        //       high-voltage safety from kilowatt-scale PDUs to precision Battery
        //       Management Systems.
        //     </p>
        //   </>
        // }
      />
      <ApplicationsProjectExperienceSection
        projects={projectExperience}
        subtitle="Our portfolio includes hundreds of advanced power platforms delivered to regulated industries:"
      />

      <TechnicalAdvantageSection
        headingHighlight="Power Electronics"
        lede="Engineering high-power systems requires a rigorous understanding of magnetics, control theory, and physical PCB topology. Qmax Systems expertise covers the full spectrum of modern power conversion."
        cards={POWER_TECHNICAL_CARDS}
        columns="two"
        sectionHeadingId="technical-advantage-power-heading"
      />

      <ComplianceStandardsSection
        title="Compliance & Standards"
        description="Qmax Systems designs for the world's most stringent regulators, delivering high-reliability power electronics for the automotive, medical, and industrial sectors."
        categories={POWER_ELECTRONICS_COMPLIANCE_CATEGORIES}
      />

      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="Power Electronics Design?"
        description="Qmax Systems solves the physics-based problems that lead to field failures in high-voltage systems, before they reach the prototype."
        consultationCta={{
          heading:
            "Get a Complimentary Consultation with Our Power Electronics Experts.",
          subtitle:
            "1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven - no sales pitch.",
          ctaHref: "/hardware-design-services/contact",
        }}
      />

      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={powerElectronicsCaseStudies}
        hideTopBorder
      />

      {/* <ConsultationCtaBar
        heading="Get A Complimentary Consultation With Our Power Electronics Experts."
        subtitle="1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven - no sales pitch."
        ctaHref="/hardware-design-services/contact"
      /> */}

      <FAQSection faqItems={faqs} />

      <div className="pb-28"></div>
    </>
  );
}
