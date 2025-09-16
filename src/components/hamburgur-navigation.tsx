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
        title: "Embedded Systems",
        href: "/embedded-design-services",
        image:
          "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "",
      },
      {
        title: "PCB Design",
        href: "/pcb-design",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOKKQF88ooMa1cZCmXjiXNKAi5nFRq6FU8w&s",
        description: "",
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
        description: "",
      },
      {
        title: "PCB Design",
        href: "/PCB-Design-Case-study",
        image:
          "https://www.cirexx.com/wp-content/uploads/PCB-Layout-Board-1024x455.jpg",
        description: "",
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
        description: "",
      },
      {
        title: "Embedded Systems Glossary",
        href: "/embedded-systems-glossary",
        image:
          "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "",
      },
      {
        title: "PCB Design Glossary",
        href: "/pcb-design-glossary",
        image:
          "https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&w=300",
        description: "",
      },
    ],
  },
  {
    title: "FAQs",
    href: "/printed-circuit-board-faqs",
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
              className="fixed lg:top-8 lg:left-16 z-50 flex items-center bg-transparent p-2 shadow-none hover:bg-transparent lg:shadow-none"
            >
              <Menu className="w-12 h-12 text-white" />
              <span className="ml-2 font-semibold text-lg hidden md:inline text-white">
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
