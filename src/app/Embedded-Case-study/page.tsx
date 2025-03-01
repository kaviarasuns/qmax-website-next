import CaseStudyCard from "@/components/CaseStudyCard";
import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "Security System Controller",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Security_System_Controller.jpg",
    link: "case-studies/Security-System-Controller.html",
    category: "development",
  },
  {
    id: 2,
    title: "Structural Health Monitoring System",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Aerospace_Structural_Health_Monitoring_System.jpg",
    link: "case-studies/fpga-based-health-monitoring-system.html",
    category: "development",
  },
  {
    id: 3,
    title: "Control system with POE Switch",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Control_system_with_POE_Switch_and_RTOS.jpg",
    link: "case-studies/Control-system-with-POE-Switch-and-RTOS.html",
    category: "development",
  },
  {
    id: 4,
    title: "Lithium Titanate Power Bank",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Lithium_Titanate_Power_Bank.jpg",
    link: "case-studies/Lithium-Titanate-Power-Bank.html",
    category: "development",
  },
  {
    id: 5,
    title: "OBD 2 Device with LoRa and BLE",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/OBD_2_Device_with_LoRa_and_BLE.jpg",
    link: "case-studies/OBD-2-Device-with-LoRa-and-BLE.html",
    category: "development",
  },
  {
    id: 6,
    title: "BLE tag with Wireless Charging",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/BLE_tag_with_Wireless_Charging.png",
    link: "case-studies/BLE-tag-with-Wireless-Charging.html",
    category: "development",
  },
  {
    id: 7,
    title: "IOT Module with Wi-Fi BLE ZigBee",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Module_with_Wi-Fi_BLE_ZigBee.jpg",
    link: "case-studies/IOT-Module-with-Wi-Fi-BLE-ZigBee.html",
    category: "mobile",
  },
  {
    id: 8,
    title: "IOT Micro Gateway",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Micro_Gateway.jpg",
    link: "case-studies/IOT-micro-gateway.html",
    category: "design",
  },
  {
    id: 9,
    title: "Kneeling and Levelling System",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Kneeling_and_Levelling_System.png",
    link: "case-studies/kneeling_system.html",
    category: "development",
  },
  {
    id: 10,
    title: "Precision Filtration Control System",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Precision_Filtration_Control_System.jpg",
    link: "case-studies/Precision-Filtration-Control-System.html",
    category: "development",
  },
  {
    id: 11,
    title: "Power Measurement System",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Polyphase_Power_Measurement_System.jpg",
    link: "case-studies/polyphase-power_measurement.html",
    category: "development",
  },
  {
    id: 12,
    title: "IOT Connectivity Dongle - BLE ZigBee",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Connectivity_Dongle_BLE_ZigBee.jpg",
    link: "case-studies/IOT-connectivity-dongle-BLE-ZIGBEE.html",
    category: "development",
  },
  {
    id: 13,
    title: "IOT Power Measurement Unit",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Power_Measurement_Unit.jpg",
    link: "case-studies/IOT-Power-Measurement-Unit.html",
    category: "development",
  },
  {
    id: 14,
    title: "IOT Gateway",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Gateway.jpg",
    link: "case-studies/iot-gateway.html",
    category: "development",
  },
  {
    id: 15,
    title: "Wearable Biosensor",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Wearable_Biosensor.jpg",
    link: "case-studies/Wearable-Biosensor.html",
    category: "development",
  },
  {
    id: 16,
    title: "Smart OBD Charging Station",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Smart_OBD_Charging_Station.jpg",
    link: "case-studies/Smart-OBD-Charging-Station.html",
    category: "development",
  },
];

const CaseStudyGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
