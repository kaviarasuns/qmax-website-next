import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { industrialCaseStudiesData } from "@/store/industrial-case-studies";
import { industrialDesignFAQs } from "@/data/service-faqs";
import { ServiceVideoHero } from "@/components/services-cmp/service-video-hero";
import {
  CapabilitiesFolderTabs,
  FOLDER_TAB_ICONS,
  type CapabilitiesFolderTabItem,
} from "@/components/services-cmp/capabilities-folder-tabs";
import { WhySection } from "@/components/services-cmp/WhySection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import { WorkflowSection } from "@/components/services-cmp/WorkflowSection";

const HERO = {
  videoSrc: "https://d1yetprhniwywz.cloudfront.net/v2/Inudstrial_V2.mp4",
  title: "Industrial Design Services.",
  description:
    "Industrial design at Qmax Systems integrates visual, ergonomic, and manufacturing reality from the first sketch — ensuring every decision is grounded in engineering truth.",
  ctaHref: "/mechanical-industrial-design-services/contact",
  ctaLabel: "Talk to Our Engineers",
};
const INDUSTRIAL_DESIGN_CAPABILITIES: CapabilitiesFolderTabItem[] = [
  {
    id: "product-story",
    tabLabel: "Product Story",
    tabIcon: FOLDER_TAB_ICONS.productStory,
    description:
      "Translation of requirements, brand values, and user needs into structured visual narratives through digital concept illustrations and visualisation boards that align all stakeholders early.",
    videoSrc: "https://d1yetprhniwywz.cloudfront.net/v2/ID_Service_1.mp4",
  },
  {
    id: "cad-3d",
    tabLabel: "CAD & 3D",
    tabIcon: FOLDER_TAB_ICONS.cad3d,
    description:
      "Parametric models built for construction — with tolerancing, draft angles, and wall thickness constraints using CATIA, SolidWorks, and Fusion 360 to match manufacturer requirements.",
    videoSrc: "https://d1yetprhniwywz.cloudfront.net/v2/ID_Service_2.mp4",
  },
  {
    id: "ui-ux",
    tabLabel: "UI & UX",
    tabIcon: FOLDER_TAB_ICONS.uiUx,
    description:
      "Complete user experience design for embedded displays and physical interfaces using human factors engineering and interaction logic that puts operators first.",
    videoSrc: "https://d1yetprhniwywz.cloudfront.net/v2/ecl_ui_ux.mp4",
  },
  {
    id: "renders",
    tabLabel: "Renders",
    tabIcon: FOLDER_TAB_ICONS.renders,
    description:
      "Studio-grade photorealistic renders and high-definition animations produced directly from industrial CAD data, ready for marketing campaigns and investor presentations.",
    videoSrc: "https://d1yetprhniwywz.cloudfront.net/v2/ID_Service_2.mp4",
  },
  {
    id: "prototyping",
    tabLabel: "Prototyping",
    tabIcon: FOLDER_TAB_ICONS.prototyping,
    description:
      "Physical validation through CNC, FDM, SLA, and SLS — testing ergonomics, fitment, and functionality rigorously before committing to production tooling investment.",
    videoSrc: "https://d1yetprhniwywz.cloudfront.net/v2/ID_Service_1.mp4",
  },
];

const WHY_CARDS = [
  {
    title: "Multidisciplinary",
    desc: "Integrated teams of industrial designers, mechanical engineers, and electronics experts.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="5" cy="19" r="2.5" />
        <circle cx="19" cy="19" r="2.5" />
        <path d="M12 7.5V12m0 0l-5.5 5m5.5-5l5.5 5" />
      </svg>
    ),
  },
  {
    title: "Direct Access",
    desc: "Rapid validation through in-house prototype oversight and vetted manufacturing networks.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Compliance First",
    desc: "Global framework expertise (CE, UL, FCC) built into the initial design iteration.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Proven Process",
    desc: "Repeatable results for startups and Fortune 500s across three decades of operation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const WORKFLOW_STEPS = [
  {
    number: 1,
    title: "Uncover Opportunities",
    description:
      "Behavioural research and technical constraint analysis relevant to the product category.",
  },
  {
    number: 2,
    title: "Informed Ideation",
    description:
      "Structured creativity to produce a range of viable, engineering-led design directions.",
  },
  {
    number: 3,
    title: "Get Real, Fast",
    description:
      "Detailed form development and high-fidelity prototypes for real-world evaluation.",
  },
  {
    number: 4,
    title: "Ready to Ship",
    description:
      "Finalised documentation package and factory-floor liaison for consistent outcomes.",
  },
];

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
      <ServiceVideoHero {...HERO} />

      {/* Core Introduction */}
      {/* <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_minmax(280px,42%)] lg:items-stretch lg:gap-12">
            <div className="max-w-4xl space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
              <p>
                Industrial design at Qmax Systems integrates visual, ergonomic,
                and manufacturing reality from the first sketch — ensuring every
                decision is grounded in engineering truth.
              </p>
              <p>
                We help entrepreneurs, startups, and Fortune 500 companies
                create products that users value and manufacturers can build
                efficiently. With over 25 years of experience, our
                multidisciplinary team — industrial designers, mechanical
                engineers, and electronics experts — delivers market-ready
                solutions.
              </p>
              <p>
                Our designs are not conceptual exercises. Form, material
                selection, and interface elements are evaluated against
                production constraints, cost targets, and global compliance
                before a single prototype is built.
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
      </section> */}

      <CapabilitiesFolderTabs capabilities={INDUSTRIAL_DESIGN_CAPABILITIES} />

      <WorkflowSection
        steps={WORKFLOW_STEPS}
        title="The"
        titleHighlight="Process"
      />

      {/* Our Process Section */}
      {/* <section className="bg-[#fcfcfc] dark:bg-zinc-950 py-32 border-t border-zinc-200 dark:border-zinc-800">
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
      </section> */}

      {/* WHY CHOOSE QMAX */}
      <WhySection
        whyCards={WHY_CARDS}
        titleHighlight="Industrial Design?"
        ctaHref="/mechanical-industrial-design-services/contact"
      />

      {/* Why Qmax Section */}
      {/* <section className="bg-[#fcfcfc] dark:bg-zinc-950 py-32 border-t border-zinc-200 dark:border-zinc-800">
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
      </section> */}

      {/* FAQ Section */}
      <FAQSection faqItems={industrialDesignFAQs} />

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
