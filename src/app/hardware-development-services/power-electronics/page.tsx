import type { Metadata } from "next";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { hardwareCaseStudies } from "@/data/service-case-studies";
import {
  CoreServiceOfferingsSection,
  type HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import {
  TechnicalAdvantageSection,
  type TechnicalAdvantageCard,
} from "@/components/services-cmp/TechnicalAdvantageSection";

const coreServiceOfferings: HighSpeedCoreOffering[] = [
  {
    id: "psu",
    tab: "AC-DC & DC-DC Supplies",
    headline:
      "AC-DC and DC-DC power supply design built for efficiency, ripple, and global compliance.",
    intro:
      "Qmax Systems designs custom switched-mode and linear power architectures — buck, boost, flyback, LLC, and LDO topologies — tailored for industrial automation, telecom infrastructure, and embedded platforms. Our supplies are engineered for low ripple, robust startup, and high-load transient response with CE, FCC, UL, and IEC compliance baked in from day one.",
    points: [
      {
        boldLead: "Switched-Mode Power Architectures",
        rest: " — buck, boost, flyback, and LLC resonant converters optimized for efficiency, power density, and load regulation.",
      },
      {
        boldLead: "Linear & Hybrid Regulation",
        rest: " — LDO and post-regulator stages for low-noise rails feeding sensitive analog, RF, and precision converter loads.",
      },
      {
        boldLead: "Global Compliance by Design",
        rest: " — EMI filter planning, creepage and clearance, and isolation design pre-engineered for CE, FCC, UL, and IEC certification.",
      },
    ],
    applications:
      "Industrial automation · Telecom infrastructure · Embedded platforms · Medical power supplies · Test & measurement",
  },
  {
    id: "pdn",
    tab: "PDN Engineering",
    headline:
      "Power Delivery Network engineering that keeps modern AI accelerators, GPUs, and FPGAs alive at their advertised performance.",
    intro:
      "Qmax Systems delivers structured Power Delivery Network (PDN) engineering with end-to-end rail planning from source to point-of-load, simulation-led decoupling, and target-impedance control. Our PDN designs support modern multi-core CPUs, large FPGAs, GPUs, and AI accelerators — where rail noise and impedance excursions translate directly into compute errors and thermal events.",
    points: [
      {
        boldLead: "End-to-End Rail Planning",
        rest: " — source-to-load topology, VRM placement, point-of-load conversion, and current density planning across the full board.",
      },
      {
        boldLead: "Target-Impedance PDN Design",
        rest: " — frequency-domain impedance specifications matched to load dI/dt requirements, validated with full-board PI simulation.",
      },
      {
        boldLead: "Simulation-Led Decoupling",
        rest: " — capacitor selection, placement, and ESR/ESL trade-offs optimized in simulation before layout commit.",
      },
    ],
    applications:
      "AI accelerator boards · Server motherboards · High-end FPGA platforms · GPU compute · HPC systems",
  },
  {
    id: "bms",
    tab: "BMS & Energy Storage",
    headline:
      "Battery Management System and energy storage electronics for EV, ESS, UPS, and portable platforms.",
    intro:
      "Qmax Systems designs Battery Management Systems (BMS) and energy storage hardware including pack monitoring, active and passive cell balancing, safety interlocks, and State-of-Charge (SoC) and State-of-Health (SoH) estimation. Our designs span Li-ion, LFP, and other chemistries for electric vehicles, energy storage systems, UPS, and portable products.",
    points: [
      {
        boldLead: "Pack Monitoring & Cell Balancing",
        rest: " — high-accuracy voltage and current sensing with active or passive balancing optimized for chemistry and use profile.",
      },
      {
        boldLead: "Safety Interlocks & Protection",
        rest: " — OVP, UVP, OCP, and thermal cutoff circuitry designed for functional safety standards in EV and stationary storage.",
      },
      {
        boldLead: "SoC and SoH Estimation",
        rest: " — coulomb-counting, model-based, and Kalman-filter approaches integrated with the BMS firmware stack.",
      },
    ],
    applications:
      "Electric vehicles (EV) · Energy storage systems (ESS) · UPS · Portable medical devices · Industrial battery packs",
  },
  {
    id: "thermal",
    tab: "Thermal & Reliability",
    headline:
      "Joint electrical-thermal co-design that delivers long-term field reliability — not just bench-tested prototypes.",
    intro:
      "Qmax Systems combines electrical and thermal engineering from day one — using component derating, loss analysis, and cooling strategy optimization (passive heatsinking, forced-air, and liquid cooling) to maintain long-term field reliability of power electronics for industrial, telecom, automotive, and aerospace environments.",
    points: [
      {
        boldLead: "Loss Budget & Derating Analysis",
        rest: " — component-level loss accounting and derating against junction temperature, voltage stress, and lifetime targets.",
      },
      {
        boldLead: "Cooling Strategy Selection",
        rest: " — passive heatsinking, forced air, cold plates, and direct liquid cooling matched to power density and ambient envelope.",
      },
      {
        boldLead: "Reliability Modeling",
        rest: " — MTBF projection, MIL-HDBK-217 / Telcordia analysis, and accelerated-life test planning for high-availability deployments.",
      },
    ],
    applications:
      "Industrial power systems · Telecom power · Automotive electrification · Aerospace power · Defense systems",
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
    title: "Power Systems Built from Scratch",
    desc: "Every power electronics program starts with R&D and a proof-of-concept build to retire architectural risk early. We confirm feasibility, lock the BoM, validate magnetics and thermals, and prove critical assumptions before a single production layer is committed.",
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
    desc: "We select power stages, gate drivers, MCUs, and toolchains that fit your existing stack rather than forcing a re-platform. The result is firmware that brings up cleanly, BMS controllers that drop into your platform, and lower long-term maintenance cost.",
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
    title: "Expert Power Electronics Engineers",
    desc: "Qmax Systems power electronics engineers average 12+ years across electric vehicles, energy storage systems, industrial automation, telecom power, and aerospace power. Only senior engineers touch your design — no junior hand-offs, no learning on your timeline.",
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
    title: "High-Efficiency Power Conversion",
    body: "Design of AC-DC, DC-DC, and isolated converter topologies (buck, boost, flyback, LLC) engineered for efficiency, power density, and long-term reliability across industrial, telecom, and embedded loads.",
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
    title: "Battery & Charging Systems",
    body: "Multi-cell battery management, charging control, protection circuitry, cell-balancing, and runtime optimization for Li-ion, LFP, and other chemistries used in EV, ESS, UPS, and portable applications.",
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
    title: "Motor Drive Electronics",
    body: "Power stages and control electronics for BLDC, PMSM, and industrial motor applications — including gate-driver design, current sensing, FOC control loops, and protection for high-reliability motion systems.",
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
    title: "Power Integrity & EMI/EMC",
    body: "PI-driven layout, filtering, grounding, and shielding strategies for stable, compliant systems. Pre-designed for EMI/EMC, CE, FCC, UL, and IEC certification — reducing rework and accelerating time-to-compliance.",
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
    q: "What power supply topologies does Qmax Systems design?",
    a: "Qmax Systems designs the full range of AC-DC and DC-DC topologies — buck, boost, flyback, LLC resonant converters, and LDO and post-regulator stages — tailored for industrial automation, telecom infrastructure, embedded platforms, and medical power supplies. Every design is engineered for low ripple, robust startup, high-load transient response, and global compliance.",
  },
  {
    q: "Does Qmax Systems handle Power Delivery Network (PDN) design for high-current loads like AI accelerators?",
    a: "Yes. Qmax Systems delivers structured PDN engineering with end-to-end rail planning, target-impedance control, and simulation-led decoupling — supporting multi-core CPUs, large FPGAs, GPUs, and AI accelerators where rail noise and impedance excursions translate directly into compute errors.",
  },
  {
    q: "Can Qmax Systems design Battery Management Systems (BMS) for EV and energy storage applications?",
    a: "Absolutely. Qmax Systems designs BMS and energy storage hardware — pack monitoring, active and passive cell balancing, safety interlocks, SoC and SoH estimation — for Li-ion, LFP, and other chemistries used in electric vehicles, energy storage systems, UPS, and portable products.",
  },
  {
    q: "What battery chemistries does Qmax Systems support for BMS design?",
    a: "Qmax Systems designs BMS hardware for Li-ion, LFP, NMC, and other modern battery chemistries. We handle high-accuracy voltage and current sensing, active/passive balancing, OVP/UVP/OCP protection, and SoC/SoH estimation via coulomb-counting, model-based, and Kalman-filter approaches.",
  },
  {
    q: "How does Qmax Systems ensure thermal reliability in high-power designs?",
    a: "Qmax Systems uses joint electrical-thermal co-design from day one — including component-level loss analysis, junction-temperature derating, cooling strategy selection (passive heatsinking, forced air, cold plates, or liquid cooling), and MTBF projection via MIL-HDBK-217 and Telcordia methodologies.",
  },
  {
    q: "What is included in the 1-hour complimentary consulting session?",
    a: "During this session, you will speak directly with a Senior Hardware Architect from Qmax Systems. We can review your power architecture, discuss PDN topology, thermal envelope, or BMS design questions, or help refine your power electronics roadmap. We can sign an NDA if required.",
  },
  {
    q: "How does Qmax Systems protect customer design data and intellectual property?",
    a: "Qmax Systems treats every engagement under strict IP protection: NDAs signed before any technical discussion, dedicated secure project workspaces, role-based access control to design files, and customer-owned IP at every milestone — schematics, layouts, BoMs, and firmware. Qmax Systems engineers never reuse or repurpose customer IP across other client engagements.",
  },
  {
    q: "How does Qmax Systems ensure EMI/EMC and global certification compliance?",
    a: "Qmax Systems pre-engineers EMI filter design, creepage and clearance, isolation barriers, and grounding strategy for CE, FCC, UL, and IEC compliance from the schematic stage forward — reducing certification rework and accelerating time to global market.",
  },
];

export const metadata: Metadata = {
  title: "Power Electronics Services | Qmax",
  description:
    "Power electronics design and development from converter architecture through validation — AC-DC, DC-DC, PDN, BMS, and thermal co-design.",
};

export default function PowerElectronicsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-14 pb-12 lg:pt-20 lg:pb-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-slate-200 group">
            <Image
              src="/hw-main/image2.png"
              alt="Power Electronics Design - Qmax Systems"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-5xl">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-6">
                HARDWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl font-light leading-[1.1] text-zinc-950 md:text-6xl lg:text-7xl tracking-tight">
                Power Electronics
                <br className="hidden md:block" />
                Design Services.
              </h1>
            </div>
          </div>
          <div className="mt-10 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
            <p>
              Qmax Systems delivers end-to-end power electronics engineering for
              products that demand high efficiency, robust operation, and
              long-term reliability. We design complete power subsystems, from
              input protection and conversion stages to point-of-load regulation
              and system-level validation — for edge AI, telecom infrastructure,
              industrial controls, and battery-based products.
            </p>
          </div>
        </div>
      </section>

      <CoreServiceOfferingsSection offerings={coreServiceOfferings} />
      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="Power Electronics Design?"
      />
      <TechnicalAdvantageSection
        headingHighlight="Power Electronics"
        lede="Qmax Systems combines architecture planning, simulation-driven design, and hardware validation to deliver resilient power systems for demanding applications."
        cards={POWER_TECHNICAL_CARDS}
        columns="two"
        sectionHeadingId="technical-advantage-power-heading"
      />
      <FAQSection faqs={faqs} hideTopBorder />
      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={hardwareCaseStudies}
        hideTopBorder
      />
    </>
  );
}
