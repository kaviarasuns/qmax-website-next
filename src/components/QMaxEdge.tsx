import { IoMdTrophy } from "react-icons/io";

const QmaxEdge = () => {
  const features = [
    [
      {
        title: "25+yrs of hands on experience",
        icon: "fa-trophy",
      },
      {
        title: "Fast & Cost Effective Solutions",
        icon: "fa-trophy",
      },
    ],
    [
      {
        title: "FPGA Design Expertise",
        icon: "fa-trophy",
      },
      {
        title: "Cross Domain Expertise",
        icon: "fa-trophy",
      },
    ],
    [
      {
        title: "Concept to Manufacturing",
        icon: "fa-trophy",
      },
      {
        title: "24x7 Design Support",
        icon: "fa-trophy",
      },
    ],
  ];

  return (
    <>
      <div className="mt-10 text-center animate-fadeIn">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">
            The <span className="text-primary">Qmax</span> Edge
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-12 animate-fadeInUp">
                {column.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex flex-row bg-white rounded-lg p-6 transition-transform hover:scale-105"
                  >
                    <div className="flex flex-row gap-6 items-center">
                      <div className="w-16 h-16 bg-[#FE0000] hover:bg-[#FF1111] flex items-center justify-center rounded-lg">
                      <IoMdTrophy className="text-white text-3xl"/>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default QmaxEdge;
