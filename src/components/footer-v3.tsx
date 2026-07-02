"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Facebook, Linkedin, Youtube } from "lucide-react";

import DownloadPresentationModal from "@/components/download-presentation-modal";

const DOWNLOAD_URL = "/Qmax_Systems_Electronics_Engineering_Services_Std.pdf";

const SERVICE_LINKS = [
  {
    label: "Hardware Design Services",
    href: "/hardware-design-services",
  },
  {
    label: "PCB Design Services",
    href: "/pcb-design-services",
  },
  {
    label: "Embedded Design Services",
    href: "/embedded-design-services",
  },
  {
    label: "Mechanical and Industrial Design Services",
    href: "/mechanical-industrial-design-services",
  },
] as const;

const RESOURCE_LINKS = [
  {
    label: "PCB Design Resources",
    href: "/PCB-design-resources",
  },
  {
    label: "Embedded Systems Glossary",
    href: "/embedded-system-glossary",
  },
  {
    label: "PCB Design Glossary",
    href: "/pcb-design-glossary",
  },
] as const;

const QUICK_LINKS_BEFORE_RESOURCES = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about-us" },
] as const;

const QUICK_LINKS_AFTER_RESOURCES = [
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/QMAXSystems/",
    className: "bg-[#1877F2]",
    Icon: Facebook,
  },
  // {
  //   label: "Twitter",
  //   href: "https://x.com/QmaxSystems",
  //   className: "bg-[#1DA1F2]",
  //   Icon: Twitter,
  // },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/qmax-systems-inc/about/",
    className: "bg-[#0A66C2]",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=Ls5EVCXfQI8",
    className: "bg-[#FF0000]",
    Icon: Youtube,
  },
] as const;

const OFFICES = [
  {
    country: "United States",
    name: "Qmax Systems LLC",
    address: [
      "539 W Commerce St #7953",
      "Dallas, TX 75208-1953",
      "United States",
    ],
    phone: "+1 412 265 2314",
    phoneHref: "tel:+14122652314",
  },
  {
    country: "India",
    name: "Qmax Systems India Pvt Ltd",
    address: [
      "310/2A, Rukmani Nagar, 4th Street,",
      "Poonamallee, Chennai 600056,",
      "Tamil Nadu, India",
    ],
    phone: "+91 98402 30903",
    phoneHref: "tel:+919840230903",
  },
] as const;

const EMAIL = "info@qmaxsys.com";

function FooterHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h5
      className={`mb-4 text-[22px] font-semibold uppercase tracking-wider text-white ${className}`}
    >
      {children}
    </h5>
  );
}

function FooterLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-base text-white transition-colors duration-150 hover:text-[#0B5FA5] ${className}`}
    >
      {children}
    </Link>
  );
}

export default function FooterV3() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <footer className="bg-[#18181B] px-[clamp(40px,6vw,96px)] pb-8 pt-20 text-white/70">
      <div className="w-full">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-10 lg:grid-cols-[1.5fr_1fr_0.7fr_1.15fr]">
          {/* About Us */}
          <div>
            <FooterHeading>About Us</FooterHeading>
            <p className="mb-3 text-base leading-relaxed text-white text-justify">
              Qmax Systems is an Electronics Engineering and R&D Services
              company based in San Jose, California and with a development
              center in India. Established in 1997, Qmax provides Embedded
              Systems Design and PCB Design Services.
            </p>
            <p className="text-base leading-relaxed text-white text-justify">
              Qmax Systems brings a highly experienced, multi-disciplinary team
              that delivers the best solution for your requirement in the
              shortest time. A stringent process and hands-on experience help
              avoid errors, reduce design costs, and ensure faster time to
              market.
            </p>
          </div>

          {/* Presentation + Follow Us */}
          <div>
            <FooterHeading>Presentation</FooterHeading>
            <p className="mb-4 text-left text-base leading-relaxed text-white">
              Click here to download our company presentation.
            </p>
            <DownloadPresentationModal downloadUrl={DOWNLOAD_URL} />

            <FooterHeading className="mt-7">Follow Us</FooterHeading>
            <div className="flex gap-3.5">
              {SOCIAL_LINKS.map(({ label, href, className, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`grid h-[54px] w-[54px] place-items-center rounded-md text-white transition-[filter] duration-150 hover:brightness-110 ${className}`}
                >
                  <Icon className="h-[22px] w-[22px]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  className="flex items-center gap-1.5 border-0 bg-transparent p-0 font-[inherit] text-base text-white transition-colors duration-150 hover:text-[#0B5FA5]"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <ul className="m-0 ml-0.5 flex list-none flex-col gap-[13px] border-l border-white/15 py-3.5 pl-4">
                      {SERVICE_LINKS.map(({ label, href }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="text-[15px] text-white transition-colors duration-150 hover:text-[#0B5FA5]"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              {QUICK_LINKS_BEFORE_RESOURCES.map(({ label, href }) => (
                <li key={href}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setResourcesOpen((open) => !open)}
                  className="flex items-center gap-1.5 border-0 bg-transparent p-0 font-[inherit] text-base text-white transition-colors duration-150 hover:text-[#0B5FA5]"
                >
                  Resources
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${resourcesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${resourcesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <ul className="m-0 ml-0.5 flex list-none flex-col gap-[13px] border-l border-white/15 py-3.5 pl-4">
                      {RESOURCE_LINKS.map(({ label, href }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="text-[15px] text-white transition-colors duration-150 hover:text-[#0B5FA5]"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              {QUICK_LINKS_AFTER_RESOURCES.map(({ label, href }) => (
                <li key={href}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <div className="flex flex-col gap-3">
              {OFFICES.map((office) => (
                <div
                  key={office.country}
                  className="overflow-hidden rounded-md border border-white/10"
                >
                  <div className="bg-[#ef4444] px-[18px] py-2.5 text-[15px] font-bold text-white">
                    {office.country}
                  </div>
                  <div className="bg-white/[0.03] p-4 text-[15px] leading-7 text-white">
                    <div className="mb-1 font-bold text-white">
                      {office.name}
                    </div>
                    {office.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                    <div className="mt-2.5">
                      <a
                        href={office.phoneHref}
                        className="block text-white transition-colors duration-150 hover:text-[#0B5FA5]"
                      >
                        {office.phone}
                      </a>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="block text-white transition-colors duration-150 hover:text-[#0B5FA5]"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 w-full border-t border-white/10 pt-6 text-center">
          <p className="mb-3 text-center text-[17px] text-white">
            Copyright &copy; 2026 Qmax Systems India Pvt. Ltd.
          </p>
          <div className="flex flex-wrap justify-center gap-9">
            <Link
              href="#"
              className="text-base text-white transition-colors duration-150 hover:text-[#0B5FA5]"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-base text-white transition-colors duration-150 hover:text-[#0B5FA5]"
            >
              Privacy Information
            </Link>
            <Link
              href="#"
              className="text-base text-white transition-colors duration-150 hover:text-[#0B5FA5]"
            >
              Cookies Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
