"use client";

import {
  ArrowUpRight,
  CircuitBoard,
  Cpu,
  Layers,
  Wrench,
  type LucideIcon,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  blurb: string;
  items: string[];
  Icon: LucideIcon;
  href: string;
}

const services: ServiceCard[] = [
  {
    id: "hardware",
    title: "Hardware Development",
    blurb: "From signal to silicon — purpose-built hardware that ships.",
    items: [
      "Analog / Mixed Signal",
      "High Speed Digital",
      "RF / Microwave",
      "Power Electronics",
    ],
    Icon: Cpu,
    href: "/hardware-development-services",
  },
  {
    id: "embedded",
    title: "Embedded Systems Development",
    blurb: "Firmware and platform software engineered for reliability.",
    items: [
      "Firmware Development",
      "BSP & Driver Development",
      "Embedded Linux & RTOS",
      "FPGA Design & Development",
    ],
    Icon: CircuitBoard,
    href: "/embedded-design-services",
  },
  {
    id: "pcb",
    title: "PCB Design Services",
    blurb: "High-speed, multi-layer, and RF layouts ready for production.",
    items: [
      "PCB Design",
      "PCB Library",
      "SI/PI/EMI Analysis",
      "PCB Design Review",
    ],
    Icon: Layers,
    href: "/pcb-design",
  },
  {
    id: "mechanical",
    title: "Mechanical and Industrial Design",
    blurb: "Enclosures, ergonomics, and prototypes ready for production.",
    items: ["Mechanical Design", "Industrial Design", "Prototype Build"],
    Icon: Wrench,
    href: "/mechanical-industrial-design-services",
  },
];

export default function OurServices() {
  return (
    <section
      id="our-services"
      aria-labelledby="our-services-heading"
      className="flex min-h-screen items-start justify-center bg-white pt-24 pb-28 scroll-mt-24"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-7">
          <h2 id="our-services-heading">
            <span className="text-black">Our</span>{" "}
            <span className="text-red-500">Services</span>
          </h2>
          {/* <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end electronics engineering — from concept through hardware,
            firmware, PCB, and enclosure to a production-ready product.
          </p> */}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.Icon;
            return (
              <a
                key={service.id}
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="group relative flex flex-col bg-[#f3f4f6] border border-black/[0.06] rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-white hover:border-transparent hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                {/* Header: icon + title/blurb + arrow */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-black text-white transition-colors duration-300 group-hover:bg-red-500 flex-shrink-0">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0 min-h-[4.75rem]">
                    <h3 className="text-lg md:text-xl font-semibold text-black tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      {service.blurb}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-black group-hover:text-black flex-shrink-0"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Divider */}
                <div className="my-4 h-px w-full bg-gray-200" />

                {/* Items */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm md:text-[15px] text-gray-800"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0"
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer label */}
                <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 transition-colors duration-300 group-hover:text-red-500">
                  Explore service
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
