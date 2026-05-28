'use client';

export default function ImpactStats() {
  const stats = [
    {
      number: '25+',
      label: 'Years of Engineering Excellence',
    },
    {
      number: '500+',
      label: 'Projects Delivered',
    },
    {
      number: '100+',
      label: 'Global Clients',
    },
    {
      number: '2',
      label: 'Global Offices (USA & India)',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-red-500 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-red-500 mb-3">
                {stat.number}
              </div>
              <p className="text-lg font-medium text-center text-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
