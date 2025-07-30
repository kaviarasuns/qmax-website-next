import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const services = [
  {
    topic: "Hardware Design",
    image:
      "https://framerusercontent.com/images/xZdrZACUdNYgULp5M3m2BcUhBI.png",
    description:
      "Develop system architecture and select core electronic components.",
  },
  {
    topic: "Firmware Developemnt",
    image:
      "https://framerusercontent.com/images/URP1Krg4uds9qGHII952XUGsc4.png",
    description:
      "Program low-level code to bring up boards, handle protocols, and control hardware.",
  },
  {
    topic: "PCB Desing",
    image:
      "https://framerusercontent.com/images/7CnP7xCaEUuDiSvOyIyHs36cw4I.png",
    description: "Design and layout production-ready printed circuit boards.",
  },
  {
    topic: "Industrial Desing And Mechanical",
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

const ServicesV2 = () => {
  return (
    <section className="w-full py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="relative flex flex-col h-[340px] sm:h-[320px] md:h-[340px] lg:h-[360px] overflow-hidden group shadow-lg border-0"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 w-full h-full bg-center bg-cover z-0"
                style={{ backgroundImage: `url(${service.image})` }}
                aria-hidden="true"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10" />
              {/* Card content overlays */}
              <div className="relative z-20 flex flex-col h-full justify-between p-6">
                <CardHeader className="p-0 mb-2 bg-transparent">
                  <CardTitle className="text-lg sm:text-xl text-white text-center drop-shadow font-bold">
                    {service.topic}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-auto flex flex-col items-center">
                  <p className="text-sm text-white text-center mb-4 drop-shadow">
                    {service.description}
                  </p>
                  <Button variant="secondary" className="w-full max-w-[160px]">
                    Know More
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesV2;
