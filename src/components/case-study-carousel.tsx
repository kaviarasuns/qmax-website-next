"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyCarouselProps {
  images: string[];
  title: string;
}

export function CaseStudyCarousel({ images, title }: CaseStudyCarouselProps) {
  const galleryImages = React.useMemo(() => images.filter(Boolean), [images]);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    setCurrent(0);
  }, [title, galleryImages.length]);

  if (!galleryImages.length) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center text-zinc-500">
        No images available for this case study.
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrent((prev) =>
      prev === 0 ? galleryImages.length - 1 : Math.max(prev - 1, 0)
    );
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <div className="rounded-2xl border border-zinc-200/80 bg-white p-3 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.48)] md:p-4">
      <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
        <img
          src={galleryImages[current]}
          alt={`${title} - image ${current + 1}`}
          className="h-full w-full object-cover aspect-[4/3] md:aspect-[16/10]"
        />

        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-zinc-900 backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-zinc-900 backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 backdrop-blur-sm">
              {current + 1} / {galleryImages.length}
            </span>
          </>
        )}
      </div>

      {galleryImages.length > 1 && (
        <div className="mt-4 flex gap-1.5 overflow-x-auto pb-1">
          {galleryImages.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => setCurrent(index)}
              onMouseEnter={() => setCurrent(index)}
              onFocus={() => setCurrent(index)}
              aria-label={`View image ${index + 1}`}
              className={cn(
                "relative min-w-[64px] overflow-hidden rounded-md border transition-all duration-200",
                index === current
                  ? "border-[#F33117] ring-2 ring-[#F33117]/20"
                  : "border-zinc-200 hover:border-zinc-300"
              )}
            >
              <img
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                className="aspect-[4/3] h-[46px] w-[64px] object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
