"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can you design from concept or do you need a complete schematic?",
    answer: "We can work at any stage. If you have a concept or block diagram, our team can help develop the schematic architecture. If you have a complete schematic, we'll review it thoroughly before layout. We also offer schematic design services for teams that need end-to-end support from concept to production files."
  },
  {
    question: "What PCB design tools do you use?",
    answer: "Our team is proficient in Altium Designer, Cadence Allegro, Mentor PADS, and OrCAD. We work with your preferred tool or can recommend the best option for your project. For SI/PI analysis, we use tools like HyperLynx, ANSYS SIwave, and Keysight ADS."
  },
  {
    question: "What is the typical timeline for a PCB design project?",
    answer: "Timeline depends on complexity. A simple 4-layer design might take 2-3 weeks, while a complex 12+ layer high-speed design could take 6-8 weeks. We provide detailed timeline estimates after our initial review and can accommodate expedited schedules when needed."
  },
  {
    question: "Do you sign NDAs and how do you protect our IP?",
    answer: "Absolutely. We sign NDAs as standard practice before any technical discussions. All project files are stored on encrypted servers with strict access controls. Your design files, schematics, and documentation remain your property throughout and after the engagement."
  },
  {
    question: "Do you support manufacturing and assembly?",
    answer: "Yes. We provide complete manufacturing support including fab-ready Gerber packages, assembly drawings, and bill of materials. We have relationships with qualified fabricators and can help you select the right manufacturing partner. We also offer design-for-manufacturing (DFM) review to catch issues before production."
  },
  {
    question: "What industries do you serve?",
    answer: "We work across industrial automation, IoT/connected devices, medical devices, telecommunications, automotive electronics, consumer products, and aerospace/defense. Our multi-domain experience means we bring relevant insights from adjacent industries to every project."
  }
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#f6f9fc' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Frequently Asked <span style={{ color: '#ef4444' }}>Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our PCB design services and process.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base lg:text-lg font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
