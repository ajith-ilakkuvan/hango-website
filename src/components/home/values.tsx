"use client";

import { motion } from "motion/react";
import { MagneticLink } from "@/components/motion/magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Closing call to action — enters with a zoom-fade. */
export function ClosingCta() {
  return (
    <section className="relative overflow-hidden veil-0">
      <div className="circuit-floor pointer-events-none absolute inset-0" aria-hidden="true" />
      <motion.div
        className="relative mx-auto max-w-6xl px-6 py-32 md:py-40"
        initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <h2 className="max-w-2xl text-3xl font-bold text-ink md:text-5xl">
          Ready to grow with Hango?
        </h2>
        <p className="mt-4 max-w-xl text-ink/55">
          Tell us about your business and we&apos;ll put together a plan.
        </p>
        <div className="mt-8">
          <MagneticLink href="/contact" className="btn-primary" strength={12} arrow>
            Get in touch
          </MagneticLink>
        </div>
      </motion.div>
    </section>
  );
}
