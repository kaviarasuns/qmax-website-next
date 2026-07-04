"use client";

import { useCallback, useState } from "react";

import CategoriesSection from "./categories-section";
import HowItWorksSection from "./how-it-works-section";
import MarketsSection from "./markets-section";
import RegisterSection from "./register-section";

// Owns the shared category/market selection so the Categories and Markets
// sections stay in sync with the summaries and dropdown in the Register form.
export default function SupplierPortal() {
  const [categories, setCategories] = useState<Set<string>>(new Set());
  const [markets, setMarkets] = useState<Set<string>>(new Set());

  const toggle = useCallback(
    (setter: React.Dispatch<React.SetStateAction<Set<string>>>) =>
      (name: string) =>
        setter((prev) => {
          const next = new Set(prev);
          if (next.has(name)) {
            next.delete(name);
          } else {
            next.add(name);
          }
          return next;
        }),
    [],
  );

  return (
    <>
      <CategoriesSection selected={categories} onToggle={toggle(setCategories)} />
      <MarketsSection selected={markets} onToggle={toggle(setMarkets)} />
      <HowItWorksSection />
      <RegisterSection
        categories={[...categories]}
        markets={[...markets]}
        onRemoveCategory={toggle(setCategories)}
        onRemoveMarket={toggle(setMarkets)}
      />
    </>
  );
}
