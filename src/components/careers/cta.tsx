"use client";

import { useEffect, useRef } from "react";

export function CTA() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-0 pb-12 md:pb-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 items-start">
          <div className="hidden lg:block w-64 flex-shrink-0" aria-hidden="true" />
          <div className="flex-1 min-w-0">
            <div
              ref={cardRef}
              className="translate-y-8 opacity-0 transition-[opacity,transform] duration-700 [transition-timing-function:cubic-bezier(.4,0,.2,1)] [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
            >
              <div className="rounded-2xl bg-white p-8 text-center shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(16,24,40,0.08),0_16px_40px_rgba(16,24,40,0.12)] sm:p-10 md:p-16">
                <h2 className="m-0 mb-4 text-2xl font-medium tracking-wide text-foreground md:text-3xl">
                  Ready to Make an Impact?
                </h2>

                <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-foreground [text-wrap:pretty] sm:text-base md:text-lg">
                  Whether you&apos;re an experienced engineer or just starting your
                  career, we have opportunities for you. Let&apos;s build the future
                  of technology together.
                </p>

                <a
                  href="https://careers.qmaxsys.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-red-500 px-5 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-red-600 sm:px-6 sm:text-sm"
                >
                  Apply Now
                </a>

                <div className="mx-auto my-6 h-px max-w-xs bg-gray-100" aria-hidden="true" />

                <p className="m-0 text-center text-xs text-foreground sm:text-sm">
                  Questions? Reach out to our recruitment team at{" "}
                  <a
                    href="mailto:careers@qmaxsys.com"
                    className="underline underline-offset-2 transition-colors hover:text-foreground/80"
                  >
                    careers@qmaxsys.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
