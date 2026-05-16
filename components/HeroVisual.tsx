"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const orbits = [
  { r: 110, dur: 28, phase: 0,    items: ["CRM", "MLS", "DocuSign", "Slack"] },
  { r: 168, dur: 44, phase: 0.25, items: ["QuickBooks", "Gmail", "Calendar", "Stager", "Drive"] },
  { r: 230, dur: 62, phase: 0.5,  items: ["Lender", "Title", "Inspector", "Photographer", "Stager", "Subs"] },
];

export const HeroVisual = memo(function HeroVisual() {
  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="-300 -300 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(47,86,64,0.16)" />
            <stop offset="60%" stopColor="rgba(47,86,64,0.04)" />
            <stop offset="100%" stopColor="rgba(47,86,64,0)" />
          </radialGradient>
        </defs>

        <circle cx="0" cy="0" r="280" fill="url(#halo)" />

        {orbits.map((o, i) => (
          <circle
            key={i}
            cx="0"
            cy="0"
            r={o.r}
            fill="none"
            stroke="rgba(20,24,28,0.08)"
            strokeWidth="1"
            strokeDasharray={i === 1 ? "2 4" : undefined}
          />
        ))}

        <g>
          <circle cx="0" cy="0" r="58" fill="#0c0c0a" />
          <circle cx="0" cy="0" r="58" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <text
            x="0"
            y="-2"
            textAnchor="middle"
            className="fill-bone-50"
            style={{ fontFamily: "var(--font-geist-mono)", fontSize: 10, letterSpacing: 1.6 }}
          >
            CORE
          </text>
          <text
            x="0"
            y="14"
            textAnchor="middle"
            className="fill-moss-400"
            style={{ fontFamily: "var(--font-geist-sans)", fontSize: 11, fontWeight: 600 }}
          >
            your op
          </text>
        </g>
      </svg>

      {orbits.map((o, oi) => (
        <Orbit key={oi} {...o} />
      ))}

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 translate-y-[176px] gap-4 text-[10.5px] text-ink-700/55">
        <Legend swatch="bg-moss-500" label="installed by Real Advancement" />
        <Legend swatch="bg-ink-900/25" label="audited · kept · simplified" />
      </div>
    </div>
  );
});

function Orbit({
  r,
  dur,
  phase,
  items,
}: {
  r: number;
  dur: number;
  phase: number;
  items: string[];
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ width: 0, height: 0 }}
      initial={{ rotate: phase * 360 }}
      animate={{ rotate: phase * 360 + 360 }}
      transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
    >
      {items.map((label, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        const installed = (i + Math.round(phase * 7)) % 3 === 0;
        return (
          <motion.div
            key={label + i}
            className="absolute"
            style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
            animate={{ rotate: -(phase * 360 + 360) }}
            transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
          >
            <Chip label={label} installed={installed} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function Chip({ label, installed }: { label: string; installed: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] backdrop-blur-md ${
        installed
          ? "border-moss-500/30 bg-moss-50/90 text-moss-700"
          : "border-ink-900/10 bg-white/85 text-ink-800"
      }`}
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${installed ? "bg-moss-500" : "bg-ink-700/35"}`}
      />
      {label}
    </span>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${swatch}`} />
      {label}
    </span>
  );
}
