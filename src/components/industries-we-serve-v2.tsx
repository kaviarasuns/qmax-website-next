"use client";

import { useState } from "react";
import { Radio, Heart, Plane, Cog, Zap, Server } from "lucide-react";

// Industry data with content
const industries = [
  {
    id: "rf-industry",
    label: "RF Industry",
    Icon: Radio,
    title: "RF Industry",
    description:
      "Engineering high-performance RF solutions for wireless communications, signal processing, and electromagnetic systems. We deliver cutting-edge RF components and subsystems engineered for reliability, performance, and scalability across diverse applications.",
    subDescription:
      "Our expertise spans from circuit design to system integration, ensuring optimal signal integrity and electromagnetic compatibility in every solution.",
    image: "/industries-we-serve/rf-industry.jpg",
    relatedCaseStudies: [
      "RF PCB Design",
      "High-Frequency Layout",
      "Antenna Design",
      "EMI/EMC Compliance",
      "Signal Integrity Analysis",
    ],
  },
  {
    id: "medical-industry",
    label: "Medical Industry",
    Icon: Heart,
    title: "Medical Industry",
    description:
      "Delivering precision-engineered solutions for medical devices, diagnostics, and life-critical healthcare systems. Our medical-grade electronics meet the highest standards of safety, accuracy, and regulatory compliance.",
    subDescription:
      "We specialize in designing sterile-compatible, long-lifespan medical equipment that performs reliably in clinical environments.",
    image: "/industries-we-serve/medical-industries.jpg",
    relatedCaseStudies: [
      "Medical Device PCB Design",
      "FDA-Compliant Hardware",
      "Wearable Device Design",
      "Low-Power Embedded Systems",
      "ISO 13485 Compliance",
    ],
  },
  {
    id: "aerospace-industry",
    label: "Aerospace Industry",
    Icon: Plane,
    title: "Aerospace Industry",
    description:
      "Powering aerospace innovation with reliable, high-performance electronic systems for flight-critical applications. Our aerospace solutions are built to withstand extreme environments and deliver uncompromising performance.",
    subDescription:
      "From avionics to power management systems, we engineer electronics that meet DO-254 and MIL standards for mission-critical aerospace platforms.",
    image: "/industries-we-serve/aerospace-industries.jpg",
    relatedCaseStudies: [
      "Avionics PCB Design",
      "High-Reliability Hardware",
      "DO-254 Compliance",
      "FPGA Design",
      "Rugged Embedded Systems",
    ],
  },
  {
    id: "motor-controller",
    label: "Motor Controller",
    Icon: Cog,
    title: "Motor Controller",
    description:
      "Designing advanced motor control solutions for industrial automation, robotics, and electric drive systems. Our motor controllers deliver precision control, efficiency, and durability in demanding industrial environments.",
    subDescription:
      "We engineer scalable solutions that optimize motor performance while reducing energy consumption and operational costs.",
    image: "/industries-we-serve/motor-controller.jpg",
    relatedCaseStudies: [
      "Motor Drive PCB Design",
      "Power Electronics Layout",
      "Embedded Firmware",
      "BLDC Controller Design",
      "Industrial Control Systems",
    ],
  },
  {
    id: "power-electronics",
    label: "Power Electronics",
    Icon: Zap,
    title: "Power Electronics",
    description:
      "Engineering efficient power conversion, management, and distribution systems for demanding applications. Our power electronics solutions maximize energy efficiency while minimizing heat dissipation and system footprint.",
    subDescription:
      "With expertise in DC-DC converters, AC-DC rectifiers, and advanced power management circuits, we deliver solutions that optimize performance and reliability.",
    image: "/industries-we-serve/power-electronics.jpg",
    relatedCaseStudies: [
      "High-Power PCB Design",
      "SMPS Design",
      "DC-DC Converter Design",
      "Thermal Management",
      "GaN/SiC Circuit Design",
    ],
  },
  {
    id: "data-centers",
    label: "Data Centers",
    Icon: Server,
    title: "Data Centers",
    description:
      "Building scalable, high-efficiency infrastructure solutions for modern data center power and thermal management. Our data center electronics ensure continuous operation and optimal energy utilization at scale.",
    subDescription:
      "We design robust power distribution, monitoring, and cooling solutions that support enterprise-grade data center operations.",
    image: "/industries-we-serve/data-centers.jpg",
    relatedCaseStudies: [
      "High-Speed PCB Design",
      "Server Hardware Design",
      "Signal Integrity Analysis",
      "Power Distribution Design",
      "Backplane Design",
    ],
  },
];

export function IndustriesWeServeV2() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = industries[selectedIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Original Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl">
            Industries 
            <span className="text-red-500">We Serve</span>
          </h2>
        </div>

        {/* Tab/Filter Row */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 overflow-x-auto pb-2">
          {industries.map((industry, index) => {
            const Icon = industry.Icon;
            const isActive = selectedIndex === index;
            return (
              <button
                key={industry.id}
                onClick={() => setSelectedIndex(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-white" : "text-gray-600"}
                />
                <span className="text-sm font-medium">{industry.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Grid - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Cream/Beige Card */}
          <div className="bg-qmax-grey rounded-2xl p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">
              {selected.title}
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {selected.description}
            </p>

            <p className="mb-6 text-sm leading-relaxed flex-1 text-muted-foreground">
              {selected.subDescription}
            </p>

            {/* Get an instant quote Button */}
            <button className="self-start px-6 py-2.5 border-2 border-black text-black font-medium text-sm rounded-full hover:bg-[#c41e1e] hover:border-[#c41e1e] hover:text-white transition-colors">
              Get an instant quote
            </button>
          </div>

          {/* Center Column - Industry Image */}
          <div className="h-full min-h-[420px] lg:min-h-0">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Column - Related Case Studies */}
          <div className="bg-qmax-grey rounded-2xl p-8 flex flex-col">
            <h4 className="text-sm font-semibold text-gray-600 mb-4">
              Related Case Studies
            </h4>

            <div className="flex-1">
              <ul className="space-y-4">
                {selected.relatedCaseStudies.map((study, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block bg-white rounded-xl p-4 hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                      <span className="text-gray-900 font-medium text-base">
                        {study}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn more Button */}
            <div className="mt-6">
              <button className="px-6 py-2.5 rounded-full font-medium text-sm text-black border-2 border-black hover:bg-[#c41e1e] hover:border-[#c41e1e] hover:text-white transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
