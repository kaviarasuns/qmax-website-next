"use client";

import type { ReactNode } from "react";

export type DayOneInsight = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type DayOneThinkingSectionProps = {
  title?: string;
  titleHighlight?: string;
  description: ReactNode;
  insights: DayOneInsight[];
  calloutTitle: string;
  calloutDescription: string;
};

export function DayOneThinkingSection({
  title = "Day‑1 Thinking for",
  titleHighlight = "Real‑World Deployment",
  description,
  insights,
  calloutTitle,
  calloutDescription,
}: DayOneThinkingSectionProps) {
  return (
    <section
      className="fw-d1-thinking"
      id="day-one-thinking"
      aria-label="Day-1 thinking for real-world deployment"
    >
      <div className="fw-d1-container">
        <div className="fw-d1-section-head">
          <h2>
            {title} <span className="fw-d1-accent">{titleHighlight}</span>
          </h2>
          <p>{description}</p>
        </div>

        <div className="fw-d1-grid">
          {insights.map((insight) => (
            <article key={insight.title} className="fw-d1-card">
              <div className="fw-d1-card-head">
                <div className="fw-d1-card-icon">{insight.icon}</div>
                <h3 className="!font-medium">{insight.title}</h3>
              </div>
              <p>{insight.description}</p>
            </article>
          ))}
        </div>

        <div className="fw-d1-more">
          <div className="fw-d1-more-head">
            <div className="fw-d1-more-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="12" y1="8" x2="12" y2="16" />
              </svg>
            </div>
            <h3 className="!font-medium">{calloutTitle}</h3>
          </div>
          <p>{calloutDescription}</p>
        </div>
      </div>

      <style jsx>{`
        .fw-d1-thinking {
          --qmax-red-500: #e63329;
          --qmax-red-600: #c72a21;
          background: #ffffff;
          padding: 96px 64px;
        }

        .fw-d1-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .fw-d1-section-head {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 880px;
          margin: 0 auto 32px;
          text-align: center;
        }

        .fw-d1-section-head h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 300;
          letter-spacing: 1.2px;
          color: #000;
          margin: 0 0 16px;
          line-height: 1.15;
        }

        .fw-d1-accent {
          color: var(--qmax-red-500);
        }

        .fw-d1-section-head p {
          font-size: 15px;
          color: #5a6878;
          line-height: 1.6;
          margin: 0;
        }

        .fw-d1-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .fw-d1-card {
          --ic-acc: #e63329;
          --ic-acc-2: #c72a21;
          background: #fff;
          border: 1px solid #e3e8ef;
          border-radius: 14px;
          padding: 18px;
          box-shadow: 0 6px 22px rgba(10, 25, 41, 0.07);
          position: relative;
          overflow: hidden;
          transition:
            transform 0.15s,
            box-shadow 0.15s,
            border-color 0.15s;
        }

        .fw-d1-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--ic-acc), var(--ic-acc-2));
        }

        .fw-d1-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(230, 51, 41, 0.12);
          border-color: var(--qmax-red-500);
        }

        .fw-d1-card-head {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .fw-d1-card-icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #e63329;
        }

        .fw-d1-card-icon :global(svg) {
          width: 32px;
          height: 32px;
          color: #e63329;
        }

        .fw-d1-card-icon :global(svg [stroke]:not([stroke="none"])) {
          stroke: #e63329;
        }

        .fw-d1-card-icon :global(svg [fill]:not([fill="none"])) {
          fill: #e63329;
        }

        .fw-d1-card h3 {
          font-size: 15px;
          font-weight: 600;
          color: #0a1929;
          margin: 0;
          line-height: 1.3;
          min-width: 0;
          flex: 1 1 auto;
        }

        .fw-d1-card p {
          font-size: 13.5px;
          color: #5a6878;
          margin: 0;
          line-height: 1.45;
        }

        .fw-d1-more {
          margin-top: 18px;
          background: #fff;
          border: 1px solid #e3e8ef;
          border-radius: 14px;
          padding: 26px 30px;
          box-shadow: 0 6px 22px rgba(10, 25, 41, 0.07);
          position: relative;
          overflow: hidden;
          transition:
            transform 0.15s,
            box-shadow 0.15s,
            border-color 0.15s;
        }

        .fw-d1-more-head {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          gap: 14px;
          margin-bottom: 8px;
        }

        .fw-d1-more::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #e63329, #c72a21);
        }

        .fw-d1-more:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(230, 51, 41, 0.12);
          border-color: #e63329;
        }

        .fw-d1-more-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          flex-shrink: 0;
          background: rgba(230, 51, 41, 0.1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #e63329;
        }

        .fw-d1-more-icon :global(svg) {
          width: 28px;
          height: 28px;
          stroke: #e63329;
          fill: none;
        }

        .fw-d1-more-head h3 {
          font-size: 15px;
          font-weight: 600;
          color: #0a1929;
          margin: 0;
          line-height: 1.3;
          min-width: 0;
          flex: 1 1 auto;
        }

        .fw-d1-more > p {
          color: #5a6878;
          margin: 0;
          font-size: 14.5px;
          line-height: 1.55;
        }

        @media (max-width: 1100px) {
          .fw-d1-thinking {
            padding: 64px 32px;
          }

          .fw-d1-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .fw-d1-thinking {
            padding: 48px 20px;
          }

          .fw-d1-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
