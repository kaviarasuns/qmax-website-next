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
  const [isBelow1500, setIsBelow1500] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
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
      // Calculate the current card index based on scroll progress with increased sensitivity
      const sensitivity = isMobile ? 1.5 : 6; // Higher sensitivity on desktop (fewer scrolls per card)
      const cardIndex = Math.floor(latest * cards.length * sensitivity); // Adjusted sensitivity
      const clampedIndex = Math.min(Math.max(cardIndex, 0), cards.length - 1);

      // Update active card
      setActiveCard(clampedIndex);

      // Handle completion state - set to true when near the end
      if (latest >= 0.85) {
        // Adjusted threshold
        setIsHorizontalScrollComplete(true);
      }
      // Reset completion state when scrolling backward significantly
      else if (latest < 0.7 && isHorizontalScrollComplete) {
        // Adjusted threshold
        setIsHorizontalScrollComplete(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isHorizontalScrollComplete, isMobile]);

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
    <div className=" min-h-screen">
      {/* Horizontal Cards Section */}
      <div
        ref={containerRef}
        style={{ height: isMobile ? "400vh" : `${cards.length * 70}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Red Arrow - hidden on mobile */}
          {!isMobile && (
            <motion.div
              className={`absolute z-20 ${
                isBelow1500 ? "bottom-[200px]" : "bottom-[300px]"
              }`}
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
          ) : (
            /* Desktop: 7 Cards Visible with Enhanced Visual Appeal */
            <div className="w-full px-8 lg:px-12 xl:px-16">
              <div className="flex items-center justify-center space-x-3 lg:space-x-4 xl:space-x-6">
                {cards.slice(0, 7).map((card, index) => (
                  <motion.div
                    key={card.id}
                    className="relative flex-shrink-0"
                    initial={{ scale: 0.7, opacity: 0.2, y: 50 }}
                    animate={{
                      scale:
                        index === activeCard
                          ? 1.15
                          : index <= activeCard
                          ? 1
                          : 0.85,
                      opacity: index <= activeCard ? 1 : 0.3,
                      y:
                        index === activeCard
                          ? -20
                          : index <= activeCard
                          ? 0
                          : 20,
                      rotateY:
                        index === activeCard
                          ? 0
                          : index < activeCard
                          ? -12
                          : 12,
                      z:
                        index === activeCard
                          ? 20
                          : index <= activeCard
                          ? 10
                          : 0,
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
                  >
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
                      className={`w-40 h-56 lg:w-44 lg:h-64 xl:w-48 xl:h-72 bg-gradient-to-br transition-all duration-700 border-2 relative overflow-hidden ${
                        index === activeCard
                          ? "from-gray-800 to-gray-700 border-red-500 shadow-2xl shadow-red-500/30"
                          : index <= activeCard
                          ? "from-gray-800 to-gray-900 border-gray-500 shadow-lg shadow-gray-900/50"
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

                      <CardContent className="p-3 lg:p-4 xl:p-5 h-full flex flex-col relative z-10">
                        {/* Card Number Badge */}

                        {/* Card Title */}
                        <div className="text-center mb-2 lg:mb-3 mt-2">
                          <motion.h3
                            className={`font-bold text-xs lg:text-sm xl:text-base tracking-wide leading-tight transition-colors duration-500 ${
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
                        <div className="flex-1 mb-2 lg:mb-3 overflow-hidden rounded-lg relative">
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
                          className="space-y-1 lg:space-y-1.5"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: index === activeCard ? 1 : 0.5,
                            y: index === activeCard ? 0 : 10,
                          }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {card.content
                            .slice(0, index === activeCard ? 4 : 2)
                            .map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                className="flex items-center text-gray-300 text-xs lg:text-sm"
                                initial={{ opacity: 0, x: -20 }}
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
                                  className={`rounded-full mr-2 flex-shrink-0 ${
                                    index === activeCard
                                      ? "w-2 h-2 bg-red-500"
                                      : "w-1.5 h-1.5 bg-gray-500"
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
                          {index === activeCard && card.content.length > 4 && (
                            <motion.div
                              className="text-red-400 text-xs text-center mt-2 font-medium"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 }}
                            >
                              +{card.content.length - 4} more features
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
              <p className="text-gray-400 text-xs text-center mt-2">
                Swipe or tap dots to navigate
              </p>
            )}
          </div>

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
        </div>
      </div>
    </div>
  );
}
