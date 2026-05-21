import "./CTABannerSection.css";

type CTABannerSectionProps = {
  href?: string;
};

export function CTABannerSection({
  href = "/hardware-development-services/contact",
}: CTABannerSectionProps) {
  return (
    <section className="cta-banner" id="cta-banner-section">
      <div className="cta-banner-inner">
        <span className="cta-square cta-square-tl" aria-hidden="true" />
        <span className="cta-square cta-square-br" aria-hidden="true" />
        <div className="cta-banner-panel">
          <div className="cta-banner-copy">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Ready To Bring Your Hardware Design Project To Life?
            </h2>
            <p>Contact Us Today To Get Started.</p>
          </div>
          <a href={href} className="cta-banner-btn">
            <span>BOOK A MEETING</span>
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
          </a>
        </div>
      </div>
    </section>
  );
}
