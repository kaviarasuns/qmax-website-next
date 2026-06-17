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
      "Operating with transparency and trust - protecting client IP and honoring every commitment.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Striving for perfection in every project, process, and interaction with our clients.",
  },
];

const CARD_CLASS =
  "flex flex-col gap-5 rounded-2xl bg-white px-10 pb-9 pt-6 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_16px_32px_rgba(16,24,40,0.10)]";

export default function OurValuesV2() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-[52px]">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-foreground md:text-5xl">
            Our <span className="text-red-500">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={CARD_CLASS}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center text-red-500">
                    <Icon className="h-full w-full" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-2 text-xl font-medium tracking-wide text-foreground md:text-2xl">
                    {value.title}
                  </h3>
                </div>
                <p className="text-base text-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
