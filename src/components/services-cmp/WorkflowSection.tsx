"use client";

import { useRef, useEffect } from "react";

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}

interface WorkflowSectionProps {
  steps: WorkflowStep[];
  title?: string;
  titleHighlight?: string;
}

export function WorkflowSection({ steps, title = "Our Custom Hardware", titleHighlight = "Design Approach" }: WorkflowSectionProps) {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 },
    );
    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="workflow">
      <h2 className="workflow-title text-4xl md:text-5xl font-light tracking-wide text-center">
        {title}{" "}
        <span className="text-brand-500"> {titleHighlight}</span>
      </h2>
      <div className="timeline-wrap">
        <div className="timeline-line" />
        {steps.map((step, i) => {
          const isRight = i % 2 === 0;
          return (
            <div
              key={step.number}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`step ${isRight ? "right" : "left"}`}
            >
              <div className="step-content">
                <h3 className="text-2xl md:text-3xl font-base tracking-wide">
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
              <div className="step-badge">{step.number}</div>
              <div className="step-spacer" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
