import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faSlack } from "@fortawesome/free-brands-svg-icons";

const StatsSection = () => {
  const stats = [
    {
      icon: faCalendar,
      count: "25+",
      suffix: "+",
      label: "YEARS IN BUSINESS",
    },
    {
      icon: faUser,
      count: "45+",
      suffix: "+",
      label: "DESIGNERS AND ENGINEERS",
    },
    {
      icon: faGlobe,
      count: "3",
      suffix: "+",
      label: "STRATEGIC LOCATIONS",
    },
    {
      icon: faSlack, // Using Slack icon as replacement for slideshare
      count: "200+",
      suffix: "=",
      label: "YEARS COMBINED EXPERIENCE",
    },
    {
      icon: faUsers,
      count: "100",
      suffix: "%",
      label: "CUSTOMER SATISFACTION",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeInLeft">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                <div className="flex items-center justify-center h-16 mb-2">
                  <FontAwesomeIcon icon={stat.icon} className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-bold mb-3 text-[#FE0000] hover:text-[#FF1111]">
                  {stat.count}
                  <span className="text-primary">{stat.suffix}</span>
                </h2>
                <div className="h-0.5 w-full m-3 bg-white mb-3"></div>
                <h5 className="text-sm font-medium tracking-wider py-2">
                  {stat.label}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
