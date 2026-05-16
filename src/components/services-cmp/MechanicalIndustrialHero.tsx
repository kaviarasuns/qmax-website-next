"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";

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
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const enterGroupRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const h1 = h1Ref.current;
    const enterGroup = enterGroupRef.current;
    const sub = subRef.current;
    const cta = ctaRef.current;
    if (!h1 || !enterGroup || !sub || !cta) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      const rect = h1.getBoundingClientRect();
      enterGroup.style.top = `${rect.bottom + 24}px`;
      sub.style.opacity = "1";
      sub.style.transform = "";
      sub.style.pointerEvents = "auto";
      cta.style.opacity = "1";
      cta.style.transform = "";
      cta.style.pointerEvents = "auto";
      return;
    }

    let ticking = false;

    const positionEnterGroup = () => {
      const rect = h1.getBoundingClientRect();
      enterGroup.style.top = `${rect.bottom + 24}px`;
    };

    const update = () => {
      const sy = window.scrollY;
      const vh = window.innerHeight;

      if (sy >= 2 * vh) {
        ticking = false;
        return;
      }

      const p2 = clamp((sy - vh) / vh, 0, 1);
      const p2e = easeOutCubic(p2);

      const h1Shift = -p2e * 100;
      h1.style.transform = `translateY(${h1Shift.toFixed(2)}px)`;

      const h1Rect = h1.getBoundingClientRect();
      enterGroup.style.top = `${h1Rect.bottom + 24}px`;

      const sRaw = clamp((p2 - 0.05) / 0.45, 0, 1);
      const sE = easeOutCubic(sRaw);
      sub.style.opacity = sE.toFixed(4);
      sub.style.transform = `translateY(${((1 - sE) * 36).toFixed(2)}px)`;
      sub.style.pointerEvents = sE > 0.5 ? "auto" : "none";

      const cRaw = clamp((p2 - 0.3) / 0.45, 0, 1);
      const cE = easeOutCubic(cRaw);
      cta.style.opacity = cE.toFixed(4);
      cta.style.transform = `translateY(${((1 - cE) * 36).toFixed(2)}px)`;
      cta.style.pointerEvents = cE > 0.5 ? "auto" : "none";

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    const onResize = () => {
      positionEnterGroup();
      update();
    };

    positionEnterGroup();
    update();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="h-[300vh]">
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

        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-end px-[clamp(24px,6vw,96px)] pb-[clamp(150px,17vh,200px)] text-center">
          <h1
            id="mechanical-industrial-hero-title"
            ref={h1Ref}
            className="max-w-[900px] text-balance font-bold leading-[1.1] tracking-[-0.022em] text-white will-change-transform [font-size:clamp(34px,4vw,58px)]"
          >
            {title}
          </h1>
        </div>

        <div
          ref={enterGroupRef}
          className="absolute left-0 right-0 z-[2] flex flex-col items-center gap-[18px] px-[clamp(24px,6vw,96px)] text-center"
        >
          <p
            ref={subRef}
            className="max-w-[840px] text-pretty font-bold leading-[1.62] text-white/90 opacity-0 will-change-[transform,opacity] [font-size:clamp(14px,1.3vw,17px)] pointer-events-none"
          >
            {subtitle}
          </p>
          <Link
            ref={ctaRef}
            href={ctaHref}
            className="inline-flex items-center gap-[9px] rounded-md bg-brand-red px-7 py-[13px] text-[14.5px] font-bold tracking-[0.01em] text-white opacity-0 will-change-[transform,opacity] transition-colors hover:bg-[#d92b14] pointer-events-none"
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
