import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type SchematicReviewItem = {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
};

const DEFAULT_CONSULTATION_BENEFITS = [
  "Senior Hardware Architect",
  "1-Hour Focused Session",
  "Engineering-Driven Guidance",
  "Zero Sales Pitch — Guaranteed",
  "Fully Complimentary — No Cost",
] as const;

export type ComplimentarySchematicReviewSectionProps = {
  items: SchematicReviewItem[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  className?: string;
  consultationHeading?: string;
  consultationSubtitle?: string;
  consultationCtaHref?: string;
  consultationCtaLabel?: string;
  consultationBenefits?: string[];
  showConsultationCta?: boolean;
};

export function ComplimentarySchematicReviewSection({
  items,
  title = "Complimentary Schematic Review for",
  titleHighlight = "High-Speed Digital PCB Design",
  subtitle = "High-speed PCB success starts at the schematic level. Every Qmax PCB layout engagement includes a Complimentary Schematic Review. Our senior engineers analyze your design for:",
  className,
  consultationHeading = "Get a Complimentary Consultation with Our Digital Hardware Experts",
  consultationSubtitle = "1-hour session with a Qmax Systems Senior Hardware Architect. Practical, engineering-driven — no sales pitch.",
  consultationCtaHref = "/hardware-development-services/contact",
  consultationCtaLabel = "Schedule Consultation",
  consultationBenefits = [...DEFAULT_CONSULTATION_BENEFITS],
  showConsultationCta = true,
}: ComplimentarySchematicReviewSectionProps) {
  return (
    <section className={cn("bg-white", className)}>
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20">
        <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight text-slate-800 md:text-[42px]">
          {title}
          <br />
          <span className="text-[#F33117]">{titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-center text-base leading-relaxed text-slate-500">
          {subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className={cn(
                "rounded-[20px] border border-slate-200 bg-white px-8 py-9 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:px-9 md:py-10",
                "md:last:odd:col-span-2 md:last:odd:mx-auto md:last:odd:max-w-[calc(50%-0.75rem)]",
              )}
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-800 md:text-[22px]">
                {item.icon ? (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#F33117] [&>svg]:h-7 [&>svg]:w-7">
                    {item.icon}
                  </span>
                ) : null}
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {showConsultationCta ? (
        <div className="px-6 pb-16 md:px-8 md:pb-20">
          <div className="mx-auto flex max-w-[1080px] flex-col items-center justify-between gap-10 rounded-2xl bg-[#f3f4f6] px-8 py-10 md:flex-row md:gap-12 md:px-14 md:py-[52px] max-[800px]:px-8 max-[800px]:py-10">
            <div className="w-full max-w-[480px]">
              <h3 className="text-[28px] font-extrabold uppercase leading-[1.1] tracking-[-0.5px] text-[#1a1a1a] md:text-4xl">
                {consultationHeading}
              </h3>
              <p className="mt-3.5 text-[15px] leading-relaxed text-[#555]">
                {consultationSubtitle}
              </p>
              <Link
                href={consultationCtaHref}
                className="group relative mt-7 inline-flex items-center gap-2.5 overflow-hidden rounded-lg bg-[#e52222] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#c92a36] hover:shadow-[0_10px_28px_rgba(229,34,34,0.3)]"
              >
                <span className="relative z-[1]">{consultationCtaLabel}</span>
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
              {consultationBenefits.map((benefit) => (
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
        </div>
      ) : null}
    </section>
  );
}
