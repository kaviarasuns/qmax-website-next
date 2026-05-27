"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Youtube, Download } from "lucide-react";

export default function FooterV2() {
  type CountryKey = "United States" | "India";

  type AddressData = {
    name: string;
    address: string[];
    phone: string;
    email: string;
  };

  const addresses: Record<CountryKey, AddressData> = {
    "United States": {
      name: "Qmax Systems LLC",
      address: [
        "539 W Commerce St # 7953",
        "Dallas, TX 75208 - 1953",
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
  const downloadUrl = "/Qmax_Systems_Electronics_Engineering_Services_Std.pdf";
  return (
    <>
      {" "}
      <footer className="bg-zinc-900 text-white min-h-screen flex flex-col [&>*]:tracking-wider">
        <div className="mx-auto w-full flex flex-col flex-1 px-4 md:px-0">
          <div className="flex-1 flex flex-col justify-center w-full">
            <div className="container mx-auto flex flex-col md:flex-row justify-around gap-12 md:items-start items-center mt-12">
              {/* About Us Section */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">ABOUT US</h2>
                <p className="text-white text-sm leading-relaxed">
                  Qmax Systems is an Electronics Engineering and R&D Services
                  company based in San Jose, California and having development
                  center in India. Established in 1997, Qmax provides Embedded
                  Systems Design and PCB Design Services.
                </p>
                <p className="text-white text-sm mt-4 leading-relaxed">
                  Qmax has a Highly experienced, Multi-disciplinary team which
                  can bring out the best solution for your requirement in the
                  shortest time. Our stringent process and hands-on experience
                  help avoid errors, reduces design costs and ensures faster
                  time to market.
                </p>
              </div>

              {/* Social Media Section */}
              <div className="flex-1">
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
                    className="bg-gray-500 hover:bg-gray-600 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </Link>
                {/* Space before Social Media subsection */}
                <h3 className="text-xl font-semibold mb-4 mt-8">
                  Social Media
                </h3>
                <p className="mb-4 text-white">Get in touch with us on social media.</p>
                <div className="flex gap-6">
                  <Link
                    href="https://www.facebook.com/QMAXSystems/"
                    target="_blank"
                    className="p-2 border border-white rounded hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                  >
                    <Facebook size={24} />
                  </Link>
                  <Link
                    href="https://x.com/QmaxSystems"
                    target="_blank"
                    className="p-2 border border-white rounded hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                  >
                    <Twitter size={24} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/qmax-systems-inc/about/"
                    target="_blank"
                    className="p-2 border border-white rounded hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                  >
                    <Linkedin size={24} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=Ls5EVCXfQI8"
                    target="_blank"
                    className="p-2 border border-white rounded hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                  >
                    <Youtube size={24} />
                  </Link>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="flex-1 w-full mt-16 md:mt-0">
                <h2 className="text-xl font-semibold mb-4">QUICK LINKS</h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="http://blog.qmaxsys.com/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/PCB-design-resources"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      PCB Design Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/embedded-system-glossary"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Embedded Systems Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pcb-design-glossary"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      PCB Design Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/printed-circuit-board-faqs"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us Section (replacing Social Media) */}
              <div className="flex-1 w-full mt-16 md:mt-0">
                <h2 className="text-xl font-semibold mb-4">CONTACT US</h2>
                <div className="space-y-4 w-full">
                  {(Object.keys(addresses) as CountryKey[]).map((country) => (
                    <div
                      key={country}
                      className="mb-4 rounded-lg overflow-hidden border border-zinc-700"
                    >
                      <div className="w-full font-bold text-left p-2 text-sm bg-gray-500 text-white">
                        {country}
                      </div>
                      <div className="p-3 text-sm text-gray-300 bg-zinc-800">
                        <p className="font-semibold text-gray-300">
                          {addresses[country].name}
                        </p>
                        {addresses[country].address.map((line, index) => (
                          <p key={index} className="text-gray-300">{line}</p>
                        ))}
                        <p className="mt-2 text-gray-300">{addresses[country].phone}</p>
                        <button
                          onClick={() => {
                            const timestamp = Date.now();
                            const email = addresses[country].email;
                            const subject = encodeURIComponent(
                              "Inquiry from Qmax Systems Website",
                            );
                            const body = encodeURIComponent(
                              "Hello,\n\nI would like to get in touch with Qmax Systems.\n\nBest regards,",
                            );
                            const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}&_t=${timestamp}`;

                            window.location.href = mailtoUrl;

                            setTimeout(() => {
                              window.open(mailtoUrl, "_blank");
                            }, 100);
                          }}
                          className="text-gray-500 hover:text-gray-300 cursor-pointer bg-transparent border-none p-0 text-left"
                        >
                          {addresses[country].email}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Logo and Copyright Section */}
          <div className="pb-6 w-full mt-auto">
            <div className="flex flex-col items-center gap-6">
              {/* <Image
                src="/qmax-logo.svg"
                alt="Qmax Systems Logo"
                className="h-12"
                height={400}
                width={700}
              /> */}
              <div className="text-center">
                <p className="mb-4 text-white">
                  Copyright © 2025 Qmax Systems India Pvt. Ltd.
                </p>
                <div className="flex justify-center gap-6 text-sm text-zinc-400">
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Information
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookies Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
