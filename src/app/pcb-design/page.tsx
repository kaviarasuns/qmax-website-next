import React from "react";

const PCBDesignSection = () => {
  const servicesProvided = [
    "Schematic capture",
    "Library Creation",
    "Layout Design",
    "Components Selection",
    "Design Verification",
    "SI/PI and Thermal Analysis",
    "EMI/EMC Analysis",
    "Compliance engineering",
    "3D modelling and Mechanical Analysis",
  ];

  const capabilities = [
    "High speed Digital.",
    "Analog and Mixed Signal.",
    "Ultra-high density Boards.",
    "RF PCBs.",
    "High Current/Frequency Power Supply designs.",
    "Ultra-low EMI designs.",
    "High layer count designs.",
    "Blind Vias, Buried Vias, Via in Pad, Laser Micro Vias.",
    "High Frequency PCBs.",
    "Flex and Rigid-Flex Designs.",
    "High density SMT designs - BGA, Micro BGA, PCI, PCIE, CPCI.",
    "PCB Layer management",
    "Signal integrity and impedance control.",
    "Rigid and Flexible antenna designs.",
    "PCB Designs for space, military, medical and commercial applications.",
    "Comprehensive Professional fabrication documents.",
  ];

  return (
    <section id="PCB" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="wow fadeInLeft animated">
            <img
              src="https://d1yetprhniwywz.cloudfront.net/img/services/PCB-Design.png"
              alt="PCB Design Services"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="wow fadeInRight animated">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                Qmax Systems has over 25 years of experience in designing PCBs.
                We have worked across different domains for Top OEMs. With our
                in-depth understanding of the materials and manufacturing
                process, we can provide you with "First Time Right" Designs
                significantly reducing the time to market. Our engineers, who
                are experts in DFx, ensure that the design is successful, and
                you have a high quality PCB.
              </p>
              <p className="text-gray-700">
                We provide schematic entry and PCB layout services or just
                layout design from the schematics you already have. Qmax has
                worked on high density and highly complex PCBs for the most
                demanding applications. We follow Industry/IPC Standards and
                design guidelines and have a well-defined process in place. We
                provide Signal, power and thermal Integrity analysis as a value
                added service. Our engineers can easily find out hidden issues
                in designs and fix them even before we go into fabrication.
              </p>
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="mt-12">
          <div className="bg-gray-800 text-white p-4 rounded-t-lg">
            <h3 className="text-xl font-semibold">Our Capabilities</h3>
          </div>
          <div className="border rounded-b-lg p-6 bg-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Services Provided */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Services Provided
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {servicesProvided.map((service, index) => (
                    <li key={index} className="text-gray-700">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capabilities */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Our capabilities include
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {capabilities.map((capability, index) => (
                    <li key={index} className="text-gray-700">
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCBDesignSection;
