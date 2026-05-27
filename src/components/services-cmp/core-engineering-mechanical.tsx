import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Atom,
  FlaskConical,
  ArrowRight,
  CircleDotDashed,
  ClipboardCheck,
  Eye,
  ChevronRight,
  PlugZap,
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
type IpCard = {
  rating: string;
  description: string;
  detail?: string;
  applications?: string;
};
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
            icon: <Atom className="h-8 w-8" strokeWidth={1.75} />,
          },
          {
            title: "Specialist Grades",
            description:
              "PTFE (Teflon) for chemical or dielectric applications. UV-stabilised, flame-retardant UL94-V0 compliant materials.",
            icon: <FlaskConical className="h-8 w-8" strokeWidth={1.75} />,
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
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/OBD/10April2022TekionOBD.1.png",
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
      {
        kind: "portfolio",
        title: "Portfolio",
        layout: "grid",
        items: [
          {
            title: "RF Signal Generator Enclosure",
            description:
              "Robust sheet metal enclosure for an RF signal generator platform. Heavy-duty construction provides EMI shielding and structural rigidity, with ventilated panels for sustained operation.",
            label: "Test & Measurement",
            image:
              "/case-studies/mechanicalCaseStudies/4/PG10_RENDER_28_OCT_2024_MG1.1.png",
            href: "/case-studies/rf-signal-generator-enclosure",
          },
          {
            title: "TRNDX Server",
            description:
              "Mechanically engineered server platform for high-density hardware integration, efficient thermal management, and reliable industrial deployment.",
            label: "Industrial Server",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/TRNDX_SERVER/TRNDX_SERVER_ASSM_RENDER_S2.92.png",
            href: "/case-studies/trndx-server",
          },
        ],
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
        title: "Portfolio",
        layout: "grid",
        items: [
          {
            title: "Rugged Communication Control System Enclosure",
            description:
              "Ultra-lightweight Al-alloy enclosure for defence communication systems. MIL-STD-810 qualified for vibration, shock, temperature, and humidity with full RF shielding integrity.",
            label: "Defence",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/SDR/SDR_RENDERING_11_JAN_2025_S1.1.png",
            href: "/case-studies/rugged-communication-control-system-enclosure",
          },
          {
            title: "Industrial Camera Controller Unit",
            description:
              "Compact docking station designed for secure device placement, efficient cable management, and reliable everyday usage in industrial environments.",
            label: "Industrial Automation",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/IDOCK/FRIZB_IDOCK_RENDER_02_MAY_2026_S1.15.png",
            href: "/case-studies/industrial-camera-controller-unit",
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
            description: "Dust-tight · Continuous immersion",
            detail: "(specified depth)",
            applications: "Subsea, underwater sensors",
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
            icon: <CircleDotDashed className="h-8 w-8" strokeWidth={1.75} />,
          },
          {
            title: "Test Validation",
            description:
              "All IP-rated designs validated at the nearest accredited test facility before production release. Fastener torque fully specified and documented.",
            icon: <ClipboardCheck className="h-8 w-8" strokeWidth={1.75} />,
          },
        ],
      },
      {
        kind: "portfolio",
        title: "Portfolio",
        layout: "grid",
        items: [
          {
            title: "4-Axis Gimbal",
            description:
              "Precision-engineered 4-axis gimbal system designed for smooth stabilization, dynamic balancing, and high-performance motion control applications.",
            label: "Marine / Satcom",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/GIMBAL/GIMBAL_4_AXIS.1.png",
            href: "/case-studies/gimbal",
          },
          {
            title: "EMF Flow Meter",
            description:
              "Compact multi-sensor enclosure with tool-free battery access, integrated antenna mounting, and desiccant cartridge support for extended outdoor deployment.",
            label: "Outdoor IoT",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/hydronet/1.png",
            href: "/case-studies/emf-flow-meter",
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
            icon: <TablerSettings2Icon className="h-8 w-8" />,
          },
          {
            title: "Electromechanical Integration",
            description:
              "Motor and actuator mounting, encoder alignment, harness routing within mechanical sub-systems.",
            icon: <TablerBoltIcon className="h-8 w-8" />,
          },
          {
            title: "Optical & Sensor Systems",
            description:
              "Mechanical design of optical assemblies and precision mounting structures for demanding environments.",
            icon: <Eye className="h-8 w-8" strokeWidth={1.75} />,
          },
          {
            title: "Cable Management",
            description:
              "EMI-segregated routing, strain relief design, bend radius compliance throughout the assembly.",
            icon: <PlugZap className="h-8 w-8" strokeWidth={1.75} />,
          },
        ],
      },
      {
        kind: "portfolio",
        title: "Portfolio",
        layout: "grid",
        items: [
          {
            title: "Footswitch",
            description:
              "Mechanically robust industrial footswitch designed for reliable hands-free control in demanding operational environments.",
            label: "Medical Systems",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/footswitch/FOOTSWITCH_27_APR_2026_S1.10.png",
            href: "/case-studies/footswitch",
          },
          {
            title: "600Kg Cable Tension Measurement System",
            description:
              "Rugged tension meter designed for precise industrial force measurement with durable construction and reliable field performance.",
            label: "Industrial Systems",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/tensionmeter/TM450LB_RENDERING_28_MAR_2025_S1.1png.10.png",
            href: "/case-studies/600kg-cable-tension-measurement-system",
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
            icon: <TablerRulerMeasureIcon className="h-8 w-8" />,
          },
          {
            title: "ASME Y14.5",
            description:
              "Full GD&T-annotated drawing sets. Any qualified machine shop can manufacture without verbal clarification.",
            icon: <TablerPencilPlusIcon className="h-8 w-8" />,
          },
          {
            title: "Package Contents",
            description:
              "Part drawings, assembly drawings, BOM, material callouts, surface finish callouts, and standard references.",
            icon: <TablerPackageIcon className="h-8 w-8" />,
          },
        ],
      },
      {
        kind: "portfolio",
        title: "Portfolio",
        layout: "grid",
        items: [
          {
            title: "Pneumatic Test Jig",
            description:
              "Pneumatic test fixture with precision alignment geometry and DFM-reviewed design for repeatable production testing and assembly validation.",
            label: "Test Equipment",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/pneumatic/PNEUMATIC_TEST_JIG_RENDER.2.1.png",
            href: "/case-studies/pneumatic-test-jig",
          },
          {
            title: "Industrial Splice Detector",
            description:
              "Ruggedised industrial splice detector enclosure with extruded aluminium heatsink body, M12 connectors, and DFM-reviewed geometry for factory floor deployment.",
            label: "Industrial",
            image:
              "/case-studies/mechanicalCaseStudies/2/SPLICE_DETECTOR_RENDER_2.4.png",
            href: "/case-studies/industrial-splice-detector",
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
      {
        kind: "portfolio",
        title: "Portfolio",
        layout: "grid",
        items: [
          {
            title: "Mega Watt Charging Station",
            description:
              "Precision-engineered mechanical assembly system designed for structural stability, modular integration, and manufacturing efficiency.",
            label: "EV / Power",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/MCS/1.png",
            href: "/case-studies/mega-watt-charging-station",
          },
          {
            title: "ECL Fuel Cell Generator",
            description:
              "Mechanically engineered power system platform designed for efficient thermal management, modular integration, and reliable industrial operation.",
            label: "Energy Systems",
            image:
              "https://d1yetprhniwywz.cloudfront.net/v2/case-studies/mechanical/ecl_fuel_cell/ECL_FUEL_CELL_GENERATOR_RENDER_08_MAY_2026_S1.10.png",
            href: "/case-studies/ecl-fuel-cell-generator",
          },
        ],
      },
    ],
  },
];

/* ── Sub-components ── */

function TablerOutlineIcon({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function TablerSettings2Icon({ className }: { className?: string }) {
  return (
    <TablerOutlineIcon className={className}>
      <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </TablerOutlineIcon>
  );
}

function TablerBoltIcon({ className }: { className?: string }) {
  return (
    <TablerOutlineIcon className={className}>
      <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
    </TablerOutlineIcon>
  );
}

function TablerRulerMeasureIcon({ className }: { className?: string }) {
  return (
    <TablerOutlineIcon className={className}>
      <path d="M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75" />
      <path d="M9 12v2" />
      <path d="M6 12v3" />
      <path d="M12 12v3" />
      <path d="M18 12v3" />
      <path d="M15 12v2" />
      <path d="M3 3v4" />
      <path d="M3 5h18" />
      <path d="M21 3v4" />
    </TablerOutlineIcon>
  );
}

function TablerPencilPlusIcon({ className }: { className?: string }) {
  return (
    <TablerOutlineIcon className={className}>
      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
      <path d="M13.5 6.5l4 4" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </TablerOutlineIcon>
  );
}

function TablerPackageIcon({ className }: { className?: string }) {
  return (
    <TablerOutlineIcon className={className}>
      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
      <path d="M12 12l8 -4.5" />
      <path d="M12 12l0 9" />
      <path d="M12 12l-8 -4.5" />
      <path d="M16 5.25l-8 4.5" />
    </TablerOutlineIcon>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="section-title flex items-center gap-3 py-6">
      <span className="shrink-0 text-[11.5px] font-bold uppercase tracking-[0.5px] text-black">
        {children}
      </span>
      <span className="h-px flex-1 bg-zinc-200" aria-hidden />
    </div>
  );
}

function SmallCards({ items }: { items: SmallCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-zinc-200 bg-white p-7 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.05)] transition-shadow duration-200 hover:shadow-[0_2px_6px_rgba(16,24,40,0.08),0_12px_32px_rgba(16,24,40,0.08)]"
        >
          <div className="mb-3 flex items-center gap-3">
            {item.icon ? (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center text-brand-500">
                {item.icon}
              </div>
            ) : null}
            <h4 className="text-base font-semibold leading-snug tracking-[-0.3px]">
              {item.title}
            </h4>
          </div>
          <p className="text-[14px] leading-[22px] text-[#4b5563]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function CheckGrid({ items }: { items: CheckItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
          <span className="text-[13.5px] leading-[21px] text-black">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: TableRow[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200">
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
                  className={`px-5 py-3.5 text-[13.5px] leading-[21px] text-black ${
                    cellIdx === 0
                      ? "border-r border-zinc-100 font-semibold text-black"
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
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-zinc-200 bg-white p-5"
          >
            <h4 className="mb-3 text-[11.5px] font-bold uppercase tracking-[0.5px]">
              {item.title}
            </h4>
            <p className="text-[13.5px] leading-[21px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {footnote ? (
        <p className="mt-6 text-center text-[11.5px] font-bold uppercase tracking-[0.5px]">
          {footnote}
        </p>
      ) : null}
    </div>
  );
}

const IP_CARD_STYLES: Record<string, string> = {
  IP65: "border-[#fce8c3] bg-[#fff8f0]",
  IP67: "border-[#bde0fa] bg-[#f0f9ff]",
  IP68: "border-[#b3f0d4] bg-[#f0fff8]",
};

function splitIpDescription(description: string) {
  const lastSep = description.lastIndexOf(" · ");
  if (lastSep === -1) {
    return { specs: description, applications: null };
  }

  return {
    specs: description.slice(0, lastSep),
    applications: description.slice(lastSep + 3),
  };
}

function IpCards({ items }: { items: IpCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-3">
      {items.map((item) => {
        const { specs, applications } = splitIpDescription(item.description);
        const cardStyle =
          IP_CARD_STYLES[item.rating] ?? "border-zinc-200 bg-white";

        return (
          <div
            key={item.rating}
            className={`rounded-lg border-2 p-[22px] text-center ${cardStyle}`}
          >
            <div className="text-[28px] font-bold tracking-[-0.02em] text-black">
              {item.rating}
            </div>
            <p className="mt-2 text-center text-[13.5px] leading-5">
              {specs}
              {applications ? (
                <>
                  <br />
                  {applications}
                </>
              ) : null}
            </p>
          </div>
        );
      })}
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
    <article className="group relative h-[380px] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_1px_3px_rgba(16,24,40,0.06),0_8px_24px_rgba(16,24,40,0.04)] transition-[box-shadow,border-color] duration-300 motion-reduce:transition-none hover:border-brand-500 hover:shadow-[0_2px_6px_rgba(243,49,23,0.12),0_16px_40px_rgba(16,24,40,0.08)] focus-within:border-brand-500">
      <div className="absolute inset-x-0 top-0 bottom-[112px] overflow-hidden bg-qmax-dark-grey">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain p-5 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] motion-reduce:transition-none group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      <div className="absolute inset-x-0 bottom-[32px] z-10 flex h-[80px] flex-col justify-center gap-1 bg-white px-6 pt-4 pb-1">
        {item.label ? (
          <p className="line-clamp-1 text-[11.5px] font-bold uppercase tracking-[0.5px] text-brand-500">
            {item.label}
          </p>
        ) : null}
        <h4 className="line-clamp-2 text-[15px] font-semibold leading-snug tracking-[-0.2px]">
          {item.title}
        </h4>
      </div>

      <div
        className="absolute inset-x-0 top-0 bottom-[32px] z-20 flex translate-y-full transform-gpu flex-col bg-white px-6 py-6 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] motion-reduce:transition-none group-hover:translate-y-0 group-focus-within:translate-y-0"
        aria-hidden
      >
        {item.label ? (
          <p className="text-[11.5px] font-bold uppercase tracking-[0.5px] text-brand-500">
            {item.label}
          </p>
        ) : null}
        <div className="flex flex-col gap-3 py-4">
          <h4 className="text-[17px] font-semibold leading-snug tracking-[-0.2px]">
            {item.title}
          </h4>
          <p className="line-clamp-4 text-[14px] leading-[21px] text-muted-foreground">
            {item.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-500">
            Read case study
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
          </span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] flex h-[32px] items-start bg-white px-6"
        aria-hidden
      >
        <p className="text-[11.5px] font-medium uppercase tracking-[0.4px] text-muted-foreground">
          Case study
        </p>
      </div>

      <Link
        href={item.href}
        className="absolute inset-0 z-30 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2"
        aria-label={`Read case study: ${item.title}`}
      />
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
        <div className="mt-4 flex flex-wrap items-center gap-4 [&_a]:mt-0">
          <ViewCaseLink href={item.href} />
          {item.tag ? (
            <span className="inline-block rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-white">
              {item.tag}
            </span>
          ) : null}
        </div>
      </div>
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-lg bg-white min-[900px]:h-[200px] min-[900px]:w-[280px]">
        <div className="absolute inset-3">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain object-center"
            sizes="(max-width: 900px) 100vw, 280px"
          />
        </div>
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
        <div className="hidden border-r border-zinc-800 px-4 py-3.5 min-[720px]:block">
          Analysis Type
        </div>
        <div className="hidden border-r border-zinc-800 px-4 py-3.5 min-[720px]:block">
          Standard
        </div>
        <div className="hidden px-4 py-3.5 min-[720px]:block">
          Expected Output
        </div>
      </div>
      {rows.map((row) => (
        <div
          key={row.type}
          className="grid grid-cols-1 border-b border-zinc-100 transition-colors last:border-b-0 hover:bg-[#fdfcfa] min-[720px]:grid-cols-[156px_186px_1fr]"
        >
          <div className="border-b border-zinc-100 px-4 py-3.5 text-[13.5px] font-semibold text-black min-[720px]:border-b-0 min-[720px]:border-r min-[720px]:border-zinc-100">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.5px] text-black min-[720px]:hidden">
              Analysis Type
            </span>
            {row.type}
          </div>
          <div className="border-b border-zinc-100 px-4 py-3.5 text-[13.5px] leading-[21px] text-black min-[720px]:border-b-0 min-[720px]:border-r min-[720px]:border-zinc-100">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.5px] text-black min-[720px]:hidden">
              Standard
            </span>
            {row.standard}
          </div>
          <div className="px-4 py-3.5 text-[13.5px] leading-[21px] text-black">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.5px] text-black min-[720px]:hidden">
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
          <div className="mb-3 flex items-center gap-3">
            {item.icon ? (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center text-brand-500">
                {item.icon}
              </div>
            ) : null}
            <h4 className="text-[11.5px] font-bold uppercase tracking-[0.5px]">
              {item.title}
            </h4>
          </div>
          <p className="text-[13.5px] leading-[21px]">
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
        <h2 className="mb-3 font-light leading-[1.1] tracking-[-0.02em] [font-size:clamp(28px,3.2vw,42px)]">
          {service.titleBefore}{" "}
          <span className="text-red-500">{service.titleAccent}</span>
        </h2>
        <p className="mb-5 text-[11.5px] font-bold uppercase tracking-[0.5px]">
          {service.subtitle}
        </p>
        <p className="mb-7 border-l-[3px] border-brand-500 pl-[18px] text-[15px] leading-[22.5px] text-justify">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {service.chips.map((chip) => (
            <span
              key={chip}
              className="whitespace-nowrap rounded-[3px] border border-[#e8e4de] bg-[#f5f3ef] px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.5px] text-black"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 py-12 max-[640px]:px-5 min-[640px]:px-8 min-[960px]:px-[max(1.5rem,var(--page-pad,4rem))] min-[960px]:py-[72px] min-[960px]:pl-[52px] [&>div:first-child_.section-title]:pt-0">
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
            className="mb-7 font-light leading-[1.15] tracking-[-0.01em] [font-size:clamp(32px,4vw,48px)]"
          >
            Our Core Engineering{" "}
            <span className="text-red-500">Capabilities</span>
          </h2>
          <p className="mx-auto max-w-[820px] text-[15px] leading-[22.5px]">
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
