import { isDevEnv } from "@/lib/env";

export interface SubMenuItem {
  title: string;
  href: string;
  image: string;
  description: string;
  children?: {
    title: string;
    href: string;
  }[];
}

export interface MenuItem {
  title: string;
  href?: string;
  subItems?: SubMenuItem[];
}

export const menuData: MenuItem[] = [
  {
    title: "Services",
    subItems: [
      {
        title: "Hardware Design Services",
        href: "/hardware-design-services",
        image: "https://d1yetprhniwywz.cloudfront.net/v2/navigation/hw.png",
        description: "Comprehensive hardware design and development",
        children: [
          {
            title: "High Speed Digital Design",
            href: "/hardware-design-services/high-speed-digital-design",
          },
          {
            title: "Analog Design",
            href: "/hardware-design-services/analog-design",
          },
          {
            title: "Power Electronics",
            href: "/hardware-design-services/power-electronics",
          },
          {
            title: "RF and Microwave",
            href: "/hardware-design-services/rf-and-microwave",
          },
        ],
      },
      {
        title: "PCB Design Services",
        href: "/pcb-design-services",
        image: "https://d1yetprhniwywz.cloudfront.net/v2/navigation/pcb_v2.png",
        description: "Professional PCB layout and design services",
        children: [
          {
            title: "High Speed Digital Services",
            href: "/pcb-design-services/high-speed-digital-pcb-design",
          },
          {
            title: "Analog and Mixed Signal",
            href: "/pcb-design-services/analog-and-mixed-signal",
          },
          {
            title: "Power Electronics",
            href: "/pcb-design-services/power-electronics",
          },
          {
            title: "RF and Microwave",
            href: "/pcb-design-services/rf-and-microwave-pcb-design",
          },
          ...(isDevEnv
            ? [
                {
                  title: "SI & PI Analysis Services",
                  href: "/pcb-design-services/si-pi-analysis",
                },
                {
                  title: "PCB Library Services",
                  href: "/pcb-design-services/pcb-library-services",
                },
                {
                  title: "PCB Design Review Services",
                  href: "/pcb-design-services/pcb-design-review-services",
                },
              ]
            : []),
        ],
      },
      {
        title: "Embedded Design Services",
        href: "/embedded-design-services",
        image: "https://d1yetprhniwywz.cloudfront.net/v2/navigation/ed_v2.png",
        description: "Custom embedded system design and development solutions",
      },
      {
        title: "Mechanical and Industrial Design Services",
        href: "/mechanical-industrial-design-services",
        image: "https://d1yetprhniwywz.cloudfront.net/v2/navigation/md.png",
        description: "Industrial, mechanical and enclosure design services",
        children: [
          {
            title: "Mechanical Design Services",
            href: "/mechanical-industrial-design-services/mechanical-design",
          },
          {
            title: "Industrial Design Services",
            href: "/mechanical-industrial-design-services/industrial-design",
          },
        ],
      },
    ],
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
