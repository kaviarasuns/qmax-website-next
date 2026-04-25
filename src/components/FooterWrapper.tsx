"use client";

import { usePathname } from "next/navigation";
import FooterV2 from "./footer-v2";

export default function FooterWrapper() {
  const pathname = usePathname();

  if (pathname === "/home-fluid" || pathname === "/") {
    return null;
  }

  return <FooterV2 />;
}
