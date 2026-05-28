import FinalCTA from "@/components/about/FinalCTA";
import GlobalPresence from "@/components/about/GlobalPresence";
import Hero from "@/components/about/Hero";
import HowWeWorkInternational from "@/components/about/HowWeWorkInternational";
import ImpactStats from "@/components/about/ImpactStats";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import MissionVision from "@/components/about/MissionVision";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import WhyQmax from "@/components/about/WhyQmax";




export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero/>
      <OurStory/>
      <ImpactStats />
      <MissionVision />
      <OurValues />
      <MeetTheTeam/>
      <WhyQmax />
      <HowWeWorkInternational />
      <GlobalPresence />
      <FinalCTA />
    </main>
  );
}
