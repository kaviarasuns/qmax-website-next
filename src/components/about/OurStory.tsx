'use client';

import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <Image
              src="/about-us/engineering-team.jpg"
              alt="Qmax Systems Engineering Team"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Right - Story */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-extrabold">
                <span className="text-black">Our</span>{' '}
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
  );
}
