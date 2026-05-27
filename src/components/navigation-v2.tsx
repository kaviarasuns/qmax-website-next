"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuData } from "@/lib/menu-data";

export function NavigationV2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-[1px] border-gray-200 shadow-sm transition-all duration-300"
    >
      {/* Decorative top PCB trace line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-red-500 to-brand-red z-50"></div>

      {/* Circuit background overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className=" flex items-center justify-center">
              <Image
                src="https://d1yetprhniwywz.cloudfront.net/QMAXSYSTEMS-new-logo.svg"
                // src="./qmax-logo.svg"
                className="w-full h-auto object-contain"
                width={400}
                height={90}
                alt="Qmax PCB Design Logo"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} !bg-transparent text-lg font-bold text-gray-800 hover:!text-brand-red relative group`}
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-red transition-colors duration-300"></span>
                        Home
                      </span>
                      {/* PCB Trace Underline */}
                      <span className="absolute bottom-1 left-4 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-[calc(100%-32px)]"></span>
                      <span className="absolute bottom-[2px] right-4 w-1.5 h-1.5 rounded-full border-[1px] border-brand-red bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {menuData.map((item) => (
                  <NavigationMenuItem
                    key={item.title}
                    className="bg-transparent"
                  >
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="!bg-transparent text-lg font-bold text-gray-800 hover:!text-brand-red data-[state=open]:!text-brand-red relative group">
                          <span className="relative z-10 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-red group-data-[state=open]:bg-brand-red transition-colors duration-300"></span>
                            {item.title}
                          </span>
                          {/* PCB Trace Underline */}
                          <span className="absolute bottom-1 left-4 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-[calc(100%-32px)] group-data-[state=open]:w-[calc(100%-32px)]"></span>
                          <span className="absolute bottom-[2px] right-4 w-1.5 h-1.5 rounded-full border-[1px] border-brand-red bg-white opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 transition-opacity duration-300 delay-100"></span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white border-t-[3px] border-brand-red shadow-xl rounded-b-lg">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.title}>
                                <div className="group/item relative rounded-md p-3 transition-all duration-300 hover:bg-red-50/50 hover:shadow-sm focus-within:bg-red-50/50 border border-transparent hover:border-brand-red/20 overflow-hidden">
                                  {/* Tech Corners */}
                                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-red opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-tr-sm"></div>
                                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-red opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-bl-sm"></div>

                                  {/* Routing trace background animation */}
                                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent -translate-x-[100%] group-hover/item:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="block z-10 relative select-none space-y-2 leading-none no-underline outline-none"
                                    >
                                      <div className="relative w-full h-24 mb-3 rounded-sm overflow-hidden bg-muted border border-gray-100">
                                        <Image
                                          src={
                                            subItem.image || "/placeholder.svg"
                                          }
                                          alt={subItem.title}
                                          fill
                                          className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                                        />
                                        <div className="absolute inset-0 border-[2px] border-transparent group-hover/item:border-brand-red/50 transition-colors pointer-events-none rounded-sm z-10"></div>
                                      </div>
                                      <div className="text-sm font-bold leading-none text-gray-900 group-hover/item:text-brand-red flex items-center gap-2 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-brand-red transition-colors shadow-sm"></div>
                                        {subItem.title}
                                      </div>
                                      {subItem.description && (
                                        <p className="line-clamp-2 text-sm leading-relaxed pl-3.5 border-l-2 border-gray-100 group-hover/item:border-brand-red/30 transition-colors text-muted-foreground">
                                          {subItem.description}
                                        </p>
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                  {subItem.children && subItem.children.length > 0 && (
                                    <div className="mt-2 space-y-1 overflow-hidden max-h-0 opacity-0 transition-all duration-300 group-hover/item:max-h-60 group-hover/item:opacity-100 group-focus-within:max-h-60 group-focus-within:opacity-100 pl-3.5 border-l-2 border-brand-red/20">
                                      {subItem.children.map((childItem) => (
                                        <Link
                                          key={childItem.title}
                                          href={childItem.href}
                                          className="block rounded-sm px-2 py-1.5 text-xs font-semibold text-gray-500 transition-colors hover:bg-brand-red/5 hover:text-brand-red flex items-center gap-2 group/child"
                                        >
                                          <span className="w-3 h-[1px] bg-gray-300 group-hover/child:bg-brand-red transition-colors"></span>
                                          {childItem.title}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href || "#"} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} !bg-transparent text-lg font-bold text-gray-800 hover:!text-brand-red relative group`}
                        >
                          <span className="relative z-10 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-brand-red transition-colors duration-300"></span>
                            {item.title}
                          </span>
                          {/* PCB Trace Underline */}
                          <span className="absolute bottom-1 left-4 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-[calc(100%-32px)]"></span>
                          <span className="absolute bottom-[2px] right-4 w-1.5 h-1.5 rounded-full border-[1px] border-brand-red bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></span>
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden lg:block">
            <Button>Get Started</Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-brand-red bg-white relative">
          {/* Circuit background overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:16px_16px]"></div>

          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto relative z-10">
            <Link
              href="/"
              className="flex items-center gap-3 py-3 px-4 text-lg font-bold text-gray-800 hover:text-brand-red hover:bg-red-50/50 rounded-sm border border-transparent hover:border-brand-red/20 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-2 h-2 rounded-full border-2 border-gray-400"></div>
              Home
            </Link>

            {menuData.map((item) => (
              <div key={item.title} className="border-b border-gray-100 pb-2 mb-2 last:border-0">
                {item.subItems ? (
                  <div className="space-y-2">
                    <div className="py-2 px-4 text-lg font-bold text-gray-900 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                      {item.title}
                    </div>
                    <div className="pl-6 space-y-2 border-l-2 border-gray-100 ml-5">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.title} className="relative">
                          {/* Route line connecting to item */}
                          <div className="absolute top-6 -left-6 w-4 h-[2px] bg-gray-200"></div>

                          <Link
                            href={subItem.href}
                            className="flex items-center gap-4 py-2 px-3 text-sm text-gray-600 hover:text-brand-red hover:bg-red-50/50 rounded-sm transition-all border border-transparent hover:border-brand-red/20 group"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200 group-hover:border-brand-red/50 transition-colors">
                              <Image
                                src={subItem.image || "/placeholder.svg"}
                                alt={subItem.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                                {subItem.title}
                              </div>
                              {subItem.description && (
                                <p className="text-xs line-clamp-1 mt-0.5 text-muted-foreground">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                          {subItem.children && subItem.children.length > 0 && (
                            <div className="ml-16 mb-2 mt-1 space-y-1 border-l-2 border-brand-red/20 pl-3">
                              {subItem.children.map((childItem) => (
                                <Link
                                  key={childItem.title}
                                  href={childItem.href}
                                  className="flex items-center gap-2 rounded-sm py-1.5 px-2 text-xs font-semibold text-gray-500 hover:text-brand-red hover:bg-brand-red/5 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <span className="w-2 h-[1px] bg-gray-300"></span>
                                  {childItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="flex items-center gap-3 py-3 px-4 text-lg font-bold text-gray-800 hover:text-brand-red hover:bg-red-50/50 rounded-sm border border-transparent hover:border-brand-red/20 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 rounded-full border-2 border-gray-400"></div>
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

