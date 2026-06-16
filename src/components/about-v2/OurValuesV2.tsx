import {
  Handshake,
  Heart,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";

const VALUES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Building strong partnerships with clients and internal teams for mutual success.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "Delivering impeccable products through rigorous testing and disciplined quality assurance.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Operating with transparency and trust — protecting client IP and honoring every commitment.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Striving for perfection in every project, process, and interaction with our clients.",
  },
];

export default function OurValuesV2() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-[52px]">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-zinc-950 md:text-5xl">
            Our <span className="text-red-500">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-md border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-lg bg-red-50 text-red-500">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[19px] font-semibold text-[#1C2A3A]">
                    {value.title}
                  </h3>
                </div>
                <p className="text-[14.5px] leading-relaxed text-slate-500">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
