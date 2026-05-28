"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { CapabilitiesTabs } from "./CapabilitiesTabs";
import { ConnectedTabPanel } from "./ConnectedTabPanel";

export type HighSpeedCorePoint = string | { boldLead: string; rest: string };

export type HighSpeedCoreOffering = {
  id: string;
  tab: string;
  tabIcon?: ReactNode;
  headline: string;
  intro: string;
  points: HighSpeedCorePoint[];
  applications: string;
};

interface CoreServiceOfferingsSectionProps {
  offerings: HighSpeedCoreOffering[];
  title?: string;
  titleHighlight?: string;
}

export function CoreServiceOfferingsSection({
  offerings,
  title = "Our Core Service ",
  titleHighlight = "Offerings",
}: CoreServiceOfferingsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeOffering = offerings[activeIdx] ?? offerings[0];

  const tabCapabilities = useMemo(
    () =>
      offerings.map((item) => ({
        id: item.id,
        tabLabel: item.tab,
        tabIcon: item.tabIcon,
      })),
    [offerings],
  );

  if (!activeOffering) {
    return null;
  }

  return (
    <section className="px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-light tracking-tight md:text-5xl">
          {title}
          <span className="text-red-500">{titleHighlight}</span>
        </h2>

        <CapabilitiesTabs
          capabilities={tabCapabilities}
          activeIdx={activeIdx}
          onTabClick={setActiveIdx}
          connectedCard
        />

        <ConnectedTabPanel className="grid gap-10 py-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <h3 className="max-w-xl text-2xl font-light leading-tight tracking-tight md:text-4xl">
              {activeOffering.headline}
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/hardware-development-services"
                className="rounded-md border border-slate-900 px-6 py-2.5 text-sm font-medium text-foreground transition hover:bg-slate-900 hover:text-white"
              >
                Learn more
              </a>
              <a
                href="/hardware-development-services/contact"
                className="rounded-md border border-red-500 bg-red-500 px-6 py-2.5 text-sm font-medium text-white transition hover:border-red-600 hover:bg-red-600"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium">What we deliver</h4>
            <p className="mt-4 text-sm leading-7 text-foreground md:text-base">
              {activeOffering.intro}
            </p>
            <ul className="mt-6 space-y-4">
              {activeOffering.points.map((point, index) => (
                <li
                  key={`${activeOffering.id}-${index}`}
                  className="relative pl-6 text-sm leading-7 text-foreground md:text-base"
                >
                  <span className="absolute left-0 top-3 h-2 w-2 rounded-full bg-[#F33117]" />
                  {typeof point === "string" ? (
                    point
                  ) : (
                    <>
                      <span className="font-bold text-foreground">
                        {point.boldLead}
                      </span>
                      {point.rest}
                    </>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-7 text-foreground md:text-[15px]">
              <span className="font-semibold text-foreground">
                Typical applications:
              </span>{" "}
              {activeOffering.applications}
            </p>
          </div>
        </ConnectedTabPanel>
      </div>
    </section>
  );
}
