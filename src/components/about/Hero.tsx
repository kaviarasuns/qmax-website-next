"use client";

import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-red-500/5 to-transparent opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-6xl leading-tight text-foreground">
              About Qmax <span className="text-red-500">Systems</span>
            </h1>

            <p className="text-left text-lg md:text-xl leading-relaxed max-w-xl text-foreground">
              Engineering Innovation Since 1997 — From Concept to Manufacturing
            </p>

            <p className="text-base md:text-lg leading-relaxed max-w-lg text-foreground">
              Qmax Systems is a trusted partner for electronics engineering and
              R&D services, specializing in embedded systems design and PCB
              design services. With 25+ years of experience, we&apos;ve helped
              innovators and enterprises bring breakthrough products to market.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-md transition-colors flex items-center justify-center gap-2">
                Explore Our Services
                <ArrowRight size={18} />
              </button>
              <button className="border-2 border-black hover:bg-black/10 font-semibold px-8 py-3 rounded-md transition-colors flex items-center justify-center gap-2">
                <Phone size={18} />
                Talk to an Engineer
              </button>
            </div>
          </div>

          {/* Right - PCB Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <Image
              src="https://d1yetprhniwywz.cloudfront.net/v2/about-us/office.png"
              alt="PCB Circuit Board Design"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
