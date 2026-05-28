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

export function WorkflowSection({
  steps,
  title = "Our Custom Hardware",
  titleHighlight = "Design Approach",
}: WorkflowSectionProps) {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
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
    <section className="relative bg-white px-6 py-16 min-[900px]:px-16 min-[900px]:py-24">
      <h2 className="mx-auto mb-20 max-w-[1200px] text-center text-4xl font-light tracking-wide md:text-5xl">
        {title}{" "}
        <span className="text-red-500">{titleHighlight}</span>
      </h2>
      <div className="relative mx-auto max-w-[1100px]">
        <div className="absolute bottom-0 left-6 top-0 w-1 bg-red-500 min-[900px]:left-1/2 min-[900px]:-translate-x-1/2" />
        {steps.map((step, i) => {
          const isRight = i % 2 === 0;
          return (
            <div
              key={step.number}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`relative mb-24 flex translate-y-8 items-start opacity-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.4,0,.2,1)] last:mb-0 [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100 ${
                isRight
                  ? "min-[900px]:flex-row"
                  : "min-[900px]:flex-row-reverse"
              }`}
            >
              <div
                className={`flex-1 pl-14 text-left min-[900px]:px-20 ${
                  isRight
                    ? "min-[900px]:pl-0 min-[900px]:text-right"
                    : "min-[900px]:pr-0 min-[900px]:text-left"
                }`}
              >
                <h3 className="mb-4 text-2xl tracking-wide md:text-3xl">
                  {step.title}
                </h3>
                <p className="m-0 text-foreground">{step.description}</p>
              </div>
              <div
                data-budge-target
                className="absolute left-0 z-[2] flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white min-[900px]:relative min-[900px]:left-auto min-[900px]:-mx-6"
                style={{ backgroundColor: "#ef4444" }}
              >
                {step.number}
              </div>
              <div className="hidden flex-1 min-[900px]:block" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
