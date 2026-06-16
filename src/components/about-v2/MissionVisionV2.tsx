"use client";

import { useState } from "react";
import { Lightbulb, Target } from "lucide-react";

const VIDEO_SRC =
  "https://d1yetprhniwywz.cloudfront.net/v2/about-us/QMax_OurStory.mov";

export default function MissionVisionV2() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="group relative min-h-[380px] w-full cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <video
                src={`${VIDEO_SRC}#t=5`}
                className="h-full min-h-[380px] w-full rounded-2xl object-cover"
                preload="metadata"
              />
              <div className="absolute inset-0 rounded-2xl bg-black/30 transition-colors group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all group-hover:scale-110 group-hover:bg-white">
                  <svg
                    className="ml-1 h-8 w-8 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-6 left-6 z-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-red-500">
                  Inside Qmax
                </h3>
                <h2 className="mt-1 text-xl font-medium text-white">
                  A look at our engineering home
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex-1 rounded-md border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-2.5 flex items-center gap-3">
                  <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-lg bg-red-50 text-red-500">
                    <Target size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C2A3A]">
                    Our Mission
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  To empower innovators with reliable, high-performance
                  electronic engineering services that turn bold ideas into
                  market-ready products.
                </p>
              </div>

              <div className="flex-1 rounded-md border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-2.5 flex items-center gap-3">
                  <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-lg bg-red-50 text-red-500">
                    <Lightbulb size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C2A3A]">
                    Our Vision
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  To be the most trusted global engineering partner for
                  next-generation embedded and hardware product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative mx-4 w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-10 right-0 text-white transition-colors hover:text-gray-300"
              onClick={() => setModalOpen(false)}
              aria-label="Close video"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <video
              src={VIDEO_SRC}
              autoPlay
              controls
              playsInline
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
