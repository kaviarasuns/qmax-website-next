import React from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import PCBCaseStudyCard from "@/components/PCBCaseStudyCard";

const embeddedCaseStudies = [
  { id: 1, title: "Security System Controller", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Security_System_Controller.jpg", link: "case-studies/Security-System-Controller.html", category: "development" },
  { id: 2, title: "Structural Health Monitoring System", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Aerospace_Structural_Health_Monitoring_System.jpg", link: "case-studies/fpga-based-health-monitoring-system.html", category: "development" },
  { id: 3, title: "Control system with POE Switch", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Control_system_with_POE_Switch_and_RTOS.jpg", link: "case-studies/Control-system-with-POE-Switch-and-RTOS.html", category: "development" },
  { id: 4, title: "Lithium Titanate Power Bank", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Lithium_Titanate_Power_Bank.jpg", link: "case-studies/Lithium-Titanate-Power-Bank.html", category: "development" },
  { id: 5, title: "OBD 2 Device with LoRa and BLE", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/OBD_2_Device_with_LoRa_and_BLE.jpg", link: "case-studies/OBD-2-Device-with-LoRa-and-BLE.html", category: "development" },
  { id: 6, title: "BLE tag with Wireless Charging", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/BLE_tag_with_Wireless_Charging.png", link: "case-studies/BLE-tag-with-Wireless-Charging.html", category: "development" },
  { id: 7, title: "IOT Module with Wi-Fi BLE ZigBee", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Module_with_Wi-Fi_BLE_ZigBee.jpg", link: "case-studies/IOT-Module-with-Wi-Fi-BLE-ZigBee.html", category: "mobile" },
  { id: 8, title: "IOT Micro Gateway", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Micro_Gateway.jpg", link: "case-studies/IOT-micro-gateway.html", category: "design" },
  { id: 9, title: "Kneeling and Levelling System", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Kneeling_and_Levelling_System.png", link: "case-studies/kneeling_system.html", category: "development" },
  { id: 10, title: "Precision Filtration Control System", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Precision_Filtration_Control_System.jpg", link: "case-studies/Precision-Filtration-Control-System.html", category: "development" },
  { id: 11, title: "Power Measurement System", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Polyphase_Power_Measurement_System.jpg", link: "case-studies/polyphase-power_measurement.html", category: "development" },
  { id: 12, title: "IOT Connectivity Dongle - BLE ZigBee", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Connectivity_Dongle_BLE_ZigBee.jpg", link: "case-studies/IOT-connectivity-dongle-BLE-ZIGBEE.html", category: "development" },
  { id: 13, title: "IOT Power Measurement Unit", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Power_Measurement_Unit.jpg", link: "case-studies/IOT-Power-Measurement-Unit.html", category: "development" },
  { id: 14, title: "IOT Gateway", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Gateway.jpg", link: "case-studies/iot-gateway.html", category: "development" },
  { id: 15, title: "Wearable Biosensor", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Wearable_Biosensor.jpg", link: "case-studies/Wearable-Biosensor.html", category: "development" },
  { id: 16, title: "Smart OBD Charging Station", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/Smart_OBD_Charging_Station.jpg", link: "case-studies/Smart-OBD-Charging-Station.html", category: "development" }
];

const pcbCaseStudies = [
  { id: 1, title: "Industrial Controller", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Industrial-Control-2.png", link: "case-studies/Industrial-Controller.html", category: "development" },
  { id: 2, title: "Aerospace PCB", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Aerospace-PCB.png", link: "case-studies/Aerospace-PCB.html", category: "development" },
  { id: 3, title: "Automotive OBD", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-OBD.png", link: "case-studies/Automotive-OBD.html", category: "development" },
  { id: 4, title: "Security Controller", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Security-Controller.png", link: "case-studies/Security-Controller.html", category: "development" },
  { id: 5, title: "Automotive HID PCB", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-HID-PCB.png", link: "case-studies/Automotive-HID-PCB.html", category: "development" },
  { id: 6, title: "Networking Device", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Networking-Device-2.png", link: "case-studies/Networking-Device.html", category: "development" },
  { id: 7, title: "Networking Switch", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Networking-Device.png", link: "case-studies/Networking-Switch.html", category: "development" },
  { id: 8, title: "Blade NIC Server", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Blade-NIC-Server.png", link: "case-studies/Blade-NIC-Server.html", category: "development" },
  { id: 9, title: "ATE - PCB", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/ATE-a.png", link: "case-studies/ATE-PCB.html", category: "development" },
  { id: 10, title: "IOT Gateway", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/IOT-Gateway.png", link: "case-studies/IOT-Gateway.html", category: "development" },
  { id: 11, title: "Automotive Control", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-Control.png", link: "case-studies/Automotive-Control.html", category: "development" },
  { id: 12, title: "Automotive Keypad Interface", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-Keypad-Interface.png", link: "case-studies/Automotive-Keypad-Interface.html", category: "development" },
  { id: 13, title: "Medical Electronics", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Medical.png", link: "case-studies/Medical-Electronics.html", category: "development" },
  { id: 14, title: "Video Processor", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Video-Processor.png", link: "case-studies/Video-Processor.html", category: "development" },
  { id: 15, title: "Set Top Box", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/STB-a.png", link: "case-studies/Set-Top-Box.html", category: "development" },
  { id: 16, title: "Wi-Fi AP", image: "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Wi-Fi-AP.png", link: "case-studies/Wi-Fi-AP.html", category: "development" }
];

const mechanicalCaseStudies = [
  { id: 1, title: "Manpack Communication Equipment", image: "https://images.pexels.com/photos/1592261/pexels-photo-1592261.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/mechanical-industrial-design-services/mechanical-design", category: "mechanical" },
  { id: 2, title: "Satellite Antenna Stabilizer Housing", image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/mechanical-industrial-design-services/mechanical-design", category: "mechanical" },
  { id: 3, title: "Medical Foot Switch Mechanism", image: "https://images.pexels.com/photos/5726833/pexels-photo-5726833.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/mechanical-industrial-design-services/mechanical-design", category: "mechanical" },
  { id: 4, title: "Handheld OBD2 Enclosure", image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800", link: "/mechanical-industrial-design-services/mechanical-design", category: "mechanical" }
];

const industrialCaseStudies = [
  { id: 1, title: "Handheld Industrial Controller", image: "/industrial_design_case_studies/product_1.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial" },
  { id: 2, title: "Medical Diagnostic System", image: "/industrial_design_case_studies/product_2.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial" },
  { id: 3, title: "Security Hub Enclosure", image: "/industrial_design_case_studies/product_3.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial" },
  { id: 4, title: "Military Communication Unit", image: "/industrial_design_case_studies/product_4.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial" },
  { id: 5, title: "Smart Device Product Concept", image: "/industrial_design_case_studies/product_5.png", link: "/mechanical-industrial-design-services/industrial-design", category: "industrial" }
];

export default function CaseStudiesPage() {
  return (
    <section className="relative overflow-hidden pt-24 pb-24 bg-[#f8f8f6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(243,49,23,0.08),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.82))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 border-b border-zinc-300/70 pb-6 text-center md:text-left">
          <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.38em] text-[#F33117]">
            Complete Portfolio
          </span>
          <h1 className="text-4xl font-light tracking-tight text-zinc-950 md:text-5xl lg:text-6xl mb-4">
            All Case Studies.
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl">
            Explore our comprehensive portfolio of successful projects across embedded systems, PCB design, mechanical, and industrial capabilities.
          </p>
        </div>

        {/* Embedded Section */}
        <div className="mb-20">
          <div className="mb-8 border-b border-zinc-200 pb-4">
            <h2 className="text-2xl font-bold text-zinc-900">Embedded Systems</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {embeddedCaseStudies.map((study) => (
              <CaseStudyCard key={`estudy-${study.id}`} {...study} />
            ))}
          </div>
        </div>

        {/* PCB Section */}
        <div className="mb-20">
          <div className="mb-8 border-b border-zinc-200 pb-4">
            <h2 className="text-2xl font-bold text-zinc-900">PCB Design</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {pcbCaseStudies.map((study) => (
              <PCBCaseStudyCard key={`pstudy-${study.id}`} {...study} />
            ))}
          </div>
        </div>

        {/* Mechanical Section */}
        <div className="mb-20">
          <div className="mb-8 border-b border-zinc-200 pb-4">
            <h2 className="text-2xl font-bold text-zinc-900">Mechanical Design</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {mechanicalCaseStudies.map((study) => (
              <CaseStudyCard key={`mstudy-${study.id}`} {...study} />
            ))}
          </div>
        </div>

        {/* Industrial Section */}
        <div className="mb-10">
          <div className="mb-8 border-b border-zinc-200 pb-4">
            <h2 className="text-2xl font-bold text-zinc-900">Industrial Design</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {industrialCaseStudies.map((study) => (
              <CaseStudyCard key={`istudy-${study.id}`} {...study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
