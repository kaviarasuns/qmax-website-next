const REASONS = [
  {
    title: "Multi-disciplinary Team",
    description:
      "Embedded systems experts, PCB designers, firmware engineers, and manufacturing specialists working in perfect harmony.",
  },
  {
    title: "Stringent Process",
    description:
      "ISO-certified processes, rigorous quality checks, and industry best practices ensure reliability and compliance.",
  },
  {
    title: "Faster Time-to-Market",
    description:
      "Agile methodology and parallel workflows compress development cycles without compromising on quality.",
  },
  {
    title: "End-to-End Engineering",
    description:
      "From concept and design through manufacturing support and field support — we handle the entire lifecycle.",
  },
];

export default function WhyQmaxV2() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-[52px]">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-zinc-950 md:text-5xl">
            Why Choose <span className="text-red-500">Qmax</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            The reasons enterprises and startups trust us with their most complex
            electronics development.
          </p>
        </div>

        <div className="overflow-hidden rounded-md border border-slate-200 bg-slate-200">
          <div className="grid grid-cols-1 gap-px md:grid-cols-2">
            {REASONS.map((reason) => (
              <div
                key={reason.title}
                className="bg-white px-8 py-10 transition-colors hover:bg-slate-50 md:px-[34px] md:py-[38px]"
              >
                <h3 className="mb-2.5 flex items-center gap-2.5 text-[21px] font-semibold text-[#1C2A3A]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  {reason.title}
                </h3>
                <p className="text-[15.5px] leading-relaxed text-slate-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
