"use client";

import React, { useState, useEffect } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";

const embeddedCaseStudies = [
  {
    id: 1,
    title: "Industrial Temperature Control System",
    image: "/case-studies/BLUECOLD/1.png",
    link: "/case-studies/industrial-temperature-control-system",
    category: "development",
    summary:
      "A powerful Edge controller device used in high security applications with multi-protocol sensors and reader inputs. The system is powered through POE+ and has options for power backup using an external power supply or battery. It can work as a stand alone device or can be cascaded to control multiple access points.",
    specs: [
      { label: "Controller", value: "SAMA5D3" },
      { label: "Connectivity", value: "POE+ / Ethernet" },
      { label: "Storage", value: "Nano Flash" },
    ],
    stats: { value: "5%", label: "Stability improved by" },
  },
  {
    id: 2,
    title: "Multi IO card for ATE",
    image: "/case-studies/CHARA/1.png",
    link: "/case-studies/multi-io-card-for-ate",
    category: "development",
    summary:
      "An advanced health monitoring system utilizing FPGA technology for real-time processing of multiple biosignals. The system integrates various sensors to monitor vital signs and provides wireless connectivity for remote monitoring. Designed with medical-grade standards for reliability and accuracy in clinical environments.",
    specs: [
      { label: "Architecture", value: "FPGA Spartan-6" },
      { label: "Sampling", value: "High-speed ADC" },
      { label: "Interface", value: "Fiber Optic" },
    ],
    stats: { value: "12x", label: "Faster sampling rate" },
  },
  {
    id: 3,
    title: "Smart Monitoring System",
    image: "/case-studies/CLIMATE CONTROL/1.png",
    link: "/case-studies/smart-monitoring-system",
    category: "development",
    summary:
      "A comprehensive industrial control system featuring integrated POE+ switching capabilities and real-time operating system. The system provides centralized control for multiple devices while delivering power and data through a single ethernet connection. Designed for harsh industrial environments with robust communication protocols.",
    specs: [
      { label: "Processor", value: "Cortex-M7" },
      { label: "OS", value: "FreeRTOS" },
      { label: "Switch", value: "L2 Managed" },
    ],
    stats: { value: "40%", label: "Power efficiency" },
  },
  {
    id: 4,
    title: "Microscopic Camera Control",
    image: "/case-studies/MICROSCOPIC CAMERA/1.png",
    link: "/case-studies/microscopic-camera-control",
    category: "development",
    summary:
      "A power bank using a Lithium Titanate battery with super-fast charging characteristics. The design is based on a high power current source and monitoring system using a PIC Microcontroller. The lithium-titanate battery's unique anode structure allows for rapid recharging, achieving a full charge in less than 10 minutes. Includes built-in safety features to prevent overcharging and deep discharge.",
    specs: [
      { label: "Capacity", value: "10,000 mAh" },
      { label: "Charge Time", value: "10 Mins" },
      { label: "Chemistry", value: "LTO Cells" },
    ],
    stats: { value: "20k", label: "Lifecycle cycles" },
  },
  {
    id: 5,
    title: "Industrial IOT gateway with POE",
    image: "/case-studies/OTT/1.png",
    link: "/case-studies/industrial-iot-gateway-with-poe",
    category: "development",
    summary:
      "Handheld, battery-operated device that reads car data via the OBD port, transmitting it via LoRa and BLE. Features an STM32F Microcontroller, support for multiple OBD protocols, and a pass-through design. Includes an 800 mAh Li-Po battery with a cut-off mechanism to prevent car battery drain.",
    specs: [
      { label: "Protocol", value: "CAN / K-Line" },
      { label: "Wireless", value: "LoRa & BLE 5.0" },
      { label: "Accuracy", value: "99.9%" },
    ],
    stats: { value: "15km", label: "Long range LoRa" },
  },
  {
    id: 6,
    title: "POE Control unit",
    image: "/case-studies/POE/1.png",
    link: "/case-studies/poe-control-unit",
    category: "development",
    summary:
      "Low power BLE tag integrated with WattUp wireless charging technology. Includes multiple on-board sensors for light, motion, and temperature. Contact-less, orientation-free charging allows for easy maintenance. BLE 5.0 compliant and supports mesh networking for asset tracking and indoor location sensing.",
    specs: [
      { label: "Range", value: "Up to 100m" },
      { label: "Charging", value: "Qi Wireless" },
      { label: "Sensors", value: "Temp & Accel" },
    ],
    stats: { value: "2yr", label: "Battery life" },
  },
  {
    id: 7,
    title: "POE Power Injector",
    image: "/case-studies/POE/3.png",
    link: "/case-studies/poe-power-injector",
    category: "mobile",
    summary:
      "Connectivity module based on the Qualcomm QCA4020, featuring dual-band Wi-Fi, BLE 5.0, and ZigBee. Integrates Cortex M4F for applications and Cortex M0 for networking. Includes hardware-level encryption and co-existence capability, making it ideal for Smart Home and industrial IoT gateways.",
    specs: [
      { label: "Protocols", value: "TCP/IP, MQTT" },
      { label: "Band", value: "2.4GHz Dual" },
      { label: "Pins", value: "48 GPIOs" },
    ],
    stats: { value: "3", label: "Simultaneous modes" },
  },
  {
    id: 8,
    title: "Industrial POE switch",
    image: "/case-studies/POE/5.png",
    link: "/case-studies/industrial-poe-switch",
    category: "design",
    summary:
      "Compact IoT Micro Gateway powered by Qualcomm QCA4020. Bridges IoT devices via BLE/ZigBee to the Internet through Wi-Fi. Features an inbuilt power supply in a sleek plug-and-play form factor. Capable of managing multiple wireless devices simultaneously for consumer and industrial settings.",
    specs: [
      { label: "Setup", value: "Zero Config" },
      { label: "Security", value: "WPA3 / TLS" },
      { label: "Power", value: "USB-C 5V" },
    ],
    stats: { value: "90%", label: "Setup time reduction" },
  },
  {
    id: 9,
    title: "Portable EV Charger",
    image: "/case-studies/FEDERANT/1.png",
    link: "/case-studies/portable-ev-charger",
    category: "design",
    summary:
      "Compact IoT Micro Gateway powered by Qualcomm QCA4020. Bridges IoT devices via BLE/ZigBee to the Internet through Wi-Fi. Features an inbuilt power supply in a sleek plug-and-play form factor. Capable of managing multiple wireless devices simultaneously for consumer and industrial settings.",
    specs: [
      { label: "Setup", value: "Zero Config" },
      { label: "Security", value: "WPA3 / TLS" },
      { label: "Power", value: "USB-C 5V" },
    ],
    stats: { value: "90%", label: "Setup time reduction" },
  },
];

const pcbCaseStudies = [
  {
    id: 1,
    title: "Industrial Controller",
    image: "/ott/CHARA-top.svg",
    link: "/case-studies/portable-ev-charger-pcb",
    category: "development",
  },
  {
    id: 2,
    title: "Aerospace PCB",
    image: "/ott/TEK_OTT_REV1P0_BOT.svg",
    link: "/case-studies/aerospace-pcb",
    category: "development",
  },
  {
    id: 3,
    title: "Automotive OBD",
    image: "/ott/TEK_OTT_REV1P0_BRD_PR3.svg",
    link: "/case-studies/automotive-obd-pcb",
    category: "development",
  },
  {
    id: 4,
    title: "Fedarant PCB – Bottom Layer",
    image: "/case-studies/FEDERANT/P01306PB1PR2_BOT.svg",
    link: "/case-studies/fedarant-pcb-bottom-layer",
    category: "development",
  },
  {
    id: 5,
    title: "Fedarant PCB – Top Layer",
    image: "/case-studies/FEDERANT/P01306PB1PR2.svg",
    link: "/case-studies/fedarant-pcb-top-layer",
    category: "development",
  },
];

const mechanicalCaseStudies: {
  id: number;
  title: string;
  image: string;
  link: string;
  category: string;
  summary?: string;
  specs?: { label: string; value: string }[];
  stats?: { value: string; label: string };
}[] = [
  {
    id: 1,
    title: "CapServe Cell Sensor",
    image: "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.1.png",
    link: "/case-studies/capserve-cell-sensor",
    category: "mechanical",
    summary:
      "IP65-rated outdoor cell sensor enclosure with snap-fit assembly, integrated pole-mount bracket, and DFM-reviewed geometry ready for injection-moulding production.",
    specs: [
      { label: "Rating", value: "IP65 Sealed" },
      { label: "Material", value: "UV-stable ABS" },
      { label: "Mount", value: "Pole / Wall" },
    ],
    stats: { value: "IP65", label: "Ingress protection rating" },
  },
];

const industrialCaseStudies = [
  {
    id: 1,
    title: "Handheld Industrial Controller",
    image: "/industrial_design_case_studies/product_1.png",
    link: "/case-studies/handheld-industrial-controller",
    category: "industrial",
    summary:
      "Ergonomic handheld controller designed for factory floor use, with a balanced grip, sealed I/O ports, and a production-ready split-housing concept.",
    specs: [
      { label: "Form", value: "Handheld" },
      { label: "Standard", value: "IP54 Rated" },
      { label: "Material", value: "ABS / TPE" },
    ],
    stats: { value: "40%", label: "Reduction in operator fatigue" },
  },
  {
    id: 2,
    title: "Medical Diagnostic System",
    image: "/industrial_design_case_studies/product_2.png",
    link: "/case-studies/medical-diagnostic-system",
    category: "industrial",
    summary:
      "User-centered medical diagnostic device with a clean visual language, intuitive control layout, and enclosure geometry optimised for sterile wipe-down.",
    specs: [
      { label: "Compliance", value: "IEC 60601" },
      { label: "Finish", value: "Antimicrobial" },
      { label: "Display", value: "5″ Touch" },
    ],
    stats: { value: "30%", label: "Faster diagnosis workflow" },
  },
];

const sections = [
  { id: "embedded", label: "Embedded Systems" },
  { id: "pcb", label: "PCB Design" },
  { id: "mechanical", label: "Mechanical Design" },
  { id: "industrial", label: "Industrial Design" },
];

const sectionCounts: { [key: string]: number } = {
  embedded: embeddedCaseStudies.length,
  pcb: pcbCaseStudies.length,
  mechanical: mechanicalCaseStudies.length,
  industrial: industrialCaseStudies.length,
};

const SCROLL_OFFSET = 120;

export default function CaseStudiesPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = sections[0].id;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const sectionTop =
            el.getBoundingClientRect().top + scrollY - SCROLL_OFFSET;
          if (scrollY >= sectionTop - 5) {
            current = section.id;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-24 pb-24 bg-[#f8f8f6]">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.82))]" />

      <div className="relative flex w-full max-w-[1600px] mx-auto">
        {/* Quick Navigation Sidebar */}
        <aside className="hidden xl:block w-72 shrink-0 pl-10 pt-8 sticky top-24 h-screen self-start">
          <nav className="relative flex flex-col">
            {/* Vertical track line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full" />

            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative text-left pl-6 py-4 transition-all duration-300"
                >
                  {/* Active indicator line */}
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#E31E24] scale-y-100"
                        : "bg-transparent scale-y-0 group-hover:bg-gray-400 group-hover:scale-y-100"
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-lg font-semibold transition-colors duration-300 leading-tight ${
                        isActive
                          ? "text-[#E31E24]"
                          : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {section.label}
                    </span>
                    <span
                      className={`text-xs font-medium tabular-nums ml-3 px-2 py-0.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#E31E24]/10 text-[#E31E24]"
                          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
                      }`}
                    >
                      {sectionCounts[section.id]}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          data-budge-target
          className="flex-1 w-full max-w-6xl px-8 lg:px-12 mx-auto"
          style={{ paddingLeft: "32px", paddingRight: "32px" }}
        >
          {/* Embedded Section */}
          <div id="embedded" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 01</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">
                  Embedded Systems
                </h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {embeddedCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {embeddedCaseStudies.map((study) => (
                <CaseStudyCard
                  key={`estudy-${study.id}`}
                  {...study}
                  // imageBackgroundClassName="bg-blue-200"
                />
              ))}
            </div>
          </div>

          {/* PCB Section */}
          <div id="pcb" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 02</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">PCB Design</h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {pcbCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {pcbCaseStudies.map((study) => (
                <CaseStudyCard
                  key={`pstudy-${study.id}`}
                  {...study}
                  imageClassName="object-contain px-14 py-5"
                />
              ))}
            </div>
          </div>

          {/* Mechanical Section */}
          <div id="mechanical" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 03</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">
                  Mechanical Design
                </h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {mechanicalCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {mechanicalCaseStudies.map((study) => (
                <CaseStudyCard key={`mstudy-${study.id}`} {...study} />
              ))}
            </div>
          </div>

          {/* Industrial Section */}
          <div id="industrial" className="mb-10 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 04</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">
                  Industrial Design
                </h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">
                {industrialCaseStudies.length} Projects
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {industrialCaseStudies.map((study) => (
                <CaseStudyCard
                  key={`istudy-${study.id}`}
                  {...study}
                  // imageBackgroundClassName="bg-blue-200"
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
