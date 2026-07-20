"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { renderHeroTitle } from "./hero-title";

const HERO_OVERLAY =
  "linear-gradient(100deg, rgba(8, 12, 22, 0.9) 0%, rgba(8, 12, 22, 0.72) 52%, rgba(8, 12, 22, 0.28) 100%)";

export type HardwareServiceHeroSectionProps = {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  priority?: boolean;
};

export function HardwareServiceHeroSectionV2({
  imageSrc,
  imageAlt,
  title,
  ctaHref,
  ctaLabel,
  priority = true,
}: HardwareServiceHeroSectionProps) {
  return (
    <section
      className="relative mt-[var(--nav-h)] flex w-full items-center overflow-hidden min-h-[max(520px,calc(100svh-var(--nav-h)))]"
      aria-labelledby="hardware-service-hero-title"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={priority}
      />
      <div
        className="absolute inset-0"
        aria-hidden={true}
        style={{ background: HERO_OVERLAY }}
      />
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-end px-[clamp(24px,6vw,96px)] pb-[clamp(96px,13vh,160px)] text-center">
        <h1
          id="hardware-service-hero-title"
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
