import type { PartnerLogo } from "@/data/partner-logos";

const TILE_CLASS =
  "relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-4 py-5 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)]";

interface PartnershipsSectionProps {
  heading: string;
  headingHighlight?: string;
  paragraph: string;
  logos: readonly PartnerLogo[];
}

export function PartnershipsSectionV2({
  heading,
  headingHighlight,
  paragraph,
  logos,
}: PartnershipsSectionProps) {
  // 12 logos fill 2 rows of 6; other counts (e.g. 10) fill rows of 5.
  const sixPerRow = logos.length % 6 === 0;
  return (
    <section
      className="relative overflow-hidden bg-white px-8 py-24 max-[900px]:px-6 max-[900px]:py-16"
      id="partnerships-section"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex w-full flex-col items-center text-center">
          <h2 className="mb-6 text-center font-light ">
            {heading}
            {headingHighlight ? (
              <>
                {" "}
                <span className="text-red-500">{headingHighlight}</span>
              </>
            ) : null}
          </h2>
          <p className="mx-auto w-full max-w-[1100px] text-justify [text-align-last:center]">
            {paragraph}
          </p>
        </div>
        <div
          className={`grid ${sixPerRow ? "grid-cols-6" : "grid-cols-5"} gap-4 max-[900px]:grid-cols-2 max-[900px]:gap-3`}
        >
          {logos.map(({ name }, index) => (
            <div key={`${name}-${index}`} className={TILE_CLASS}>
              <span className="text-center text-lg font-medium tracking-wide text-gray-800 max-[900px]:text-xs">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
