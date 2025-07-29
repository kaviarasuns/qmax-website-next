"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  content: string;
  image: string;
}

interface InfiniteCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function InfiniteCarousel({
  slides,
  autoPlayInterval = 4000,
}: InfiniteCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop: 3 slides
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // Tablet: 2 slides
      } else {
        setSlidesToShow(1); // Mobile: 1 slide
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create extended slides array for infinite loop
  const extendedSlides = [
    ...slides.slice(-slidesToShow), // Last slides at the beginning
    ...slides,
    ...slides.slice(0, slidesToShow), // First slides at the end
  ];

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
    },
    [isTransitioning]
  );

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToSpecificSlide = useCallback(
    (index: number) => {
      goToSlide(index + slidesToShow); // Adjust for prepended slides
    },
    [goToSlide, slidesToShow]
  );

  // Handle infinite loop logic
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      // Reset position for infinite loop
      if (currentIndex < slidesToShow) {
        setCurrentIndex(slides.length);
      } else if (currentIndex >= slides.length + slidesToShow) {
        setCurrentIndex(slidesToShow);
      }
    }, 300); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, slides.length, slidesToShow]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, goToNext, autoPlayInterval]);

  // Reset to valid position when slidesToShow changes
  useEffect(() => {
    setCurrentIndex(slidesToShow);
  }, [slidesToShow]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  // Get the actual slide index for indicators
  const getActualIndex = () => {
    const adjustedIndex = currentIndex - slidesToShow;
    if (adjustedIndex < 0) return slides.length + adjustedIndex;
    if (adjustedIndex >= slides.length) return adjustedIndex - slides.length;
    return adjustedIndex;
  };

  // Calculate slide width based on slides to show
  const slideWidth = 100 / slidesToShow;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Case Studies</h2>
      <div
        className="relative w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-label="Image carousel"
      >
        {/* Main carousel container */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <div
            className={`flex h-full transition-transform duration-300 ease-in-out ${
              !isTransitioning ? "transition-none" : ""
            }`}
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
              width: `${(extendedSlides.length * 100) / slidesToShow}%`,
            }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                className="relative flex-shrink-0 px-1 sm:px-2"
                style={{ width: `${slideWidth}%` }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index <= slidesToShow + 1}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                    <div className="p-3 sm:p-4 md:p-6 text-white">
                      <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 line-clamp-2">
                        {slide.title}
                      </h3>
                      <p className="text-xs sm:text-sm opacity-90 line-clamp-2 md:line-clamp-3">
                        {slide.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 shadow-lg z-10"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 shadow-lg z-10"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Play/Pause button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 hover:bg-white border-gray-200 shadow-lg z-10"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center space-x-2 bg-white/90 rounded-full px-3 py-2 shadow-lg">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  Math.floor(getActualIndex()) === index
                    ? "bg-gray-800 scale-110"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                onClick={() => goToSpecificSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Screen reader announcements */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Showing {slidesToShow} of {slides.length} slides. Current position:
          slide {getActualIndex() + 1}
        </div>
      </div>
    </div>
  );
}
