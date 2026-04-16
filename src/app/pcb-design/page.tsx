"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  Cpu,
  Radio,
  Zap,
  Activity,
  LineChart,
  Library,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { CaseStudiesSection } from "./case-studies-section";

export default function PCBDesignPage() {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.3,
  //     },
  //   },
  // };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "PCB Design" },
  ];

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/pcb-design/pcb_design_main.png"
          alt="PCB Design: A Multi-Physics Engineering Discipline"
          fill
          priority
          className="object-cover scale-105"
        />
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
              PCB Design: <br />
              <span className="text-red-600">A Multi-Physics</span> <br />
              Engineering Discipline
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed text-justify">
              Where complex conceptual requirements meet market-ready hardware through disciplined engineering.
            </p>
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
        >
          <span className="text-xs uppercase tracking-widest mb-2 text-white">Explore Our Approach</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
            >
              <div className="bg-gray-50 rounded-[2.5rem] border border-gray-100 p-8 md:p-12 h-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  Engineering <br />
                  <span className="text-red-600">Beyond Connectivity</span>
                </h2>
                <div className="w-20 h-1.5 bg-red-600 mb-8" />
                <p className="text-xl text-gray-800 font-medium leading-relaxed mb-6">
                  At Qmax Systems, we view PCB Design Services not merely as an interconnect task, but as a complex multi-physics engineering challenge.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  In modern electronics, the physical layout is a critical component of the circuit itself. Our engineering team specializes in first-time-right PCB design.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 right-0 p-8">
                  <Cpu className="w-12 h-12 text-gray-100 group-hover:text-red-100 transition-colors" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8 relative z-10">
                  By prioritizing early risk identification and disciplined design methodology, we deliver production-ready PCB designs that bridge complex conceptual requirements and market-ready hardware. Whether your project involves a 30-layer HDI board or a high-power converter, our designs are optimized for reliability, compliance, and manufacturability from day one.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wider">Signal & Power Integrity</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wider">EMI & Thermal Management</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 p-8 md:p-12 rounded-[2.5rem] text-white shadow-xl shadow-red-100">
                <p className="text-lg leading-relaxed text-justify">
                  Our approach integrates Signal Integrity (SI), Power Integrity (PI), Electromagnetic Interference (EMI), and thermal management into a single, cohesive workflow. This ensures that high-speed signals maintain timing and quality while the Power Distribution Network (PDN) provides stable, noise-free energy to high-performance silicon. Failure to account for these variables often results in costly re-spins and delayed time-to-market.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialisations Section */}
      <section className="py-24 bg-gray-50/50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our PCB Design Specialisations</h2>
            <p className="text-lg text-gray-600 max-w-4xl leading-relaxed text-justify">
              Qmax Systems provides specialized PCB design engineering across seven practice areas. Each discipline is staffed by engineers with experience, supported by well-documented component libraries built over three decades, and governed by defined processes and checklists at every design stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "High-Speed Digital PCB Design",
                description: "Modern high-speed digital designs — operating at multi-gigabit data rates — impose strict constraints on PCB trace geometry, layer stack-up, via topology, and return path continuity. Our engineers apply rigorous signal integrity discipline to DDR4/5 memory interfaces, PCIe Gen 4/5, USB 3.x, Ethernet (1G to 100G), FPGA I/O, and SoC-level designs. Controlled differential impedance, length matching, crosstalk mitigation, and via stub management are standard elements of every high-speed layout we deliver.",
                href: "/pcb-design/high-speed-digital-pcb-design",
                icon: <Cpu className="w-6 h-6" />
              },
              {
                title: "RF and Microwave PCB Design",
                description: "RF and microwave PCB layout requires precision substrate material selection, microstrip and stripline impedance control, low-loss routing, and careful RF-to-digital isolation strategy. Qmax engineers are experienced in designs spanning sub-GHz ISM band through Ka-band frequencies, including antenna feed networks, LNA stages, PA matching networks, and mixed RF/digital architectures on single and multi-layer substrates including PTFE-based materials.",
                href: "/pcb-design/rf-and-microwave-pcb-design",
                icon: <Radio className="w-6 h-6" />
              },
              {
                title: "Power Electronics PCB Design",
                description: "Power electronics PCB layout demands precise current path management, thermal dissipation planning, and EMI containment. Our engineers are experienced in DC-DC converters, AC-DC power supplies, motor drive circuits, and high-density power modules. We apply copper weight optimization, current-carrying capacity analysis, thermal via arrays, and snubber placement discipline to ensure reliable operation under full thermal and electrical load.",
                href: "/pcb-design/power-electorinics",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Analog and Mixed-Signal PCB Design",
                description: "Analog and mixed-signal PCB layout is among the most demanding disciplines in electronics engineering. Noise coupling, ground plane partitioning, supply decoupling placement, shielding, and the careful physical separation of high-gain analog signal paths from switching noise sources require detailed engineering judgment at every placement and routing decision. Qmax engineers apply established analog layout principles to precision instrumentation, sensor interfaces, ADC/DAC signal chains, and mixed-signal SoC designs.",
                href: "/pcb-design/analog-and-mixed-signal",
                icon: <Activity className="w-6 h-6" />
              },
              {
                title: "SI, PI Analysis",
                description: "Pre- and post-layout SI/PI analysis allows design problems to be identified and corrected before a board is fabricated. Our engineers perform transmission line simulation, eye diagram analysis, IBIS-based driver/receiver modeling, power delivery network (PDN) impedance analysis, and decoupling capacitor optimization. SI/PI analysis is offered as a standalone service or as an integrated element of our PCB layout engagements.",
                href: "/pcb-design/si-pi-analysis",
                icon: <LineChart className="w-6 h-6" />
              },
              {
                title: "PCB Library Services",
                description: "A PCB design is only as reliable as its component library. Over three decades of active design work, Qmax has developed a verified, well-documented component library covering schematic symbols, PCB footprints, and 3D STEP models. Library parts are validated against manufacturer datasheets and IPC-7351 land pattern standards. Our library management process ensures that footprint accuracy is maintained as component revisions occur, reducing the risk of manufacturing errors caused by incorrect or outdated pad geometries.",
                href: "/pcb-design/pcb-library-services",
                icon: <Library className="w-6 h-6" />
              },
              {
                title: "PCB Design Review Services",
                description: "An independent PCB design review — performed by Qmax engineers against your existing layout — is an efficient, cost-effective way to identify signal integrity risks, DFM issues, thermal concerns, and standard violations before releasing to fabrication. Our review process follows a structured checklist covering layer stack-up, placement, routing, silkscreen, drill and fabrication notes, and documentation completeness. Review findings are delivered as a formal technical report with prioritized recommendations.",
                href: "/pcb-design/pcb-design-review-services",
                icon: <CheckCircle2 className="w-6 h-6" />
              }
            ].map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-red-100 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 group-hover:bg-red-600 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                    {spec.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">{spec.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-justify text-base italic group-hover:text-gray-900 transition-colors">
                    {spec.description}
                  </p>
                  <Link
                    href={spec.href}
                    className="inline-flex items-center text-red-600 font-bold tracking-tight hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Qmax Section */}
      <section style={{ background: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="py-16 flex flex-col gap-3 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#1a1a1a' }}>
              Why Engineering Teams Choose{" "}
              <span style={{ color: '#e44332' }}>Qmax Systems</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#666666' }}>
              Every decision we make is guided by engineering rigor and decades of experience building reliable hardware.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-20 relative z-10" style={{ backgroundColor: '#faf8f5' }}>
            {/* Left Side - Video (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Video Container */}
                <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ aspectRatio: '4/3', backgroundColor: '#1a1a1a' }}>
                  <video
                    src="https://d1yetprhniwywz.cloudfront.net/inside_out_V2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Label Below */}
                <p className="text-sm mt-4" style={{ color: '#666666' }}>
                  See how our engineering process transforms concepts into production-ready designs
                </p>
              </div>
            </div>

            {/* Right Side - Stacked Sticky Sections */}
            <div className="lg:col-span-1 space-y-0">
              {[
                {
                  number: "01",
                  title: "Engineering Depth Over Surface-Level Design",
                  description: "Our engineers don't just route traces—they understand the physics. Every design decision considers signal behavior, power distribution, and thermal dynamics to eliminate guesswork."
                },
                {
                  number: "02",
                  title: "First-Time-Right Philosophy",
                  description: "We invest heavily in upfront analysis and simulation. This disciplined approach means fewer respins, faster time-to-market, and significantly lower development costs."
                },
                {
                  number: "03",
                  title: "Schematic Review as Standard Practice",
                  description: "Before any layout work begins, we thoroughly review your schematic for potential issues—power sequencing, signal routing challenges, and component selection concerns."
                },
                {
                  number: "04",
                  title: "Clear Communication Throughout",
                  description: "Weekly progress updates, design review milestones, and direct access to your assigned engineer. No black boxes, no surprises—just transparent collaboration."
                },
                {
                  number: "05",
                  title: "Strict IP Protection",
                  description: "Your designs stay yours. NDA as standard, secure file handling, and strict access controls ensure your intellectual property remains protected at every stage."
                },
                {
                  number: "06",
                  title: "Global Compliance Expertise",
                  description: "Design for CE, FCC, UL, and other certifications from day one. We build compliance into the architecture, not as an afterthought."
                },
                {
                  number: "07",
                  title: "Comprehensive Component Libraries",
                  description: "30,000+ verified footprints and symbols built to IPC standards. Every component we use has been validated for manufacturing accuracy."
                },
                {
                  number: "08",
                  title: "Fabrication Partner Network",
                  description: "Direct relationships with qualified PCB fabricators worldwide. We optimize your design for your chosen manufacturer and volume requirements."
                },
                {
                  number: "09",
                  title: "Multi-Domain Systems Experience",
                  description: "From IoT sensors to industrial controls to medical devices—we've designed across industries, bringing cross-domain insights to every project."
                }
              ].map((reason) => (
                <div key={reason.number} className="relative">
                  {/* Sticky Header */}
                  <div
                    className="sticky z-20 pt-6 pb-4 border-b overflow-hidden"
                    style={{
                      top: '96px',
                      backgroundColor: '#faf8f5',
                      borderColor: 'rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Number Badge */}
                      <div
                        className="flex-shrink-0 rounded-full px-3 py-1 text-sm font-bold"
                        style={{
                          backgroundColor: 'rgba(228, 67, 50, 0.15)',
                          color: '#e44332'
                        }}
                      >
                        {reason.number}
                      </div>
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-semibold flex-1 leading-tight" style={{ color: '#1a1a1a' }}>
                        {reason.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-4 pb-16 px-0">
                    <div
                      className="bg-white rounded-xl p-5 shadow-sm"
                      style={{
                        color: '#666666'
                      }}
                    >
                      <p className="text-base leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Decorative Section */}
      <section className="bg-gray-900 py-20 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-dash-sweep" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your next high-performance project?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-justify">
            Join world-class engineering teams who trust Qmax for their most complex PCB design challenges.
          </p>
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-transform hover:scale-105 active:scale-95 shadow-lg">
            Consult Our Engineering Team
          </button>
        </div>
      </section>
    </main>
  );
}

