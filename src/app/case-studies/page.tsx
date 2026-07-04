"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import {
  fullProductDevelopmentCaseStudies,
  pcbV2CaseStudies,
} from "@/store/case-studies";

// useLayoutEffect logs a warning during SSR; fall back to useEffect on the
// server. The actual scroll restoration only matters on the client anyway.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const SCROLL_STORAGE_KEY = "case-studies:scroll-y";

const sections = [
  { id: "full-product-development", label: "Full Product Development" },
  { id: "pcb", label: "PCB Design" },
];

const sectionCounts: { [key: string]: number } = {
  "full-product-development": fullProductDevelopmentCaseStudies.length,
  pcb: pcbV2CaseStudies.length,
};

function CaseStudyCardNumber({ number }: { number: number }) {
  return (
    <span
      aria-hidden
      className="absolute top-3 left-5 z-10 text-base font-bold tabular-nums text-white drop-shadow-md"
    >
      {number}
    </span>
  );
}

const SCROLL_OFFSET = 120;

export default function CaseStudiesPage() {
  const [activeSection, setActiveSection] = useState("");

  useIsomorphicLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const saved = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (saved === null) return;
    const targetY = Number(saved);
    if (!Number.isFinite(targetY) || targetY <= 0) return;

    window.scrollTo(0, targetY);

    let rafId = 0;
    const start =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    const TIMEOUT_MS = 1000;

    const tick = () => {
      const now =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      const maxReachable = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const y = Math.min(targetY, maxReachable);

      if (Math.abs(window.scrollY - y) > 1) {
        window.scrollTo(0, y);
      }

      if (window.scrollY < targetY - 1 && now - start < TIMEOUT_MS) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = sections[0].id;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const sectionTop =
            el.getBoundingClientRect().top + scrollY - SCROLL_OFFSET;
          if (scrollY >= sectionTop - 5) {
            current = section.id;
          }
        }
      }

      setActiveSection(current);

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
          rafId = 0;
        });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-24 pb-24 bg-[#f8f8f6]">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.82))]" />

      <div className="relative flex w-full max-w-[1600px] mx-auto">
        <aside className="hidden xl:block w-72 shrink-0 pl-10 pt-8 sticky top-24 h-screen self-start">
          <nav className="relative flex flex-col">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" />

            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative text-left pl-6 py-4 transition-all duration-300"
                >
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-red-500 scale-y-100"
                        : "bg-transparent scale-y-0 group-hover:bg-gray-400 group-hover:scale-y-100"
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-lg font-semibold transition-colors duration-300 leading-tight ${
                        isActive ? "text-red-500" : "text-foreground"
                      }`}
                    >
                      {section.label}
                    </span>
                    <div className="flex items-center gap-1.5 ml-3">
                      <span
                        className={`text-xs font-medium tabular-nums px-2 py-0.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-red-500/10 text-red-500"
                            : "bg-gray-100 text-muted-foreground group-hover:bg-gray-200 group-hover:text-foreground"
                        }`}
                      >
                        {sectionCounts[section.id]}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 w-full max-w-6xl px-8 lg:px-12 mx-auto">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-foreground my-2">
              Case <span className="text-red-500">Studies</span>
            </h1>
          </header>

          <div id="full-product-development" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
                  Full Product Development
                </h2>
              </div>
              <span className="text-sm text-muted-foreground font-medium mb-1">
                {fullProductDevelopmentCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {fullProductDevelopmentCaseStudies.map((study, index) => (
                <div key={`fpdstudy-${study.id}`} className="relative">
                  <CaseStudyCardNumber number={index + 1} />
                  <CaseStudyCard {...study} />
                </div>
              ))}
            </div>
          </div>

          <div id="pcb" className="mb-80 scroll-mt-32 xl:mb-96">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
                  PCB Design
                </h2>
              </div>
              <span className="text-sm text-muted-foreground font-medium mb-1">
                {pcbV2CaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {pcbV2CaseStudies.map((study, index) => (
                <div key={`pstudy-${study.id}`} className="relative">
                  <CaseStudyCardNumber number={index + 1} />
                  <CaseStudyCard
                    {...study}
                    imageClassName="object-contain px-14 py-5"
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
