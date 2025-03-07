"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import PCBTypeCards from "@/components/pcb-type-cards";

export default function PCBDesingnResources() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              What is a PCB?
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              A PCB or Printed Circuit Board is an interconnect device that
              physically supports and electrically connects different components
              in an electronic circuit. PCBs are made by combining sheets of
              non-conductive material like fibreglass, composite epoxy etc.
              called as the substrate, coated with a layer of conductive
              material like copper or aluminium. Before the advent of PCBs,
              circuits were constructed through point-to-point wiring. These
              circuits experienced recurring failures due to loose contacts,
              ageing of wires and required intensive labour. PCBs on the other
              hand offer a sturdy base for the components to be mounted and the
              interconnections are made through immovable lines of copper called
              as &quot;Traces&quot;. They are the go-to option for mass
              production and they&apos;ve allowed electronic devices to be
              smaller &amp; more compact. PCBs are used in most of the
              electronic devices manufactured today.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              PCB - What is inside?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  In its most basic form, the Printed Circuit Board or PCB, is
                  made up of an insulating and non-conductive layer called the
                  &quot;Substrate&quot; which is coated with a conductive layer
                  of Copper. Copper is used as the conductive material in most
                  cases given its high conductivity. The substrate may be coated
                  with copper on either one or both sides. The solder mask,
                  coated on top of the copper layer, prevents the formation of
                  solder bridges between closely spaced solder pads. The solder
                  mask is usually green in colour, though other colours like
                  red, blue, black, etc., are also available. To identify
                  components, test points and symbols on the board during
                  assembly, a legend called the &quot;Silkscreen&quot; is
                  printed on top of the solder mask. The silk screen is usually
                  white in colour though black colour is used in case the Solder
                  mask is of a lighter colour. This layer makes it easy for
                  component placement through Surface-mounting Technology or
                  Through-hole Technology.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="PCB Structure"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Printed Circuit Boards (PCBs) are one of the most important parts of
            any electronic device. Each industry has its own specific
            requirements including different levels of operating temperature,
            vibration, corrosion resistance, current rating, electrical noise
            and heat dissipation. With years of experience in a wide variety of
            industries, our engineers have crafted this page putting together
            details from every aspect of PCB technology. These resources are
            your One Stop window to PCB fundamentals.
          </p>
        </div>
      </section>

      {/* PCB Categories Section */}
      <section className="py-12 bg-gray-50 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <PCBTypeCards />
        </div>
      </section>

      {/* PCB Types Section */}
      <section
        id="pcbtypes"
        className="py-12 md:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              PCB Types
            </h2>
            <p
              id="Single-sided PCB"
              className="text-gray-700 text-base md:text-lg"
            >
              PCBs are designed to suit different needs and purposes. They are
              predominantly classified based on the number of copper layers and
              can be further classified depending on the type of substrate used.
            </p>
          </div>

          {/* Single-sided PCB */}
          <div id="Single-sided-PCB" className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Single-sided PCB
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Single-sided PCBs, also known as single layer PCBs, are the
                  simplest type of PCBs. Made up of a single layer of base
                  material, they are coated on only one side with a layer of
                  conducting material. The solder mask is applied to the copper
                  followed by the silk screen. Single layer PCBs are easy to
                  design and manufacture, making them the ideal choice for low
                  cost and bulk manufacturing applications.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Single Layer PCB"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Double-sided PCB */}
          <div id="Double-sided-PCB" className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Double-sided PCB
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  The double-sided PCBs or the double-layer PCBs have conducting
                  material on both sides of the base material. This allows
                  components to be placed on both sides of the board using
                  Through Hole or Surface Mount Technology. Double sided PCBs
                  have more surface area facilitating placement of more
                  components.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Double Layer PCB"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Multi-layer PCB */}
          <div id="Multi-layer-PCB" className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Multi-layer PCB
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  The multi-layer PCB can have 3 to multiple layers of
                  conducting material (copper sheets) with insulating
                  &quot;prepreg&quot; layers in between. Prepregs keep the inner
                  core material attached to the copper, so they can be bonded
                  into a single structure using heat and pressure. A typical 4
                  layer PCB will be stacked like this:
                </p>
                <p className="font-semibold text-gray-800">
                  Bottom copper foil - Prepreg sheets - Inner core layer -
                  Prepreg sheets - Top copper foil
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Complex PCBs used in defence, aerospace, avionics and
                  telecommunication applications can have over 50 layers.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Multi Layer PCB"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* HDI PCB */}
          <div id="HDI-PCB" className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              HDI PCB (High Density Interconnect)
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              An HDI PCB has a higher wiring density per unit area compared to a
              typical PCB. They contain blind, buried vias and micro vias up to
              .006&quot; or less in diameter. The high wiring density of the
              board helps to increase the number of electrical connections and
              reduce the size and weight of a device.
            </p>
          </div>

          {/* Metal Back PCB */}
          <div id="Metal-Back-PCB" className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Metal Back PCB
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Metal backed PCBs have metal substrates instead of FR4 or other
              non-conducting materials. There is a layer of ceramic insulation
              between the Metal Substrate and Copper Traces. These are used
              where higher levels of heat dissipation is required. Metals like
              aluminum, copper or brass with a thickness of 0.4mm to 10mm are
              used as substrates. Most importantly, these boards are
              cost-effective, light-weight, strong and durable, making them
              ideal for any application. The cooling properties of the
              metal-backed boards allow the device to be driven harder.
            </p>
          </div>
        </div>
      </section>

      {/* PCB Technology Section */}
      <section
        id="PCB-Technology"
        className="py-12 md:py-16 bg-gray-50 px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              PCB Technology
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              There are two main technologies used for mounting components on
              PCBs. One is &quot;Through-hole technology&quot; and the other is
              &quot;Surface-mount technology&quot;.
            </p>
          </div>

          {/* Surface-mounted technology */}
          <div id="Mounting-Technology" className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Surface-mounted technology (SMT)
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              In Surface-Mount technology, Components are soldered directly onto
              the board without drilling any holes. This method allows more
              components to be placed resulting in a smaller and lighter PCB.
              Surface mount technology is cost-effective, more efficient and
              much faster than Through-hole technology. Most of the industries
              today prefer SMT for these reasons.
            </p>
          </div>

          {/* Through-hole technology */}
          <div id="Through-Hole-Technology" className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              Through-hole technology (THT)
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              In the Through-Hole method, where components with leads are
              inserted into holes drilled in the PCB. The leads are then
              soldered onto the copper pads. THT offers unique benefits like
              stronger bonding than SMT, easier component removal for testing
              etc. Before the invention of surface Mount Technology in the 80s,
              THT was the only technology used for the assembly process.
              Components used in THT are larger than the ones used in SMT PCBs
              and hence are mostly suitable for low density applications. This
              has lead to the decrease in usage of THT technology over the
              years.
            </p>
          </div>
        </div>
      </section>

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Back to top"
        >
          <ChevronDown className="w-6 h-6 transform rotate-180" />
        </button>
      </div>
    </main>
  );
}
