import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type OurCoreServiceOfferingsProps = {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: ReactNode;
  className?: string;
};

const DEFAULT_DESCRIPTION =
  "Qmax Systems provides analog circuit design services for the physical-to-digital interface, the most critical bottleneck in high-performance electronics. From femto-farad capacitance sensing to giga-sample data converters, Qmax Systems delivers high-fidelity signal acquisition, precision conditioning, and ultra-low-noise design that holds laboratory-grade accuracy in field-deployed hardware.";

export function OurCoreServiceOfferings({
  eyebrow = "The Qmax Approach",
  title = "Our Core Service",
  titleHighlight = "Offerings",
  description = DEFAULT_DESCRIPTION,
  className,
}: OurCoreServiceOfferingsProps) {
  return (
    <section
      className={cn("bg-white px-6 py-16 md:px-8 md:py-20 lg:px-16", className)}
      aria-labelledby="our-core-service-offerings-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-16 lg:gap-24">
        <div>
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500">
            {eyebrow}
          </p>
          <h2
            id="our-core-service-offerings-heading"
            className="mt-3 text-4xl font-light tracking-wide text-foreground md:text-5xl"
          >
            {title}
            <span className="mt-1 block text-red-500">{titleHighlight}</span>
          </h2>
        </div>

        <div className="m-0 max-w-[54ch] text-base leading-relaxed text-foreground md:pt-1 [&_p]:m-0">
          {description}
        </div>
      </div>
    </section>
  );
}
