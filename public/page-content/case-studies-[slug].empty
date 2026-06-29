import CaseStudyPageV1 from "@/components/case-studies/case-studies-v1";
import CaseStudyPageV2 from "@/components/case-studies/case-studies-v2";
import { allCaseStudiesData } from "@/store/case-studies";
import {
  fullProductDevelopmentCaseStudiesData,
  getFullProductDevelopmentCaseStudy,
} from "@/store/full-product-development-case-studies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const fullProductStudy = getFullProductDevelopmentCaseStudy(slug);
  if (fullProductStudy) {
    return fullProductStudy.metadata;
  }

  const caseStudy = allCaseStudiesData.find((cs) => cs.id === slug);
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

  const fullProductStudy = getFullProductDevelopmentCaseStudy(slug);
  if (fullProductStudy) {
    return <CaseStudyPageV2 caseStudy={fullProductStudy} />;
  }

  return <CaseStudyPageV1 params={params} />;
}

export function generateStaticParams() {
  return [
    ...fullProductDevelopmentCaseStudiesData.map((study) => ({
      slug: study.slug,
    })),
    ...allCaseStudiesData.map((caseStudy) => ({
      slug: caseStudy.id,
    })),
  ];
}
