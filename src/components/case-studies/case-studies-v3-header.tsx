"use client";

import { useEffect, useRef, useState } from "react";
import { CaseStudyCarousel } from "@/components/case-study-carousel";
import { MONO } from "@/components/case-studies/case-study-v2-shared";
import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

type HeaderProps = Pick<
  FullProductDevelopmentCaseStudy,
  "title" | "subtitle" | "metaTags" | "ribbonStats" | "images" | "enlargedImages"
>;

export function CaseStudyV3Header({
  title,
  subtitle,
  metaTags,
  ribbonStats,
  images,
  enlargedImages,
}: HeaderProps) {
  const [ribbonLit, setRibbonLit] = useState(false);
  const ribbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ribbon = ribbonRef.current;
    if (!ribbon) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRibbonLit(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(ribbon);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative bg-[#f5f7fa] text-foreground overflow-hidden pt-[6rem] px-6 pb-[3.4rem]">
      <div className="relative max-w-[1200px] mx-auto grid grid-cols-[1.18fr_0.82fr] gap-[2.8rem] items-stretch max-[920px]:grid-cols-1 max-[920px]:gap-8 max-[920px]:items-start">
        <div className="min-w-0 flex flex-col justify-start">
          <CaseStudyCarousel
            images={images}
            title={title}
            enlargedImages={enlargedImages}
          />
        </div>

        <div className="min-w-0 flex flex-col">
          <div
            className={`${MONO} text-xs tracking-[0.34em] uppercase text-red-500 font-medium`}
          >
            CASE STUDY
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground my-[0.6rem] font-medium tracking-[0.005em] leading-[1.1]">
            {title}
          </h1>
          {subtitle ? (
            <div className="text-foreground text-lg md:text-xl font-light max-w-[46ch]">
              {subtitle}
            </div>
          ) : null}
          <div
            className={`${MONO} text-xs tracking-[0.12em] text-foreground mt-[1.3rem] flex flex-wrap gap-y-[0.4rem] gap-x-[1.1rem]`}
          >
            {metaTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex gap-2 items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-[1px] before:inline-block"
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            ref={ribbonRef}
            className={`relative grid grid-cols-2 border border-[#063458] rounded-lg overflow-hidden bg-[#04243d] mt-[1.4rem] transition-[opacity,transform] duration-700 ease-[ease] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
              ribbonLit
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            {ribbonStats.map((stat, index) => {
              const hasRight = index % 2 === 0;
              const hasBottom = index < 2;
              return (
                <div
                  key={stat.label}
                  className={`relative overflow-hidden py-[1.1rem] px-[1.2rem] border-[#063458] ${
                    hasRight ? "border-r" : ""
                  } ${hasBottom ? "border-b" : ""}`}
                >
                  <div className="text-xl text-white font-normal">
                    {stat.value}
                  </div>
                  <div
                    className={`${MONO} text-xs tracking-[0.14em] uppercase text-[#9bc0e9] mt-[0.3rem]`}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
