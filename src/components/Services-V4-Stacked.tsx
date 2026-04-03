"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/utils/lenis";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    topic: "Hardware Design",
    image:
      "https://framerusercontent.com/images/xZdrZACUdNYgULp5M3m2BcUhBI.png",
    description:
      "Develop system architecture and select core electronic components.",
    href: "/hardware-development-services",
  },
  {
    topic: "Firmware Development",
    image:
      "https://framerusercontent.com/images/URP1Krg4uds9qGHII952XUGsc4.png",
    description:
      "Program low-level code to bring up boards and handle protocols.",
    href: "/embedded-design-services",
  },
  {
    topic: "PCB Design",
    image:
      "https://framerusercontent.com/images/7CnP7xCaEUuDiSvOyIyHs36cw4I.png",
    description: "Design and layout production-ready printed circuit boards.",
    href: "/pcb-design",
  },
  {
    topic: "Industrial & Mechanical",
    image:
      "https://framerusercontent.com/images/kTPtpORfLevVY4rDMRwjeXD72sc.png",
    description:
      "Design products that look great and feel right for manufacturing.",
    href: "/mechanical-industrial-design-services",
  },
  {
    topic: "Apps and Cloud",
    image: "https://framerusercontent.com/images/8tZqdkd46foyx5TeIzPw8YhbA.png",
    description:
      "Build full-stack software that connects devices to digital experiences.",
    href: "/apps-and-cloud",
  },
  {
    topic: "Value Added Services",
    image:
      "https://framerusercontent.com/images/fwoTbHaje1iNRvuK7dPxw0nq3Kg.png",
    description:
      "Enable production with test jigs, certifications, and prototyping.",
    href: "/value-added-services",
  },
] as const;

const ServicesV4Stacked = () => {
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
          yPercent: isFirstCard ? 0 : 110,
          scale: isFirstCard ? 1 : 0.95,
          opacity: isFirstCard ? 1 : 0.45,
          zIndex: totalCards - index,
          transformOrigin: "center center",
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: `+=${(totalCards - 1) * 100}%`,
          pin: true,
          scrub: 1,
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
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          startTime,
        );

        for (let j = 0; j < i; j += 1) {
          const depth = i - j;
          timeline.to(
            cards[j],
            {
              scale: Math.max(0.76, 1 - depth * 0.06),
              opacity: Math.max(0.22, 1 - depth * 0.2),
              duration: 1,
              ease: "power2.inOut",
            },
            startTime,
          );
        }
      }
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, []);

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

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            Our <span className="text-red-600">Services</span>
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-red-600" />
          <p className="mt-3 text-sm text-gray-500 md:text-base">
            Scroll to explore each service in a layered stack.
          </p>
        </div>
      </div>

      <div ref={stackWrapperRef} className="relative h-screen overflow-hidden">
        {services.map((service, index) => (
          <div
            key={service.topic}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
          >
            <Link href={service.href} className="group block w-full max-w-5xl">
              <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_24px_60px_-22px_rgba(15,23,42,0.35)]">
                <div className="grid min-h-[64vh] md:grid-cols-2">
                  <div className="relative min-h-[240px] md:min-h-full">
                    <Image
                      src={service.image}
                      alt={service.topic}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col justify-between p-6 md:p-10">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                        Service {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
                        {service.topic}
                      </h3>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 md:text-base">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-red-600 transition-all duration-300 group-hover:gap-3">
                      <span>Learn More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-gray-400 md:mt-10">
          Scroll for next section
        </div>
      </div>
    </section>
  );
};

export default ServicesV4Stacked;
