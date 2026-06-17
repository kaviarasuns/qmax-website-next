import { ServicesSection } from "@/components/services-section";
import HeroSection from "@/components/home/hero-section";
import FooterV2 from "@/components/footer-v2";
import { IndustriesWeServeV3 } from "@/components/industries-we-serve-v3";
import StackReveal from "@/components/StackReveal";
import OurServices from "@/components/our-services";
import { buildMetadata } from "@/lib/seo";
import InsideOutV3 from "@/components/InsideOut-V3";
import DesignToManufacturingV5 from "@/components/home/design-to-manufacturing-v5";

export const metadata = buildMetadata({
  title: "PCB Design & Embedded Systems Services | Qmax Systems",
  description:
    "End-to-end electronics engineering - PCB design, embedded firmware, hardware development, and NPI. Two engineering centres: Dallas, TX and Chennai, India.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <StackReveal /> */}
      <DesignToManufacturingV5 />
      {/* <ScrollCardsAnimationV4 onAutoHighlightChange={() => {}} /> */}
      {/* <ServicesV4Stacked lockStackingOnProgrammaticScroll={false} /> */}
      {/* <ServicesV2 /> */}
      <OurServices />
      <IndustriesWeServeV3 />
      <InsideOutV3 />

      <ServicesSection />
      <FooterV2 />
    </>
  );
}
