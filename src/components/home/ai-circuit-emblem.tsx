"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const CX = 200;
const CY = 200;
const RING_R = 62;
const RAY_COUNT = 28;

function polar(angleDeg: number, r: number): [number, number] {
  const rad = (angleDeg * Math.PI) / 180;
  return [CX + Math.cos(rad) * r, CY + Math.sin(rad) * r];
}

function rayPath(angle: number, len: number) {
  const [sx, sy] = polar(angle, RING_R);
  const [ex, ey] = polar(angle, RING_R + len);
  return `M${sx.toFixed(1)},${sy.toFixed(1)} L${ex.toFixed(1)},${ey.toFixed(1)}`;
}

/** Deterministic (not random) so server and client render the same markup. */
const RAYS = Array.from({ length: RAY_COUNT }, (_, i) => ({
  id: i,
  angle: (i / RAY_COUNT) * 360,
  len: 60 + ((i * 37) % 5) * 16,
}));

const PULSE_RAY_IDS = [2, 9, 17, 23];

/**
 * Radiating neon circuit converging on a glowing "AI" chip — built from the
 * same trace/glow technique as the hero's IsoScene, so it reads as one
 * family of visuals rather than a dropped-in stock graphic.
 */
export default function AiCircuitEmblem({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square w-full ${className}`} aria-hidden="true">
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full overflow-visible"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <defs>
          <radialGradient id="aiCoreGlow">
            <stop offset="0%" stopColor="#fb3640" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#fb3640" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fb3640" stopOpacity="0" />
          </radialGradient>
          <filter id="aiNeon" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r={RING_R + 90} fill="url(#aiCoreGlow)" opacity="0.5" />
        <circle
          cx={CX}
          cy={CY}
          r={RING_R}
          fill="none"
          stroke="#fb3640"
          strokeOpacity="0.25"
          strokeWidth="1"
        />

        <g strokeLinecap="round">
          {RAYS.map((ray) => {
            const [ex, ey] = polar(ray.angle, RING_R + ray.len);
            const hasVia = ray.id % 3 === 0;
            return (
              <g key={ray.id}>
                <path
                  d={rayPath(ray.angle, ray.len)}
                  stroke="#fb3640"
                  strokeOpacity="0.5"
                  strokeWidth="1.4"
                  filter="url(#aiNeon)"
                />
                {hasVia && (
                  <circle
                    cx={ex}
                    cy={ey}
                    r="3"
                    fill="none"
                    stroke="#fb3640"
                    strokeWidth="1.2"
                    opacity="0.7"
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* Light travelling outward along a handful of traces */}
        {PULSE_RAY_IDS.map((idx, k) => {
          const ray = RAYS[idx];
          return (
            <motion.path
              key={idx}
              d={rayPath(ray.angle, ray.len)}
              pathLength={100}
              stroke="#fff2d1"
              strokeWidth="2"
              strokeDasharray="10 90"
              filter="url(#aiNeon)"
              initial={{ strokeDashoffset: 100, opacity: 0 }}
              animate={{ strokeDashoffset: [100, 0], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.3,
                delay: k * 0.5,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "linear",
              }}
            />
          );
        })}
      </motion.svg>

      {/* Embossed chip, kept in HTML for crisp type and a real box-shadow glow. */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[22%] border border-brand-red/50"
        style={{
          background: "linear-gradient(145deg, #2a0607, #150304)",
          boxShadow: "0 0 30px rgba(251,54,64,0.45), inset 0 0 20px rgba(251,54,64,0.25)",
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
      >
        <span
          className="text-4xl font-bold text-brand-red md:text-5xl"
          style={{ textShadow: "0 0 18px rgba(251,54,64,0.85)" }}
        >
          AI
        </span>
      </motion.div>
    </div>
  );
}
