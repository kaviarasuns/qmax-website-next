import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

const libraryFailureModes = [
  {
    title: "Pin assignment errors",
    description:
      "Incorrect pin mapping is undetectable by DRC and only surfaces when the board fails.",
  },
  {
    title: "Land pattern deviations",
    description:
      "Non-IPC footprints reduce solder joint strength and depress first-pass yield.",
  },
  {
    title: "Height property errors",
    description:
      "Wrong 3D model height causes missed interference and invalid thermal calculations.",
  },
  {
    title: "Missing BoM parameters",
    description:
      "Absent MPN, AVL, or lifecycle status forces manual procurement research and introduces sourcing errors.",
  },
];

const engineeringStandards = [
  {
    standard: "IPC-7351C",
    application:
      "Land pattern geometry and courtyard dimensions for SMT footprints",
  },
  {
    standard: "IPC-2221B",
    application:
      "Generic PCB design requirements — pad geometry and annotation conventions",
  },
  {
    standard: "JEDEC MO series",
    application:
      "Package body dimension references for TO, SOT, QFN, BGA families",
  },
  {
    standard: "Customer-specific",
    application:
      "Customer-defined library standards, naming conventions, and property schemas — applied on request",
  },
];

const bomProperties = [
  {
    property: "MPN",
    description:
      "Exact manufacturer part number — not a distributor stock code",
  },
  {
    property: "Manufacturer",
    description: "Full standardised manufacturer name",
  },
  {
    property: "Value / Rating",
    description:
      "Resistance, capacitance, voltage, or functional description per datasheet",
  },
  {
    property: "Footprint",
    description:
      "Linked footprint name validated against the package code in the MPN",
  },
  {
    property: "Lifecycle",
    description:
      "Active, NRND, EOL, or Obsolete — sourced from manufacturer lifecycle data",
  },
  {
    property: "AVL",
    description: "Approved equivalent parts where alternatives exist",
  },
];

const modelOutputFormats = [
  {
    format: "STEP (.stp/.step)",
    description:
      "Universal neutral format — compatible with all major MCAD and EDA tools",
  },
  {
    format: "IGES (.igs)",
    description: "Legacy neutral format for older mechanical CAD environments",
  },
  {
    format: "SolidWorks (.sldprt)",
    description: "Native SolidWorks part for ECAD/MCAD co-design workflow",
  },
  {
    format: "Creo / Pro/E (.prt)",
    description: "Native Creo Parametric part for PTC-based environments",
  },
  {
    format: "Altium / Allegro / PADS",
    description:
      "STEP model linked to footprint for 3D DRC and clearance checking",
  },
];

const faqs = [
  {
    q: "What is included in a production-ready PCB library component, and why does it matter for design quality?",
    a: "A production-ready component consists of three linked elements: a schematic symbol with complete pin definition and BoM properties, a PCB footprint with IPC-7351C-compliant land pattern geometry and full layer structure, and an accurate 3D model with centroid-aligned origin. An incomplete symbol causes ERC failures and BOM errors. A non-IPC footprint reduces assembly yield. A mis-oriented 3D model invalidates mechanical clearance checks and thermal simulation. All three must be correct and linked to produce a reliable design.",
  },
  {
    q: "What does IPC-7351C compliant mean for PCB footprints, and what happens if footprints are not IPC compliant?",
    a: "IPC-7351C specifies land pad dimensions, courtyard clearances, and silkscreen conventions for over 30 package families using three density levels (Most, Nominal, Least). Non-IPC footprints produce insufficient toe fillet under reflow, reducing solder joint strength and increasing intermittent open-circuit failures. In high-volume production, a non-IPC footprint on a common component can depress first-pass yield by several percentage points, generating rework costs far exceeding the cost of a correct library build.",
  },
  {
    q: "How does Qmax ensure zero defects in schematic symbols, PCB footprints, and 3D models?",
    a: "Qmax applies a seven-stage QC process to every library deliverable. The first six stages — source verification, symbol construction, footprint geometry, symbol-footprint cross-check, 3D model verification, and DFM review — are performed by the library engineer. The seventh is an independent review by a second engineer who verifies against the original datasheet. No component is released without that independent sign-off. This process has been validated over 30 years and several hundred thousand library parts.",
  },
  {
    q: "Who owns the PCB library components and associated data that Qmax creates?",
    a: "All deliverables — schematic symbols, PCB footprints, 3D models, property databases, and documentation — are the sole intellectual property of the customer. Qmax retains no rights after delivery. A standard NDA is executed before project commencement, and no customer component data is shared, referenced, or reused in any other project.",
  },
  {
    q: "Can Qmax build PCB library components for any EDA tool or CAD platform?",
    a: "Yes. Qmax delivers components for all major EDA and mechanical CAD formats: Cadence OrCAD Capture, Cadence Capture CIS, Cadence Allegro PCB, Altium Designer, Mentor PADS, Mentor Expedition and xDX Designer, SolidWorks, PTC Creo, STEP AP214, and IGES 5.3. Multi-format delivery — the same component natively built for two or more platforms simultaneously — is available at no surcharge.",
  },
  {
    q: "What makes Qmax PCB footprints DFM-qualified, and how does DFM qualification improve production yield?",
    a: "Qmax's DFM qualification goes beyond IPC-7351C geometry. It includes stencil aperture optimisation for paste release, solder mask clearance verification against fabricator capability, thermal relief configuration for wave and selective solder, and assembly notes for demanding placement requirements. Developed in collaboration with world-leading EMS companies over three decades, this process consistently achieves higher first-pass yields than footprints built from datasheets alone.",
  },
  {
    q: "What level of detail are Qmax 3D models, and can they be used for thermal simulation?",
    a: "Qmax 3D models are built from manufacturer mechanical drawings with exact geometry — individual lead positions, terminal pitch, body height, and standoff dimensions. For thermally critical components, models include thermal interface geometry, exposed pad dimensions, lid geometry, and thermal resistance metadata (θja, θjb, θjc) for thermal solver import. Qmax's models have been used by NVIDIA for graphics card thermal simulation, demanding sub-millimetre accuracy across a high-power-density component population.",
  },
  {
    q: "How does Qmax handle component lifecycle status and EOL risk in the library?",
    a: "Every schematic symbol includes a lifecycle status property — Active, NRND, EOL, or Obsolete — sourced from manufacturer product lifecycle pages and distribution channel data at time of construction. Where a component is NRND or EOL, Qmax identifies active second-source alternatives and populates the AVL field with verified drop-in replacements. Lifecycle status is noted in handover documentation so the design team can make informed sourcing decisions.",
  },
  {
    q: "Can Qmax migrate an existing PCB library from one EDA tool to another without data loss?",
    a: "Yes. Qmax performs library migrations between all major EDA platforms. The process includes extraction of existing data, verification against original datasheets, correction of any errors found, reconstruction in the target platform's native format, and independent QC of migrated components. Migration provides an opportunity to correct errors that have accumulated over years without a formal QC process. The migrated library is delivered as a verified, production-ready asset.",
  },
  {
    q: "What is the typical turnaround time for PCB library component creation, and can Qmax handle large-volume library builds?",
    a: "For individual components, standard turnaround is 24–48 hours from confirmed component identification and format specification. For large-volume builds — 50 to several thousand components — Qmax assigns a dedicated library engineering team and develops a project-specific schedule based on complexity distribution and the customer's design milestones. Qmax has completed builds of several thousand components for major OEM programmes within defined schedules while maintaining the full seven-stage QC process on every component.",
  },
];

export const metadata: Metadata = {
  title: "PCB Library Services | Qmax",
  description:
    "Every PCB design chain is only as reliable as its component library. Qmax Systems delivers schematic symbols, IPC-7351C footprints, and thermal-grade 3D models with a 7-stage zero-defect QC process.",
};

function StandardsTable({
  headers,
  rows,
}: {
  headers: [string, string];
  rows: { label: string; description: string }[];
}) {
  return (
    <div className="overflow-x-auto border border-zinc-200">
      <table className="w-full min-w-[520px] text-left">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50">
            <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
              {headers[0]}
            </th>
            <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className="border-b border-zinc-100 last:border-b-0"
            >
              <td className="px-6 py-5 align-top text-sm font-medium text-zinc-900">
                {row.label}
              </td>
              <td className="px-6 py-5 align-top text-sm font-light leading-relaxed text-zinc-600">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PCBLibraryServicesPage() {
  return (
    <main className="bg-[#fcfcfc] text-zinc-900">
      <section className="relative overflow-hidden pt-14 pb-12 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(243,49,23,0.02),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-zinc-200 group">
            <Image
              src="/pcb-design/pcb_design_main.png"
              alt="PCB Library Services - Qmax Systems"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-5xl">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-6">
                PCB DESIGN SERVICES
              </span>
              <h1 className="text-4xl font-light leading-[1.1] text-zinc-950 md:text-6xl lg:text-7xl tracking-tight">
                PCB Library
                <br className="hidden md:block" />
                Services.
              </h1>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 border-t border-zinc-200 pt-16">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-400">
                / 1. PCB Library Services
              </h2>
            </div>
            <div className="space-y-12 text-xl leading-[1.6] text-zinc-600 font-light max-w-3xl">
              <p className="text-zinc-950 font-normal text-2xl md:text-3xl leading-snug">
                Every PCB design chain is only as reliable as its component
                library. A symbol with an incorrect pin assignment propagates
                silently through logic capture, layout, and fabrication. A
                footprint deviating from IPC-7351 shifts solder-joint geometry
                and degrades yield. A 3D model with incorrect body height causes
                mechanical collisions and invalidates thermal simulation inputs.
              </p>
              <p>
                At Qmax Systems, PCB library development is a formal engineering
                discipline with defined inputs, a 7-stage independent QC
                process, and zero-defect release standards refined over 30
                years. We deliver for all major EDA platforms — OrCAD, Allegro,
                Altium, PADS, Expedition, SolidWorks, Creo, and neutral
                STEP/IGES — with no surcharge for multi-format delivery. All
                deliverables are the sole intellectual property of the customer,
                executed under strict NDA. Our 3D models have been used by
                NVIDIA for graphics card thermal simulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-8">
              1.1 / WHY LIBRARY QUALITY DETERMINES DESIGN SUCCESS
            </span>
            <p className="mt-8 text-xl leading-relaxed text-zinc-600 font-light max-w-3xl">
              Library errors are structural — baked into the netlist, layout,
              and fabrication outputs. Detection at bring-up means a re-spin;
              detection in production means a field return. Common failure modes
              that Qmax&apos;s process prevents:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {libraryFailureModes.map((item) => (
              <div
                key={item.title}
                className="border-t border-zinc-200 pt-8 group hover:bg-zinc-50 px-4 transition-colors"
              >
                <h3 className="text-lg font-light text-zinc-950 mb-3 group-hover:text-red-500 transition-colors">
                  {item.title}:
                </h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-8">
              1.2 / QMAX LIBRARY ENGINEERING STANDARDS
            </span>
            <p className="mt-8 text-xl leading-relaxed text-zinc-600 font-light max-w-3xl">
              Every deliverable is subject to independent QC review before
              release. Core standards include:
            </p>
          </div>

          <StandardsTable
            headers={["Standard", "Application"]}
            rows={engineeringStandards.map((row) => ({
              label: row.standard,
              description: row.application,
            }))}
          />
        </div>
      </section>

      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-8">
              2 / SCHEMATIC SYMBOLS
            </span>
            <p className="mt-8 text-xl leading-relaxed text-zinc-600 font-light max-w-3xl">
              Qmax schematic symbols are complete, accurate, and
              production-ready from first use. Built to IPC and EDA-tool native
              conventions — or to customer-specific schemas on request — every
              symbol carries structured pin data and BoM properties that
              propagate correctly into the netlist, BOM, and footprint
              assignment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">
                  2.1 / Pin Definition
                </h3>
                <p className="text-lg font-light leading-relaxed text-zinc-600">
                  Every pin — without exception — is defined with exact name,
                  physical number, electrical type (Input, Output,
                  Bidirectional, Power, Ground, etc.), swap groups where
                  applicable, and correct visibility for power pins. All data is
                  derived directly from the manufacturer datasheet.
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">
                  2.3 / Symbol Construction
                </h3>
                <p className="text-lg font-light leading-relaxed text-zinc-600">
                  Symbols are grouped by function — not physical pin order — for
                  readability in dense schematic sheets. For large devices
                  (FPGAs, SoCs), multi-part symbols are created per functional
                  bank. Line weights, pin lengths, and layer assignments follow
                  the target EDA tool&apos;s native conventions.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                2.2 / BoM Property Population
              </h3>
              <p className="text-lg font-light leading-relaxed text-zinc-600">
                Every symbol property field is populated from verified primary
                sources, enabling fully automated BOM generation with no manual
                data entry:
              </p>
              <StandardsTable
                headers={["Property", "Description"]}
                rows={bomProperties.map((row) => ({
                  label: row.property,
                  description: row.description,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-8">
              3 / PCB FOOTPRINTS
            </span>
            <p className="mt-8 text-xl leading-relaxed text-zinc-600 font-light max-w-3xl">
              Qmax creates PCB footprints to IPC-7351C standards across all
              three density levels — Most (M), Nominal (N), and Least (L) —
              selected to match the customer&apos;s assembly process, not
              applied as a blanket default. Every footprint is DFM-qualified
              through a production-validated review process developed with
              world-leading EMS companies.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                id: "3.1",
                title: "Land Pattern Geometry",
                body: "Land patterns are calculated per IPC-7351C methodology. The appropriate density level is selected based on assembly process capability, target fabricator, and board density requirements.",
              },
              {
                id: "3.2",
                title: "Footprint Layer Structure",
                body: "Every footprint includes: copper pads per IPC-7351C, pin 1 indicators on silkscreen and assembly layers, silkscreen body outline, courtyard boundary, assembly outline, fab layer notation, component height property, and board-edge clearance markers for edge connectors.",
              },
              {
                id: "3.3",
                title: "DFM Qualification",
                body: "DFM qualification covers stencil aperture optimisation for paste release, solder mask clearance verification against fabricator capability, thermal relief configuration for wave and selective solder, and component-specific assembly notes for demanding placement requirements. Working with top-tier EMS partners over three decades, our footprints consistently achieve first-pass assembly yields exceeding industry averages.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-8 border-t border-zinc-100 hover:bg-zinc-50 transition-colors px-4"
              >
                <h3 className="text-red-500 text-sm font-black uppercase tracking-widest">
                  {item.id} / {item.title}
                </h3>
                <p className="text-zinc-600 font-light leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-8">
              4 / 3D MODELS
            </span>
            <p className="mt-8 text-xl leading-relaxed text-zinc-600 font-light max-w-3xl">
              Qmax 3D models are constructed from manufacturer mechanical
              drawings — not approximated from package templates. Every model
              reflects exact external geometry, tolerance envelope, and fiducial
              orientation. The model origin is precisely centroid-matched to the
              PCB footprint, guaranteeing correct placement, rotation, and
              pick-and-place output files.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-16">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">
                4.1 / Model Construction Standard
              </h3>
              <p className="text-lg font-light leading-relaxed text-zinc-600">
                All models are built from the manufacturer&apos;s official
                mechanical drawing. Nominal dimensions are used for primary
                geometry; worst-case maximum is used for height properties.
                Individual leads, balls, and terminals are modelled with correct
                pitch, diameter, and co-planarity. Body colour and surface
                finish match the manufacturer&apos;s standard package
                appearance.
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">
                4.2 / Thermal Simulation Grade Models
              </h3>
              <p className="text-lg font-light leading-relaxed text-zinc-600">
                For thermally critical components (power ICs, CPUs, GPUs, GaN
                transistors, RF amplifiers), Qmax delivers thermally accurate
                models including die location, thermal resistance metadata (θja,
                θjb, θjc), thermal interface geometry, and exposed pad
                dimensions. These models have been used by NVIDIA for thermal
                simulation of graphics card designs.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">
              4.3 / Supported Output Formats
            </h3>
            <p className="text-lg font-light leading-relaxed text-zinc-600 mb-8 max-w-3xl">
              Qmax delivers 3D models in all formats required by the
              customer&apos;s design environment. Multi-format delivery carries
              no surcharge.
            </p>
            <StandardsTable
              headers={["Format", "Description"]}
              rows={modelOutputFormats.map((row) => ({
                label: row.format,
                description: row.description,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-8">
              5 / ZERO DEFECT LIBRARY PHILOSOPHY
            </span>
          </div>
          <p className="text-xl leading-relaxed text-zinc-600 font-light max-w-4xl">
            A defect in a PCB library propagates through every design using the
            affected component. The cost of library quality is negligible
            compared to the cost of errors at scale. Qmax applies a 7-stage
            independent QC process to every deliverable: (1) source verification
            — datasheet edition confirmed and package code cross-referenced; (2)
            symbol construction review — pin count, names, types, and BoM
            properties verified; (3) footprint geometry verification — land
            pattern, pads, silkscreen, and courtyard confirmed against
            IPC-7351C; (4) symbol-footprint cross-check — pin count and pin 1
            alignment verified; (5) 3D model verification — centroid alignment
            and body dimensions cross-checked; (6) DFM review — solder mask
            clearances and assembly clearances signed off; and (7) independent
            QC release by a second engineer who has not previously seen the
            component. No deliverable is released without that independent
            sign-off. This process has been validated over 30 years and several
            hundred thousand library parts.
          </p>
        </div>
      </section>

      <section className="bg-[#fcfcfc] py-32 border-t border-zinc-200 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mb-12">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-8">
              6 / CONSULTATION
            </span>
            <h2 className="text-4xl font-light text-zinc-950 md:text-5xl lg:text-6xl tracking-tighter max-w-4xl">
              Schedule Your 1-Hour Complimentary PCB Library Technical
              Consultation
            </h2>
            <p className="mt-8 text-xl text-zinc-600 font-light max-w-2xl leading-relaxed">
              Speak directly with a senior Qmax library engineer. We will review
              your existing library, identify structural risks, and provide an
              honest assessment of what needs to be fixed.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-red-500 group uppercase text-[10px] font-black tracking-widest border-b border-[#F33117] pb-2 hover:text-zinc-950 hover:border-zinc-950 transition-all"
          >
            Contact Qmax Systems
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
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} hideTopBorder />

      <section className="bg-[#fcfcfc] py-24 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-zinc-950 md:text-5xl tracking-tighter">
              Start Your PCB Library Project
            </h2>
          </div>
          <div className="space-y-8 text-xl leading-relaxed text-zinc-600 font-light max-w-4xl">
            <p>
              Qmax Systems provides PCB library services to electronics
              companies across server, AI compute, RF, power electronics,
              medical, and automotive segments. Our engineers bring more than
              three decades of production library development experience, a
              documented zero-defect process, and a proven track record with
              leading OEM and EMS organisations.
            </p>
            <p>
              Whether you need a complete library build, an audit of your
              existing library, a migration to a new EDA platform, or library
              support within a broader PCB design programme — contact Qmax to
              discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfc] py-24 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t border-zinc-200 pt-16 pb-8">
            {/* <Link
              href="/contact"
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#F33117] p-6 md:p-10 group hover:bg-white transition-colors duration-500"
            >
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-6 block">
                  Contact Qmax Systems
                </span>
                <span className="text-2xl md:text-4xl lg:text-5xl font-light text-black tracking-tighter leading-tight">
                  Website: www.qmaxsys.com
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
            </Link> */}
            <div className="mt-8 flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-500 px-8">
              <Link
                href="/contact"
                className="hover:text-red-500 transition-colors"
              >
                Contact Us
              </Link>
              <span aria-hidden="true">|</span>
              <Link
                href="/pcb-design"
                className="hover:text-red-500 transition-colors"
              >
                PCB Design Services
              </Link>
              <span aria-hidden="true">|</span>
              <Link
                href="/pcb-design/si-pi-analysis"
                className="hover:text-red-500 transition-colors"
              >
                SI/PI Analysis
              </Link>
            </div>
            <p className="mt-8 px-8 text-sm text-zinc-500 font-light">
              All projects commence under NDA. Library IP belongs to the
              customer.
            </p>
          </div>
        </div>
      </section>

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
        hideTopBorder
      />
    </main>
  );
}
