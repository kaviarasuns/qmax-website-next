const industries = [
  {
    id: "industrial-electronics",
    label: "Industrial\nElectronics",
    image: "/industries-we-serve/industrial-controller.jpg",
  },
  {
    id: "communication-systems",
    label: "Communication\nSystems",
    image: "/industries-we-serve/rf-industry.jpg",
  },
  {
    id: "high-performance-computing",
    label: "High Performance\nComputing",
    image: "/industries-we-serve/data-centers.jpg",
  },
  {
    id: "medical-electronics",
    label: "Medical\nElectronics",
    image: "/industries-we-serve/medical-industries.jpg",
  },
  {
    id: "automotive-electronics",
    label: "Automotive\nElectronics",
    image: "/industries-we-serve/motor-controller.jpg",
  },
];

export function IndustriesWeServeV3() {
  return (
    <section className="bg-white py-10">
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
            className="relative flex-1 min-w-[160px] h-[340px] md:h-[400px] overflow-hidden"
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
                <p
                  key={i}
                  className="text-white text-sm font-semibold leading-snug"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
