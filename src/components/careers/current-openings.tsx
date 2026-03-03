'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, Search } from 'lucide-react'

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
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Design and develop electronic hardware for embedded, industrial, automotive, RF, and IoT products from concept to production',
    responsibilities: [
      'System architecture definition and block diagram creation',
      'Analog, digital, power, and mixed-signal schematic design',
      'Component selection considering cost, availability, lifecycle',
      'Design for EMI/EMC, ESD, safety, and reliability',
      'Support PCB layout, bring-up, debugging, and validation',
      'Prepare schematics, BoM, test reports, and design notes'
    ],
    requirements: [
      'Strong fundamentals in analog & digital electronics',
      'Power supply design: LDOs, buck/boost, isolated supplies',
      'MCU/SoC interfacing (SPI, I2C, UART, Ethernet, USB)',
      'Hands-on debugging using DSO, logic analyzer, DMM',
      'EMI/ESD awareness and grounding concepts',
      'Familiarity with Altium / OrCAD / KiCad',
      'Ability to read datasheets and application notes critically'
    ],
    // skills: [
    //   { category: 'Design Tools', items: ['Altium Designer', 'Eagle CAD', 'LTspice', 'Cadence'] },
    //   { category: 'Technologies', items: ['Embedded Systems', 'Circuit Design', 'PCB Layout', 'Power Electronics'] },
    //   { category: 'Communication', items: ['Technical Documentation', 'Cross-team Collaboration'] }
    // ],
    qualifications: [
      'BE / BTech in Electronics & Communication, Electrical, or Instrumentation Engineering',
      'ME / MTech is a plus, not mandatory',
      'Interns: Final-year students or recent graduates with strong fundamentals'
    ],
    imageUrl: '/careers/image2.png'
  },
  {
    id: 2,
    title: 'Firmware Development Engineer',
    category: 'Engineering',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Develop reliable, maintainable firmware for MCU/MPU-based embedded systems.',
    responsibilities: [
      'Firmware architecture and module-level design',
      'Bare-metal or RTOS-based firmware development',
      'Peripheral driver development',
      'Hardware bring-up and board-level debugging',
      'Code optimization, testing, and documentation',
      'Version control and release management'
    ],
    requirements: [
      'Strong C programming (mandatory)',
      'Good understanding of MCU architecture',
      'RTOS concepts: tasks, queues, semaphores, ISRs',
      'Peripheral drivers: GPIO, UART, SPI, I2C, ADC, PWM',
      'Debugging using JTAG/SWD',
      'Basic understanding of linker scripts and memory maps',
      'Git-based workflow'
    ],
    // skills: [
    //   { category: 'Programming', items: ['C', 'C++', 'Assembly', 'Python'] },
    //   { category: 'Protocols', items: ['UART', 'SPI', 'I2C', 'CAN', 'Ethernet'] },
    //   { category: 'Tools', items: ['Git', 'JIRA', 'Debuggers', 'IDEs'] }
    // ],
    qualifications: [
      'BE / BTech in ECE, CSE, Embedded Systems, or Electrical Engineering',
      'Diploma holders with strong embedded C experience may be considered',
      'Interns: Final-year students with hands-on embedded projects'
    ],
    imageUrl: '/careers/image3.png'
  },
  {
    id: 3,
    title: 'Embedded Systems Test Engineer',
    category: 'Engineering',
    level: 'Entry',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Test and validate embedded hardware and firmware using structured test methods.',
    responsibilities: [
      'Create test plans, test cases, and test procedures',
      'Functional, stress, regression, and integration testing',
      'Hardware bring-up assistance and failure analysis',
      'Interface testing (UART, CAN, Ethernet, USB)',
      'Maintain test logs, defect reports, and summaries'
    ],
    requirements: [
      'Ability to read schematics and block diagrams',
      'Strong lab discipline and documentation skills',
      'Hands-on use of DSO, DMM, power supplies',
      'Understanding of embedded interfaces',
      'Basic scripting (Python preferred)',
      'Methodical troubleshooting mindset'
    ],
    // skills: [],
    qualifications: [
      'Diploma / BE / BTech in Electronics, Electrical, or Instrumentation Engineering',
      'Fresh graduates with lab exposure are acceptable'
    ],
    imageUrl: '/careers/image5.png'
  },
  {
    id: 4,
    title: 'RF Design Engineer',
    category: 'Engineering',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Design RF circuits, antennas, and microwave subsystems for wireless products.',
    responsibilities: [
      'RF circuit design (LNA, PA, filters, matching networks)',
      'Antenna design, tuning, and optimization',
      'RF simulation and validation',
      'RF PCB layout review and guidance',
      'RF testing and characterization'
    ],
    requirements: [
      'RF fundamentals: S-parameters, Smith chart, VSWR',
      'Matching network design and tuning',
      'Experience with GHz-range designs',
      'Familiarity with RF PCB materials (FR4, Rogers)',
      'Use of VNA, spectrum analyzer, signal generator',
      'Simulation tools: ADS / HFSS / CST'
    ],
    // skills: [],
    qualifications: [
      'BE / BTech in Electronics & Communication Engineering',
      'ME / MTech in RF / Microwave preferred'
    ],
    imageUrl: '/careers/image4.png'
  },
  {
    id: 5,
    title: 'Signal Integrity (SI) Engineer',
    category: 'Engineering',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Ensure signal integrity for high-speed digital interfaces in complex systems.',
    responsibilities: [
      'SI analysis for DDR, PCIe, USB, Ethernet',
      'Stack-up planning and impedance calculation',
      'PCB layout review for high-speed routing',
      'Simulation and eye-diagram analysis',
      'Collaboration with PCB and hardware teams'
    ],
    requirements: [
      'Transmission line theory',
      'Differential pair routing concepts',
      'Return path and reference plane understanding',
      'High-speed connector and via modeling',
      'SI tools: HyperLynx, SIwave, or equivalent'
    ],
    // skills: [],
    qualifications: [
      'BE / BTech in ECE or Electrical Engineering',
      'ME / MTech preferred for advanced roles'
    ],
    imageUrl: '/careers/image7.png'
  },
  {
    id: 6,
    title: 'PCB Designer',
    category: 'Engineering',
    level: 'Entry-Mid',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Create production-ready PCB layouts for electronic products.',
    responsibilities: [
      'Multi-layer PCB layout (analog, digital, RF, power)',
      'Controlled impedance routing',
      'High-speed interface routing',
      'DFM/DFA compliance',
      'Fabrication and assembly file generation'
    ],
    requirements: [
      'Strong Altium Designer skills',
      'Knowledge of PCB manufacturing constraints',
      'EMI-aware routing practices',
      'Stack-up and impedance coordination',
      'Ability to work closely with hardware engineers'
    ],
    // skills: [],
    qualifications: [
      'Diploma / BE / BTech in Electronics Engineering',
      'Skill matters more than degree'
    ],
    imageUrl: '/careers/image6.png'
  },
  {
    id: 7,
    title: 'PCB Librarian',
    category: 'Engineering',
    level: 'Entry-Mid',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Maintain high-quality schematic symbols and PCB footprints.',
    responsibilities: [
      'Create and validate symbols and footprints',
      'Maintain version-controlled libraries',
      'Enforce naming conventions and standards',
      'Support designers during layout'
    ],
    requirements: [
      'Excellent attention to detail',
      'Strong understanding of packages and land patterns',
      'Altium library management',
      'Datasheet interpretation skills'
    ],
    // skills: [],
    qualifications: [
      'Diploma / BE / BTech in Electronics Engineering'
    ],
    imageUrl: '/careers/image9.png'
  },
  {
    id: 8,
    title: 'Mechanical Design Engineer',
    category: 'Engineering',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Design mechanical enclosures and structures for electronic products.',
    responsibilities: [
      'Enclosure and product design',
      'Thermal and mechanical analysis considerations',
      'Manufacturing drawings and BOMs',
      'Coordination with electronics teams'
    ],
    requirements: [
      'SolidWorks / Creo / Fusion 360',
      'Sheet metal and plastic part design',
      'Manufacturing process understanding',
      'Practical tolerance knowledge'
    ],
    // skills: [],
    qualifications: [
      'Diploma / BE / BTech in Mechanical Engineering'
    ],
    imageUrl: '/careers/image10.png'
  },
  {
    id: 9,
    title: 'Industrial Designer',
    category: 'Design',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Define product aesthetics, ergonomics, and usability.',
    responsibilities: [
      'Product styling and form development',
      'Ergonomic studies',
      'Concept sketches and renders',
      'Collaboration with mechanical engineers'
    ],
    requirements: [
      'Strong visual and aesthetic sense',
      'Tools: Rhino, KeyShot, Adobe Suite',
      'Understanding of manufacturing limitations',
      'Strong design portfolio (mandatory)'
    ],
    // skills: [],
    qualifications: [
      "Bachelor's degree in Industrial / Product Design",
      'Mechanical engineers with strong portfolio considered'
    ],
    imageUrl: '/careers/image11.png'
  },
  {
    id: 10,
    title: 'Full-Stack Web Developer',
    category: 'Software',
    level: 'Entry-Mid',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Develop and maintain web applications for internal and customer-facing platforms.',
    responsibilities: [
      'Frontend and backend development',
      'REST API implementation',
      'Database integration',
      'Deployment and maintenance'
    ],
    requirements: [
      'HTML, CSS, JavaScript',
      'React or equivalent frontend framework',
      'Backend: Node.js / Python / PHP',
      'SQL databases',
      'Git and basic DevOps exposure'
    ],
    // skills: [],
    qualifications: [
      'BE / BTech in Computer Science / IT',
      'MCA / BSc (CS) with strong portfolio acceptable'
    ],
    imageUrl: '/careers/image8.png'
  },
  {
    id: 11,
    title: 'Business Development Executive',
    category: 'Business',
    level: 'Entry',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Generate and qualify leads for engineering services.',
    responsibilities: [
      'Lead generation and qualification',
      'Client communication and follow-ups',
      'Proposal coordination with engineering teams',
      'CRM maintenance'
    ],
    requirements: [
      'Clear written and verbal communication',
      'Ability to understand technical discussions',
      'Discipline in follow-ups and tracking',
      'Professional email and proposal handling'
    ],
    // skills: [],
    qualifications: [
      "Any Bachelor's degree",
      'Engineering background preferred'
    ],
    imageUrl: '/careers/image12.png'
  },
  {
    id: 12,
    title: 'Hardware Design Intern',
    category: 'Engineering',
    level: 'Final-year / Recent Graduate',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Support electronic hardware design from architecture and schematics to validation.',
    responsibilities: [
      'Assist with block diagrams and schematic capture',
      'Support component selection and BoM preparation',
      'Help with bring-up, debugging, and validation activities',
      'Document design notes and test observations'
    ],
    requirements: [
      'Strong analog and digital electronics fundamentals',
      'Basic familiarity with power supply and MCU interfacing concepts',
      'Ability to read datasheets and application notes',
      'Hands-on lab exposure with DSO and DMM'
    ],
    skills: [
      { category: 'Core', items: ['Analog Electronics', 'Digital Electronics', 'Power Basics'] },
      { category: 'Tools', items: ['Altium or KiCad', 'DSO', 'DMM'] },
      { category: 'Work Style', items: ['Documentation', 'Troubleshooting'] }
    ],
    qualifications: ['Final-year BE / BTech in ECE, EEE, or related discipline'],
    imageUrl: '/careers/image12.png'
  },
  {
    id: 13,
    title: 'Firmware / Embedded Intern',
    category: 'Engineering',
    level: 'Final-year / Recent Graduate',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Develop and test firmware modules for MCU/MPU-based embedded systems.',
    responsibilities: [
      'Implement module-level embedded C code',
      'Work with peripheral drivers (GPIO, UART, SPI, I2C)',
      'Support board bring-up and debugging',
      'Write basic test cases and maintain technical notes'
    ],
    requirements: [
      'Strong C programming fundamentals',
      'Understanding of MCU architecture and memory basics',
      'Awareness of RTOS concepts (tasks, queues, ISRs)',
      'Basic Git workflow familiarity'
    ],
    skills: [
      { category: 'Programming', items: ['C', 'Embedded C'] },
      { category: 'Interfaces', items: ['GPIO', 'UART', 'SPI', 'I2C'] },
      { category: 'Tools', items: ['JTAG/SWD Debugging', 'Git'] }
    ],
    qualifications: ['Final-year BE / BTech in ECE, CSE, Embedded Systems, or Electrical Engineering'],
    imageUrl: '/careers/image1.jpg'
  },
  {
    id: 14,
    title: 'RF / Antenna Intern',
    category: 'Engineering',
    level: 'Final-year / Recent Graduate',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Support RF design, simulation, and antenna tuning for wireless products.',
    responsibilities: [
      'Assist with RF matching and basic circuit evaluations',
      'Support antenna tuning and measurement setup',
      'Help prepare simulation and validation summaries',
      'Document test observations for team reviews'
    ],
    requirements: [
      'Basic RF fundamentals (S-parameters, VSWR)',
      'Exposure to RF lab tools is preferred',
      'Interest in GHz-range wireless systems',
      'Strong analytical and documentation skills'
    ],
    skills: [
      { category: 'Core', items: ['RF Basics', 'Antenna Concepts', 'Matching Networks'] },
      { category: 'Tools', items: ['VNA', 'Spectrum Analyzer', 'Signal Generator'] },
      { category: 'Software', items: ['ADS or HFSS (preferred)'] }
    ],
    qualifications: ['Final-year BE / BTech in ECE or related field'],
    imageUrl: '/careers/image2.png'
  },
  {
    id: 15,
    title: 'PCB Design Intern',
    category: 'Engineering',
    level: 'Final-year / Recent Graduate',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Create production-ready PCB layouts and support component library tasks.',
    responsibilities: [
      'Assist with multi-layer PCB routing',
      'Follow DFM/DFA and design-rule constraints',
      'Support fabrication output checks',
      'Help maintain symbols and footprints'
    ],
    requirements: [
      'Basic PCB layout fundamentals',
      'Familiarity with manufacturing constraints',
      'Attention to detail in footprint and symbol quality',
      'Collaboration with hardware designers'
    ],
    skills: [
      { category: 'CAD', items: ['Altium Designer', 'KiCad'] },
      { category: 'Design', items: ['Layout', 'Routing', 'Impedance Basics'] },
      { category: 'Quality', items: ['DFM', 'Library Management', 'Datasheet Reading'] }
    ],
    qualifications: ['Diploma / Final-year BE / BTech in Electronics or related stream'],
    imageUrl: '/careers/image3.png'
  },
  {
    id: 16,
    title: 'Mechanical / Industrial Design Intern',
    category: 'Design',
    level: 'Final-year / Recent Graduate',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Contribute to enclosure design, ergonomics, and product form development.',
    responsibilities: [
      'Support 3D modeling and concept development',
      'Assist with enclosure feasibility and tolerance reviews',
      'Create concept renders and design documentation',
      'Collaborate with electronics and mechanical teams'
    ],
    requirements: [
      'Hands-on CAD and product design exposure',
      'Understanding of manufacturing constraints',
      'Good visual communication and presentation skills',
      'Portfolio demonstrating design process'
    ],
    skills: [
      { category: 'Design Tools', items: ['SolidWorks or Fusion 360', 'Rhino', 'KeyShot'] },
      { category: 'Design Practice', items: ['Ergonomics', 'Styling', 'Concept Development'] },
      { category: 'Collaboration', items: ['Cross-functional Communication'] }
    ],
    qualifications: ['Final-year BE / BTech Mechanical or Bachelor’s in Industrial/Product Design'],
    imageUrl: '/careers/image4.png'
  },
  {
    id: 17,
    title: 'Software / Web Intern',
    category: 'Software',
    level: 'Final-year / Recent Graduate',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Build frontend and backend modules for internal and customer-facing web platforms.',
    responsibilities: [
      'Develop UI and API features under mentor guidance',
      'Support database integration and testing',
      'Fix bugs and improve code quality',
      'Participate in release and deployment tasks'
    ],
    requirements: [
      'Strong fundamentals in HTML, CSS, and JavaScript',
      'Basic React or equivalent framework knowledge',
      'Backend exposure in Node.js or Python',
      'Basic SQL and Git familiarity'
    ],
    skills: [
      { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
      { category: 'Backend', items: ['Node.js or Python', 'REST APIs', 'SQL'] },
      { category: 'Workflow', items: ['Git', 'Debugging', 'Documentation'] }
    ],
    qualifications: ['Final-year BE / BTech in CSE / IT or equivalent'],
    imageUrl: '/careers/image5.png'
  },
  {
    id: 18,
    title: 'Testing & Validation Intern',
    category: 'Engineering',
    level: 'Final-year / Recent Graduate',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Test and validate embedded hardware and firmware using structured test methods.',
    responsibilities: [
      'Prepare test plans, test cases, and execution reports',
      'Run functional, regression, and integration tests',
      'Assist in failure analysis and issue reproduction',
      'Maintain logs and defect documentation'
    ],
    requirements: [
      'Ability to read schematics and block diagrams',
      'Strong lab discipline and methodical troubleshooting',
      'Hands-on DSO and DMM usage',
      'Basic scripting in Python preferred'
    ],
    skills: [
      { category: 'Testing', items: ['Functional Testing', 'Regression Testing', 'Defect Tracking'] },
      { category: 'Interfaces', items: ['UART', 'CAN', 'Ethernet', 'USB'] },
      { category: 'Tools', items: ['DSO', 'DMM', 'Python'] }
    ],
    qualifications: ['Diploma / Final-year BE / BTech in Electronics, Electrical, or Instrumentation'],
    imageUrl: '/careers/image6.png'
  },
  {
    id: 19,
    title: 'Business Development Intern',
    category: 'Business',
    level: 'Final-year / Recent Graduate',
    location: 'Chennai, India',
    type: 'Internship',
    description: 'Support lead generation, proposal coordination, and business communication workflows.',
    responsibilities: [
      'Research and qualify potential leads',
      'Support client follow-ups and CRM updates',
      'Assist with proposal and presentation preparation',
      'Coordinate with engineering teams on requirements'
    ],
    requirements: [
      'Strong written and verbal communication',
      'Ability to understand technical discussions',
      'Disciplined follow-up and tracking skills',
      'Professional email and documentation practices'
    ],
    skills: [
      { category: 'Business', items: ['Lead Generation', 'CRM', 'Proposal Coordination'] },
      { category: 'Marketing', items: ['SEO Basics', 'Digital Marketing', 'AI Marketing Awareness'] },
      { category: 'Communication', items: ['Client Interaction', 'Reporting'] }
    ],
    qualifications: ['Any Bachelor’s degree; engineering background preferred'],
    imageUrl: '/careers/image7.png'
  }
]

type Position = (typeof positions)[number]

function JobCard({ position, isExpanded, onToggle }: { position: Position; isExpanded: boolean; onToggle: () => void }) {
  const detailsId = `job-details-${position.id}`

  return (
    <Card id={slugify(position.title)} className={`overflow-hidden border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        className="w-full cursor-pointer p-6 text-left transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-zinc-900">
              {position.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600">{position.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="outline" className="border-zinc-300 text-zinc-700">{position.type}</Badge>
              <Badge variant="outline" className="border-zinc-300 text-zinc-700">{position.category}</Badge>
            </div>
          </div>

          {!isExpanded && (
            <div className="hidden h-24 w-40 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 sm:block">
              <img
                src={position.imageUrl || '/careers/image1.jpg'}
                alt={`${position.title} role preview`}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <ChevronDown
            className={`h-5 w-5 flex-shrink-0 text-zinc-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div id={detailsId} className="border-t border-zinc-200 bg-zinc-50 px-6 py-6">
          {/* Desktop: two-column layout. Mobile: single column */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* Left content: single-column stack for details */}
            <div className="grid grid-cols-1 gap-6">

              {/* Responsibilities */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4">
                <h4 className="mb-3 font-semibold text-zinc-900">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {position.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-zinc-700">
                      <span className="font-semibold text-zinc-500">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4">
                <h4 className="mb-3 font-semibold text-zinc-900">Requirements</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-zinc-700">
                      <span className="font-semibold text-zinc-500">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right sidebar: Image + Qualifications + CTA */}
            <div className="flex flex-col gap-5 h-full">
              <div className="relative w-full flex-[3] min-h-[16rem] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                <img
                  src={position.imageUrl || '/careers/image1.jpg'}
                  alt={position.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Qualifications */}
              <div>
                <h4 className="mb-3 font-semibold text-zinc-900">Qualifications</h4>
                <ul className="space-y-2">
                  {position.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-zinc-700">
                      <span className="font-semibold text-zinc-500">•</span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto border-t border-zinc-200 pt-4">
                <a href="https://careers.qmaxsys.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-zinc-900 text-white hover:bg-zinc-800">
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </Card>
  )
}

export function CurrentOpenings({ hideHeader = false }: { hideHeader?: boolean }) {

  const [selectedTab, setSelectedTab] = useState<'all' | 'interns'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {}
    positions.forEach(p => (initial[p.id] = true))
    return initial
  })

  const basePositions =
    selectedTab === 'interns'
      ? positions.filter(p => p.type.toLowerCase().includes('intern'))
      : positions.filter(p => !p.type.toLowerCase().includes('intern'))

  const locations = ['all', ...Array.from(new Set(basePositions.map(p => p.location))).sort()]
  const categories = ['all', ...Array.from(new Set(basePositions.map(p => p.category))).sort()]

  const normalizedSearch = searchTerm.trim().toLowerCase()

  const filteredPositions = basePositions.filter((position) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      `${position.title} ${position.description} ${position.level} ${position.type}`
        .toLowerCase()
        .includes(normalizedSearch)
    const matchesLocation = locationFilter === 'all' || position.location === locationFilter
    const matchesCategory = categoryFilter === 'all' || position.category === categoryFilter

    return matchesSearch && matchesLocation && matchesCategory
  })

  const hasActiveFilters = normalizedSearch.length > 0 || locationFilter !== 'all' || categoryFilter !== 'all'
  const isAllExpanded = filteredPositions.length > 0 && filteredPositions.every(p => expandedCards[p.id])

  const toggleExpandAll = () => {
    if (isAllExpanded) {
      const newExpanded = { ...expandedCards }
      filteredPositions.forEach(p => newExpanded[p.id] = false)
      setExpandedCards(newExpanded)
    } else {
      const newExpanded: Record<number, boolean> = { ...expandedCards }
      filteredPositions.forEach(p => newExpanded[p.id] = true)
      setExpandedCards(newExpanded)
    }
  }

  const toggleCard = (id: number) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const clearFilters = () => {
    setSearchTerm('')
    setLocationFilter('all')
    setCategoryFilter('all')
  }

  return (
    <section id="openings" className="bg-white py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        {!hideHeader && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">Current Openings</h2>
            <p className="text-lg text-zinc-600">
              The following positions are open for full-time roles.
            </p>
          </div>
        )}

        {/* Role Filter */}
        <div className="mb-6 rounded-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <Button
                variant={selectedTab === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedTab('all')}
                className={selectedTab === 'all' ? 'border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800' : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'}
              >
                All Roles
              </Button>
              <Button
                variant={selectedTab === 'interns' ? 'default' : 'outline'}
                onClick={() => setSelectedTab('interns')}
                className={selectedTab === 'interns' ? 'border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800' : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'}
              >
                Internships
              </Button>
            </div>

            <div className="flex items-center gap-2">
              {/* <Badge variant="outline" className="border-zinc-300 bg-white text-zinc-700">
                {filteredPositions.length} role{filteredPositions.length === 1 ? '' : 's'}
              </Badge> */}
              <Button variant="ghost" onClick={toggleExpandAll} className="text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900">
                {isAllExpanded ? 'Collapse All' : 'Expand All'}
              </Button>
            </div>
          </div>

          {/* <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
            <div className="relative md:col-span-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, level, or keyword"
                className="border-zinc-300 bg-white pl-9 text-zinc-900 placeholder:text-zinc-500"
              />
            </div>

            <select
              aria-label="Filter by location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-800 outline-none transition focus:ring-2 focus:ring-zinc-300"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>

            <select
              aria-label="Filter by category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-10 rounded-md border border-zinc-300 bg-white px-3 text-sm text-zinc-800 outline-none transition focus:ring-2 focus:ring-zinc-300"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-sm text-zinc-600">Filters applied. Showing matching roles only.</p>
              <Button variant="ghost" onClick={clearFilters} className="h-8 px-2 text-zinc-700 hover:bg-zinc-200">
                Clear Filters
              </Button>
            </div>
          )} */}
        </div>

        {/* Positions Grid */}
        <div className="space-y-4">
          {filteredPositions.length > 0 ? (
            filteredPositions.map(position => (
              <JobCard
                key={position.id}
                position={position}
                isExpanded={!!expandedCards[position.id]}
                onToggle={() => toggleCard(position.id)}
              />
            ))
          ) : (
            <Card className="border-zinc-200 bg-zinc-50 p-8 text-center">
              <h3 className="text-lg font-semibold text-zinc-900">No matching roles found</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Try adjusting your search terms or clearing filters to see more openings.
              </p>
              <Button onClick={clearFilters} className="mt-4 bg-zinc-900 text-white hover:bg-zinc-800">
                Reset Filters
              </Button>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
