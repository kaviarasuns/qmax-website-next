import type { ReactNode } from "react";
import Link from "next/link";

const HERO_GRADIENT =
  "linear-gradient(90deg, rgba(11,45,90,0.88) 0%, rgba(11,45,90,0.78) 14%, rgba(11,45,90,0.64) 30%, rgba(11,45,90,0.48) 46%, rgba(11,45,90,0.32) 62%, rgba(11,45,90,0.16) 78%, rgba(11,45,90,0.06) 90%, rgba(11,45,90,0) 100%)";

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
            id="service-video-hero-title"
            className="mb-[clamp(14px,2vh,24px)] text-balance font-bold leading-[1.1] tracking-[-0.01em] text-white [font-size:clamp(32px,4.4vw,56px)]"
          >
            {title}
          </h1>
          <p className="mb-[clamp(20px,3vh,36px)] max-w-full text-justify font-normal leading-[1.55] text-white/[0.92] [font-size:clamp(15px,1.6vw,19px)]">
            {description}
          </p>
          <Link
            href={ctaHref}
            className="inline-block cursor-pointer rounded-md bg-[#E63329] px-8 py-[14px] text-base font-semibold uppercase tracking-[0.04em] text-white no-underline transition-colors duration-150 hover:bg-[#C72A21] hover:text-white hover:no-underline"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
