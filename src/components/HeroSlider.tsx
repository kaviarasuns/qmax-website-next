"use client";

import React, { useState } from "react";
import { FaVideo, FaEnvelope } from "react-icons/fa";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://d1yetprhniwywz.cloudfront.net/img/slide/slides/1.jpg",
      title: "Electronics Engineering Services",
      videoUrl: "https://youtu.be/TfWomXqgMAE",
      transition: "slidehorizontal",
    },
    {
      id: 2,
      image:
        "https://d1yetprhniwywz.cloudfront.net/img/slide/slides/Slide2.jpg",
      title: "PCB Design Services",
      videoUrl: "https://www.youtube.com/embed/NA0QPJZCgzI",
      transition: "zoomout",
    },
  ];

  return (
    <div className="relative w-full h-screen">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-12 text-white">
            {/* Title */}
            <h1 className="text-5xl font-bold mb-8 opacity-50 max-w-2xl">
              {slide.title}
            </h1>

            {/* Buttons */}
            <div className="flex gap-6">
              {/* Watch Video Button */}
              <a
                href={slide.videoUrl}
                className="inline-flex items-center px-8 py-4 text-2xl bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <FaVideo className="mr-3" />
                Watch Video
              </a>

              {/* Contact Button */}
              <a
                href="contact.html#pcb"
                className="inline-flex items-center px-8 py-4 text-2xl bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <FaEnvelope className="mr-3" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
