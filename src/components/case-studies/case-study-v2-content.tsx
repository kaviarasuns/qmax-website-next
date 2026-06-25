"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MONO } from "@/components/case-studies/case-study-v2-shared";
import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-baseline gap-[0.9rem] mb-[1.2rem]">
      <span
        className={`${MONO} text-xs text-[#5e97d5] font-medium tracking-[0.06em]`}
      >
        {num}
      </span>
      <h2 className="text-2xl md:text-3xl text-foreground font-light tracking-[0.03em] leading-[1.15] m-0">
        {title}
      </h2>
      <span className="flex-1 h-px bg-[#e3e8ee]" />
    </div>
  );
}

type ContentProps = Pick<
  FullProductDevelopmentCaseStudy,
  | "navSections"
  | "overview"
  | "brief"
  | "scopeItems"
  | "challenges"
  | "hardwareComponents"
  | "interfaces"
  | "firmwareItems"
  | "specs"
  | "summary"
>;

export function CaseStudyV2Content({
  navSections,
  overview,
  brief,
  scopeItems,
  challenges,
  hardwareComponents,
  interfaces,
  firmwareItems,
  specs,
  summary,
}: ContentProps) {
  const [activeSection, setActiveSection] = useState(navSections[0].id);
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [scopeVisible, setScopeVisible] = useState<boolean[]>(() =>
    scopeItems.map(() => false),
  );
  const [fwVisible, setFwVisible] = useState<boolean[]>(() =>
    firmwareItems.map(() => false),
  );

  const summaryRef = useRef<HTMLDivElement>(null);
  const scopeRefs = useRef<(HTMLLIElement | null)[]>([]);
  const fwRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => spy.observe(section));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    const summaryEl = summaryRef.current;
    if (!summaryEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSummaryVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(summaryEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = scopeRefs.current.indexOf(
            entry.target as HTMLLIElement,
          );
          if (index >= 0) {
            setScopeVisible((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.12 },
    );

    scopeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = fwRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index >= 0) {
            setFwVisible((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.15 },
    );

    fwRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-[236px_1fr] gap-[2.6rem] px-6 pt-[2.6rem] pb-12 items-start max-[900px]:grid-cols-1 max-[900px]:gap-0">
      <aside className="sticky top-[5rem] self-start max-[900px]:hidden">
        <div
          className={`${MONO} text-xs tracking-[0.22em] uppercase text-foreground mb-[0.8rem]`}
        >
          On this page
        </div>
        {navSections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={`flex gap-[0.7rem] items-baseline py-2 pl-[0.9rem] pr-[0.2rem] text-sm border-l-2 transition duration-200 tracking-[0.01em] cursor-pointer w-full text-left hover:text-foreground hover:border-l-[#5e97d5] ${
                isActive
                  ? "text-red-500 border-l-red-500 font-medium"
                  : "text-foreground border-l-[#e3e8ee]"
              }`}
            >
              <span
                className={`${MONO} text-xs ${
                  isActive ? "text-red-500" : "text-[#ced6e0]"
                }`}
              >
                {section.num}
              </span>
              {section.label}
            </button>
          );
        })}
      </aside>

      <div className="min-w-0">
        <section
          className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem] border-b border-[#e3e8ee]"
          id="overview"
        >
          <SectionHead num="01" title="Project Overview" />
          <div>
            {overview.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-foreground leading-[1.6] mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section
          className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem] border-b border-[#e3e8ee]"
          id="brief"
        >
          <SectionHead num="02" title="Product Brief" />
          <div>
            {brief.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-foreground leading-[1.6] mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section
          className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem] border-b border-[#e3e8ee]"
          id="scope"
        >
          <SectionHead num="03" title="Qmax Scope of Work" />
          <p className="text-foreground max-w-[74ch] leading-[1.6] mb-4">
            Qmax Systems executed the entire product lifecycle under one roof,
            from the first architectural sketch to palletized shipments bound
            for North America:
          </p>
          <ul className="list-none mt-[1.2rem] mb-0 p-0 grid grid-cols-2 gap-y-[0.1rem] gap-x-8 max-[640px]:grid-cols-1">
            {scopeItems.map((item, index) => (
              <li
                key={item}
                ref={(el) => {
                  scopeRefs.current[index] = el;
                }}
                className={`relative py-[0.7rem] pl-[1.9rem] border-b border-[#e3e8ee] text-foreground text-base before:content-[''] before:absolute before:left-0 before:top-[1.05rem] before:w-[11px] before:h-[11px] before:border-2 before:border-red-500 before:rounded-[2px] after:content-[''] after:absolute after:left-[3px] after:top-[1.18rem] after:w-[5px] after:h-[5px] after:bg-red-500 after:rounded-[1px] after:transition-opacity after:duration-300 motion-reduce:after:transition-none ${
                  scopeVisible[index]
                    ? "after:opacity-100"
                    : "after:opacity-0"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem] border-b border-[#e3e8ee]"
          id="challenges"
        >
          <SectionHead num="04" title="Engineering Challenges" />
          <div className="grid gap-[0.7rem] mt-[1.2rem]">
            {challenges.map((row) => (
              <div
                key={row.challenge}
                className="grid grid-cols-[0.85fr_1.15fr] bg-white border border-[#e3e8ee] rounded-lg overflow-hidden transition-[transform,box-shadow,border-color] duration-[250ms] ease-[ease] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,42,58,0.13)] motion-reduce:transition-none max-[680px]:grid-cols-1"
              >
                <div className="bg-[#f8f8f8] py-4 px-[1.2rem] border-r-[3px] border-r-red-500 max-[680px]:border-r-0 max-[680px]:border-b-[3px] max-[680px]:border-b-red-500">
                  <div
                    className={`${MONO} text-xs tracking-[0.18em] uppercase text-red-500`}
                  >
                    Challenge
                  </div>
                  <h4 className="text-base text-foreground font-medium tracking-[0.01em] leading-[1.15] mt-1">
                    {row.challenge}
                  </h4>
                </div>
                <div className="py-4 px-[1.2rem]">
                  <div
                    className={`${MONO} text-xs tracking-[0.18em] uppercase text-[#0a548f]`}
                  >
                    Resolution
                  </div>
                  <p className="mt-1 mb-0 text-base text-foreground leading-[1.6]">
                    {row.resolution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem] border-b border-[#e3e8ee]"
          id="components"
        >
          <SectionHead num="05" title="Major Hardware Components" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[0.8rem] mt-[1.2rem]">
            {hardwareComponents.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#e3e8ee] rounded-lg py-[1.1rem] px-[1.2rem] relative transition-[transform,box-shadow] duration-[250ms] ease-[ease] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,42,58,0.13)] motion-reduce:transition-none before:content-[''] before:absolute before:left-0 before:top-[1.1rem] before:bottom-[1.1rem] before:w-[3px] before:bg-red-500 before:rounded-[2px]"
              >
                <h4 className="text-lg text-foreground font-medium tracking-[0.01em] leading-[1.15] mb-[0.35rem] pl-[0.6rem]">
                  {card.title}
                </h4>
                <p className="text-base m-0 pl-[0.6rem] text-foreground leading-[1.6] text-left">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem] border-b border-[#e3e8ee]"
          id="interfaces"
        >
          <SectionHead num="06" title="Major Interfaces & Protocols" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[0.8rem] mt-[1.2rem]">
            {interfaces.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#e3e8ee] rounded-lg py-[1.1rem] px-[1.2rem] relative transition-[transform,box-shadow] duration-[250ms] ease-[ease] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(28,42,58,0.13)] motion-reduce:transition-none before:content-[''] before:absolute before:left-0 before:top-[1.1rem] before:bottom-[1.1rem] before:w-[3px] before:bg-red-500 before:rounded-[2px]"
              >
                <h4 className="text-lg text-foreground font-medium tracking-[0.01em] leading-[1.15] mb-[0.35rem] pl-[0.6rem]">
                  {card.title}
                </h4>
                <p className="text-base m-0 pl-[0.6rem] text-foreground leading-[1.6] text-left">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem] border-b border-[#e3e8ee]"
          id="firmware"
        >
          <SectionHead num="07" title="Key Firmware & Software Activities" />
          <div className="mt-[1.2rem] grid relative before:content-[''] before:absolute before:left-[22px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e3e8ee]">
            {firmwareItems.map((item, index) => {
              const visible = fwVisible[index];
              return (
                <div
                  key={item.title}
                  ref={(el) => {
                    fwRefs.current[index] = el;
                  }}
                  className={`relative pt-2 pb-[1.4rem] pl-[3.6rem] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <span
                    className={`${MONO} absolute left-0 top-0 w-[46px] h-[46px] rounded-full bg-white border-2 flex items-center justify-center text-sm font-semibold z-[2] transition-all duration-[400ms] motion-reduce:transition-none ${
                      visible
                        ? "border-red-500 text-red-500 shadow-[0_0_0_4px_#e8f1fb]"
                        : "border-[#ced6e0] text-[#0a548f]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-base text-foreground font-medium tracking-[0.01em] leading-[1.15] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-base m-0 max-w-[78ch] text-foreground leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section
          className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem] border-b border-[#e3e8ee]"
          id="specs"
        >
          <SectionHead num="08" title="Technical Specifications" />
          <div className="mt-[1.2rem] bg-white border border-[#e3e8ee] rounded-lg overflow-hidden">
            {specs.map((row) => (
              <div
                key={row.key}
                className="grid grid-cols-[230px_1fr] border-b border-[#e3e8ee] last:border-b-0 hover:bg-[#e8f1fb] max-[560px]:grid-cols-1"
              >
                <div
                  className={`${MONO} text-xs tracking-[0.04em] text-[#084676] py-[0.8rem] px-[1.1rem] bg-[#f8f8f8] border-r border-[#e3e8ee] font-medium max-[560px]:border-r-0 max-[560px]:border-b max-[560px]:border-b-[#e3e8ee]`}
                >
                  {row.key}
                </div>
                <div className="py-[0.8rem] px-[1.1rem] text-foreground text-base">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem]"
          id="summary"
        >
          <SectionHead num="09" title="Summary" />
          <div
            ref={summaryRef}
            className={`bg-[#1c2a3a] text-white rounded-lg py-[2.6rem] px-[2.2rem] mt-[1.4rem] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(700px_280px_at_100%_-20%,rgba(46,120,191,0.35),transparent_60%)] transition-[opacity,transform] duration-700 ease-[ease] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
              summaryVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <div className="relative">
              {summary.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base text-white text-justify max-w-[82ch] leading-[1.6] mb-4"
                >
                  {paragraph}
                </p>
              ))}
              <div className="text-2xl font-light text-white tracking-[0.03em] mt-[1.4rem] mb-[0.3rem]">
                Qmax Systems:{" "}
                <b className="text-red-500 font-normal">
                  Design To Manufacturing.
                </b>
              </div>
              <div className="relative h-0.5 bg-[#063458] mt-[1.6rem] overflow-hidden rounded-[2px] after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-[40%] after:bg-[linear-gradient(90deg,transparent,#f33117,transparent)] after:animate-case-sweep motion-reduce:after:animate-none" />
              <div className="inline-flex items-center gap-[0.6rem] mt-4 text-[#9bc0e9] text-sm">
                Interested in a similar product development engagement? Contact
                Qmax Systems at{" "}
                <Link
                  href="https://www.qmaxsys.com"
                  className="text-white border-b border-b-red-500 pb-px"
                >
                  www.qmaxsys.com
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
