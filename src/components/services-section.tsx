"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import CaseStudyCard from "./CaseStudyCard";

const carouselItems = [
  {
    id: 1,
    image: "/case-studies/BLUECOLD/1.png",
    title: "Security System Controller",
    summary:
      "Embedded controller program designed for dependable monitoring, control logic, and secure field operation.",
    link: "/case-studies/industrial-temperature-control-system",
  },
  {
    id: 2,
    image: "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.1.png",
    title: "Industrial Controller",
    summary:
      "Industrial electronics platform engineered for rugged deployment, stable power delivery, and manufacturable hardware.",
    link: "/case-studies/capserve-cell-sensor",
  },
  {
    id: 3,
    image: "/case-studies/CHARA/1.png",
    title: "Embedded Systems",
    summary:
      "End-to-end embedded design and development for connected products, controls, and intelligent devices.",
    link: "/case-studies/multi-io-card-for-ate",
  },
  {
    id: 4,
    image: "/case-studies/CLIMATE CONTROL/1.png",
    title: "PCB Design",
    summary:
      "Multi-physics PCB design services focused on signal integrity, manufacturability, and first-pass success.",
    link: "/case-studies/smart-monitoring-system",
  },
  // {
  //   id: 5,
  //   image: "/services/industrial-design.png",
  //   title: "Industrial Design",
  //   description: "Industrial Design & Mechanical Engineering",
  //   url: "/case-studies/BLE-tag-with-Wireless-Charging",
  // },
];

export function ServicesSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = React.useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-background flex min-h-screen flex-col items-center justify-center py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-end justify-between gap-6 md:flex-row md:items-start">
          <div className="max-w-2xl">
            <h1 className="mb-3 text-3xl font-light  tracking-wide text-foreground md:text-4xl lg:text-5xl">
              Case <span className="text-red-500">Studies</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/case-studies">
              <Button variant="outline" className="rounded-full border-zinc-200 hover:bg-zinc-100">
                More Case Studies
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="h-12 w-12 rounded-full border-zinc-200 transition-all hover:bg-zinc-100 disabled:opacity-30"
                aria-label="Scroll left"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="h-12 w-12 rounded-full border-zinc-200 transition-all hover:bg-zinc-100 disabled:opacity-30"
                aria-label="Scroll right"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 md:gap-5 lg:grid lg:grid-cols-4 lg:snap-none lg:overflow-visible"
        >
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="w-64 shrink-0 snap-start sm:w-72 md:w-80 lg:w-auto lg:shrink"
            >
              <CaseStudyCard
                title={item.title}
                image={item.image}
                link={item.link}
                summary={item.summary}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
