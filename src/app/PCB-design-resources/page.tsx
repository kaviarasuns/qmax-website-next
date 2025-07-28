"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import PCBTypeCards from "@/components/pcb-type-cards";

export default function PCBDesingnResources() {
  return (
    <>
      {/* Custom Navbar for PCB Design Resources */}
      <nav className="w-full bg-gray-200 py-4 px-4 flex items-center justify-start">
        <h1 className="text-2xl md:text-3xl h-10 font-bold lg:ml-64">
          <span className="text-brand-red hover:text-brand-red/90 transition-colors">
            PCB Design
          </span>{" "}
          <span className="text-black">Resources</span>
        </h1>
      </nav>
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
                physically supports and electrically connects different
                components in an electronic circuit. PCBs are made by combining
                sheets of non-conductive material like fibreglass, composite
                epoxy etc. called as the substrate, coated with a layer of
                conductive material like copper or aluminium. Before the advent
                of PCBs, circuits were constructed through point-to-point
                wiring. These circuits experienced recurring failures due to
                loose contacts, ageing of wires and required intensive labour.
                PCBs on the other hand offer a sturdy base for the components to
                be mounted and the interconnections are made through immovable
                lines of copper called as &quot;Traces&quot;. They are the go-to
                option for mass production and they&apos;ve allowed electronic
                devices to be smaller &amp; more compact. PCBs are used in most
                of the electronic devices manufactured today.
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
                    &quot;Substrate&quot; which is coated with a conductive
                    layer of Copper. Copper is used as the conductive material
                    in most cases given its high conductivity. The substrate may
                    be coated with copper on either one or both sides. The
                    solder mask, coated on top of the copper layer, prevents the
                    formation of solder bridges between closely spaced solder
                    pads. The solder mask is usually green in colour, though
                    other colours like red, blue, black, etc., are also
                    available. To identify components, test points and symbols
                    on the board during assembly, a legend called the
                    &quot;Silkscreen&quot; is printed on top of the solder mask.
                    The silk screen is usually white in colour though black
                    colour is used in case the Solder mask is of a lighter
                    colour. This layer makes it easy for component placement
                    through Surface-mounting Technology or Through-hole
                    Technology.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="https://d1yetprhniwywz.cloudfront.net/images/pcb-resources/PCB.png"
                    alt="PCB Structure"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Printed Circuit Boards (PCBs) are one of the most important parts
              of any electronic device. Each industry has its own specific
              requirements including different levels of operating temperature,
              vibration, corrosion resistance, current rating, electrical noise
              and heat dissipation. With years of experience in a wide variety
              of industries, our engineers have crafted this page putting
              together details from every aspect of PCB technology. These
              resources are your One Stop window to PCB fundamentals.
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
                predominantly classified based on the number of copper layers
                and can be further classified depending on the type of substrate
                used.
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
                    conducting material. The solder mask is applied to the
                    copper followed by the silk screen. Single layer PCBs are
                    easy to design and manufacture, making them the ideal choice
                    for low cost and bulk manufacturing applications.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="https://d1yetprhniwywz.cloudfront.net/images/pcb-resources/PCB.png"
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
                    The double-sided PCBs or the double-layer PCBs have
                    conducting material on both sides of the base material. This
                    allows components to be placed on both sides of the board
                    using Through Hole or Surface Mount Technology. Double sided
                    PCBs have more surface area facilitating placement of more
                    components.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="https://d1yetprhniwywz.cloudfront.net/images/pcb-resources/Double%20Layer%20PCB.png"
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
                    &quot;prepreg&quot; layers in between. Prepregs keep the
                    inner core material attached to the copper, so they can be
                    bonded into a single structure using heat and pressure. A
                    typical 4 layer PCB will be stacked like this:
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
                    src="https://d1yetprhniwywz.cloudfront.net/images/pcb-resources/Multi%20Layer%20PCB.png"
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
                An HDI PCB has a higher wiring density per unit area compared to
                a typical PCB. They contain blind, buried vias and micro vias up
                to .006&quot; or less in diameter. The high wiring density of
                the board helps to increase the number of electrical connections
                and reduce the size and weight of a device.
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

            {/* Flex and Rigid-Flex PCBs */}
            <div id="Flex-PCBs" className="space-y-4">
              {/* Single-sided Flex PCB */}
              <h4 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
                Single-sided Flex PCB
              </h4>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                A single-sided flex PCB consists of a flexible polyimide film
                for the substrate, a copper sheet to etch the circuit pattern, a
                bonding adhesive, and a polyimide coverlay for insulation. The
                Flexible PCBs or Flex PCBs cost more to design and manufacture
                than other PCBs. In larger devices rigid PCBs are used, and when
                the device is compact (camera, mobile phone, etc.), the PCB must
                be flexible enough to fold and fit into the device, requiring a
                flex PCB. Flex PCBs can replace rigid PCBs by conforming to any
                shape.
              </p>
              {/* Double-sided Flex PCB */}
              <h4 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
                Double-sided Flex PCB
              </h4>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                A double-sided flex circuit has two conductive layers, one on
                each side of the substrate. In these boards, the traces are
                accessible from both the top and bottom, and the layers are
                connected through &lsquo;plated through-holes&rsquo; (PTH).
                Double-sided flex PCBs can be used in ground & power plane
                applications, shielding applications or dense surface-mount
                assembly.
              </p>
              {/* Multi-layer Flex PCB */}
              <h4 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
                Multi-layer Flex PCB
              </h4>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                In multi-layer flexible circuits, there are three or more
                conductive layers interconnected with &lsquo;plated-through
                holes&rsquo; (PTH). Each layer consists of a flexible polyimide
                film for the substrate, a copper sheet to etch the circuit
                pattern, a bonding adhesive. These layers are stacked in
                sequence, with a polyimide coverlay for insulation in between
                them, to create a multi-layer flexible PCB. Multi-layer flex
                circuits can have up to 8 conductive layers.
              </p>
              {/* Semi-Flex PCBs */}
              <h4 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
                Semi-Flex PCBs
              </h4>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Semi-flexible circuits are different from flexible circuits.
                They are made from a portion of rigid FR-4 PCBs, where they
                undergo &lsquo;thinning&rsquo; to make the board bendable. Since
                they are made from FR-4 material, semi-flex PCBs are a cheaper
                alternative to Rigid-Flex circuits. The flexibility feature of
                this rigid PCB simplifies handling during assembly and
                installation.
              </p>
              {/* Rigid-Flex PCBs */}
              <h4 className="text-lg md:text-xl font-semibold text-gray-800 mt-4">
                Rigid-Flex
              </h4>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Rigid-flex PCBs are a combination of rigid and flexible PCBs.
                Layers of flex PCBs combined with one or more rigid PCBs are
                called rigid-flex boards. Rigid-flex PCBs have a lower part
                count since the wiring is combined into a single board, making
                them the optimal choice for compact and small devices. They are
                small, weight and thickness.
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
                PCBs. One is &quot;Through-hole technology&quot; and the other
                is &quot;Surface-mount technology&quot;.
              </p>
            </div>

            {/* Surface-mounted technology */}
            <div id="Mounting-Technology" className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Surface-mounted technology (SMT)
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                In Surface-Mount technology, Components are soldered directly
                onto the board without drilling any holes. This method allows
                more components to be placed resulting in a smaller and lighter
                PCB. Surface mount technology is cost-effective, more efficient
                and much faster than Through-hole technology. Most of the
                industries today prefer SMT for these reasons.
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
                etc. Before the invention of surface Mount Technology in the
                80s, THT was the only technology used for the assembly process.
                Components used in THT are larger than the ones used in SMT PCBs
                and hence are mostly suitable for low density applications. This
                has lead to the decrease in usage of THT technology over the
                years.
              </p>
            </div>

            {/* PCB Design, Materials, Surface Finishes, and Plating */}
            <div id="pcb-design-materials-finishes" className="space-y-8 mt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Design
              </h2>
              {/* Vias Section */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Blind and Buried Vias
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Vias are the copper-plated holes that allow the layers of the
                board to connect to each other. A blind via is a hole that
                connects the outer layer to the inner layers. The hole
                isn&rsquo;t drilled completely through the board, but up to a
                certain layer inside the board making the outer layer and inner
                layer interconnected. A buried via is a hole drilled to connect
                one or more inner layers, they are not visible from the outside.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Microvia
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Microvia are minute holes drilled into the board using laser
                technology to create electrical connections between the layers
                in High Density Interconnect (HDI) PCBs. These microvia can be
                as small as 150 micrometres in diameter. The holes are plated
                with copper as in case of a regular VIA.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Via-in-Pad
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                When the via is placed in a copper pad, it is called a
                &lsquo;Via-in-pad&rsquo;. Via-in-pad allows the use of smaller
                components, reducing the size of the PCB. The via can be filled
                with conductive or non-conductive filling for soldering.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8">
                Materials
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                PCB materials are of immense importance because they provide
                insulation between copper layers, determine the performance of
                the board and suitability for an application. These materials
                are classified based on their properties.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                CEM-1
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                CEM-1 is a composite material made of woven glass fabric and
                cellulose paper, combined with epoxy resin. This material is
                used in single-sided PCBs for simple applications. It has high
                flexural strength, higher transition temperature than FR-4 as
                well as good mechanical and electrical properties.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                CEM-3
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                CEM-3 is developed based on FR-4. This material is milky-white
                in colour and mostly used in the manufacturing of double-layered
                and multi-layered PCBs. CEM-3 is a cheaper replacement for FR-4
                in the Asian market with production, application and growth rate
                higher than FR-4.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8">
                Surface Finishes
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Surface finish is the coating done on the copper pads. It is
                done to ensure the solderability of the board and to prevent
                oxidation and deterioration of the copper.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                ENIG (Electro-less Nickel Immersion Gold)
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                ENIG is a double-layer metallic coating, where the copper
                surface is coated with nickel and a thin layer of immersion gold
                above that to prevent oxidation. It is lead-free, has a longer
                shelf-life and can be used on critical surfaces making it one of
                the most popular finishes.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                HASL (Hot air solder levelling)
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                HASL is one of the most common surface finishes used in the
                industry. The PCB is immersed into molten tin/lead alloy after
                the solder mask is applied. The copper surface is covered with
                molten solder and the excess is removed by passing the PCB
                through hot-air knives. This process removes the unwanted solder
                by blowing hot air over the board.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Lead-free HASL
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                In lead-free HASL, a solder material like Tin-copper is used
                instead of lead. The Tin-Nickel solder is molten, and the board
                is immersed into it. Lead is toxic and harmful, which makes
                lead-free HASL preferred by most industries.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                OSP (Organic Surface Protection)
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                It is an organic surface finish to prevent oxidation of copper.
                OSP is a water-based finish made from organic preservatives to
                protect copper until assembly with a shelf life around 9 months
                given its organic structure. This coating is applied to the
                copper surface through a conveyorized process where the finish
                selectively bonds to the copper surface. It is non-toxic and
                completely environment-friendly when compared with other surface
                finishes. OSP is re-workable, cost-effective and maintains
                planarity.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Immersion Silver
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Immersion silver is a method of coating the exposed copper pads
                on the PCB with silver and OSP. The OSP prevents tarnishing of
                silver, extending the shelf life up to a year. The silver
                coating is preferred because it gives a flat coating making it
                easy to solder. Immersion silver is a very simple process
                suitable for fine traces.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Immersion Tin
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The copper pads in the PCB are coated with a layer of tin. The
                immersion tin forms a copper-tin inter-metallic joint. This
                coating provides a 6-month shelf-life to the board and gives a
                dense, uniform coating which makes it suitable for Surface
                mounting technology. Immersion tin is sometimes used as an
                alternative to lead-based surface finish for its sustainability.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                ENEPIG (Electroless Nickel Electroless Palladium Immersion Gold)
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Nickel is deposited over copper pads using electroless
                deposition method. It is then turn coated with layer of
                palladium. Palladium covers the nickel and prevents it from
                blackening. Palladium is coated with immersion gold providing
                good solder joint and gold wire bonding reliability. ENEPIG
                gives a shelf life for more than a year and is suitable for a
                wide range of assembly requirements.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Hard Gold
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Hard Gold is a layer of gold alloy with added metals to harden
                it for increased durability. An electrolytic process is used to
                apply this surface finish and is commonly applied to areas that
                should withstand repeated use. Hard Gold is suitable for contact
                switch, gold wire binding as well as conducting electric tests.
                It has a shelf life of up to 12 months.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Soft Bondable Gold
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Soft gold is the purest form of gold without any additional
                elements. The gold coating is 99.9% pure with a knoop hardness
                range of 60-85. An electrolytic process is followed to apply the
                soft gold finish. The finish is suitable for wire bonding
                operations as it produces a stronger joint.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8">
                Plating
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Plating is the process of depositing metal (copper) on the PCB
                surface through an electrochemical process.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Edge Plating
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Conductive material coated around the external edges of a PCB,
                covering all the layers, is called edge plating. Edge plating is
                used to connect copper traces or planes in between layers of the
                same board and these boards are used in applications like
                connectors that slide into metal casings. This type of plating
                is a solution to electromagnetic emissions radiating out of the
                edges of a backplane.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                Castellations
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Castellations are plated through holes that are located at the
                edge of printed circuit boards. They are half holes that are
                intended to create links between a module and a board or between
                two boards. There are different designs for castellated mounting
                holes such as half holes, holes with smaller half holes, and
                holes tangent to the board&rsquo;s edge.
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
    </>
  );
}
