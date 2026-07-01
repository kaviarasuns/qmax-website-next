"use client";

import React from "react";
import Image from "next/image";
interface Capability {
  title: string;
  summary: string;
  image: string;
  link: string;
}

interface OtherCapabilitiesScrollSectionProps {
  capabilities: Capability[];
}

export function OtherCapabilitiesScrollSection({
  capabilities,
}: OtherCapabilitiesScrollSectionProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="w-full px-8 md:px-12">
        <div className="mx-auto w-fit">
          <div className="mb-10 relative flex items-center justify-center">
            <h2 className="text-3xl font-light tracking-wide text-center md:text-4xl lg:text-5xl">
              Our Other Engineering{" "}
              <span className="text-red-500">Capabilities</span>
            </h2>

            {/* <div className="flex gap-2 absolute right-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollCapabilities("left")}
                disabled={!capCanScrollLeft}
                className="h-12 w-12 rounded-full border-zinc-200 bg-white transition-all hover:bg-zinc-100 disabled:opacity-30"
                aria-label="Scroll left"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollCapabilities("right")}
                disabled={!capCanScrollRight}
                className="h-12 w-12 rounded-full border-zinc-200 bg-white transition-all hover:bg-zinc-100 disabled:opacity-30"
                aria-label="Scroll right"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div> */}
          </div>

          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 md:gap-5 [&::-webkit-scrollbar]:hidden"
            style={
              {
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              } as React.CSSProperties
            }
          >
            {capabilities.map((service, index) => {
              const { title, summary, image, link } = service;
              return (
                <div
                  key={index}
                  className="w-72 shrink-0 snap-start sm:w-80 md:w-96"
                >
                  <div className="group relative h-full">
                    <a
                      href={link}
                      aria-label={title}
                      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F33117]/60 focus-visible:ring-offset-2 rounded-2xl"
                    >
                      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_14px_40px_-30px_rgba(15,23,42,0.45)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,0.5)]">
                        <div className="relative aspect-[3/2.8] w-full overflow-hidden bg-gradient-to-br from-zinc-100 via-zinc-100 to-zinc-200">
                          <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between gap-3 bg-white px-5 py-4">
                          <h3 className="text-base md:text-lg font-semibold leading-tight tracking-wide">
                            {title}
                          </h3>

                          {summary && (
                            <p className="text-[13px] line-clamp-2 text-muted-foreground">
                              {summary}
                            </p>
                          )}

                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                              Explore Service
                            </span>
                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-all duration-300 group-hover:border-[#F33117] group-hover:text-[#F33117] group-hover:translate-x-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M7 17 17 7" />
                                <path d="M9 7h8v8" />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-zinc-200/70 transition-colors duration-300 group-hover:ring-zinc-300" />
                      </article>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
