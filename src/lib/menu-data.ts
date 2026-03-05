export interface SubMenuItem {
  title: string;
  href: string;
  image: string;
  description: string;
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
      },
      {
        title: "PCB Design Services",
        href: "/pcb-design",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOKKQF88ooMa1cZCmXjiXNKAi5nFRq6FU8w&s",
        description: "Professional PCB layout and design services",
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
      },
    ],
  },
  {
    title: "Case Studies",
    subItems: [
      {
        title: "Embedded Systems",
        href: "/Embedded-Case-study",
        image:
          "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Real-world embedded systems implementations",
      },
      {
        title: "PCB Design",
        href: "/PCB-Design-Case-study",
        image:
          "https://www.cirexx.com/wp-content/uploads/PCB-Layout-Board-1024x455.jpg",
        description: "Successful PCB design projects and outcomes",
      },
    ],
  },
  {
    title: "Resources",
    subItems: [
      {
        title: "PCB Design Resources",
        href: "/PCB-design-resources",
        image:
          "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Tools and guides for PCB design",
      },
      {
        title: "Embedded Systems Glossary",
        href: "/embedded-system-glossary",
        image:
          "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Key terms and definitions",
      },
      {
        title: "PCB Design Glossary",
        href: "/pcb-design-glossary",
        image:
          "https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "PCB terminology explained",
      },
    ],
  },
  {
    title: "FAQs",
    href: "/printed-circuit-board-faqs",
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
    title: "Blog",
    href: "http://blog.qmaxsys.com/",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
