"use client";

import { Roboto_Mono } from "next/font/google";
import { CaseStudyV3Header } from "@/components/case-studies/case-studies-v3-header";
import { CaseStudyV2Content } from "@/components/case-studies/case-study-v2-content";
import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function CaseStudyPageV2({
  caseStudy,
}: {
  caseStudy: FullProductDevelopmentCaseStudy;
}) {
  const {
    title,
    subtitle,
    metaTags,
    ribbonStats,
    navSections,
    images,
    rotatedImages,
    enlargedImages,
    overview,
    brief,
    scopeIntro,
    scopeItems,
    challenges,
    hardwareComponents,
    interfaces,
    firmwareIntro,
    firmwareItems,
    testingIntro,
    testingItems,
    specs,
    summary,
    contactCtaPrefix,
  } = caseStudy;

  return (
    <div
      className={`${robotoMono.variable} bg-[#f5f7fa] text-foreground leading-[1.6] tracking-[0.015em] antialiased`}
    >
      <CaseStudyV3Header
        title={title}
        subtitle={subtitle}
        metaTags={metaTags}
        ribbonStats={ribbonStats}
        images={images}
        rotatedImages={rotatedImages}
        enlargedImages={enlargedImages}
      />

      <CaseStudyV2Content
        navSections={navSections}
        overview={overview}
        brief={brief}
        scopeIntro={scopeIntro}
        scopeItems={scopeItems}
        challenges={challenges}
        hardwareComponents={hardwareComponents}
        interfaces={interfaces}
        firmwareIntro={firmwareIntro}
        firmwareItems={firmwareItems}
        testingIntro={testingIntro}
        testingItems={testingItems}
        specs={specs}
        summary={summary}
        contactCtaPrefix={contactCtaPrefix}
      />
    </div>
  );
}
