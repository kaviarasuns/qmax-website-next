import EmblaCarousel from "@/components/Carousel";
import ConceptToManufacturing from "@/components/ConceptToManufacturing";
import QmaxEdge from "@/components/QMaxEdge";
import ServiceSection from "@/components/ServiceSection";
import StatsSection from "@/components/StatsSection";
import WhatWeDo from "@/components/WhatWeDo";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    duration: 10,
  };

  const SLIDES = [
    {
      src: "https://d1yetprhniwywz.cloudfront.net/img/slide/slides/1.jpg",
      alt: "First slide - Beautiful landscape",
      type: "Electronics Engineering Services",
    },
    {
      src: "https://d1yetprhniwywz.cloudfront.net/img/slide/slides/Slide2.jpg",
      alt: "Second slide - Modern architecture",
      type: "PCB Design Services",
    },
  ];
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <WhatWeDo />
      <ServiceSection />
      <ConceptToManufacturing />

      <section className="bg-white py-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Why <span className="text-primary">Choose</span> Us
              </h1>
            </div>

            <div className="flex justify-center">
              <div>
                <p className="text-xl font-medium leading-relaxed text-gray-600">
                  Qmax has over 20 years of experience in designing complex
                  hardware for the most challenging applications.
                  <br />
                  We can provide Quick, Cost effective and First time Right
                  solutions for your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <QmaxEdge />
    </>
  );
}
