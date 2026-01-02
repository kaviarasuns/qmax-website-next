"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    router.push("/"); // Programmatically navigate to home
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between p-3 bg-white shadow-md">
        {/* Logo */}
        <div className="w-40 h-auto sm:w-44 md:w-48 lg:w-56 transition-all duration-300">
          <Link
            href="/"
            title="Back to Home"
            className="block"
            onClick={handleHomeClick}
          >
            <Image
              src="https://d1yetprhniwywz.cloudfront.net/QMAXSYSTEMS-new-logo.svg"
              className="pl-3 w-full h-auto object-contain transform scale-[1.3] origin-left"
              width={800}
              height={800}
              alt="Qmax PCB Design Logo"
              priority
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:space-x-8  lg:items-center mt-4 lg:mt-0 lg:flex-1 lg:justify-center`}
        >
          <li className="py-2 lg:py-0">
            <Link
              href="/"
              className="block hover:text-brand-red text-xl"
              onClick={handleHomeClick}
            >
              HOME
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="group relative py-2 lg:py-0">
            <button className="flex items-center hover:text-brand-red text-xl">
              SERVICES
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className="lg:absolute lg:left-0 lg:mt-0 lg:w-48 lg:bg-white lg:shadow-lg lg:invisible group-hover:visible bg-gray-50 mt-2 pl-4 lg:pl-0">
              <li>
                <a
                  href="/embedded-design-services"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  EMBEDDED SYSTEMS
                </a>
              </li>
              <li>
                <a
                  href="/pcb-design"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  PCB DESIGN
                </a>
              </li>
            </ul>
          </li>

          {/* Case Studies Dropdown */}
          <li className="group relative py-2 lg:py-0">
            <button className="flex items-center hover:text-brand-red text-xl">
              CASE STUDIES
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className="lg:absolute lg:left-0 lg:mt-0 lg:w-48 lg:bg-white lg:shadow-lg lg:invisible group-hover:visible bg-gray-50 mt-2 pl-4 lg:pl-0">
              <li>
                <a
                  href="/Embedded-Case-study"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  EMBEDDED SYSTEMS
                </a>
              </li>
              <li>
                <a
                  href="/PCB-Design-Case-study"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  PCB DESIGN
                </a>
              </li>
            </ul>
          </li>

          {/* Resources Dropdown */}
          <li className="group relative py-2 lg:py-0">
            <button className="flex items-center hover:text-brand-red text-xl">
              RESOURCES
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className="lg:absolute lg:left-0 lg:mt-0 lg:w-48 lg:bg-white lg:shadow-lg lg:invisible group-hover:visible bg-gray-50 mt-0 pl-4 lg:pl-0">
              <li>
                <a
                  href="/PCB-design-resources"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  PCB DESIGN RESOURCES
                </a>
              </li>
              <li>
                <a
                  href="/embedded-system-glossary"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  EMBEDDED SYSTEMS GLOSSARY
                </a>
              </li>
              <li>
                <a
                  href="/pcb-design-glossary"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  PCB DESIGN GLOSSARY
                </a>
              </li>
            </ul>
          </li>

          <li className="py-2 lg:py-0">
            <a
              href="/printed-circuit-board-faqs"
              className="block hover:text-brand-red text-xl"
            >
              FAQs
            </a>
          </li>

          <li className="py-2 lg:py-0">
            <a href="/careers" className="block hover:text-brand-red text-xl">
              CAREERS
            </a>
          </li>

          <li className="py-2 lg:py-0">
            <a
              href="http://blog.qmaxsys.com/"
              target="_blank"
              className="block hover:text-brand-red text-xl"
            >
              BLOG
            </a>
          </li>

          <li className="py-2 lg:py-0">
            <a href="/contact" className="block hover:text-brand-red text-xl">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Contact Information */}
        <div className="hidden lg:block text-brand-red ml-auto">
          <p className="mb-1 text-lg">
            <i className="fa fa-phone mr-2" aria-hidden="true"></i>
            +1 412 265 2314
          </p>
          <p className="text-lg">
            <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
            <a
              href="mailto:info@qmaxsys.com"
              className="text-brand-red underline"
            >
              info@qmaxsys.com
            </a>
          </p>
        </div>
      </nav>
      {/* Navbar spacer - pushes content below the navbar */}
      <div className="h-14 sm:h-20 md:h-24 lg:h-20"></div>
    </>
  );
}
