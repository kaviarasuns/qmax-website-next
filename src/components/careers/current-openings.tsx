'use client'

import { useState } from 'react'

type TabId = 'full-time' | 'part-time' | 'internships'

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const positions = [
  {
    id: 1,
    title: 'Hardware Design Engineer',
    category: 'Engineering',
    type: 'Full-time',
    responsibilities: [
      'System architecture definition and block diagram creation',
      'Analog, digital, power, and mixed-signal schematic design',
      'Component selection considering cost, availability, lifecycle',
      'Design for EMI/EMC, ESD, safety, and reliability',
      'Support PCB layout, bring-up, debugging, and validation',
      'Prepare schematics, BoM, test reports, and design notes',
    ],
    requirements: [
      'Strong fundamentals in analog & digital electronics',
      'Power supply design: LDOs, buck/boost, isolated supplies',
      'MCU/SoC interfacing (SPI, I2C, UART, Ethernet, USB)',
      'Hands-on debugging using DSO, logic analyzer, DMM',
      'EMI/ESD awareness and grounding concepts',
      'Familiarity with Altium / OrCAD / KiCad',
      'Ability to read datasheets and application notes critically',
    ],
    qualifications: [
      'BE / BTech in Electronics & Communication, Electrical, or Instrumentation Engineering',
    ],
    imageUrl: '/careers/image2.png',
  },
  {
    id: 2,
    title: 'Firmware Development Engineer',
    category: 'Engineering',
    type: 'Full-time',
    responsibilities: [
      'Firmware architecture and module-level design',
      'Bare-metal or RTOS-based firmware development',
      'Peripheral driver development',
      'Hardware bring-up and board-level debugging',
      'Code optimization, testing, and documentation',
      'Version control and release management',
    ],
    requirements: [
      'Strong C programming (mandatory)',
      'Good understanding of MCU architecture',
      'RTOS concepts: tasks, queues, semaphores, ISRs',
      'Peripheral drivers: GPIO, UART, SPI, I2C, ADC, PWM',
      'Debugging using JTAG/SWD',
      'Basic understanding of linker scripts and memory maps',
      'Git-based workflow',
    ],
    qualifications: [
      'BE / BTech in ECE, CSE, Embedded Systems, or Electrical Engineering',
      'Diploma holders with strong embedded C experience may be considered',
      'Interns: Final-year students with hands-on embedded projects',
    ],
    imageUrl: '/careers/image3.png',
  },
  {
    id: 3,
    title: 'Embedded Systems Test Engineer',
    category: 'Engineering',
    type: 'Full-time',
    responsibilities: [
      'Create test plans, test cases, and test procedures',
      'Functional, stress, regression, and integration testing',
      'Hardware bring-up assistance and failure analysis',
      'Interface testing (UART, CAN, Ethernet, USB)',
      'Maintain test logs, defect reports, and summaries',
    ],
    requirements: [
      'Ability to read schematics and block diagrams',
      'Strong lab discipline and documentation skills',
      'Hands-on use of DSO, DMM, power supplies',
      'Understanding of embedded interfaces',
      'Basic scripting (Python preferred)',
      'Methodical troubleshooting mindset',
    ],
    qualifications: [
      'Diploma / BE / BTech in Electronics, Electrical, or Instrumentation Engineering',
      'Fresh graduates with lab exposure are acceptable',
    ],
    imageUrl: '/careers/image5.png',
  },
  {
    id: 4,
    title: 'RF Design Engineer',
    category: 'Engineering',
    type: 'Full-time',
    responsibilities: [
      'RF circuit design (LNA, PA, filters, matching networks)',
      'Antenna design, tuning, and optimization',
      'RF simulation and validation',
      'RF PCB layout review and guidance',
      'RF testing and characterization',
    ],
    requirements: [
      'RF fundamentals: S-parameters, Smith chart, VSWR',
      'Matching network design and tuning',
      'Experience with GHz-range designs',
      'Familiarity with RF PCB materials (FR4, Rogers)',
      'Use of VNA, spectrum analyzer, signal generator',
      'Simulation tools: ADS / HFSS / CST',
    ],
    qualifications: [
      'BE / BTech in Electronics & Communication Engineering',
      'ME / MTech in RF / Microwave preferred',
    ],
    imageUrl: '/careers/image4.png',
  },
  {
    id: 5,
    title: 'Signal Integrity (SI) Engineer',
    category: 'Engineering',
    type: 'Full-time',
    responsibilities: [
      'SI analysis for DDR, PCIe, USB, Ethernet',
      'Stack-up planning and impedance calculation',
      'PCB layout review for high-speed routing',
      'Simulation and eye-diagram analysis',
      'Collaboration with PCB and hardware teams',
    ],
    requirements: [
      'Transmission line theory',
      'Differential pair routing concepts',
      'Return path and reference plane understanding',
      'High-speed connector and via modeling',
      'SI tools: HyperLynx, SIwave, or equivalent',
    ],
    qualifications: [
      'BE / BTech in ECE or Electrical Engineering',
      'ME / MTech preferred for advanced roles',
    ],
    imageUrl: '/careers/image7.png',
  },
  {
    id: 6,
    title: 'PCB Designer',
    category: 'Engineering',
    type: 'Full-time',
    responsibilities: [
      'Multi-layer PCB layout (analog, digital, RF, power)',
      'Controlled impedance routing',
      'High-speed interface routing',
      'DFM/DFA compliance',
      'Fabrication and assembly file generation',
    ],
    requirements: [
      'Strong Altium Designer skills',
      'Knowledge of PCB manufacturing constraints',
      'EMI-aware routing practices',
      'Stack-up and impedance coordination',
      'Ability to work closely with hardware engineers',
    ],
    qualifications: [
      'Diploma / BE / BTech in Electronics Engineering',
      'Skill matters more than degree',
    ],
    imageUrl: '/careers/image6.png',
  },
  {
    id: 7,
    title: 'PCB Librarian',
    category: 'Engineering',
    type: 'Full-time',
    responsibilities: [
      'Create and validate symbols and footprints',
      'Maintain version-controlled libraries',
      'Enforce naming conventions and standards',
      'Support designers during layout',
    ],
    requirements: [
      'Excellent attention to detail',
      'Strong understanding of packages and land patterns',
      'Altium library management',
      'Datasheet interpretation skills',
    ],
    qualifications: ['Diploma / BE / BTech in Electronics Engineering'],
    imageUrl: '/careers/image9.png',
  },
  {
    id: 8,
    title: 'Mechanical Design Engineer',
    category: 'Engineering',
    type: 'Full-time',
    responsibilities: [
      'Enclosure and product design',
      'Thermal and mechanical analysis considerations',
      'Manufacturing drawings and BOMs',
      'Coordination with electronics teams',
    ],
    requirements: [
      'SolidWorks / Creo / Fusion 360',
      'Sheet metal and plastic part design',
      'Manufacturing process understanding',
      'Practical tolerance knowledge',
    ],
    qualifications: ['Diploma / BE / BTech in Mechanical Engineering'],
    imageUrl: '/careers/image10.png',
  },
  {
    id: 9,
    title: 'Industrial Designer',
    category: 'Design',
    type: 'Full-time',
    responsibilities: [
      'Product styling and form development',
      'Ergonomic studies',
      'Concept sketches and renders',
      'Collaboration with mechanical engineers',
    ],
    requirements: [
      'Strong visual and aesthetic sense',
      'Tools: Rhino, KeyShot, Adobe Suite',
      'Understanding of manufacturing limitations',
      'Strong design portfolio (mandatory)',
    ],
    qualifications: [
      "Bachelor's degree in Industrial / Product Design",
      'Mechanical engineers with strong portfolio considered',
    ],
    imageUrl: '/careers/image11.png',
  },
  {
    id: 10,
    title: 'Full-Stack Web Developer',
    category: 'Software',
    type: 'Full-time',
    responsibilities: [
      'Frontend and backend development',
      'REST API implementation',
      'Database integration',
      'Deployment and maintenance',
    ],
    requirements: [
      'HTML, CSS, JavaScript',
      'React or equivalent frontend framework',
      'Backend: Node.js / Python / PHP',
      'SQL databases',
      'Git and basic DevOps exposure',
    ],
    qualifications: [
      'BE / BTech in Computer Science / IT',
      'MCA / BSc (CS) with strong portfolio acceptable',
    ],
    imageUrl: '/careers/image8.png',
  },
  {
    id: 11,
    title: 'Business Development Executive',
    category: 'Business',
    type: 'Full-time',
    responsibilities: [
      'Lead generation and qualification',
      'Client communication and follow-ups',
      'Proposal coordination with engineering teams',
      'CRM maintenance',
    ],
    requirements: [
      'Clear written and verbal communication',
      'Ability to understand technical discussions',
      'Discipline in follow-ups and tracking',
      'Professional email and proposal handling',
    ],
    qualifications: [
      "Any Bachelor's degree",
      'Engineering background preferred',
    ],
    imageUrl: '/careers/image12.png',
  },
  {
    id: 12,
    title: 'Hardware Design Intern',
    category: 'Engineering',
    type: 'Internship',
    responsibilities: [
      'Assist with block diagrams and schematic capture',
      'Support component selection and BoM preparation',
      'Help with bring-up, debugging, and validation activities',
      'Document design notes and test observations',
    ],
    requirements: [
      'Strong analog and digital electronics fundamentals',
      'Basic familiarity with power supply and MCU interfacing concepts',
      'Ability to read datasheets and application notes',
      'Hands-on lab exposure with DSO and DMM',
    ],
    qualifications: [
      'Final-year BE / BTech in ECE, EEE, or related discipline',
    ],
    imageUrl: '/careers/image12.png',
  },
  {
    id: 13,
    title: 'Firmware / Embedded Intern',
    category: 'Engineering',
    type: 'Internship',
    responsibilities: [
      'Implement module-level embedded C code',
      'Work with peripheral drivers (GPIO, UART, SPI, I2C)',
      'Support board bring-up and debugging',
      'Write basic test cases and maintain technical notes',
    ],
    requirements: [
      'Strong C programming fundamentals',
      'Understanding of MCU architecture and memory basics',
      'Awareness of RTOS concepts (tasks, queues, ISRs)',
      'Basic Git workflow familiarity',
    ],
    qualifications: [
      'Final-year BE / BTech in ECE, CSE, Embedded Systems, or Electrical Engineering',
    ],
    imageUrl: '/careers/image1.jpg',
  },
  {
    id: 14,
    title: 'RF / Antenna Intern',
    category: 'Engineering',
    type: 'Internship',
    responsibilities: [
      'Assist with RF matching and basic circuit evaluations',
      'Support antenna tuning and measurement setup',
      'Help prepare simulation and validation summaries',
      'Document test observations for team reviews',
    ],
    requirements: [
      'Basic RF fundamentals (S-parameters, VSWR)',
      'Exposure to RF lab tools is preferred',
      'Interest in GHz-range wireless systems',
      'Strong analytical and documentation skills',
    ],
    qualifications: ['Final-year BE / BTech in ECE or related field'],
    imageUrl: '/careers/image2.png',
  },
  {
    id: 15,
    title: 'PCB Design Intern',
    category: 'Engineering',
    type: 'Internship',
    responsibilities: [
      'Assist with multi-layer PCB routing',
      'Follow DFM/DFA and design-rule constraints',
      'Support fabrication output checks',
      'Help maintain symbols and footprints',
    ],
    requirements: [
      'Basic PCB layout fundamentals',
      'Familiarity with manufacturing constraints',
      'Attention to detail in footprint and symbol quality',
      'Collaboration with hardware designers',
    ],
    qualifications: [
      'Diploma / Final-year BE / BTech in Electronics or related stream',
    ],
    imageUrl: '/careers/image3.png',
  },
  {
    id: 16,
    title: 'Mechanical / Industrial Design Intern',
    category: 'Design',
    type: 'Internship',
    responsibilities: [
      'Support 3D modeling and concept development',
      'Assist with enclosure feasibility and tolerance reviews',
      'Create concept renders and design documentation',
      'Collaborate with electronics and mechanical teams',
    ],
    requirements: [
      'Hands-on CAD and product design exposure',
      'Understanding of manufacturing constraints',
      'Good visual communication and presentation skills',
      'Portfolio demonstrating design process',
    ],
    qualifications: [
      "Final-year BE / BTech Mechanical or Bachelor's in Industrial/Product Design",
    ],
    imageUrl: '/careers/image4.png',
  },
  {
    id: 17,
    title: 'Software / Web Intern',
    category: 'Software',
    type: 'Internship',
    responsibilities: [
      'Develop UI and API features under mentor guidance',
      'Support database integration and testing',
      'Fix bugs and improve code quality',
      'Participate in release and deployment tasks',
    ],
    requirements: [
      'Strong fundamentals in HTML, CSS, and JavaScript',
      'Basic React or equivalent framework knowledge',
      'Backend exposure in Node.js or Python',
      'Basic SQL and Git familiarity',
    ],
    qualifications: ['Final-year BE / BTech in CSE / IT or equivalent'],
    imageUrl: '/careers/image5.png',
  },
  {
    id: 18,
    title: 'Testing & Validation Intern',
    category: 'Engineering',
    type: 'Internship',
    responsibilities: [
      'Prepare test plans, test cases, and execution reports',
      'Run functional, regression, and integration tests',
      'Assist in failure analysis and issue reproduction',
      'Maintain logs and defect documentation',
    ],
    requirements: [
      'Ability to read schematics and block diagrams',
      'Strong lab discipline and methodical troubleshooting',
      'Hands-on DSO and DMM usage',
      'Basic scripting in Python preferred',
    ],
    qualifications: [
      'Diploma / Final-year BE / BTech in Electronics, Electrical, or Instrumentation',
    ],
    imageUrl: '/careers/image6.png',
  },
  {
    id: 19,
    title: 'Business Development Intern',
    category: 'Business',
    type: 'Internship',
    responsibilities: [
      'Research and qualify potential leads',
      'Support client follow-ups and CRM updates',
      'Assist with proposal and presentation preparation',
      'Coordinate with engineering teams on requirements',
    ],
    requirements: [
      'Strong written and verbal communication',
      'Ability to understand technical discussions',
      'Disciplined follow-up and tracking skills',
      'Professional email and documentation practices',
    ],
    qualifications: [
      "Any Bachelor's degree; engineering background preferred",
    ],
    imageUrl: '/careers/image7.png',
  },
]

type Position = (typeof positions)[number]

const fullTimePositions = positions.filter((p) => p.type === 'Full-time')
const internPositions = positions.filter((p) => p.type === 'Internship')

const tabs: { id: TabId; label: string; count: number }[] = [
  { id: 'full-time', label: 'Full Time Roles', count: fullTimePositions.length },
  { id: 'part-time', label: 'Part Time Roles', count: 0 },
  { id: 'internships', label: 'Internships', count: internPositions.length },
]

type SectionKey = 'responsibilities' | 'requirements' | 'qualifications'

function SectionAccordion({
  title,
  items,
  isOpen,
  onToggle,
}: {
  title: string
  items: string[]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-zinc-300">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-2 py-2 text-left cursor-pointer group"
      >
        <h4 className="text-xs sm:text-sm font-bold text-zinc-800 tracking-wide group-hover:text-zinc-900 transition-colors">
          {title}
        </h4>
        <svg
          className={`w-4 h-4 text-zinc-500 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul className="space-y-1 pb-3 pt-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-2 text-xs sm:text-sm text-zinc-700"
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
  )
}

function JobCard({ position, index }: { position: Position; index: number }) {
  const isReversed = index % 2 !== 0

  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    responsibilities: false,
    requirements: false,
    qualifications: false,
  })

  const toggle = (key: SectionKey) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <div
      id={slugify(position.title)}
      className="grid grid-cols-1 lg:grid-cols-2 border border-zinc-200 bg-white overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Image */}
      <div
        className={`relative min-h-[260px] sm:min-h-[300px] lg:min-h-0 ${isReversed ? 'lg:order-2' : ''}`}
      >
        <img
          src={position.imageUrl || '/careers/image1.jpg'}
          alt={position.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={`p-5 sm:p-6 md:p-8 flex flex-col ${isReversed ? 'lg:order-1' : ''}`}
      >
        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 pb-2 border-b-2 border-zinc-400 mb-3">
          {position.title}
        </h3>

        {/* Accordion sections */}
        <div className="mb-6">
          <SectionAccordion
            title="Key Responsibilities"
            items={position.responsibilities}
            isOpen={openSections.responsibilities}
            onToggle={() => toggle('responsibilities')}
          />
          <SectionAccordion
            title="Requirements"
            items={position.requirements}
            isOpen={openSections.requirements}
            onToggle={() => toggle('requirements')}
          />
          <SectionAccordion
            title="Qualification"
            items={position.qualifications}
            isOpen={openSections.qualifications}
            onToggle={() => toggle('qualifications')}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto pt-2">
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
  )
}

interface CurrentOpeningsProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function CurrentOpenings({ activeTab, onTabChange }: CurrentOpeningsProps) {
  const activePositions =
    activeTab === 'full-time'
      ? fullTimePositions
      : activeTab === 'internships'
        ? internPositions
        : []

  return (
    <section className="bg-white">
      {/* Sticky Tab Bar */}
      <div
        id="careers-tab-bar"
        className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 -mb-px overflow-x-auto justify-end">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative px-4 sm:px-6 py-3.5 text-sm sm:text-base font-medium transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
                  activeTab === tab.id
                    ? 'border-zinc-900 text-zinc-900'
                    : 'border-transparent text-zinc-400 hover:text-zinc-600 hover:border-zinc-300'
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span
                    className={`ml-2 text-xs px-1.5 py-0.5 rounded-full transition-colors ${
                      activeTab === tab.id
                        ? 'bg-zinc-900 text-white'
                        : 'bg-zinc-100 text-zinc-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {activePositions.length > 0 ? (
          <div key={activeTab} className="space-y-8 md:space-y-10">
            {activePositions.map((position, index) => (
              <JobCard key={position.id} position={position} index={index} />
            ))}
          </div>
        ) : (
          <div key={activeTab} className="py-20 text-center">
            <p className="text-zinc-500 text-base">
              No part-time positions are currently available. Check back soon
              for updates.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
