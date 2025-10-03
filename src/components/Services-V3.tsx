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
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full mx-auto max-w-xs">
                <div className="relative overflow-hidden p-3">
                  <div className="relative h-40 w-full">
                    <Image
                      src={service.image}
                      alt={service.topic}
                      fill
                      className="object-cover transition-transform duration-300 rounded-lg"
                    />
                  </div>
                  <div className="absolute inset-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {service.topic}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 flex-1">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-300">
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
