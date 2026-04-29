const industries = [
  {
    id: "industrial-electronics",
    label: "Industrial\nElectronics",
    image: "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/oil_refineries.png",
  },
  {
    id: "communication-systems",
    label: "Communication\nSystems",
    image: "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/communication_systems.png",
  },
  {
    id: "high-performance-computing",
    label: "High Performance\nComputing",
    image: "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/large_data_center.jpeg",
  },
  {
    id: "medical-electronics",
    label: "Medical\nElectronics",
    image: "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/medical_electronics.jpeg",
  },
  {
    id: "automotive-electronics",
    label: "Automotive\nElectronics",
    image: "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/automative_electronics.jpeg",
  },
];

export function IndustriesWeServeV3() {
  return (
    <section className="bg-white pt-24 pb-10 h-full flex flex-col justify-center">
      {/* Heading */}
      <div className="text-center mb-6 px-4">
        <h2 className="text-3xl md:text-4xl font-light tracking-wide">
          <span className="text-black">Industries </span>
          <span className="text-red-500">We Serve</span>
        </h2>
      </div>

      {/* Card strip */}
      <div className="flex w-full overflow-x-auto md:overflow-visible">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="relative flex-1 min-w-[160px] h-[380px] md:h-[460px] overflow-hidden"
          >
            {/* Background image */}
            <img
              src={industry.image}
              alt={industry.label.replace("\n", " ")}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 p-4">
              {industry.label.split("\n").map((line, i) => (
                <h1
                  key={i}
                  className="text-white text-2xl md:text-3xl"
                >
                  {line}
                </h1>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
