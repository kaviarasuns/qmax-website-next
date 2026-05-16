"use client";

import { useState } from "react";
import { CapabilitiesPanels } from "./CapabilitiesPanels";
import { CapabilitiesTabs } from "./CapabilitiesTabs";
import type { CapabilitiesStripItem } from "./CapabilitiesStripSection";

interface Capability {
  id: string;
  tabLabel: string;
  learnMoreHref: string;
  tabIcon: React.ReactNode;
  headline: string;
  intro: string;
  bullets: { title: string; items: string[] }[];
  deliverables?: CapabilitiesStripItem[];
  deliverablesAriaLabel?: string;
}

interface CapabilitiesSectionProps {
  capabilities: Capability[];
  getInTouchHref?: string;
}

export function CapabilitiesSection({
  capabilities,
  getInTouchHref = "/pcb-design/contact",
}: CapabilitiesSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <section className="bg-white px-16 py-24 max-[900px]:px-6 max-[900px]:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="m-0 p-0">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-center">
              Core Engineering{" "}
              <span className="text-brand-500">Capabilities</span>
            </h2>
            {/* <p>We deliver high-performance designs validated by decades of experience. Our HW engineering stack covers:</p> */}
          </div>
          {/* Tabs */}
          <CapabilitiesTabs
            capabilities={capabilities}
            activeIdx={activeIdx}
            onTabClick={setActiveIdx}
          />
          {/* Panels */}
          <CapabilitiesPanels
            capabilities={capabilities}
            activeIdx={activeIdx}
            getInTouchHref={getInTouchHref}
          />
        </div>
      </section>
      <style jsx>{`
        @keyframes panelIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
