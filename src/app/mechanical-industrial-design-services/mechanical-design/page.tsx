import ServiceCaseStudiesSection from "@/components/ServiceCaseStudiesSection";
import { CoreEngineeringMechanical } from "@/components/services-cmp/core-engineering-mechanical";
import { FAQSection } from "@/components/services-cmp/FAQSection";
import { ServiceVideoHero } from "@/components/services-cmp/service-video-hero";
import { WhyChooseQmaxMechanical } from "@/components/services-cmp/why-choose-qmax-mechanical";
import { ServiceCaseStudy } from "@/data/service-case-studies";
import { industrialCaseStudiesData } from "@/store/industrial-case-studies";

const FAQ_ITEMS = [
  {
    q: "What mechanical design software does Qmax Systems use?",
    a: "We use industry-standard CAD platforms including SOLIDWORKS, Creo Parametric, and Autodesk Inventor for 3D mechanical design. All structural and thermal analysis is performed using ANSYS and SolidWorks Simulation. Drawings are issued per ISO 286 / ASME Y14.5 GD&T standards and are manufacture-ready without verbal clarification.",
  },
  {
    q: "Can Qmax manage both the mechanical design and production sourcing?",
    a: "Yes. Qmax provides end-to-end mechanical engineering — from concept and CAD through drawing release, vendor qualification, prototype oversight, and production ramp. We work directly with your approved manufacturer list or introduce qualified vendors from our network, coordinating DFM reviews, first-article inspection, and tolerance verification.",
  },
  {
    q: "How does Qmax approach MIL-STD-810 mechanical qualification?",
    a: "We perform FEA structural analysis — static stress, random vibration, shock, and thermal — before any hardware is built, using MIL-STD-810H test profiles as the loading boundary. This pre-qualification step identifies failure modes early, reduces prototype-test cycles, and produces the documentation trail required for DRDO/DGQA and US military qualification submissions.",
  },
  {
    q: "What is the difference between IP65, IP67, and IP68, and how do you ensure compliance?",
    a: "IP65 provides dust-tight protection and resistance to low-pressure water jets. IP67 adds 1 m immersion for 30 minutes. IP68 covers continuous immersion at specified depth. Compliance is an engineering discipline: we specify the correct O-ring cross-section, groove geometry, gasket material (silicone, EPDM, Viton), fastener torque, and surface flatness — then validate at an accredited test facility before production release.",
  },
  {
    q: "Does Qmax provide GD&T drawings suitable for direct issue to vendors?",
    a: "Yes. Every design released from Qmax carries a fully dimensioned, GD&T-annotated drawing set prepared to ISO 286 / ASME Y14.5 standards. Tolerances are set based on functional requirements and the manufacturing process — not copied from default CAD settings. Any competent machine shop or toolmaker can manufacture from our drawings without verbal clarification.",
  },
  {
    q: "How does Qmax integrate mechanical and electronics design to avoid late-stage conflicts?",
    a: "Our mechanical engineers work in concurrent collaboration with PCB layout and firmware teams from the first concept review. Connector keepout zones, thermal vent placement, board mounting datum, and harness routing are all resolved in CAD before layout begins — eliminating the late-stage ECOs that cause the most expensive product delays.",
  },
  {
    q: "What is the typical timeline from mechanical concept to qualified prototype?",
    a: "Timeline depends on complexity. A simple plastic enclosure: 4–6 weeks concept to first article. A sheet-metal rack chassis: 6–8 weeks. A MIL-STD-810H qualified rugged aluminium enclosure: 12–18 weeks including FEA pre-qualification and first-article test. We provide a phased schedule at project kick-off with clear gate reviews and drawing release milestones.",
  },
];

const HERO = {
  title: "Mechanical Design Services",
  description:
    "From injection-moulded plastic enclosures to MIL-grade rugged systems — Qmax Systems delivers precision mechanical design, DFx engineering, and full structural analysis with a clear path from concept to production.",
  ctaLabel: "Talk to our engineers",
  ctaHref: "/mechanical-industrial-design-services/contact",
  videoSrc:
    "https://d1yetprhniwywz.cloudfront.net/v2/services_video/mechanical_desing.mp4",
};

function industrialServiceCaseStudies(ids: string[]): ServiceCaseStudy[] {
  return ids.map((id) => {
    const study = industrialCaseStudiesData.find((c) => c.id === id);
    const image = study?.images[0];
    if (!study || !image) {
      throw new Error(`Industrial case study missing or has no image: ${id}`);
    }
    const sentenceMatch = study.summary.match(/^[\s\S]*?[.!?](?=\s|$)/);
    const first = (sentenceMatch ? sentenceMatch[0] : study.summary).trim();
    const summary =
      first.length > 200 ? `${first.slice(0, 197).trimEnd()}…` : first;
    return {
      title: study.title,
      image,
      link: `/case-studies/${study.id}`,
      category: "hardware",
      summary,
    };
  });
}

const powerElectronicsCaseStudies: ServiceCaseStudy[] =
  industrialServiceCaseStudies([
    "oxygen-generator",
    "uv-disinfection-system",
    "warehouse-camera-controller-unit",
    "smart-tap",
  ]);

export default function MechanicalDesignServicesPage() {
  return (
    <>
      <ServiceVideoHero {...HERO} />
      <CoreEngineeringMechanical />
      <WhyChooseQmaxMechanical />
      <FAQSection faqItems={FAQ_ITEMS} />
      <ServiceCaseStudiesSection
        eyebrow="Hardware Programs"
        studies={powerElectronicsCaseStudies}
        hideTopBorder
      />
    </>
  );
}
