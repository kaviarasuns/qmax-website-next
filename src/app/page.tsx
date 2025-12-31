"use client";
import InsideOut from "@/components/InsideOut";

import { motion, useScroll, useTransform } from "framer-motion";
import ScrollCardsAnimationV4 from "@/components/concept-to-manufacturing-v4";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { useLenis } from "@/utils/lenis";
import Typewriter from "typewriter-effect";
import ServicesV3 from "@/components/Services-V3";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoHighlighting, setIsAutoHighlighting] = useState(false);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showBottomText, setShowBottomText] = useState(false);
  const [fadeOutLines, setFadeOutLines] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const firstTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const secondTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  console.log("isAutoHighlighting", isAutoHighlighting);
  // Handle typewriter timing and video control
  useEffect(() => {
    // Start the second line after the first line would be complete
    // "Electronics Engineering Services" has 33 characters
    // At 45ms delay per character: 33 * 45 = 1485ms
    firstTimeoutRef.current = setTimeout(() => {
      setShowSecondLine(true);
    }, 1500);

    // Fade out both lines after the second line completes typing
    // Second line "From Concept to Production" has 26 characters
    // Total time: 1500ms + (26 * 45) = 2670ms
    setTimeout(() => {
      setFadeOutLines(true);
    }, 2670);

    // Start video and show bottom text after both lines are complete
    // Adding a small buffer for the fade out transition
    fadeTimeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
      setShowBottomText(true);
    }, 3700);

    return () => {
      if (firstTimeoutRef.current) clearTimeout(firstTimeoutRef.current);
      if (secondTimeoutRef.current) clearTimeout(secondTimeoutRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollCardsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const insideOutRef = useRef<HTMLDivElement>(null);
  const emblaRef = useRef<HTMLDivElement>(null);

  // Array of refs for easy navigation (footer will be handled separately via querySelector)
  const sectionRefs = [
    heroRef,
    scrollCardsRef,
    servicesRef,
    insideOutRef,
    emblaRef,
  ];
  const sectionNames = [
    "Hero",
    "Concept to Manufacturing",
    "Services",
    "Inside Out",
    "Carousel",
    "Footer",
  ];

  // Get Lenis instance
  const lenis = useLenis();

  // Ensure this only runs on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Hide scroll bar only on home page
  useEffect(() => {
    if (!isClient) return;

    // Store original styles
    const htmlElement = document.documentElement;
    const originalHtmlStyle = {
      scrollbarWidth: htmlElement.style.scrollbarWidth,
      msOverflowStyle: (
        htmlElement.style as CSSStyleDeclaration & { msOverflowStyle?: string }
      ).msOverflowStyle,
    };

    // Apply scroll bar hiding styles
    htmlElement.style.scrollbarWidth = "none"; // Firefox
    (
      htmlElement.style as CSSStyleDeclaration & { msOverflowStyle?: string }
    ).msOverflowStyle = "none"; // Internet Explorer 10+

    // Add webkit scrollbar hiding
    const style = document.createElement("style");
    style.id = "home-page-scrollbar-hide";
    style.textContent = `
      html::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function to restore original styles
    return () => {
      // Restore original styles
      htmlElement.style.scrollbarWidth = originalHtmlStyle.scrollbarWidth || "";
      (
        htmlElement.style as CSSStyleDeclaration & { msOverflowStyle?: string }
      ).msOverflowStyle = originalHtmlStyle.msOverflowStyle || "";

      // Remove webkit scrollbar hiding
      const styleElement = document.getElementById("home-page-scrollbar-hide");
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, [isClient]);

  // Intersection Observer to track current section during manual scroll
  useEffect(() => {
    if (!isClient) return;
    // Skip this scroll snapping behavior on mobile screens
    if (typeof window !== "undefined" && window.innerWidth <= 768) return;

    // Use a simpler approach with scroll listener instead of Intersection Observer
    const handleScroll = () => {
      if (isProgrammaticScroll) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Get footer element from DOM since it's in layout
      const footerElement = document.querySelector("footer");

      // Create an extended sections array that includes footer
      const allSections: Array<{ current: HTMLElement | null }> = [
        ...sectionRefs,
      ];
      if (footerElement) {
        allSections.push({ current: footerElement as HTMLElement });
      }

      // Find the section that is currently in the middle of the viewport
      let closestSectionIndex = 0;
      let closestDistance = Infinity;

      allSections.forEach((ref, index) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          // Early detection: trigger when section is 30% visible in viewport
          const earlyDetectionPoint = sectionTop + sectionHeight * 0.1;
          const distance = Math.abs(scrollPosition - earlyDetectionPoint);

          // Bonus for sections that are entering the viewport from top
          let adjustedDistance = distance;
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            // Section is in viewport, reduce distance to prioritize it
            adjustedDistance = distance * 0.7;
          }

          if (adjustedDistance < closestDistance) {
            closestDistance = adjustedDistance;
            closestSectionIndex = index;
          }
        }
      });

      if (closestSectionIndex !== currentSection) {
        setCurrentSection(closestSectionIndex);

        const targetRef = sectionRefs[closestSectionIndex];

        if (closestSectionIndex === 3) {
          // For section 3, scroll to the start of the target ref instead of middle
          if (targetRef.current && lenis) {
            console.log("calling lenis for section 3 - scroll to start");
            console.log("Section changed", closestSectionIndex, currentSection);
            lenis.scrollTo(targetRef.current, {
              offset:
                window.innerWidth <= 768
                  ? 50
                  : window.innerWidth <= 1024
                  ? 80
                  : 160, // Responsive offset: mobile (50px), tablet (80px), desktop (110px)
              duration: 1.5,
              easing: (t) =>
                t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, // Slow start, fast middle, smooth stop
              lock: true, // Lock user scrolling during animation
            });
          }
          return;
        }

        // if(closestSectionIndex === 4){
        //   // For section 4, use much slower easing at the start
        //   if (targetRef.current && lenis) {
        //     console.log("calling lenis for section 4 - much slower start");
        //     console.log("Section changed", closestSectionIndex, currentSection);
        //     lenis.scrollTo(targetRef.current, {
        //       offset: window.innerWidth <= 768 ? 50 : window.innerWidth <= 1024 ? 80 : 110, // Responsive offset: mobile (50px), tablet (80px), desktop (110px)
        //       duration: 1.5,
        //       easing: (t) => t < 0.3 ? 0.5 * t * t * t : t < 0.7 ? 1 - Math.pow(-2 * (t - 0.3) + 1, 3) / 2 : 1 - Math.pow(-2 * t + 2, 4) / 2,  // Custom easing with extra slow deceleration at the end
        //       lock: true // Lock user scrolling during animation
        //     });
        //   }
        //   return;
        // }

        // Handle footer case (index 5)
        if (closestSectionIndex === 5) {
          const footerElement = document.querySelector("footer");
          if (footerElement && lenis) {
            console.log("calling lenis for footer");
            console.log("Section changed", closestSectionIndex, currentSection);
            lenis.scrollTo(footerElement, {
              offset: 0, // Scroll to start of footer
              duration: 1.5,
              easing: (t) =>
                t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
              lock: true,
            });
          }
          return;
        }

        // Smooth scroll to the section using Lenis when it becomes the current section

        if (targetRef.current && lenis) {
          console.log("calling lenis");
          console.log("Section changed", closestSectionIndex, currentSection);
          lenis.scrollTo(targetRef.current, {
            offset:
              -window.innerHeight / 2 + targetRef.current.offsetHeight / 2,
            duration: 1.5,
            // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
            easing: (t) =>
              t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, // Slow start, fast middle, smooth stop
            lock: true, // Lock user scrolling during animation
          });
        }
      }
    };

    // Throttle the scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isClient, sectionRefs, currentSection, isProgrammaticScroll, lenis]);

  // Function to scroll to specific section
  const scrollToSection = (sectionIndex: number) => {
    if (sectionIndex === 5) {
      // Handle footer case
      const footerElement = document.querySelector("footer");
      if (footerElement && lenis) {
        setIsProgrammaticScroll(true);
        setCurrentSection(sectionIndex);

        lenis.scrollTo(footerElement, {
          offset: 0, // Scroll to start of footer
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
          onComplete: () => {
            // Re-enable intersection observer after scroll animation completes
            setTimeout(() => {
              setIsProgrammaticScroll(false);
            }, 100);
          },
        });
      }
      return;
    }

    const targetRef = sectionRefs[sectionIndex];

    if (sectionIndex === 3) {
      // For section 3, scroll to the start of the target ref instead of middle
      if (targetRef.current && lenis) {
        lenis.scrollTo(targetRef.current, {
          offset:
            window.innerWidth <= 768
              ? 50
              : window.innerWidth <= 1024
              ? 80
              : 160, // Responsive offset: mobile (50px), tablet (80px), desktop (110px)
          duration: 1.5,
          easing: (t) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, // Slow start, fast middle, smooth stop
          lock: true, // Lock user scrolling during animation
        });
      }
      return;
    }

    if (targetRef.current && lenis) {
      setIsProgrammaticScroll(true);
      setCurrentSection(sectionIndex);

      lenis.scrollTo(targetRef.current, {
        offset: -window.innerHeight / 2 + targetRef.current.offsetHeight / 2,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
        // lock: true, // Lock user scrolling during animation
        onComplete: () => {
          // Re-enable intersection observer after scroll animation completes
          setTimeout(() => {
            setIsProgrammaticScroll(false);
          }, 100);
        },
      });
    }
  };

  // Function to navigate to next section
  // const goToNextSection = () => {
  //   const nextSection = (currentSection + 1) % sectionRefs.length;
  //   scrollToSection(nextSection);
  // };

  // Function to navigate to previous section
  // const goToPreviousSection = () => {
  //   const prevSection = currentSection === 0 ? sectionRefs.length - 1 : currentSection - 1;
  //   scrollToSection(prevSection);
  // };

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [200, 600], [1, 0.9]);
  const opacity = useTransform(scrollY, [200, 600], [1, 0.8]);

  return (
    <>
      <div ref={heroRef}>
        <motion.div
          className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
          style={{
            scale,
            opacity,
            borderRadius: useTransform(scrollY, [0, 500], [0, 30]),
          }}
        >
          {/* Top gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/60 via-white/30 to-transparent z-[1]"></div>
          {/* Bottom gradient overlay */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-[1]"></div> */}
          <motion.video
            ref={videoRef}
            src="https://d1yetprhniwywz.cloudfront.net/v2/bI5j7L3hwM91DqHlKw3woZrrbEk.mp4"
            autoPlay={false}
            loop
            muted
            playsInline
            controls={false}
            className="w-full h-full object-cover shadow-lg"
            // style={{ borderRadius }}
          />

          {/* Typewriter Effect Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-[2]">
            <div className="text-center">
              <div
                className={`text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-opacity duration-1000 ${
                  fadeOutLines ? "opacity-0" : "opacity-100"
                }`}
              >
                <Typewriter
                  options={{
                    strings: ["Electronics Engineering Services"],
                    autoStart: true,
                    cursor: "",
                    delay: 45,
                  }}
                />
              </div>
              {showSecondLine && (
                <div
                  className={`text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium transition-opacity duration-1000 ${
                    fadeOutLines ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Typewriter
                    options={{
                      strings: ["From Concept to Production"],
                      autoStart: true,
                      cursor: "",
                      delay: 45,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          {showBottomText && (
            <div className="absolute bottom-4 left-4 sm:bottom-16 sm:left-16 text-white text-xl sm:text-3xl md:text-4xl font-bold z-10 animate-fade-in">
              Electronics Engineering Services
              <div className="text-base sm:text-xl md:text-2xl font-medium mt-2">
                {/* From Concept to Production */}
                <p>From Concept to Production</p>
                {/* <TypeAnimation
                  sequence={[
                    "We deliver electronics from concept",
                    1000,
                    "We deliver electronics to prototype",
                    1000,
                    "We deliver electronics into production",
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: "1em" }}
                  repeat={Infinity}
                /> */}
              </div>
              <button className="mt-5 px-4 py-2.5 sm:px-5 sm:py-2.5 text-sm sm:text-base border border-white text-white bg-transparent rounded-md transition hover:bg-white/10">
                Let&apos;s Build
              </button>
            </div>
          )}
        </motion.div>
      </div>
      <div ref={scrollCardsRef}>
        <ScrollCardsAnimationV4 onAutoHighlightChange={setIsAutoHighlighting} />
      </div>
      <div ref={servicesRef}>
        <ServicesV3 />
      </div>
      <div ref={insideOutRef}>
        <InsideOut />
      </div>
      <div ref={emblaRef}>
      <ServicesSection/>
      </div>

      {/* Navigation Button - Fixed on middle right edge */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-2">
        {/* Previous Section Button */}
        {/* <button
          onClick={goToPreviousSection}
          disabled={isAutoHighlighting}
          className={`w-12 h-12 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-xl ${
            isAutoHighlighting 
              ? 'bg-gray-600/60 cursor-not-allowed opacity-50' 
              : 'bg-gray-900/80 hover:bg-gray-800/90'
          }`}
          title="Previous Section"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button> */}

        {/* Section Indicator */}
        {/* <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg px-3 py-2 text-white text-xs font-medium shadow-xl">
          {currentSection + 1}/{sectionRefs.length}
        </div> */}

        {/* Next Section Button */}
        {/* <button
          onClick={goToNextSection}
          disabled={isAutoHighlighting}
          className={`w-12 h-12 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-xl ${
            isAutoHighlighting 
              ? 'bg-gray-600/60 cursor-not-allowed opacity-50' 
              : 'bg-gray-900/80 hover:bg-gray-800/90'
          }`}
          title="Next Section"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          </button> */}

        {/* Section Quick Access Buttons (hidden on mobile) */}
        <div className="mt-4 hidden sm:flex flex-col space-y-1">
          {sectionNames.map((name, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 shadow-lg ${
                currentSection === index
                  ? "bg-white border border-gray-700"
                  : "bg-gray-600/80 hover:bg-gray-500/90 border border-gray-700/50"
              }`}
              title={name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
