"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const THEME_STORAGE_KEY = "industrial-design-page-theme";

export default function IndustrialDesignServicesPageClient() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      window.localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <main className="relative bg-[#fcfcfc] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          className="fixed right-4 top-24 z-50 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-700 dark:text-zinc-200 backdrop-blur-sm shadow-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          {isDark ? "Light" : "Dark"}
        </button>

        {/* Dynamic Hero Section */}
        <section className="relative overflow-hidden pt-14 pb-12 lg:pt-20 lg:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(243,49,23,0.02),transparent_40%)]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Full-width Image Container */}
            <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden transition-[filter] duration-1000 border border-zinc-200 dark:border-zinc-800 group">
              <Image
                src="/services/13_industrial_design_service_new.jpg"
                alt="Industrial Design Services - Qmax Systems"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              {/* Subtle overlay for text readability if needed, but keeping the requested clear look */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc]/60 dark:from-zinc-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-5xl">
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#F33117] mb-6">
                  INDUSTRIAL DESIGN PRACTICE
                </span>
                <h1 className="text-4xl font-light leading-[1.1] text-zinc-950 dark:text-zinc-100 md:text-6xl lg:text-7xl tracking-tight">
                  Industrial Design <br className="hidden md:block" />
                  Services.
                </h1>
              </div>
            </div>

            {/* Core Introduction Content */}
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 border-t border-zinc-200 dark:border-zinc-800 pt-16">
              <div>
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500">
                  / Introduction
                </h2>
              </div>
              <div className="space-y-12 text-xl leading-[1.6] text-zinc-600 dark:text-zinc-300 font-light max-w-3xl">
                <p className="text-zinc-950 dark:text-zinc-100 font-normal text-2xl md:text-3xl">
                  Industrial design at Qmax Systems integrates visual, ergonomic, and manufacturing reality from the first sketch — ensuring every decision is grounded in engineering truth.
                </p>
                <div className="space-y-8">
                  <p>
                    We help entrepreneurs, startups, and Fortune 500 companies create products that users value and manufacturers can build efficiently. With over 25 years of experience, our multidisciplinary team — industrial designers, mechanical engineers, and electronics experts — delivers market-ready solutions.
                  </p>
                  <p>
                    Our designs are not conceptual exercises. Form, material selection, and interface elements are evaluated against production constraints, cost targets, and global compliance before a single prototype is built.
                  </p>
                </div>
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
                }
              ].map((capability, idx) => (
                <div key={idx} className="group border-t border-zinc-200 dark:border-zinc-800 py-10 grid grid-cols-1 md:grid-cols-[100px_1fr_1.5fr] gap-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/70 transition-colors px-4">
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
                A structured four-phase engine moving from narrative to production-ready documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-200 dark:border-zinc-800">
              {[
                { id: "01", label: "DISCOVERY", title: "Uncover Opportunities", desc: "Behavioural research and technical constraint analysis relevant to the product category." },
                { id: "02", label: "DEFINITION", title: "Informed Ideation", desc: "Structured creativity to produce a range of viable, engineering-led design directions." },
                { id: "03", label: "REFINEMENT", title: "Get Real, Fast", desc: "Detailed form development and high-fidelity prototypes for real-world evaluation." },
                { id: "04", label: "DELIVERY", title: "Ready to Ship", desc: "Finalised documentation package and factory-floor liaison for consistent outcomes." }
              ].map((step, idx) => (
                <div key={idx} className="p-12 border-r border-b border-zinc-200 dark:border-zinc-800 flex flex-col min-h-[400px] group hover:bg-zinc-50 dark:hover:bg-zinc-900/70 transition-colors">
                  <div className="flex justify-between items-center mb-16">
                    <span className="text-[10px] font-black tracking-[0.4em] text-[#F33117] group-hover:translate-x-1 transition-transform">{step.label}</span>
                    <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs">{step.id}</span>
                  </div>
                  <h3 className="text-3xl font-light text-zinc-950 dark:text-zinc-100 mb-8 group-hover:underline decoration-[#F33117] underline-offset-8 transition-all">{step.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mt-auto">{step.desc}</p>
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
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 mb-8 block">/ PARTNERSHIP</span>
                <h2 className="text-4xl font-light text-zinc-950 dark:text-zinc-100 md:text-6xl tracking-tighter mb-12">
                  Why Qmax <br className="hidden lg:block" /> Systems.
                </h2>
                <div className="h-1 w-24 bg-[#F33117]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                {[
                  { title: "Multidisciplinary", desc: "Integrated teams of industrial designers, mechanical engineers, and electronics experts." },
                  { title: "Direct Access", desc: "Rapid validation through in-house prototype oversight and vetted manufacturing networks." },
                  { title: "Compliance First", desc: "Global framework expertise (CE, UL, FCC) built into the initial design iteration." },
                  { title: "Proven Process", desc: "Repeatable results for startups and Fortune 500s across three decades of operation." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-6">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#F33117] border-b border-zinc-200 dark:border-zinc-800 pb-4">
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

        {/* Our Work Section */}
        <section className="bg-[#fcfcfc] dark:bg-zinc-950 py-32 border-t border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-24">
              <h2 className="text-4xl font-light text-zinc-500 dark:text-zinc-400 md:text-6xl tracking-tighter">
                Case Studies.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Handheld Industrial Controller", category: "Industrial Automation", img: "/industrial_design_case_studies/product_1.png" },
                { title: "Medical Diagnostic System", category: "Medical Design", img: "/industrial_design_case_studies/product_2.png" },
                { title: "Security Hub Enclosure", category: "Security Systems", img: "/industrial_design_case_studies/product_3.png" },
                { title: "Military Communication Unit", category: "Ruggedized Systems", img: "/industrial_design_case_studies/product_4.png" },
              ].map((work, idx) => (
                <div key={idx} className="group relative aspect-[3/4] overflow-hidden transition-all duration-700 bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#fcfcfc] dark:from-zinc-950 via-[#fcfcfc]/80 dark:via-zinc-950/85 to-transparent h-1/2">
                    <span className="text-[10px] font-black tracking-[0.4em] text-[#F33117] mb-4 overflow-hidden text-ellipsis whitespace-nowrap">{work.category}</span>
                    <h3 className="text-lg font-light text-zinc-950 dark:text-zinc-100 leading-tight">{work.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#fcfcfc] dark:bg-zinc-950 py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-light text-zinc-400 dark:text-zinc-500 md:text-5xl tracking-tighter">
                Frequently asked questions.
              </h2>
            </div>

            <div className="grid gap-0 max-w-full">
              {[
                { q: "What is industrial design, and how is it different from mechanical design?", a: "Industrial design (ID) focuses on the form, aesthetics, ergonomics, user experience, and material selection of a product. Mechanical design focuses on structural integrity, functional mechanisms, tolerances, and engineering analysis. At Qmax Systems, both disciplines operate in parallel from the outset of a project, ensuring that form and function are developed as an integrated system rather than as separate workstreams." },
                { q: "At what stage should I engage an industrial design team?", a: "The earlier, the better. Engaging industrial design from the concept phase allows design decisions to directly influence engineering architecture, Bill of Materials cost, and manufacturing approach. Retrofitting industrial design onto a completed mechanical design is expensive and often results in compromised outcomes. Qmax Systems recommends initiating ID engagement prior to CAD modelling." },
                { q: "Can Qmax Systems handle both industrial design and mechanical engineering on the same project?", a: "Yes. Qmax Systems operates as a multidisciplinary product development organisation. Our in-house team includes industrial designers, mechanical engineers, and electronics engineers. Integrated project delivery eliminates the coordination overhead and technical translation errors that arise when these disciplines are managed separately." },
                { q: "Which industries does Qmax Systems work with?", a: "Qmax Systems has delivered industrial design and product development programmes across consumer electronics, industrial equipment, medical devices, defence systems, renewable energy, automotive accessories, and retail products. Our process is industry-agnostic; we adapt to the specific compliance requirements, user environments, and manufacturing constraints of each sector." },
                { q: "How does Qmax Systems's approach to design evolving in the era of AI and emerging technology?", a: "We leverage advanced AI-driven generative design tools to explore complex geometries and optimise material usage. Our team integrates emerging technologies—such as IoT sensors and AR interfaces—directly into the physical form, ensuring that innovation enhances usability rather than complicating it." },
                { q: "What makes Qmax Systems different from other design consultancies?", a: "Our distinction lies in our engineering-first mindset. Unlike traditional design studios that focus solely on aesthetics, we treat industrial design as a technical discipline. Every curve, material choice, and interface detail is validated against manufacturing realities, regulatory standards, and cost targets from day one." }
              ].map((faq, index) => (
                <details key={index} className="group border-t border-zinc-200 dark:border-zinc-800 py-6 transition-all">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-light leading-relaxed text-zinc-900 dark:text-zinc-100 md:text-2xl tracking-tight">
                    <span className="flex-1">{faq.q}</span>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F33117"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-open:rotate-180"
                      >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="mt-4 max-w-4xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 font-light">
                    {faq.a}
                  </div>
                </details>
              ))}

              {/* Promotional Bar */}
              <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
                <a
                  href="/contact"
                  className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#F33117] p-6 md:p-10 group hover:bg-zinc-950 dark:hover:bg-zinc-800 transition-colors duration-500"
                >
                  <span className="text-2xl md:text-4xl lg:text-5xl font-light text-white group-hover:text-white tracking-tighter leading-tight max-w-2xl">
                    Connect with us for a <br />technical consultation.
                  </span>
                  <div className="mt-8 md:mt-0 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/20 group-hover:border-white/50 group-hover:scale-110 transition-all duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-500 group-hover:translate-x-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

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
                  { q: "Which industries does Qmax Systems work with?", a: "Qmax Systems has delivered industrial design and product development programmes across consumer electronics, industrial equipment, medical devices, defence systems, renewable energy, automotive accessories, and retail products. Our process is industry-agnostic; we adapt to the specific compliance requirements, user environments, and manufacturing constraints of each sector." },
                  { q: "How does Qmax Systems's approach to design evolving in the era of AI and emerging technology?", a: "We leverage advanced AI-driven generative design tools to explore complex geometries and optimise material usage. Our team integrates emerging technologies—such as IoT sensors and AR interfaces—directly into the physical form, ensuring that innovation enhances usability rather than complicating it." },
                  { q: "What makes Qmax Systems different from other design consultancies?", a: "Our distinction lies in our engineering-first mindset. Unlike traditional design studios that focus solely on aesthetics, we treat industrial design as a technical discipline. Every curve, material choice, and interface detail is validated against manufacturing realities, regulatory standards, and cost targets from day one." }
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
      </main>
    </div>
  );
}
