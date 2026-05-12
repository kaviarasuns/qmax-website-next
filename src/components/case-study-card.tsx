import { CaseStudy } from "../../types/case-study";
import { CaseStudyCarousel } from "./case-study-carousel";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[11px] font-bold tabular-nums tracking-[0.08em] text-brand-red">
        {index}
      </span>
      <span className="h-px flex-1 bg-zinc-200/80" aria-hidden="true" />
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
        {label}
      </span>
    </div>
  );
}

function DetailSection({
  index,
  title,
  items,
  variant = "list",
}: {
  index: string;
  title: string;
  items: string[];
  variant?: "list" | "numbered" | "chips";
}) {
  if (!items.length) return null;

  return (
    <div className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] break-inside-avoid">
      <SectionLabel index={index} label={title} />

      {variant === "chips" ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-lg border border-zinc-200/80 bg-zinc-50 px-3 py-1.5 text-[13px] text-zinc-700 leading-snug"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[14.5px] text-zinc-700 leading-relaxed"
            >
              {variant === "numbered" ? (
                <span className="mt-px flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[10px] font-bold tabular-nums text-zinc-500">
                  {i + 1}
                </span>
              ) : (
                <span
                  className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-brand-red"
                  aria-hidden="true"
                />
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const hasSummary = Boolean(caseStudy.summary?.trim());

  return (
    <div className="relative overflow-hidden bg-[#f5f5f5] py-14 md:py-20">
      {/* Background gradients */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_9%_12%,rgba(0,0,0,0.03),transparent_40%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.86))]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
        {/* ── Header ── */}
        <header className="pt-4">
          <h1
            className="text-2xl font-bold leading-tight tracking-tight text-zinc-950 md:text-3xl"
            style={{ textWrap: "balance" }}
          >
            {caseStudy.title}
          </h1>
        </header>

        {/* ── Gallery + Highlights ── */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="lg:w-[65%] shrink-0">
            <CaseStudyCarousel
              images={caseStudy.images}
              title={caseStudy.title}
              paddedImages={caseStudy.paddedImages}
              rotatedImages={caseStudy.rotatedImages}
              enlargedImages={caseStudy.enlargedImages}
            />
          </div>

          <div className="flex-1 rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] lg:sticky lg:top-24">
            <SectionLabel index="01" label="Highlights" />
            <ul className="space-y-3.5">
              {caseStudy.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[14.5px] text-zinc-700 leading-relaxed"
                >
                  <span
                    className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-brand-red"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Summary ── */}
        {hasSummary && (
          <div className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-8">
            <SectionLabel index="02" label="Project Overview" />
            <div className="relative pl-5 border-l-2 border-brand-red/20">
              <p className="text-[15.5px] leading-[1.75] text-zinc-600">
                {caseStudy.summary}
              </p>
            </div>
          </div>
        )}

        {/* ── Details — masonry layout via CSS columns ── */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          <DetailSection
            index="03"
            title="Key Components"
            items={caseStudy.importantParts}
            variant="chips"
          />
          <DetailSection
            index="04"
            title="Salient Features"
            items={caseStudy.salientFeatures}
            variant="list"
          />
          {caseStudy.scopeOfWork.length > 0 && (
            <div className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] break-inside-avoid">
              <SectionLabel index="05" label="Scope of Work" />
              <div className="flex flex-col gap-2.5">
                {caseStudy.scopeOfWork.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50/60 px-4 py-3"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-brand-red/8 text-[10px] font-bold tabular-nums text-brand-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13.5px] font-medium text-zinc-700 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
