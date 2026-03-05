import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Speed Digital Design Services | Qmax",
  description:
    "High speed digital design services page. Detailed content will be added soon.",
};

export default function HighSpeedDigitalDesignPage() {
  return (
    <main className="bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
          <p className="inline-flex rounded-full border border-sky-300 bg-sky-100 px-4 py-1 text-xs uppercase tracking-[0.16em] text-sky-700">
            High Speed Digital Design
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            High Speed Digital Design Services
          </h1>
          <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
            Content yet to be added.
          </p>
        </div>
      </section>
    </main>
  );
}
