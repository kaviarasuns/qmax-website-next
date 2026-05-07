'use client';

import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="mb-4 lg:mb-6 text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-[1.1] tracking-tight">
              Let&apos;s Engineer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                Your Next Product
              </span>
            </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Partner with Qmax to engineer your next breakthrough product. Whether you need embedded systems design, PCB design, or full-cycle product development, we&apos;re ready to deliver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-colors flex items-center justify-center gap-2">
              Contact Us Today
              <ArrowRight size={18} />
            </button>
            <Link
              href="/Qmax_Systems_Electronics_Engineering_Services_Std.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black text-black hover:bg-black/10 font-semibold px-8 py-3 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Company Presentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
