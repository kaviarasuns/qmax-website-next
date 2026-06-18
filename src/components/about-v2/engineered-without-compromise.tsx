type Paragraph = {
  text: React.ReactNode;
  markerOpacity: string;
  large?: boolean;
  signature?: {
    name: string;
    title: string;
  };
};

const PARAGRAPHS: Paragraph[] = [
  {
    text: "At Qmax, we provide full-lifecycle product development services — taking absolute ownership from the initial product definition and industrial design to hardware, mechanicals, software, and full production validation.",
    markerOpacity: "border-[#ef4444]",
    large: true,
  },
  {
    text: (
      <>
        From fast-growing startups to Fortune 100 enterprises, our clients trust
        us with their critical capital and their long-term future. We honor that
        investment by operating with an{" "}
        <strong className="font-bold text-white">
          absolute, non-negotiable zero-error mindset
        </strong>{" "}
        across every stage of development.
      </>
    ),
    markerOpacity: "border-[rgba(239,68,68,0.6)]",
  },
  {
    text: (
      <>
        In our world, a single oversight can cost thousands of dollars and
        months of market delay. That is why we look far beyond standard
        checklists, treating engineering with a level of discipline akin to a
        pilot&apos;s pre-flight routine. Whether optimizing a complex high-speed
        layout, writing resilient firmware, or simulating signal and power
        integrity, our team balances technical precision with a deep passion for
        craftsmanship. When our designs come to life, our engineers feel that
        unmistakable pride of creation every single time.
      </>
    ),
    markerOpacity: "border-[rgba(239,68,68,0.5)]",
  },
  {
    text: (
      <>
        Safety and environmental sustainability{" "}
        <strong className="font-bold text-white">(RoHS)</strong> are not
        checkboxes we tick; they are baked directly into our engineering DNA. We
        routinely design everyday systems with strict, over-cautious safety
        margins built-in from day one.
      </>
    ),
    markerOpacity: "border-[rgba(239,68,68,0.4)]",
  },
  {
    text: (
      <>
        Ultimately, Qmax is driven by more than just technical qualifications.
        We are defined by an{" "}
        <strong className="font-bold text-white">
          uncompromising culture of execution
        </strong>
        . We take your trust seriously, and we commit to doing everything within
        our discipline to give your product the best possible chance to succeed.
      </>
    ),
    markerOpacity: "border-[rgba(239,68,68,0.3)]",
    signature: {
      name: "Saravanabhavan Chandrasekar",
      title: "Founder & CEO, Qmax Systems",
    },
  },
];

export default function EngineeredWithoutCompromise() {
  return (
    <section
      data-screen-label="Who We Are"
      className="relative overflow-hidden bg-[#18181b] text-white"
    >
      <div className="relative mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20">
        {/* Red thread */}
        <div
          aria-hidden
          className="absolute bottom-0 left-6 top-16 w-0.5 bg-gradient-to-b from-[#ef4444] from-0% via-[rgba(239,68,68,0.15)] via-85% to-transparent sm:left-10 sm:top-20"
        />
        <div
          aria-hidden
          className="absolute left-6 top-16 h-[13px] w-[13px] -translate-x-[5.5px] -translate-y-[5.5px] rounded-full bg-[#ef4444] shadow-[0_0_0_4px_rgba(239,68,68,0.22)] sm:left-10 sm:top-20"
        />

        <div className="pl-8 sm:pl-11">
          <div className="mb-[52px] max-w-[820px] pl-0 sm:pl-7">
            <span className="mb-[18px] block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#ef4444]">
              About Qmax
            </span>
            <h2 className="m-0 text-[clamp(2rem,5vw,3rem)] font-light leading-[1.15] tracking-[1.2px] text-white">
              Who We Are:
              <br />
              Engineered Without{" "}
              <span className="text-[#ef4444]">Compromise</span>.
            </h2>
          </div>

          <div className="flex max-w-[820px] flex-col pl-0 sm:pl-7">
            {PARAGRAPHS.map((paragraph, index) => (
              <div key={index} className="relative pb-8 last:pb-0">
                <div
                  aria-hidden
                  className={`absolute -left-[42px] top-1.5 h-2.5 w-2.5 rounded-full border-2 bg-[#18181b] ${paragraph.markerOpacity}`}
                />
                <p
                  className={
                    paragraph.large
                      ? "m-0 text-xl leading-[1.6] text-white"
                      : "m-0 text-base leading-[1.7] text-zinc-300"
                  }
                >
                  {paragraph.text}
                </p>
                {paragraph.signature ? (
                  <p className="mb-0 mt-7 text-[15px] leading-normal text-white">
                    <strong className="font-bold text-white">
                      — {paragraph.signature.name}
                    </strong>
                    <br />
                    <span className="text-white/70">
                      {paragraph.signature.title}
                    </span>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
