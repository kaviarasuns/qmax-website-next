import Image from "next/image";
import React from "react";
import { CaseStudyCardProps } from "./CaseStudyCard";

export const EmbeddedCaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  image,
  link,
  summary,
  specs,
  stats,
}) => {
  return (
    <div
      className="group block h-full rounded-2xl"
    >
      <article className="relative h-[400px] flex flex-col bg-white rounded-2xl border border-zinc-200/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-[box-shadow,border-color] duration-500 motion-reduce:transition-none hover:shadow-[0_20px_50px_-16px_rgba(243,49,23,0.10),0_8px_20px_-8px_rgba(0,0,0,0.06)] hover:border-zinc-300/80">

        {/* Image — collapses on hover */}
        <div className="relative flex-shrink-0 w-full overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none max-h-[220px] opacity-100 group-hover:max-h-0 group-hover:opacity-0">
          <div className="relative w-full h-[220px] bg-gradient-to-br from-zinc-50 via-zinc-100/60 to-zinc-50">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-7 transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Bottom fade into content */}
            <div
              className="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
              style={{ background: "linear-gradient(to top, white, transparent)" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 flex flex-col min-h-0 min-w-0 px-5 pb-5 pt-3.5">
          <h3
            className="text-[17px] font-bold text-zinc-900 leading-snug transition-colors duration-300 motion-reduce:transition-none group-hover:text-brand-red"
            style={{ textWrap: "balance" }}
          >
            {title}
          </h3>

          {summary && (
            <p className="text-[13.5px] text-zinc-500 leading-[1.6] mt-2 line-clamp-2 transition-colors duration-300 motion-reduce:transition-none group-hover:line-clamp-4 group-hover:text-zinc-600">
              {summary}
            </p>
          )}

          {/* Specs — revealed on hover */}
          {specs && specs.length > 0 && (
            <div className="opacity-0 max-h-0 overflow-hidden transition-[opacity,max-height,margin] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] motion-reduce:transition-none group-hover:opacity-100 group-hover:max-h-[200px] group-hover:mt-3.5">
              <div className="pt-0.5">
                {specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-zinc-100/80 last:border-b-0"
                  >
                    <span className="text-[10.5px] uppercase tracking-[0.1em] text-zinc-400 font-medium">
                      {spec.label}
                    </span>
                    <span className="text-[13px] text-zinc-800 font-semibold tabular-nums">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pushes "Learn More" to the bottom */}
          <div className="flex-1" />

          {/* Learn More — bottom-right, subtle text link */}
          <div className="flex justify-end pt-2">
            <a
              href={link}
              className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-zinc-300 opacity-0 translate-y-1.5 transition-[opacity,transform,color] duration-500 delay-100 motion-reduce:transition-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:ring-offset-2 rounded"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Accent line — sweeps in from left on hover */}
        <div
          className="absolute bottom-0 inset-x-0 h-[2px] bg-brand-red origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none group-hover:scale-x-100"
          aria-hidden="true"
        />

      </article>
    </div>
  );
};

export default EmbeddedCaseStudyCard;
