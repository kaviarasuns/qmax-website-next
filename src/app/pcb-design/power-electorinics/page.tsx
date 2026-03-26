import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Power Electronics PCB Design | Qmax Systems",
  description:
    "Modern power electronics systems demand more than simple interconnects; they require a holistic electromagnetic and thermal engineering strategy.",
};

export default function PowerElectorinicsPage() {
  return (
    <main className="bg-zinc-100 text-zinc-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(24,24,27,0.08),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(82,82,91,0.08),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-zinc-300 bg-zinc-100 px-4 py-1 text-xs uppercase tracking-[0.16em] text-zinc-700">
              PCB Design
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
              Power Electronics PCB Design
            </h1>
            <div className="mt-6 max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
              <p>
                Modern power electronics systems demand more than simple interconnects; they require a holistic electromagnetic and thermal engineering strategy where the PCB is a functional element of the circuit. At Qmax Systems, we treat power electronics PCB design as a discipline of balancing high-current density, extreme voltage gradients, and rapid switching transients (di/dt and dv/dt).
              </p>
              <p>
                Our engineering team specializes in First-Time-Right PCB design, prioritizing early risk identification to eliminate the costly re-spins often associated with high-power R&D. Whether your project involves 800V EV architectures or kW-level plasma generators, our designs are optimized for reliability, safety, and manufacturability from day one.
              </p>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-zinc-200 bg-white md:min-h-[420px]">
            <Image
              src="/pcb-design/Power-Electronics-PCB.png"
              alt="Power Electronics PCB Design"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Introduction to Power Electronics PCB Engineering Section */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Introduction to Power Electronics PCB Engineering
          </h2>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            Power circuits operate in environments where parasitic inductance and thermal bottlenecks can compromise the entire system. Unlike standard digital boards, Power Electronics PCBs must manage:
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">High-Current Distribution</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">Implementing heavy copper (4oz to 14oz+) and busbar integration to handle 1000A+ DC sources.</p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Creepage and Clearance</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">Adhering to IEC 60601, UL 62368-1, and IPC-2221 standards for high-voltage isolation up to 1500VDC.</p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Switching Noise Mitigation</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">Reducing conducted (CE) and radiated emissions (RE) in high-frequency SiC and GaN MOSFET applications.</p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Thermal Considerations</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">Utilizing metal substrates (IMS), thermal via arrays, and specialized cooling interfaces to prevent junction temperature violations.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-zinc-900">
          Industries Served
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
          Our power electronics expertise supports sectors requiring high-reliability and high-efficiency energy conversion:
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
            <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Industrial Automation</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700">Intelligent motor controllers, 3-phase induction systems, and high-power LF ozone generators.</p>
          </article>
          <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
            <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Renewable Energy &amp; EV</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700">800V Battery Management Systems (BMS), Onboard Chargers (OBC), solar PFC controllers, smart meters, and PF controllers.</p>
          </article>
          <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
            <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Datacenters</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700">50KW Class 3-phase Smart PDUs with integrated power monitoring.</p>
          </article>
          <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
            <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Aerospace &amp; Defense</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700">Ruggedized power modules and high-reliability 1500VDC systems for heavy machinery.</p>
          </article>
        </div>
      </section>

      {/* Why Choose Qmax Systems Section */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Why Choose Qmax Systems?
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Engineering-Led Design</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">All PCB designers at Qmax are Electrical Engineers capable of understanding circuit functionality and perform circuit analysis.</p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">First-Time-Right Philosophy</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">We utilize a structured 25-year evolved process and checklists covering HV safety, EMI, thermal, and manufacturability.</p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Compliance-Ready Layout</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">We focus on CE, FCC, UL, and IEC certification requirements starting from Day 1.</p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">IP Ownership</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">The customer retains 100% ownership of all native CAD files, libraries, and simulation data.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Applications & Real Project Experience Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-zinc-900">
          4. Applications &amp; Real Project Experience
        </h2>
        <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
          Qmax Systems has a proven track record of delivering high-power hardware for complex industrial and automotive applications.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
          <table className="min-w-full">
            <thead>
              <tr className="bg-zinc-100">
                <th className="w-[28%] border-b border-zinc-200 px-4 py-3 text-left text-sm font-semibold text-zinc-900">Application</th>
                <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm font-semibold text-zinc-900">Technical Challenges &amp; Qmax Approach</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">PF Controllers for Load Banks</td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">High voltage PF correction with low THD. Designed optimized PFC loops with controlled switching noise and EMI filtering.</td>
              </tr>
              <tr className="bg-zinc-50 align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">50kW 3-Phase Smart PDU</td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">Bus bar integration for high current distribution. Thermal management using copper planes + mechanical integration.</td>
              </tr>
              <tr className="bg-white align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">800V Battery Management System</td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">HV isolation, active balancing, precision sensing under high noise environment.</td>
              </tr>
              <tr className="bg-zinc-50 align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">3-Phase CLLC Onboard Charger</td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">High-frequency resonant operation. Minimized loop inductance and optimized magnetics placement.</td>
              </tr>
              <tr className="bg-white align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">BLDC / PMSM Motor Controller</td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">High di/dt switching, gate driver isolation, low EMI layout, thermal path optimization.</td>
              </tr>
              <tr className="bg-zinc-50 align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">Smart Energy Meter</td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">High accuracy measurement with isolation and surge protection (EFT/ESD).</td>
              </tr>
              <tr className="bg-white align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">3-Phase Induction Motor Controller</td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">High current switching, robust grounding, EMI suppression techniques.</td>
              </tr>
              <tr className="bg-zinc-50 align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">1kW LF Ozone Generator</td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">High power analog + switching coexistence. CE/IEC compliance achieved.</td>
              </tr>
              <tr className="bg-white align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">1.2kW RF Plasma Generator</td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">RF + power electronics coexistence. Reduced radiated emissions through shielding and layout discipline.</td>
              </tr>
              <tr className="bg-zinc-50 align-top">
                <td className="px-4 py-4 text-sm font-medium text-zinc-900">1500VDC Systems (Heavy Equipment)</td>
                <td className="px-4 py-4 text-sm leading-7 text-zinc-700">Extreme clearance/creepage design, HV safety, insulation coordination.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Complimentary Schematic Review Section */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Complimentary Schematic Review
          </h2>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            Every power electronics engagement includes a complimentary schematic review to identify architectural risks before layout begins:
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">HV/LV Isolation Strategy</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">Reviewing opto-isolation, creepage paths, and magnetic barriers.</p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Magnetics &amp; Filtering</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">Validating transformer winding geometries and EMI filter stages like Pi-filters and Common Mode Chokes.</p>
            </article>
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg">Component Lifecycle</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">Checking for EOL or &quot;At Risk&quot; components to ensure long-term production stability.</p>
            </article>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              📩 Contact us today to schedule your complimentary review
            </a>
          </div>
        </div>
      </section>

      {/* 1-Hour Complimentary Engineering Consultation Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-[linear-gradient(135deg,#18181b_0%,#27272a_45%,#fafafa_45%,#ffffff_100%)] shadow-[0_20px_80px_rgba(24,24,27,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_75%_25%,rgba(24,24,27,0.08),transparent_22%)]" />
          <div className="relative grid gap-8 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-12">
            <article className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-8 text-white backdrop-blur">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-200">
                Complimentary Session
              </p>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
                1-Hour Complimentary Engineering Consultation
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                We offer a free technical session with our senior engineers to discuss your power electronics challenges, surface hidden layout risks, and align the design path before execution.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Format</p>
                  <p className="mt-2 text-sm font-semibold text-white md:text-base">1:1 Engineer Review</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Focus</p>
                  <p className="mt-2 text-sm font-semibold text-white md:text-base">Risk Reduction</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Outcome</p>
                  <p className="mt-2 text-sm font-semibold text-white md:text-base">Faster Design Decisions</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                >
                  Schedule Your 1-Hour Consultation
                </a>
              </div>
            </article>

            <aside className="rounded-[1.5rem] border border-zinc-200/80 bg-white/90 p-6 shadow-[0_12px_40px_rgba(24,24,27,0.08)] backdrop-blur md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                What We Cover
              </p>
              <div className="mt-5 space-y-4">
                <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <h3 className="text-base font-semibold text-zinc-900">Thermal &amp; Current Analysis</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                    Reviewing copper weights, stackup, and material selection including Rogers, Isola, or Metal Core.
                  </p>
                </article>
                <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <h3 className="text-base font-semibold text-zinc-900">EMI/EMC Compliance Strategy</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                    Addressing Conducted (CE) and Radiated (RE) emissions through &quot;EMC-by-design&quot;.
                  </p>
                </article>
                <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <h3 className="text-base font-semibold text-zinc-900">Grounding &amp; Isolation</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                    Evaluating star-grounding and moat-and-bridge structures for high-voltage safety.
                  </p>
                </article>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-zinc-900">
          Frequently Asked Questions: Power Electronics PCB Design
        </h2>
        <div className="mt-8 space-y-3">
          {[
            {
              q: "How do you handle high-current requirements in small form factors?",
              a: "We utilize heavy copper PCBs (up to 14oz+), busbar integration, and thermal via arrays to maximize current-carrying capacity while maintaining a compact footprint."
            },
            {
              q: "What standards do you follow for high-voltage isolation?",
              a: "We strictly adhere to IPC-2221B for generic design and IEC 60601 (Medical) or UL 62368-1 for specific safety clearances and creepage distances."
            },
            {
              q: "How do you mitigate switching noise in SiC or GaN designs?",
              a: 'By minimizing loop inductance in the gate drive and power loops, implementing Pi-filters, and using 3D EM simulation to identify and suppress high-frequency harmonics.'
            },
            {
              q: "Do you design custom magnetics for power converters?",
              a: "Yes. We specify core materials, winding geometries, and litz wire for custom inductors and transformers to optimize efficiency and thermal performance."
            },
            {
              q: "How is thermal management validated?",
              a: "We perform 3D Thermal Analysis to identify hotspots and optimize the interface between the PCB, components, and heatsinks or enclosures."
            },
            {
              q: "Can you assist with boards that failed EMI (CE/RE) testing?",
              a: 'Yes. We provide "rescue" services, using near-field probes to locate noise sources and redesigning layouts to ensure compliance with CE/FCC standards.'
            },
            {
              q: "Do you support busbar-to-PCB integration?",
              a: "Absolutely. We design the mechanical and electrical interfaces for high-current busbars, ensuring reliable connections for industrial PDUs and motor drives."
            },
            {
              q: "What materials are recommended for high-power applications?",
              a: "Beyond standard FR-4, we utilize metal-clad substrates (IMS) for heat dissipation or high-Tg materials for high-temperature environments."
            },
            {
              q: "How do you manage THD in PFC controllers?",
              a: "We focus on precision current sensing layout and low-impedance feedback paths to ensure the controller maintains high power factor and low Total Harmonic Distortion."
            },
            {
              q: "Do you provide fabrication support?",
              a: "Yes. We act as a direct technical liaison with fabrication houses to resolve stackup, material queries, and DFM issues before production."
            }
          ].map((faq, index) => (
            <details key={index} className="group rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 pr-1 text-sm font-semibold leading-6 text-zinc-900 md:text-base">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="text-xs font-medium text-zinc-400 transition-transform duration-200 group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-zinc-700 md:text-base">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
