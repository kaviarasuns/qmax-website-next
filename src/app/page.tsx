import EmblaCarousel from "@/components/Carousel";
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
    </>
  );
}
