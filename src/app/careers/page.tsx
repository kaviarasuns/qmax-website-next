"use client";

import { useState } from "react";

const Careers = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const jobs = [
    {
      title: "Senior Embedded Hardware Engineer",
      description:
        "Qmax systems is looking for an experienced candidate to fill-in the position of Senior Embedded Hardware Engineer. The candidate will work on embedded systems and must have experience in designing hardware from start to finish.",
      responsibilities: [
        "Design architecture for embedded systems.",
        "Perform detailed design analysis.",
        "Realize system requirements as per requirement specification document.",
        "Ensure proper documentation of design specifications.",
        "Conduct Design reviews to ensure conformance to relevant design standards.",
        "Collaborate with other team members to finalize interfaces, protocols etc.",
        "Develop test hardware and procedures to validate systems functionality.",
        "Perform Prototype bring up and debugging.",
        "Perform functional testing / verification.",
        "Monitor and report progress of development to all stakeholders.",
      ],
      requirements: [
        "Proven experience in Analog and Digital and Mixed Signal circuit design.",
        "Strong Hardware troubleshooting skills.",
        "Experience in working with different microcontrollers.",
        "Thorough understanding of communications protocols - USB, I2C, UART, SPI, TCP.",
        "Experience in designing power supplies and power electronics is preferred.",
        "Experience in working on RF projects. Expertise in BLE, Wi-Fi, ZigBee, LoRa is preferred.",
        "Expertise in EMI mitigation techniques for electronic systems is preferred.",
        "Hands-on experience debugging using oscilloscopes, logic analyzers and multimeters.",
        "Hands-on experience in prototype bring-up, debugging and functional verification.",
        "Good at writing comprehensive technical design documentation.",
        "Good interpersonal and communication skills.",
      ],
      qualification: "M.E / M.Tech / B.E / B.Tech / Diploma- ECE, EEE",
      jobType: "Full Time-Regular",
      experience: "5+ Years",
      location: "Chennai, India",
      salary: "Open to Negotiation",
    },
    {
      title: "Senior Embedded Firmware Engineer",
      description:
        "Qmax systems is looking for an experienced candidate to fill-in the position of Senior Embedded Firmware Engineer. The candidate will work on firmware for embedded systems and must have experience in full cycle firmware development.",
      responsibilities: [
        "Design, develop, troubleshoot, debug, and maintain embedded firmware.",
        "Realize system requirements as per requirement specification document.",
        "Ensure proper documentation of design specifications.",
        "Conduct periodic code reviews and fix bugs.",
        "Develop test plan and procedures to validate systems functionality.",
        "Perform functional testing / verification.",
        "Monitor and report progress of development to all stakeholders.",
      ],
      requirements: [
        "Excellent expertise in C, C++, Linux.",
        "Experience in BSP and driver development.",
        "Strong Firmware troubleshooting skills.",
        "Experience in working with different microcontrollers.",
        "Experience in working with high speed embedded memory interfaces.",
        "Expertise in digital communications protocols such as USB, I2C, UART, SPI, TCP, UDP.",
        "Experience in Wireless protocols such as BLE, Wi-Fi, ZigBee, LoRa, Etc.",
        "Experience in using common development tools, environments, compilers, debugging software, build management software, source control tools, configuration management and issue tracking tools.",
        "Good at writing comprehensive technical design documentation.",
        "Good interpersonal and communication skills.",
      ],
      qualification: "B.E / B.Tech. - ECE, EEE",
      jobType: "Full Time-Regular",
      experience: "5+ Years",
      location: "Chennai, India",
      salary: "Open to Negotiation",
    },
    {
      title: "Embedded Hardware Engineer",
      description:
        "Qmax systems is looking for a suitable candidate to fill-in the position of Embedded Hardware Engineer. The candidate will work on developing hardware for embedded systems.",
      responsibilities: [
        "Design hardware architecture for embedded systems.",
        "Realize system requirements as per requirement specification document.",
        "Collaborate with other team members to finalize interfaces, protocols etc.",
        "Develop test hardware and procedures to validate system functionality.",
        "Perform Prototype bring up and debugging.",
        "Report progress of development to all stakeholders.",
      ],
      requirements: [
        "Sound knowledge of Circuit Theory, Electronic Circuits and Electronic Devices.",
        "Experience in working with microcontrollers.",
        "Good understanding of communications protocols - USB, I2C, UART, SPI, TCP.",
        "Good understanding power supplies and power electronics design.",
        "Experience in debugging using oscilloscope and multimeter.",
        "Experience in prototype bring-up, debugging and functional verification is preferred.",
        "Good at writing comprehensive technical design documentation.",
        "Good interpersonal and communication skills.",
      ],
      qualification: "B.E / B.Tech / Diploma - ECE, EEE",
      jobType: "Full Time-Regular",
      experience: "0-2 Years",
      location: "Chennai, India",
      salary: "Open to Negotiation",
    },
    {
      title: "Embedded Firmware Engineer",
      description:
        "Qmax systems is looking for a suitable candidate to fill-in the position of Embedded Firmware Engineer. The candidate will develop firmware for embedded systems.",
      responsibilities: [
        "Design, develop, troubleshoot, debug, and maintain embedded firmware.",
        "Realize system requirements as per requirement specification document.",
        "Conduct periodic code reviews and fix bugs.",
        "Develop test plan and procedures to validate firmware.",
        "Perform functional testing / verification.",
        "Report progress periodically to all stakeholders.",
      ],
      requirements: [
        "Sound Knowledge of C, C++ programming.",
        "Strong Firmware troubleshooting skills.",
        "Experience in developing firmware for any microcontrollers.",
        "Knowledge of digital communications protocols such as USB, I2C, UART, SPI is preferred.",
        "Experience in using common development tools, IDE, compilers & debuggers is preferred.",
        "Good at writing comprehensive technical design documentation.",
        "Good interpersonal and communication skills.",
      ],
      qualification: "B.E / B.Tech / Diploma - ECE, EEE",
      jobType: "Full Time-Regular",
      experience: "0-2 Years",
      location: "Chennai, India",
      salary: "Open to Negotiation",
    },
    {
      title: "PCB Designer",
      description:
        "Qmax Systems is looking for a suitable candidate for the position of PCB Designer. The candidate will design Multi-Layer PCBs for a wide variety of applications.",
      responsibilities: [
        "Design PCB layout in accordance with IPC and standard guidelines.",
        "Create PCB layer stack-up.",
        "Follow checklists and instructions to ensure error free design.",
        "Create and Manage component libraries.",
        "Generate Gerber and other manufacturing files.",
        "Ensure the designed PCBs are optimized for manufacturing and testing.",
      ],
      requirements: [
        "Sound knowledge of Circuit Theory, Electronic Circuits and Electronic Devices.",
        "Hands-on experience in designing PCBs using any CAD tool.",
        "Hands-on experience in Schematics Entry using any Schematics tool.",
        "Experience in designing Multilayer PCBs is preferred.",
        "Experience in designing RF and Power Supply PCBs is preferred.",
        "Understanding of PCB fabrication and assembly processes.",
      ],
      qualification: "B.E / B.Tech / Diploma - ECE, EEE",
      jobType: "Full Time-Regular",
      experience: "0-2 Years",
      location: "Chennai, India",
      salary: "Open to Negotiation",
    },
    {
      title: "Embedded Systems Intern",
      description:
        "Qmax systems is offering an Embedded Systems internship opportunity for engineering students pursuing bachelor's degree in ECE and EEE streams. The candidate will work on cutting edge technology and embedded systems.",
      responsibilities: [
        "Design and develop hardware and firmware for embedded systems.",
        "Perform Bring Up, Testing and Troubleshooting of Prototypes.",
        "Create Design Documents and Test reports.",
        "Report progress of development to supervisor.",
      ],
      requirements: [
        "Sound knowledge of Circuit Theory, Electronic Circuits and Electronic Devices.",
        "Strong Interest in Embedded Systems Design.",
        "Good analytical and problem-solving skills.",
        "Strong programming skills in C, C++, Linux is a plus.",
        "Good Understanding of Basic Electronic components and its working.",
        "Experience with microcontroller programming is preferred.",
        "Proficient in using Oscilloscope, Multimeter, Power Supplies and Soldering iron.",
      ],
      qualification: "B.E / B.Tech - ECE, EEE - Final Year",
      jobType: "Internship",
      experience: "0 Years",
      location: "Chennai, India",
      benefits: [
        "Stipend will be provided.",
        "Internship Certificate will be provided.",
        "Preference on employment opportunities with Qmax Systems after graduation.",
      ],
    },
    {
      title: "PCB Design Intern",
      description:
        "Qmax systems is offering a PCB Design internship opportunity for engineering students pursuing bachelor's degree in ECE and EEE streams. The candidate will work on designing PCBs for various applications.",
      responsibilities: [
        "Design PCB from Schematics provided by Hardware Team.",
        "Follow checklists and instructions to ensure error free design.",
        "Create and Manage component libraries.",
        "Generate Gerber and other manufacturing files.",
        "Ensure the designed PCBs are optimized for manufacturing and testing.",
      ],
      requirements: [
        "Sound knowledge of Circuit Theory, Electronic Circuits and Electronic Devices.",
        "Strong Interest in PCB Designing.",
        "Experience in designing electronic circuits is preferred.",
        "Solid understanding of properties of conductors and insulators.",
        "Understanding of Basic Electronic components and its packages is a plus.",
      ],
      qualification: "B.E / B.Tech - ECE, EEE - Final Year",
      jobType: "Internship",
      experience: "0 Years",
      location: "Chennai, India",
      benefits: [
        "Stipend will be provided.",
        "Internship Certificate will be provided.",
        "Preference on employment opportunities with Qmax Systems after graduation.",
      ],
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Current <span className="text-orange-500">Openings</span>
        </h2>
        <div className="flex justify-center mb-8">
          <a
            href="http://careers.qmaxsys.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Apply now
          </a>
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className={`w-full text-left px-6 py-4 text-xl font-semibold bg-gray-100 hover:bg-gray-200 transition-colors ${
                openAccordion === index ? "bg-gray-200" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {job.title}
            </button>

            {openAccordion === index && (
              <div className="p-6">
                <p className="mb-6">{job.description}</p>

                <h5 className="text-xl font-semibold text-gray-800 mb-4">
                  Job Description:
                </h5>
                <ul className="list-disc pl-6 mb-6">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>

                <h5 className="text-xl font-semibold text-gray-800 mb-4">
                  Required skills:
                </h5>
                <ul className="list-disc pl-6 mb-6">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Qualification:
                    </h5>
                    <p>{job.qualification}</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Job Type:
                    </h5>
                    <p>{job.jobType}</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Experience:
                    </h5>
                    <p>{job.experience}</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Location:
                    </h5>
                    <p>{job.location}</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      Salary:
                    </h5>
                    <p>{job.salary}</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href="http://careers.qmaxsys.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
