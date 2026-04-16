"use client"

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const caseStudies = [
  {
    title: "Industrial Controller",
    image: "/ott/image1.JPG",
    description: "A robust industrial control system featuring dual-core processing and high-speed I/O connectivity. The system manages complex manufacturing processes with real-time monitoring and failsafe mechanisms.",
    specs: {
      "Processor": "ARM Cortex-A9",
      "Connectivity": "Ethernet / Modbus",
      "Memory": "512MB DDR3"
    }
  },
  {
    title: "Aerospace PCB",
    image: "/ott/image2.JPG",
    description: "High-reliability PCB design for aerospace applications meeting DO-254 and IPC-A-610 standards. Incorporates advanced signal integrity optimization and thermal management for critical avionics systems.",
    specs: {
      "Layers": "14-Layer",
      "Temperature": "-55°C to +125°C",
      "Certification": "DO-254 Qualified"
    }
  },
  {
    title: "Automotive OBD",
    image: "/ott/image3.JPG",
    description: "Advanced diagnostic device for vehicle data acquisition via OBD-II port. Features dual-band wireless connectivity and real-time vehicle telemetry with cloud integration capabilities.",
    specs: {
      "Protocol": "OBD-II",
      "Wireless": "4G/LTE + BLE",
      "Battery": "Li-ion 3000mAh"
    }
  },
  {
    title: "Security Controller",
    image: "/images/case-security-controller.jpg",
    description: "A powerful Edge controller device used in high security applications with multi-protocol sensors and reader inputs. The system is powered through POE+ and has options for redundant connectivity.",
    specs: {
      "Controller": "SAMA5D3",
      "Connectivity": "POE+ / Ethernet",
      "Storage": "Nano Flash"
    }
  },
  {
    title: "Automotive HID PCB",
    image: "/images/case-automotive-hid.jpg",
    description: "Compact high-power LED driver board for automotive headlight systems. Delivers precise brightness control and thermal management for modern HID and LED headlight assemblies.",
    specs: {
      "Power Output": "100W per channel",
      "Driver IC": "TPS92511",
      "Thermal": "Active cooling"
    }
  },
  {
    title: "Networking Device",
    image: "/images/case-networking-device.jpg",
    description: "Enterprise-grade network switch controller with advanced packet processing capabilities. Supports VLAN, QoS, and redundancy protocols for mission-critical data center applications.",
    specs: {
      "Processor": "NXP LX2160A",
      "Ports": "48x Gigabit",
      "Throughput": "200 Gbps"
    }
  }
]

export function CaseStudiesSection() {
  const [startIndex, setStartIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const itemsPerView = 3

  const handlePrevious = () => {
    setStartIndex((prev) => (prev === 0 ? caseStudies.length - itemsPerView : prev - 1))
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev >= caseStudies.length - itemsPerView ? 0 : prev + 1))
  }

  const visibleStudies = caseStudies.slice(startIndex, startIndex + itemsPerView)

  return (
    <section className="py-16 lg:py-24" style={{ background: '#f1f5f9' }}>
      <div className="container mx-auto px-2 lg:px-4">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 px-4 lg:px-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Our Work - <span style={{ color: '#ef4444' }}>Case Studies</span>
              </h2>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all w-fit">
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="flex items-center gap-3 lg:gap-4 px-1">
            {/* Left Navigation Button */}
            <button
              onClick={handlePrevious}
              className="flex-shrink-0 p-3 rounded-full border border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-muted-foreground hover:text-primary"
              aria-label="Previous case studies"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Case Studies Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 overflow-hidden px-2 lg:px-4">
              {visibleStudies.map((study, index) => {
                const cardIndex = startIndex + index
                const isHovered = hoveredIndex === cardIndex
                return (
                  <div
                    key={cardIndex}
                    onMouseEnter={() => setHoveredIndex(cardIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn h-full cursor-pointer"
                  >
                    {/* Front - Image View */}
                    {!isHovered && (
                      <div className="flex flex-col h-full">
                        {/* Image Container */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-200 flex-shrink-0">
                          <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-7 flex flex-col justify-between flex-grow">
                          <h3 className="text-lg font-bold text-foreground leading-snug">{study.title}</h3>
                          <button className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors w-fit mt-4">
                            VIEW CASE
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Back - Details View */}
                    {isHovered && (
                      <div className="bg-white p-6 flex flex-col justify-between h-full overflow-y-auto">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-primary mb-3 leading-snug">{study.title}</h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.description}</p>

                        {/* Specs */}
                        <div className="space-y-2 border-t border-border/30 pt-4">
                          {Object.entries(study.specs).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">{key}</span>
                              <span className="text-xs font-semibold text-foreground">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={handleNext}
              className="flex-shrink-0 p-3 rounded-full border border-border/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-muted-foreground hover:text-primary"
              aria-label="Next case studies"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
