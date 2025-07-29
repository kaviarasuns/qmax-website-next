"use client";
import InsideOut from "@/components/InsideOut";
import ServicesV2 from "@/components/Services-V2";

import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import EmblaAutoCarousel from "@/components/EmblaAutoScroll";

export default function Home() {
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
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <video
          src="https://d1yetprhniwywz.cloudfront.net/v2/bI5j7L3hwM91DqHlKw3woZrrbEk.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="pt-16"></div>
      <EmblaAutoCarousel options={OPTIONS} />
      <div className="pt-16"></div>
      <ServicesV2 />
      <InsideOut />
      {/* <InfiniteCarousel slides={slides} /> */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
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
