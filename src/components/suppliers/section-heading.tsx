import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  /** Dark sections invert the eyebrow/title/subtitle colors for contrast. */
  variant?: "light" | "dark";
};

// Shared eyebrow + title + subtitle block used by every Supplier Portal
// section, so spacing and type scale stay consistent across the page.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  variant = "light",
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div className="mx-auto mb-12 max-w-[560px] text-center">
      <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mb-3 text-4xl font-light leading-tight tracking-wide md:text-5xl",
          isDark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mx-auto max-w-[480px] text-center text-base leading-relaxed",
          isDark ? "text-white/60" : "text-foreground",
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
