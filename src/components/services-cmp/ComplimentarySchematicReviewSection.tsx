import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SchematicReviewItem = {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
};

export type ComplimentarySchematicReviewSectionProps = {
  items: SchematicReviewItem[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  className?: string;
};

export function ComplimentarySchematicReviewSection({
  items,
  title = "Complimentary Schematic Review for",
  titleHighlight = "High-Speed Digital PCB Design",
  subtitle = "High-speed PCB success starts at the schematic level. Every Qmax PCB layout engagement includes a Complimentary Schematic Review. Our senior engineers analyze your design for:",
  className,
}: ComplimentarySchematicReviewSectionProps) {
  return (
    <section className={cn("bg-white", className)}>
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20">
        <h2 className="text-center text-3xlleading-tight tracking-tight text-slate-800 md:text-[42px]">
          {title}
          <br />
          <span className="text-[#F33117]">{titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-center text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className={cn(
                "rounded-[20px] border border-slate-200 bg-white px-8 py-9 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:px-9 md:py-10",
                "md:last:odd:col-span-2 md:last:odd:mx-auto md:last:odd:max-w-[calc(50%-0.75rem)]",
              )}
            >
              <h3 className="flex items-center gap-3 text-xl text-slate-800 md:text-[22px]">
                {item.icon ? (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#F33117] [&>svg]:h-7 [&>svg]:w-7">
                    {item.icon}
                  </span>
                ) : null}
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
