import Link from "next/link";

import CaseStudyCard from "@/components/CaseStudyCard";
import type { ServiceCaseStudy } from "@/data/service-case-studies";

interface ServiceCaseStudiesSectionProps {
  title?: string;
  eyebrow?: string;
  studies: ServiceCaseStudy[];
  moreHref?: string;
  moreLabel?: string;
  className?: string;
}

export default function ServiceCaseStudiesSection({
  title = "Case Studies.",
  eyebrow = "Selected Work",
  studies,
  moreHref = "/case-studies",
  moreLabel = "More Case Studies",
  className = "bg-[#fcfcfc] border-t border-zinc-200",
}: ServiceCaseStudiesSectionProps) {
  return (
    <section className={`${className} overflow-hidden py-24`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 border-b border-zinc-200/80 pb-6 dark:border-zinc-800/80">
          <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.38em] text-[#F33117]">
            {eyebrow}
          </span>
          <h2 className="text-4xl font-light tracking-tight text-zinc-950 dark:text-zinc-100 md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard
              key={study.link}
              title={study.title}
              image={study.image}
              link={study.link}
              category={study.category}
              summary={study.summary}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={moreHref}
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-7 py-3 text-xs font-black uppercase tracking-[0.24em] text-zinc-800 transition-all hover:border-[#F33117] hover:text-[#F33117] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          >
            {moreLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
