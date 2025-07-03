import { notFound } from "next/navigation";
import { CaseStudy } from "../../../../types/case-study";
import { CaseStudyCard } from "@/components/case-study-card";

// This would typically come from a database or API
const caseStudiesData: CaseStudy[] = [
  {
    id: "Security-System-Controller",
    title: "Security System Controller",
    category: "Embedded System Design",
    images: [
      "https://d1yetprhniwywz.cloudfront.net/case-studies-images/Embedded-System-with-RTOS/Security-Controller-a.jpg",
      "https://d1yetprhniwywz.cloudfront.net/case-studies-images/Embedded-System-with-RTOS/Security-Controller-b.jpg",
      "https://d1yetprhniwywz.cloudfront.net/case-studies-images/Embedded-System-with-RTOS/Security-Controller-c.jpg",
      "https://d1yetprhniwywz.cloudfront.net/case-studies-images/Embedded-System-with-RTOS/Security-Controller-d.jpg",
      "https://d1yetprhniwywz.cloudfront.net/case-studies-images/Embedded-System-with-RTOS/Security-Controller-e.jpg",
    ],
    features: [
      "Hardware / Firmware design and Development",
      "Mechanical /Enclosure Design / DFM",
      "IMx6 CPU / STM32",
      "Linux / RTOS",
      "High Density Digital",
      "FCC Class B certified",
    ],
    summary:
      "It is a powerful Edge controller device used in high security applications with multi-protocol sensors and reader inputs. The system is powered through POE+ and has options for power backup using an external power supply or battery. It can work as a stand alone device or can be cascaded to control multiple access points.",
    importantParts: [
      "Freescale iMX6 Application Processor",
      "ST Micro High Performance MCU",
      "Lattice Programmable Logic Device",
      "Linear Technologies POE+ Controller",
    ],
    salientFeatures: [
      "POE+ powered edge controller.",
      "Multiple dedicated Processors.",
      "Hardware encrypted communication.",
      "Scalable from one to networked multi-unit configuration.",
      "OSDP and Weigand Protocol for connection to card readers.",
      "Auxiliary input and output.",
      "Wet or Dry Relay setting.",
      "Remote Firmware Upgrade",
      "Built-in Inrush and overvoltage protection.",
    ],
    scopeOfWork: [
      "Schematics Entry",
      "PCB Layout Design",
      "PCB Fabrication and Assembly",
      "Board Bring-up and testing",
      "ID / Enclosure Design",
    ],
  },
  {
    id: "fpga-based-health-monitoring-system",
    title: "FPGA Based Health Monitoring System",
    category: "Medical Device Design",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "FPGA-based signal processing",
      "Real-time health monitoring",
      "Multi-sensor integration",
      "Wireless connectivity",
      "Low power consumption",
      "Medical grade certification",
    ],
    summary:
      "An advanced health monitoring system utilizing FPGA technology for real-time processing of multiple biosignals. The system integrates various sensors to monitor vital signs and provides wireless connectivity for remote monitoring. Designed with medical-grade standards for reliability and accuracy in clinical environments.",
    importantParts: [
      "Xilinx Zynq FPGA",
      "Analog Devices Precision ADCs",
      "Texas Instruments Power Management",
      "Nordic Semiconductor Wireless Module",
    ],
    salientFeatures: [
      "Real-time signal processing using FPGA.",
      "Multi-channel biosignal acquisition.",
      "Wireless data transmission.",
      "Low noise analog front-end.",
      "Battery-powered operation.",
      "Medical device compliance (FDA/CE).",
      "Secure data encryption.",
      "Remote monitoring capabilities.",
      "Alarm and alert system.",
    ],
    scopeOfWork: [
      "System Architecture Design",
      "FPGA Development and Programming",
      "Analog Circuit Design",
      "PCB Layout and Design",
      "Firmware Development",
      "Testing and Validation",
      "Regulatory Compliance",
    ],
  },
  {
    id: "Control-system-with-POE-Switch-and-RTOS",
    title: "Control System with POE Switch and RTOS",
    category: "Industrial Control Systems",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    features: [
      "Real-Time Operating System",
      "POE+ Switch Integration",
      "Industrial Grade Components",
      "Ethernet Communication",
      "Modular Design Architecture",
      "Remote Management Capability",
    ],
    summary:
      "A comprehensive industrial control system featuring integrated POE+ switching capabilities and real-time operating system. The system provides centralized control for multiple devices while delivering power and data through a single ethernet connection. Designed for harsh industrial environments with robust communication protocols.",
    importantParts: [
      "ARM Cortex-A9 Processor",
      "Marvell POE+ Switch Controller",
      "Industrial Ethernet PHY",
      "Isolated Power Supplies",
    ],
    salientFeatures: [
      "Integrated POE+ switching (up to 24 ports).",
      "Real-time deterministic control.",
      "Industrial temperature range operation.",
      "Redundant power supply options.",
      "SNMP network management.",
      "Web-based configuration interface.",
      "Modbus and Ethernet/IP protocols.",
      "DIN rail mounting.",
      "LED status indicators.",
    ],
    scopeOfWork: [
      "System Requirements Analysis",
      "Hardware Architecture Design",
      "RTOS Implementation",
      "Network Stack Development",
      "Power Management Design",
      "EMC/EMI Compliance Testing",
      "Industrial Certification",
    ],
  },
  // Add more case studies here...
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = caseStudiesData.find((cs) => cs.id === params.slug);
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }
  return {
    title: caseStudy.title,
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = caseStudiesData.find((cs) => cs.id === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyCard caseStudy={caseStudy} />
    </div>
  );
}

export function generateStaticParams() {
  return caseStudiesData.map((caseStudy) => ({
    slug: caseStudy.id,
  }));
}
