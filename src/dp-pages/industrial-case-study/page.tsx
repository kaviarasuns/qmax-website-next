import CaseStudyCard from "@/components/CaseStudyCard";

const industrialCaseStudies = [
  {
    id: 1,
    title: "Handheld Industrial Controller",
    image: "/industrial_design_case_studies/product_1.png",
    link: "/mechanical-industrial-design-services/industrial-design",
    category: "industrial",
  },
  {
    id: 2,
    title: "Medical Diagnostic System",
    image: "/industrial_design_case_studies/product_2.png",
    link: "/mechanical-industrial-design-services/industrial-design",
    category: "industrial",
  },
  {
    id: 3,
    title: "Security Hub Enclosure",
    image: "/industrial_design_case_studies/product_3.png",
    link: "/mechanical-industrial-design-services/industrial-design",
    category: "industrial",
  },
  {
    id: 4,
    title: "Military Communication Unit",
    image: "/industrial_design_case_studies/product_4.png",
    link: "/mechanical-industrial-design-services/industrial-design",
    category: "industrial",
  },
  {
    id: 5,
    title: "Smart Device Product Concept",
    image: "/industrial_design_case_studies/product_5.png",
    link: "/mechanical-industrial-design-services/industrial-design",
    category: "industrial",
  },
];

export default function IndustrialCaseStudyPage() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f6] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(243,49,23,0.08),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.82))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 border-b border-zinc-300/70 pb-6">
          <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.38em] text-red-500">
            Industrial Portfolio
          </span>
          <h1 className="text-4xl font-light tracking-tight md:text-5xl">
            Case Studies.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {industrialCaseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
