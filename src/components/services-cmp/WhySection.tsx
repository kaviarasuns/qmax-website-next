import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface WhyCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface WhySectionProps {
  whyCards: WhyCard[];
  title?: string;
  titleHighlight?: string;
  description?: ReactNode;
  ctaHref?: string;
  className?: string;
}

export function WhySection({
  whyCards,
  title = "Why Choose Qmax For",
  titleHighlight = "Hardware Design?",
  description,
  ctaHref = "/hardware-development-services/contact",
  className,
}: WhySectionProps) {
  return (
    <section
      className={cn(
        "bg-white px-16 pt-24 pb-24 max-[900px]:px-6 max-[900px]:pt-16 max-[900px]:pb-16",
        className,
      )}
      id="why-section"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-center">
            {title}{" "}
            <span className="text-brand-500">{titleHighlight}</span>
          </h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-[720px] text-center text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        <div className="grid grid-cols-2 items-stretch gap-8 max-[900px]:grid-cols-1 max-[900px]:gap-5">
          {whyCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-5 rounded-2xl bg-white px-10 pb-9 pt-6 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_16px_32px_rgba(16,24,40,0.10)]"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center text-red-500 [&>svg]:h-full [&>svg]:w-full">
                  {card.icon}
                </div>
                <h3 className="mt-2 text-xl md:text-2xl font-medium tracking-wide text-slate-900">
                  {card.title}
                </h3>
              </div>
              <p className="text-base text-muted-foreground">{card.desc}</p>
            </article>
          ))}
          {/* Founder CTA tile — baked PNG */}
          <a
            className="relative block h-full cursor-pointer overflow-hidden rounded-xl bg-[#0a0a0a] no-underline shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:no-underline hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_16px_32px_rgba(16,24,40,0.10)]"
            href={ctaHref}
            aria-label="Questions? Let's Talk! Contact Saravanabhavan, Founder & CEO"
          >
            <Image
              src="/hardware-design/founder_csb.png"
              alt="Questions? Let's Talk! Contact us. Saravanabhavan, Founder & CEO"
              fill
              sizes="(max-width: 900px) 100vw, 600px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <span className="pointer-events-none absolute left-[22px] top-[18px] z-[2] text-3xl font-bold leading-[1.45] tracking-[0.2px] text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.45)]">
              Questions?
              <br />
              Let&apos;s Talk!
            </span>
            <span className="pointer-events-none absolute bottom-[18px] left-[22px] z-[2] rounded-md bg-white px-[18px] py-2 text-lg font-bold tracking-[0.2px] text-[#0a0a0a] shadow-[0_2px_8px_rgba(0,0,0,0.18)] [text-shadow:none]">
              Contact Us
            </span>
            <span className="pointer-events-none absolute bottom-[18px] right-[22px] z-[2] text-right text-[17px] font-semibold leading-[1.3] tracking-[0.2px] text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.45)]">
              Saravanabhavan
              <br />
              Founder &amp; CEO
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
