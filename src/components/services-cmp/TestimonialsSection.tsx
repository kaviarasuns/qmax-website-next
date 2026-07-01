"use client";

import { useState } from "react";
import Image from "next/image";
import { getIndustryIcon } from "./getIndustryIcon";

interface Testimonial {
  tab: string;
  logo: React.ReactNode;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarColor: string;
  avatarInitials: string;
  caseTag: string;
  caseTitle: string;
  caseDesc: string;
  caseImage: string;
  caseHref: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <section
      className="bg-white overflow-hidden px-16 py-12 max-[900px]:px-6 max-[900px]:py-16"
      id="testi-section"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-3">
            Customer Success <span className="text-brand-500">Stories</span>
          </h2>
          {/* <p className="mb-10 text-base text-muted-foreground">
              Real outcomes from real engineering teams &mdash; names withheld under NDA.
            </p> */}
        </div>
        <div className="mb-12 flex flex-wrap justify-center gap-x-12 border-b border-gray-200 max-[900px]:flex-nowrap max-[900px]:justify-start max-[900px]:gap-x-6 max-[900px]:overflow-x-auto">
          {testimonials.map((t, i) => (
            <button
              key={t.tab}
              className={`relative -mb-px cursor-pointer border-none bg-transparent px-1 py-3.5 text-base whitespace-nowrap transition-colors max-[900px]:px-[18px] max-[900px]:py-2.5 ${
                activeIdx === i
                  ? "text-[#E63329] after:absolute after:inset-x-0 after:-bottom-px after:h-[3px] after:bg-[#E63329] after:content-['']"
                  : "text-gray-500 hover:text-[#1C2A3A]"
              }`}
              onClick={() => setActiveIdx(i)}
            >
              {t.tab}
            </button>
          ))}
        </div>
        <div className="relative overflow-hidden py-2">
          {testimonials.map((t, i) => (
            <div
              key={t.tab}
              className={`${
                activeIdx === i ? "grid animate-[tFadeIn_0.4s_ease]" : "hidden"
              } grid-cols-2 items-start gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-8`}
            >
              {/* Left: quote */}
              <div className="flex flex-col gap-6 pr-2 max-[900px]:pr-0">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#fff5f4] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#E63329]">
                  {getIndustryIcon(t.caseTag)}
                  {t.caseTag}
                </div>
                <p className="text-lg md:text-xl !font-medium m-0 border-l-[3px] border-[#E63329] pl-5 text-lg md:text-xl font-medium leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-4 border-t border-gray-200 pt-5">
                  <div
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full font-semibold text-white"
                    style={{ background: t.avatarColor }}
                  >
                    {t.avatarInitials}
                  </div>
                  <div className="flex flex-grow flex-col gap-0.5">
                    <p className="m-0 font-semibold text-[#1a1a1a]">
                      {t.authorName}
                    </p>
                    <p className="m-0 text-sm text-muted-foreground">{t.authorRole}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded border border-gray-200 bg-gray-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                    NDA Protected
                  </div>
                </div>
              </div>
              {/* Right: case card */}
              <div className="flex h-full flex-col gap-3 rounded-lg border border-gray-200 bg-[#fafafa] p-7 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_8px_20px_0_rgba(0,92,136,0.12)]">
                {/* <span className="text-xs font-bold uppercase tracking-[2px] text-[#E63329]">
                    {t.caseTag}
                  </span> */}
                <h3 className="!font-semibold text-xl md:text-2xl leading-tight tracking-wide">
                  {t.caseTitle}
                </h3>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "21/9",
                    borderRadius: 8,
                    overflow: "hidden",
                    marginTop: 4,
                    background: "#f3f4f6",
                  }}
                >
                  <Image
                    src={t.caseImage}
                    alt={t.caseTitle}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <p className="m-0 text-sm leading-relaxed text-muted-foreground">
                  {t.caseDesc}
                </p>
                <a
                  className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-md bg-[#E63329] px-3 py-1.5 text-xs font-semibold text-white no-underline transition-colors hover:bg-[#C72A21] hover:text-white hover:no-underline"
                  href={t.caseHref}
                >
                  View Case Study
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: 12, height: 12 }}
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
