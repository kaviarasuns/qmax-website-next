"use client";

import ScrollCardsAnimationV4 from "@/components/concept-to-manufacturing-v4";
import { ServicesSection } from "@/components/services-section";
import InsideOutV2 from "@/components/InsideOut-V2";
import ServicesV4Stacked from "@/components/Services-V4-Stacked";
import { IndustriesWeServeV2 } from "@/components/industries-we-serve-v2";
import HeroSection from "@/components/home/hero-section";
import FullPageScroll from "@/components/home/full-page-scroll";
import FooterV2 from "@/components/footer-v2";

export default function HomeFluid() {
  return (
    <FullPageScroll>
      <HeroSection />
      <ScrollCardsAnimationV4 onAutoHighlightChange={() => {}} />
      <ServicesV4Stacked lockStackingOnProgrammaticScroll={false} />
      <IndustriesWeServeV2 />
      <InsideOutV2 />
      <ServicesSection />
      <FooterV2 />
    </FullPageScroll>
  );
}
