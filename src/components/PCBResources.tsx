import React from 'react';

const PCBResources = () => {
  return (
    <div className="container mx-auto px-4">
      {/* What is PCB Section */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">What is a PCB?</h2>
          <p className="text-justify mb-6">
            A PCB or Printed Circuit Board is an interconnect device that physically supports and electrically connects different components in an electronic circuit.
            PCBs are made by combining sheets of non-conductive material like fibreglass, composite epoxy etc. called as the substrate, coated with a layer of conductive material like copper or aluminium.
          </p>
        </div>
      </section>

      {/* PCB Inside Section */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">PCB - What is inside?</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-justify">
                In its most basic form, the Printed Circuit Board or PCB, is made up of an insulating and non-conductive layer called the "Substrate" which is coated with a conductive layer of Copper.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://d1yetprhniwywz.cloudfront.net/images/pcb-resources/PCB.png"
                alt="PCB Design Services"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PCB Types Grid */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">PCB Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* PCB Types Card */}
            <div className="border rounded-lg shadow-lg bg-white">
              <div className="bg-blue-700 text-white p-4">
                <h3 className="text-xl font-bold">PCB Types</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="hover:text-blue-600">
                    <a href="#Single-sided PCB">Single-sided PCB</a>
                  </li>
                  <li className="hover:text-blue-600">
                    <a href="#Double-sided PCB">Double-sided PCB</a>
                  </li>
                  {/* Add more PCB types */}
                </ul>
              </div>
            </div>

            {/* Technology Card */}
            <div className="border rounded-lg shadow-lg bg-white">
              <div className="bg-blue-700 text-white p-4">
                <h3 className="text-xl font-bold">PCB Technology</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="hover:text-blue-600">
                    <a href="#Mounting Technology">Surface Mounting Technology</a>
                  </li>
                  <li className="hover:text-blue-600">
                    <a href="#Through Hole Technology">Through Hole Technology</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Add more category cards similarly */}
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default PCBResources;