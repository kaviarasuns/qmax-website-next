"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  RelatedCaseStudiesCarousel,
  type RelatedCaseStudy,
} from "@/components/services-cmp/RelatedCaseStudiesCarousel";

export type {
  RelatedCaseStudy,
  RelatedCaseStudyImage,
} from "@/components/services-cmp/RelatedCaseStudiesCarousel";

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
  const [isInView, setIsInView] = useState(false);
  const active = industries[activeIdx];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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
            <h3 className="m-0 mb-4 text-2xl font-bold ">{active.title}</h3>
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

          <RelatedCaseStudiesCarousel
            caseStudies={active.relatedCaseStudies}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}
