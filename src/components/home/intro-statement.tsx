"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Positioning statement between the hero and the services reel — a plain
 * declarative beat, not another scroll-jacked scene, so it reads as a pause
 * rather than competing with the sections either side of it. */
export default function IntroStatement({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: readonly string[];
}) {
  return (
    <section className="relative overflow-hidden veil-0 py-24 md:py-32">
      <div className="circuit-floor pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="kinetic-accent neon-text text-3xl font-bold md:text-5xl lg:text-6xl">
          {heading}
        </h2>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-lg text-ink/60 md:text-xl">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
