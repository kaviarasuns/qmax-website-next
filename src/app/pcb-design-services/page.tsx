import Image from "next/image";
import "../../components/hardware-design.css";
import { buildMetadata } from "@/lib/seo";
import { CapabilitiesSection } from "@/components/services-cmp/CapabilitiesSection";
import { ServiceVideoHero } from "@/components/services-cmp/service-video-hero";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import { PCBIndustriesSection } from "@/components/services-cmp/PCBIndustriesSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { PCB_INDUSTRIES } from "@/store/pcb-industries";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import type { ServiceCaseStudy } from "@/data/service-case-studies";
import { pcbCaseStudiesData } from "@/store/pcb-case-studies";
import { pcbV2ServiceCaseStudy } from "@/store/pcb-case-studies-v2/service-cards";

export const metadata = buildMetadata({
  title: "PCB Design Services | High-Speed, RF & SI/PI | Qmax Systems",
  description:
    "First-time-right PCB design and layout - high-speed digital, RF/microwave, power electronics, HDI, and SI/PI analysis. Altium & Cadence. Dallas TX & India.",
  path: "/pcb-design-services",
});
/* ============================================================
   DATA
   ============================================================ */

const HERO = {
  title: "PCB Design Services - Engineering for First-Time-Right Hardware",
  description: (
    <>
      Qmax Systems provides PCB design services that treat the board as a
      critical engineering discipline, not mere interconnection. Qmax Systems
      delivers reliable, first-time-right PCB layouts, validated by SI/PI and
      thermal simulation for performance, compliance, and manufacturability.
    </>
  ),
  ctaHref: "/pcb-design-services/contact",
  ctaLabel: "TALK TO OUR ENGINEERS",
  videoSrc: "https://d1yetprhniwywz.cloudfront.net/v2/PCB_Design_Hero.mp4",
};

const CAPABILITIES = [
  {
    id: "high-speed",
    tabLabel: "High-Speed",
    learnMoreHref: "/pcb-design-services/high-speed-digital-pcb-design",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </svg>
    ),
    headline:
      "High-speed PCB layout governed by signal-integrity and timing margins.",
    intro:
      "Qmax Systems engineers high-speed digital boards where signal integrity, timing margin, and power delivery decide whether the board boots. DDR4/DDR5 routing, PCIe Gen3/Gen4 channel design, and 10/25G SerDes lanes are validated through pre- and post-layout SI/PI simulation in Cadence Sigrity and Ansys SIwave. Typical applications: server compute, networking line cards, and FPGA data-acquisition boards.",
    bullets: [
      {
        title: "Standards & Interfaces",
        items: [
          "IPC-2221, IPC-2152, IPC-2141 controlled-impedance routing.",
          "DDR3/4/5, PCIe Gen3/4, 10G/25G SerDes, USB 3.x, HDMI.",
        ],
      },
      {
        title: "Tools & Verification",
        items: [
          "Cadence Sigrity, Ansys SIwave for SI/PI simulation.",
          "Length-matched differential pairs, return-path integrity, decap optimization.",
        ],
      },
    ],
  },
  {
    id: "rf-microwave",
    tabLabel: "RF & Microwave",
    learnMoreHref: "/pcb-design-services/rf-and-microwave-pcb-design",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M20.49 4.51a10 10 0 0 1 0 14.14M3.51 19.49a10 10 0 0 1 0-14.14" />
      </svg>
    ),
    headline:
      "RF designs validated in real-world conditions, not just simulations.",
    intro:
      "RF and microwave design is where simulation and reality diverge, so Qmax Systems validates every link budget on real hardware in its labs. Front-end architecture, antenna integration, and EMC-aware layout are qualified across ISM, Wi-Fi, BLE, LTE, and Sub-GHz bands. Typical applications: IoT radios, industrial telemetry, and wireless medical devices.",
    bullets: [
      {
        title: "Components & Antennas",
        items: [
          "RF front-end design (LNA, PA, filters, matching networks).",
          "PCB, external, horn, and custom antenna integration.",
        ],
      },
      {
        title: "Protocols & Validation",
        items: [
          "ISM, Wi-Fi, BLE, LTE, and Sub-GHz systems.",
          "RF simulation, tuning, calibration, and EMC-aware layout.",
        ],
      },
    ],
  },
  {
    id: "analog-design",
    tabLabel: "Analog & Mixed-Signal",
    learnMoreHref: "/pcb-design-services/analog-and-mixed-signal",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h3l3-9 4 18 3-12 2 6h5" />
      </svg>
    ),
    headline:
      "Precision analog and mixed-signal design for sensing, measurement, and control.",
    intro:
      "Qmax Systems builds precision analog and mixed-signal front-ends that recover clean signal from noisy environments for sensing, measurement, and control. Low-noise sensor interfaces, ADC/DAC conditioning chains, and EMI-hardened layout are integrated into a single qualified board. Typical applications: biomedical instrumentation, industrial sensing, and optical acquisition.",
    bullets: [
      {
        title: "Sensing & Front-Ends",
        items: [
          "Low-noise analog front-ends and sensor interfacing.",
          "Pressure, vibration, biomedical, and optical signal acquisition.",
        ],
      },
      {
        title: "Processing & Integrity",
        items: [
          "Signal conditioning, filtering, amplification, ADC/DAC integration.",
          "EMI-aware analog layout and grounding techniques.",
        ],
      },
    ],
  },
  {
    id: "power-electronics",
    tabLabel: "Power Electronics",
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
      "Robust power electronics for industrial, automotive, and energy applications.",
    intro:
      "Qmax Systems designs power electronics for industrial, automotive, and energy systems where efficiency, isolation, and thermal margin are non-negotiable. AC-DC and DC-DC converters, battery management systems, and HV/HC PCBs are each verified against derating and reliability targets before sign-off. Typical applications: EV charging, industrial drives, and grid-tied energy storage.",
    bullets: [
      {
        title: "Conversion & Topologies",
        items: [
          "AC-DC/DC-DC converters and isolated/non-isolated SMPS.",
          "Resonant, LLC, CLLC, and Class-D topologies.",
        ],
      },
      {
        title: "High Power & Reliability",
        items: [
          "Battery systems (BMS), chargers, inverters, HV/HC PCB design.",
          "Thermal simulation, derating, and reliability analysis.",
        ],
      },
    ],
  },
  {
    id: "si-pi-analysis",
    tabLabel: "SI / PI Analysis",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h3l2-7 4 14 2-7h7" />
      </svg>
    ),
    headline:
      "Pre- and post-layout signal & power integrity analysis before a single board is fabricated.",
    intro:
      "Qmax Systems performs pre- and post-layout signal and power integrity analysis before a single board is fabricated, using Cadence Sigrity and Ansys SIwave. Transmission-line simulation, eye-diagram analysis, IBIS-based driver/receiver modeling, and PDN impedance analysis are offered standalone or integrated into any PCB layout engagement. Typical applications: DDR5, PCIe Gen4/5, and high-speed SerDes channels.",
    bullets: [
      {
        title: "Simulation & Modeling",
        items: [
          "Transmission line simulation, eye diagram, and IBIS-based driver/receiver modeling.",
        ],
      },
      {
        title: "PDN & Decoupling",
        items: [
          "Power delivery network impedance analysis and decoupling capacitor optimization.",
        ],
      },
    ],
  },
  {
    id: "pcb-library",
    tabLabel: "PCB Library",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h6v16H4zM10 4h6v16h-6zM16 6l4 1-3 14-4-1z" />
      </svg>
    ),
    headline: "A PCB design is only as reliable as its component library.",
    intro:
      "Over three decades, Qmax Systems has built a verified, well-documented library of schematic symbols, PCB footprints, and 3D STEP models across 30,000+ components. Every part is validated against manufacturer datasheets and IPC-7351 land-pattern standards. Typical applications: new component creation, library migration, and footprint qualification for high-density designs.",
    bullets: [
      {
        title: "Library Standards",
        items: [
          "Schematic symbols, PCB footprints, and 3D STEP models validated to IPC-7351.",
        ],
      },
      {
        title: "Lifecycle Management",
        items: [
          "Footprint accuracy maintained through component revisions, reducing manufacturing errors.",
        ],
      },
    ],
  },
  {
    id: "design-review",
    tabLabel: "Design Review",
    learnMoreHref: "/pcb-design-services/pcb-design-review-services",
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
      "An independent PCB design review - identifying risks before you release to fabrication.",
    intro:
      "Qmax Systems delivers an independent PCB design review that identifies risks before release to fabrication. The review audits your existing layout against a structured checklist covering layer stack-up, placement, routing, silkscreen, drill notes, and documentation, then delivers a formal technical report with prioritized SI, DFM, thermal, and compliance findings. Typical applications: pre-fab sign-off, second-opinion reviews, and inherited-design risk assessment.",
    bullets: [
      {
        title: "Review Coverage",
        items: [
          "Stack-up, placement, routing, silkscreen, drill notes, and documentation completeness.",
        ],
      },
      {
        title: "Deliverable",
        items: [
          "Formal technical report with prioritized SI, DFM, thermal, and compliance findings.",
        ],
      },
    ],
  },
];

// const PCB_CAPABILITIES_STRIP = [
//   {
//     title: "Design Tools",
//     description:
//       "Cadence Allegro · Mentor Xpedition / PADS · Altium Designer · OrCAD · KiCad · Valor Genesis · SI/PI simulation suites",
//   },
//   {
//     title: "Layer & Stack-Up Range",
//     description:
//       "Up to 64 layers · Fine-pitch BGA (0.3 / 0.4 mm) · HDI / ELIC / stacked vias · Multi-impedance (50 / 90 / 100 Ω) on a single board",
//   },
//   {
//     title: "Materials We Support",
//     description:
//       "FR-4 (standard and high-Tg) · Rogers · Tachyon · Arlon 85N · PTFE-based RF laminates",
//   },
//   {
//     title: "Fabrication Partners",
//     description:
//       "Direct relationships with qualified PCB fabricators worldwide. Every layout is optimized for the chosen fab and target volume.",
//   },
// ];

const WHY_CARDS = [
  {
    title: "First-Time-Right Philosophy",
    desc: "Before Gerbers leave the building, Qmax Systems runs DRC, SI/PI, and thermal simulation, setting routing constraints up front so the first fabricated board behaves as designed - no costly re-spins.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Bullseye / target - "right the first time" */}
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="11" />
        <circle cx="24" cy="24" r="4" />
        <path d="M36 12 L28 20" />
        <path d="M40 8 L36 12 L40 16" />
      </svg>
    ),
  },
  {
    title: "30,000+ Verified Component Libraries",
    desc: "Qmax Systems validates every symbol, footprint, and 3D model against manufacturer datasheets across 30,000+ verified components — eliminating pad mismatches and assembly surprises.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* IC chip with pin legs - component libraries */}
        <rect x="13" y="13" width="22" height="22" rx="2" />
        <path d="M13 19 H7 M13 24 H7 M13 29 H7" />
        <path d="M35 19 H41 M35 24 H41 M35 29 H41" />
        <path d="M19 13 V7 M24 13 V7 M29 13 V7" />
        <path d="M19 35 V41 M24 35 V41 M29 35 V41" />
      </svg>
    ),
  },
  {
    title: "Global Compliance Expertise",
    desc: "CE, FCC, UL, IPC, and MIL-STD-461 are designed in at the layout stage, because Qmax Systems treats compliance as a confirmation, not a gamble - via an EMC-by-design approach.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Shield with globe meridians - global compliance / certification */}
        <path d="M24 6 L40 12 V24 C40 34 32 40 24 42 C16 40 8 34 8 24 V12 Z" />
        <path d="M8 24 H40" />
        <path d="M24 6 C28 14 28 34 24 42 C20 34 20 14 24 6 Z" />
      </svg>
    ),
  },

  {
    title: "Production & Documentation Readiness",
    desc: "Every design ships with 100% DFM-verified files to IPC-2221/2226; Qmax Systems delivers complete IPC-2581/ODB++ packages, controlled-impedance drill tables, and worst-case tolerance analysis.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Stacked documents with text lines - production & documentation */}
        <rect x="14" y="8" width="22" height="28" rx="2" />
        <rect x="10" y="12" width="22" height="28" rx="2" />
        <path d="M16 20 H26 M16 25 H26 M16 30 H22" />
      </svg>
    ),
  },

  {
    title: "Fabrication Partner Network",
    desc: "Qmax Systems works with qualified fabs and assembly houses with traceable sourcing, plus direct liaison to lock stackup and materials (FR-4, Megtron 6, Rogers 4350B) and flag single-source parts early.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Network topology - partner / supply chain network */}
        <circle cx="24" cy="24" r="4" />
        <circle cx="8" cy="12" r="3.5" />
        <circle cx="40" cy="12" r="3.5" />
        <circle cx="8" cy="36" r="3.5" />
        <circle cx="40" cy="36" r="3.5" />
        <path d="M11 13 L20 21 M37 13 L28 21 M11 35 L20 27 M37 35 L28 27" />
      </svg>
    ),
  },

  {
    title: "Strict IP Protection",
    desc: "A mutual NDA is signed from day one, and Qmax Systems stores all design files in an access-controlled vault, never on shared drives: Customers own all IP at every milestone.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Shield with padlock inside - IP security */}
        <path d="M24 6 L40 12 V24 C40 34 32 40 24 42 C16 40 8 34 8 24 V12 Z" />
        <rect x="17" y="21" width="14" height="11" rx="1.5" />
        <path d="M20 21 V17 a4 4 0 0 1 8 0 V21" />
        <circle cx="24" cy="27" r="1.5" />
      </svg>
    ),
  },
  // {
  //   title: "Multi-Domain Systems Experience",
  //   desc: "Cross-domain background across automotive, medical, aerospace, and industrial. Complex mixed-signal and safety-critical designs handled by experienced engineers.",
  //   icon: (
  //     <svg
  //       viewBox="0 0 48 48"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2.2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <rect x="6" y="6" width="15" height="15" rx="1.5" />
  //       <rect x="27" y="6" width="15" height="15" rx="1.5" />
  //       <rect x="6" y="27" width="15" height="15" rx="1.5" />
  //       <rect x="27" y="27" width="15" height="15" rx="1.5" />
  //     </svg>
  //   ),
  // },
  // {
  //   title: "Engineering Depth Over Surface-Level Layout",
  //   desc: "Engineers understand the full signal chain. Every layer decision is driven by electrical, thermal, and mechanical constraints, not routing convenience.",
  //   icon: (
  //     <svg
  //       viewBox="0 0 48 48"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2.2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M14 6 L34 6 L34 18 L42 26 L34 34 L34 42 L14 42 L14 34 L6 26 L14 18 Z" />
  //       <circle cx="24" cy="24" r="4" />
  //     </svg>
  //   ),
  // },
];

const FAQ_ITEMS = [
  {
    q: "Does Qmax Systems provide end-to-end PCB design services?",
    a: "Yes. Qmax Systems handles the full PCB design cycle - from schematic capture and stack-up planning to detailed layout, signal integrity analysis, and Gerber generation. IPC-trained designers manage every step from initial netlist to fabrication-ready output, giving you one accountable team for every PCB your product depends on.",
  },
  {
    q: "What PCB technologies and complexities does Qmax Systems handle?",
    a: "We design everything from 2-layer boards to 32+ layer HDI, rigid-flex, and mixed-signal PCBs. Qmax Systems routinely delivers high-density BGA fanouts, controlled-impedance routing, blind and buried vias, and length-tuned high-speed channels - every layout engineered for performance, manufacturability, and reliable operation across demanding environments.",
  },
  {
    q: "Which PCB design CAD tools does Qmax Systems support?",
    a: "Qmax Systems is proficient across all major PCB CAD platforms, including Altium Designer, Cadence Allegro, Mentor Xpedition, OrCAD, KiCad, and PADS. We adapt to your existing toolchain and library standards, ensuring seamless collaboration with your in-house engineering teams and full design-data compatibility from start to finish.",
  },
  {
    q: "Does Qmax Systems handle high-speed and signal integrity design?",
    a: "Yes. Our high-speed expertise covers DDR4/DDR5, PCIe Gen5, USB 4.0, Ethernet up to 112G SerDes, and RF up to mmWave. Qmax Systems runs pre-layout and post-layout SI/PI/EMI simulations in Cadence Sigrity and Ansys SIwave, and manages crosstalk, return paths, and power integrity across every critical net.",
  },
  {
    q: "Does Qmax Systems perform DFM and pre-fabrication reviews?",
    a: "Yes. Qmax Systems runs every design through internal DFM, DFA, and DFT reviews before fabrication release, and coordinates directly with your manufacturing partners on stack-up, panelization, and tolerance to identify yield risks early. The result is a manufacture-ready design package that minimizes spins, reduces NRE, and shortens time to volume.",
  },
  {
    q: "How does Qmax Systems protect our PCB design data and IP?",
    a: "Every engagement operates under strict NDAs with employees, customers, and third-party vendors. Qmax Systems stores design files on access-controlled, encrypted servers with role-based permissions and complete audit trails. You retain 100% IP ownership, and your schematics, layouts, and libraries are never reused, shared, or referenced beyond your project.",
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

const pcbCaseStudies: ServiceCaseStudy[] = [
  ...pcbServiceCaseStudies(["pcie-gen5-cpo-board"]),
  pcbV2ServiceCaseStudy("terabit-switch-fabric-board"),
  ...pcbServiceCaseStudies([
    "digital-stethoscope",
    "ultra-low-cost-bldc-motor-controller",
  ]),
];

export default function HardwareDevelopmentServicesComponentV2() {
  return (
    <div className="hd-root">
      <ServiceVideoHero {...HERO} />

      {/* CORE CAPABILITIES */}
      <CapabilitiesSection
        capabilities={CAPABILITIES}
        title="PCB Design"
        titleHighlight="Capabilities"
      />

      {/* PCB CAPABILITIES STRIP - Design Tools, Stack-Up, Materials, Fab Partners */}
      {/* <CapabilitiesStripSection items={PCB_CAPABILITIES_STRIP} /> */}

      {/* PCB DESIGN ACROSS INDUSTRIES (tabbed) */}
      <PCBIndustriesSection
        industries={PCB_INDUSTRIES}
        ctaLabel="Get a PCB Design Quote"
      />

      {/* WHY CHOOSE QMAX */}
      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="PCB Design?"
        ctaHref="/pcb-design-services/contact"
        className="pb-0 max-[900px]:pb-0"
      />

      <section
        className="bg-white px-16 pt-0 pb-24 max-[900px]:px-6 max-[900px]:pb-16"
        aria-label="Contact founder"
      >
        <div className="mx-auto max-w-[1200px]">
          <a
            className="relative block aspect-[2396/520] w-full cursor-pointer overflow-hidden rounded-xl bg-black no-underline shadow-[0_1px_2px_rgba(16,24,40,0.06)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:no-underline hover:shadow-[0_6px_16px_rgba(16,24,40,0.10)]"
            href="/pcb-design-services/contact"
            aria-label="Have your questions answered - contact Saravanaperumal Annamalai, VP - SWE Engineering"
          >
            <Image
              src="https://d1yetprhniwywz.cloudfront.net/v2/csb_cta_v2.png"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              className="object-cover object-center"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-between px-[5%] py-6 max-[900px]:px-5 max-[900px]:py-4">
              <div className="flex max-w-[54%] flex-col gap-3 max-[900px]:max-w-[62%] max-[900px]:gap-2">
                <h2 className="text-[clamp(1rem,2.8vw,2.35rem)] font-semibold leading-[1.12] tracking-[0.2px] text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.45)]">
                  Have Your Questions Answered!
                </h2>
                <p className="text-[clamp(0.5rem,1.15vw,0.9rem)] uppercase leading-[1.35] text-white/95 [text-shadow:_0_1px_3px_rgba(0,0,0,0.4)]">
                  Send your requirements and get an assessment
                </p>
                <span className="mt-0.5 inline-flex w-fit rounded-md bg-white px-5 py-2.5 text-[clamp(0.7rem,1.25vw,1.05rem)] font-bold tracking-[0.2px] text-[#0a0a0a] shadow-[0_2px_8px_rgba(0,0,0,0.18)] max-[900px]:px-4 max-[900px]:py-2">
                  Ask a Question
                </span>
              </div>
              <div className="absolute bottom-4 right-[5%] shrink-0 text-right text-[clamp(0.7rem,1.35vw,1.125rem)] font-semibold leading-[1.3] tracking-[0.2px] text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.45)] max-[900px]:right-5">
                <span className="block font-bold">
                  Saravanabhavan Chandrasekar
                </span>
                <span className="block font-normal">CEO</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      {/* <PartnershipsSection /> */}

      {/* WORKFLOW TIMELINE - re-add WorkflowSection + steps data when enabled */}

      {/* CUSTOMER SUCCESS STORIES */}
      {/* <TestimonialsSection testimonials={TESTIMONIALS} /> */}

      {/* CTA BANNER */}
      {/* <CTABannerSection
        href="/pcb-design-services/contact"
        heading="Ready To Bring Your PCB Design Project To Life?"
      /> */}

      {/* FEATURED ARTICLES */}
      {/* <FeaturedArticlesSection /> */}

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
        hideTopBorder
      />

      {/* FAQ */}
      {/* <ComplimentaryConsultationSection variant="pcb" /> */}
      <FAQSection faqItems={FAQ_ITEMS} />
      <div className="pb-28"></div>

      {/* OTHER CAPABILITIES */}
      {/* <OtherCapabilitiesScrollSection
        capabilities={hardwareDevelopmentOtherCapabilities}
      /> */}
    </div>
  );
}

{
  /* <section
className="relative w-full min-h-screen bg-cover bg-center flex items-center overflow-hidden after:absolute after:inset-0 after:bg-black/45 after:pointer-events-none after:content-['']"
id="hero"
style={{
  backgroundImage:
    "linear-gradient(135deg, rgba(11,95,165,0.45), rgba(14,20,27,0.55)), url('/pcb-design-services/images/image1.jpg')",
}}
>
<div className="relative z-[2] w-full py-20 px-16 max-w-[1400px] mx-auto max-[900px]:py-16 max-[900px]:px-6">
  <div className="max-w-[820px]">
    <h1 className="text-white mb-6 font-bold leading-[1.1] text-balance text-[clamp(36px,5vw,60px)]">
      PCB Design Services: A Multi-Physics Engineering Discipline
    </h1>
    <p className="text-white text-xl leading-[1.6] font-normal mb-10 max-w-[720px]">
      <strong>Engineering Beyond Connectivity.</strong> Qmax Systems
      treats PCB design as a critical engineering discipline, not just
      interconnection. Qmax Systems engineers deliver reliable,
      first-time-right PCB layouts optimized for performance, compliance,
      and manufacturability.
    </p>
    <a
      className="bg-[#E63329] text-white font-semibold text-base tracking-[0.04em] py-[14px] px-8 rounded-md cursor-pointer transition-colors duration-150 no-underline inline-block hover:bg-[#C72A21] hover:text-white hover:no-underline"
      href="/pcb-design-services/contact"
    >
      TALK TO OUR ENGINEER
    </a>
  </div>
</div>
</section> */
}
