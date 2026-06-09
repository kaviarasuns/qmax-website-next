"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
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

/** A single node in the unified mobile navigation tree. */
type MobileNode = {
  title: string;
  href?: string;
  description?: string;
  children?: MobileNode[];
};

// Per-depth typography so the accordion shows a clear hierarchy.
const TITLE_BY_DEPTH = [
  "text-lg font-semibold tracking-[0.04em]",
  "text-base font-medium tracking-[0.05em]",
  "text-sm font-normal tracking-[0.05em]",
];

/** Recursively renders one accordion node and its expandable children. */
function MobileNavNode({
  node,
  depth,
  keyPath,
  openKeys,
  onToggle,
  onNavigate,
  pathname,
}: {
  node: MobileNode;
  depth: number;
  keyPath: string;
  openKeys: Set<string>;
  onToggle: (key: string) => void;
  onNavigate: () => void;
  pathname: string;
}) {
  const hasChildren = (node.children?.length ?? 0) > 0;
  const isOpen = openKeys.has(keyPath);
  const active = node.href === pathname;
  const titleClass = TITLE_BY_DEPTH[Math.min(depth, TITLE_BY_DEPTH.length - 1)];

  // Leaf: a plain link.
  if (!hasChildren) {
    return (
      <Link
        href={node.href || "#"}
        onClick={onNavigate}
        className={`block py-3 px-3 rounded-md transition-colors ${titleClass}
          ${active
            ? "text-red-500"
            : "text-foreground/80 hover:text-red-500 hover:bg-accent"
          }`}
      >
        {node.title}
      </Link>
    );
  }

  // Branch: a header row (link if it has its own page, otherwise a toggle) plus a chevron.
  return (
    <div>
      <div className="flex items-center">
        {node.href ? (
          <Link
            href={node.href}
            onClick={onNavigate}
            className={`flex-1 py-3 px-3 rounded-md transition-colors ${titleClass}
              ${active
                ? "text-red-500"
                : "text-foreground/90 hover:text-red-500 hover:bg-accent"
              }`}
          >
            {node.title}
          </Link>
        ) : (
          <button
            onClick={() => onToggle(keyPath)}
            className={`flex-1 text-left py-3 px-3 rounded-md transition-colors text-foreground/90 hover:text-red-500 ${titleClass}`}
          >
            {node.title}
          </button>
        )}
        <button
          onClick={() => onToggle(keyPath)}
          aria-label={`${isOpen ? "Collapse" : "Expand"} ${node.title}`}
          aria-expanded={isOpen}
          className="p-3 text-foreground/60 hover:text-red-500 transition-colors"
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Collapsible region — grid-rows trick animates height without measuring. */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={
              depth === 0
                ? "pb-1 pl-1"
                : "ml-4 pl-2 border-l border-border"
            }
          >
            {node.children!.map((child) => (
              <MobileNavNode
                key={child.title}
                node={child}
                depth={depth + 1}
                keyPath={`${keyPath}>${child.title}`}
                openKeys={openKeys}
                onToggle={onToggle}
                onNavigate={onNavigate}
                pathname={pathname}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuValue, setMenuValue] = useState("");
  const openedAtRef = useRef(0);
  const pathname = usePathname();

  // Mobile accordion: set of expanded section keys (one key per node path).
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());

  const isSubItemActive = (subItems: { href: string }[]) =>
    subItems.some((s) => pathname.startsWith(s.href));

  // Flatten the menu config into a single recursive tree for the mobile menu.
  const mobileTree = useMemo<MobileNode[]>(() => {
    const root: MobileNode[] = [{ title: "Home", href: "/" }];
    for (const item of menuData) {
      if (item.subItems) {
        root.push({
          title: item.title,
          children: item.subItems.map((sub) => ({
            title: sub.title,
            href: sub.href,
            description: sub.description,
            children: sub.children?.map((child) => ({
              title: child.title,
              href: child.href,
            })),
          })),
        });
      } else {
        root.push({ title: item.title, href: item.href });
      }
    }
    return root;
  }, []);

  // Pre-expand the branch(es) leading to the current page so it's visible on open.
  const computeActiveKeys = () => {
    const keys = new Set<string>();
    const walk = (nodes: MobileNode[], parentKey: string): boolean => {
      let containsActive = false;
      for (const node of nodes) {
        const key = parentKey ? `${parentKey}>${node.title}` : node.title;
        const childActive = node.children?.length
          ? walk(node.children, key)
          : false;
        const selfActive =
          !!node.href && node.href !== "/" && pathname.startsWith(node.href);
        if (node.children?.length && (childActive || selfActive)) keys.add(key);
        if (childActive || selfActive) containsActive = true;
      }
      return containsActive;
    };
    walk(mobileTree, "");
    return keys;
  };

  const openMobileMenu = () => {
    setOpenKeys(computeActiveKeys());
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleKey = (key: string) =>
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  const handleMenuValueChange = (value: string) => {
    if (value) openedAtRef.current = Date.now();
    setMenuValue(value);
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    // Ignore the click if the menu just opened via hover (Radix would otherwise toggle it closed).
    if (Date.now() - openedAtRef.current < 300) e.preventDefault();
  };

  return (
    <>
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
            <NavigationMenu value={menuValue} onValueChange={handleMenuValueChange}>
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
                          onClick={handleTriggerClick}
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
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => (mobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu — accordion panel (sibling of nav: nav's backdrop-blur would
          otherwise become the containing block for this fixed element) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-background transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="h-full overflow-y-auto px-4 py-4 flex flex-col">
          <div className="divide-y divide-border">
            {mobileTree.map((node) => (
              <div key={node.title} className="py-1">
                <MobileNavNode
                  node={node}
                  depth={0}
                  keyPath={node.title}
                  openKeys={openKeys}
                  onToggle={toggleKey}
                  onNavigate={closeMobileMenu}
                  pathname={pathname}
                />
              </div>
            ))}
          </div>

          {/* CTA pinned to the bottom */}
          <div className="mt-auto pt-6">
            <Link href="/contact" onClick={closeMobileMenu}>
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
