"use client";

import { useState } from "react";
import { Menu, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SubMenuItem {
  title: string;
  href: string;
  image: string;
  description?: string;
}

interface MenuItem {
  title: string;
  href?: string;
  subItems?: SubMenuItem[];
}

const menuData: MenuItem[] = [
  {
    title: "Services",
    subItems: [
      {
        title: "Hardware Design",
        href: "/services/hardware-design",
        image:
          "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Custom hardware solutions and circuit design",
      },
      {
        title: "Firmware Development",
        href: "/services/firmware-development",
        image:
          "https://images.pexels.com/photos/5083490/pexels-photo-5083490.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Embedded software and firmware programming",
      },
      {
        title: "PCB Design",
        href: "/services/pcb-design",
        image:
          "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Professional PCB layout and design services",
      },
      {
        title: "Industrial Design and Mechanical",
        href: "/services/industrial-design",
        image:
          "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Product design and mechanical engineering",
      },
    ],
  },
  {
    title: "Case Studies",
    subItems: [
      {
        title: "IoT Solutions",
        href: "/case-studies/iot-solutions",
        image:
          "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Connected device implementations",
      },
      {
        title: "Medical Devices",
        href: "/case-studies/medical-devices",
        image:
          "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Healthcare technology solutions",
      },
      {
        title: "Automotive Systems",
        href: "/case-studies/automotive",
        image:
          "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Vehicle electronic systems",
      },
    ],
  },
  {
    title: "Resources",
    subItems: [
      {
        title: "Technical Documentation",
        href: "/resources/documentation",
        image:
          "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Comprehensive technical guides",
      },
      {
        title: "Design Tools",
        href: "/resources/tools",
        image:
          "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Professional design software and tools",
      },
      {
        title: "White Papers",
        href: "/resources/whitepapers",
        image:
          "https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "Industry insights and research",
      },
    ],
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function HamburgerNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubMenus([]);
  };

  return (
    <>
      {/* Hamburger Navigation - All Screens */}
      <div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="fixed top-4 left-4 z-50 flex items-center bg-transparent p-2 shadow-none hover:bg-transparent lg:shadow-none"
            >
              <Menu className="h-6 w-6" />
              <span className="ml-2 font-semibold text-lg hidden md:inline">
                Menu
              </span>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full sm:w-96 lg:w-[500px] p-0 bg-gray-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <SheetHeader className="flex flex-row items-center justify-between p-4 border-b bg-white">
                <SheetTitle className="text-lg text-black font-semibold">
                  Menu
                </SheetTitle>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={closeMenu}
                >
                  {/* <X className="h-5 w-5" /> */}
                </Button>
              </SheetHeader>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-2">
                  {menuData.map((item) => (
                    <div key={item.title}>
                      {item.subItems ? (
                        <Collapsible
                          open={openSubMenus.includes(item.title)}
                          onOpenChange={() => toggleSubMenu(item.title)}
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                            <span className="font-medium text-gray-900">
                              {item.title}
                            </span>
                            <ChevronRight
                              className={`w-5 h-5 text-gray-400 transition-transform ${
                                openSubMenus.includes(item.title)
                                  ? "rotate-90"
                                  : ""
                              }`}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2 ml-4 space-y-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={closeMenu}
                                className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                                  <Image
                                    src={subItem.image || "/placeholder.svg"}
                                    alt={subItem.title}
                                    width={80}
                                    height={64}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-medium text-gray-900 text-sm">
                                    {subItem.title}
                                  </h3>
                                  {subItem.description && (
                                    <p className="text-xs text-gray-500 mt-1">
                                      {subItem.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          onClick={closeMenu}
                          className="block p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">
                            {item.title}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
