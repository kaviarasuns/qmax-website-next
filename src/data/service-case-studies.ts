export interface ServiceCaseStudy {
  title: string;
  image: string;
  link: string;
  category?: string;
  summary?: string;
}

export const hardwareCaseStudies: ServiceCaseStudy[] = [
  {
    title: "Industrial Controller",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Industrial-Control-2.png",
    link: "/case-studies/Industrial-Controller",
    category: "hardware",
    summary:
      "Production-grade industrial control platform engineered for dependable operation in demanding environments.",
  },
  {
    title: "Aerospace PCB",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Aerospace-PCB.png",
    link: "/case-studies/Aerospace-PCB",
    category: "hardware",
    summary:
      "High-reliability aerospace electronics program executed around strict validation and performance constraints.",
  },
  {
    title: "OBD 2 Device with LoRa and BLE",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/OBD_2_Device_with_LoRa_and_BLE.jpg",
    link: "/case-studies/OBD-2-Device-with-LoRa-and-BLE",
    category: "hardware",
    summary:
      "Portable automotive hardware with LoRa, BLE, battery management, and robust field-ready integration.",
  },
];

export const pcbCaseStudies: ServiceCaseStudy[] = [
  {
    title: "Industrial Controller",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Industrial-Control-2.png",
    link: "/case-studies/Industrial-Controller",
    category: "pcb",
    summary:
      "Industrial control PCB developed for reliable operation, manufacturability, and long-term field stability.",
  },
  {
    title: "Aerospace PCB",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Aerospace-PCB.png",
    link: "/case-studies/Aerospace-PCB",
    category: "pcb",
    summary:
      "High-reliability board program optimized for demanding aerospace signal integrity and validation requirements.",
  },
  {
    title: "Automotive OBD",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/pcb/Automotive-OBD.png",
    link: "/case-studies/Automotive-OBD",
    category: "pcb",
    summary:
      "Compact automotive diagnostics PCB designed around durability, compliance, and fast system integration.",
  },
];

export const embeddedCaseStudies: ServiceCaseStudy[] = [
  {
    title: "IOT Module with Wi-Fi BLE ZigBee",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Module_with_Wi-Fi_BLE_ZigBee.jpg",
    link: "/case-studies/IOT-Module-with-Wi-Fi-BLE-ZigBee",
    category: "embedded",
    summary:
      "Multi-radio Qualcomm-based IoT module combining Wi-Fi, BLE, and ZigBee for connected embedded products.",
  },
  {
    title: "IOT Micro Gateway",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/IOT_Micro_Gateway.jpg",
    link: "/case-studies/IOT-micro-gateway",
    category: "embedded",
    summary:
      "Compact embedded gateway bridging BLE and ZigBee devices to the internet through integrated Wi-Fi.",
  },
  {
    title: "Power Measurement System",
    image:
      "https://d1yetprhniwywz.cloudfront.net/images/case-study/Polyphase_Power_Measurement_System.jpg",
    link: "/case-studies/polyphase-power_measurement",
    category: "embedded",
    summary:
      "Real-time embedded power metering platform with precision sensing and industrial-grade processing.",
  },
];

export const mechanicalCaseStudies: ServiceCaseStudy[] = [
  {
    title: "Manpack Communication Equipment",
    image:
      "https://images.pexels.com/photos/1592261/pexels-photo-1592261.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/mechanical-industrial-design-services/mechanical-design",
    category: "mechanical",
    summary:
      "Rugged mechanical design work tailored for field-ready communication equipment and complex assemblies.",
  },
  {
    title: "Satellite Antenna Stabilizer Housing",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/mechanical-industrial-design-services/mechanical-design",
    category: "mechanical",
    summary:
      "Precision enclosure and structural package developed for controlled motion and reliable outdoor use.",
  },
  {
    title: "Medical Foot Switch Mechanism",
    image:
      "https://images.pexels.com/photos/5726833/pexels-photo-5726833.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/mechanical-industrial-design-services/mechanical-design",
    category: "mechanical",
    summary:
      "Mechanism and housing design for medical equipment where ergonomics and manufacturability both matter.",
  },
];

export const industrialDesignCaseStudies: ServiceCaseStudy[] = [
  {
    title: "Industrial Automation",
    image: "/industrial_design_case_studies/product_1.png",
    link: "/case-studies/Industrial-Automation",
    category: "Industrial Design",
    summary:
      "Industrial product concept translated into a manufacturable enclosure and user-facing design language.",
  },
  {
    title: "Medical Design",
    image: "/industrial_design_case_studies/product_2.png",
    link: "/case-studies/Medical-Design",
    category: "Industrial Design",
    summary:
      "Medical-device-oriented industrial design balancing ergonomics, clarity, and production practicality.",
  },
  {
    title: "Security Systems",
    image: "/industrial_design_case_studies/product_3.png",
    link: "/case-studies/Security-Systems",
    category: "Industrial Design",
    summary:
      "Security-focused product housing crafted around functional hardware constraints and clear visual hierarchy.",
  },
];

export const mechanicalIndustrialCaseStudies: ServiceCaseStudy[] = [
  mechanicalCaseStudies[0],
  mechanicalCaseStudies[1],
  industrialDesignCaseStudies[0],
];
