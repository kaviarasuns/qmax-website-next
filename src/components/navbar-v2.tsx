"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerNavigation from "./hamburgur-navigation";

export default function NavbarV2() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrollY, setScrollY] = useState(0);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    router.push("/"); // Programmatically navigate to home
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollY(window.scrollY);
      }
    };

    // Only add scroll listener on homepage
    if (isHomePage && typeof window !== "undefined") {
      // Initialize scroll position on mount
      setScrollY(window.scrollY);
      
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  // Calculate background opacity based on scroll position
  // Assuming video height is around 100vh, we'll complete transition by 80vh
  const getBackgroundOpacity = () => {
    if (!isHomePage) return 1; // Full white on non-home pages
    if (typeof window === "undefined") return 0;

    const maxScroll = window.innerHeight * 0.8; // 80% of viewport height
    const opacity = Math.min(scrollY / maxScroll, 1);
    return opacity;
  };

  const backgroundOpacity = getBackgroundOpacity();

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background:
            !isHomePage || backgroundOpacity > 0.1
              ? `linear-gradient(180deg, rgba(0, 0, 0, ${Math.min(
                  backgroundOpacity * 0.8 + 0.2,
                  0.85
                )}) 0%, rgba(255, 255, 255, ${backgroundOpacity}) 100%)`
              : "transparent",
          backdropFilter:
            !isHomePage || backgroundOpacity > 0.1 ? "blur(8px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-20 sm:h-22 lg:h-24 flex justify-center items-center">
          <div className="absolute left-4 sm:left-6 lg:left-8">
            <HamburgerNavigation />
          </div>
          <div>
            <Link
              href="/"
              title="Back to Home"
              className="block w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] transition-all duration-300"
              onClick={handleHomeClick}
            >
              <Image
                // src="https://d1yetprhniwywz.cloudfront.net/QMAXSYSTEMS-new-logo.svg"
                src="./qmax-logo.svg"
                className="w-full h-auto object-contain"
                width={400}
                height={90}
                alt="Qmax PCB Design Logo"
                priority
              />
            </Link>
          </div>
        </div>
      </header>
      {!isHomePage && <div className="h-20 sm:h-22 lg:h-24"></div>}
    </>
  );
}
