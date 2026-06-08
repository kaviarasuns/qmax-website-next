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
      <footer className="bg-zinc-900 text-white min-h-screen md:h-[100svh] md:overflow-hidden flex flex-col md:pt-[var(--nav-h)] [&>*]:tracking-wider">
        <div className="mx-auto w-full flex flex-col flex-1 px-4 sm:px-6 lg:px-8">
          <div className="flex-1 flex flex-col justify-center w-full">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 md:items-start items-center mt-12 md:mt-0">
              {/* About Us Section */}
              <div className="min-w-0">
                <div className="text-xl font-semibold mb-4">ABOUT US</div>
                <p className="text-white text-sm leading-relaxed">
                  Qmax Systems is an Electronics Engineering and R&D Services
                  company based in San Jose, California and having development
                  center in India. Established in 1997, Qmax provides Embedded
                  Systems Design and PCB Design Services.
                </p>
                <p className="text-white text-sm mt-4 leading-relaxed">
                  Qmax Systems brings a highly experienced, multi-disciplinary
                  team that delivers the best solution for your requirement in
                  the shortest time. A stringent process and hands-on experience
                  help avoid errors, reduce design costs, and ensure faster
                  time to market.
                </p>
              </div>

              {/* Social Media Section */}
              <div className="min-w-0">
                <div className="text-xl font-semibold mb-4">PRESENTATION</div>
                <p className="text-white mb-4">
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
                <div className="text-xl font-semibold mb-4 mt-8">
                  Social Media
                </div>
                <p className="mb-4 text-white">
                  Get in touch with us on social media.
                </p>
                <div className="flex gap-6">
                  <Link
                    href="https://www.facebook.com/QMAXSystems/"
                    target="_blank"
                    className="p-2 border border-white rounded hover:text-white hover:border-white transition-colors"
                  >
                    <Facebook size={24} />
                  </Link>
                  <Link
                    href="https://x.com/QmaxSystems"
                    target="_blank"
                    className="p-2 border border-white rounded hover:text-white hover:border-white transition-colors"
                  >
                    <Twitter size={24} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/qmax-systems-inc/about/"
                    target="_blank"
                    className="p-2 border border-white rounded hover:text-white hover:border-white transition-colors"
                  >
                    <Linkedin size={24} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/watch?v=Ls5EVCXfQI8"
                    target="_blank"
                    className="p-2 border border-white rounded hover:text-white hover:border-white transition-colors"
                  >
                    <Youtube size={24} />
                  </Link>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="min-w-0 w-full mt-16 md:mt-0 md:flex md:flex-col md:items-center">
                <div className="text-xl font-semibold mb-4">QUICK LINKS</div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-white hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-white hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="text-white hover:text-white transition-colors"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-white hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us Section (replacing Social Media) */}
              <div className="min-w-0 w-full mt-16 md:mt-0">
                <div className="text-xl font-semibold mb-4">CONTACT US</div>
                <div className="space-y-4 w-full">
                  {(Object.keys(addresses) as CountryKey[]).map((country) => (
                    <div
                      key={country}
                      className="mb-4 rounded-lg overflow-hidden border border-zinc-700"
                    >
                      <div className="w-full font-bold text-left p-2 text-sm bg-gray-500 text-white">
                        {country}
                      </div>
                      <div className="p-3 text-sm text-white bg-zinc-800">
                        <p className="font-semibold text-white">
                          {addresses[country].name}
                        </p>
                        {addresses[country].address.map((line, index) => (
                          <p key={index} className="text-white">
                            {line}
                          </p>
                        ))}
                        <p className="mt-2 text-white">
                          {addresses[country].phone}
                        </p>
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
                          className="text-white hover:text-white cursor-pointer bg-transparent border-none p-0 text-left"
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
          <div className="pb-6 w-full mt-auto text-center">
            <div className="container mx-auto flex flex-col items-center gap-6">
              {/* <Image
                src="/qmax-logo.svg"
                alt="Qmax Systems Logo"
                className="h-12"
                height={400}
                width={700}
              /> */}
              <div className="w-full text-center">
                <p className="mb-4 text-white text-center">
                  Copyright © 2026 Qmax Systems India Pvt. Ltd.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white text-center">
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
