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
  title = "Day 1 Thinking For",
  titleHighlight = "Real‑World Deployment",
  description,
  insights,
  calloutTitle,
  calloutDescription,
}: DayOneThinkingSectionProps) {
  return (
    <section
      className="bg-white px-16 py-24 max-[1100px]:px-8 max-[900px]:px-6 max-[900px]:py-16 max-[640px]:px-5"
      id="day-one-thinking"
      aria-label="Day-1 thinking for real-world deployment"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto mb-8 flex max-w-[880px] flex-col items-center text-center">
          <h2 className="mb-4 text-center text-3xl font-light tracking-tight md:text-5xl">
            {title} <span className="text-red-500">{titleHighlight}</span>
          </h2>
          <p className="m-0 mx-auto w-full max-w-[1100px] text-justify text-[15px] leading-[1.6] text-foreground [text-align-last:center]">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3.5 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="relative overflow-hidden rounded-[14px] border border-[#e3e8ef] bg-white p-[18px] shadow-[0_6px_22px_rgba(10,25,41,0.07)] transition-[transform,box-shadow,border-color] duration-150 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-red-500 before:to-red-600 before:content-[''] hover:-translate-y-[3px] hover:border-red-500 hover:shadow-[0_12px_30px_rgba(239,68,68,0.12)]"
            >
              <div className="mb-2 flex flex-row flex-nowrap items-center gap-3">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-red-500 [&_svg]:h-8 [&_svg]:w-8">
                  {insight.icon}
                </div>
                <h3 className="m-0 min-w-0 flex-auto text-[15px] !font-medium leading-[1.3]">
                  {insight.title}
                </h3>
              </div>
              <p className="m-0 text-left text-[13.5px] leading-[1.45] text-foreground">
                {insight.description}
              </p>
            </article>
          ))}
        </div>

        <div className="relative mt-[18px] overflow-hidden rounded-[14px] border border-[#e3e8ef] bg-white px-[30px] py-[26px] shadow-[0_6px_22px_rgba(10,25,41,0.07)] transition-[transform,box-shadow,border-color] duration-150 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-red-500 before:to-red-600 before:content-[''] hover:-translate-y-[3px] hover:border-red-500 hover:shadow-[0_12px_30px_rgba(239,68,68,0.12)]">
          <div className="mb-2 flex flex-row flex-nowrap items-center gap-3.5">
            <div className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-red-500/10 text-red-500 [&_svg]:h-7 [&_svg]:w-7">
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
            <h3 className="m-0 min-w-0 flex-auto text-[15px] !font-medium leading-[1.3]">
              {calloutTitle}
            </h3>
          </div>
          <p className="m-0 text-center text-[14.5px] leading-[1.55] text-foreground">
            {calloutDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
