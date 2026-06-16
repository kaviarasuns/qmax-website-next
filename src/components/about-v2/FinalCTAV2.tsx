import Link from "next/link";

export default function FinalCTAV2() {
  return (
    <section id="cta" className="bg-white pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="rounded-[10px] border border-slate-200 bg-white px-8 py-14 text-center shadow-[0_4px_8px_rgba(16,24,40,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,24,40,0.10)] md:px-14 md:py-[72px]">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-zinc-950 md:text-5xl">
            Let Us Engineer Your{" "}
            <span className="text-red-500">Next Product</span>
          </h2>
          <p className="mx-auto mt-[18px] mb-8 max-w-[580px] text-base text-slate-600">
            Whether you need embedded systems design, PCB design, or full-cycle
            product development, we are ready to deliver.
          </p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              href="/contact"
              className="rounded-md bg-red-500 px-[26px] py-[13px] text-[15px] font-semibold text-white transition-colors hover:bg-red-600"
            >
              Contact Us Today
            </Link>
            <Link
              href="/Qmax_Systems_Electronics_Engineering_Services_Std.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 bg-white px-[26px] py-[13px] text-[15px] font-semibold text-zinc-900 transition-colors hover:border-red-500 hover:text-red-500"
            >
              Download Company Presentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
