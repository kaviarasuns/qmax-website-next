type CTABannerSectionProps = {
  href?: string;
  heading?: string;
};

const DEFAULT_HEADING =
  "Ready To Bring Your Hardware Design Project To Life?";

export function CTABannerSection({
  href = "/hardware-development-services/contact",
  heading = DEFAULT_HEADING,
}: CTABannerSectionProps) {
  return (
    <section
      id="cta-banner-section"
      className="relative bg-white px-8 py-24 max-[900px]:px-6 max-[900px]:py-16"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <span
          className="pointer-events-none absolute -top-4 right-[8%] z-[1] h-[26px] w-[26px] bg-[#E63329]"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-2.5 left-[5%] z-[1] h-[26px] w-[26px] bg-[#E63329]"
          aria-hidden="true"
        />
        <div className="relative z-[2] flex items-center justify-between gap-10 rounded-md bg-[#2A2F36] px-14 py-11 shadow-[0_14px_36px_-18px_rgba(16,24,40,0.30)] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6 max-[900px]:px-7 max-[900px]:py-8">
          <div className="max-w-[648px]">
            <h2 className="m-0 mb-2.5 text-3xl font-light tracking-wide text-white md:text-4xl">
              {heading}
            </h2>
            <p className="m-0 text-white">Contact Us Today To Get Started.</p>
          </div>
          <a
            href={href}
            className="inline-flex shrink-0 items-center gap-2.5 rounded border-[1.5px] border-red-500 bg-red-500 px-[26px] py-3.5 uppercase text-white no-underline transition-[background,border-color,color,transform] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-px hover:border-red-600 hover:bg-red-600 hover:text-white hover:no-underline"
          >
            <span>BOOK A MEETING</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-3.5 w-3.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
