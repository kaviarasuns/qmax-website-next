
import MechanicalDesignServicesPageV1 from "@/components/MechanicalDesignServicesV1";
import MechanicalDesignServicesPageV2 from "@/components/MechanicalDesignServicesV2";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mechanical Design Services | Qmax",
  description: "End-to-end precision mechanical engineering for electronics products.",
};

export default function MechanicalDesignServicesPage() {
  return <MechanicalDesignServicesPageV1 />
}
