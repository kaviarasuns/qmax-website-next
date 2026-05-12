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
  // mt-16 clears fixed `Navigation` (h-16). min-height keeps ~86vh feel below the bar.
  return (
    <section className="relative mt-16 flex min-h-[calc(86vh-4rem)] items-center overflow-hidden">
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
        <div className="w-full md:w-2/3">
          <h1 className="mb-7 text-[32px] font-semibold leading-[1.14] tracking-[-0.5px] text-white md:text-[44px]">
            {title}
          </h1>
          <div className="mb-10 space-y-4 text-[17px] leading-[1.78] text-white text-justify md:mb-[42px]">
            {description}
          </div>
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2.5 rounded-sm bg-[#e52222] px-9 py-[15px] text-[12.5px] font-bold uppercase tracking-[1.3px] text-white transition-colors hover:bg-[#c21818]"
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
