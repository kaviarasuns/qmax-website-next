import Link from "next/link";

import CaseStudyCard from "@/components/CaseStudyCard";
import type { ServiceCaseStudy } from "@/data/service-case-studies";
import { cn } from "@/lib/utils";

interface ServiceCaseStudiesSectionProps {
  title?: string;
  eyebrow?: string;
  studies: ServiceCaseStudy[];
  moreHref?: string;
  moreLabel?: string;
  className?: string;
  /** Omit top border when stacked flush after FAQSection (same background) */
  hideTopBorder?: boolean;
}

export default function ServiceCaseStudiesSection({
  title = "Case Studies",
  // eyebrow = "Selected Work",
  studies,
  moreHref = "/case-studies",
  moreLabel = "More Case Studies",
  className,
  hideTopBorder,
}: ServiceCaseStudiesSectionProps) {
  const words = title.trim().split(/\s+/);
  const highlight = words.pop() ?? "";
  const leading = words.join(" ");

  return (
    <section
      className={cn(
        "overflow-hidden py-24",
        hideTopBorder
          ? "bg-[#fcfcfc]"
          : "bg-[#fcfcfc] border-t border-zinc-200",
        className,
        hideTopBorder && "border-t-0 dark:border-t-0",
      )}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-8">
        <div className="mb-12 pb-6">
          <div className="relative flex flex-col items-center gap-6 md:block">
            <div className="w-full text-center">
              {/* <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.38em] text-[#F33117]">
                {eyebrow}
              </span> */}
              <h2 className="text-center text-3xl font-light tracking-tight md:text-5xl">
                {leading ? `${leading} ` : null}
                <span className="text-red-500">{highlight}</span>
              </h2>
            </div>
            <Link
              href={moreHref}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-zinc-300 bg-white px-7 py-3 text-xs font-black uppercase tracking-[0.24em] text-zinc-800 transition-all hover:border-[#F33117] hover:text-[#F33117] md:absolute md:bottom-0 md:right-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            >
              {moreLabel}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {studies.map((study, index) => (
            <CaseStudyCard
              key={`${study.link}-${index}`}
              title={study.title}
              image={study.image}
              link={study.link}
              category={study.category}
              summary={study.summary}
              imageRotation={study.imageRotation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
