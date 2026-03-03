import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const expertiseCards = [
  {
    title: "High-Efficiency Power Conversion",
    description:
      "Design of AC-DC, DC-DC, and isolated converter topologies for efficiency, density, and reliability.",
  },
  {
    title: "Battery & Charging Systems",
    description:
      "Multi-cell battery management, charging control, protection circuitry, and runtime optimization.",
  },
  {
    title: "Motor Drive Electronics",
    description:
      "Power stages and control electronics for BLDC, PMSM, and industrial motor applications.",
  },
  {
    title: "Power Integrity & EMI/EMC",
    description:
      "PI-driven layout, filtering, grounding, and shielding strategies for stable and compliant systems.",
  },
];

const serviceOfferings = [
  {
    title: "1. AC-DC and DC-DC Power Supply Design",
    description:
      "Custom switched-mode and linear power architectures tailored for industrial, telecom, and embedded platforms. We engineer for low ripple, robust startup, and high-load transient response.",
  },
  {
    title: "2. Power Delivery Network (PDN) Engineering",
    description:
      "Structured rail planning from source to point-of-load with simulation-led decoupling and impedance control to support modern processors, FPGAs, and accelerators.",
  },
  {
    title: "3. BMS and Energy Storage Electronics",
    description:
      "Battery pack monitoring, balancing, safety interlocks, and state estimation for portable, backup, and electrified systems.",
  },
  {
    title: "4. Thermal and Reliability Co-Design",
    description:
      "Joint electrical-thermal design using component derating, loss analysis, and cooling strategies to maintain long-term field reliability.",
  },
];

const faqs = [
  {
    question: "Do you design both isolated and non-isolated converters?",
    answer:
      "Yes. We deliver isolated flyback, forward, and LLC-derived solutions as well as non-isolated buck, boost, and buck-boost topologies based on your efficiency, safety, and cost targets.",
  },
  {
    question: "Can Qmax optimize designs for low EMI and certification readiness?",
    answer:
      "Absolutely. We apply EMI-aware component selection, switching strategy tuning, filter design, and PCB layout best practices to reduce emissions and accelerate pre-compliance testing.",
  },
  {
    question: "Do you support high-current rails for AI and compute hardware?",
    answer:
      "Yes. We build high-current, low-noise multi-rail PDNs for GPUs, CPUs, and FPGA platforms with tight voltage regulation and transient response requirements.",
  },
  {
    question: "Can you help with legacy power supply redesigns?",
    answer:
      "We frequently modernize aging designs by improving efficiency, thermal behavior, and manufacturability while preserving interface compatibility and field constraints.",
  },
];

export const metadata: Metadata = {
  title: "Power Electronics Services | Qmax",
  description:
    "Power electronics design and development services from converter architecture through validation and production support.",
};

export default function PowerElectorincsPage() {
  return (
    <main className="bg-slate-100 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(2,132,199,0.16),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.14),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-sky-300 bg-sky-100 px-4 py-1 text-xs uppercase tracking-[0.16em] text-sky-700">
              Power Electronics Services
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Power Electronics Design and Development Services
            </h1>
            <p className="mt-6 text-lg font-medium text-slate-800 md:text-xl">
              Efficient, Stable, and Scalable Power for Mission-Critical
              Hardware
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
              <p>
                Qmax Systems delivers end-to-end power electronics engineering
                for products that demand high efficiency, robust operation, and
                long-term reliability. We design complete power subsystems,
                from input protection and conversion stages to point-of-load
                regulation and system-level validation.
              </p>
              <p>
                Whether you are building edge AI devices, telecom
                infrastructure, industrial controls, or battery-based products,
                our team focuses on practical architecture decisions that reduce
                field failures and improve performance under real operating
                conditions.
              </p>
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white md:h-[420px]">
            <Image
              src="/hw-main/image2.png"
              alt="Power electronics architecture and converter design"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 to-transparent p-5">
              <p className="text-sm font-medium text-slate-900">
                Converter Design, PI, Thermal, and Validation
              </p>
              <p className="mt-1 text-xs text-slate-700">
                From concept to production-ready power platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Our Power Electronics Expertise
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          We combine architecture planning, simulation-driven design, and
          hardware validation to deliver resilient power systems for demanding
          applications.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {expertiseCards.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
            >
              <h3 className="text-base font-semibold text-slate-900">
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
            Core Service Offerings
          </h2>

          <div className="mt-8 space-y-4">
            {serviceOfferings.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] md:p-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Typical Engagement Workflow
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-sky-700">
                Step 1
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Requirements & Constraints
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Define input ranges, load profiles, thermal limits, and
                regulatory requirements.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-sky-700">
                Step 2
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Architecture & Simulation
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Evaluate topology choices and validate performance via circuit
                and thermal analysis.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-sky-700">
                Step 3
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Design & Prototyping
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Create schematic and layout with PI and EMI best practices, then
                build and bring up prototypes.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-sky-700">
                Step 4
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Validation & Handover
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Run efficiency, thermal, stress, and compliance checks before
                production support and release.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Build Reliable Power Platforms with Qmax
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
            Need support for a new power architecture, redesign, or compliance
            preparation? Our power electronics team can help you move from
            concept to validated hardware with measurable performance outcomes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Talk to Our Engineers
            </Link>
            <Link
              href="/hardware-development-services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back to Hardware Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
