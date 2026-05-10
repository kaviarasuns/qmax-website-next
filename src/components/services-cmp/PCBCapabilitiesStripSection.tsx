interface CapabilitiesStripItem {
  title: string;
  description: string;
}

interface PCBCapabilitiesStripSectionProps {
  items: CapabilitiesStripItem[];
}

export function PCBCapabilitiesStripSection({
  items,
}: PCBCapabilitiesStripSectionProps) {
  return (
    <section className="bg-white px-16 pb-24 max-[900px]:px-6 max-[900px]:pb-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-4 gap-8 rounded-xl bg-[#F7F7F8] px-8 py-10 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:px-5 max-[600px]:py-7">
          {items.map((item) => (
            <div key={item.title}>
              <h5 className="mb-3 text-[14px] font-bold uppercase tracking-[0.4px] text-red-500">
                {item.title}
              </h5>
              <p className="m-0 text-[15px] leading-6 tracking-[-0.15px] text-[#383838]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
