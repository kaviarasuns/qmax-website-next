import type { ReactNode } from "react";

/**
 * Splits a string hero title on its first em dash: the lead keeps the h1's
 * large sizing, the remainder renders as a smaller block line inside the same
 * h1 (full string stays in the heading for SEO). Non-string and dash-less
 * titles pass through unchanged.
 */
export function renderHeroTitle(title: ReactNode): ReactNode {
  if (typeof title !== "string") return title;
  const dashIndex = title.indexOf("-");
  if (dashIndex === -1) return title;
  return (
    <>
      {title.slice(0, dashIndex).trim()}{" "}
      <span className="mt-[0.3em] block font-semibold leading-[1.25] text-white/90 [font-size:clamp(18px,2vw,26px)]">
        {title.slice(dashIndex + 1).trim()}
      </span>
    </>
  );
}
