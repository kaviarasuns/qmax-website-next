"use client";

import { Roboto_Mono } from "next/font/google";
import { CaseStudyV3Header } from "@/components/case-studies/case-studies-v3-header";
import { CaseStudyV2Content } from "@/components/case-studies/case-study-v2-content";
import { CaseStudyV2Header } from "@/components/case-studies/case-study-v2-header";
import type { FullProductDevelopmentCaseStudy } from "@/store/full-product-development-case-studies";

const V3_HEADER_TITLES = new Set([
  "OBD-II Diagnostics Device",
  "WiFi 6E Triband Cybersecurity Gateway",
  "Outdoor Wi-Fi 6 Access Point",
  "Cold Storage IoT Monitoring System",
]);

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
    overview,
    brief,
    scopeItems,
    challenges,
    hardwareComponents,
    interfaces,
    firmwareItems,
    specs,
    summary,
  } = caseStudy;

  return (
    <div
      className={`${robotoMono.variable} bg-[#f5f7fa] text-foreground leading-[1.6] tracking-[0.015em] antialiased`}
    >
      {V3_HEADER_TITLES.has(title) ? (
        <CaseStudyV3Header
          title={title}
          subtitle={subtitle}
          metaTags={metaTags}
          ribbonStats={ribbonStats}
          images={images}
        />
      ) : (
        <CaseStudyV2Header
          title={title}
          subtitle={subtitle}
          metaTags={metaTags}
          ribbonStats={ribbonStats}
          images={images}
        />
      )}

      <CaseStudyV2Content
        navSections={navSections}
        overview={overview}
        brief={brief}
        scopeItems={scopeItems}
        challenges={challenges}
        hardwareComponents={hardwareComponents}
        interfaces={interfaces}
        firmwareItems={firmwareItems}
        specs={specs}
        summary={summary}
      />
    </div>
  );
}
