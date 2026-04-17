"use client"

import CaseStudyCard from "@/components/CaseStudyCard"

const services = [
  {
    title: "Embedded Systems",
    summary: "Firmware development, microcontroller selection, and real-time systems optimization for reliable performance.",
    image: "/ott/image1.JPG",
    link: "/capabilities/embedded-systems"
  },
  {
    title: "Mechanical Design",
    summary: "Structural engineering, CAD modeling, and component integration for robust mechanical solutions.",
    image: "/ott/image2.JPG",
    link: "/capabilities/mechanical-design"
  },
  {
    title: "Industrial Design",
    summary: "Product aesthetics, user ergonomics, and form factor optimization for market-ready solutions.",
    image: "/ott/image3.JPG",
    link: "/capabilities/industrial-design"
  }
]

export function OtherCapabilitiesSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#f1f5f9' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Our other Engineering <span style={{ color: '#ef4444' }}>capabilities</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <CaseStudyCard
                key={index}
                title={service.title}
                image={service.image}
                link={service.link}
                summary={service.summary}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
