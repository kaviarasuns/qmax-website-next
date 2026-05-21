import type { ReactNode } from "react";

export type FirmwareFramework = {
  title: string;
  subtitle: string;
  items: string[];
  icon: ReactNode;
};

export type ModularFirmwareFrameworksSectionProps = {
  title?: string;
  titleHighlight?: string;
  description?: string;
  frameworks: FirmwareFramework[];
};

export function ModularFirmwareFrameworksSection({
  title = "Modular firmware frameworks built for",
  titleHighlight = "reuse, scale, and security",
  description = "To accelerate product development and ensure long-term maintainability, we build modular firmware frameworks and reusable libraries — battle-tested across deployments, with a focus on security, reliability, and scalability for large fleets.",
  frameworks,
}: ModularFirmwareFrameworksSectionProps) {
  return (
    <section
      className="bg-white px-16 py-24 max-[1100px]:px-8 max-[900px]:py-16 max-[640px]:px-5"
      id="modular-firmware-frameworks"
      aria-label="Modular firmware frameworks"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 flex w-full flex-col items-center text-center max-[900px]:mb-10">
          <h2 className="mb-6 text-4xl font-light tracking-wide text-black md:text-5xl">
            {title}{" "}
            <span className="text-brand-500">{titleHighlight}</span>
          </h2>
          <p className="w-full text-[#383838]">{description}</p>
        </div>

        <div className="grid grid-cols-4 gap-4 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
          {frameworks.map((framework) => (
            <article
              key={framework.title}
              className="group relative overflow-hidden rounded-[14px] border border-[#e3e8ef] bg-white px-5 py-[22px] shadow-[0_6px_22px_rgba(10,25,41,0.07)] transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_14px_32px_rgba(230,51,41,0.12)] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-brand-500 before:to-[#C72A21]"
            >
              <div className="mb-2 flex flex-row flex-nowrap items-center gap-3">
                <div className="inline-flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center text-brand-500 [&>svg]:h-8 [&>svg]:w-8 [&>svg_[stroke]:not([stroke='none'])]:stroke-brand-500 [&>svg_[fill]:not([fill='none'])]:fill-brand-500">
                  {framework.icon}
                </div>
                <h3 className="m-0 min-w-0 flex-1 text-[17px] leading-tight text-[#0a1929] !font-medium">
                  {framework.title}
                </h3>
              </div>
              <p className="mb-3 text-[13px] font-medium text-[#5a6878]">
                {framework.subtitle}
              </p>
              <ul className="m-0 list-disc pl-[18px] text-[13.5px] text-[#15202b] marker:text-brand-500">
                {framework.items.map((item) => (
                  <li key={item} className="mb-1.5 last:mb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
