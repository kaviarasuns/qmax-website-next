"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import CaseStudyCard from "./CaseStudyCard";

const carouselItems: {
  id: number;
  image: string;
  title: string;
  summary: string;
  link: string;
  imageRotation?: number;
}[] = [
  {
    id: 1,
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/embedded/tekion_ott/4.png",
    title: "Industrial IOT gateway with POE",
    summary:
      "Embedded controller program designed for dependable monitoring, control logic, and secure field operation.",
    link: "/case-studies/industrial-iot-gateway-with-poe",
  },
  {
    id: 2,
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/pcb/OBD/OBD_PR1_BOT.svg",
    title: "Smart OBD2 Device",
    summary:
      "Industrial electronics platform engineered for rugged deployment, stable power delivery, and manufacturable hardware.",
    link: "/case-studies/smart-obd2-device",
    imageRotation: 90,
  },
  {
    id: 3,
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/SDR/SDR_RENDERING_11_JAN_2025_S1.1.png",
    title: "Communication Control System Enclosure",
    summary:
      "End-to-end embedded design and development for connected products, controls, and intelligent devices.",
    link: "/case-studies/rugged-communication-control-system-enclosure",
  },
  {
    id: 4,
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/industrial/oxygen_concentrator/1.png",
    title: "Oxygen Generator",
    summary:
      "Multi-physics PCB design services focused on signal integrity, manufacturability, and first-pass success.",
    link: "/case-studies/oxygen-generator",
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

  return (
    <section className="bg-background flex min-h-screen flex-col items-center justify-center py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="hidden md:block" aria-hidden />
          <div className="w-full max-w-2xl justify-self-center text-center">
            <h1 className="mb-3 text-3xl font-light tracking-wide md:text-4xl lg:text-5xl">
              Case <span className="text-red-500">Studies</span>
            </h1>
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
        <div
          ref={scrollRef}
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
                imageRotation={item.imageRotation}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
