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

type PropType = {
  slides: {
    src: string;
    alt: string;
    type: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  // Track current slide index
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const typewriterKey = useRef(0);

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

  return (
    <section className="w-full">
      <div ref={emblaRef} className="overflow-hidden">
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
                <div className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-left w-full max-w-4xl p-6 md:p-8 lg:p-10">
                  {index === currentSlide && (
                    <Typewriter
                      key={`typewriter-${typewriterKey.current}-${index}`}
                      options={{
                        strings: slide.type,
                        autoStart: true,
                        cursor: "",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-5 mt-7">
        <div className="grid grid-cols-2 gap-2 items-center">
          <PrevButton 
            onClick={onPrevButtonClick} 
            disabled={prevBtnDisabled}
            className="text-white absolute z-10 top-1/2 -translate-y-1/2 left-4 border-0 w-10 h-10 flex items-center justify-center cursor-pointer p-0 bg-transparent opacity-70 hover:opacity-100 transition-opacity" 
          />
          <NextButton 
            onClick={onNextButtonClick} 
            disabled={nextBtnDisabled}
            className="text-white absolute z-10 top-1/2 -translate-y-1/2 right-4 border-0 w-10 h-10 flex items-center justify-center cursor-pointer p-0 bg-transparent opacity-70 hover:opacity-100 transition-opacity" 
          />
        </div>

        <div className="flex flex-wrap justify-end items-center text-white">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`bg-transparent cursor-pointer border-0 p-0 m-0 w-10 h-10 flex items-center justify-center rounded-full ${
                index === selectedIndex ? "dot-selected" : "dot-default"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Add these styles for the dots that were previously handled by pseudo-elements */}
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
