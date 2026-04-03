import type { Metadata } from "next";

import IndustrialDesignServicesPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Industrial Design Services | Qmax Systems",
  description:
    "At Qmax Systems, our Industrial Design practice integrates visual, ergonomic, and manufacturing considerations from the earliest stage of product development — ensuring that every design decision is grounded in engineering reality.",
};

export default function IndustrialDesignServicesPage() {
  return <IndustrialDesignServicesPageClient />;
}
