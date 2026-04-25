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
        title: "Hardware Development Services",
        href: "/hardware-development-services",
        image:
          "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Comprehensive hardware design and development",
        children: [
          {
            title: "High Speed Digital Design",
            href: "/hardware-development-services/high-speed-digital-design",
          },
          {
            title: "Analog Design",
            href: "/hardware-development-services/analog-design",
          },
          {
            title: "Power Electronics",
            href: "/hardware-development-services/power-electronics",
          },
          {
            title: "RF and Microwave",
            href: "/hardware-development-services/rf-and-microwave",
          },
        ],
      },
      {
        title: "PCB Design Services",
        href: "/pcb-design",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOKKQF88ooMa1cZCmXjiXNKAi5nFRq6FU8w&s",
        description: "Professional PCB layout and design services",
        children: [
          {
            title: "High Speed Digital Services",
            href: "/pcb-design/high-speed-digital-pcb-design",
          },
          {
            title: "Analog and Mixed Signal",
            href: "/pcb-design/analog-and-mixed-signal",
          },
          {
            title: "Power Electronics",
            href: "/pcb-design/power-electronics",
          },
          {
            title: "RF and Microwave",
            href: "/pcb-design/rf-and-microwave-pcb-design",
          },
          {
            title: "SI & PI Analysis Services",
            href: "/pcb-design/si-pi-analysis",
          },
          {
            title: "PCB Library Services",
            href: "/pcb-design/pcb-library-services",
          },
          {
            title: "PCB Design Review Services",
            href: "/pcb-design/pcb-design-review-services",
          },
        ],
      },
      {
        title: "Embedded System Development Services",
        href: "/embedded-design-services",
        image:
          "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Custom embedded system design and development solutions",
      },
      {
        title: "Mechanical Industrial Design Services",
        href: "/mechanical-industrial-design-services",
        image:
          "https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&w=300",
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
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
