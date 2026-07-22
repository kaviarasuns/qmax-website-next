"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CapabilityCardV2 {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: ReactNode;
  learnMoreHref: string;
  image?: { src: string; alt: string };
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
    image: {
      src: "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/wifi6_triband_router/1_new.png",
      alt: "Engineer presenting a high-speed multi-core server board",
    },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
    image: {
      src: "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/ultra_low_cost_bldc_motor_controller_for_evs/Ultra%20Low%20Cost%20BLDC%20Motor%20Controller%20for%20EVs.png",
      alt: "RF engineer testing a board with a spectrum analyzer",
    },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" />
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
    image: {
      src: "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/high_speed_analog_board/2.png",
      alt: "Engineer working on analog schematic and PCB layout",
    },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
    image: {
      src: "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/high_voltage_and_high_current_pcb/PNG8.png",
      alt: "Power electronics design lab with converter boards",
    },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

function BulletText({ text }: { text: string }) {
  const colonIndex = text.indexOf(":");
  if (colonIndex === -1) return <span>{text}</span>;
  return (
    <span>
      <strong className="font-medium">{text.slice(0, colonIndex + 1)}</strong>
      {text.slice(colonIndex + 1)}
    </span>
  );
}

export function CapabilitiesSectionV2({
  capabilities = DEFAULT_CAPABILITIES,
  title = "Hardware",
  titleHighlight = "Capabilities",
  description,
}: CapabilitiesSectionV2Props) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 },
    );
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  if (!capabilities.length) return null;

  return (
    <section className="w-full bg-neutral-50 px-6 py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6">
        <div className="mb-8 flex flex-col items-center gap-5 text-center">
          <h2 className="m-0 text-center text-4xl font-light tracking-wide md:text-5xl">
            {title} <span className="text-red-500">{titleHighlight}</span>
          </h2>
          {description ? (
            <p className="m-0 max-w-[1100px] text-base leading-relaxed text-foreground [text-align-last:center] [text-wrap:pretty] max-[900px]:max-w-full">
              {description}
            </p>
          ) : null}
        </div>

        {capabilities.map((cap, i) => (
          <div
            key={cap.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="translate-y-8 opacity-0 transition-[opacity,transform] duration-700 [transition-timing-function:cubic-bezier(.4,0,.2,1)] [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
          >
            <article className="group relative flex h-full cursor-pointer items-stretch gap-8 rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(16,24,40,0.08),0_16px_40px_rgba(16,24,40,0.12)] max-[900px]:flex-col max-[900px]:p-5">
              <Link
                href={cap.learnMoreHref}
                className="absolute inset-0 z-10 rounded-2xl"
                aria-label={`Learn more about ${cap.title}`}
              />

              <div className="relative z-0 flex min-w-0 flex-1 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <span className="h-6 w-6" aria-hidden="true">
                      {cap.icon}
                    </span>
                  </div>
                  <h3 className="m-0 text-xl font-medium tracking-wide md:text-2xl">
                    {cap.title}
                  </h3>
                </div>

                <p className="m-0 text-base leading-relaxed text-foreground [text-wrap:pretty]">
                  {cap.description}
                </p>

                <div className="h-px bg-gray-100" aria-hidden="true" />

                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {cap.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-baseline gap-3 text-[15px] leading-[1.65] text-foreground"
                    >
                      <span
                        className="relative -top-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"
                        aria-hidden="true"
                      />
                      <BulletText text={bullet} />
                    </li>
                  ))}
                </ul>

                <div className="mt-1">
                  <span className="inline-block rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-red-600">
                    Learn more
                  </span>
                </div>
              </div>

              {cap.image ? (
                <div className="relative z-0 min-h-[280px] w-80 shrink-0 overflow-hidden rounded-xl max-[900px]:min-h-[200px] max-[900px]:w-full">
                  <Image
                    src={cap.image.src}
                    alt={cap.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 320px"
                    className="object-contain"
                  />
                </div>
              ) : null}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
