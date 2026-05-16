import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { mechanicalCaseStudiesData } from "@/store/mechanical-case-studies";
import { WorkflowSection } from "@/components/services-cmp/WorkflowSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { CapabilitiesSection } from "@/components/services-cmp/CapabilitiesSection";
import { MechanicalIndustrialHero } from "@/components/services-cmp/MechanicalIndustrialHero";
import { PCBIndustriesSection } from "@/components/services-cmp/PCBIndustriesSection";
import { MECHANICAL_INDUSTRIES } from "@/store/mechanical-industries";

const CAPABILITIES = [
  {
    id: "mechanical",
    tabLabel: "Mechanical Design",
    learnMoreHref: "/mechanical-industrial-design-services/mechanical-design",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      </svg>
    ),
    headline:
      "Physics-driven mechanical design that predicts how your electronics behave under stress, vibration, and extreme temperatures.",
    intro:
      "Our mechanical design philosophy is rooted in physics. We utilize Finite Element Analysis (FEA) and Thermal Analysis to predict how your electronics will behave under stress, vibration, and extreme temperatures.",
    bullets: [
      {
        title: "Structural & Environmental",
        items: [
          "Enclosure Design — Expertise in Plastic Injection Molding, Machined Aluminum, and Sheet Metal Fabrication.",
          "Ruggedization — Design for shock, vibration, and impact resistance (MIL-STD and JSS standards).",
          "Environmental Protection — High-performance sealing for IP65, IP67, and IP68 ratings.",
        ],
      },
      {
        title: "Thermal & Mechanisms",
        items: [
          "Thermal Management — Active and passive cooling solutions, including custom heat sinks and airflow optimization.",
          "Kinematic Design — Precise movement for hinges, sliders, and latching mechanisms.",
        ],
      },
    ],
    deliverables: [
      {
        title: "3D CAD Models",
        description:
          "Native files (SolidWorks/Creo) and neutral formats (STEP/IGES).",
      },
      {
        title: "2D Technical Drawings",
        description: "Fully dimensioned GD&T drawings for manufacturing.",
      },
      {
        title: "BOM Documentation",
        description:
          "Complete Bill of Materials including hardware and finishing specs.",
      },
      {
        title: "Thermal/Structural Reports",
        description: "Detailed simulation data and optimization results.",
      },
      {
        title: "Prototype Units",
        description: "Functional assemblies for EVT/DVT testing.",
      },
    ],
    deliverablesAriaLabel: "Engineering Deliverables",
  },
  {
    id: "industrial",
    tabLabel: "Industrial Design",
    learnMoreHref: "/mechanical-industrial-design-services/industrial-design",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    headline:
      "Intentional design of the user's relationship with hardware — intuitive to use, comfortable to hold, visually representative of its capabilities.",
    intro:
      'Industrial Design at Qmax is not just "styling." It is the intentional design of the user\'s relationship with the hardware. We ensure that the product is intuitive to use, comfortable to hold, and visually representative of its technical capabilities.',
    bullets: [
      {
        title: "Research & Experience",
        items: [
          "Design Research — Analyzing market trends and user behavior to inform product architecture.",
          "CMF Development — Defining Color, Material, and Finish to meet aesthetic and durability goals.",
          "Hardware UI/UX — Designing touchpoints, button haptics, and display integration.",
        ],
      },
      {
        title: "Visualization & Prototyping",
        items: [
          "Visual Communication — Photorealistic renderings and animations for stakeholder reviews and marketing.",
          "Prototyping — Multi-stage prototyping from low-fidelity foam models to high-fidelity vacuum casting.",
        ],
      },
    ],
    deliverables: [
      {
        title: "Coming Soon",
        description: "Industrial Design deliverables to be added.",
      },
    ],
    deliverablesAriaLabel: "Industrial Design Deliverables",
  },
];

const WORKFLOW_STEPS = [
  {
    number: 1,
    title: "Concept & Research",
    description:
      "Defining user requirements, environmental constraints, and technical feasibility.",
  },
  {
    number: 2,
    title: "Industrial Design & Styling",
    description: "Sketching, CMF development, and ergonomic 3D block-outs.",
  },
  {
    number: 3,
    title: "Detailed Mechanical Engineering",
    description:
      "Full CAD development, PCB mechanical integration, and internal component mounting.",
  },
  {
    number: 4,
    title: "Simulation & Analysis",
    description: "FEA for structural integrity and CFD for thermal management.",
  },
  {
    number: 5,
    title: "Prototyping",
    description:
      "Rapid prototyping (SLA/SLS/CNC) to validate fit, form, and function.",
  },
  {
    number: 6,
    title: "DFM/DFA Optimization",
    description:
      "Refining designs for injection molding, casting, or fabrication.",
  },
  {
    number: 7,
    title: "Production Support",
    description:
      "Finalizing EVT/DVT/PVT phases and coordinating with manufacturing partners.",
  },
];

const WHY_CARDS = [
  {
    title: "Electronics-First Mindset",
    desc: 'We don\'t design "boxes." We design thermal and protective environments for sensitive hardware.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <path d="M6 10H3m3 4H3m18-4h-3m3 4h-3" />
        <path d="M10 6V3m4 3V3m-4 18v-3m4 3v-3" />
        <rect x="9" y="9" width="6" height="6" rx="0.5" />
      </svg>
    ),
  },
  {
    title: "Native PCB Integration",
    desc: "Our mechanical team works directly in Altium/Allegro environments to ensure 100% mechanical-to-electrical alignment.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <circle cx="8" cy="10" r="1.5" />
        <circle cx="16" cy="10" r="1.5" />
        <circle cx="12" cy="16" r="1.5" />
        <path d="M8 11.5V14h4v-2" />
        <path d="M16 11.5V13h-4" />
      </svg>
    ),
  },
  {
    title: "Manufacturing-Ready",
    desc: "We deliver production-ready CAD files, not just concepts. We understand draft angles, wall thicknesses, and tolerance stacking.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20h20" />
        <path d="M5 20V10l4 2V8l4 2V6l4 2V4h3v16" />
        <path d="M9 20v-3h4v3" />
      </svg>
    ),
  },
  {
    title: "Cross-Disciplinary Expertise",
    desc: "Access a single team that understands hardware, firmware, and mechanics.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="5" cy="19" r="2.5" />
        <circle cx="19" cy="19" r="2.5" />
        <path d="M12 7.5V12m0 0l-5.5 5m5.5-5l5.5 5" />
      </svg>
    ),
  },
];

const MECHANICAL_INDUSTRIAL_HERO = {
  videoSrc:
    "https://d1yetprhniwywz.cloudfront.net/v2/Inudstrial_&_Mechnical.mp4",
  title: "Mechanical & Industrial Design Services.",
  subtitle:
    "At Qmax Systems, our mechanical and industrial design services are specifically tailored for high-stakes electronics, moving beyond generic CAD modeling to provide deep integration between hardware, thermal physics, and manufacturing realities.",
  ctaHref: "/hardware-development-services/contact",
  ctaLabel: "Talk to Our Engineers",
};

const mechanicalIndustrialCaseStudies = mechanicalCaseStudiesData
  .slice(0, 4)
  .map((caseStudy) => ({
    title: caseStudy.title,
    image: caseStudy.images[0],
    link: `/case-studies/${caseStudy.id}`,
    category: "mechanical",
    summary: caseStudy.summary,
    imageRotation: caseStudy.rotatedImages?.[0],
  }));

export const metadata: Metadata = {
  title: "Mechanical & Industrial Design Services | Qmax Systems",
  description:
    "At Qmax Systems, our mechanical and industrial design services are specifically tailored for high-stakes electronics, integrating hardware, thermal physics, and manufacturing.",
};

export default function MechanicalIndustrialDesignPage() {
  return (
    <main className="text-zinc-900">
      <MechanicalIndustrialHero
        videoSrc={MECHANICAL_INDUSTRIAL_HERO.videoSrc}
        title={MECHANICAL_INDUSTRIAL_HERO.title}
        subtitle={MECHANICAL_INDUSTRIAL_HERO.subtitle}
        ctaHref={MECHANICAL_INDUSTRIAL_HERO.ctaHref}
        ctaLabel={MECHANICAL_INDUSTRIAL_HERO.ctaLabel}
      />

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_minmax(280px,42%)] lg:items-stretch lg:gap-12">
            <div className="max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
              <p>
                At Qmax Systems, we understand that an electronics product is
                more than just a functional PCB; it is a physical entity that
                must survive its environment, satisfy user ergonomics, and meet
                stringent regulatory requirements. Our mechanical and industrial
                design services are specifically tailored for high-stakes
                electronics, moving beyond generic CAD modeling to provide deep
                integration between hardware, thermal physics, and manufacturing
                realities.
              </p>
              <p>
                Whether you are developing a ruggedized MIL-STD-810 tactical
                device, a high-density power inverter, or a sleek IoT wearable,
                our team bridges the gap between electrical engineering and
                mechanical execution. We focus on the critical intersection of
                PCB mechanical integration, thermal management, and structural
                integrity to ensure your product is reliable, manufacturable,
                and aesthetically aligned with your brand identity.
              </p>
              <p>
                By involving our mechanical and industrial designers at the
                schematic stage, we eliminate the common
                &quot;design-over-the-wall&quot; friction. We optimize for DFM
                (Design for Manufacturing) and DFA (Design for Assembly) from
                day one, reducing iteration cycles and ensuring that your
                enclosure is not just a box, but a high-performance component of
                your overall system.
              </p>
            </div>
            <div className="relative overflow-hidden lg:h-full">
              <video
                src="https://d1yetprhniwywz.cloudfront.net/v2/ID_Service_2.mp4"
                className="aspect-video w-full object-cover lg:aspect-auto lg:h-full"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Mechanical and industrial design service overview video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <CapabilitiesSection
        capabilities={CAPABILITIES}
        getInTouchHref="/hardware-development-services/contact"
      />

      <PCBIndustriesSection
        industries={MECHANICAL_INDUSTRIES}
        headingPrefix="Mechanical Development"
        ctaLabel="Get a Mechanical Design Quote"
      />

      <WorkflowSection
        steps={WORKFLOW_STEPS}
        title="End-to-End Development"
        titleHighlight="Workflow"
      />

      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="Mechanical & Industrial Design?"
        ctaHref="/hardware-development-services/contact"
      />

      <FAQSection
        faqs={[
          {
            q: "How do you manage heat dissipation in sealed IP67 enclosures?",
            a: "We utilize thermal simulation (CFD) to design internal heat spreaders and utilize the enclosure's external surface area as a heat sink, often employing thermally conductive plastics or metal chassis.",
          },
          {
            q: "Can you design for MIL-STD-810G vibration and shock requirements?",
            a: "Yes. We perform FEA-based vibration analysis to identify resonance points and implement ruggedized mounting features or potting compounds where necessary.",
          },
          {
            q: "What is the difference between DFM and DFA in your process?",
            a: "DFM (Design for Manufacturing) focuses on the ease of fabricating individual parts (e.g., injection molding), while DFA (Design for Assembly) focuses on reducing part count and simplifying the manual or automated assembly of the final product.",
          },
          {
            q: "Do you support PCB thermal profiling?",
            a: "Absolutely. We analyze component-level heat loads on the PCB to design optimized cooling paths, whether through forced air, heat pipes, or thermal interface materials (TIM).",
          },
          {
            q: "How do you ensure the mechanical design doesn't interfere with RF performance?",
            a: "We work closely with RF engineers to select non-interfering materials and design shielding cans or antenna clearances that maintain signal integrity.",
          },
          {
            q: "What prototyping methods do you use for functional testing?",
            a: "Depending on the requirement, we use CNC machining for strength, SLA/SLS for high-detail fitment, or vacuum casting for bridge production.",
          },
          {
            q: "Can you help with CMF (Color, Material, Finish) specifications?",
            a: "Yes, we provide detailed CMF documents that specify Pantone/RAL colors, texture grades (VDI/MT), and coating types (powder coating, anodizing, etc.).",
          },
          {
            q: "Do you design for intrinsically safe (IS) environments?",
            a: "Yes, we understand the mechanical constraints required for ATEX/IECEx certification, including creepage, clearance, and impact resistance.",
          },
          {
            q: "How do you handle tolerance stack-up analysis?",
            a: "We perform worst-case and RSS (Root Sum Squared) tolerance analysis to ensure that parts fit together perfectly across high-volume production runs.",
          },
          {
            q: "At what stage should I start mechanical design?",
            a: "Ideally, at the block diagram stage. Early mechanical involvement ensures that the PCB shape and component placement are optimized for the final enclosure size and thermal requirements.",
          },
        ]}
      />

      <ServiceCaseStudiesSection
        eyebrow="Mechanical Portfolio"
        studies={mechanicalIndustrialCaseStudies}
        hideTopBorder
      />
    </main>
  );
}
