'use client';

import { useState } from 'react';

const VIDEO_SRC = 'https://d1yetprhniwywz.cloudfront.net/v2/about-us/QMax_OurStory.mov';

export default function OurStory() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Video thumbnail with play button */}
            <div className="relative h-96 md:h-full min-h-96 group cursor-pointer" onClick={() => setModalOpen(true)}>
              <video
                src={`${VIDEO_SRC}#t=5`}
                className="w-full h-full object-cover rounded-2xl"
                preload="metadata"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 rounded-2xl group-hover:bg-black/40 transition-colors" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                  <svg className="w-8 h-8 text-red-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right - Story */}
            <div className="space-y-6">
              <div className="inline-block">
                <h2>
                  Our 
                  <span className="text-red-500">Story</span>
                </h2>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Founded in 1997 in San Jose, California, Qmax Systems began with a simple mission: to deliver exceptional electronics engineering and R&D services to innovators and enterprises worldwide. What started as a small team of passionate engineers has grown into a global powerhouse in embedded systems design and PCB design services.
                </p>

                <p className="text-lg leading-relaxed">
                  Over the past 25+ years, we&apos;ve built expertise across diverse industries—from consumer electronics and IoT devices to industrial automation, aerospace, and medical devices. Our commitment to quality, innovation, and customer success has made us a trusted partner for over 100 global clients, delivering 500+ projects with a 98% on-time delivery rate.
                </p>
              </div>

              <div className="pt-4">
                <button className="text-red-500 hover:text-red-600 font-semibold flex items-center gap-2 transition-colors">
                  Learn More About Our History
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width video modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setModalOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
      )}
    </>
  );
}
