import Link from "next/link";

import "./CTABannerSection.css";

export interface ConsultationCtaBarProps {
  heading: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel?: string;
}

export function ConsultationCtaBar({
  heading,
  subtitle,
  ctaHref,
  ctaLabel = "Schedule Consultation",
}: ConsultationCtaBarProps) {
  return (
    <section className="cta-banner" id="consultation-cta-bar">
      <div className="cta-banner-inner">
        <span className="cta-square cta-square-tl" aria-hidden="true" />
        <span className="cta-square cta-square-br" aria-hidden="true" />
        <div className="cta-banner-panel">
          <div className="cta-banner-copy">
            <h2 className="text-3xl font-light tracking-wide md:text-4xl">
              {heading}
            </h2>
            <p>{subtitle}</p>
          </div>
          <Link href={ctaHref} className="cta-banner-btn">
            <span>{ctaLabel}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ width: 14, height: 14 }}
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
