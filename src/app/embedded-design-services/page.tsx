import Image from "next/image";
import React from "react";

const EmbeddedSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div className="wow fadeInLeft">
            <Image
              src="https://d1yetprhniwywz.cloudfront.net/img/services/Embedded-Systems.jpg"
              alt="Embedded Hardware"
              className="w-full rounded-lg shadow-lg"
              height={500}
              width={500}
            />
          </div>

          <div className="wow fadeInRight">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                Qmax systems provides high quality embedded systems design and
                development services. For over 25 years, Qmax has helped
                customers convert their ideas into products. We combine the
                Multi-domain experience of our engineers to create robust
                solutions that will exceed your expectations. Qmax can develop
                robust electronic solutions on multiple platforms. We have a
                solid understanding of fundamental electronic engineering and
                can provide you the perfect design solution for your
                requirement.
              </p>
              <p className="text-gray-700">
                Our expertise in application engineering allows us to think a
                step ahead and foresee challenges that may arise on the field.
                We take care of the complete product development process right
                from conceptualization to prototyping. You can come with an idea
                and take back a complete product ready to Market.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-800 px-6 py-4">
            <h3 className="text-xl font-semibold text-white">
              Our Capabilities
            </h3>
          </div>

          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full table-fixed divide-y divide-gray-200">
                <tbody>
                  {/* Section 1 Header */}
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Services Provided
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Domain Expertise
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Hardware Expertise
                    </th>
                  </tr>
                  {/* Section 1 Content */}
                  <tr>
                    <td className="px-6 py-4 align-top">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Hardware Design</li>
                        <li>Design Verification</li>
                        <li>Schematic Capture</li>
                        <li>PCB Design</li>
                        <li>Firmware Development</li>
                        <li>Application Development</li>
                        <li>Driver and BSP development</li>
                        <li>Design for manufacturing</li>
                        <li>Enclosure Design</li>
                        <li>Prototype Building and Testing</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Automotive</li>
                        <li>Medical</li>
                        <li>Aerospace</li>
                        <li>Industrial</li>
                        <li>Wireless</li>
                        <li>Power Systems</li>
                        <li>Electric Vehicles</li>
                        <li>Renewable Energy</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <ul className="list-disc list-inside space-y-2">
                        <li>High speed Digital</li>
                        <li>BLE 5.0, Zigbee, WiFi chipsets</li>
                        <li>Electronics for IOT</li>
                        <li>Low Power / Battery Operated Devices</li>
                        <li>Analog and Mixed Signal Designs</li>
                        <li>High Voltage and High Current Drivers</li>
                        <li>Motor Drivers</li>
                        <li>High Frequency Designs</li>
                        <li>RF Designs</li>
                        <li>Multiple Interface Expertise</li>
                        <li>Memory modules</li>
                      </ul>
                    </td>
                  </tr>

                  {/* Section 2 Header */}
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Microprocessors
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Software Expertise
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Embedded Operating Systems
                    </th>
                  </tr>
                  {/* Section 2 Content */}
                  <tr>
                    <td className="px-6 py-4 align-top">
                      <ul className="list-disc list-inside space-y-2">
                        <li>x86</li>
                        <li>Freescale</li>
                        <li>ARM</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Real Time Operating Systems (RTOS)</li>
                        <li>Proprietary</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Linux</li>
                      </ul>
                    </td>
                  </tr>

                  {/* Section 3 Header */}
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Custom BSP and Driver Development
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Custom Driver Development
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
                      Application & Kernel Development
                    </th>
                  </tr>
                  {/* Section 3 Content */}
                  <tr>
                    <td className="px-6 py-4 align-top">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Embedded Linux</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Network & Communications</li>
                        <li>Storage Drivers</li>
                        <li>Host Bus Drivers </li>
                        <li>Device Drivers</li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Embedded Linux</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmbeddedSection;
