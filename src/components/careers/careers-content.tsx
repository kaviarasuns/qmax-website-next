"use client";

import { Hero } from "./hero";
import { CurrentOpenings } from "./current-openings";
import { CTA } from "./cta";

export function CareersContent() {
  return (
    <>
      <Hero />
      <CurrentOpenings />
      <CTA />
      <div className="p-[25px]"></div>
    </>
  );
}
