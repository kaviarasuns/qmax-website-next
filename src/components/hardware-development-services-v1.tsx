import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { OtherCapabilitiesScrollSection } from "@/components/other-capabilities-scroll-section";
import { hwDevelopmentOtherCapabilities as otherCapabilities } from "@/data/other-capabilities";
import { embeddedCaseStudiesData } from "@/store/embedded-case-studies";

const hardwareCaseStudies = embeddedCaseStudiesData
  .slice(0, 4)
  .map((caseStudy) => ({
    title: caseStudy.title,
    image: caseStudy.images[0],
    link: `/case-studies/${caseStudy.id}`,
    category: "development",
    summary: caseStudy.summary,
    imageRotation: caseStudy.rotatedImages?.[0],
  }));

const workflowItems = [
  {
    title: "Concept & Feasibility",
    description: "Product concept and feasibility analysis.",
  },
  {
    title: "Architecture",
    description: "System and hardware architecture definition.",
  },
  {
    title: "Design",
    description:
      "Detailed schematic design, PCB layout, and engineering analysis.",
  },
  {
    title: "Prototyping",
    description: "Prototype build and board bring-up.",
  },
  {
    title: "Validation",
    description: "Functional, environmental, and reliability testing.",
  },
  {
    title: "Certification",
    description: "Pre-compliance, certification, and test coordination.",
  },
  {
    title: "Manufacturing",
    description: "Manufacturing support and lifecycle maintenance.",
  },
];

const capabilities = [
  {
    title: "Digital Hardware Design",
    href: "/hardware-design-services/high-speed-digital-design",
    description:
      "High-performance digital electronics from MCU boards to complex multi-processor systems.",
    highlights: [
      "MCU, MPU, SoC & FPGA platforms",
      "PCIe Gen3/4/5, USB 2.0/3.x, 10G/25G Ethernet",
      "DDR3, DDR4 & DDR5 memory subsystems",
      "HDI, BGA & multi-layer PCBs",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    ),
  },
  {
    title: "Analog & Mixed-Signal",
    href: "/hardware-design-services/analog-design",
    description:
      "Precision analog and mixed-signal design for sensing, measurement, and low-noise applications.",
    highlights: [
      "Low-noise analog front-ends",
      "Pressure, vibration & biomedical sensing",
      "ADC/DAC integration & filtering",
      "EMI-aware analog layout",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M2 12h3l3-9 4 18 3-12 2 6h5" />
      </svg>
    ),
  },
  {
    title: "RF & Microwave",
    href: "/hardware-design-services/rf-and-microwave",
    description:
      "RF designs validated in real-world conditions across ISM, Wi-Fi, BLE, LTE, and Sub-GHz bands.",
    highlights: [
      "RF front-end (LNA, PA, filters)",
      "PCB, external & custom antennas",
      "ISM, Wi-Fi, BLE, LTE protocols",
      "Calibration & EMC-aware layout",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M20.49 4.51a10 10 0 0 1 0 14.14M3.51 19.49a10 10 0 0 1 0-14.14" />
      </svg>
    ),
  },
  {
    title: "Power Electronics",
    href: "/hardware-design-services/power-electronics",
    description:
      "Robust power electronics for industrial, automotive, and energy applications with full thermal margin.",
    highlights: [
      "AC-DC / DC-DC converters & SMPS",
      "Resonant, LLC, CLLC topologies",
      "BMS, chargers & inverters",
      "Thermal & reliability analysis",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const industries = [
  {
    title: "Automotive Electronics",
    image: "/hardware-design/ind-automotive.jpg",
    description:
      "Powertrain control, infotainment, and ADAS sensor electronics designed to AEC-Q100.",
  },
  {
    title: "Medical & Healthcare",
    image: "/hardware-design/ind-medical.jpg",
    description:
      "Patient monitors, point-of-care diagnostics, and wearables developed under IEC 60601 and ISO 13485.",
  },
  {
    title: "Aerospace Systems",
    image: "/hardware-design/ind-aerospace.jpeg",
    description:
      "Avionics interfaces, radar sub-systems, and ruggedized SBCs validated to MIL-STD-810/461 and DO-160.",
  },
  {
    title: "Energy, EV & Power",
    image: "/hardware-design/ind-energy.png",
    description:
      "Battery management systems, on-board chargers, and grid-tied inverters engineered for high efficiency.",
  },
  {
    title: "Industrial Automation",
    image: "/hardware-design/ind-industrial.jpg",
    description:
      "PLC interface boards, motor drives, and IIoT edge nodes engineered for 24/7 factory operation.",
  },
  {
    title: "Defense Electronics",
    image: "/hardware-design/ind-defense.png",
    description:
      "Secure mission computers, tactical radio interfaces, and ground-system controllers built to ITAR workflows.",
  },
];

const insights = [
  {
    category: "PCB Design",
    title: "High-Speed PCB Layout: Controlling Impedance & Crosstalk",
    excerpt:
      "Stack-up planning, return-path discipline, and EMC pre-compliance practices that get a board through certification on the first spin.",
    href: "#",
    thumb: (
      <svg
        viewBox="0 0 400 280"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="pcbBgV1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0E2336" />
            <stop offset="1" stopColor="#0B5FA5" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#pcbBgV1)" />
        <g stroke="#39C2A4" strokeWidth="1.6" fill="none" opacity="0.85">
          <path d="M60 90 L180 90 L210 120 L360 120 L390 90" />
          <path d="M60 150 L120 150 L150 180 L300 180 L330 150 L450 150" />
          <path d="M60 240 L150 240 L180 270 L270 270 L300 240 L420 240" />
        </g>
        <g fill="#FFC857">
          <circle cx="180" cy="90" r="5" />
          <circle cx="360" cy="120" r="5" />
          <circle cx="150" cy="180" r="5" />
          <circle cx="330" cy="150" r="5" />
        </g>
        <rect
          x="230"
          y="165"
          width="140"
          height="120"
          rx="4"
          fill="#1C2A3A"
          stroke="#39C2A4"
          strokeWidth="1.5"
        />
        <text
          x="300"
          y="232"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="14"
          fill="#39C2A4"
          letterSpacing="2"
        >
          QMAX-SOC
        </text>
      </svg>
    ),
  },
  {
    category: "Embedded Systems",
    title: "Hardening Firmware for Functional Safety",
    excerpt:
      "Memory protection, watchdog strategy, and OTA architectures that hold up under ISO 26262 and IEC 62304 audits.",
    href: "#",
    thumb: (
      <svg
        viewBox="0 0 400 280"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <rect width="400" height="280" fill="#1C2A3A" />
        <g>
          <rect x="20" y="20" width="40" height="6" rx="1" fill="#5A6B7B" />
          <rect x="64" y="20" width="120" height="6" rx="1" fill="#39C2A4" />
          <rect x="20" y="34" width="20" height="6" rx="1" fill="#5A6B7B" />
          <rect x="44" y="34" width="80" height="6" rx="1" fill="#FFC857" />
          <rect x="36" y="48" width="60" height="6" rx="1" fill="#0B5FA5" />
          <rect x="100" y="48" width="40" height="6" rx="1" fill="#E63329" />
          <rect x="36" y="62" width="100" height="6" rx="1" fill="#39C2A4" />
          <rect x="20" y="82" width="30" height="6" rx="1" fill="#5A6B7B" />
          <rect
            x="54"
            y="82"
            width="140"
            height="6"
            rx="1"
            fill="#E5E7EB"
            opacity="0.4"
          />
          <rect x="36" y="96" width="80" height="6" rx="1" fill="#0B5FA5" />
          <rect x="120" y="96" width="50" height="6" rx="1" fill="#39C2A4" />
        </g>
        <text
          x="295"
          y="32"
          fontFamily="monospace"
          fontSize="10"
          fill="#39C2A4"
        >
          {"// RTOS task"}
        </text>
        <text
          x="295"
          y="50"
          fontFamily="monospace"
          fontSize="10"
          fill="#E5E7EB"
        >
          priority: 3
        </text>
        <text
          x="295"
          y="68"
          fontFamily="monospace"
          fontSize="10"
          fill="#FFC857"
        >
          RUNNING
        </text>
      </svg>
    ),
  },
  {
    category: "Mechanical & Industrial",
    title: "Designing Enclosures That Survive: DFM & IP-Rated Sealing",
    excerpt:
      "How early CAD-to-CAE collaboration on the mechanical envelope avoids the late-stage rework that derails most hardware programs.",
    href: "#",
    thumb: (
      <svg
        viewBox="0 0 400 280"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="mechBgV1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F5F0E8" />
            <stop offset="1" stopColor="#E5DDD0" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#mechBgV1)" />
        <g stroke="#C8B79C" strokeWidth="0.5" opacity="0.5">
          <line x1="0" y1="40" x2="400" y2="40" />
          <line x1="0" y1="80" x2="400" y2="80" />
          <line x1="0" y1="120" x2="400" y2="120" />
          <line x1="0" y1="160" x2="400" y2="160" />
          <line x1="40" y1="0" x2="40" y2="280" />
          <line x1="80" y1="0" x2="80" y2="280" />
          <line x1="120" y1="0" x2="120" y2="280" />
          <line x1="160" y1="0" x2="160" y2="280" />
          <line x1="200" y1="0" x2="200" y2="280" />
          <line x1="240" y1="0" x2="240" y2="280" />
        </g>
        <g transform="translate(120 80)">
          <polygon
            points="0,40 80,0 200,0 200,100 120,140 0,140"
            fill="#3A4A5A"
          />
          <polygon
            points="0,40 80,0 200,0 120,40 0,40"
            fill="#5A6B7B"
            opacity="0.9"
          />
          <polygon
            points="200,0 200,100 120,140 120,40"
            fill="#0E1822"
            opacity="0.85"
          />
          <g stroke="#39C2A4" strokeWidth="1" opacity="0.6">
            <line x1="20" y1="60" x2="100" y2="60" />
            <line x1="20" y1="74" x2="100" y2="74" />
            <line x1="20" y1="88" x2="100" y2="88" />
          </g>
          <circle cx="60" cy="125" r="3" fill="#E63329" />
          <circle cx="60" cy="125" r="6" fill="#E63329" opacity="0.3" />
        </g>
        <text
          x="220"
          y="258"
          fontFamily="monospace"
          fontSize="10"
          fill="#1C2A3A"
        >
          180 mm
        </text>
      </svg>
    ),
  },
];

const technicalFaq = [
  {
    title: "General Services & Engagement",
    items: [
      {
        q: "1. Do you provide end-to-end hardware development?",
        a: "Yes. From early architecture to certified, production-ready hardware, we handle the full lifecycle.",
      },
      {
        q: "2. Where are your engineering teams located?",
        a: "We operate with a full-fledged engineering team in Chennai, India, and have a sales presence in the USA.",
      },
      {
        q: "3. Do you support manufacturing and scaling?",
        a: "Yes. We support Design for Manufacturability (DFM), vendor coordination, pilot builds, and volume production handover.",
      },
      {
        q: "4. Do you offer initial consultations?",
        a: "Yes. We offer a free one-hour consultation with a senior engineer or hardware architect to validate feasibility and identify technical risks.",
      },
    ],
  },
  {
    title: "Intellectual Property & Security",
    items: [
      {
        q: "5. Who owns the Intellectual Property (IP)?",
        a: "Unless otherwise agreed, 100% of the IP ownership belongs to the customer.",
      },
      {
        q: "6. How do you protect customer IP?",
        a: "We sign NDAs with customers, employees, and vendors. Our security measures include secure IT infrastructure (firewalls, VPN), need-to-know access control, and controlled physical access.",
      },
    ],
  },
  {
    title: "Technical & Testing Capabilities",
    items: [
      {
        q: "7. What specific compliance standards can you help with?",
        a: "We support readiness for major global standards including FCC, CE, IEC, UL, and BIS.",
      },
      {
        q: "8. Do you perform testing in-house?",
        a: "Yes. We have internal labs for functional validation, thermal cycling, and environmental stress testing. For final certification, we coordinate with NABL-certified laboratories.",
      },
      {
        q: "9. Do you build prototypes?",
        a: "Yes. We maintain dedicated facilities for prototype PCB assembly, rework, and mechanical fixture creation to speed up development.",
      },
      {
        q: "10. Do you support product maintenance after design?",
        a: "Yes. We offer lifecycle maintenance services to support your product long after the initial design is complete.",
      },
    ],
  },
];

export default function HardwareDevelopmentServicesComponentV1() {
  const hardwareFaqs = technicalFaq.flatMap((group) => group.items);

  return (
    <main className="bg-slate-100 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(148,163,184,0.08),transparent_54%),radial-gradient(circle_at_85%_10%,rgba(20,184,166,0.03),transparent_48%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-slate-200 bg-white/90 px-4 py-1 text-xs uppercase text-muted-foreground">
              Hardware Development Services
            </p>
            <h1 className="mt-6 text-4xl leading-tight text-slate-900 md:text-5xl">
              The Complete Hardware Product Lifecycle
            </h1>

            <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700 md:text-base">
              <p>
                We provide full hardware lifecycle ownership, taking your
                product from early requirement analysis to production handover.
                Our lifecycle-driven approach minimizes risk, shortens
                development cycles, and ensures compliance readiness from day
                one.
              </p>

              <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white md:h-[420px]">
                <Image
                  src="/hw-main/image1.png"
                  alt="Hardware product lifecycle planning and development"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <p>
                <span className="text-slate-900">The Qmax Advantage:</span> Our
                development methodology is built on a well-defined,
                architecture-first approach that prioritizes early risk
                identification. By utilizing rigorous requirement-driven design
                processes, our experienced project managers ensure that complex
                lifecycles are navigated smoothly. This structured workflow
                allows us to catch potential issues early, keeping your project
                on schedule and budget while eliminating the chaos often
                associated with hardware R&amp;D.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-3xl text-slate-900">
          Our End-to-End Workflow Includes
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workflowItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
            >
              <p className="text-xs uppercase text-sky-700">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-base text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CORE ENGINEERING CAPABILITIES - single screen */}
      <section className="flex min-h-screen items-center border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
          <header className="mb-10">
            <p className="text-xs uppercase text-sky-700">
              Engineering Stack
            </p>
            <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
              Core Engineering Capabilities
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 md:text-base text-muted-foreground">
              We deliver high-performance designs validated by decades of
              experience across four critical engineering domains.
            </p>
          </header>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((cap) => (
              <article
                key={cap.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  {cap.icon}
                </div>
                <h3 className="text-lg text-slate-900">{cap.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {cap.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                  {cap.highlights.map((point) => (
                    <li key={point} className="flex gap-2 text-left">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-700" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <Link
                    href={cap.href}
                    className="inline-flex items-center gap-1.5 text-sm text-sky-700 hover:text-sky-800"
                  >
                    Know More
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LABS + COMPLIANCE - compact two-column block */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-xl text-slate-900">
                Labs &amp; Engineering Infrastructure
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                In-house electronics and environmental laboratories for rapid
                debug, prototype assembly, and validation - reducing dependency
                on external facilities during development.
              </p>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                <li>High-bandwidth oscilloscopes (Keysight, R&amp;S)</li>
                <li>Spectrum analyzers &amp; CMW-500 RF testers</li>
                <li>Temperature, thermal cycling &amp; acoustic chambers</li>
                <li>Prototype PCB assembly &amp; rework</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-xl text-slate-900">
                Compliance, Certification &amp; Quality
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We design for compliance from day one - partnering with
                NABL-certified labs and operating under ISO 9001 and ISO 13485
                quality systems for traceable, audit-ready delivery.
              </p>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                <li>FCC, CE, IEC, UL, BIS readiness</li>
                <li>ISO 9001 &amp; ISO 13485 processes</li>
                <li>Structured design reviews</li>
                <li>Configuration management &amp; traceability</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE - single screen */}
      <section className="flex min-h-screen items-center bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
          <header className="mb-10 text-center">
            <p className="text-xs uppercase text-sky-700">
              Domains
            </p>
            <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
              Industries We Serve
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 md:text-base text-muted-foreground">
              Multi-domain hardware development with design rigor and
              documentation depth calibrated to each industry&apos;s regulatory
              and reliability bar.
            </p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <article
                key={ind.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-base text-white">
                    {ind.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {ind.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* READY TO BUILD - CTA */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_6px_30px_rgba(15,23,42,0.08)] md:p-10">
          <h2 className="text-3xl text-slate-900">
            Ready to Build Your Hardware?
          </h2>
          <p className="mt-4 text-sm leading-7 md:text-base text-muted-foreground">
            <span className="text-slate-900">
              Free 1-Hour Hardware Consulting
            </span>{" "}
            Speak with a senior hardware architect to review your architecture
            and validate feasibility before you commit to development.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-sky-700 px-5 py-3 text-sm text-white transition hover:bg-sky-800"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* CUSTOMER SUCCESS STORIES - single screen */}
      <ServiceCaseStudiesSection
        title="Customer Success Stories"
        eyebrow="Hardware Programs"
        studies={hardwareCaseStudies}
        className="flex min-h-screen items-center bg-[#fcfcfc] border-t border-zinc-200 py-14"
      />

      {/* INSIGHTS FROM OUR ENGINEERS - single screen */}
      <section className="flex min-h-screen items-center border-t border-slate-200 bg-slate-50/80">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
          <header className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="inline-flex items-center gap-2 text-xs uppercase text-sky-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Featured Articles
              </p>
              <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
                Insights from Our Engineers
              </h2>
              <div className="mt-3 h-0.5 w-16 bg-sky-700" />
            </div>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((article) => (
              <article
                key={article.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                  {article.thumb}
                </div>
                <p className="mt-4 text-xs uppercase text-muted-foreground">
                  Article · {article.category}
                </p>
                <h3 className="mt-2 text-lg leading-snug text-slate-900 transition-colors group-hover:text-sky-700">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {article.excerpt}
                </p>
                <Link
                  href={article.href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm text-sky-700 hover:text-sky-800"
                >
                  Read article
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={hardwareFaqs} />
      <OtherCapabilitiesScrollSection capabilities={otherCapabilities} />
    </main>
  );
}
