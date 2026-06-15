"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    title: "First-Time-Right Engineering Execution",
    description:
      "Backed by 27 years of deep industry experience, our engineers execute complex hardware designs without needing oversight. By utilizing cutting-edge tools and a well-defined process, our experienced team catches and resolves critical design anomalies before the fabrication stage, ensuring a stable, production-ready first prototype run.",
  },
  {
    title: "Comprehensive Life-Cycle Ownership & Continuity",
    description:
      "We eliminate vendor-fragmentation friction and accountability gaps. By housing full-stack capabilities—Hardware, Firmware, Software, PCB Layout, Mechanical, and Industrial Design—completely under one roof, we ensure total continuity across your product lifecycle, delivering predictable milestones and seamless production handoffs.",
  },
  {
    title: "Proactive Regulatory & Compliance De-Risking",
    description:
      "We treat compliance as a foundational architecture constraint, not an afterthought. Our engineering teams possess rigorous domain knowledge of international standards, integrating complex certification blueprints into the product plan from Day 1 to guarantee a seamless, uncompromised path to market.",
  },
  {
    title: "Enterprise-Grade Governance & Visibility",
    description:
      "We eliminate the transparency risks common in outsourced R&D. Operating with absolute corporate governance, we provide systematic project tracking, highly structured communication frameworks, and daily operational updates to keep your internal stakeholders perfectly aligned and informed.",
  },
  {
    title: "Institutional IP Protection & Security Frameworks",
    description:
      "Your core intellectual property is protected by institutional-grade protocols. Our robust IP defence model includes strict, multi-tiered NDA frameworks with all employees, suppliers, and tier-one partners, reinforced by isolated, secure physical and digital access controls across our engineering infrastructure.",
  },
  {
    title: "Field-Tested Multi-Domain Resilience",
    description:
      "We cross-pollinate architectural best practices from the world's most demanding sectors—including Automotive, Medical, Aerospace, Industrial, and Military applications. This extensive multi-domain footprint ensures your product inherits field-tested ruggedness, structural reliability, and long-term scalability.",
  },
];

const stats = [
  { value: 25, label: "Years of Experience" },
  { value: 500, label: "Products Delivered" },
  { value: 100, label: "Global Clients" },
  { text: "ISO", label: "9001 & 27001 Certified" },
];

const ROTATE_MS = 5500;

// Fade-up reveal once the element scrolls into view (matches .reveal in the reference).
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Let the hidden state paint once before toggling `.in`, so opacity
        // and transform actually transition (matches the reference HTML).
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setInView(true));
        });
        io.disconnect();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

// Ease-out count from 0 to target once `start` flips true.
function useCountUp(target: number, start: boolean, duration = 1700) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    let startTs: number | null = null;
    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

function StatCell({
  value,
  text,
  label,
  start,
}: {
  value?: number;
  text?: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value ?? 0, start && value !== undefined);
  return (
    <div className="relative after:absolute after:right-0 after:top-1/2 after:h-14 after:w-px after:-translate-y-1/2 after:bg-zinc-200 last:after:hidden max-lg:after:hidden">
      <div className="text-[42px] lg:text-[50px] font-bold leading-[1.05] tracking-[-1px] text-foreground">
        {value !== undefined ? (
          <>
            {count}
            <span className="text-red-500">+</span>
          </>
        ) : (
          text
        )}
      </div>
      <div className="mt-2 text-[15px] text-muted-foreground">{label}</div>
    </div>
  );
}

export default function InsideOutV3() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isManual, setIsManual] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const playCountRef = useRef(0);
  const hasCompletedRef = useRef(false);
  const isReplayModeRef = useRef(false);
  const statsReveal = useReveal<HTMLDivElement>();
  const ctaReveal = useReveal<HTMLDivElement>();

  // Clicking a closed item opens it and hands control to the user;
  // clicking the open item collapses everything. Either way autoplay stops.
  const handleItemClick = (index: number) => {
    setIsManual(true);
    setIsPaused(false);
    setActiveIndex(activeIndex === index ? null : index);
  };

  // The progress underline doubles as the rotation timer: when its
  // fill animation finishes, advance to the next item.
  const handleFillEnd = () => {
    if (isManual) return;
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % reasons.length,
    );
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;
    setShowReplay(false);
    isReplayModeRef.current = true;
    video.currentTime = 0;
    video.play().catch((err) => console.log("Video replay failed:", err));
  };

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const handleEnded = () => {
      if (isReplayModeRef.current) {
        isReplayModeRef.current = false;
        setShowReplay(true);
        return;
      }
      playCountRef.current += 1;
      if (playCountRef.current < 3) {
        video.currentTime = 0;
        video.play().catch((err) => console.log("Video loop failed:", err));
      } else {
        hasCompletedRef.current = true;
        setShowReplay(true);
      }
    };

    video.addEventListener("ended", handleEnded);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          if (!hasCompletedRef.current) {
            video.play().catch((err) => console.log("Video play failed:", err));
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      video.removeEventListener("ended", handleEnded);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div
        ref={sectionRef}
        className="bg-white w-full max-w-screen-2xl rounded-2xl overflow-hidden"
      >
        <h2 className="text-center text-3xl font-light tracking-wide px-6 pt-8 pb-4 md:text-5xl lg:pt-10 lg:pb-6">
          Why Qmax <span className="text-red-500">Systems</span>
        </h2>
        {/*Main Section*/}
        <div className="flex flex-col lg:flex-row lg:items-center items-stretch gap-0 z-[1]">
          <div className="w-full lg:w-[52%] flex flex-col items-center justify-center px-6 lg:pl-12 lg:pr-2 py-8 lg:py-10">
            <div
              className="relative w-full origin-center lg:-translate-x-12 lg:scale-[1.15] xl:-translate-x-20 xl:scale-[1.22]"
              style={{ maxWidth: "100%" }}
            >
              <video
                ref={videoRef}
                className="block h-auto w-full"
                width={765}
                height={876}
                preload="auto"
                muted
                playsInline
              >
                <source
                  src="https://d1yetprhniwywz.cloudfront.net/inside_out_V2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            {showReplay && (
              <button
                type="button"
                onClick={handleReplay}
                className="relative z-10 mt-3 lg:mt-12 xl:mt-16 rounded-full border border-[#222] bg-white px-3 py-1 text-xs font-medium text-[#222] transition hover:bg-[#222] hover:text-white"
              >
                Replay
              </button>
            )}
          </div>
          <div className="relative z-10 w-full lg:w-[48%] flex flex-col justify-center px-6 lg:pl-2 lg:pr-12 py-6 lg:py-8 lg:-ml-12 xl:-ml-16 bg-white lg:bg-transparent">
            <style>{`@keyframes why-fill { from { width: 0; } to { width: 100%; } }`}</style>
            <div className="grid w-full max-w-3xl mx-auto gap-0">
              {reasons.map((reason, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="relative border-b border-zinc-200 first:border-t"
                    onMouseEnter={() => {
                      if (!isManual && isActive) setIsPaused(true);
                    }}
                    onMouseLeave={() => {
                      if (!isManual && isActive) setIsPaused(false);
                    }}
                  >
                    <button
                      onClick={() => handleItemClick(index)}
                      className="w-full flex cursor-pointer items-center justify-between gap-4 py-2 text-left"
                    >
                      <span
                        className={`flex-1 min-w-0 text-lg font-light leading-relaxed md:text-2xl tracking-tight transition-colors duration-300 xl:whitespace-nowrap ${isActive ? "text-red-500" : "text-foreground"}`}
                      >
                        {reason.title}
                      </span>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`text-red-500 transition-transform [transition-duration:350ms] ${isActive ? "rotate-180" : ""}`}
                        >
                          <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] [transition-duration:450ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 text-base leading-relaxed font-light text-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 overflow-hidden">
                        <span
                          onAnimationEnd={handleFillEnd}
                          className="block h-full bg-red-500"
                          style={
                            isManual
                              ? { width: "100%" }
                              : {
                                  width: 0,
                                  animation: `why-fill ${ROTATE_MS}ms linear forwards`,
                                  animationPlayState:
                                    isPaused || !inView ? "paused" : "running",
                                }
                          }
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* <div className="mt-8">
            <a
              href="/mechanical-industrial-design-services/industrial-design"
              className="text-gray-900 font-semibold underline hover:text-red-500 transition-colors inline-flex items-center gap-2"
            >
              Explore Our Services
              <span>→</span>
            </a>
          </div> */}
          </div>
        </div>

        {/* Stats Row - Full Width */}
        <div
          ref={statsReveal.ref}
          className={`w-full max-w-6xl mx-auto mt-12 lg:mt-16 px-6 text-center transition-[opacity,transform] [transition-duration:650ms] ${statsReveal.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[26px]"}`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {stats.map((stat) => (
              <StatCell key={stat.label} {...stat} start={statsReveal.inView} />
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div
          ref={ctaReveal.ref}
          className={`mx-6 lg:mx-12 mt-14 lg:mt-[72px] mb-12 lg:mb-16 transition-[opacity,transform] [transition-duration:650ms] ${ctaReveal.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[26px]"}`}
        >
          <div className="flex items-center justify-between gap-10 rounded-md bg-[#2A2F36] px-14 py-11 shadow-[0_14px_36px_-18px_rgba(16,24,40,0.30)] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6 max-[900px]:px-7 max-[900px]:py-8">
            <div className="max-w-[648px]">
              <h3 className="m-0 mb-2.5 text-3xl font-light tracking-wide text-white md:text-4xl">
                Ready to build your next product?
              </h3>
              <p className="m-0 text-white">
                From concept to production — one accountable engineering
                partner.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2.5 rounded border-[1.5px] border-red-500 bg-red-500 px-[26px] py-3.5 uppercase text-white no-underline transition-[background,border-color,color,transform] duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-px hover:border-red-600 hover:bg-red-600 hover:text-white hover:no-underline"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-3.5 w-3.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
