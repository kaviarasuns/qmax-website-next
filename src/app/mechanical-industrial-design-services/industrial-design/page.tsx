import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Design Services | Qmax",
  description: "Professional Industrial Design Services by Qmax Systems.",
};

export default function IndustrialDesignServicesPage() {
  return (
    <main className="bg-zinc-100 text-zinc-900 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <p className="inline-flex rounded-full border border-zinc-300 bg-zinc-100 px-4 py-1 text-xs uppercase tracking-[0.16em] text-zinc-700">
          Mechanical and Industrial Design Services
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl lg:text-6xl text-left">
          Industrial Design Services
        </h1>
        <div className="mt-12 p-12 bg-white rounded-2xl border border-zinc-200 shadow-sm text-center">
            <h2 className="text-2xl font-medium text-zinc-600">Content Yet To be added</h2>
            <p className="mt-4 text-zinc-500">Our Industrial Design Services are coming soon. Keep an eye out for updates.</p>
        </div>
      </div>
    </main>
  );
}
