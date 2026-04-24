import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { OtherCapabilitiesScrollSection } from "@/components/other-capabilities-scroll-section";
import { pcbSiPiAnalysisOtherCapabilities as otherCapabilities } from "@/data/other-capabilities";
import { pcbCaseStudies } from "@/data/service-case-studies";

export const metadata: Metadata = {
  title: "SI & PI Analysis Services | Qmax",
  description:
    "Signal Integrity and Power Integrity analysis services for high-speed digital and RF PCB designs, ensuring robust product performance and reliability.",
};


export default function SIPIAnalysisServicesPage() {
  return (
    <main className="bg-zinc-100 text-justify text-zinc-900">
      <section className="relative overflow-hidden pt-14 pb-12 border-b border-zinc-200 lg:pt-20 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(24,24,27,0.08),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(82,82,91,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Full-width Image Container */}
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-zinc-200 group">
            <Image
              src="/pcb-design/SI and PI Analysis Services/image1.png"
              alt="Signal and Power Integrity Analysis - Qmax Systems"
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
                SI &amp; PI Analysis<br className="hidden md:block" />
                Services.
              </h1>
            </div>
          </div>
          <div className="mt-10 max-w-4xl space-y-6 text-sm leading-8 text-zinc-700 md:text-base lg:text-lg">
            <p className="text-sm font-medium tracking-wide text-zinc-800 md:text-base lg:text-lg">
              Predictive simulation and optimization for high-speed digital and high-frequency communication protocols.
            </p>
            <p>
              At Qmax Systems, Signal Integrity and Power Integrity analysis are embedded into every phase of the PCB design workflow — from initial interface selection and stackup definition, through constraint-driven layout, to post-layout verification and fabrication release. Our first-time-right methodology means that failure mechanisms are identified and engineered out before a board is sent to fabrication, not discovered during prototype bring-up.
            </p>
            <p>
              Our SI/PI engineering team has more than three decades of hands-on experience with the full spectrum of ultra-high-speed digital signaling: NRZ interfaces from 10Gbps to 56Gbps, PAM4 channels at 56Gbps through 224Gbps per lane, multi-lane switch fabrics, complex DDR memory subsystems, and high-current power delivery networks for AI compute, data centre networking, and server platforms.
            </p>
            <p>
              SI/PI analysis is available both as a standalone engineering service and as an integrated component of our PCB Design and Hardware Development programs. All design IP, simulation data, and deliverables remain the sole intellectual property of the customer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8 border-b border-zinc-200">
        <div className="mx-auto max-w-4xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            1. Introduction to SI/PI Analysis
          </h2>
          <div className="mt-6 flex flex-col gap-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            <p>
              Modern PCB design operating above 1Gbps per lane is an applied electromagnetic engineering discipline. As signal edge rates shrink below 50 picoseconds and PAM4 modulated lanes carry 112Gbps or 224Gbps of data, the physical PCB becomes a transmission-line network where every via transition, anti-pad geometry, reference plane discontinuity, laminate dielectric property, and decoupling capacitor placement directly determines system functional margin. A board that passes visual inspection and DRC can still fail first-pass bring-up because of an under-specified stackup, an unmodelled via stub resonance, or an inadequate PDN that collapses under peak transient load.
            </p>
            <p>
              SI and PI are tightly coupled disciplines that Qmax treats as a single engineering system, not two separate checks. PDN switching noise injected into reference planes raises the noise floor at high-speed receivers, directly degrading eye diagram margin. Ground bounce from simultaneous switching outputs (SSO) across a high-density ASIC I/O bank adds jitter to differential SerDes lanes sharing the same power domain. A well-designed PDN with sub-milliohm AC impedance from DC through the GHz regime is as critical to achieving a clean PAM4 eye diagram as controlling the channel insertion loss (SDD21) and near-end crosstalk (NEXT).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 md:py-24 lg:px-8 border-b border-zinc-200">
        <div className="mx-auto max-w-4xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            1.1 Signal Integrity — Engineering Scope
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            Signal Integrity analysis ensures that digital signals arrive at their destination with sufficient voltage margin, timing margin, and noise immunity to meet the BER (Bit Error Rate) specification of the interface. At Qmax Systems, SI analysis covers the full chain from silicon pad to silicon pad:
          </p>
          <ul className="mt-10 space-y-8 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Transmission-line impedance control and controlled-impedance stackup:</span> Every high-speed net is modelled as a distributed transmission line. Characteristic impedance (Z0) for single-ended and differential pairs is calculated using 2D/2.5D field solvers with real dielectric constant (Dk) and dissipation factor (Df) values at the operating frequency — not generic 1MHz datasheet figures. For PAM4 channels on Megtron 6 or Tachyon 100G, this distinction in Dk/Df at 10–16GHz directly determines whether the channel insertion loss (SDD21) meets the compliance mask.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Via stub resonance analysis and back-drill specification:</span> Unterminated via stubs below the last active signal connection act as quarter-wave resonators. Stub resonant frequency is governed by stub length and local dielectric constant. At PCIe Gen6 (64GT/s PAM4) or 112G PAM4 Ethernet, stubs longer than 8–12 mils on standard server board thicknesses create insertion loss notches within the signalling bandwidth, failing COM (Channel Operating Margin) requirements. Qmax performs via stub analysis for every design above 16GT/s and specifies controlled-depth back-drilling accordingly.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">End-to-end IBIS-AMI channel simulation:</span> For NRZ interfaces at PCIe Gen5 speeds and all PAM4 interfaces, eye diagram simulation requires IBIS-AMI models that capture transmitter FFE (Feed-Forward Equalization), receiver CTLE (Continuous Time Linear Equalization), and DFE (Decision Feedback Equalization) behaviour accurately. We obtain these models directly from silicon vendors and run statistical eye simulations (QuickEye / StatEye) to extract eye height, eye width, and BER bathtub curves referenced against the specification compliance mask.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">COM (Channel Operating Margin) analysis:</span> For PCIe Gen5/6 and 112G/224G PAM4 Ethernet, channel compliance is assessed using IEEE COM methodology, which accounts for channel IL, integrated crosstalk noise (ICN from NEXT and FEXT), equalization, jitter, and noise in a single figure of merit. COM &ge; 3dB is the pass threshold. ICN — the statistical aggregate of all aggressor lane crosstalk contributions — is a primary constraint that drives inter-pair spacing, reference plane continuity, and via placement discipline.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Crosstalk extraction and mixed-mode S-parameter analysis:</span> Full mixed-mode S-parameter sets (SDD21, SDD11, SCD21, SDDS41) are extracted from 3D EM models for all critical differential channels. Mode conversion (SCD21) — differential-to-common-mode energy conversion caused by asymmetric routing or P/N via geometry — is a key EMI mechanism and a jitter contributor that is explicitly tracked and minimised.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">TDR simulation for impedance discontinuity identification:</span> Time-domain reflectometry simulation generates an impedance-versus-time profile of a signal path, revealing BGA fanout via mismatches, anti-pad geometry effects, connector footprint discontinuities, and reference plane transitions. TDR simulation is used iteratively to refine via design rules before they are locked into the PCB constraint file.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            1.2 Power Integrity — Engineering Scope
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            Power Integrity analysis ensures the PDN (Power Distribution Network) delivers stable, low-impedance supply voltage to every device across the full operating frequency range — from DC through the GHz regime. An inadequately designed PDN causes supply voltage droop under transient load, generates switching noise that couples into SI channels through shared reference planes, and produces harmonic emissions that cause EMI compliance failures.
          </p>
          <ul className="mt-10 space-y-8 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">DC IR drop analysis:</span> Static DC current distribution is simulated across copper pours, plane splits, via arrays, and connector contacts to map voltage drop across the board. For multi-phase CPU VCC rails exceeding 200A, GPU power domains at 300–700W, or high-current bus converters in power electronics systems, IR drop analysis identifies hotspots, optimises copper pour geometry and weight, and ensures node voltages remain within the silicon vendor&apos;s specified tolerance across all load conditions.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">PDN AC impedance profiling and anti-resonance suppression:</span> The PDN presents a frequency-dependent impedance to each load. Resonant peaks between bulk electrolytic capacitors, ceramic decoupling capacitors, and PCB plane inductance create supply voltage spikes when the load switches. We simulate PDN impedance from DC to 1GHz+, targeting a flat profile below Ztarget = ΔV/ΔI across the full frequency range. Anti-resonance peaks are suppressed through calculated intermediate-value capacitor interleaving, ESL-optimised placement, and — where required — resistive damping networks.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Decoupling capacitor optimisation:</span> Capacitor placement is a quantitative calculation, not a rule of thumb. We calculate the effective mounted inductance (ESL) of each capacitor location based on via count, land geometry, and distance to the device power pads, then select C0G/NP0 or X7R capacitor values to achieve broadband PDN coverage. For CPU and GPU packages, on-die capacitance (Cdie) and package inductance (Lpkg) are incorporated into the PDN model using silicon-vendor-supplied package parasitic data.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Power plane resonance and EBG analysis:</span> Power-ground plane pairs form a parallel-plate resonant cavity. Cavity resonances at frequencies determined by board dimensions and Dk create PDN impedance peaks that peripheral decoupling capacitors cannot suppress. Where resonances fall within the PDN bandwidth of concern, we apply EBG (Electromagnetic Band Gap) structures, resistive plane edge termination, or plane segmentation.
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">High-current trace and via current capacity:</span> Trace current density is analysed against IPC-2152 for all power-carrying conductors, accounting for copper weight, ambient temperature, and thermal management. Via arrays in high-current paths are calculated for aggregate current capacity including temperature derating. This is particularly critical for power electronics boards, heavy copper designs (4oz+), and AI accelerator power delivery networks.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            1.3 Why Choose Qmax Systems
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 text-left text-sm leading-7 text-zinc-700 md:text-base">
                <thead className="bg-zinc-100/80">
                  <tr>
                    <th scope="col" className="w-1/3 px-6 py-4 font-semibold text-zinc-900">
                      Capability
                    </th>
                    <th scope="col" className="px-6 py-4 font-semibold text-zinc-900">
                      Qmax Advantage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top">
                      First-Time-Right Methodology
                    </td>
                    <td className="px-6 py-5 align-top">
                      SI/PI constraints are defined and verified before layout begins — not applied as post-routing corrections. This eliminates the most common cause of re-spin: a routing approach that violates SI targets and cannot be corrected without reworking large portions of the board.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top">
                      Silicon Vendor Relationships
                    </td>
                    <td className="px-6 py-5 align-top">
                      Over 30 years of direct engineering relationships with Broadcom, Intel, AMD, Qualcomm, NXP, Ampere, and MediaTek. We obtain silicon-validated IBIS-AMI and SPICE models and follow each vendor&apos;s platform validation checklists — the same methodology the silicon vendor&apos;s own hardware validation team uses.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top">
                      PCB Fabricator Relationships
                    </td>
                    <td className="px-6 py-5 align-top">
                      Direct technical collaboration with tier-1 PCB fabricators to define stackup constructions, obtain fabricator-measured Dk/Df data at frequency, confirm back-drill depth tolerance, and validate DFM feasibility before design is finalised. We have maintained these fabricator relationships for over 30 years across North America, Europe, and Asia.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top">
                      Multi-Physics Integration
                    </td>
                    <td className="px-6 py-5 align-top">
                      SI and PI are never analysed in isolation. PDN noise coupling into SI channels, ground bounce degrading eye margins, and thermal effects on Dk shift are all accounted for in the analysis workflow.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top">
                      IP Ownership
                    </td>
                    <td className="px-6 py-5 align-top">
                      All simulation files, extracted models, constraint files, and reports are customer property, delivered in industry-standard formats (Touchstone .sNp, SPICE, PDF, native tool files).
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top">
                      Compliance Readiness
                    </td>
                    <td className="px-6 py-5 align-top">
                      SI/PI work is conducted with EMI/EMC pre-compliance in mind from day one. Return path integrity, decoupling strategies, and mode conversion suppression are aligned with CE, FCC, CISPR, and automotive CISPR 25 requirements.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-5xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            1.4 Complimentary SI/PI Review — Included with PCB Layout Services
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            Every PCB layout engagement at Qmax Systems includes a complimentary SI/PI review conducted before routing begins. This is a structured engineering review that covers stackup feasibility against target interface data rates, PCB material selection recommendation, critical net identification, preliminary PDN target impedance definition, via back-drill requirements, decoupling pre-placement strategy, and component placement guidelines for SI-critical devices. This early-stage review significantly reduces the probability of post-layout SI/PI failures that require stackup changes or critical net re-routing.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 text-sm font-semibold text-zinc-900 md:flex-row md:items-center md:text-base">
            <Link href="/pcb-design" className="underline decoration-zinc-300 decoration-2 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600">
              PCB Design Services Overview
            </Link>
            <span className="hidden text-zinc-300 md:inline-block">|</span>
            <Link href="/pcb-design/high-speed-digital-pcb-design" className="underline decoration-zinc-300 decoration-2 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600">
              Digital PCB Design
            </Link>
            <span className="hidden text-zinc-300 md:inline-block">|</span>
            <Link href="/pcb-design/rf-and-microwave-pcb-design" className="underline decoration-zinc-300 decoration-2 underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600">
              RF PCB Design
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-[80rem] text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            2. High-Speed Interface Coverage
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-8 text-zinc-700 md:text-lg text-justify">
            Qmax Systems provides SI analysis across the current and emerging generations of high-speed digital interconnect standards. The table below lists the primary interfaces. Where multiple generations exist within a family, the most demanding generation is listed — our capability at that level implies full coverage of all predecessor generations in the same family.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 text-left text-sm leading-7 text-zinc-700 md:text-base">
                <thead className="bg-zinc-100/80">
                  <tr>
                    <th scope="col" className="w-[30%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                      Interface / Standard
                    </th>
                    <th scope="col" className="w-[30%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                      Data Rate & Modulation
                    </th>
                    <th scope="col" className="w-[40%] px-6 py-4 font-semibold text-zinc-900">
                      Key SI Engineering Scope
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      PCIe Gen6 / CXL 3.x
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      64 GT/s per lane, PAM4
                    </td>
                    <td className="px-6 py-5 align-top">
                      COM analysis per PCI-SIG CEM Spec, PAM4 three-eye mask compliance, ICN budget across x16 lane bundles, back-drill optimisation for 64GT/s, DFE tap co-optimisation, CXL 3.x memory fabric channel analysis
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      112G PAM4 Ethernet (IEEE 802.3ck / 400G / 800G)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      112 Gbps per lane, PAM4 XSR / VSR / MR reach
                    </td>
                    <td className="px-6 py-5 align-top">
                      OIF CEI-112G channel compliance, FEC gain budget, SNDR optimisation, 8-tap FFE + 24-tap DFE modelling, QSFP-DD / OSFP connector S-parameter extraction, host board via transition 3D EM analysis
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      224G PAM4 Ethernet (IEEE 802.3dj — emerging)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      224 Gbps per lane, PAM4
                    </td>
                    <td className="px-6 py-5 align-top">
                      Ultra-low IL budget channel modelling, package co-design at board interface, advanced CDR jitter tolerance analysis, co-design with silicon vendor pre-production models
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      DDR5 / LPDDR5X (JEDEC JESD79-5 / JESD209-5)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Up to 8533 MT/s, NRZ parallel
                    </td>
                    <td className="px-6 py-5 align-top">
                      Per-pin DQ eye simulation, DFE-assisted receiver margin, VDDQ PDN AC impedance, RDIMM/LRDIMM buffer insertion, SSO noise analysis for 64-bit bus, thin HDI via transition for LPDDR5X
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      MIPI C-PHY v2.1 / D-PHY v2.5 (CSI-2, DSI)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Up to 4.5 Gsps/Gbps per lane/trio
                    </td>
                    <td className="px-6 py-5 align-top">
                      100Ω differential (D-PHY) / trio impedance (C-PHY), intra-pair skew, ESD TVS capacitance loading on eye margin, fine-pitch BGA via model extraction, automotive ADAS platform compliance
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      USB4 Gen 3x2 / Thunderbolt 4
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      40 Gbps, PAM4
                    </td>
                    <td className="px-6 py-5 align-top">
                      Dual-role port channel SI, cable assembly channel extension, ESD / EMC filter loading on eye, compliance with USB IF and Thunderbolt specifications
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      Backplane Ethernet (100GBASE-KR4, 400GBASE-KR8)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      25G / 56G NRZ & PAM4 per lane
                    </td>
                    <td className="px-6 py-5 align-top">
                      IEEE 802.3 channel compliance mask, full backplane IL and NEXT/FEXT extraction, connector and press-fit via modelling
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      NVLink / NVSwitch (NVIDIA GPU interconnect)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      High-speed proprietary SerDes
                    </td>
                    <td className="px-6 py-5 align-top">
                      Inter-GPU differential channel SI over long board traces (up to 600mm), connector and cable channel extension modelling, co-design with NVIDIA platform guidelines
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-5xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            2.1 NRZ vs. PAM4 — Engineering Implications
          </h2>
          <div className="mt-6 flex flex-col gap-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            <p>
              The industry transition from NRZ (binary, 2-level) to PAM4 (4-level Pulse Amplitude Modulation) above 56Gbps per lane has fundamentally changed the SI engineering challenge. PAM4 encodes 2 bits per symbol, achieving twice the data rate at the same baud rate — but each of the three superimposed eyes is only one-third of the full NRZ swing, imposing a 9.5dB SNR penalty. This means PAM4 channels must operate with significantly tighter insertion loss (SDD21), lower integrated crosstalk noise (ICN from NEXT and FEXT), and more sophisticated receiver equalization — CTLE, DFE with 4 to 24 taps, and in some implementations MLSE (Maximum Likelihood Sequence Estimation) — to meet the BER targets required before FEC (Reed-Solomon Forward Error Correction) gain is applied.
            </p>
            <p>
              COM (Channel Operating Margin) analysis per IEEE 802.3 and PCI-SIG is the standard assessment methodology for PAM4 channel compliance. COM incorporates channel IL, ICN, equalization settings, transmitter noise, and receiver sensitivity into a single figure of merit — a COM value below 3dB constitutes a channel failure. Qmax runs COM analysis for all PCIe Gen5/6 and 112G/224G PAM4 designs as a standard deliverable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-5xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            3. PCB Material Selection for SI/PI Performance
          </h2>
          <div className="mt-6 flex flex-col gap-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            <p>
              PCB laminate material selection is one of the most consequential decisions in high-speed board design. The dielectric constant (Dk) and dissipation factor (Df) of the laminate directly determine signal propagation velocity, controlled impedance, and per-unit-length channel insertion loss at the operating frequency. Qmax engineers work directly with PCB fabricators to obtain measured material data at frequency — not just 1MHz datasheet values — and incorporate this into channel simulation before the stackup is finalised.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-[80rem] text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            3.1 Laminate Properties and Their SI Significance
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 text-left text-sm leading-7 text-zinc-700 md:text-base">
                <thead className="bg-zinc-100/80">
                  <tr>
                    <th scope="col" className="w-[25%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                      Material Property
                    </th>
                    <th scope="col" className="w-[45%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                      SI Significance
                    </th>
                    <th scope="col" className="w-[30%] px-6 py-4 font-semibold text-zinc-900">
                      Values at 10GHz by Material Class
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      Dissipation Factor (Df / tanδ)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50">
                      Primary source of dielectric insertion loss. Higher Df = higher loss per unit length. The most critical parameter for channels above 16GT/s.
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ul className="space-y-1">
                        <li><span className="font-medium text-zinc-800">Standard FR-4:</span> 0.018–0.022</li>
                        <li><span className="font-medium text-zinc-800">Isola I-Tera MT40:</span> 0.0080</li>
                        <li><span className="font-medium text-zinc-800">Megtron 6:</span> 0.0040</li>
                        <li><span className="font-medium text-zinc-800">Tachyon 100G / Megtron 7:</span> 0.0024–0.0028</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      Dielectric Constant (Dk / εr)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50">
                      Determines signal propagation velocity and controlled impedance. Dk is frequency-dependent (dispersion) — must be characterised at operating frequency, not DC.
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ul className="space-y-1">
                        <li><span className="font-medium text-zinc-800">FR-4:</span> 4.0–4.5</li>
                        <li><span className="font-medium text-zinc-800">Megtron 6:</span> 3.60</li>
                        <li><span className="font-medium text-zinc-800">Tachyon 100G:</span> 3.02</li>
                        <li><span className="font-medium text-zinc-800">Rogers 4350B:</span> 3.48 (stable vs. freq.)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      Copper Foil Roughness (Ra)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50">
                      Skin effect at high frequency confines current to the conductor surface; rougher copper extends the effective path length, increasing conductor loss. Standard (STD ED) foil imposes 30–50% excess conductor loss vs. HVLP at 10GHz.
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ul className="space-y-1">
                        <li><span className="font-medium text-zinc-800">STD ED:</span> Ra 2–4μm</li>
                        <li><span className="font-medium text-zinc-800">LP (Low Profile):</span> Ra 1–2μm</li>
                        <li><span className="font-medium text-zinc-800">VLP:</span> Ra 0.4–0.8μm</li>
                        <li><span className="font-medium text-zinc-800">HVLP:</span> Ra &lt; 0.4μm</li>
                        <li className="mt-2 text-zinc-500 italic">HVLP mandatory for 56G+ channels.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      Glass Weave Style &amp; Resin Content
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50">
                      Periodic glass fiber structure creates spatially varying local Dk beneath routed traces (fiber weave effect), causing differential pair skew and mode conversion (SCD21). Resin-rich constructions (RC &gt; 70%) and 1080/1067 weave styles reduce the Dk variation amplitude.
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ul className="space-y-1">
                        <li><span className="font-medium text-zinc-800">2116/7628:</span> Coarse weave, higher skew risk</li>
                        <li><span className="font-medium text-zinc-800">1080/1067:</span> Tighter weave preferred</li>
                        <li className="mt-2 text-zinc-500 italic">RC &gt; 70% prepregs specified for high-speed layers.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      Water Absorption (% by weight)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50">
                      Absorbed moisture shifts Dk/Df, degrading SI performance in humidity. Low-absorption laminates required for field-deployed equipment.
                    </td>
                    <td className="px-6 py-5 align-top">
                      <ul className="space-y-1">
                        <li><span className="font-medium text-zinc-800">Standard FR-4:</span> ~0.10%</li>
                        <li><span className="font-medium text-zinc-800">Megtron 6:</span> 0.03%</li>
                        <li><span className="font-medium text-zinc-800">Rogers 4350B:</span> 0.06%</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-[80rem] text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            3.2 Material Selection by Interface Speed
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 text-left text-sm leading-7 text-zinc-700 md:text-base">
                <thead className="bg-zinc-100/80">
                  <tr>
                    <th scope="col" className="w-[30%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                      Interface Speed Range
                    </th>
                    <th scope="col" className="w-[35%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                      Laminate Recommendation
                    </th>
                    <th scope="col" className="w-[35%] px-6 py-4 font-semibold text-zinc-900">
                      Key Selection Basis
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      Up to 16GT/s / 10Gbps NRZ
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Isola 370HR, Panasonic R-1566, Ventec VT-47
                    </td>
                    <td className="px-6 py-5 align-top">
                      Moderate Df acceptable. Standard FR-4 class. Cost-optimised.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      16–32GT/s / 10G–25G NRZ
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Isola I-Tera MT40, Panasonic Megtron 6
                    </td>
                    <td className="px-6 py-5 align-top">
                      Df &le;0.005 at 10GHz required. VLP copper foil specified. Megtron 6 is the production standard at this tier.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      32–64GT/s / 56G NRZ – 64G PAM4 (PCIe Gen5/6)
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Panasonic Megtron 6 / Megtron 7, Isola Tachyon 100G, Ventec VT-901
                    </td>
                    <td className="px-6 py-5 align-top">
                      Df &le;0.003 at 10GHz mandatory. HVLP copper required. Tight Dk tolerance (&plusmn;0.05) specified. Resin-rich prepregs for all critical signal layers.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      112G PAM4 and above
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Panasonic Megtron 7, Isola Tachyon 100G, Taconic TLY, experimental laminates
                    </td>
                    <td className="px-6 py-5 align-top">
                      Ultra-low Df (&le;0.0025 at 10GHz). HVLP copper with Huray/Hammerstad roughness model in simulation. Co-designed with fabricator on material lot basis.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      RF / Microwave sections in mixed stackups
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Rogers 4350B, Rogers 4003C, Taconic RF-35
                    </td>
                    <td className="px-6 py-5 align-top">
                      Stable Dk vs. frequency. Low Df for mmWave content. Hybrid stackup construction with fabricator engineering team.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-[80rem] text-sm leading-7 text-zinc-600 md:text-base italic">
          For every design above 25Gbps per lane, Qmax specifies fiber weave direction, glass style per layer, copper foil type, and resin content in the fabrication notes. These are transmitted to the PCB fabricator as part of the stackup specification document, and confirmed as processable by the fabricator before design release.
        </p>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-[80rem] text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            4. SI/PI Simulation Methodology &amp; Tools
          </h2>
          <p className="mt-6 max-w-5xl text-base leading-8 text-zinc-700 md:text-lg text-justify">
            Qmax applies a layered simulation methodology, selecting the appropriate tool and model depth based on interface speed, channel complexity, and project phase. The methodology progresses from 2D/RLGC extraction for pre-layout feasibility through full 3D EM extraction and statistical IBIS-AMI eye simulation for final verification.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 text-left text-sm leading-7 text-zinc-700 md:text-base">
                <thead className="bg-zinc-100/80">
                  <tr>
                    <th scope="col" className="w-[25%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                      Analysis Type
                    </th>
                    <th scope="col" className="w-[30%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                      Tools
                    </th>
                    <th scope="col" className="w-[45%] px-6 py-4 font-semibold text-zinc-900">
                      Application
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      2D Field Solver / RLGC Extraction
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Ansys 2DExtractor, Cadence Sigrity SpeedXP
                    </td>
                    <td className="px-6 py-5 align-top">
                      Pre-layout impedance calculation, trace width/spacing optimisation, differential pair geometry for Ztarget
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      3D EM Via &amp; Connector Modelling
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Ansys HFSS, CST Studio Suite
                    </td>
                    <td className="px-6 py-5 align-top">
                      Via stub resonance, BGA fanout via S-parameter extraction, connector SDD21/SDD11, back-drill depth optimisation, anti-pad geometry
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      Channel IBIS-AMI Simulation
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Ansys SIwave Channel Designer, Cadence Sigrity SystemSI
                    </td>
                    <td className="px-6 py-5 align-top">
                      End-to-end statistical eye diagram with TX FFE / RX CTLE / DFE models from silicon vendors. BER bathtub curve, jitter budget.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      COM Analysis
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      IEEE 802.3 COM MATLAB reference tool, vendor-specific COM platforms
                    </td>
                    <td className="px-6 py-5 align-top">
                      PCIe Gen5/6 and 112G/224G PAM4 channel pass/fail per IEEE COM. ICN, ISI, and equalization co-optimisation.
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      PDN DC IR Drop
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Ansys PowerDC, Cadence Sigrity PowerDC
                    </td>
                    <td className="px-6 py-5 align-top">
                      Full-board DC current distribution, plane hotspot mapping, via current density, multi-rail co-simulation
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      PDN AC Impedance
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Ansys SIwave, Cadence Sigrity PowerSI
                    </td>
                    <td className="px-6 py-5 align-top">
                      PDN impedance vs. frequency, anti-resonance identification, decoupling capacitor sweep and placement optimisation
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      TDR / Time Domain
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      Ansys SIwave, Keysight ADS
                    </td>
                    <td className="px-6 py-5 align-top">
                      Impedance profiling of critical nets, discontinuity identification, correlation with physical TDR measurements at bring-up
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-medium text-zinc-900 align-top border-r border-zinc-200/50">
                      SPICE / Transient
                    </td>
                    <td className="px-6 py-5 align-top border-r border-zinc-200/50 text-zinc-600">
                      HSpice, Spectre, LTspice
                    </td>
                    <td className="px-6 py-5 align-top">
                      Termination network simulation, PDN transient response under load step, SSO noise, power sequencing analysis
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-5xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            5. Representative SI Analysis Results — Actual Qmax Project Data
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            The following simulation outputs are from production SI analysis engagements conducted by Qmax Systems. They represent the type of analysis artefacts delivered to customers as standard project deliverables.
          </p>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl text-left">
              5.1 PAM4 Eye Diagram — Worst-Case Eye Margin
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-700 md:text-lg text-justify">
              Ansys QuickEye IBIS-AMI statistical eye simulation. End-to-end PAM4 channel with TX FFE equalization and RX CTLE/DFE. Result: inner eye height 104.6mV, eye width 34.7ps. The three superimposed eyes characteristic of PAM4 signalling are visible. The probability density heatmap (red = highest density) confirms clean eye opening. Eye height and width are evaluated against the specification compliance mask to establish pass/fail margin for the channel.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-200/50">
              <Image
                src="/pcb-design/SI and PI Analysis Services/image3.png"
                alt="PAM4 Eye Diagram Simulation Results"
                width={1200}
                height={800}
                className="h-auto w-full object-contain bg-white"
              />
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl text-left">
              5.2 Board TDR Analysis — Via Impedance Discontinuity Identification
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-700 md:text-lg text-justify">
              Ansys SIwave / HFSS transient impedance simulation for a Broadcom SoC differential pair channel. The plot identifies three impedance discontinuities in the BGA fanout and via transition zone: a BGA pad impedance dip requiring an anti-pad void under the SoC pad to recover the 95&Omega; differential target; a via transition impedance peak corrected by adjusting the via and anti-pad geometry; and a P/N differential pair separation causing impedance rise to 100&Omega;, corrected by maintaining matched P/N via spacing. This iterative TDR-guided optimisation is performed for all critical via types before design rules are locked.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-200/50">
              <Image
                src="/pcb-design/SI and PI Analysis Services/image2.png"
                alt="Board TDR Analysis Simulation Results"
                width={1200}
                height={800}
                className="h-auto w-full object-contain bg-white"
              />
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl text-left">
              5.3 Differential Insertion Loss &amp; Return Loss (SDD21 / SDD11)
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-700 md:text-lg text-justify">
              Ansys HFSS mixed-mode S-parameter extraction for multiple differential pairs from DC to 25GHz. SDD21 (differential insertion loss) and SDD11 (differential return loss) are plotted for all lanes with a reference marker at 8GHz Nyquist. Worst-case SDD21 at 8GHz: &minus;15.86dB; worst-case SDD11: &minus;9.85dB. These values are assessed against the applicable IEEE or JEDEC channel compliance mask to determine pass/fail margin and &mdash; where insufficient margin exists &mdash; to drive back-drill depth, trace length, or material changes.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-200/50">
              <Image
                src="/pcb-design/SI and PI Analysis Services/image5.png"
                alt="Differential Insertion Loss and Return Loss Results"
                width={1200}
                height={800}
                className="h-auto w-full object-contain bg-white"
              />
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl text-left">
              5.4 NEXT Analysis — Near-End Crosstalk Across All Lane Combinations
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-700 md:text-lg text-justify">
              Ansys SIwave / HFSS NEXT extraction for all aggressor-victim differential pair combinations in a multi-lane interface. Worst-case NEXT at 8GHz: &minus;38.12dB; best-case: &minus;80.68dB. These NEXT values are inputs to the COM ICN calculation &mdash; the statistical aggregate of all crosstalk contributions at the receiver. For PAM4 channels, where each eye opening is approximately 9.5dB smaller than an equivalent NRZ eye, maintaining NEXT and FEXT below the ICN budget is a primary routing discipline constraint.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-200/50">
              <Image
                src="/pcb-design/SI and PI Analysis Services/image4.png"
                alt="NEXT Analysis Simulation Results"
                width={1200}
                height={800}
                className="h-auto w-full object-contain bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-[80rem] text-zinc-800">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
                6. Applications &amp; Real Project Experience
              </h2>
              <p className="mt-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
                Qmax Systems has delivered production-qualified SI/PI analysis across the following interfaces and power delivery categories. Each represents multiple customer programs, not isolated engagements.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 whitespace-nowrap"
            >
              View SI/PI Case Studies &rarr;
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">

            <div className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 sm:p-10 transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-zinc-900">
                6.1 Ethernet &mdash; 10Gbps through 100Gbps
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                10GBASE-KR / 25GBASE-KR through 100GBASE-KR4 and 100GBASE-KP4 PAM4 backplane and host-board channels. Full SDD21/SDD11 analysis, IBIS-AMI receiver equalization simulation per IEEE 802.3, COM analysis for PAM4 lanes, QSFP28 host board via transition 3D EM extraction, PDN analysis for Ethernet switch ASICs with 50A+ switching current demands. Retimer placement and channel loss budget optimisation for reach extension.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 sm:p-10 transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-zinc-900">
                6.2 PCIe Gen6 / CXL 3.x
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                64GT/s PAM4 end-to-end channel COM analysis from CPU/GPU die pad through package, PCB trace, connector, and endpoint. Via stub resonance analysis and back-drill depth specification for server-class board thicknesses. IBIS-AMI simulation with silicon-validated FFE/CTLE/DFE models from Intel, AMD, Broadcom, and Qualcomm. ICN budget management across x16 lane bundles in high-lane-count switch and NIC designs. PDN analysis for PCIe Gen6 switch ICs on AI accelerator fabrics. All prior PCIe generations (Gen3/4/5) are covered as a subset of this capability.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 sm:p-10 transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-zinc-900">
                6.3 MIPI CSI-2 (D-PHY &amp; C-PHY)
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                MIPI D-PHY v2.5 at 4.5Gbps and C-PHY v2.1 at 4.5Gsps for camera sensor and display interfaces. Differential pair and trio impedance control on thin HDI substrates. Intra-pair skew analysis, ESD protection TVS device capacitance loading on eye margin, fine-pitch BGA via model extraction for mobile and automotive ADAS camera SoC platforms. Co-analysis with Qualcomm, MediaTek, and NXP platform design guidelines.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 sm:p-10 transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-zinc-900">
                6.4 DDR4 &amp; DDR5 Memory Subsystems
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                DDR4-3200 through DDR5-8400 and LPDDR5X at 8533 MT/s. Fly-by command/address topology simulation, per-pin DQ eye analysis with DFE-assisted receiver margin, ODT sweep optimisation, VDDQ PDN AC impedance profiling with RDIMM/LRDIMM buffer models, SSO noise analysis for 64-bit data bus simultaneous switching. Point-to-point LPDDR5X routing SI on thin HDI PCBs for mobile SoC platforms.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 sm:p-10 transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-zinc-900">
                6.5 High-Current Power Supply PI Analysis
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                Multi-phase VRM output PDN analysis for 100A&ndash;500A CPU, GPU, and ASIC power rails. DC IR drop with copper thickness selection per IPC-2152. AC PDN impedance from 100Hz to 500MHz, anti-resonance suppression through capacitor bank optimisation. VRM output transient response for 300A/&mu;s load steps typical of high-core-count server processors. PDN analysis for power electronics boards with heavy copper (4oz+) and bus bars.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 sm:p-10 transition-shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-zinc-900">
                6.6 Multi-CPU Board PI Analysis
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                Dual and quad-socket server PDN co-simulation: per-socket VRM co-design, cross-socket reference plane coupling analysis, bulk capacitor placement optimisation for each socket power delivery zone. Inter-socket UPI/xGMI SI analysis across full board dimensions. Thermal-PDN co-simulation incorporating power plane temperature rise under sustained peak CPU workloads.
              </p>
            </div>

            <div className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 sm:p-10 transition-shadow hover:shadow-md md:col-span-2">
              <h3 className="text-xl font-semibold text-zinc-900">
                6.7 AI Accelerator &mdash; PCIe Gen6 Switch SI &amp; PI
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600 max-w-4xl">
                PCIe Gen6 / CXL 3.x switch fabric COM analysis for 128+ lane PAM4 topologies. Full-board PDN for GPU accelerator platforms at 700W+ per device: sub-milliohm Ztarget PDN design, 300A load step transient simulation, Broadcom and Marvell switch ASIC power domain PI. NVLink/NVSwitch inter-GPU differential channel SI over long board traces with cable assembly channel extension. Thermal-PDN co-simulation for sustained AI training workloads.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-5xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            7. Silicon Vendor &amp; PCB Fabricator Coordination
          </h2>
          <div className="mt-6 flex flex-col gap-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            <p>
              The most common cause of first-prototype SI/PI failures is a mismatch between simulation assumptions and the actual manufactured board and device behaviour. Qmax Systems eliminates this through direct, engineering-level relationships with both silicon vendors and PCB fabricators &mdash; relationships built and maintained over more than 30 years of collaborative program execution.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl text-left">
              7.1 Silicon Vendor Collaboration
            </h3>
            <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200 text-left text-sm leading-7 text-zinc-700 md:text-base">
                  <thead className="bg-zinc-100/80">
                    <tr>
                      <th scope="col" className="w-[30%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                        Silicon Vendor
                      </th>
                      <th scope="col" className="w-[70%] px-6 py-4 font-semibold text-zinc-900">
                        Collaboration Scope
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr className="transition-colors hover:bg-zinc-50/50">
                      <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                        Broadcom
                      </td>
                      <td className="px-6 py-5 align-top">
                        PCIe Gen4/5/6 IBIS-AMI models, Ethernet PHY SI platform guidelines, Trident/Tomahawk switch SI validation checklists. BGA fanout via optimisation as shown in TDR Figure 2.
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-zinc-50/50">
                      <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                        Intel
                      </td>
                      <td className="px-6 py-5 align-top">
                        Xeon/Core PCIe Gen5 CEM SI guidelines, DDR5 memory subsystem design rules, EMIB/Foveros package interface models, VR12.5 PDN co-design specifications.
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-zinc-50/50">
                      <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                        AMD
                      </td>
                      <td className="px-6 py-5 align-top">
                        EPYC/Ryzen PCIe Gen5 SI validation, MI-series GPU power delivery PDN specifications, DDR5 memory interface design rules, LRDIMM channel simulation models.
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-zinc-50/50">
                      <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                        Qualcomm
                      </td>
                      <td className="px-6 py-5 align-top">
                        Snapdragon LPDDR5X SI routing guidelines, MIPI CSI-2 D-PHY/C-PHY models, automotive ADAS platform SI/PI design packages, 5G co-existence SI.
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-zinc-50/50">
                      <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                        NXP Semiconductors
                      </td>
                      <td className="px-6 py-5 align-top">
                        Layerscape/S32 PCIe/DDR SI guides, automotive Ethernet 100BASE-T1/1000BASE-T1 channel models, CAN-FD physical layer SI.
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-zinc-50/50">
                      <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                        Ampere Computing
                      </td>
                      <td className="px-6 py-5 align-top">
                        Altra/AmpereOne PCIe Gen4/5 SI guidelines, DDR4/DDR5 memory subsystem rules, cloud-native compute platform PDN specifications.
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-zinc-50/50">
                      <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                        MediaTek
                      </td>
                      <td className="px-6 py-5 align-top">
                        Dimensity LPDDR5/5X SI routing rules, UFS/PCIe interface design guides, Wi-Fi 7 co-existence SI.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl text-left">
              7.2 PCB Fabricator Coordination
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-700 md:text-lg text-justify">
              For every SI-critical design, our fabricator engagement includes obtaining fabricator-measured Dk/Df data at operating frequency from the specific material lot to be used; requesting impedance test coupon data from prior production runs on the same construction to calibrate simulation models; confirming HVLP or VLP copper foil availability and lamination process compatibility; reviewing back-drill depth tolerance achievable on the target via drill diameter; and validating HDI blind/buried via aspect ratios for fine-pitch BGA signal escapes. Etch factor compensation &mdash; the difference between artwork trace width and post-etch conductor width &mdash; is characterised per process and incorporated into impedance simulation, as this affects target impedance by 2&ndash;5&Omega; and is a common source of first-build impedance miss.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-5xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            8. Complimentary SI/PI Schematic Review
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            All PCB layout engagements at Qmax Systems include a complimentary SI/PI-focused schematic review prior to layout commencement. For standalone SI/PI analysis engagements, an equivalent review is performed as the project kick-off activity.
          </p>
          <ul className="mt-10 space-y-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Termination network validation:</span> source series resistor values, AC-coupled termination networks, ODT configuration versus channel topology and target reach
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Decoupling topology review:</span> ferrite bead selection, bulk and ceramic capacitor value strategy per power domain, VRM output filter network adequacy
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Clock distribution SI review:</span> driver type (LVDS/LVPECL/CML), fan-out topology, stub elimination strategy, reference plane requirements
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">SerDes configuration review:</span> TX pre-emphasis and de-emphasis settings, RX CTLE/DFE register configuration compatibility with channel loss budget
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Power sequencing review:</span> VRM enable sequence compliance with silicon vendor power-on timing requirements
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Component lifecycle review:</span> decoupling capacitors, termination resistors, and clock buffers in critical SI paths checked against EOL and allocation risk
            </li>
          </ul>
          <p className="mt-8 text-base leading-8 text-zinc-700 md:text-lg text-justify italic">
            The schematic review is delivered as a written findings report with change recommendations referenced to schematic sheet and component reference designator.
          </p>
        </div>
      </section>

      <section className="bg-zinc-50 px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-5xl text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            9. 1-Hour Complimentary Engineering Consultation
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            Qmax Systems offers a no-obligation, 1-hour technical consultation with senior SI/PI engineers. This is an engineering session &mdash; not a sales presentation. We review your specific interface requirements and provide direct technical input on:
          </p>
          <ul className="mt-10 space-y-6 text-base leading-8 text-zinc-700 md:text-lg text-justify">
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Interface feasibility:</span> target data rate versus proposed stackup and channel length &mdash; passive channel, retimer, or redriver?
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Material selection</span> recommendation based on interface speed and insertion loss budget
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Back-drill requirement:</span> does your board thickness and data rate combination require controlled-depth drilling?
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">PDN complexity assessment:</span> VRM co-design requirements and Ztarget estimate
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Simulation methodology:</span> 2D/RLGC, full 3D EM via extraction, or IBIS-AMI statistical eye &mdash; what does your channel require?
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Fabricator guidance:</span> which fabricators can process your target laminate and back-drill specification
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Risk identification:</span> the interfaces and power delivery items most likely to cause first-pass failure
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6rem] before:h-2 before:w-2 before:rounded-full before:bg-zinc-900">
              <span className="font-semibold text-zinc-900">Review</span> of any existing bring-up failures, TDR anomalies, or eye diagram compliance issues
            </li>
          </ul>

          <div className="mt-14 space-y-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-zinc-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 whitespace-nowrap"
            >
              Schedule Your 1-Hour SI/PI Consultation
            </Link>
            <p className="text-sm font-medium text-zinc-500 md:text-base">
              Available for new designs, designs-in-progress, or existing designs with SI/PI issues. No project commitment required.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-[80rem] text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl text-left">
            10. SI/PI Analysis Deliverables
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 text-left text-sm leading-7 text-zinc-700 md:text-base">
                <thead className="bg-zinc-100/80">
                  <tr>
                    <th scope="col" className="w-[30%] px-6 py-4 font-semibold text-zinc-900 border-r border-zinc-200/50">
                      Deliverable
                    </th>
                    <th scope="col" className="w-[70%] px-6 py-4 font-semibold text-zinc-900">
                      Content
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                      SI Channel Analysis Report
                    </td>
                    <td className="px-6 py-5 align-top">
                      Per-channel SDD21/SDD11 plots, eye diagram with mask overlay, IBIS-AMI bathtub BER curve, COM result, timing margin summary, pass/fail vs. specification limit
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                      PDN Impedance Report
                    </td>
                    <td className="px-6 py-5 align-top">
                      AC PDN impedance plots DC&ndash;1GHz+ per domain, Ztarget overlay, anti-resonance annotation, decoupling capacitor BOM and placement coordinates
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                      DC IR Drop Report
                    </td>
                    <td className="px-6 py-5 align-top">
                      Full-board voltage distribution maps per rail, max/min voltage annotation, hotspot identification, copper geometry modification recommendations
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                      TDR Simulation Report
                    </td>
                    <td className="px-6 py-5 align-top">
                      Impedance vs. time for critical nets, discontinuity identification with corrective action notes, BGA fanout via optimisation results
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                      Stackup Specification
                    </td>
                    <td className="px-6 py-5 align-top">
                      Layer stack with dielectric thickness, copper weight, material, controlled impedance table with tolerance, glass style and copper foil type per layer, fabricator-confirmed
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                      3D Via Model Library
                    </td>
                    <td className="px-6 py-5 align-top">
                      HFSS/CST-extracted Touchstone .s4p S-parameter files for all critical via types, calibrated to fabricator process data
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                      Constraint Files
                    </td>
                    <td className="px-6 py-5 align-top">
                      Native PCB tool constraint files (Allegro / Altium / Zuken) with differential pair rules, length matching windows, impedance rules, via rules &mdash; pre-populated for layout engineer use
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-zinc-50/50">
                    <td className="px-6 py-5 font-semibold text-zinc-900 align-top border-r border-zinc-200/50">
                      Simulation Project Files
                    </td>
                    <td className="px-6 py-5 align-top">
                      All native simulation project files delivered as customer IP (Ansys SIwave/HFSS, Cadence Sigrity, HSpice) for future design reuse
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

            <FAQSection
        faqs={[
          {
            q: "Q1: Do you offer SI/PI analysis as a standalone service, without PCB layout?",
            a: "Yes. Standalone SI/PI analysis is a primary service offering. We perform analysis on designs laid out by third parties, designs received from ODM or EMS partners, and as a pre-fabrication sign-off review. We accept Cadence Allegro, Altium Designer, Zuken CR-8000, and Mentor PADS layout files. No PCB layout commitment is required.",
          },
          {
            q: "Q2: At what data rate does a design require SI analysis?",
            a: "SI analysis is strongly recommended for single-ended interfaces above 200Mbps or differential interfaces above 1Gbps. For PCIe Gen3 and above, DDR4/DDR5, 10G+ Ethernet, and MIPI CSI-2, SI analysis is necessary for first-pass success. At PCIe Gen5/6 and 112G PAM4 Ethernet, it is not optional &mdash; channel compliance is defined by COM analysis which cannot be assessed without simulation.",
          },
          {
            q: "Q3: What is the difference between NRZ and PAM4 in terms of SI requirements?",
            a: "PAM4 encodes 2 bits per symbol across four voltage levels, with each eye opening approximately 9.5dB smaller than an NRZ eye at equivalent swing. This requires tighter insertion loss (SDD21) budgets, lower integrated crosstalk noise (ICN), more aggressive receiver equalization (CTLE + DFE with 4&ndash;24 taps), and mandatory FEC (Reed-Solomon). COM analysis per IEEE 802.3 is the standard methodology for PAM4 channel compliance. All PCIe Gen6 and 112G+ Ethernet channels are PAM4.",
          },
          {
            q: "Q4: What PCB materials do you recommend for PCIe Gen6 and 112G PAM4 designs?",
            a: "For PCIe Gen6 (64GT/s PAM4) and 112G PAM4 Ethernet, we require ultra-low-loss laminates with Df &le;0.003 at 10GHz: Panasonic Megtron 6 or Megtron 7, Isola Tachyon 100G, or Ventec VT-901. HVLP copper foil (Ra &lt; 0.4&mu;m) is mandatory. For 224G PAM4 emerging interfaces, Megtron 7 and experimental low-loss constructions are evaluated on a per-fabricator basis. Material selection is confirmed with the specific fabricator for available constructions and lot-measured Dk/Df data.",
          },
          {
            q: "Q5: What is via back-drilling and when is it required?",
            a: "Back-drilling removes the unused via stub below the last active signal connection, eliminating the quarter-wave stub resonance. Resonant frequency = c / (4 &times; stub_length &times; &radic;Dk). For a 30-mil stub on Megtron 6 (Dk 3.6), resonance is approximately 13GHz &mdash; within the PCIe Gen5 Nyquist band. Back-drilling is required on boards thicker than approximately 1.6mm for PCIe Gen4, and essentially mandatory for Gen5/6 on standard server board thicknesses of 2.4&ndash;3.2mm. We calculate required back-drill depth for every design above 16GT/s and confirm tolerance achievability with the fabricator.",
          },
          {
            q: "Q6: What is COM analysis and why is it required for PCIe Gen6?",
            a: "COM (Channel Operating Margin) is the IEEE-defined figure of merit for high-speed channel compliance. It combines channel insertion loss, integrated crosstalk noise (ICN from all aggressor lanes), transmitter and receiver equalization, jitter, and noise into a single dB margin value. COM &ge; 3dB = pass. COM is mandatory for PCIe Gen5/6 per PCI-SIG and for 25G/100G/400G/800G Ethernet per IEEE 802.3. Qmax delivers COM analysis as a standard output for all applicable interfaces.",
          },
          {
            q: "Q7: How do you obtain IBIS-AMI models for SI simulation?",
            a: "We obtain silicon-validated IBIS-AMI models directly from silicon vendor application engineering teams &mdash; Broadcom, Intel, AMD, Qualcomm, NXP, Ampere, and MediaTek &mdash; through direct engineering relationships maintained for over 30 years. These models accurately capture transmitter FFE settings and receiver CTLE/DFE algorithms. Using unvalidated generic models is a common source of over-optimistic simulation results that fail to predict board-level SI failures.",
          },
          {
            q: "Q8: How does fiber weave effect impact differential pair routing, and how is it mitigated?",
            a: "The periodic glass fiber weave in PCB laminates creates spatially varying local Dk beneath differential pair traces. When P and N conductors overlie different weave regions, differential propagation velocity skew results &mdash; generating mode conversion (SCD21) and differential eye degradation. For interfaces above 10Gbps, Qmax specifies skew-angle routing (5&ndash;10&deg; to the fiber weave direction), resin-rich prepregs (RC &gt; 70%), and 1080/1067 glass style for critical signal layers.",
          },
          {
            q: "Q9: What is PDN target impedance and how is it calculated?",
            a: "Ztarget = &Delta;V / &Delta;I, where &Delta;V is the allowed supply ripple and &Delta;I is the maximum instantaneous current transient. For a server CPU drawing 200A with 50mV allowable droop on a 1.8V rail, Ztarget = 0.25m&Omega;. Achieving sub-milliohm Ztarget requires multi-phase VRM co-design, precisely calculated bulk capacitor banks, and ceramic decoupling optimised for both value and ESL &mdash; all driven by AC PDN impedance simulation, not rules of thumb.",
          },
          {
            q: "Q10: Can you analyse power delivery for AI accelerators with 700W+ per GPU?",
            a: "Yes. AI accelerator PDN is an area of specific Qmax depth. We perform full-board DC IR drop, multi-phase VRM co-design for 600&ndash;800W GPU power domains, bulk and ceramic decoupling optimisation targeting sub-milliohm Ztarget, and thermal-PDN co-simulation for sustained AI training workloads. PDN performance at these power levels is analysed as a coupled system with PCIe Gen6 reference plane SI.",
          },
          {
            q: "Q11: How does PDN design affect SI channel performance?",
            a: "PDN noise couples into SI performance through two primary paths: supply noise on TX VDD causes output common-mode injection into differential pairs, adding jitter; and ground bounce on PCB reference planes raises the effective noise floor at the receiver, degrading eye margin. A PDN that meets DC IR drop requirements can still cause PAM4 eye failures if its AC impedance is too high in the frequency band where the load switches. Qmax treats SI and PI as a coupled system throughout the analysis workflow.",
          },
          {
            q: "Q12: Do you perform SI/PI analysis for automotive-grade electronics?",
            a: "Yes. Automotive SI/PI adds AEC-Q200 component qualification for passive components in SI paths, CISPR 25 pre-compliance for in-vehicle radiated emissions, and ISO 26262 FMEA-level failure mode analysis for ASIL implications. We have experience with 100BASE-T1 / 1000BASE-T1 automotive Ethernet, CAN-FD physical layer, and MIPI CSI-2 for ADAS surround-view camera systems, co-ordinated with NXP and Qualcomm automotive platform guidelines.",
          },
          {
            q: "Q13: How does copper foil roughness affect SI and what types do you specify?",
            a: "Skin effect at high frequency confines current to the conductor surface; rougher copper forces the current to follow a longer effective path, increasing conductor loss. Standard ED copper (Ra 2&ndash;4&mu;m) imposes 30&ndash;50% excess conductor loss versus HVLP foil (Ra &lt; 0.4&mu;m) at 10GHz. For all channels above 16GT/s, Qmax specifies VLP or HVLP copper foil in the stackup specification, confirmed as available with the fabricator before design release. Roughness is modelled using the Huray or Hammerstad model in the simulation tool.",
          },
          {
            q: "Q14: Can you support board bring-up and SI/PI debug on physical prototypes?",
            a: "Yes. We provide bring-up support covering eye diagram measurement methodology, TDR measurement procedure for via impedance verification, VNA S-parameter measurement setup, and PDN noise measurement technique. When simulation and measurement diverge, we investigate fabricated stackup compliance by requesting impedance test coupon results from the fabricator, verify copper foil type, and correlate simulated via impedance profiles against physical TDR traces to identify root cause.",
          },
          {
            q: "Q15: Do you perform SI/PI analysis for rigid-flex and HDI designs?",
            a: "Yes. Rigid-flex introduces SI challenges at the flex-to-rigid transition: polyimide dielectric (Dk ~3.4) is different from the rigid laminate Dk, requiring the flex segment to be modelled as a separate transmission line section; bending zone trace current capacity must be verified; and controlled impedance tolerance on polyimide substrates is wider than on rigid FR-4. HDI designs require blind/buried via 3D EM modelling for fine-pitch BGA signal escape. Both are handled within our standard SI/PI analysis workflow.",
          },
          {
            q: "Q16: What surface finish do you recommend for high-speed PCBs?",
            a: "ENIG is standard for general high-speed digital boards. For RF content and connectors above 20GHz, ENEPIG is preferred &mdash; the palladium barrier eliminates the high-permeability nickel layer that adds skin-effect loss at high frequency. Hard gold is specified for edge connectors with repeated mating cycles (PCIe slots, memory sockets). Surface finish selection is included in the Qmax stackup specification and confirmed with the fabricator, as it affects both connector contact resistance and high-frequency conductor loss on signal layers.",
          },
          {
            q: "Q17: What mixed-mode S-parameters do you extract and why do they matter?",
            a: "We extract the full mixed-mode S-parameter set for all SI-critical differential channels: SDD21 (differential insertion loss), SDD11 (differential return loss), SCD21 (differential-to-common-mode conversion), and SDDS41 (FEXT crosstalk). SCD21, the mode conversion coefficient, is particularly important &mdash; it quantifies asymmetry-driven energy conversion from differential to common mode, which is both a jitter contribution and a primary radiated EMI mechanism. Mode conversion is minimised through matched P/N via geometry, symmetric reference plane coverage, and consistent differential pair routing width and spacing.",
          },
          {
            q: "Q18: How do you specify back-drill depth and what tolerances are achievable?",
            a: "Back-drill depth is specified as the maximum allowable remaining stub length in mils from the last active signal connection to the drill-out endpoint. Required maximum stub length = 2950 / (Fres_GHz &times; &radic;Dk). Standard fabricator tolerance is &plusmn;2 mils; tight tolerance is &plusmn;1 mil. These tolerances are confirmed with the fabricator during stackup review and incorporated into the via stub analysis as worst-case boundary conditions to ensure compliance even under process variation.",
          },
          {
            q: "Q19: What is SSO noise and how is it managed in high-density ASIC designs?",
            a: "Simultaneous Switching Output (SSO) noise &mdash; also called ground bounce &mdash; occurs when multiple I/O buffers switch simultaneously, injecting large instantaneous current transients into the device&#39;s VDD/GND supply. On high-density FPGAs and ASICs, SSO noise can cause tens-of-millivolt supply fluctuations that degrade differential SerDes eye quality through common-mode injection. We analyse SSO noise per I/O bank and recommend decoupling capacitor placement and I/O bank power supply partitioning strategies to maintain acceptable noise levels.",
          },
          {
            q: "Q20: What compliance certifications does your SI/PI work support?",
            a: "SI/PI analysis directly supports pre-compliance for CE (European Conformity), FCC Part 15 Class A/B, VCCI, CISPR 32 (multimedia equipment), CISPR 25 (automotive in-vehicle), and IEC 60601-1-2 (medical equipment EMC). Return path integrity, mode conversion suppression, and PDN decoupling strategies implemented during SI/PI analysis are the same design choices that determine radiated and conducted emissions compliance. Qmax designs for compliance from day one rather than treating EMC as a post-design correction.",
          },
          {
            q: "Q21: What is plane resonance and how do you address it in PDN design?",
            a: "Power-ground plane pairs form a parallel-plate resonant cavity. Cavity resonances create PDN impedance peaks at specific frequencies that peripheral decoupling capacitors cannot suppress, because the capacitors are outside the resonant region. Qmax addresses plane resonance through EBG (Electromagnetic Band Gap) structures etched into the power plane, resistive edge termination of the plane cavity, or plane segmentation to raise resonant frequencies above the PDN bandwidth of concern for the specific application.",
          },
          {
            q: "Q22: Can you perform SI/PI analysis on 3D IC and chiplet package interfaces?",
            a: "Yes. Multi-die packages &mdash; Intel EMIB, AMD 3D V-Cache, TSMC CoWoS &mdash; introduce die-to-die interconnect SI challenges at the package level, including through-silicon via (TSV) channel modelling, bump array via extraction, and package PDN analysis. We work with silicon vendor package models and perform PCB-to-package co-simulation to ensure board SI/PI constraints are compatible with the package interface requirements.",
          },
          {
            q: "Q23: What is ICN (Integrated Crosstalk Noise) and why is it critical for PAM4?",
            a: "ICN is the statistical RMS aggregate of all FEXT and NEXT contributions at the receiver, weighted by transmitter power spectral density and integrated over the channel bandwidth. It is a primary input to COM analysis. For PAM4 channels &mdash; where each eye is approximately 9.5dB smaller than an equivalent NRZ eye &mdash; even moderate ICN levels that would be acceptable in an NRZ design can close PAM4 eyes below the compliance mask. ICN is minimised through differential pair routing discipline: consistent reference planes, adequate inter-pair spacing, and matched via placement that avoids inter-lane coupling.",
          },
          {
            q: "Q24: Do you provide SI/PI analysis reports for third-party design audits?",
            a: "Yes. We regularly provide structured SI/PI audit reports on designs produced by third parties &mdash; ODM suppliers, external design houses, or internal teams without dedicated SI/PI expertise. The audit report covers per-channel SDD21/SDD11 and COM assessment, PDN impedance profile, decoupling strategy evaluation, stackup compliance against interface speed requirements, and a prioritised list of findings with specific corrective recommendations. These reports are used to inform go/no-go decisions before committing to prototype fabrication.",
          },
          {
            q: "Q25: How long does a typical SI/PI engagement take?",
            a: "A focused standalone analysis (single interface family, existing layout) typically requires 1&ndash;2 weeks. Full-board SI/PI integrated with PCB design, covering multiple high-speed interface families and complete PDN, requires 3&ndash;6 weeks depending on lane count and 3D EM extraction scope. Emergency bring-up debug support can begin within 24&ndash;48 hours. A detailed project schedule is provided at kickoff.",
          },
          {
            q: "Q26: What simulation outputs are included in the standard SI/PI deliverable set?",
            a: "Standard deliverables include: per-channel SDD21/SDD11 S-parameter plots, IBIS-AMI statistical eye diagrams with mask overlay, BER bathtub curves, COM analysis results, TDR impedance profiles for critical vias, AC PDN impedance plots per power domain with Ztarget overlay, DC IR drop voltage distribution maps, decoupling capacitor optimisation BOM, stackup specification document, 3D EM-extracted via model library (Touchstone .sNp), native PCB tool constraint files, and all simulation project files. All files are customer property.",
          },
          {
            q: "Q27: Who owns the SI/PI simulation data and all deliverables?",
            a: "All simulation files, extracted S-parameter models, analysis reports, constraint files, stackup specifications, and documentation are the sole intellectual property of the customer. Qmax does not retain, reuse, or share any customer design data across programs. Standard NDA applies to all engagements.",
          },
          {
            q: "Q28: How do you handle etch compensation in impedance modelling?",
            a: "Trace width after chemical etching differs from the artwork dimension due to the etch factor (lateral undercut). This deviation is typically 0.1&ndash;0.4 mils per side, depending on copper weight and fabricator process. On a 4-mil trace targeting 50&Omega;, a 0.3-mil bilateral undercut shifts impedance by 3&ndash;5&Omega; &mdash; a significant error if uncorrected. Qmax obtains etch factor data from the specific fabricator and applies it in the 2D field solver model when calculating artwork trace widths. This is included in the stackup specification delivered to the fabricator.",
          },
          {
            q: "Q29: Can Qmax help with a design that has already failed first-pass bring-up?",
            a: "Yes. Post-build SI/PI rescue is a standard service. We correlate simulation against physical TDR measurements, VNA S-parameter data, and oscilloscope eye diagrams from the prototype. When results diverge from simulation predictions, we investigate fabricated stackup compliance (requesting impedance test coupon results from the fabricator), copper foil type verification, and via geometry correlation. Root cause typically identifies stackup deviation, via stub length greater than specified, material Dk/Df deviation from the simulation model, or routing constraint violations.",
          },
          {
            q: "Q30: How do we begin a SI/PI engagement with Qmax Systems?",
            a: "Start with the 1-hour complimentary consultation described above &mdash; no commitment required. We review your interface list, proposed stackup, and schedule requirements, then define the analysis scope. Following scope agreement, we issue a fixed-price proposal with specific deliverables and schedule. Upon project initiation, you provide design files (schematics, layout if available, BOM, existing SI/PI data) and we begin the analysis workflow. Contact us at www.qmaxsys.com/contact.",
          },
        ]}
      />
      <OtherCapabilitiesScrollSection capabilities={otherCapabilities} />

      <section className="bg-white px-6 py-16 md:py-24 lg:px-8 border-t border-zinc-200">
        <div className="mx-auto max-w-4xl text-center text-zinc-800">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Start Your SI/PI Engagement
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-700 md:text-lg">
            Whether you are developing a PCIe Gen6 AI accelerator fabric, a DDR5 server memory subsystem, a 100Gbps data centre switch, or need an independent SI/PI review of an existing design before fabrication, Qmax Systems has the engineering depth, silicon vendor relationships, and fabricator partnerships to ensure your design is correct before it is built.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Schedule 1-Hour Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Request a Technical Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-zinc-200 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Contact Engineering Team
            </Link>
          </div>

          <div className="mt-16 border-t border-zinc-200 pt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-blue-600">
            <Link href="/pcb-design" className="hover:text-blue-800 hover:underline">PCB Design Services Overview</Link>
            <span className="text-zinc-300">|</span>
            <Link href="/pcb-design/digital" className="hover:text-blue-800 hover:underline">Digital PCB Design</Link>
            <span className="text-zinc-300">|</span>
            <Link href="/pcb-design/analog-mixed-signal" className="hover:text-blue-800 hover:underline">Analog &amp; Mixed Signal PCB Design</Link>
            <span className="text-zinc-300">|</span>
            <Link href="/pcb-design/rf-microwave" className="hover:text-blue-800 hover:underline">RF PCB Design</Link>
            <span className="text-zinc-300">|</span>
            <Link href="/pcb-design/power-electronics" className="hover:text-blue-800 hover:underline">Power Electronics PCB Design</Link>
            <span className="text-zinc-300">|</span>
            <Link href="/hardware-development-services" className="hover:text-blue-800 hover:underline">HW Development Services</Link>
            <span className="text-zinc-300">|</span>
            <Link href="/case-studies" className="hover:text-blue-800 hover:underline">Case Studies</Link>
          </div>

          <div className="mt-8 flex justify-center items-center gap-4 text-sm text-zinc-500">
            <span className="font-semibold text-zinc-700">Qmax Systems</span>
            <span className="text-zinc-300">|</span>
            <Link href="https://www.qmaxsys.com" className="hover:text-zinc-900">www.qmaxsys.com</Link>
            <span className="text-zinc-300">|</span>
            <span>SI/PI Analysis Services</span>
          </div>
        </div>
      </section>
      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
      />
    </main>
  );
}


