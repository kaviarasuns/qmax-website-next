"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface RelatedCaseStudy {
  title: string;
  image?: string;
  href: string;
  rotation?: number;
}

export interface PCBIndustry {
  id: string;
  label: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  subDescription: string;
  image: string;
  ctaHref?: string;
  relatedCaseStudies: RelatedCaseStudy[];
}

interface PCBIndustriesSectionProps {
  industries: PCBIndustry[];
  ctaLabel?: string;
}

export function PCBIndustriesSection({
  industries,
  ctaLabel = "Learn more",
}: PCBIndustriesSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [caseIdx, setCaseIdx] = useState(0);
  const active = industries[activeIdx];

  useEffect(() => {
    setCaseIdx(0);
  }, [activeIdx]);

  useEffect(() => {
    const cases = active.relatedCaseStudies;
    if (cases.length <= 1) return;

    const interval = setInterval(() => {
      setCaseIdx((prev) => (prev + 1) % cases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [active.relatedCaseStudies]);

  return (
    <section
      className="relative overflow-hidden bg-white px-16 py-20 text-[#1C2A3A] max-[900px]:px-6 max-[900px]:py-16"
      id="pcb-industries-section"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="m-0 text-center text-4xl md:text-5xl font-light tracking-wide text-black">
            PCB Design Across <span className="text-brand-500">Industries</span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          className="mb-10 flex flex-nowrap gap-1.5 overflow-x-auto [justify-content:safe_center]"
          role="tablist"
        >
          {industries.map((ind, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={ind.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIdx(i)}
                className={`inline-flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border px-3 py-2 text-[13px] font-bold transition-colors duration-200 ${
                  isActive
                    ? "border-brand-500 bg-[#fff5f5] text-brand-500"
                    : "border-transparent bg-transparent text-[#2a2a2a] hover:bg-gray-100"
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full ${
                    isActive ? "text-brand-500" : ""
                  }`}
                >
                  {ind.icon}
                </span>
                <span>{ind.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 items-stretch gap-6 max-[900px]:grid-cols-1 max-[900px]:gap-4">
          {/* LEFT — copy + CTA */}
          <div className="flex flex-col gap-3 rounded-2xl bg-[#f8f8f8] p-8">
            <h3 className="m-0 mb-4 text-2xl font-bold tracking-tight text-black">
              {active.title}
            </h3>
            <p className="m-0 mb-4 min-h-[198px] text-[15px] leading-[1.65] text-gray-600">
              {active.description}
            </p>
            <p className="m-0 mb-4 text-[15px] leading-[1.65] text-gray-600">
              {active.subDescription}
            </p>
            <a
              href={active.ctaHref ?? "/pcb-design/contact"}
              className="mt-auto inline-block self-start rounded-full border border-black bg-transparent px-[18px] py-2 text-[12px] font-bold tracking-wide text-black no-underline transition-colors duration-200 hover:border-red-500 hover:bg-red-500 hover:text-white hover:no-underline"
            >
              {ctaLabel}
            </a>
          </div>

          {/* CENTER — image */}
          <div className="relative overflow-hidden rounded-2xl bg-transparent max-[900px]:min-h-[280px]">
            <Image
              key={active.image}
              src={active.image}
              alt={`${active.title} PCB design`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 900px) 100vw, 33vw"
            />
          </div>

          {/* RIGHT — related case studies (auto-scrolling) */}
          <div className="flex flex-col gap-3 rounded-2xl overflow-hidden">
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              {active.relatedCaseStudies.map((cs, i) => (
                <div
                  key={cs.href + i}
                  className="absolute inset-0 transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(${(i - caseIdx) * 100}%)` }}
                >
                  <a
                    href={cs.href}
                    className="flex h-full flex-col overflow-hidden rounded-2xl bg-white text-inherit no-underline shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-[box-shadow] duration-200 hover:no-underline hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
                  >
                    <div className="relative flex flex-1 items-center justify-center bg-[#f0f0f0]">
                      {cs.image ? (
                        <Image
                          src={cs.image}
                          alt={cs.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 33vw"
                          className="object-contain px-12 py-6"
                          style={
                            cs.rotation
                              ? { transform: `rotate(${cs.rotation}deg)` }
                              : undefined
                          }
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-3.5 bg-white px-[18px] pb-4 pt-[18px]">
                      <h5 className="m-0 text-[18px] font-bold leading-tight text-[#0f0f10]">
                        {cs.title}
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                          View Case
                        </span>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#0f0f10]">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            {active.relatedCaseStudies.length > 1 && (
              <div className="flex justify-center gap-1.5 pt-1">
                {active.relatedCaseStudies.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCaseIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === caseIdx
                        ? "w-4 bg-brand-500"
                        : "w-1.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
