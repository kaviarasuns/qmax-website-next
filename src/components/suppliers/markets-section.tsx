import { cn } from "@/lib/utils";

import SectionHeading from "./section-heading";
import { SUPPLIER_MARKETS } from "./suppliers-data";

type MarketsSectionProps = {
  selected: Set<string>;
  onToggle: (name: string) => void;
};

// Target markets the procurement team is sourcing from. Selecting a market
// also pre-fills the "Primary Market" dropdown in the registration form.
export default function MarketsSection({
  selected,
  onToggle,
}: MarketsSectionProps) {
  return (
    <section id="markets" className="bg-white py-[72px]">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <SectionHeading
          eyebrow="Target Markets"
          title={
            <>
              Where we <span className="text-red-500">source</span>
            </>
          }
          subtitle="We're seeking qualified suppliers based in or operating in these regions."
        />

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
          {SUPPLIER_MARKETS.map((market) => {
            const isSelected = selected.has(market.name);
            return (
              <button
                key={market.name}
                type="button"
                role="checkbox"
                aria-checked={isSelected}
                onClick={() => onToggle(market.name)}
                className={cn(
                  "rounded-lg border px-2 py-[18px] text-center transition-[border-color,transform,box-shadow,background-color] duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500",
                  isSelected
                    ? "border-red-500 bg-red-500/[0.07]"
                    : "border-border bg-white hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_8px_20px_rgba(0,0,0,0.07)]",
                )}
              >
                <span className="mb-2 block text-2xl leading-none">
                  {market.flag}
                </span>
                <span className="block text-base font-medium tracking-wide text-foreground">
                  {market.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
