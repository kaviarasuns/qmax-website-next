import { IndustryWeServeItem } from "@/components/industries-we-serve-v3";
import { StackRevealItem } from "@/components/StackReveal";

export const DEFAULT_ITEMS_STACK_REVEAL: StackRevealItem[] = [
  {
    step: "01",
    title: "Concept Validation",
    description:
      "From idea to defendable spec: feasibility studies, system architecture, product specification.",
    imageSrc:
      "https://framerusercontent.com/images/X1zb9I5JLZlfe0Fni7qWIv7m8Kw.png?scale-down-to=1024",
    fallbackClassName: "bg-[#374151]",
  },
  {
    step: "02",
    title: "Hardware Design",
    description:
      "High-level and low-level design, component engineering, board bring-up & testing.",
    imageSrc:
      "https://framerusercontent.com/images/Pne9938Gidq7nG9ydK39bzpvUs8.png?scale-down-to=1024",
    fallbackClassName: "bg-[#14532d]",
  },
  {
    step: "03",
    title: "PCB Design",
    description:
      "Multi-layer layouts, signal & power integrity, design-for-manufacturability.",
    imageSrc:
      "https://framerusercontent.com/images/INADfyYKIXB4zOCeJRv7MfVUeg8.png?scale-down-to=1024",
    fallbackClassName: "bg-[#1e1b4b]",
  },
  {
    step: "04",
    title: "Software Development",
    description:
      "Firmware, drivers / BSP and cross-platform application development.",
    imageSrc:
      "https://framerusercontent.com/images/XkYvqDHWON6bLP4za8K4dR0WNI.jpg?scale-down-to=1024",
    fallbackClassName: "bg-[#0c1e3f]",
  },
  {
    step: "05",
    title: "Industrial Design",
    description:
      "Enclosure design, UI/UX and CMF - the experience the user actually holds.",
    imageSrc:
      "https://framerusercontent.com/images/gjX9fLR2YB6WU8zbYrGpSymdoms.png?scale-down-to=1024",
    fallbackClassName: "bg-[#a8a29e]",
  },
  {
    step: "06",
    title: "NPI",
    description:
      "Compliance certification (FCC / UL / CE), vendor audits and test-jig development.",
    imageSrc:
      "https://framerusercontent.com/images/5goq4GzrPys5DnIQz1IWvm0pYSo.png?scale-down-to=1024",
    fallbackClassName: "bg-[#155e75]",
  },
  {
    step: "07",
    title: "Manufacturing",
    description:
      "Manufacturing coordination and production testing - built at scale, shipped with confidence.",
    imageSrc:
      "https://framerusercontent.com/images/MaeJlgZA61FfRa4b8IcNa2EEpg.png?scale-down-to=1024",
    fallbackClassName: "bg-[#475569]",
  },
];

export const INDUSTRIES_WE_SERVE: IndustryWeServeItem[] = [
  {
    id: "industrial-electronics",
    label: "Industrial\nElectronics",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/oil_refineries.png",
  },
  {
    id: "communication-systems",
    label: "Communication\nSystems",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/communication_systems.png",
  },
  {
    id: "high-performance-computing",
    label: "High Performance\nComputing",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/large_data_center.jpeg",
  },
  {
    id: "medical-electronics",
    label: "Medical\nElectronics",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/medical_electronics.jpeg",
  },
  {
    id: "automotive-electronics",
    label: "Automotive\nElectronics",
    image:
      "https://d1yetprhniwywz.cloudfront.net/v2/home/industries_we_serve/automative_electronics.jpeg",
  },
];
