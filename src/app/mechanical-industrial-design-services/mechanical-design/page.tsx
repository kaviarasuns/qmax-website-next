
import MechanicalDesignServicesPageV1 from "@/components/MechanicalDesignServicesV1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanical Design Services | Qmax",
  description: "End-to-end precision mechanical engineering for electronics products.",
};

export default function MechanicalDesignServicesPage() {
  return <MechanicalDesignServicesPageV1 />
}
