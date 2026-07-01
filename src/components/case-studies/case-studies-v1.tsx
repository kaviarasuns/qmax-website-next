import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CaseStudyCard } from "@/components/case-study-card";
import CaseStudyListCard from "@/components/CaseStudyCard";
import { allCaseStudiesData as caseStudiesData } from "@/store/case-studies";

export default async function CaseStudyPagV1({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = caseStudiesData.findIndex((cs) => cs.id === slug);
  const caseStudy = caseStudiesData[currentIndex];

  if (!caseStudy) {
    return <div>Case Study Not Found</div>;
  }

  const prevStudy = currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudiesData.length - 1
      ? caseStudiesData[currentIndex + 1]
      : null;

  // Pick 3 other studies spread evenly across the list so each page shows different cards
  const otherStudies = caseStudiesData.filter((cs) => cs.id !== slug);
  const total = otherStudies.length;
  const step = Math.max(1, Math.floor(total / 3));
  const relatedStudies = [
    otherStudies[currentIndex % total],
    otherStudies[(currentIndex + step) % total],
    otherStudies[(currentIndex + step * 2) % total],
  ].filter(
    // dedupe in the rare case of a very short list
    (s, i, arr) => arr.findIndex((x) => x.id === s.id) === i,
  );

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyCard caseStudy={caseStudy} />

      {/* ── More Case Studies ── */}
      {relatedStudies.length > 0 && (
        <section className="relative overflow-hidden bg-[#f5f5f5] py-16 md:py-20">
          {/* Background accents */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(0,0,0,0.02),transparent_45%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.5),rgba(255,255,255,0))]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Heading */}
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
                  Explore More
                </span>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  More Case Studies
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-zinc-500 hover:text-red-500 transition-colors duration-200"
              >
                View all →
              </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedStudies.map((study) => (
                <CaseStudyListCard
                  key={study.id}
                  title={study.title}
                  image={study.images[0]}
                  link={`/case-studies/${study.id}`}
                  category={study.category}
                  summary={study.summary || undefined}
                  imageRotation={study.rotatedImages?.[0]}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Previous case study arrow (left-middle) ── */}
      {prevStudy && (
        <Link
          href={`/case-studies/${prevStudy.id}`}
          aria-label={`Previous: ${prevStudy.title}`}
          className="fixed left-3 top-1/2 -translate-y-1/2 z-50 flex items-center gap-3"
        >
          {/* Circle button */}
          <div className="group peer flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-red-500 hover:bg-red-500 hover:shadow-lg">
            <ChevronLeft className="h-5 w-5 text-zinc-500 transition-colors duration-200 group-hover:text-white" />
          </div>

          {/* Hover tooltip - hidden on mobile */}
          <div className="pointer-events-none hidden opacity-0 transition-opacity duration-200 peer-hover:opacity-100 md:block">
            <div className="rounded-xl border border-zinc-200 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
              <p className="mb-0.5 text-[10px] font-black uppercase text-red-500">
                Previous
              </p>
              <p className="max-w-[160px] text-[12px] font-medium leading-tight line-clamp-2 text-foreground">
                {prevStudy.title}
              </p>
            </div>
          </div>
        </Link>
      )}

      {/* ── Next case study arrow (right-middle) ── */}
      {nextStudy && (
        <Link
          href={`/case-studies/${nextStudy.id}`}
          aria-label={`Next: ${nextStudy.title}`}
          className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-row-reverse items-center gap-3"
        >
          {/* Circle button */}
          <div className="group peer flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-red-500 hover:bg-red-500 hover:shadow-lg">
            <ChevronRight className="h-5 w-5 text-zinc-500 transition-colors duration-200 group-hover:text-white" />
          </div>

          {/* Hover tooltip - hidden on mobile */}
          <div className="pointer-events-none hidden opacity-0 transition-opacity duration-200 peer-hover:opacity-100 md:block">
            <div className="rounded-xl border border-zinc-200 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm text-right">
              <p className="mb-0.5 text-[10px] font-black uppercase text-red-500">
                Next
              </p>
              <p className="max-w-[160px] text-[12px] font-medium leading-tight line-clamp-2 text-foreground">
                {nextStudy.title}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
