import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { OtherCapabilitiesScrollSection } from "@/components/other-capabilities-scroll-section";
import { hwDevelopmentOtherCapabilities as otherCapabilities } from "@/data/other-capabilities";
import { hardwareCaseStudies } from "@/data/service-case-studies";

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

const technicalFaq = [
  {
    title: "General Services & Engagement",
    items: [
      {
        q: "1. Do you provide end-to-end hardware development?",
        a: "Yes. From early architecture to certified, production-ready hardware, we handle the full lifecycle.",
      },
      {
        q: "2. Where are your engineering teams located?",
        a: "We operate with a full-fledged engineering team in Chennai, India, and have a sales presence in the USA.",
      },
      {
        q: "3. Do you support manufacturing and scaling?",
        a: "Yes. We support Design for Manufacturability (DFM), vendor coordination, pilot builds, and volume production handover.",
      },
      {
        q: "4. Do you offer initial consultations?",
        a: "Yes. We offer a free one-hour consultation with a senior engineer or hardware architect to validate feasibility and identify technical risks.",
      },
    ],
  },
  {
    title: "Intellectual Property & Security",
    items: [
      {
        q: "5. Who owns the Intellectual Property (IP)?",
        a: "Unless otherwise agreed, 100% of the IP ownership belongs to the customer.",
      },
      {
        q: "6. How do you protect customer IP?",
        a: "We sign NDAs with customers, employees, and vendors. Our security measures include secure IT infrastructure (firewalls, VPN), need-to-know access control, and controlled physical access.",
      },
    ],
  },
  {
    title: "Technical & Testing Capabilities",
    items: [
      {
        q: "7. What specific compliance standards can you help with?",
        a: "We support readiness for major global standards including FCC, CE, IEC, UL, and BIS.",
      },
      {
        q: "8. Do you perform testing in-house?",
        a: "Yes. We have internal labs for functional validation, thermal cycling, and environmental stress testing. For final certification, we coordinate with NABL-certified laboratories.",
      },
      {
        q: "9. Do you build prototypes?",
        a: "Yes. We maintain dedicated facilities for prototype PCB assembly, rework, and mechanical fixture creation to speed up development.",
      },
      {
        q: "10. Do you support product maintenance after design?",
        a: "Yes. We offer lifecycle maintenance services to support your product long after the initial design is complete.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Hardware Development Services | Qmax",
  description:
    "Hardware development services with complete lifecycle ownership from requirements to production handover.",
};


export default function HardwareDevelopmentServicesPage() {
  const hardwareFaqs = technicalFaq.flatMap((group) => group.items);

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
                  className="object-cover"
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
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all hover:shadow-md">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-900">
                  1. Digital Hardware Design
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  We design high-performance digital electronics, ranging from
                  simple MCU boards to complex, high-speed, multi-processor
                  systems.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 md:text-base">
                  <li>
                    <span className="font-semibold text-slate-900">Platforms:</span>{" "}
                    MCU, MPU, SoC, and FPGA-based platforms.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      High-Speed Interfaces:
                    </span>{" "}
                    PCIe Gen3/4/5, USB 2.0/3.x, Gigabit/10G/25G Ethernet, and
                    MIPI/LVDS/HDMI display interfaces.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Memory:</span>{" "}
                    DDR3, DDR4, and DDR5 memory subsystem design.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      PCB Technology:
                    </span>{" "}
                    High-density BGA, HDI, and multi-layer PCBs.
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/hardware-development-services/high-speed-digital-design"
                  className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 shadow-sm"
                >
                  Know More
                </Link>
              </div>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all hover:shadow-md">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-900">
                  2. Analog &amp; Mixed-Signal Design
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  We possess deep expertise in precision analog and mixed-signal
                  design, critical for sensing, measurement, and low-noise
                  applications.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 md:text-base">
                  <li>
                    <span className="font-semibold text-slate-900">Sensing:</span>{" "}
                    Low-noise analog front-ends and sensor interfacing for
                    pressure, vibration, biomedical, and optical applications.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      Processing:
                    </span>{" "}
                    Signal conditioning, filtering, amplification, and ADC/DAC
                    integration.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      Integrity:
                    </span>{" "}
                    EMI-aware analog layout and grounding techniques.
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/hardware-development-services/analog-design"
                  className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 shadow-sm"
                >
                  Know More
                </Link>
              </div>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all hover:shadow-md">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-900">
                  3. RF &amp; Microwave Hardware
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  Our RF designs are validated in real-world conditions, not just
                  simulations.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 md:text-base">
                  <li>
                    <span className="font-semibold text-slate-900">
                      Components:
                    </span>{" "}
                    RF front-end design (LNA, PA, filters, matching networks).
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Antennas:</span>{" "}
                    Design and integration of PCB, external, horn, and custom
                    antennas.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      Protocols:
                    </span>{" "}
                    ISM, Wi-Fi, BLE, LTE, and Sub-GHz systems.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      Validation:
                    </span>{" "}
                    RF simulation, tuning, calibration, and EMC-aware layout.
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/hardware-development-services/rf-and-microwave"
                  className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 shadow-sm"
                >
                  Know More
                </Link>
              </div>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all hover:shadow-md">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-900">
                  4. Power Electronics &amp; High-Voltage
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  We design robust power electronics for industrial, automotive,
                  and energy applications.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 md:text-base">
                  <li>
                    <span className="font-semibold text-slate-900">
                      Conversion:
                    </span>{" "}
                    AC-DC/DC-DC converters and isolated/non-isolated SMPS
                    designs.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      Topologies:
                    </span>{" "}
                    Resonant, LLC, CLLC, and Class-D topologies.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      High Power:
                    </span>{" "}
                    Battery systems (BMS), chargers, inverters, and
                    high-voltage/high-current PCB design.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">
                      Reliability:
                    </span>{" "}
                    Thermal simulation, derating, and reliability analysis.
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/hardware-development-services/power-electorincs"
                  className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 shadow-sm"
                >
                  Know More
                </Link>
              </div>
            </article>
          </div>
          <div className="mt-12 space-y-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-2xl font-semibold text-slate-900">
                Labs &amp; Engineering Infrastructure
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                Our in-house labs enable rapid debugging and validation,
                reducing dependency on external facilities during development.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                <span className="font-semibold text-slate-900">
                  The Qmax Advantage:
                </span>{" "}
                Speed and accuracy are determined by having the right tools. We
                maintain dedicated in-house electronics and environmental
                laboratories fully equipped with high-bandwidth oscilloscopes,
                thermal cameras, and spectrum analyzers. This infrastructure
                allows our engineers to perform immediate prototype assembly,
                rework, and rigorous stress testing on-site, ensuring that
                potential design weaknesses are resolved long before the product
                reaches external certification labs.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="text-lg font-semibold text-slate-900">
                    Electronics Test &amp; Validation
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    Our labs are equipped with industry-standard tools for
                    rigorous testing:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 md:text-base">
                    <li>
                      High-bandwidth oscilloscopes (Keysight, Rohde &amp;
                      Schwarz).
                    </li>
                    <li>
                      Spectrum analyzers and RF testers (CMW-500).
                    </li>
                    <li>
                      Precision digital multimeters (Fluke), thermal cameras,
                      and Hi-Pot testers.
                    </li>
                  </ul>
                </article>

                <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="text-lg font-semibold text-slate-900">
                    Environmental Reliability &amp; Assembly
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    We perform early environmental validation to uncover design
                    weaknesses before certification.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 md:text-base">
                    <li>
                      <span className="font-semibold text-slate-900">
                        Environmental:
                      </span>{" "}
                      Temperature chambers (hot &amp; cold), thermal cycling,
                      soak testing, drop stress setups, and acoustic chambers.
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">
                        Assembly:
                      </span>{" "}
                      Dedicated facilities for prototype PCB assembly,
                      professional soldering/rework, and a mechanical workshop
                      for fixtures.
                    </li>
                  </ul>
                </article>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-2xl font-semibold text-slate-900">
                Compliance, Certification &amp; Quality
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                We ensure your product is ready for global markets. We work
                closely with NABL-certified laboratories to support EMC/EMI
                pre-compliance, safety testing, and environmental testing.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                <span className="font-semibold text-slate-900">
                  The Qmax Advantage:
                </span>{" "}
                We don&apos;t just design for functionality; we design for
                compliance. Our processes are governed by ISO 9001 and ISO
                13485 (Medical Devices) certifications, ensuring strict
                configuration management and traceability. Because our team has
                deep experience with regulatory standards like FCC, CE, IEC,
                and UL, we bridge the gap between engineering and
                certification, managing the complex gap analysis to ensure your
                product passes on the first attempt whenever possible.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700 md:text-base">
                <li>
                  <span className="font-semibold text-slate-900">
                    Regulatory Support:
                  </span>{" "}
                  Assistance with FCC, CE, IEC, UL, and BIS readiness.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    Quality Standards:
                  </span>{" "}
                  Our processes are certified under ISO 9001 (Quality
                  Management) and ISO 13485 (Medical Devices).
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    Design Rigor:
                  </span>{" "}
                  We utilize structured design reviews, configuration
                  management, and controlled documentation.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-2xl font-semibold text-slate-900">
                Industries We Serve
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                We support multi-domain hardware development, adapting design
                rigor and documentation depth based on regulatory requirements.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
                <span className="font-semibold text-slate-900">
                  The Qmax Advantage:
                </span>{" "}
                Our versatility is a direct result of our multi-domain
                experience. Having worked on everything from safety-critical
                medical devices to rugged industrial controls, our engineers
                understand how to cross-pollinate best practices. We adapt our
                documentation depth and design rigor to match the specific needs
                of your industry, ensuring you get the robust reliability of an
                aerospace product with the agility required for consumer
                electronics.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                  Automotive Electronics
                </li>
                <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                  Medical Electronics &amp; Healthcare Devices
                </li>
                <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                  Industrial Automation &amp; Controls
                </li>
                <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                  Aerospace &amp; Defense Systems
                </li>
                <li className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                  Energy, EV &amp; Power Electronics
                </li>
              </ul>
            </div>
          </div>



        </div>
      </section>
      <FAQSection faqs={hardwareFaqs} />
      <OtherCapabilitiesScrollSection capabilities={otherCapabilities} />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_6px_30px_rgba(15,23,42,0.08)] md:p-10">
          <h2 className="text-3xl font-semibold text-slate-900">
            Ready to Build Your Hardware?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            <span className="font-semibold text-slate-900">
              Free 1-Hour Hardware Consulting
            </span>{" "}
            Speak with a senior hardware architect to review your architecture
            and validate feasibility before you commit to development.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={hardwareCaseStudies}
      />
    </main>
  );
}





