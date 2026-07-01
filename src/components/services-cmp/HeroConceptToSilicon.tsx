"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

type Sub = {
  label: ReactNode;
  icon: ReactNode;
  tall?: boolean;
  wide?: boolean;
};

type Phase = {
  num: number;
  name: string;
  rows: Sub[][];
};

const ARROW_SVG = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const CHEVRON_SVG = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="8 5 16 12 8 19" />
  </svg>
);

const PHASES: Phase[] = [
  {
    num: 1,
    name: "Requirements",
    rows: [
      [
        {
          label: (
            <>
              PRD
              <br />
              Creation
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 6h18l8 8v28H10z" />
              <path d="M28 6v8h8" />
              <line x1="15" y1="22" x2="25" y2="22" />
              <line x1="15" y1="27" x2="22" y2="27" />
              <circle
                cx="28"
                cy="34"
                r="4"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <circle cx="28" cy="34" r="1.5" fill="currentColor" />
              <line x1="28" y1="29" x2="28" y2="31" />
              <line x1="28" y1="37" x2="28" y2="39" />
              <line x1="23" y1="34" x2="25" y2="34" />
              <line x1="31" y1="34" x2="33" y2="34" />
            </svg>
          ),
        },
        {
          label: (
            <>
              Feasibility
              <br />
              &amp; Initial BoM
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="10" y="6" width="28" height="36" rx="3" />
              <rect
                x="14"
                y="11"
                width="20"
                height="7"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <path d="M16 14 L18 16 L21 13" />
              <line x1="25" y1="14.5" x2="32" y2="14.5" />
              <circle cx="16" cy="24" r="1.2" fill="currentColor" />
              <circle cx="24" cy="24" r="1.2" fill="currentColor" />
              <circle cx="32" cy="24" r="1.2" fill="currentColor" />
              <circle cx="16" cy="30" r="1.2" fill="currentColor" />
              <circle cx="24" cy="30" r="1.2" fill="currentColor" />
              <circle cx="32" cy="30" r="1.2" fill="currentColor" />
              <circle cx="16" cy="36" r="1.2" fill="currentColor" />
              <circle cx="24" cy="36" r="1.2" fill="currentColor" />
              <circle cx="32" cy="36" r="1.2" fill="currentColor" />
            </svg>
          ),
        },
      ],
    ],
  },
  {
    num: 2,
    name: "Architecture",
    rows: [
      [
        {
          tall: true,
          label: (
            <>
              Systems
              <br />
              Architecture
              <br />
              and BoM
            </>
          ),
          icon: (
            <svg
              width="58"
              height="58"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="18"
                y="6"
                width="12"
                height="9"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <rect
                x="6"
                y="30"
                width="12"
                height="9"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <rect
                x="18"
                y="30"
                width="12"
                height="9"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <rect
                x="30"
                y="30"
                width="12"
                height="9"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <path d="M24 15 V22 M12 22 V30 M24 22 V30 M36 22 V30 M12 22 H36" />
            </svg>
          ),
        },
      ],
    ],
  },
  {
    num: 3,
    name: "Detailed Design",
    rows: [
      [
        {
          label: "Schematics",
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="14"
                y="14"
                width="20"
                height="20"
                rx="2"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <circle cx="20" cy="22" r="1.5" fill="currentColor" />
              <circle cx="28" cy="22" r="1.5" fill="currentColor" />
              <circle cx="24" cy="28" r="1.5" fill="currentColor" />
              <line x1="14" y1="18" x2="9" y2="18" />
              <line x1="14" y1="24" x2="9" y2="24" />
              <line x1="14" y1="30" x2="9" y2="30" />
              <line x1="34" y1="18" x2="39" y2="18" />
              <line x1="34" y1="24" x2="39" y2="24" />
              <line x1="34" y1="30" x2="39" y2="30" />
              <line x1="18" y1="14" x2="18" y2="9" />
              <line x1="24" y1="14" x2="24" y2="9" />
              <line x1="30" y1="14" x2="30" y2="9" />
              <line x1="18" y1="34" x2="18" y2="39" />
              <line x1="24" y1="34" x2="24" y2="39" />
              <line x1="30" y1="34" x2="30" y2="39" />
            </svg>
          ),
        },
        {
          label: (
            <>
              Design
              <br />
              Review
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18 L14 14 L20 18 L26 14 L32 16 L42 22 L40 32 L34 34 L28 30" />
              <path d="M6 18 L8 30 L14 32 L20 28" />
              <path d="M20 28 L26 32 L30 30" />
              <path d="M30 30 L34 34" />
            </svg>
          ),
        },
      ],
      [
        {
          label: (
            <>
              PCB
              <br />
              Design
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="6"
                y="8"
                width="36"
                height="32"
                rx="2"
                fill="currentColor"
                fillOpacity="0.06"
              />
              <rect
                x="16"
                y="18"
                width="16"
                height="12"
                rx="1"
                fill="currentColor"
                fillOpacity="0.15"
              />
              <circle cx="20" cy="22" r="1" fill="currentColor" />
              <circle cx="28" cy="22" r="1" fill="currentColor" />
              <circle cx="20" cy="26" r="1" fill="currentColor" />
              <circle cx="28" cy="26" r="1" fill="currentColor" />
              <line x1="10" y1="14" x2="16" y2="14" />
              <line x1="32" y1="14" x2="38" y2="14" />
              <line x1="10" y1="34" x2="38" y2="34" />
            </svg>
          ),
        },
        {
          label: (
            <>
              SI / PI
              <br />
              Analysis
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" y1="40" x2="42" y2="40" />
              <line x1="6" y1="40" x2="6" y2="8" />
              <path
                d="M8 30 L12 30 L14 14 L18 38 L22 18 L26 32 L30 22 L34 28 L38 28 L42 22"
                strokeWidth="2.2"
              />
            </svg>
          ),
        },
      ],
    ],
  },
  {
    num: 4,
    name: "EVT",
    rows: [
      [
        {
          label: (
            <>
              Functional
              <br />
              Bring-up
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M16 16 A12 12 0 1 0 32 16"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <line x1="24" y1="6" x2="24" y2="20" strokeWidth="2.4" />
              <line x1="4" y1="14" x2="8" y2="16" />
              <line x1="44" y1="14" x2="40" y2="16" />
              <line x1="6" y1="6" x2="10" y2="10" />
              <line x1="42" y1="6" x2="38" y2="10" />
              <line x1="14" y1="4" x2="16" y2="8" />
              <line x1="34" y1="4" x2="32" y2="8" />
            </svg>
          ),
        },
        {
          label: (
            <>
              Debug &amp;
              <br />
              Iterate
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="20"
                cy="20"
                r="12"
                fill="currentColor"
                fillOpacity="0.06"
              />
              <line x1="29" y1="29" x2="40" y2="40" strokeWidth="2.4" />
              <path
                d="M16 14 L14 16 L18 20 L14 24 L16 26 L20 22 L26 28 L24 30 L28 26"
                strokeWidth="2"
              />
            </svg>
          ),
        },
      ],
      [
        {
          label: "Final Functional Check",
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M12 10 H36 V42 H12 Z"
                fill="currentColor"
                fillOpacity="0.06"
              />
              <rect
                x="18"
                y="6"
                width="12"
                height="6"
                rx="1.5"
                fill="currentColor"
                fillOpacity="0.15"
              />
              <path d="M16 22 L19 25 L24 19" />
              <line x1="28" y1="23" x2="34" y2="23" />
              <path d="M16 32 L19 35 L24 29" />
              <line x1="28" y1="33" x2="34" y2="33" />
            </svg>
          ),
        },
      ],
    ],
  },
  {
    num: 5,
    name: "DVT",
    rows: [
      [
        {
          wide: true,
          label: (
            <>
              Environmental
              <br />
              Tests
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M18 8 a4 4 0 0 1 8 0 v20 a6 6 0 1 1 -8 0 z"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <circle cx="22" cy="34" r="3" fill="currentColor" />
              <line x1="22" y1="14" x2="22" y2="28" />
              <path
                d="M34 18 q3 4 3 7 a3 3 0 1 1 -6 0 q0 -3 3 -7 z"
                fill="currentColor"
                fillOpacity="0.2"
              />
            </svg>
          ),
        },
        {
          label: (
            <>
              Reliability
              <br />
              Tests
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="10"
                y="14"
                width="28"
                height="20"
                rx="2"
                fill="currentColor"
                fillOpacity="0.06"
              />
              <rect
                x="14"
                y="18"
                width="20"
                height="12"
                rx="1"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <line x1="20" y1="34" x2="28" y2="34" />
              <line x1="24" y1="34" x2="24" y2="38" />
              <line x1="18" y1="38" x2="30" y2="38" />
              <path
                d="M16 24 L19 24 L21 21 L24 27 L27 21 L29 24 L32 24"
                strokeWidth="1.8"
              />
            </svg>
          ),
        },
      ],
      [
        {
          label: "Compliance Tests",
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="24"
                cy="20"
                r="12"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <path d="M18 30 L14 42 L20 38 L24 42 L28 38 L34 42 L30 30" />
              <path d="M18 20 L22 24 L30 16" strokeWidth="2.4" />
            </svg>
          ),
        },
      ],
    ],
  },
  {
    num: 6,
    name: "PVT",
    rows: [
      [
        {
          label: "Test Jigs",
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 40 H44" strokeWidth="2.4" />
              <path
                d="M8 40 V22 L16 26 V18 L24 22 V20 L32 24 V14 L40 18 V40 Z"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <rect x="11" y="32" width="3" height="5" fill="currentColor" />
              <rect x="19" y="32" width="3" height="5" fill="currentColor" />
              <rect x="27" y="32" width="3" height="5" fill="currentColor" />
              <rect x="35" y="32" width="3" height="5" fill="currentColor" />
            </svg>
          ),
        },
        {
          wide: true,
          label: (
            <>
              Production
              <br />
              Programming &amp; Tests
            </>
          ),
          icon: (
            <svg
              width="42"
              height="42"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 40 H44" strokeWidth="2.4" />
              <path
                d="M6 40 V26 L18 32 V26 L30 32 V20 L42 26 V40 Z"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <rect x="10" y="34" width="3" height="4" fill="currentColor" />
              <rect x="22" y="34" width="3" height="4" fill="currentColor" />
              <rect x="34" y="34" width="3" height="4" fill="currentColor" />
              <circle
                cx="36"
                cy="12"
                r="5"
                fill="currentColor"
                fillOpacity="0.18"
              />
              <circle cx="36" cy="12" r="2" fill="currentColor" />
              <line x1="36" y1="6" x2="36" y2="8" />
              <line x1="36" y1="16" x2="36" y2="18" />
              <line x1="30" y1="12" x2="32" y2="12" />
              <line x1="40" y1="12" x2="42" y2="12" />
            </svg>
          ),
        },
      ],
    ],
  },
];

const PHASE_HEADER_BG: Record<number, string> = {
  1: "bg-gradient-to-b from-[#4fa0d3] to-[#3e8ec2]",
  2: "bg-gradient-to-b from-[#4dbeb8] to-[#3faba5]",
  3: "bg-gradient-to-b from-[#6fc36c] to-[#5fb35c]",
  4: "bg-gradient-to-b from-[#f0cb45] to-[#e6bf33]",
  5: "bg-gradient-to-b from-[#f2a150] to-[#e5933f]",
  6: "bg-gradient-to-b from-[#ec7e66] to-[#e36f55]",
};

const LIFECYCLE_HEADING_CLASS =
  "w-full text-center text-[clamp(32px,4vw,48px)] font-light leading-[1.15]";

export type HeroConceptToSiliconProps = {
  title?: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  caption?: string;
  lifecycleTitle?: string;
  lifecycleSubtitleHighlight?: string;
};

export function HeroConceptToSilicon({
  title,
  description,
  ctaLabel = "Talk to our engineer",
  ctaHref = "/hardware-design-services/contact",
  lifecycleTitle = "Hardware Lifecycle",
  lifecycleSubtitleHighlight = "Requirement to Production",
}: HeroConceptToSiliconProps) {
  const showCopy = title != null && description != null;
  const flowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const flow = flowRef.current;
    if (!flow) return;
    const phases = Array.from(flow.querySelectorAll<HTMLElement>(".cts-phase"));
    const chevrons = Array.from(
      flow.querySelectorAll<HTMLElement>(".cts-chevron"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            phases.forEach((phase, idx) => {
              window.setTimeout(() => {
                phase.classList.add("in");
                const chevron = chevrons[idx];
                if (chevron) {
                  window.setTimeout(() => chevron.classList.add("in"), 200);
                }
              }, idx * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    if (phases.length > 0) observer.observe(phases[0]);

    const cycleDuration = 16000;
    const phaseDuration =
      phases.length > 0 ? cycleDuration / phases.length : cycleDuration;
    const tick = window.setInterval(() => {
      const cycleTime = Date.now() % cycleDuration;
      const phaseIdx = Math.floor(cycleTime / phaseDuration);
      phases.forEach((phase, idx) =>
        phase.classList.toggle("energized", idx === phaseIdx),
      );
      chevrons.forEach((chev, idx) =>
        chev.classList.toggle("pulsing", idx === phaseIdx),
      );
    }, 100);

    return () => {
      observer.disconnect();
      window.clearInterval(tick);
    };
  }, []);

  return (
    <section className="cts-hero">
      <div className="cts-hero-inner">
        {showCopy ? (
          <div className="cts-hero-copy">
            <h1 className="!m-0 !mb-[26px] !text-[clamp(34px,4.2vw,52px)] !font-bold !leading-[1.12] !text-white ![text-wrap:balance]">
              {title}
              <br />
              {description}
            </h1>
            <Link
              className="inline-block rounded-md bg-red-500 px-8 py-3.5 text-base font-semibold uppercase tracking-[0.04em] text-white no-underline transition duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-red-600"
              href={ctaHref}
            >
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>

      <div className="cts-hero-lifecycle">
        <div className="mx-auto mb-10 flex w-full flex-col items-center text-center">
          <h2 className={`m-0 mb-3 ${LIFECYCLE_HEADING_CLASS} tracking-[1.2px]`}>
            {lifecycleTitle}
          </h2>
          <p className={`m-0 font-readable ${LIFECYCLE_HEADING_CLASS}`}>
            From{" "}
            <span className="text-red-500">{lifecycleSubtitleHighlight}</span>
          </p>
        </div>
        <div className="cts-flow" ref={flowRef}>
          <div className="cts-energy-track" />
          <div className="cts-energy-trail" />
          <div className="cts-energy-particle" />

          {PHASES.map((phase, phaseIdx) => (
            <PhaseAndChevron
              key={phase.num}
              phase={phase}
              showChevronBefore={phaseIdx > 0}
            />
          ))}
        </div>
        {/* <div className="cts-energy-caption">{caption}</div> */}
      </div>

      <style jsx>{`
        .cts-hero {
          --p1: #4fa0d3;
          --p2: #4dbeb8;
          --p3: #6fc36c;
          --p4: #f0cb45;
          --p5: #f2a150;
          --p6: #ec7e66;
          --p1-icon: #2f7fb4;
          --p2-icon: #2f938c;
          --p3-icon: #468e3f;
          --p4-icon: #a57f12;
          --p5-icon: #c76c20;
          --p6-icon: #b84d34;
          --ink-700: #3e4e63;
          --ink-300: #bfc8d2;
          position: relative;
          width: 100%;
          min-height: calc(100vh - 4rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
          overflow: hidden;
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;
          padding: 40px 24px 32px;
        }
        .cts-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 32px 40px 16px;
        }
        .cts-hero-copy {
          max-width: none;
        }
        .cts-hero-lifecycle {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 8px 16px 0;
        }

        .cts-flow {
          position: relative;
          display: flex;
          align-items: stretch;
          gap: 2px;
          overflow-x: auto;
          padding: 28px 4px 28px;
          scrollbar-width: thin;
        }
        .cts-flow::-webkit-scrollbar {
          height: 8px;
        }
        .cts-flow::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 999px;
        }

        .cts-energy-track {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(91, 175, 224, 0.3) 8%,
            rgba(77, 190, 184, 0.3) 25%,
            rgba(111, 195, 108, 0.3) 42%,
            rgba(240, 203, 69, 0.3) 58%,
            rgba(242, 161, 80, 0.3) 75%,
            rgba(236, 126, 102, 0.3) 92%,
            transparent 100%
          );
          z-index: 0;
          transform: translateY(-50%);
          pointer-events: none;
        }
        .cts-energy-particle {
          position: absolute;
          top: 50%;
          left: 0;
          width: 16px;
          height: 16px;
          background: #fff;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow:
            0 0 12px rgba(255, 255, 255, 1),
            0 0 24px rgba(91, 175, 224, 0.8),
            0 0 48px rgba(91, 175, 224, 0.4);
          z-index: 1;
          animation: cts-energy-travel 16s linear infinite;
          pointer-events: none;
        }
        .cts-energy-trail {
          position: absolute;
          top: 50%;
          left: 0;
          width: 80px;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.6)
          );
          transform: translate(-100%, -50%);
          z-index: 0;
          animation: cts-energy-travel 16s linear infinite;
          filter: blur(2px);
          pointer-events: none;
        }
        @keyframes cts-energy-travel {
          0% {
            left: 2%;
          }
          100% {
            left: 98%;
          }
        }

        .cts-energy-caption {
          text-align: center;
          margin-top: 18px;
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 1200px) {
          .cts-flow {
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 24px;
          }
        }
        @media (max-width: 900px) {
          .cts-hero-inner {
            padding: 32px 16px 16px;
          }
        }
      `}</style>
      <style jsx global>{`
        .cts-phase {
          flex: 1 1 0;
          min-width: 200px;
          border-radius: 14px;
          padding: 9px;
          display: flex;
          flex-direction: column;
          border: 1.5px solid;
          box-shadow:
            0 1px 2px rgba(27, 42, 61, 0.18),
            0 6px 18px rgba(0, 0, 0, 0.25);
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.3s,
            border-color 0.3s;
          position: relative;
          z-index: 2;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .cts-phase.in {
          opacity: 1;
          transform: translateY(0);
        }
        .cts-phase[data-p="1"] {
          background: rgba(79, 160, 211, 0.32);
          border-color: rgba(79, 160, 211, 0.5);
        }
        .cts-phase[data-p="2"] {
          background: rgba(77, 190, 184, 0.32);
          border-color: rgba(77, 190, 184, 0.5);
        }
        .cts-phase[data-p="3"] {
          background: rgba(111, 195, 108, 0.32);
          border-color: rgba(111, 195, 108, 0.5);
        }
        .cts-phase[data-p="4"] {
          background: rgba(240, 203, 69, 0.36);
          border-color: rgba(240, 203, 69, 0.52);
        }
        .cts-phase[data-p="5"] {
          background: rgba(242, 161, 80, 0.34);
          border-color: rgba(242, 161, 80, 0.5);
        }
        .cts-phase[data-p="6"] {
          background: rgba(236, 126, 102, 0.34);
          border-color: rgba(236, 126, 102, 0.5);
        }
        .cts-phase-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
          justify-content: center;
        }
        .cts-sub-row {
          display: flex;
          align-items: stretch;
          gap: 4px;
        }
        .cts-sub-row > .cts-sub {
          flex: 1;
        }
        .cts-sub {
          border-radius: 10px;
          padding: 10px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 6px;
          min-width: 0;
          min-height: 108px;
          background: #fff;
          border: 1.5px solid transparent;
          box-shadow: 0 2px 6px rgba(16, 24, 40, 0.1);
          transition: all 0.25s;
        }
        .cts-phase[data-p="1"] .cts-sub {
          border-color: rgba(47, 127, 180, 0.35);
        }
        .cts-phase[data-p="2"] .cts-sub {
          border-color: rgba(47, 147, 140, 0.35);
        }
        .cts-phase[data-p="3"] .cts-sub {
          border-color: rgba(70, 142, 63, 0.35);
        }
        .cts-phase[data-p="4"] .cts-sub {
          border-color: rgba(165, 127, 18, 0.34);
        }
        .cts-phase[data-p="5"] .cts-sub {
          border-color: rgba(199, 108, 32, 0.35);
        }
        .cts-phase[data-p="6"] .cts-sub {
          border-color: rgba(184, 77, 52, 0.35);
        }
        .cts-sub:hover {
          transform: scale(1.04);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
        }
        .cts-sub.tall {
          min-height: 200px;
          justify-content: center;
          gap: 10px;
        }
        .cts-sub-row > .cts-sub.wide {
          flex: 1.35;
          padding-left: 2px;
          padding-right: 2px;
        }
        .cts-sub.wide .cts-sub-label {
          font-size: 11px;
          letter-spacing: -0.005em;
        }
        .cts-sub-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .cts-sub.tall .cts-sub-icon {
          width: 60px;
          height: 60px;
        }
        .cts-phase[data-p="1"] .cts-sub-icon {
          color: #2f7fb4;
        }
        .cts-phase[data-p="2"] .cts-sub-icon {
          color: #2f938c;
        }
        .cts-phase[data-p="3"] .cts-sub-icon {
          color: #468e3f;
        }
        .cts-phase[data-p="4"] .cts-sub-icon {
          color: #a57f12;
        }
        .cts-phase[data-p="5"] .cts-sub-icon {
          color: #c76c20;
        }
        .cts-phase[data-p="6"] .cts-sub-icon {
          color: #b84d34;
        }
        .cts-sub-label {
          font-size: 12.5px;
          font-weight: 700;
          color: #3e4e63;
          line-height: 1.22;
          text-align: center;
          padding: 0 1px;
          min-width: 0;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        .cts-sub.tall .cts-sub-label {
          font-size: 14px;
        }
        .cts-mini-arrow {
          flex-shrink: 0;
          align-self: center;
          color: #bfc8d2;
          display: grid;
          place-items: center;
          width: 11px;
        }
        .cts-mini-arrow svg {
          width: 11px;
          height: 11px;
        }
        .cts-chevron {
          flex: 0 0 24px;
          display: grid;
          place-items: center;
          align-self: center;
          color: rgba(62, 78, 99, 0.45);
          opacity: 0;
          transform: translateX(-6px);
          transition:
            opacity 0.5s,
            transform 0.5s,
            color 0.3s,
            filter 0.3s;
          position: relative;
          z-index: 2;
        }
        .cts-chevron.in {
          opacity: 1;
          transform: translateX(0);
        }
        .cts-chevron svg {
          width: 24px;
          height: 24px;
        }
        .cts-chevron.pulsing {
          color: #3e4e63;
          filter: drop-shadow(0 0 6px rgba(62, 78, 99, 0.35));
        }
        .cts-phase.energized {
          box-shadow:
            0 0 0 1px var(--cts-energy-color, rgba(91, 175, 224, 0.55)),
            0 0 24px var(--cts-energy-color, rgba(91, 175, 224, 0.35)),
            0 8px 28px rgba(16, 24, 40, 0.14);
          transform: translateY(-4px);
        }
        .cts-phase[data-p="1"].energized {
          --cts-energy-color: rgba(79, 160, 211, 0.5);
        }
        .cts-phase[data-p="2"].energized {
          --cts-energy-color: rgba(77, 190, 184, 0.5);
        }
        .cts-phase[data-p="3"].energized {
          --cts-energy-color: rgba(111, 195, 108, 0.5);
        }
        .cts-phase[data-p="4"].energized {
          --cts-energy-color: rgba(240, 203, 69, 0.5);
        }
        .cts-phase[data-p="5"].energized {
          --cts-energy-color: rgba(242, 161, 80, 0.5);
        }
        .cts-phase[data-p="6"].energized {
          --cts-energy-color: rgba(236, 126, 102, 0.5);
        }
        @media (max-width: 1200px) {
          .cts-phase {
            min-width: 230px;
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
}

function PhaseAndChevron({
  phase,
  showChevronBefore,
}: {
  phase: Phase;
  showChevronBefore: boolean;
}) {
  return (
    <>
      {showChevronBefore && <div className="cts-chevron">{CHEVRON_SVG}</div>}
      <div className="cts-phase" data-p={phase.num}>
        <div
          className={`relative mb-2 rounded-[10px] px-2.5 py-[11px] text-center text-white ${PHASE_HEADER_BG[phase.num]}`}
        >
          <div className="text-[13px] font-bold leading-[1.2] opacity-90">
            Phase {phase.num}:
          </div>
          <div className="mt-0.5 text-lg font-extrabold leading-[1.2]">
            {phase.name}
          </div>
        </div>
        <div className="cts-phase-body">
          {phase.rows.map((row, rowIdx) => (
            <div key={rowIdx} className="cts-sub-row">
              {row.map((sub, subIdx) => (
                <SubItem
                  key={subIdx}
                  sub={sub}
                  withArrowAfter={subIdx < row.length - 1}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function SubItem({
  sub,
  withArrowAfter,
}: {
  sub: Sub;
  withArrowAfter: boolean;
}) {
  return (
    <>
      <div
        className={`cts-sub${sub.tall ? " tall" : ""}${sub.wide ? " wide" : ""}`}
      >
        <div className="cts-sub-icon">{sub.icon}</div>
        <div className="cts-sub-label">{sub.label}</div>
      </div>
      {withArrowAfter && <div className="cts-mini-arrow">{ARROW_SVG}</div>}
    </>
  );
}
