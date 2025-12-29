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
  const [displayScale, setDisplayScale] = useState(1);
  console.log(isMobile);

  // Detect display scale (DPI scaling / zoom level)
  useEffect(() => {
    const checkDisplayScale = () => {
      const scale = window.devicePixelRatio;
      setDisplayScale(scale);
      console.log(`Display Scale: ${scale * 100}% (devicePixelRatio: ${scale})`);
    };

    checkDisplayScale();

    const handleResize = () => {
      checkDisplayScale();
    };

    window.addEventListener("resize", handleResize);

    const mediaQueryList = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    );
    const handleMediaChange = () => {
      checkDisplayScale();
    };
    mediaQueryList.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQueryList.removeEventListener("change", handleMediaChange);
    };
  }, []);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Helper function to get scale-based classes
  const getScaleClasses = (
    scale100: string,  // scale <= 1
    scale125: string,  // scale around 1.25
    scale150: string   // scale >= 1.5
  ) => {
    if (displayScale >= 1.5) return scale150;
    if (displayScale >= 1.25) return scale125;
    return scale100;
  };

  return (
    <section className="w-full h-screen flex items-center justify-center pt-16 md:pt-20 pb-2">
      <div className={`container mx-auto max-h-[calc(95vh-4rem)] flex flex-col justify-center ${
        getScaleClasses(
          "px-8 sm:px-12 md:px-20",      // 100% - most padding
          "px-6 sm:px-8 md:px-12",        // 125% - medium padding
          "px-4 sm:px-6"                   // 150% - least padding (original)
        )
      }`}>
        <div className="text-center mb-2 md:mb-3">
          <h2 className={`font-bold text-gray-800 ${
            getScaleClasses(
              "text-2xl md:text-3xl lg:text-4xl",   // 100%
              "text-xl md:text-2xl lg:text-3xl",    // 125%
              "text-lg md:text-xl lg:text-2xl"      // 150% (original)
            )
          }`}>
            Our Services
          </h2>
        </div>

        <div className={`grid grid-cols-3 mx-auto ${
          getScaleClasses(
            "gap-4 md:gap-5 lg:gap-6 max-w-6xl",   // 100%
            "gap-3 md:gap-4 lg:gap-5 max-w-5xl",   // 125%
            "gap-2 md:gap-3 max-w-4xl"              // 150% (original)
          )
        }`}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                <div className={`relative overflow-hidden ${
                  getScaleClasses(
                    "p-2.5 md:p-3",    // 100%
                    "p-2 md:p-2.5",    // 125%
                    "p-1.5"            // 150% (original)
                  )
                }`}>
                  <div className={`relative w-full ${
                    getScaleClasses(
                      "aspect-[16/11]",    // 100%
                      "aspect-[16/10.5]",  // 125%
                      "aspect-[16/10]"     // 150% (original)
                    )
                  }`}>
                    <Image
                      src={service.image}
                      alt={service.topic}
                      fill
                      className="object-cover transition-transform duration-300 rounded-sm"
                    />
                  </div>
                  <div className={`absolute bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm ${
                    getScaleClasses(
                      "inset-2.5 md:inset-3",    // 100%
                      "inset-2 md:inset-2.5",    // 125%
                      "inset-1.5"                 // 150% (original)
                    )
                  }`} />
                </div>

                <div className={`flex-1 flex flex-col ${
                  getScaleClasses(
                    "p-2.5 md:p-3.5",    // 100%
                    "p-2 md:p-3",        // 125%
                    "p-1.5 md:p-2"       // 150% (original)
                  )
                }`}>
                  <h3 className={`font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 line-clamp-1 ${
                    getScaleClasses(
                      "text-sm md:text-base lg:text-lg mb-1.5",    // 100%
                      "text-xs md:text-sm lg:text-base mb-1",      // 125%
                      "text-[10px] md:text-xs mb-0.5"              // 150% (original)
                    )
                  }`}>
                    {service.topic}
                  </h3>

                  <p className={`text-gray-600 flex-1 line-clamp-2 leading-tight ${
                    getScaleClasses(
                      "text-xs md:text-sm lg:text-base mb-2.5",      // 100%
                      "text-[10px] md:text-xs lg:text-sm mb-2",      // 125%
                      "text-[8px] md:text-[10px] mb-1"               // 150% (original)
                    )
                  }`}>
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <Button className={`w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-sm transition-colors duration-300 ${
                      getScaleClasses(
                        "text-xs md:text-sm py-2 px-3",          // 100%
                        "text-[10px] md:text-xs py-1.5 px-2",   // 125%
                        "text-[8px] md:text-[10px] py-1 px-1.5" // 150% (original)
                      )
                    }`}>
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
