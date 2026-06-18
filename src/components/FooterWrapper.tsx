"use client";

import { usePathname } from "next/navigation";
import FooterV3 from "./footer-v3";

export default function FooterWrapper() {
  const pathname = usePathname();

  if (
    pathname === "/home-fluid" ||
    pathname === "/" ||
    pathname === "/contact"
  ) {
    return null;
  }

  return <FooterV3 />;
}
