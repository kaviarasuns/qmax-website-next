"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CaseStudyCarousel } from "@/components/case-study-carousel";
import {
  CHALLENGES,
  FIRMWARE_ITEMS,
  GALLERY_SLIDES,
  HARDWARE_COMPONENTS,
  INTERFACES,
  META_TAGS,
  NAV_SECTIONS,
  RIBBON_STATS,
  SCOPE_ITEMS,
  SPECS,
} from "./content";

const GALLERY_IMAGES = GALLERY_SLIDES.map((slide) => slide.src);

const MONO =
  "font-[family-name:var(--font-roboto-mono),ui-monospace,monospace]";

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

export default function CaseStudyV2Page() {
  const [activeSection, setActiveSection] = useState(NAV_SECTIONS[0].id);
  const [ribbonLit, setRibbonLit] = useState(false);
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [scopeVisible, setScopeVisible] = useState<boolean[]>(() =>
    SCOPE_ITEMS.map(() => false),
  );
  const [fwVisible, setFwVisible] = useState<boolean[]>(() =>
    FIRMWARE_ITEMS.map(() => false),
  );

  const ribbonRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const scopeRefs = useRef<(HTMLLIElement | null)[]>([]);
  const fwRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sections = NAV_SECTIONS.map((s) =>
      document.getElementById(s.id),
    ).filter(Boolean) as HTMLElement[];

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
    const ribbon = ribbonRef.current;
    if (!ribbon) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRibbonLit(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(ribbon);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const summary = summaryRef.current;
    if (!summary) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSummaryVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(summary);
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
    <div className="bg-[#f5f7fa] text-foreground leading-[1.6] tracking-[0.015em] antialiased">
      <header className="relative bg-[#f5f7fa] text-foreground overflow-hidden pt-[6rem] px-6 pb-[3.4rem]">
        <div className="relative max-w-[1200px] mx-auto grid grid-cols-[0.82fr_1.18fr] gap-[2.8rem] items-stretch max-[920px]:grid-cols-1 max-[920px]:gap-8 max-[920px]:items-start">
          <div className="min-w-0 flex flex-col">
            <div
              className={`${MONO} text-xs tracking-[0.34em] uppercase text-red-500 font-medium`}
            >
              CASE STUDY
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground my-[0.6rem] font-medium tracking-[0.005em] leading-[1.1]">
              Rugged Android Digital Signage Player
            </h1>
            <div className="text-foreground text-lg md:text-xl font-light max-w-[46ch]">
              Full Product Development — Concept to Volume Production
            </div>
            <div
              className={`${MONO} text-xs tracking-[0.12em] text-foreground mt-[1.3rem] flex flex-wrap gap-y-[0.4rem] gap-x-[1.1rem]`}
            >
              {META_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex gap-2 items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-[1px] before:inline-block"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              ref={ribbonRef}
              className={`relative grid grid-cols-2 border border-[#063458] rounded-lg overflow-hidden bg-[#04243d] mt-auto max-[920px]:mt-[1.4rem] transition-[opacity,transform] duration-700 ease-[ease] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                ribbonLit
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {RIBBON_STATS.map((stat, index) => {
                const hasRight = index % 2 === 0;
                const hasBottom = index < 2;
                return (
                  <div
                    key={stat.label}
                    className={`relative overflow-hidden py-[1.1rem] px-[1.2rem] border-[#063458] ${
                      hasRight ? "border-r" : ""
                    } ${hasBottom ? "border-b" : ""}`}
                  >
                    <div className="text-xl text-white font-normal">
                      {stat.value}
                    </div>
                    <div
                      className={`${MONO} text-xs tracking-[0.14em] uppercase text-[#9bc0e9] mt-[0.3rem]`}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="min-w-0 flex flex-col justify-start">
            <CaseStudyCarousel
              images={GALLERY_IMAGES}
              title="Rugged Android Digital Signage Player"
            />
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto grid grid-cols-[236px_1fr] gap-[2.6rem] px-6 pt-[2.6rem] pb-12 items-start max-[900px]:grid-cols-1 max-[900px]:gap-0">
        <aside className="sticky top-[5rem] self-start max-[900px]:hidden">
          <div
            className={`${MONO} text-xs tracking-[0.22em] uppercase text-foreground mb-[0.8rem]`}
          >
            On this page
          </div>
          {NAV_SECTIONS.map((section) => {
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
              <p className="text-foreground leading-[1.6] mb-4">
                A major US-based retail technology company approached Qmax
                Systems to design and manufacture a ruggedized Android Digital
                Signage Player for deployment across auto showrooms throughout
                North America. The product needed to simultaneously display live
                TV channels via HDMI input and overlay dynamic digital signage
                content — promotions, notifications, and scheduling — in a
                picture-in-picture configuration.
              </p>
              <p className="text-foreground leading-[1.6] mb-4">
                Qmax Systems delivered the complete product from concept to
                volume production: hardware design, firmware and Android
                software development, industrial design, FCC certification, and
                fulfillment — packaging thousands of units and shipping them
                directly to the customer&apos;s US distribution point. The
                product has been running in the field for nearly four years with
                near-zero reported failures.
              </p>
            </div>
          </section>

          <section
            className="scroll-mt-[7.75rem] max-[900px]:scroll-mt-[7rem] pt-4 pb-[2.6rem] border-b border-[#e3e8ee]"
            id="brief"
          >
            <SectionHead num="02" title="Product Brief" />
            <div>
              <p className="text-foreground leading-[1.6] mb-4">
                The Rugged Android Digital Signage Player is a fanless,
                wall-mountable media appliance powered by the Rockchip RK3566
                quad-core SoC running Android. It accepts a live HDMI video
                source (e.g. a cable set-top box or satellite receiver) and
                renders it alongside managed digital signage content, delivering
                a unified display experience on any 4K HDMI-connected commercial
                display.
              </p>
              <p className="text-foreground leading-[1.6] mb-4">
                The unit is housed in a custom CNC-machined aluminum enclosure
                rated IP54 for commercial environments. It ships with a
                UL-certified US power adapter, HDMI cable with ferrite cores,
                and a custom IR remote control — all packed in a branded
                retail-style carton box, ready for end-user installation.
                Power-over-Ethernet (PoE) is supported for cable-reduced
                installations, and over-the-air (OTA) content and firmware
                updates are fully operational.
              </p>
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
              {SCOPE_ITEMS.map((item, index) => (
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
              {CHALLENGES.map((row) => (
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
              {HARDWARE_COMPONENTS.map((card) => (
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
              {INTERFACES.map((card) => (
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
              {FIRMWARE_ITEMS.map((item, index) => {
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
              {SPECS.map((row) => (
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
                <p className="text-base text-white text-justify max-w-[82ch] leading-[1.6] mb-4">
                  The Rugged Android Digital Signage Player demonstrates Qmax
                  Systems&apos; end-to-end product development capability — from
                  an unconventional architectural challenge (HDMI input on a SoC
                  with no native HDMI RX) through to volume-manufactured units
                  running in commercial environments across North America. The
                  project required deep expertise across hardware design, kernel
                  and BSP development, Android application engineering,
                  regulatory certification, and manufacturing operations
                  simultaneously.
                </p>
                <p className="text-base text-white text-justify max-w-[82ch] leading-[1.6] mb-4">
                  With thousands of units deployed and near-zero field failures
                  over four years of continuous operation, the product stands as
                  a flagship reference for Qmax&apos;s concept-to-production
                  methodology. The same full-stack capability — architecture,
                  PCB design, firmware, Android, industrial design,
                  certification, and manufacturing — is available to customers
                  bringing new product ideas to market.
                </p>
                <div className="text-2xl font-light text-white tracking-[0.03em] mt-[1.4rem] mb-[0.3rem]">
                  Qmax Systems:{" "}
                  <b className="text-red-500 font-normal">
                    Design To Manufacturing.
                  </b>
                </div>
                <div className="relative h-0.5 bg-[#063458] mt-[1.6rem] overflow-hidden rounded-[2px] after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-[40%] after:bg-[linear-gradient(90deg,transparent,#f33117,transparent)] after:animate-case-sweep motion-reduce:after:animate-none" />
                <div className="inline-flex items-center gap-[0.6rem] mt-4 text-[#9bc0e9] text-sm">
                  Interested in a similar product development engagement?
                  Contact Qmax Systems at{" "}
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

      {/* <footer className={`${MONO} text-center pt-8 px-6 pb-12 text-foreground text-[0.7rem] tracking-[0.12em]`}>
        Qmax Systems · Design To Manufacturing · qmaxsys.com
      </footer> */}
    </div>
  );
}
