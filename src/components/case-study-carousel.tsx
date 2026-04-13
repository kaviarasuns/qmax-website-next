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
      <div className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 text-sm text-zinc-400">
        No images available for this case study.
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrent((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <div className="rounded-2xl border border-zinc-200/70 bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-4">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50">
        <img
          src={galleryImages[current]}
          alt={`${title} \u2014 image ${current + 1} of ${galleryImages.length}`}
          width={960}
          height={600}
          className="h-full w-full object-cover aspect-[4/3] md:aspect-[16/10] transition-opacity duration-300 motion-reduce:transition-none"
        />

        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-zinc-800 backdrop-blur-sm transition-[background-color,border-color] duration-200 motion-reduce:transition-none hover:bg-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:ring-offset-1"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-zinc-800 backdrop-blur-sm transition-[background-color,border-color] duration-200 motion-reduce:transition-none hover:bg-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:ring-offset-1"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Counter badge */}
            <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold tabular-nums tracking-wide text-zinc-600 backdrop-blur-sm">
              {current + 1} / {galleryImages.length}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {galleryImages.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Image thumbnails">
          {galleryImages.map((image, index) => (
            <button
              key={image + index}
              type="button"
              role="tab"
              aria-selected={index === current}
              onClick={() => setCurrent(index)}
              onMouseEnter={() => setCurrent(index)}
              onFocus={() => setCurrent(index)}
              aria-label={`View image ${index + 1}`}
              className={cn(
                "relative min-w-[72px] overflow-hidden rounded-lg border transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:ring-offset-1",
                index === current
                  ? "border-brand-red shadow-[0_0_0_2px_rgba(243,49,23,0.12)]"
                  : "border-zinc-200 hover:border-zinc-300"
              )}
            >
              <img
                src={image}
                alt=""
                width={72}
                height={54}
                loading="lazy"
                className="aspect-[4/3] h-[50px] w-[72px] object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
