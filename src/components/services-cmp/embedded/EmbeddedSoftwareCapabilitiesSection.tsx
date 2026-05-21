"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export type EmbeddedSoftwareCapability = {
  id: string;
  tabLabel: string;
  tabIcon: ReactNode;
  headline: string;
  intro: string;
  learnMoreHref?: string;
  bullets: { title: string; items: string[] }[];
};

export type EmbeddedSoftwareCapabilitiesSectionProps = {
  title?: string;
  titleHighlight?: string;
  description?: string;
  capabilities: EmbeddedSoftwareCapability[];
  getInTouchHref?: string;
};

export function EmbeddedSoftwareCapabilitiesSection({
  title = "Embedded Software Across The Full Stack —",
  titleHighlight = "Bare‑Metal To Server‑Grade",
  description = "Whether you need a single firmware engineer to bring up a sensor node, or a team to deliver OpenBMC, Linux BSP, and a connectivity stack in parallel, we cover the full range — built to strict coding standards and proven on real silicon.",
  capabilities,
  getInTouchHref = "/hardware-development-services/contact",
}: EmbeddedSoftwareCapabilitiesSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (capabilities.length === 0) return null;

  return (
    <section
      className="bg-white px-16 py-24 max-[900px]:px-6 max-[900px]:py-16"
      id="embedded-software-capabilities"
      aria-label="Embedded software capabilities"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 max-[900px]:mb-10">
          <h2 className="mb-4 text-[clamp(32px,4vw,48px)] font-light tracking-[1.2px] text-black">
            {title}{" "}
            <span className="text-brand-500">{titleHighlight}</span>
          </h2>
          <p className="max-w-[800px] text-[15px] leading-6 tracking-[-0.15px] text-gray-600">
            {description}
          </p>
        </div>

        <div
          className="mb-16 mt-14 grid grid-cols-4 border-b border-gray-200 max-[1100px]:grid-cols-[repeat(4,minmax(180px,1fr))] max-[1100px]:overflow-x-auto max-[900px]:gap-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
        >
          {capabilities.map((cap, index) => {
            const isActive = activeIdx === index;

            return (
              <button
                key={cap.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIdx(index)}
                className={`group relative flex cursor-pointer items-center justify-center gap-2.5 px-3 py-4 text-left text-base font-semibold leading-[22px] tracking-[-0.32px] transition-colors duration-200 max-[1100px]:px-2 max-[1100px]:py-3.5 max-[1100px]:text-[15px] max-[900px]:text-sm ${
                  isActive
                    ? "text-brand-500 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-0.5 after:bg-brand-500"
                    : "text-black hover:text-brand-500"
                }`}
              >
                <span
                  className={`h-[22px] w-[22px] shrink-0 transition-colors duration-200 [&>svg]:h-full [&>svg]:w-full ${
                    isActive
                      ? "text-brand-500"
                      : "text-black group-hover:text-brand-500"
                  }`}
                >
                  {cap.tabIcon}
                </span>
                <span>{cap.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {capabilities.map((cap, index) => {
          const isActive = activeIdx === index;
          const learnMoreHref = cap.learnMoreHref ?? getInTouchHref;

          return (
            <div
              key={cap.id}
              role="tabpanel"
              hidden={!isActive}
              className={
                isActive
                  ? "grid animate-in grid-cols-[1fr_1.4fr] items-start gap-24 duration-350 fade-in slide-in-from-bottom-2 max-[900px]:grid-cols-1 max-[900px]:gap-8"
                  : "hidden"
              }
            >
              <div>
                <h3 className="mb-8 max-w-[480px] text-[28px] font-bold leading-9 tracking-[-0.84px] text-black">
                  {cap.headline}
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={learnMoreHref}
                    className="inline-block rounded-md border-[1.5px] border-slate-900 bg-transparent px-7 py-[7px] text-[15px] font-bold leading-[23px] tracking-[-0.3px] text-slate-900 no-underline transition-colors duration-200 hover:bg-slate-900 hover:text-white hover:no-underline"
                  >
                    Learn more
                  </a>
                  <a
                    href={getInTouchHref}
                    className="inline-block rounded-md bg-brand-500 px-7 py-[7px] text-[15px] font-bold leading-[23px] tracking-[-0.3px] text-white no-underline transition-colors duration-200 hover:bg-[#C72A21] hover:text-white hover:no-underline"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-8 text-base font-semibold leading-6 tracking-[-0.32px] text-[#383838]">
                  {cap.intro}
                </p>
                <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-7">
                  {cap.bullets.map((group) => (
                    <div key={group.title}>
                      <h4 className="mb-4 text-[15px] font-semibold leading-[22px] tracking-[-0.3px] text-[#383838]">
                        {group.title}
                      </h4>
                      <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="relative pl-5 text-sm leading-[22px] tracking-[-0.14px] text-[#383838] before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-brand-500"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
