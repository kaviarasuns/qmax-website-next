"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { menuData } from "@/lib/menu-data";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuValue, setMenuValue] = useState("");
  const pathname = usePathname();

  const isSubItemActive = (subItems: { href: string }[]) =>
    subItems.some((s) => pathname.startsWith(s.href));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center">
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
            <NavigationMenu value={menuValue} onValueChange={setMenuValue}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[17px] font-normal tracking-[0.08em] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring/50
                        ${pathname === "/"
                          ? "text-red-500"
                          : "text-foreground/70 hover:text-red-500 hover:bg-accent"
                        }`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {menuData.map((item) => (
                  <NavigationMenuItem
                    key={item.title}
                    value={item.title}
                    className="bg-transparent"
                  >
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger
                          className={`bg-transparent text-[17px] font-normal tracking-[0.08em] transition-all duration-200
                            ${isSubItemActive(item.subItems)
                              ? "text-red-500"
                              : "text-foreground/70 hover:text-red-500"
                            }`}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.title}>
                                <div className="group rounded-md p-3 transition-colors hover:bg-accent focus-within:bg-accent">
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="block select-none space-y-1 text-left leading-none no-underline outline-none"
                                      onClick={() => setMenuValue("")}
                                    >
                                      <div className="relative w-full h-24 mb-2 rounded-md overflow-hidden bg-muted">
                                        <Image
                                          src={subItem.image || "/placeholder.svg"}
                                          alt={subItem.title}
                                          fill
                                          className="object-cover transition-transform group-hover:scale-105"
                                        />
                                      </div>
                                      <div className="text-left text-sm font-normal tracking-[0.04em] leading-snug text-foreground">
                                        {subItem.title}
                                      </div>
                                      {subItem.description && (
                                        <p className="line-clamp-2 text-left text-xs font-light leading-snug text-muted-foreground tracking-[0.03em]">
                                          {subItem.description}
                                        </p>
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                  {subItem.children && subItem.children.length > 0 && (
                                    <div className="mt-2 space-y-1 overflow-hidden max-h-0 opacity-0 transition-all duration-200 group-hover:max-h-60 group-hover:opacity-100 group-focus-within:max-h-60 group-focus-within:opacity-100">
                                      {subItem.children.map((childItem) => (
                                        <Link
                                          key={childItem.title}
                                          href={childItem.href}
                                          className="block rounded px-2 py-1 text-xs font-normal tracking-[0.04em] text-muted-foreground transition-all duration-200 hover:bg-background hover:text-red-500"
                                          onClick={() => setMenuValue("")}
                                        >
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
                          className={`inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[17px] font-normal tracking-[0.08em] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring/50
                            ${pathname === item.href
                              ? "text-red-500"
                              : "text-foreground/70 hover:text-red-500 hover:bg-accent"
                            }`}
                        >
                          {item.title}
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
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link
              href="/"
              className={`block py-2 px-3 text-base font-normal tracking-[0.06em] rounded-md transition-all duration-200
                ${pathname === "/"
                  ? "text-red-500 bg-accent"
                  : "text-muted-foreground hover:text-red-500 hover:bg-accent"
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {menuData.map((item) => (
              <div key={item.title}>
                {item.subItems ? (
                  <div className="space-y-1">
                    <div className="py-2 px-3 text-xs font-medium tracking-[0.12em] uppercase text-foreground">
                      {item.title}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.title}>
                          <Link
                            href={subItem.href}
                            className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all duration-200
                              ${pathname === subItem.href
                                ? "text-red-500 bg-accent"
                                : "text-muted-foreground hover:text-red-500 hover:bg-accent"
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="relative w-12 h-12 rounded overflow-hidden bg-muted flex-shrink-0">
                              <Image
                                src={subItem.image || "/placeholder.svg"}
                                alt={subItem.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-normal tracking-[0.04em] text-foreground">
                                {subItem.title}
                              </div>
                              {subItem.description && (
                                <p className="text-xs font-light tracking-[0.03em] text-muted-foreground line-clamp-1">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                          {subItem.children && subItem.children.length > 0 && (
                            <div className="ml-16 mb-2 space-y-1">
                              {subItem.children.map((childItem) => (
                                <Link
                                  key={childItem.title}
                                  href={childItem.href}
                                  className="block rounded-md py-1 px-2 text-xs font-normal tracking-[0.04em] text-muted-foreground transition-all duration-200 hover:text-red-500 hover:bg-accent"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
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
                    className={`block py-2 px-3 text-base font-normal tracking-[0.06em] rounded-md transition-all duration-200
                      ${pathname === item.href
                        ? "text-red-500 bg-accent"
                        : "text-muted-foreground hover:text-red-500 hover:bg-accent"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Button
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
