"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Service = {
  topic: string;
  image: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    topic: "Hardware Design Services",
    image:
      "https://framerusercontent.com/images/xZdrZACUdNYgULp5M3m2BcUhBI.png",
    description:
      "Develop system architecture and select core electronic components.",
    href: "/hardware-design-services",
  },
  {
    topic: "Embedded Systems Development Services",
    image: "https://framerusercontent.com/images/8tZqdkd46foyx5TeIzPw8YhbA.png",
    description:
      "Program low-level code to bring up boards, handle protocols, and control hardware.",
    href: "/embedded-design-services",
  },
  {
    topic: "PCB Design Services",
    image:
      "https://framerusercontent.com/images/7CnP7xCaEUuDiSvOyIyHs36cw4I.png",
    description: "Design and layout production-ready printed circuit boards.",
    href: "/pcb-design",
  },
  {
    topic: "Industrial Design & Mechanical Services",
    image:
      "https://framerusercontent.com/images/kTPtpORfLevVY4rDMRwjeXD72sc.png",
    description:
      "Design products that look great, feel right, and are ready to manufacture.",
    href: "/mechanical-industrial-design-services",
  },
];

const AUTOPLAY_MS = 2800;

const ServicesV2 = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearAutoPlay();
    if (!isUserInteracting) {
      intervalRef.current = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % services.length);
      }, AUTOPLAY_MS);
    }
    return () => clearAutoPlay();
  }, [isUserInteracting, clearAutoPlay]);

  const handleMouseEnter = (idx: number) => {
    if (isMobile) return;
    setIsUserInteracting(true);
    setActiveCard(idx);
  };

  const handleSectionMouseLeave = () => {
    if (isMobile) return;
    setIsUserInteracting(false);
  };

  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      onMouseLeave={handleSectionMouseLeave}
      aria-labelledby="services-v2-heading"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center lg:mb-14">
          <h2
            id="services-v2-heading"
            className="text-3xl md:text-5xl font-light tracking-wide text-center tracking-wide"
          >
            Our <span className="text-red-500">Services</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {services.map((service, idx) => {
            const isActive = !isMobile && idx === activeCard;
            return (
              <motion.div
                key={service.topic}
                animate={{ y: isActive ? -6 : 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="h-full min-h-0"
              >
                <Link
                  href={service.href}
                  aria-label={`Learn more about ${service.topic}`}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  className="group relative block aspect-[5/4] h-full min-h-0 overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.08)] outline-none transition-shadow duration-300 hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.25)] focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:aspect-[4/3]"
                >
                  {/* Background image */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform [transition-duration:1200ms] ease-out ${
                      isActive ? "scale-[1.06]" : "scale-100"
                    } group-hover:scale-[1.06]`}
                    style={{ backgroundImage: `url(${service.image})` }}
                    aria-hidden
                  />

                  {/* Gradient overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5"
                    aria-hidden
                  />

                  {/* Active inset ring (does not affect layout) */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-inset transition-colors duration-300 ${
                      isActive ? "ring-red-500/80" : "ring-transparent"
                    }`}
                    aria-hidden
                  />

                  {/* Active soft glow */}
                  <div
                    className={`pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(233,75,60,0.0), 0 18px 50px -10px rgba(233,75,60,0.45)",
                    }}
                    aria-hidden
                  />

                  {/* Content */}
                  <div className="relative flex h-full flex-col justify-between p-5 lg:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg !font-bold leading-tight  text-white drop-shadow-sm sm:text-xl lg:text-xl xl:text-3xl">
                        {service.topic}
                      </h3>
                      <span
                        aria-hidden
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-red-500 bg-red-600/35 text-white"
                            : "border-white/30 bg-white/10 text-white/80"
                        } group-hover:border-red-500 group-hover:bg-red-600/35 group-hover:text-white`}
                      >
                        <ArrowUpRight className="h-4 w-4 transition-colors duration-300" />
                      </span>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm leading-relaxed text-white/85 sm:text-base lg:text-base xl:text-lg">
                        {service.description}
                      </p>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                          isActive ? "text-red-300" : "text-white/90"
                        } group-hover:text-red-300`}
                      >
                        Know more
                        <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile-only dots indicator */}
        <div className="mt-6 flex items-center justify-center gap-1.5 sm:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveCard(index)}
              aria-label={`Show service ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeCard ? "w-5 bg-red-500" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesV2;
