"use client";

import { ServicesSection } from "@/components/services-section";
import InsideOutV2 from "@/components/InsideOut-V2";
import HeroSection from "@/components/home/hero-section";
import FooterV2 from "@/components/footer-v2";
import { IndustriesWeServeV3 } from "@/components/industries-we-serve-v3";
import StackReveal from "@/components/StackReveal";
import ServicesV2 from "@/components/Services-V2";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StackReveal />
      {/* <ScrollCardsAnimationV4 onAutoHighlightChange={() => {}} /> */}
      {/* <ServicesV4Stacked lockStackingOnProgrammaticScroll={false} /> */}
      <ServicesV2 />
      <IndustriesWeServeV3 />
      <div className="mb-24"></div>
      <InsideOutV2 />

      <ServicesSection />
      <FooterV2 />
    </>
  );
}
