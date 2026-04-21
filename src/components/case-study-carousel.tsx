"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CaseStudyCarouselProps {
  images: string[];
  title: string;
  /** Zero-based indices of images that should be displayed with black padding */
  paddedImages?: number[];
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -48 }),
};

export function CaseStudyCarousel({ images, title }: CaseStudyCarouselProps) {
  const galleryImages = React.useMemo(() => images.filter(Boolean), [images]);

  // Carousel state
  const [current, setCurrent] = React.useState(0);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0); // -1 = prev, 1 = next

  // Reset carousel when case study changes
  React.useEffect(() => {
    setCurrent(0);
  }, [title, galleryImages.length]);

  // ── Lightbox navigation ──────────────────────────────────────────────────
  const navigateLightbox = React.useCallback(
    (dir: number) => {
      setDirection(dir);
      setLightboxIndex((i) => {
        if (dir === -1) return i === 0 ? galleryImages.length - 1 : i - 1;
        return (i + 1) % galleryImages.length;
      });
    },
    [galleryImages.length]
  );

  // Arrow-key navigation while lightbox is open
  React.useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, navigateLightbox]);

  const openLightbox = (index: number) => {
    setDirection(0);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // ── Carousel navigation ──────────────────────────────────────────────────
  const goToPrevious = () =>
    setCurrent((p) => (p === 0 ? galleryImages.length - 1 : p - 1));
  const goToNext = () =>
    setCurrent((p) => (p + 1) % galleryImages.length);

  // ── Empty state ──────────────────────────────────────────────────────────
  if (!galleryImages.length) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 text-sm text-zinc-400">
        No images available for this case study.
      </div>
    );
  }

  return (
    <>
      {/* ── Carousel ─────────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-4">

        {/* Main image — click to open lightbox */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Zoom image ${current + 1}`}
          onClick={() => openLightbox(current)}
          onKeyDown={(e) => e.key === "Enter" && openLightbox(current)}
          className="relative overflow-hidden rounded-xl border border-zinc-100 bg-[oklch(87.1%_0.006_286.286)] cursor-zoom-in group"
        >
          <Image
            src={galleryImages[current]}
            alt={`${title} — image ${current + 1} of ${galleryImages.length}`}
            width={960}
            height={600}
            className="h-full w-full aspect-[4/3] md:aspect-[16/10] object-contain p-10 transition-opacity duration-300 motion-reduce:transition-none"
          />

          {/* Zoom hint badge — appears on hover */}
          <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1.5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ZoomIn className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            <span className="text-[11px] font-medium text-white/90 leading-none">
              Click to zoom
            </span>
          </div>

          {galleryImages.length > 1 && (
            <>
              {/* Counter badge */}
              <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-semibold tabular-nums tracking-wide text-zinc-600 backdrop-blur-sm">
                {current + 1} / {galleryImages.length}
              </span>

              {/* Prev button */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-zinc-800 backdrop-blur-sm transition-[background-color,border-color] duration-200 motion-reduce:transition-none hover:bg-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:ring-offset-1"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              {/* Next button */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 text-zinc-800 backdrop-blur-sm transition-[background-color,border-color] duration-200 motion-reduce:transition-none hover:bg-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:ring-offset-1"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {galleryImages.length > 1 && (
          <div
            className="mt-3 flex gap-2 overflow-x-auto pb-1"
            role="tablist"
            aria-label="Image thumbnails"
          >
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
                <Image
                  src={image}
                  alt=""
                  width={72}
                  height={54}
                  className="aspect-[4/3] h-[50px] w-[72px] object-contain bg-[oklch(87.1%_0.006_286.286)] p-1.5"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox Modal ───────────────────────────────────────────────── */}
      <Dialog.Root open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <Dialog.Portal>
          {/* Backdrop */}
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200" />

          {/* Content shell */}
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 md:p-10 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
          >
            <Dialog.Title className="sr-only">
              {title} — image {lightboxIndex + 1} of {galleryImages.length}
            </Dialog.Title>

            {/* Top bar: counter + close */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="pointer-events-auto rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold tabular-nums text-white/80 backdrop-blur-sm">
                {lightboxIndex + 1} / {galleryImages.length}
              </span>

              <Dialog.Close asChild>
                <button
                  aria-label="Close lightbox"
                  className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/25 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </Dialog.Close>
            </div>

            {/* Image stage — fills available space between top bar and thumbnails */}
            <div className="relative w-full max-w-5xl flex-1 min-h-0 overflow-hidden rounded-2xl bg-[oklch(92%_0.004_286.32)]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={lightboxIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={galleryImages[lightboxIndex]}
                    alt={`${title} — image ${lightboxIndex + 1} of ${galleryImages.length}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 90vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => navigateLightbox(-1)}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/25 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateLightbox(1)}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/25 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </>
            )}

            {/* Thumbnail strip */}
            {galleryImages.length > 1 && (
              <div className="flex shrink-0 gap-2 overflow-x-auto pb-1 max-w-full">
                {galleryImages.map((image, index) => (
                  <button
                    key={image + index}
                    type="button"
                    onClick={() => {
                      setDirection(index > lightboxIndex ? 1 : -1);
                      setLightboxIndex(index);
                    }}
                    aria-label={`View image ${index + 1}`}
                    aria-current={index === lightboxIndex ? "true" : undefined}
                    className={cn(
                      "relative min-w-[64px] overflow-hidden rounded-lg border-2 transition-[border-color,opacity] duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                      index === lightboxIndex
                        ? "border-white opacity-100"
                        : "border-transparent opacity-40 hover:opacity-75"
                    )}
                  >
                    <Image
                      src={image}
                      alt=""
                      width={64}
                      height={48}
                      className="aspect-[4/3] h-[48px] w-[64px] object-contain bg-[oklch(92%_0.004_286.32)] p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
