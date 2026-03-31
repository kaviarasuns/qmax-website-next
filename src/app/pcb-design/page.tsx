"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const lifecycleItems = [
  {
    title: "System Requirements & Interface Analysis",
    description:
      "Reviewing PRDs, block diagrams, and high-speed interface requirements such as PCIe Gen 5/6 and DDR5.",
  },
  {
    title: "Stackup & Material Selection",
    description:
      "Modeling impedance-controlled stackups using advanced substrates like Rogers, Megtron 6, and Tachyon 100G.",
  },
  {
    title: "Constraint Definition",
    description:
      "Setting rigorous physical and electrical design rules for high-speed, high-density interconnects.",
  },
  {
    title: "Component Placement & Routing",
    description:
      "Strategic partitioning of analog, digital, and RF domains to prevent cross-talk and desensitization.",
  },
  {
    title: "SI/PI & Thermal Validation",
    description:
      "Using 3D EM and SPICE simulation to validate signal and power integrity before fabrication.",
  },
  {
    title: "DFM/DFT Review",
    description:
      "Implementing Design for Manufacturing and Design for Test standards to improve production yield.",
  },
  {
    title: "Prototype & Production Support",
    description:
      "Managing the transition from board bring-up and functional validation to mass production handover.",
  },
];

const coreCapabilities = [
  {
    label: "A",
    title: "High-Speed Digital PCB Design",
    description:
      "Expertise in routing ultra-high-speed interfaces requiring controlled impedance and meticulous skew management. We handle high-speed digital PCBs featuring DDR4/5, LPDDR, PCIe Gen 5, SerDes up to 112Gbps, and USB4.",
    href: "/pcb-design/high-speed-digital-pcb-design",
  },
  {
    label: "B",
    title: "RF and Microwave PCB Design",
    description:
      "Layout of RF front-ends, antenna integrations, and microwave circuits up to 80GHz. We utilize specialized materials (Rogers, Isola, Taconic) and implement coplanar waveguides, microstrips, and RF shielding to minimize insertion loss and interference.",
    href: "/pcb-design/rf-and-microwave-pcb-design",
  },
  {
    label: "C",
    title: "Power Electronics PCB Design",
    description:
      "Designing for high-current and high-voltage applications. We specialize in heavy copper PCBs, metal substrates (IMS), and thermal via arrays to manage heat in EV power modules, motor controllers, and industrial inverters.",
    href: "/case-studies/polyphase-power_measurement",
  },
  {
    label: "D",
    title: "Analog and Mixed-Signal PCB Design",
    description:
      "Ensuring precision in low-level analog signals while maintaining isolation from noisy digital domains. We implement star grounding, split planes, and guard traces to preserve signal-to-noise ratios (SNR).",
    href: "/case-studies/Precision-Filtration-Control-System",
  },
  {
    label: "E",
    title: "SI, PI, and Thermal Analysis Services",
    description: "Advanced simulation-driven design including:",
    points: [
      "Signal Integrity: Reflection, crosstalk, and timing analysis.",
      "Power Integrity: DC drop analysis, AC impedance profiling of PDNs, and decoupling optimization.",
      "Thermal Analysis: Identifying hotspots and optimizing airflow/heatsink interfaces.",
    ],
    href: "/case-studies/Blade-NIC-Server",
  },
  {
    label: "F",
    title: "PCB Library Services",
    description:
      "Development of IPC-compliant footprints and symbols. We ensure 3D model accuracy for mechanical collision checking and maintain centralized libraries for enterprise consistency.",
    href: "/pcb-design/pcb-library-services",
  },
  {
    label: "G",
    title: "PCB Design Review Services",
    description:
      "Third-party audits of existing designs to identify EMI risks. We evaluate grounding schemes, return path discontinuities, and aperture leaks to ensure readiness for CE, FCC, and VCCI testing.",
    href: "/pcb-design/pcb-design-review-services",
  },
  {
    label: "H",
    title: "DFM / DFx Review",
    description:
      "Exhaustive checks for Design for Manufacturing (DFM), Design for Assembly (DFA), and Design for Test (DFT). We verify annular rings, aspect ratios, solder mask clearances, and test point coverage to ensure high production yields.",
    href: "/case-studies/Automotive-HID-PCB",
  },
];

const technicalAdvantages = [
  {
    feature: "SI/PI Methodology",
    advantage:
      "Simulation-driven constraints established before routing begins, not just as a post-layout check.",
  },
  {
    feature: "EMI Readiness",
    advantage:
      'Integrated "EMC-by-design" approach focusing on return path integrity and shielding.',
  },
  {
    feature: "Production Readiness",
    advantage:
      "100% DFM-verified files tailored to specific fab house capabilities.",
  },
  {
    feature: "Documentation Quality",
    advantage:
      "Comprehensive fabrication and assembly drawings with precise drill tables and notes.",
  },
  {
    feature: "Supplier Coordination",
    advantage:
      "Direct technical liaison with PCB fabricators to resolve stackup and material queries.",
  },
  {
    feature: "Risk Management",
    advantage:
      "Proactive identification of single-source components and high-risk manufacturing tolerances.",
  },
];

const detailedProcessSteps = [
  {
    title: "Stackup Modeling",
    description:
      "Definition of layers, copper weights, and dielectric materials for impedance targets.",
  },
  {
    title: "Constraint Setup",
    description:
      "Programming differential pair widths, spacing, and length matching rules.",
  },
  {
    title: "Placement Optimization",
    description:
      "Critical component positioning to minimize path lengths and thermal interference.",
  },
  {
    title: "Critical Net Routing",
    description:
      "Prioritizing high-speed SerDes, clocks, and sensitive analog paths.",
  },
  {
    title: "Power Plane Design",
    description:
      "Crafting robust PDNs with minimal DC drop and low-impedance paths.",
  },
  {
    title: "Backdrilling & Via Optimization",
    description:
      "Reducing via stubs for high-frequency signal paths.",
  },
  {
    title: "SI/PI Reviews",
    description:
      "Iterative simulation to validate eye-diagram openings and power rail stability.",
  },
  {
    title: "DFM Reviews",
    description:
      "Running automated checks for manufacturing violations (acid traps, slivers, etc.).",
  },
  {
    title: "Mechanical Integration",
    description:
      "3D collision checking with enclosures and connectors.",
  },
  {
    title: "Fabrication Package",
    description:
      "Generation of Gerbers, ODB++, and NC Drill files.",
  },
  {
    title: "ECO Handling",
    description:
      "Formal Engineering Change Order processes for design revisions.",
  },
  {
    title: "Production Release",
    description:
      "Final handover of the Golden File set and manufacturing documentation.",
  },
];

const projectExperience = [
  "AI Compute Servers: High-density GPU clusters with robust power delivery networks.",
  "Server Motherboards: Multi-layer designs for Intel Xeon and AMD EPYC architectures.",
  "O-RAN & Telecom Boards: Specialized hardware for Distributed Units (DU) and 100Gbps NICs.",
  "Medical Electronics: Patient-safe, low-noise wearable and diagnostic devices (ISO 13485).",
  "High-Speed DAQ Systems: 32-channel synchronized sampling for industrial physics.",
  "RF Instrumentation: Precision HF/LF generators up to 1kW and mmWave sensor arrays.",
  "Power Controllers: Motor drives (50kW+) and 800V Battery Management Systems (BMS).",
  "Rigid-Flex Systems: Compact, high-reliability designs for aerospace and wearable cameras.",
];

const complianceStrategies = [
  "Layout Decisions: Strategic partitioning of analog, digital, and RF grounds to prevent common-mode noise.",
  "Filtering & Shielding: Implementation of Faraday cages, BAW filters, and Pi-filters at the source.",
  "Grounding Strategy: Star-grounding and moat-and-bridge structures for isolation.",
  "Pre-compliance Mindset: Utilizing in-house near-field probes to identify and suppress harmonics before formal lab testing.",
];

const customerDeliverables = [
  "Design Files: Native layout files and schematics.",
  "Fabrication Package: Gerber RS-274X or ODB++, IPC-D-356 netlists, and drill files.",
  "Impedance Tables: Detailed stackup reports with validated impedance calculations.",
  "Assembly Files: Pick-and-place files, BOM with lifecycle risk analysis, and 3D STEP models.",
  "Test Data: DFT maps, ICT/flying probe test point reports, and SI/PI validation reports.",
  "Project History: ECO logs and design review documentation.",
];

const consultationTopics = [
  "High-Speed Interface & SI/PI Risks.",
  "Thermal Management & Scalability Targets.",
  "Cost Drivers & Yield Optimization.",
  "Compliance Roadmap (UL/CE/FCC/MIL-STD).",
];

const technicalFaq = [
  {
    title: "1. Design & Engineering Process",
    items: [
      {
        q: "Do you review schematics before starting the PCB layout?",
        a: "Absolutely. We conduct a preliminary architectural and schematic review to ensure high-speed interfaces, power pins, termination schemes, and component lifecycles are correctly implemented before layout begins.",
      },
      {
        q: 'Can you guarantee a "zero defect" PCB design?',
        a: 'While no engineering process is immune to change, our "First Time Right" philosophy, backed by rigorous DFM/DFT and SI/PI validation cycles, is designed to ensure the physical board matches the design intent 100%.',
      },
      {
        q: "What is your typical lead time for a complex multilayer design?",
        a: "Lead times vary by complexity (for example, 12-layer vs. 32-layer HDI). Typically, a complex board takes 3 to 6 weeks from component placement to the final design package.",
      },
      {
        q: "What information is needed to provide a quote or start a project?",
        a: "Ideally, we require the schematic (or block diagram for architecture-stage projects), BOM, mechanical constraints (DXF/STEP), and a brief description of high-speed constraints.",
      },
      {
        q: "Can you work 24/7 to meet aggressive delivery schedules?",
        a: 'Yes. We offer accelerated schedules for mission-critical projects using a "follow-the-sun" engineering model across our global locations to ensure on-time delivery.',
      },
      {
        q: "Can you miniaturize an existing bulky hardware design?",
        a: "Yes. We specialize in transitioning through-hole designs to high-density SMT/BGA layouts, often integrating discrete logic into FPGAs to significantly reduce the footprint.",
      },
    ],
  },
  {
    title: "2. Advanced Technologies & Capabilities",
    items: [
      {
        q: "What is the maximum layer count you have handled?",
        a: "We have successfully delivered production-ready designs with up to 64 layers.",
      },
      {
        q: "Do you support HDI technologies like Blind and Buried vias?",
        a: "Yes, we have extensive experience in HDI designs, including staggered, stacked, and ELIC (Every Layer Interconnect) structures.",
      },
      {
        q: "Can you design with specialized materials like Rogers or Megtron?",
        a: "Absolutely. We regularly design with high-speed, low-loss laminates for RF, high-frequency digital, and 100Gbps+ data rate applications.",
      },
      {
        q: "Do you support backdrilling?",
        a: "Yes. For high-speed signals where via stubs cause unacceptable reflections, we specify backdrilling in the fabrication drawings.",
      },
      {
        q: "Do you design Rigid-Flex PCBs?",
        a: "Yes, we follow IPC-2223 standards for rigid-flex designs, focusing on bend-radius reliability and signal continuity for aerospace, medical, and wearables.",
      },
      {
        q: "Can you design for heavy copper (4oz+)?",
        a: "Yes, we specialize in high-power boards requiring heavy copper for increased thermal management and current-carrying capacity.",
      },
      {
        q: "Do you design custom magnetic components?",
        a: "Yes, we specify core materials, winding geometries, and litz wire for custom inductors and transformers in specialized power applications.",
      },
    ],
  },
  {
    title: "3. Signal & Power Integrity (SI/PI)",
    items: [
      {
        q: "Do you perform post-layout SI/PI simulation?",
        a: "Yes, we provide full extraction and 3D EM simulation of critical nets to ensure timing, voltage margins, skin effect, and via resonances are managed.",
      },
      {
        q: "What tools do you use for SI/PI analysis?",
        a: "Our stack includes industry-standard tools for SPICE modeling, thermal analysis, and 3D electromagnetic field simulation (for example, HFSS, HyperLynx, LTSpice).",
      },
      {
        q: "How do you manage length matching for DDR5?",
        a: "We use advanced constraint managers to handle fly-by topology, serpentine routing, and phase-tuning within tight picosecond tolerances.",
      },
      {
        q: "How do you handle high-voltage safety and isolation?",
        a: "We implement strict clearance and creepage analysis per IEC 60601 (Medical) or UL 60950/62368-1 standards for designs exceeding 800V.",
      },
      {
        q: "Can you assist with EMI/EMC troubleshooting?",
        a: 'Yes, we provide "rescue" services to identify noise sources using near-field probes and redesign boards that have failed compliance testing.',
      },
    ],
  },
  {
    title: "4. Manufacturing, Assembly & Testing",
    items: [
      {
        q: "Do you provide PCB fabrication and assembly services?",
        a: "We provide turnkey services through our vetted manufacturing partners, delivering fully assembled and tested prototypes.",
      },
      {
        q: "What are the lead times for manufactured prototypes?",
        a: "Standard PCB fabrication is 5-10 days; assembly takes an additional 1-2 weeks depending on component availability.",
      },
      {
        q: "Do you test prototypes before delivery?",
        a: "Yes. We offer various testing levels, from basic Power-On-Reset (POR) to full functional bring-up and signal characterization in our internal lab.",
      },
      {
        q: "How do you ensure consistency in mass production?",
        a: "We specify controlled impedance coupons on every panel and implement automated functional testing (FCT) to ensure unit-to-unit consistency.",
      },
      {
        q: "How do you handle component obsolescence (EOL)?",
        a: 'During the library and BOM phase, we check lifecycle status and recommend active, second-source alternatives for "At Risk" components.',
      },
    ],
  },
  {
    title: "5. Deliverables & IP",
    items: [
      {
        q: "How do you handle Intellectual Property (IP)?",
        a: "All design files, libraries, and simulation data generated are the sole property of the customer. We operate under strict NDAs.",
      },
      {
        q: "What file formats do you deliver?",
        a: "We deliver ODB++, Gerber X2, IPC-2581, and the native CAD database (Altium, Allegro, etc.), along with a full 3D STEP model for mechanical fitment.",
      },
      {
        q: "Are your designs RoHS and REACH compliant?",
        a: "Yes, we ensure all specified materials and components meet global environmental regulations.",
      },
      {
        q: "What other value-added services do you provide?",
        a: "We provide thermal analysis, mechanical enclosure design, firmware/RTL development (Verilog/VHDL/C), and full system integration.",
      },
    ],
  },
];

export default function PCBDesignPage() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const isDark = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("pcb-design-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("pcb-design-theme", nextTheme);
  };

  return (
    <main
      className={`text-justify ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"}`}
    >
      <section
        className={`relative overflow-hidden border-b ${isDark ? "border-slate-800" : "border-slate-200"
          }`}
      >
        <div
          className={`absolute inset-0 ${isDark
            ? "bg-[radial-gradient(circle_at_15%_20%,rgba(148,163,184,0.07),transparent_48%),radial-gradient(circle_at_85%_10%,rgba(45,212,191,0.04),transparent_42%)]"
            : "bg-[radial-gradient(circle_at_15%_20%,rgba(148,163,184,0.08),transparent_54%),radial-gradient(circle_at_85%_10%,rgba(20,184,166,0.03),transparent_48%)]"
            }`}
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:px-8">
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <p
                className={`inline-flex rounded-full border px-4 py-1 text-xs uppercase tracking-[0.16em] ${isDark
                  ? "border-slate-500/40 bg-slate-400/10 text-slate-100"
                  : "border-slate-200 bg-white/90 text-slate-600"
                  }`}
              >
                PCB Design Services
              </p>
              <button
                type="button"
                onClick={toggleTheme}
                className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${isDark
                  ? "border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800"
                  : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                  }`}
                aria-label="Toggle dark and light mode"
              >
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            <h1
              className={`text-4xl font-semibold leading-tight md:text-5xl ${isDark ? "text-white" : "text-slate-900"
                }`}
            >
              PCB Design: A Multi-Physics Engineering Discipline
            </h1>

            <div
              className={`mt-6 space-y-4 text-justify text-sm leading-7 md:text-base ${isDark ? "text-slate-300" : "text-slate-700"
                }`}
            >
              <p>
                At Qmax Systems, we view PCB Design Services not merely as an interconnect task, but as a complex multi-physics engineering challenge. In modern electronics, the physical layout is a critical component of the circuit itself.
              </p>
              <p>
                Our approach integrates Signal Integrity (SI), Power Integrity (PI), Electromagnetic Interference (EMI), and thermal management into a single, cohesive workflow. This ensures that high-speed signals maintain timing and quality while the Power Distribution Network (PDN) provides stable, noise-free energy to high-performance silicon. Failure to account for these variables often results in costly re-spins and delayed time-to-market.
              </p>
              <p>
                Our engineering team specializes in first-time-right PCB design. By prioritizing early risk identification and disciplined design methodology, we deliver production-ready PCB designs that bridge complex conceptual requirements and market-ready hardware. Whether your project involves a 30-layer HDI board or a high-power converter, our designs are optimized for reliability, compliance, and manufacturability from day one.
              </p>
            </div>
          </div>

          <div
            className={`relative h-full min-h-[300px] overflow-hidden rounded-2xl border md:min-h-[420px] ${isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
              }`}
          >
            <Image
              src="/pcb-design/images/image1.jpg"
              alt="High-density PCB design and routing layout"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
          Complete PCB Engineering Lifecycle
        </h2>
        <p
          className={`mt-4 max-w-4xl text-sm leading-7 md:text-base ${isDark ? "text-slate-300" : "text-slate-700"
            }`}
        >
          Our structured workflow allows us to catch potential issues early, keeping your project on schedule and budget. We provide full lifecycle ownership across architecture, layout, validation, and production handover.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lifecycleItems.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-xl border p-5 ${isDark
                ? "border-slate-800 bg-slate-900/60"
                : "border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                }`}
            >
              <p className={`text-xs uppercase tracking-[0.12em] ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                Step {index + 1}
              </p>
              <h3 className={`mt-2 text-base font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                {item.title}
              </h3>
              <p className={`mt-2 text-sm leading-6 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`border-y ${isDark ? "border-slate-800 bg-slate-900/30" : "border-slate-200 bg-slate-50/80"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
            Core PCB Design &amp; SI/PI Capabilities
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {coreCapabilities.map((capability) => (
              <article
                key={capability.title}
                className={`rounded-xl border p-5 ${isDark
                  ? "border-slate-800 bg-slate-950/70"
                  : "border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                  }`}
              >
                <h3 className={`mt-2 text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  {capability.title}
                </h3>
                <p className={`mt-3 text-sm leading-6 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {capability.description}
                </p>
                {capability.points && (
                  <ul className="mt-3 list-inside list-disc space-y-1">
                    {capability.points.map((point) => (
                      <li
                        key={point}
                        className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                {capability.href && (
                  <div className="mt-4">
                    <Link
                      href={capability.href}
                      className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold transition ${isDark
                        ? "bg-sky-500 text-slate-950 hover:bg-sky-400"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                    >
                      Learn more
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
          Qmax Technical Advantage
        </h2>

        <div className="mt-8 overflow-x-auto rounded-xl">
          <table
            className={`min-w-full border ${isDark ? "border-slate-800" : "border-slate-200"
              }`}
          >
            <thead>
              <tr className={isDark ? "bg-slate-900" : "bg-slate-100"}>
                <th
                  className={`w-1/3 border-b px-4 py-3 text-left text-sm font-semibold ${isDark
                    ? "border-slate-800 text-slate-100"
                    : "border-slate-200 text-slate-900"
                    }`}
                >
                  Feature
                </th>
                <th
                  className={`border-b px-4 py-3 text-left text-sm font-semibold ${isDark
                    ? "border-slate-800 text-slate-100"
                    : "border-slate-200 text-slate-900"
                    }`}
                >
                  Qmax Advantage
                </th>
              </tr>
            </thead>
            <tbody>
              {technicalAdvantages.map((row, index) => (
                <tr
                  key={row.feature}
                  className={
                    isDark
                      ? index % 2 === 0
                        ? "bg-slate-950/70"
                        : "bg-slate-900/70"
                      : index % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                  }
                >
                  <td
                    className={`border-b px-4 py-3 text-sm font-medium ${isDark
                      ? "border-slate-800 text-slate-100"
                      : "border-slate-200 text-slate-900"
                      }`}
                  >
                    {row.feature}
                  </td>
                  <td
                    className={`border-b px-4 py-3 text-sm ${isDark
                      ? "border-slate-800 text-slate-300"
                      : "border-slate-200 text-slate-700"
                      }`}
                  >
                    {row.advantage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className={`border-y ${isDark ? "border-slate-800 bg-slate-900/30" : "border-slate-200 bg-slate-50/80"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
            Design Tools, Standards &amp; Engineering Framework
          </h2>
          <p className={`mt-4 text-sm leading-7 md:text-base ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            We operate within a rigorous framework governed by international electronics standards.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article
              className={`rounded-xl border p-6 ${isDark
                ? "border-slate-800 bg-slate-950/70"
                : "border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                }`}
            >
              <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                Standards Adherence
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "IPC-2221/2222: Generic and Rigid PCB Design standards.",
                  "IPC-6012: Qualification and Performance for Rigid PCBs.",
                  "IPC-A-610: Acceptability of Electronic Assemblies.",
                  "IPC-7351: Footprint and Land Pattern requirements.",
                  "IPC-2152: Standard for Determining Current-Carrying Capacity.",
                ].map((standard) => (
                  <li
                    key={standard}
                    className={`rounded-md border px-3 py-2 text-sm ${isDark
                      ? "border-slate-800 bg-slate-900/80 text-slate-300"
                      : "border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                  >
                    {standard}
                  </li>
                ))}
              </ul>
            </article>

            <article
              className={`rounded-xl border p-6 ${isDark
                ? "border-slate-800 bg-slate-950/70"
                : "border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                }`}
            >
              <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                Design Practices
              </h3>
              <p className={`mt-4 text-sm leading-7 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                Rigorous adherence to creepage and clearance requirements for high-voltage and medical isolation,
                including IEC 60601 and ISO 13485 aligned constraints.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
          Detailed PCB Design &amp; Validation Process
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {detailedProcessSteps.map((step, index) => (
            <article
              key={step.title}
              className={`rounded-xl border p-5 ${isDark
                ? "border-slate-800 bg-slate-900/60"
                : "border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                }`}
            >
              <p className={`text-xs uppercase tracking-[0.12em] ${isDark ? "text-sky-300" : "text-sky-700"}`}>
                Step {index + 1}
              </p>
              <h3 className={`mt-2 text-base font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                {step.title}
              </h3>
              <p className={`mt-2 text-sm leading-6 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`border-y ${isDark ? "border-slate-800 bg-slate-900/30" : "border-slate-200 bg-slate-50/80"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
            Case Studies
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {projectExperience.map((item) => (
              <li
                key={item}
                className={`rounded-xl border p-4 text-sm leading-6 ${isDark
                  ? "border-slate-800 bg-slate-950/70 text-slate-300"
                  : "border-slate-200 bg-white text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                  }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
          Compliance &amp; EMI/EMC Readiness
        </h2>
        <p className={`mt-4 max-w-5xl text-sm leading-7 md:text-base ${isDark ? "text-slate-300" : "text-slate-700"}`}>
          We solve the &quot;invisible&quot; problems that cause field failures and compliance rejections. We design for compliance from Day 1. Our engineers implement specific layout strategies to ensure your product passes CE, FCC, and UL certification on the first attempt.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {complianceStrategies.map((item) => (
            <article
              key={item}
              className={`rounded-xl border p-5 ${isDark
                ? "border-slate-800 bg-slate-900/60"
                : "border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                }`}
            >
              <p className={`text-sm leading-6 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`border-y ${isDark ? "border-slate-800 bg-slate-900/30" : "border-slate-200 bg-slate-50/80"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
            Customer Deliverables
          </h2>
          <p className={`mt-4 text-sm leading-7 md:text-base ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Upon project completion, Qmax provides a comprehensive documentation package:
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {customerDeliverables.map((item) => (
              <article
                key={item}
                className={`rounded-xl border p-5 ${isDark
                  ? "border-slate-800 bg-slate-950/70"
                  : "border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                  }`}
              >
                <p className={`text-sm leading-6 ${isDark ? "text-slate-300" : "text-slate-700"}`}>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div
          className={`rounded-2xl border p-8 md:p-10 ${isDark
            ? "border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950"
            : "border-slate-200 bg-gradient-to-r from-sky-50 to-emerald-50"
            }`}
        >
          <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
            Complimentary Technical Consultation
          </h2>
          <p className={`mt-4 max-w-4xl text-sm leading-7 md:text-base ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            We offer a 1-hour technical consultation with our senior PCB designers. During this engineering-driven session, we review:
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {consultationTopics.map((topic) => (
              <li
                key={topic}
                className={`rounded-lg border px-4 py-3 text-sm ${isDark
                  ? "border-slate-700 bg-slate-900/70 text-slate-200"
                  : "border-slate-200 bg-white/80 text-slate-700"
                  }`}
              >
                {topic}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/contact"
              className={`inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold transition ${isDark
                ? "bg-sky-500 text-slate-950 hover:bg-sky-400"
                : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
            >
              Schedule Your Technical Consultation
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`border-t ${isDark ? "border-slate-800 bg-slate-950/40" : "border-slate-200 bg-slate-100/60"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className={`text-3xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
            Technical FAQ
          </h2>
          <p className={`mt-4 text-sm md:text-base ${isDark ? "text-slate-300" : "text-slate-700"}`}>
            Common engineering, validation, and production questions answered by our PCB team.
          </p>

          <div className="mt-8 space-y-5">
            {technicalFaq.map((group) => (
              <article
                key={group.title}
                className={`rounded-xl border p-5 ${isDark
                  ? "border-slate-800 bg-slate-900/60"
                  : "border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
                  }`}
              >
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  {group.title}
                </h3>
                <div className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <details
                      key={item.q}
                      className={`group rounded-lg border px-4 py-3 ${isDark
                        ? "border-slate-800 bg-slate-950/70"
                        : "border-slate-200 bg-slate-50"
                        }`}
                    >
                      <summary
                        className={`flex cursor-pointer list-none items-center justify-between gap-4 pr-1 text-sm font-medium leading-6 ${isDark ? "text-slate-100" : "text-slate-900"
                          }`}
                      >
                        <span>{item.q}</span>
                        <span
                          aria-hidden="true"
                          className={`text-xs font-medium transition-transform duration-200 group-open:rotate-180 ${isDark ? "text-slate-500" : "text-slate-400"
                            }`}
                        >
                          ▾
                        </span>
                      </summary>
                      <p
                        className={`mt-3 text-sm leading-6 ${isDark ? "text-slate-300" : "text-slate-700"
                          }`}
                      >
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
