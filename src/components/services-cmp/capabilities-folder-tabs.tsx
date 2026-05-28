"use client";

import Image from "next/image";
import { useId, useState, type ReactNode } from "react";
import { CapabilitiesTabs } from "./CapabilitiesTabs";
import { cn } from "@/lib/utils";

export type CapabilitiesFolderTabItem = {
  id: string;
  tabLabel: string;
  tabIcon?: ReactNode;
  description: string;
  media?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
};

export type CapabilitiesFolderTabsProps = {
  heading?: ReactNode;
  headingHighlight?: string;
  capabilities: CapabilitiesFolderTabItem[];
  className?: string;
  defaultActiveId?: string;
};

const TAB_ICON_CLASS =
  "h-3.5 w-3.5 shrink-0 stroke-current fill-none [stroke-width:1.6]";

function PanelMedia({ item }: { item: CapabilitiesFolderTabItem }) {
  if (item.media) return <>{item.media}</>;

  if (item.videoSrc) {
    return (
      <video
        src={item.videoSrc}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-label={item.imageAlt ?? item.tabLabel}
      />
    );
  }

  if (item.imageSrc) {
    return (
      <Image
        src={item.imageSrc}
        alt={item.imageAlt ?? item.tabLabel}
        fill
        className="object-cover"
        sizes="(max-width: 1100px) 100vw, 880px"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200" aria-hidden>
      <span className="text-[11px] uppercase tracking-[0.14em] text-zinc-400">
        Image / Video
      </span>
    </div>
  );
}

export function CapabilitiesFolderTabs({
  heading = "Core",
  headingHighlight = "Capabilities",
  capabilities,
  className,
  defaultActiveId,
}: CapabilitiesFolderTabsProps) {
  const baseId = useId();
  const resolvedDefaultIdx =
    defaultActiveId != null
      ? capabilities.findIndex((c) => c.id === defaultActiveId)
      : 0;
  const [activeIdx, setActiveIdx] = useState(
    resolvedDefaultIdx >= 0 ? resolvedDefaultIdx : 0,
  );

  if (!capabilities.length) return null;

  return (
    <section
      className={cn("bg-white px-6 py-16 sm:px-12 lg:py-24", className)}
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-[52px]">
          <h2
            id={`${baseId}-heading`}
            className="text-center text-3xl font-light tracking-wide md:text-5xl"
          >
            {heading}{" "}
            <span className="text-red-500">{headingHighlight}</span>
          </h2>
        </div>

        <CapabilitiesTabs
          capabilities={capabilities}
          activeIdx={activeIdx}
          onTabClick={setActiveIdx}
        />

        <div>
          {capabilities.map((cap, index) => {
            const isActive = activeIdx === index;
            const panelId = `${baseId}-panel-${cap.id}`;

            return (
              <div
                key={cap.id}
                id={panelId}
                role="tabpanel"
                aria-label={cap.tabLabel}
                hidden={!isActive}
                className={cn(
                  "pb-12 text-center",
                  isActive && "animate-[folder-tab-panel-in_0.35s_ease]",
                )}
              >
                <p className="mx-auto mb-9 max-w-[640px] text-base leading-[1.8] text-foreground">
                  {cap.description}
                </p>
                <div className="relative mx-auto aspect-video max-w-[880px] overflow-hidden rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.08)]">
                  <PanelMedia item={cap} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes folder-tab-panel-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

/** Default tab icons from the V3 folder-tab reference. */
export const FOLDER_TAB_ICONS = {
  productStory: (
    <svg viewBox="0 0 24 24" className={TAB_ICON_CLASS} aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  cad3d: (
    <svg viewBox="0 0 24 24" className={TAB_ICON_CLASS} aria-hidden>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    </svg>
  ),
  uiUx: (
    <svg viewBox="0 0 24 24" className={TAB_ICON_CLASS} aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  renders: (
    <svg viewBox="0 0 24 24" className={TAB_ICON_CLASS} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85" />
    </svg>
  ),
  prototyping: (
    <svg viewBox="0 0 24 24" className={TAB_ICON_CLASS} aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
} as const;
