"use client";

import type { ReactNode } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { renderHeroTitle } from "./hero-title";

const HERO_GRADIENT =
  "linear-gradient(90deg, rgba(11,45,90,0.88) 0%, rgba(11,45,90,0.78) 14%, rgba(11,45,90,0.64) 30%, rgba(11,45,90,0.48) 46%, rgba(11,45,90,0.32) 62%, rgba(11,45,90,0.16) 78%, rgba(11,45,90,0.06) 90%, rgba(11,45,90,0) 100%)";

// Below this viewport width the hero stacks full-width, so we skip width-matching.
const MD_BREAKPOINT = 768;

// useLayoutEffect on the client, useEffect during SSR (avoids the hydration warning).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type ServiceVideoHeroProps = {
  title: ReactNode;
  description: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  videoSrc: string;
};

export function ServiceVideoHero({
  title,
  description,
  ctaHref,
  ctaLabel,
  videoSrc,
}: ServiceVideoHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  // Width of the title's widest rendered line; constrains the description so the
  // two blocks share the same width regardless of copy length. `undefined` =
  // unconstrained (mobile / before first measure).
  const [titleLineWidth, setTitleLineWidth] = useState<number>();

  useIsomorphicLayoutEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const measure = () => {
      if (window.innerWidth < MD_BREAKPOINT) {
        setTitleLineWidth(undefined);
        return;
      }
      // A Range over the title's text yields one client rect per wrapped line;
      // the widest of those is the title's true visual width.
      const range = document.createRange();
      range.selectNodeContents(el);
      let widest = 0;
      for (const rect of Array.from(range.getClientRects())) {
        widest = Math.max(widest, rect.width);
      }
      setTitleLineWidth(widest > 0 ? Math.ceil(widest) : undefined);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [title]);

  return (
    <section
      id="hero"
      className="relative mt-[var(--nav-h)] flex w-full items-center overflow-hidden bg-[#080e16] min-h-[max(520px,calc(100svh-var(--nav-h)))]"
      aria-labelledby="service-video-hero-title"
    >
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        style={{ background: HERO_GRADIENT }}
      />

      <div className="relative z-[2] box-border w-full p-6 py-16 sm:p-10 md:w-3/5 md:p-16 md:py-[clamp(28px,4vh,64px)]">
        <div className="max-w-full">
          <h1
            ref={titleRef}
            id="service-video-hero-title"
            className="mb-[clamp(14px,2vh,24px)] w-fit text-balance font-bold leading-[1.1] tracking-wider text-white [font-size:clamp(32px,4.4vw,56px)]"
          >
            {renderHeroTitle(title)}
          </h1>
          <p
            style={titleLineWidth ? { maxWidth: titleLineWidth } : undefined}
            className="mb-[clamp(20px,3vh,36px)] w-full max-w-full text-justify font-light leading-[1.55] tracking-wider text-white [font-size:clamp(15px,1.6vw,19px)]"
          >
            {description}
          </p>
          <Link
            href={ctaHref}
            className="inline-block cursor-pointer rounded-md bg-red-500 px-8 py-[14px] text-base font-semibold uppercase tracking-[0.04em] text-white no-underline transition-colors duration-150 hover:bg-red-600 hover:text-white hover:no-underline"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
