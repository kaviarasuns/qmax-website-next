"use client";

import { useEffect, useState } from "react";

const STATS = [
  { value: 25, suffix: "+", label: "Years of Engineering Excellence" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Global Clients" },
  { value: 2, suffix: "", label: "Global Offices (USA & India)" },
];

export default function ImpactStatsV2() {
  const [counts, setCounts] = useState(() => STATS.map(() => 0));

  useEffect(() => {
    const steps = 64;
    let step = 0;
    const id = window.setInterval(() => {
      step += 1;
      const progress = Math.min(step / steps, 1);
      setCounts(STATS.map((stat) => Math.round(stat.value * progress)));
      if (step >= steps) window.clearInterval(id);
    }, 52);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative z-[5]">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="-mt-[52px] grid grid-cols-1 gap-px overflow-hidden rounded-md border border-slate-200 bg-slate-200 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white px-6 py-[34px] text-center"
            >
              <div className="text-[clamp(30px,4vw,42px)] font-bold leading-none text-foreground">
                {counts[idx]}
                {stat.suffix ? (
                  <span className="text-red-500">{stat.suffix}</span>
                ) : null}
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
