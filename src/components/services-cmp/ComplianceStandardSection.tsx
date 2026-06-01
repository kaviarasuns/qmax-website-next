import Link from "next/link";

export type ComplianceStandardItem = {
  code: string;
  description: string;
};

export type ComplianceCategory = {
  title: string;
  items: ComplianceStandardItem[];
};

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
  sectionHeadingId?: string;
};

export function ComplianceStandardsSection({
  title = "Built for regulated industries",
  description = "Qmax Systems designs to stringent global standards so hardware holds up under medical, aerospace, and industrial certification.",
  categories = DEFAULT_CATEGORIES,
  sectionHeadingId = "compliance-standards-heading",
}: ComplianceStandardsSectionProps) {
  return (
    <section
      className="bg-[#09090B] px-6 py-16 text-white lg:px-8 lg:py-20"
      aria-labelledby={sectionHeadingId}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-[820px]">
          <h2
            id={sectionHeadingId}
            className="text-center text-3xl font-light tracking-tight text-white md:text-[45px] md:leading-[1.1] md:tracking-[-0.03em]"
          >
            {title}
          </h2>
          <p className="mt-4 text-center text-base leading-relaxed text-zinc-400 md:text-lg md:leading-7">
            {description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-lg border border-zinc-800 bg-[#111114] p-8"
            >
              <h3 className="text-[22px] font-bold tracking-tight text-white">
                {category.title}
              </h3>
              <ul className="mt-4 list-none">
                {category.items.map((item) => (
                  <li
                    key={item.code}
                    className="border-t border-zinc-800 py-2.5 text-base leading-relaxed text-zinc-300"
                  >
                    <span className="font-bold text-white">{item.code}</span>
                    {" — "}
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
