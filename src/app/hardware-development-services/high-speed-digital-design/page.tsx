import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High Speed Digital Design Services | Qmax",
  description:
    "High-Performance Digital Systems Development. At Qmax Systems, we bridge the gap between complex conceptual requirements and market-ready hardware.",
};

export default function HighSpeedDigitalDesignPage() {
  return (
    <main className="bg-slate-100 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-slate-300 bg-slate-100 px-4 py-1 text-xs uppercase tracking-[0.16em] text-slate-700">
              High Speed Digital Design
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              High-Performance Digital Systems Development
            </h1>
            <div className="mt-6 text-lg font-medium text-slate-800 md:text-xl">
              Precision Engineering for Next-Generation Digital Infrastructure
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
              <p>
                At Qmax Systems, we bridge the gap between complex conceptual
                requirements and market-ready hardware. In an era where AI
                computing, telecom infrastructure, edge servers, and
                data-intensive applications demand unprecedented speed and
                reliability, our Hardware Engineering Team delivers robust,
                scalable, and high-integrity systems tailored for next-generation
                digital infrastructure.
              </p>
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white md:h-[420px]">
            <Image
              src="/hw-main/HW-High-Speed-Digital-Design/image1.jpg"
              alt="High-Performance Digital Systems Development"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Our High-Speed Digital Expertise
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          We specialize in high-speed, high-density, and high-reliability
          digital systems. Our expertise spanning across computational architectures protects sensitive data pipelines from cross-talk and jitter.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              Multicore CPU Systems
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              High-performance designs utilizing the latest Intel, AMD, and Ampere CPUs, optimized for thermal efficiency and high-speed data throughput.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              High-Density AI GPU Compute Servers
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Custom hardware engineering optimized for parallel processing, designed to house and power high-performance NVIDIA and AMD GPU clusters.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              FPGA-Based Hardware
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Custom development (Xilinx/Intel) for hardware acceleration, real-time signal processing, and flexible I/O requirements.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              Advanced HDI PCB Topology
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Mastery of 30+ layer HDI PCBs with blind/buried microvias to eliminate cross-talk and maintain clean signal return paths.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Core Service Offerings
          </h2>

          <div className="mt-8 space-y-4">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                1. Advanced Compute &amp; Server Solutions
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                Tailor-made designs for data centers and rugged industrial environments, focusing on Power Integrity (PI) and Signal Integrity (SI). We engineer next-gen Single Board Computers (SBCs) and scalable multi-node motherboard solutions.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                2. Next-Gen Connectivity &amp; O-RAN Infrastructure
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                Specialized hardware development for Open RAN architecture to accelerate global 5G infrastructure rollouts, alongside 100Gbps Network Interface Cards (NIC) bridging ultra-high-speed connectivity solutions.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                3. Precision Embedded &amp; Microcontroller Systems
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                Robust, power-optimized embedded systems using ARM Cortex-A/M, ESP32, and high-performance processor architectures for critical Industrial IoT deployments ensuring rock-solid data governance.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Our Technical Advantages
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              High-Speed Standards:
            </span>{" "}
            Expert handling of DDR5, PCIe Gen5/Gen6, and 112G SerDes, maintaining tight impedance standards from conceptual routing to PCB layout deployment.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Manufacturing Readiness:
            </span>{" "}
            Complete DFM, DFA, and DFT implementation validating design concepts mechanically before routing copper to avoid production-line casualties.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Signal &amp; Power Integrity:
            </span>{" "}
            Advanced SI/PI simulation and validation performed concurrently ensuring proper decoupling and impedance matched returns.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Global Regulatory Compliance:
            </span>{" "}
            Pre-designed structurally and electrically for stringent global standards including EMI/EMC, CE, FCC, and UL regulations.
          </li>
        </ul>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Case Studies</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            We have successfully delivered 100s of advanced digital hardware platforms. More case studies are available upon completing an NDA.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          End-to-End Development Process
        </h2>
        <ul className="mt-8 space-y-3">
          <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
            <span className="font-semibold text-slate-900">
              System Architecture &amp; Feasibility Analysis:
            </span>{" "}
            Identifying processing constraints and drafting component roadmaps.
          </li>
          <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
            <span className="font-semibold text-slate-900">
              Platform Selection &amp; Risk Assessment:
            </span>{" "}
            Validating processor bounds and mitigating long-term component lifecycle risks.
          </li>
          <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
            <span className="font-semibold text-slate-900">
              High-Speed Schematics &amp; PCB Layout:
            </span>{" "}
            Architecting stackups, mitigating ground bounce, and executing flawless multi-gigabit signal routing.
          </li>
          <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
            <span className="font-semibold text-slate-900">
              Hardware Validation &amp; Testing:
            </span>{" "}
            Bringing up the boards in rigorous environments using high-bandwidth oscilloscopes and VNA analyzers.
          </li>
          <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
            <span className="font-semibold text-slate-900">
              Production Release Support:
            </span>{" "}
            Moving from initial EVT/DVT hardware over to mass PVT fabrication with strict quality gates.
          </li>
        </ul>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_6px_30px_rgba(15,23,42,0.08)] md:p-10">
            <h2 className="text-3xl font-semibold text-slate-900">
              Complimentary Consultation Section
            </h2>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              Discuss Your Next High-Speed Architecture
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
              Our senior engineering team is available for a 1-hour session to review your block diagrams, discuss thermal or signal integrity challenges, provide high-level architecture validation, or help refine your hardware roadmap to reduce time-to-market.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg border border-sky-300 bg-sky-100 px-5 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-400 hover:bg-sky-200"
            >
              Request Technical Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-4">
          {[
            {
              q: "What high-speed design standards does Qmax Systems support?",
              a: "We specialize in the latest high-speed communication standards, including PCIe Gen 5/6, DDR5, and 112G SerDes. Our engineering team utilizes advanced simulation tools to ensure signal integrity (SI) and power integrity (PI) for data rates exceeding 100Gbps."
            },
            {
              q: "Can you design custom hardware for AI and Deep Learning?",
              a: "Yes. We develop High-Density AI GPU Compute Servers tailored for massive parallel processing. Our designs focus on robust power delivery networks (PDN) and advanced thermal management strategies required to sustain the performance of high-TDP NVIDIA and AMD GPU clusters."
            },
            {
              q: "Do you provide O-RAN and 5G infrastructure hardware?",
              a: "Absolutely. Qmax Systems is active in the O-RAN ecosystem, designing Distributed Units (DU) and specialized Network Interface Cards (NIC). We help telecom providers and private network operators deploy scalable, open-architecture hardware for 5G rollouts."
            },
            {
              q: "What processor architectures do you work with for Server Motherboards?",
              a: "Our expertise spans the leading x86 and ARM-based enterprise architectures, including Intel Xeon, AMD EPYC, and Ampere Altra CPUs. We design custom server motherboards and Single Board Computers (SBCs) that meet specific form factor and environmental requirements."
            },
            {
              q: "Do you handle complex, high-layer count PCB designs?",
              a: "Yes. Our team is experienced in high-density interconnect (HDI) technology, regularly managing 20+ layer PCB stacks with blind and buried micro-vias. We ensure all designs are optimized for DFM (Design for Manufacturing) and DFT (Design for Test) to streamline the transition to mass production."
            },
            {
              q: "What is included in the 1-hour complimentary consulting session?",
              a: "During this session, you will speak directly with a Senior Hardware Architect. We can review your block diagrams, discuss thermal or signal integrity challenges, provide high-level architecture validation, or help refine your hardware roadmap to reduce time-to-market. We can sign an NDA if required."
            }
          ].map((faq, index) => (
            <details key={index} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {faq.q}
                </h3>
                <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
