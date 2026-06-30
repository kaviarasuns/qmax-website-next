import Image from "next/image";

import type { PartnerLogo, PartnerLogoInset } from "@/data/partner-logos";

const PARTNERSHIP_LOGO_BASE =
  "https://d1yetprhniwywz.cloudfront.net/v2/partnerships_logo";

const TILE_CLASS =
  "relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white p-2 transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(230,51,41,0.35)] hover:shadow-[0_8px_20px_rgba(16,24,40,0.08)]";

// Keep inset utilities in this file so Tailwind always generates them.
const LOGO_INSET_CLASSES: Record<PartnerLogoInset, string> = {
  default: "absolute inset-5 max-[900px]:inset-4",
  tight: "absolute inset-2 max-[900px]:inset-1",
  snug: "absolute inset-3 max-[900px]:inset-2",
  medium: "absolute inset-1.5 max-[900px]:inset-1",
};

interface PartnershipsSectionProps {
  heading: string;
  headingHighlight?: string;
  paragraph: string;
  logos: readonly PartnerLogo[];
}

export function PartnershipsSection({
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
          {logos.map(({ name, file, inset, imageClass }, index) => (
            <div key={`${file}-${index}`} className={TILE_CLASS}>
              <div className={LOGO_INSET_CLASSES[inset ?? "default"]}>
                <Image
                  src={`${PARTNERSHIP_LOGO_BASE}/${file}`}
                  alt={`${name} logo`}
                  fill
                  sizes={
                    sixPerRow
                      ? "(max-width: 900px) 45vw, 15vw"
                      : "(max-width: 900px) 45vw, 18vw"
                  }
                  className={imageClass ?? "object-contain"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
