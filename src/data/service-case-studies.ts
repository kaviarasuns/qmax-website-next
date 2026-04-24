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
    image: "/case-studies/BLUECOLD/1.png",
    link: "/case-studies/Industrial-Controller",
    category: "hardware",
    summary:
      "Production-grade industrial control platform engineered for dependable operation in demanding environments.",
  },
  {
    title: "Aerospace PCB",
    image: "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.1.png",
    link: "/case-studies/Aerospace-PCB",
    category: "hardware",
    summary:
      "High-reliability aerospace electronics program executed around strict validation and performance constraints.",
  },
  {
    title: "OBD 2 Device with LoRa and BLE",
    image: "/case-studies/CHARA/1.png",
    link: "/case-studies/OBD-2-Device-with-LoRa-and-BLE",
    category: "hardware",
    summary:
      "Portable automotive hardware with LoRa, BLE, battery management, and robust field-ready integration.",
  },
];

export const pcbCaseStudies: ServiceCaseStudy[] = [
  {
    title: "Industrial Controller",
    image: "/ott/CHARA-top.svg",
    link: "/case-studies/portable-ev-charger-pcb",
    category: "development",
    summary:
      "Production-grade industrial control PCB developed for reliable operation in demanding field environments.",
  },
  {
    title: "Aerospace PCB",
    image: "/ott/TEK_OTT_REV1P0_BOT.svg",
    link: "/case-studies/aerospace-pcb",
    category: "development",
    summary:
      "High-reliability aerospace board program engineered around strict performance and validation constraints.",
  },
  {
    title: "Automotive OBD",
    image: "/ott/TEK_OTT_REV1P0_BRD_PR3.svg",
    link: "/case-studies/automotive-obd-pcb",
    category: "development",
    summary:
      "Compact automotive diagnostics PCB designed around durability, compliance, and fast system integration.",
  },
];

export const embeddedCaseStudies: ServiceCaseStudy[] = [
  {
    title: "Industrial Temperature Control System",
    image: "/case-studies/BLUECOLD/1.png",
    link: "/case-studies/industrial-temperature-control-system",
    category: "development",
    summary:
      "A powerful Edge controller device used in high security applications with multi-protocol sensors and reader inputs. The system is powered through POE+ and has options for power backup using an external power supply or battery. It can work as a stand alone device or can be cascaded to control multiple access points.",
  },
  {
    title: "Multi IO card for ATE",
    image: "/case-studies/CHARA/1.png",
    link: "/case-studies/multi-io-card-for-ate",
    category: "development",
    summary:
      "An advanced health monitoring system utilizing FPGA technology for real-time processing of multiple biosignals. The system integrates various sensors to monitor vital signs and provides wireless connectivity for remote monitoring. Designed with medical-grade standards for reliability and accuracy in clinical environments.",
  },
  {
    title: "Smart Monitoring System",
    image: "/case-studies/CLIMATE CONTROL/1.png",
    link: "/case-studies/smart-monitoring-system",
    category: "development",
    summary:
      "A comprehensive industrial control system featuring integrated POE+ switching capabilities and real-time operating system. The system provides centralized control for multiple devices while delivering power and data through a single ethernet connection. Designed for harsh industrial environments with robust communication protocols.",
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
  {
    title: "CapServe Cell Sensor",
    image: "/case-studies/CAPSERVE/CAPES_CELL_SENSOR_20_APR_2026.1.png",
    link: "/case-studies/capserve-cell-sensor",
    category: "mechanical",
    summary:
      "IP65-rated outdoor cell sensor enclosure with snap-fit assembly, integrated pole-mount bracket, and DFM-reviewed geometry ready for injection-moulding production.",
  },
  {
    title: "UV Disinfection System",
    image: "/case-studies/mechanicalCaseStudies/1/MYNATEK_RENDER__1.0.png",
    link: "/case-studies/uv-disinfection-system",
    category: "mechanical",
    summary:
      "Wall-mounted UV-C disinfection unit branded SafeSpaceUV with triple lamp array, sealed optical windows, and two-tone enclosure for healthcare and commercial spaces.",
  },
  {
    title: "Industrial Splice Detector",
    image:
      "/case-studies/mechanicalCaseStudies/2/SPLICE_DETECTOR_RENDER_2.4.png",
    link: "/case-studies/industrial-splice-detector",
    category: "mechanical",
    summary:
      "Ruggedised splice detector with extruded aluminium heatsink enclosure, M12 industrial connectors, and RS-232 / RS-485 / EtherCAT interfaces for manufacturing lines.",
  },
];
