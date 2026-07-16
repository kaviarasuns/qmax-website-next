"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { renderHeroTitle } from "./hero-title";

const HERO_GRADIENT =
  "linear-gradient(180deg, rgba(6,14,26,0.52) 0%, rgba(6,14,26,0.33) 48%, rgba(6,14,26,0.54) 100%)";

export type ServiceVideoHeroProps = {
  title: ReactNode;
  description: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  videoSrc: string;
};

export function ServiceVideoHeroV2({
  title,
  ctaHref,
  ctaLabel,
  videoSrc,
}: ServiceVideoHeroProps) {
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

      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-end px-[clamp(24px,6vw,96px)] pb-[clamp(96px,13vh,160px)] text-center">
        <h1
          id="service-video-hero-title"
          className="max-w-[900px] text-balance font-bold leading-[1.1] tracking-wide text-white [font-size:clamp(32px,4.4vw,56px)]"
        >
          {renderHeroTitle(title)}
        </h1>
        <Link
          href={ctaHref}
          className="mt-5 inline-block cursor-pointer rounded-md bg-red-500 px-8 py-[14px] text-base font-semibold uppercase tracking-[0.04em] text-white no-underline transition-colors duration-150 hover:bg-red-600 hover:text-white hover:no-underline"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
