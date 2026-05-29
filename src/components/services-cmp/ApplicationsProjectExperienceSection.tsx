"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type ProjectExperienceItem = {
  id: string;
  listTitle: string;
  captionTitle: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  /** CSS linear-gradient for placeholder when imageSrc is omitted */
  placeholderGradient?: string;
};

export type ApplicationsProjectExperienceSectionProps = {
  projects: ProjectExperienceItem[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
};

function formatItemNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function ApplicationsProjectExperienceSection({
  projects,
  title = "Applications & Real-World ",
  titleHighlight = "Project Experience",
  subtitle = "Qmax Systems delivers field-proven expertise in developing mission-critical hardware. Our portfolio includes:",
}: ApplicationsProjectExperienceSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = projects[activeIdx] ?? projects[0];

  if (!active) {
    return null;
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="text-center">
          <h2 className="text-center font-light tracking-tight">
            {title}
            <span className="text-red-500">{titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-center text-base leading-relaxed text-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 px-0 pb-8 md:mt-14 md:px-6 md:pb-16">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] lg:grid lg:grid-cols-2">
            <div
              className="flex flex-col px-6 py-8 md:px-10 md:py-12 lg:px-12"
              role="tablist"
              aria-label="Project experience categories"
            >
              {projects.map((project, index) => {
                const isActive = index === activeIdx;
                return (
                  <button
                    key={project.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`project-panel-${project.id}`}
                    id={`project-tab-${project.id}`}
                    onClick={() => setActiveIdx(index)}
                    className={cn(
                      "relative grid w-full cursor-pointer grid-cols-[44px_1fr_28px] items-center gap-3.5 border-b border-[#e4e0d8] py-5 text-left transition-[padding-left,color] duration-200 last:border-b-0",
                      "before:absolute before:bottom-0 before:left-[-24px] before:top-0 before:w-[3px] before:bg-brand-red before:opacity-0 before:transition-opacity before:duration-200 md:before:left-[-48px]",
                      isActive && "pl-1 before:opacity-100",
                      !isActive && "hover:pl-1",
                    )}
                  >
                    <span className="font-mono text-[10px] tracking-[0.12em] text-brand-red">
                      {formatItemNumber(index)}
                    </span>
                    <span
                      className={cn(
                        "text-sm tracking-tight md:text-base",
                        isActive ? "text-red-500" : "text-foreground",
                      )}
                    >
                      {project.listTitle}
                    </span>
                    <span
                      className={cn(
                        "ml-auto flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border transition-all duration-200",
                        isActive
                          ? "border-brand-red bg-brand-red text-white"
                          : "border-[#e4e0d8] text-[#ccc]",
                      )}
                    >
                      <ChevronIcon className="h-2.5 w-2.5" />
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              className="relative min-h-[280px] overflow-hidden lg:min-h-[520px]"
              role="tabpanel"
              id={`project-panel-${active.id}`}
              aria-labelledby={`project-tab-${active.id}`}
            >
              {projects.map((project, index) => {
                const isActive = index === activeIdx;
                return (
                  <div
                    key={project.id}
                    className={cn(
                      "absolute inset-0 flex flex-col transition-opacity duration-[550ms] ease-in-out",
                      isActive
                        ? "opacity-100"
                        : "pointer-events-none opacity-0",
                    )}
                  >
                    <div
                      className={cn(
                        "relative flex flex-1 items-center justify-center overflow-hidden",
                        project.imageSrc &&
                          "bg-gradient-to-br from-zinc-50 via-zinc-100/60 to-zinc-50",
                      )}
                      style={
                        project.imageSrc
                          ? undefined
                          : {
                              background:
                                project.placeholderGradient ??
                                "linear-gradient(135deg, #ede9e0, #d4ccbe)",
                            }
                      }
                    >
                      {project.imageSrc ? (
                        <Image
                          src={project.imageSrc}
                          alt={project.imageAlt ?? project.listTitle}
                          fill
                          className="object-contain p-6 md:p-8"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <span className="pointer-events-none text-[11px] uppercase tracking-[0.14em] text-[#c0bab0]">
                          Image / Video
                        </span>
                      )}
                    </div>
                    <div className="border-t border-[#e4e0d8] bg-white px-6 py-5 md:px-7">
                      <p className="text-[15px] font-bold tracking-tight">
                        {project.captionTitle}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-foreground md:text-[12px]">
                        {project.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
