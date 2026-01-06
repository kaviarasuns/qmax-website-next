"use client";

import { usePathname } from "next/navigation";
import ContactUsButton from "./ContactUsButton";

export default function ContactUsButtonWrapper() {
  const pathname = usePathname();

  // Don't show the button on the contact page
  if (pathname === "/contact") {
    return null;
  }

  return <ContactUsButton />;
}
