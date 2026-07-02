import type { Metadata } from "next";

import HeroV2 from "@/components/about-v2/HeroV2";
import SupplierHeroStats from "@/components/suppliers/supplier-hero-stats";
import SupplierPortal from "@/components/suppliers/supplier-portal";

export const metadata: Metadata = {
  title: "Supplier Portal | Qmax Systems",
  description:
    "Partner with Qmax Systems. We're sourcing PCBs, components, enclosures, assembly and testing services across 7 global markets. Register your company to join our verified supplier network.",
};

export default function SuppliersPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroV2
        id="suppliers-hero"
        title={
          <>
            Partner with Qmax.
            <br />
            Supply precision hardware
          </>
        }
        description="We're actively sourcing components, assemblies, and services across 7 global markets. Register your company profile to be evaluated for our verified supplier network."
        buttons={[
          {
            label: "Register as Supplier",
            href: "#register",
            variant: "solid",
          },
          {
            label: "View Open Categories",
            href: "#categories",
            variant: "outline",
          },
        ]}
      />
      <SupplierHeroStats />
      <SupplierPortal />
    </main>
  );
}
