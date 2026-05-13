import Image from "next/image";

const PARTNERSHIP_LOGO_BASE =
  "https://d1yetprhniwywz.cloudfront.net/v2/partnerships_logo";

const TILE_CLASS =
  "relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white p-2 transition-all duration-300 hover:-translate-y-[3px] hover:border-[rgba(230,51,41,0.35)] hover:shadow-[0_8px_20px_rgba(16,24,40,0.08)]";

const PARTNER_LOGOS = [
  { name: "Qualcomm", file: "qualcomm-logo.webp" },
  { name: "NXP", file: "nxp-logo-300x225.webp" },
  { name: "NVIDIA", file: "nvidia-logo1-300x225.webp" },
  { name: "Analog Devices", file: "analog-devices-logo.png" },
  { name: "onsemi", file: "Onsemi_logo.svg" },
  { name: "Infineon", file: "Infineon-Technologies-AG-logo.svg" },
  { name: "Ambarella", file: "Ambarella_color_cmyk.svg" },
  { name: "Texas Instruments", file: "TexasInstruments-Logo.svg" },
  { name: "Microchip", file: "Microchip_Technology_logo.svg" },
  { name: "Wolfspeed", file: "Wolfspeed_logo.svg" },
] as const;

export function PartnershipsSection() {
  return (
    <section
      className="relative overflow-hidden bg-white px-8 pb-[72px] pt-16 text-[#1C2A3A] max-[900px]:px-6 max-[900px]:py-12"
      id="partnerships-section"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex w-full flex-col items-center text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-light tracking-wide">
            Partnerships
          </h2>
          <p className="w-full text-[#5A6778]">
            With a strong focus on new product development, Qmax maintains
            strategic partnerships with leading platform providers including
            Qualcomm, NXP, Nvidia, Analog Devices, onsemi, Infineon, Ambarella,
            Texas Instruments, Microchip, and Wolfspeed. Our teams gain early
            access to upcoming silicon, roadmap visibility, and training on the
            latest technologies — with reference modules and evaluation kits
            ready to kick-start your product development.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4 max-[900px]:grid-cols-2 max-[900px]:gap-3">
          {PARTNER_LOGOS.map(({ name, file }, index) => (
            <div key={file} className={TILE_CLASS}>
              <div
                className={
                  index === 0
                    ? "absolute inset-2 max-[900px]:inset-1"
                    : "absolute inset-5 max-[900px]:inset-4"
                }
              >
                <Image
                  src={`${PARTNERSHIP_LOGO_BASE}/${file}`}
                  alt={`${name} logo`}
                  fill
                  sizes="(max-width: 900px) 45vw, 18vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
