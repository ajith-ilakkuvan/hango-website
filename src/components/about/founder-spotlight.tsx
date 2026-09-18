import type { FounderSection } from "@/data/founder";

/**
 * Editorial founder profile: a photo frame (placeholder until a real photo
 * is supplied — swap the frame's contents for a next/image once one lands)
 * sits alongside the narrative, which runs as a sequence of titled sections
 * with the occasional pull-quote, closing on the guiding principles and a
 * signature block.
 */
export default function FounderSpotlight({
  name,
  role,
  tags,
  location,
  intro,
  sections,
  principles,
  tagline,
}: {
  name: string;
  role: string;
  tags: readonly string[];
  location: string;
  intro: readonly string[];
  sections: readonly FounderSection[];
  principles: readonly string[];
  tagline: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="relative mx-auto max-w-6xl px-6">
      <h2 className="max-w-2xl text-3xl font-bold text-ink md:text-5xl">Meet the Founder</h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="edge-light circuit-floor relative aspect-square w-full max-w-[320px] overflow-hidden rounded-[18px] border border-ink/10 bg-[var(--color-surface-2)]/70">
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-6xl font-bold text-brand-red/80"
                style={{ filter: "drop-shadow(0 0 24px rgba(251,54,64,0.35))" }}
              >
                {initials}
              </span>
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-wide text-ink/35">
              Photo coming soon
            </span>
          </div>

          <h3 className="mt-6 text-xl font-semibold text-ink">{name}</h3>
          <p className="mt-1 text-sm font-medium text-brand-red">{role}</p>
          <p className="mt-2 text-sm text-ink/50">{tags.join(" • ")}</p>
          <p className="mt-1 text-sm text-ink/35">{location}</p>
        </div>

        <div className="max-w-2xl space-y-5 text-lg text-ink/60">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {sections.map((section) => (
            <div key={section.title} className="pt-6">
              <h3 className="text-xl font-semibold text-ink">{section.title}</h3>
              <div className="mt-4 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.quote && (
                <blockquote className="relative my-6 border-l-2 border-brand-red pl-6 text-xl font-medium text-ink">
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              )}

              {section.closing?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          ))}

          <ul className="space-y-2 border-t border-ink/10 pt-8 text-xl font-medium text-ink">
            {principles.map((principle) => (
              <li key={principle} className="flex items-baseline gap-3">
                <span className="text-brand-red">—</span>
                {principle}
              </li>
            ))}
          </ul>

          <div className="border-t border-ink/10 pt-8">
            <p className="font-semibold text-ink">{name}</p>
            <p className="mt-1 text-sm text-ink/50">{role}</p>
            <p className="mt-1 text-sm text-ink/50">{tags.join(" | ")}</p>
            <p className="mt-1 text-sm text-ink/35">{location}</p>
            <p className="mt-6 text-xs uppercase tracking-wide text-ink/35">{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
