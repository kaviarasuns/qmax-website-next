"use client";

import { useState } from "react";

interface Capability {
  id: string;
  tabLabel: string;
  learnMoreHref: string;
  tabIcon: React.ReactNode;
  headline: string;
  intro: string;
  bullets: { title: string; items: string[] }[];
}

interface CapabilitiesSectionProps {
  capabilities: Capability[];
}

export function CapabilitiesSection({
  capabilities,
}: CapabilitiesSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <section className="bg-white px-16 py-24 max-[900px]:px-6 max-[900px]:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="m-0 p-0">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-center">
            Core Engineering{" "}
            <span className="text-brand-500">Capabilities</span>
          </h2>
          {/* <p>We deliver high-performance designs validated by decades of experience. Our HW engineering stack covers:</p> */}
        </div>
        {/* Tabs */}
        <div
          className="my-14 mb-16 flex gap-0 border-b border-gray-200 max-[900px]:gap-1"
          role="tablist"
        >
          {capabilities.map((cap, i) => (
            <button
              key={cap.id}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`text-m font-bold relative flex flex-1 cursor-pointer items-start justify-start gap-3 bg-transparent px-3 py-[18px] text-left text-black transition-colors duration-200 hover:text-red-500 whitespace-normal max-[900px]:gap-2 max-[900px]:px-2 max-[900px]:py-3.5 max-[900px]:text-sm max-[900px]:items-center ${
                activeIdx === i
                  ? "text-red-500 after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-red-500"
                  : ""
              }`}
              onClick={() => setActiveIdx(i)}
            >
              <span className="h-[22px] w-[22px] shrink-0 transition-colors duration-200">
                {cap.tabIcon}
              </span>
              <span className="break-words">{cap.tabLabel}</span>
            </button>
          ))}
        </div>
        {/* Panels */}
        {capabilities.map((cap, i) => (
          <div
            key={cap.id}
            role="tabpanel"
            className={`${activeIdx === i ? "grid" : "hidden"} grid-cols-[1fr_1.4fr] items-start gap-24 max-[900px]:grid-cols-1 max-[900px]:gap-8`}
          >
            <div>
              <h3 className="mb-8 max-w-[480px] text-2xl font-light tracking-wide text-black md:text-3xl">
                {cap.headline}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="inline-block rounded-md border-[1.5px] border-slate-900 bg-transparent px-7 py-[7px] text-slate-900 no-underline transition-colors duration-200 hover:bg-slate-900 hover:text-white hover:no-underline"
                  href={cap.learnMoreHref}
                >
                  Learn more
                </a>
                <a
                  className="inline-block rounded-md bg-[var(--qmax-red-500)] px-7 py-[7px] text-white no-underline transition-colors duration-200 hover:bg-[var(--qmax-red-600)] hover:text-white hover:no-underline"
                  href="/pcb-design/contact"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div>
              <p className="mb-9 text-[#383838]">{cap.intro}</p>
              <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-7">
                {cap.bullets.map((b) => (
                  <div key={b.title}>
                    <h4 className="mb-[18px] text-lg font-light tracking-wide text-[#383838] md:text-xl">
                      {b.title}
                    </h4>
                    <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                      {b.items.map((item) => (
                        <li
                          key={item}
                          className="relative pl-[22px] text-[#383838] before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-red-500"
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
        ))}
      </div>
    </section>
  );
}
