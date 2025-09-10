"use client";

import { useEffect, useState, useRef } from "react";
import { motion, type PanInfo } from "framer-motion";
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

interface ScrollCardsAnimationV4Props {
  onComplete?: () => void;
}

export default function ScrollCardsAnimationV4({
  onComplete,
}: ScrollCardsAnimationV4Props = {}) {
  const [activeCard, setActiveCard] = useState(0);
  const [lastHoveredCard, setLastHoveredCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isBelow1500, setIsBelow1500] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [showHoverHints, setShowHoverHints] = useState(false);
  const [isAutoHighlighting, setIsAutoHighlighting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  console.log(isBelow1500);

  // Intersection Observer to detect when component becomes fully visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
            setIsFullyVisible(true);
            // Start auto-highlight sequence immediately when visible
            if (!isMobile && !hasInteracted) {
              setIsAutoHighlighting(true);
              // Cycle through all cards quickly
              const highlightSequence = async () => {
                for (let i = 0; i < cards.length; i++) {
                  setActiveCard(i);
                  await new Promise((resolve) => setTimeout(resolve, 150)); // 150ms per card
                }
                // Reset to first card after sequence
                setActiveCard(0);
                setLastHoveredCard(0);
                setIsAutoHighlighting(false);
                // Show hover hints after auto-highlight completes
                setTimeout(() => {
                  setShowHoverHints(true);
                }, 500);
              };
              highlightSequence();
            } else {
              // Show hover hints immediately if mobile or already interacted
              setTimeout(() => {
                setShowHoverHints(true);
              }, 1000);
            }
          } else {
            setIsFullyVisible(false);
            setShowHoverHints(false);
            setIsAutoHighlighting(false);
          }
        });
      },
      {
        threshold: 0.8, // Trigger when 80% of component is visible
        rootMargin: "0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isMobile, hasInteracted]);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track user interaction and trigger completion
  const handleUserInteraction = (newIndex: number) => {
    setActiveCard(newIndex);
    if (!hasInteracted && newIndex > 0) {
      setHasInteracted(true);
      onComplete?.();
    }
  };

  // Handle swipe gestures on mobile with sliding animation
  const handlePanEnd = (event: PointerEvent, info: PanInfo) => {
    if (!isMobile) return;

    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold && activeCard > 0) {
      const newIndex = Math.max(0, activeCard - 1);
      handleUserInteraction(newIndex);
    } else if (
      info.offset.x < -swipeThreshold &&
      activeCard < cards.length - 1
    ) {
      const newIndex = Math.min(cards.length - 1, activeCard + 1);
      handleUserInteraction(newIndex);
    }
  };

  useEffect(() => {
    const checkSizes = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setIsBelow1500(w < 1500);
    };
    checkSizes();
    window.addEventListener("resize", checkSizes);
    return () => window.removeEventListener("resize", checkSizes);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Horizontal Cards Section */}
      <div className="h-screen">
        <div className="h-screen flex items-center justify-center overflow-hidden">
          {/* Red Arrow - hidden on mobile */}
          {/* {!isMobile && (
            <div
              className={`absolute z-20 ${
                isBelow1500 ? "bottom-[200px]" : "bottom-[300px]"
              }`}
            >
              <div className="flex items-center">
                <div className="w-24 h-2 bg-red-500"></div>
                <div className="w-0 h-0 border-l-[20px] border-l-red-500 border-y-[10px] border-y-transparent"></div>
              </div>
            </div>
          )} */}

          {/* Mobile: Sliding Card Animation */}
          {isMobile ? (
            <div className="w-full px-4 flex flex-col items-center justify-center">
              {/* Heading */}
              <div className="mb-24">
                <h1 className="font-bold text-2xl text-center text-black">
                  Concept To Manufacturing
                </h1>
              </div>

              <div className="relative overflow-hidden">
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
                      <div className="mb-3 overflow-hidden rounded-lg h-32">
                        <motion.img
                          key={`${activeCard}-image`}
                          src={cards[activeCard].image || "/placeholder.svg"}
                          alt={cards[activeCard].title}
                          className="w-full h-full object-cover"
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
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
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
            </div>
          ) : (
            /* Desktop: 7 Cards Visible with Enhanced Visual Appeal */
            <div className="w-full px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 flex flex-col items-center justify-center">
              {/* Heading */}
              <div className="mb-8 md:mb-12 relative -top-2 md:-top-3">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center text-black">
                  Concept To Manufacturing
                </h1>
              </div>
              <div className="flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3 xl:space-x-4 2xl:space-x-5">
                {cards.slice(0, 7).map((card, index) => (
                  <motion.div
                    key={card.id}
                    className="relative flex-shrink-0"
                    initial={{ scale: 0.85, opacity: 0.3 }}
                    animate={{
                      scale: index === activeCard ? 1.15 : 0.85,
                      opacity: index === activeCard ? 1 : 0.3,
                      y: index === activeCard ? -20 : 0,
                      height: index === activeCard ? "auto" : undefined,
                      rotateY: 0,
                      z: index === activeCard ? 20 : 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    onHoverStart={() => {
                      if (!isMobile && !isAutoHighlighting) {
                        handleUserInteraction(index);
                        setLastHoveredCard(index);
                        setHasInteracted(true);
                      }
                    }}
                    onHoverEnd={() => {
                      if (!isMobile && !isAutoHighlighting) {
                        setActiveCard(lastHoveredCard);
                      }
                    }}
                  >
                    {/* Subtle border glow hint for hoverable cards */}
                    {isFullyVisible &&
                      showHoverHints &&
                      !isMobile &&
                      !isAutoHighlighting &&
                      index !== activeCard && (
                        <motion.div
                          className="absolute inset-0 rounded-xl border border-red-500/20 pointer-events-none"
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            borderColor: [
                              "rgba(239, 68, 68, 0.2)",
                              "rgba(239, 68, 68, 0.5)",
                              "rgba(239, 68, 68, 0.2)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    {/* Glow effect for active card */}
                    {index === activeCard && (
                      <motion.div
                        className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}

                    <Card
                      className={`${
                        index === activeCard
                          ? "w-28 h-56 sm:w-32 sm:h-60 md:w-36 md:h-64 lg:w-40 lg:h-72 xl:w-44 xl:h-80"
                          : "w-28 h-40 sm:w-32 sm:h-44 md:w-36 md:h-48 lg:w-40 lg:h-56 xl:w-44 xl:h-64"
                      } bg-gradient-to-br transition-all duration-700 border-2 relative overflow-hidden cursor-pointer ${
                        index === activeCard
                          ? "from-gray-800 to-gray-700 border-red-500 shadow-2xl shadow-red-500/30"
                          : "from-gray-900 to-black border-gray-700 shadow-md"
                      }`}
                    >
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <motion.div
                          className="w-full h-full bg-gradient-to-br from-red-500/20 to-transparent"
                          animate={{
                            rotate: index === activeCard ? 360 : 0,
                          }}
                          transition={{
                            duration: 20,
                            repeat:
                              index === activeCard
                                ? Number.POSITIVE_INFINITY
                                : 0,
                            ease: "linear",
                          }}
                        />
                      </div>

                      <CardContent className="p-2 sm:p-3 lg:p-4 xl:p-5 h-full flex flex-col relative z-10">
                        {/* Card Number Badge */}

                        {/* Card Title */}
                        <div className="text-center mb-1 sm:mb-2 lg:mb-3 mt-1 sm:mt-2">
                          <motion.h3
                            className={`font-bold text-[10px] sm:text-xs lg:text-sm xl:text-base tracking-wide leading-tight transition-colors duration-500 ${
                              index === activeCard
                                ? "text-white"
                                : "text-gray-300"
                            }`}
                            animate={{
                              scale: index === activeCard ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.4 }}
                          >
                            {card.title}
                          </motion.h3>
                        </div>

                        {/* Card Image */}
                        <div className="flex-1 mb-1 sm:mb-2 lg:mb-3 overflow-hidden rounded-lg relative">
                          <motion.img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover"
                            animate={{
                              scale: index === activeCard ? 1 : 1.1,
                              opacity: index === activeCard ? 1 : 0.6,
                              filter:
                                index === activeCard
                                  ? "brightness(1.1) contrast(1.1)"
                                  : "brightness(0.8) contrast(0.9)",
                            }}
                            transition={{ duration: 0.6 }}
                          />

                          {/* Image overlay for inactive cards */}
                          {index !== activeCard && (
                            <div className="absolute inset-0 bg-gray-900/40" />
                          )}
                        </div>

                        {/* Card Content */}
                        <motion.div
                          className="space-y-0.5 sm:space-y-1 lg:space-y-1.5"
                          initial={{ opacity: 0.5, y: 10 }}
                          animate={{
                            opacity: index === activeCard ? 1 : 0.5,
                            y: index === activeCard ? 0 : 10,
                          }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {card.content
                            .slice(0, index === activeCard ? 3 : 2)
                            .map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                className="flex items-center text-gray-300 text-[10px] sm:text-xs lg:text-sm"
                                initial={{ opacity: 0.6, x: -5 }}
                                animate={{
                                  opacity: index === activeCard ? 1 : 0.6,
                                  x: index === activeCard ? 0 : -5,
                                }}
                                transition={{
                                  duration: 0.4,
                                  delay:
                                    index === activeCard
                                      ? 0.3 + itemIndex * 0.1
                                      : 0,
                                }}
                              >
                                <motion.div
                                  className={`rounded-full mr-1 sm:mr-2 flex-shrink-0 ${
                                    index === activeCard
                                      ? "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500"
                                      : "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-500"
                                  }`}
                                  animate={{
                                    scale:
                                      index === activeCard ? [1, 1.3, 1] : 1,
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat:
                                      index === activeCard
                                        ? Number.POSITIVE_INFINITY
                                        : 0,
                                    delay: itemIndex * 0.2,
                                  }}
                                />
                                <span
                                  className={
                                    index === activeCard ? "font-medium" : ""
                                  }
                                >
                                  {item}
                                </span>
                              </motion.div>
                            ))}

                          {/* Show more indicator for active card */}
                          {index === activeCard && card.content.length > 3 && (
                            <motion.div
                              className="text-red-400 text-[10px] sm:text-xs text-center mt-1 sm:mt-2 font-medium"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 }}
                            >
                              +{card.content.length - 3} more features
                            </motion.div>
                          )}
                        </motion.div>

                        {/* Progress bar for active card */}
                        {/* {index === activeCard && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{ transformOrigin: "left" }}
                          />
                        )} */}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced visual elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Animated background particles */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-red-500/20 rounded-full"
                    style={{
                      left: `${(i * 37) % 100}%`,
                      top: `${(i * 73) % 100}%`,
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Progress Indicator */}
          {/* <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
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
              <p className="text-gray-400 text-xs text-center mt-2">
                Swipe or tap dots to navigate
              </p>
            )}
          </div> */}

          {/* Mobile Navigation Hints */}
          {isMobile && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <span>←</span>
                <span>Swipe to navigate</span>
                <span>→</span>
              </div>
            </div>
          )}

          {!isMobile && (
            <>
              {/* Hover instruction hint */}
              {isFullyVisible && showHoverHints && (
                <motion.div
                  className="absolute top-[calc(25%-20px)] sm:top-[calc(25%-10px)] left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                ></motion.div>
              )}

              {/* Auto-highlighting indicator */}
              {/* {isAutoHighlighting && (
                <motion.div
                  className="absolute top-[calc(25%--800px)] left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2 text-red-400 text-sm font-medium">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full"
                    />
                    <span>Showcasing interactive cards...</span>
                  </div>
                </motion.div>
              )} */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
