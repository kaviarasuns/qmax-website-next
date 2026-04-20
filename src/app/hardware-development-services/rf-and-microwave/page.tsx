import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { OtherCapabilitiesScrollSection } from "@/components/other-capabilities-scroll-section";
import { hwRfMicrowaveOtherCapabilities as otherCapabilities } from "@/data/other-capabilities";
import { hardwareCaseStudies } from "@/data/service-case-studies";

export const metadata: Metadata = {
  title: "RF and Microwave Services | Qmax",
  description:
    "RF and microwave engineering services from concept and simulation to validation and manufacturable hardware.",
};

const rfFaqGroups = [
  {
    title: "General RF and Microwave FAQs",
    items: [
      {
        q: "1. What frequency ranges do your RF services cover?",
        a: "We cover the spectrum from Low Frequency (LF) and High Frequency (HF) up to Millimeter Wave (mmWave) bands (24GHz to 77GHz+).",
      },
      {
        q: "2. Can you assist with WiFi 6/6E and WiFi 7 transitions?",
        a: "Yes. We have extensive experience with 4x4 MIMO configurations and the latest tri-band architectures using advanced SoCs.",
      },
      {
        q: "3. How do you handle EMI/EMC issues in compact designs?",
        a: "We utilize specialized shielding, component partitioning, and multi-layer PCB stackups to mitigate electromagnetic interference at the source.",
      },
      {
        q: "4. Do you provide antenna design and tuning services?",
        a: "We offer custom PCB antenna design, antenna selection, and impedance matching to ensure optimal radiation patterns and efficiency.",
      },
      {
        q: "5. What tools do you use for RF simulation?",
        a: "We utilize industry-standard EDA tools for schematic capture, layout, and 3D electromagnetic field simulation.",
      },
      {
        q: "6. Can Qmax Systems help with 4G/5G private network hardware?",
        a: "Yes, we design RF front-ends, including LNAs and Power Amplifiers, specifically for cellular infrastructure.",
      },
      {
        q: "7. What is your experience with high-power RF?",
        a: "We have successfully developed RF generators up to 1KW for industrial plasma applications, focusing on thermal management and power stability.",
      },
      {
        q: "8. Do you support LoRa and other Long Range LPWAN protocols?",
        a: "Yes, we have designed several LoRa-based devices for industrial and agricultural sensing.",
      },
      {
        q: "9. How do you ensure ground loop elimination?",
        a: "We implement star-grounding, split planes, and differential signaling where appropriate to prevent common-mode noise.",
      },
      {
        q: "10. What in-house testing capabilities do you have?",
        a: "Our lab is equipped with the R&S CMW500, spectrum analyzers, and high-speed oscilloscopes for comprehensive signal characterization.",
      },
      {
        q: "11. Can you optimize a design for low power consumption?",
        a: "Our work on BLE reference designs for semiconductor companies demonstrates our ability to maximize battery life through hardware and firmware optimization.",
      },
      {
        q: "12. Do you handle mmWave sensor integration?",
        a: "Yes, we have implemented several mmWave sensors for proximity and velocity detection in industrial environments.",
      },
      {
        q: "13. What materials do you recommend for Microwave PCBs?",
        a: "Depending on the frequency and loss budget, we typically specify Rogers, Taconic, or Panasonic Megtron series materials.",
      },
      {
        q: "14. Can you help with FCC/CE certification?",
        a: "While we are a design house, we perform extensive pre-compliance testing to help ensure your product passes official certification on the first attempt.",
      },
      {
        q: "15. What information is needed to start an RF project?",
        a: "Ideally, we require the link budget, required frequency bands, power output targets, and any mechanical constraints regarding PCB size or enclosure.",
      },
    ],
  },
  {
    title: "Category: Wireless and WiFi Engineering",
    items: [
      {
        q: "How does WiFi 7 improve throughput compared to WiFi 6?",
        a: "WiFi 7 achieves speeds up to 46 Gbps by utilizing 320 MHz channels and 4096-QAM. WiFi 6 is limited to 160 MHz and 1024-QAM. WiFi 7 also introduces Multi-Link Operation (MLO), allowing devices to transmit data across 2.4, 5, and 6 GHz simultaneously to reduce latency and congestion.",
      },
      {
        q: "What are the primary challenges in 5G mmWave PCB design?",
        a: "High atmospheric attenuation and extreme sensitivity to trace geometry are the critical hurdles. At mmWave frequencies (24GHz+), even a 0.1mm deviation in trace width can cause impedance mismatches. We use low-loss substrates and 3D EM simulation to mitigate these parasitic effects.",
      },
      {
        q: "How do you prevent desensitization (Desense) in multi-radio IoT devices?",
        a: "We reduce Desense through high-rejection BAW filters and strategic spatial isolation. By partitioning the RF front-end and optimizing the PDN, we prevent harmonics from digital clocks or LTE transmitters from raising the noise floor of sensitive WiFi or GPS receivers.",
      },
      {
        q: "Why is MU-MIMO essential for enterprise WiFi networks?",
        a: "MU-MIMO allows an access point to communicate with multiple clients simultaneously rather than sequentially. In high-density environments, this reduces airtime fairness issues. We optimize antenna arrays for low Envelope Correlation Coefficient (ECC) to maintain distinct spatial streams.",
      },
      {
        q: "What is the maximum range of a LoRaWAN link in an urban environment?",
        a: "Typical urban range is 2-5 km, depending on link budget and building density. We optimize range by selecting high-gain antennas and tuning spreading factor to balance data rate against receiver sensitivity.",
      },
    ],
  },
  {
    title: "Category: Industrial and High-Power RF",
    items: [
      {
        q: "How do you protect a 1kW RF generator from high VSWR?",
        a: "We implement high-speed directional couplers and foldback circuitry. When plasma loads become unmatched, reflected power can damage the PA. Our designs detect these shifts quickly and reduce output power until impedance is stabilized.",
      },
      {
        q: "Why is 13.56 MHz a standard frequency for industrial plasma generators?",
        a: "13.56 MHz is an assigned ISM band that offers a practical balance between ion energy and plasma density. It enables efficient power delivery while keeping interference manageable when the matching network is tuned for chamber impedance.",
      },
      {
        q: "What is the best PCB substrate for high-power RF applications?",
        a: "Rogers 4350B and Megtron 6 are common standards due to low dissipation factor (tan delta). Standard FR-4 absorbs more RF energy, causing dielectric heating and higher signal loss.",
      },
      {
        q: "How do you manage thermal dissipation in GaN-on-SiC power amplifiers?",
        a: "We use copper-filled thermal vias and embedded coins to pull heat directly from the die. GaN devices operate at high power density, so low-resistance thermal paths to a heatsink are essential for safe junction temperatures.",
      },
      {
        q: "What is the role of a matching network in an RF system?",
        a: "A matching network maximizes power transfer by aligning source and load impedance to 50 Ohm. Using Smith chart synthesis, we design LC or microstrip networks to reduce reflections and improve efficiency.",
      },
    ],
  },
  {
    title: "Category: Compliance and EMI/EMC",
    items: [
      {
        q: "Why did my product fail FCC Part 15 Radiated Emissions?",
        a: "Failures are often caused by unintended antennas such as unshielded cables or poorly bypassed traces. We use near-field probes to identify leakage and apply common-mode chokes or shielding to suppress offending harmonics.",
      },
      {
        q: "What is the difference between pre-compliance and full certification?",
        a: "Pre-compliance is an engineering phase used to find and fix issues early. Full certification is the final formal testing required for market access. We use pre-compliance to reduce risk before accredited testing.",
      },
      {
        q: "How can I reduce Conducted Emissions (CE) in a switching power supply?",
        a: "A tuned Pi-filter at the power input is typically effective. We also apply ground-loop control and snubbers on switching FETs to reduce high-frequency ringing that couples into power lines.",
      },
      {
        q: "What are FCC requirements for modular approval vs full integration?",
        a: "Modular approval can use a pre-certified radio, but products still require unintentional radiator testing. Full on-board radio integration requires stricter intentional radiator certification.",
      },
      {
        q: "How do you shield sensitive analog signals from RF interference?",
        a: "We use Faraday shielding, differential signaling, and internal stripline routing between ground planes to isolate sensitive traces from high-power RF fields.",
      },
    ],
  },
  {
    title: "Category: Hardware and PCB Design",
    items: [
      {
        q: "What is controlled impedance and why is it critical for RF?",
        a: "Controlled impedance maintains target line impedance, typically 50 Ohm, to reduce reflections. Changes in trace geometry or stubs cause VSWR spikes, lower signal quality, and potential component stress.",
      },
      {
        q: "How does skin effect impact RF PCB layout?",
        a: "At higher frequencies, current crowding near the copper surface increases effective resistance. We address this with suitable trace geometry and surface finish choices to reduce loss.",
      },
      {
        q: "What is the fiber weave effect in high-speed RF boards?",
        a: "Fiber weave can create differential timing skew because one trace may travel over resin while the other travels over glass. We mitigate this using routing strategies and spread-weave materials.",
      },
      {
        q: "Why should I avoid via stubs in high-frequency designs?",
        a: "Via stubs can behave as resonant discontinuities and reflect energy. For high-frequency channels, we specify back-drilling or blind/buried vias to remove unused stub length.",
      },
      {
        q: "How do you calculate the link budget for a wireless product?",
        a: "Link budget equals transmit power plus antenna gain minus path loss minus fade margin. We use this to estimate real-world range and verify receiver sensitivity margins.",
      },
    ],
  },
  {
    title: "Category: Prototyping and Testing",
    items: [
      {
        q: "What is a VNA (Vector Network Analyzer) used for?",
        a: "A VNA measures S-parameters for impedance match and transmission behavior. It quantifies how much power is reflected (S11) versus transmitted (S21).",
      },
      {
        q: "What is EVM (Error Vector Magnitude) and why does it matter for WiFi?",
        a: "EVM is a metric of modulation quality. Higher EVM indicates noisier constellation points, which can force lower modulation schemes and reduce throughput.",
      },
      {
        q: "How do you perform RF near-field vs far-field testing?",
        a: "Near-field probing helps identify local PCB noise sources. Far-field testing, typically in an anechoic environment, measures actual radiation behavior and patterns.",
      },
      {
        q: "Can you simulate an antenna's performance before building the PCB?",
        a: "Yes. We use 3D EM simulation to model gain, bandwidth, matching, and radiation patterns before physical prototyping.",
      },
      {
        q: "What is TRP (Total Radiated Power) in mobile device testing?",
        a: "TRP measures total emitted antenna power across all directions. It captures both antenna efficiency and enclosure effects that are not visible in simple conducted cable tests.",
      },
    ],
  },
  {
    title: "Category: Strategic and Process",
    items: [
      {
        q: "What is the typical cost of an RF design re-spin?",
        a: "A re-spin can cost thousands to tens of thousands of dollars in fabrication and testing, plus schedule delay. We prioritize simulation and pre-compliance to reduce this risk.",
      },
      {
        q: "How do you ensure unit-to-unit consistency in mass production?",
        a: "We specify controlled-impedance coupons per panel and use production test strategies to verify RF behavior, helping ensure repeatability from pilot builds to volume manufacturing.",
      },
      {
        q: "Does Qmax help with component sourcing and BOM optimization?",
        a: "Yes. We balance performance, cost, and lifecycle availability, and proactively identify second-source options for critical components.",
      },
      {
        q: "What is phase noise and how does it impact high-speed data?",
        a: "Phase noise is frequency-domain instability in oscillators. For high-order modulation schemes, excess phase noise degrades demodulation margin and data integrity.",
      },
      {
        q: "How do you approach RF design for medical vs military applications?",
        a: "Medical designs emphasize coexistence and patient safety, while military designs emphasize robustness and interference resilience. We adapt design and validation strategy to target standards and use environments.",
      },
    ],
  },
];


export default function RfAndMicrowavePage() {
  return (
    <main className="bg-slate-100 text-justify text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-slate-300 bg-slate-100 px-4 py-1 text-xs uppercase tracking-[0.16em] text-slate-700">
              RF and Microwave Services
            </p>
            <h1 className="text-left mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              RF and Microwave Engineering Services
            </h1>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
              <p>
                Qmax Systems provides comprehensive RF and Microwave Engineering
                services, bridging the gap between theoretical
                electromagnetics and robust, manufacturable hardware. From
                sub-GHz IoT modules to high-power plasma generators and mmWave
                sensor arrays, we deliver end-to-end design, simulation, and
                validation services that ensure optimal signal integrity and
                regulatory compliance.
              </p>
            </div>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white md:h-[420px]">
            <Image
              src="/hw-main/hw_rf_and_microwave.jpg"
              alt="RF and microwave engineering hardware"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-left text-3xl font-semibold text-slate-900">
          Our RF and Microwave Expertise
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          We provide end-to-end design services for modern wireless protocols,
          focusing on link budget optimization and coexistence in crowded
          spectrums.
        </p>

        <ul className="mt-8 space-y-4">
          <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              WiFi 6/6E and WiFi 7:
            </span>{" "}
            Implementation of High-Efficiency (HE) and Extremely High
            Throughput (EHT) standards. Expertise in 4 x 4 and 8 x 8 MU-MIMO
            antenna configurations and OFDMA sub-carrier mapping.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Cellular (4G LTE / 5G NR):
            </span>{" "}
            Design of RFFE involving Low Noise Amplifiers (LNA) and Power
            Amplifiers (PA). We manage complex carrier aggregation and
            beamforming architectures for sub-6 GHz and mmWave bands.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              LPWAN and Short Range:
            </span>{" "}
            Specialized low-power optimization for LoRaWAN, Sigfox, and BLE
            5.4. We focus on maximizing battery life through rigorous
            sleep-current profiling and impedance matching at the antenna feed
            point.
          </li>
        </ul>

        <div className="mt-16">
          <h3 className="text-left text-2xl font-semibold text-slate-900">
            High-Power RF and Industrial Applications
          </h3>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Beyond communications, we engineer robust RF solutions for
            industrial and plasma environments.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                RF Generators:
              </span>{" "}
              Design of high-power HF/LF generators (up to 1 kW) for plasma
              etching, thin-film deposition, and medical ablation.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Industrial Sensing:
              </span>{" "}
              Development of microwave-based sensors for non-destructive
              testing (NDT), including high-accuracy moisture measurement and
              material density analysis using phase-shift detection.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Power Electronics Integration:
              </span>{" "}
              Managing thermal dissipation and EMI shielding in high-density
              power RF modules.
            </li>
          </ul>
        </div>

      <div className="mt-16">
        <h3 className="text-left text-2xl font-semibold text-slate-900">
          Advanced Hardware and PCB Engineering
        </h3>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          The physics of the PCB substrate is foundational to RF performance.
          We move beyond standard FR-4 to manage the dielectric challenges of
          high-frequency designs.
        </p>

        <ul className="mt-8 space-y-4">
          <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Substrate Selection:
            </span>{" "}
            Expert utilization of low-loss materials including Rogers
            4350B/3003, Panasonic Megtron 6, and Tachyon 100G to minimize
            dissipation factors. Surface finish selection, precise surface
            roughness calculations, and skin effect calculations are applied to
            ensure minimal I2R losses.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Precision Layout:
            </span>{" "}
            Implementation of controlled impedance traces with strict adherence
            to phase matching and propagation delay requirements.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
            <span className="font-semibold text-slate-900">
              Signal Integrity (SI):
            </span>{" "}
            Mitigation of skin effect losses, copper roughness impact, and
            via-stub resonance at frequencies exceeding 24 GHz.
          </li>
        </ul>
      </div>

      <div className="mt-16">
        <h3 className="text-left text-2xl font-semibold text-slate-900">
            Technical Differentiators: Engineering-First Approach
        </h3>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            We solve the invisible problems that cause field failures and
            compliance rejections.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Noise Floor Reduction:
              </span>{" "}
              Strategic partitioning of analog, digital, power, and RF domains
              to prevent cross-talk and desensitization.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Impedance Matching:
              </span>{" "}
              Utilization of Smith Charts for complex conjugate matching,
              ensuring VSWR &lt; 1.5:1 across operational bandwidths.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                EMI/EMC Pre-compliance:
              </span>{" "}
              Early-stage simulation and internal testing to address Radiated
              Emissions (RE) and Conducted Emissions (CE). We specialize in
              ground loop elimination and common-mode choke selection.
            </li>
          </ul>
      </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-left text-3xl font-semibold text-slate-900">
          Core Service Offerings
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
          We provide a vertical suite of engineering services tailored to
          modern communication and industrial RF needs.
        </p>

        <div className="mt-8 space-y-4">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-left text-base font-semibold text-slate-900 md:text-lg">
              RF PCB Design and Layout
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 md:text-base">
              <li>
                Multi-layer stackup optimization for controlled impedance (50
                Ohm single-ended, 100 Ohm differential).
              </li>
              <li>
                Utilization of high-frequency substrates (Rogers, Taconic,
                Megtron 6).
              </li>
              <li>
                Microstrip, stripline, and coplanar waveguide (CPW) design.
              </li>
              <li>
                Strict isolation techniques to prevent crosstalk between RF and
                digital domains.
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-left text-base font-semibold text-slate-900 md:text-lg">
              RF Front-End (RFFE) Design
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 md:text-base">
              <li>
                <span className="font-semibold text-slate-900">
                  LNA and PA Design:
                </span>{" "}
                Development of Low Noise Amplifiers and Power Amplifiers for
                4G/5G infrastructure.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Filter Design:
                </span>{" "}
                Integration of SAW, BAW, and discrete LC filters for harmonic
                suppression.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Impedance Matching:
                </span>{" "}
                Smith chart-based matching network optimization for maximum
                power transfer.
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
            <h3 className="text-left text-base font-semibold text-slate-900 md:text-lg">
              Simulation and Modeling
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 md:text-base">
              <li>Full-wave 3D electromagnetic simulation.</li>
              <li>Link budget analysis and range estimation.</li>
              <li>Thermal modeling for high-power RF components.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-left text-3xl font-semibold text-slate-900">
            Proven Project Experience
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Our portfolio reflects a deep understanding of hardware constraints
            and high-performance requirements.
          </p>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Enterprise WiFi 6 Solutions:
              </span>{" "}
              Developed 4x4 MIMO systems operating concurrently at 2.4GHz,
              5.1GHz, and 5.8GHz using Qualcomm and MediaTek SoCs.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Industrial RF Generation:
              </span>{" "}
              Engineered 1KW HF and 500W LF RF generators specifically for
              plasma generation applications.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                BLE Reference Designs:
              </span>{" "}
              Created ultra-low power BLE &quot;Mousefull&quot; reference designs for
              global semiconductor leaders.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Telecommunications Infrastructure:
              </span>{" "}
              Designed high-gain LNAs and PAs for 4G Radio units.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Precision Microwave Sensing:
              </span>{" "}
              Implemented microwave-based moisture measurement systems for food
              grain analysis.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                IoT Ecosystems:
              </span>{" "}
              Deployed numerous LoRa, BLE, and WiFi-based industrial IoT
              devices with optimized PCB antennas.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-left text-3xl font-semibold text-slate-900">Case studies</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          More case studies after NDA
        </p>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-left text-3xl font-semibold text-slate-900">
            Why Choose Qmax Systems
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 md:text-base">
            Qmax Systems distinguishes itself through a rigorous focus on the
            physics of high-frequency signals.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Noise Reduction and Signal Conditioning:
              </span>{" "}
              Advanced techniques for lowering the noise floor in sensitive
              receiver chains.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Ground Loop Elimination:
              </span>{" "}
              Strategic partitioning of analog, digital, and RF grounds to
              prevent parasitic interference.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                EMI/EMC Mitigation:
              </span>{" "}
              Proactive design for Radiated Emissions (RE) and Conducted
              Emissions (CE) optimization.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                In-House Validation:
              </span>{" "}
              Utilization of advanced instrumentation, including the Rohde and
              Schwarz CMW500, high-bandwidth oscilloscopes, and spectrum
              analyzers.
            </li>
          </ul>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Domain Expertise:
              </span>{" "}
              Decades of experience in high-speed digital and RF co-existence.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Platform Versatility:
              </span>{" "}
              Deep experience with Qualcomm, MediaTek, Nordic, and TI wireless
              platforms.
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Manufacturing Readiness:
              </span>{" "}
              Our designs are optimized for DFM (Design for Manufacturing) and
              DFT (Design for Test).
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700 shadow-[0_4px_20px_rgba(15,23,42,0.05)] md:text-base">
              <span className="font-semibold text-slate-900">
                Reduced Time-to-Market:
              </span>{" "}
              Proven reference designs and modular blocks accelerate the
              development cycle RF, HP PCB vendor relationships, and silicon
              vendor relationships.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] md:p-8">
          <h2 className="text-left text-3xl font-semibold text-slate-900">
            Complimentary Consultation
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
            Discuss your RF architecture challenges with our senior engineering
            team. Whether you are migrating to WiFi 7 or developing a custom
            mmWave sensor, we provide the technical depth required to succeed.{" "}
            <Link
              href="/contact"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-800"
            >
              Contact our RF Engineering Team
            </Link>
          </p>
        </div>
      </section>

      <FAQSection faqs={rfFaqGroups.flatMap((group) => group.items)} />
      <OtherCapabilitiesScrollSection capabilities={otherCapabilities} />
      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={hardwareCaseStudies}
      />
    </main>
  );
}



