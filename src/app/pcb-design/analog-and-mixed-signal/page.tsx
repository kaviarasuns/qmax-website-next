import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import {
  ApplicationsProjectExperienceSection,
  ProjectExperienceItem,
} from "@/components/services-cmp/ApplicationsProjectExperienceSection";
import {
  ComplimentarySchematicReviewSection,
  SchematicReviewItem,
} from "@/components/services-cmp/ComplimentarySchematicReviewSection";
import {
  CoreServiceOfferingsSection,
  HighSpeedCoreOffering,
} from "@/components/services-cmp/CoreServiceOfferingsSection";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import { HardwareServiceHeroSection } from "@/components/services-cmp/HardwareServiceHeroSection";
import { WhySection } from "@/components/services-cmp/WhySection";
import { pcbCaseStudiesData } from "@/store/pcb-case-studies";

const pcbCaseStudies = pcbCaseStudiesData.slice(0, 4).map((caseStudy) => ({
  title: caseStudy.title,
  image: caseStudy.images[0],
  link: `/case-studies/${caseStudy.id}`,
  category: "development",
  summary: caseStudy.summary,
  imageRotation: caseStudy.rotatedImages?.[0],
}));

const coreServiceOfferings: HighSpeedCoreOffering[] = [
  {
    id: "noise",
    tab: "Noise & Sensitivity",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    headline:
      "Analog circuits are extremely sensitive to noise sources that digital designs can tolerate.",
    intro:
      "Analog circuits operate in a continuous voltage domain, unlike digital circuits that operate using discrete logic levels. Because of this, they are extremely sensitive to noise sources that digital designs can tolerate.",
    points: [
      {
        boldLead: "Digital Switching Transients",
        rest: " — fast edge rates from digital ICs couple into sensitive analog traces through shared ground planes and adjacent routing.",
      },
      {
        boldLead: "Power Supply Ripple",
        rest: " — switching regulator noise propagating through shared PDN rails to precision analog front-ends and ADC reference pins.",
      },
      {
        boldLead: "Ground Return Current Disturbances",
        rest: " — return currents from digital loads flowing through analog ground regions, introducing voltage offsets.",
      },
      {
        boldLead: "Crosstalk Between Signal Traces",
        rest: " — electromagnetic coupling between adjacent traces, especially at high-impedance analog nodes.",
      },
    ],
    applications:
      "Scientific instruments · Industrial sensing · Medical electronics · Measurement systems",
  },
  {
    id: "coexistence",
    tab: "Mixed-Signal Coexistence",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <rect x="6" y="4" width="12" height="16" rx="2" />
      </svg>
    ),
    headline:
      "When analog and digital share a PCB, the layout determines the outcome.",
    intro:
      "Mixed signal PCB design becomes particularly challenging when sensitive analog and aggressive digital circuits must coexist on the same board. Poor layout introduces measurable performance degradation.",
    points: [
      {
        boldLead: "Low-Noise Preamplifiers Near Digital Processors",
        rest: " — analog front-ends operating microvolt signals within millimeters of high-speed digital switching.",
      },
      {
        boldLead: "High-Resolution ADCs with Noisy Switching Supplies",
        rest: " — 16-bit+ converters sharing PCB real estate with DC-DC regulators generating broadband noise.",
      },
      {
        boldLead: "Sensitive Measurement Circuits with RF/Digital Clocks",
        rest: " — precision measurement paths coexisting with clock oscillators and high-speed serial interfaces.",
      },
    ],
    applications:
      "Increased noise floor · Measurement drift · Reduced ADC ENOB · EMI compliance failures",
  },
  {
    id: "layout",
    tab: "Disciplined Layout Techniques",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    headline:
      "Structured layout techniques that prevent noise coupling at the source.",
    intro:
      "To prevent these issues, Qmax Systems applies disciplined layout techniques rooted in electromagnetic first principles — not rules of thumb.",
    points: [
      {
        boldLead: "Analog/Digital Partitioning",
        rest: " — careful physical separation and zone definition between analog and digital domains with controlled boundary transitions.",
      },
      {
        boldLead: "Controlled Ground Return Paths",
        rest: " — star grounding and split ground strategies to prevent digital return currents from flowing through analog regions.",
      },
      {
        boldLead: "Guard Traces & Shielding",
        rest: " — guard traces around high-impedance nodes, analog shielding, and dedicated ground planes for sensitive signal domains.",
      },
      {
        boldLead: "Dedicated Low-Noise Power Networks",
        rest: " — isolated power supply networks with LDO filtering for precision analog rails, separated from digital power domains.",
      },
    ],
    applications:
      "Star grounding · Split ground planes · Guard traces · Analog shielding · Isolated LDO rails",
  },
  {
    id: "outcomes",
    tab: "Measurement-Grade Outcomes",
    tabIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    headline:
      "PCB designs that are measurement-accurate, EMI-robust, and manufacturing-ready.",
    intro:
      "Our engineers design analog and mixed-signal PCBs for scientific instruments, industrial sensing platforms, medical electronics, and measurement systems where microvolt-level signals must operate reliably in electrically noisy environments.",
    points: [
      {
        boldLead: "First-Time-Right Engineering",
        rest: " — a methodology supported by experienced PCB designers, rigorous design reviews, and production-ready validation processes.",
      },
      {
        boldLead: "All-Engineer Design Team",
        rest: " — all PCB designers at Qmax Systems are Electrical Engineers with extensive experience in analog hardware design and mixed-signal PCB layout.",
      },
      {
        boldLead: "Measurement-Grade Performance",
        rest: " — layouts validated for noise floor, ENOB preservation, and thermal stability across the full operating range.",
      },
    ],
    applications:
      "Scientific instruments · Industrial sensing · Medical electronics · Process control · Bio-potential monitoring",
  },
];

const projectExperience: ProjectExperienceItem[] = [
  {
    id: "high-speed-daq",
    listTitle: "High-Speed Data Acquisition (DAQ)",
    captionTitle: "32-Channel Synchronized Sampling",
    description:
      "Challenge: 32-channel synchronized sampling without channel-to-channel crosstalk. Solution: Strategic partitioning and matched-length differential routing for ADC clocks.",
    placeholderGradient: "linear-gradient(135deg, #ede9e0, #d4ccbe)",
  },
  {
    id: "lung-sound-recorder",
    listTitle: "Lung Sound Recorder",
    captionTitle: "Microvolt-Level Acoustic Capture",
    description:
      "Challenge: Capturing microvolt-level acoustic signals in a compact, portable form factor. Solution: Implementation of ultra-low-noise preamplifiers with active shielding to reject environmental EMI.",
    placeholderGradient: "linear-gradient(135deg, #dce4ec, #c4d0dc)",
  },
  {
    id: "ultrasonic-sensor-amplifiers",
    listTitle: "Ultrasonic Sensor Amplifiers",
    captionTitle: "High-Gain Pulse Receiver Design",
    description:
      "Challenge: Managing high-gain stages near high-voltage pulse generators. Solution: Physical isolation and dedicated return paths to prevent pulse transients from desensitizing the receiver.",
    placeholderGradient: "linear-gradient(135deg, #dceade, #c4d8c6)",
  },
  {
    id: "shm-adc-dac",
    listTitle: "High-Speed ADCs/DACs for SHM",
    captionTitle: "Structural Health Monitoring",
    description:
      "Challenge: Structural Health Monitoring requires high dynamic range across wide temperature variants. Solution: Thermal management for reference voltages and 3D EM simulation of high-speed converter interfaces.",
    placeholderGradient: "linear-gradient(135deg, #ecdce6, #dcc4d4)",
  },
  {
    id: "instrumentation-amplifiers",
    listTitle: "Instrumentation Amplifiers",
    captionTitle: "Precision Industrial Measurement",
    description:
      "Challenge: Precision measurement of temperature and pressure in noisy industrial environments. Solution: High CMRR layout techniques and star-grounding to eliminate ground loops.",
    placeholderGradient: "linear-gradient(135deg, #ece9dc, #dcd8c4)",
  },
  {
    id: "emg-amplifiers",
    listTitle: "Low-Noise EMG Amplifiers",
    captionTitle: "Biopotential Signal Detection",
    description:
      'Challenge: Detecting biopotential signals (EMG) while rejecting 50/60Hz power line noise. Solution: Implementation of "moat-and-bridge" structures and specialized medical-grade isolation.',
    placeholderGradient: "linear-gradient(135deg, #e0e9ed, #c8d4dc)",
  },
  {
    id: "femto-farad-capacitance",
    listTitle: "Femto-Farad Capacitance Device",
    captionTitle: "Sub-Picofarad Measurement",
    description:
      "Challenge: Measuring sub-picofarad changes amidst parasitic PCB capacitance. Solution: Use of low-loss substrates (Rogers/Megtron) and guard rings to neutralize parasitic leakage.",
    placeholderGradient: "linear-gradient(135deg, #ede0e9, #dcc8d4)",
  },
  {
    id: "hearing-aids",
    listTitle: "Hearing Aids",
    captionTitle: "Miniaturized Audio Processing",
    description:
      "Challenge: Extreme miniaturization with high-gain audio processing and BLE interference. Solution: HDI layout with microvias and rigid-flex substrates for 3D packaging.",
    placeholderGradient: "linear-gradient(135deg, #ede9e0, #d4ccbe)",
  },
  {
    id: "plasma-generators",
    listTitle: "High-Power LF Plasma Generators",
    captionTitle: "kW-Level RF/LF Switching Control",
    description:
      "Challenge: Sensitive analog control circuitry operating near kW-level RF/LF switching. Solution: Faraday cage shielding, heavy copper traces (4oz+), and rigorous ESD/EFT mitigation.",
    placeholderGradient: "linear-gradient(135deg, #dce4ec, #c4d0dc)",
  },
];

const WHY_CARDS = [
  {
    title: "First-Time-Right Philosophy",
    desc: "We prioritize early risk identification at the schematic stage to eliminate costly PCB re-spins.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Engineering-Led Design",
    desc: "All Qmax PCB designers are Electrical Engineers capable of performing complex circuit and noise analysis.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "DFM/DFT Validation",
    desc: "100% DFM-verified files tailored to each fabrication house's specific capabilities.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "IP Ownership",
    desc: "All design files, libraries, and simulation data remain the sole property of the customer.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const schematicReviewItems: SchematicReviewItem[] = [
  {
    id: "analog-digital-isolation",
    title: "Analog/Digital Isolation Strategy",
    description:
      "Reviewing partitioning and noise-coupling paths to protect sensitive analog stages from digital aggressors.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <line x1="6" y1="12" x2="18" y2="12" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "power-supply-filtering",
    title: "Power Supply Filtering",
    description:
      "Optimizing low-noise LDOs and decoupling networks for high-resolution ADCs and precision analog front-ends.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "termination-impedance",
    title: "Termination & Impedance",
    description:
      "Validating signal termination schemes for high-speed converters and instrumentation interfaces.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "component-lifecycle",
    title: "Component Lifecycle",
    description:
      'Screening for EOL and "at-risk" components to ensure long-term manufacturability.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const FAQ_ITEMS = [
  {
    q: "How do you manage noise in mixed-signal designs?",
    a: "We utilize strategic partitioning to physically separate sensitive analog components from noisy digital switching, combined with dedicated return paths and shielding.",
  },
  {
    q: "Do you support split ground planes?",
    a: 'Yes, where appropriate. We evaluate if a single solid ground or a split-plane with a "bridge" at the converters is better for your specific signal frequencies to prevent common-mode noise.',
  },
  {
    q: "Can you design for low-noise amplifiers (LNA)?",
    a: "Absolutely. We implement guard traces and Faraday shielding to protect low-level signals from external EMI and internal crosstalk.",
  },
  {
    q: "Do you handle high-resolution ADC/DAC layout (24-bit+)?",
    a: "Yes. We focus on reference voltage stability, thermal gradients, and meticulous grounding to preserve the effective number of bits (ENOB).",
  },
  {
    q: "What materials do you recommend for precision analog?",
    a: "While FR-4 is common, we often use low-loss materials like Rogers or Megtron 6 for high-frequency or high-impedance analog applications to minimize dielectric absorption.",
  },
  {
    q: "Do you perform SI/PI simulations for analog boards?",
    a: "Yes. We use SPICE modeling and 3D EM simulation to validate signal paths and ensure the Power Distribution Network (PDN) is noise-free.",
  },
  {
    q: "How do you mitigate EMI/EMC issues?",
    a: 'By implementing "EMC-by-design". We address return path discontinuities and use filtering (Pi-filters, beads) at the source.',
  },
  {
    q: "Can you help with designs that failed ESD/EFT testing?",
    a: 'Yes, we provide "rescue" services to identify and fix vulnerabilities in existing layouts to pass compliance.',
  },
  {
    q: "Do you support medical isolation requirements?",
    a: "Yes, we adhere to IEC 60601 standards, ensuring proper creepage and clearance distances for patient safety.",
  },
  {
    q: "Who owns the IP for the design?",
    a: "The customer retains 100% ownership of all design files and IP.",
  },
  {
    q: "Do you design medical measurement electronics?",
    a: "Yes. We are also a ISO13485 certified design house",
  },
];

export default function AnalogAndMixedSignalPage() {
  return (
    <>
      <HardwareServiceHeroSection
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=900&fit=crop&q=80"
        imageAlt="High-Performance Digital Systems — Qmax Systems"
        title="Analog and Mixed Signal PCB Design Services."
        description={
          <>
            <p>
              Modern electronic systems rarely operate purely in analog or
              purely digital domains. Most advanced embedded systems combine
              high-sensitivity analog signal chains with high-speed digital
              processing, creating complex mixed-signal PCB design challenges.
            </p>
            <p>
              At Qmax Systems, analog and mixed signal PCB design is treated as
              a precision engineering discipline, where the PCB layout itself
              becomes a critical part of the electrical system. Signal
              integrity, grounding topology, shielding, and power filtering
              directly influence system noise floor, measurement accuracy, and
              long-term reliability.
            </p>
          </>
        }
        ctaHref="/hardware-development-services/contact"
        ctaLabel="Talk to Our Engineers"
      />
      <CoreServiceOfferingsSection
        offerings={coreServiceOfferings}
        title="Introduction to Analog & Mixed Signal "
        titleHighlight="PCB Engineering"
      />
      <ApplicationsProjectExperienceSection projects={projectExperience} />

      <WhySection
        whyCards={WHY_CARDS}
        title="Why Choose Qmax"
        titleHighlight="Systems?"
        description="Engineering-led analog and mixed-signal PCB design — built for first-time-right performance from schematic to production."
        className="pb-8 max-[900px]:pb-8"
      />

      <section className="bg-white px-16 pb-24 max-[900px]:px-6 max-[900px]:pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-xl border border-slate-200 border-l-4 border-l-[#F33117] bg-white px-7 py-7 md:px-8">
            <h3 className="text-lg font-semibold text-slate-800">
              Compliance-Ready Layout
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
              We focus on compliance from Day 1 for CE, FCC, and UL
              certification. Our goal is to deliver production-ready PCB designs
              that function correctly on the first prototype build.
            </p>
          </div>
        </div>
      </section>

      <ComplimentarySchematicReviewSection
        items={schematicReviewItems}
        titleHighlight="Analog & Mixed-Signal PCB Design"
        subtitle="Every PCB layout engagement at Qmax Systems includes a complimentary schematic review. Before a single trace is routed, our engineers analyze:"
      />

      <FAQSection faqItems={FAQ_ITEMS} />

      <ServiceCaseStudiesSection
        eyebrow="PCB Programs"
        studies={pcbCaseStudies}
        hideTopBorder
      />

      <div className="pb-28"></div>
    </>
  );
}
