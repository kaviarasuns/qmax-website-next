'use client';

import { Zap, CheckCircle, Handshake, Users, Heart, Star } from 'lucide-react';

export default function OurValues() {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously pushing boundaries with cutting-edge technology and creative solutions.',
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'Delivering impeccable products through rigorous testing and quality assurance.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and strong ethical principles in all dealings.',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'Building strong partnerships with clients and internal teams for mutual success.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Prioritizing client needs and delivering solutions that exceed expectations.',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Striving for perfection in every project, process, and interaction.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-2">Our <span className="text-red-500">Values</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="bg-red-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-5 group-hover:bg-red-500/30 transition-colors">
                  <IconComponent className="text-red-500" size={28} />
                </div>
                <h3 className="text-2xl text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
