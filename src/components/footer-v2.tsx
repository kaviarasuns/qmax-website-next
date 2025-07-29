"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FooterV2() {
  return (
    <>
      <footer className="bg-zinc-900 text-white pt-20 pb-8 [&>*]:tracking-wider">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            {/* Newsletter Section */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Latest news directly in your inbox.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded bg-zinc-800 text-white"
                />
                <Button
                  variant="outline"
                  className="whitespace-nowrap text-black"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="mb-4">Do you have any questions?</p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="whitespace-nowrap text-black"
                >
                  Contact Form
                </Button>
              </Link>
            </div>

            {/* Social Media Section */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <p className="mb-4">Get in touch with us on social media.</p>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="p-2 border border-white rounded hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="#"
                  className="p-2 border border-white rounded hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                >
                  <Twitter size={24} />
                </Link>
                <Link
                  href="#"
                  className="p-2 border border-white rounded hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="#"
                  className="p-2 border border-white rounded hover:text-zinc-400 hover:border-zinc-400 transition-colors"
                >
                  <Youtube size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Logo and Copyright Section */}
          <div className="border-t border-zinc-800 pt-8 mt-8">
            <div className="flex flex-col items-center gap-6">
              <Image
                src="https://d1yetprhniwywz.cloudfront.net/QMAXSYSTEMS-new-logo.svg"
                alt="Qmax Systems Logo"
                className="h-12"
                height={400}
                width={700}
              />
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
