import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_OVERLAY =
  "linear-gradient(100deg, rgba(8, 12, 22, 0.9) 0%, rgba(8, 12, 22, 0.72) 52%, rgba(8, 12, 22, 0.28) 100%)";

export type HardwareServiceHeroSectionProps = {
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  /** One or more blocks (e.g. `<p>`); spacing is handled by the wrapper. */
  description: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  priority?: boolean;
};

export function HardwareServiceHeroSection({
  imageSrc,
  imageAlt,
  title,
  description,
  ctaHref,
  ctaLabel,
  priority = true,
}: HardwareServiceHeroSectionProps) {
  // mt-16 clears fixed `Navigation` (h-16). min-height fills the viewport below the bar.
  return (
    <section
      data-budge-target
      style={{ minHeight: "calc(100vh - 4rem)" }}
      className="relative mt-16 flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
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
      <div className="relative z-10 w-full px-7 py-16 sm:px-10 md:px-[72px] md:py-20">
        <div className="w-full md:w-3/5">
          <h1 className="w-full text-white mb-6 font-bold leading-[1.1] tracking-[-0.01em] [font-size:clamp(32px,4.4vw,56px)]">
            {title}
          </h1>
          <div className="w-full font-semibold text-xl mb-10 space-y-4 text-white text-justify md:mb-[42px] [&_p]:text-justify [&_p]:text-white">
            {description}
          </div>
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2.5 rounded-sm bg-red-500 px-9 py-[15px] text-[12.5px] font-bold uppercase tracking-[1.3px] text-white transition-colors hover:bg-red-600"
          >
            {ctaLabel}{" "}
            <span
              className="text-base transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden={true}
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
