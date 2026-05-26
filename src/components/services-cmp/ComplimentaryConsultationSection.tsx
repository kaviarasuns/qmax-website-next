import Link from "next/link";
import { cn } from "@/lib/utils";

const SHARED_BENEFITS = [
  "1-Hour Focused Session",
  "Engineering-Driven Guidance",
  "Zero Sales Pitch — Guaranteed",
  "Fully Complimentary — No Cost",
] as const;

const VARIANTS = {
  hardware: {
    title: "Get a Complimentary Consultation with Our Digital Hardware Experts",
    subtitle:
      "1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven — no sales pitch.",
    architectBenefit: "Senior Hardware Architect",
    ctaHref: "/hardware-development-services/contact",
  },
  pcb: {
    title: "Get a Complimentary Consultation with Our Digital PCB Experts",
    subtitle:
      "1-hour session with a Qmax Systems Senior Digital PCB Architect. Practical, engineering-driven — no sales pitch.",
    architectBenefit: "Senior PCB Architect",
    ctaHref: "/pcb-design/contact",
  },
} as const;

export type ComplimentaryConsultationSectionProps = {
  variant?: keyof typeof VARIANTS;
  title?: string;
  subtitleSuffix?: string;
  className?: string;
};

export function ComplimentaryConsultationSection({
  variant = "hardware",
  title,
  subtitleSuffix = "",
  className,
}: ComplimentaryConsultationSectionProps) {
  const content = VARIANTS[variant];
  const benefits = [content.architectBenefit, ...SHARED_BENEFITS];

  return (
    <section className={cn("bg-white px-6 pb-16 md:px-8 md:pb-20", className)}>
      <div className="mx-auto flex max-w-[1080px] flex-col items-center justify-between gap-10 rounded-2xl bg-[#f3f4f6] px-8 py-10 md:flex-row md:gap-12 md:px-14 md:py-[52px] max-[800px]:px-8 max-[800px]:py-10">
        <div className="w-full max-w-[480px]">
          <h3 className="text-[28px] uppercase md:text-4xl">
            {title ?? content.title}
          </h3>
          <p className="mt-3.5 text-[15px] leading-relaxed text-[#555]">
            {content.subtitle}
            {subtitleSuffix}
          </p>
          <Link
            href={content.ctaHref}
            className="group relative mt-7 inline-flex items-center gap-2.5 overflow-hidden rounded-lg bg-[#e52222] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#c92a36] hover:shadow-[0_10px_28px_rgba(229,34,34,0.3)]"
          >
            <span className="relative z-[1]">Schedule Consultation</span>
            <span
              className="relative z-[1] text-base transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full"
              aria-hidden
            />
          </Link>
        </div>

        <ul className="flex w-full min-w-0 shrink-0 flex-col gap-3.5 md:min-w-[260px] md:w-auto">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center text-[15px] font-bold text-[#e52222]"
                aria-hidden
              >
                ✓
              </span>
              <span className="text-[15px] font-semibold text-[#1a1a1a]">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
