import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industrial Design Services | Qmax Systems",
  description:
    "At Qmax Systems, our Industrial Design practice integrates visual, ergonomic, and manufacturing considerations from the earliest stage of product development — ensuring that every design decision is grounded in engineering reality.",
};

export default function IndustrialDesignServicesPage() {
  return (
    <main className="bg-zinc-100 text-zinc-900">

      {/* Dynamic Hero Section with Top-aligned Full-width Image */}
      <section className="relative overflow-hidden border-b border-zinc-200 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(24,24,27,0.08),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(82,82,91,0.08),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-12 lg:px-8">
          {/* Tag & Title */}
          <div className="mb-10 lg:mb-16">
            <p className="inline-flex rounded-full border border-zinc-300 bg-zinc-100 px-4 py-1 text-xs uppercase tracking-[0.16em] text-zinc-700">
              Industrial Design
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl lg:text-7xl">
              Industrial Design Services
            </h1>
          </div>

          {/* Full-width Image Container */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl transition-all duration-500 hover:shadow-[0_32px_120px_rgba(24,24,27,0.12)]">
            <Image
              src="/services/13_industrial_design_service.png"
              alt="Industrial Design Services - Qmax Systems"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="100vw"
              priority
            />
            {/* Subtle Overlay for Premium Feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 to-transparent pointer-events-none" />
          </div>

          {/* Core Introduction Content */}
          <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 uppercase tracking-[0.1em] border-b-2 border-zinc-900 pb-4 inline-block">
                Introduction
              </h2>
            </div>
            <div className="space-y-8 text-base leading-[1.8] text-zinc-700 md:text-lg">
              <p className="font-medium text-zinc-900">
                Industrial design is the discipline that defines the form, function, materials, and user interface of a physical product. At Qmax Systems, our Industrial Design practice integrates visual, ergonomic, and manufacturing considerations from the earliest stage of product development — ensuring that every design decision is grounded in engineering reality.
              </p>
              <p>
                We help entrepreneurs, startups, and Fortune 500 companies create products that users value and manufacturers can build efficiently. With over 25 years in product development, our multidisciplinary team — comprising qualified industrial designers, mechanical engineers, and electronics engineers — has consistently delivered market-ready solutions across diverse industries.
              </p>
              <p>
                Our designs are not conceptual exercises. Every form factor, material selection, surface finish, and user interface element is evaluated against production constraints, cost targets, safety requirements, and global compliance standards before a single prototype is built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Design Capabilities Section */}
      <section className="bg-zinc-50/80 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl lg:text-5xl uppercase tracking-tight">
              Our Industrial Design Capabilities
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base font-medium">
              A comprehensive end-to-end design practice moving from initial narrative to production-ready documentation and functional prototypes.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {[
              {
                id: "1.1",
                title: "Product Story and Concept Sketching / Product Visualisation",
                desc: "Every successful product begins with a clearly articulated concept. Our industrial designers work directly with clients to translate product requirements, brand values, and user needs into structured visual narratives.",
                details: "This phase includes hand sketches, digital concept illustrations, and annotated visualisation boards that communicate design intent to both technical and non-technical stakeholders.",
                listTitle: "Deliverables include:",
                items: [
                  "Concept sketch sets (hand-drawn and digital)",
                  "Design direction boards (form language, aesthetic intent)",
                  "Annotated product story presentations",
                  "2D product visualisation renderings"
                ]
              },
              {
                id: "1.2",
                title: "CAD and 3D Modelling",
                desc: "Approved concept sketches are translated into precision parametric 3D models using industry-standard CAD platforms. Our models are construction-ready — built with tolerancing, draft angles, and wall thickness constraints.",
                details: "CAD deliverables are fully documented with manufacturing annotations, bill of materials structure, and revision control to support downstream mechanical engineering and tooling activities.",
                listTitle: "Typical scope:",
                items: [
                  "Surface and solid 3D modelling (CATIA, SolidWorks, Fusion 360, Rhino)",
                  "Assembly and exploded view modelling",
                  "DFM (Design for Manufacture) and DFA (Design for Assembly) review",
                  "Detailed 2D engineering drawings (GD&T, ISO/ASME standards)"
                ]
              },
              {
                id: "1.3",
                title: "UI & UX Design",
                desc: "For products with embedded displays or physical control interfaces, our team designs the complete user experience — from information architecture and interaction logic to visual interface design.",
                details: "We apply human factors engineering principles to ensure every interface is intuitive, accessible, and aligned with the product’s intended operating environment.",
                listTitle: "User Research & Interaction:",
                items: [
                  "User research and persona definition",
                  "Wireframing and interaction flow design",
                  "High-fidelity UI mockups and design systems",
                  "Physical ergonomics analysis and control layout optimisation"
                ]
              },
              {
                id: "1.4",
                title: "Photorealistic Images and Product Animation Videos",
                desc: "Before committing to production, clients require presentation-quality visual assets for investor briefings, product launches, e-commerce listings, and regulatory submissions.",
                details: "Our rendering team produces studio-grade photorealistic images and high-definition product animation videos directly from CAD data.",
                listTitle: "Rendering Assets:",
                items: [
                  "Studio-quality static product renders (JPEG, PNG, TIFF)",
                  "360-degree product spin animations",
                  "Exploded view and assembly sequence animations",
                  "CMF (Colour, Material, Finish) variant renders"
                ]
              },
              {
                id: "1.5",
                title: "Rapid Prototyping",
                subtitle: "CNC / FDM / SLA / SLS / Vacuum Casting",
                desc: "Physical prototypes validate design intent, ergonomics, fitment, and functionality before production investment. Qmax Systems has direct access to prototype facilities and a vetted manufacturing network.",
                details: "Prototyping technologies are selected based on fidelity requirements and intended use — from rapid form iteration to small-batch bridge production.",
                listTitle: "Available Technologies:",
                items: [
                  "CNC Machining: High-precision functional components in production materials",
                  "FDM / SLA: Rapid iteration on form, fitment, and high-resolution surface finishes",
                  "SLS: Functional complex geometry parts for mechanism testing",
                  "Vacuum Casting: Small-batch pre-production user trials and market testing"
                ]
              }
            ].map((capability, idx) => (
              <article key={idx} className="group relative grid grid-cols-1 lg:grid-cols-[0.4fr_1.6fr] gap-8 p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:border-zinc-900">
                <div className="flex flex-col">
                  <span className="text-5xl font-light tracking-tighter text-zinc-300 group-hover:text-zinc-900 transition-colors duration-500">
                    {capability.id}
                  </span>
                  <div className="mt-4 h-px w-12 bg-zinc-200 group-hover:w-24 group-hover:bg-zinc-900 transition-all duration-700"></div>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-900 mb-6 leading-tight">
                        {capability.title}
                        {capability.subtitle && (
                          <span className="block text-sm font-medium text-zinc-500 mt-2 uppercase tracking-widest">{capability.subtitle}</span>
                        )}
                      </h3>
                      <div className="space-y-4 text-sm leading-7 text-zinc-600 md:text-base italic">
                        <p className="font-bold text-zinc-900 not-italic">{capability.desc}</p>
                        <p>{capability.details}</p>
                      </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-inner group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-zinc-400">
                        {capability.listTitle}
                      </h4>
                      <ul className="grid gap-3">
                        {capability.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900 group-hover:bg-white"></span>
                            <span className="text-sm font-medium group-hover:text-zinc-300 transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section - Card Based UI */}
      <section className="bg-zinc-100/50 py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl font-semibold text-zinc-900 md:text-5xl uppercase tracking-tighter mb-6">
              Our Process
            </h2>
            <p className="text-lg text-zinc-600 font-medium">
              Qmax Systems applies a structured four-phase design process that maintains rigorous engineering discipline while accommodating iterative client collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-zinc-200">
            {[
              {
                id: "01",
                label: "DISCOVERY",
                title: "Uncover Opportunities",
                description: "Every design engagement begins with structured research. Our team conducts in-depth analysis of user behaviours and technical constraints relevant to the product.",
                context: "Research methodologies are selected based on project type—from rapid desk research to ethnographic field studies with live end users.",
                services: [
                  "Brand immersion & stakeholder alignment",
                  "Ethnographic research & user shadowing",
                  "Market landscape & competitive analysis",
                  "Product benchmarking & technology roadmaps"
                ]
              },
              {
                id: "02",
                label: "DEFINITION",
                title: "Informed Ideation",
                description: "With research findings confirmed, our team applies structured creativity to produce a range of viable design concepts.",
                context: "Client goals governing ideation—this is not an open-ended creative exercise, but a targeted exploration of viable design directions.",
                services: [
                  "Design language definition",
                  "Concept generation workshops",
                  "2D and 3D concept sketching",
                  "CMF strategy definition"
                ]
              },
              {
                id: "03",
                label: "REFINEMENT",
                title: "Get Real, Fast",
                description: "Selected concepts are developed into detailed, testable form. Early prototypes are introduced as rapidly as practicable, allowing for real-world evaluation.",
                context: "Detailed design sprints and iterations followed by efficient feedback loops lead to refined solutions that exceed client expectations.",
                services: [
                  "High-fidelity visualisation",
                  "Functional models & mock-ups",
                  "Iterative prototype builds",
                  "DFM/DFA optimisation reviews"
                ]
              },
              {
                id: "04",
                label: "DELIVERY",
                title: "Ready to Ship",
                description: "Finalized and validated, the last step is to ensure every detail is intentional and fully considered before transitioning to the factory floor.",
                context: "We work directly with manufacturers and client R&D staff to obsess over the ultimate surface, finish and feel—the final key to a winning product.",
                services: [
                  "Production documentation package",
                  "Tooling & manufacturing liaison",
                  "Qualified supplier sourcing",
                  "Production quality review"
                ]
              }
            ].map((step, idx) => (
              <article key={idx} className="bg-white p-10 md:p-14 border-r border-b border-zinc-200 flex flex-col min-h-[500px]">
                <div className="flex justify-between items-center mb-12">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 font-mono">
                    {step.label}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 font-mono">
                    {step.id}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-8 leading-tight">
                    {step.title}
                  </h3>

                  <div className="space-y-6">
                    <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-light">
                      {step.description}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                      {step.context}
                    </p>
                  </div>
                </div>

                <div className="mt-16">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 font-mono mb-6">
                    SERVICES
                  </h4>
                  <ul className="space-y-2">
                    {step.services.map((service, i) => (
                      <li key={i} className="text-xs font-mono text-zinc-900 tracking-tight">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8 flex justify-end">
                  <div className="border border-zinc-200 px-3 py-1 flex items-center gap-1 group cursor-default">
                    <span className="text-[8px] font-bold text-red-400 tracking-[0.2em] group-hover:text-red-600 transition-colors">LESS</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Qmax Systems Section */}
      <section className="bg-zinc-50/80 py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mb-20">
            <h2 className="text-4xl font-semibold text-zinc-900 md:text-5xl uppercase tracking-tighter mb-6">
              Why Qmax Systems
            </h2>
            <p className="text-lg text-zinc-600 font-medium italic border-l-2 border-zinc-900 pl-6">
              Selecting an industrial design partner requires confidence in both creative capability and engineering rigour. The following factors distinguish Qmax Systems as a technical design partner rather than a conventional design studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multidisciplinary In-House Team",
                desc: "Our project teams integrate qualified industrial designers with mechanical and electronics engineers under a single roof. This eliminates handoff delays and ensures real-time feasibility reviews."
              },
              {
                title: "30+ Years of Industry Experience",
                desc: "Our principal engineers bring over 30 years of experience across industrial, consumer, medical, and defence sectors. This depth informs pragmatic decisions on materials, processes, and cost."
              },
              {
                id: "25+",
                title: "25+ Years of Product Development",
                desc: "Qmax has over 25 years in the business, covering the full lifecycle from initial concept through regulatory approval, volume production, and market launch."
              },
              {
                title: "Direct Access to Facilities",
                desc: "Established relationships with CNC, additive manufacturing, and vacuum casting facilities allow us to produce and evaluate physical prototypes rapidly and with direct engineering oversight."
              },
              {
                title: "Compliance and Safety Expertise",
                desc: "In-depth working knowledge of global frameworks (CE, UL, FCC, RoHS, REACH, IEC, ISO). Compliance is incorporated from the first design iteration, not as an afterthought."
              },
              {
                title: "Proven Process. Consistent Outcomes.",
                desc: "Our four-phase process is structured to deliver repeatable results—products that are manufacturable, compliant, user-appropriate, and commercially viable for startups and Fortune 500s."
              }
            ].map((item, idx) => (
              <article key={idx} className="group p-8 rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white text-[10px] font-bold group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-4 leading-tight group-hover:text-zinc-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-zinc-600 font-medium">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work — Case Studies Section */}
      <section className="bg-white py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-semibold text-zinc-900 md:text-5xl uppercase tracking-tighter mb-4">
              4. Our Work — Case Studies
            </h2>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest italic">
              Proven Performance Across Diverse Industrial Domains
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Handheld Industrial Controller", category: "Industrial Automation", img: "/industrial_design_case_studies/product_1.png" },
              { title: "Medical Diagnostic System", category: "Medical Design", img: "/industrial_design_case_studies/product_2.png" },
              { title: "Security Hub Enclosure", category: "Security Systems", img: "/industrial_design_case_studies/product_3.png" },
              { title: "Military Communication Unit", category: "Ruggedized Systems", img: "/industrial_design_case_studies/product_4.png" },
              { title: "IoT Gateway Housing", category: "IoT & Smart Cities", img: "/industrial_design_case_studies/product_5.png" },
              { title: "Smart Home Touch Interface", category: "Consumer Electronics", img: "/industrial_design_case_studies/product_1.png" },
              { title: "RF Shielded Chassis", category: "Telecommunications", img: "/industrial_design_case_studies/product_2.png" },
              { title: "Precision Lab Equipment", category: "Scientific Instruments", img: "/industrial_design_case_studies/product_3.png" }
            ].map((work, idx) => (
              <a
                key={idx}
                href="/portfolio"
                className="group relative h-[300px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm transition-all duration-700 hover:shadow-2xl hover:border-zinc-900"
              >
                {/* Image Background */}
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                {/* Text Overlay - Appears on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{work.category}</p>
                    <h3 className="text-sm font-bold text-white tracking-tight">{work.title}</h3>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">View Case Study</span>
                    <span className="text-white text-xs">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 1-Hour Complimentary Consultation Section */}
      <section className="bg-zinc-50/80 py-24 mb-16 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-10 md:p-16 shadow-[0_24px_100px_rgba(24,24,27,0.06)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,24,27,0.04),transparent_45%)]" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-semibold text-zinc-900 md:text-5xl uppercase tracking-tighter mb-4">
                    5. 1-Hour Complimentary Engineering Consultation
                  </h2>
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.3em] mb-8">
                    Start Your Project With a No-Obligation Technical Review
                  </p>
                </div>

                <div className="space-y-6 text-base leading-[1.8] text-zinc-600 font-medium md:text-lg italic bg-zinc-50 p-8 border-l-4 border-zinc-900">
                  <p>
                    If you have a product concept, an existing design requiring improvement, or a technical challenge you have not yet resolved, our engineers will meet with you for one hour at no cost.
                  </p>
                  <p className="text-zinc-900 not-italic font-bold">
                    This session is conducted directly with a senior Qmax Systems engineer — not a sales representative.
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-10 py-5 text-sm font-bold text-white transition-all hover:bg-zinc-800 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Schedule Your Consultation
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-12 rounded-[2rem] bg-zinc-900 text-white shadow-2xl relative overflow-hidden">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8 border-b border-zinc-800 pb-4">
                  What the consultation covers
                </p>
                <ul className="space-y-6">
                  {[
                    "Review of your existing concept, sketch, or specification",
                    "Identification of design, manufacturing, or compliance challenges",
                    "Preliminary assessment of development approach",
                    "Realistic discussion of timelines and development costs",
                    "Recommended next steps for your project"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium leading-6 text-zinc-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-8 border-t border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center italic">
                    Unambiguous Engineering Expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-semibold text-zinc-900 md:text-5xl uppercase tracking-tighter mb-4">
              6. Frequently Asked Questions
            </h2>
            <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest italic">
              Technical & Process Insights for Industrial Design
            </p>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {[
              { q: "What is industrial design, and how is it different from mechanical design?", a: "Industrial design (ID) focuses on the form, aesthetics, ergonomics, user experience, and material selection of a product. Mechanical design focuses on structural integrity, functional mechanisms, tolerances, and engineering analysis. At Qmax Systems, both disciplines operate in parallel from the outset of a project, ensuring that form and function are developed as an integrated system rather than as separate workstreams." },
              { q: "At what stage should I engage an industrial design team?", a: "The earlier, the better. Engaging industrial design from the concept phase allows design decisions to directly influence engineering architecture, Bill of Materials cost, and manufacturing approach. Retrofitting industrial design onto a completed mechanical design is expensive and often results in compromised outcomes. Qmax Systems recommends initiating ID engagement prior to CAD modelling." },
              { q: "Can Qmax Systems handle both industrial design and mechanical engineering on the same project?", a: "Yes. Qmax Systems operates as a multidisciplinary product development organisation. Our in-house team includes industrial designers, mechanical engineers, and electronics engineers. Integrated project delivery eliminates the coordination overhead and technical translation errors that arise when these disciplines are managed separately." },
              { q: "What industries do you serve?", a: "Qmax Systems has delivered industrial design and product development programmes across consumer electronics, industrial equipment, medical devices, defence systems, renewable energy, automotive accessories, and retail products. Our process is industry-agnostic; we adapt to the specific compliance requirements, user environments, and manufacturing constraints of each sector." },
              { q: "What CAD tools does your team use?", a: "Our team is proficient in SolidWorks, CATIA, Autodesk Fusion 360, Rhino 3D, and KeyShot for rendering. Tool selection is driven by the complexity of the geometry, the manufacturing process, and client interoperability requirements. We deliver native CAD files, STEP, IGES, and STL formats as required." },
              { q: "How long does an industrial design programme typically take?", a: "Programme duration depends on product complexity, number of concept iterations, and prototype requirements. A focused consumer electronics ID programme typically runs 8 to 16 weeks from kick-off to approved production design. More complex products with multiple subsystems, embedded electronics, or regulatory requirements may require 20 to 36 weeks. We provide a detailed schedule at the outset of each project." },
              { q: "What is included in a rapid prototyping deliverable?", a: "Rapid prototyping deliverables vary by technology and objective. At minimum, each prototype build includes the physical model, a dimensional inspection report against the CAD reference, and documented observations on fitment, surface quality, and functional performance. We recommend a defined test protocol for each prototype phase to ensure evaluation is systematic and results are actionable." },
              { q: "Can you produce photorealistic renders before a physical prototype exists?", a: "Yes. Our rendering team works directly from 3D CAD data to produce studio-quality photorealistic images and animation videos. These assets are used for investor presentations, marketing collateral, regulatory submissions, and e-commerce listings before any physical sample is produced. Render quality is indistinguishable from photography when viewed on standard display media." },
              { q: "How do you handle confidentiality and IP protection?", a: "All client engagements are covered by a Non-Disclosure Agreement prior to the commencement of any technical discussion. IP generated during the design programme is assigned to the client upon final payment, in accordance with the terms specified in the project agreement. Qmax Systems does not retain any licensing rights to client IP. We advise clients to file provisional patent applications prior to disclosing novel design features." },
              { q: "What is Design for Manufacture (DFM) and how does it affect my project?", a: "DFM is the engineering practice of designing products such that they can be manufactured efficiently, consistently, and at target cost. In industrial design, DFM considerations include minimum wall thickness for injection moulding, draft angles for tooling release, parting line placement, assembly sequence logic, and component standardisation. Qmax Systems applies DFM review throughout the design process, not as a final gate check." },
              { q: "Do you work with overseas manufacturers?", a: "Yes. Qmax Systems has established relationships with qualified contract manufacturers in Asia, Europe, and locally. We manage the supplier evaluation, tooling oversight, first article inspection, and production quality review processes on behalf of clients. We do not recommend manufacturers based on cost alone; supplier selection is based on verified capability, quality systems, and compliance with applicable standards." },
              { q: "Can you take a product from concept to market?", a: "Yes. Qmax Systems provides end-to-end product development services from initial concept through regulatory approval and volume production. Our service scope encompasses industrial design, mechanical engineering, electronics design, firmware development, testing, certification support, tooling management, and production launch. Clients may engage us for the full programme or for specific phases." },
              { q: "What is vacuum casting and when is it appropriate?", a: "Vacuum casting is a small-batch manufacturing process that uses polyurethane resins cast in silicone moulds derived from a master pattern. It produces parts with surface finish and mechanical properties closely approximating injection-moulded components, typically in batches of 10 to 50 units. Vacuum casting is appropriate for pre-production user trials, internal evaluation, trade show models, and bridge production ahead of tooling investment." },
              { q: "What compliance standards do your designs meet?", a: "Applicable standards depend on the product category and target markets. For electronics products, we routinely design to CE (EU), FCC (USA), IC (Canada), RCM (Australia/New Zealand), UKCA (UK), and CCC (China) requirements. For mechanical products, we apply ISO, ASTM, and EN standards relevant to the product type. Medical device programmes follow IEC 60601 and ISO 13485 frameworks. Compliance requirements are documented in the project brief and incorporated from the first design iteration." },
              { q: "How is the industrial design fee structured?", a: "Qmax Systems typically structures industrial design engagements on a milestone-based fixed fee, with defined deliverables and client review gates at each phase. For longer programmes with evolving scope, a hybrid model combining a fixed retainer and variable milestone fees may be appropriate. We provide a detailed quotation following the initial consultation, based on confirmed project scope and deliverables." },
              { q: "Can you redesign an existing product?", a: "Yes. Product redesign is a common engagement type. Typical drivers include cost reduction through material or manufacturing process changes, updated aesthetics to extend product lifecycle, regulatory compliance updates, feature additions, or ergonomic improvements. We begin redesign programmes with a structured audit of the existing product to establish what must be retained and what can be modified." },
              { q: "What happens after the industrial design is approved?", a: "Approved industrial designs proceed to detailed mechanical engineering, where the geometry is fully documented for manufacturing with tolerances, surface finish specifications, material callouts, and assembly instructions. If the project includes electronics, the mechanical and electronics design workstreams are coordinated to ensure physical integration. Qmax Systems manages the transition between design phases and maintains design intent through to production." },
              { q: "Do you offer UI/UX design for embedded systems and industrial HMIs?", a: "Yes. Our UX team designs human-machine interfaces for embedded displays, touchscreen panels, and industrial control systems. We apply IEC 62366 (usability engineering for medical devices) and ISO 9241 (ergonomics of human-system interaction) principles where applicable. Deliverables include user research reports, interaction flow diagrams, wireframes, high-fidelity UI specifications, and usability test reports." },
              { q: "How do you manage design changes during the project?", a: "Design changes are managed through a formal change control process. All change requests are documented, assessed for impact on schedule, cost, and downstream engineering, and approved by both the Qmax project lead and the client before implementation. This process prevents scope creep, maintains design version control, and ensures that all stakeholders are aligned before resources are committed to changes." },
              { q: "How do I get started with Qmax Systems?", a: "Contact us to schedule your complimentary 1-hour technical consultation. Bring whatever you have — a sketch, a brief, an existing product, or simply a problem statement. Our engineers will conduct a structured review, provide initial technical feedback, and outline a proposed approach and scope. There is no obligation and no cost for this session." }
            ].map((faq, index) => (
              <details key={index} className="group rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-sm transition-all hover:border-zinc-900">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 pr-1 text-sm font-bold leading-relaxed text-zinc-900 md:text-base tracking-tight">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className="text-xs transition-transform duration-300 group-open:rotate-180 text-zinc-400"
                  >
                    ▾
                  </span>
                </summary>
                <div className="mt-4 text-sm leading-7 text-zinc-600 border-t border-zinc-50 pt-4 md:text-base">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { q: "What is industrial design, and how is it different from mechanical design?", a: "Industrial design (ID) focuses on the form, aesthetics, ergonomics, user experience, and material selection of a product. Mechanical design focuses on structural integrity, functional mechanisms, tolerances, and engineering analysis. At Qmax Systems, both disciplines operate in parallel from the outset of a project, ensuring that form and function are developed as an integrated system rather than as separate workstreams." },
                { q: "At what stage should I engage an industrial design team?", a: "The earlier, the better. Engaging industrial design from the concept phase allows design decisions to directly influence engineering architecture, Bill of Materials cost, and manufacturing approach. Retrofitting industrial design onto a completed mechanical design is expensive and often results in compromised outcomes. Qmax Systems recommends initiating ID engagement prior to CAD modelling." },
                { q: "Can Qmax Systems handle both industrial design and mechanical engineering on the same project?", a: "Yes. Qmax Systems operates as a multidisciplinary product development organisation. Our in-house team includes industrial designers, mechanical engineers, and electronics engineers. Integrated project delivery eliminates the coordination overhead and technical translation errors that arise when these disciplines are managed separately." },
                { q: "What industries do you serve?", a: "Qmax Systems has delivered industrial design and product development programmes across consumer electronics, industrial equipment, medical devices, defence systems, renewable energy, automotive accessories, and retail products. Our process is industry-agnostic; we adapt to the specific compliance requirements, user environments, and manufacturing constraints of each sector." },
                { q: "What CAD tools does your team use?", a: "Our team is proficient in SolidWorks, CATIA, Autodesk Fusion 360, Rhino 3D, and KeyShot for rendering. Tool selection is driven by the complexity of the geometry, the manufacturing process, and client interoperability requirements. We deliver native CAD files, STEP, IGES, and STL formats as required." },
                { q: "How long does an industrial design programme typically take?", a: "Programme duration depends on product complexity, number of concept iterations, and prototype requirements. A focused consumer electronics ID programme typically runs 8 to 16 weeks from kick-off to approved production design. More complex products with multiple subsystems, embedded electronics, or regulatory requirements may require 20 to 36 weeks. We provide a detailed schedule at the outset of each project." },
                { q: "What is included in a rapid prototyping deliverable?", a: "Rapid prototyping deliverables vary by technology and objective. At minimum, each prototype build includes the physical model, a dimensional inspection report against the CAD reference, and documented observations on fitment, surface quality, and functional performance. We recommend a defined test protocol for each prototype phase to ensure evaluation is systematic and results are actionable." },
                { q: "Can you produce photorealistic renders before a physical prototype exists?", a: "Yes. Our rendering team works directly from 3D CAD data to produce studio-quality photorealistic images and animation videos. These assets are used for investor presentations, marketing collateral, regulatory submissions, and e-commerce listings before any physical sample is produced. Render quality is indistinguishable from photography when viewed on standard display media." },
                { q: "How do you handle confidentiality and IP protection?", a: "All client engagements are covered by a Non-Disclosure Agreement prior to the commencement of any technical discussion. IP generated during the design programme is assigned to the client upon final payment, in accordance with the terms specified in the project agreement. Qmax Systems does not retain any licensing rights to client IP. We advise clients to file provisional patent applications prior to disclosing novel design features." },
                { q: "What is Design for Manufacture (DFM) and how does it affect my project?", a: "DFM is the engineering practice of designing products such that they can be manufactured efficiently, consistently, and at target cost. In industrial design, DFM considerations include minimum wall thickness for injection moulding, draft angles for tooling release, parting line placement, assembly sequence logic, and component standardisation. Qmax Systems applies DFM review throughout the design process, not as a final gate check." },
                { q: "Do you work with overseas manufacturers?", a: "Yes. Qmax Systems has established relationships with qualified contract manufacturers in Asia, Europe, and locally. We manage the supplier evaluation, tooling oversight, first article inspection, and production quality review processes on behalf of clients. We do not recommend manufacturers based on cost alone; supplier selection is based on verified capability, quality systems, and compliance with applicable standards." },
                { q: "Can you take a product from concept to market?", a: "Yes. Qmax Systems provides end-to-end product development services from initial concept through regulatory approval and volume production. Our service scope encompasses industrial design, mechanical engineering, electronics design, firmware development, testing, certification support, tooling management, and production launch. Clients may engage us for the full programme or for specific phases." },
                { q: "What is vacuum casting and when is it appropriate?", a: "Vacuum casting is a small-batch manufacturing process that uses polyurethane resins cast in silicone moulds derived from a master pattern. It produces parts with surface finish and mechanical properties closely approximating injection-moulded components, typically in batches of 10 to 50 units. Vacuum casting is appropriate for pre-production user trials, internal evaluation, trade show models, and bridge production ahead of tooling investment." },
                { q: "What compliance standards do your designs meet?", a: "Applicable standards depend on the product category and target markets. For electronics products, we routinely design to CE (EU), FCC (USA), IC (Canada), RCM (Australia/New Zealand), UKCA (UK), and CCC (China) requirements. For mechanical products, we apply ISO, ASTM, and EN standards relevant to the product type. Medical device programmes follow IEC 60601 and ISO 13485 frameworks. Compliance requirements are documented in the project brief and incorporated from the first design iteration." },
                { q: "How is the industrial design fee structured?", a: "Qmax Systems typically structures industrial design engagements on a milestone-based fixed fee, with defined deliverables and client review gates at each phase. For longer programmes with evolving scope, a hybrid model combining a fixed retainer and variable milestone fees may be appropriate. We provide a detailed quotation following the initial consultation, based on confirmed project scope and deliverables." },
                { q: "Can you redesign an existing product?", a: "Yes. Product redesign is a common engagement type. Typical drivers include cost reduction through material or manufacturing process changes, updated aesthetics to extend product lifecycle, regulatory compliance updates, feature additions, or ergonomic improvements. We begin redesign programmes with a structured audit of the existing product to establish what must be retained and what can be modified." },
                { q: "What happens after the industrial design is approved?", a: "Approved industrial designs proceed to detailed mechanical engineering, where the geometry is fully documented for manufacturing with tolerances, surface finish specifications, material callouts, and assembly instructions. If the project includes electronics, the mechanical and electronics design workstreams are coordinated to ensure physical integration. Qmax Systems manages the transition between design phases and maintains design intent through to production." },
                { q: "Do you offer UI/UX design for embedded systems and industrial HMIs?", a: "Yes. Our UX team designs human-machine interfaces for embedded displays, touchscreen panels, and industrial control systems. We apply IEC 62366 (usability engineering for medical devices) and ISO 9241 (ergonomics of human-system interaction) principles where applicable. Deliverables include user research reports, interaction flow diagrams, wireframes, high-fidelity UI specifications, and usability test reports." },
                { q: "How do you manage design changes during the project?", a: "Design changes are managed through a formal change control process. All change requests are documented, assessed for impact on schedule, cost, and downstream engineering, and approved by both the Qmax project lead and the client before implementation. This process prevents scope creep, maintains design version control, and ensures that all stakeholders are aligned before resources are committed to changes." },
                { q: "How do I get started with Qmax Systems?", a: "Contact us to schedule your complimentary 1-hour technical consultation. Bring whatever you have — a sketch, a brief, an existing product, or simply a problem statement. Our engineers will conduct a structured review, provide initial technical feedback, and outline a proposed approach and scope. There is no obligation and no cost for this session." }
              ].map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }),
          }}
        />
      </section>

      {/* Internal Resources Section */}
      {/* <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 mb-16 border-t border-zinc-200">
        <h3 className="text-xl font-bold text-zinc-900 mb-8 uppercase tracking-widest text-center">Internal Resources</h3>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            { name: "Mechanical & ID Services", href: "/mechanical-industrial-design-services" },
            { name: "Mechanical Design", href: "/mechanical-industrial-design-services/mechanical-design" },
            { name: "Portfolio / Work", href: "/work" },
            { name: "Consultation Booking", href: "/contact/consultation" },
            { name: "Contact Page", href: "/contact" }
          ].map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-zinc-900 pb-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section> */}
    </main>
  );
}
