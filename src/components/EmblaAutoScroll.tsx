import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaAutoScrollButton";
import "../components/css/embla-auto-scroll.css";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type PropType = {
  options?: EmblaOptionsType;
};

const slides = [
  {
    imageUrl:
      "https://framerusercontent.com/images/X1zb9I5JLZlfe0Fni7qWIv7m8Kw.png?scale-down-to=1024",
    title: "CONCEPT VALIDATION",
    content: [
      "Concept Validation",
      "System Architecture",
      "Product Specification Development",
    ],
  },
  {
    imageUrl:
      "https://framerusercontent.com/images/Pne9938Gidq7nG9ydK39bzpvUs8.png?scale-down-to=1024",
    title: "HARDWARE DESIGN",
    content: [
      "High Level and Low Level Design",
      "Component Engineering",
      "Board Bring-up and Testing",
    ],
  },
  {
    imageUrl:
      "https://framerusercontent.com/images/INADfyYKIXB4zOCeJRv7MfVUeg8.png?scale-down-to=1024",
    title: "PCB DESIGN",
    content: [
      "Concept Validation",
      "System Architecture",
      "Product Specification Development",
    ],
  },
  // {
  //   imageUrl:
  //     "https://framerusercontent.com/images/XkYvqDHWON6bLP4za8K4dR0WNI.jpg?scale-down-to=1024",
  //   title: "SOFTWARE DEVELOPMENT",
  //   content: [
  //     "Firmware Development",
  //     "Driver and BSP Development",
  //     "Cross Platform App Development",
  //   ],
  // },
  {
    imageUrl:
      "https://framerusercontent.com/images/gjX9fLR2YB6WU8zbYrGpSymdoms.png?scale-down-to=1024",
    title: "INDUSTRIAL DESIGN",
    content: [
      "Enclosure Design",
      "User Interface and User Experience Design",
      "Color, Material, and Finish",
    ],
  },
  {
    imageUrl:
      "https://framerusercontent.com/images/5goq4GzrPys5DnIQz1IWvm0pYSo.png?scale-down-to=1024",
    title: "NPI",
    content: [
      "Compliance Certification, FCC/ UL/ CE",
      "Vendor Audits",
      "Test Jib Development",
    ],
  },
  {
    imageUrl:
      "https://framerusercontent.com/images/MaeJlgZA61FfRa4b8IcNa2EEpg.png?scale-down-to=1024",
    title: "MANUFACTURING",
    content: ["Manufacturing Co-ordination", "Manufacturing Testing"],
  },
];

const EmblaAutoCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla">
      <h2 className="text-3xl font-bold text-center mb-8 p-4">
        Concept to Manufacturing
      </h2>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <Card className="bg-black text-white h-600px">
                <CardContent className="p-6">
                  <Image
                    src={slide.imageUrl}
                    alt={`${slide.title} Slide`}
                    width={600}
                    height={350}
                    className="w-full max-h-[300px] object-cover rounded-xl mb-4 border-2 border-red-500"
                  />
                  <div className="space-y-2 h-[120px] md:h-[150px] overflow-y-auto">
                    <h3 className="text-lg font-bold uppercase">
                      {slide.title}
                    </h3>
                    {slide.content.map((item, i) => (
                      <p key={i} className="text-base">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default EmblaAutoCarousel;
