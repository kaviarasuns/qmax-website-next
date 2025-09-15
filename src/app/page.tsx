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
import { useState, useEffect } from "react";
import React from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  // Ensure this only runs on client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  console.log("logging isClient for noReason", isClient)

  const { scrollY } = useScroll();

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const scale = useTransform(scrollY, [200, 600], [1, 0.9]);
  const opacity = useTransform(scrollY, [200, 600], [1, 0.8]);

  return (
    <>
      <motion.div
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
      <div className="pt-16"></div>
      <div>
        <ScrollCardsAnimationV4 />
      </div>
      <div className="pt-16"></div>
      <div>
        <ServicesV2 />
      </div>
      <InsideOut />
      <EmblaCarousel options={OPTIONS} />
      <div className="pt-16"></div>

    </>
  );
}
