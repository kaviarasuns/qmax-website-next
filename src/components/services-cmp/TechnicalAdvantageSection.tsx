import type { ReactNode } from "react";

export type TechnicalAdvantageCard = {
  title: string;
  body: string;
  icon: ReactNode;
};

const DIGITAL_HARDWARE_DEFAULT_CARDS: TechnicalAdvantageCard[] = [
  {
    title: "High-Speed Standards",
    body: "Expert handling of DDR5, PCIe Gen5/Gen6, and 112G SerDes — including channel modeling, equalization tuning, and compliance to JEDEC and PCI-SIG specifications.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <polyline points="3 12 7 12 9 7 13 17 15 12 21 12" />
      </svg>
    ),
  },
  {
    title: "Physical Complexity",
    body: "Mastery of 30+ layer HDI PCBs with blind and buried microvias, stackup planning, and impedance control for the densest, highest-speed digital boards.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden={true}
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="3" y1="14" x2="21" y2="14" />
        <line x1="3" y1="18" x2="21" y2="18" />
        <circle cx="8" cy="6" r="1" fill="currentColor" stroke="none" />
        <circle cx="14" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="10" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="16" cy="18" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Manufacturing Readiness",
    body: "Complete DFM (Design for Manufacturing), DFA (Design for Assembly), and DFT (Design for Test) implementation — engineered for first-pass yield, not just first-pass prototype success.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <path d="M5 20 L5 10 L9 10 L9 6 L15 6 L15 10 L19 10 L19 20 Z" />
        <line x1="9" y1="14" x2="9" y2="16" />
        <line x1="12" y1="14" x2="12" y2="16" />
        <line x1="15" y1="14" x2="15" y2="16" />
      </svg>
    ),
  },
  {
    title: "Signal & Power Integrity",
    body: "Advanced SI/PI simulation and validation across DDR, SerDes, and power delivery rails — using full-wave EM, IBIS-AMI, and target-impedance methodologies.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <path d="M12 3 L20 6 L20 12 C20 17 16 20 12 21 C8 20 4 17 4 12 L4 6 Z" />
        <polyline points="7 12 10 14 17 9" />
      </svg>
    ),
  },
  {
    title: "Global Compliance",
    body: "Pre-designed for EMI/EMC, CE, FCC, and UL — reducing certification rework and accelerating time to global market.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <polyline points="8 13 11 16 16 10" />
      </svg>
    ),
  },
  {
    title: "Lifecycle Support",
    body: "End-to-end engagement from concept and proof-of-concept through volume production, ECO management, and long-term supply continuity.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={true}
      >
        <path d="M4 12 A8 8 0 0 1 19 8" />
        <polyline points="14 8 19 8 19 3" />
        <path d="M20 12 A8 8 0 0 1 5 16" />
        <polyline points="10 16 5 16 5 21" />
      </svg>
    ),
  },
];

export type TechnicalAdvantageSectionProps = {
  /** Text after "Technical Advantages in" (accent span) */
  headingHighlight: string;
  lede: string;
  cards: TechnicalAdvantageCard[];
  /** Power electronics preview uses a 2-column card grid; digital/analog use three-up on xl */
  columns?: "two" | "three";
  sectionHeadingId?: string;
};

export function TechnicalAdvantageSection({
  headingHighlight,
  lede,
  cards,
  columns = "three",
  sectionHeadingId = "technical-advantage-heading",
}: TechnicalAdvantageSectionProps) {
  const gridClassName =
    columns === "two"
      ? "mt-12 grid gap-6 sm:grid-cols-2"
      : "mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3";

  return (
    <section
      className="px-6 py-16 lg:px-8 lg:py-20"
      aria-labelledby={sectionHeadingId}
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id={sectionHeadingId}
          className="text-center text-3xl font-light tracking-tight text-slate-900 md:text-5xl"
        >
          Technical Advantages in{" "}
          <span className="text-brand-500">{headingHighlight}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-slate-600 md:text-base md:leading-relaxed">
          {lede}
        </p>

        <div className={gridClassName}>
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[14px] border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] md:p-9"
            >
              <header className="mb-3.5 flex items-center gap-3.5">
                <span className="flex h-7 w-7 shrink-0 text-brand-500">
                  {card.icon}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                  {card.title}
                </h3>
              </header>
              <p className="text-[15px] leading-relaxed text-slate-600 md:text-base">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Default digital hardware cards for the high-speed digital design page */
export function DigitalHardwareTechnicalAdvantageSection() {
  return (
    <TechnicalAdvantageSection
      headingHighlight="Digital Hardware"
      lede="Qmax Systems designs digital platforms for performance, reliability, and manufacturability — not just for prototypes."
      cards={DIGITAL_HARDWARE_DEFAULT_CARDS}
      columns="three"
      sectionHeadingId="technical-advantage-heading"
    />
  );
}
