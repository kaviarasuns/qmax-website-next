import ConceptToManufacturingMobile from "./ConceptToManufacturingMobile";

const ConceptToManufacturing = () => {
  const steps = [
    {
      title: "CONCEPT",
      bgColor: "bg-[#ff5151]",
      items: [
        "Concept Validation",
        "Minimum Viable Product Specification",
        "System Architecture",
      ],
    },
    {
      title: "HARDWARE",
      bgColor: "bg-[#01cc99]",
      items: [
        "HW High Level Design",
        "HW Low Level Design",
        "Component Engineering",
        "Board Bring-up",
        "Testing",
      ],
    },
    {
      title: "PCB",
      bgColor: "bg-[#58a7b5]",
      items: [
        "PCB Layout Design",
        "Signal/Power/Thermal Integrity Analysis",
        "PCB Fabrication",
        "PCB Assembly",
      ],
    },
    {
      title: "SOFTWARE",
      bgColor: "bg-[#ab7a23]",
      items: [
        "Firmware Development",
        "Driver & BSP Development",
        "Application Development-Linux/RTOS/Android/Web",
        "Cloud Application Development",
      ],
    },
    {
      title: "ID",
      bgColor: "bg-[#8b81d2]",
      items: [
        "Enclosure Design",
        "Mechanical Design",
        "Proto Enclosure Fabrication",
      ],
    },
    {
      title: "NPI",
      bgColor: "bg-[#d89f3a]",
      items: [
        "Compliance Certification, FCC/UL/CE",
        "Vendor Audits",
        "Test Jig Development",
      ],
    },
    {
      title: "MANUFACTURING",
      bgColor: "bg-[#8bab43]",
      items: ["Manufacturing co-ordination", "Manufacturing Testing"],
    },
  ];

  return (
    <div className="relative">
      <ConceptToManufacturingMobile />
      <section
        className="hidden xl:block container mx-auto bg-[#f5f5f5] bg-opacity-80 bg-no-repeat px-10 py-4 h-[504px] text-center"
        style={{
          backgroundImage:
            "url('https://d1yetprhniwywz.cloudfront.net/img/simple1.jpg')",
        }}
      >
        <div className="py-4">
          <div className="container mx-auto animate-fadeIn">
            <div className="mt-8">
              <h1 className="text-4xl font-bold">
                Concept <span className="text-primary">To</span> Manufacturing
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1 mt-14 mr-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <button
                className={`${step.bgColor} w-[141px] h-[100px] text-white font-semibold hover:opacity-90 transition-opacity`}
              >
                {step.title}
              </button>

              <div className="hidden group-hover:block absolute z-10 w-60 bg-white shadow-lg">
                <ul className="py-2">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ConceptToManufacturing;
