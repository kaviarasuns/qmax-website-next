"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showBottomText, setShowBottomText] = useState(false);
  const [fadeOutLines, setFadeOutLines] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const firstTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const secondTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    const firstRef = firstTimeoutRef.current;
    const secondRef = secondTimeoutRef.current;
    const fadeRef = fadeTimeoutRef.current;

    return () => {
      if (firstRef) clearTimeout(firstRef);
      if (secondRef) clearTimeout(secondRef);
      if (fadeRef) clearTimeout(fadeRef);
    };
  }, []);

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [200, 600], [1, 0.9]);
  const opacity = useTransform(scrollY, [200, 600], [1, 0.8]);

  return (
    <div className="pb-16 sm:pb-20 lg:pb-24">
      <motion.div
        className="relative w-full h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
        style={{
          scale,
          opacity,
          borderRadius: useTransform(scrollY, [0, 500], [0, 30]),
        }}
      >
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/60 via-white/30 to-transparent z-[1]"></div>
        <motion.video
          ref={videoRef}
          src="https://d1yetprhniwywz.cloudfront.net/v2/bI5j7L3hwM91DqHlKw3woZrrbEk.mp4"
          autoPlay={false}
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover shadow-lg"
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
        <div
          className={`absolute bottom-4 left-4 sm:bottom-16 sm:left-16 text-white z-10 transition-opacity duration-1000 ${
            showBottomText ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">
            Electronics Engineering Services
          </h1>
          <div className="text-base sm:text-xl md:text-2xl font-medium mt-2">
            <p className="text-white">From Concept to Production</p>
          </div>
          <Link
            href="/contact"
            className="mt-5 inline-block px-4 py-2.5 sm:px-5 sm:py-2.5 text-sm sm:text-base border border-white text-white rounded-md transition hover:bg-white/10"
          >
            Let&apos;s Build
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
