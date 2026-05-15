"use client";

import ScrollCardsAnimationV4 from "@/components/concept-to-manufacturing-v4";
import { ServicesSection } from "@/components/services-section";
import InsideOutV2 from "@/components/InsideOut-V2";
import HeroSection from "@/components/home/hero-section";
import FullPageScroll from "@/components/home/full-page-scroll";
import FooterV2 from "@/components/footer-v2";
import OurServices from "@/components/our-services";
import { IndustriesWeServeV3 } from "@/components/industries-we-serve-v3";
import StackReveal from "@/components/StackReveal";
import ServiceSection from "@/components/ServiceSection";
import ServicesV2 from "@/components/Services-V2";
import ServicesV3 from "@/components/Services-V3";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StackReveal />
      {/* <ScrollCardsAnimationV4 onAutoHighlightChange={() => {}} /> */}
      {/* <ServicesV4Stacked lockStackingOnProgrammaticScroll={false} /> */}
      <ServicesV2 />
      <IndustriesWeServeV3 />
      <InsideOutV2 />
      <ServicesSection />
      <FooterV2 />
    </>
  );
}
