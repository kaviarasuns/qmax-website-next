"use client";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  /** Omit top border when stacked flush after a preceding section (e.g. technical advantages) */
  hideTopBorder?: boolean;
}

export default function FAQSection({ faqs, hideTopBorder }: FAQSectionProps) {
  return (
    <section
      className={
        hideTopBorder
          ? "bg-[#fcfcfc] py-12 dark:bg-zinc-950"
          : "border-t border-zinc-200 bg-[#fcfcfc] py-12 dark:border-zinc-800 dark:bg-zinc-950"
      }
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="tracking-wide text-3xl font-light text-gray-900 md:text-5xl tracking-tighter">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid gap-0 max-w-full">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-t border-zinc-200 dark:border-zinc-800 py-4 transition-all"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-light leading-snug text-zinc-900 dark:text-zinc-100 md:text-xl tracking-tight">
                <span className="flex-1">{faq.q}</span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F33117"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-open:rotate-180"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="mt-2 max-w-4xl text-sm leading-relaxed text-gray-900 dark:text-zinc-300 font-light">
                {faq.a}
              </div>
            </details>
          ))}

          {/* Promotional Bar */}
          {/* <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
            <a
              href="/contact"
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#F33117] p-6 md:p-10 group hover:bg-zinc-950 dark:hover:bg-zinc-800 transition-colors duration-500"
            >
              <span className="text-2xl md:text-4xl lg:text-5xl font-light text-white group-hover:text-white tracking-tighter leading-tight max-w-2xl">
                Connect with us for a <br />
                technical consultation.
              </span>
              <div className="mt-8 md:mt-0 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/20 group-hover:border-white/50 group-hover:scale-110 transition-all duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-500 group-hover:translate-x-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </div> */}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
