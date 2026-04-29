"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import {
  embeddedCaseStudies,
  industrialCaseStudies,
  mechanicalCaseStudies,
  pcbCaseStudies,
} from "@/store/case-studies";

// useLayoutEffect logs a warning during SSR; fall back to useEffect on the
// server. The actual scroll restoration only matters on the client anyway.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const SCROLL_STORAGE_KEY = "case-studies:scroll-y";

const sections = [
  { id: "embedded", label: "Embedded Systems" },
  { id: "pcb", label: "PCB Design" },
  { id: "mechanical", label: "Mechanical Design" },
  { id: "industrial", label: "Industrial Design" },
];

const sectionCounts: { [key: string]: number } = {
  embedded: embeddedCaseStudies.length,
  pcb: pcbCaseStudies.length,
  mechanical: mechanicalCaseStudies.length,
  industrial: industrialCaseStudies.length,
};


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
  //      = "manual"`) and never restore it to "auto" — otherwise the next
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

    // Synchronous first attempt — when layout is already stable (the
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
        document.documentElement.scrollHeight - window.innerHeight
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
      // Final flush — guarantees the latest scroll position is persisted
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
                        ? "bg-[#E31E24] scale-y-100"
                        : "bg-transparent scale-y-0 group-hover:bg-gray-400 group-hover:scale-y-100"
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-lg font-semibold transition-colors duration-300 leading-tight ${
                        isActive
                          ? "text-[#E31E24]"
                          : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {section.label}
                    </span>
                    <div className="flex items-center gap-1.5 ml-3">
                      <span
                        className={`text-xs font-medium tabular-nums px-2 py-0.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#E31E24]/10 text-[#E31E24]"
                            : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
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

        {/* Main Content */}
        <main
          data-budge-target
          className="flex-1 w-full max-w-6xl px-8 lg:px-12 mx-auto"
          style={{ paddingLeft: "32px", paddingRight: "32px" }}
        >
          {/* Embedded Section */}
          <div id="embedded" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 01</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">
                  Embedded Systems
                </h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {embeddedCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {embeddedCaseStudies.map((study) => (
                <CaseStudyCard
                  key={`estudy-${study.id}`}
                  {...study}
                  // imageBackgroundClassName="bg-blue-200"
                />
              ))}
            </div>
          </div>

          {/* PCB Section */}
          <div id="pcb" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 02</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">PCB Design</h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {pcbCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {pcbCaseStudies.map((study) => (
                <CaseStudyCard
                  key={`pstudy-${study.id}`}
                  {...study}
                  imageClassName="object-contain px-14 py-5"
                />
              ))}
            </div>
          </div>

          {/* Mechanical Section */}
          <div id="mechanical" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 03</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">
                  Mechanical Design
                </h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {mechanicalCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {mechanicalCaseStudies.map((study) => (
                <CaseStudyCard key={`mstudy-${study.id}`} {...study} />
              ))}
            </div>
          </div>

          {/* Industrial Section */}
          <div id="industrial" className="mb-10 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 04</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">
                  Industrial Design
                </h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {industrialCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {industrialCaseStudies.map((study) => (
                <CaseStudyCard
                  key={`istudy-${study.id}`}
                  {...study}
                  // imageBackgroundClassName="bg-blue-200"
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
