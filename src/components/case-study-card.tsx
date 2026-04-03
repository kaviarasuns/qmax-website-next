import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Breadcrumbs } from "./breadcrumbs";
import { CaseStudy } from "../../types/case-study";
import { CaseStudyCarousel } from "./case-study-carousel";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items.length) {
    return null;
  }

  return (
    <Card className="border-zinc-200/80 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.45)]">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-zinc-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2.5">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-zinc-700">
              <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F33117]" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const hasSummary = Boolean(caseStudy.summary?.trim());
  const listingPath = caseStudy.category.toLowerCase().includes("pcb")
    ? "/PCB-Design-Case-study"
    : "/Embedded-Case-study";

  return (
    <div className="relative overflow-hidden bg-[#f7f7f4] py-14 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_9%_12%,rgba(243,49,23,0.1),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.86))]" />

      <div className="relative mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200/80 bg-white/85 p-5 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.48)] backdrop-blur-sm md:p-6">
          <div className="mb-5">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Case Studies", href: listingPath },
                { label: caseStudy.category, href: listingPath },
                { label: caseStudy.title },
              ]}
            />
          </div>

          <div>
            <span className="mb-2 inline-block text-[10px] font-black uppercase tracking-[0.36em] text-[#F33117]">
              Detailed Case Study
            </span>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-4xl">
              {caseStudy.title}
            </h1>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              {caseStudy.category}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <CaseStudyCarousel images={caseStudy.images} title={caseStudy.title} />

          <Card className="h-fit border-zinc-200/80 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.45)] lg:sticky lg:top-24">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-zinc-900">
                Project Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {caseStudy.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-zinc-700">
                    <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F33117]" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {hasSummary && (
            <Card className="border-zinc-200/80 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.45)] md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-zinc-900">
                  Project Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-zinc-700">{caseStudy.summary}</p>
              </CardContent>
            </Card>
          )}

          <DetailList title="Important Parts" items={caseStudy.importantParts} />
          <DetailList
            title="Salient Features"
            items={caseStudy.salientFeatures}
          />
          <div className="md:col-span-2">
            <DetailList title="Qmax Scope of Work" items={caseStudy.scopeOfWork} />
          </div>
        </div>
      </div>
    </div>
  );
}
