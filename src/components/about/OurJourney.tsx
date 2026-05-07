'use client';

export default function OurJourney() {
  const timeline = [
    {
      year: '1997',
      title: 'Founded',
      description: 'Qmax Systems established in San Jose, California with a vision to deliver world-class electronics engineering services.',
    },
    {
      year: '2003',
      title: 'Expanded Globally',
      description: 'Opened development center in Chennai, India to scale operations and tap into global talent.',
    },
    {
      year: '2010',
      title: 'Milestone Achievement',
      description: 'Crossed 100+ successful projects across diverse industries including IoT, industrial, and medical devices.',
    },
    {
      year: '2015',
      title: 'Full Service Offering',
      description: 'Expanded capabilities to provide end-to-end product engineering from concept through manufacturing support.',
    },
    {
      year: '2020',
      title: 'Headquarters Relocated',
      description: 'Moved US headquarters to Austin, Texas — the tech capital of America.',
    },
    {
      year: '2024',
      title: 'Global Leadership',
      description: 'Serving 100+ global clients across 15+ industries with proven expertise and track record.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
            <span className="text-black">Our</span>{' '}
            <span className="text-red-500">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline vertical line - centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-red-500 to-gray-300"></div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-8 md:gap-12">
                {/* Left column - alternates between content and empty */}
                <div className="flex-1">
                  {idx % 2 === 0 ? (
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                      <div className="text-2xl md:text-3xl font-extrabold text-red-500 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg md:text-xl font-extrabold text-black mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ) : null}
                </div>

                {/* Center - timeline dot */}
                <div className="flex justify-center items-start pt-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Right column - alternates between empty and content */}
                <div className="flex-1">
                  {idx % 2 === 1 ? (
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                      <div className="text-2xl md:text-3xl font-extrabold text-red-500 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg md:text-xl font-extrabold text-black mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
