"use client";

import { useState } from "react";
import Link from "next/link";

// SVG Icon Components - Industry-specific icons
const RFIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-full h-full"
    fill="none"
    stroke="#333333"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="18" y="14" width="28" height="22" rx="2" />
    <path d="M22 36v6h20v-6" />
    <path d="M28 20h8M32 24v8" />
    <path d="M46 28l-4-4M46 36l-4 4" />
    <circle cx="32" cy="24" r="1.5" fill="#ef4444" />
  </svg>
);

const MedicalIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-full h-full"
    fill="none"
    stroke="#333333"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M26 20h12c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H26c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2z" />
    <path d="M32 26v8M28 30h8" />
    <circle
      cx="20"
      cy="32"
      r="3"
      fill="none"
      stroke="#ef4444"
      strokeWidth="2"
    />
    <circle
      cx="44"
      cy="32"
      r="3"
      fill="none"
      stroke="#ef4444"
      strokeWidth="2"
    />
  </svg>
);

const AerospaceIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-full h-full"
    fill="none"
    stroke="#333333"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M32 10L48 26H16Z" />
    <path d="M22 26h20v18h-20z" />
    <path d="M28 44l-2 8h12l-2-8" />
    <path d="M32 18v8" />
    <circle cx="32" cy="35" r="2" fill="#ef4444" />
  </svg>
);

const MotorIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-full h-full"
    fill="none"
    stroke="#333333"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="32" cy="32" r="14" />
    <circle cx="32" cy="32" r="8" />
    <path d="M32 18v-4M32 50v4M48 32h4M12 32h4" />
    <path d="M42 22l3-3M22 42l-3 3" />
    <path d="M32 32L40 24" />
    <circle cx="32" cy="32" r="2" fill="#ef4444" />
  </svg>
);

const PowerIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-full h-full"
    fill="none"
    stroke="#333333"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M32 12L44 28H40v16h-16V28H20Z" />
    <path d="M26 44v6M32 44v6M38 44v6" />
    <path d="M28 50h8" />
    <circle cx="32" cy="20" r="2" fill="#ef4444" />
  </svg>
);

const DataCenterIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-full h-full"
    fill="none"
    stroke="#333333"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="14" y="16" width="36" height="12" rx="2" />
    <rect x="14" y="32" width="36" height="12" rx="2" />
    <rect x="14" y="48" width="36" height="6" rx="1" />
    <circle cx="20" cy="22" r="1.5" fill="#ef4444" />
    <circle cx="26" cy="22" r="1.5" fill="#ef4444" />
    <circle cx="20" cy="38" r="1.5" fill="#ef4444" />
    <circle cx="26" cy="38" r="1.5" fill="#ef4444" />
    <line x1="50" y1="20" x2="56" y2="20" stroke="#ef4444" strokeWidth="2" />
    <line x1="50" y1="36" x2="56" y2="36" stroke="#ef4444" strokeWidth="2" />
  </svg>
);

const industries = [
  {
    title: "RF Industry",
    description:
      "Engineering high-performance RF solutions for wireless communications, signal processing, and electromagnetic systems. We deliver cutting-edge RF components and subsystems engineered for reliability, performance, and scalability across diverse applications.",
    additionalContent:
      "Our expertise spans from circuit design to system integration, ensuring optimal signal integrity and electromagnetic compatibility in every solution.",
    relatedServices: [
      "RF PCB Design",
      "High-Frequency Layout",
      "Antenna Design",
      "EMI/EMC Compliance",
      "Signal Integrity Analysis",
    ],
    image: "/industries-we-serve/rf-industry.jpg",
    Icon: RFIcon,
  },
  {
    title: "Medical Industry",
    description:
      "Delivering precision-engineered solutions for medical devices, diagnostics, and life-critical healthcare systems. Our medical-grade electronics meet the highest standards of safety, accuracy, and regulatory compliance.",
    additionalContent:
      "We specialize in designing sterile-compatible, long-lifespan medical equipment that performs reliably in clinical environments.",
    relatedServices: [
      "Medical Device PCB Design",
      "FDA-Compliant Hardware",
      "Wearable Device Design",
      "Low-Power Embedded Systems",
      "ISO 13485 Compliance",
    ],
    image: "/industries-we-serve/medical-industries.jpg",
    Icon: MedicalIcon,
  },
  {
    title: "Aerospace Industry",
    description:
      "Powering aerospace innovation with reliable, high-performance electronic systems for flight-critical applications. Our aerospace solutions are built to withstand extreme environments and deliver uncompromising performance.",
    additionalContent:
      "From avionics to power management systems, we engineer electronics that meet DO-254 and MIL standards for mission-critical aerospace platforms.",
    relatedServices: [
      "Avionics PCB Design",
      "High-Reliability Hardware",
      "DO-254 Compliance",
      "FPGA Design",
      "Rugged Embedded Systems",
    ],
    image: "/industries-we-serve/aerospace-industries.jpg",
    Icon: AerospaceIcon,
  },
  {
    title: "Motor Controller",
    description:
      "Designing advanced motor control solutions for industrial automation, robotics, and electric drive systems. Our motor controllers deliver precision control, efficiency, and durability in demanding industrial environments.",
    additionalContent:
      "We engineer scalable solutions that optimize motor performance while reducing energy consumption and operational costs.",
    relatedServices: [
      "Motor Drive PCB Design",
      "Power Electronics Layout",
      "Embedded Firmware",
      "BLDC Controller Design",
      "Industrial Control Systems",
    ],
    image: "/industries-we-serve/motor-controller.jpg",
    Icon: MotorIcon,
  },
  {
    title: "Power Electronics",
    description:
      "Engineering efficient power conversion, management, and distribution systems for demanding applications. Our power electronics solutions maximize energy efficiency while minimizing heat dissipation and system footprint.",
    additionalContent:
      "With expertise in DC-DC converters, AC-DC rectifiers, and advanced power management circuits, we deliver solutions that optimize performance and reliability.",
    relatedServices: [
      "High-Power PCB Design",
      "SMPS Design",
      "DC-DC Converter Design",
      "Thermal Management",
      "GaN/SiC Circuit Design",
    ],
    image: "/industries-we-serve/power-electronics.jpg",
    Icon: PowerIcon,
  },
  {
    title: "Data Centers",
    description:
      "Building scalable, high-efficiency infrastructure solutions for modern data center power and thermal management. Our data center electronics ensure continuous operation and optimal energy utilization at scale.",
    additionalContent:
      "We design robust power distribution, monitoring, and cooling solutions that support enterprise-grade data center operations.",
    relatedServices: [
      "High-Speed PCB Design",
      "Server Hardware Design",
      "Signal Integrity Analysis",
      "Power Distribution Design",
      "Backplane Design",
    ],
    image: "/industries-we-serve/data-centers.jpg",
    Icon: DataCenterIcon,
  },
];

export function IndustriesWeServe() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = industries[selectedIndex];

  return (
    <section className="py-8 lg:pt-[40px] lg:pb-[50px] bg-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-5">
        {/* Header */}
        <div className="mb-8 lg:mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4 lg:mb-9 text-foreground">
            Industries <span className="text-[#e44332]">We Serve</span>
          </h2>
          <p className="mt-2 lg:mt-[35px] text-sm lg:text-lg leading-[150%] font-normal text-foreground max-w-2xl mx-auto">
            We engineer precision solutions for mission-critical industries. Our
            deep domain expertise and technical excellence deliver measurable
            impact across sectors where performance, reliability, and innovation
            are non-negotiable.
          </p>
        </div>

        {/* Industry Tabs + Detail Card */}
        <div className="flex flex-col lg:flex-row gap-0 items-stretch">
          {/* Industry Icons Tabs - Horizontal on mobile, Vertical on desktop */}
          <div className="flex flex-row lg:flex-col shrink-0 overflow-x-auto lg:overflow-x-visible">
            {industries.map((industry, index) => {
              const Icon = industry.Icon;
              return (
                <button
                  key={industry.title}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex flex-col items-center justify-center gap-1.5 lg:gap-2 py-3 px-3 lg:py-5 lg:px-4 transition-all duration-300 border-2 border-transparent shrink-0 ${
                    selectedIndex === index
                      ? "bg-[#f5f5f5] border-[#333]"
                      : "bg-white hover:bg-[#f5f5f5] hover:border-[#333]"
                  }`}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                    <Icon />
                  </div>
                  <span
                    className={`text-xs lg:text-sm font-extrabold text-center max-w-[60px] lg:max-w-[80px] leading-tight ${selectedIndex === index ? "text-gray-900" : "text-gray-600"}`}
                  >
                    {industry.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Industry Card */}
          <div className="bg-[#f8f8f8] rounded-b-lg lg:rounded-b-none lg:rounded-r-lg overflow-hidden flex-1">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-5 lg:gap-6 p-5 lg:p-8 items-stretch h-full">
              {/* Image - shown first on mobile */}
              <div className="h-[200px] md:h-full md:order-2 w-full md:min-h-[300px]">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center md:order-1">
                <h3 className="font-bold text-xl lg:text-2xl text-gray-900 mb-3 lg:mb-4">
                  {selected.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-700 mb-2 lg:mb-3 font-sans">
                  {selected.description}
                </p>

                <p className="text-sm leading-relaxed text-gray-700 mb-4 lg:mb-5 font-sans">
                  {selected.additionalContent}
                </p>

                {/* Related Case Studies */}
                <div className="mb-4 lg:mb-5">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Related Case Studies
                  </h4>
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {selected.relatedServices.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-300 text-gray-700 text-xs lg:text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 lg:gap-4">
                  <button className="bg-[#ef4444] text-white font-semibold px-5 py-2.5 lg:px-6 lg:py-3 text-sm lg:text-base rounded-md hover:bg-[#dc2626] transition-colors duration-300">
                    Get an instant quote
                  </button>
                  <Link
                    href="#"
                    className="bg-white text-gray-900 font-semibold px-5 py-2.5 lg:px-6 lg:py-3 text-sm lg:text-base rounded-md border border-gray-300 hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2"
                  >
                    Learn more
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
