"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  fullProductDevelopmentCaseStudiesData,
  getFullProductDevelopmentCardImage,
} from "@/store/full-product-development-case-studies";
import CaseStudyCard from "./CaseStudyCard";

type CarouselItem = {
  id: number;
  image: string;
  title: string;
  summary: string;
  link: string;
  imageRotation?: number;
};

const fullProductDevelopmentCarouselItems: CarouselItem[] =
  fullProductDevelopmentCaseStudiesData.slice(0, 6).map((study, index) => ({
    id: index + 1,
    image: getFullProductDevelopmentCardImage(study),
    title: study.title,
    summary: study.listingSummary,
    link: `/case-studies/${study.slug}`,
  }));

const carouselItems: CarouselItem[] = [
  ...fullProductDevelopmentCarouselItems,
  // {
  //   id: 7,
  //   image:
  //     "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/battery_pack/1.1.png",
  //   title: "BMS Controller",
  //   summary:
  //     "High-speed data logging and real-time analytics platform for battery management systems with 100 kHz sampling across 32 parallel channels.",
  //   link: "/case-studies/bms-controller",
  // },
  // {
  //   id: 8,
  //   image:
  //     "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/GIMBAL/GIMBAL_4_AXIS.1.png",
  //   title: "4-Axis Gimbal",
  //   summary:
  //     "A precision-engineered 4-axis gimbal system designed for smooth stabilization, dynamic balancing, and high-performance motion control applications.",
  //   link: "/case-studies/gimbal",
  // },
  // {
  //   id: 9,
  //   image:
  //     "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/frizb_ai_box/6.png",
  //   title: "Warehouse Camera Controller Unit",
  //   summary:
  //     "A compact AI-enabled industrial enclosure engineered for embedded intelligence systems with optimized thermal management and rugged field deployment.",
  //   link: "/case-studies/warehouse-camera-controller-unit-mechanical",
  // },
  // {
  //   id: 10,
  //   image:
  //     "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/OBD2/OBD_V4_RENDER_23_NOV_2024_MG2_2.1.png",
  //   title: "OBD V4 Smart Diagnostic Unit",
  //   summary:
  //     "Advanced OBD V4 smart diagnostic unit designed for real-time vehicle health monitoring, fault detection, and connected fleet diagnostics with secure cloud integration.",
  //   link: "/case-studies/obd-v4-system",
  // },
];

const SCROLL_AMOUNT = 340;

export function ServicesSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const updateScrollState = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-background flex min-h-screen flex-col items-center justify-center pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="hidden md:block" aria-hidden />
          <div className="w-full max-w-2xl justify-self-center text-center">
            <h2 className="mb-3 text-3xl font-light tracking-wide md:text-4xl lg:text-5xl">
              Case <span className="text-red-500">Studies</span>
            </h2>
          </div>
          <div className="flex w-full items-center justify-end gap-4">
            <Link href="/case-studies">
              <Button
                variant="outline"
                className="rounded-full border-zinc-200 hover:bg-zinc-100"
              >
                More Case Studies
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute left-0 top-[calc(50%-16px)] z-10 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-md transition-all duration-200 hover:border-zinc-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-zinc-700"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 md:gap-5"
            style={
              {
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              } as React.CSSProperties
            }
          >
            {carouselItems.map((item) => (
              <div
                key={item.id}
                className="w-[280px] shrink-0 snap-start sm:w-[300px] md:w-[320px] lg:w-[340px]"
              >
                <CaseStudyCard
                  title={item.title}
                  image={item.image}
                  link={item.link}
                  summary={item.summary}
                  imageRotation={item.imageRotation}
                />
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute right-0 top-[calc(50%-16px)] z-10 translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-md transition-all duration-200 hover:border-zinc-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-zinc-700"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
