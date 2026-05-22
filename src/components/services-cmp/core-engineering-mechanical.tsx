import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Atom,
  FlaskConical,
  ArrowRight,
  Box,
  Shield,
  Droplets,
  Cog,
  FileCheck,
  ChevronRight,
} from "lucide-react";

/* ── Types ── */

type SmallCard = { title: string; description: string; icon?: ReactNode };
type CheckItem = string;
type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  href: string;
  label?: string;
  tag?: string;
};
type TableRow = string[];
type IpCard = { rating: string; description: string };
type AnalysisRow = { type: string; standard: string; output: string };

type ContentSection =
  | { kind: "cards"; title: string; items: SmallCard[] }
  | { kind: "checks"; title: string; items: CheckItem[] }
  | { kind: "table"; title: string; headers: string[]; rows: TableRow[] }
  | { kind: "materials"; title: string; items: SmallCard[]; footnote?: string }
  | { kind: "ip-cards"; title: string; items: IpCard[] }
  | {
      kind: "portfolio";
      title: string;
      layout: "grid" | "featured";
      items: PortfolioItem[];
    }
  | { kind: "analysis"; title: string; rows: AnalysisRow[] }
  | { kind: "doc-cards"; title: string; items: SmallCard[] };

type MechanicalService = {
  id: string;
  titleBefore: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  chips: string[];
  sections: ContentSection[];
};

/* ── Data (from reference HTML) ── */

const SERVICES: MechanicalService[] = [
  {
    id: "plastic-enclosure",
    titleBefore: "Plastic Enclosure",
    titleAccent: "Design",
    subtitle: "Plastic Enclosure Design for Electronics",
    description:
      "Plastic enclosures represent the most common housing choice for consumer electronics, industrial handheld devices, and cost-sensitive IoT products. Qmax Systems designs injection-moulded plastic enclosures that balance structural integrity, thermal performance, EMI management, and tooling cost — with a clear path from concept to mass production.",
    chips: ["PC / ABS", "UL94-V0", "Nylon PA66", "EMI Gasket", "RF Design"],
    sections: [
      {
        kind: "cards",
        title: "Materials We Work With",
        items: [
          {
            title: "Thermoplastics",
            description:
              "Polycarbonate (PC), ABS, PC-ABS blends. Nylon PA6 / PA66 and glass-filled engineering variants for structural applications.",
            icon: <Atom className="h-5 w-5" strokeWidth={1.75} />,
          },
          {
            title: "Specialist Grades",
            description:
              "PTFE (Teflon) for chemical or dielectric applications. UV-stabilised, flame-retardant UL94-V0 compliant materials.",
            icon: <FlaskConical className="h-5 w-5" strokeWidth={1.75} />,
          },
        ],
      },
      {
        kind: "checks",
        title: "Design Considerations",
        items: [
          "Draft angles, parting line placement, wall thickness uniformity",
          "Rib & boss geometry, snap-fit and living hinge design",
          "Insert moulding for threaded interfaces, EMI gasket seating",
          "RF-transparent dielectric analysis for Wi-Fi, 4G, GPS products",
        ],
      },
      {
        kind: "portfolio",
        title: "Portfolio",
        layout: "grid",
        items: [
          {
            title: "Wi-Fi Security Device Enclosure",
            description:
              "Low tooling cost, integrated EMI suppression geometry, antenna keep-out zones for maximum Wi-Fi throughput.",
            label: "IoT / Security",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/iot_gateway/1.1.png",
            href: "/case-studies/iot-gateway",
          },
          {
            title: "Handheld OBD2 Diagnostic Device",
            description:
              "4G, Wi-Fi, LCD, battery. Workshop-grade drop resistance, ergonomic grip geometry, internal RF coordination.",
            label: "Automotive",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/OBD2/OBD_V4_RENDER_23_NOV_2024_MG2_2.1.png",
            href: "/case-studies/obd-v4-system",
          },
        ],
      },
    ],
  },
  {
    id: "metal-enclosures",
    titleBefore: "Metal",
    titleAccent: "Enclosures",
    subtitle: "Machined Aluminium, Sheet Metal & Extruded Enclosures",
    description:
      "Metal enclosures are the correct engineering choice when the application demands superior EMI shielding, higher structural rigidity, thermal conductance, or a longer service life under mechanical or environmental stress. Qmax designs and sources all three principal metal enclosure types.",
    chips: ["Al 6061-T6", "SS 304/316", "Anodising", "Gold Plating"],
    sections: [
      {
        kind: "table",
        title: "Enclosure Types",
        headers: ["Type", "Typical Application", "Key Advantage"],
        rows: [
          [
            "CNC Machined Aluminium",
            "RF modules, high-precision chassis, defence sub-systems",
            "Tight tolerances, complex geometry, excellent EMI shielding",
          ],
          [
            "Sheet Metal (SPCC, SS, Al)",
            "Industrial electronics, rack-mount chassis, control panels",
            "Cost-effective for mid-volume, good structural-to-weight ratio",
          ],
          [
            "Aluminium Extrusion",
            "Heat-dissipating enclosures, DIN rail housings",
            "Integral heat sink geometry, excellent thermal path, low per-unit cost",
          ],
        ],
      },
      {
        kind: "materials",
        title: "Materials & Surface Treatments",
        items: [
          {
            title: "Materials",
            description:
              "Al Alloy 6061-T6, 5052; Stainless Steel 304 / 316; SPCC mild steel",
          },
          {
            title: "Core Treatments",
            description:
              "Anodising Type II / III; Chromate conversion; Powder coating",
          },
          {
            title: "Precision Plating",
            description:
              "Gold plating; Electroless nickel; Hard chrome for wear-critical interfaces",
          },
        ],
        footnote:
          "Surface treatment selection is driven by corrosion environment, contact resistance requirements, cosmetic specification, and applicable MIL-SPEC surface treatment standards.",
      },
    ],
  },
  {
    id: "military-rugged",
    titleBefore: "Military Rugged",
    titleAccent: "Enclosures",
    subtitle:
      "Rugged Metal Enclosures for Military Applications — MIL-STD-810 / JSS 55555",
    description:
      "Military and defence electronics operate in environments placing extreme demands on mechanical structures: wide temperature cycling, humidity, fungus exposure, sand and dust ingress, shock from weapons fire, vibration from vehicles and helicopters, and altitude. Qmax Systems designs rugged enclosures to MIL-STD-810H (US military environmental engineering standard) and JSS 55555 (Indian DRDO/DGQA equivalent), with full documentation supporting test qualification. Structural analysis is performed before hardware is built, reducing prototype-test cycles.",
    chips: ["MIL-STD-810H", "JSS 55555", "DRDO/DGQA", "FEA Pre-qual"],
    sections: [
      {
        kind: "checks",
        title: "Design Approach for MIL-Grade Enclosures",
        items: [
          "Aluminium alloy castings and extruded / machined Al chassis",
          "Conformal sealed interfaces; EMI gasket seating (finger stock, wire mesh)",
          "Captive fastener systems; shock and vibration isolation mounts",
          "Thermal management integration; MIL-connector cutouts to specification",
        ],
      },
      {
        kind: "portfolio",
        title: "Portfolio Case Study",
        layout: "featured",
        items: [
          {
            title: "Manpack Communication Equipment",
            description:
              "Ultra-lightweight Al-alloy manpack for defence application. MIL-STD-810 qualified for vibration, shock, temperature, and humidity. Weight optimisation was a primary design constraint alongside full RF shielding integrity and field-maintainability requirements.",
            label: "Defence",
            tag: "Manpack Comms",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/ventilation_control_damper/military_man_with_bigcat3.7.png",
            href: "/case-studies/rugged-communication-control-system-enclosure",
          },
        ],
      },
    ],
  },
  {
    id: "ip-rated",
    titleBefore: "IP-Rated",
    titleAccent: "Enclosures",
    subtitle: "IP-Rated Enclosures — IP65 / IP67 / IP68",
    description:
      "Ingress protection ratings under IEC 60529 govern resistance to solid particulates (first digit) and liquid ingress (second digit). Achieving a given IP rating is a mechanical engineering problem. It requires correct selection and compression of sealing elements, proper surface flatness and roughness at sealing interfaces, appropriate fastener torque specifications, cable entry gland selection, and connector IP rating matching.",
    chips: ["IP65", "IP67", "IP68", "IEC 60529", "Viton / EPDM"],
    sections: [
      {
        kind: "ip-cards",
        title: "Ingress Protection Levels",
        items: [
          {
            rating: "IP65",
            description:
              "Dust-tight · Water jets from any direction · Outdoor industrial, field instruments",
          },
          {
            rating: "IP67",
            description:
              "Dust-tight · Immersion 1 m / 30 min · Handheld devices, marine equipment",
          },
          {
            rating: "IP68",
            description:
              "Dust-tight · Continuous immersion (specified depth) · Subsea, underwater sensors",
          },
        ],
      },
      {
        kind: "cards",
        title: "Seal Design & Validation",
        items: [
          {
            title: "Gasket Engineering",
            description:
              "O-ring cross-section, durometer, and groove geometry per standard engineering practice. Silicone, EPDM, Viton selected by temperature range, chemical exposure, and compression set.",
            icon: <Droplets className="h-5 w-5" strokeWidth={1.75} />,
          },
          {
            title: "Test Validation",
            description:
              "All IP-rated designs validated at the nearest accredited test facility before production release. Fastener torque fully specified and documented.",
            icon: <Shield className="h-5 w-5" strokeWidth={1.75} />,
          },
        ],
      },
      {
        kind: "portfolio",
        title: "Portfolio",
        layout: "featured",
        items: [
          {
            title: "Satellite Antenna Stabiliser",
            description:
              "Shipborne system maintaining antenna pointing towards a geostationary satellite. Salt-laden marine environment requiring IP-rated enclosures, corrosion-resistant materials, and sealed cable penetrations.",
            label: "Marine / Satcom",
            tag: "Satellite Comms",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/GIMBAL/GIMBAL_4_AXIS.1.png",
            href: "/case-studies/gimbal",
          },
        ],
      },
    ],
  },
  {
    id: "full-mechanical",
    titleBefore: "Full Mechanical",
    titleAccent: "Systems",
    subtitle: "Full Mechanical Systems Design",
    description:
      "Beyond enclosures, Qmax Systems undertakes complete mechanical system design for products that include moving parts, mechanisms, electromechanical actuation, or complex multi-body assemblies. Our capability spans kinematic design and mechanism analysis through detailed part design, assembly drawing sets, and BOM for procurement.",
    chips: ["Kinematics", "Actuators", "Optical", "Medical"],
    sections: [
      {
        kind: "cards",
        title: "System-Level Capabilities",
        items: [
          {
            title: "Mechanism Design & Kinematics",
            description:
              "Linkage geometry, cam and follower, pivot and hinge design, travel limits, actuation force analysis.",
            icon: <Cog className="h-5 w-5" strokeWidth={1.75} />,
          },
          {
            title: "Electromechanical Integration",
            description:
              "Motor and actuator mounting, encoder alignment, harness routing within mechanical sub-systems.",
            icon: <Box className="h-5 w-5" strokeWidth={1.75} />,
          },
          {
            title: "Optical & Sensor Systems",
            description:
              "Mechanical design of optical assemblies and precision mounting structures for demanding environments.",
            icon: <Atom className="h-5 w-5" strokeWidth={1.75} />,
          },
          {
            title: "Cable Management",
            description:
              "EMI-segregated routing, strain relief design, bend radius compliance throughout the assembly.",
            icon: <ArrowRight className="h-5 w-5" strokeWidth={1.75} />,
          },
        ],
      },
      {
        kind: "portfolio",
        title: "Portfolio Case Study",
        layout: "featured",
        items: [
          {
            title: "Foot Switch for Ophthalmic Surgery (Cataract)",
            description:
              "Ergonomic, ultra-high-precision foot switch for eye cataract surgery equipment. Precisely calibrated actuation force and travel, repeatable tactile feedback, full EMC compliance. Medical-grade materials, IP-rated, CE-marked.",
            label: "Medical Systems",
            tag: "Cataract Surgery",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/footswitch/FOOTSWITCH_27_APR_2026_S1.10.png",
            href: "/case-studies/footswitch",
          },
        ],
      },
    ],
  },
  {
    id: "dfx",
    titleBefore: "DFx Engineering &",
    titleAccent: "Compliance",
    subtitle: "MT, Cost, Assembly & Compliance",
    description:
      "A mechanical design that cannot be manufactured repeatably and economically is not a finished design. Qmax applies DFx disciplines throughout the design process — as concurrent engineering that shapes every design decision from the earliest concept phase.",
    chips: ["ISO 286", "ASME Y14.5", "GD&T", "RoHS / REACH"],
    sections: [
      {
        kind: "table",
        title: "DFx Disciplines",
        headers: ["DFx Discipline", "What We Address"],
        rows: [
          [
            "DFM — Manufacturability",
            "Tolerances set to process capability. Features designed to the manufacturing method. Tooling complexity minimised.",
          ],
          [
            "DFC — Cost",
            "Material selection, process route, finish specification, and fastener standardisation evaluated for BOM cost.",
          ],
          [
            "DFA — Assembly",
            "Part count minimisation, self-locating features, fastener access, tooling access, and assembly sequence reviewed.",
          ],
          [
            "DFC — Compliance",
            "RoHS, REACH, CE marking, MIL, JSS, IEC, ISO addressed at design stage, not at submission.",
          ],
        ],
      },
      {
        kind: "doc-cards",
        title: "Documentation Standard",
        items: [
          {
            title: "ISO 286",
            description:
              "Limits and fits. All tolerances based on functional requirements and the manufacturing process.",
          },
          {
            title: "ASME Y14.5",
            description:
              "Full GD&T-annotated drawing sets. Any qualified machine shop can manufacture without verbal clarification.",
          },
          {
            title: "Package Contents",
            description:
              "Part drawings, assembly drawings, BOM, material callouts, surface finish callouts, and standard references.",
          },
        ],
      },
    ],
  },
  {
    id: "thermal-structural",
    titleBefore: "Thermal & Structural",
    titleAccent: "Analysis",
    subtitle: "Vibration / Impact / Drop / Thermal CFD",
    description:
      "Structural and thermal failures in electronics products are almost always predictable — if the analysis is done. Qmax performs FEA-based structural analysis and CFD-informed thermal analysis to identify and eliminate failure modes before hardware is fabricated.",
    chips: ["FEA", "CFD", "MIL-STD-810", "DO-160", "IEC 60068"],
    sections: [
      {
        kind: "checks",
        title: "Thermal Analysis & CFD",
        items: [
          "Junction-to-ambient thermal resistance modelling",
          "Hotspot identification and heat sink geometry optimisation",
          "Thermal interface material (TIM) selection",
          "Thermal derating validation and vent sizing",
        ],
      },
      {
        kind: "analysis",
        title: "Structural & Dynamic Analysis",
        rows: [
          {
            type: "Static Stress",
            standard: "FEA linear / non-linear",
            output: "Safety factors, stress concentrations, deflection maps",
          },
          {
            type: "Modal Analysis",
            standard: "FEA eigenvalue extraction",
            output: "Natural frequencies, mode shapes, resonance risk",
          },
          {
            type: "Vibration (Sinusoidal)",
            standard: "MIL-STD-810 / DO-160",
            output: "Stress response, fatigue life estimate",
          },
          {
            type: "Vibration (Random)",
            standard: "MIL-STD-810 / JSS 55555",
            output: "RMS stress, component reliability prediction",
          },
          {
            type: "Mechanical Shock",
            standard: "MIL-STD-810 Method 516.8",
            output: "Peak response, component survivability",
          },
          {
            type: "Drop Test",
            standard: "IEC 60068-2-31",
            output: "Impact force, energy absorption, failure prediction",
          },
        ],
      },
    ],
  },
];

/* ── Sub-components ── */

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[18px] flex items-center gap-3">
      <span className="shrink-0 text-[11.5px] font-bold uppercase tracking-[0.5px] text-zinc-500">
        {children}
      </span>
      <span className="h-px flex-1 bg-zinc-200" aria-hidden />
    </div>
  );
}

function SmallCards({ items }: { items: SmallCard[] }) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-zinc-200 bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-shadow duration-200 hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_12px_32px_rgba(16,24,40,0.08)]"
        >
          {item.icon ? (
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-brand-500">
              {item.icon}
            </div>
          ) : null}
          <h4 className="mb-2 text-[15px] font-semibold text-zinc-900">
            {item.title}
          </h4>
          <p className="text-[13.5px] leading-[21px] text-zinc-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function CheckGrid({ items }: { items: CheckItem[] }) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3.5 rounded-xl bg-white px-6 py-[22px] shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_12px_32px_rgba(16,24,40,0.08)]"
        >
          <ArrowRight
            className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
            strokeWidth={2}
            aria-hidden
          />
          <span className="text-[13.5px] leading-[21px] text-zinc-700">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: TableRow[];
}) {
  return (
    <div className="mb-9 overflow-hidden rounded-lg border border-zinc-200">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-zinc-900">
            {headers.map((header) => (
              <th
                key={header}
                className="border-r border-zinc-800 px-5 py-3.5 text-[11.5px] font-bold uppercase tracking-[0.5px] text-white last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="border-b border-zinc-100 transition-colors last:border-b-0 hover:bg-zinc-50/80"
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className={`px-5 py-3.5 text-[13.5px] leading-[21px] text-zinc-600 ${
                    cellIdx === 0
                      ? "border-r border-zinc-100 font-semibold text-zinc-900"
                      : cellIdx < row.length - 1
                        ? "border-r border-zinc-100"
                        : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MaterialCards({
  items,
  footnote,
}: {
  items: SmallCard[];
  footnote?: string;
}) {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-zinc-200 bg-white p-5"
          >
            <h4 className="mb-3 text-[11.5px] font-bold uppercase tracking-[0.5px] text-zinc-900">
              {item.title}
            </h4>
            <p className="text-[13.5px] leading-[21px] text-zinc-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {footnote ? (
        <p className="mt-6 text-center text-[11.5px] font-bold uppercase tracking-[0.5px] text-zinc-500">
          {footnote}
        </p>
      ) : null}
    </div>
  );
}

function IpCards({ items }: { items: IpCard[] }) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.rating}
          className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-3 text-2xl font-light tracking-tight text-brand-500">
            {item.rating}
          </div>
          <p className="text-[13.5px] leading-[21px] text-zinc-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function ViewCaseLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="mt-4 inline-flex items-center gap-2 rounded-md border border-brand-500/30 px-[18px] py-2 text-[13px] font-semibold text-brand-500 no-underline transition-all duration-200 hover:border-brand-500 hover:bg-brand-500/10 hover:no-underline hover:translate-x-0.5"
    >
      View Case
      <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
    </Link>
  );
}

function PortfolioGridCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="overflow-hidden rounded-[10px] bg-zinc-900 p-7 text-white">
      <div className="relative mb-5 h-[180px] overflow-hidden rounded-lg bg-white">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
      {item.label ? (
        <p className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.5px] text-brand-500">
          {item.label}
        </p>
      ) : null}
      <h4 className="mb-2.5 text-[18px] font-medium leading-snug text-white">
        {item.title}
      </h4>
      <p className="text-[15px] leading-[22.5px] text-white/90">
        {item.description}
      </p>
      <ViewCaseLink href={item.href} />
    </article>
  );
}

function PortfolioFeaturedCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="flex flex-col items-center gap-8 overflow-hidden rounded-[10px] bg-zinc-900 p-7 text-white min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between min-[900px]:gap-8 min-[900px]:px-8 min-[900px]:py-7">
      <div className="w-full min-[900px]:flex-1">
        {item.label ? (
          <p className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.5px] text-brand-500">
            {item.label}
          </p>
        ) : null}
        <h4 className="mb-2.5 text-[18px] font-medium leading-snug text-white">
          {item.title}
        </h4>
        <p className="text-[15px] leading-[22.5px] text-white/90">
          {item.description}
        </p>
        <ViewCaseLink href={item.href} />
        {item.tag ? (
          <span className="mt-4 inline-block rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-zinc-400">
            {item.tag}
          </span>
        ) : null}
      </div>
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-lg bg-white min-[900px]:h-[200px] min-[900px]:w-[280px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 280px"
        />
      </div>
    </article>
  );
}

function PortfolioCards({
  items,
  layout,
}: {
  items: PortfolioItem[];
  layout: "grid" | "featured";
}) {
  if (layout === "featured") {
    const item = items[0];
    if (!item) return null;
    return <PortfolioFeaturedCard item={item} />;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <PortfolioGridCard key={item.title} item={item} />
      ))}
    </div>
  );
}

function AnalysisTable({ rows }: { rows: AnalysisRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200">
      <div className="grid grid-cols-1 border-b border-zinc-100 bg-zinc-900 text-[11.5px] font-bold uppercase tracking-[0.5px] text-white min-[720px]:grid-cols-[156px_186px_1fr]">
        <div className="hidden px-4 py-3.5 min-[720px]:block">Analysis Type</div>
        <div className="hidden px-4 py-3.5 min-[720px]:block">Standard</div>
        <div className="hidden px-4 py-3.5 min-[720px]:block">
          Expected Output
        </div>
      </div>
      {rows.map((row) => (
        <div
          key={row.type}
          className="grid grid-cols-1 border-b border-zinc-100 transition-colors last:border-b-0 hover:bg-[#fdfcfa] min-[720px]:grid-cols-[156px_186px_1fr]"
        >
          <div className="px-4 py-3.5 text-[13.5px] font-semibold text-zinc-900 min-[720px]:font-normal">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.5px] text-zinc-400 min-[720px]:hidden">
              Analysis Type
            </span>
            {row.type}
          </div>
          <div className="px-4 py-3.5 text-[13.5px] italic text-zinc-500">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.5px] text-zinc-400 not-italic min-[720px]:hidden">
              Standard
            </span>
            {row.standard}
          </div>
          <div className="px-4 py-3.5 text-[13.5px] leading-[21px] text-zinc-600">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.5px] text-zinc-400 min-[720px]:hidden">
              Expected Output
            </span>
            {row.output}
          </div>
        </div>
      ))}
    </div>
  );
}

function DocCards({ items }: { items: SmallCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-zinc-200 bg-zinc-50 p-6"
        >
          <div className="mb-3 flex items-center gap-2">
            <FileCheck className="h-4 w-4 text-brand-500" strokeWidth={1.75} />
            <h4 className="text-[11.5px] font-bold uppercase tracking-[0.5px] text-zinc-900">
              {item.title}
            </h4>
          </div>
          <p className="text-[13.5px] leading-[21px] text-zinc-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function SectionContent({ section }: { section: ContentSection }) {
  switch (section.kind) {
    case "cards":
      return (
        <div>
          <SectionTitle>{section.title}</SectionTitle>
          <SmallCards items={section.items} />
        </div>
      );
    case "checks":
      return (
        <div>
          <SectionTitle>{section.title}</SectionTitle>
          <CheckGrid items={section.items} />
        </div>
      );
    case "table":
      return (
        <div>
          <SectionTitle>{section.title}</SectionTitle>
          <DataTable headers={section.headers} rows={section.rows} />
        </div>
      );
    case "materials":
      return (
        <div>
          <SectionTitle>{section.title}</SectionTitle>
          <MaterialCards items={section.items} footnote={section.footnote} />
        </div>
      );
    case "ip-cards":
      return (
        <div>
          <SectionTitle>{section.title}</SectionTitle>
          <IpCards items={section.items} />
        </div>
      );
    case "portfolio":
      return (
        <div>
          <SectionTitle>{section.title}</SectionTitle>
          <PortfolioCards items={section.items} layout={section.layout} />
        </div>
      );
    case "analysis":
      return (
        <div>
          <SectionTitle>{section.title}</SectionTitle>
          <AnalysisTable rows={section.rows} />
        </div>
      );
    case "doc-cards":
      return (
        <div>
          <SectionTitle>{section.title}</SectionTitle>
          <DocCards items={section.items} />
        </div>
      );
    default:
      return null;
  }
}

function ServiceBlock({ service }: { service: MechanicalService }) {
  return (
    <article
      id={service.id}
      className="grid grid-cols-1 items-start max-[960px]:grid-cols-1 min-[960px]:grid-cols-[35%_65%]"
    >
      <div className="bg-white px-5 py-12 max-[640px]:px-5 min-[640px]:px-8 min-[960px]:sticky min-[960px]:top-[calc(var(--nav-h)+8px)] min-[960px]:self-start min-[960px]:px-[52px] min-[960px]:py-[72px] min-[960px]:pl-[max(1.5rem,var(--page-pad,4rem))]">
        <h2 className="mb-3 font-light leading-[1.1] tracking-[-0.02em] text-zinc-900 [font-size:clamp(28px,3.2vw,42px)]">
          {service.titleBefore}{" "}
          <span className="text-brand-500">{service.titleAccent}</span>
        </h2>
        <p className="mb-5 text-[11.5px] font-bold uppercase tracking-[0.5px] text-zinc-500">
          {service.subtitle}
        </p>
        <p className="mb-7 border-l-[3px] border-brand-500 pl-[18px] text-[15px] leading-[22.5px] text-zinc-600 text-justify">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {service.chips.map((chip) => (
            <span
              key={chip}
              className="whitespace-nowrap rounded-[3px] border border-[#e8e4de] bg-[#f5f3ef] px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.5px] text-zinc-500"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 py-12 max-[640px]:px-5 min-[640px]:px-8 min-[960px]:px-[max(1.5rem,var(--page-pad,4rem))] min-[960px]:py-[72px] min-[960px]:pl-[52px]">
        {service.sections.map((section) => (
          <SectionContent key={section.title} section={section} />
        ))}
      </div>
    </article>
  );
}

/* ── Main export ── */

export function CoreEngineeringMechanical() {
  return (
    <div className="bg-white">
      <section
        aria-labelledby="core-engineering-capabilities-heading"
        className="bg-white px-6 pb-10 pt-[90px] text-center max-[900px]:px-6 max-[900px]:py-16"
      >
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="core-engineering-capabilities-heading"
            className="mb-7 font-light leading-[1.15] tracking-[-0.01em] text-zinc-900 [font-size:clamp(32px,4vw,48px)]"
          >
            Our Core Engineering{" "}
            <span className="text-brand-500">Capabilities</span>
          </h2>
          <p className="mx-auto max-w-[820px] text-[15px] leading-[22.5px] text-zinc-600">
            Qmax Systems delivers precision mechanical engineering across seven
            specialist disciplines — from injection-moulded plastic enclosures
            for consumer IoT products to MIL-STD-810H-qualified rugged systems
            for defence electronics. Each service is backed by structural FEA
            analysis, full GD&T drawing sets, and a direct path from concept to
            qualified production.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[100%]">
        {SERVICES.map((service) => (
          <ServiceBlock key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
