import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { pcbCaseStudies } from "@/data/service-case-studies";

const rfFaqs = [
  {
    question: "1. What frequency range do you support?",
    answer:
      "We design RF PCBs from sub-GHz to millimeter-wave frequencies up to 80 GHz.",
  },
  {
    question: "2. Do you design microwave PCBs?",
    answer:
      "Yes. We support microwave PCB designs using low-loss laminates and transmission line modeling.",
  },
  {
    question: "3. Do you design WiFi RF boards?",
    answer:
      "Yes. We have designed WiFi 5 and WiFi 6 RF PCBs with multiple MIMO chains.",
  },
  {
    question: "4. Do you support antenna integration?",
    answer:
      "Yes. We design antenna feedlines, matching networks, and RF isolation structures.",
  },
  {
    question: "5. Do you perform RF simulations?",
    answer:
      "Yes. SI, PI, and EM simulations are performed before layout completion.",
  },
  {
    question: "6. Do you support mmWave PCB designs?",
    answer: "Yes. We have experience with 60 GHz radar-based sensing systems.",
  },
  {
    question: "7. What materials are used for RF PCBs?",
    answer:
      "Common materials include Rogers, Taconic, Isola Astra, and hybrid RF-FR4 stackups.",
  },
  {
    question: "8. Do you coordinate with PCB fabrication houses?",
    answer:
      "Yes. Stackups and impedance targets are aligned with the chosen manufacturer.",
  },
  {
    question: "9. Can you redesign RF boards that failed FCC testing?",
    answer: "Yes. We provide RF layout troubleshooting and redesign services.",
  },
  {
    question: "10. Do you support RF power amplifier boards?",
    answer: "Yes. We have designed 1 kW RF PA systems.",
  },
  {
    question: "11. Can you design LoRa RF boards?",
    answer:
      "Yes. LoRa transceiver boards with antenna tuning networks are supported.",
  },
  {
    question: "12. Do you support BLE RF designs?",
    answer:
      "Yes. BLE modules with RF filtering and antenna matching are designed.",
  },
  {
    question: "13. Do you support SDR hardware?",
    answer: "Yes. SDR RF front-ends and RF amplifier chains.",
  },
  {
    question: "14. Can you design RF front-end modules?",
    answer: "Yes. Including LNAs, mixers, filters, and PAs.",
  },
  {
    question: "15. Do you provide RF tuning support?",
    answer: "Yes. We support RF bring-up and calibration.",
  },
  {
    question: "16. What tools are used for RF simulation?",
    answer: "HFSS, HyperLynx, and other EM modeling tools.",
  },
  {
    question: "17. Can you design RF filters on PCB?",
    answer: "Yes. Microstrip and distributed RF filters.",
  },
  {
    question: "18. Do you provide DFM review?",
    answer: "Yes. All designs undergo DFM validation.",
  },
  {
    question: "19. Do you support mmWave antenna feeds?",
    answer: "Yes. Controlled impedance CPW and microstrip lines.",
  },
  {
    question: "20. Can you design RF test equipment PCBs?",
    answer: "Yes.",
  },
  {
    question: "21. What deliverables do you provide?",
    answer: "Gerbers, ODB++, impedance reports, and assembly documentation.",
  },
  {
    question: "22. Do you handle RF shielding design?",
    answer: "Yes. Shield cans and RF compartments.",
  },
  {
    question: "23. Do you design high-power RF boards?",
    answer: "Yes.",
  },
  {
    question: "24. What RF test equipment are you familiar with?",
    answer: "CMW500, spectrum analyzers, vector network analyzers.",
  },
  {
    question: "25. Do you design microwave sensors?",
    answer: "Yes.",
  },
  {
    question: "26. Do you support FCC compliance preparation?",
    answer: "Yes.",
  },
  {
    question: "27. Do you support CE compliance preparation?",
    answer: "Yes.",
  },
  {
    question: "28. Who owns the design IP?",
    answer: "The customer owns all design IP.",
  },
  {
    question: "29. Do you support prototype bring-up?",
    answer: "Yes.",
  },
  {
    question: "30. Can you support production transfer?",
    answer: "Yes.",
  },
];

export const metadata: Metadata = {
  title: "RF and Microwave PCB Design | Qmax",
  description:
    "RF and microwave PCB design services including RF front-end layout, antenna feed design, low-loss materials, and EMI-aware implementation.",
};

export default function RFMicrowavePCBDesignPage() {
  return (
    <main className="bg-zinc-100 text-justify text-zinc-900">
      <section className="relative overflow-hidden pt-14 pb-12 border-b border-zinc-200 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(24,24,27,0.08),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(82,82,91,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Full-width Image Container */}
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-zinc-200 group">
            <Image
              src="/pcb-design/images/rf-pcb-service.jpg"
              alt="RF and Microwave PCB Design - Qmax Systems"
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
                RF and Microwave
                <br className="hidden md:block" />
                PCB Design Services.
              </h1>
            </div>
          </div>
          <div className="mt-10 max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p className="text-sm font-medium tracking-wide text-zinc-800 md:text-base">
              High-Frequency RF Layout | Microwave PCB Engineering | mmWave
              Design up to 80 GHz
            </p>
            <p>
              Modern RF and microwave systems demand far more than conventional
              PCB routing. At frequencies from hundreds of MHz to
              millimeter-wave bands, the PCB becomes part of the RF circuit
              itself. Trace geometry, dielectric loss, via transitions,
              grounding topology, shielding strategy, and impedance
              discontinuities directly influence insertion loss, phase
              stability, noise floor, and EMI compliance.
            </p>
            <p>
              Qmax Systems provides advanced RF PCB design services for wireless
              communication systems, RF instrumentation, radar sensors,
              industrial RF generators, and microwave measurement platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-left text-3xl text-zinc-900">
          Our RF and microwave PCB design services include:
        </h2>
        <ul className="mt-6 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
          <li>RF PCB Layout Services</li>
          <li>Microwave PCB Engineering</li>
          <li>mmWave PCB Design (24 GHz-80 GHz)</li>
          <li>Antenna Integration &amp; RF Front-End Layout</li>
          <li>RF Power Amplifier PCB Design</li>
          <li>RF Test and Measurement Hardware</li>
        </ul>
        <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
          We work closely with fabrication partners using Rogers, Taconic,
          Isola, Megtron and hybrid stackups to achieve controlled impedance,
          low loss, and repeatable manufacturing yields.
        </p>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-left text-3xl text-zinc-900">
            RF PCB Engineering Approach
          </h2>
          <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
            RF PCB layout is fundamentally an electromagnetic design problem.
          </p>
          <p className="mt-4 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
            At frequencies above a few hundred MHz, traditional digital PCB
            practices become insufficient because:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Transmission lines replace simple copper traces</li>
            <li>Return current paths must be precisely controlled</li>
            <li>Ground reference discontinuities introduce radiation</li>
            <li>Substrate dielectric properties influence RF behavior</li>
          </ul>
          <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
            At Qmax Systems, we apply a structured RF engineering workflow:
          </p>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-zinc-700 md:grid-cols-2 md:text-base">
            <li className="rounded-xl border border-zinc-200 bg-white p-4">
              Architecture Analysis
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-4">
              Stackup Engineering
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-4">
              Transmission Line Modeling
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-4">
              Constraint-Driven Layout
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-4">
              EM Simulation
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-4">
              EMI-Ready Layout Strategy
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-4 md:col-span-2">
              Manufacturing Alignment
            </li>
          </ul>
          <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
            This workflow ensures the design is production-ready and
            compliance-ready before the PCB is fabricated.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-left text-3xl text-zinc-900">
          Applications &amp; Real Project Experience
        </h2>
        <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
          Qmax Systems has designed multiple RF and microwave PCBs across
          industrial, wireless, and sensing platforms.
        </p>

        <article className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)] md:p-8">
          <h3 className="text-left text-xl text-zinc-900 md:text-2xl">
            High-Power RF Power Amplifier - 1 kW @ 13.56 MHz
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
            Industrial plasma generators and RF heating systems operate at high
            power levels where PCB parasitics become critical.
          </p>

          <p className="mt-6 text-base text-zinc-900">
            Technical design considerations:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>High-current RF paths using wide copper geometries</li>
            <li>Thermal spreading copper planes</li>
            <li>Controlled RF current loops</li>
            <li>High-voltage isolation for power stages</li>
            <li>RF shielding between driver and output stage</li>
          </ul>

          <p className="mt-6 text-base text-zinc-900">
            Stackup considerations:
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border border-zinc-200">
            <table className="min-w-full">
              <thead>
                <tr className="bg-zinc-100">
                  <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                    Parameter
                  </th>
                  <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                    Design Approach
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    Copper thickness
                  </td>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    2-4 oz copper
                  </td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    Substrate
                  </td>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    Low loss RF laminate
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    Ground strategy
                  </td>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    Continuous RF ground plane
                  </td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="px-4 py-3 text-sm text-zinc-700">
                    EMI control
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-700">
                    Shielding walls and cavity isolation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-700 md:text-base">
            EMI mitigation is essential since high-power RF stages easily
            generate harmonics and conducted emissions.
          </p>

          <Link
            href="/case-studies/polyphase-power_measurement"
            className="mt-6 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
          >
            See Case study
          </Link>
        </article>

        <article className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)] md:p-8">
          <h3 className="text-left text-xl text-zinc-900 md:text-2xl">
            WiFi-6 MIMO RF PCB Design
          </h3>
          <p className="mt-2 text-sm font-medium tracking-wide text-zinc-800 md:text-base">
            2.4 GHz 4x4 | 5.1 GHz 4x4 | 5.8 GHz 4x4
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
            We have designed complex WiFi-6 RF boards integrating multiple RF
            chains including:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>RF transceiver ICs</li>
            <li>Power amplifiers</li>
            <li>LNAs</li>
            <li>RF filters</li>
            <li>Antenna matching networks</li>
          </ul>

          <p className="mt-6 text-base text-zinc-900">
            Key RF PCB engineering considerations:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Equal RF path lengths across MIMO channels</li>
            <li>Isolation between RF chains</li>
            <li>Controlled impedance transmission lines</li>
            <li>RF ground via fences</li>
            <li>Antenna feedline optimization</li>
          </ul>

          <p className="mt-6 text-base text-zinc-900">
            Signal Integrity analysis was used to ensure:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>RF trace impedance accuracy</li>
            <li>Crosstalk suppression</li>
            <li>RF noise isolation from digital sections</li>
          </ul>

          <p className="mt-6 text-base text-zinc-900">
            RF testing was validated using equipment such as:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Rohde &amp; Schwarz CMW500</li>
            <li>Spectrum analyzers</li>
            <li>Vector network analyzers</li>
          </ul>

          <Link
            href="/case-studies/Wi-Fi-AP"
            className="mt-6 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
          >
            See Case study
          </Link>
        </article>

        <article className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)] md:p-8">
          <h3 className="text-left text-xl text-zinc-900 md:text-2xl">
            Software Defined Radio (SDR) RF Platforms
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
            Qmax has developed RF PCBs for SDR architectures integrating:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>RF front-ends</li>
            <li>RF preamplifiers</li>
            <li>RF power amplifiers</li>
            <li>ADC/DAC converters</li>
          </ul>

          <p className="mt-6 text-base text-zinc-900">
            Critical layout constraints include:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Isolation between RF and digital sections</li>
            <li>Phase-stable clock routing</li>
            <li>Differential RF paths</li>
            <li>Shielded RF modules</li>
          </ul>

          <p className="mt-6 text-base text-zinc-900">Typical stackup:</p>
          <div className="mt-3 overflow-x-auto rounded-xl border border-zinc-200">
            <table className="min-w-full">
              <thead>
                <tr className="bg-zinc-100">
                  <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                    Layer
                  </th>
                  <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                    Function
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    L1
                  </td>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    RF components
                  </td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    L2
                  </td>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    RF ground
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    L3
                  </td>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    Digital signals
                  </td>
                </tr>
                <tr className="bg-zinc-50">
                  <td className="px-4 py-3 text-sm text-zinc-700">L4</td>
                  <td className="px-4 py-3 text-sm text-zinc-700">
                    Power planes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-zinc-700 md:text-base">
            This structure ensures clean RF return paths and reduced coupling
            noise.
          </p>

          <Link
            href="/case-studies/Security-Controller"
            className="mt-6 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
          >
            See Case study
          </Link>
        </article>

        <article className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)] md:p-8">
          <h3 className="text-left text-xl text-zinc-900 md:text-2xl">
            60 GHz Microwave Moisture Measurement System
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
            Millimeter-wave designs require extremely careful PCB engineering
            due to:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Very short wavelengths</li>
            <li>Higher dielectric losses</li>
            <li>Strong sensitivity to layout parasitics</li>
          </ul>

          <p className="mt-6 text-base text-zinc-900">
            Technical architecture:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>60 GHz radar transceiver</li>
            <li>IQ signal processing chain</li>
            <li>RF mixers and LNAs</li>
            <li>Microwave antenna feed structures</li>
          </ul>

          <p className="mt-6 text-base text-zinc-900">
            Design techniques used:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Microstrip and coplanar waveguide transmission lines</li>
            <li>Via fence shielding</li>
            <li>Sub-mil trace tolerance</li>
            <li>Low-loss RF substrates</li>
          </ul>

          <span className="mt-6 inline-flex items-center rounded-lg border border-zinc-300 bg-zinc-100 px-5 py-3 text-sm text-zinc-700">
            See Case study - need NDA
          </span>
        </article>

        <article className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)] md:p-8">
          <h3 className="text-left text-xl text-zinc-900 md:text-2xl">
            LoRa, WiFi, BLE Wireless Modules
          </h3>
          <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
            We have developed several wireless communication PCBs integrating:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>LoRa radios</li>
            <li>BLE transceivers</li>
            <li>WiFi modules</li>
            <li>Antenna matching networks</li>
          </ul>

          <p className="mt-6 text-base text-zinc-900">
            Key design constraints include:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>RF ground continuity</li>
            <li>Antenna tuning networks</li>
            <li>RF isolation from switching regulators</li>
            <li>FCC pre-compliance considerations</li>
          </ul>

          <Link
            href="/case-studies/Wi-Fi-AP"
            className="mt-6 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
          >
            See Case study
          </Link>
        </article>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-left text-3xl text-zinc-900">
            Technical RF PCB Capabilities
          </h2>
          <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
            Qmax Systems supports RF PCB layout across a wide frequency
            spectrum.
          </p>

          <h3 className="text-left mt-8 text-xl text-zinc-900 md:text-2xl">
            Wireless Technologies
          </h3>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>LTE RF boards</li>
            <li>WiFi 5 / WiFi 6 / WiFi 7 PCB design</li>
            <li>LoRa RF modules</li>
            <li>BLE RF hardware</li>
            <li>SDR RF platforms</li>
            <li>RF front-ends</li>
          </ul>

          <h3 className="text-left mt-8 text-xl text-zinc-900 md:text-2xl">
            Frequency Coverage
          </h3>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Sub-GHz</li>
            <li>2.4 GHz ISM</li>
            <li>5 GHz WiFi bands</li>
            <li>Microwave 24-60 GHz</li>
            <li>mmWave sensor boards</li>
          </ul>

          <h3 className="text-left mt-8 text-xl text-zinc-900 md:text-2xl">
            RF PCB Layout Techniques
          </h3>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Microstrip transmission lines</li>
            <li>Coplanar waveguides</li>
            <li>RF via fences</li>
            <li>Shielded RF compartments</li>
            <li>RF impedance matching networks</li>
            <li>Antenna feed optimization</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-left text-3xl text-zinc-900">
          RF Stackup Engineering &amp; Material Selection
        </h2>
        <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
          RF PCB material selection is critical to maintain signal integrity at
          microwave frequencies.
        </p>

        <h3 className="text-left mt-8 text-xl text-zinc-900 md:text-2xl">
          Common RF substrates used:
        </h3>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
          <li>Rogers RO4350B</li>
          <li>Taconic RF laminates</li>
          <li>Isola Astra</li>
          <li>Megtron low-loss materials</li>
        </ul>

        <h3 className="text-left mt-8 text-xl text-zinc-900 md:text-2xl">
          Stackup design parameters include:
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-200">
          <table className="min-w-full">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                  Parameter
                </th>
                <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                  Importance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  Dielectric constant (Dk)
                </td>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  Determines impedance
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  Loss tangent (Df)
                </td>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  Affects insertion loss
                </td>
              </tr>
              <tr>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  Copper roughness
                </td>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  Influences RF attenuation
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="px-4 py-3 text-sm text-zinc-700">
                  Layer symmetry
                </td>
                <td className="px-4 py-3 text-sm text-zinc-700">
                  Reduces warpage
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
          Hybrid stackups combining RF materials with FR-4 layers are often used
          to control cost while preserving RF performance.
        </p>

        <a
          href="/PCB-design-resources#pcb-design-materials-finishes"
          className="mt-8 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
        >
          View Stackup Options
        </a>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-left text-3xl text-zinc-900">
            Complimentary Schematic Review
          </h2>
          <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
            When customers engage Qmax Systems for RF PCB layout services, we
            perform a complimentary schematic review before layout begins.
          </p>
          <p className="mt-4 text-base text-zinc-900">The review covers:</p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>RF signal chain architecture</li>
            <li>Impedance matching networks</li>
            <li>Power supply filtering</li>
            <li>RF ground references</li>
            <li>Component lifecycle risk</li>
          </ul>
          <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
            This early validation prevents costly PCB re-spins and RF tuning
            delays.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-left text-3xl text-zinc-900">
          Why Choose Qmax Systems for RF PCB Design
        </h2>
        <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
          <table className="min-w-full">
            <thead>
              <tr className="bg-zinc-100">
                <th className="w-1/3 border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                  Feature
                </th>
                <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                  Qmax Advantage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-900">
                  Architecture-First Engineering
                </td>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  RF architecture validated before layout
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border-b border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-900">
                  Simulation-Driven Constraints
                </td>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  RF constraints defined before routing
                </td>
              </tr>
              <tr>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-900">
                  RF Measurement Expertise
                </td>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  Familiar with RF test equipment workflows
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border-b border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-900">
                  Manufacturing Alignment
                </td>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  Direct coordination with PCB fabrication houses
                </td>
              </tr>
              <tr>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-900">
                  Compliance Readiness
                </td>
                <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                  Designs prepared for FCC / CE certification
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="px-4 py-3 text-sm font-medium text-zinc-900">
                  Production-Ready Deliverables
                </td>
                <td className="px-4 py-3 text-sm text-zinc-700">
                  DFM / DFT validated files
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-left text-3xl text-zinc-900">
            Additional commitments:
          </h2>
          <ul className="mt-6 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Customer retains full design IP</li>
            <li>Component obsolescence risk analysis</li>
            <li>Manufacturing coordination</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-left text-3xl text-zinc-900">
          RF PCB Case Studies
        </h2>
        <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
          Detailed RF engineering case studies are available demonstrating:
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
          <li>RF power amplifiers</li>
          <li>WiFi-6 multi-antenna systems</li>
          <li>mmWave sensors</li>
          <li>SDR RF platforms</li>
        </ul>
        <Link
          href="/PCB-Design-Case-study"
          className="mt-8 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
        >
          View RF PCB Case Studies
        </Link>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-left text-3xl text-zinc-900">
            Industries Served
          </h2>
          <p className="mt-6 max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
            Qmax RF PCB design services support multiple industries:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
            <li>Wireless communication</li>
            <li>Industrial RF generators</li>
            <li>Telecom infrastructure</li>
            <li>IoT hardware</li>
            <li>Radar sensors</li>
            <li>RF test equipment</li>
            <li>Defense electronics</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)]">
            <h2 className="text-left text-2xl text-zinc-900 md:text-3xl">
              Start Your RF PCB Development Project
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
              If you are developing:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
              <li>WiFi 6 / WiFi 7 hardware</li>
              <li>RF power amplifiers</li>
              <li>RF generators for Plasma Applications</li>
              <li>Microwave sensing systems</li>
              <li>SDR platforms</li>
              <li>mmWave radar devices</li>
            </ul>
            <p className="mt-6 text-sm leading-7 text-zinc-700 md:text-base">
              Qmax Systems can support your project from RF architecture through
              production-ready PCB design. Contact us to discuss your
              requirements.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
              >
                Contact us to discuss your requirements
              </Link>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)]">
            <h2 className="text-left text-2xl text-zinc-900 md:text-3xl">
              1-Hour Complimentary Engineering Consultation
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
              We offer a free 1-hour technical consultation with our RF PCB
              engineers.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
              During this session we will review:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
              <li>RF architecture risks</li>
              <li>Stackup strategy</li>
              <li>EMI compliance challenges</li>
              <li>Manufacturing feasibility</li>
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm text-zinc-800 transition hover:bg-zinc-100"
              >
                Schedule Your 1-Hour Engineering Consultation
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FAQSection
        faqs={rfFaqs.map((item) => ({ q: item.question, a: item.answer }))}
      />

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
        hideTopBorder
      />
    </main>
  );
}
