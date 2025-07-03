import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Breadcrumbs } from "./breadcrumbs";
import { CaseStudy } from "../../types/case-study";
import { CaseStudyCarousel } from "./case-study-carousel";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">
            <span className="text-orange-500">Case</span>
            <span className="text-black"> Studies</span>
          </h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: caseStudy.category, href: "/case-studies" },
            { label: caseStudy.title },
          ]}
        />
      </div>

      {/* Main Title */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900">{caseStudy.title}</h1>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div>
            <CaseStudyCarousel
              images={caseStudy.images}
              title={caseStudy.title}
            />
          </div>

          {/* Features List */}
          <div>
            <ul className="space-y-3">
              {caseStudy.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Project Summary */}
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Project Summary:</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{caseStudy.summary}</p>
          </CardContent>
        </Card>
      </div>

      {/* Important Parts */}
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Important Parts:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {caseStudy.importantParts.map((part, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{part}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Salient Features */}
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Salient Features:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {caseStudy.salientFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Scope of Work */}
      <div className="container mx-auto px-4 pb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Qmax Scope of work:</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {caseStudy.scopeOfWork.map((work, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{work}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
