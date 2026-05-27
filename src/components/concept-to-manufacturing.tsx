"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type PanInfo } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    id: 1,
    title: "CONCEPT VALIDATION",
    image:
      "https://framerusercontent.com/images/X1zb9I5JLZlfe0Fni7qWIv7m8Kw.png?scale-down-to=1024",
    content: [
      "Concept Validation",
      "System Architecture",
      "Product Specification Development",
    ],
  },
  {
    id: 2,
    title: "HARDWARE DESIGN",
    image:
      "https://framerusercontent.com/images/Pne9938Gidq7nG9ydK39bzpvUs8.png?scale-down-to=1024",
    content: [
      "High Level and Low Level Design",
      "Component Engineering",
      "Board Bring-up and Testing",
    ],
  },
  {
    id: 3,
    title: "PCB DESIGN",
    image:
      "https://framerusercontent.com/images/INADfyYKIXB4zOCeJRv7MfVUeg8.png?scale-down-to=1024",
    content: [
      "Concept Validation",
      "System Architecture",
      "Product Specification Development",
    ],
  },
  {
    id: 4,
    title: "SOFTWARE DEVELOPMENT",
    image:
      "https://framerusercontent.com/images/XkYvqDHWON6bLP4za8K4dR0WNI.jpg?scale-down-to=1024",
    content: [
      "Firmware Development",
      "Driver and BSP Development",
      "Cross Platform App Development",
    ],
  },
  {
    id: 5,
    title: "INDUSTRIAL DESIGN",
    image:
      "https://framerusercontent.com/images/gjX9fLR2YB6WU8zbYrGpSymdoms.png?scale-down-to=1024",
    content: [
      "Enclosure Design",
      "User Interface and User Experience Design",
      "Color, Material, and Finish",
    ],
  },
  {
    id: 6,
    title: "NPI",
    image:
      "https://framerusercontent.com/images/5goq4GzrPys5DnIQz1IWvm0pYSo.png?scale-down-to=1024",
    content: [
      "Compliance Certification, FCC / UL / CE",
      "Vendor Audits",
      "Test Jig Development",
    ],
  },
  {
    id: 7,
    title: "MANUFACTURING",
    image:
      "https://framerusercontent.com/images/MaeJlgZA61FfRa4b8IcNa2EEpg.png?scale-down-to=1024",
    content: ["Manufacturing Co-ordination", "Manufacturing Testing"],
  },
];

export default function ScrollCardsAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isHorizontalScrollComplete, setIsHorizontalScrollComplete] =
    useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Calculate the current card index based on scroll progress
      const cardIndex = Math.floor(latest * cards.length);
      const clampedIndex = Math.min(Math.max(cardIndex, 0), cards.length - 1);

      // Update active card
      setActiveCard(clampedIndex);

      // Handle completion state - set to true when near the end
      if (latest >= 0.95) {
        setIsHorizontalScrollComplete(true);
      }
      // Reset completion state when scrolling backward significantly
      else if (latest < 0.8 && isHorizontalScrollComplete) {
        setIsHorizontalScrollComplete(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isHorizontalScrollComplete]);

  const arrowX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 200 : 400]
  );

  // Handle swipe gestures on mobile with sliding animation
  const handlePanEnd = (event: PointerEvent, info: PanInfo) => {
    if (!isMobile) return;

    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold && activeCard > 0) {
      const newIndex = Math.max(0, activeCard - 1);
      setActiveCard(newIndex);
      // Reset completion state if going backward
      if (newIndex < cards.length - 1) {
        setIsHorizontalScrollComplete(false);
      }
    } else if (
      info.offset.x < -swipeThreshold &&
      activeCard < cards.length - 1
    ) {
      const newIndex = Math.min(cards.length - 1, activeCard + 1);
      setActiveCard(newIndex);
      // Set completion state if reaching the end
      if (newIndex === cards.length - 1) {
        setIsHorizontalScrollComplete(true);
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Horizontal Cards Section */}
      <div ref={containerRef} className={isMobile ? "h-[400vh]" : "h-[800vh]"}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Red Arrow - Updated for sliding layout */}
          {!isMobile && (
            <motion.div
              className="absolute top-1/4 z-20"
              animate={{
                left: `calc(50% - ${(cards.length - 1 - activeCard) * 20}px)`,
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div style={{ x: arrowX }}>
                <div className="flex items-center">
                  <div className="w-16 h-1 bg-red-500"></div>
                  <div className="w-0 h-0 border-l-[12px] border-l-red-500 border-y-[6px] border-y-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Mobile: Sliding Card Animation */}
          {isMobile ? (
            <div className="w-full px-4 flex items-center justify-center relative overflow-hidden">
              <motion.div
                key={activeCard}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
                className="w-full max-w-sm"
                onPanEnd={handlePanEnd}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
              >
                <Card className="bg-gray-800 border-2 border-red-500 shadow-2xl shadow-red-500/20">
                  <CardContent className="p-4">
                    {/* Card Title */}
                    <div className="text-center mb-3">
                      <h3 className="text-white font-bold text-sm tracking-wide leading-tight">
                        {cards[activeCard].title}
                      </h3>
                    </div>

                    {/* Card Image */}
                    <div className="mb-3 overflow-hidden rounded-lg h-48 border-2 border-red-500 bg-red-500">
                      <motion.img
                        key={`${activeCard}-image`}
                        src={cards[activeCard].image || "/placeholder.svg"}
                        alt={cards[activeCard].title}
                        className="w-full h-48 object-cover"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      />
                    </div>

                    {/* Card Content */}
                    <div className="space-y-2">
                      {cards[activeCard].content.map((item, itemIndex) => (
                        <motion.div
                          key={`${activeCard}-${itemIndex}`}
                          className="flex items-center text-gray-300 text-xs"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.3 + itemIndex * 0.1,
                          }}
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Mobile slide direction indicators */}
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="text-lg"
                >
                  ←
                </motion.div>
              </div>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: 1,
                  }}
                  className="text-lg"
                >
                  →
                </motion.div>
              </div>
            </div>
          ) : (
            /* Desktop: Horizontal Sliding Cards */
            <div className="w-full overflow-hidden relative">
              <motion.div
                className="flex items-center space-x-6 xl:space-x-8"
                animate={{
                  x: `calc(50vw - ${activeCard * (224 + 24)}px - 112px)`, // Center the active card
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.8,
                }}
                style={{
                  width: `${cards.length * (224 + 24)}px`, // Total width of all cards
                }}
              >
                {cards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    className="relative flex-shrink-0"
                    initial={{ scale: 0.8, opacity: 0.3 }}
                    animate={{
                      scale: 1,
                      // index === activeCard
                      //   ? 1.1
                      //   : index <= activeCard
                      //   ? 1
                      //   : 0.9,
                      opacity: index <= activeCard ? 1 : 0.4,
                      rotateY:
                        index === activeCard ? 0 : index < activeCard ? -8 : 8,
                      z: index === activeCard ? 10 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Card
                      className={`w-56 h-80 xl:w-64 xl:h-96 bg-gray-800 border-2 transition-all duration-500 ${
                        index === activeCard
                          ? "border-red-500 shadow-2xl shadow-red-500/20"
                          : "border-gray-600"
                      }`}
                    >
                      <CardContent className="p-4 xl:p-6 h-full flex flex-col">
                        {/* Card Title */}
                        <div className="text-center mb-3 xl:mb-4">
                          <h3 className="text-white font-bold text-sm xl:text-base tracking-wide leading-tight">
                            {card.title}
                          </h3>
                        </div>

                        {/* Card Image */}
                        <div
                          className={`h-48 xl:h-64 mb-3 xl:mb-4 overflow-hidden rounded-lg border-2 ${
                            index === activeCard
                              ? "border-red-500 bg-red-500"
                              : "border-gray-600 bg-gray-700"
                          }`}
                        >
                          <motion.img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 xl:h-64 object-cover"
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{
                              scale: index === activeCard ? 1 : 1.1,
                              opacity: index === activeCard ? 1 : 0.7,
                            }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>

                        {/* Card Content */}
                        <motion.div
                          className="space-y-1.5 xl:space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: index === activeCard ? 1 : 0.6,
                            y: index === activeCard ? 0 : 10,
                          }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {card.content.map((item, itemIndex) => (
                            <motion.div
                              key={itemIndex}
                              className="flex items-center text-gray-300 text-xs xl:text-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: index === activeCard ? 1 : 0.4,
                                x: index === activeCard ? 0 : -10,
                              }}
                              transition={{
                                duration: 0.3,
                                delay:
                                  index === activeCard
                                    ? 0.3 + itemIndex * 0.1
                                    : 0,
                              }}
                            >
                              <div className="w-1.5 h-1.5 xl:w-2 xl:h-2 bg-red-500 rounded-full mr-2 xl:mr-3 flex-shrink-0"></div>
                              <span>{item}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Gradient overlays for visual depth */}
              {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div> */}

              {/* Card position indicators */}
              {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {cards.map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-1 rounded-full transition-all duration-300 ${
                      index === activeCard ? "bg-red-500" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div> */}
            </div>
          )}

          {/* Progress Indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1.5 md:space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isMobile) {
                      setActiveCard(index);
                      if (index === cards.length - 1) {
                        setIsHorizontalScrollComplete(true);
                      } else if (index < cards.length - 1) {
                        setIsHorizontalScrollComplete(false);
                      }
                    }
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index <= activeCard ? "bg-red-500" : "bg-gray-600"
                  } ${isMobile ? "cursor-pointer hover:scale-110" : ""}`}
                />
              ))}
            </div>
            {isMobile && (
              <p className="text-xs text-center mt-2 text-muted-foreground">
                Swipe or tap dots to navigate
              </p>
            )}
          </div>

          {!isMobile && (
            <div className="absolute top-[calc(25%-100px)] left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-2 text-3xl whitespace-nowrap">
                <h1 className="font-bold">Concept To Manufacturing</h1>
              </div>
            </div>
          )}

          {/* Heading */}
          {isMobile && (
            <div className="absolute top-[calc(25%-40px)] left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-2 text-2xl whitespace-nowrap">
                <h1 className="font-bold">Concept To Manufacturing</h1>
              </div>
            </div>
          )}

          {/* Mobile Navigation Hints */}
          {/* {isMobile && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <span>←</span>
                <span>Swipe to navigate</span>
                <span>→</span>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
