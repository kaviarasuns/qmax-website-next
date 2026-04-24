import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { OtherCapabilitiesScrollSection } from "@/components/other-capabilities-scroll-section";
import { hwHighSpeedDigitalOtherCapabilities as otherCapabilities } from "@/data/other-capabilities";
import { hardwareCaseStudies } from "@/data/service-case-studies";

const faqs = [
  {
    q: "What high-speed design standards does Qmax Systems support?",
    a: "We specialize in the latest high-speed communication standards, including PCIe Gen 5/6, DDR5, and 112G SerDes. Our engineering team utilizes advanced simulation tools to ensure signal integrity (SI) and power integrity (PI) for data rates exceeding 100Gbps.",
  },
  {
    q: "Can you design custom hardware for AI and Deep Learning?",
    a: "Yes. We develop High-Density AI GPU Compute Servers tailored for massive parallel processing. Our designs focus on robust power delivery networks (PDN) and advanced thermal management strategies required to sustain the performance of high-TDP NVIDIA and AMD GPU clusters.",
  },
  {
    q: "Do you provide O-RAN and 5G infrastructure hardware?",
    a: "Absolutely. Qmax Systems is active in the O-RAN ecosystem, designing Distributed Units (DU) and specialized Network Interface Cards (NIC). We help telecom providers and private network operators deploy scalable, open-architecture hardware for 5G rollouts.",
  },
  {
    q: "What processor architectures do you work with for Server Motherboards?",
    a: "Our expertise spans the leading x86 and ARM-based enterprise architectures, including Intel Xeon, AMD EPYC, and Ampere Altra CPUs. We design custom server motherboards and Single Board Computers (SBCs) that meet specific form factor and environmental requirements.",
  },
  {
    q: "Do you handle complex, high-layer count PCB designs?",
    a: "Yes. Our team is experienced in high-density interconnect (HDI) technology, regularly managing 20+ layer PCB stacks with blind and buried micro-vias. We ensure all designs are optimized for DFM (Design for Manufacturing) and DFT (Design for Test) to streamline the transition to mass production.",
  },
  {
    q: "What is included in the 1-hour complimentary consulting session?",
    a: "During this session, you will speak directly with a Senior Hardware Architect. We can review your block diagrams, discuss thermal or signal integrity challenges, provide high-level architecture validation, or help refine your hardware roadmap to reduce time-to-market. We can sign an NDA if required.",
  },
];

export const metadata: Metadata = {
  title: "High Speed Digital Design Services | Qmax",
  description:
    "High-Performance Digital Systems Development. At Qmax Systems, we bridge the gap between complex conceptual requirements and market-ready hardware.",
};


export default function HighSpeedDigitalDesignPage() {
  return (
    <main className="bg-slate-100 text-slate-900">
      <section className="relative overflow-hidden pt-14 pb-12 border-b border-slate-200 lg:pt-20 lg:pb-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Full-width Image Container */}
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-slate-200 group">
            <Image
              src="/hw-main/HW-High-Speed-Digital-Design/image1.jpg"
              alt="High-Speed Digital Hardware Development - Qmax Systems"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-5xl">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-6">
                HARDWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl font-light leading-[1.1] text-zinc-950 md:text-6xl lg:text-7xl tracking-tight">
                High-Performance Digital<br className="hidden md:block" />
                Systems Development.
              </h1>
            </div>
          </div>
          <div className="mt-10 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Our Core Service Offerings
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          We specialize in high-speed, high-density, and high-reliability
          digital systems. Our expertise spans across:
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              1. Advanced Compute &amp; Server Solutions
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">
                  Multicore CPU Systems:
                </span>{" "}
                High-performance designs utilizing the latest Intel, AMD, and
                Ampere CPUs, optimized for thermal efficiency and high-speed
                data throughput.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  High-Density AI GPU Compute Servers:
                </span>{" "}
                Custom hardware engineering optimized for parallel processing,
                designed to house and power high-performance NVIDIA and AMD GPU
                clusters.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Single Board Computers (SBCs) &amp; Server Motherboards:
                </span>{" "}
                Tailor-made designs for data centers and rugged industrial
                environments, focusing on Power Integrity (PI) and Signal
                Integrity (SI).
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              2. Next-Gen Connectivity &amp; O-RAN Infrastructure
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">
                  100Gbps Network Interface Cards (NIC):
                </span>{" "}
                Ultra-high-speed connectivity solutions for high-end blade
                servers, ensuring maximum bandwidth and minimal latency.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  O-RAN Distributed Units (DU):
                </span>{" "}
                Specialized hardware development for Open RAN architecture to
                accelerate global 5G infrastructure rollouts.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Fabric Interface Cards (FIC):
                </span>{" "}
                Innovative designs for Photonic Resource Units, facilitating
                seamless optical-to-electrical resource management.
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              3. Precision Embedded &amp; FPGA Design
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">
                  FPGA-Based Hardware:
                </span>{" "}
                Custom development (Xilinx/Intel) for hardware acceleration,
                real-time signal processing, and flexible I/O requirements.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Microcontroller Based Products:
                </span>{" "}
                Robust, power-optimized embedded systems using ARM Cortex-M,
                ESP32, and PIC architectures for Industrial IoT (IIoT).
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Why Partner with Qmax Systems?
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Our Technical Advantage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    High-Speed Standards
                  </td>
                  <td className="px-6 py-4 text-sm leading-6 text-slate-700">
                    Expert handling of DDR5, PCIe Gen5/Gen6, 112G SerDes
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Physical Complexity
                  </td>
                  <td className="px-6 py-4 text-sm leading-6 text-slate-700">
                    Mastery of 30+ layer HDI PCBs with blind/buried microvias
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Manufacturing Readiness
                  </td>
                  <td className="px-6 py-4 text-sm leading-6 text-slate-700">
                    Complete DFM, DFA, and DFT implementation
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Signal &amp; Power Integrity
                  </td>
                  <td className="px-6 py-4 text-sm leading-6 text-slate-700">
                    Advanced SI/PI simulation and validation
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Global Compliance
                  </td>
                  <td className="px-6 py-4 text-sm leading-6 text-slate-700">
                    Pre-designed for EMI/EMC, CE, FCC, UL
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    Lifecycle Support
                  </td>
                  <td className="px-6 py-4 text-sm leading-6 text-slate-700">
                    From concept to mass production
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            We design for performance, reliability, and manufacturability - not
            just for prototypes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          End-to-End Digital Hardware Engineering Process
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          Our development lifecycle includes:
        </p>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "System Architecture & Feasibility Analysis",
            "Platform Selection & Risk Assessment",
            "High-Speed Schematics & PCB Layout",
            "SI / PI / EMI Simulation",
            "Prototype & Manufacturing Support",
            "Hardware Validation & Testing",
            "Compliance & Certification Support",
            "Production Release Documentation",
          ].map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base"
            >
              <span className="mr-3 font-semibold text-emerald-600">+</span>
              {item}
            </li>
          ))}
        </ul>
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
            {[
              "AI compute servers",
              "O-RAN DU systems",
              "FPGA accelerators",
              "Server motherboards",
              "High-speed NICs",
              "Embedded controllers",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
            Additional Case Studies can be shared after NDA
          </p>
        </div>
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
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            During this session, we will review:
          </p>

          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Your system architecture",
              "Performance and scalability targets",
              "Cost and component optimization",
              "Development roadmap",
              "Technical and compliance risks",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
              >
                <span className="mr-3 font-semibold text-emerald-600">+</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            This session is practical, engineering-driven, and focused on
            real-world implementation - not sales.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Contact us today to schedule your complimentary consultation and
            accelerate your product development.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg border border-sky-300 bg-sky-100 px-5 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-400 hover:bg-sky-200"
          >
            Schedule Complimentary Consultation
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <OtherCapabilitiesScrollSection capabilities={otherCapabilities} />
      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={hardwareCaseStudies}
      />
    </main>
  );
}
