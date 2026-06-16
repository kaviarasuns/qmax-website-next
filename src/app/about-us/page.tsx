import type { Metadata } from "next";
import FinalCTAV2 from "@/components/about-v2/FinalCTAV2";
import GlobalPresenceV2 from "@/components/about-v2/GlobalPresenceV2";
import HeroV2 from "@/components/about-v2/HeroV2";
import HowWeWorkInternationalV2 from "@/components/about-v2/HowWeWorkInternationalV2";
import ImpactStatsV2 from "@/components/about-v2/ImpactStatsV2";
import MeetTheTeamV2 from "@/components/about-v2/MeetTheTeamV2";
import MissionVisionV2 from "@/components/about-v2/MissionVisionV2";
import OurStoryV2 from "@/components/about-v2/OurStoryV2";
import OurValuesV2 from "@/components/about-v2/OurValuesV2";
import WhyQmaxV2 from "@/components/about-v2/WhyQmaxV2";

export const metadata: Metadata = {
  title: "About Us | Qmax Systems",
  description:
    "Learn about Qmax Systems — precision engineering services since 1997, from concept to manufacturing.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <HeroV2 />
      <ImpactStatsV2 />
      <OurStoryV2 />
      <MissionVisionV2 />
      <OurValuesV2 />
      <MeetTheTeamV2 />
      <WhyQmaxV2 />
      <HowWeWorkInternationalV2 />
      <GlobalPresenceV2 />
      <FinalCTAV2 />
    </main>
  );
}
