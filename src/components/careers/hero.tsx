"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-white pt-16">
      {/* Hero Image */}
      <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] w-full overflow-hidden">
        <Image
          src="/careers/image1.jpg"
          alt="Design and Engineering Team at Work"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Below Image — aligned with JobCard column in CurrentOpenings */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="flex gap-8 items-start">
          <div
            className="hidden lg:block w-64 flex-shrink-0"
            aria-hidden="true"
          />
          <div className="flex-1 min-w-0 flex flex-col gap-6 md:gap-8">
            {/* Title */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 md:gap-6">
              <div className="max-w-[300px] sm:max-w-md lg:max-w-xl">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold  leading-tight text-foreground">
                  Design, Develop, and Deploy Cutting-Edge Products
                </h1>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify text-foreground">
                We are looking for passionate engineers ready to dive into
                cutting-edge technology. From Hardware and AI to Industrial
                Design, you will gain hands-on experience in full-cycle product
                development. Enjoy a friendly culture that prioritizes your
                career growth and gives you the opportunity to work with
                experienced engineers and solve complex challenges every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
