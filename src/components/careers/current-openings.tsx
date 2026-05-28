"use client";

import { useState, useEffect, useRef } from "react";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const positions = [
  {
    id: 1,
    title: "Hardware Design Engineer",
    category: "Engineering",
    type: "Full-time",
    responsibilities: [
      "System architecture definition and block diagram creation",
      "Analog, digital, power, and mixed-signal schematic design",
      "Component selection considering cost, availability, lifecycle",
      "Design for EMI/EMC, ESD, safety, and reliability",
      "Support PCB layout, bring-up, debugging, and validation",
      "Prepare schematics, BoM, test reports, and design notes",
    ],
    requirements: [
      "Strong fundamentals in analog & digital electronics",
      "Power supply design: LDOs, buck/boost, isolated supplies",
      "MCU/SoC interfacing (SPI, I2C, UART, Ethernet, USB)",
      "Hands-on debugging using DSO, logic analyzer, DMM",
      "EMI/ESD awareness and grounding concepts",
      "Familiarity with Altium / OrCAD / KiCad",
      "Ability to read datasheets and application notes critically",
    ],
    qualifications: [
      "BE / BTech in Electronics & Communication, Electrical, or Instrumentation Engineering",
    ],
    imageUrl: "/careers/image2.png",
  },
  {
    id: 2,
    title: "Firmware Development Engineer",
    category: "Engineering",
    type: "Full-time",
    responsibilities: [
      "Firmware architecture and module-level design",
      "Bare-metal or RTOS-based firmware development",
      "Peripheral driver development, hardware bring-up, and board-level debugging",
      "Code optimization, testing, documentation, and release management",
    ],
    requirements: [
      "Strong C programming (mandatory)",
      "Good understanding of MCU architecture",
      "RTOS concepts: tasks, queues, semaphores, ISRs",
      "Peripheral drivers: GPIO, UART, SPI, I2C, ADC, PWM",
      "JTAG/SWD debugging, linker scripts, memory maps, and Git-based workflow",
    ],
    qualifications: [
      "BE / BTech in ECE, CSE, Embedded Systems, or Electrical Engineering; diploma holders with strong embedded C experience or final-year students with hands-on embedded projects also considered",
    ],
    imageUrl: "/careers/image3.png",
  },
  {
    id: 3,
    title: "Embedded Systems Test Engineer",
    category: "Engineering",
    type: "Full-time",
    responsibilities: [
      "Create test plans, test cases, and test procedures",
      "Functional, stress, regression, and integration testing",
      "Hardware bring-up assistance and failure analysis",
      "Interface testing (UART, CAN, Ethernet, USB)",
      "Maintain test logs, defect reports, and summaries",
    ],
    requirements: [
      "Ability to read schematics and block diagrams",
      "Strong lab discipline and documentation skills",
      "Hands-on use of DSO, DMM, power supplies",
      "Understanding of embedded interfaces",
      "Basic scripting (Python preferred)",
      "Methodical troubleshooting mindset",
    ],
    qualifications: [
      "Diploma / BE / BTech in Electronics, Electrical, or Instrumentation Engineering",
      "Fresh graduates with lab exposure are acceptable",
    ],
    imageUrl: "/careers/image5.png",
  },
  {
    id: 4,
    title: "RF Design Engineer",
    category: "Engineering",
    type: "Full-time",
    responsibilities: [
      "RF circuit design (LNA, PA, filters, matching networks)",
      "Antenna design, tuning, and optimization",
      "RF simulation and validation",
      "RF PCB layout review and guidance",
      "RF testing and characterization",
    ],
    requirements: [
      "RF fundamentals: S-parameters, Smith chart, VSWR",
      "Matching network design and tuning",
      "Experience with GHz-range designs",
      "Familiarity with RF PCB materials (FR4, Rogers)",
      "Use of VNA, spectrum analyzer, signal generator",
      "Simulation tools: ADS / HFSS / CST",
    ],
    qualifications: [
      "BE / BTech in Electronics & Communication Engineering",
      "ME / MTech in RF / Microwave preferred",
    ],
    imageUrl: "/careers/image4.png",
  },
  {
    id: 5,
    title: "Signal Integrity (SI) Engineer",
    category: "Engineering",
    type: "Full-time",
    responsibilities: [
      "SI analysis for DDR, PCIe, USB, Ethernet",
      "Stack-up planning and impedance calculation",
      "PCB layout review for high-speed routing",
      "Simulation and eye-diagram analysis",
      "Collaboration with PCB and hardware teams",
    ],
    requirements: [
      "Transmission line theory",
      "Differential pair routing concepts",
      "Return path and reference plane understanding",
      "High-speed connector and via modeling",
      "SI tools: HyperLynx, SIwave, or equivalent",
    ],
    qualifications: [
      "BE / BTech in ECE or Electrical Engineering",
      "ME / MTech preferred for advanced roles",
    ],
    imageUrl: "/careers/image7.png",
  },
  {
    id: 6,
    title: "PCB Designer",
    category: "Engineering",
    type: "Full-time",
    responsibilities: [
      "Multi-layer PCB layout (analog, digital, RF, power)",
      "Controlled impedance routing",
      "High-speed interface routing",
      "DFM/DFA compliance",
      "Fabrication and assembly file generation",
    ],
    requirements: [
      "Strong Altium Designer skills",
      "Knowledge of PCB manufacturing constraints",
      "EMI-aware routing practices",
      "Stack-up and impedance coordination",
      "Ability to work closely with hardware engineers",
    ],
    qualifications: [
      "Diploma / BE / BTech in Electronics Engineering",
      "Skill matters more than degree",
    ],
    imageUrl: "/careers/image6.png",
  },
  {
    id: 7,
    title: "PCB Librarian",
    category: "Engineering",
    type: "Full-time",
    responsibilities: [
      "Create and validate symbols and footprints",
      "Maintain version-controlled libraries",
      "Enforce naming conventions and standards",
      "Support designers during layout",
    ],
    requirements: [
      "Excellent attention to detail",
      "Strong understanding of packages and land patterns",
      "Altium library management",
      "Datasheet interpretation skills",
    ],
    qualifications: ["Diploma / BE / BTech in Electronics Engineering"],
    imageUrl: "/careers/image9.png",
  },
  {
    id: 8,
    title: "Mechanical Design Engineer",
    category: "Engineering",
    type: "Full-time",
    responsibilities: [
      "Enclosure and product design",
      "Thermal and mechanical analysis considerations",
      "Manufacturing drawings and BOMs",
      "Coordination with electronics teams",
    ],
    requirements: [
      "SolidWorks / Creo / Fusion 360",
      "Sheet metal and plastic part design",
      "Manufacturing process understanding",
      "Practical tolerance knowledge",
    ],
    qualifications: ["Diploma / BE / BTech in Mechanical Engineering"],
    imageUrl: "/careers/image10.png",
  },
  {
    id: 9,
    title: "Industrial Designer",
    category: "Design",
    type: "Full-time",
    responsibilities: [
      "Product styling and form development",
      "Ergonomic studies",
      "Concept sketches and renders",
      "Collaboration with mechanical engineers",
    ],
    requirements: [
      "Strong visual and aesthetic sense",
      "Tools: Rhino, KeyShot, Adobe Suite",
      "Understanding of manufacturing limitations",
      "Strong design portfolio (mandatory)",
    ],
    qualifications: [
      "Bachelor's degree in Industrial / Product Design",
      "Mechanical engineers with strong portfolio considered",
    ],
    imageUrl: "/careers/image11.png",
  },
  {
    id: 10,
    title: "Full-Stack Web Developer",
    category: "Software",
    type: "Full-time",
    responsibilities: [
      "Frontend and backend development",
      "REST API implementation",
      "Database integration",
      "Deployment and maintenance",
    ],
    requirements: [
      "HTML, CSS, JavaScript",
      "React or equivalent frontend framework",
      "Backend: Node.js / Python / PHP",
      "SQL databases",
      "Git and basic DevOps exposure",
    ],
    qualifications: [
      "BE / BTech in Computer Science / IT",
      "MCA / BSc (CS) with strong portfolio acceptable",
    ],
    imageUrl: "/careers/image8.png",
  },
  {
    id: 11,
    title: "Business Development Executive",
    category: "Business",
    type: "Full-time",
    responsibilities: [
      "Lead generation and qualification",
      "Client communication and follow-ups",
      "Proposal coordination with engineering teams",
      "CRM maintenance",
    ],
    requirements: [
      "Clear written and verbal communication",
      "Ability to understand technical discussions",
      "Discipline in follow-ups and tracking",
      "Professional email and proposal handling",
    ],
    qualifications: [
      "Any Bachelor's degree",
      "Engineering background preferred",
    ],
    imageUrl: "/careers/image12.png",
  },
  {
    id: 12,
    title: "Hardware Design Intern",
    category: "Engineering",
    type: "Internship",
    responsibilities: [
      "Assist with block diagrams and schematic capture",
      "Support component selection and BoM preparation",
      "Help with bring-up, debugging, and validation activities",
      "Document design notes and test observations",
    ],
    requirements: [
      "Strong analog and digital electronics fundamentals",
      "Basic familiarity with power supply and MCU interfacing concepts",
      "Ability to read datasheets and application notes",
      "Hands-on lab exposure with DSO and DMM",
    ],
    qualifications: [
      "Final-year BE / BTech in ECE, EEE, or related discipline",
    ],
    imageUrl: "/careers/image12.png",
  },
  {
    id: 13,
    title: "Firmware / Embedded Intern",
    category: "Engineering",
    type: "Internship",
    responsibilities: [
      "Implement module-level embedded C code",
      "Work with peripheral drivers (GPIO, UART, SPI, I2C)",
      "Support board bring-up and debugging",
      "Write basic test cases and maintain technical notes",
    ],
    requirements: [
      "Strong C programming fundamentals",
      "Understanding of MCU architecture and memory basics",
      "Awareness of RTOS concepts (tasks, queues, ISRs)",
      "Basic Git workflow familiarity",
    ],
    qualifications: [
      "Final-year BE / BTech in ECE, CSE, Embedded Systems, or Electrical Engineering",
    ],
    imageUrl: "/careers/image1.jpg",
  },
  {
    id: 14,
    title: "RF / Antenna Intern",
    category: "Engineering",
    type: "Internship",
    responsibilities: [
      "Assist with RF matching and basic circuit evaluations",
      "Support antenna tuning and measurement setup",
      "Help prepare simulation and validation summaries",
      "Document test observations for team reviews",
    ],
    requirements: [
      "Basic RF fundamentals (S-parameters, VSWR)",
      "Exposure to RF lab tools is preferred",
      "Interest in GHz-range wireless systems",
      "Strong analytical and documentation skills",
    ],
    qualifications: ["Final-year BE / BTech in ECE or related field"],
    imageUrl: "/careers/image2.png",
  },
  {
    id: 15,
    title: "PCB Design Intern",
    category: "Engineering",
    type: "Internship",
    responsibilities: [
      "Assist with multi-layer PCB routing",
      "Follow DFM/DFA and design-rule constraints",
      "Support fabrication output checks",
      "Help maintain symbols and footprints",
    ],
    requirements: [
      "Basic PCB layout fundamentals",
      "Familiarity with manufacturing constraints",
      "Attention to detail in footprint and symbol quality",
      "Collaboration with hardware designers",
    ],
    qualifications: [
      "Diploma / Final-year BE / BTech in Electronics or related stream",
    ],
    imageUrl: "/careers/image3.png",
  },
  {
    id: 16,
    title: "Mechanical / Industrial Design Intern",
    category: "Design",
    type: "Internship",
    responsibilities: [
      "Support 3D modeling and concept development",
      "Assist with enclosure feasibility and tolerance reviews",
      "Create concept renders and design documentation",
      "Collaborate with electronics and mechanical teams",
    ],
    requirements: [
      "Hands-on CAD and product design exposure",
      "Understanding of manufacturing constraints",
      "Good visual communication and presentation skills",
      "Portfolio demonstrating design process",
    ],
    qualifications: [
      "Final-year BE / BTech Mechanical or Bachelor's in Industrial/Product Design",
    ],
    imageUrl: "/careers/image4.png",
  },
  {
    id: 17,
    title: "Software / Web Intern",
    category: "Software",
    type: "Internship",
    responsibilities: [
      "Develop UI and API features under mentor guidance",
      "Support database integration and testing",
      "Fix bugs and improve code quality",
      "Participate in release and deployment tasks",
    ],
    requirements: [
      "Strong fundamentals in HTML, CSS, and JavaScript",
      "Basic React or equivalent framework knowledge",
      "Backend exposure in Node.js or Python",
      "Basic SQL and Git familiarity",
    ],
    qualifications: ["Final-year BE / BTech in CSE / IT or equivalent"],
    imageUrl: "/careers/image5.png",
  },
  {
    id: 18,
    title: "Testing & Validation Intern",
    category: "Engineering",
    type: "Internship",
    responsibilities: [
      "Prepare test plans, test cases, and execution reports",
      "Run functional, regression, and integration tests",
      "Assist in failure analysis and issue reproduction",
      "Maintain logs and defect documentation",
    ],
    requirements: [
      "Ability to read schematics and block diagrams",
      "Strong lab discipline and methodical troubleshooting",
      "Hands-on DSO and DMM usage",
      "Basic scripting in Python preferred",
    ],
    qualifications: [
      "Diploma / Final-year BE / BTech in Electronics, Electrical, or Instrumentation",
    ],
    imageUrl: "/careers/image6.png",
  },
  {
    id: 19,
    title: "Business Development Intern",
    category: "Business",
    type: "Internship",
    responsibilities: [
      "Research and qualify potential leads",
      "Support client follow-ups and CRM updates",
      "Assist with proposal and presentation preparation",
      "Coordinate with engineering teams on requirements",
    ],
    requirements: [
      "Strong written and verbal communication",
      "Ability to understand technical discussions",
      "Disciplined follow-up and tracking skills",
      "Professional email and documentation practices",
    ],
    qualifications: ["Any Bachelor's degree; engineering background preferred"],
    imageUrl: "/careers/image7.png",
  },
];

type Position = (typeof positions)[number];

function SectionAccordion({
  title,
  items,
  isOpen,
  onToggle,
  showChevron = true,
}: {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
  showChevron?: boolean;
}) {
  return (
    <div className="border-b border-zinc-300">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        disabled={!showChevron}
        className={`w-full flex items-center justify-between gap-2 py-2 text-left group ${
          showChevron ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <h4 className="text-xs sm:text-sm font-bold tracking-wide transition-colors text-foreground">
          {title}
        </h4>
        {showChevron && (
          <svg
            className={`w-4 h-4 text-zinc-500 transition-transform duration-300 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <ul className="space-y-1 pb-3 pt-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-2 text-xs sm:text-sm text-foreground"
            >
              <span className="text-zinc-400 flex-shrink-0 leading-5">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function JobCard({ position, index }: { position: Position; index: number }) {
  const isReversed = index % 2 !== 0;

  const [activeSection, setActiveSection] = useState<
    "responsibilities" | "requirements" | null
  >("responsibilities");

  const toggle = (key: "responsibilities" | "requirements") =>
    setActiveSection((prev) => (prev === key ? null : key));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[calc(100vh-9rem)] w-full border-2 border-zinc-200 bg-white overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-xl hover:border-zinc-300">
      {/* Image */}
      <div
        className={`relative min-h-[50vh] lg:min-h-0 ${isReversed ? "lg:order-2" : ""}`}
      >
        <img
          src={position.imageUrl || "/careers/image1.jpg"}
          alt={position.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={`p-8 sm:p-10 md:p-14 flex flex-col ${isReversed ? "lg:order-1" : ""}`}
      >
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold pb-3 border-b-2 border-zinc-400 mb-4 text-foreground">
          {position.title}
        </h3>

        {/* Accordion sections */}
        <div className="flex-1 min-h-0 overflow-y-auto mb-6 lg:mb-0 pr-1">
          <SectionAccordion
            title="Key Responsibilities"
            items={position.responsibilities}
            isOpen={activeSection === "responsibilities"}
            onToggle={() => toggle("responsibilities")}
          />
          <SectionAccordion
            title="Requirements"
            items={position.requirements}
            isOpen={activeSection === "requirements"}
            onToggle={() => toggle("requirements")}
          />
          <SectionAccordion
            title="Qualification"
            items={position.qualifications}
            isOpen={true}
            onToggle={() => {}}
            showChevron={false}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 pt-2 flex-shrink-0 lg:mt-3">
          <a
            href="https://careers.qmaxsys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors inline-flex items-center"
          >
            Apply Now
          </a>
          <a
            href="https://careers.qmaxsys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-300 text-zinc-600 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold hover:border-zinc-900 hover:text-zinc-900 transition-colors inline-flex items-center"
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  );
}

function SideNav({
  positions,
  activeId,
}: {
  positions: Position[];
  activeId: string | null;
}) {
  const scrollTo = (title: string) => {
    const id = slugify(title);
    const el = document.getElementById(id);
    if (!el) return;
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 self-start sticky top-20">
      <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
        {/* <p className="text-[10px] font-semibold uppercase tracking-widest mb-3 pl-2 text-muted-foreground">
          Jump to
        </p> */}
        <nav className="space-y-5">
          {(
            [
              { type: "Full-time", label: "Full Time Roles" },
              { type: "Part-time", label: "Part Time Roles" },
              { type: "Internship", label: "Internships" },
            ] as const
          ).map(({ type, label }) => {
            const group = positions.filter((p) => p.type === type);
            if (group.length === 0) return null;
            return (
              <div key={type}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1.5 pl-2 text-foreground">
                  {label}
                </p>
                <ul className="space-y-0.5">
                  {group.map((pos) => {
                    const id = slugify(pos.title);
                    const isActive = activeId === id;
                    return (
                      <li key={pos.id}>
                        <button
                          type="button"
                          onClick={() => scrollTo(pos.title)}
                          className={`w-full text-left text-sm px-3 py-2 rounded-md transition-colors cursor-pointer leading-snug ${
                            isActive
                              ? "text-red-500 font-semibold"
                              : "text-foreground hover:bg-zinc-50"
                          }`}
                        >
                          {pos.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export function CurrentOpenings() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const ids = positions.map((p) => slugify(p.title));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-0 pb-10 md:pb-14">
        <div className="flex gap-8 items-start">
          <SideNav positions={positions} activeId={activeId} />
          <div className="flex-1 min-w-0 space-y-6 lg:space-y-0">
            {positions.map((position, index) => (
              <div
                key={position.id}
                id={slugify(position.title)}
                className="lg:h-[calc(100vh-4rem)] lg:flex lg:items-center"
              >
                <JobCard position={position} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
