import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mechanical & Industrial Design Services | Qmax Systems",
  description:
    "At Qmax Systems, our mechanical and industrial design services are specifically tailored for high-stakes electronics, integrating hardware, thermal physics, and manufacturing.",
};

export default function MechanicalIndustrialDesignPage() {
  return (
    <main className="bg-zinc-100 text-zinc-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(24,24,27,0.08),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(82,82,91,0.08),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-zinc-300 bg-zinc-100 px-4 py-1 text-xs uppercase tracking-[0.16em] text-zinc-700">
              Mechanical &amp; Industrial Design
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
              Mechanical &amp; Industrial Design Services
            </h1>
            <div className="mt-6 max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
              <p>
                At Qmax Systems, we understand that an electronics product is more than just a functional PCB; it is a physical entity that must survive its environment, satisfy user ergonomics, and meet stringent regulatory requirements. Our mechanical and industrial design services are specifically tailored for high-stakes electronics, moving beyond generic CAD modeling to provide deep integration between hardware, thermal physics, and manufacturing realities.
              </p>
              <p>
                Whether you are developing a ruggedized MIL-STD-810 tactical device, a high-density power inverter, or a sleek IoT wearable, our team bridges the gap between electrical engineering and mechanical execution. We focus on the critical intersection of PCB mechanical integration, thermal management, and structural integrity to ensure your product is reliable, manufacturable, and aesthetically aligned with your brand identity.
              </p>
              <p>
                By involving our mechanical and industrial designers at the schematic stage, we eliminate the common &quot;design-over-the-wall&quot; friction. We optimize for DFM (Design for Manufacturing) and DFA (Design for Assembly) from day one, reducing iteration cycles and ensuring that your enclosure is not just a box, but a high-performance component of your overall system.
              </p>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-zinc-200 bg-white md:min-h-[420px]">
            <Image
              src="/Mechanical_Industrial_Design_Services.jpg"
              alt="Mechanical & Industrial Design Services"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Design Beyond the PCB */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-zinc-900">
          Design Beyond the PCB: The Strategic Integration of Form and Function
        </h2>
        <div className="mt-6 max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
          <p>
            For advanced electronics, the enclosure is a functional component. It acts as a heat sink, an EMI shield, a structural skeleton, and the primary user interface.
          </p>
          <p>
            Failure to account for mechanical constraints—such as component clearances, connector placements, or thermal dissipation—can lead to costly PCB re-spins and delayed time-to-market.
          </p>
          <p>
            Qmax Systems provides a unified engineering workflow where mechanical constraints drive hardware placement and vice versa. Our approach ensures that industrial design aesthetics never compromise the signal integrity or thermal health of the electronics, resulting in products that excel in both field performance and market appeal.
          </p>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Our Mechanical &amp; Industrial Design Capabilities
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            We offer two distinct yet highly collaborative service streams to support your product development lifecycle.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Mechanical Design Services</h3>
                <p className="text-sm leading-7 text-zinc-700 mb-4">
                  Focused on the structural, thermal, and environmental integrity of the device. We specialize in ruggedized enclosures and complex mechanical systems that protect sensitive electronics in harsh conditions.
                </p>
                <div className="mb-6">
                  <strong className="text-zinc-900 block mb-2 text-sm md:text-base">Key Focus:</strong>
                  <p className="text-zinc-700 text-sm">IP-rated sealing, thermal simulation, MIL-spec compliance, and material selection (Plastics, Machined Alloys, Sheet Metal).</p>
                </div>
              </div>
              <a href="/mechanical-design" className="inline-flex items-center text-sm font-semibold text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition">
                Explore Mechanical Design Services →
              </a>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Industrial Design Services</h3>
                <p className="text-sm leading-7 text-zinc-700 mb-4">
                  Focused on the human element: ergonomics, aesthetics, and user interaction. We transform internal hardware into a market-ready product that communicates quality and ensures a seamless user experience.
                </p>
                <div className="mb-6">
                  <strong className="text-zinc-900 block mb-2 text-sm md:text-base">Key Focus:</strong>
                  <p className="text-zinc-700 text-sm">CMF development, ergonomic studies, UI/UX for hardware, and photorealistic visualization.</p>
                </div>
              </div>
              <a href="/industrial-design" className="inline-flex items-center text-sm font-semibold text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition">
                Explore Industrial Design Services →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Domains Supported */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-zinc-900">
          Electronics Product Domains We Support
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Industrial Automation", desc: "DIN-rail enclosures, HMI panels, and rugged sensors." },
            { title: "IoT & Wearables", desc: "Ultra-compact, low-power devices with complex PCB integration." },
            { title: "Medical Devices", desc: "Biocompatible materials and ISO 13485 compliant design flows." },
            { title: "Defense & Aerospace", desc: "Ruggedized metal enclosures (MIL-STD-810 / JSS55555)." },
            { title: "Electric Vehicles (EV)", desc: "High-power distribution units and thermal management for battery systems." },
            { title: "Telecom & RF", desc: "EMI/EMC shielded housings and outdoor-rated (IP68) infrastructure." }
          ].map((item, idx) => (
            <article key={idx} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg mb-2">{item.title}</h3>
              <p className="text-sm leading-7 text-zinc-700">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* End-to-End Workflow */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-900">
            End-to-End Development Workflow
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            We follow a disciplined engineering phase-gate process to move from concept to mass production:
          </p>
          <div className="mt-8 space-y-3 max-w-4xl">
            {[
              { phase: "Concept & Research", detail: "Defining user requirements, environmental constraints, and technical feasibility." },
              { phase: "Industrial Design & Styling", detail: "Sketching, CMF development, and ergonomic 3D block-outs." },
              { phase: "Detailed Mechanical Engineering", detail: "Full CAD development, PCB mechanical integration, and internal component mounting." },
              { phase: "Simulation & Analysis", detail: "FEA for structural integrity and CFD for thermal management." },
              { phase: "Prototyping", detail: "Rapid prototyping (SLA/SLS/CNC) to validate fit, form, and function." },
              { phase: "DFM/DFA Optimization", detail: "Refining designs for injection molding, casting, or fabrication." },
              { phase: "Production Support", detail: "Finalizing EVT/DVT/PVT phases and coordinating with manufacturing partners." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-700 font-bold text-sm">
                  {idx + 1}
                </div>
                <div className="text-sm leading-7 text-zinc-700 md:text-base">
                  <strong className="text-zinc-900">{step.phase}:</strong> {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mechanical */}
          <div>
            <h2 className="text-3xl font-semibold text-zinc-900 mb-4">Mechanical Design Services</h2>
            <p className="text-sm leading-7 text-zinc-700 md:text-base mb-8">
              Our mechanical design philosophy is rooted in physics. We utilize Finite Element Analysis (FEA) and Thermal Analysis to predict how your electronics will behave under stress, vibration, and extreme temperatures.
            </p>
            <h3 className="text-base font-semibold text-zinc-900 md:text-lg mb-4">Core Competencies:</h3>
            <ul className="space-y-3 mb-8">
              {[
                { title: "Enclosure Design", desc: "Expertise in Plastic Injection Molding, Machined Aluminum, and Sheet Metal Fabrication." },
                { title: "Ruggedization", desc: "Design for shock, vibration, and impact resistance (MIL-STD and JSS standards)." },
                { title: "Environmental Protection", desc: "High-performance sealing for IP65, IP67, and IP68 ratings." },
                { title: "Thermal Management", desc: "Active and passive cooling solutions, including custom heat sinks and airflow optimization." },
                { title: "Kinematic Design", desc: "Precise movement for hinges, sliders, and latching mechanisms." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-bold text-zinc-700">✔</span>
                  <div className="text-sm leading-7 text-zinc-700">
                    <strong className="text-zinc-900">{item.title}:</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
            <a href="/mechanical-design" className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
              Know more about Mechanical Design
            </a>
          </div>

          {/* Industrial */}
          <div>
            <h2 className="text-3xl font-semibold text-zinc-900 mb-4">Industrial Design Services</h2>
            <p className="text-sm leading-7 text-zinc-700 md:text-base mb-8">
              Industrial Design at Qmax is not just &quot;styling.&quot; It is the intentional design of the user&apos;s relationship with the hardware. We ensure that the product is intuitive to use, comfortable to hold, and visually representative of its technical capabilities.
            </p>
            <h3 className="text-base font-semibold text-zinc-900 md:text-lg mb-4">Core Competencies:</h3>
            <ul className="space-y-3 mb-8">
              {[
                { title: "Design Research", desc: "Analyzing market trends and user behavior to inform product architecture." },
                { title: "CMF Development", desc: "Defining Color, Material, and Finish to meet aesthetic and durability goals." },
                { title: "Hardware UI/UX", desc: "Designing touchpoints, button haptics, and display integration." },
                { title: "Visual Communication", desc: "Photorealistic renderings and animations for stakeholder reviews and marketing." },
                { title: "Prototyping", desc: "Multi-stage prototyping from low-fidelity foam models to high-fidelity vacuum casting." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-bold text-zinc-700">✔</span>
                  <div className="text-sm leading-7 text-zinc-700">
                    <strong className="text-zinc-900">{item.title}:</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ul>
            <a href="/industrial-design" className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100">
              Know more about Industrial Design
            </a>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Why Partner with Qmax Systems?
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { tag: "Electronics-First Mindset", desc: "We don't design \"boxes.\" We design thermal and protective environments for sensitive hardware." },
              { tag: "Native PCB Integration", desc: "Our mechanical team works directly in Altium/Allegro environments to ensure 100% mechanical-to-electrical alignment." },
              { tag: "Manufacturing-Ready", desc: "We deliver production-ready CAD files, not just concepts. We understand draft angles, wall thicknesses, and tolerance stacking." },
              { tag: "Cross-Disciplinary Expertise", desc: "Access a single team that understands hardware, firmware, and mechanics." }
            ].map((item, idx) => (
              <article key={idx} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
                <h3 className="text-base font-semibold text-zinc-900 md:text-lg mb-2">{item.tag}</h3>
                <p className="text-sm leading-7 text-zinc-700">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Deliverables */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-zinc-900">
          Engineering Deliverables
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "3D CAD Models", desc: "Native files (SolidWorks/Creo) and neutral formats (STEP/IGES)." },
            { title: "2D Technical Drawings", desc: "Fully dimensioned GD&T drawings for manufacturing." },
            { title: "BOM Documentation", desc: "Complete Bill of Materials including hardware and finishing specs." },
            { title: "Thermal/Structural Reports", desc: "Detailed simulation data and optimization results." },
            { title: "Prototype Units", desc: "Functional assemblies for EVT/DVT testing." }
          ].map((item, idx) => (
            <article key={idx} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base font-semibold text-zinc-900 md:text-lg mb-2">{item.title}</h3>
              <p className="text-sm leading-7 text-zinc-700">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Technical FAQ
          </h2>
          <div className="mt-8 space-y-3">
            {[
              {
                q: "How do you manage heat dissipation in sealed IP67 enclosures?",
                a: "We utilize thermal simulation (CFD) to design internal heat spreaders and utilize the enclosure's external surface area as a heat sink, often employing thermally conductive plastics or metal chassis."
              },
              {
                q: "Can you design for MIL-STD-810G vibration and shock requirements?",
                a: "Yes. We perform FEA-based vibration analysis to identify resonance points and implement ruggedized mounting features or potting compounds where necessary."
              },
              {
                q: "What is the difference between DFM and DFA in your process?",
                a: "DFM (Design for Manufacturing) focuses on the ease of fabricating individual parts (e.g., injection molding), while DFA (Design for Assembly) focuses on reducing part count and simplifying the manual or automated assembly of the final product."
              },
              {
                q: "Do you support PCB thermal profiling?",
                a: "Absolutely. We analyze component-level heat loads on the PCB to design optimized cooling paths, whether through forced air, heat pipes, or thermal interface materials (TIM)."
              },
              {
                q: "How do you ensure the mechanical design doesn't interfere with RF performance?",
                a: "We work closely with RF engineers to select non-interfering materials and design shielding cans or antenna clearances that maintain signal integrity."
              },
              {
                q: "What prototyping methods do you use for functional testing?",
                a: "Depending on the requirement, we use CNC machining for strength, SLA/SLS for high-detail fitment, or vacuum casting for bridge production."
              },
              {
                q: "Can you help with CMF (Color, Material, Finish) specifications?",
                a: "Yes, we provide detailed CMF documents that specify Pantone/RAL colors, texture grades (VDI/MT), and coating types (powder coating, anodizing, etc.)."
              },
              {
                q: "Do you design for intrinsically safe (IS) environments?",
                a: "Yes, we understand the mechanical constraints required for ATEX/IECEx certification, including creepage, clearance, and impact resistance."
              },
              {
                q: "How do you handle tolerance stack-up analysis?",
                a: "We perform worst-case and RSS (Root Sum Squared) tolerance analysis to ensure that parts fit together perfectly across high-volume production runs."
              },
              {
                q: "At what stage should I start mechanical design?",
                a: "Ideally, at the block diagram stage. Early mechanical involvement ensures that the PCB shape and component placement are optimized for the final enclosure size and thermal requirements."
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
        </div>
      </section>

      {/* Professional Engineering Review Block */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <article className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_20px_80px_rgba(24,24,27,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,24,27,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(161,161,170,0.16),transparent_30%)]" />
          <div className="relative grid gap-10 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12 lg:py-12">
            <div>
              <div className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-100 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-700">
                Senior Design Review
              </div>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-zinc-900 md:text-4xl">
                Get a Professional Engineering Review
              </h2>
              <p className="mt-4 max-w-2xl text-base font-semibold text-zinc-900 md:text-lg">
                Ready to move from a breadboard to a professional product? Let our senior engineers review your current progress and provide a roadmap for mechanical and industrial success.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  Schedule Your Consultation
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-[0_16px_40px_rgba(24,24,27,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-300">
                  Review includes
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    {
                      title: "Free Technical Consultation",
                      desc: "1-hour session with a senior design lead.",
                    },
                    {
                      title: "Complimentary Review",
                      desc: "We will review your preliminary schematics and enclosure concepts for DFM/DFA gaps.",
                    },
                  ].map((item, idx) => (
                    <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                        0{idx + 1}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white md:text-base">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-zinc-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)]">
            <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">
              Ready to start your product engineering project?
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
              Whether you are developing a ruggedized MIL-STD-810 tactical device, a high-density power inverter, or a sleek IoT wearable, Qmax Systems delivers production-ready, first-time-right hardware.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Contact Our Engineering Team
              </a>
              <span className="hidden text-sm font-medium text-zinc-400 sm:inline">|</span>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
              >
                Request a Quote for Design Services
              </a>
            </div>
          </article> */}
        </article>
      </section>

      {/* Internal Resources */}
      {/* <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 mb-16 border-t border-zinc-200 text-center">
        <h3 className="text-lg font-semibold text-zinc-900 mb-6">Internal Resources</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/pcb-design" className="text-zinc-700 hover:text-zinc-900 underline text-sm transition-colors">Advanced PCB Design Services</a>
          <span className="text-zinc-300">|</span>
          <a href="/hardware-development-services" className="text-zinc-700 hover:text-zinc-900 underline text-sm transition-colors">Hardware Engineering & Embedded Systems</a>
          <span className="text-zinc-300">|</span>
          <a href="/mechanical-design" className="text-zinc-700 hover:text-zinc-900 underline text-sm transition-colors">Mechanical Design Page</a>
          <span className="text-zinc-300">|</span>
          <a href="/industrial-design" className="text-zinc-700 hover:text-zinc-900 underline text-sm transition-colors">Industrial Design Page</a>
        </div>
      </section> */}
    </main>
  );
}
