"use client";
import InsideOut from "@/components/InsideOut";
import ServicesV2 from "@/components/Services-V2";
import Link from "next/link";
import Image from "next/image";

import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import ScrollCardsAnimationV3 from "@/components/concept-to-manufacturing-v3";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  // Transform values for the video container as user scrolls
  // Adding a 200px threshold before scaling starts with reduced shrink (92%)
  const scale = useTransform(scrollY, [200, 600], [1, 0.92]);
  const borderRadius = useTransform(scrollY, [200, 600], [0, 30]);
  const opacity = useTransform(scrollY, [200, 600], [1, 0.8]);

  const handleHomeClick = () => {
    // Handle home click if needed (currently just using Next.js Link navigation)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <motion.div
        className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden rounded-2xl"
        style={{
          scale,
          opacity,
          borderRadius: useTransform(scrollY, [0, 500], [0, 30]),
        }}
      >
        {/* Logo positioned at the top center of the video */}
        <div className="absolute top-8 z-10 flex justify-center w-full">
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
        </div>
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
      <ScrollCardsAnimationV3 />
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
