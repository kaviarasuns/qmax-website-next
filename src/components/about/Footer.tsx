'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-extrabold">
              <span className="text-white">QMAX</span>
              <span className="text-red-500"> SYSTEMS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Electronics Engineering & R&D Services Specialist. Embedded Systems & PCB Design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">Home</Link></li>
              <li><a href="/services" className="text-gray-400 hover:text-red-500 transition-colors">Services</a></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-red-500 transition-colors">Case Studies</Link></li>
              <li><a href="/about" className="text-gray-400 hover:text-red-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* US Contact */}
          <div>
            <h4 className="font-extrabold text-white mb-4">United States</h4>
            <div className="text-sm space-y-3 text-gray-400">
              <p>14105 Willow Tank Drive<br />Austin, TX 78717</p>
              <a href="tel:+14122652314" className="text-red-500 hover:text-red-400 transition-colors font-semibold">+1 412 265 2314</a>
              <br />
              <a href="mailto:info@qmaxsys.com" className="text-red-500 hover:text-red-400 transition-colors font-semibold">info@qmaxsys.com</a>
            </div>
          </div>

          {/* India Contact */}
          <div>
            <h4 className="font-extrabold text-white mb-4">India</h4>
            <div className="text-sm space-y-3 text-gray-400">
              <p>310/2A Rukmani Nagar 4th Street<br />Poonamallee, Chennai 600056<br />Tamil Nadu</p>
              <a href="tel:+919840230903" className="text-red-500 hover:text-red-400 transition-colors font-semibold">+91 98402 30903</a>
              <br />
              <a href="mailto:info@qmaxsys.com" className="text-red-500 hover:text-red-400 transition-colors font-semibold">info@qmaxsys.com</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 1997-2024 Qmax Systems. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:info@qmaxsys.com" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
