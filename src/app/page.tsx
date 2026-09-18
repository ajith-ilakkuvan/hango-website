import Hero from "@/components/home/hero";
import IntroStatement from "@/components/home/intro-statement";
import { ClosingCta } from "@/components/home/values";
import ServicesReel from "@/components/home/services-reel";
import GrowthStack from "@/components/home/growth-stack";
import StoryProgress from "@/components/home/story-progress";
import { elevatorPitch, introStatement, growthStack } from "@/data/company";
import { projectServices } from "@/data/services";

const STORY_LABELS = ["Hero", "Story", "Services", "Grow"] as const;

export default function Home() {
  return (
    <div id="story-root" className="relative">
      <StoryProgress targetId="story-root" labels={STORY_LABELS} />

      <div className="relative z-10">
        <Hero hook={elevatorPitch.hook} body={elevatorPitch.body} />
      </div>
      <div className="relative z-20">
        <IntroStatement heading={introStatement.heading} paragraphs={introStatement.paragraphs} />
      </div>
      <div className="relative z-30">
        <ServicesReel services={projectServices} />
      </div>
      <div className="relative z-40">
        <GrowthStack pillars={growthStack} />
      </div>
      <div className="relative z-50">
        <ClosingCta />
      </div>
    </div>
  );
}
