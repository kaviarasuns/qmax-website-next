const TIMELINE = [
  {
    year: "1997",
    title: "Founded",
    description:
      "Established as an electronics engineering & R&D services company with a small, focused engineering team.",
  },
  {
    year: "2000s",
    title: "Industry expansion",
    description:
      "Grew capabilities across IoT, industrial automation, aerospace, and medical device development.",
  },
  {
    year: "Today",
    title: "Global delivery centers",
    description:
      "Operating from Dallas, Texas and Chennai, India with a follow-the-sun engineering model.",
  },
  {
    year: "500+",
    title: "Projects & counting",
    description:
      "100+ global clients served with a 98% on-time delivery rate and full-lifecycle support.",
  },
];

export default function OurStoryV2() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-4xl font-light leading-tight tracking-wide text-zinc-950 md:text-5xl">
              Our <span className="text-red-500">Story</span>
            </h2>
            <p className="mt-3.5 text-xl leading-snug tracking-wide text-[#1C2A3A] md:text-[22px]">
              A Quarter-Century Of Turning Ideas Into{" "}
              <span className="text-zinc-950">Hardware</span>.
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Founded in 1997, Qmax Systems began with a simple mission: to
              deliver exceptional electronics engineering and R&amp;D services to
              innovators and enterprises worldwide. What started as a small team
              of passionate engineers has grown into a global partner in embedded
              systems and PCB design.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Over 25+ years we have built expertise across diverse industries —
              from consumer electronics and IoT devices to industrial automation,
              aerospace, and medical devices. Our commitment to quality,
              innovation, and customer success has made us a trusted partner for
              100+ global clients, delivering 500+ projects with a 98%
              on-time delivery rate.
            </p>
          </div>

          <div className="flex flex-col gap-8 border-l-2 border-slate-200 pl-7">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-[13px] w-[13px] rounded-full border-[3px] border-red-500 bg-white" />
                <div className="text-[15px] font-bold tracking-wide text-red-500">
                  {item.year}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-[#1C2A3A]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
