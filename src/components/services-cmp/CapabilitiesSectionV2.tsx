import type { ReactNode } from "react";
import Link from "next/link";

export interface CapabilityCardV2 {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: ReactNode;
  learnMoreHref: string;
}

interface CapabilitiesSectionV2Props {
  capabilities?: CapabilityCardV2[];
  title?: string;
  titleHighlight?: string;
  description?: string;
  getInTouchHref?: string;
}

const DEFAULT_CAPABILITIES: CapabilityCardV2[] = [
  {
    id: "digital-design",
    title: "High Speed Digital Design",
    description:
      "Next-gen computing architectures for AI datacenters and defence. We engineer ultra-complex digital ecosystems where extreme edge data rates demand strict timing budgets and signal fidelity. From multi-core ARM/x86 server platforms optimized for high-density AI compute clusters to defence-grade software-defined radios (SDR), we deliver absolute precision across complex bus topologies.",
    bullets: [
      "High-Bandwidth Interconnects: Implementation and deployment of PCIe Gen 6 and 100GbE interfaces.",
      "Ultra-Dense Memory: Topology optimization for multi-channel DDR5 and low-power LPDDR memory arrays.",
      "Heterogeneous Compute: Integration of high-performance FPGAs, server CPUs, and AI expansion architectures.",
    ],
    learnMoreHref: "/hardware-design-services/high-speed-digital-design",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M20 9h2M20 15h2M2 9h2M2 15h2" />
      </svg>
    ),
  },
  {
    id: "rf-microwave",
    title: "RF and Microwave Design",
    description:
      "Advanced high-frequency systems and high-power telecom infrastructure. We bridge the gap between high-frequency communication protocols and high-power industrial RF applications. Our team commands the radio spectrum to maximize range, minimize phase noise, and accelerate regulatory compliance for complex wireless infrastructure and mission-critical networks.",
    bullets: [
      "Cutting-Edge Wireless: Phase-matched design for Wi-Fi 7, BLE, and long-range industrial LoRa links.",
      "Megawatt/Kilowatt Systems: Kilowatt-class (1 KW) RF generators engineered for industrial plasma processing.",
      "Active Front-Ends: High-gain Low-Noise Amplifiers (LNAs) and Power Amplifiers (PAs) optimized for linear performance.",
    ],
    learnMoreHref: "/hardware-design-services/rf-and-microwave",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.859a10 10 0 0 1 14 0" />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
        <path d="M12 20h.01" />
      </svg>
    ),
  },
  {
    id: "analog-design",
    title: "Analog and Mixed Signal Design",
    description:
      "High-precision frontend engineering for medical and sensor systems. Extracting low-amplitude signals from noisy environments requires masterful isolation strategies. We design high-performance analog front-ends that accurately capture micro-signals—such as ultra-sensitive medical biometrics and industrial telemetry—bridging the physical-to-digital divide without distortion.",
    bullets: [
      "Ultra-Low-Noise Conditioning: Precision sensor amplification and active filtering architectures.",
      "High-Speed Conversion: Low-latency, high-resolution ADC/DAC data conversion topologies.",
      "Domain Isolation: Advanced mixed-signal zoning, shielding, and active noise mitigation.",
    ],
    learnMoreHref: "/hardware-design-services/analog-design",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "power-electronics",
    title: "Power Electronics",
    description:
      "High-voltage power density for automotive EV and industrial drives. We build high-efficiency, rugged power systems engineered to handle extreme current shifts and demanding loads. Our architectures prioritize thermal stability, power-to-volume ratio, and strict structural isolation to ensure continuous operational longevity in automotive traction and industrial environments.",
    bullets: [
      "Industrial & EV Traction: High-voltage, high-current power stages and custom motor controller units.",
      "Regulatory Isolation: Stringent creepage and clearance safety tracking for high-voltage domains.",
      "Thermal Management: Active heat dissipation optimization and high power density conversion cycles.",
    ],
    learnMoreHref: "/hardware-design-services/power-electronics",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export function CapabilitiesSectionV2({
  capabilities = DEFAULT_CAPABILITIES,
  title = "Hardware",
  titleHighlight = "Capabilities",
  description,
  getInTouchHref = "/hardware-design-services/contact",
}: CapabilitiesSectionV2Props) {
  if (!capabilities.length) return null;

  console.log(getInTouchHref);

  return (
    <section className="px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="m-0 text-center text-4xl md:text-5xl font-light tracking-wide">
          {title} <span className="text-red-500">{titleHighlight}</span>
        </h2>
        {description ? (
          <p className="mx-auto mt-6 w-full max-w-[1100px] text-justify [text-align-last:center]">
            {description}
          </p>
        ) : null}

        <div className="mt-10 rounded-[2rem] bg-gray-100/80 p-5 md:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <article
                key={cap.id}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:z-10 hover:border-red-500 hover:bg-red-500 hover:shadow-xl hover:shadow-red-500/25 focus-within:z-10 focus-within:border-red-500 focus-within:bg-red-500 focus-within:shadow-xl focus-within:shadow-red-500/25 lg:hover:scale-[1.03] lg:focus-within:scale-[1.03]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 transition-colors duration-300 group-hover:bg-white group-focus-within:bg-white">
                    <span className="h-6 w-6" aria-hidden="true">
                      {cap.icon}
                    </span>
                  </div>
                  <h3 className="m-0 text-center text-xl md:text-2xl font-light tracking-wide transition-colors duration-300 group-hover:text-white group-focus-within:text-white">
                    {cap.title}
                  </h3>
                </div>
                <p className="mt-2 text-justify text-sm leading-relaxed transition-colors duration-300 group-hover:text-red-50 group-focus-within:text-red-50">
                  {cap.description}
                </p>

                <hr className="my-4 border-gray-200 transition-colors duration-300 group-hover:border-white/25 group-focus-within:border-white/25" />

                <ul className="space-y-2">
                  {cap.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm transition-colors duration-300 group-hover:text-white group-focus-within:text-white"
                    >
                      <span
                        className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 transition-colors duration-300 group-hover:bg-white group-focus-within:bg-white"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <Link
                    href={cap.learnMoreHref}
                    className="inline-flex items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-600 group-hover:bg-white group-hover:text-red-500 group-hover:hover:bg-red-50 group-focus-within:bg-white group-focus-within:text-red-500"
                  >
                    Learn more
                  </Link>
                  {/* <Link
                    href={getInTouchHref}
                    className="inline-flex items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-600 group-hover:bg-white group-hover:text-red-500 group-hover:hover:bg-red-50 group-focus-within:bg-white group-focus-within:text-red-500"
                  >
                    Get in Touch
                  </Link> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
