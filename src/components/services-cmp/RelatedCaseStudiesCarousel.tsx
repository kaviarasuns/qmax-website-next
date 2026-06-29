"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface RelatedCaseStudyImage {
  src: string;
  rotation?: number;
}

export interface RelatedCaseStudy {
  title: string;
  href: string;
  /** @deprecated Prefer `images` for one or more preview images */
  image?: string;
  /** Applied to all images when `images` entries are plain strings */
  rotation?: number;
  images?: Array<string | RelatedCaseStudyImage>;
}

function resolveCaseStudyImages(
  cs: RelatedCaseStudy,
): RelatedCaseStudyImage[] {
  if (cs.images?.length) {
    return cs.images.map((item) =>
      typeof item === "string"
        ? { src: item, rotation: cs.rotation }
        : item,
    );
  }
  if (cs.image) {
    return [{ src: cs.image, rotation: cs.rotation }];
  }
  return [];
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}

interface RelatedCaseStudiesCarouselProps {
  caseStudies: RelatedCaseStudy[];
  isInView: boolean;
}

export function RelatedCaseStudiesCarousel({
  caseStudies,
  isInView,
}: RelatedCaseStudiesCarouselProps) {
  const [caseIdx, setCaseIdx] = useState(0);
  const [imageIdx, setImageIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const shiftImage = (delta: number, total: number) => {
    setImageIdx((prev) => (prev + delta + total) % total);
  };

  useEffect(() => {
    setCaseIdx(0);
    setImageIdx(0);
  }, [caseStudies]);

  useEffect(() => {
    if (!isInView) {
      setCaseIdx(0);
      setImageIdx(0);
    }
  }, [isInView]);

  useEffect(() => {
    setImageIdx(0);
  }, [caseIdx]);

  useEffect(() => {
    if (!isInView || caseStudies.length <= 1) return;

    const interval = setInterval(() => {
      setCaseIdx((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, caseStudies]);

  useEffect(() => {
    const currentCase = caseStudies[caseIdx];
    const images = currentCase ? resolveCaseStudyImages(currentCase) : [];
    if (!isInView || images.length <= 1) return;

    const interval = setInterval(() => {
      setImageIdx((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isInView, caseIdx, caseStudies]);

  return (
    <div className="flex flex-col gap-3 rounded-2xl">
      <div className="relative flex-1 overflow-x-clip [overflow-clip-margin:2rem]">
        {caseStudies.map((cs, i) => {
          const images = resolveCaseStudyImages(cs);
          const isActiveCard = i === caseIdx;
          const visibleImageIdx = isActiveCard ? imageIdx : 0;

          return (
            <div
              key={cs.href + i}
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(${i - caseIdx} * (100% + 4rem)))`,
              }}
            >
              <div className="group relative h-full">
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_14px_40px_-30px_rgba(15,23,42,0.45)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,0.5)]">
                  <div
                    className="relative aspect-[3/2.8] w-full overflow-hidden bg-qmax-dark-grey"
                    onTouchStart={(e) => {
                      if (!isActiveCard || images.length <= 1) return;
                      touchStartX.current = e.touches[0]?.clientX ?? null;
                    }}
                    onTouchEnd={(e) => {
                      if (!isActiveCard || images.length <= 1) return;
                      const startX = touchStartX.current;
                      touchStartX.current = null;
                      if (startX === null) return;

                      const diff =
                        startX - (e.changedTouches[0]?.clientX ?? startX);
                      if (Math.abs(diff) < 40) return;
                      shiftImage(diff > 0 ? 1 : -1, images.length);
                    }}
                  >
                    {images.length > 0 ? (
                      <>
                        {images.map((img, imgI) => (
                          <div
                            key={img.src + imgI}
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                              imgI === visibleImageIdx
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                            aria-hidden={imgI !== visibleImageIdx}
                          >
                            <div
                              className="absolute inset-0"
                              style={
                                img.rotation
                                  ? {
                                      transform: `rotate(${img.rotation}deg)`,
                                    }
                                  : undefined
                              }
                            >
                              <Image
                                src={img.src}
                                alt={
                                  images.length > 1
                                    ? `${cs.title} — image ${imgI + 1} of ${images.length}`
                                    : cs.title
                                }
                                fill
                                sizes="(max-width: 900px) 100vw, 33vw"
                                className="object-contain px-8 py-5 transition-transform duration-700 group-hover:scale-[1.03]"
                              />
                            </div>
                          </div>
                        ))}

                        {isActiveCard && images.length > 1 ? (
                          <>
                            <button
                              type="button"
                              aria-label="Previous image"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                shiftImage(-1, images.length);
                              }}
                              className="absolute left-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-80 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:opacity-0 md:group-hover:opacity-80 md:hover:opacity-100"
                            >
                              <ChevronIcon direction="left" />
                            </button>
                            <button
                              type="button"
                              aria-label="Next image"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                shiftImage(1, images.length);
                              }}
                              className="absolute right-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-80 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:opacity-0 md:group-hover:opacity-80 md:hover:opacity-100"
                            >
                              <ChevronIcon direction="right" />
                            </button>

                            <span className="absolute right-2.5 top-2.5 z-20 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold tabular-nums tracking-wide text-white backdrop-blur-sm">
                              {visibleImageIdx + 1}/{images.length}
                            </span>

                            <div className="absolute bottom-2.5 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
                              {images.map((_, imgI) => (
                                <button
                                  key={imgI}
                                  type="button"
                                  aria-label={`Show image ${imgI + 1} of ${images.length}`}
                                  aria-current={
                                    imgI === visibleImageIdx ? true : undefined
                                  }
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setImageIdx(imgI);
                                  }}
                                  className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                                    imgI === visibleImageIdx
                                      ? "h-1.5 w-4 bg-white"
                                      : "h-1.5 w-1.5 bg-white/50 hover:bg-white/80"
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        ) : null}
                      </>
                    ) : null}
                  </div>

                  <a
                    href={cs.href}
                    aria-label={cs.title}
                    className="relative z-10 flex flex-1 flex-col justify-between gap-3 bg-white px-5 py-4 text-inherit no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F33117]/60 hover:no-underline"
                  >
                    <h5 className="m-0 text-base font-semibold leading-tight tracking-wide md:text-lg">
                      {cs.title}
                    </h5>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        View Case
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-red-500 group-hover:text-red-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                          aria-hidden
                        >
                          <path d="M7 17 17 7" />
                          <path d="M9 7h8v8" />
                        </svg>
                      </span>
                    </div>
                  </a>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-zinc-200/70 transition-colors duration-300 group-hover:ring-zinc-300" />
                </article>
              </div>
            </div>
          );
        })}
      </div>

      {caseStudies.length > 1 ? (
        <div className="flex justify-center gap-1.5 pt-1">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCaseIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === caseIdx
                  ? "w-4 bg-brand-500"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
