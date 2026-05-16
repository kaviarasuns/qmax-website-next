import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import FAQSection from "@/components/FAQSection";
import { MechanicalIndustrialHero } from "@/components/services-cmp/MechanicalIndustrialHero";
import { industrialCaseStudiesData } from "@/store/industrial-case-studies";
import { industrialDesignFAQs } from "@/data/service-faqs";

const INDUSTRIAL_DESIGN_HERO = {
  videoSrc: "https://d1yetprhniwywz.cloudfront.net/v2/Inudstrial_V2.mp4",
  title: "Industrial Design Services.",
  subtitle:
    "Industrial design at Qmax Systems integrates visual, ergonomic, and manufacturing reality from the first sketch — ensuring every decision is grounded in engineering truth.",
  ctaHref: "/hardware-development-services/contact",
  ctaLabel: "Talk to Our Engineers",
};
const industrialDesignCaseStudies = industrialCaseStudiesData
  .slice(0, 4)
  .map((caseStudy) => ({
    title: caseStudy.title,
    image: caseStudy.images[0],
    link: `/case-studies/${caseStudy.id}`,
    category: "industrial",
    summary: caseStudy.summary,
    imageRotation: caseStudy.rotatedImages?.[0],
  }));

// export const metadata: Metadata = {
//   title: "Industrial Design Services | Qmax Systems",
//   description:
//     "At Qmax Systems, our Industrial Design practice integrates visual, ergonomic, and manufacturing considerations from the earliest stage of product development — ensuring that every design decision is grounded in engineering reality.",
// };

export default function IndustrialDesignServicesPage() {
  return (
    <main className="relative bg-[#fcfcfc] text-zinc-900">
      <MechanicalIndustrialHero
        videoSrc={INDUSTRIAL_DESIGN_HERO.videoSrc}
        title={INDUSTRIAL_DESIGN_HERO.title}
        subtitle={INDUSTRIAL_DESIGN_HERO.subtitle}
        ctaHref={INDUSTRIAL_DESIGN_HERO.ctaHref}
        ctaLabel={INDUSTRIAL_DESIGN_HERO.ctaLabel}
      />

      {/* Core Introduction */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_minmax(280px,42%)] lg:items-stretch lg:gap-12">
            <div className="max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
              <p>
                Industrial design at Qmax Systems integrates visual, ergonomic,
                and manufacturing reality from the first sketch — ensuring every
                decision is grounded in engineering truth.
              </p>
              <p>
                We help entrepreneurs, startups, and Fortune 500 companies create
                products that users value and manufacturers can build efficiently.
                With over 25 years of experience, our multidisciplinary team —
                industrial designers, mechanical engineers, and electronics
                experts — delivers market-ready solutions.
              </p>
              <p>
                Our designs are not conceptual exercises. Form, material
                selection, and interface elements are evaluated against
                production constraints, cost targets, and global compliance before
                a single prototype is built.
              </p>
            </div>
            <div className="relative overflow-hidden lg:h-full">
              <video
                src="https://d1yetprhniwywz.cloudfront.net/v2/ID_Service_2.mp4"
                className="aspect-video w-full object-cover lg:aspect-auto lg:h-full"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Industrial design service overview video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Design Capabilities Section */}
      <section className="bg-[#fcfcfc] dark:bg-zinc-950 py-32 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="text-4xl font-light text-zinc-500 dark:text-zinc-400 md:text-6xl tracking-tighter">
              Capabilities.
            </h2>
          </div>

          <div className="space-y-0">
            {[
              {
                id: "01",
                title: "Product Story & Visualisation",
                desc: "Translation of requirements, brand values, and user needs into structured visual narratives through digital concept illustrations and visualisation boards.",
              },
              {
                id: "02",
                title: "CAD & 3D Modelling",
                desc: "Parametric models built for construction — with tolerancing, draft angles, and wall thickness constraints using CATIA, SolidWorks, and Fusion 360.",
              },
              {
                id: "03",
                title: "UI & UX Design",
                desc: "Complete user experience design for embedded displays and physical interfaces using human factors engineering and interaction logic.",
              },
              {
                id: "04",
                title: "Photorealistic assets",
                desc: "Studio-grade photorealistic renders and high-definition animations produced directly from industrial CAD data for marketing and investment.",
              },
              {
                id: "05",
                title: "Rapid Prototyping",
                desc: "Physical validation through CNC, FDM, SLA, and SLS — testing ergonomics, fitment, and functionality before production investment.",
              },
            ].map((capability, idx) => (
              <div
                key={idx}
                className="group border-t border-zinc-200 dark:border-zinc-800 py-10 grid grid-cols-1 md:grid-cols-[100px_1fr_1.5fr] gap-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/70 transition-colors px-4"
              >
                <span className="text-xs font-black text-[#F33117] tracking-[0.4em] pt-2">
                  {capability.id}
                </span>
                <h3 className="text-2xl md:text-4xl font-light tracking-tight text-zinc-950 dark:text-zinc-100 group-hover:text-[#F33117] transition-colors">
                  {capability.title}
                </h3>
                <p className="text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  {capability.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 overflow-hidden border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <video
              src="https://d1yetprhniwywz.cloudfront.net/v2/ID_Service_1.mp4"
              className="aspect-[16/7] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Industrial design capabilities video"
            />
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-[#fcfcfc] dark:bg-zinc-950 py-32 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl font-light text-zinc-500 dark:text-zinc-400 md:text-6xl tracking-tighter">
              The Process.
            </h2>
            <p className="max-w-md text-zinc-500 dark:text-zinc-400 font-light text-lg">
              A structured four-phase engine moving from narrative to
              production-ready documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-200 dark:border-zinc-800">
            {[
              {
                id: "01",
                label: "DISCOVERY",
                title: "Uncover Opportunities",
                desc: "Behavioural research and technical constraint analysis relevant to the product category.",
              },
              {
                id: "02",
                label: "DEFINITION",
                title: "Informed Ideation",
                desc: "Structured creativity to produce a range of viable, engineering-led design directions.",
              },
              {
                id: "03",
                label: "REFINEMENT",
                title: "Get Real, Fast",
                desc: "Detailed form development and high-fidelity prototypes for real-world evaluation.",
              },
              {
                id: "04",
                label: "DELIVERY",
                title: "Ready to Ship",
                desc: "Finalised documentation package and factory-floor liaison for consistent outcomes.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-12 border-r border-b border-zinc-200 dark:border-zinc-800 flex flex-col min-h-[400px] group hover:bg-zinc-50 dark:hover:bg-zinc-900/70 transition-colors"
              >
                <div className="flex justify-between items-center mb-16">
                  <span className="text-[10px] font-black tracking-[0.4em] text-[#F33117] group-hover:translate-x-1 transition-transform">
                    {step.label}
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-3xl font-light text-zinc-950 dark:text-zinc-100 mb-8 group-hover:underline decoration-[#F33117] underline-offset-8 transition-all">
                  {step.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mt-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Qmax Section */}
      <section className="bg-[#fcfcfc] dark:bg-zinc-950 py-32 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-24">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 mb-8 block">
                / PARTNERSHIP
              </span>
              <h2 className="text-4xl font-light text-zinc-950 dark:text-zinc-100 md:text-6xl tracking-tighter mb-12">
                Why Qmax <br className="hidden lg:block" /> Systems.
              </h2>
              <div className="h-1 w-24 bg-[#F33117]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
              {[
                {
                  title: "Multidisciplinary",
                  desc: "Integrated teams of industrial designers, mechanical engineers, and electronics experts.",
                },
                {
                  title: "Direct Access",
                  desc: "Rapid validation through in-house prototype oversight and vetted manufacturing networks.",
                },
                {
                  title: "Compliance First",
                  desc: "Global framework expertise (CE, UL, FCC) built into the initial design iteration.",
                },
                {
                  title: "Proven Process",
                  desc: "Repeatable results for startups and Fortune 500s across three decades of operation.",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-xl uppercase tracking-widest text-[#F33117] border-b border-zinc-200 dark:border-zinc-800 pb-4">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={industrialDesignFAQs} />

      {/* Our Work Section */}
      <ServiceCaseStudiesSection
        eyebrow="Industrial Portfolio"
        studies={industrialDesignCaseStudies}
        className="bg-[#fcfcfc] dark:bg-zinc-950"
        hideTopBorder
      />
    </main>
  );
}
