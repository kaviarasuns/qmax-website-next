import { caseStudiesData } from "@/data/case-studies-data";
import { CaseStudyCard } from "@/components/case-study-card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudiesData.find((cs) => cs.id === slug);
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }
  return {
    title: caseStudy.title,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudiesData.find((cs) => cs.id === slug);

  if (!caseStudy) {
    return <div>Case Study Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyCard caseStudy={caseStudy} />
    </div>
  );
}

export async function generateStaticParams() {
  return caseStudiesData.map((caseStudy) => ({
    slug: caseStudy.id,
  }));
}
