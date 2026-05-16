import Image from "next/image";

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
    <section className="flex min-h-screen items-center justify-center bg-white px-3 py-16 sm:px-4 sm:py-20 lg:px-6 lg:py-24">
      <div className="mx-auto w-full max-w-[1260px]">
        <div className="mb-8 text-center md:mb-9">
          <h2 className="text-center text-4xl font-light tracking-normal text-zinc-950 md:text-5xl lg:text-6xl">
            Industries <span className="text-brand-red">We Serve</span>
          </h2>
        </div>

        <div className="flex h-[clamp(420px,68vh,590px)] overflow-x-auto overflow-y-hidden shadow-[0_22px_70px_rgba(15,23,42,0.16)] lg:grid lg:grid-cols-5 lg:overflow-visible">
          {industries.map((industry, index) => {
            return (
              <article
                key={industry.id}
                className="group relative h-full min-w-[260px] overflow-hidden bg-zinc-950 sm:min-w-[320px] lg:min-w-0"
              >
                <Image
                  src={industry.image}
                  alt={industry.label.replace("\n", " ")}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.56)_78%,rgba(0,0,0,0.9)_100%)]" />
                <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-white/45 transition duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-6 xl:p-7">
                  <h3 className="text-2xl font-light leading-[1.12] tracking-wide text-white sm:text-3xl lg:text-[1.35rem] xl:text-3xl">
                    {industry.label.split("\n").map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
