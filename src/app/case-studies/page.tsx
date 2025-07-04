// Renders a list of case studies
import Link from "next/link";

const caseStudies = [
  {
    slug: "Control-system-with-POE-Switch-and-RTOS",
    title: "Control System with POE Switch and RTOS",
  },
  { slug: "Security-System-Controller", title: "Security System Controller" },
];

export default function CaseStudies() {
  return (
    <div>
      <h1>Case Studies</h1>
      <ul>
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <Link href={`/Embedded-Case-study/${study.slug}`}>
              {study.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
