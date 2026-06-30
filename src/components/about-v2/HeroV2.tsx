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

      <div className="container relative z-10 mx-auto pr-4 pl-6 text-left md:pr-6 md:pl-10">
        {/* <p className="mb-4 font-semibold leading-tight tracking-wide text-red-500 [font-size:clamp(18px,2vw,26px)]">
          About Qmax Systems
        </p> */}
        <h1 className="text-balance font-bold leading-[1.1] text-white [font-size:clamp(32px,4.4vw,56px)]">
          Precision Engineering Services
          <br />
          <span className="text-red-500">Since 1997</span> — From Concept to
          <br />
          Manufacturing.
        </h1>
        <p className="mt-6 max-w-[660px] font-normal leading-[1.55] text-white [font-size:clamp(15px,1.6vw,19px)]">
          Qmax Systems is a trusted partner for electronics engineering and
          R&amp;D, specializing in embedded systems and PCB design. For 25+
          years, we have helped innovators and enterprises turn bold ideas into
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
