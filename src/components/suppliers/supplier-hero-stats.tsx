import { SUPPLIER_STATS } from "./suppliers-data";

// Stats card that overlaps the bottom of the hero, matching the reference
// portal. Pulled up with a negative margin the same way ImpactStatsV2 sits
// under HeroV2 on the About page.
export default function SupplierHeroStats() {
  return (
    <section className="relative z-[5]">
      <div className="mx-auto w-full max-w-[1000px] px-6">
        <div className="-mt-[52px] grid grid-cols-2 gap-px overflow-hidden rounded-md border border-slate-200 bg-slate-200 shadow-lg lg:grid-cols-4">
          {SUPPLIER_STATS.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-[34px] text-center">
              <div className="text-[clamp(30px,4vw,42px)] font-bold leading-none text-foreground">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
