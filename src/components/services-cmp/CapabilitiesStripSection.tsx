export interface CapabilitiesStripItem {
  title: string;
  description: string;
}

interface CapabilitiesStripProps {
  items: CapabilitiesStripItem[];
  className?: string;
  ariaLabel?: string;
}

function deliverablesGridClass(count: number): string {
  if (count <= 1) return "grid-cols-1";
  if (count <= 2) return "grid-cols-1 sm:grid-cols-2";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
}

export function CapabilitiesStrip({
  items,
  className = "",
  ariaLabel = "Engineering Deliverables",
}: CapabilitiesStripProps) {
  if (items.length === 0) return null;

  return (
    <div
      className={`grid gap-8 rounded-xl bg-[#F7F7F8] px-8 py-10 max-[600px]:px-5 max-[600px]:py-7 ${deliverablesGridClass(items.length)} ${className}`}
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <div key={item.title}>
          <h5 className="mb-2.5 text-[11.5px] font-bold uppercase tracking-[0.5px] text-[#F33117]">
            {item.title}
          </h5>
          <p className="m-0 text-left text-[13.5px] leading-5 text-[rgb(51,65,85)]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

interface CapabilitiesStripSectionProps {
  items: CapabilitiesStripItem[];
}

export function CapabilitiesStripSection({
  items,
}: CapabilitiesStripSectionProps) {
  return (
    <section className="bg-white px-16 pb-24 max-[900px]:px-6 max-[900px]:pb-16">
      <div className="mx-auto max-w-[1200px]">
        <CapabilitiesStrip items={items} />
      </div>
    </section>
  );
}
