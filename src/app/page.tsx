import { ServicesSection } from "@/components/services-section";
import HeroSection from "@/components/home/hero-section";
import FooterV2 from "@/components/footer-v2";
import OurServices from "@/components/our-services";
import { buildMetadata } from "@/lib/seo";
import InsideOutV3 from "@/components/InsideOut-V3";
import DesignToManufacturingV5 from "@/components/home/design-to-manufacturing-v5";
import StackReveal, { type StackRevealItem } from "@/components/StackReveal";

const DEFAULT_ITEMS: StackRevealItem[] = [
  {
    step: "01",
    title: "Industrial Electronics",
    description:
      "From refinery to field: PLCs, motor drives, process I/O and rugged industrial control systems.",
    imageSrc:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/oil_refineries.png",
    fallbackClassName: "bg-[#374151]",
  },
  {
    step: "02",
    title: "Communication Systems",
    description:
      "RF, mixed signal design for 5G, satellite, IoT gateways and broadband networking.",
    imageSrc:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/communication_systems.png",
    fallbackClassName: "bg-[#14532d]",
  },
  {
    step: "03",
    title: "High Performance Computing",
    description:
      "Server boards, AI GPUs, backplanes and signal integrity critical PCB design.",
    imageSrc:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/large_data_center.jpeg",
    fallbackClassName: "bg-[#1e1b4b]",
  },
  {
    step: "04",
    title: "Medical Electronics",
    description:
      "Monitors, diagnostics and IEC 60601 / ISO 13485 device development.",
    imageSrc:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/medical_electronics.jpeg",
    fallbackClassName: "bg-[#0c1e3f]",
  },
  {
    step: "05",
    title: "Automotive Electronics",
    description:
      "ECUs, ADAS, infotainment and EV powertrain electronics to AEC Q100 specs.",
    imageSrc:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/automative_electronics.jpeg",
    fallbackClassName: "bg-[#a8a29e]",
  },
];

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

      <DesignToManufacturingV5 />
      {/* <ScrollCardsAnimationV4 onAutoHighlightChange={() => {}} /> */}
      {/* <ServicesV4Stacked lockStackingOnProgrammaticScroll={false} /> */}
      {/* <ServicesV2 /> */}
      <OurServices />

      <StackReveal items={DEFAULT_ITEMS} />
      {/* <IndustriesWeServeV3 industries={INDUSTRIES_WE_SERVE} /> */}
      <InsideOutV3 />

      <ServicesSection />
      <FooterV2 />
    </>
  );
}
