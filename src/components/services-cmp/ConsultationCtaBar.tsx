import Link from "next/link";

export interface ConsultationCtaBarProps {
  heading: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel?: string;
}

export function ConsultationCtaBar({
  heading,
  subtitle,
  ctaHref,
  ctaLabel = "Schedule Consultation",
}: ConsultationCtaBarProps) {
  return (
    <section className="bg-white px-6 pb-[60px] pt-10 max-[900px]:px-6 md:px-10 md:pb-20 md:pt-[60px]">
      <div className="relative mx-auto flex max-w-[1240px] flex-col items-start gap-6 overflow-hidden rounded-xl bg-[#1a1a1a] px-8 py-9 md:flex-row md:items-center md:justify-between md:gap-10 md:px-14 md:py-11">
        <span
          className="pointer-events-none absolute right-[18px] top-[18px] h-3.5 w-3.5 rounded-sm bg-brand-500"
          aria-hidden={true}
        />
        <span
          className="pointer-events-none absolute bottom-[18px] left-[18px] h-3.5 w-3.5 rounded-sm bg-brand-500"
          aria-hidden={true}
        />
        <div className="relative z-[1] min-w-0 flex-1">
          <h2 className="mb-2 text-xl font-semibold leading-snug tracking-[-0.2px] text-white md:text-2xl">
            {heading}
          </h2>
          <p className="max-w-[680px] text-[14.5px] leading-relaxed text-[#b5b5b5]">
            {subtitle}
          </p>
        </div>
        <div className="relative z-[1] shrink-0">
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2.5 rounded border-[1.5px] border-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.6px] text-white transition-colors duration-200 hover:bg-white hover:text-[#1a1a1a]"
          >
            {ctaLabel}{" "}
            <span
              className="text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5"
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
