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
              ? `linear-gradient(180deg, rgba(64, 64, 64, 0.9) 0%, rgba(255, 255, 255, ${backgroundOpacity}) 100%)`
              : "transparent",
          backdropFilter:
            !isHomePage || backgroundOpacity > 0.1 ? "blur(8px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-20 flex justify-center items-center">
          <div className="absolute left-4 sm:left-6 lg:left-8">
            <HamburgerNavigation />
          </div>
          {/* {!isHomePage && ( */}
          <div>
            <Link
              href="/"
              title="Back to Home"
              className="block w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 transition-all duration-300"
              onClick={handleHomeClick}
            >
              <Image
                // src="https://d1yetprhniwywz.cloudfront.net/QMAXSYSTEMS-new-logo.svg"
                src="./qmax-logo.svg"
                className="w-full h-auto object-contain"
                width={320}
                height={60}
                alt="Qmax PCB Design Logo"
                priority
              />
            </Link>
          </div>
          {/* )} */}
        </div>
      </header>
      {/* Navbar spacer - pushes content below the navbar */}
      {!isHomePage && <div className="h-20"></div>}
    </>
    // <>
    //   <nav className="fixed top-0 left-0 w-full z-50 flex items-center p-3 lg:p-5 bg-transparent shadow-md">
    //     {/* Left Section - Hamburger */}
    //     <div className="absolute left-3 lg:left-5 flex items-center">
    //       {/* Hamburger Button */}
    //       <button
    //         onClick={() => setIsMenuOpen(!isMenuOpen)}
    //         className="p-2 rounded-lg hover:bg-gray-100 lg:scale-110"
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //         >
    //           {isMenuOpen ? (
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           ) : (
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           )}
    //         </svg>
    //       </button>
    //     </div>
    //     {/* Center Section - Logo */}
    //     <div className="flex-1 flex justify-center p-2">
    // <Link
    //   href="/"
    //   title="Back to Home"
    //   className="w-32 sm:w-44 md:w-48 lg:w-82 xl:w-80 transition-all duration-300"
    //   onClick={handleHomeClick}
    // >
    //   <Image
    //     src="https://d1yetprhniwywz.cloudfront.net/QMAXSYSTEMS-new-logo.svg"
    //     className="pl-3 w-full h-auto object-contain"
    //     width={1000}
    //     height={1000}
    //     alt="Qmax PCB Design Logo"
    //     priority
    //   />
    // </Link>
    //     </div>

    //     {/* Navigation Menu */}

    //     <ul
    //       className={`${
    //         isMenuOpen ? "block" : "hidden"
    //       } w-full absolute top-full left-0 bg-white shadow-md lg:w-auto lg:space-x-8 lg:items-center mt-4 lg:mt-0`}
    //     >
    //       <li className="py-2 lg:py-0">
    //         <Link
    //           href="/"
    //           className="block hover:text-brand-red text-xl"
    //           onClick={handleHomeClick}
    //         >
    //           HOME
    //         </Link>
    //       </li>

    //       {/* Services Dropdown */}
    //       <li className="group relative py-2 lg:py-0">
    //         <button className="flex items-center hover:text-brand-red text-xl">
    //           SERVICES
    //           <svg
    //             className="w-4 h-4 ml-1"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //         <ul className="lg:absolute lg:left-0 lg:mt-0 lg:w-48 lg:bg-white lg:shadow-lg lg:invisible group-hover:visible bg-gray-50 mt-2 pl-4 lg:pl-0">
    //           <li>
    //             <a
    //               href="/embedded-design-services"
    //               className="block px-4 py-2 hover:bg-gray-100"
    //             >
    //               EMBEDDED SYSTEMS
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="/pcb-design"
    //               className="block px-4 py-2 hover:bg-gray-100"
    //             >
    //               PCB DESIGN
    //             </a>
    //           </li>
    //         </ul>
    //       </li>

    //       {/* Case Studies Dropdown */}
    //       <li className="group relative py-2 lg:py-0">
    //         <button className="flex items-center hover:text-brand-red text-xl">
    //           CASE STUDIES
    //           <svg
    //             className="w-4 h-4 ml-1"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //         <ul className="lg:absolute lg:left-0 lg:mt-0 lg:w-48 lg:bg-white lg:shadow-lg lg:invisible group-hover:visible bg-gray-50 mt-2 pl-4 lg:pl-0">
    //           <li>
    //             <a
    //               href="/Embedded-Case-study"
    //               className="block px-4 py-2 hover:bg-gray-100"
    //             >
    //               EMBEDDED SYSTEMS
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="/PCB-Design-Case-study"
    //               className="block px-4 py-2 hover:bg-gray-100"
    //             >
    //               PCB DESIGN
    //             </a>
    //           </li>
    //         </ul>
    //       </li>

    //       {/* Resources Dropdown */}
    //       <li className="group relative py-2 lg:py-0">
    //         <button className="flex items-center hover:text-brand-red text-xl">
    //           RESOURCES
    //           <svg
    //             className="w-4 h-4 ml-1"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </button>
    //         <ul className="lg:absolute lg:left-0 lg:mt-0 lg:w-48 lg:bg-white lg:shadow-lg lg:invisible group-hover:visible bg-gray-50 mt-0 pl-4 lg:pl-0">
    //           <li>
    //             <a
    //               href="/PCB-design-resources"
    //               className="block px-4 py-2 hover:bg-gray-100"
    //             >
    //               PCB DESIGN RESOURCES
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="/embedded-system-glossary"
    //               className="block px-4 py-2 hover:bg-gray-100"
    //             >
    //               EMBEDDED SYSTEMS GLOSSARY
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="/pcb-design-glossary"
    //               className="block px-4 py-2 hover:bg-gray-100"
    //             >
    //               PCB DESIGN GLOSSARY
    //             </a>
    //           </li>
    //         </ul>
    //       </li>

    //       <li className="py-2 lg:py-0">
    //         <a
    //           href="/printed-circuit-board-faqs"
    //           className="block hover:text-brand-red text-xl"
    //         >
    //           FAQs
    //         </a>
    //       </li>

    //       <li className="py-2 lg:py-0">
    //         <a href="/careers" className="block hover:text-brand-red text-xl">
    //           CAREERS
    //         </a>
    //       </li>

    //       <li className="py-2 lg:py-0">
    //         <a
    //           href="http://blog.qmaxsys.com/"
    //           target="_blank"
    //           className="block hover:text-brand-red text-xl"
    //         >
    //           BLOG
    //         </a>
    //       </li>

    //       <li className="py-2 lg:py-0">
    //         <a href="/contact" className="block hover:text-brand-red text-xl">
    //           CONTACT
    //         </a>
    //       </li>
    //     </ul>

    //     {/* Right Section - Contact Information */}
    //     {/* <div className="absolute right-3 lg:right-5 hidden lg:block text-brand-red">
    //       <div>
    //         <p className="mb-1 text-lg lg:text-xl">
    //           <i className="fa fa-phone mr-2" aria-hidden="true"></i>
    //           +1 412 265 2314
    //         </p>
    //         <p className="text-lg lg:text-xl">
    //           <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
    //           <a
    //             href="mailto:info@qmaxsys.com"
    //             className="text-brand-red underline"
    //           >
    //             info@qmaxsys.com
    //           </a>
    //         </p>
    //       </div>
    //     </div> */}
    //   </nav>
    //   {/* Navbar spacer - pushes content below the navbar */}
    //   {/* <div className="h-20 sm:h-28 md:h-32 lg:h-20"></div> */}
    // </>
  );
}
