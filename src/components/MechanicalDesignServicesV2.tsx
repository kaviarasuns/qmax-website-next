import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Mechanical Design Services | Qmax",
    description: "End-to-end precision mechanical engineering for electronics products.",
};

export default function MechanicalDesignServicesPageV2() {
    return (
        <main className="relative min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-emerald-500/30 overflow-hidden pt-24 pb-20 font-sans">

            {/* Precision Blueprint Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #3f3f46 1px, transparent 1px),
            linear-gradient(to bottom, #3f3f46 1px, transparent 1px)
          `,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black, transparent)'
                }}
            />

            {/* Full-Width Hero Billboard */}
            <div className="relative w-full h-[60vh] md:h-[75vh] group overflow-hidden border-b border-zinc-800 -mt-24 mb-16 shadow-2xl">
                <Image
                    src="/services/12_mechanical_design_services.jpg"
                    alt="Mechanical Engineering and Design"
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform [transition-duration:3000ms] ease-out filter grayscale group-hover:grayscale-0 opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay z-10 opacity-40 group-hover:opacity-0 transition-opacity duration-1000" />

                {/* Floating Technical Overlay */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-20 pointer-events-none flex justify-between items-end">
                    <div className="space-y-4">
                        <div className="w-16 h-px bg-emerald-500 animate-pulse" />
                        <div className="font-mono text-[10px] text-emerald-500 tracking-[0.4em] uppercase">Mechanical Engineering / Primary Node</div>
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest bg-black/60 px-4 py-2 backdrop-blur-md border border-zinc-800">
                        FIG. 01 — Structural Analysis Perspective
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">


                {/* Top Label */}
                <div className="w-full flex justify-between items-center border-b border-zinc-800 pb-4 mb-16 tracking-widest uppercase text-xs font-mono text-zinc-500">
                    <span>Qmax Systems</span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Industrial & Mechanical
                    </span>
                </div>

                {/* Hero Title */}
                <div className="w-full max-w-5xl mb-24 relative">
                    <div className="hidden md:block absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white uppercase leading-[0.9] mb-8">
                        Precision <br className="hidden md:block" />
                        <span className="text-zinc-500 italic font-serif lowercase">mechanical</span> <br className="hidden md:block" />
                        Engineering
                    </h1>
                    <p className="max-w-2xl text-xl md:text-2xl text-zinc-400 font-light leading-relaxed border-l border-zinc-700 pl-6 ml-2">
                        For electronics products.
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">

                    {/* Text Content Column */}
                    <div className="lg:col-span-8 space-y-12">

                        <div className="space-y-6 text-xl text-zinc-300 font-light leading-relaxed">
                            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-emerald-500">
                                At Qmax Systems, mechanical design is an integral part of the product development process, executed by senior mechanical engineers with deep domain knowledge across defence, automotive, medical, and industrial electronics.
                            </p>

                            <div className="pl-6 border-l-2 border-emerald-900/50 space-y-8 py-2">
                                <p>
                                    Every enclosure, structural assembly, and mechanical sub-system we design is conceived with <span className="text-white">full awareness of the electronics inside it</span> — thermal loads, EMI shielding requirements, PCB mounting constraints, connector accessibility, and compliance obligations.
                                </p>
                                <p>
                                    We maintain active working relationships with sheet metal fabricators, CNC machining houses, and plastic injection moulding companies globally. Prototype or volume production — we select the right manufacturing partner based on material, tolerance, finish, and cost.
                                </p>
                            </div>

                            <p className="text-lg text-zinc-400">
                                All test facilities required — IP ingress testing, vibration and shock testing to MIL-STD-810, and radiated emission testing — are available within a <span className="text-emerald-400 font-medium">30 km radius</span> of our facility.
                            </p>
                        </div>

                        {/* Accent Card / Callout */}
                        <div className="relative p-1 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-lg group">
                            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                            <div className="relative bg-[#0a0a0a] p-8 rounded-md border border-zinc-800">
                                <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-emerald-500">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M3 9h3v6H3zM18 9h3v6h-3zM5.5 3h13M5.5 21h13" /></svg>
                                    <span>GD&T Standards Rigour</span>
                                </div>
                                <p className="text-zinc-200 font-medium leading-relaxed">
                                    All mechanical design work is fully documented with clear, unambiguous GD&T on every drawing, ensuring any qualified vendor can manufacture to specification without interpretation.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Highlights Column */}
                    <div className="lg:col-span-4 space-y-8 flex flex-col justify-start">
                        {/* Technical Metrics Header */}
                        <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            Technical Benchmarks
                        </h3>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            <div className="p-8 border border-zinc-800 bg-zinc-900/30 flex flex-col gap-3 group hover:border-emerald-500/30 transition-colors">
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Tolerance Capability</span>
                                <span className="text-3xl text-zinc-200 font-light tracking-tighter">±0.01<span className="text-zinc-500 text-sm ml-1">mm</span></span>
                                <p className="text-xs text-zinc-500 leading-relaxed font-light">High-precision solid modeling for tight-tolerance assemblies.</p>
                            </div>
                            <div className="p-8 border border-zinc-800 bg-zinc-900/30 flex flex-col gap-3 group hover:border-emerald-500/30 transition-colors">
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Deployment Standard</span>
                                <span className="text-3xl text-zinc-200 font-light tracking-tighter uppercase">MIL-STD</span>
                                <p className="text-xs text-zinc-500 leading-relaxed font-light">810 Qualified designs for vibration, shock, and thermal extremes.</p>
                            </div>
                        </div>

                        {/* Decorative Schematics Card */}
                        <div className="flex-1 border border-dashed border-zinc-800 p-8 flex flex-col justify-center items-center text-center opacity-50 space-y-4">
                            <div className="w-16 h-16 border-2 border-zinc-800 rounded-full flex items-center justify-center">
                                <div className="w-8 h-px bg-zinc-800 rotate-45" />
                            </div>
                            <div className="font-mono text-[9px] uppercase tracking-widest leading-loose text-zinc-600">
                                Assembly Drawing Set // ISO 286 <br />
                                Ref: MECH_PRJ_COORD_NODE
                            </div>
                        </div>
                    </div>
                </div>
                {/* Plastic Enclosure Design Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                            <span className="text-zinc-500 italic font-serif">Plastic</span> <br className="hidden md:block" /> Enclosure Design
                        </h2>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 border border-zinc-800">
                            Spec Sheet // 02
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

                        {/* Left Column - Core Text & Considerations */}
                        <div className="lg:col-span-7 space-y-10">
                            <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                Plastic enclosures represent the most common housing choice for <span className="text-white font-medium">consumer electronics</span>, industrial handheld devices, and cost-sensitive IoT products. Qmax Systems designs injection-moulded plastic enclosures that balance structural integrity, thermal performance, EMI management, and tooling cost — with a clear path from concept to mass production.
                            </p>

                            <div>
                                <h3 className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-emerald-500 mb-6">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
                                    Design Considerations Addressed
                                </h3>
                                <p className="text-zinc-400 leading-relaxed font-light">
                                    Our enclosure design process covers draft angles, parting line placement, wall thickness uniformity, rib and boss geometry, snap-fit and living hinge design, insert moulding for threaded interfaces, and EMI gasket seating. For RF-transparent products (Wi-Fi, 4G, GPS), we analyse dielectric properties and wall thickness effects on signal attenuation. Surface finish options — texture, gloss, painting, soft-touch coating, pad printing, in-mould labelling — are specified during the design phase.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Materials Spec List */}
                        <div className="lg:col-span-5 bg-[#0e0e0e] border border-zinc-800 rounded-lg p-8 relative overflow-hidden group">
                            {/* Decorative background grid in the card */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)', backgroundSize: '1rem 1rem' }} />

                            <h3 className="relative font-mono text-xs uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-4 mb-6">
                                Materials We Work With
                            </h3>

                            <ul className="relative space-y-3 font-mono text-sm">
                                <li className="flex items-start gap-4 p-4 border border-zinc-800/50 hover:border-emerald-500/30 hover:bg-emerald-900/10 transition-colors rounded-sm">
                                    <span className="text-emerald-500 mt-0.5">01</span>
                                    <span className="text-zinc-300 leading-relaxed">Polycarbonate (PC), ABS, PC-ABS blends</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 border border-zinc-800/50 hover:border-emerald-500/30 hover:bg-emerald-900/10 transition-colors rounded-sm">
                                    <span className="text-emerald-500 mt-0.5">02</span>
                                    <span className="text-zinc-300 leading-relaxed">Nylon (PA6 / PA66) & glass-filled engineering variants</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 border border-zinc-800/50 hover:border-emerald-500/30 hover:bg-emerald-900/10 transition-colors rounded-sm">
                                    <span className="text-emerald-500 mt-0.5">03</span>
                                    <span className="text-zinc-300 leading-relaxed">Teflon (PTFE) for specialised chemical or dielectric applications</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 border border-zinc-800/50 hover:border-emerald-500/30 hover:bg-emerald-900/10 transition-colors rounded-sm">
                                    <span className="text-emerald-500 mt-0.5">04</span>
                                    <span className="text-zinc-300 leading-relaxed">UV-stabilised grades, flame-retardant UL94-V0 compliant materials</span>
                                </li>
                            </ul>
                        </div>

                    </div>


                    {/* Portfolio Section */}


                    <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight uppercase">
                                Selected <span className="text-zinc-500 italic font-serif lowercase">Portfolio</span>
                            </h2>
                            <div className="font-mono text-xs text-emerald-500 uppercase tracking-widest bg-emerald-950/30 px-3 py-1 border border-emerald-900/50 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                Live Deployments
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Portfolio Item 1 */}
                            <div className="group relative bg-[#0e0e0e] border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors duration-500">
                                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">ID: PRJ-WIFI-01</div>
                                <h3 className="text-xl text-white font-medium mb-4 pr-12">Wi-Fi Security Device Enclosure</h3>
                                <ul className="space-y-3 font-light text-zinc-400">
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1 text-[10px] opacity-70">{"///"}</span>
                                        <span>Low tooling cost</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1 text-[10px] opacity-70">{"///"}</span>
                                        <span>Integrated EMI suppression geometry</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1 text-[10px] opacity-70">{"///"}</span>
                                        <span>Antenna keep-out zones for maximum Wi-Fi throughput</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Portfolio Item 2 */}
                            <div className="group relative bg-[#0e0e0e] border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors duration-500">
                                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">ID: PRJ-OBD2-02</div>
                                <h3 className="text-xl text-white font-medium mb-2 pr-12">Handheld OBD2 Diagnostic</h3>
                                <p className="text-xs font-mono text-emerald-500 mb-6 tracking-widest uppercase">4G | Wi-Fi | LCD | Battery</p>
                                <ul className="space-y-3 font-light text-zinc-400">
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1 text-[10px] opacity-70">{"///"}</span>
                                        <span>Designed for harsh workshop environments</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1 text-[10px] opacity-70">{"///"}</span>
                                        <span>Robust drop resistance & ergonomic grip geometry</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1 text-[10px] opacity-70">{"///"}</span>
                                        <span>Complex internal RF coordination</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Metal Enclosures Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
                            <span className="text-zinc-500 italic font-serif">Metal</span> <br className="hidden md:block" /> Enclosures
                        </h2>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 border border-zinc-800">
                            Spec Sheet // 03
                        </div>
                    </div>

                    <div className="space-y-12">
                        <p className="max-w-4xl text-xl text-zinc-300 font-light leading-relaxed">
                            Metal enclosures are the correct engineering choice when the application demands <span className="text-white font-medium">superior EMI shielding</span>, higher structural rigidity, thermal conductance, or a longer service life under mechanical or environmental stress. Qmax designs and sources all three principal metal enclosure types.
                        </p>

                        {/* Technical Table */}
                        <div className="overflow-x-auto border border-zinc-800 rounded-lg">
                            <table className="w-full text-left border-collapse font-sans">
                                <thead>
                                    <tr className="bg-zinc-900/50 border-b border-zinc-800">
                                        <th className="p-6 font-mono text-xs uppercase tracking-widest text-emerald-500">Type</th>
                                        <th className="p-6 font-mono text-xs uppercase tracking-widest text-emerald-500">Typical Application</th>
                                        <th className="p-6 font-mono text-xs uppercase tracking-widest text-emerald-500">Key Advantage</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800 text-sm md:text-base">
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-medium underline decoration-emerald-500/20 underline-offset-8">CNC Machined Aluminium</td>
                                        <td className="p-6 text-zinc-400 font-light">RF modules, high-precision chassis, defence sub-systems</td>
                                        <td className="p-6 text-zinc-300">Tight tolerances, complex geometry, excellent EMI shielding</td>
                                    </tr>
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-medium underline decoration-emerald-500/20 underline-offset-8">Sheet Metal (SPCC, SS, Al)</td>
                                        <td className="p-6 text-zinc-400 font-light">Industrial electronics, rack-mount chassis, control panels</td>
                                        <td className="p-6 text-zinc-300">Cost-effective for mid-volume, good structural-to-weight ratio</td>
                                    </tr>
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-medium underline decoration-emerald-500/20 underline-offset-8">Aluminium Extrusion</td>
                                        <td className="p-6 text-zinc-400 font-light">Heat-dissipating enclosures, DIN rail housings</td>
                                        <td className="p-6 text-zinc-300">Integral heat sink geometry, excellent thermal path, low per-unit cost</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Materials and Surface Treatments Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
                            <span className="text-zinc-500 italic font-serif lowercase">Materials &</span> <br className="hidden md:block" /> Surface Treatments
                        </h2>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 border border-zinc-800">
                            Spec Sheet // 04
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                        {/* Core Alloys */}
                        <div className="space-y-6">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-500 border-l border-emerald-500 pl-4">Core Alloys</h3>
                            <ul className="text-zinc-300 font-light leading-relaxed space-y-2">
                                <li>Aluminium Alloy 6061-T6, 5052</li>
                                <li>Stainless Steel 304 / 316</li>
                                <li>SPCC mild steel</li>
                            </ul>
                        </div>

                        {/* Principal Treatments */}
                        <div className="space-y-6">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-500 border-l border-emerald-500 pl-4">Principal Treatments</h3>
                            <ul className="text-zinc-300 font-light leading-relaxed space-y-2">
                                <li>Anodising Type II / Type III</li>
                                <li>Chromate conversion</li>
                                <li>Powder coating</li>
                            </ul>
                        </div>

                        {/* Specialized Finishing */}
                        <div className="space-y-6">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-500 border-l border-emerald-500 pl-4">Specialized Finishing</h3>
                            <ul className="text-zinc-300 font-light leading-relaxed space-y-2">
                                <li>Gold plating</li>
                                <li>Electroless nickel</li>
                                <li>Hard chrome for wear-critical interfaces</li>
                            </ul>
                        </div>

                    </div>

                    <div className="max-w-3xl p-6 bg-zinc-900/30 border border-zinc-800 rounded-sm italic text-zinc-400 font-light leading-relaxed flex gap-4 items-start">
                        <div className="text-emerald-500 mt-1 shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                        </div>
                        <p>
                            Surface treatment selection is driven by corrosion environment, contact resistance requirements, cosmetic specification, and applicable <span className="text-white not-italic font-medium underline decoration-emerald-500/30 underline-offset-4">MIL-SPEC surface treatment standards</span>.
                        </p>
                    </div>

                </div>

                {/* Military Rugged Enclosures Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight uppercase">
                            <span className="text-zinc-500 italic font-serif lowercase">03 //</span> <br className="hidden md:block" /> Military Rugged Enclosures
                        </h2>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 border border-zinc-800">
                            Spec Sheet // 05
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                            <div className="lg:col-span-12 space-y-8">
                                <h3 className="text-2xl text-white font-medium">Rugged Metal Enclosures for Military Applications — MIL-STD-810 / JSS 55555</h3>
                                <p className="max-w-5xl text-xl text-zinc-300 font-light leading-relaxed">
                                    Military and defence electronics operate in environments placing extreme demands on mechanical structures: wide temperature cycling, humidity, fungus exposure, sand and dust ingress, shock from weapons fire, vibration from vehicles and helicopters, and altitude. Mechanical designs for these environments must be validated against formal test standards before fielding.
                                </p>
                                <div className="p-6 bg-emerald-950/10 border border-emerald-900/30 rounded-sm">
                                    <p className="text-zinc-300 leading-relaxed font-light">
                                        Qmax Systems designs rugged enclosures to <span className="text-white font-medium underline decoration-emerald-500/20 underline-offset-4">MIL-STD-810H</span> and <span className="text-white font-medium underline decoration-emerald-500/20 underline-offset-4">JSS 55555</span>, with full documentation supporting test qualification. Structural analysis is performed before hardware is built, reducing prototype-test cycles.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Design Approach List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 border border-zinc-800 bg-zinc-900/40 font-mono text-sm space-y-4">
                                <div className="text-emerald-500 uppercase tracking-widest text-[10px]">Approach // 01</div>
                                <p className="text-zinc-200">Aluminium alloy castings and extruded / machined Al chassis</p>
                            </div>
                            <div className="p-6 border border-zinc-800 bg-zinc-900/40 font-mono text-sm space-y-4">
                                <div className="text-emerald-500 uppercase tracking-widest text-[10px]">Approach // 02</div>
                                <p className="text-zinc-200">Conformal sealed interfaces; EMI gasket seating (finger stock, wire mesh)</p>
                            </div>
                            <div className="p-6 border border-zinc-800 bg-zinc-900/40 font-mono text-sm space-y-4">
                                <div className="text-emerald-500 uppercase tracking-widest text-[10px]">Approach // 03</div>
                                <p className="text-zinc-200">Captive fastener systems; shock and vibration isolation mounts</p>
                            </div>
                            <div className="p-6 border border-zinc-800 bg-zinc-900/40 font-mono text-sm space-y-4">
                                <div className="text-emerald-500 uppercase tracking-widest text-[10px]">Approach // 04</div>
                                <p className="text-zinc-200">Thermal management integration; MIL-connector cutouts to specification</p>
                            </div>
                        </div>
                    </div>

                    {/* Military Portfolio Contextual */}
                    <div className="mt-16">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2 border-t border-zinc-800/50 pt-8">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            Rugged Case Study
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group relative bg-[#0e0e0e] border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors duration-500">
                                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">ID: PRJ-MIL-03</div>
                                <h3 className="text-xl text-white font-medium mb-4 pr-12 text-zinc-200">Manpack Communication Equipment</h3>
                                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                                    Ultra-lightweight Al-alloy manpack for defence application. MIL-STD-810 qualified for vibration, shock, temperature, and humidity.
                                </p>
                                <ul className="space-y-3 text-sm font-light text-zinc-400 border-l border-emerald-900/50 pl-4 font-mono uppercase tracking-tight text-[11px]">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500/70">+</span>
                                        <span>Weight optimisation primary constraint</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500/70">+</span>
                                        <span>Full RF shielding & field-maintainability</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500/70">+</span>
                                        <span>RF & Power Electronics Team collaboration</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* IP-Rated Enclosures Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight uppercase">
                            <span className="text-zinc-500 italic font-serif lowercase">04 //</span> <br className="hidden md:block" /> IP-Rated Enclosures
                        </h2>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 border border-zinc-800">
                            Spec Sheet // 06
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                            <div className="lg:col-span-8 space-y-8">
                                <h3 className="text-2xl text-white font-medium">IP-Rated Enclosures — IP65 / IP67 / IP68</h3>
                                <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                    Ingress protection ratings under <span className="text-white font-medium">IEC 60529</span> govern resistance to solid particulates (first digit) and liquid ingress (second digit). IP65 provides dust-tight protection with resistance to water jets. IP67 permits temporary immersion to 1 metre for 30 minutes. IP68 is specified for continuous immersion, with exact conditions agreed between manufacturer and customer.
                                </p>
                                <div className="p-6 bg-emerald-950/10 border border-emerald-900/30 rounded-sm">
                                    <p className="text-zinc-300 leading-relaxed font-light">
                                        Achieving a given IP rating is a mechanical engineering problem. It requires correct selection and compression of sealing elements, proper surface flatness and roughness at sealing interfaces, appropriate fastener torque specifications, cable entry gland selection, and connector IP rating matching.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* IP Rating Table */}
                        <div className="overflow-x-auto border border-zinc-800 rounded-lg bg-zinc-900/20">
                            <table className="w-full text-left border-collapse font-sans">
                                <thead>
                                    <tr className="bg-zinc-900/50 border-b border-zinc-800">
                                        <th className="p-6 font-mono text-xs uppercase tracking-widest text-emerald-500">IP Rating</th>
                                        <th className="p-6 font-mono text-xs uppercase tracking-widest text-emerald-500">Solid Protection</th>
                                        <th className="p-6 font-mono text-xs uppercase tracking-widest text-emerald-500">Liquid Protection</th>
                                        <th className="p-6 font-mono text-xs uppercase tracking-widest text-emerald-500">Typical Application</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800 text-sm md:text-base">
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-mono font-medium">IP65</td>
                                        <td className="p-6 text-zinc-400 font-light">Dust-tight</td>
                                        <td className="p-6 text-zinc-300">Water jets from any direction</td>
                                        <td className="p-6 text-zinc-400 font-light">Outdoor industrial, field instruments</td>
                                    </tr>
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-mono font-medium">IP67</td>
                                        <td className="p-6 text-zinc-400 font-light">Dust-tight</td>
                                        <td className="p-6 text-zinc-300">Immersion 1 m / 30 min</td>
                                        <td className="p-6 text-zinc-400 font-light">Handheld devices, marine equipment</td>
                                    </tr>
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-mono font-medium">IP68</td>
                                        <td className="p-6 text-zinc-400 font-light">Dust-tight</td>
                                        <td className="p-6 text-zinc-300">Continuous immersion (specified depth)</td>
                                        <td className="p-6 text-zinc-400 font-light">Subsea, underwater sensors</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Seal Design Sub-section */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#0e0e0e] border border-zinc-800 p-8 rounded-sm">
                            <div className="md:col-span-4">
                                <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-500 mb-4">Seal Design & Validation</h4>
                                <div className="w-12 h-1 bg-emerald-500/30 mb-6" />
                            </div>
                            <div className="md:col-span-8 space-y-6 text-zinc-300 font-light leading-relaxed">
                                <p>
                                    We specify O-ring cross-section, durometer, and groove geometry per standard engineering practice. Gasket materials — <span className="text-white">silicone, EPDM, Viton</span> — are selected based on temperature range, chemical exposure, and compression set requirements.
                                </p>
                                <p className="text-sm font-mono text-zinc-500 border-l border-zinc-800 pl-4 uppercase">
                                    All IP-rated designs are validated at the nearest accredited test facility before production release.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* IP-Rated Enclosures Portfolio */}
                    <div className="mt-16">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2 border-t border-zinc-800/50 pt-8">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            IP-Rated Case Study
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Satellite Antenna Stabiliser */}
                            <div className="group relative bg-[#0e0e0e] border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors duration-500">
                                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">ID: PRJ-MAR-04</div>
                                <h3 className="text-xl text-white font-medium mb-4 pr-12 text-zinc-200">Satellite Antenna Stabiliser</h3>
                                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                                    Shipborne system maintaining antenna pointing towards a geostationary satellite while the vessel moves, rolls, and turns.
                                </p>
                                <ul className="space-y-3 text-sm font-light text-zinc-400 border-l border-emerald-900/50 pl-4 font-mono uppercase tracking-tight text-[11px]">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500/70">+</span>
                                        <span>Salt-laden marine environment housing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500/70">+</span>
                                        <span>Corrosion-resistant materials</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500/70">+</span>
                                        <span>Sealed cable penetrations and IP chassis</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Full Mechanical Systems Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight uppercase">
                            <span className="text-zinc-500 italic font-serif lowercase">05 //</span> <br className="hidden md:block" /> Full Mechanical Systems
                        </h2>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 border border-zinc-800">
                            Spec Sheet // 07
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                            <div className="lg:col-span-8 space-y-8">
                                <h3 className="text-2xl text-white font-medium">Full Mechanical Systems Design</h3>
                                <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                    Beyond enclosures, Qmax Systems undertakes complete mechanical system design for products that include <span className="text-white font-medium">moving parts, mechanisms, electromechanical actuation</span>, or complex multi-body assemblies. Our capability spans kinematic design and mechanism analysis through detailed part design, assembly drawing sets, and BOM for procurement.
                                </p>
                            </div>
                        </div>

                        {/* Capabilities List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 border border-zinc-800 bg-zinc-900/40 font-mono text-sm space-y-4 group">
                                <div className="text-emerald-500 font-mono uppercase tracking-widest text-[10px] mb-2">Capability // 01</div>
                                <h4 className="text-white font-medium transition-colors group-hover:text-emerald-400">Mechanism Design & Kinematics</h4>
                                <p className="text-zinc-400 font-light text-xs leading-relaxed">Linkage geometry, cam and follower, pivot and hinge design, actuation force analysis, and travel limits.</p>
                            </div>
                            <div className="p-6 border border-zinc-800 bg-zinc-900/40 font-mono text-sm space-y-4 group">
                                <div className="text-emerald-500 font-mono uppercase tracking-widest text-[10px] mb-2">Capability // 02</div>
                                <h4 className="text-white font-medium transition-colors group-hover:text-emerald-400">Electromechanical Integration</h4>
                                <p className="text-zinc-400 font-light text-xs leading-relaxed">Motor and actuator mounting, encoder alignment, and precision harness routing within mechanical sub-systems.</p>
                            </div>
                            <div className="p-6 border border-zinc-800 bg-zinc-900/40 font-mono text-sm space-y-4 group">
                                <div className="text-emerald-500 font-mono uppercase tracking-widest text-[10px] mb-2">Capability // 03</div>
                                <h4 className="text-white font-medium transition-colors group-hover:text-emerald-400">Optical and Sensor Systems</h4>
                                <p className="text-zinc-400 font-light text-xs leading-relaxed">Mechanical design of high-precision optical assemblies and rigid mounting structures for sensitive sensor payloads.</p>
                            </div>
                            <div className="p-6 border border-zinc-800 bg-zinc-900/40 font-mono text-sm space-y-4 group">
                                <div className="text-emerald-500 font-mono uppercase tracking-widest text-[10px] mb-2">Capability // 04</div>
                                <h4 className="text-white font-medium transition-colors group-hover:text-emerald-400">Cable Management</h4>
                                <p className="text-zinc-400 font-light text-xs leading-relaxed">EMI-segregated routing, custom strain relief design, and bend radius compliance for high-reliability harness sets.</p>
                            </div>
                        </div>

                        {/* Contextual Portfolio */}
                        <div className="mt-16">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2 border-t border-zinc-800/50 pt-8">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                Medical Mechanism Case Study
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group relative bg-[#0e0e0e] border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors duration-500">
                                    <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">ID: PRJ-MED-05</div>
                                    <h3 className="text-xl text-white font-medium mb-4 pr-12 text-zinc-200">Foot Switch for Ophthalmic Surgery</h3>
                                    <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                                        Ergonomic, ultra-high-precision foot switch for eye cataract surgery equipment with calibrated actuation force and travel.
                                    </p>
                                    <ul className="space-y-3 text-sm font-light text-zinc-400 border-l border-emerald-900/50 pl-4 font-mono uppercase tracking-tight text-[11px]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500/70">+</span>
                                            <span>Repeatable tactile feedback mechanism</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500/70">+</span>
                                            <span>Medical-grade materials; Full EMC compliance</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-emerald-500/70">+</span>
                                            <span>IP-rated, CE-marked design for sterile environments</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* DFx Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight uppercase">
                            <span className="text-zinc-500 italic font-serif lowercase">06 //</span> <br className="hidden md:block" /> DFx Disciplines
                        </h2>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 border border-zinc-800">
                            Spec Sheet // 08
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                            <div className="lg:col-span-8 space-y-8">
                                <h3 className="text-2xl text-white font-medium italic">Design for Manufacturability, Cost, Assembly & Compliance</h3>
                                <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                    A mechanical design that cannot be manufactured repeatably and economically is not a finished design. Qmax applies <span className="text-white font-medium underline decoration-emerald-500/20 underline-offset-4">DFx disciplines</span> throughout the design process — as concurrent engineering that shapes every design decision from the earliest concept phase.
                                </p>
                            </div>
                        </div>

                        {/* DFx Table */}
                        <div className="overflow-x-auto border border-zinc-800 rounded-lg">
                            <table className="w-full text-left border-collapse font-sans">
                                <thead>
                                    <tr className="bg-zinc-900/50 border-b border-zinc-800">
                                        <th className="p-6 font-mono text-xs uppercase tracking-widest text-emerald-500">DFx Discipline</th>
                                        <th className="p-6 font-mono text-xs uppercase tracking-widest text-emerald-500 w-2/3">What We Address</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800 text-sm md:text-base">
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-mono font-medium underline decoration-emerald-500/20 underline-offset-8">DFM — Manufacturability</td>
                                        <td className="p-6 text-zinc-300 font-light leading-relaxed">Tolerances set to process capability. Features designed to the manufacturing method. Tooling complexity minimised.</td>
                                    </tr>
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-mono font-medium underline decoration-emerald-500/20 underline-offset-8">DFC — Cost</td>
                                        <td className="p-6 text-zinc-300 font-light leading-relaxed">Material selection, process route, finish specification, and fastener standardisation evaluated for BOM cost.</td>
                                    </tr>
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-mono font-medium underline decoration-emerald-500/20 underline-offset-8">DFA — Assembly</td>
                                        <td className="p-6 text-zinc-300 font-light leading-relaxed">Part count minimisation, self-locating features, fastener access, tooling access, and assembly sequence reviewed.</td>
                                    </tr>
                                    <tr className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-6 text-white font-mono font-medium underline decoration-emerald-500/20 underline-offset-8">DFC — Compliance</td>
                                        <td className="p-6 text-zinc-300 font-light leading-relaxed">RoHS, REACH, CE marking, MIL, JSS, IEC, ISO addressed at design stage, not at submission.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Documentation Standards Callout */}
                        <div className="relative p-1 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-lg group mt-16">
                            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                            <div className="relative bg-[#0a0a0a] p-8 rounded-md border border-zinc-800 flex flex-col md:flex-row gap-8 items-center lg:items-start text-center md:text-left">
                                <div className="shrink-0 p-4 bg-zinc-900 border border-zinc-800 rounded-sm">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
                                    <div className="font-mono text-[10px] text-zinc-600 mt-2 uppercase tracking-tighter">ISO 286 / ASME Y14.5</div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-500">Documentation Standard</h4>
                                    <p className="text-zinc-200 font-medium leading-relaxed max-w-4xl">
                                        Every design released from Qmax carries a fully dimensioned, GD&T-annotated drawing set prepared to <span className="text-white">ISO 286 / ASME Y14.5</span> standards. Drawing packages include part drawings, assembly drawings, BOM, material callouts, surface finish callouts, and applicable standard references. Any competent machine shop or toolmaker can manufacture from our drawings without verbal clarification.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Thermal & Structural Analysis Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight uppercase">
                            <span className="text-zinc-500 italic font-serif lowercase">07 //</span> <br className="hidden md:block" /> Thermal & Structural Analysis
                        </h2>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 border border-zinc-800">
                            Spec Sheet // 09
                        </div>
                    </div>

                    <div className="space-y-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                            <div className="lg:col-span-8 space-y-8">
                                <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                    Structural and thermal failures in electronics products are almost always predictable — if the analysis is done. Qmax performs <span className="text-white font-medium">FEA-based structural analysis</span> and <span className="text-white font-medium">CFD-informed thermal analysis</span> to identify and eliminate failure modes before hardware is fabricated.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Thermal Analysis Subsection */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    </div>
                                    <h3 className="text-2xl text-white font-medium">Thermal Analysis & CFD</h3>
                                </div>
                                <p className="text-zinc-400 font-light leading-relaxed italic">
                                    We perform steady-state and transient thermal analysis of electronics enclosures and sub-systems, including natural convection, forced convection, and conduction-cooled assemblies.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Junction-to-ambient resistance modelling",
                                        "Hotspot identification & optimisation",
                                        "TIM selection & application guidance",
                                        "Thermal derating & vent sizing"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-xs font-mono text-zinc-500 uppercase tracking-wider items-start">
                                            <span className="text-emerald-500 mt-0.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Design Reinforcement Callout */}
                            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-sm self-start">
                                <p className="text-zinc-300 font-light leading-relaxed italic border-l-2 border-emerald-500/30 pl-6">
                                    Analysis results directly inform design decisions — wall thickness, rib placement, fastener torque, vibration isolator stiffness, and PCB support boss location. Where analysis predicts a compliance risk, the design is modified before the prototype is built. Physical testing then confirms the analytical prediction.
                                </p>
                            </div>
                        </div>

                        {/* Structural Table */}
                        <div className="space-y-8 mt-12">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-500 border-l border-emerald-500 pl-4">Structural and Dynamic Analysis</h3>
                            <div className="overflow-x-auto border border-zinc-800 rounded-lg bg-zinc-900/10">
                                <table className="w-full text-left border-collapse font-sans">
                                    <thead>
                                        <tr className="bg-zinc-900/50 border-b border-zinc-800">
                                            <th className="p-4 font-mono text-xs uppercase tracking-widest text-emerald-500">Analysis Type</th>
                                            <th className="p-4 font-mono text-xs uppercase tracking-widest text-emerald-500">Standard / Method</th>
                                            <th className="p-4 font-mono text-xs uppercase tracking-widest text-emerald-500 w-1/2">Output</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800 text-[13px] md:text-sm">
                                        {[
                                            { type: "Static Stress", method: "FEA (linear / non-linear)", output: "Safety factors, stress concentrations, deflection maps" },
                                            { type: "Modal Analysis", method: "FEA eigenvalue extraction", output: "Natural frequencies, mode shapes, resonance risk" },
                                            { type: "Vibration (Sinusoidal)", method: "MIL-STD-810H / DO-160", output: "Stress response, fatigue life estimate" },
                                            { type: "Vibration (Random)", method: "PSD input, MIL-STD-810 / JSS 55555", output: "RMS stress, component reliability prediction" },
                                            { type: "Mechanical Shock", method: "MIL-STD-810H Method 516.8", output: "Peak response, fastener survivability" },
                                            { type: "Drop Test Analysis", method: "IEC 60068-2-31, Custom spec", output: "Impact force, energy absorption, failure prediction" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="group hover:bg-emerald-950/5 transition-colors">
                                                <td className="p-4 text-white font-medium underline decoration-emerald-500/20 underline-offset-8">{row.type}</td>
                                                <td className="p-4 text-zinc-400 font-mono italic">{row.method}</td>
                                                <td className="p-4 text-zinc-300 font-light leading-snug">{row.output}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Portfolio Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-zinc-800 pb-8 gap-6">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight uppercase">
                            Selected <span className="text-zinc-500 italic font-serif lowercase">Portfolio</span>
                        </h2>
                        <div className="font-mono text-xs text-emerald-500 uppercase tracking-widest bg-emerald-950/30 px-3 py-1 border border-emerald-900/50 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            Live Deployments
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Manpack Case Study */}
                        <div className="group relative bg-[#0e0e0e] border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">ID: PRJ-MIL-03</div>
                            <h3 className="text-xl text-white font-medium mb-2 pr-12">Manpack Communication Equipment</h3>
                            <p className="text-[10px] font-mono text-emerald-500 mb-6 tracking-widest uppercase">MIL-STD-810H | L-WEIGHT AL</p>
                            <ul className="space-y-3 text-sm font-light text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500/70">{"///"}</span>
                                    <span>Ultra-lightweight Al-alloy manpack for defence application</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500/70">{"///"}</span>
                                    <span>Qualified for vibration, shock, temperature, and humidity</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500/70">{"///"}</span>
                                    <span>Weight optimisation alongside full RF shielding integrity</span>
                                </li>
                            </ul>
                        </div>

                        {/* Wi-Fi Security Device Enclosure */}
                        <div className="group relative bg-[#0e0e0e] border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">ID: PRJ-WIFI-01</div>
                            <h3 className="text-xl text-white font-medium mb-4 pr-12">Wi-Fi Security Device Enclosure</h3>
                            <ul className="space-y-3 text-sm font-light text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500/70">{"///"}</span>
                                    <span>Integrated EMI suppression & antenna keep-out zones</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500/70">{"///"}</span>
                                    <span>Optimised for maximum Wi-Fi throughput and low tooling cost</span>
                                </li>
                            </ul>
                        </div>

                        {/* Handheld OBD2 Diagnostic */}
                        <div className="group relative bg-[#0e0e0e] border border-zinc-800 p-8 hover:border-emerald-500/50 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">ID: PRJ-OBD2-02</div>
                            <h3 className="text-xl text-white font-medium mb-2 pr-12">Handheld OBD2 Diagnostic</h3>
                            <p className="text-[10px] font-mono text-emerald-500 mb-6 tracking-widest uppercase">4G | Wi-Fi | LCD | Battery</p>
                            <ul className="space-y-3 text-sm font-light text-zinc-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500/70">{"///"}</span>
                                    <span>Ergonomic grip geometry with robust drop resistance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500/70">{"///"}</span>
                                    <span>Complex internal RF coordination for workshop environments</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                {/* Reference Products Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">
                    <div className="mb-12 border-b border-zinc-800 pb-8">
                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight uppercase">
                            Reference <span className="text-zinc-500 italic font-serif lowercase">Products</span>
                        </h2>
                        <p className="text-zinc-400 font-light mt-4 max-w-2xl">
                            Qmax Systems has designed mechanical systems for leading automotive, defence, and medical electronics companies.
                        </p>
                    </div>

                    <div className="overflow-x-auto border border-zinc-800 rounded-lg bg-zinc-900/10">
                        <table className="w-full text-left border-collapse font-sans">
                            <thead>
                                <tr className="bg-zinc-900/50 border-b border-zinc-800">
                                    <th className="p-4 font-mono text-xs uppercase tracking-widest text-emerald-500">Sector</th>
                                    <th className="p-4 font-mono text-xs uppercase tracking-widest text-emerald-500">Product</th>
                                    <th className="p-4 font-mono text-xs uppercase tracking-widest text-emerald-500">Key Engineering Challenge</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800 text-[13px] md:text-sm">
                                {[
                                    { sector: "Defence", product: "Manpack Communication Equipment", challenge: "Ultra-lightweight Al-alloy, MIL-STD-810 qualified, field-maintainable" },
                                    { sector: "Marine / Satcom", product: "Satellite Antenna Stabiliser", challenge: "Shipborne, 3-axis motion compensation in salt-laden environment" },
                                    { sector: "Medical", product: "Ophthalmic Surgery Foot Switch", challenge: "Precision actuation, medical-grade, IP-rated surgical device" },
                                    { sector: "IoT / Security", product: "Wi-Fi Security Device Enclosure", challenge: "Low-cost injection moulding, EMI geometry, antenna throughput optimised" },
                                    { sector: "Automotive", product: "Handheld OBD2 Diagnostic Device", challenge: "Workshop-grade, workshop drop rating, ergonomic grip" }
                                ].map((row, idx) => (
                                    <tr key={idx} className="group hover:bg-emerald-950/5 transition-colors">
                                        <td className="p-4 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">{row.sector}</td>
                                        <td className="p-4 text-white font-medium">{row.product}</td>
                                        <td className="p-4 text-zinc-300 font-light leading-snug">{row.challenge}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="w-full mt-32 border-t border-zinc-800/50 pt-20">
                    <div className="mb-12 border-b border-zinc-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight uppercase">
                                Frequently Asked <span className="text-zinc-500 italic font-serif lowercase">Questions</span>
                            </h2>
                            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] max-w-2xl">
                                Structured for schema markup and AI search engine indexing
                            </p>
                        </div>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 border border-zinc-800">
                            FAQ // 01-10
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                        {[
                            { q: "What mechanical design software does Qmax Systems use?", a: "Qmax uses professional-grade 3D CAD tools for solid modelling, assembly design, and drawing preparation. FEA and thermal simulation are performed with dedicated analysis software. All deliverables are provided in native format plus neutral exchange formats (STEP, IGES, PDF) to ensure vendor and customer compatibility." },
                            { q: "Can Qmax manage both the mechanical design and production sourcing?", a: "Yes. Qmax manages the full cycle from design to qualified prototype and can extend to volume production sourcing. We select manufacturing partners — injection moulders, sheet metal shops, CNC machining houses — based on capability, quality system, location, and lead time. Our 30-year vendor relationships mean we can benchmark cost and qualify suppliers faster than most internal engineering teams." },
                            { q: "How does Qmax approach MIL-STD-810 mechanical qualification?", a: "Qualification begins at the design stage, not at the test lab. We identify applicable MIL-STD-810 test methods for the deployment environment, build structural analysis models to predict response, and design the enclosure to pass with margin. Physical testing at our nearby accredited test facility then validates the analysis. This minimises test failures and re-spin cycles." },
                            { q: "What is the difference between IP65, IP67, and IP68, and how do you ensure compliance?", a: "IP65 is dust-tight and resistant to water jets. IP67 adds immersion to 1 m for 30 minutes. IP68 covers continuous immersion at depths agreed between manufacturer and customer. Compliance is achieved through correct gasket geometry, material, and compression design. We design all sealing interfaces to published standards, specify fastener torque, and validate at our nearby IP test facility before production release." },
                            { q: "Does Qmax provide GD&T drawings suitable for direct issue to vendors?", a: "Yes. All drawing packages from Qmax carry full GD&T per ISO 286 and ASME Y14.5. Tolerances are set based on functional requirements and the manufacturing process, not from default CAD settings. Any qualified machine shop or toolmaker can manufacture from our drawings without needing clarification." },
                            { q: "How does Qmax integrate mechanical and electronics design to avoid late-stage conflicts?", a: "Mechanical and electronics engineers at Qmax work on the same product concurrently, not in series. PCB outline, connector locations, heat-generating component positions, and antenna keep-out zones are exchanged between teams continuously. This eliminates the common failure mode where a finalised PCB does not fit a finalised enclosure." },
                            { q: "What materials has Qmax worked with beyond standard aluminium and steel?", a: "We have designed parts in PTFE (Teflon), stainless steel (304, 316), polycarbonate, ABS, nylon (PA6/PA66), glass-filled engineering plastics, and titanium alloys. Surface treatments include Type II and III anodising, chromate conversion, electroless nickel, hard chrome, powder coating, and gold plating for low-contact-resistance applications." },
                            { q: "Can Qmax help reduce the manufacturing cost of an existing design?", a: "Yes. Design-for-cost review is a standard Qmax service. Common cost reduction opportunities include: over-toleranced drawings that force expensive machining, unnecessarily tight surface finish specifications, complex geometries that increase tooling cost, non-standard fasteners, and material overspecification. A structured DFM/DFC review typically identifies 10-25% BOM cost reduction in designs not originally optimised for production." },
                            { q: "Does Qmax handle mechanical compliance for medical electronics products?", a: "Yes. We have designed Class I and Class II medical device enclosures with documentation supporting CE marking and IEC 60601 mechanical requirements, including creepage and clearance compliance, UL94 flammability-rated materials, biocompatible materials where required, and IP ratings for clinical environments." },
                            { q: "What is the typical timeline from mechanical concept to qualified prototype?", a: "A standard plastic enclosure for a handheld device — concept through injection-moulded prototype and IP test — typically runs 8-12 weeks. A MIL-STD-810-qualified rugged metal enclosure, including FEA, machined prototype, and formal test campaign, typically runs 14-20 weeks. Detailed schedules are agreed at project kick-off and include gate reviews at concept freeze, detailed design release, and prototype receipt." }
                        ].map((faq, idx) => (
                            <div key={idx} className="space-y-4 group" id={`faq-${idx + 1}`}>
                                <div className="flex gap-4 items-start">
                                    <span className="text-emerald-500 font-mono text-xs mt-1 shrink-0">{idx < 9 ? `0${idx + 1}` : idx + 1}.</span>
                                    <div className="space-y-4">
                                        <h4 className="text-white font-medium text-lg leading-snug group-hover:text-emerald-400 transition-colors">
                                            {faq.q}
                                        </h4>
                                        <p className="text-zinc-400 font-light leading-relaxed text-sm">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="w-full mt-40 mb-20 relative">
                    <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
                    <div className="relative border border-emerald-500/20 bg-emerald-950/10 p-12 md:p-16 rounded-sm text-center max-w-4xl mx-auto space-y-10 group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[100px] pointer-events-none select-none tracking-tighter shrink-0 -translate-y-10 translate-x-10 text-emerald-500 italic">
                            REF.01
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight">1-Hour Complimentary <br className="hidden md:block" /> Engineering Consultation</h2>
                            <div className="w-12 h-1 bg-emerald-500 mx-auto" />
                        </div>

                        <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Bring your mechanical design challenge to a working session with a Qmax senior mechanical engineer. We will review your requirements, identify critical design decisions, and outline a realistic path to a compliant, manufacturable product.
                        </p>

                        <div className="flex flex-col items-center gap-6 pt-4">
                            <button className="px-12 py-4 bg-emerald-600 text-white font-medium tracking-widest hover:bg-emerald-500 transition-all uppercase text-sm rounded-none border border-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-95 transition-duration-300">
                                Initialize Engagement
                            </button>
                            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-pulse" />
                                    Response within one business day
                                </span>
                                <span>•</span>
                                <span>No Obligations</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Engagement Footer */}
                <footer className="w-full mt-40 pt-20 border-t border-zinc-800/50 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight uppercase leading-tight">
                                Start a <span className="text-zinc-500 italic font-serif lowercase">Mechanical Design</span> <br /> Engagement
                            </h2>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
                                Whether you have a full specification or an early-stage concept, the right time to engage a mechanical design team is before the electronics layout is frozen — not after.
                            </p>
                        </div>
                        <div className="bg-zinc-900/50 border border-zinc-800 p-8 space-y-6">
                            <p className="text-zinc-300 font-medium">Contact Qmax Systems to discuss your requirements.</p>
                            <button className="w-full py-4 bg-white text-black font-medium tracking-widest hover:bg-emerald-500 hover:text-white transition-all uppercase text-sm rounded-none border border-white active:scale-95 transition-duration-300">
                                Begin Technical Brief
                            </button>
                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">Reference: MECH_SERV_2026</p>
                        </div>
                    </div>
                </footer>
            </div>

        </main>

    );
}