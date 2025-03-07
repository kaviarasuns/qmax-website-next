import Image from "next/image";

const ServiceSection = () => {
  const services = [
    {
      title: "Embedded Systems",
      icon: "https://d1yetprhniwywz.cloudfront.net/img/icons/embedded.png",
      description:
        "Design and development of Embedded Hardware, Firmware and Application Software.",
      link: "embedded-design-services.html",
      iconAlt: "Embedded Hardware icon",
    },
    {
      title: "PCB Design",
      icon: "https://d1yetprhniwywz.cloudfront.net/img/icons/pcb.png",
      description:
        "High Quality PCB design services for Single to multi layered highly complex boards.",
      link: "pcb-design.html",
      iconAlt: "PCB Design Services",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="block group hover:no-underline"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 transition duration-300 hover:shadow-xl">
                <div className="flex justify-center mb-6">
                  <Image
                    height={500}
                    width={500}
                    src={service.icon}
                    alt={service.iconAlt}
                    className="w-16 cursor-pointer"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <span className="inline-block font-bold text-[#ec6a01] text-base hover:text-[#d95f01]">
                    Know more
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
