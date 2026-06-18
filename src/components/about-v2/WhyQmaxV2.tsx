import {
  Rocket,
  ShieldCheck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const REASONS: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Multi-disciplinary Team",
    description:
      "Embedded systems experts, PCB designers, firmware engineers, and manufacturing specialists working in perfect harmony.",
    icon: Users,
  },
  {
    title: "Stringent Process",
    description:
      "ISO-certified processes, rigorous quality checks, and industry best practices ensure reliability and compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Faster Time-to-Market",
    description:
      "Agile methodology and parallel workflows compress development cycles without compromising on quality.",
    icon: Rocket,
  },
  {
    title: "End-to-End Engineering",
    description:
      "From concept and design through manufacturing support and field support — we handle the entire lifecycle.",
    icon: Workflow,
  },
];

export default function WhyQmaxV2() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <h2 className="text-4xl font-light leading-tight tracking-wide text-foreground md:text-5xl">
            Why Choose <span className="text-red-500">Qmax</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            The reasons enterprises and startups trust us with their most
            complex electronics development.
          </p>
        </div>

        <div className="grid grid-cols-2 items-stretch gap-8 max-[900px]:grid-cols-1 max-[900px]:gap-5">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="flex flex-col gap-5 rounded-2xl bg-white px-10 pb-9 pt-6 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[box-shadow,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_16px_32px_rgba(16,24,40,0.10)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center text-red-500">
                    <Icon className="h-full w-full" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-2 text-xl font-medium tracking-wide text-foreground md:text-2xl">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-base text-foreground">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
