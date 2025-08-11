import React, { useEffect, useRef, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButton";
import "../components/css/embla.css";
import "../components/css/sanbox.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, type PanInfo } from "framer-motion";
import { Button } from "./ui/button";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const defaultOptions: EmblaOptionsType = {
    loop: true,
    dragFree: true,
    ...options,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHorizontalScrollComplete, setIsHorizontalScrollComplete] =
    useState(false);
  const [isMobile, setIsMobile] = useState(false);
  console.log(isHorizontalScrollComplete);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Array of carousel items
  const carouselItems = [
    {
      id: 1,
      image:
        "https://d1yetprhniwywz.cloudfront.net/case-studies-images/Embedded-System-with-RTOS/Security-Controller-c.jpg",
      title: "Case Studies",
      description: "Security System Controller",
      url: "/case-studies/Security-System-Controller",
    },
    {
      id: 2,
      image:
        "https://d1yetprhniwywz.cloudfront.net/case-studies-images/FPGA-Based-Structural-Health-Monitoring-System/SHM-c.jpg",
      title: "Case Studies",
      description: "FPGA Based Health Monitoring System",
      url: "/case-studies/fpga-based-health-monitoring-system",
    },
    {
      id: 3,
      image:
        "https://d1yetprhniwywz.cloudfront.net/img/services/Embedded-Systems.jpg",
      title: "Embedded Systems",
      description: "Embedded Systems Design & Development",
      url: "/embedded-design-services",
    },
    {
      id: 4,
      image:
        "https://d1yetprhniwywz.cloudfront.net/img/services/PCB-Design.png",
      title: "PCB Design",
      description: "PCB Design Services",
      url: "/pcb-design",
    },
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll-based card navigation
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Calculate the current card index based on scroll progress
      const sensitivity = isMobile ? 1.2 : 1.4;
      const normalizedProgress = Math.min(latest * sensitivity, 1);
      const cardIndex = Math.floor(
        normalizedProgress * (carouselItems.length - 1)
      );
      const clampedIndex = Math.min(
        Math.max(cardIndex, 0),
        carouselItems.length - 1
      );

      // Update active card and embla carousel
      if (emblaApi && clampedIndex !== activeIndex) {
        emblaApi.scrollTo(clampedIndex, false);
        setActiveIndex(clampedIndex);
      }

      // Handle completion state when reaching the last card
      if (cardIndex >= carouselItems.length - 1) {
        setIsHorizontalScrollComplete(true);
      } else if (cardIndex < carouselItems.length - 1) {
        setIsHorizontalScrollComplete(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, emblaApi, activeIndex, isMobile]);

  // Handle swipe gestures on mobile
  const handlePanEnd = (event: PointerEvent, info: PanInfo) => {
    if (!isMobile || !emblaApi) return;

    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold && activeIndex > 0) {
      const newIndex = Math.max(0, activeIndex - 1);
      emblaApi.scrollTo(newIndex);
      setActiveIndex(newIndex);
      if (newIndex < carouselItems.length - 1) {
        setIsHorizontalScrollComplete(false);
      }
    } else if (
      info.offset.x < -swipeThreshold &&
      activeIndex < carouselItems.length - 1
    ) {
      const newIndex = Math.min(carouselItems.length - 1, activeIndex + 1);
      emblaApi.scrollTo(newIndex);
      setActiveIndex(newIndex);
      if (newIndex === carouselItems.length - 1) {
        setIsHorizontalScrollComplete(true);
      }
    }
  };

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    // Remove auto-scroll functionality for scroll-locked behavior

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="min-h-screen">
      {/* Scroll-locked carousel section */}
      <div
        ref={containerRef}
        style={{
          height: isMobile ? "400vh" : `${carouselItems.length * 50}vh`,
        }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="embla" style={{ maxWidth: "100%", width: "100%" }}>
            <motion.div
              className="embla__viewport"
              ref={emblaRef}
              onPanEnd={isMobile ? handlePanEnd : undefined}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
            >
              <div className="embla__container">
                {carouselItems.map((item, index) => (
                  <div className="embla__slide" key={item.id}>
                    <div className="embla__parallax">
                      <motion.div
                        className="embla__parallax__layer"
                        // initial={{ scale: 0.85, opacity: 0.5, rotateY: 15 }}
                        animate={{
                          scale:
                            index === activeIndex
                              ? 1.1
                              : index <= activeIndex
                              ? 1
                              : 0.85,
                          opacity: index <= activeIndex ? 1 : 0.3,
                          rotateY:
                            index === activeIndex
                              ? 0
                              : index < activeIndex
                              ? -12
                              : 12,
                          y:
                            index === activeIndex
                              ? -20
                              : index <= activeIndex
                              ? 0
                              : 20,
                        }}
                      >
                        {/* Glow effect for active card */}
                        {index === activeIndex && (
                          <motion.div
                            className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl -z-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            transition={{ duration: 0.6 }}
                          />
                        )}

                        <Image
                          className="embla__slide__img"
                          src={item.image}
                          alt={item.title}
                          width={800}
                          height={600}
                          priority={index === 0}
                        />
                        <div className="embla__slide__overlay">
                          <h2 className="embla__slide__title text-sm sm:text-base md:text-lg lg:text-xl">
                            {item.title}
                          </h2>
                          <p className="embla__slide__description text-xs sm:text-sm md:text-base lg:text-lg">
                            {item.description}
                          </p>
                          <Link href={item.url}>
                            <Button className="embla__slide__button text-xs sm:text-sm md:text-base lg:text-lg px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
                              Read More
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="embla__controls"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="embla__buttons"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="embla__dots"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {carouselItems.map((_, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <DotButton
                      onClick={() => {
                        onDotButtonClick(index);
                        setActiveIndex(index);
                        if (index === carouselItems.length - 1) {
                          setIsHorizontalScrollComplete(true);
                        } else {
                          setIsHorizontalScrollComplete(false);
                        }
                      }}
                      className={"embla__dot".concat(
                        index === selectedIndex ? " embla__dot--selected" : ""
                      )}
                    />
                    {index === activeIndex && (
                      <motion.div
                        className="h-0.5 bg-red-500 mt-1 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-red-400/20 rounded-full"
                  style={{
                    left: `${(i * 15) % 100}%`,
                    top: `${(i * 12) % 100}%`,
                  }}
                  animate={{
                    y: [-15, 15, -15],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mobile Navigation Hints */}
          {isMobile && (
            <>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-2 text-gray-400 text-xs">
                  <h1 className="py-12 text-center text-3xl font-bold text-gray-800">
                    Case Studies
                  </h1>
                </div>
              </div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-2 text-gray-400 text-xs">
                  <span>←</span>
                  <span>Swipe to navigate</span>
                  <span>→</span>
                </div>
              </div>
            </>
          )}

          {/* Desktop scroll hint */}
          {!isMobile && (
            <>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-2 text-gray-400 text-xs">
                  <h1 className="py-12 text-center text-5xl font-bold text-gray-800">
                    Case Studies
                  </h1>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="flex items-center space-x-2 text-gray-400 text-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <span>↓</span>
                  <span>Scroll to navigate cards</span>
                  <span>↓</span>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
