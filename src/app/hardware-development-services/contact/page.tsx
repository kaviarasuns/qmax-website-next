import type { Metadata } from "next";
import HardwareContactHero from "./HardwareContactHero";

export const metadata: Metadata = {
  title: "Interested in Hardware Design? | Qmax Systems",
  description:
    "Get in touch with Qmax Systems for hardware design and development services. Tell us about your project and we'll get back within 24 hours.",
};

export default function HardwareDevelopmentServicesContactPage() {
  return <HardwareContactHero />;
}
