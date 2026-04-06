import Image from "next/image";
import React from "react";
import { CaseStudyCardProps } from "./CaseStudyCard";

export const EmbeddedCaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  image,
  link,
}) => {
  return (
    <div className="group relative w-full h-full min-h-[360px] md:min-h-[420px] overflow-hidden rounded-3xl bg-white border border-zinc-200/80 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.45)] transition-all duration-500 hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,0.5)] isolation-auto">
      <Image
        src={image}
        alt={title}
        fill
        className="object-contain p-6 pb-24 transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Gradients to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-90" />
      <div className="absolute inset-0 opacity-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-[2px]" />

      <div className="absolute inset-x-0 bottom-0 p-4 md:px-6 md:pb-6 flex flex-col justify-end transform transition-transform duration-500">
        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">

          {/* <div className="flex items-center gap-2 mb-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
            <span className="h-[2px] w-6 bg-[#F33117]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#F33117] uppercase">
              Embedded
            </span>
          </div> */}

          <h3 className="text-xl md:text-2xl font-bold text-white leading-[1.1] mb-2 drop-shadow-md pr-4">
            {title}
          </h3>

          <div className="mt-5 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-300">
              Explore Project
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-950 transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M7 17 17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </div>

        </div>
      </div>

      <a href={link} className="absolute inset-0 z-20" aria-label={`View ${title}`} />
    </div>
  );
};

export default EmbeddedCaseStudyCard;
