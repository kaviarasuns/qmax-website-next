import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

const faqs = [
  {
    question:
      "What high-speed design standards does Qmax Systems support?",
    answer:
      "We specialize in the latest high-speed communication standards, including PCIe Gen 5/6, DDR5, and 112G SerDes. Our engineering team utilizes advanced simulation tools to ensure signal integrity (SI) and power integrity (PI) for data rates exceeding 100Gbps.",
  },
  {
    question: "Can you design custom hardware for AI and Deep Learning?",
    answer:
      "Yes. We develop High-Density AI GPU Compute Servers tailored for massive parallel processing. Our designs focus on robust power delivery networks (PDN) and advanced thermal management strategies required to sustain the performance of high-TDP NVIDIA and AMD GPU clusters.",
  },
  {
    question: "Do you provide O-RAN and 5G infrastructure hardware?",
    answer:
      "Absolutely. Qmax Systems is active in the O-RAN ecosystem, designing Distributed Units (DU) and specialized Network Interface Cards (NIC). We help telecom providers and private network operators deploy scalable, open-architecture hardware for 5G rollouts.",
  },
  {
    question:
      "What processor architectures do you work with for Server Motherboards?",
    answer:
      "Our expertise spans the leading x86 and ARM-based enterprise architectures, including Intel Xeon, AMD EPYC, and Ampere Altra CPUs. We design custom server motherboards and Single Board Computers (SBCs) that meet specific form factor and environmental requirements.",
  },
  {
    question: "Do you handle complex, high-layer count PCB designs?",
    answer:
      "Yes. Our team is experienced in high-density interconnect (HDI) technology, regularly managing 20+ layer PCB stacks with blind and buried micro-vias. We ensure all designs are optimized for DFM (Design for Manufacturing) and DFT (Design for Test) to streamline the transition to mass production.",
  },
  {
    question: "What is included in the 1-hour complimentary consulting session?",
    answer:
      "During this session, you will speak directly with a Senior Hardware Architect. We can review your block diagrams, discuss thermal or signal integrity challenges, provide high-level architecture validation, or help refine your hardware roadmap to reduce time-to-market. We can sign an NDA if required.",
  },
];

export const metadata: Metadata = {
  title: "Hardware Development Services | Qmax",
  description:
    "Hardware development services with complete lifecycle ownership from requirements to production handover.",
};

export default function HardwareDevelopmentServicesPage() {
  return (
    <main className="bg-slate-100 text-justify text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(148,163,184,0.08),transparent_54%),radial-gradient(circle_at_85%_10%,rgba(20,184,166,0.03),transparent_48%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-slate-200 bg-white/90 px-4 py-1 text-xs uppercase tracking-[0.16em] text-slate-600">
              Hardware Development Services
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
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
                  className="object-contain"
                  priority
                />
              </div>

              <p>
                <span className="font-semibold text-slate-900">
                  The Qmax Advantage:
                </span>{" "}
                Our development methodology is built on a well-defined,
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Our End-to-End Workflow Includes
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workflowItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-sky-700">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Core Engineering Capabilities
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            We deliver high-performance designs validated by decades of
            experience. Our HW engineering stack covers six critical domains.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              {/* <p className="inline-flex rounded-full border border-sky-300 bg-sky-100 px-3 py-1 text-xs uppercase tracking-[0.12em] text-sky-700">
                Domain 1 of 6
              </p> */}
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                High-Performance Digital Systems Development
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                At Qmax Systems, we bridge the gap between complex conceptual
                requirements and market-ready hardware. In an era where AI
                computing, telecom infrastructure, edge servers, and
                data-intensive applications demand unprecedented speed and
                reliability, our Hardware Engineering Team delivers robust,
                scalable, and high-integrity systems tailored for
                next-generation digital infrastructure.
              </p>
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white md:h-[420px]">
              <Image
                src="/hw-main/image3.jpg"
                alt="High-performance digital hardware engineering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Our Core Service Offerings
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          We specialize in high-speed, high-density, and high-reliability
          digital systems. Our expertise spans across:
        </p>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <p className="text-xs uppercase tracking-[0.12em] text-sky-700">
              1. Advanced Compute &amp; Server Solutions
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <h3 className="text-base font-semibold text-slate-900">
                  Multicore CPU Systems
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  High-performance designs utilizing the latest Intel, AMD, and
                  Ampere CPUs, optimized for thermal efficiency and high-speed
                  data throughput.
                </p>
              </li>
              <li>
                <h3 className="text-base font-semibold text-slate-900">
                  High-Density AI GPU Compute Servers
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Custom hardware engineering optimized for parallel
                  processing, designed to house and power high-performance
                  NVIDIA and AMD GPU clusters.
                </p>
              </li>
              <li>
                <h3 className="text-base font-semibold text-slate-900">
                  Single Board Computers (SBCs) &amp; Server Motherboards
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Tailor-made designs for data centers and rugged industrial
                  environments, focusing on Power Integrity (PI) and Signal
                  Integrity (SI).
                </p>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <p className="text-xs uppercase tracking-[0.12em] text-sky-700">
              2. Next-Gen Connectivity &amp; O-RAN Infrastructure
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <h3 className="text-base font-semibold text-slate-900">
                  100Gbps Network Interface Cards (NIC)
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Ultra-high-speed connectivity solutions for high-end blade
                  servers, ensuring maximum bandwidth and minimal latency.
                </p>
              </li>
              <li>
                <h3 className="text-base font-semibold text-slate-900">
                  O-RAN Distributed Units (DU)
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Specialized hardware development for Open RAN architecture to
                  accelerate global 5G infrastructure rollouts.
                </p>
              </li>
              <li>
                <h3 className="text-base font-semibold text-slate-900">
                  Fabric Interface Cards (FIC)
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Innovative designs for Photonic Resource Units, facilitating
                  seamless optical-to-electrical resource management.
                </p>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <p className="text-xs uppercase tracking-[0.12em] text-sky-700">
              3. Precision Embedded &amp; FPGA Design
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <h3 className="text-base font-semibold text-slate-900">
                  FPGA-Based Hardware
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Custom development (Xilinx/Intel) for hardware acceleration,
                  real-time signal processing, and flexible I/O requirements.
                </p>
              </li>
              <li>
                <h3 className="text-base font-semibold text-slate-900">
                  Microcontroller Based Products
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Robust, power-optimized embedded systems using ARM Cortex-M,
                  ESP32, and PIC architectures for Industrial IoT (IIoT).
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Why Partner with Qmax Systems?
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
                    Our Technical Advantage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    High-Speed Standards
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    Expert handling of DDR5, PCIe Gen5/Gen6, 112G SerDes
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Physical Complexity
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    Mastery of 30+ layer HDI PCBs with blind/buried microvias
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Manufacturing Readiness
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    Complete DFM, DFA, and DFT implementation
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Signal &amp; Power Integrity
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    Advanced SI/PI simulation and validation
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Global Compliance
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    Pre-designed for EMI/EMC, CE, FCC, UL
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Lifecycle Support
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    From concept to mass production
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
            We design for performance, reliability, and manufacturability - not
            just for prototypes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          End-to-End Digital Hardware Engineering Process
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Our development lifecycle includes:
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ System Architecture &amp; Feasibility Analysis
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Platform Selection &amp; Risk Assessment
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ High-Speed Schematics &amp; PCB Layout
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ SI / PI / EMI Simulation
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Prototype &amp; Manufacturing Support
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Hardware Validation &amp; Testing
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Compliance &amp; Certification Support
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Production Release Documentation
            </li>
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Proven Industry Experience
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            We have successfully delivered 100s advanced digital hardware
            platforms, including:
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              AI compute servers
            </li>
            <li className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              O-RAN DU systems
            </li>
            <li className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              FPGA accelerators
            </li>
            <li className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              Server motherboards
            </li>
            <li className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              High-speed NICs
            </li>
            <li className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              Embedded controllers
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Detailed Case Studies
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/hardware-development-services/high-speed-digital-design"
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition hover:border-sky-300 hover:text-sky-700"
          >
            High Speed Digital Design
          </Link>
          <Link
            href="/hardware-development-services/analog-design"
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition hover:border-sky-300 hover:text-sky-700"
          >
            Analog Design
          </Link>
          <Link
            href="/hardware-development-services/power-electorincs"
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition hover:border-sky-300 hover:text-sky-700"
          >
            Power Electorincs
          </Link>
          <Link
            href="/hardware-development-services/rf-and-microwave"
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition hover:border-sky-300 hover:text-sky-700"
          >
            RF and Microwave
          </Link>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
          Additional Case Studies can be shared after NDA
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_6px_30px_rgba(15,23,42,0.08)] md:p-10">
          <h2 className="text-3xl font-semibold text-slate-900">
            Complimentary Technical Consulting Session
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            We offer a free 1-hour technical consultation with our senior
            hardware engineering team.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            During this session, we will review:
          </p>

          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Your system architecture
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Performance and scalability targets
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Cost and component optimization
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Development roadmap
            </li>
            <li className="text-sm leading-6 text-slate-800 md:text-base">
              ✔ Technical and compliance risks
            </li>
          </ul>

          <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
            This session is practical, engineering-driven, and focused on
            real-world implementation - not sales.
          </p>
          <p className="mt-4 text-sm font-semibold leading-7 text-slate-900 md:text-base">
            Contact us today to schedule your complimentary consultation and
            accelerate your product development.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-100/60">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Technical FAQ</h2>
          <p className="mt-4 text-sm text-slate-700 md:text-base">
            Common engineering, validation, and production questions answered by
            our hardware team.
          </p>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <summary className="cursor-pointer list-none pr-6 text-sm font-medium leading-6 text-slate-900">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
