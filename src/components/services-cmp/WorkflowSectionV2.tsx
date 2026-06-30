"use client";

import { useRef, useEffect, useState } from "react";
import { MONO } from "@/components/case-studies/case-study-v2-shared";

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  points?: string[];
}

interface WorkflowSectionProps {
  steps: WorkflowStep[];
  title?: string;
  titleHighlight?: string;
}

export function WorkflowSectionV2({
  steps,
  title = "Our Custom Hardware",
  titleHighlight = "Design Approach",
}: WorkflowSectionProps) {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [stepVisible, setStepVisible] = useState<boolean[]>(() =>
    steps.map(() => false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = stepRefs.current.indexOf(
            entry.target as HTMLDivElement,
          );
          if (index >= 0) {
            setStepVisible((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.15 },
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white px-6 py-16 min-[900px]:px-16 min-[900px]:py-24">
      <div className="mx-auto w-full max-w-[720px]">
        <div className="mb-[1.2rem] text-center">
          <h2 className="text-2xl md:text-3xl text-foreground font-light tracking-[0.03em] leading-[1.15] m-0">
            {title}{" "}
            <span className="text-red-500">{titleHighlight}</span>
          </h2>
        </div>

        <div className="mt-[1.2rem] grid relative before:content-[''] before:absolute before:left-[22px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e3e8ee]">
          {steps.map((step, index) => {
            const visible = stepVisible[index];
            return (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`relative pt-2 pb-[1.4rem] pl-[3.6rem] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span
                  className={`${MONO} absolute left-0 top-0 w-[46px] h-[46px] rounded-full bg-white border-2 flex items-center justify-center text-sm font-semibold z-[2] transition-all duration-[400ms] motion-reduce:transition-none ${
                    visible
                      ? "border-red-500 text-red-500 shadow-[0_0_0_4px_#e8f1fb]"
                      : "border-[#ced6e0] text-[#0a548f]"
                  }`}
                >
                  {String(step.number).padStart(2, "0")}
                </span>
                <h4 className="text-base text-foreground font-medium tracking-[0.01em] leading-[1.15] mb-1">
                  {step.title}
                </h4>
                <p className="text-base m-0 max-w-[78ch] text-foreground leading-[1.6]">
                  {step.description}
                </p>
                {step.points && step.points.length > 0 ? (
                  <ul className="mt-3 max-w-[78ch] space-y-2">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-base text-foreground leading-[1.6]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
