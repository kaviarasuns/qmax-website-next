import Link from "next/link";

export default function HeroV2() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09090B] text-white pt-28 md:pt-32 pb-20 md:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 78% -10%, rgba(239,68,68,0.42), transparent 60%), radial-gradient(700px 520px at 6% 112%, rgba(239,68,68,0.16), transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 38%, black, transparent 78%)",
          maskImage:
            "radial-gradient(circle at 50% 38%, black, transparent 78%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 text-left">
        <p className="mb-4 text-[26px] font-semibold leading-tight tracking-wide text-white">
          About Qmax Systems
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-wide text-white sm:text-5xl md:text-[60px] md:leading-[75px] md:tracking-[1.5px]">
          Precision Engineering Services
          <br />
          <span className="text-red-500">Since 1997</span> — From Concept To
          <br />
          Manufacturing.
        </h1>
        <p className="mt-6 max-w-[660px] text-base leading-relaxed text-white md:text-lg">
          Qmax Systems is a trusted partner for electronics engineering and
          R&amp;D, specializing in embedded systems and PCB design. For 25+
          years we have helped innovators and enterprises turn bold ideas into
          market-ready products.
        </p>

        <div className="mt-9 flex flex-wrap gap-3.5">
          <Link
            href="/embedded-design-services"
            className="inline-block cursor-pointer rounded-md bg-red-500 px-8 py-[14px] text-base font-semibold uppercase tracking-[0.04em] text-white no-underline transition-colors duration-150 hover:bg-red-600 hover:text-white hover:no-underline"
          >
            Explore Our Services
          </Link>
          <Link
            href="#offices"
            className="inline-block cursor-pointer rounded-md border border-red-500 bg-transparent px-8 py-[14px] text-base font-semibold uppercase tracking-[0.04em] text-white no-underline transition-colors duration-150 hover:bg-red-500 hover:text-white hover:no-underline"
          >
            Talk to an Engineer
          </Link>
        </div>
      </div>
    </section>
  );
}
