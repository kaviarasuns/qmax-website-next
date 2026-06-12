import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ConsultationCtaBarProps {
  heading: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel?: string;
  /** Override section spacing (e.g. after TechnicalAdvantageSection) */
  className?: string;
  /** Override inner bar max-width */
  containerClassName?: string;
}

export function ConsultationCtaBar({
  heading,
  subtitle,
  ctaHref,
  ctaLabel = "Schedule Consultation",
  className,
  containerClassName = "max-w-[1200px]",
}: ConsultationCtaBarProps) {
  return (
    <section
      id="consultation-cta-bar"
      className={cn(
        "relative bg-white px-8 pt-2 pb-24 max-[900px]:px-6 max-[900px]:pt-2 max-[900px]:pb-16",
        className,
      )}
    >
      <div className={cn("relative mx-auto", containerClassName)}>
        <span
          className="pointer-events-none absolute -top-4 right-[8%] z-[1] h-[26px] w-[26px] bg-[#E63329]"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-2.5 left-[5%] z-[1] h-[26px] w-[26px] bg-[#E63329]"
          aria-hidden="true"
        />
        <div className="relative z-[2] flex items-center justify-between gap-10 rounded-md bg-[#2A2F36] px-14 py-11 shadow-[0_14px_36px_-18px_rgba(16,24,40,0.30)] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6 max-[900px]:px-7 max-[900px]:py-8">
          <div className="min-w-0 basis-[70%] max-[900px]:basis-auto">
            <h2 className="m-0 mb-2.5 text-3xl font-light tracking-wide text-white md:text-4xl">
              {heading}
            </h2>
            <p className="m-0 text-left text-white">{subtitle}</p>
          </div>
          <Link
            href={ctaHref}
            className="inline-flex shrink-0 items-center gap-2.5 rounded border-[1.5px] border-red-500 bg-red-500 px-[26px] py-3.5 uppercase text-white no-underline transition-[background,border-color,color,transform] duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-px hover:border-red-600 hover:bg-red-600 hover:text-white hover:no-underline"
          >
            <span>{ctaLabel}</span>
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
          </Link>
        </div>
      </div>
    </section>
  );
}
