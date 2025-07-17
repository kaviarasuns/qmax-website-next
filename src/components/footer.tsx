"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUp,
  Check,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type CountryKey = "United States" | "India";
//  | "Belgium" | "Canada" |

type AddressData = {
  name: string;
  address: string[];
  phone: string;
  email: string;
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addresses: Record<CountryKey, AddressData> = {
    "United States": {
      name: "Qmax Systems LLC",
      address: [
        "14105, Willow Tank Drive",
        "Austin, TX 78717",
        "United States",
      ],
      phone: "+1 412 265 2314",
      email: "info@qmaxsys.com",
    },
    India: {
      name: "Qmax Systems India Pvt Ltd",
      address: [
        "310/2A, Rukmani Nagar, 4th street,",
        "Poonamallee, Chennai 600056,",
        "Tamil Nadu, India",
      ],
      phone: "+91 98402 30903",
      email: "info@qmaxsys.com",
    },
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/embedded-design-services" },
    { name: "Case Studies", href: "/Embedded-Case-study" },
    { name: "Resources", href: "/PCB-design-resources" },
    { name: "FAQ's", href: "/printed-circuit-board-faqs" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const downloadUrl =
    "https://d1yetprhniwywz.cloudfront.net/brochure/Qmax%20Systems_Electronics%20Engineering%20Services_Std.pdf";

  return (
    <>
      <footer className="bg-zinc-900 text-white pt-12 pb-4 [&>*]:tracking-wider">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">ABOUT US</h2>
              <p className="text-white text-sm leading-relaxed">
                Qmax Systems is an Electronics Engineering and R&D Services
                company based in San Jose, California and having development
                center in India. Established in 1997, Qmax provides Embedded
                Systems Design and PCB Design Services.
              </p>
              <p className="text-white text-sm mt-4 leading-relaxed">
                Qmax has a Highly experienced, Multi-disciplinary team which can
                bring out the best solution for your requirement in the shortest
                time. Our stringent process and hands-on experience help avoid
                errors, reduces design costs and ensures faster time to market.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col md:items-start lg:items-center">
              <h2 className="text-xl font-semibold mb-4">QUICK LINKS</h2>
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-[#FF1111] transition-colors flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-[#FE0000]" />
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-[#FF1111] transition-colors flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Check className="w-4 h-4 text-[#FE0000]" />
                      {item.name}
                    </a>
                  )
                )}
              </nav>
            </div>

            {/* Presentation Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">PRESENTATION</h2>
              <p className="text-gray-300 mb-4">
                Click here to download our company presentation.
              </p>
              <Link
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  className="bg-brand-red hover:bg-[#FF1111] text-white"
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </Link>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">FOLLOW US</h2>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: Facebook,
                      bg: "bg-[#3b5998]",
                      href: "https://www.facebook.com/QMAXSystems/",
                    },
                    {
                      icon: Twitter,
                      bg: "bg-[#00acee]",
                      href: "https://x.com/QmaxSystems",
                    },
                    {
                      icon: Linkedin,
                      bg: "bg-[#0e76a8]",
                      href: "https://www.linkedin.com/company/qmax-systems-inc/about/",
                    },
                    {
                      icon: Youtube,
                      bg: "bg-[#c4302b]",
                      href: "https://youtu.be/Ls5EVCXfQI8?si=WyhKXkAS8SW_7JjV",
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className={`${social.bg} p-2 rounded-full hover:opacity-80 transition-opacity`}
                    >
                      <social.icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>
              <div className="space-y-4">
                {(Object.keys(addresses) as CountryKey[]).map((country) => (
                  <div key={country} className="mb-4">
                    <div className="w-full font-bold text-left p-2 text-sm bg-brand-red text-white">
                      {country}
                    </div>
                    <div className="p-3 text-sm text-gray-300 bg-zinc-800">
                      <p className="font-semibold">{addresses[country].name}</p>
                      {addresses[country].address.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                      <p className="mt-2">{addresses[country].phone}</p>
                      <button
                        onClick={() => {
                          const timestamp = Date.now();
                          const email = addresses[country].email;
                          const subject = encodeURIComponent(
                            "Inquiry from Qmax Systems Website"
                          );
                          const body = encodeURIComponent(
                            "Hello,\n\nI would like to get in touch with Qmax Systems.\n\nBest regards,"
                          );
                          const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}&_t=${timestamp}`;

                          // Try to open the mailto link
                          window.location.href = mailtoUrl;

                          // Fallback: if the above doesn't work, try opening in a new window
                          setTimeout(() => {
                            window.open(mailtoUrl, "_blank");
                          }, 100);
                        }}
                        className="text-brand-red hover:text-[#FF1111] cursor-pointer bg-transparent border-none p-0 text-left"
                      >
                        {addresses[country].email}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </footer>
      {/* Copyright */}
      <div className="py-4 text-center">Copyright © 2025 Qmax Systems.</div>
    </>
  );
}
