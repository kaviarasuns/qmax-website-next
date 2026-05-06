import type { Metadata } from "next";
import HardwareDevelopmentServicesComponentV2 from "@/components/hardware-development-services-v2";

export const metadata: Metadata = {
  title: "Hardware Development Services | Qmax",
  description:
    "Hardware development services with complete lifecycle ownership from requirements to production handover.",
};

export default function HardwareDevelopmentServicesPage() {
  return <HardwareDevelopmentServicesComponentV2 />;
}
