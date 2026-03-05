import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Analog Design Services | Qmax",
  description:
    "Analog design services by Qmax Systems. Detailed content for this service page can be added incrementally.",
};

export default function AnalogDesignPage() {
  return (
    <main className="bg-slate-100 text-justify text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-slate-300 bg-slate-100 px-4 py-1 text-xs uppercase tracking-[0.16em] text-slate-700">
              Analog Design Services
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Analog &amp; Mixed-Signal Design and Development Services
            </h1>
            <p className="mt-6 text-lg font-medium text-slate-800 md:text-xl">
              Precision Engineering for Complex Signal Chains
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
              <p>
                In an increasingly digital world, the interface between the
                physical and digital domains remains the most critical
                bottleneck in high-performance electronics. Qmax Systems
                provides comprehensive analog and mixed-signal development
                services, specializing in high-fidelity signal acquisition,
                precision conditioning, and ultra-low-noise environments.
              </p>
              <p>
                From femto-farad capacitance sensing to giga-sample data
                converters, our engineering team addresses the fundamental
                challenges of electromagnetic interference, signal integrity,
                and thermal stability to ensure laboratory-grade accuracy in
                field-deployed hardware.
              </p>
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white md:h-[420px]">
            <Image
              src="/hw-main/hw-sub/image1.jpg"
              alt="Analog and mixed-signal precision engineering"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Our Analog &amp; Mixed-Signal Expertise
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          Bridging the gap between raw physical phenomena and actionable
          digital data requires a deep understanding of physics and electronic
          theory. Our expertise spans the entire signal chain:
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              Low-Noise Signal Conditioning
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Implementation of precision instrumentation amplifiers, active
              filtering, and impedance matching for microvolt-level signals.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              High-Speed Data Acquisition (DAQ)
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Design of multi-channel systems featuring simultaneous sampling
              and synchronized clock distribution.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              Power Integrity for Analog
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              LDO-based precision regulation, split-rail generation, and
              decoupling strategies to minimize PSRR-related noise.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              Advanced PCB Topology
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Specialized layout techniques for isolation, guard rings, and
              star-grounding to eliminate ground loops and crosstalk.
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
                1. Precision Analog Front-End (AFE) Design
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                We develop custom AFEs tailored for specific sensor modalities,
                including capacitive, inductive, resistive, and piezoelectric
                transducers. Our designs focus on maximizing Signal-to-Noise
                Ratio (SNR) and Spurious-Free Dynamic Range (SFDR).
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                2. Mixed-Signal System-on-Module Integration
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                Integration of high-resolution ADCs (up to 24-bit) and
                high-speed DACs (up to 4 Gbps) with FPGAs and SoCs. We manage
                the critical timing requirements of JESD204B/C interfaces and
                LVDS signaling.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                3. RF and High-Speed Signal Interconnects
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                Design and simulation of transmission lines, controlled
                impedance routing, and return path optimization for
                multi-gigahertz signals used in Software Defined Radio (SDR)
                and telecommunications.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                4. Low-Power Wearable Electronics
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                Optimization of analog circuits for battery-operated medical and
                consumer devices, focusing on nano-ampere quiescent currents
                without compromising signal fidelity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Proven Project Experience
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Aerospace Structural Health Monitoring:
            </span>{" "}
            Developed ruggedized sensing nodes for commercial aircraft, capable
            of high-precision strain and vibration analysis in high-EMI
            environments.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              32-Channel High-Speed DAQ:
            </span>{" "}
            Engineering a simultaneous sampling system for industrial physics
            applications, utilizing FPGA-based real-time data capture.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Medical Acoustic Sensing:
            </span>{" "}
            Designed a wearable lung sound recorder featuring a low-noise
            analog front-end for clinical-grade diagnostic audio.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Femto-Farad Capacitance Measurement:
            </span>{" "}
            Implementation of ultra-high sensitivity measurement systems for
            specialized industrial proximity and material analysis.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Aerospace Cable Tension Meters:
            </span>{" "}
            High-reliability force measurement systems with calibrated analog
            outputs for flight-critical applications.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Ultra-Low-Cost Hearing Aid:
            </span>{" "}
            Engineering a low-power, high-gain analog signal path optimized for
            mass-market accessibility and long battery life.
          </li>
        </ul>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">Case Studies</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            More case studies after NDA
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Technical Differentiators
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              Noise Reduction and Isolation
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
              We employ rigorous physical isolation techniques, including
              Moat-and-Bridge PCB structures and Faraday shielding, to protect
              sensitive analog nodes from digital switching noise.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              Return Path Optimization
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
              Our engineers perform detailed analysis of current return paths to
              prevent common-mode noise injection and ensure electromagnetic
              compatibility (EMC).
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-base font-semibold text-slate-900">
              Real-Time FPGA Signal Processing
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
              By pairing analog hardware with FPGA-based DSP (Digital Signal
              Processing), we enable real-time filtering, FFTs, and decimation
              at the edge, reducing the load on downstream processors.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            End-to-End Development Process
          </h2>
          <ul className="mt-8 space-y-3">
            <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
              <span className="font-semibold text-slate-900">
                Architecture &amp; Specification:
              </span>{" "}
              Definition of dynamic range, bandwidth, and accuracy
              requirements.
            </li>
            <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
              <span className="font-semibold text-slate-900">
                Simulation &amp; Modeling:
              </span>{" "}
              SPICE modeling and signal integrity simulations to validate
              circuit behavior.
            </li>
            <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
              <span className="font-semibold text-slate-900">
                Schematic Capture:
              </span>{" "}
              Component selection based on TCR (Temperature Coefficient of
              Resistance), voltage coefficient, and long-term stability.
            </li>
            <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
              <span className="font-semibold text-slate-900">
                Specialized Layout:
              </span>{" "}
              Critical placement of analog and digital planes, differential pair
              routing, and thermal management.
            </li>
            <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
              <span className="font-semibold text-slate-900">
                Prototyping &amp; Characterization:
              </span>{" "}
              Validation using high-bandwidth oscilloscopes, spectrum
              analyzers, and precision source-measure units (SMUs).
            </li>
            <li className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700 md:text-base">
              <span className="font-semibold text-slate-900">
                Certification Support:
              </span>{" "}
              Pre-compliance testing for EMI/EMC standards (FCC, CE, MIL-STD).
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Compliance &amp; Standards
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          We adhere to stringent global standards to ensure reliability in
          regulated industries:
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">Medical:</span> ISO
            13485, IEC 60601-1 (Signal isolation and patient safety).
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">Aerospace:</span>{" "}
            MIL-STD-461 (EMI) and DO-160.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">Industrial:</span>{" "}
            IPC-2221/2222 for PCB design and IEC 61000 for immunity.
          </li>
        </ul>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Why Choose Qmax Systems
          </h2>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-700 md:text-base">
            Qmax Systems combines theoretical depth with manufacturing reality.
            Unlike pure-play design firms, we understand how parasitic elements
            in physical PCBs affect theoretical models. Our &quot;First Time
            Right&quot;
            philosophy is backed by a track record of solving the most
            difficult noise and interference challenges in the industry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_6px_30px_rgba(15,23,42,0.08)] md:p-10">
          <h2 className="text-3xl font-semibold text-slate-900">
            Complimentary Consultation Section
          </h2>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            Discuss Your Signal Integrity Challenges
          </h3>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Our senior engineering team is available to review your analog
            signal chain requirements, from sensor selection to high-speed
            digitization.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg border border-sky-300 bg-sky-100 px-5 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-400 hover:bg-sky-200"
          >
            Request Technical Consultation
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-4">
          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                1. How do you manage ground loops in multi-channel DAQ systems?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              We utilize star-grounding configurations, galvanic isolation
              (opto/digital isolators), and differential signaling to ensure
              that potential differences between nodes do not introduce noise or
              errors.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                2. What is your experience with high-speed ADC interfaces?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              We have extensive experience with LVDS and JESD204B/C protocols,
              managing clock distribution and multi-device synchronization for
              rates up to 4 Gbps.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                3. Can you design for sub-microvolt signal levels?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              Yes. This involves selecting ultra-low-offset op-amps,
              implementing multi-stage filtering, and using specialized PCB
              materials to minimize leakage currents.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                4. How do you optimize analog circuits for battery-powered devices?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              We employ power-cycling techniques, select high-efficiency LDOs
              with low quiescent current, and use low-voltage analog components
              to extend operational life.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                5. What PCB materials do you recommend for high-frequency mixed-signal designs?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              Depending on the frequency, we utilize high-speed laminates like
              Rogers, Megtron 6, or high-Tg FR4 with controlled dielectric
              constants to minimize signal loss.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                6. Do you provide FPGA firmware for data acquisition?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              Yes, we provide custom RTL (Verilog/VHDL) for high-speed data
              capture, FIFO buffering, and initial DSP filtering.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                7. How do you handle EMI/EMC compliance in analog designs?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              Through early-stage simulation, proper decoupling, multi-layer
              shielding, and rigorous return path management.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                8. Can you assist with sensor selection?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              We evaluate sensors based on sensitivity, linearity, thermal
              drift, and output impedance to ensure they match the AFE
              requirements.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                9. What is your approach to thermal stability in precision circuits?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              We use components with low Temperature Coefficients and implement
              thermal relief or heat sinking to maintain a constant operating
              temperature for sensitive references.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                10. How do you achieve high SNR in medical wearables?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              By using high-order active filters to reject 50/60Hz power line
              noise and implementing robust shielding against RFI from wireless
              modules (BT/Wi-Fi).
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                11. What bit-depths do you typically work with?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              We design systems ranging from high-speed 8-bit flash converters
              to high-precision 24-bit Delta-Sigma ADCs.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                12. Do you support simultaneous sampling across multiple channels?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              Yes, we design hardware with synchronized trigger and clock lines
              to ensure zero-phase skew between channels.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                13. Can you miniaturize existing bulky analog designs?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              We specialize in transitioning through-hole designs to
              high-density SMT/BGA layouts, often integrating discrete logic
              into small-footprint FPGAs.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                14. What tools do you use for simulation?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              We utilize industry-standard tools including LTSpice, PSpice, and
              specialized SI/PI simulation software for high-speed analysis.
            </p>
          </details>

          <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                15. How do you validate the performance of a completed design?
              </h3>
              <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-700 md:text-base">
              We perform rigorous characterization using precision signal
              generators, spectrum analyzers, and automated test fixtures to
              verify ENOB, SNR, and THD.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
