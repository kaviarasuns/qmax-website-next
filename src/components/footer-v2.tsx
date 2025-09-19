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
  const downloadUrl = "/qmax-presentation.pdf";
  return (
    <>
      {" "}
      <footer className="bg-zinc-900 text-white h-screen flex flex-col justify-between [&>*]:tracking-wider">
        <div className="mx-auto flex flex-col flex-1 justify-center pb-6">
          <div className="container flex flex-col md:flex-row justify-around gap-12 flex-1 items-center">
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
                Qmax has a Highly experienced, Multi-disciplinary team which can
                bring out the best solution for your requirement in the shortest
                time. Our stringent process and hands-on experience help avoid
                errors, reduces design costs and ensures faster time to market.
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
              <h3 className="text-xl font-semibold mb-4 mt-8">Social Media</h3>
              <p className="mb-4">Get in touch with us on social media.</p>
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

            {/* Contact Us Section (replacing Social Media) */}
            <div className="flex-1 w-full mt-16 md:pt-0">
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

          {/* Logo and Copyright Section */}
          <div className="mt-auto">
            <div className="flex flex-col items-center gap-6">
              {/* <Image
                src="/qmax-logo.svg"
                alt="Qmax Systems Logo"
                className="h-12"
                height={400}
                width={700}
              /> */}
              <div className="text-center">
                <p className="mb-4">
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
