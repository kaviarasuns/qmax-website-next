"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn, Square, SquareDashed, Play } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const VIDEO_EXT_REGEX = /\.(mp4|webm|mov|m4v)(\?|#|$)/i;
const isVideoSrc = (src: string) => VIDEO_EXT_REGEX.test(src);

function VideoPlayer({
  src,
  autoPlay = false,
  containerClassName,
  videoClassName,
  buttonSize = "md",
}: {
  src: string;
  autoPlay?: boolean;
  containerClassName?: string;
  videoClassName?: string;
  buttonSize?: "md" | "lg";
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = React.useCallback(() => {
    const node = videoRef.current;
    if (!node) return;
    const result = node.play();
    if (result && typeof result.catch === "function") {
      result.catch(() => {
        // Autoplay rejection — leave the overlay visible.
      });
    }
  }, []);

  return (
    <div className={cn("relative", containerClassName)}>
      <video
        ref={videoRef}
        key={src}
        src={src}
        controls
        playsInline
        preload="metadata"
        autoPlay={autoPlay}
        onPlay={() => setIsPlaying(true)}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className={cn("block bg-black", videoClassName)}
      >
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play video"
            className={cn(
              "pointer-events-auto flex items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none",
              buttonSize === "lg" ? "h-20 w-20 md:h-24 md:w-24" : "h-14 w-14 md:h-16 md:w-16"
            )}
          >
            <Play
              className={cn(
                "translate-x-[2px] fill-current",
                buttonSize === "lg" ? "h-8 w-8 md:h-10 md:w-10" : "h-6 w-6 md:h-7 md:w-7"
              )}
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </div>
  );
}

interface CaseStudyCarouselProps {
  images: string[];
  title: string;
  /** Zero-based indices of images that should be displayed with black padding */
  paddedImages?: number[];
  /** Map of zero-based image index to rotation in degrees applied before display */
  rotatedImages?: Record<number, number>;
  /** Map of zero-based image index to scale multiplier (e.g. { 1: 1.2 }) */
  enlargedImages?: Record<number, number>;
}

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -48 }),
};

export function CaseStudyCarousel({
  images,
  title,
  rotatedImages,
  enlargedImages,
}: CaseStudyCarouselProps) {
  const galleryImages = React.useMemo(() => images.filter(Boolean), [images]);

  const getRotation = React.useCallback(
    (index: number) => {
      const original = images.indexOf(galleryImages[index]);
      const deg = rotatedImages?.[original >= 0 ? original : index];
      return typeof deg === "number" ? deg : 0;
    },
    [images, galleryImages, rotatedImages]
  );

  const getScale = React.useCallback(
    (index: number) => {
      const original = images.indexOf(galleryImages[index]);
      const scale = enlargedImages?.[original >= 0 ? original : index];
      return typeof scale === "number" && scale > 0 ? scale : 1;
    },
    [images, galleryImages, enlargedImages]
  );

  const getImageTransform = React.useCallback(
    (index: number) => {
      const rotate = getRotation(index);
      const scale = getScale(index);
      if (!rotate && scale === 1) return undefined;
      return { transform: `rotate(${rotate}deg) scale(${scale})` };
    },
    [getRotation, getScale]
  );

  // Carousel state
  const [current, setCurrent] = React.useState(0);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0); // -1 = prev, 1 = next

  // Background toggle state (lightbox)
  const [bgEnabled, setBgEnabled] = React.useState(true);

  // Magnifier lens state
  const [showLens, setShowLens] = React.useState(false);
  const [lensPos, setLensPos] = React.useState({ x: 0, y: 0 }); // cursor pos relative to container (px)
  const [lensPct, setLensPct] = React.useState({ x: 50, y: 50 }); // cursor pos as % of container
  const imageStageRef = React.useRef<HTMLDivElement>(null);

  // Reset carousel when case study changes
  React.useEffect(() => {
    setCurrent(0);
  }, [title, galleryImages.length]);

  // ── Lightbox navigation ──────────────────────────────────────────────────
  const navigateLightbox = React.useCallback(
    (dir: number) => {
      setShowLens(false);
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

  const currentIsVideo = isVideoSrc(galleryImages[current]);
  const lightboxIsVideo = isVideoSrc(galleryImages[lightboxIndex]);

  return (
    <>
      {/* ── Carousel ─────────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:p-4">

        {/* Main slide — image opens lightbox, video plays inline */}
        <div
          role={currentIsVideo ? undefined : "button"}
          tabIndex={currentIsVideo ? undefined : 0}
          aria-label={
            currentIsVideo ? undefined : `Zoom image ${current + 1}`
          }
          onClick={currentIsVideo ? undefined : () => openLightbox(current)}
          onKeyDown={
            currentIsVideo
              ? undefined
              : (e) => e.key === "Enter" && openLightbox(current)
          }
          className={cn(
            "relative overflow-hidden rounded-xl group",
            currentIsVideo
              ? "cursor-default bg-black"
              : "cursor-zoom-in border border-zinc-100 bg-[oklch(87.1%_0.006_286.286)]"
          )}
        >
          <div
            className="block w-full transition-opacity duration-300 motion-reduce:transition-none"
            style={currentIsVideo ? undefined : getImageTransform(current)}
          >
            {currentIsVideo ? (
              <VideoPlayer
                src={galleryImages[current]}
                containerClassName="aspect-[4/3] md:aspect-[16/10] w-full"
                videoClassName="h-full w-full object-contain"
              />
            ) : (
              <Image
                src={galleryImages[current]}
                alt={`${title} — image ${current + 1} of ${galleryImages.length}`}
                width={960}
                height={600}
                unoptimized
                className="h-full w-full aspect-[4/3] md:aspect-[16/10] object-contain p-10"
              />
            )}
          </div>

          {/* Zoom hint badge — images only */}
          {!currentIsVideo && (
            <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1.5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ZoomIn className="h-3.5 w-3.5 text-white" aria-hidden="true" />
              <span className="text-[11px] font-medium text-white/90 leading-none">
                Click to zoom
              </span>
            </div>
          )}

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
            aria-label="Media thumbnails"
          >
            {galleryImages.map((image, index) => {
              const thumbIsVideo = isVideoSrc(image);
              return (
                <button
                  key={image + index}
                  type="button"
                  role="tab"
                  aria-selected={index === current}
                  onClick={() => setCurrent(index)}
                  onMouseEnter={() => setCurrent(index)}
                  onFocus={() => setCurrent(index)}
                  aria-label={
                    thumbIsVideo
                      ? `View video ${index + 1}`
                      : `View image ${index + 1}`
                  }
                  className={cn(
                    "relative min-w-[72px] overflow-hidden rounded-lg border transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 focus-visible:ring-offset-1",
                    index === current
                      ? "border-brand-red shadow-[0_0_0_2px_rgba(243,49,23,0.12)]"
                      : "border-zinc-200 hover:border-zinc-300"
                  )}
                >
                  <div
                    className="block"
                    style={thumbIsVideo ? undefined : getImageTransform(index)}
                  >
                    {thumbIsVideo ? (
                      <div className="relative">
                        <video
                          src={image}
                          muted
                          playsInline
                          preload="metadata"
                          className="aspect-[4/3] h-[50px] w-[72px] object-contain bg-[oklch(87.1%_0.006_286.286)] p-1.5"
                        />
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm">
                            <Play
                              className="h-2.5 w-2.5 fill-white text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={image}
                        alt=""
                        width={72}
                        height={54}
                        unoptimized
                        className="aspect-[4/3] h-[50px] w-[72px] object-contain bg-[oklch(87.1%_0.006_286.286)] p-1.5"
                      />
                    )}
                  </div>
                </button>
              );
            })}
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

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setBgEnabled((v) => !v)}
                  aria-label={bgEnabled ? "Remove background" : "Restore background"}
                  aria-pressed={!bgEnabled}
                  title={bgEnabled ? "Remove background" : "Restore background"}
                  className="pointer-events-auto flex h-9 items-center gap-1.5 rounded-full bg-white/10 px-3 text-white backdrop-blur-sm hover:bg-white/25 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {bgEnabled ? (
                    <Square className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <SquareDashed className="h-4 w-4" aria-hidden="true" />
                  )}
                  <span className="text-[11px] font-medium leading-none">
                    {bgEnabled ? "Remove BG" : "Show BG"}
                  </span>
                </button>

                <Dialog.Close asChild>
                  <button
                    aria-label="Close lightbox"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/25 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </div>
            </div>

            {/* Image stage — fills available space between top bar and thumbnails */}
            <div
              ref={imageStageRef}
              className={cn(
                "relative w-full max-w-7xl flex-1 min-h-0 overflow-hidden rounded-2xl transition-colors duration-200",
                lightboxIsVideo ? "cursor-default" : "cursor-crosshair",
                bgEnabled ? "bg-[oklch(92%_0.004_286.32)]" : "bg-transparent"
              )}
              onMouseMove={(e) => {
                if (lightboxIsVideo) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setLensPos({ x, y });
                setLensPct({
                  x: (x / rect.width) * 100,
                  y: (y / rect.height) * 100,
                });
                if (!showLens) setShowLens(true);
              }}
              onMouseLeave={() => setShowLens(false)}
            >
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={lightboxIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center",
                    lightboxIsVideo ? "p-0" : "p-10 md:p-16"
                  )}
                >
                  <div
                    className="absolute inset-0"
                    style={
                      lightboxIsVideo
                        ? undefined
                        : getImageTransform(lightboxIndex)
                    }
                  >
                    {lightboxIsVideo ? (
                      <VideoPlayer
                        src={galleryImages[lightboxIndex]}
                        autoPlay
                        containerClassName="absolute inset-0"
                        videoClassName="absolute inset-0 h-full w-full object-contain"
                        buttonSize="lg"
                      />
                    ) : (
                      <Image
                        src={galleryImages[lightboxIndex]}
                        alt={`${title} — image ${lightboxIndex + 1} of ${galleryImages.length}`}
                        fill
                        unoptimized
                        className="object-contain p-10 md:p-16"
                        sizes="(max-width: 768px) 100vw, 90vw"
                        priority
                      />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Magnifier lens — images only */}
              {showLens && !lightboxIsVideo && (
                <div
                  className="pointer-events-none absolute z-10 h-44 w-44 overflow-hidden rounded-full border-2 border-white/70 shadow-[0_0_0_1px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.4)]"
                  style={{
                    left: lensPos.x - 88,
                    top: lensPos.y - 88,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={galleryImages[lightboxIndex]}
                    alt=""
                    className="absolute max-w-none"
                    style={{
                      width: (imageStageRef.current?.offsetWidth ?? 0) * 3,
                      height: (imageStageRef.current?.offsetHeight ?? 0) * 3,
                      left: -(lensPct.x / 100) * (imageStageRef.current?.offsetWidth ?? 0) * 3 + 88,
                      top: -(lensPct.y / 100) * (imageStageRef.current?.offsetHeight ?? 0) * 3 + 88,
                      objectFit: "contain",
                      transform:
                        getRotation(lightboxIndex) || getScale(lightboxIndex) !== 1
                          ? `rotate(${getRotation(lightboxIndex)}deg) scale(${getScale(lightboxIndex)})`
                          : undefined,
                    }}
                  />
                </div>
              )}
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
                {galleryImages.map((image, index) => {
                  const thumbIsVideo = isVideoSrc(image);
                  return (
                    <button
                      key={image + index}
                      type="button"
                      onClick={() => {
                        setDirection(index > lightboxIndex ? 1 : -1);
                        setLightboxIndex(index);
                      }}
                      aria-label={
                        thumbIsVideo
                          ? `View video ${index + 1}`
                          : `View image ${index + 1}`
                      }
                      aria-current={
                        index === lightboxIndex ? "true" : undefined
                      }
                      className={cn(
                        "relative min-w-[64px] overflow-hidden rounded-lg border-2 transition-[border-color,opacity] duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                        index === lightboxIndex
                          ? "border-white opacity-100"
                          : "border-transparent opacity-40 hover:opacity-75"
                      )}
                    >
                      <div
                        className="block"
                        style={
                          thumbIsVideo ? undefined : getImageTransform(index)
                        }
                      >
                        {thumbIsVideo ? (
                          <div className="relative">
                            <video
                              src={image}
                              muted
                              playsInline
                              preload="metadata"
                              className="aspect-[4/3] h-[48px] w-[64px] object-contain bg-[oklch(92%_0.004_286.32)] p-1"
                            />
                            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm">
                                <Play
                                  className="h-2.5 w-2.5 fill-white text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                          </div>
                        ) : (
                          <Image
                            src={image}
                            alt=""
                            width={64}
                            height={48}
                            unoptimized
                            className="aspect-[4/3] h-[48px] w-[64px] object-contain bg-[oklch(92%_0.004_286.32)] p-1"
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
