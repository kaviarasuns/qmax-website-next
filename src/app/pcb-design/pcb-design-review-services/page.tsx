import type { Metadata } from "next";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { pcbCaseStudiesData } from "@/store/pcb-case-studies";

const pcbCaseStudies = pcbCaseStudiesData.slice(0, 4).map((caseStudy) => ({
  title: caseStudy.title,
  image: caseStudy.images[0],
  link: `/case-studies/${caseStudy.id}`,
  category: "development",
  summary: caseStudy.summary,
  imageRotation: caseStudy.rotatedImages?.[0],
}));

export const metadata: Metadata = {
  title: "PCB Design Review Services | Qmax Systems",
  description:
    "Qmax Systems provides structured, engineering-led Design Review Services that identify and resolve schematic errors, layout violations, and compliance gaps before they reach production.",
};

export default function PCBDesignReviewServicesPage() {
  return (
    <main className="bg-[#fcfcfc] text-zinc-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-14 pb-12 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(243,49,23,0.02),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Full-width Image Container */}
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-zinc-200 group">
            <Image
              src="/pcb-design-review-services/image1.png"
              alt="PCB Design Review Services - Qmax Systems"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-5xl">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-6">
                PCB DESIGN SERVICES
              </span>
              <h1 className="text-4xl font-light leading-[1.1] text-zinc-950 md:text-6xl lg:text-7xl tracking-tight">
                Design Review
                <br className="hidden md:block" />
                Services.
              </h1>
            </div>
          </div>

          {/* Core Introduction Content */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 border-t border-zinc-200 pt-16">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-400">
                / Introduction
              </h2>
            </div>
            <div className="space-y-12 text-xl leading-[1.6] text-zinc-600 font-light max-w-3xl">
              <p className="text-zinc-950 font-normal text-2xl md:text-3xl leading-snug">
                Electronic product development rarely proceeds from first-pass
                design to production without defects. Schematic errors, layout
                violations, obsolete components, and regulatory gaps are among
                the costliest issues discovered late in a program.
              </p>
              <p>
                Qmax Systems provides structured, engineering-led Design Review
                Services that identify and resolve these issues before they
                reach the factory floor, the test lab, or the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Process Details */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <h2 className="text-4xl font-light text-zinc-950 md:text-6xl tracking-tighter">
                Actionable <br /> Findings.
              </h2>
              <div className="h-1 w-24 bg-[#F33117]" />
              <p className="text-xl leading-relaxed text-zinc-600 font-light">
                Our review process is grounded in decades of industrial
                electronics engineering experience across power electronics,
                embedded systems, high-speed digital design, RF, and
                mixed-signal architectures.
              </p>
            </div>
            <div className="space-y-12 pt-4">
              <div className="border-l-2 border-zinc-200 pl-8 space-y-8">
                <p className="text-lg text-zinc-700 font-light leading-relaxed">
                  We apply IPC standards, IEC requirements, and OEM-specific
                  design rules to every engagement, delivering actionable
                  findings — not just observations.
                </p>
                <p className="text-lg text-zinc-500 font-light leading-relaxed">
                  Whether you are launching a first IoT product, revising a
                  legacy industrial controller, or migrating a platform to a new
                  processor family, our engineers apply the same rigorous
                  methodology.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                {[
                  {
                    title: "Schematic Integrity",
                    items: ["Netlist validation", "Component lifecycle checks"],
                  },
                  {
                    title: "Layout & SI",
                    items: ["Trace impedance", "Return path integrity"],
                  },
                  {
                    title: "Regulatory",
                    items: ["EMI/EMC readiness", "Safety clearances"],
                  },
                  {
                    title: "DFx",
                    items: ["Manufacturing yield", "Assembly feasibility"],
                  },
                ].map((category, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117]">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-zinc-500 font-medium"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schematic Review Section */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24 text-left">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.1 / SCHEMATIC REVIEW
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              Circuit Correctness, Protection & Functional Verification.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-zinc-700 font-light">
                A schematic is the definitive electrical specification of a
                product. Errors at this stage propagate through every downstream
                activity.
              </p>
              <p className="text-lg leading-relaxed text-zinc-500 font-light">
                Our schematic review service provides a systematic audit of
                circuit correctness, component selection, and protective
                circuitry.
              </p>

              <div className="mt-12 bg-zinc-100/50 border border-zinc-200 p-8">
                <span className="text-[10px] font-black tracking-[0.4em] text-zinc-400 block mb-4 uppercase">
                  DELIVERABLE
                </span>
                <p className="text-[#F33117] font-light text-lg">
                  Redlined schematic PDF with itemized findings, severity
                  classification (Critical / Major / Minor), and corrective
                  recommendations.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div className="relative aspect-video w-full overflow-hidden border border-zinc-200 transition-all duration-1000">
                <Image
                  src="/pcb-design-review-services/image2.png"
                  alt="Schematic Review Verification - Qmax Systems"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500">
                  / Scope of Review
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 group">
                  {[
                    {
                      t: "Circuit Verification",
                      d: "Power rail topology, signal path integrity, and feedback loop analysis.",
                    },
                    {
                      t: "Component Validation",
                      d: "Voltage/current ratings, temperature derating, and tolerance stack-up.",
                    },
                    {
                      t: "Protection Circuits",
                      d: "ESD, OVP, OCP, reverse-polarity, and thermal shutdown logic.",
                    },
                    {
                      t: "Power Integrity",
                      d: "Decoupling logic, bulk sizing, and LDO/DC-DC sequencing.",
                    },
                    {
                      t: "Supervisory Review",
                      d: "Power-on reset timing, watchdog enable, and brownout detection.",
                    },
                    {
                      t: "Interface Compliance",
                      d: "I2C/SPI pull-ups, UART accuracy, and differential termination.",
                    },
                    {
                      t: "Clock Distribution",
                      d: "Oscillator loading, fanout buffering, and PLL filter selection.",
                    },
                    {
                      t: "Grounding & Isolation",
                      d: "Chassis vs. digital ground, and galvanic isolation barriers.",
                    },
                    {
                      t: "Annotation Quality",
                      d: "RefDes, net labels, and title block accuracy for production.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group border-b border-zinc-100 pb-8 hover:border-zinc-300 transition-colors"
                    >
                      <h4 className="text-zinc-900 text-lg font-light mb-3 group-hover:text-[#F33117] transition-colors">
                        {item.t}
                      </h4>
                      <p className="text-sm text-zinc-500 leading-relaxed font-light">
                        {item.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCB Design Review Section */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24 text-left">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.2 / PCB DESIGN REVIEW
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              Functionality, DFM, DFA & DFx.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-start">
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-zinc-700 font-light max-w-2xl">
                A verified schematic does not guarantee a manufacturable or
                reliable PCB. Our layout review applies IPC-2221/2222 standards
                alongside manufacturer-specific DFM rule sets.
              </p>

              <div className="grid grid-cols-1 gap-1">
                {[
                  {
                    s: "Functionality Review",
                    d: "SI/PI checks, return path continuity, controlled-impedance stack-up, and high-speed net length matching.",
                  },
                  {
                    s: "DFM — Manufacturing",
                    d: "Trace width/spacing vs. fab minimums, via annular rings, copper pour relief, and panel utilization.",
                  },
                  {
                    s: "DFA — Assembly",
                    d: "Component courtyard clearance, SMD/THT mix strategy, IPC-7711 rework access, and fiducial placement.",
                  },
                  {
                    s: "DFT — Testing",
                    d: "Bed-of-nails test-point coverage, JTAG/SWD boundary-scan accessibility, and functional test placement.",
                  },
                  {
                    s: "DFR — Reliability",
                    d: "Via-in-pad treatment, copper-to-edge clearance, and BGA ball pitch vs. stack-up compatibility.",
                  },
                  {
                    s: "DFS — Service",
                    d: "Field-replaceable unit identification, connector labeling, and firmware update interface availability.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-8 border-t border-zinc-100 hover:bg-zinc-50 transition-colors px-4"
                  >
                    <h4 className="text-[#F33117] text-sm font-black uppercase tracking-widest">
                      {item.s}
                    </h4>
                    <p className="text-zinc-600 font-light leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-zinc-200 transition-all duration-1000">
                <Image
                  src="/pcb-design-review-services/image3.png"
                  alt="PCB Layout Review & DFx - Qmax Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-l border-zinc-200 pl-8">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-6">
                  / Standards Applied
                </h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  We evaluate boards against IPC-2221, IPC-2222, and
                  IPC-7711/7721 class standards to evaluate fabrication yield,
                  assembly quality, and field reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reverse Engineering Section */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.3 / REVERSE ENGINEERING
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              PCBA to CAD and <br /> Schematics.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-zinc-300 font-light max-w-2xl">
                When original design data is unavailable — due to supplier
                closure, legacy asset acquisition, or disaster recovery — Qmax
                Systems reconstructs complete, accurate engineering
                documentation from physical hardware.
              </p>

              <div className="space-y-8 pt-8">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">
                  / Internal Capabilities
                </h3>
                <div className="space-y-0 translate-x-[-1px]">
                  {[
                    "BOM extraction from populated PCBAs.",
                    "X-ray and layer-peel analysis for stack-up reconstruction.",
                    "Net tracing and schematic regeneration.",
                    "CAD database creation in Altium, Allegro, PADS, and KiCad.",
                    "3D mechanical model generation for enclosures.",
                    "Firmware extraction via JTAG, SWD, and ISP boot interfaces.",
                  ].map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-6 border-t border-zinc-100 py-6 group hover:bg-zinc-50 px-4 transition-colors"
                    >
                      <span className="text-[#F33117] font-mono text-[10px] pt-1">
                        0{idx + 1}
                      </span>
                      <p className="text-lg text-zinc-600 font-light group-hover:text-zinc-950 transition-colors">
                        {cap}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 bg-zinc-100/40 p-8 border border-zinc-200">
                <p className="text-sm text-zinc-400 italic mb-6">
                  Design data is reconstructed for legally permissible
                  applications only.
                </p>
                <a
                  href="/pcb-design"
                  className="inline-flex items-center gap-2 text-[#F33117] group uppercase text-[10px] font-black tracking-widest border-b border-[#F33117] pb-2 hover:text-zinc-950 hover:border-zinc-950 transition-all"
                >
                  SEE OUR PCBS DESIGN SERVICES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-16">
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-zinc-200 transition-all duration-1000">
                <Image
                  src="/pcb-design-review-services/image4.png"
                  alt="Board Layer-Peel & Reverse Engineering - Qmax Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-l-2 border-[#F33117] pl-8">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6 block">
                  FULL DOCUMENTATION PACKAGE
                </span>
                <p className="text-xl text-zinc-950 font-light leading-relaxed">
                  Deliverables include the BOM, full Schematics, high-fidelity
                  PCB Layout files, and detailed Mechanical Drawings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Services Section */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.4 / CONVERSION SERVICES
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              PDF, Scanned & <br /> Gerber to CAD.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-start">
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-zinc-300 font-light max-w-3xl">
                Engineering records in raster formats, scanned drawings, or
                Gerber outputs are converted to native EDA formats for
                modification, re-release, or redesign base.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 group">
                {[
                  {
                    t: "PDF to EDA-Native",
                    d: "Net-accurate, symbol-verified conversion from PDF schematics to Altium/Allegro.",
                  },
                  {
                    t: "Scanned Drawing to CAD",
                    d: "Digital reconstruction of paper-based schematics and mechanical drawings.",
                  },
                  {
                    t: "Gerber to Database",
                    d: "RS-274X + drill data to routed PCB layout database with verified net list.",
                  },
                  {
                    t: "ODB++ to Native",
                    d: "Full design database reconstruction from ODB++ manufacturing packages.",
                  },
                  {
                    t: "Aperture Mapping",
                    d: "Precise copper reconstruction and layer stackup definition for multilayer boards.",
                  },
                  {
                    t: "Cross-Validation",
                    d: "Net extraction validated against available BOM or schematic fragments.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group border-b border-zinc-100 pb-8 hover:border-zinc-300 transition-colors"
                  >
                    <h4 className="text-zinc-900 text-lg font-light mb-3 group-hover:text-[#F33117] transition-colors">
                      {item.t}
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-[#F33117]/5 p-8 border border-[#F33117]/10">
                <span className="text-[10px] font-black tracking-[0.4em] text-[#F33117] block mb-4 uppercase">
                  VALIDATION POLICY
                </span>
                <p className="text-zinc-700 font-light text-lg">
                  Deliverable includes the EDA source files and a comprehensive
                  conversion accuracy report verifying net-list accuracy and DRC
                  compliance.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-800 transition-all duration-1000">
                <Image
                  src="/pcb-design-review-services/image5.png"
                  alt="CAD Data Conversion Services - Qmax Systems"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toolchain Migration Section */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.5 / TOOLCHAIN MIGRATION
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              CAD Tool Translation & <br /> Platform Migration.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-zinc-600 font-light">
                Enterprise EDA toolchain consolidations or licensing transitions
                require reliable translation of design databases. We eliminate
                subtle errors like net connectivity breaks and lost design
                rules.
              </p>

              <div className="space-y-6 pt-4">
                {[
                  "Altium to Cadence Allegro / OrCAD",
                  "Mentor PADS / Xpedition to Altium Designer",
                  "KiCad to Professional EDA Platforms",
                  "Legacy (ORCAD / P-CAD / PROTEL) Migration",
                  "Library Translation & Footprint Verification",
                  "DRC/ERC Constraint Re-Creation",
                  "Net-list Equivalency Verification",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 text-zinc-500 hover:text-zinc-950 transition-colors duration-300 group"
                  >
                    <div className="h-1 w-1 bg-[#F33117] rounded-full group-hover:w-4 transition-all" />
                    <p className="text-lg font-light">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href="/pcb-design"
                  className="inline-flex items-center gap-2 text-[#F33117] group uppercase text-[10px] font-black tracking-widest border-b border-[#F33117] pb-2 hover:text-zinc-950 hover:border-zinc-950 transition-all"
                >
                  FULL PCB DESIGN SERVICES OVERVIEW
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-16">
              <div className="relative aspect-video w-full overflow-hidden border border-zinc-200 transition-all duration-1000">
                <Image
                  src="/pcb-design-review-services/image6.png"
                  alt="EDA Toolchain Translation - Qmax Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-l border-zinc-200 pl-8 space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">
                  / Translation Strategy
                </h3>
                <p className="text-zinc-500 font-light leading-relaxed">
                  Our process migrates stack-up configurations, impedance
                  profiles, and constraint sets directly into the target
                  environment, followed by exhaustive net-list cross-validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BoM Optimization & DVT Sections */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* BoM Optimization (1.6) */}
            <div className="space-y-12">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8 block">
                  PHASE 1.6 / BoM OPTIMIZATION
                </span>
                <h2 className="text-4xl font-light text-zinc-950 tracking-tighter mb-8 leading-tight">
                  Cost Reduction & <br /> Obsolescence.
                </h2>
                <p className="text-zinc-500 font-light leading-relaxed mb-12">
                  Component volatility directly impacts program schedule. A BoM
                  with single-source dependencies or EOL parts carries
                  unacceptable supply chain risk.
                </p>
                <div className="space-y-6">
                  {[
                    "Lifecycle analysis (NRND, Obsolete, EOL)",
                    "Alternate sourcing & parametric equivalency",
                    "Cost optimization & functional substitution",
                    "Single-source risk mitigation strategy",
                    "REACH, RoHS, and Conflict Minerals compliance",
                    "Vendor List (AVL) development",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center group">
                      <div className="h-[1px] w-4 bg-zinc-200 group-hover:bg-[#F33117] transition-colors" />
                      <span className="text-zinc-500 group-hover:text-zinc-950 transition-colors font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 bg-zinc-100/50 p-6 border border-zinc-200">
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2 font-black">
                    DELIVERABLE
                  </p>
                  <p className="text-sm text-zinc-600 font-light">
                    Redlined BoM with lifecycle status, alternates, and cost
                    delta analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Design Validation (1.7) */}
            <div className="space-y-12 border-l border-zinc-100 pl-4 lg:pl-12">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8 block">
                  PHASE 1.7 / DESIGN VALIDATION
                </span>
                <h2 className="text-4xl font-light text-zinc-950 tracking-tighter mb-8 leading-tight">
                  DVT Planning & <br /> Execution.
                </h2>
                <p className="text-zinc-500 font-light leading-relaxed mb-12">
                  Passing design review does not confirm performance under real
                  conditions. We verify hardware meets functional and
                  reliability requirements.
                </p>
                <div className="space-y-6">
                  {[
                    "DVT test plan development (IEC 60068, MIL-STD-810)",
                    "Power-up sequencing & communications verification",
                    "Environmental stress screening (Thermal, Humidity, Vibe)",
                    "EMI pre-compliance radiated/conducted support",
                    "Electrical safety parameter (Isolation, Leakage) audit",
                    "Failure analysis & root cause investigation",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center group">
                      <div className="h-[1px] w-4 bg-zinc-200 group-hover:bg-[#F33117] transition-colors" />
                      <span className="text-zinc-500 group-hover:text-zinc-950 transition-colors font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 bg-zinc-100/50 p-6 border border-zinc-200">
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2 font-black">
                    DELIVERABLE
                  </p>
                  <p className="text-sm text-zinc-600 font-light">
                    Comprehensive DVT report with pass/fail status and
                    corrective tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Remediation Section (1.8) */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.8 / COMPLIANCE REMEDIATION
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              Compliance Test <br /> Failure Resolution.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-start">
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-zinc-700 font-light max-w-3xl">
                Failures at certification labs are disruptive and expensive. We
                provide systematic root cause analysis and design correction for
                EMI, EMC, and electrical safety failures.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-200 pt-12">
                <div className="space-y-6">
                  <h3 className="text-sm font-black text-[#F33117] uppercase tracking-widest">
                    Domains Supported
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "CE Marking (EMC, LVD, RED)",
                      "FCC Part 15B/15C/68",
                      "IEC 61000 Series",
                      "IEC 62368-1 / 60950-1",
                    ].map((s, i) => (
                      <li
                        key={i}
                        className="text-zinc-500 text-sm font-light border-b border-zinc-200 pb-2"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-sm font-black text-[#F33117] uppercase tracking-widest">
                    Remediation Types
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Filter topology correction",
                      "Guard trace & Plane revision",
                      "Common-mode suppressions",
                      "Firmware (Spread-spectrum)",
                    ].map((s, i) => (
                      <li
                        key={i}
                        className="text-zinc-500 text-sm font-light border-b border-zinc-200 pb-2"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <div className="relative aspect-square w-full overflow-hidden border border-zinc-200 transition-all duration-1000">
                <Image
                  src="/pcb-design-review-services/image7.png"
                  alt="Compliance Failure Testing - Qmax Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-zinc-500 font-light italic text-center">
                Qmax delivers corrected design files and a full pre-submission
                test report to ensure formal pass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Updates Section (1.9) */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.9 / REGULATORY UPDATES
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              Design for Evolution & <br /> Compliance Updates.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-zinc-700 font-light max-w-2xl">
                Regulatory requirements for electronic products continue to
                evolve. Cybersecurity mandates and energy efficiency standards
                require periodic design updates to maintain market access.
              </p>
              <div className="bg-[#F33117]/5 p-8 border-l-2 border-[#F33117]">
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  We help you navigate the EU Cyber Resilience Act (CRA), RED
                  (ETSI EN 303 645), and the transition to UKCA from CE marking.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  t: "Cyber Resilience Act (CRA)",
                  d: "Full gap analysis for connected products.",
                },
                {
                  t: "RoHS 3 (2015/863)",
                  d: "Substance restriction impact assessment.",
                },
                {
                  t: "EU Battery Reg (2023/1542)",
                  d: "Design & documentation updates.",
                },
                {
                  t: "ErP Directive",
                  d: "Energy efficiency requirement updates.",
                },
                {
                  t: "UKCA Marking",
                  d: "Transition from CE for the UK market.",
                },
                {
                  t: "FCC RF Device Security",
                  d: "SDR and security requirement audits.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border-t border-zinc-200 pt-8 group">
                  <h3 className="text-[#F33117] text-[10px] font-black uppercase tracking-widest mb-4">
                    {item.t}
                  </h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed hover:text-zinc-950 transition-colors">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teardown Analysis Section (1.10) */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.10 / TEARDOWN ANALYSIS
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              Engineering-Grade <br /> Teardown Analysis.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-start">
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-zinc-700 font-light max-w-3xl">
                Competitive intelligence, failure investigation, and
                manufacturing process benchmarking require a structured teardown
                analysis. We deliver findings at the component, subsystem, and
                system level.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 group">
                {[
                  {
                    t: "Mechanical Record",
                    d: "Disassembly documentation with photographic evidence.",
                  },
                  {
                    t: "PCBA Identification",
                    d: "Component-level BoM extraction and source analysis.",
                  },
                  {
                    t: "Process Assessment",
                    d: "PCB class, assembly quality indicators, and coating audits.",
                  },
                  {
                    t: "COGS Estimation",
                    d: "Price-of-goods-sold estimation from component data.",
                  },
                  {
                    t: "Thermal Strategy",
                    d: "Approach documentation for thermal management.",
                  },
                  {
                    t: "Software Inference",
                    d: "Architecture inference from hardware observations.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group border-b border-zinc-100 pb-8 hover:border-zinc-300 transition-colors"
                  >
                    <h4 className="text-zinc-900 text-lg font-light mb-3 group-hover:text-[#F33117] transition-colors">
                      {item.t}
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              <div className="border-l border-zinc-800 pl-8 space-y-12">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-6">
                    / BENCHMARKING REPORT
                  </h3>
                  <p className="text-zinc-600 font-light leading-relaxed">
                    Our deliverables include a comprehensive competitive
                    benchmarking report against reference design metrics and
                    industry standards.
                  </p>
                </div>
                <div className="h-[1px] w-full bg-zinc-900" />
                <p className="text-sm text-zinc-500 italic">
                  Critical for IP due diligence and competitive manufacturing
                  intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Migration Section (1.11) */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.11 / PLATFORM MIGRATION
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              Legacy Systems to <br /> New Platforms.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-zinc-700 font-light max-w-2xl">
                Industrial and embedded systems frequently remain in production
                long after the silicon depends on reaches end-of-life. We
                re-evaluate and migrate entire stacks to supported platforms.
              </p>

              <div className="space-y-8 pt-8">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500">
                  / Migration Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      t: "Legacy System Audit",
                      d: "Architecture, firmware dependencies, and interface inventory.",
                    },
                    {
                      t: "Target Selection",
                      d: "Processor benchmarking, BSP availability, and supply chain outlook.",
                    },
                    {
                      t: "Hardware Re-design",
                      d: "Schematic revision and power budget recalculation.",
                    },
                    {
                      t: "Portability Assessment",
                      d: "Toolchain migration, HAL layer changes, and RTOS compatibility.",
                    },
                    {
                      t: "Regression Testing",
                      d: "Development and execution of full functional equivalency tests.",
                    },
                    {
                      t: "Production Qualification",
                      d: "DVT and EMC re-validation for formal regulatory release.",
                    },
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <span className="text-[#F33117] text-xs font-black pt-1">
                        /
                      </span>
                      <div>
                        <h4 className="text-zinc-900 font-medium mb-1 group-hover:text-[#F33117] transition-colors">
                          {step.t}
                        </h4>
                        <p className="text-sm text-zinc-500 font-light">
                          {step.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 border-l-2 border-zinc-800 pl-8 space-y-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  Common Scenarios
                </span>
                <p className="text-zinc-400 font-light leading-relaxed">
                  8-bit MCU to ARM Cortex-M, legacy FPGA (Xilinx Spartan-3,
                  Altera Cyclone-II) to current-gen, and EOL single-board
                  computer platforms.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div className="relative aspect-video w-full overflow-hidden border border-zinc-200 transition-all duration-1000">
                <Image
                  src="/pcb-design-review-services/image6.png"
                  alt="Platform Migration & Modernization - Qmax Systems"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firmware Porting Section (1.12) */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 1.12 / FIRMWARE PORTING
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              Software & Firmware <br /> Porting Services.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <p className="text-xl leading-relaxed text-zinc-700 font-light max-w-2xl">
                Firmware and embedded software tightly coupled to specific
                silicon architectures present significant migration challenges.
                We provide structured porting services that transfer functional
                behavior to new targets while maintaining testability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 group">
                {[
                  {
                    t: "Bare-Metal Porting",
                    d: "ARM Cortex-M variants (M0/M0+/M3/M4/M7/M33/M55).",
                  },
                  {
                    t: "RTOS Migration",
                    d: "FreeRTOS, Zephyr, ThreadX, uC/OS, VxWorks, Linux.",
                  },
                  {
                    t: "HAL & BSP",
                    d: "Re-implementation for target processor peripheral set.",
                  },
                  {
                    t: "Driver Porting",
                    d: "UART, SPI, I2C, CAN, Ethernet, USB, ADC, DAC, PWM, DMA.",
                  },
                  {
                    t: "Stacks",
                    d: "TCP/IP, MQTT, Modbus, CANopen, EtherCAT migration.",
                  },
                  {
                    t: "Bootloaders",
                    d: "Secure firmware update (FOTA/OTA) implementation.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group border-b border-zinc-100 pb-8 hover:border-zinc-300 transition-colors"
                  >
                    <h4 className="text-zinc-900 text-lg font-light mb-3 group-hover:text-[#F33117] transition-colors">
                      {item.t}
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-16">
              <div className="border-l-2 border-[#F33117] pl-8 space-y-12">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-6">
                    / COMPILER & ANALYSIS
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    Our porting process includes full compiler toolchain
                    migration (GCC, IAR, Keil, LLVM) and rigorous static
                    analysis to ensure code quality post-migration.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "GCC / LLVM",
                    "IAR EWARM",
                    "Keil MDK",
                    "Static Analysis",
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="bg-zinc-100/50 p-4 border border-zinc-200 text-center text-[10px] font-black uppercase tracking-widest text-zinc-400 group hover:text-[#F33117] hover:border-[#F33117] transition-all"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Qmax Systems Section (2.0 & 2.1) */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
            <div className="space-y-12">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117]">
                PHASE 2 / WHY QMAX SYSTEMS
              </span>
              <h2 className="text-4xl font-light text-zinc-950 md:text-6xl tracking-tighter leading-tight">
                Methodical. <br /> Defensible. <br /> Proven.
              </h2>
              <div className="bg-zinc-100 p-8 border border-zinc-200">
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  Our review methodology is structured to detect
                  high-consequence failure modes that automated DRC/LVS tools
                  routinely miss.
                </p>
              </div>
            </div>
            <div className="space-y-24">
              <div className="relative aspect-[16/6] w-full overflow-hidden border border-zinc-200">
                <Image
                  src="/pcb-design-review-services/image7.png"
                  alt="Industrial Design Review - Qmax Systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc]/50 to-transparent flex items-end p-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#F33117]">
                    BEYOND AUTOMATED CHECKLISTS
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-24 border-t border-zinc-200">
            {/* Breadth (2.2) */}
            <div className="space-y-6">
              <h3 className="text-[#F33117] text-[10px] font-black uppercase tracking-widest pb-4 border-b border-zinc-200">
                2.2 / Breadth Across the Stack
              </h3>
              <p className="text-zinc-600 font-light leading-relaxed">
                We assemble multi-discipline review teams matched to the
                specific complexity profile of each engagement—covering
                mechanical, power, digital, RF, and firmware.
              </p>
            </div>

            {/* Standards (2.3) */}
            <div className="space-y-6 lg:col-span-2">
              <h3 className="text-[#F33117] text-[10px] font-black uppercase tracking-widest pb-4 border-b border-zinc-200">
                2.3 / Standards-Grounded Methodology
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-zinc-600 font-light leading-relaxed">
                  Every finding is documented against published IPC, IEC, IEEE,
                  and JEDEC clauses, providing defensible records for regulatory
                  submissions and internal quality audits.
                </p>
                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "IPC-2221B (Generic PCB Design)",
                    "IPC-7711/7721 (Rework & Repair)",
                    "IPC-A-610 (Assembly Acceptability)",
                    "IEC 61000 (Electromagnetic Compatibility)",
                    "IEC 62368-1 (IT & communication safety)",
                    "JEDEC JESD47 (Stress-Test Qualification)",
                    "IPC-SM-785 (Accelerated Reliability)",
                  ].map((std, i) => (
                    <li
                      key={i}
                      className="text-[10px] text-zinc-500 font-black uppercase tracking-wider flex items-center gap-2"
                    >
                      <div className="h-1 w-1 bg-zinc-200 rounded-full" />
                      {std}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actionable (2.4) */}
            <div className="space-y-6">
              <h3 className="text-[#F33117] text-[10px] font-black uppercase tracking-widest pb-4 border-b border-zinc-200">
                2.4 / Actionable Deliverables
              </h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                Every report includes implementable corrective recommendations.
                Our engineers support the design team through the entire
                correction and re-verification cycle.
              </p>
            </div>

            {/* IP Protection (2.5) */}
            <div className="space-y-6">
              <h3 className="text-[#F33117] text-[10px] font-black uppercase tracking-widest pb-4 border-b border-zinc-200">
                2.5 / Confidentiality & IP
              </h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                We operate under strict NDA for every engagement. Design data is
                treated as strictly confidential and is not retained beyond the
                agreed engagement period.
              </p>
            </div>

            {/* Turnaround (2.6) */}
            <div className="space-y-6">
              <h3 className="text-[#F33117] text-[10px] font-black uppercase tracking-widest pb-4 border-b border-zinc-200">
                2.6 / Rapid Turnaround
              </h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                We provide defined turnaround commitments: 5 business days for
                schematic reviews and 7 business days for full PCB layout
                reviews.
              </p>
            </div>

            {/* Scalable (2.7) */}
            <div className="space-y-6">
              <h3 className="text-[#F33117] text-[10px] font-black uppercase tracking-widest pb-4 border-b border-zinc-200">
                2.7 / Scalable Engagement
              </h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                Whether for a concept prototype or pre-production qualification
                for Fortune 500s, we structure our engagements to fit the
                program stage and budget.
              </p>
            </div>

            {/* Track Record (2.8) */}
            <div className="space-y-6">
              <h3 className="text-[#F33117] text-[10px] font-black uppercase tracking-widest pb-4 border-b border-zinc-200">
                2.8 / Proven Track Record
              </h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                Our expertise spans industrial automation, medical, consumer
                IoT, and aerospace ground support across simple and complex
                multi-board systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section (3.0) */}
      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 border-b relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mb-24">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-8">
              PHASE 3 / CONSULTATION
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
              1-Hour Engineering <br /> Consultation.
            </h2>
            <p className="mt-8 text-xl text-zinc-600 font-light max-w-2xl leading-relaxed">
              No sales pitch. No commitment. A technical working session with a
              Qmax senior engineer on your specific design challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-start mb-32">
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* What Happens */}
                <div className="space-y-8">
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 border-b border-zinc-200 pb-4">
                    What Happens
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Describe project stage & primary concerns",
                      "Technical architecture deep-dive",
                      "Identify highest-risk design areas",
                      "Outline relevant review services",
                      "Indicative scope & timeline mapping",
                      "Receive actionable preliminary observations",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-zinc-600 font-light text-sm"
                      >
                        <span className="text-[#F33117]">/</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who Should Request */}
                <div className="space-y-8">
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 border-b border-zinc-200 pb-4">
                    Who Should Attend
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Startups preparing for EVT/DVT/PVT",
                      "Teams inheriting legacy designs",
                      "PMs facing compliance test failures",
                      "Firms migrating from obsolete silicon",
                      "Teams requiring a 2nd opinion",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-zinc-600 font-light text-sm"
                      >
                        <span className="text-[#F33117]">/</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-100/50 p-12 border border-zinc-200">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">
                  How to Schedule
                </h3>
                <p className="text-zinc-600 font-light leading-relaxed mb-8">
                  Submit a brief project description through the consultation
                  request form. A Qmax engineer will confirm the session within
                  one business day. Sessions are conducted via video conference.
                </p>
                <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-widest text-[#F33117]">
                  <span className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-[#F33117]" />
                    RESPONSE WITHIN 24H
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-[#F33117]" />
                    NDA PRE-REQUISITE AVAILABLE
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-12 lg:sticky lg:top-32">
              <div className="relative aspect-square w-full overflow-hidden border border-zinc-200 transition-all duration-1000 group">
                <Image
                  src="/pcb-design-review-services/image1.png"
                  alt="Engineering Technical Consultation - Qmax Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-transparent" />
              </div>
              <div className="bg-[#F33117] p-1 pt-0 group cursor-pointer">
                <a
                  href="/contact"
                  className="bg-[#fcfcfc] block p-8 hover:bg-[#F33117] transition-colors group-hover:text-white"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-[#F33117] group-hover:text-white">
                    REQUEST SESSION
                  </span>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-light text-zinc-950 group-hover:text-white">
                      Contact Engineering
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-2 transition-transform text-[#F33117] group-hover:text-white"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-[#fcfcfc] py-24 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-zinc-400 md:text-5xl tracking-tighter">
              Clients & Platforms.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                type: "Entrepreneurs",
                desc: "Bringing nascent hardware concepts to a state of manufacturing readiness.",
              },
              {
                type: "Startups",
                desc: "Identifying critical failure modes before capital-intensive production runs.",
              },
              {
                type: "Fortune 500s",
                desc: "Rigorous third-party audits for high-reliability industrial and defense platforms.",
              },
            ].map((audience, idx) => (
              <div
                key={idx}
                className="group border-t border-zinc-200 pt-12 hover:bg-zinc-50 p-8 transition-colors"
              >
                <span className="text-xs font-black text-[#F33117] tracking-[0.4em] mb-6 block">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-light text-zinc-950 mb-6 group-hover:text-[#F33117] transition-colors">
                  {audience.type}
                </h3>
                <p className="text-zinc-500 font-light leading-relaxed">
                  {audience.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fcfcfc] py-24 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t border-zinc-200 pt-16 pb-8">
            <a
              href="/contact"
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#F33117] p-6 md:p-10 group hover:bg-white transition-colors duration-500"
            >
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-6 block">
                  READY TO START?
                </span>
                <span className="text-2xl md:text-4xl lg:text-5xl font-light text-black tracking-tighter leading-tight">
                  Request your <br /> design review.
                </span>
              </div>
              <div className="mt-8 md:mt-0 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-black/10 group-hover:border-black/30 group-hover:scale-110 transition-all duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-500 group-hover:translate-x-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
            <div className="mt-8 flex flex-col md:flex-row gap-8 md:gap-16 text-[10px] font-black uppercase tracking-widest text-zinc-500 px-8">
              <span>INFO@QMAXSYS.COM</span>
              <span>RESPONSE WITHIN 1 BUSINESS DAY</span>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={[
          {
            q: "What is the difference between a schematic review and a PCB design review?",
            a: "A schematic review evaluates the electrical design intent: component selection, circuit topology, protection, and signal connectivity. A PCB design review evaluates the physical implementation: trace routing, impedance control, copper pours, component placement, and manufacturability. Both are required for a complete pre-production review.",
          },
          {
            q: "At what stage should we engage Qmax for a design review?",
            a: "The highest ROI comes at two stages: after schematic completion (before layout begins) and after PCB layout completion (before Gerber release). Review after prototype build is still valuable but incurs higher rework costs if changes are required.",
          },
          {
            q: "What file formats does Qmax accept for reviews?",
            a: "We accept native EDA files from Altium, Cadence Allegro/OrCAD, Mentor PADS/Xpedition, KiCad, and Eagle. We also accept PDF schematics, Gerber RS-274X, ODB++, IPC-2581, and scanned drawings under NDA.",
          },
          {
            q: "What does DFM review specifically check on a PCB layout?",
            a: "DFM review verifies minimal trace width/spacing, via annular rings, copper-to-board-edge clearance, soldermask expansion, impedance-controlled layer assignment, drill aspect ratios, and feature tolerances against fabrication capabilities.",
          },
          {
            q: "How long does a typical PCB design review take?",
            a: "Standard schematic reviews (100-300 components) take 3-5 business days. PCB layout reviews take 5-7 business days. Turnaround is confirmed at initiation based on board complexity and layer count.",
          },
          {
            q: "Can Qmax reconstruct a schematic from a physical PCBA?",
            a: "Yes. Our reverse engineering service uses component ID, X-ray imaging for multi-layer net tracing, and connectivity mapping to produce a functional schematic and EDA-native design database in 10-15 business days.",
          },
          {
            q: "What is involved in converting Gerber files back to an editable CAD database?",
            a: "The process involves extracting copper geometry, net extraction cross-layer analysis, mapping pads to footprints, and associating them with symbols to generate a functional netlist in a DRC-clean layout.",
          },
          {
            q: "What EDA toolchains does Qmax support for CAD migration?",
            a: "We support Altium, Cadence Allegro/OrCAD, Mentor PADS/Xpedition, and KiCad. Legacy tools include PROTEL, P-CAD, and legacy OrCAD. Libraries are rebuilt to target tool standards, not just translated.",
          },
          {
            q: "How does Qmax approach BoM obsolescence management?",
            a: "We query lifecycle status against industry databases (SiliconExpert, IHS Markit). NRND/Obsolete parts are escalated for replacement qualification based on parametric equivalency and vendor criteria.",
          },
          {
            q: "What compliance standards does Qmax address?",
            a: "We address CE Marking (EMC, LVD, RED), FCC Parts 15/68, IEC 61000 EMC series, IEC 62368-1 safety, UL 508A, ISO 26262 functional safety, RoHS 3, REACH, and cyber directives like the EU CRA.",
          },
          {
            q: "Can Qmax identify the root cause of a radiated emissions failure?",
            a: "Yes. We identify exceedance sources—often inadequate filtering, common-mode issues, or switching harmonics—correlate them with the design, and define targeted modifications for re-test.",
          },
          {
            q: "What is DVT and how is it different from design verification?",
            a: "Verification confirms implementation matches spec (via simulation/unit test). DVT (Design Validation Testing) confirms the product meets customer/regulatory requirements under real-world stress (temp, humidity, vibration).",
          },
          {
            q: "How does Qmax handle firmware porting to a new microcontroller?",
            a: "We perform an architecture audit (HAL, peripherals, RTOS), establishing a verified driver layer before application migration. Post-porting, a regression suite validates functional equivalency.",
          },
          {
            q: "What legacy processor families has Qmax migrated designs from?",
            a: "We've migrated from 8051, PIC16/18, 68K, 8086/186, PowerPC 5xx, ARM7TDMI, and legacy Spartan/Cyclone FPGAs to modern ARM Cortex-M/A, STM32, and current-gen FPGAs.",
          },
          {
            q: "Does Qmax perform teardown analysis on competitor products?",
            a: "Yes, for commercially available products within legal boundaries. Analysis covers mechanical construction, PCBA/Component ID, COGS estimation, and technology benchmarking. Firmware extraction follows DMCA guidelines.",
          },
          {
            q: "How does Qmax structure pricing for design review services?",
            a: "We quote on a fixed-fee basis per engagement for cost predictability. Pricing depends on component count, layer count, and signal speed. Initial 1-hour consultations are complimentary.",
          },
          {
            q: "Can Qmax support a design review for a product with a field failure?",
            a: "Yes. Field Failure RCA (Root Cause Analysis) involves documentation, inspection, component testing, and site-focused design review to identify vulnerabilities and define CAPA (Corrective Action) recommendations.",
          },
          {
            q: "What is the Qmax approach to IEC 61508 functional safety applications?",
            a: "We review safety requirements allocation, fault tolerance, diagnostic coverage, and SFF calculations, ensuring protection layers are independent and FMEDA (Failure Modes) analyze is complete.",
          },
          {
            q: "Can Qmax work with designs that have partial or incomplete documentation?",
            a: "Yes. We can initiate reviews from whatever exists—PDFs, fabricated boards, or Gerbers. We document gaps, prioritize high-risk functions, and can extend to include documentation reconstruction.",
          },
          {
            q: "How does Qmax ensure confidentiality of design data?",
            a: "All engagements start with a mutual NDA. Files are transferred via encrypted channels and stored on access-controlled internal servers. Engineers are under NDA, and data is destroyed post-engagement.",
          },
          {
            q: "What are the next steps after a design review engagement?",
            a: "Clients implement recommendations with our support. We remain available for re-reviews of critical fixes and can provide pre-build fabrication/assembly review and DVT planning support.",
          },
        ]}
      />
      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
        hideTopBorder
      />
    </main>
  );
}
