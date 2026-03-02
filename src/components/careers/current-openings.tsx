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
    description: 'Design and develop hardware solutions for cutting-edge embedded systems and IoT devices.',
    responsibilities: [
      'Design schematic diagrams and PCB layouts for custom hardware',
      'Conduct design reviews and ensure compliance with industry standards',
      'Collaborate with firmware and mechanical engineering teams',
      'Perform hardware testing and troubleshooting',
      'Document design specifications and technical documentation'
    ],
    requirements: [
      '5+ years of experience in hardware design',
      'Expertise in circuit design and PCB layout tools (Altium, Eagle, etc.)',
      'Strong knowledge of embedded systems and microcontrollers',
      'Understanding of signal integrity and power distribution',
      'Experience with hardware-firmware co-design'
    ],
    skills: [
      { category: 'Design Tools', items: ['Altium Designer', 'Eagle CAD', 'LTspice', 'Cadence'] },
      { category: 'Technologies', items: ['Embedded Systems', 'Circuit Design', 'PCB Layout', 'Power Electronics'] },
      { category: 'Communication', items: ['Technical Documentation', 'Cross-team Collaboration'] }
    ],
    qualifications: ['B.S. in Electrical Engineering or related field', 'Master\'s degree preferred'],
    imageUrl: '/careers/image1.jpg'
  },
  {
    id: 2,
    title: 'Firmware Development Engineer',
    category: 'Engineering',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Develop robust and efficient firmware for embedded systems and IoT devices.',
    responsibilities: [
      'Write clean, maintainable firmware code in C/C++',
      'Implement device drivers and communication protocols',
      'Optimize code for performance and memory constraints',
      'Conduct unit testing and integration testing',
      'Collaborate with hardware engineers on hardware-software integration'
    ],
    requirements: [
      '4+ years of embedded systems firmware development',
      'Proficiency in C/C++ programming',
      'Experience with real-time operating systems (RTOS)',
      'Knowledge of communication protocols (UART, SPI, I2C, CAN)',
      'Understanding of embedded Linux or similar environments'
    ],
    skills: [
      { category: 'Programming', items: ['C', 'C++', 'Assembly', 'Python'] },
      { category: 'Protocols', items: ['UART', 'SPI', 'I2C', 'CAN', 'Ethernet'] },
      { category: 'Tools', items: ['Git', 'JIRA', 'Debuggers', 'IDEs'] }
    ],
    qualifications: ['B.S. in Computer Engineering, Electrical Engineering, or related field'],
    imageUrl: '/careers/image2.png'
  },
  {
    id: 3,
    title: 'Embedded Systems Test Engineer',
    category: 'Engineering',
    level: 'Entry',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Develop and execute test plans for embedded systems and IoT products.',
    responsibilities: [
      'Create comprehensive test plans and test cases',
      'Execute functional and integration testing',
      'Identify and document defects with detailed reproduction steps',
      'Perform regression testing',
      'Collaborate with development team to resolve issues'
    ],
    requirements: [
      '1-2 years of test engineering experience',
      'Knowledge of embedded systems testing methodologies',
      'Familiarity with test automation tools',
      'Basic understanding of hardware and firmware',
      'Strong attention to detail'
    ],
    skills: [
      { category: 'Testing', items: ['Test Planning', 'Test Automation', 'Manual Testing', 'Debugging'] },
      { category: 'Tools', items: ['JIRA', 'Git', 'CAN Analyzer', 'Logic Analyzers'] },
      { category: 'Languages', items: ['Python', 'C', 'Shell Scripting'] }
    ],
    qualifications: ['B.S. in Computer Science, Engineering, or related field'],
    imageUrl: '/careers/image3.png'
  },
  {
    id: 4,
    title: 'RF Design Engineer',
    category: 'Engineering',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Design and optimize RF and wireless communication systems for IoT devices.',
    responsibilities: [
      'Design RF circuits and antenna systems',
      'Perform electromagnetic simulations and analysis',
      'Conduct RF testing and measurements',
      'Optimize wireless performance and range',
      'Ensure regulatory compliance (FCC, CE, etc.)'
    ],
    requirements: [
      '5+ years of RF/wireless design experience',
      'Strong knowledge of RF theory and electromagnetic principles',
      'Experience with RF simulation tools (HFSS, ADS, Sonnet)',
      'Familiarity with antenna design and optimization',
      'Understanding of wireless protocols and standards'
    ],
    skills: [
      { category: 'RF Tools', items: ['HFSS', 'ADS', 'Sonnet', 'CST Microwave Studio'] },
      { category: 'Protocols', items: ['Bluetooth', 'WiFi', 'LoRaWAN', 'Cellular'] },
      { category: 'Measurements', items: ['Network Analyzer', 'Spectrum Analyzer', 'Antenna Measurement'] }
    ],
    qualifications: ['B.S. in Electrical Engineering with RF specialization'],
    imageUrl: '/careers/image4.png'
  },
  {
    id: 5,
    title: 'Signal Integrity (SI) Engineer',
    category: 'Engineering',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Ensure signal integrity and power integrity for high-speed designs.',
    responsibilities: [
      'Perform SI/PI simulations and analysis',
      'Design power distribution networks',
      'Optimize high-speed signal routing',
      'Conduct pre- and post-layout analysis',
      'Provide design recommendations to hardware team'
    ],
    requirements: [
      '5+ years of SI/PI analysis experience',
      'Expertise in SI/PI simulation tools',
      'Knowledge of transmission line theory',
      'Experience with high-speed design',
      'Understanding of PCB manufacturing constraints'
    ],
    skills: [
      { category: 'SI/PI Tools', items: ['HyperLynx', 'AltiumSI', 'Keysight ADS', 'ANSYS'] },
      { category: 'Analysis', items: ['EMI/EMC', 'Crosstalk Analysis', 'Impedance Control'] },
      { category: 'Design', items: ['DDR Design', 'High-Speed Interfaces', 'Power Delivery'] }
    ],
    qualifications: ['B.S. in Electrical Engineering'],
    imageUrl: '/careers/image5.png'
  },
  {
    id: 6,
    title: 'PCB Designer',
    category: 'Engineering',
    level: 'Entry-Mid',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Create PCB layouts for embedded systems and IoT devices.',
    responsibilities: [
      'Convert schematic designs to PCB layouts',
      'Route signals while maintaining design rules',
      'Manage component placement and thermal considerations',
      'Generate manufacturing documentation',
      'Support design reviews and manufacturing processes'
    ],
    requirements: [
      '2-4 years of PCB design experience',
      'Proficiency in PCB design tools (Altium, Eagle, KiCAD)',
      'Understanding of design rules and manufacturing constraints',
      'Knowledge of signal integrity basics',
      'Experience with multi-layer PCB designs'
    ],
    skills: [
      { category: 'CAD Tools', items: ['Altium Designer', 'Eagle CAD', 'KiCAD', 'Cadence'] },
      { category: 'Design', items: ['Layout Design', 'Routing', 'Component Placement', 'DFM'] },
      { category: 'Standards', items: ['IPC Standards', 'Design Rules', 'Manufacturing'] }
    ],
    qualifications: ['B.S. in Electrical Engineering or equivalent experience'],
    imageUrl: '/careers/image6.png'
  },
  {
    id: 7,
    title: 'PCB Librarian',
    category: 'Engineering',
    level: 'Entry-Mid',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Maintain and develop PCB component libraries and design assets.',
    responsibilities: [
      'Create and maintain component symbols and footprints',
      'Validate library accuracy and completeness',
      'Organize and manage design asset repositories',
      'Support PCB designers with library queries',
      'Stay updated with component vendor changes'
    ],
    requirements: [
      '2-3 years of PCB library management experience',
      'Proficiency in PCB design software',
      'Attention to detail and organizational skills',
      'Knowledge of component standards and datasheets',
      'Understanding of PCB design requirements'
    ],
    skills: [
      { category: 'CAD Tools', items: ['Altium Designer', 'Eagle CAD', 'KiCAD', 'Symbol Editor'] },
      { category: 'Organization', items: ['Database Management', 'Version Control', 'Documentation'] },
      { category: 'Knowledge', items: ['IPC Standards', 'Component Selection', 'Datasheets'] }
    ],
    qualifications: ['B.S. in Electrical Engineering or related field'],
    imageUrl: '/careers/image7.png'
  },
  {
    id: 8,
    title: 'Mechanical Design Engineer',
    category: 'Engineering',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Design mechanical structures and enclosures for embedded products.',
    responsibilities: [
      'Create detailed mechanical designs and 3D models',
      'Perform structural and thermal analysis',
      'Ensure manufacturability and cost-effectiveness',
      'Collaborate with electrical and industrial design teams',
      'Support prototyping and manufacturing processes'
    ],
    requirements: [
      '5+ years of mechanical design experience',
      'Proficiency in CAD software (SolidWorks, CATIA)',
      'Knowledge of FEA and thermal analysis',
      'Understanding of manufacturing processes',
      'Experience with product design from concept to production'
    ],
    skills: [
      { category: 'CAD/CAM', items: ['SolidWorks', 'CATIA', 'AutoCAD', 'Fusion 360'] },
      { category: 'Analysis', items: ['FEA', 'Thermal Analysis', 'Motion Analysis', 'Assembly Design'] },
      { category: 'Manufacturing', items: ['DFM', 'GD&T', 'Prototyping', 'Material Selection'] }
    ],
    qualifications: ['B.S. in Mechanical Engineering'],
    imageUrl: '/careers/image8.png'
  },
  {
    id: 9,
    title: 'Industrial Designer',
    category: 'Design',
    level: 'Mid-Senior',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Create user-centric product designs that balance functionality and aesthetics.',
    responsibilities: [
      'Develop product design concepts and prototypes',
      'Conduct user research and usability testing',
      'Collaborate with engineering teams',
      'Create design specifications and documentation',
      'Ensure adherence to design standards and brand guidelines'
    ],
    requirements: [
      '5+ years of industrial design experience',
      'Strong portfolio demonstrating design process',
      'Proficiency in design tools (Figma, Adobe XD, Sketch)',
      'Understanding of user experience and ergonomics',
      'Knowledge of manufacturing constraints and materials'
    ],
    skills: [
      { category: 'Design Tools', items: ['Figma', 'Adobe XD', 'Sketch', 'Protopie'] },
      { category: 'Skills', items: ['UI/UX Design', 'Prototyping', 'User Research', 'Wireframing'] },
      { category: 'Knowledge', items: ['Design Systems', 'Accessibility', 'User Testing'] }
    ],
    qualifications: ['B.S. in Industrial Design or related field'],
    imageUrl: '/careers/image9.png'
  },
  {
    id: 10,
    title: 'Full-Stack Web Developer',
    category: 'Software',
    level: 'Entry-Mid',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Build web applications and tools for internal and external use.',
    responsibilities: [
      'Develop frontend and backend components',
      'Design and implement APIs and databases',
      'Ensure code quality and security',
      'Collaborate with product and design teams',
      'Deploy and maintain web applications'
    ],
    requirements: [
      '2-3 years of web development experience',
      'Proficiency in modern JavaScript frameworks (React, Vue, Angular)',
      'Backend development experience (Node.js, Python, Java)',
      'Understanding of SQL and databases',
      'Familiarity with cloud platforms (AWS, GCP, Azure)'
    ],
    skills: [
      { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
      { category: 'DevOps', items: ['Git', 'Docker', 'AWS', 'CI/CD'] }
    ],
    qualifications: ['B.S. in Computer Science or equivalent experience'],
    imageUrl: '/careers/image10.png'
  },
  {
    id: 11,
    title: 'Business Development Executive',
    category: 'Business',
    level: 'Entry',
    location: 'San Jose, CA',
    type: 'Full-time',
    description: 'Identify and develop business opportunities for strategic partnerships and market expansion.',
    responsibilities: [
      'Research market opportunities and competitive landscape',
      'Identify and approach potential partners and customers',
      'Negotiate contracts and partnership agreements',
      'Support sales and marketing initiatives',
      'Track and report on business development metrics'
    ],
    requirements: [
      '1-3 years of business development or sales experience',
      'Strong communication and negotiation skills',
      'Knowledge of IoT and embedded systems industry (preferred)',
      'Ability to manage multiple projects simultaneously',
      'Self-motivated with strong work ethic'
    ],
    skills: [
      { category: 'Business', items: ['Market Research', 'Negotiation', 'Contract Management', 'CRM Tools'] },
      { category: 'Sales', items: ['Lead Generation', 'Sales Pipeline Management', 'Customer Relations'] },
      { category: 'Tools', items: ['Salesforce', 'Excel', 'PowerPoint', 'LinkedIn'] }
    ],
    qualifications: ['B.A. in Business, Marketing, or related field'],
    imageUrl: '/careers/image11.png'
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
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* Left sidebar: Image + Qualifications + CTA */}
            <div className="flex flex-col gap-5">
              <div className="relative h-48 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 lg:h-56">
                <img
                  src={position.imageUrl || '/careers/image1.jpg'}
                  alt={position.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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

            {/* Right content: 2-column sub-grid for details */}
            <div className="lg:col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">

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

              {/* Skills */}
              <div className="rounded-lg border border-zinc-200 bg-white p-4 sm:col-span-2">
                <h4 className="mb-3 font-semibold text-zinc-900">Required Skills</h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {position.skills.map((skillGroup, idx) => (
                    <div key={idx}>
                      <p className="mb-2 text-sm font-medium text-zinc-700">{skillGroup.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, sidx) => (
                          <Badge key={sidx} variant="outline" className="border-zinc-300 text-xs text-zinc-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
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
    positions.forEach(p => (initial[p.id] = false))
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
        <div className="mb-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
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
              <Badge variant="outline" className="border-zinc-300 bg-white text-zinc-700">
                {filteredPositions.length} role{filteredPositions.length === 1 ? '' : 's'}
              </Badge>
              <Button variant="ghost" onClick={toggleExpandAll} className="text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900">
                {isAllExpanded ? 'Collapse All' : 'Expand All'}
              </Button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
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
          )}
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
