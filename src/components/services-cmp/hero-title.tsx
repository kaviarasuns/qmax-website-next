import type { ReactNode } from "react";

const TITLE_SEPARATOR = " - ";

/** Shared subline styles for split hero titles (primary line + subtitle). */
export const HERO_TITLE_SUBLINE_CLASS =
  "mt-[0.3em] block font-normal leading-[1.25] text-white/90 [font-size:clamp(18px,2vw,26px)]";

/**
 * Splits a string hero title on the first ` - ` separator: the lead keeps the
 * h1's large sizing, the remainder renders as a smaller block line inside the
 * same h1 (full string stays in the heading for SEO). Hyphens inside words
 * (e.g. "High-Speed") are ignored. Non-string and separator-less titles pass
 * through unchanged.
 */
export function renderHeroTitle(title: ReactNode): ReactNode {
  if (typeof title !== "string") return title;
  const dashIndex = title.indexOf(TITLE_SEPARATOR);
  if (dashIndex === -1) return title;
  return (
    <>
      {title.slice(0, dashIndex).trim()}{" "}
      <span className={HERO_TITLE_SUBLINE_CLASS}>
        {title.slice(dashIndex + TITLE_SEPARATOR.length).trim()}
      </span>
    </>
  );
}
