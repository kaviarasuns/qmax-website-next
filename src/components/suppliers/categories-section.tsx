import { cn } from "@/lib/utils";

import SectionHeading from "./section-heading";
import { SUPPLIER_CATEGORIES } from "./suppliers-data";

type CategoriesSectionProps = {
  selected: Set<string>;
  onToggle: (name: string) => void;
};

// Grid of open sourcing categories. Each card is a checkbox the visitor can
// toggle; selections lift up to the parent and pre-fill the registration form.
export default function CategoriesSection({
  selected,
  onToggle,
}: CategoriesSectionProps) {
  return (
    <section id="categories" className="bg-qmax-grey py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <SectionHeading
          eyebrow="Open Sourcing Requirements"
          title={
            <>
              What we&apos;re <span className="text-red-500">sourcing</span>
            </>
          }
          subtitle="Select the categories you supply. Your selections carry forward to the registration form."
        />

        <div className="overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {SUPPLIER_CATEGORIES.map((category) => {
              const isSelected = selected.has(category.name);
              return (
                <button
                  key={category.name}
                  type="button"
                  role="checkbox"
                  aria-checked={isSelected}
                  onClick={() => onToggle(category.name)}
                  className={cn(
                    "group relative overflow-hidden px-5 py-[22px] text-left transition-colors duration-200",
                    "before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:origin-bottom before:scale-y-0 before:bg-red-500 before:transition-transform before:duration-200",
                    "hover:before:scale-y-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500",
                    isSelected
                      ? "bg-red-500/[0.07] before:scale-y-100"
                      : "bg-white hover:bg-qmax-grey",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute right-3.5 top-3.5 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold transition-all duration-200",
                      isSelected
                        ? "bg-red-500 text-white"
                        : "border border-border bg-white text-muted-foreground/60",
                    )}
                  >
                    ✓
                  </span>
                  <span className="mb-1.5 block pr-6 text-base font-medium leading-snug tracking-wide text-foreground">
                    {category.name}
                  </span>
                  <span className="mb-3.5 block text-base font-normal leading-relaxed text-foreground">
                    {category.description}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-green-600">
                    <span className="h-[5px] w-[5px] rounded-full bg-green-600" />
                    Open
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
