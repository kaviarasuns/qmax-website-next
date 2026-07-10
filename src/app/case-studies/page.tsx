"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import CaseStudyCard, {
  type CaseStudyCardProps,
} from "@/components/CaseStudyCard";
import { isDevEnv } from "@/lib/env";
import {
  type CaseStudyListItem,
  embeddedCaseStudies,
  embeddedCaseStudiesV2,
  engineeringSupportCaseStudies,
  fullProductDevelopmentCaseStudies,
  industrialCaseStudies,
  mechanicalCaseStudies,
  mechanicalCaseStudiesV2,
  pcbCaseStudies,
  pcbCaseStudiesV2,
} from "@/store/case-studies";

// useLayoutEffect logs a warning during SSR; fall back to useEffect on the
// server. The actual scroll restoration only matters on the client anyway.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const SCROLL_STORAGE_KEY = "case-studies:scroll-y";

type Section = {
  id: string;
  label: string;
  studies: CaseStudyListItem[];
  /** Extra props forwarded to every CaseStudyCard in this section. */
  cardProps?: Partial<CaseStudyCardProps>;
};

// Single source of truth for the listing: drives both the sidebar nav and the
// rendered sections. In dev the legacy collections are shown alongside the v2
// (Full Product Development) entries; production shows only the curated v2 set.
const sections: Section[] = [
  {
    id: "full-product-development",
    label: "Full Product Development",
    studies: fullProductDevelopmentCaseStudies,
  },
  {
    id: "embedded",
    label: "Embedded Systems",
    studies: isDevEnv ? embeddedCaseStudies : embeddedCaseStudiesV2,
  },
  {
    id: "pcb",
    label: "PCB Design",
    studies: isDevEnv ? pcbCaseStudies : pcbCaseStudiesV2,
    cardProps: { imageClassName: "object-contain px-14 py-5" },
  },
  {
    id: "mechanical",
    label: "Mechanical Design",
    studies: isDevEnv ? mechanicalCaseStudies : mechanicalCaseStudiesV2,
  },
  ...(isDevEnv
    ? [
        {
          id: "industrial",
          label: "Industrial Design",
          studies: industrialCaseStudies,
        },
        {
          id: "engineering-support-services",
          label: "Engineering Support Services",
          studies: engineeringSupportCaseStudies,
        },
      ]
    : []),
];

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

  // ---------------------------------------------------------------------
  // Scroll restoration
  // ---------------------------------------------------------------------
  // Goal: returning to this page via the browser back button lands the
  // user exactly where they were, without a visible jump from the top.
  //
  // Strategy (standard pattern):
  //   1. Take ownership of scroll restoration ONCE (`history.scrollRestoration
  //      = "manual"`) and never restore it to "auto" - otherwise the next
  //      mount races with the browser/Next.js auto restorer.
  //   2. Persist the latest scroll position to sessionStorage continuously
  //      while the user scrolls, plus a final flush on unmount so the
  //      value is guaranteed-fresh when the user clicks a card.
  //   3. On mount, restore the saved Y. Use a rAF retry loop bounded by
  //      a short timeout to handle cases where the page is still settling
  //      (images loading, fonts swapping) or Next.js issues its own
  //      scroll-to-top after our layout effect.
  // ---------------------------------------------------------------------

  // (1) Set scroll restoration to manual exactly once, and restore the
  //     saved position before paint with a rAF retry fallback.
  useIsomorphicLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const saved = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (saved === null) return;
    const targetY = Number(saved);
    if (!Number.isFinite(targetY) || targetY <= 0) return;

    // Synchronous first attempt - when layout is already stable (the
    // common case on this static page), this restores before first paint
    // with no flash.
    window.scrollTo(0, targetY);

    // Retry across animation frames in case:
    //   - the document isn't tall enough yet (lazy images, font swap),
    //   - Next.js's scroll handling fires after this effect and resets us.
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

      // Stop once we've actually reached the saved Y; otherwise keep
      // trying until the page grows or we time out.
      if (window.scrollY < targetY - 1 && now - start < TIMEOUT_MS) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      // Intentionally do NOT reset window.history.scrollRestoration here.
      // Resetting it to "auto" on unmount causes the next back-navigation
      // mount to race with the browser's auto restorer.
    };
  }, []);

  // (2) Track active section AND persist scroll position. Combined into a
  //     single scroll listener for efficiency. Writes to sessionStorage
  //     are rAF-throttled, but a final synchronous save runs on unmount
  //     so the latest position is captured even if the user clicks a card
  //     between rAF ticks.
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
      // Final flush - guarantees the latest scroll position is persisted
      // when this page unmounts due to a Next.js client-side navigation.
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
        {/* Quick Navigation Sidebar */}
        <aside className="hidden xl:block w-72 shrink-0 pl-10 pt-8 sticky top-24 h-screen self-start">
          <nav className="relative flex flex-col">
            {/* Vertical track line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" />

            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative text-left pl-6 py-4 transition-all duration-300"
                >
                  {/* Active indicator line */}
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
                        {section.studies.length}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-6xl px-8 lg:px-12 mx-auto">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-foreground my-2">
              Case <span className="text-red-500">Studies</span>
            </h1>
          </header>
          {sections.map((section, sectionIndex) => {
            // The final section needs extra breathing room before the footer.
            const isLast = sectionIndex === sections.length - 1;
            return (
              <div
                key={section.id}
                id={section.id}
                className={`scroll-mt-32 ${isLast ? "mb-80 xl:mb-96" : "mb-24"}`}
              >
                <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">
                      {section.label}
                    </h2>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium mb-1">
                    {section.studies.length} Projects
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  {section.studies.map((study, index) => (
                    <div key={`${section.id}-${study.id}`} className="relative">
                      <CaseStudyCardNumber number={index + 1} />
                      <CaseStudyCard {...study} {...section.cardProps} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </section>
  );
}
