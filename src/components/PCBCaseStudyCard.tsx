import React from "react";
import Image from "next/image";
import { CaseStudyCardProps } from "./CaseStudyCard";

const PCBCaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  image,
  link,
  category,
}) => {
  return (
    <div className={`group relative ${category}`}>
      <a href={link} className="block" aria-label={title}>
        <article className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_14px_40px_-30px_rgba(15,23,42,0.45)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,0.5)]">
          <div className="relative h-[70%] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          <div className="flex h-[30%] flex-col justify-between bg-white px-5 py-4">
            <h3 className="text-base md:text-lg font-semibold text-zinc-950 leading-tight">
              {title}
            </h3>

            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                View Case
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-all duration-300 group-hover:border-[#F33117] group-hover:text-[#F33117] group-hover:translate-x-0.5">
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
  );
};

export default PCBCaseStudyCard;
