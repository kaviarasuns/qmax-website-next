'use client';

import { Target, Lightbulb } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-red-500 shrink-0" size={28} />
              <h3 className="text-black">
                Our Mission
              </h3>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower innovators with reliable, high-performance electronic engineering services that turn bold ideas into market-ready products. We are committed to delivering exceptional quality, maintaining stringent timelines, and providing unparalleled technical expertise.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="text-red-500 shrink-0" size={28} />
              <h3 className="text-black">
                Our Vision
              </h3>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the most trusted global engineering partner for next-generation embedded and hardware product development. We aspire to lead the industry in innovation, quality, and customer satisfaction across all sectors and geographies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
