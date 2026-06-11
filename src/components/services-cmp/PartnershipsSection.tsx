import Image from "next/image";

const PARTNERSHIP_LOGO_BASE =
  "https://d1yetprhniwywz.cloudfront.net/v2/partnerships_logo";

const TILE_CLASS =
  "relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white p-2 transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(230,51,41,0.35)] hover:shadow-[0_8px_20px_rgba(16,24,40,0.08)]";

// Smaller inset = larger logo; compensates for whitespace baked into some files.
const PARTNER_LOGOS = [
  {
    name: "Qualcomm",
    file: "qualcomm-logo.webp",
    inset: "absolute inset-2 max-[900px]:inset-1",
  },
  { name: "NXP", file: "nxp-logo-300x225.webp" },
  {
    name: "Broadcom",
    file: "Broadcom_logo.png",
    inset: "absolute inset-3 max-[900px]:inset-2",
  },
  { name: "Analog Devices", file: "analog-devices-logo.png" },
  { name: "onsemi", file: "Onsemi_logo.svg" },
  { name: "Infineon", file: "Infineon-Technologies-AG-logo.svg" },
  {
    name: "Rockchip",
    file: "Rockship_V2.png",
    inset: "absolute inset-1.5 max-[900px]:inset-1",
    // The PNG has whitespace baked in; scale up to crop it out.
    imageClass: "object-contain scale-150",
  },
  { name: "Texas Instruments", file: "TexasInstruments-Logo.svg" },
  { name: "Microchip", file: "Microchip_Technology_logo.svg" },
  { name: "Wolfspeed", file: "Wolfspeed_logo.svg" },
] as const;

const DEFAULT_LOGO_INSET = "absolute inset-5 max-[900px]:inset-4";

interface PartnershipsSectionProps {
  heading: string;
  headingHighlight?: string;
  paragraph: string;
}

export function PartnershipsSection({
  heading,
  headingHighlight,
  paragraph,
}: PartnershipsSectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-white px-8 py-24 max-[900px]:px-6 max-[900px]:py-16"
      id="partnerships-section"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex w-full flex-col items-center text-center">
          <h2 className="mb-6 text-center font-light tracking-tight">
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
        <div className="grid grid-cols-5 gap-4 max-[900px]:grid-cols-2 max-[900px]:gap-3">
          {PARTNER_LOGOS.map(({ name, file, ...logo }) => (
            <div key={file} className={TILE_CLASS}>
              <div className={"inset" in logo ? logo.inset : DEFAULT_LOGO_INSET}>
                <Image
                  src={`${PARTNERSHIP_LOGO_BASE}/${file}`}
                  alt={`${name} logo`}
                  fill
                  sizes="(max-width: 900px) 45vw, 18vw"
                  className={
                    "imageClass" in logo ? logo.imageClass : "object-contain"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
