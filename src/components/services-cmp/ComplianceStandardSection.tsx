import Link from "next/link";

export type ComplianceStandardItem = {
  code: string;
  description: string;
};

export type ComplianceCategory = {
  title: string;
  items: ComplianceStandardItem[];
};

export const POWER_ELECTRONICS_COMPLIANCE_CATEGORIES: ComplianceCategory[] = [
  {
    title: "Automotive",
    items: [
      {
        code: "ISO 26262",
        description: "functional safety (ASIL)",
      },
      {
        code: "AEC-Q100",
        description: "component qualification",
      },
      {
        code: "CISPR 25",
        description: "vehicle EMC limits",
      },
    ],
  },
  {
    title: "Medical",
    items: [
      {
        code: "IEC 60601-1",
        description: "patient safety and isolation",
      },
      {
        code: "ISO 13485",
        description: "quality management",
      },
    ],
  },
  {
    title: "Industrial",
    items: [
      {
        code: "IEC 61000",
        description: "electromagnetic immunity",
      },
      {
        code: "UL 60950 / 62368-1",
        description: "equipment safety",
      },
    ],
  },
  // {
  //   title: "Aerospace",
  //   items: [
  //     {
  //       code: "MIL-STD-461",
  //       description: "EMI control",
  //     },
  //     {
  //       code: "DO-160",
  //       description: "environmental conditions",
  //     },
  //   ],
  // },
];

const DEFAULT_CATEGORIES: ComplianceCategory[] = [
  {
    title: "Medical",
    items: [
      {
        code: "ISO 13485",
        description: "quality management for medical devices",
      },
      {
        code: "IEC 60601-1",
        description: "signal isolation and patient safety",
      },
    ],
  },
  {
    title: "Aerospace",
    items: [
      {
        code: "MIL-STD-461",
        description: "EMI control requirements",
      },
      {
        code: "DO-160",
        description: "environmental conditions and test procedures",
      },
    ],
  },
  {
    title: "Industrial",
    items: [
      {
        code: "IPC-2221 / 2222",
        description: "PCB design standards",
      },
      {
        code: "IEC 61000",
        description: "electromagnetic immunity",
      },
    ],
  },
];

export type ComplianceStandardsSectionProps = {
  title?: string;
  description?: string;
  categories?: ComplianceCategory[];
  /** Max columns on large screens; actual columns follow `categories.length` */
  columns?: 3 | 4;
  sectionHeadingId?: string;
};

function getComplianceGridClassName(count: number, maxColumns: 3 | 4): string {
  const cols = Math.min(count, maxColumns);

  switch (cols) {
    case 4:
      return "grid gap-6 sm:grid-cols-2 xl:grid-cols-4";
    case 3:
      return "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";
    case 2:
      return "grid gap-6 sm:grid-cols-2";
    default:
      return "grid gap-6";
  }
}

export function ComplianceStandardsSection({
  title = "Built for regulated industries",
  description = "Qmax Systems designs to stringent global standards so hardware holds up under medical, aerospace, and industrial certification.",
  categories = DEFAULT_CATEGORIES,
  columns = 3,
  sectionHeadingId = "compliance-standards-heading",
}: ComplianceStandardsSectionProps) {
  const gridClassName = getComplianceGridClassName(categories.length, columns);
  return (
    <section
      className="bg-zinc-900 px-6 py-16 text-white lg:px-8 lg:py-20"
      aria-labelledby={sectionHeadingId}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12">
          <h2
            id={sectionHeadingId}
            className="text-center text-2xl font-light  text-white capitalize sm:text-3xl md:whitespace-nowrap md:text-[45px]"
          >
            {title === "Built for regulated industries" ? (
              <>
                Built for regulated{" "}
                <span className="text-red-500">industries</span>
              </>
            ) : title ===
              "Designed for the world's most stringent regulators" ? (
              <>
                Designed for the world&apos;s most{" "}
                <span className="text-red-500">stringent regulators</span>
              </>
            ) : title === "Compliance & Standards" ? (
              <>
                Compliance & <span className="text-red-500">Standards</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-[820px] text-center text-base leading-relaxed text-zinc-400 md:text-lg md:leading-7">
            {description}
          </p>
        </div>

        <div className={gridClassName}>
          {categories.map((category) => (
            <article
              key={category.title}
              className="group rounded-lg border border-zinc-800 bg-black p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-red-500 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.4),0_20px_40px_-15px_rgba(239,68,68,0.35)]"
            >
              <h3 className="text-[22px] font-bold  text-white transition-colors duration-300 group-hover:text-red-500">
                {category.title}
              </h3>
              <ul className="mt-4 list-none">
                {category.items.map((item) => (
                  <li
                    key={item.code}
                    className="border-t border-zinc-800 py-2.5 text-base leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:border-red-500/30"
                  >
                    <span className="font-bold text-white">{item.code}</span>
                    {" - "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-zinc-400">
          Standards references:{" "}
          <Link
            href="https://www.iec.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-[3px] transition-colors hover:text-red-500"
          >
            IEC
          </Link>
          ,{" "}
          <Link
            href="https://www.jedec.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-[3px] transition-colors hover:text-red-500"
          >
            JEDEC (JESD204B/C)
          </Link>
          ,{" "}
          <Link
            href="https://www.ipc.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-[3px] transition-colors hover:text-red-500"
          >
            IPC
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
