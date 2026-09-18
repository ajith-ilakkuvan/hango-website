import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/page-hero";
import MorphField from "@/components/motion/morph-field";
import ScrollScene from "@/components/motion/scroll-scene";
import PopRows from "@/components/motion/pop-rows";
import PopCard from "@/components/motion/pop-card";
import FounderSpotlight from "@/components/about/founder-spotlight";
import {
  about,
  mission,
  vision,
  whatMakesDifferent,
  coreValues,
  targetAudience,
  elevatorPitch,
  whatWeDo,
  tagline,
} from "@/data/company";
import { founder } from "@/data/founder";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Hango — a full-stack digital growth partner in Coimbatore, Tamil Nadu, uniting marketing, technology, and branding.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="To hang high is the point." motif="ascend">
        <div className="mt-8 max-w-2xl space-y-5 text-lg text-ink/60">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </PageHero>

      <ScrollScene
        className="veil-1 py-20 md:py-28"
        bg={<div className="bg-grid absolute inset-0 opacity-60" />}
      >
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-20">
          <PopCard index={0} className="rounded-[14px]" lift={false}>
            <h2 className="text-sm font-semibold tracking-wide text-brand-red">Mission</h2>
            <p className="mt-3 text-2xl font-medium text-ink">{mission}</p>
          </PopCard>
          <PopCard index={1} className="rounded-[14px]" lift={false}>
            <h2 className="text-sm font-semibold tracking-wide text-brand-red">Vision</h2>
            <p className="mt-3 text-2xl font-medium text-ink">{vision}</p>
          </PopCard>
        </div>
      </ScrollScene>

      <ScrollScene
        className="veil-0 py-20 md:py-28"
        bg={<div className="bg-grid absolute inset-0 opacity-60" />}
      >
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl text-3xl font-bold text-ink md:text-5xl">
            {whatMakesDifferent.title}
          </h2>

          <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-ink/10 pt-10 md:grid-cols-2">
            {whatMakesDifferent.points.map((point, i) => (
              <PopCard key={point.title} index={i} className="rounded-[14px]">
                <h3 className="text-xl font-semibold text-ink transition-colors duration-500 group-data-[pop=on]:text-brand-red">
                  {point.title}
                </h3>
                <p className="mt-2 text-ink/55 transition-colors duration-500 group-data-[pop=on]:text-ink/85">
                  {point.body}
                </p>
              </PopCard>
            ))}
          </div>
        </div>
      </ScrollScene>

      <ScrollScene className="veil-0 py-20 text-ink md:py-28">
        <MorphField className="pointer-events-none absolute right-10 top-16 hidden opacity-60 lg:block" />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">What we hold to</h2>

          <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-ink/10 pt-10 md:grid-cols-2">
            {coreValues.map((value, i) => (
              <PopCard key={value.title} index={i} className="rounded-[14px]">
                <h3 className="text-xl font-semibold transition-colors duration-500 group-data-[pop=on]:text-brand-red">
                  {value.title}
                </h3>
                <p className="mt-2 text-ink/55 transition-colors duration-500 group-data-[pop=on]:text-ink/85">
                  {value.description}
                </p>
              </PopCard>
            ))}
          </div>
        </div>
      </ScrollScene>

      <ScrollScene
        className="veil-1 py-20 text-center md:py-28"
        bg={<div className="circuit-floor absolute inset-0" />}
      >
        <p className="relative mx-auto max-w-4xl px-6 text-2xl font-medium text-ink md:text-4xl">
          &ldquo;{elevatorPitch.hook}&rdquo;
        </p>
      </ScrollScene>

      <ScrollScene className="veil-0 py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-ink md:text-5xl">What we do</h2>

          <div className="mt-12">
            <PopRows
              items={whatWeDo.map((service) => ({
                key: service.title,
                title: service.title,
                description: service.description,
              }))}
            />
          </div>
        </div>
      </ScrollScene>

      <ScrollScene
        className="veil-1 py-20 md:py-28"
        bg={<div className="circuit-floor absolute inset-0 opacity-60" />}
      >
        <FounderSpotlight
          name={founder.name}
          role={founder.role}
          tags={founder.tags}
          location={founder.location}
          photoSrc={founder.photoSrc}
          intro={founder.intro}
          sections={founder.sections}
          principles={founder.principles}
          tagline={tagline}
        />
      </ScrollScene>

      <ScrollScene
        className="veil-0 py-20 md:py-28"
        bg={<div className="bg-grid absolute inset-0 opacity-60" />}
      >
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl text-3xl font-bold text-ink md:text-5xl">Who we work with</h2>

          <div className="mt-12">
            <PopRows
              items={targetAudience.map((segment) => ({
                key: segment.title,
                title: segment.title,
                description: segment.description,
              }))}
            />
          </div>

          <Link href="/contact" className="btn-primary mt-12">
            Start a conversation
          </Link>
        </div>
      </ScrollScene>
    </>
  );
}
