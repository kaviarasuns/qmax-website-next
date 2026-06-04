"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/utils/lenis";

gsap.registerPlugin(ScrollTrigger);

interface CoreCapabilityBulletGroup {
  title: string;
  items: string[];
}

export interface CoreCapability {
  id: string;
  tabLabel: string;
  tabIcon?: ReactNode;
  headline: string;
  intro: string;
  bullets: CoreCapabilityBulletGroup[];
  videoSrc?: string;
  videoPoster?: string;
  imageSrc?: string;
  imageAlt?: string;
  learnMoreHref?: string;
}

interface CoreCapabilitiesSectionProps {
  capabilities: CoreCapability[];
  title?: string;
  titleHighlight?: string;
  learnMoreHref?: string;
}

export function CoreCapabilitiesSection({
  capabilities,
  title = "Core",
  titleHighlight = "Capabilities",
  learnMoreHref = "#contact",
}: CoreCapabilitiesSectionProps) {
  const stackWrapperRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lenis = useLenis();

  useLayoutEffect(() => {
    const wrapper = stackWrapperRef.current;
    const cards = cardRefs.current.filter(
      (card): card is HTMLDivElement => card !== null,
    );

    if (!wrapper || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const totalCards = cards.length;

      cards.forEach((card, index) => {
        const isFirstCard = index === 0;
        gsap.set(card, {
          yPercent: isFirstCard ? 0 : 102,
          scale: isFirstCard ? 1 : 0.98,
          opacity: 1,
          zIndex: index + 1,
          transformOrigin: "center center",
          force3D: true,
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: `+=${(totalCards - 1) * 100}%`,
          pin: true,
          scrub: 0.35,
          anticipatePin: 1,
        },
      });

      for (let i = 1; i < totalCards; i += 1) {
        const startTime = i - 1;

        timeline.to(
          cards[i],
          {
            yPercent: 0,
            scale: 1,
            duration: 0.85,
            ease: "power1.out",
          },
          startTime,
        );

        timeline.to(
          cards[i - 1],
          {
            scale: 0.93,
            duration: 0.85,
            ease: "power1.out",
          },
          startTime,
        );
      }
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, [capabilities.length]);

  useLayoutEffect(() => {
    if (!lenis) return;

    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", updateScrollTrigger);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
    };
  }, [lenis]);

  if (!capabilities.length) return null;

  return (
    <section
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-2 md:py-4"
      aria-label="Core Capabilities"
    >
      <div ref={stackWrapperRef} className="relative h-screen overflow-hidden">
        {/* Sticky title */}
        <div
          data-budge-target
          className="pointer-events-none absolute inset-x-0 top-20 z-20 mx-auto max-w-6xl px-4 text-center sm:px-6 md:top-20 lg:px-8"
          style={{ top: "120px" }}
        >
          <h2 className="mx-auto mb-20 max-w-[1200px] text-center text-4xl font-light tracking-wide md:text-5xl">
            {title}
            {titleHighlight ? (
              <>
                {" "}
                <span className="text-red-500">{titleHighlight}</span>
              </>
            ) : null}
          </h2>
        </div>

        {/* Stacked card layers */}
        {capabilities.map((cap, index) => {
          const cardHref = cap.learnMoreHref ?? learnMoreHref;
          return (
            <div
              key={cap.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="absolute inset-0 flex items-center justify-center px-4 pt-20 will-change-transform sm:px-6 md:pt-24 lg:px-8"
            >
              <div className="group block w-full max-w-[1200px]">
                <article className="isolate overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_24px_60px_-22px_rgba(15,23,42,0.35)]">
                  <div className="grid min-h-[64vh] md:grid-cols-2">
                    {/* Left: video (or icon fallback) */}
                    <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
                      {cap.imageSrc ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={cap.imageSrc}
                            alt={cap.imageAlt ?? cap.tabLabel}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </>
                      ) : cap.videoSrc ? (
                        <>
                          <video
                            src={cap.videoSrc}
                            poster={cap.videoPoster}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label={cap.tabLabel}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
                          {cap.tabIcon ? (
                            <span
                              className="h-24 w-24 text-red-500/90 transition-transform duration-700 group-hover:scale-110"
                              aria-hidden="true"
                            >
                              {cap.tabIcon}
                            </span>
                          ) : null}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                      )}
                    </div>

                    {/* Right: content */}
                    <div className="flex flex-col justify-between p-6 md:p-10">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                          {cap.tabLabel}
                        </p>
                        <h3 className="mb-3 mt-3 text-2xl font-light tracking-wide md:text-3xl">
                          {cap.headline}
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground md:text-base">
                          {cap.intro}
                        </p>

                        {cap.bullets.length > 0 ? (
                          <div className="mt-5 space-y-4">
                            {cap.bullets.map((group) => (
                              <div key={group.title}>
                                <p className="text-left text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                                  {group.title}
                                </p>
                                <ul className="mt-2 space-y-2">
                                  {group.items.map((item) => (
                                    <li
                                      key={item}
                                      className="flex items-start gap-2 text-sm font-light tracking-wide text-foreground"
                                    >
                                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                                      <span>
                                        {item.includes(":") ? (
                                          <>
                                            <strong className="font-base">
                                              {item.slice(
                                                0,
                                                item.indexOf(":") + 1,
                                              )}
                                            </strong>
                                            {item.slice(item.indexOf(":") + 1)}
                                          </>
                                        ) : (
                                          item
                                        )}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      <Link
                        href={cardHref}
                        className="group/cta mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-red-500 transition-all duration-300 hover:gap-3"
                      >
                        <span>Learn More</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
