"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
  headingPrefix?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function PCBIndustriesSection({
  industries,
  headingPrefix = "PCB Design",
  ctaLabel = "Learn more",
  ctaHref = "/pcb-design-services/contact",
}: PCBIndustriesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [caseIdx, setCaseIdx] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const active = industries[activeIdx];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsInView(visible);
        if (!visible) setCaseIdx(0);
      },
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setCaseIdx(0);
  }, [activeIdx]);

  useEffect(() => {
    const cases = active.relatedCaseStudies;
    if (!isInView || cases.length <= 1) return;

    const interval = setInterval(() => {
      setCaseIdx((prev) => (prev + 1) % cases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, active.relatedCaseStudies]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-16 py-24 max-[900px]:px-6 max-[900px]:py-16"
      id="pcb-industries-section"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="m-0 text-center text-4xl md:text-5xl font-light tracking-wide">
            {headingPrefix} Across{" "}
            <span className="text-red-500">Industries</span>
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
                    ? "border-red-500 bg-[#fff5f5] text-red-500"
                    : "border-transparent bg-transparent text-foreground hover:bg-gray-100"
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-full [&>svg]:w-full ${
                    isActive ? "text-red-500" : ""
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
          {/* LEFT - copy + CTA */}
          <div className="flex flex-col gap-3 rounded-2xl bg-qmax-grey p-8">
            <h3 className="m-0 mb-4 text-2xl font-bold tracking-tight">
              {active.title}
            </h3>
            <p className="m-0 mb-4 text-[15px] leading-[1.65]">
              {active.description}
            </p>
            <p className="m-0 mb-4 text-[15px] leading-[1.65]">
              {active.subDescription}
            </p>
            <a
              href={active.ctaHref ?? ctaHref}
              className="mt-auto inline-block self-start rounded-full border border-foreground bg-transparent px-[18px] py-2 text-[12px] font-bold tracking-wide text-foreground no-underline transition-colors duration-200 hover:border-red-500 hover:bg-red-500 hover:text-white hover:no-underline"
            >
              {ctaLabel}
            </a>
          </div>

          {/* CENTER - image */}
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

          {/* RIGHT - related case studies (auto-scrolling) */}
          <div className="flex flex-col gap-3 rounded-2xl">
            <div className="relative flex-1 overflow-x-clip [overflow-clip-margin:2rem]">
              {active.relatedCaseStudies.map((cs, i) => (
                <div
                  key={cs.href + i}
                  className="absolute inset-0 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(calc(${i - caseIdx} * (100% + 4rem)))`,
                  }}
                >
                  <div className="group relative h-full">
                    <a
                      href={cs.href}
                      aria-label={cs.title}
                      className="block h-full rounded-2xl text-inherit no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F33117]/60 focus-visible:ring-offset-2 hover:no-underline"
                    >
                      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_14px_40px_-30px_rgba(15,23,42,0.45)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,0.5)]">
                        <div className="relative aspect-[3/2.8] w-full overflow-hidden bg-qmax-dark-grey">
                          {cs.image ? (
                            <div
                              className="absolute inset-0"
                              style={
                                cs.rotation
                                  ? { transform: `rotate(${cs.rotation}deg)` }
                                  : undefined
                              }
                            >
                              <Image
                                src={cs.image}
                                alt={cs.title}
                                fill
                                sizes="(max-width: 900px) 100vw, 33vw"
                                className="object-contain px-8 py-5 transition-transform duration-700 group-hover:scale-[1.03]"
                              />
                            </div>
                          ) : null}
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-3 bg-white px-5 py-4">
                          <h5 className="m-0 text-base font-semibold leading-tight tracking-wide md:text-lg">
                            {cs.title}
                          </h5>
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                              View Case
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-red-500 group-hover:text-red-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M7 17 17 7" />
                                <path d="M9 7h8v8" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-zinc-200/70 transition-colors duration-300 group-hover:ring-zinc-300" />
                      </article>
                    </a>
                  </div>
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
