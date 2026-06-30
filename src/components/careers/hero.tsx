"use client";

import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";

export function Hero() {
  return (
    <HardwareServiceHeroSection
      imageSrc="https://d1yetprhniwywz.cloudfront.net/v2/careers_hero.jpg"
      imageAlt="Design and Engineering Team at Work"
      title="Design, Develop, and Deploy Cutting-Edge Products"
      description={
        <p>
          We are looking for passionate engineers ready to dive into
          cutting-edge technology. From Hardware and AI to Industrial Design,
          you will gain hands-on experience in full-cycle product development.
          Enjoy a friendly culture that prioritizes your career growth and gives
          you the opportunity to work with experienced engineers and solve
          complex challenges every day.
        </p>
      }
      ctaHref="#current-openings"
      ctaLabel="View Open Positions"
    />
  );
}
