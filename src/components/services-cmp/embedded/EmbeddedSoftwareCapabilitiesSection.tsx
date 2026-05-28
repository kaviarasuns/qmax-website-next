"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { CapabilitiesTabs } from "../CapabilitiesTabs";
import { ConnectedTabPanel } from "../ConnectedTabPanel";

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
  getInTouchHref = "/embedded-design-services/contact",
}: EmbeddedSoftwareCapabilitiesSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (capabilities.length === 0) return null;

  return (
    <>
      <section
        className="px-6 py-16 lg:px-8 lg:py-20"
        id="embedded-software-capabilities"
        aria-label="Embedded software capabilities"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex w-full flex-col items-center text-center">
            <h2 className="mb-6 text-center text-3xl font-light tracking-tight md:text-5xl">
              {title} <span className="text-red-500">{titleHighlight}</span>
            </h2>
            <p className="w-full text-foreground">{description}</p>
          </div>

          <CapabilitiesTabs
            capabilities={capabilities}
            activeIdx={activeIdx}
            onTabClick={setActiveIdx}
            connectedCard
          />
          <ConnectedTabPanel>
            {capabilities.map((cap, index) => {
              const isActive = activeIdx === index;
              const learnMoreHref = cap.learnMoreHref;

              return (
                <div
                  key={cap.id}
                  role="tabpanel"
                  className={
                    isActive ? "block [animation:panelIn_460ms_ease]" : "hidden"
                  }
                >
                  <div className="grid grid-cols-[1fr_1.4fr] items-start gap-24 max-[900px]:grid-cols-1 max-[900px]:gap-8">
                    <div>
                      <h3 className="mb-8 max-w-[480px] text-2xl font-light tracking-wide md:text-3xl">
                        {cap.headline}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        {learnMoreHref ? (
                          <a
                            href={learnMoreHref}
                            className="inline-block rounded-md border-[1.5px] border-slate-900 bg-transparent px-7 py-[7px] text-slate-900 no-underline transition-colors duration-200 hover:bg-slate-900 hover:text-white hover:no-underline"
                          >
                            Learn more
                          </a>
                        ) : null}
                        <a
                          href={getInTouchHref}
                          className="inline-block rounded-md bg-red-500 px-7 py-[7px] text-white no-underline transition-colors duration-200 hover:bg-red-600 hover:text-white hover:no-underline"
                        >
                          Get in Touch
                        </a>
                      </div>
                    </div>

                    <div>
                      <p className="mb-9 text-[#383838]">{cap.intro}</p>
                      <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-7">
                        {cap.bullets.map((group) => (
                          <div key={group.title}>
                            <h4 className="mb-[18px] text-lg font-light tracking-wide md:text-xl">
                              {group.title}
                            </h4>
                            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                              {group.items.map((item) => (
                                <li
                                  key={item}
                                  className="relative pl-[22px] before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-red-500"
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
                </div>
              );
            })}
          </ConnectedTabPanel>
        </div>
      </section>
      <style jsx>{`
        @keyframes panelIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
