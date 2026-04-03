import CaseStudyCard from "@/components/CaseStudyCard";

const mechanicalCaseStudies = [
  {
    id: 1,
    title: "Manpack Communication Equipment",
    image:
      "https://images.pexels.com/photos/1592261/pexels-photo-1592261.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/mechanical-industrial-design-services/mechanical-design",
    category: "mechanical",
  },
  {
    id: 2,
    title: "Satellite Antenna Stabilizer Housing",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/mechanical-industrial-design-services/mechanical-design",
    category: "mechanical",
  },
  {
    id: 3,
    title: "Medical Foot Switch Mechanism",
    image:
      "https://images.pexels.com/photos/5726833/pexels-photo-5726833.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/mechanical-industrial-design-services/mechanical-design",
    category: "mechanical",
  },
  {
    id: 4,
    title: "Handheld OBD2 Enclosure",
    image:
      "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/mechanical-industrial-design-services/mechanical-design",
    category: "mechanical",
  },
];

export default function MechanicalCaseStudyPage() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f6] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(243,49,23,0.08),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.82))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 border-b border-zinc-300/70 pb-6">
          <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.38em] text-[#F33117]">
            Mechanical Portfolio
          </span>
          <h1 className="text-4xl font-light tracking-tight text-zinc-950 md:text-5xl">
            Case Studies.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {mechanicalCaseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
