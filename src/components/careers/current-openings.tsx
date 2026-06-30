"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Height of the fixed top navigation (h-16). The pinned stack sits below it.
const NAV_OFFSET = 64;

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
    imageUrl: "/careers/image2.png",
  },
  {
    id: 13,
    title: "Firmware & Embedded Intern",
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
    imageUrl: "  /careers/image3.png",
  },
  {
    id: 14,
    title: "RF & Antenna Intern",
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
    imageUrl: "/careers/image4.png",
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
    imageUrl: "/careers/image1.jpg",
  },
  {
    id: 16,
    title: "Mechanical & Industrial Design Intern",
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
    imageUrl: "/careers/image2.png",
  },
  {
    id: 17,
    title: "Software & Web Intern",
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

function JobCard({
  position,
  index,
  stacked = false,
}: {
  position: Position;
  index: number;
  stacked?: boolean;
}) {
  const isReversed = index % 2 !== 0;

  const [activeSection, setActiveSection] = useState<
    "responsibilities" | "requirements" | null
  >("responsibilities");

  const toggle = (key: "responsibilities" | "requirements") =>
    setActiveSection((prev) => (prev === key ? null : key));

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 w-full border-2 border-zinc-200 bg-white overflow-hidden rounded-xl transition-shadow duration-300 hover:border-zinc-300 ${
        stacked
          ? "lg:h-[70vh] lg:min-h-[70vh] lg:max-h-[calc(100vh-64px-1.5rem)] lg:grid-rows-[minmax(0,1fr)]"
          : "hover:shadow-xl"
      }`}
    >
      {/* Image */}
      <div
        className={`relative min-h-[12rem] ${
          stacked ? "lg:min-h-0 lg:h-full" : "sm:min-h-[14rem]"
        } ${isReversed ? "lg:order-2" : ""}`}
      >
        <img
          src={position.imageUrl || "/careers/image1.jpg"}
          alt={position.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={`p-8 sm:p-10 md:p-14 flex flex-col ${
          stacked ? "lg:p-10 lg:min-h-0 lg:overflow-hidden lg:h-full" : ""
        } ${isReversed ? "lg:order-1" : ""}`}
      >
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold pb-3 border-b-2 border-zinc-400 mb-4 text-foreground flex-shrink-0">
          {position.title}
        </h3>

        {/* Accordion sections. When stacked, this region scrolls its own overflow
            (data-card-scroll) so the scroll engine lets long card content scroll
            before stepping to the next card. */}
        <div
          {...(stacked
            ? { "data-card-scroll": "", tabIndex: 0 }
            : {})}
          className={`mb-6 pr-1 ${
            stacked
              ? "lg:flex-1 lg:min-h-0 lg:overflow-y-auto lg:mb-4 lg:[scrollbar-width:thin] focus:outline-none"
              : ""
          }`}
        >
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
            className="bg-zinc-950 text-white px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold hover:bg-zinc-900 transition-colors inline-flex items-center"
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
  activeIndex,
  onSelect,
}: {
  positions: Position[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <aside className="hidden lg:flex w-64 flex-shrink-0 flex-col h-[calc(100vh-64px)] sticky top-16 self-start">
      <div className="flex-1 min-h-0" aria-hidden="true" />
      <div
        data-nav-scroll
        className="h-[70vh] flex-shrink-0 overflow-y-auto [scrollbar-width:thin]"
      >
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
            const headingClassName =
              "text-xs font-semibold uppercase tracking-widest mb-1.5 pl-2 text-foreground";
            const HeadingTag =
              label === "Full Time Roles" || label === "Internships"
                ? "h2"
                : "p";

            return (
              <div key={type}>
                <HeadingTag className={headingClassName}>{label}</HeadingTag>
                <ul className="space-y-0.5">
                  {group.map((pos) => {
                    const globalIndex = positions.indexOf(pos);
                    const isActive = activeIndex === globalIndex;
                    return (
                      <li key={pos.id}>
                        <button
                          type="button"
                          onClick={() => onSelect(globalIndex)}
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
      <div className="flex-1 min-h-0" aria-hidden="true" />
    </aside>
  );
}

export function CurrentOpenings() {
  const stackWrapperRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Populated by the GSAP effect; SideNav clicks call through it to jump the
  // stack to a chosen card index (engaging the pin first if needed).
  const jumpToIndexRef = useRef<(index: number) => void>(() => {});

  // `null` until the client measures the viewport, so SSR / first paint render
  // the plain list (no layout shift, no hydration mismatch). Stacking is a
  // desktop-only enhancement.
  const [isLg, setIsLg] = useState<boolean | null>(null);
  // Mirror of the on-top card, drives the sidebar highlight and keeps off-screen
  // cards out of the tab order / accessibility tree.
  const [activeIndex, setActiveIndex] = useState(0);

  // Track the lg breakpoint. matchMedia keeps it in sync across resizes so the
  // stacking engine is set up / torn down when crossing 1024px.
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (!isLg) return;

    const wrapper = stackWrapperRef.current;
    const cards = cardRefs.current.filter(
      (card): card is HTMLDivElement => card !== null,
    );

    if (!wrapper || cards.length === 0) return;

    const totalCards = cards.length;

    if (totalCards === 1) {
      gsap.set(cards[0], { yPercent: 0, scale: 1, opacity: 1, zIndex: 1 });
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const STEP_DURATION = prefersReducedMotion ? 0 : 0.8;
    const WHEEL_THRESHOLD = 10;
    const TOUCH_THRESHOLD = 40;
    // A quiet gap longer than this starts a fresh gesture, so the next push is
    // read as new intent rather than the tail of the previous flick.
    const GESTURE_RESET_MS = 200;

    // The card stack is driven by a PAUSED timeline (one whole-number unit of
    // time per card), advanced directly by the gesture handlers. The pin only
    // holds the section in place — scroll position is never animated, so nothing
    // fights ScrollTrigger and there is no scrub flicker. Window scroll stays
    // parked inside the pin while stepping; reaching either end performs a
    // single instant hand-off so the page resumes native scrolling.
    let timeline: gsap.core.Timeline | undefined;
    let trigger: ScrollTrigger | undefined;

    let currentIndex = 0;
    let animating = false;
    // One queued step so a flick that arrives during the current animation isn't
    // dropped (keeps consecutive Magic Mouse / trackpad flicks responsive).
    let pendingDir = 0;
    // Rolling history of recent wheel-delta magnitudes, used to tell a deliberate
    // push apart from inertial momentum (Magic Mouse / trackpad), which decays.
    let wheelDeltas: number[] = [];
    let lastWheelTime = 0;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        const isFirstCard = index === 0;
        gsap.set(card, {
          yPercent: isFirstCard ? 0 : 102,
          scale: isFirstCard ? 1 : 0.98,
          opacity: 1,
          zIndex: index + 1,
          transformOrigin: "center center",
          force3D: true,
        });
      });

      timeline = gsap.timeline({ paused: true });
      for (let i = 1; i < totalCards; i += 1) {
        timeline
          .to(
            cards[i],
            { yPercent: 0, scale: 1, duration: 1, ease: "power1.out" },
            i - 1,
          )
          .to(
            cards[i - 1],
            { scale: 0.93, duration: 1, ease: "power1.out" },
            i - 1,
          );
      }

      trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: () => "top " + NAV_OFFSET + "px",
        end: () => "+=" + (totalCards - 1) * window.innerHeight,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          if (!self.isActive || !timeline) return;
          // Entering from the top → start on card 0; entering from below
          // (scrolling up out of the next section) → start on the last card.
          const entryIndex = self.direction === -1 ? totalCards - 1 : 0;
          currentIndex = entryIndex;
          gsap.killTweensOf(timeline);
          timeline.progress(entryIndex / (totalCards - 1));
          animating = false;
          pendingDir = 0;
          setActiveIndex(entryIndex);
        },
      });
    }, wrapper);

    if (!trigger || !timeline) {
      return () => {
        ctx.revert();
      };
    }

    const st = trigger;
    const tl = timeline;

    const goToCard = (index: number, instant = false) => {
      currentIndex = index;
      setActiveIndex(index);
      gsap.killTweensOf(tl);

      if (instant) {
        tl.time(index);
        animating = false;
        pendingDir = 0;
        return;
      }

      animating = true;
      gsap.to(tl, {
        time: index,
        duration: STEP_DURATION,
        ease: "power2.inOut",
        overwrite: true,
        onComplete: () => {
          animating = false;
          if (pendingDir !== 0) {
            const queued = pendingDir;
            pendingDir = 0;
            step(queued);
          }
        },
      });
    };

    // Hand the page back to native scrolling at the ends of the stack. Scroll is
    // parked inside the pin, so we jump just past the boundary; because the
    // pinned card and the just-unpinned card render identically, this is
    // visually seamless — only the scrollbar position changes. Force an instant
    // jump regardless of the page's (smooth) scroll-behavior, then restore it.
    const jumpTo = (y: number) => {
      const htmlEl = document.documentElement;
      const previous = htmlEl.style.scrollBehavior;
      htmlEl.style.scrollBehavior = "auto";
      window.scrollTo(0, y);
      requestAnimationFrame(() => {
        htmlEl.style.scrollBehavior = previous;
      });
    };
    const releaseDown = () => jumpTo(Math.ceil(st.end) + 1);
    const releaseUp = () => jumpTo(Math.max(0, Math.floor(st.start) - 1));

    const step = (dir: number) => {
      if (animating) return;
      const next = currentIndex + dir;
      if (next < 0) {
        releaseUp();
        return;
      }
      if (next > totalCards - 1) {
        releaseDown();
        return;
      }
      goToCard(next);
    };

    // Jump straight to a card (sidebar navigation). If the stack isn't pinned
    // yet, scroll into the pin from the nearest edge first, then step once the
    // pin has engaged on the next frame.
    const jumpToIndex = (index: number) => {
      if (index < 0 || index > totalCards - 1) return;
      if (st.isActive) {
        goToCard(index, true);
        return;
      }
      const enterFromBelow = window.scrollY > st.end;
      const targetY = enterFromBelow
        ? Math.max(0, Math.floor(st.end) - 1)
        : Math.ceil(st.start) + 1;
      const htmlEl = document.documentElement;
      const previous = htmlEl.style.scrollBehavior;
      htmlEl.style.scrollBehavior = "auto";
      window.scrollTo(0, targetY);
      requestAnimationFrame(() => {
        htmlEl.style.scrollBehavior = previous;
        ScrollTrigger.update();
        goToCard(index, true);
      });
    };
    jumpToIndexRef.current = jumpToIndex;

    // Allow nested scroll regions (card content, side nav) to consume the gesture
    // before the section hijacks it — mirrors Lenis' data-lenis-prevent idea.
    const canScrollWithin = (target: EventTarget | null, dir: number) => {
      let node = target instanceof Element ? target : null;
      while (node) {
        if (
          node.hasAttribute("data-card-scroll") ||
          node.hasAttribute("data-nav-scroll")
        ) {
          const canScroll = node.scrollHeight > node.clientHeight + 1;
          if (canScroll) {
            if (dir > 0) {
              return node.scrollTop + node.clientHeight < node.scrollHeight - 1;
            }
            return node.scrollTop > 1;
          }
          return false;
        }
        node = node.parentElement;
      }
      return false;
    };

    // Normalise wheel deltas to pixels so the threshold is meaningful for
    // line-mode (Firefox classic mouse) and page-mode wheels too.
    const normalizeDeltaY = (event: WheelEvent) => {
      if (event.deltaMode === 1) return event.deltaY * 16;
      if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
      return event.deltaY;
    };

    const averageOfLast = (values: number[], count: number) => {
      const from = Math.max(0, values.length - count);
      let sum = 0;
      for (let i = from; i < values.length; i += 1) sum += values[i];
      const len = values.length - from;
      return len ? sum / len : 0;
    };

    const onWheel = (event: WheelEvent) => {
      if (!st.isActive) return;
      const delta = normalizeDeltaY(event);
      const dir = delta > 0 ? 1 : -1;
      // Let an overflowing card scroll its own content first.
      if (canScrollWithin(event.target, dir)) return;
      event.preventDefault();

      // Track delta magnitudes so we can tell a deliberate flick apart from the
      // long inertial-momentum tail a Magic Mouse / trackpad emits after a swipe.
      const fresh = event.timeStamp - lastWheelTime > GESTURE_RESET_MS;
      if (fresh) wheelDeltas = [];
      lastWheelTime = event.timeStamp;
      wheelDeltas.push(Math.abs(delta));
      if (wheelDeltas.length > 100) wheelDeltas.shift();

      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      if (animating) {
        // A brand-new flick (after a quiet gap) during the current animation is
        // queued so it isn't dropped; the current flick's own momentum is not
        // "fresh", so it never queues itself.
        if (fresh) pendingDir = dir;
        return;
      }

      // Inertial momentum decelerates, so its most-recent deltas fall below the
      // earlier ones — ignore that tail. A real push (rising or sustained) fires
      // once here, so a single flick advances exactly one card while separate
      // flicks still advance card-by-card.
      if (averageOfLast(wheelDeltas, 10) < averageOfLast(wheelDeltas, 70))
        return;

      step(dir);
    };

    let touchStartY = 0;

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!st.isActive) return;
      const currentY = event.touches[0]?.clientY ?? touchStartY;
      const dir = touchStartY - currentY > 0 ? 1 : -1;
      // Block the page scroll while engaged so the swipe drives the stack only.
      if (!canScrollWithin(event.target, dir)) event.preventDefault();
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (!st.isActive) return;
      const diff =
        touchStartY - (event.changedTouches[0]?.clientY ?? touchStartY);
      if (Math.abs(diff) < TOUCH_THRESHOLD) return;
      const dir = diff > 0 ? 1 : -1;
      if (canScrollWithin(event.target, dir)) return;
      step(dir);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!st.isActive) return;
      const tag = (document.activeElement?.tagName ?? "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;

      let dir = 0;
      if (
        event.key === "ArrowDown" ||
        event.key === "PageDown" ||
        event.key === " "
      ) {
        dir = 1;
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        dir = -1;
      } else {
        return;
      }

      // Let the focused card region scroll its own overflow first.
      if (canScrollWithin(document.activeElement, dir)) return;
      event.preventDefault();
      step(dir);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      jumpToIndexRef.current = () => {};
      gsap.killTweensOf(tl);
      ctx.revert();
    };
  }, [isLg]);

  // Desktop: pinned, stacked cards stepped one-per-gesture.
  if (isLg) {
    return (
      <section className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 items-start">
            <SideNav
              positions={positions}
              activeIndex={activeIndex}
              onSelect={(index) => jumpToIndexRef.current(index)}
            />
            {/* The pinned element is a plain block child of the flex column
                (not the flex item itself) so ScrollTrigger's pin-spacer can't
                disturb the sticky sidebar's flex layout. */}
            <div className="flex-1 min-w-0">
              <div
                ref={stackWrapperRef}
                className="relative h-[calc(100vh-64px)] overflow-hidden"
              >
                {positions.map((position, index) => (
                  <div
                    key={position.id}
                    ref={(element) => {
                      cardRefs.current[index] = element;
                    }}
                    inert={index !== activeIndex}
                    aria-hidden={index !== activeIndex ? true : undefined}
                    className="absolute inset-0 flex items-center justify-center px-1 will-change-transform"
                  >
                    <JobCard position={position} index={index} stacked />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Mobile / tablet (and SSR / first paint): plain vertical list.
  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 pb-10 md:pb-14">
        <div className="flex gap-8 items-start">
          <div className="flex-1 min-w-0 space-y-8 lg:space-y-10">
            {positions.map((position, index) => (
              <div key={position.id} id={slugify(position.title)}>
                <JobCard position={position} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
