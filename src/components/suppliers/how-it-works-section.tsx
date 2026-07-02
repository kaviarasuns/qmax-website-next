import SectionHeading from "./section-heading";
import { SUPPLIER_STEPS } from "./suppliers-data";

// Static three-step overview of the onboarding process. Arrows between steps
// are decorative and hidden on the single-column mobile layout.
export default function HowItWorksSection() {
  return (
    <section className="bg-qmax-grey py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              How it <span className="text-red-500">works</span>
            </>
          }
          subtitle="From browsing to onboarding in three steps."
        />

        <div className="grid grid-cols-1 items-start gap-x-2 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {SUPPLIER_STEPS.map((step, index) => (
            <div key={step.number} className="contents">
              <div className="py-7">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                  {step.number}
                </span>
                <h3 className="mb-2.5 text-xl font-medium tracking-wide text-foreground">
                  {step.title}
                </h3>
                <p className="text-left text-base leading-relaxed text-foreground">
                  {step.description}
                </p>
              </div>
              {index < SUPPLIER_STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden self-start px-6 pt-7 text-lg text-qmax-dark-grey md:block"
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
