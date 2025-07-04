"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PropType = {
  slides: {
    src: string;
    alt: string;
    type: string;
    videoId: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ]);

  // Track current slide index
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const typewriterKey = useRef(0);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
    // Incrementing key to force Typewriter component to remount
    typewriterKey.current += 1;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Subscribe to the select event when the carousel changes slides
    emblaApi.on("select", onSelect);

    // Cleanup function
    return () => {
      if (emblaApi) emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  const currentVideoId = slides[currentSlide]?.videoId;

  return (
    <section className="w-full">
      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-transparent rounded-lg shadow-lg max-w-3xl w-full mx-4">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-80 md:h-[400px] rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <div ref={emblaRef} className="overflow-hidden relative">
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div className="flex-none min-w-0 w-full relative" key={index}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={1080}
                priority={index === 0}
                className="max-w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-start">
                <div className="w-full max-w-4xl p-6 md:p-8 lg:p-10 ml-[20px] mt-[20px]">
                  {/* Orange buttons above typewriter */}
                  {index === currentSlide && (
                    <div className="flex flex-row gap-4 mb-6">
                      <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 text-sm md:text-lg rounded-md shadow transition-colors duration-200 min-w-[112px] flex items-center gap-2 w-28 h-10 md:py-3 md:px-8 md:w-auto md:h-auto"
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                      >
                        {/* Video Camera Icon (black) */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="black"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 7h7a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
                          />
                        </svg>
                        Watch Video
                      </button>
                      <div className="hidden sm:block">
                        <button
                          className="ml-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 text-lg md:text-xl rounded-md shadow transition-colors duration-200 min-w-[160px] flex items-center gap-2"
                          type="button"
                          onClick={() => router.push("/contact")}
                        >
                          {/* Mail Icon (black) */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="black"
                            className="w-6 h-6 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          Contact Us
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-left">
                    {index === currentSlide && (
                      <Typewriter
                        key={`typewriter-${typewriterKey.current}-${index}`}
                        options={{
                          strings: slide.type,
                          autoStart: true,
                          cursor: "",
                          delay: 45,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="text-white absolute z-10 top-1/2 -translate-y-1/2 left-2 sm:left-3 md:left-4 border-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer p-0 bg-transparent opacity-70 hover:opacity-100 transition-opacity"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="text-white absolute z-10 top-1/2 -translate-y-1/2 right-2 sm:right-3 md:right-4 border-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer p-0 bg-transparent opacity-70 hover:opacity-100 transition-opacity"
        />

        {/* Dot navigation - moved inside carousel container */}
        <div className="absolute bottom-4 right-0 left-0 flex justify-center items-center z-10">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`bg-transparent cursor-pointer border-0 p-0 mx-1 w-10 h-10 flex items-center justify-center rounded-full ${
                index === selectedIndex ? "dot-selected" : "dot-default"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Style for dots */}
      <style jsx>{`
        .dot-default::after {
          content: "";
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          box-shadow: inset 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
        }

        .dot-selected::after {
          content: "";
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          box-shadow: inset 0 0 0 0.2rem rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default EmblaCarousel;
