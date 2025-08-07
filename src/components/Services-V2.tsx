import React, { useRef, useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion, useScroll } from "framer-motion";

const services = [
  {
    topic: "Hardware Design",
    image:
      "https://framerusercontent.com/images/xZdrZACUdNYgULp5M3m2BcUhBI.png",
    description:
      "Develop system architecture and select core electronic components.",
  },
  {
    topic: "Firmware Developemnt",
    image:
      "https://framerusercontent.com/images/URP1Krg4uds9qGHII952XUGsc4.png",
    description:
      "Program low-level code to bring up boards, handle protocols, and control hardware.",
  },
  {
    topic: "PCB Desing",
    image:
      "https://framerusercontent.com/images/7CnP7xCaEUuDiSvOyIyHs36cw4I.png",
    description: "Design and layout production-ready printed circuit boards.",
  },
  {
    topic: "Industrial Desing And Mechanical",
    image:
      "https://framerusercontent.com/images/kTPtpORfLevVY4rDMRwjeXD72sc.png",
    description:
      "Design products that look great, feel right, and are ready to manufacture.",
  },
  {
    topic: "Apps and Cloud",
    image: "https://framerusercontent.com/images/8tZqdkd46foyx5TeIzPw8YhbA.png",
    description:
      "Build full-stack software that connects devices to seamless digital experiences.",
  },
  {
    topic: "Value Added Services",
    image:
      "https://framerusercontent.com/images/fwoTbHaje1iNRvuK7dPxw0nq3Kg.png",
    description:
      "Enable production with test jigs, certifications, vendor audits, and prototyping.",
  },
];

const ServicesV2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Adjust offset to better control the scrolling effect
    // This makes the scroll effect start when the section enters the viewport
    // and end when the section is about to leave the viewport
    offset: ["start start", "end end"],
  });

  // Update active card based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Use a more controlled approach with wider scroll range for slower transitions
      const scrollStart = 0.1; // Start at 10% of scroll
      const scrollEnd = 0.9; // End at 90% of scroll

      // Add padding between card transitions
      const transitionPadding = 0.2; // 20% padding between transitions

      // Calculate adjusted progress to account for padding
      const rawProgress = (latest - scrollStart) / (scrollEnd - scrollStart);
      const normalizedProgress = Math.max(
        0,
        Math.min(1, rawProgress * (1 + transitionPadding))
      );

      // Calculate card index with a smoother transition
      const exactIndex = normalizedProgress * (services.length - 1);
      const cardIndex = Math.floor(exactIndex);

      // Clamp the index to valid range
      const clampedIndex = Math.min(
        Math.max(cardIndex, 0),
        services.length - 1
      );

      // Update active card
      setActiveCard(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, isMobile, services.length]);

  return (
    <section
      ref={containerRef}
      className="w-full py-6"
      style={{ minHeight: isMobile ? "400vh" : "300vh" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 sticky top-0 pt-16 pb-24 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Our Services
        </h2>
        <div className="pb-4 md:pb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 w-full max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              animate={{
                scale: idx === activeCard ? 1.05 : 0.95,
                opacity: idx === activeCard ? 1 : 0.7,
                y: idx === activeCard ? -10 : 0,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
            >
              <Card
                className={`relative flex flex-col h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] overflow-hidden group shadow-lg 
                ${idx === activeCard ? "border-2 border-red-500" : "border-0"}`}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 w-full h-full bg-center bg-cover z-0"
                  style={{ backgroundImage: `url(${service.image})` }}
                  aria-hidden="true"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10" />

                {/* Glow effect for active card */}
                {idx === activeCard && (
                  <motion.div
                    className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl z-5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                )}

                {/* Card content overlays */}
                <div className="relative z-20 flex flex-col h-full justify-between p-4 sm:p-5">
                  <CardHeader className="p-0 mb-2 bg-transparent">
                    <motion.div
                      animate={{
                        scale: idx === activeCard ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <CardTitle
                        className={`text-base sm:text-lg text-white text-center drop-shadow font-bold 
                        ${idx === activeCard ? "text-red-100" : "text-white"}`}
                      >
                        {service.topic}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-0 mt-auto flex flex-col items-center">
                    <motion.p
                      className="text-xs sm:text-sm text-white text-center mb-3 drop-shadow"
                      animate={{
                        opacity: idx === activeCard ? 1 : 0.8,
                      }}
                    >
                      {service.description}
                    </motion.p>
                    <Button
                      variant={idx === activeCard ? "destructive" : "secondary"}
                      className="w-full max-w-[140px] text-xs sm:text-sm py-2"
                    >
                      Know More
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === activeCard ? "bg-red-500 scale-125" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesV2;
