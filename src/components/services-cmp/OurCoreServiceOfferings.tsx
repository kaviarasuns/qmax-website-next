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
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-6 lg:gap-8">
        <div className="flex items-start justify-center self-start">
          <div className="text-left">
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
        </div>

        <div className="flex items-center justify-start">
          <div className="m-0 max-w-[58ch] text-left text-base leading-relaxed text-foreground [&_p]:m-0 [&_p]:text-left">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
}
