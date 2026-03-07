import Image from "next/image";
import { Cpu, Activity, Shield, Zap, Target, Layers } from "lucide-react";

export default function AnalogAndMixedSignalPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-slate-100">
        <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:20px_20px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Analog and Mixed Signal <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                PCB Design Services
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm border border-blue-100 shadow-sm">
                <Target className="w-4 h-4" />
                Precision Analog Layout
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm border border-indigo-100 shadow-sm">
                <Activity className="w-4 h-4" />
                Low-Noise Electronics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 font-medium text-sm border border-violet-100 shadow-sm">
                <Layers className="w-4 h-4" />
                High-Resolution Measurement Hardware
              </span>
            </div>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              Modern electronic systems rarely operate purely in analog or purely digital domains. Most advanced embedded systems combine high-sensitivity analog signal chains with high-speed digital processing, creating complex mixed-signal PCB design challenges.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <Image
              src="/pcb-design/analog-and-mixed-signal.jpg"
              alt="Analog and Mixed Signal PCB Design Services"
              width={1200}
              height={800}
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Engineering Discipline Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 mb-8 shadow-sm">
                <Cpu className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6 leading-tight">
                A Precision Engineering Discipline
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  At Qmax Systems, analog and mixed signal PCB design is treated as a precision engineering discipline, where the PCB layout itself becomes a critical part of the electrical system.
                </p>
                <p>
                  Signal integrity, grounding topology, shielding, and power filtering directly influence system noise floor, measurement accuracy, and long-term reliability.
                </p>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-6 mt-8">
                  <p className="text-slate-800 font-medium">
                    All PCB designers at Qmax Systems are Electrical Engineers with extensive experience in analog hardware design and mixed-signal PCB layout.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Signal Integrity", desc: "Preserving delicate analog signals in noisy digital environments.", icon: Activity, color: "text-blue-600", bg: "bg-blue-50" },
                { title: "Grounding Topology", desc: "Strategic return paths to minimize ground bounce and coupling.", icon: Layers, color: "text-indigo-600", bg: "bg-indigo-50" },
                { title: "Shielding", desc: "Protecting sensitive nodes from EMI and RF interference.", icon: Shield, color: "text-violet-600", bg: "bg-violet-50" },
                { title: "Power Filtering", desc: "Clean, stable power distribution for high-resolution measurement.", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 justify-center items-start rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Methodology */}
      <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Operating Reliably in <br /> Electrically Noisy Environments
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Our engineers design analog and mixed-signal PCBs for scientific instruments, industrial sensing platforms, medical electronics, and measurement systems where microvolt-level signals must operate reliably in electrically noisy environments.
              </p>

              <div className="space-y-4">
                {[
                  "Scientific Instruments",
                  "Industrial Sensing Platforms",
                  "Medical Electronics",
                  "High-Resolution Measurement Systems"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                    <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-10 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target className="w-48 h-48 text-white" />
              </div>

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 mb-8 border border-blue-500/20">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">
                First-Time-Right Methodology
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We follow a First-Time-Right engineering methodology supported by experienced PCB designers, rigorous design reviews, and production-ready validation processes.
              </p>

              <ul className="space-y-4">
                {[
                  "Experienced PCB Designers",
                  "Rigorous Design Reviews",
                  "Production-Ready Validation"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <Target className="w-6 h-6 text-blue-400 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
