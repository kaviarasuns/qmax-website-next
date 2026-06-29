import { pcbDesingTerms } from "@/components/pcbDesignTerms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "PCB Design Glossary | Qmax Systems",
  description:
    "Definitions of PCB design terminology — impedance, stack-up, SI/PI, HDI, surface finishes, and more — from Qmax Systems engineering.",
  path: "/pcb-design-glossary",
});

export default function PCBDesignGlossaryPage() {
  return (
    <>
      <section
        className="mt-[var(--nav-h)] bg-white px-16 pt-16 pb-10 max-[900px]:px-6 max-[900px]:pt-12 max-[900px]:pb-8"
        aria-labelledby="pcb-glossary-title"
      >
        <div className="mx-auto max-w-[960px] text-center">
          <h1
            id="pcb-glossary-title"
            className="text-[clamp(32px,4vw,48px)] font-light leading-[1.15] tracking-[-0.025em] text-foreground"
          >
            PCB Design <span className="text-red-500">Glossary</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[680px] text-[15px] font-light leading-[1.6] text-foreground">
            Key terms and definitions used across PCB layout, signal integrity,
            fabrication, and assembly — explained by Qmax Systems engineers.
          </p>
        </div>
      </section>

      <section className="bg-white px-16 pb-28 max-[900px]:px-6 max-[900px]:pb-20">
        <div className="mx-auto max-w-[960px]">
          {pcbDesingTerms.map((item, index) => (
            <article
              key={`${item.term}-${index}`}
              className="border-b border-gray-200 py-8 last:border-b-0"
            >
              <h2 className="mb-3 text-xl font-light leading-tight tracking-tight text-foreground md:text-2xl">
                {item.term}
              </h2>
              <p className="text-justify text-[15px] font-light leading-[1.6] text-foreground">
                {item.definition}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
