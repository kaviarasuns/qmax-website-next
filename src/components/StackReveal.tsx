import type { ReactNode } from "react";

export type StackRevealItem = {
  step: string;
  title: string;
  description: string;
  /** Optional cover image URL (e.g. `/path/in/public.jpg`). */
  imageSrc?: string;
  /** Shown behind or when image is absent; use solid Tailwind bg classes. */
  fallbackClassName: string;
};

const DEFAULT_ITEMS: StackRevealItem[] = [
  {
    step: "01",
    title: "Concept Validation",
    description:
      "From idea to defendable spec: feasibility studies, system architecture, product specification.",
    imageSrc:
      "https://framerusercontent.com/images/X1zb9I5JLZlfe0Fni7qWIv7m8Kw.png?scale-down-to=1024",
    fallbackClassName: "bg-[#374151]",
  },
  {
    step: "02",
    title: "Hardware Design",
    description:
      "High-level and low-level design, component engineering, board bring-up & testing.",
    imageSrc:
      "https://framerusercontent.com/images/Pne9938Gidq7nG9ydK39bzpvUs8.png?scale-down-to=1024",
    fallbackClassName: "bg-[#14532d]",
  },
  {
    step: "03",
    title: "PCB Design",
    description:
      "Multi-layer layouts, signal & power integrity, design-for-manufacturability.",
    imageSrc:
      "https://framerusercontent.com/images/INADfyYKIXB4zOCeJRv7MfVUeg8.png?scale-down-to=1024",
    fallbackClassName: "bg-[#1e1b4b]",
  },
  {
    step: "04",
    title: "Software Development",
    description:
      "Firmware, drivers / BSP and cross-platform application development.",
    imageSrc:
      "https://framerusercontent.com/images/XkYvqDHWON6bLP4za8K4dR0WNI.jpg?scale-down-to=1024",
    fallbackClassName: "bg-[#0c1e3f]",
  },
  {
    step: "05",
    title: "Industrial Design",
    description:
      "Enclosure design, UI/UX and CMF — the experience the user actually holds.",
    imageSrc:
      "https://framerusercontent.com/images/gjX9fLR2YB6WU8zbYrGpSymdoms.png?scale-down-to=1024",
    fallbackClassName: "bg-[#a8a29e]",
  },
  {
    step: "06",
    title: "NPI",
    description:
      "Compliance certification (FCC / UL / CE), vendor audits and test-jig development.",
    imageSrc:
      "https://framerusercontent.com/images/5goq4GzrPys5DnIQz1IWvm0pYSo.png?scale-down-to=1024",
    fallbackClassName: "bg-[#155e75]",
  },
  {
    step: "07",
    title: "Manufacturing",
    description:
      "Manufacturing coordination and production testing — built at scale, shipped with confidence.",
    imageSrc:
      "https://framerusercontent.com/images/MaeJlgZA61FfRa4b8IcNa2EEpg.png?scale-down-to=1024",
    fallbackClassName: "bg-[#475569]",
  },
];

type StackRevealConcept06Props = {
  items?: StackRevealItem[];
  eyebrow?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
};

/**
 * Concept 06 · Stack Reveal — horizontal panels that expand on hover to show copy.
 * Matches the reference: slim columns, vertical titles at rest, full reveal on hover.
 */
export default function StackReveal({
  items = DEFAULT_ITEMS,
  eyebrow = (
    <>
      <span
        className="inline-block size-2 rounded-full bg-[#E94B3C] shadow-[0_0_0_4px_rgba(233,75,60,0.15)]"
        aria-hidden
      />
      Concept 06 · Stack Reveal
    </>
  ),
  title = "Design To Manufacturing",
  subtitle = (
    <>
      Seven slim image panels — minimal labels until you hover. The active panel
      expands and reveals full detail. Encourages playful exploration without
      dominating the page.
    </>
  ),
  className = "",
}: StackRevealConcept06Props) {
  return (
    <section
      className={`border-t border-[#e6e7eb] bg-[#fafafa] px-[6vw] py-24 max-md:px-5 ${className}`}
    >
      {/* <div className="mb-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#E94B3C]">
        {eyebrow}
      </div> */}
      <h1 className="text-3xl md:text-5xl font-light tracking-wide text-center text-black tracking-wide">
        Design To <span className="text-red-500">Manufacturing</span>
      </h1>
      <div className="py-14"></div>
      {/* <h2 className="mb-3.5 text-balance text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold tracking-[-0.02em] text-[#0e1116]">
        {title}
      </h2> */}

      {/* <p className="mb-12 max-w-3xl text-base leading-relaxed text-[#6b7280]">
        {subtitle}
      </p> */}

      <div className="flex h-[520px] w-full gap-2 overflow-hidden rounded-3xl max-[1100px]:h-auto max-[1100px]:flex-col">
        {items.map((item) => (
          <div
            key={item.step}
            tabIndex={0}
            className="group relative flex min-h-0 flex-1 cursor-pointer flex-col justify-end overflow-hidden p-6 text-white outline-none transition-[flex-grow,flex-basis,padding-bottom] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:flex-[5] hover:pb-20 focus-visible:ring-2 focus-visible:ring-[#E94B3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafafa] focus-within:flex-[5] focus-within:pb-20 max-[1100px]:min-h-[140px] max-[1100px]:flex-none max-[1100px]:hover:flex-none max-[1100px]:focus-within:flex-none max-[1100px]:hover:pb-6 max-[1100px]:focus-within:pb-6"
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-[transform,filter] duration-500 ease-out ${item.fallbackClassName} scale-110 brightness-[0.55] group-hover:scale-100 group-hover:brightness-[0.85] group-focus-within:scale-100 group-focus-within:brightness-[0.85]`}
              style={
                item.imageSrc
                  ? { backgroundImage: `url(${item.imageSrc})` }
                  : undefined
              }
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-[40%] to-[#0e1116]/85"
              aria-hidden
            />

            <div className="relative z-[2] flex flex-col items-start">
              <div className="mb-0 max-h-0 overflow-hidden font-mono text-[11px] font-medium tracking-[0.3em] text-[#ff7a6b] opacity-0 transition-[max-height,opacity,margin] duration-500 group-hover:mb-2 group-hover:max-h-6 group-hover:opacity-100 group-focus-within:mb-2 group-focus-within:max-h-6 group-focus-within:opacity-100">
                {item.step}
              </div>
              <h3 className="ml-3 mt-1 flex items-end gap-2 whitespace-nowrap text-lg font-extrabold tracking-[-0.02em] [transform-origin:0%_100%] -rotate-90 translate-y-[35%] transition-[transform,font-size,margin] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:ml-0 group-hover:text-3xl group-hover:rotate-0 group-hover:translate-y-0 group-focus-within:ml-0 group-focus-within:text-3xl group-focus-within:rotate-0 group-focus-within:translate-y-0 max-[1100px]:text-lg max-[1100px]:rotate-0 max-[1100px]:translate-y-0">
                <span>{item.title}</span>
                <span className="mb-0.5 font-mono text-[11px] font-medium tracking-[0.3em] text-[#ff7a6b] transition-[letter-spacing,opacity] duration-500 group-hover:opacity-0 group-focus-within:opacity-0 group-hover:tracking-[0.15em] group-focus-within:tracking-[0.15em]">
                  {item.step}
                </span>
              </h3>
              <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-[max-height,opacity,margin] duration-500 group-hover:mt-3.5 group-hover:max-h-[200px] group-hover:opacity-100 group-focus-within:mt-3.5 group-focus-within:max-h-[200px] group-focus-within:opacity-100">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
