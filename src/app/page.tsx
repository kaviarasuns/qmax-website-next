"use client";
import InsideOut from "@/components/InsideOut";
import ServicesV2 from "@/components/Services-V2";

import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import ScrollCardsAnimationV4 from "@/components/concept-to-manufacturing-v4";
import { useState, useEffect, useRef } from "react";
import React from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoHighlighting, setIsAutoHighlighting] = useState(false);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  
  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollCardsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const insideOutRef = useRef<HTMLDivElement>(null);
  const emblaRef = useRef<HTMLDivElement>(null);
  
  // Array of refs for easy navigation
  const sectionRefs = [heroRef, scrollCardsRef, servicesRef, insideOutRef, emblaRef];
  const sectionNames = ['Hero', 'Concept to Manufacturing', 'Services', 'Inside Out', 'Carousel'];
  
  // Ensure this only runs on client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Intersection Observer to track current section during manual scroll
  useEffect(() => {
    if (!isClient) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Only trigger when section is in middle 20% of viewport
      threshold: 0
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Skip observer updates during programmatic scrolling
      if (isProgrammaticScroll) return;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = sectionRefs.findIndex(ref => ref.current === entry.target);
          if (sectionIndex !== -1 && sectionIndex !== currentSection) {
            setCurrentSection(sectionIndex);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    sectionRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      sectionRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
    };
  }, [isClient, sectionRefs, currentSection, isProgrammaticScroll]);
  console.log("logging isClient for noReason", isClient)
  
  // Function to scroll to specific section
  const scrollToSection = (sectionIndex: number) => {
    const targetRef = sectionRefs[sectionIndex];
    if (targetRef.current) {
      setIsProgrammaticScroll(true);
      setCurrentSection(sectionIndex);
      
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'  // Options: 'start', 'center', 'end', 'nearest'\r
      });
      
      // Re-enable intersection observer after scroll animation completes
      setTimeout(() => {
        setIsProgrammaticScroll(false);
      }, 1000); // Adjust timing based on scroll animation duration
    }
  };
  
  // Function to navigate to next section
  const goToNextSection = () => {
    const nextSection = (currentSection + 1) % sectionRefs.length;
    scrollToSection(nextSection);
  };
  
  // Function to navigate to previous section
  const goToPreviousSection = () => {
    const prevSection = currentSection === 0 ? sectionRefs.length - 1 : currentSection - 1;
    scrollToSection(prevSection);
  };

  const { scrollY } = useScroll();

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const scale = useTransform(scrollY, [200, 600], [1, 0.9]);
  const opacity = useTransform(scrollY, [200, 600], [1, 0.8]);

  return (
    <>
      <motion.div
        ref={heroRef}
        className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
        style={{
          scale,
          opacity,
          borderRadius: useTransform(scrollY, [0, 500], [0, 30]),
        }}
      >
     
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/70 to-transparent z-[1]"></div>
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-[1]"></div>
        <motion.video
          src="https://d1yetprhniwywz.cloudfront.net/v2/bI5j7L3hwM91DqHlKw3woZrrbEk.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover shadow-lg"
          // style={{ borderRadius }}
        />
        <div className="absolute bottom-4 left-4 sm:bottom-16 sm:left-16 text-white text-xl sm:text-2xl font-bold z-10">
          From Concept to Production
          <div className="text-base sm:text-lg font-medium mt-2">
            We make ideas soar!
          </div>
          <button className="mt-4 px-3 py-2 sm:px-4 sm:py-1 border border-white text-white bg-transparent rounded">
            Let&apos;s Build
          </button>
        </div>
      </motion.div>
        <div ref={scrollCardsRef}>
          <ScrollCardsAnimationV4 onAutoHighlightChange={setIsAutoHighlighting} />
        </div>
      <div ref={servicesRef}>
        <ServicesV2 />
      </div>
      <div ref={insideOutRef}>
        <InsideOut />
      </div>
      <div ref={emblaRef}>
        <EmblaCarousel options={OPTIONS} />
      </div>

      
      {/* Navigation Button - Fixed on middle right edge */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-2">
        {/* Previous Section Button */}
        <button
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
        </button>
        
        {/* Section Indicator */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg px-3 py-2 text-white text-xs font-medium shadow-xl">
          {currentSection + 1}/{sectionRefs.length}
        </div>
        
        {/* Next Section Button */}
        <button
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
          </button>
        
        {/* Section Quick Access Buttons */}
        <div className="mt-4 flex flex-col space-y-1">
          {sectionNames.map((name, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 shadow-lg ${
                currentSection === index
                  ? 'bg-white border border-gray-700'
                  : 'bg-gray-600/80 hover:bg-gray-500/90 border border-gray-700/50'
              }`}
              title={name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
