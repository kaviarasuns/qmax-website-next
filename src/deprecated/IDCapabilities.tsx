export default function IDCapabilities() {
  return (
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
              desc: "Parametric models built for construction - with tolerancing, draft angles, and wall thickness constraints using CATIA, SolidWorks, and Fusion 360.",
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
              desc: "Physical validation through CNC, FDM, SLA, and SLS - testing ergonomics, fitment, and functionality before production investment.",
            },
          ].map((capability, idx) => (
            <div
              key={idx}
              className="group border-t border-zinc-200 dark:border-zinc-800 py-10 grid grid-cols-1 md:grid-cols-[100px_1fr_1.5fr] gap-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/70 transition-colors px-4"
            >
              <span className="text-xs font-black text-[#F33117] tracking-[0.4em] pt-2">
                {capability.id}
              </span>
              <h3 className="text-2xl md:text-4xl font-light  text-zinc-950 dark:text-zinc-100 group-hover:text-[#F33117] transition-colors">
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
  );
}
