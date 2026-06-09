"use client";

import { useState } from "react";
import { CapabilitiesPanels } from "./CapabilitiesPanels";
import { CapabilitiesTabs } from "./CapabilitiesTabs";
import { ConnectedTabPanel } from "./ConnectedTabPanel";
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
  title?: string;
  titleHighlight?: string;
  getInTouchHref?: string;
}

export function CapabilitiesSection({
  capabilities,
  title = "Hardware",
  titleHighlight = "Capabilities",
  getInTouchHref = "/pcb-design-services/contact",
}: CapabilitiesSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="m-0 p-0">
            <h2 className="text-center text-3xl font-light tracking-tight md:text-5xl">
              {title} <span className="text-red-500">{titleHighlight}</span>
            </h2>
            {/* <p>We deliver high-performance designs validated by decades of experience. Our HW engineering stack covers:</p> */}
          </div>
          {/* Tabs */}
          <CapabilitiesTabs
            capabilities={capabilities}
            activeIdx={activeIdx}
            onTabClick={setActiveIdx}
            connectedCard
          />
          <ConnectedTabPanel>
            <CapabilitiesPanels
              capabilities={capabilities}
              activeIdx={activeIdx}
              getInTouchHref={getInTouchHref}
            />
          </ConnectedTabPanel>
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
