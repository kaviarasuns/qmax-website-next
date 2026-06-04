import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqItems: FAQItem[];
  className?: string;
}

export function FAQSection({ faqItems, className }: FAQSectionProps) {
  return (
    <section
      className={cn(
        "bg-white pt-24 pb-0 px-16 max-[900px]:px-6 max-[900px]:pt-16 max-[900px]:pb-0",
        className,
      )}
    >
      <div className="mx-auto max-w-[960px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-center">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
        </div>
        <div className="flex flex-col">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="border-b border-gray-200 py-6 group"
            >
              <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex justify-between items-center gap-4 text-lg md:text-2xl font-light leading-relaxed tracking-tight text-foreground transition-colors duration-200">
                {item.q}
                <svg
                  className="flex-shrink-0 w-6 h-6 text-red-500 transition-transform duration-300 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="mt-4 text-base font-light leading-relaxed text-foreground">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
