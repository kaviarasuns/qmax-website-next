'use client';

import { Cpu, Zap, Cog, Code } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      icon: Cpu,
      title: 'Embedded Systems Design',
      description: 'Custom firmware development and hardware-software integration for IoT, industrial, and consumer applications.',
    },
    {
      icon: Zap,
      title: 'PCB Design Services',
      description: 'Schematic design, layout optimization, and manufacturing support for single-layer to multi-layer PCBs.',
    },
    {
      icon: Cog,
      title: 'Hardware Design',
      description: 'End-to-end design including component selection, thermal management, and reliability engineering.',
    },
    {
      icon: Code,
      title: 'Software & Firmware Development',
      description: 'Real-time embedded software, drivers, and bootloaders for microcontrollers and digital signal processors.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What 
            <span className="text-red-500">We Do</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            We provide comprehensive electronics engineering and R&D services across embedded systems, PCB design, hardware development, and firmware creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border-l-4 border-red-500 hover:shadow-lg transition-shadow group"
              >
                <div className="bg-red-500/15 w-12 h-12 rounded-lg flex items-center justify-center mb-5 group-hover:bg-red-500/25 transition-colors">
                  <IconComponent className="text-red-500" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-extrabold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold transition-colors">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
