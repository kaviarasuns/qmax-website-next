import {
  CapabilitiesStrip,
  type CapabilitiesStripItem,
} from "./CapabilitiesStripSection";

interface DeliverablesCapability {
  id: string;
  deliverables?: CapabilitiesStripItem[];
  deliverablesAriaLabel?: string;
}

interface CapabilitiesDeliverablesCardProps {
  capabilities: DeliverablesCapability[];
  activeIdx: number;
}

const deliverablesCardClasses =
  "mt-6 rounded-[15px] bg-qmax-grey px-6 py-8 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] min-[901px]:px-10 min-[901px]:py-10";

export function CapabilitiesDeliverablesCard({
  capabilities,
  activeIdx,
}: CapabilitiesDeliverablesCardProps) {
  const hasDeliverables = capabilities.some(
    (capability) => capability.deliverables && capability.deliverables.length > 0,
  );

  if (!hasDeliverables) return null;

  return (
    <>
      {capabilities.map((capability, index) => {
        if (!capability.deliverables?.length) return null;

        return (
          <div
            key={capability.id}
            className={
              activeIdx === index
                ? `block [animation:panelIn_460ms_ease] ${deliverablesCardClasses}`
                : "hidden"
            }
          >
            {capability.deliverablesAriaLabel && (
              <h3 className="mb-8 text-xl font-light tracking-wide text-black md:text-2xl">
                {capability.deliverablesAriaLabel}
              </h3>
            )}
            <CapabilitiesStrip
              items={capability.deliverables}
              ariaLabel={capability.deliverablesAriaLabel}
              variant="cards"
            />
          </div>
        );
      })}
    </>
  );
}
