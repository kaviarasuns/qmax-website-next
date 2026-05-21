"use client";

import { useEffect, useState } from "react";

export type FirmwareLifecyclePhase = {
  phase: number;
  title: string;
  items: string[];
};

export type FirmwareLifecycleSectionProps = {
  title?: string;
  subtitleHighlight?: string;
  phases: FirmwareLifecyclePhase[];
};

export function FirmwareLifecycleSection({
  title = "Firmware Lifecycle",
  subtitleHighlight = "requirement to production",
  phases,
}: FirmwareLifecycleSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (phases.length === 0) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % phases.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [phases.length]);

  return (
    <section className="fw-lifecycle" id="lifecycle" aria-label="Firmware lifecycle">
      <div className="fw-lifecycle-inner">
        <div className="fw-lifecycle-head">
          <h2>{title}</h2>
          <p className="fw-lifecycle-head-sub">
            From <span className="fw-lifecycle-accent">{subtitleHighlight}</span>
          </p>
        </div>

        <div className="fw-lifecycle-grid">
          <span className="fw-energy-track" aria-hidden="true" />
          <span className="fw-energy-trail" aria-hidden="true" />
          <span className="fw-energy-particle" aria-hidden="true" />

          {phases.map((phase, index) => (
            <article
              key={phase.phase}
              className={`fw-lc-card${activeIndex === index ? " fw-lc-active" : ""}`}
              data-p={phase.phase}
            >
              <span className="fw-lc-card-dot" aria-hidden="true" />
              <span className="fw-lc-card-num">Phase {phase.phase}</span>
              <h3 className="fw-lc-card-title">{phase.title}</h3>
              <ul className="fw-lc-card-list">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fw-lifecycle {
          --qmax-blue-200: #9bc0e9;
          --qmax-blue-300: #5e97d5;
          --qmax-blue-400: #3d7fbf;
          --qmax-blue-500: #0b5fa5;
          --qmax-blue-600: #0a548f;
          --qmax-blue-700: #084a7d;
          --qmax-red-500: #e63329;
          --qmax-ink: #1c2a3a;
          --ease-std: cubic-bezier(0.4, 0, 0.2, 1);
          background: #ffffff;
          padding: 96px clamp(24px, 5vw, 64px);
          color: var(--qmax-ink);
          position: relative;
          overflow: hidden;
        }

        .fw-lifecycle-inner {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .fw-lifecycle-head {
          max-width: none;
          margin: 0 auto 56px;
          text-align: center;
        }

        .fw-lifecycle-head h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 300;
          letter-spacing: 1.2px;
          color: var(--qmax-ink);
          margin: 0 0 12px;
          line-height: 1.15;
          text-align: center;
          text-transform: capitalize;
        }

        .fw-lifecycle-head-sub {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 300;
          letter-spacing: 1.2px;
          color: var(--qmax-ink);
          margin: 0;
          line-height: 1.15;
          text-align: center;
          text-transform: capitalize;
        }

        .fw-lifecycle-accent {
          color: var(--qmax-red-500);
        }

        .fw-lifecycle-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 14px;
          position: relative;
        }

        .fw-energy-track {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          transform: translateY(-50%);
          background: linear-gradient(
            to right,
            rgba(155, 192, 233, 0) 0%,
            var(--qmax-blue-200) 6%,
            var(--qmax-blue-300) 22%,
            var(--qmax-blue-400) 38%,
            var(--qmax-blue-500) 54%,
            var(--qmax-blue-600) 70%,
            var(--qmax-blue-700) 84%,
            var(--qmax-red-500) 96%,
            rgba(230, 51, 41, 0) 100%
          );
          box-shadow: 0 0 12px rgba(11, 95, 165, 0.35);
          z-index: 0;
          pointer-events: none;
        }

        .fw-energy-particle {
          position: absolute;
          top: 50%;
          left: 2%;
          width: 16px;
          height: 16px;
          margin: -8px 0 0 -8px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow:
            0 0 8px rgba(255, 255, 255, 0.95),
            0 0 20px rgba(94, 151, 213, 0.85),
            0 0 38px rgba(11, 95, 165, 0.55);
          z-index: 0;
          pointer-events: none;
          animation: fw-energy-travel 16s linear infinite;
        }

        .fw-energy-trail {
          position: absolute;
          top: 50%;
          left: 2%;
          width: 90px;
          height: 6px;
          margin: -3px 0 0 -90px;
          border-radius: 4px;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(94, 151, 213, 0) 10%,
            rgba(94, 151, 213, 0.45) 60%,
            rgba(255, 255, 255, 0.85) 100%
          );
          filter: blur(4px);
          z-index: 0;
          pointer-events: none;
          animation: fw-energy-travel 16s linear infinite;
        }

        @keyframes fw-energy-travel {
          0% {
            left: 2%;
          }
          100% {
            left: 98%;
          }
        }

        .fw-lc-card {
          --accent: var(--qmax-red-500);
          position: relative;
          z-index: 1;
          background: #0f172a;
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 14px;
          padding: 22px 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
          transition:
            border-color 0.3s var(--ease-std),
            transform 0.3s var(--ease-std),
            box-shadow 0.3s var(--ease-std);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .fw-lc-card:hover,
        .fw-lc-card.fw-lc-active {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow:
            0 12px 32px -8px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.04),
            0 0 24px -4px color-mix(in oklab, var(--accent) 30%, transparent);
        }

        .fw-lc-card-dot {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent);
        }

        .fw-lc-card-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: var(--accent);
          text-transform: uppercase;
        }

        .fw-lc-card-title {
          font-size: 19px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #fff;
          margin: 6px 0 0;
          line-height: 1.2;
        }

        .fw-lc-card-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .fw-lc-card-list li {
          position: relative;
          padding-left: 18px;
          font-size: 14px;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.82);
        }

        .fw-lc-card-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 7px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
        }

        @media (max-width: 1180px) {
          .fw-lifecycle-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .fw-lifecycle-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .fw-lifecycle-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .fw-lifecycle {
            padding: 64px 20px;
          }
        }

        @media (max-width: 420px) {
          .fw-lifecycle-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fw-energy-particle,
          .fw-energy-trail {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
