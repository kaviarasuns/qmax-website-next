import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const services = [
  {
    topic: "Hardware Design",
    image:
      "https://framerusercontent.com/images/xZdrZACUdNYgULp5M3m2BcUhBI.png",
    description:
      "Develop system architecture and select core electronic components.",
  },
  {
    topic: "Firmware Development",
    image:
      "https://framerusercontent.com/images/URP1Krg4uds9qGHII952XUGsc4.png",
    description:
      "Program low-level code to bring up boards, handle protocols, and control hardware.",
  },
  {
    topic: "PCB Design",
    image:
      "https://framerusercontent.com/images/7CnP7xCaEUuDiSvOyIyHs36cw4I.png",
    description: "Design and layout production-ready printed circuit boards.",
  },
  {
    topic: "Industrial Design And Mechanical",
    image:
      "https://framerusercontent.com/images/kTPtpORfLevVY4rDMRwjeXD72sc.png",
    description:
      "Design products that look great, feel right, and are ready to manufacture.",
  },
  {
    topic: "Apps and Cloud",
    image: "https://framerusercontent.com/images/8tZqdkd46foyx5TeIzPw8YhbA.png",
    description:
      "Build full-stack software that connects devices to seamless digital experiences.",
  },
  {
    topic: "Value Added Services",
    image:
      "https://framerusercontent.com/images/fwoTbHaje1iNRvuK7dPxw0nq3Kg.png",
    description:
      "Enable production with test jigs, certifications, vendor audits, and prototyping.",
  },
];

const ServicesV3 = () => {
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full h-screen flex items-center justify-center pt-16 md:pt-20 pb-2">
      <div className="container mx-auto px-4 sm:px-6 max-h-[calc(95vh-4rem)] flex flex-col justify-center">
        <div className="text-center mb-2 md:mb-3">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                <div className="relative overflow-hidden p-1.5">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={service.image}
                      alt={service.topic}
                      fill
                      className="object-cover transition-transform duration-300 rounded-sm"
                    />
                  </div>
                  <div className="absolute inset-1.5 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
                </div>

                <div className="p-1.5 md:p-2 flex-1 flex flex-col">
                  <h3 className="text-[10px] md:text-xs font-bold text-gray-800 mb-0.5 group-hover:text-red-600 transition-colors duration-300 line-clamp-1">
                    {service.topic}
                  </h3>

                  <p className="text-[8px] md:text-[10px] text-gray-600 mb-1 flex-1 line-clamp-2 leading-tight">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-[8px] md:text-[10px] font-semibold py-1 px-1.5 rounded-sm transition-colors duration-300">
                      Know More
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesV3;
