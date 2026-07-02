import Link from "next/link";
import type { ReactNode } from "react";

export type HeroV2Button = {
  label: string;
  href: string;
  /** "solid" fills with red, "outline" shows a red-bordered transparent button. */
  variant?: "solid" | "outline";
};

export type HeroV2Props = {
  /** Anchor id for the hero <section>. */
  id?: string;
  /** Headline. Accepts rich content (line breaks, highlighted spans). */
  title?: ReactNode;
  /** Supporting paragraph beneath the headline. */
  description?: ReactNode;
  /** Call-to-action buttons rendered below the description. */
  buttons?: HeroV2Button[];
};

const DEFAULT_TITLE: ReactNode = (
  <>
    Precision Engineering Services
    <br />
    <span className="text-red-500">Since 1997</span> — From Concept to
    <br />
    Manufacturing.
  </>
);

const DEFAULT_DESCRIPTION: ReactNode = (
  <>
    Qmax Systems is a trusted partner for electronics engineering and R&amp;D,
    specializing in embedded systems and PCB design. For 25+ years, we have
    helped innovators and enterprises turn bold ideas into market-ready
    products.
  </>
);

const DEFAULT_BUTTONS: HeroV2Button[] = [
  {
    label: "Explore Our Services",
    href: "/embedded-design-services",
    variant: "solid",
  },
  { label: "Talk to an Engineer", href: "#offices", variant: "outline" },
];

const SOLID_BUTTON_CLASS =
  "inline-block cursor-pointer rounded-md bg-red-500 px-8 py-[14px] text-base font-semibold uppercase tracking-[0.04em] text-white no-underline transition-colors duration-150 hover:bg-red-600 hover:text-white hover:no-underline";
const OUTLINE_BUTTON_CLASS =
  "inline-block cursor-pointer rounded-md border border-red-500 bg-transparent px-8 py-[14px] text-base font-semibold uppercase tracking-[0.04em] text-white no-underline transition-colors duration-150 hover:bg-red-500 hover:text-white hover:no-underline";

export default function HeroV2({
  id = "about",
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  buttons = DEFAULT_BUTTONS,
}: HeroV2Props) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[#09090B] text-white pt-28 md:pt-32 pb-20 md:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 78% -10%, rgba(239,68,68,0.42), transparent 60%), radial-gradient(700px 520px at 6% 112%, rgba(239,68,68,0.16), transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 38%, black, transparent 78%)",
          maskImage:
            "radial-gradient(circle at 50% 38%, black, transparent 78%)",
        }}
      />

      <div className="container relative z-10 mx-auto pr-4 pl-6 text-left md:pr-6 md:pl-10">
        <h1 className="text-balance font-bold leading-[1.1] text-white [font-size:clamp(32px,4.4vw,56px)]">
          {title}
        </h1>
        <p className="mt-6 max-w-[660px] font-normal leading-[1.55] text-white [font-size:clamp(15px,1.6vw,19px)]">
          {description}
        </p>

        {buttons.length > 0 && (
          <div className="mt-9 flex flex-wrap gap-3.5">
            {buttons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                className={
                  button.variant === "outline"
                    ? OUTLINE_BUTTON_CLASS
                    : SOLID_BUTTON_CLASS
                }
              >
                {button.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
