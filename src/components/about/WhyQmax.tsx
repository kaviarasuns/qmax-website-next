'use client';

import { Users, Zap, Rocket, Layers } from 'lucide-react';

export default function WhyQmax() {
  const reasons = [
    {
      icon: Users,
      title: 'Multi-disciplinary Team',
      description: 'Embedded systems experts, PCB designers, firmware engineers, and manufacturing specialists working in perfect harmony.',
    },
    {
      icon: Zap,
      title: 'Stringent Process',
      description: 'ISO-certified processes, rigorous quality checks, and industry best practices ensure reliability and compliance.',
    },
    {
      icon: Rocket,
      title: 'Faster Time-to-Market',
      description: 'Agile methodology and parallel workflows compress development cycles without compromising quality.',
    },
    {
      icon: Layers,
      title: 'End-to-End Engineering',
      description: 'From concept and design through manufacturing support and field support — we handle the entire lifecycle.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">
            <span className="text-black">Why</span>{' '}
            <span className="text-red-500">Qmax</span>
          </h2>
          {/* <div className="flex justify-center">
            <div className="h-1 w-12 bg-red-500"></div>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-red-500/50 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-red-500/20 w-12 h-12 rounded-lg flex shrink-0 items-center justify-center group-hover:bg-red-500/30 transition-colors">
                    <IconComponent className="text-red-500" size={24} />
                  </div>
                  <h3 className="text-2xl text-black">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
