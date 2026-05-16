import type { Metadata } from "next";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: "Analog and Mixed Signal PCB Design Services | Qmax",
  description:
    "Precision analog layout, low-noise electronics, and high-resolution measurement hardware. Analog and mixed-signal PCB design for scientific instruments, industrial sensing, and medical electronics.",
};

const faqs = [
  {
    q: "1. How do you manage noise in mixed-signal designs?",
    a: "We utilize strategic partitioning to physically separate sensitive analog components from noisy digital switching, combined with dedicated return paths and shielding.",
  },
  {
    q: "2. Do you support split ground planes?",
    a: 'Yes, where appropriate. We evaluate if a single solid ground or a split-plane with a "bridge" at the converters is better for your specific signal frequencies to prevent common-mode noise.',
  },
  {
    q: "3. Can you design for low-noise amplifiers (LNA)?",
    a: "Absolutely. We implement guard traces and Faraday shielding to protect low-level signals from external EMI and internal crosstalk.",
  },
  {
    q: "4. Do you handle high-resolution ADC/DAC layout (24-bit+)?",
    a: "Yes. We focus on reference voltage stability, thermal gradients, and meticulous grounding to preserve the effective number of bits (ENOB).",
  },
  {
    q: "5. What materials do you recommend for precision analog?",
    a: "While FR-4 is common, we often use low-loss materials like Rogers or Megtron 6 for high-frequency or high-impedance analog applications to minimize dielectric absorption.",
  },
  {
    q: "6. Do you perform SI/PI simulations for analog boards?",
    a: "Yes. We use SPICE modeling and 3D EM simulation to validate signal paths and ensure the Power Distribution Network (PDN) is noise-free.",
  },
  {
    q: "7. How do you mitigate EMI/EMC issues?",
    a: 'By implementing "EMC-by-design". We address return path discontinuities and use filtering (Pi-filters, beads) at the source.',
  },
  {
    q: "8. Can you help with designs that failed ESD/EFT testing?",
    a: 'Yes, we provide "rescue" services to identify and fix vulnerabilities in existing layouts to pass compliance.',
  },
  {
    q: "9. Do you support medical isolation requirements?",
    a: "Yes, we adhere to IEC 60601 standards, ensuring proper creepage and clearance distances for patient safety.",
  },
  {
    q: "10. Who owns the IP for the design?",
    a: "The customer retains 100% ownership of all design files and IP.",
  },
  {
    q: "11. Do you design medical measurement electronics?",
    a: "Yes. We are also a ISO13485 certified design house",
  },
];

export default function AnalogAndMixedSignalPage() {
  return (
    <main className="bg-zinc-100 text-zinc-900">
      <section className="relative overflow-hidden pt-14 pb-12 border-b border-zinc-200 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(24,24,27,0.08),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(82,82,91,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Full-width Image Container */}
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-zinc-200 group">
            <Image
              src="/pcb-design/analog-and-mixed-signal.jpg"
              alt="Analog and Mixed Signal PCB Design - Qmax Systems"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-5xl">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-6">
                PCB DESIGN SERVICES
              </span>
              <h1 className="text-4xl font-light leading-[1.1] text-zinc-950 md:text-6xl lg:text-7xl tracking-tight">
                Analog and Mixed Signal
                <br className="hidden md:block" />
                PCB Design Services.
              </h1>
            </div>
          </div>
          <div className="mt-10 max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p className="text-sm font-medium tracking-wide text-zinc-800 md:text-base">
              Precision Analog Layout | Low-Noise Electronics | High-Resolution
              Measurement Hardware
            </p>
            <p>
              Modern electronic systems rarely operate purely in analog or
              purely digital domains. Most advanced embedded systems combine
              high-sensitivity analog signal chains with high-speed digital
              processing, creating complex mixed-signal PCB design challenges.
            </p>
            <p>
              At Qmax Systems, analog and mixed signal PCB design is treated as
              a precision engineering discipline, where the PCB layout itself
              becomes a critical part of the electrical system. Signal
              integrity, grounding topology, shielding, and power filtering
              directly influence system noise floor, measurement accuracy, and
              long-term reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl space-y-6 text-sm leading-7 text-zinc-700 md:text-base">
          <p>
            Our engineers design analog and mixed-signal PCBs for scientific
            instruments, industrial sensing platforms, medical electronics, and
            measurement systems where microvolt-level signals must operate
            reliably in electrically noisy environments.
          </p>
          <p>
            We follow a First-Time-Right engineering methodology supported by
            experienced PCB designers, rigorous design reviews, and
            production-ready validation processes.
          </p>
          <p>
            All PCB designers at Qmax Systems are Electrical Engineers with
            extensive experience in analog hardware design and mixed-signal PCB
            layout.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl text-zinc-900">
            Introduction to Analog and Mixed Signal PCB Engineering
          </h2>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            Analog circuits operate in a continuous voltage domain, unlike
            digital circuits that operate using discrete logic levels. Because
            of this, analog circuits are extremely sensitive to noise sources
            such as:
          </p>
          <ul className="mt-4 max-w-4xl list-disc space-y-2 pl-6 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Digital switching transients</li>
            <li>Power supply ripple</li>
            <li>Ground return current disturbances</li>
            <li>EMI from switching regulators</li>
            <li>Crosstalk between adjacent signal traces</li>
          </ul>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            Mixed signal PCB design becomes particularly challenging when:
          </p>
          <ul className="mt-4 max-w-4xl list-disc space-y-2 pl-6 text-sm leading-7 text-zinc-700 md:text-base">
            <li>
              Low noise analog preamplifiers operate near high-speed digital
              processors
            </li>
            <li>
              High-resolution ADCs share the PCB with noisy switching power
              supplies
            </li>
            <li>
              Sensitive measurement circuits coexist with RF or digital clocks
            </li>
          </ul>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            Poor PCB layout can introduce:
          </p>
          <ul className="mt-4 max-w-4xl list-disc space-y-2 pl-6 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Increased noise floor</li>
            <li>Measurement drift</li>
            <li>Reduced ADC effective number of bits (ENOB)</li>
            <li>Crosstalk between analog and digital domains</li>
            <li>EMI compliance failures</li>
          </ul>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            To prevent these issues, Qmax Systems applies disciplined layout
            techniques:
          </p>
          <ul className="mt-4 max-w-4xl list-disc space-y-2 pl-6 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Careful analog/digital partitioning</li>
            <li>Controlled ground return paths</li>
            <li>Star grounding and split ground strategies</li>
            <li>Guard traces around high-impedance nodes</li>
            <li>Analog shielding and ground planes</li>
            <li>Dedicated low-noise power supply networks</li>
          </ul>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            This structured engineering workflow ensures that the PCB design is
            measurement-accurate, EMI-robust, and manufacturing-ready.
          </p>

          <h2 className="mt-10 text-3xl text-zinc-900">Industries Served</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            Our analog and mixed-signal expertise supports critical sectors
            requiring high-precision electronics:
          </p>
          <ul className="mt-4 max-w-4xl list-disc space-y-2 pl-6 text-sm leading-7 text-zinc-700 md:text-base">
            <li>
              Medical Electronics: Patient-safe, low-noise diagnostic and
              wearable devices.
            </li>
            <li>
              Industrial Automation: High-precision sensing for temperature,
              pressure, and flow.
            </li>
            <li>
              Test and Measurement: High-speed data acquisition and precision
              instrumentation.
            </li>
            <li>
              Aerospace &amp; Defense: Ruggedized, high-reliability analog
              signal processing.
            </li>
            <li>
              Consumer Audio &amp; Wearables: Low-power, small-form-factor audio
              and biometric sensing
            </li>
          </ul>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            These systems often involve high dynamic range signal acquisition
            and precision analog front-end design.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl text-zinc-900">Why Choose Qmax Systems?</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
            <h3 className="text-base text-zinc-900 md:text-lg">
              First-Time-Right Philosophy
            </h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
              We prioritize early risk identification to eliminate costly
              re-spins.
            </p>
          </article>

          <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
            <h3 className="text-base text-zinc-900 md:text-lg">
              Engineering-Led Design
            </h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
              All our PCB designers are Electrical Engineers capable of
              performing complex circuit analysis.
            </p>
          </article>

          <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
            <h3 className="text-base text-zinc-900 md:text-lg">
              DFM/DFT Validation
            </h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
              100% DFM-verified files tailored to specific fabrication house
              capabilities.
            </p>
          </article>

          <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
            <h3 className="text-base text-zinc-900 md:text-lg">IP Ownership</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
              All design files, libraries, and simulation data remain the sole
              property of the customer.
            </p>
          </article>
        </div>

        <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
          <h3 className="text-base text-zinc-900 md:text-lg">
            Compliance-Ready Layout
          </h3>
          <p className="mt-2 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            We focus on compliance on day 1 for CE / FCC / UL certification
          </p>
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
          Our goal is to deliver production-ready PCB designs that function
          correctly on the first prototype build, minimizing costly redesign
          cycles.
        </p>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl text-zinc-900">
            Complimentary Schematic Review
          </h2>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            Every PCB layout engagement at Qmax Systems includes a complimentary
            schematic review. Before a single trace is routed, our engineers
            analyze:
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base text-zinc-900 md:text-lg">
                Analog/Digital Isolation Strategy
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                Reviewing partitioning and potential noise coupling paths.
              </p>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base text-zinc-900 md:text-lg">
                Power Supply Filtering
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                Ensuring low-noise LDOs and decoupling networks are optimized
                for sensitive stages.
              </p>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base text-zinc-900 md:text-lg">
                Termination &amp; Impedance
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                Validating signal termination schemes for high-speed converters.
              </p>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
              <h3 className="text-base text-zinc-900 md:text-lg">
                Component Lifecycle
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                Checking for EOL or &quot;At Risk&quot; components to ensure
                long-term manufacturability.
              </p>
            </article>
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            This early review process significantly reduces the probability of
            PCB re-spins and measurement performance issues.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl text-zinc-900">
          Applications &amp; Real Project Experience
        </h2>
        <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
          Qmax Systems has successfully delivered complex Analog and
          Mixed-Signal designs across a variety of high-sensitivity
          applications.{" "}
          <a
            href="/PCB-Design-Case-study"
            className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900"
          >
            [View our Case Studies here]
          </a>
          .
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
          <table className="min-w-full">
            <thead>
              <tr className="bg-zinc-100">
                <th className="w-[28%] border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                  Application
                </th>
                <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                  Technical Challenges &amp; Qmax Approach
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">
                  High-Speed Data Acquisition (DAQ)
                </td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">
                  Challenge: 32-channel synchronized sampling without
                  channel-to-channel crosstalk. Solution: Strategic partitioning
                  and matched-length differential routing for ADC clocks.
                </td>
              </tr>
              <tr className="bg-zinc-50 align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">
                  Lung Sound Recorder
                </td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">
                  Challenge: Capturing microvolt-level acoustic signals in a
                  compact, portable form factor. Solution: Implementation of
                  ultra-low-noise preamplifiers with active shielding to reject
                  environmental EMI.
                </td>
              </tr>
              <tr className="bg-white align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">
                  Ultrasonic Sensor Amplifiers
                </td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">
                  Challenge: Managing high-gain stages near high-voltage pulse
                  generators. Solution: Physical isolation and dedicated return
                  paths to prevent pulse transients from desensitizing the
                  receiver.
                </td>
              </tr>
              <tr className="bg-zinc-50 align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">
                  High-Speed ADCs/DACs for SHM
                </td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">
                  Challenge: Structural Health Monitoring requires high dynamic
                  range across wide temperature variants. Solution: Thermal
                  management for reference voltages and 3D EM simulation of
                  high-speed converter interfaces.
                </td>
              </tr>
              <tr className="bg-white align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">
                  Instrumentation Amplifiers
                </td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">
                  Challenge: Precision measurement of temperature and pressure
                  in noisy industrial environments. Solution: High CMRR layout
                  techniques and star-grounding to eliminate ground loops.
                </td>
              </tr>
              <tr className="bg-zinc-50 align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">
                  Low-Noise EMG Amplifiers
                </td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">
                  Challenge: Detecting biopotential signals (EMG) while
                  rejecting 50/60Hz power line noise. Solution: Implementation
                  of &quot;moat-and-bridge&quot; structures and specialized
                  medical-grade isolation.
                </td>
              </tr>
              <tr className="bg-white align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">
                  Femto-Farad Capacitance Device
                </td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">
                  Challenge: Measuring sub-picofarad changes amidst parasitic
                  PCB capacitance. Solution: Use of low-loss substrates
                  (Rogers/Megtron) and guard rings to neutralize parasitic
                  leakage.
                </td>
              </tr>
              <tr className="bg-zinc-50 align-top">
                <td className="border-b border-zinc-200 px-4 py-4 text-sm font-medium text-zinc-900">
                  Hearing Aids
                </td>
                <td className="border-b border-zinc-200 px-4 py-4 text-sm leading-7 text-zinc-700">
                  Challenge: Extreme miniaturization with high-gain audio
                  processing and BLE interference. Solution: HDI layout with
                  microvias and rigid-flex substrates for 3D packaging.
                </td>
              </tr>
              <tr className="bg-white align-top">
                <td className="px-4 py-4 text-sm font-medium text-zinc-900">
                  High-Power LF Plasma Generators
                </td>
                <td className="px-4 py-4 text-sm leading-7 text-zinc-700">
                  Challenge: Sensitive analog control circuitry operating near
                  kW-level RF/LF switching. Solution: Faraday cage shielding,
                  heavy copper traces (4oz+), and rigorous ESD/EFT mitigation.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)]">
              <h2 className="text-2xl text-zinc-900 md:text-3xl">
                View Analog and Mixed Signal PCB Case Studies
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
                Detailed case studies are available demonstrating real
                engineering projects.
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
                Some case studies are available under NDA due to customer
                confidentiality.
              </p>
              <div className="mt-8">
                <a
                  href="/PCB-Design-Case-study"
                  className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
                >
                  View PCB Design Case Studies
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)]">
              <h2 className="text-2xl text-zinc-900 md:text-3xl">
                Engineering Consultation &amp; Expert Review
              </h2>
              <p className="mt-4 text-sm text-zinc-900 md:text-base">
                1-Hour Complimentary Engineering Consultation
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
                We offer a free technical session with our senior engineers to
                discuss your Analog and Mixed-Signal challenges. We will review:
              </p>
              <ul className="mt-6 list-disc space-y-2 pl-6 text-sm leading-7 text-zinc-700 md:text-base">
                <li>
                  Noise Floor Requirements: Analysis of SNR targets and
                  potential interference sources.
                </li>
                <li>
                  Grounding Architecture: Evaluating split vs. solid planes for
                  your specific frequency domain.
                </li>
                <li>
                  Compliance Strategy: Preparing for CE, FCC, or Medical (IEC
                  60601) certification.
                </li>
                <li>
                  Manufacturing Feasibility: Stackup and material selection
                  (Rogers, Isola, Taconic) for precision performance.
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm text-zinc-800 transition hover:bg-zinc-100"
                >
                  Schedule Your 1-Hour Consultation
                </a>
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)]">
            <h2 className="text-2xl text-zinc-900 md:text-3xl">
              Ready to start your precision hardware project?
            </h2>
            <p className="mt-4 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
              Whether you are developing a high-speed DAQ, a sensitive medical
              sensor, or a high-power industrial controller, Qmax Systems
              delivers production-ready, first-time-right hardware.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
              >
                Request a Technical Quote
              </a>
              <span className="hidden text-sm font-medium text-zinc-400 sm:inline">
                |
              </span>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm text-zinc-800 transition hover:bg-zinc-100"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      <FAQSection faqs={faqs} />

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
        hideTopBorder
      />
    </main>
  );
}
