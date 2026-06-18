const TIMELINE = [
  {
    year: "1997",
    title: "Founded",
    description:
      "Established as an electronics engineering & R&D services company with a small, focused engineering team.",
  },
  {
    year: "2000s",
    title: "Industry Expansion",
    description:
      "Grew capabilities across IoT, industrial automation, aerospace, and medical device development.",
  },
  {
    year: "Today",
    title: "Global Delivery Centers",
    description:
      "Operating from Dallas, Texas and Chennai, India with a follow-the-sun engineering model.",
  },
  {
    year: "500+",
    title: "Projects & Counting",
    description:
      "100+ global clients served with a 98% on-time delivery rate and full-lifecycle support.",
  },
];

export default function OurStoryV2() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14">
          <div>
            <h2 className="text-4xl font-light leading-tight tracking-wide text-foreground md:text-5xl">
              Our <span className="text-red-500">Story</span>
            </h2>
            <p className="mt-3.5 text-lg font-medium leading-snug tracking-wide text-foreground md:text-xl">
              A Quarter-Century of Turning Ideas Into Hardware.
            </p>
            <p className="mt-5 text-base leading-relaxed text-foreground">
              Founded in 1997, Qmax Systems began with a simple mission: to
              deliver exceptional electronics engineering and R&amp;D services
              to innovators and enterprises worldwide. What started as a small
              team of passionate engineers has grown into a global partner in
              embedded systems and PCB design.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              Over 25 years, we have built expertise across diverse industries —
              from consumer electronics and IoT devices to industrial
              automation, aerospace, and medical devices. Our commitment to
              quality, innovation, and customer success has made us a trusted
              partner for 100+ global clients, delivering 500+ projects with a
              98% on-time delivery rate.
            </p>
          </div>

          <div className="flex flex-col gap-8 border-l-2 border-slate-200 pl-7">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-[13px] w-[13px] rounded-full border-[3px] border-red-500 bg-white" />
                <div className="text-[15px] font-bold tracking-wide text-red-500">
                  {item.year}
                </div>
                <h3 className="mt-1 text-xl font-medium tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-base leading-relaxed text-foreground">
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
