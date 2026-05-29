"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type FirmwareLifecyclePhase = {
  phase: number;
  title: string;
  items: string[];
};

export type FirmwareLifecycleSectionProps = {
  title?: string;
  subtitleHighlight?: string;
  phases: FirmwareLifecyclePhase[];
};

const CARD_HOVER_SHADOW =
  "shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.04),0_0_24px_-4px_rgba(239,68,68,0.3)]";

export function FirmwareLifecycleSection({
  title = "Firmware Lifecycle",
  subtitleHighlight = "requirement to production",
  phases,
}: FirmwareLifecycleSectionProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(0);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (phases.length === 0) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % phases.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [phases.length]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || phases.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleCount(phases.length);
      return;
    }

    const timeouts: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          for (let i = 0; i < phases.length; i += 1) {
            timeouts.push(
              window.setTimeout(
                () => setVisibleCount((count) => Math.max(count, i + 1)),
                i * 120,
              ),
            );
          }
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(grid);

    return () => {
      observer.disconnect();
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [phases.length]);

  return (
    <section
      className="relative overflow-hidden bg-white px-[clamp(24px,5vw,64px)] py-24 max-[900px]:px-6 max-[900px]:py-16 max-[640px]:px-5"
      id="lifecycle"
      aria-label="Firmware lifecycle"
    >
      <div className="relative z-[2] mx-auto max-w-[1400px]">
        <div className="mx-auto mb-14 max-w-none text-center">
          <h2 className="mb-3 text-center text-[clamp(32px,4vw,48px)] font-light capitalize leading-[1.15] tracking-[-0.025em]">
            {title}
          </h2>
          <p className="m-0 text-center text-[clamp(32px,4vw,48px)] font-light capitalize leading-[1.15] tracking-[-0.025em]">
            From{" "}
            <span className="text-red-500">{subtitleHighlight}</span>
          </p>
        </div>

        <div
          className="relative grid grid-cols-7 gap-3.5 max-[1180px]:grid-cols-4 max-[900px]:grid-cols-3 max-[640px]:grid-cols-2 max-[420px]:grid-cols-1"
          ref={gridRef}
        >
          <span
            className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-0.5 -translate-y-1/2 bg-[linear-gradient(to_right,rgba(155,192,233,0)_0%,#9bc0e9_6%,#5e97d5_22%,#3d7fbf_38%,#0b5fa5_54%,#0a548f_70%,#084a7d_84%,#ef4444_96%,rgba(239,68,68,0)_100%)] shadow-[0_0_12px_rgba(11,95,165,0.35)]"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute top-1/2 left-[2%] z-0 -mt-[3px] -ml-[90px] h-1.5 w-[90px] animate-fw-energy-travel rounded bg-[linear-gradient(to_right,rgba(255,255,255,0)_0%,rgba(94,151,213,0)_10%,rgba(94,151,213,0.45)_60%,rgba(255,255,255,0.85)_100%)] blur-sm motion-reduce:animate-none"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute top-1/2 left-[2%] z-0 -mt-2 -ml-2 h-4 w-4 animate-fw-energy-travel rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.95),0_0_20px_rgba(94,151,213,0.85),0_0_38px_rgba(11,95,165,0.55)] motion-reduce:animate-none"
            aria-hidden="true"
          />

          {phases.map((phase, index) => {
            const isVisible = index < visibleCount;
            const isActive = activeIndex === index && isVisible;

            return (
              <article
                key={phase.phase}
                className={cn(
                  "relative z-[1] flex min-w-0 flex-col gap-4 rounded-[14px] border border-slate-400/20 bg-[#0f172a] px-4 pb-5 pt-[22px] backdrop-blur-sm [transition:opacity_0.6s_cubic-bezier(0.4,0,0.2,1),border-color_0.3s_cubic-bezier(0.4,0,0.2,1),transform_0.3s_cubic-bezier(0.4,0,0.2,1),box-shadow_0.3s_cubic-bezier(0.4,0,0.2,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:[transition:border-color_0.3s_cubic-bezier(0.4,0,0.2,1),box-shadow_0.3s_cubic-bezier(0.4,0,0.2,1)]",
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0",
                  isActive
                    ? cn("border-red-500 -translate-y-1", CARD_HOVER_SHADOW)
                    : "hover:border-red-500 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.04),0_0_24px_-4px_rgba(239,68,68,0.3)]",
                )}
                data-p={phase.phase}
              >
                <span
                  className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444]"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-500">
                  Phase {phase.phase}
                </span>
                <h3 className="mt-1.5 mb-0 text-[19px] !font-bold leading-tight tracking-[-0.01em] !text-white">
                  {phase.title}
                </h3>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-[18px] text-sm leading-[1.45] text-white/[0.82] before:absolute before:left-0 before:top-[7px] before:h-2 before:w-2 before:rounded-full before:bg-red-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
