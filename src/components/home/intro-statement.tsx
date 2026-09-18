"use client";

import { motion } from "motion/react";
import AiCircuitEmblem from "./ai-circuit-emblem";

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
        className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16"
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <AiCircuitEmblem className="mx-auto max-w-[280px] md:max-w-none" />

        <div>
          <h2 className="kinetic-accent neon-text text-3xl font-bold md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-lg text-ink/60 md:text-xl">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
