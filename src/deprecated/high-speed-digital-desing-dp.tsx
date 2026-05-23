import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
const projectExperience = [
  {
    title: "O-RAN Distributed Units (DU)",
    description:
      "Developed using Ampere Altra processors. These designs involve massive pin-count BGA escape routing, complex power delivery networks (PDN) to support high TDP, and synchronized timing for 5G radio units.",
  },
  {
    title: "AI GPU Chassis PCIe Gen6 Switch Boards",
    description:
      "Engineering of ultra-high-bandwidth fabrics requiring precision routing for 64 GT/s signaling, stringent insertion loss budgets, and advanced material selection to mitigate fiber weave effects.",
  },
  {
    title: "Server Motherboards (Intel Sapphire Rapids / AMD EPYC)",
    description:
      "Comprehensive layout for multi-socket architectures, including DDR5-6400+ 8-channel memory routing and high-density interconnect (HDI) transitions.",
  },
  {
    title: "100G x 4 Network Interface Cards (NIC)",
    description:
      "Designed for blade server environments utilizing QSFP-DD form factors and 25G/56G NRZ/PAM4 SerDes lanes.",
  },
  {
    title: "FPGA-Based Image Processing",
    description:
      "High-speed LVDS and MIPI CSI-2 interfacing for real-time 8K video capture, focusing on precise phase matching and skew control.",
  },
  {
    title: "NXP i.MX8 Single Board Computers (SBC)",
    description:
      "Compact, multi-layer designs balancing thermal management with high-speed LPDDR4x routing in space-constrained industrial envelopes.",
  },
  {
    title: "Core Switches & Routers",
    description:
      "High-layer count backplanes (30+ layers) with complex E-T-P (Equalization, Termination, and Propagation) parameters.",
  },
];

const technicalCapabilities = [
  {
    title: "DDR5 & LPDDR5",
    description:
      "Implementation of Decision Feedback Equalization (DFE), CA parity, and CRC. We manage ultra-tight timing margins and address the complexities of on-DIMM PMICs.",
  },
  {
    title: "PCIe Gen5 & Gen6",
    description:
      "Expertise in PAM4 signaling, ensuring compliance with strict jitter and noise floor requirements.",
  },
  {
    title: "112G SerDes",
    description:
      "Advanced routing for 112 Gbps per lane, utilizing state-of-the-art simulation to minimize reflections and crosstalk.",
  },
];

const advancedHdiCapabilities = [
  {
    title: "30-Layer HDI PCB Design",
    description:
      "Mastery of Type I, II, and III HDI structures, including stacked and staggered microvias, via-in-pad, and ELIC (Every Layer Interconnect).",
  },
  {
    title: "USB4 & Thunderbolt 4",
    description:
      "High-speed differential pair routing with integrated ESD protection and EMI containment.",
  },
];

const stackupEngineering = [
  {
    title: "Material Expertise",
    description:
      "Selection of ultra-low-loss laminates such as Megtron 6/7/8, Tachyon 100G, and Rogers hybrids.",
  },
  {
    title: "Impedance Control",
    description:
      "Precision modeling of single-ended (50 Ohm) and differential (85 Ohm/90 Ohm/100 Ohm) traces.",
  },
  {
    title: "Glass Weave Mitigation",
    description:
      'Use of "spread glass" fabrics and zig-zag routing techniques to eliminate skew.',
  },
];

const simulationMethodology = [
  {
    title: "Pre-Layout Analysis",
    description: "Determining stackup, material, and topology constraints.",
  },
  {
    title: "Post-Layout Verification",
    description:
      "Full-wave extraction of routing to verify Eye Diagrams, BER (Bit Error Rate), and TDR (Time Domain Reflectometry).",
  },
  {
    title: "Power Integrity (PI)",
    description:
      "Analyzing DC IR Drop, AC impedance profiles, and decoupling capacitor optimization to support high-transient current demands.",
  },
  {
    title: "EMI/EMC",
    description:
      "Identifying potential radiation hotspots and resonance issues before the prototype stage.",
  },
];

const schematicReviewPoints = [
  "Pin-mapping optimization for routing efficiency.",
  "BOM risk mitigation and component obsolescence checks.",
  "Power tree verification and decoupling strategies.",
  "Compliance readiness for CE, FCC, and UL certification.",
];

const qmaxAdvantages = [
  {
    feature: "Philosophy",
    advantage: "Architecture-first; Simulation-driven constraints.",
  },
  {
    feature: "IP Ownership",
    advantage: "100% Customer Ownership of all design files.",
  },
  {
    feature: "Manufacturing",
    advantage:
      "Direct coordination with Tier-1 fabrication and assembly houses.",
  },
  {
    feature: "Compliance",
    advantage: "Design for EMI/EMC (CISPR 32) and Safety (UL 62368-1).",
  },
  {
    feature: "Reliability",
    advantage: "Production-ready DFM/DFT (Design for Manufacturing/Test).",
  },
];

const industriesServed = [
  {
    title: "Data Centers",
    description: "AI servers, GPU accelerators, and high-speed networking.",
  },
  {
    title: "Telecommunications",
    description: "5G O-RAN, Edge computing, and SatCom.",
  },
  {
    title: "Aerospace & Defense",
    description: "High-reliability FPGA processing and ruggedized SBCs.",
  },
  {
    title: "Automotive",
    description: "ADAS sensors and infotainment backbones.",
  },
];

const faqs = [
  {
    question: "What is your approach to DDR5 PCB layout?",
    answer:
      "We use simulation to define length matching, T-topology or fly-by constraints, and verify signal eye opening against JEDEC standards.",
  },
  {
    question: "Do you support PCIe Gen6 PCB layout?",
    answer:
      "Yes, we are experts in PCIe Gen6 layout, specifically managing the transition to PAM4 signaling and tight loss budgets.",
  },
  {
    question: "Can you handle 30-layer HDI PCB designs?",
    answer:
      "Absolutely. We regularly design 30+ layer boards with complex microvia structures and ELIC.",
  },
  {
    question: "Do you provide SI/PI simulation services separately?",
    answer:
      "Yes, we offer standalone SI/PI analysis or integrated simulation within the layout process.",
  },
  {
    question: "How do you mitigate crosstalk in high-density designs?",
    answer:
      "Through rigorous 3D EM modeling and implementing specific 3W/5W spacing rules and guard traces.",
  },
  {
    question: "Which EDA tools do you use?",
    answer:
      "We primarily utilize Cadence Allegro/Orcad, Altium Designer, and Mentor Xpedition.",
  },
  {
    question: 'What is a "Simulation-driven" constraint?',
    answer:
      "It means we run SI simulations to determine the exact routing rules (width, gap, length) before the layout starts.",
  },
  {
    question: "Do you provide DFM reports?",
    answer:
      "Yes, every design undergoes a comprehensive DFM/DFT check to ensure high manufacturing yields.",
  },
  {
    question: "Can you help with component obsolescence?",
    answer:
      "Yes, during schematic review, we identify at-risk parts and suggest pin-compatible or functional alternatives.",
  },
  {
    question: "What is your experience with 112G SerDes?",
    answer:
      "We have designed interfaces for 112G PAM4, focusing on via stub removal (back-drilling) and pad stack optimization.",
  },
  {
    question: "Do you support 100G Ethernet NIC design?",
    answer:
      "Yes, we have experience with multi-port 100G NICs and QSFP-DD/OSFP form factors.",
  },
  {
    question: "What materials do you recommend for high-speed digital PCBs?",
    answer:
      "Typically Megtron 6/7, Isola I-Tera, or Rogers 4350B/4003C depending on the frequency and budget.",
  },
  {
    question: "How do you handle high-current PDNs?",
    answer:
      "We use PI simulation to map DC IR drop and ensure copper density is sufficient for thermal and electrical requirements.",
  },
  {
    question: "Is Qmax an Indian PCB design company?",
    answer:
      "Yes, Qmax Systems is a leading high-speed digital PCB design services provider in India, serving global clients.",
  },
  {
    question: "Do you design server motherboards?",
    answer:
      "Yes, we design multi-processor server motherboards for Intel, AMD, and ARM architectures.",
  },
  {
    question: "What is your first-time-right ratio?",
    answer:
      "Over 95% of our high-speed designs move to production without requiring a second spin for electrical issues.",
  },
  {
    question: "Can you design for O-RAN hardware?",
    answer:
      "Yes, we have specific experience with O-RAN Radio Units (RU) and Distributed Units (DU).",
  },
  {
    question: "Do you manage the fabrication process?",
    answer:
      "We coordinate directly with your preferred fab house or recommend one from our audited partner list.",
  },
  {
    question: "What is back-drilling, and when is it used?",
    answer:
      "It is the removal of unused via stubs to prevent signal reflections, critical for signals above 10Gbps.",
  },
  {
    question: "Do you support USB4 design?",
    answer:
      "Yes, including routing for 40Gbps throughput and Type-C PD integration.",
  },
  {
    question: "How do you minimize EMI?",
    answer:
      "Through proper ground plane referencing, shielding, and minimizing common-mode noise via balanced routing.",
  },
  {
    question: "What is ELIC?",
    answer:
      "Every Layer Interconnect-an HDI technology where any layer can be connected to any other layer using stacked copper-filled microvias.",
  },
  {
    question: "Do you provide the source files?",
    answer:
      "Yes, all design IP, including source schematics, layout files, and simulation models, belongs to the customer.",
  },
  {
    question: "How do you handle differential pair skew?",
    answer:
      "We implement serpentine trace compensation and phase-matching at the point of mismatch.",
  },
  {
    question: "Can you design AI GPU chassis PCBs?",
    answer:
      "Yes, we specialize in the high-speed backplanes and switch boards required for AI clusters.",
  },
  {
    question: "What is a PDN impedance profile?",
    answer:
      "It is a plot of the power network's impedance vs. frequency, ensuring it stays below the target impedance to prevent noise.",
  },
  {
    question: "Do you support NXP i.MX8 designs?",
    answer:
      "Yes, we have extensive experience with the i.MX8 family and its LPDDR4 memory requirements.",
  },
  {
    question: "What are fiber weave effects?",
    answer:
      "Variations in the dielectric constant caused by the resin/glass pattern. We mitigate this with angled routing or specific glass styles.",
  },
  {
    question: "Do you offer thermal simulation?",
    answer:
      "Yes, we can perform thermal analysis to identify hotspots and optimize heatsink/fan placement.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can book a 1-hour complimentary engineering consultation via our website.",
  },
];

export const metadata: Metadata = {
  title: "High-Speed Digital PCB Design | Qmax",
  description:
    "High-speed digital PCB design services for DDR4/5, LPDDR, PCIe Gen 5, SerDes up to 112Gbps, and USB4 with SI/PI-driven execution.",
};

export default function HighSpeedDigitalPCBDesignPageDeprecated() {
  return (
    <main className="bg-zinc-100 text-zinc-900">
      <section className="relative overflow-hidden pt-14 pb-12 border-b border-zinc-200 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(24,24,27,0.08),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(82,82,91,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Full-width Image Container */}
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-zinc-200 group">
            <Image
              src="/pcb-design/images/image1.jpg"
              alt="High-Speed Digital PCB Design - Qmax Systems"
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
                Advanced High-Speed
                <br className="hidden md:block" />
                Digital PCB Engineering.
              </h1>
            </div>
          </div>
          <div className="mt-10 max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              In an era defined by 112G SerDes, DDR5 memory architectures, and
              PCIe Gen6 protocols, PCB design is no longer just about
              connectivity - it is about physics. Qmax Systems provides
              specialized high-speed digital PCB design services that bridge the
              gap between complex architectural requirements and reliable,
              production-ready hardware.
            </p>
            <p>
              Our engineering-first approach prioritizes Signal Integrity (SI)
              and Power Integrity (PI) simulation long before a single trace is
              routed. By implementing a simulation-driven constraint
              methodology, we ensure your high-complexity boards - from AI GPU
              chassis to O-RAN Distributed Units - achieve first-time-right
              success.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl text-zinc-900">
          Applications &amp; Real-World Project Experience
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
          Qmax Systems delivers field-proven expertise in developing
          mission-critical hardware. Our portfolio includes:
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projectExperience.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]"
            >
              <h3 className="text-base text-zinc-900 md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl text-zinc-900">
            Technical Capabilities: Pushing the Limits of Physics
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            Our design team operates at the leading edge of digital signaling
            standards:
          </p>

          <h3 className="mt-8 text-xl text-zinc-900 md:text-2xl">
            Memory &amp; High-Speed Interfaces
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technicalCapabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]"
              >
                <h4 className="text-base text-zinc-900 md:text-lg">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl text-zinc-900">
          Advanced HDI &amp; Fabrication Support
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {advancedHdiCapabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]"
            >
              <h3 className="text-base text-zinc-900 md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl text-zinc-900">
            Stackup Engineering &amp; Material Selection
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            A robust high-speed design begins with the substrate. We perform
            rigorous stackup optimization to balance electrical performance with
            fabrication yield.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stackupEngineering.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]"
              >
                <h3 className="text-base text-zinc-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/PCB-design-resources#pcb-design-materials-finishes"
              className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
            >
              View Stackup Options and Material Selection Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl text-zinc-900">
          SI/PI/EMI Simulation Methodology
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
          We do not &quot;guess and check.&quot; Our workflow is
          simulation-driven:
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {simulationMethodology.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]"
            >
              <h3 className="text-base text-zinc-900 md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl text-zinc-900">
            Complimentary Schematic Review
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            High-speed PCB success starts at the schematic level. Every Qmax PCB
            layout engagement includes a Complimentary Schematic Review. Our
            senior engineers analyze your design for:
          </p>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {schematicReviewPoints.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-zinc-200 bg-white p-5 text-sm leading-7 text-zinc-700 shadow-[0_4px_20px_rgba(24,24,27,0.05)] md:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl text-zinc-900">Why Choose Qmax Systems?</h2>

        <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-[0_4px_20px_rgba(24,24,27,0.05)]">
          <table className="min-w-full">
            <thead>
              <tr className="bg-zinc-100">
                <th className="w-1/3 border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                  Feature
                </th>
                <th className="border-b border-zinc-200 px-4 py-3 text-left text-sm text-zinc-900">
                  Qmax Engineering Advantage
                </th>
              </tr>
            </thead>
            <tbody>
              {qmaxAdvantages.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-900">
                    {row.feature}
                  </td>
                  <td className="border-b border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                    {row.advantage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl text-zinc-900">Industries Served</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {industriesServed.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgba(24,24,27,0.05)]"
            >
              <h3 className="text-base text-zinc-900 md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)]">
            <h2 className="text-2xl text-zinc-900 md:text-3xl">
              Accelerate Your Hardware Development
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
              Don&apos;t let signal integrity issues delay your product launch.
              Partner with an engineering team that understands the complexities
              of modern high-speed digital design.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-sm text-white transition hover:bg-zinc-800"
              >
                Contact Our Engineering Team Today
              </Link>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-[0_4px_24px_rgba(24,24,27,0.06)]">
            <h2 className="text-2xl text-zinc-900 md:text-3xl">
              1-Hour Complimentary Engineering Consultation
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-700 md:text-base">
              Struggling with a PCIe Gen6 loss budget? Unsure about your DDR5
              stackup? Speak directly with a senior Qmax hardware architect. No
              marketing, just engineering.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm text-zinc-800 transition hover:bg-zinc-100"
              >
                Schedule Your Free Technical Consultation
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FAQSection
        faqs={faqs.map((item) => ({ q: item.question, a: item.answer }))}
      />

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
        hideTopBorder
      />
    </main>
  );
}
