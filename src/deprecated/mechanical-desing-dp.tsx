import type { Metadata } from "next";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { mechanicalCaseStudiesData } from "@/store/mechanical-case-studies";

const mechanicalCaseStudies = mechanicalCaseStudiesData
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
  title: "Mechanical Design Services | Qmax",
  description:
    "End-to-end precision mechanical engineering for electronics products.",
};

export default function MechanicalDesingDP() {
  return (
    <main className="bg-zinc-100 text-zinc-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-14 pb-12 border-b border-zinc-200 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(24,24,27,0.08),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(82,82,91,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Full-width Image Container */}
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-zinc-200 group">
            <Image
              src="/services/12_mechanical_design_services.jpg"
              alt="Mechanical Design Services - Qmax Systems"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-5xl">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-6">
                MECHANICAL DESIGN SERVICES
              </span>
              <h1 className="text-4xl font-light leading-[1.1] text-zinc-950 md:text-6xl lg:text-7xl tracking-tight">
                Precision Mechanical
                <br className="hidden md:block" />
                Engineering.
              </h1>
            </div>
          </div>
          <div className="mt-10 max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              At Qmax Systems, mechanical design is an integral part of the
              product development process, executed by senior mechanical
              engineers with deep domain knowledge across defence, automotive,
              medical, and industrial electronics.
            </p>
            <p>
              Every enclosure, structural assembly, and mechanical sub-system we
              design is conceived with full awareness of the electronics inside
              it — thermal loads, EMI shielding requirements, PCB mounting
              constraints, connector accessibility, and compliance obligations.
              Our mechanical and electronics teams share the same workspace, the
              same review cycles, and the same zero-defect quality standard.
            </p>
          </div>
        </div>
      </section>

      {/* Global Manufacturing & Partnerships */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Global Manufacturing & Ecosystem Partnerships
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              We maintain active working relationships with sheet metal
              fabricators, CNC machining houses, and plastic injection moulding
              companies across India, Europe, and Southeast Asia. Whether you
              require prototype or volume production — we select the right
              manufacturing partner based on material, tolerance, finish, lead
              time, and cost, drawing on over three decades of vendor
              qualification experience.
            </p>
            <p>
              All mechanical design work is fully documented with clear,
              unambiguous GD&T (Geometric Dimensioning and Tolerancing) on every
              drawing, ensuring any qualified vendor can manufacture to
              specification without further interpretation. We have designed
              products for the world&apos;s top automotive and medical
              electronics OEMs, and the same documentation rigour applies
              regardless of project scale.
            </p>
          </div>
        </div>
      </section>

      {/* Plastic Enclosure Design */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-4 text-zinc-400 mb-6">
                <span className="text-5xl font-light tracking-tighter">01</span>
                <div className="h-px w-12 bg-zinc-300"></div>
              </div>
              <h2 className="text-3xl font-semibold text-zinc-900 mb-4 uppercase tracking-tight">
                Plastic Enclosure Design
              </h2>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
                Plastic Enclosure Design for Electronics
              </p>
              <p className="text-sm leading-7 text-zinc-700 md:text-base italic bg-zinc-100/50 p-4 border-l-2 border-zinc-300">
                Plastic enclosures represent the most common housing choice for
                consumer electronics, industrial handheld devices, and
                cost-sensitive IoT products. Qmax Systems designs
                injection-moulded plastic enclosures that balance structural
                integrity, thermal performance, EMI management, and tooling cost
                — with a clear path from concept to mass production.
              </p>
            </div>
            <div className="lg:w-2/3 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
                    Materials We Work With
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Polycarbonate (PC), ABS, PC-ABS blends",
                      "Nylon (PA6 / PA66) and glass-filled engineering variants",
                      "Teflon (PTFE) for specialised chemical or dielectric applications",
                      "UV-stabilised grades, flame-retardant UL94-V0 compliant materials",
                    ].map((material, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 group-hover:bg-zinc-900 transition-colors"></span>
                        <span className="text-sm text-zinc-700 leading-relaxed">
                          {material}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
                    Design Considerations Addressed
                  </h3>
                  <p className="text-sm leading-7 text-zinc-700 lg:text-justify">
                    Our enclosure design process covers draft angles, parting
                    line placement, wall thickness uniformity, rib and boss
                    geometry, snap-fit and living hinge design, insert moulding
                    for threaded interfaces, and EMI gasket seating. For
                    RF-transparent products (Wi-Fi, 4G, GPS), we analyse
                    dielectric properties and wall thickness effects on signal
                    attenuation. Surface finish options — texture, gloss,
                    painting, soft-touch coating, pad printing, in-mould
                    labelling — are specified during the design phase.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-zinc-200"></span>
                  <span>Portfolio</span>
                  <span className="h-px flex-1 bg-zinc-200"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-base font-semibold text-zinc-900 mb-2">
                      Wi-Fi Security Device Enclosure
                    </h4>
                    <p className="text-sm leading-6 text-zinc-600">
                      Low tooling cost, integrated EMI suppression geometry,
                      antenna keep-out zones for maximum Wi-Fi throughput.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-base font-semibold text-zinc-900 mb-2">
                      Handheld OBD2 Diagnostic Device
                    </h4>
                    <p className="text-sm leading-6 text-zinc-600">
                      (4G, Wi-Fi, LCD, battery) designed for workshop
                      environments with drop resistance, ergonomic grip
                      geometry, and internal RF coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Metal Enclosures */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-4 text-zinc-400 mb-6">
              <span className="text-5xl font-light tracking-tighter">02</span>
              <div className="h-px w-12 bg-zinc-300"></div>
            </div>
            <h2 className="text-3xl font-semibold text-zinc-900 mb-4 uppercase tracking-tight">
              Metal Enclosures
            </h2>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              Machined Aluminium, Sheet Metal & Extruded Enclosures
            </p>
            <p className="text-sm leading-7 text-zinc-700 md:text-base italic bg-zinc-50 p-4 border-l-2 border-zinc-900">
              Metal enclosures are the correct engineering choice when the
              application demands superior EMI shielding, higher structural
              rigidity, thermal conductance, or a longer service life under
              mechanical or environmental stress. Qmax designs and sources all
              three principal metal enclosure types.
            </p>
          </div>
          <div className="lg:w-2/3 space-y-12">
            {/* Type Comparison Table */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 text-white">
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider border-r border-zinc-800">
                        Type
                      </th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider border-r border-zinc-800">
                        Typical Application
                      </th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                        Key Advantage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {[
                      {
                        type: "CNC Machined Aluminium",
                        app: "RF modules, high-precision chassis, defence sub-systems",
                        adv: "Tight tolerances, complex geometry, excellent EMI shielding",
                      },
                      {
                        type: "Sheet Metal (SPCC, SS, Al)",
                        app: "Industrial electronics, rack-mount chassis, control panels",
                        adv: "Cost-effective for mid-volume, good structural-to-weight ratio",
                      },
                      {
                        type: "Aluminium Extrusion",
                        app: "Heat-dissipating enclosures, DIN rail housings",
                        adv: "Integral heat sink geometry, excellent thermal path, low per-unit cost",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200">
                          {row.type}
                        </td>
                        <td className="px-6 py-4 text-zinc-600 border-r border-zinc-200">
                          {row.app}
                        </td>
                        <td className="px-6 py-4 text-zinc-600 italic">
                          {row.adv}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Materials and Surface Treatments */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-zinc-200"></span>
                <span>Materials and Surface Treatments</span>
                <span className="h-px flex-1 bg-zinc-200"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl border border-zinc-200 bg-white">
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-3">
                    Materials
                  </h4>
                  <p className="text-sm text-zinc-600 leading-6">
                    Aluminium Alloy 6061-T6, 5052; Stainless Steel 304 / 316;
                    SPCC mild steel
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-zinc-200 bg-white">
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-3">
                    Core Treatments
                  </h4>
                  <p className="text-sm text-zinc-600 leading-6">
                    Anodising Type II / Type III; Chromate conversion; Powder
                    coating
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-zinc-200 bg-white">
                  <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-3">
                    Precision Plating
                  </h4>
                  <p className="text-sm text-zinc-600 leading-6">
                    Gold plating; Electroless nickel; Hard chrome for
                    wear-critical interfaces
                  </p>
                </div>
              </div>
              <p className="mt-8 text-xs font-medium text-zinc-500 text-center uppercase tracking-widest bg-zinc-100 py-3 rounded-lg border border-zinc-200">
                Surface treatment selection is driven by corrosion environment,
                contact resistance requirements, cosmetic specification, and
                applicable MIL-SPEC surface treatment standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Military Rugged Enclosures */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-4 text-zinc-400 mb-6">
                <span className="text-5xl font-light tracking-tighter">03</span>
                <div className="h-px w-12 bg-zinc-300"></div>
              </div>
              <h2 className="text-3xl font-semibold text-zinc-900 mb-4 uppercase tracking-tight">
                Military Rugged Enclosures
              </h2>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6 leading-relaxed">
                Rugged Metal Enclosures for Military Applications — MIL-STD-810
                / JSS 55555
              </p>
              <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base italic bg-zinc-100/50 p-4 border-l-2 border-zinc-900">
                <p>
                  Military and defence electronics operate in environments
                  placing extreme demands on mechanical structures: wide
                  temperature cycling, humidity, fungus exposure, sand and dust
                  ingress, shock from weapons fire, vibration from vehicles and
                  helicopters, and altitude.
                </p>
                <p>
                  Qmax Systems designs rugged enclosures to MIL-STD-810H (US
                  military environmental engineering standard) and JSS 55555
                  (Indian DRDO/DGQA equivalent), with full documentation
                  supporting test qualification. Structural analysis is
                  performed before hardware is built, reducing prototype-test
                  cycles.
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-12">
              <div className="">
                <h3 className="text-lg font-semibold text-zinc-900 mb-6 flex items-center gap-3 decoration-zinc-200 decoration-1 underline-offset-8 underline">
                  Design Approach for MIL-Grade Enclosures
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Aluminium alloy castings and extruded / machined Al chassis",
                    "Conformal sealed interfaces; EMI gasket seating (finger stock, wire mesh)",
                    "Captive fastener systems; shock and vibration isolation mounts",
                    "Thermal management integration; MIL-connector cutouts to specification",
                  ].map((approach, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-white shadow-sm group hover:border-zinc-900 transition-all"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-zinc-900 leading-snug">
                        {approach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_8px_32px_rgba(24,24,27,0.04)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                  <svg
                    className="h-32 w-32"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                  </svg>
                </div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-100 flex items-center justify-between">
                    Portfolio Case Study
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 px-3 py-1 rounded-full border border-zinc-200">
                      Manpack Comms
                    </span>
                  </h3>
                  <h4 className="text-sm font-bold text-zinc-800 mb-3">
                    Manpack Communication Equipment
                  </h4>
                  <p className="text-sm leading-7 text-zinc-600">
                    Ultra-lightweight Al-alloy manpack for defence application.
                    MIL-STD-810 qualified for vibration, shock, temperature, and
                    humidity. Weight optimisation was a primary design
                    constraint alongside full RF shielding integrity and
                    field-maintainability requirements. Designed in close
                    collaboration with the RF and power electronics teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* IP-Rated Enclosures */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-4 text-zinc-400 mb-6">
              <span className="text-5xl font-light tracking-tighter">04</span>
              <div className="h-px w-12 bg-zinc-300"></div>
            </div>
            <h2 className="text-3xl font-semibold text-zinc-900 mb-4 uppercase tracking-tight">
              IP-Rated Enclosures
            </h2>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              IP-Rated Enclosures — IP65 / IP67 / IP68
            </p>
            <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base italic bg-zinc-50 p-4 border-l-2 border-zinc-900">
              <p>
                Ingress protection ratings under IEC 60529 govern resistance to
                solid particulates (first digit) and liquid ingress (second
                digit). Achieving a given IP rating is a mechanical engineering
                problem.
              </p>
              <p>
                It requires correct selection and compression of sealing
                elements, proper surface flatness and roughness at sealing
                interfaces, appropriate fastener torque specifications, cable
                entry gland selection, and connector IP rating matching.
              </p>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-12">
            {/* IP Rating Comparison Table */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 text-white">
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider border-r border-zinc-800">
                        IP Rating
                      </th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider border-r border-zinc-800 text-center">
                        Solid / Liquid Protection
                      </th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                        Typical Application
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {[
                      {
                        rating: "IP65",
                        solid: "Dust-tight",
                        liquid: "Water jets from any direction",
                        app: "Outdoor industrial, field instruments",
                      },
                      {
                        rating: "IP67",
                        solid: "Dust-tight",
                        liquid: "Immersion 1 m / 30 min",
                        app: "Handheld devices, marine equipment",
                      },
                      {
                        rating: "IP68",
                        solid: "Dust-tight",
                        liquid: "Continuous immersion (specified depth)",
                        app: "Subsea, underwater sensors",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200">
                          {row.rating}
                        </td>
                        <td className="px-6 py-4 text-zinc-600 border-r border-zinc-200">
                          <div className="flex flex-col items-center">
                            <span className="font-bold">{row.solid}</span>
                            <span className="text-xs text-zinc-400">
                              {row.liquid}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-zinc-600">{row.app}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-100 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-zinc-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
                  </svg>
                  Seal Design and Validation
                </h3>
                <p className="text-sm leading-7 text-zinc-700">
                  We specify O-ring cross-section, durometer, and groove
                  geometry per standard engineering practice. Gasket materials —
                  silicone, EPDM, Viton — are selected based on temperature
                  range, chemical exposure, and compression set requirements.
                  All IP-rated designs are validated at the nearest accredited
                  test facility before production release.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-900 text-white shadow-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50"></div>
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-zinc-800 flex items-center justify-between relative">
                  Portfolio
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20">
                    Satellite Comms
                  </span>
                </h3>
                <h4 className="text-sm font-bold text-zinc-100 mb-3 relative">
                  Satellite Antenna Stabiliser
                </h4>
                <p className="text-sm leading-6 text-zinc-400 relative group-hover:text-zinc-300 transition-colors">
                  Shipborne system maintaining antenna pointing towards a
                  geostationary satellite while the vessel moves, rolls, and
                  turns. Salt-laden marine environment requiring IP-rated
                  enclosures, corrosion-resistant materials, and sealed cable
                  penetrations. Full system mechanical design delivered by Qmax.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Full Mechanical Systems */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-4 text-zinc-400 mb-6">
                <span className="text-5xl font-light tracking-tighter">05</span>
                <div className="h-px w-12 bg-zinc-300"></div>
              </div>
              <h2 className="text-3xl font-semibold text-zinc-900 mb-4 uppercase tracking-tight">
                Full Mechanical Systems
              </h2>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
                Full Mechanical Systems Design
              </p>
              <p className="text-sm leading-7 text-zinc-700 md:text-base italic bg-zinc-100/50 p-4 border-l-2 border-zinc-900">
                Beyond enclosures, Qmax Systems undertakes complete mechanical
                system design for products that include moving parts,
                mechanisms, electromechanical actuation, or complex multi-body
                assemblies. Our capability spans kinematic design and mechanism
                analysis through detailed part design, assembly drawing sets,
                and BOM for procurement.
              </p>
            </div>
            <div className="lg:w-2/3 space-y-12">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-6 pb-2 border-b border-zinc-200">
                  System-Level Mechanical Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Mechanism Design & Kinematics",
                      desc: "Linkage geometry, cam and follower, pivot and hinge design, travel limits, actuation force analysis",
                    },
                    {
                      title: "Electromechanical Integration",
                      desc: "Motor and actuator mounting, encoder alignment, harness routing within mechanical sub-systems",
                    },
                    {
                      title: "Optical and Sensor Systems",
                      desc: "Mechanical design of optical assemblies and precision mounting structures",
                    },
                    {
                      title: "Cable Management",
                      desc: "EMI-segregated routing, strain relief design, bend radius compliance",
                    },
                  ].map((cap, idx) => (
                    <div
                      key={idx}
                      className="group p-5 rounded-xl border border-zinc-200 bg-white shadow-sm hover:border-zinc-900 transition-all"
                    >
                      <h4 className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-wide group-hover:text-zinc-600 transition-colors">
                        {cap.title}
                      </h4>
                      <p className="text-sm text-zinc-600 leading-6">
                        {cap.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_8px_32px_rgba(24,24,27,0.04)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                  <svg
                    className="h-32 w-32"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L16.5,11L15.08,9.58L11,13.67L8.92,11.59L7.5,13L11,16.5Z" />
                  </svg>
                </div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-100 flex items-center justify-between">
                    Portfolio Case Study
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 px-3 py-1 rounded-full border border-zinc-200">
                      Medical Systems
                    </span>
                  </h3>
                  <h4 className="text-sm font-bold text-zinc-800 mb-3">
                    Foot Switch for Ophthalmic Surgery (Cataract)
                  </h4>
                  <p className="text-sm leading-7 text-zinc-600">
                    Ergonomic, ultra-high-precision foot switch for eye cataract
                    surgery equipment. Precisely calibrated actuation force and
                    travel, repeatable tactile feedback, full EMC compliance.
                    Medical-grade materials, IP-rated, CE-marked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DFx Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-4 text-zinc-400 mb-6">
              <span className="text-5xl font-light tracking-tighter">06</span>
              <div className="h-px w-12 bg-zinc-300"></div>
            </div>
            <h2 className="text-3xl font-semibold text-zinc-900 mb-4 uppercase tracking-tight">
              DFx
            </h2>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              MT, Cost, Assembly & Compliance
            </p>
            <p className="text-sm leading-7 text-zinc-700 md:text-base italic bg-zinc-50 p-4 border-l-2 border-zinc-900">
              A mechanical design that cannot be manufactured repeatably and
              economically is not a finished design. Qmax applies DFx
              disciplines throughout the design process — as concurrent
              engineering that shapes every design decision from the earliest
              concept phase.
            </p>
          </div>
          <div className="lg:w-2/3 space-y-12">
            {/* DFx Discipline Table */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 text-white">
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider border-r border-zinc-800">
                        DFx Discipline
                      </th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                        What We Address
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {[
                      {
                        discipline: "DFM — Manufacturability",
                        address:
                          "Tolerances set to process capability. Features designed to the manufacturing method. Tooling complexity minimised.",
                      },
                      {
                        discipline: "DFC — Cost",
                        address:
                          "Material selection, process route, finish specification, and fastener standardisation evaluated for BOM cost.",
                      },
                      {
                        discipline: "DFA — Assembly",
                        address:
                          "Part count minimisation, self-locating features, fastener access, tooling access, and assembly sequence reviewed.",
                      },
                      {
                        discipline: "DFC — Compliance",
                        address:
                          "RoHS, REACH, CE marking, MIL, JSS, IEC, ISO addressed at design stage, not at submission.",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200 whitespace-nowrap">
                          {row.discipline}
                        </td>
                        <td className="px-6 py-4 text-zinc-600 leading-relaxed">
                          {row.address}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Documentation Standard */}
            <div className="p-8 rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg
                  className="h-40 w-40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M11.2,18.46L15.07,14.59L13.66,13.18L11.2,15.64L9.78,14.22L8.37,15.63L11.2,18.46Z" />
                </svg>
              </div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-zinc-900 mb-6 pb-2 border-b border-zinc-200 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-zinc-900"></span>
                  Documentation Standard
                </h3>
                <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
                  <p>
                    Every design released from Qmax carries a fully dimensioned,
                    GD&T-annotated drawing set prepared to **ISO 286 / ASME
                    Y14.5 standards**. Tolerances are set based on functional
                    requirements and the manufacturing process — not copied from
                    default CAD settings.
                  </p>
                  <p>
                    Drawing packages include part drawings, assembly drawings,
                    BOM, material callouts, surface finish callouts, and
                    applicable standard references. Any competent machine shop
                    or toolmaker can manufacture from our drawings without
                    verbal clarification.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["ISO 286", "ASME Y14.5", "GD&T", "RoHS/REACH"].map(
                    (std) => (
                      <div
                        key={std}
                        className="px-4 py-2 rounded-lg bg-white border border-zinc-200 text-center text-[10px] font-bold text-zinc-400 uppercase tracking-widest shadow-sm"
                      >
                        {std}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Thermal & Structural Analysis Section */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-4 text-zinc-400 mb-6">
                <span className="text-5xl font-light tracking-tighter">07</span>
                <div className="h-px w-12 bg-zinc-300"></div>
              </div>
              <h2 className="text-3xl font-semibold text-zinc-900 mb-4 uppercase tracking-tight">
                Thermal & Structural Analysis
              </h2>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
                Vibration / Impact / Drop / Thermal CFD
              </p>
              <p className="text-sm leading-7 text-zinc-700 md:text-base italic bg-zinc-100/50 p-4 border-l-2 border-zinc-900">
                Structural and thermal failures in electronics products are
                almost always predictable — if the analysis is done. Qmax
                performs FEA-based structural analysis and CFD-informed thermal
                analysis to identify and eliminate failure modes before hardware
                is fabricated.
              </p>
            </div>
            <div className="lg:w-2/3 space-y-12">
              {/* Thermal Analysis */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-4 pb-2 border-b border-zinc-200 uppercase tracking-wide">
                  Thermal Analysis & CFD
                </h3>
                <p className="text-sm leading-7 text-zinc-700 mb-6">
                  We perform steady-state and transient thermal analysis of
                  electronics enclosures and sub-systems, including natural
                  convection, forced convection, conduction-cooled assemblies,
                  and phase-change thermal interface systems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Junction-to-ambient thermal resistance modelling",
                    "Hotspot identification and heat sink geometry optimisation",
                    "Thermal interface material (TIM) selection",
                    "Thermal derating validation and vent sizing",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 bg-white shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-900"></span>
                      <span className="text-sm text-zinc-600 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structural and Dynamic Analysis Table */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-6 pb-2 border-b border-zinc-200 uppercase tracking-wide">
                  Structural & Dynamic Analysis
                </h3>
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-zinc-900 text-white">
                          <th className="px-6 py-4 font-semibold uppercase tracking-wider border-r border-zinc-800">
                            Analysis Type
                          </th>
                          <th className="px-6 py-4 font-semibold uppercase tracking-wider border-r border-zinc-800">
                            Standard / Method
                          </th>
                          <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                            Expected Output
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200">
                        {[
                          {
                            type: "Static Stress",
                            meth: "FEA (linear / non-linear)",
                            out: "Safety factors, stress concentrations, deflection maps",
                          },
                          {
                            type: "Modal Analysis",
                            meth: "FEA eigenvalue extraction",
                            out: "Natural frequencies, mode shapes, resonance risk",
                          },
                          {
                            type: "Vibration (Sinusoidal)",
                            meth: "MIL-STD-810 / DO-160",
                            out: "Stress response, fatigue life estimate",
                          },
                          {
                            type: "Vibration (Random)",
                            meth: "MIL-STD-810 / JSS 55555",
                            out: "RMS stress, component reliability prediction",
                          },
                          {
                            type: "Mechanical Shock",
                            meth: "MIL-STD-810 Method 516.8",
                            out: "Peak response, component survivability",
                          },
                          {
                            type: "Drop Test Analysis",
                            meth: "IEC 60068-2-31",
                            out: "Impact force, energy absorption, failure prediction",
                          },
                        ].map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-zinc-50 transition-colors"
                          >
                            <td className="px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200">
                              {row.type}
                            </td>
                            <td className="px-6 py-4 text-zinc-500 border-r border-zinc-200 italic">
                              {row.meth}
                            </td>
                            <td className="px-6 py-4 text-zinc-600 font-medium">
                              {row.out}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <p className="text-xs font-semibold text-zinc-500 text-center uppercase tracking-[0.2em] bg-zinc-200/50 py-4 rounded-xl border border-zinc-200">
                Analysis results directly inform design decisions — wall
                thickness, rib placement, fastener torque, and PCB support boss
                location.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Selected Portfolio Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-4 text-zinc-400 mb-6">
              <span className="text-sm font-bold uppercase tracking-[0.2em]">
                Portfolio
              </span>
              <div className="h-px w-12 bg-zinc-300"></div>
            </div>
            <h2 className="text-3xl font-semibold text-zinc-900 mb-4 uppercase tracking-tight">
              Selected Portfolio
            </h2>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
              Reference Products
            </p>
            <p className="text-sm leading-7 text-zinc-700 md:text-base italic bg-zinc-50 p-4 border-l-2 border-zinc-900">
              Qmax Systems has designed mechanical systems for leading
              automotive, defence, and medical electronics companies. A
              selection of completed projects:
            </p>
          </div>
          <div className="lg:w-2/3">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 text-white">
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider border-r border-zinc-800">
                        Sector
                      </th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider border-r border-zinc-800">
                        Product
                      </th>
                      <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                        Key Engineering Challenge
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {[
                      {
                        sector: "Defence",
                        product: "Manpack Communication Equipment",
                        challenge:
                          "Ultra-lightweight Al-alloy, MIL-STD-810 qualified, field-maintainable",
                      },
                      {
                        sector: "Marine / Satcom",
                        product: "Satellite Antenna Stabiliser",
                        challenge:
                          "Shipborne, IP-rated, 3-axis motion compensation in salt environment",
                      },
                      {
                        sector: "Medical",
                        product: "Ophthalmic Surgery Foot Switch",
                        challenge:
                          "Precision actuation, ergonomic, IP-rated, CE-marked medical device",
                      },
                      {
                        sector: "IoT / Security",
                        product: "Wi-Fi Security Device Enclosure",
                        challenge:
                          "Low-cost injection moulding, EMI geometry, antenna throughput optimised",
                      },
                      {
                        sector: "Automotive",
                        product: "Handheld OBD2 Diagnostic Device",
                        challenge:
                          "Workshop-grade, 4G/Wi-Fi/LCD/battery, drop-resistant, ergonomic grip",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200 whitespace-nowrap">
                          {row.sector}
                        </td>
                        <td className="px-6 py-4 text-zinc-900 font-medium border-r border-zinc-200">
                          {row.product}
                        </td>
                        <td className="px-6 py-4 text-zinc-600 leading-relaxed font-normal italic">
                          {row.challenge}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 mb-16">
        <article className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-[0_24px_100px_rgba(24,24,27,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,24,27,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(161,161,170,0.12),transparent_30%)]" />
          <div className="relative grid gap-12 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-800">
                Engineering Strategy Session
              </div>
              <h2 className="text-4xl font-semibold leading-[1.1] text-zinc-900 md:text-5xl">
                1-Hour Complimentary <br />
                Engineering Consultation
              </h2>
              <p className="max-w-2xl text-base leading-[1.75] text-zinc-600 font-medium md:text-lg">
                Bring your mechanical design challenge to a working session with
                a Qmax senior mechanical engineer. We will review your
                requirements, identify critical design decisions, and outline a
                realistic path to a compliant, manufacturable product.
                <span className="block mt-4 text-zinc-900 font-bold">
                  No sales presentation. No obligations.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-zinc-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-lg active:scale-[0.98]"
                >
                  Schedule Your Session
                </a>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 italic">
                    Response time
                  </span>
                  <span className="text-sm font-bold text-zinc-900">
                    Within one business day
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 relative">
              <div className="absolute -inset-4 bg-zinc-100/50 rounded-[2rem] blur-2xl -z-10"></div>
              <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-8 text-white shadow-[0_32px_64px_rgba(24,24,27,0.2)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8 flex items-center gap-3">
                  <span className="h-px flex-1 bg-zinc-800"></span>
                  What we cover
                  <span className="h-px flex-1 bg-zinc-800"></span>
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Technical Feasibility",
                      desc: "Evaluating materials and manufacturing routes.",
                    },
                    {
                      title: "Compliance Roadmap",
                      desc: "Identifying required standards (MIL, IP, ISO).",
                    },
                    {
                      title: "Cost Optimization",
                      desc: "DFM/DFA strategies for your BOM.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5 group">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
                        0{idx + 1}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs leading-5 text-zinc-400 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-zinc-800 flex items-center justify-center">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center italic">
                    Expert Guidance for Modern Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* FAQ Section */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-semibold text-zinc-900 md:text-5xl tracking-tight leading-[1.1]">
            Start a Mechanical Design Engagement
          </h2>
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed font-medium italic translate-y-[-8px]">
            &quot;Whether you have a full specification or an early-stage
            concept, the right time to engage a mechanical design team is before
            the electronics layout is frozen — not after.&quot;
          </p>
          <div className="pt-8 flex flex-col items-center gap-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-10 py-5 text-sm font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-2xl active:scale-[0.98]"
            >
              Contact Qmax Systems to discuss your requirements
            </a>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 px-4 py-1.5 rounded-full border border-zinc-200">
              Expert-Level Consultation • Response in 1 Business Day
            </p>
          </div>
        </div>
      </section>
      <FAQSection
        faqs={[
          {
            q: "What mechanical design software does Qmax Systems use?",
            a: "Qmax uses professional-grade 3D CAD tools for solid modelling, assembly design, and drawing preparation. FEA and thermal simulation are performed with dedicated analysis software. All deliverables are provided in native format plus neutral exchange formats (STEP, IGES, PDF) to ensure vendor and customer compatibility.",
          },
          {
            q: "Can Qmax manage both the mechanical design and production sourcing?",
            a: "Yes. Qmax manages the full cycle from design to qualified prototype and can extend to volume production sourcing. We select manufacturing partners — injection moulders, sheet metal shops, CNC machining houses — based on capability, quality system, location, and lead time. Our 30-year vendor relationships mean we can benchmark cost and qualify suppliers faster than most internal engineering teams.",
          },
          {
            q: "How does Qmax approach MIL-STD-810 mechanical qualification?",
            a: "Qualification begins at the design stage, not at the test lab. We identify applicable MIL-STD-810 test methods for the deployment environment, build structural analysis models to predict response, and design the enclosure to pass with margin. Physical testing at our nearby accredited test facility then validates the analysis. This minimises test failures and re-spin cycles.",
          },
          {
            q: "What is the difference between IP65, IP67, and IP68, and how do you ensure compliance?",
            a: "IP65 is dust-tight and resistant to water jets. IP67 adds immersion to 1 m for 30 minutes. IP68 covers continuous immersion at depths agreed between manufacturer and customer. Compliance is achieved through correct gasket geometry, material, and compression design. We design all sealing interfaces to published standards, specify fastener torque, and validate at our nearby IP test facility before production release.",
          },
          {
            q: "Does Qmax provide GD&T drawings suitable for direct issue to vendors?",
            a: "Yes. All drawing packages from Qmax carry full GD&T per ISO 286 and ASME Y14.5. Tolerances are set based on functional requirements and the manufacturing process, not from default CAD settings. Any qualified machine shop or toolmaker can manufacture from our drawings without needing clarification.",
          },
          {
            q: "How does Qmax integrate mechanical and electronics design to avoid late-stage conflicts?",
            a: "Mechanical and electronics engineers at Qmax work on the same product concurrently, not in series. PCB outline, connector locations, heat-generating component positions, and antenna keep-out zones are exchanged between teams continuously. This eliminates the common failure mode where a finalised PCB does not fit a finalised enclosure.",
          },
          {
            q: "What materials has Qmax worked with beyond standard aluminium and steel?",
            a: "We have designed parts in PTFE (Teflon), stainless steel (304, 316), polycarbonate, ABS, nylon (PA6/PA66), glass-filled engineering plastics, and titanium alloys. Surface treatments include Type II and III anodising, chromate conversion, electroless nickel, hard chrome, powder coating, and gold plating for low-contact-resistance applications.",
          },
          {
            q: "Can Qmax help reduce the manufacturing cost of an existing design?",
            a: "Yes. Design-for-cost review is a standard Qmax service. Common cost reduction opportunities include: over-toleranced drawings that force expensive machining, unnecessarily tight surface finish specifications, complex geometries that increase tooling cost, non-standard fasteners, and material overspecification. A structured DFM/DFC review typically identifies 10-25% BOM cost reduction in designs not originally optimised for production.",
          },
          {
            q: "Does Qmax handle mechanical compliance for medical electronics products?",
            a: "Yes. We have designed Class I and Class II medical device enclosures with documentation supporting CE marking and IEC 60601 mechanical requirements, including creepage and clearance compliance, UL94 flammability-rated materials, biocompatible materials where required, and IP ratings for clinical environments.",
          },
          {
            q: "What is the typical timeline from mechanical concept to qualified prototype?",
            a: "A standard plastic enclosure for a handheld device — concept through injection-moulded prototype and IP test — typically runs 8-12 weeks. A MIL-STD-810-qualified rugged metal enclosure, including FEA, machined prototype, and formal test campaign, typically runs 14-20 weeks. Detailed schedules are agreed at project kick-off and include gate reviews at concept freeze, detailed design release, and prototype receipt.",
          },
        ]}
      />

      <ServiceCaseStudiesSection
        eyebrow="Mechanical Portfolio"
        studies={mechanicalCaseStudies}
        hideTopBorder
      />
    </main>
  );
}
