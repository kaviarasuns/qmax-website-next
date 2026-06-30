"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { renderHeroTitle } from "./hero-title";

function clamp(v: number, lo: number, hi: number) {
  return Math.min(Math.max(v, lo), hi);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export type MechanicalIndustrialHeroProps = {
  title: ReactNode;
  subtitle: string;
  videoSrc: string;
  ctaHref: string;
  ctaLabel: string;
};

export function MechanicalIndustrialHero({
  title,
  subtitle,
  videoSrc,
  ctaHref,
  ctaLabel,
}: MechanicalIndustrialHeroProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sub = subRef.current;
    const cta = ctaRef.current;
    if (!wrapper || !sub || !cta) return;

    const applyReveal = (subProgress: number, ctaProgress: number) => {
      sub.style.opacity = subProgress.toFixed(4);
      sub.style.transform = `translateY(${((1 - subProgress) * 28).toFixed(2)}px)`;
      sub.style.pointerEvents = subProgress > 0.5 ? "auto" : "none";

      cta.style.opacity = ctaProgress.toFixed(4);
      cta.style.transform = `translateY(${((1 - ctaProgress) * 28).toFixed(2)}px)`;
      cta.style.pointerEvents = ctaProgress > 0.5 ? "auto" : "none";
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      applyReveal(1, 1);
      return;
    }

    let ticking = false;
    let lastProgress = -1;

    const update = () => {
      ticking = false;

      // Derive progress from the wrapper's position so the reveal stays
      // accurate regardless of anything above the hero in the page.
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      const pinned = -rect.top;
      const p = clamp(pinned / vh, 0, 1);

      if (p === lastProgress) return;
      lastProgress = p;

      // Subtitle eases in over the first 55% of the pinned scroll.
      const subRaw = clamp(p / 0.55, 0, 1);
      const subE = easeOutCubic(subRaw);

      // CTA follows behind, easing in between 25% and 85%.
      const ctaRaw = clamp((p - 0.25) / 0.6, 0, 1);
      const ctaE = easeOutCubic(ctaRaw);

      applyReveal(subE, ctaE);
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="h-[200vh]">
      <section
        className="sticky top-0 z-0 h-screen overflow-hidden bg-[#04243D]"
        aria-labelledby="mechanical-industrial-hero-title"
      >
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
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
          className="absolute inset-0 z-[1]"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(6, 14, 26, 0.52) 0%, rgba(6, 14, 26, 0.33) 48%, rgba(6, 14, 26, 0.54) 100%)",
          }}
        />

        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-end px-[clamp(24px,6vw,96px)] pb-[clamp(96px,13vh,160px)] text-center">
          <h1
            id="mechanical-industrial-hero-title"
            className="max-w-[900px] text-balance font-bold leading-[1.1] text-white [font-size:clamp(34px,4vw,58px)]"
          >
            {renderHeroTitle(title)}
          </h1>
          <p
            ref={subRef}
            className="mt-6 max-w-[840px] text-pretty font-bold leading-[1.62] text-white opacity-0 will-change-[transform,opacity] [font-size:clamp(14px,1.3vw,17px)] pointer-events-none"
            style={{ transform: "translateY(28px)" }}
          >
            {subtitle}
          </p>
          <Link
            ref={ctaRef}
            href={ctaHref}
            className="mt-5 inline-flex items-center gap-[9px] rounded-md bg-brand-red px-7 py-[13px] text-[14.5px] font-bold uppercase tracking-[0.01em] text-white opacity-0 will-change-[transform,opacity] transition-colors hover:bg-[#d92b14] pointer-events-none"
            style={{ transform: "translateY(28px)" }}
          >
            {ctaLabel}
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
