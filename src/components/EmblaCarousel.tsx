import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
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
import { motion } from "framer-motion";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'

const TWEEN_FACTOR_BASE = 0.2;

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
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const currentProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - currentProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + currentProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - currentProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const scale = 1 - Math.abs(diffToTarget) * 0.15;
          const opacity = 1 - Math.abs(diffToTarget) * 0.5;
          const rotateY = diffToTarget * 15;

          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `translateX(${translate}%) scale(${scale}) rotateY(${rotateY}deg)`;
            tweenNode.style.opacity = opacity.toString();
            tweenNode.style.transition =
              "transform 0.3s ease, opacity 0.3s ease";
          }
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax)
      .on("select", onSelect);

    // Auto-scroll functionality
    let autoScrollTimer: ReturnType<typeof setTimeout>;

    const autoScroll = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
      autoScrollTimer = setTimeout(autoScroll, 5000);
    };

    const startAutoScroll = () => {
      autoScrollTimer = setTimeout(autoScroll, 5000);
    };

    const stopAutoScroll = () => {
      clearTimeout(autoScrollTimer);
    };

    startAutoScroll();
    emblaApi.on("pointerDown", stopAutoScroll);
    emblaApi.on("pointerUp", startAutoScroll);

    onSelect();

    return () => {
      clearTimeout(autoScrollTimer);
      emblaApi
        .off("pointerDown", stopAutoScroll)
        .off("pointerUp", startAutoScroll)
        .off("select", onSelect);
    };
  }, [emblaApi, tweenParallax]);

  return (
    <div className="embla" style={{ maxWidth: "100%", width: "100%" }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselItems.map((item, index) => (
            <div className="embla__slide" key={item.id}>
              <div className="embla__parallax">
                <motion.div
                  className="embla__parallax__layer"
                  initial={{ scale: 0.95, opacity: 0.5 }}
                  animate={{
                    scale: index === activeIndex ? 1 : 0.95,
                    opacity: index === activeIndex ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {index === activeIndex && (
                    <motion.div
                      className="absolute inset-0 bg-red-500/10 rounded-lg blur-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <Image
                    className="embla__slide__img embla__parallax__img"
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    priority={index === 0}
                  />
                  <motion.div
                    className="embla__slide__overlay"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: index === activeIndex ? 0 : 10,
                      opacity: index === activeIndex ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.h2
                      className="embla__slide__title text-sm sm:text-base md:text-lg lg:text-xl"
                      animate={{
                        scale: index === activeIndex ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h2>
                    <motion.p
                      className="embla__slide__description text-xs sm:text-sm md:text-base lg:text-lg"
                      animate={{
                        opacity: index === activeIndex ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                    <Link href={item.url}>
                      <motion.button
                        className="embla__slide__button text-xs sm:text-sm md:text-base lg:text-lg px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2"
                        whileHover={{ scale: 1.05, backgroundColor: "#ef4444" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                onClick={() => onDotButtonClick(index)}
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
  );
};

export default EmblaCarousel;
