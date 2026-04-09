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
    <a href={link} className="group block h-full">
      <div className="relative h-[380px] flex flex-col bg-white rounded-2xl border border-zinc-200/80 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-zinc-300 overflow-hidden">

        <div className="flex flex-col flex-1 p-5 overflow-hidden">
          {/* Image Container - collapses on hover */}
          <div className="relative flex-shrink-0 w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] max-h-[250px] opacity-100 mb-4 group-hover:max-h-0 group-hover:opacity-0 group-hover:mb-0">
            <div className="aspect-[1.4/1] relative w-full bg-[#F3F4F6] rounded-xl overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col min-h-0">
            <h3 className="text-xl font-bold text-zinc-900 leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#F33117]">
              {title}
            </h3>

            {summary && (
              <p className="text-[15px] text-zinc-600 leading-relaxed mt-2 line-clamp-2 transition-all duration-500 group-hover:line-clamp-4">
                {summary}
              </p>
            )}

            {/* Specs - slides in on hover */}
            <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[300px] group-hover:mt-4">
              <div className="space-y-0 border-t border-zinc-100">
                {specs && specs.length > 0 ? (
                  specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-3.5 border-t border-zinc-100 first:border-t-0">
                      <span className="text-sm text-zinc-500">{spec.label}</span>
                      <span className="text-sm text-zinc-900 font-medium">{spec.value}</span>
                    </div>
                  ))
                ) : (
                  // Default mock specs if none provided
                  <>
                    <div className="flex justify-between items-center py-3.5 border-t border-zinc-100">
                      <span className="text-sm text-zinc-500">Size</span>
                      <span className="text-sm text-zinc-900 font-medium">140*100mm</span>
                    </div>
                    <div className="flex justify-between items-center py-3.5 border-t border-zinc-100">
                      <span className="text-sm text-zinc-500">Chip</span>
                      <span className="text-sm text-zinc-900 font-medium">RK3568</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>


      </div>
    </a>
  );
};

export default EmbeddedCaseStudyCard;
