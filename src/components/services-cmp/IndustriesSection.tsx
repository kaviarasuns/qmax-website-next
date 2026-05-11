"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface IndustryItem {
  title: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
}

interface IndustriesData {
  left: IndustryItem[];
  right: IndustryItem[];
}

interface IndustrySlide {
  src: string;
  alt: string;
}

interface IndustriesSectionProps {
  industries: IndustriesData;
  slides: IndustrySlide[];
}

export function IndustriesSection({
  industries,
  slides,
}: IndustriesSectionProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const TOTAL = slides.length;

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(((idx % TOTAL) + TOTAL) % TOTAL);
    },
    [TOTAL],
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => goTo(current + 1), 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, paused, goTo]);

  // Mapping: index 0-2 = left items, 3-5 = right items
  const isActive = (col: "left" | "right", itemIdx: number) => {
    const slideIdx = col === "left" ? itemIdx : itemIdx + 3;
    return current === slideIdx;
  };

  return (
    <section className="industries" id="industries-section">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="industries-inner">
        <div className="industries-head pt-14">
          <h2 className="text-4xl md:text-5xl mb-14 font-light tracking-wide">
            Industries We <span className="text-brand-500">Serve</span>
          </h2>

          {/* <p>Multi-domain hardware development with design rigor and documentation depth calibrated to each industry&apos;s regulatory and reliability bar.</p> */}
        </div>
        <div className="ind-cols pb-10 md:pb-16">
          {/* LEFT */}
          <div className="ind-col-list left">
            {industries.left.map((ind, i) => (
              <div
                key={ind.title}
                className={`ind-item${isActive("left", i) ? " slideshow-active" : ""}`}
                onMouseEnter={() => {
                  setPaused(true);
                  goTo(i);
                }}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="ind-item-head">
                  <div className="ind-icon-wrap">{ind.icon}</div>
                  <h3 className="text-base md:text-lg font-medium tracking-wide">
                    {ind.title}
                  </h3>
                </div>
                <p>{ind.desc}</p>
                <div className="learn-more">
                  <span>{ind.badge}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER SLIDESHOW */}
          <div className="ind-feature">
            <div className="ind-feature-frame">
              <div className="ind-feature-image">
                <div className="ind-slideshow">
                  {slides.map((slide, i) => (
                    <div
                      key={i}
                      className={`ind-slide${current === i ? " active" : ""}`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        sizes="(max-width: 900px) 100vw, 40vw"
                      />
                    </div>
                  ))}
                  <div className="ind-progress">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        className={`ind-prog-dot${current === i ? " active" : ""}`}
                        aria-label={`Slide ${i + 1}`}
                        onClick={() => {
                          goTo(i);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ind-col-list right">
            {industries.right.map((ind, i) => (
              <div
                key={ind.title}
                className={`ind-item${isActive("right", i) ? " slideshow-active" : ""}`}
                onMouseEnter={() => {
                  setPaused(true);
                  goTo(i + 3);
                }}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="ind-item-head">
                  <div className="ind-icon-wrap">{ind.icon}</div>
                  <h3 className="text-base md:text-lg font-medium tracking-wide">
                    {ind.title}
                  </h3>
                </div>
                <p>{ind.desc}</p>
                <div className="learn-more">
                  <span>{ind.badge}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
