import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import "../components/css/embla.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [isMobile, setIsMobile] = useState(false);
  
  const defaultOptions: EmblaOptionsType = {
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    dragFree: isMobile,
    skipSnaps: false,
    axis: 'x',
    ...options,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions);

  // Array of carousel items
  const carouselItems = [
    {
      id: 1,
      image:
        "https://d1yetprhniwywz.cloudfront.net/case-studies-images/Embedded-System-with-RTOS/Security-Controller-c.jpg",
      title: "Case Studies",
      description: "Security System Controller",
      url: "/case-studies/Security-System-Controller",
    },
    {
      id: 2,
      image:
        "https://d1yetprhniwywz.cloudfront.net/case-studies-images/FPGA-Based-Structural-Health-Monitoring-System/SHM-c.jpg",
      title: "Case Studies",
      description: "FPGA Based Health Monitoring System",
      url: "/case-studies/fpga-based-health-monitoring-system",
    },
    {
      id: 3,
      image:
        "https://d1yetprhniwywz.cloudfront.net/img/services/Embedded-Systems.jpg",
      title: "Embedded Systems",
      description: "Embedded Systems Design & Development",
      url: "/embedded-design-services",
    },
    {
      id: 4,
      image:
        "https://d1yetprhniwywz.cloudfront.net/img/services/PCB-Design.png",
      title: "PCB Design",
      description: "PCB Design Services",
      url: "/pcb-design",
    },
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 pt-8">
          Case Studies & Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Explore our comprehensive solutions and successful project implementations
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className={isMobile ? "embla-mobile" : "embla-compact"} ref={emblaRef}>
          <div className={isMobile ? "embla__container-mobile" : "embla__container-compact"}>
            {carouselItems.map((item, index) => (
              <motion.div 
                className={isMobile ? "embla__slide-mobile" : "embla__slide-compact"} 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
                        {item.title}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300 flex-1">
                      {item.description}
                    </h3>
                    
                    <div className="mt-auto">
                      <Link href={item.url}>
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        {isMobile && (
          <div className="flex justify-center mt-6 gap-2">
            {carouselItems.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === selectedIndex ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmblaCarousel;
