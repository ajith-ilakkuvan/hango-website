"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { MagneticLink } from "@/components/motion/magnetic";
import type { ProjectService } from "@/data/services";

/**
 * Horizontal scroll-jacked reel: the section pins while vertical scroll
 * drives the card track sideways, one service at a time — the same "step
 * through it" feel as Growth Stack's spotlight, turned 90°.
 *
 * Pin only kicks in when the scene actually fits the viewport (matches
 * Growth Stack's rule) and motion is allowed; otherwise the track falls
 * back to plain touch/trackpad horizontal scrolling, so it's never
 * unusable on short screens, small phones, or with reduced motion.
 */
export default function ServicesReel({
  services,
}: {
  services: readonly ProjectService[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (!sectionRef.current || !trackRef.current || !wrapperRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const fits =
        window.innerWidth >= 768 &&
        sectionRef.current.offsetHeight <= window.innerHeight + 4;
      if (!fits) return;

      wrapperRef.current.style.overflow = "visible";

      const getDistance = () => trackRef.current!.scrollWidth - window.innerWidth;

      const tween = gsap.to(trackRef.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
            const idx = Math.min(
              services.length - 1,
              Math.round(self.progress * (services.length - 1)),
            );
            setActive((prev) => (prev === idx ? prev : idx));
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: sectionRef, dependencies: [services.length] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden veil-1 py-20 md:flex md:min-h-screen md:flex-col md:justify-center md:py-0"
    >
      <div className="circuit-floor pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <h2 className="max-w-2xl text-3xl font-bold text-ink md:text-5xl">What We Do</h2>
        <p className="mt-3 max-w-xl text-ink/60">
          One partner, every discipline. Scroll to move through the full stack of services we run
          for clients.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="relative h-px flex-1 bg-ink/10">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-0 bg-brand-red"
              style={{ boxShadow: "0 0 10px rgba(251,54,64,0.8)" }}
            />
          </div>
          <span className="shrink-0 font-mono text-xs text-ink/45">
            {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div ref={wrapperRef} className="mt-10 overflow-x-auto pb-4 md:mt-14 md:pb-0">
        <div
          ref={trackRef}
          className="flex w-max gap-6 px-6 will-change-transform md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:pr-[12vw]"
        >
          {services.map((service, i) => (
            <div
              key={service.slug}
              data-cursor="card"
              className="group flex w-[280px] shrink-0 flex-col rounded-[18px] border border-ink/10 bg-[var(--color-surface-2)]/70 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-brand-red/50 sm:w-[340px] md:w-[380px]"
            >
              <span className="font-mono text-sm text-brand-red/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-ink transition-colors duration-500 group-hover:text-brand-red">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-ink/55">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-ink/10 pt-6">
                {service.includes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-brand-red/80">
                {service.pricingNote}
              </p>
            </div>
          ))}

          <div className="flex w-[280px] shrink-0 flex-col items-start justify-center rounded-[18px] border border-dashed border-ink/20 p-8 sm:w-[340px] md:w-[380px]">
            <h3 className="text-xl font-semibold text-ink">See everything we offer</h3>
            <p className="mt-2 text-ink/55">
              Retainers, pricing tiers, and every one-time project package in one place.
            </p>
            <div className="mt-6">
              <MagneticLink href="/services" className="btn-secondary-invert" arrow>
                View all services
              </MagneticLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
