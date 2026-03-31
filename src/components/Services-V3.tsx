import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    topic: "Hardware Design",
    image:
      "https://framerusercontent.com/images/xZdrZACUdNYgULp5M3m2BcUhBI.png",
    description:
      "Develop system architecture and select core electronic components.",
    href: "/hardware-development-services",
  },
  {
    topic: "Firmware Development",
    image:
      "https://framerusercontent.com/images/URP1Krg4uds9qGHII952XUGsc4.png",
    description:
      "Program low-level code to bring up boards and handle protocols.",
    href: "/embedded-design-services",
  },
  {
    topic: "PCB Design",
    image:
      "https://framerusercontent.com/images/7CnP7xCaEUuDiSvOyIyHs36cw4I.png",
    description: "Design and layout production-ready printed circuit boards.",
    href: "/pcb-design",
  },
  {
    topic: "Industrial & Mechanical",
    image:
      "https://framerusercontent.com/images/kTPtpORfLevVY4rDMRwjeXD72sc.png",
    description:
      "Design products that look great and feel right for manufacturing.",
    href: "/mechanical-industrial-design-services",
  },
  {
    topic: "Apps and Cloud",
    image: "https://framerusercontent.com/images/8tZqdkd46foyx5TeIzPw8YhbA.png",
    description:
      "Build full-stack software that connects devices to digital experiences.",
    href: "/apps-and-cloud",
  },
  {
    topic: "Value Added Services",
    image:
      "https://framerusercontent.com/images/fwoTbHaje1iNRvuK7dPxw0nq3Kg.png",
    description:
      "Enable production with test jigs, certifications, and prototyping.",
    href: "/value-added-services",
  },
];

const ServiceCard = React.memo(({ service, index }: { service: typeof services[0]; index: number }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group h-full"
  >
    <Link href={service.href} className="flex flex-col h-full">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100/50 overflow-hidden hover:shadow-md hover:border-red-600/20 transition-all duration-300 flex flex-col h-full group-hover:-translate-y-1">
        <div className="relative overflow-hidden aspect-[21/9]">
          <Image
            src={service.image}
            alt={service.topic}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex-1 flex flex-col p-3 pt-2">
          <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-0.5 line-clamp-1">
            {service.topic}
          </h3>

          <p className="text-gray-500 text-[11px] md:text-xs leading-tight line-clamp-2 mb-2">
            {service.description}
          </p>

          <div className="mt-auto flex items-center text-red-600 font-bold text-[10px] md:text-[11px] uppercase tracking-wider group-hover:gap-1.5 transition-all duration-300">
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
));

ServiceCard.displayName = "ServiceCard";

const ServicesV3 = () => {
  return (
    <section className="w-full min-h-screen lg:h-screen flex items-center justify-center py-8 lg:py-0 px-4 sm:px-6 lg:px-8 bg-gray-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-6 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
              Our <span className="text-red-600">Services</span>
            </h2>
            <div className="h-0.5 w-12 bg-red-600 mx-auto rounded-full mb-2" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.topic} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesV3;
