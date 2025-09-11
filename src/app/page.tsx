"use client";
import InsideOut from "@/components/InsideOut";
import ServicesV2 from "@/components/Services-V2";

import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import ScrollCardsAnimationV4 from "@/components/concept-to-manufacturing-v4";
import { useRef, useState, useCallback, useEffect } from "react";
import React from "react";

export default function Home() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);
  const [hasAutoScrolledUp, setHasAutoScrolledUp] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);
  const [autoScrollCooldown, setAutoScrollCooldown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showDashingEffect, setShowDashingEffect] = useState(false);

  // Ensure this only runs on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for the video container as user scrolls
  // Adding a 200px threshold before scaling starts with reduced shrink (92%)
  const scale = useTransform(scrollY, [200, 600], [1, 0.9]);
  const borderRadius = useTransform(scrollY, [200, 600], [0, 30]);
  const opacity = useTransform(scrollY, [200, 600], [1, 0.8]);

  // Auto-scroll function to navigate to cards section (downward)
  const autoScrollToCards = useCallback(() => {
    if (
      !isClient ||
      hasAutoScrolled ||
      isUserScrolling ||
      autoScrollCooldown ||
      !cardsContainerRef.current ||
      typeof window === "undefined"
    )
      return;

    setHasAutoScrolled(true);
    setIsUserScrolling(true);
    setAutoScrollCooldown(true);

    // Calculate the target scroll position
    const cardsElement = cardsContainerRef.current;
    const targetPosition = cardsElement.offsetTop - 100; // 100px offset for better positioning

    // Perform smooth scroll
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // Reset flags after animation completes
    setTimeout(() => {
      setIsUserScrolling(false);
      setAutoScrollCooldown(false);
    }, 1500); // Extended timing for smooth completion
  }, [isClient, hasAutoScrolled, isUserScrolling, autoScrollCooldown]);

  // Auto-scroll function to navigate to top (upward)
  const autoScrollToTop = useCallback(() => {
    if (
      !isClient ||
      hasAutoScrolledUp ||
      isUserScrolling ||
      autoScrollCooldown ||
      typeof window === "undefined"
    )
      return;

    setHasAutoScrolledUp(true);
    setIsUserScrolling(true);
    setAutoScrollCooldown(true);

    // Scroll to the very top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Reset flags and show dashing effect after animation completes
    setTimeout(() => {
      setIsUserScrolling(false);
      setAutoScrollCooldown(false);

      // Show dashing effect after upward auto-scroll completes
      setShowDashingEffect(true);

      // Hide dashing effect after 2 seconds
      setTimeout(() => {
        setShowDashingEffect(false);
      }, 2000);
    }, 1500); // Extended timing for smooth completion
  }, [isClient, hasAutoScrolledUp, isUserScrolling, autoScrollCooldown]);

  // Monitor video scroll progress and trigger bidirectional auto-scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Reset auto-scroll states based on position
    if (latest <= 0.3) {
      if (hasAutoScrolled) setHasAutoScrolled(false);
      if (hasAutoScrolledUp) setHasAutoScrolledUp(false);
    }

    // Trigger downward auto-scroll when reaching 30% progress (scrolling down)
    if (
      latest >= 0.3 &&
      !hasAutoScrolled &&
      !isUserScrolling &&
      scrollDirection === "down"
    ) {
      autoScrollToCards();
    }

    // Trigger upward auto-scroll when reaching 40% visibility (scrolling up)
    if (
      latest >= 0.2 &&
      latest <= 0.8 &&
      !hasAutoScrolledUp &&
      !isUserScrolling &&
      scrollDirection === "up"
    ) {
      autoScrollToTop();
    }
  });

  // Detect user-initiated scrolling and direction
  const handleUserScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const currentScrollY = window.scrollY;

    // Determine scroll direction
    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up");
    }

    setLastScrollY(currentScrollY);
    setIsUserScrolling(true);

    // Reset flag after a short delay to allow for auto-scroll detection
    setTimeout(() => setIsUserScrolling(false), 150);
  }, [lastScrollY]);

  // Add scroll event listener for user interaction detection
  React.useEffect(() => {
    if (!isClient || typeof window === "undefined") return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      handleUserScroll();

      scrollTimeout = setTimeout(() => {
        setIsUserScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isClient, handleUserScroll]);

  // const handleHomeClick = () => {
  //   // Handle home click if needed (currently just using Next.js Link navigation)
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  // const SLIDES = [
  //   {
  //     src: "https://d1yetprhniwywz.cloudfront.net/img/slide/slides/1.jpg",
  //     alt: "First slide - Beautiful landscape",
  //     type: "Electronics Engineering Services",
  //     videoId: "TfWomXqgMAE",
  //   },
  //   {
  //     src: "https://d1yetprhniwywz.cloudfront.net/img/slide/slides/Slide2.jpg",
  //     alt: "Second slide - Modern architecture",
  //     type: "PCB Design Services",
  //     videoId: "NA0QPJZCgzI",
  //   },
  // ];

  // const slides = [
  //   {
  //     id: 1,
  //     title: "Product Name",
  //     content: "Product case study description",
  //     image:
  //       "https://framerusercontent.com/images/oWKm1fgxvXDXTvn5uLUtB2ULGw.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Product Name",
  //     content: "Product case study description",
  //     image:
  //       "https://framerusercontent.com/images/oWKm1fgxvXDXTvn5uLUtB2ULGw.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Product Name",
  //     content: "Product case study description",
  //     image:
  //       "https://framerusercontent.com/images/oWKm1fgxvXDXTvn5uLUtB2ULGw.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Product Name",
  //     content: "Product case study description",
  //     image:
  //       "https://framerusercontent.com/images/oWKm1fgxvXDXTvn5uLUtB2ULGw.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Product Name",
  //     content: "Product case study description",
  //     image:
  //       "https://framerusercontent.com/images/oWKm1fgxvXDXTvn5uLUtB2ULGw.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Product Name",
  //     content: "Product case study description",
  //     image:
  //       "https://framerusercontent.com/images/oWKm1fgxvXDXTvn5uLUtB2ULGw.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "Product Name",
  //     content: "Product case study description",
  //     image:
  //       "https://framerusercontent.com/images/oWKm1fgxvXDXTvn5uLUtB2ULGw.jpg",
  //   },
  // ];

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  console.log(showDashingEffect);
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      {/* Dashing Effect Overlay */}
      {/* {showDashingEffect && (
        <div className="fixed top-0 left-0 w-full h-2 z-50 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-dash-sweep"></div>
        </div>
      )} */}

      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <motion.div
        ref={videoContainerRef}
        className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden rounded-2xl"
        style={{
          scale,
          opacity,
          borderRadius: useTransform(scrollY, [0, 500], [0, 30]),
        }}
      >
        {/* Logo positioned at the top center of the video */}
        {/* <div className="absolute top-8 z-10 flex justify-center w-full">
          <Link
            href="/"
            title="Back to Home"
            className="block w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 transition-all duration-300"
            onClick={handleHomeClick}
          >
            <Image
              src="/qmax-logo.svg"
              className="w-full h-auto object-contain"
              width={320}
              height={60}
              alt="Qmax PCB Design Logo"
              priority
            />
          </Link>
        </div> */}
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
          style={{ borderRadius }}
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
      <div className="pt-16"></div>
      {/* <ScrollCardsAnimation /> */}
      <div ref={cardsContainerRef}>
        <ScrollCardsAnimationV4 />
      </div>
      <div className="pt-16"></div>
      <ServicesV2 />
      <InsideOut />
      {/* <InfiniteCarousel slides={slides} /> */}
      <EmblaCarousel options={OPTIONS} />
      <div className="pt-16"></div>

      {/* <WhatWeDo />
      <ServiceSection /> */}

      {/* <ConceptToManufacturing /> */}

      {/* <section className="bg-white py-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Why <span className="text-brand-red">Choose</span> Us
              </h1>
            </div>

            <div className="flex justify-center">
              <div>
                <p className="text-xl font-medium leading-relaxed text-gray-600">
                  Qmax has over 20 years of experience in designing complex
                  hardware for the most challenging applications.
                  <br />
                  We can provide Quick, Cost effective and First time Right
                  solutions for your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <StatsSection /> */}
      {/* <QmaxEdge /> */}
    </>
  );
}
