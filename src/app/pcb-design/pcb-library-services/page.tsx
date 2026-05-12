import type { Metadata } from "next";
import Image from "next/image";
import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { pcbCaseStudies } from "@/data/service-case-studies";

export const metadata: Metadata = {
  title: "PCB Library Services | Qmax",
  description: "Professional PCB Library Services by Qmax Systems.",
};

export default function PCBLibraryServicesPage() {
  return (
    <main className="bg-zinc-100 text-zinc-900 min-h-screen">
      <section className="relative overflow-hidden pt-14 pb-12 border-b border-zinc-200 lg:pt-20 lg:pb-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Full-width Image Container */}
          <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden border border-zinc-200 group">
            <Image
              src="/pcb-design/pcb_design_main.png"
              alt="PCB Library Services - Qmax Systems"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-5xl">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-6">
                PCB DESIGN SERVICES
              </span>
              <h1 className="text-4xl font-light leading-[1.1] text-zinc-950 md:text-6xl lg:text-7xl tracking-tight">
                PCB Library
                <br className="hidden md:block" />
                Services.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="mt-12 p-12 bg-white rounded-2xl border border-zinc-200 shadow-sm text-center">
          <h2 className="text-2xl font-medium text-zinc-600">
            Content Yet To be added
          </h2>
          <p className="mt-4 text-zinc-500">
            We are currently preparing detailed information about our PCB
            Library Services. Please check back soon.
          </p>
        </div>
      </div>

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
      />
    </main>
  );
}
