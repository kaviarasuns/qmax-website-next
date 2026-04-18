"use client";

import React, { useState, useEffect } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import PCBCaseStudyCard from "@/components/PCBCaseStudyCard";

const embeddedCaseStudies = [
  { 
    id: 1, 
    title: "Security System Controller", 
    image: "/case-studies/BLUECOLD/BLUECOLD-1.jpg", 
    link: "case-studies/Security-System-Controller.html", 
    category: "development", 
    summary: "A powerful Edge controller device used in high security applications with multi-protocol sensors and reader inputs. The system is powered through POE+ and has options for power backup using an external power supply or battery. It can work as a stand alone device or can be cascaded to control multiple access points.",
    specs: [
      { label: "Controller", value: "SAMA5D3" },
      { label: "Connectivity", value: "POE+ / Ethernet" },
      { label: "Storage", value: "Nano Flash" }
    ],
    stats: { value: "5%", label: "Stability improved by" }
  },
  { 
    id: 2, 
    title: "Structural Health Monitoring System", 
    image: "/case-studies/CHARA/CAN-1.jpg", 
    link: "case-studies/fpga-based-health-monitoring-system.html", 
    category: "development", 
    summary: "An advanced health monitoring system utilizing FPGA technology for real-time processing of multiple biosignals. The system integrates various sensors to monitor vital signs and provides wireless connectivity for remote monitoring. Designed with medical-grade standards for reliability and accuracy in clinical environments.",
    specs: [
      { label: "Architecture", value: "FPGA Spartan-6" },
      { label: "Sampling", value: "High-speed ADC" },
      { label: "Interface", value: "Fiber Optic" }
    ],
    stats: { value: "12x", label: "Faster sampling rate" }
  },
  { 
    id: 3, 
    title: "Control system with POE Switch", 
    image: "/case-studies/CLIMATE CONTROL/CLIMATE-1.jpg",
    link: "case-studies/Control-system-with-POE-Switch-and-RTOS.html", 
    category: "development", 
    summary: "A comprehensive industrial control system featuring integrated POE+ switching capabilities and real-time operating system. The system provides centralized control for multiple devices while delivering power and data through a single ethernet connection. Designed for harsh industrial environments with robust communication protocols.",
    specs: [
      { label: "Processor", value: "Cortex-M7" },
      { label: "OS", value: "FreeRTOS" },
      { label: "Switch", value: "L2 Managed" }
    ],
    stats: { value: "40%", label: "Power efficiency" }
  },
  { 
    id: 4, 
    title: "Lithium Titanate Power Bank", 
    image: "/case-studies/MICROSCOPIC CAMERA/MICROSCOPIC-1.jpg", 
    link: "case-studies/Lithium-Titanate-Power-Bank.html", 
    category: "development", 
    summary: "A power bank using a Lithium Titanate battery with super-fast charging characteristics. The design is based on a high power current source and monitoring system using a PIC Microcontroller. The lithium-titanate battery's unique anode structure allows for rapid recharging, achieving a full charge in less than 10 minutes. Includes built-in safety features to prevent overcharging and deep discharge.",
    specs: [
      { label: "Capacity", value: "10,000 mAh" },
      { label: "Charge Time", value: "10 Mins" },
      { label: "Chemistry", value: "LTO Cells" }
    ],
    stats: { value: "20k", label: "Lifecycle cycles" }
  },
  { 
    id: 5, 
    title: "OBD 2 Device with LoRa and BLE", 
    image: "/case-studies/OTT/OTT-1.jpg", 
    link: "case-studies/OBD-2-Device-with-LoRa-and-BLE.html", 
    category: "development", 
    summary: "Handheld, battery-operated device that reads car data via the OBD port, transmitting it via LoRa and BLE. Features an STM32F Microcontroller, support for multiple OBD protocols, and a pass-through design. Includes an 800 mAh Li-Po battery with a cut-off mechanism to prevent car battery drain.",
    specs: [
      { label: "Protocol", value: "CAN / K-Line" },
      { label: "Wireless", value: "LoRa & BLE 5.0" },
      { label: "Accuracy", value: "99.9%" }
    ],
    stats: { value: "15km", label: "Long range LoRa" }
  },
  { 
    id: 6, 
    title: "BLE tag with Wireless Charging", 
    image: "/case-studies/POE/POE-1.1.jpg", 
    link: "case-studies/BLE-tag-with-Wireless-Charging.html", 
    category: "development", 
    summary: "Low power BLE tag integrated with WattUp wireless charging technology. Includes multiple on-board sensors for light, motion, and temperature. Contact-less, orientation-free charging allows for easy maintenance. BLE 5.0 compliant and supports mesh networking for asset tracking and indoor location sensing.",
    specs: [
      { label: "Range", value: "Up to 100m" },
      { label: "Charging", value: "Qi Wireless" },
      { label: "Sensors", value: "Temp & Accel" }
    ],
    stats: { value: "2yr", label: "Battery life" }
  },
  { 
    id: 7, 
    title: "IOT Module with Wi-Fi BLE ZigBee", 
    image: "/case-studies/POE/POE-2.2.jpg", 
    link: "case-studies/IOT-Module-with-Wi-Fi-BLE-ZigBee.html", 
    category: "mobile", 
    summary: "Connectivity module based on the Qualcomm QCA4020, featuring dual-band Wi-Fi, BLE 5.0, and ZigBee. Integrates Cortex M4F for applications and Cortex M0 for networking. Includes hardware-level encryption and co-existence capability, making it ideal for Smart Home and industrial IoT gateways.",
    specs: [
      { label: "Protocols", value: "TCP/IP, MQTT" },
      { label: "Band", value: "2.4GHz Dual" },
      { label: "Pins", value: "48 GPIOs" }
    ],
    stats: { value: "3", label: "Simultaneous modes" }
  },
  { 
    id: 8, 
    title: "IOT Micro Gateway", 
    image: "/case-studies/POE/POE-3.1.jpg", 
    link: "case-studies/IOT-micro-gateway.html", 
    category: "design", 
    summary: "Compact IoT Micro Gateway powered by Qualcomm QCA4020. Bridges IoT devices via BLE/ZigBee to the Internet through Wi-Fi. Features an inbuilt power supply in a sleek plug-and-play form factor. Capable of managing multiple wireless devices simultaneously for consumer and industrial settings.",
    specs: [
      { label: "Setup", value: "Zero Config" },
      { label: "Security", value: "WPA3 / TLS" },
      { label: "Power", value: "USB-C 5V" }
    ],
    stats: { value: "90%", label: "Setup time reduction" }
  },
  // { 
  //   id: 9, 
  //   title: "Kneeling and Levelling System", 
  //   image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Kneeling_and_Levelling_System.png", 
  //   link: "case-studies/kneeling_system.html", 
  //   category: "development", 
  //   summary: "Precision control system for heavy vehicle air suspensions. Interface with the vehicle's CAN bus to execute complex kneeling and levelling commands. Built around an automotive-grade Microchip MCU with integrated ECAN. Rugged, IP69K compliant construction designed for harsh Tier 1 automotive environments.",
  //   specs: [
  //     { label: "Bus", value: "CAN J1939" },
  //     { label: "IOs", value: "12 Digital / 4 Analog" },
  //     { label: "Enclosure", value: "IP67 Rugged" }
  //   ],
  //   stats: { value: "0.1s", label: "Response latency" }
  // },
  // { 
  //   id: 10, 
  //   title: "Precision Filtration Control System", 
  //   image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Precision_Filtration_Control_System.jpg", 
  //   link: "case-studies/Precision-Filtration-Control-System.html", 
  //   category: "development", 
  //   summary: "Industrial automation controller for high-accuracy filtration units. Uses an Arm Cortex A53 to manage multiple sensors (temp, pressure, flow) and actuate solenoid valves. Features integrated ESD protection and inrush current protection for reliable operation in demanding industrial environments.",
  //   specs: [
  //     { label: "Pump", value: "BLDC Control" },
  //     { label: "Sensor", value: "Optical Pressure" },
  //     { label: "Display", value: "LCD Interface" }
  //   ],
  //   stats: { value: "25%", label: "Flow precision" }
  // },
  // { 
  //   id: 11, 
  //   title: "Power Measurement System", 
  //   image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Polyphase_Power_Measurement_System.jpg", 
  //   link: "case-studies/polyphase-power_measurement.html", 
  //   category: "development", 
  //   summary: "Polyphase metering system based on the TI MSP430F6779 SOC. Designed to fit within standard distribution boxes alongside circuit breakers. Uses high-precision potential and current transformers with advanced DSP algorithms to compute complex power parameters in real-time across power supply networks.",
  //   specs: [
  //     { label: "ADC", value: "24-bit Delta-Sigma" },
  //     { label: "DSP", value: "Real-time FFT" },
  //     { label: "Compliance", value: "IEC 62053" }
  //   ],
  //   stats: { value: "0.1", label: "Class accuracy" }
  // },
  // { 
  //   id: 12, 
  //   title: "IOT Connectivity Dongle - BLE ZigBee", 
  //   image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Connectivity_Dongle_BLE_ZigBee.jpg", 
  //   link: "case-studies/IOT-connectivity-dongle-BLE-ZIGBEE.html", 
  //   category: "development", 
  //   summary: "USB connectivity dongle based on Qualcomm QCA4024 with BLE 5.0, ZigBee, and Thread support. Provides instant mesh networking capability to any hardware via a serial-over-USB interface. Ideal for home automation and sensor mesh networks with simultaneous multi-radio co-existence.",
  //   specs: [
  //     { label: "Form", value: "USB Stick" },
  //     { label: "Mesh", value: "ZigBee 3.0" },
  //     { label: "OS Support", value: "Windows / Linux" }
  //   ],
  //   stats: { value: "50", label: "Max node count" }
  // },
  // { 
  //   id: 13, 
  //   title: "IOT Power Measurement Unit", 
  //   image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Power_Measurement_Unit.jpg", 
  //   link: "case-studies/IOT-Power-Measurement-Unit.html", 
  //   category: "development", 
  //   summary: "High-precision monitor for device-level energy tracking. Features 24-bit sigma-delta ADCs and a 16-bit TI MCU to measure RMS voltage, current, and active/reactive power. Sends data to cloud dashboards via USB for remote monitoring and detailed power analytics.",
  //   specs: [
  //     { label: "Sensitivity", value: "1mA" },
  //     { label: "Input", value: "Up to 440V" },
  //     { label: "Data", value: "Cloud Logging" }
  //   ],
  //   stats: { value: "98%", label: "Energy visibility" }
  // },
  // { 
  //   id: 14, 
  //   title: "IOT Gateway", 
  //   image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Gateway.jpg", 
  //   link: "case-studies/iot-gateway.html", 
  //   category: "development", 
  //   summary: "Linux-based multi-protocol IoT hub using Qualcomm QCA4531 and QCA4024 chipsets. Bridges Wi-Fi/Ethernet to BLE 5.0, ZigBee, and Thread devices. Features user-programmable OpenWRT environment with 2x2 11n range extension, serving as a feature-rich node for discovered IoT ecosystems.",
  //   specs: [
  //     { label: "Kernel", value: "Custom Linux" },
  //     { label: "Cellular", value: "4G LTE Cat-M1" },
  //     { label: "Local", value: "MQTT Broker" }
  //   ],
  //   stats: { value: "100+", label: "Device bridge" }
  // },
  // { 
  //   id: 15, 
  //   title: "Wearable Biosensor", 
  //   image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Wearable_Biosensor.jpg", 
  //   link: "case-studies/Wearable-Biosensor.html", 
  //   category: "development", 
  //   summary: "Sports-focused biosensor watch that tracks six critical health readings in 60 seconds. Powered by Qualcomm QCA4024, it supports BLE mesh for team sports tracking, allowing multiple players' data to be networked and transmitted to a master receiver for real-time strategic health monitoring.",
  //   specs: [
  //     { label: "Vitals", value: "HR, SpO2, Temp" },
  //     { label: "Weight", value: "12g Ultra-light" },
  //     { label: "Mesh", value: "BLE Multi-hop" }
  //   ],
  //   stats: { value: "24/7", label: "Continuous monitoring" }
  // },
  // { 
  //   id: 16, 
  //   title: "Smart OBD Charging Station", 
  //   image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Smart_OBD_Charging_Station.jpg", 
  //   link: "case-studies/Smart-OBD-Charging-Station.html", 
  //   category: "development", 
  //   summary: "Charging and firmware update station for up to 15 OBD devices. Runs a 64-bit ARM Cortex A53 Linux application to monitor power and automate cloud-based firmware upgrades. Features custom-designed connectors and built-in fail-safe mechanisms for industrial-scale device management.",
  //   specs: [
  //     { label: "Ports", value: "15x OBDII" },
  //     { label: "Manager", value: "Smart GUI Hub" },
  //     { label: "Firmware", value: "Batch Update" }
  //   ],
  //   stats: { value: "15x", label: "Throughput efficiency" }
  // }
];

const pcbCaseStudies = [
  { id: 1, title: "Industrial Controller", image: "/ott/CHARA-top.svg", link: "case-studies/Industrial-Controller.html", category: "development" },
  { id: 2, title: "Aerospace PCB", image: "/ott/TEK_OTT_REV1P0_BOT.svg", link: "case-studies/Aerospace-PCB.html", category: "development" },
  { id: 3, title: "Automotive OBD", image: "/ott/TEK_OTT_REV1P0_BRD_PR3.svg", link: "case-studies/Automotive-OBD.html", category: "development" },
  // { id: 4, title: "Security Controller", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Security-Controller.png", link: "case-studies/Security-Controller.html", category: "development" },
  // { id: 5, title: "Automotive HID PCB", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-HID-PCB.png", link: "case-studies/Automotive-HID-PCB.html", category: "development" },
  // { id: 6, title: "Networking Device", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Networking-Device-2.png", link: "case-studies/Networking-Device.html", category: "development" },
  // { id: 7, title: "Networking Switch", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Networking-Device.png", link: "case-studies/Networking-Switch.html", category: "development" },
  // { id: 8, title: "Blade NIC Server", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Blade-NIC-Server.png", link: "case-studies/Blade-NIC-Server.html", category: "development" },
  // { id: 9, title: "ATE - PCB", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/ATE-a.png", link: "case-studies/ATE-PCB.html", category: "development" },
  // { id: 10, title: "IOT Gateway", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/IOT-Gateway.png", link: "case-studies/IOT-Gateway.html", category: "development" },
  // { id: 11, title: "Automotive Control", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-Control.png", link: "case-studies/Automotive-Control.html", category: "development" },
  // { id: 12, title: "Automotive Keypad Interface", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-Keypad-Interface.png", link: "case-studies/Automotive-Keypad-Interface.html", category: "development" },
  // { id: 13, title: "Medical Electronics", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Medical.png", link: "case-studies/Medical-Electronics.html", category: "development" },
  // { id: 14, title: "Video Processor", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Video-Processor.png", link: "case-studies/Video-Processor.html", category: "development" },
  // { id: 15, title: "Set Top Box", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/STB-a.png", link: "case-studies/Set-Top-Box.html", category: "development" },
  // { id: 16, title: "Wi-Fi AP", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Wi-Fi-AP.png", link: "case-studies/Wi-Fi-AP.html", category: "development" }
];

const mechanicalCaseStudies: { id: number; title: string; image: string; link: string; category: string }[] = [
  // { id: 1, title: "Manpack Communication Equipment", image: "https://images.pexels.com/photos/1592261/pexels-photo-1592261.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/mechanical-industrial-design-services/mechanical-design", category: "mechanical" },
  // { id: 2, title: "Satellite Antenna Stabilizer Housing", image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/mechanical-industrial-design-services/mechanical-design", category: "mechanical" },
  // { id: 3, title: "Medical Foot Switch Mechanism", image: "https://images.pexels.com/photos/5726833/pexels-photo-5726833.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/mechanical-industrial-design-services/mechanical-design", category: "mechanical" },
  // { id: 4, title: "Handheld OBD2 Enclosure", image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/mechanical-industrial-design-services/mechanical-design", category: "mechanical" }
];

const industrialCaseStudies = [
  { id: 1, title: "Handheld Industrial Controller", image: "/industrial_design_case_studies/product_1.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial", summary: "Ergonomic handheld factory controller." },
  { id: 2, title: "Medical Diagnostic System", image: "/industrial_design_case_studies/product_2.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial", summary: "User-centered medical diagnostic system." },
  // { id: 3, title: "Security Hub Enclosure", image: "/industrial_design_case_studies/product_3.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial", summary: "Compact thermal-optimized security hub." },
  // { id: 4, title: "Military Communication Unit", image: "/industrial_design_case_studies/product_4.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial", summary: "Ruggedized field-ready military unit." },
  // { id: 5, title: "Smart Device Product Concept", image: "/industrial_design_case_studies/product_5.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial", summary: "Innovative smart device design concept." }
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

export default function CaseStudiesPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-24 pb-24 bg-[#f8f8f6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(243,49,23,0.08),transparent_42%)]" />
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
                <h2 className="text-3xl font-bold text-zinc-900">Embedded Systems</h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">{embeddedCaseStudies.length} Projects</span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {embeddedCaseStudies.map((study) => (
                <CaseStudyCard key={`estudy-${study.id}`} {...study}  
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
              <span className="text-sm text-zinc-500 font-medium mb-1">{pcbCaseStudies.length} Projects</span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {pcbCaseStudies.map((study) => (
                <PCBCaseStudyCard key={`pstudy-${study.id}`} {...study} />
              ))}
            </div>
          </div>

          {/* Mechanical Section */}
          <div id="mechanical" className="mb-24 scroll-mt-32">
            <div className="mb-10 flex items-end justify-between border-b border-zinc-200 pb-4">
              <div>
                {/* <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1 block">Category 03</span> */}
                <h2 className="text-3xl font-bold text-zinc-900">Mechanical Design</h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">{mechanicalCaseStudies.length} Projects</span>
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
                <h2 className="text-3xl font-bold text-zinc-900">Industrial Design</h2>
              </div>
              <span className="text-sm text-zinc-500 font-medium mb-1">{industrialCaseStudies.length} Projects</span>
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
