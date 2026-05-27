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

// Controls the speed of the auto-highlight sequence (ms per card)
const AUTO_HIGHLIGHT_DELAY = 800;

interface ScrollCardsAnimationV4Props {
  onComplete?: () => void;
  onAutoHighlightChange?: (isAutoHighlighting: boolean) => void;
}

export default function ScrollCardsAnimationV4({
  onComplete,
  onAutoHighlightChange,
}: ScrollCardsAnimationV4Props = {}) {
  const [activeCard, setActiveCard] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [showHoverHints, setShowHoverHints] = useState(false);
  const [isAutoHighlighting, setIsAutoHighlighting] = useState(false);
  const [hasAutoHighlighted, setHasAutoHighlighted] = useState(false);
  const [displayScale, setDisplayScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect display scale (DPI scaling / zoom level)
  useEffect(() => {
    const checkDisplayScale = () => {
      const scale = window.devicePixelRatio;
      setDisplayScale(scale);
      console.log(
        `Display Scale: ${scale * 100}% (devicePixelRatio: ${scale})`,
      );
    };

    checkDisplayScale();

    // Listen for scale changes (zoom changes or monitor switches)
    const handleResize = () => {
      checkDisplayScale();
    };

    window.addEventListener("resize", handleResize);

    // Also use matchMedia for more accurate scale change detection
    const mediaQueryList = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`,
    );
    const handleMediaChange = () => {
      checkDisplayScale();
    };
    mediaQueryList.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQueryList.removeEventListener("change", handleMediaChange);
    };
  }, []);

  // Intersection Observer to detect when component becomes fully visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
            setIsFullyVisible(true);
            // Start auto-highlight sequence only once when visible
            if (!isMobile && !hasInteracted && !hasAutoHighlighted) {
              setIsAutoHighlighting(true);
              onAutoHighlightChange?.(true); // Notify parent component
              setHasAutoHighlighted(true); // Mark as triggered
              // Cycle through all cards quickly
              const highlightSequence = async () => {
                for (let i = 0; i < cards.length; i++) {
                  setActiveCard(i);
                  await new Promise((resolve) =>
                    setTimeout(resolve, AUTO_HIGHLIGHT_DELAY),
                  );
                }
                // Reset to no active card after sequence
                setActiveCard(-1);
                setIsAutoHighlighting(false);
                onAutoHighlightChange?.(false); // Notify parent component
                // Show hover hints after auto-highlight completes
                setTimeout(() => {
                  setShowHoverHints(true);
                }, 500);
              };
              highlightSequence();
            } else {
              // Show hover hints immediately if mobile, already interacted, or already auto-highlighted
              setTimeout(() => {
                setShowHoverHints(true);
              }, 1000);
            }
          } else {
            setIsFullyVisible(false);
            setShowHoverHints(false);
            setIsAutoHighlighting(false);
            onAutoHighlightChange?.(false); // Notify parent component when not visible
          }
        });
      },
      {
        threshold: 0.8, // Trigger when 80% of component is visible
        rootMargin: "0px",
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isMobile, hasInteracted, hasAutoHighlighted, onAutoHighlightChange]);

  // Detect mobile device and initialize activeCard
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      // Initialize with first card on mobile if no card is selected
      if (isMobileDevice && activeCard === -1) {
        setActiveCard(0);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [activeCard]);

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

  // Handle screen size changes for below1500 state
  useEffect(() => {
    const checkSizes = () => {};
    checkSizes();
    window.addEventListener("resize", checkSizes);
    return () => window.removeEventListener("resize", checkSizes);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full pt-0 md:pt-8 lg:pt-12 xl:pt-16 pb-0 md:pb-4 lg:pb-8 flex items-center justify-center"
    >
      {/* Horizontal Cards Section */}

      {isMobile ? (
        <div className="w-full px-4 flex flex-col items-center justify-center">
          {activeCard >= 0 && activeCard < cards.length ? (
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
                <Card className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-red-500 shadow-2xl shadow-red-500/20">
                  <CardContent className="p-4">
                    {/* Card Title */}
                    <div className="text-center mb-3">
                      <h3 className="text-sm tracking-wide leading-tight">
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
                          className="flex items-center text-black text-xs"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.3 + itemIndex * 0.1,
                          }}
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 mr-2 flex-shrink-0 rounded-full"></div>
                          <span className="tracking-wide">{item}</span>
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
          ) : (
            <div className="text-center text-gray-500">
              <p>Tap to start exploring our process</p>
              <button
                onClick={() => setActiveCard(0)}
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Start
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Desktop: 7 Cards Visible with Enhanced Visual Appeal */
        <div className="w-full px-4 flex flex-col items-center justify-center">
          <div className="relative top-8">
            <h1 className="text-3xl md:text-5xl font-light tracking-wide text-center tracking-wide">
              Design To <span className="text-red-500">Manufacturing</span>
            </h1>
          </div>
          <div
            className={`w-full flex flex-col items-center justify-center h-80 sm:h-[30rem] md:h-[34rem] lg:h-[38rem] xl:h-[42rem] ${
              displayScale >= 1.25
                ? "px-20 md:px-28 lg:px-36 xl:px-48 2xl:px-56"
                : "px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
            }`}
          >
            <div
              className={`flex items-center justify-center ${
                displayScale >= 1.25
                  ? "space-x-3 sm:space-x-4 lg:space-x-5 xl:space-x-6 2xl:space-x-8"
                  : "space-x-1 sm:space-x-2 lg:space-x-3 xl:space-x-4 2xl:space-x-5"
              }`}
            >
              {cards.slice(0, 7).map((card, index) => (
                <motion.div
                  key={card.id}
                  className="relative flex-shrink-0"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{
                    scale: index === activeCard && activeCard !== -1 ? 1.15 : 1,
                    opacity: 1,
                    y:
                      index === activeCard && activeCard !== -1
                        ? "-1.25rem"
                        : "-1rem",
                    rotateY: 0,
                    z: index === activeCard && activeCard !== -1 ? 20 : 0,
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
                      setHasInteracted(true);
                    }
                  }}
                  onHoverEnd={() => {
                    if (!isMobile && !isAutoHighlighting) {
                      setActiveCard(-1);
                    }
                  }}
                >
                  {/* Removed subtle border glow hint for hoverable cards */}
                  {/* Removed glow effect for active card */}

                  <Card
                    className={`${
                      displayScale >= 1.25
                        ? "w-26 min-h-40 sm:w-28 sm:min-h-44 md:w-32 md:min-h-52 lg:w-36 lg:min-h-60 xl:w-40 xl:min-h-68"
                        : "w-28 min-h-52 sm:w-32 sm:min-h-56 md:w-36 md:min-h-64 lg:w-40 lg:min-h-72 xl:w-44 xl:min-h-80"
                    } bg-gradient-to-br from-gray-100 to-gray-200 transition-all duration-700 border-2 relative cursor-pointer border-red-500`}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <motion.div
                        className="w-full h-full bg-gradient-to-br from-red-500/20 to-transparent"
                        animate={{
                          rotate:
                            index === activeCard && activeCard !== -1 ? 360 : 0,
                        }}
                        transition={{
                          duration: 20,
                          repeat:
                            index === activeCard && activeCard !== -1
                              ? Number.POSITIVE_INFINITY
                              : 0,
                          ease: "linear",
                        }}
                      />
                    </div>

                    <CardContent className="pt-0 px-0 pb-2 sm:pb-3 lg:pb-4 xl:pb-5 h-full flex flex-col relative z-10">
                      {/* Card Number Badge */}

                      {/* Card Title - Fixed height container */}
                      <div className="text-center mb-1 sm:mb-2 lg:mb-3 mt-3 sm:mt-4 h-8 sm:h-10 lg:h-12 xl:h-14 flex items-center justify-center px-2">
                        <motion.h3
                          className={`tracking-wide leading-tight transition-colors duration-500 text-center line-clamp-2 ${
                            displayScale >= 1.25
                              ? "text-[8px] sm:text-[10px] lg:text-xs xl:text-sm"
                              : "text-[10px] sm:text-xs lg:text-sm xl:text-base"
                          } text-black`}
                          animate={{
                            scale:
                              index === activeCard && activeCard !== -1
                                ? 1.05
                                : 1,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {card.title}
                        </motion.h3>
                      </div>

                      {/* Card Image - Fixed height container */}
                      <div className="mb-1 sm:mb-2 lg:mb-3 overflow-hidden relative h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48">
                        <motion.img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          animate={{
                            scale:
                              index === activeCard && activeCard !== -1 ? 1 : 1,
                            opacity: 1,
                            filter:
                              index === activeCard && activeCard !== -1
                                ? "brightness(1.1) contrast(1.1)"
                                : "brightness(1.1) contrast(1.1)",
                          }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>

                      {/* Card Content - Flexible height container */}
                      <motion.div
                        className="space-y-0.5 sm:space-y-1 lg:space-y-1.5 h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 px-2"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {card.content.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className={`flex items-center text-black ${
                              displayScale >= 1.25
                                ? "text-[8px] sm:text-[9px] lg:text-xs"
                                : "text-[10px] sm:text-xs lg:text-sm"
                            }`}
                            initial={{ opacity: 1, x: 0 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.3 + itemIndex * 0.1,
                            }}
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 mr-1 sm:mr-2 flex-shrink-0 rounded-full" />
                            <span className="tracking-wide">{item}</span>
                          </motion.div>
                        ))}

                        {/* Show more indicator for cards with more than 3 items */}
                        {card.content.length > 3 && (
                          <motion.div
                            className={`text-red-400 text-center mt-1 sm:mt-2 font-medium ${
                              displayScale >= 1.25
                                ? "text-[8px] sm:text-[9px]"
                                : "text-[10px] sm:text-xs"
                            }`}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                          >
                            +{card.content.length - 3} more features
                          </motion.div>
                        )}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

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
        </>
      )}
    </div>
  );
}

// <div className="h-screen">
//       <div className="h-screen flex items-center justify-center overflow-hidden"></div>
//       </div>
// </div>
