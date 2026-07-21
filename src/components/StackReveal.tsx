"use client";

import { useEffect, useRef, useState } from "react";

const AUTO_EXPAND_MS = 4000;

/** Shared transition duration for the expand animation (panel, image, title). */
const EXPAND_DURATION = "[transition-duration:1200ms]";

export type StackRevealItem = {
  step: string;
  title: string;
  description: string;
  /** Optional cover image URL (e.g. `/path/in/public.jpg`). */
  imageSrc?: string;
  /** Shown behind or when image is absent; use solid Tailwind bg classes. */
  fallbackClassName: string;
};

type StackRevealConcept06Props = {
  items: StackRevealItem[];
  className?: string;
};

/**
 * Concept 06 · Stack Reveal - horizontal panels that expand on hover to show copy.
 * When idle and in view, stacks auto-expand in sequence (4s each) starting from the first.
 */
export default function StackReveal({
  items,
  className = "",
}: StackRevealConcept06Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsInView(visible);
        if (!visible) setActiveIndex(0);
      },
      { threshold: 0.5 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || isHovering) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, AUTO_EXPAND_MS);

    return () => window.clearInterval(id);
  }, [isInView, isHovering, items.length]);

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setActiveIndex(0);
  };

  return (
    <section
      ref={sectionRef}
      className={`px-[6vw] py-6 sm:py-8 lg:py-10 max-md:px-5 ${className}`}
    >
      {/* <div className="mb-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#E94B3C]">
        {eyebrow}
      </div> */}
      <h2 className="text-center text-3xl font-light tracking-wide md:text-5xl">
        Industries We <span className="text-red-500">Serve</span>
      </h2>
      <div className="py-9"></div>
      {/* <h2 className="mb-3.5 text-balance text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold tracking-[-0.02em] text-[#0e1116]">
        {title}
      </h2> */}

      {/* <p className="mb-12 max-w-3xl text-base leading-relaxed text-[#6b7280]">
        {subtitle}
      </p> */}

      <div
        className="flex h-[520px] w-full gap-2 overflow-hidden rounded-3xl max-[1100px]:h-auto max-[1100px]:flex-col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, index) => {
          const isAutoExpanded =
            isInView && !isHovering && activeIndex === index;

          return (
            <div
              key={item.step}
              tabIndex={0}
              className={`group relative flex min-h-0 flex-1 cursor-pointer flex-col justify-end overflow-hidden p-6 text-white outline-none transition-[flex-grow,flex-basis,padding-bottom] ${EXPAND_DURATION} [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)] hover:flex-[5] hover:pb-10 focus-visible:ring-2 focus-visible:ring-[#E94B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-within:flex-[5] focus-within:pb-10 max-[1100px]:min-h-[140px] max-[1100px]:flex-none max-[1100px]:hover:flex-none max-[1100px]:focus-within:flex-none max-[1100px]:hover:pb-6 max-[1100px]:focus-within:pb-6 ${isAutoExpanded ? "is-auto-expanded flex-[5] pb-10 max-[1100px]:pb-6" : ""}`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center transition-[transform,filter] ${EXPAND_DURATION} ease-out ${item.fallbackClassName} scale-110 brightness-[0.55] group-hover:scale-100 group-hover:brightness-[0.85] group-focus-within:scale-100 group-focus-within:brightness-[0.85] group-[.is-auto-expanded]:scale-100 group-[.is-auto-expanded]:brightness-[0.85]`}
                style={
                  item.imageSrc
                    ? { backgroundImage: `url(${item.imageSrc})` }
                    : undefined
                }
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-[40%] to-[#0e1116]/85"
                aria-hidden
              />

              <div className="relative z-[2] flex flex-col items-start">
                {/* <div className="mb-0 max-h-0 overflow-hidden font-mono text-[11px] font-medium tracking-[0.3em] text-red-500 opacity-0 transition-[max-height,opacity,margin] duration-500 group-hover:mb-2 group-hover:max-h-6 group-hover:opacity-100 group-focus-within:mb-2 group-focus-within:max-h-6 group-focus-within:opacity-100 group-[.is-auto-expanded]:mb-2 group-[.is-auto-expanded]:max-h-6 group-[.is-auto-expanded]:opacity-100">
                  {item.step}
                </div> */}
                <h3
                  className={`ml-3 mt-1 flex items-end gap-2 whitespace-nowrap text-lg font-normal tracking-wide [transform-origin:0%_100%] -rotate-90 translate-y-[35%] transition-[transform,font-size,margin] ${EXPAND_DURATION} [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)] group-hover:ml-0 group-hover:text-3xl group-hover:rotate-0 group-hover:translate-y-2 group-focus-within:ml-0 group-focus-within:text-3xl group-focus-within:rotate-0 group-focus-within:translate-y-2 group-[.is-auto-expanded]:ml-0 group-[.is-auto-expanded]:text-3xl group-[.is-auto-expanded]:rotate-0 group-[.is-auto-expanded]:translate-y-2 max-[1100px]:text-lg max-[1100px]:rotate-0 max-[1100px]:translate-y-0`}
                >
                  <span>{item.title}</span>
                  {/* <span className="mb-0.5 font-mono text-[11px] font-medium tracking-[0.3em] text-red-500 transition-[letter-spacing,opacity] duration-500 group-hover:opacity-0 group-focus-within:opacity-0 group-hover:tracking-[0.15em] group-focus-within:tracking-[0.15em] group-[.is-auto-expanded]:opacity-0 group-[.is-auto-expanded]:tracking-[0.15em]">
                    {item.step}
                  </span> */}
                </h3>
                {/* <p className="max-h-0 w-full overflow-hidden text-left text-sm leading-relaxed text-white/85 opacity-0 transition-[max-height,opacity,margin] duration-500 group-hover:mt-3.5 group-hover:max-h-[200px] group-hover:opacity-100 group-focus-within:mt-3.5 group-focus-within:max-h-[200px] group-focus-within:opacity-100 group-[.is-auto-expanded]:mt-3.5 group-[.is-auto-expanded]:max-h-[200px] group-[.is-auto-expanded]:opacity-100">
                  {item.description}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
