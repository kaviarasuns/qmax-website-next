import React, { useCallback, useEffect, useRef } from "react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

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

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
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

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("slideFocus", tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div className="embla" style={{ maxWidth: "100%", width: "100%" }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselItems.map((item, index) => (
            <div className="embla__slide" key={item.id}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <Image
                    className="embla__slide__img embla__parallax__img"
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                  />
                  <div className="embla__slide__overlay">
                    <h2 className="embla__slide__title text-sm sm:text-base md:text-lg lg:text-xl">
                      {item.title}
                    </h2>
                    <p className="embla__slide__description text-xs sm:text-sm md:text-base lg:text-lg">
                      {item.description}
                    </p>
                    <Link href={item.url}>
                      <button className="embla__slide__button text-xs sm:text-sm md:text-base lg:text-lg px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {carouselItems.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
