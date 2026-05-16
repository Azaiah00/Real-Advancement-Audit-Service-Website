"use client";

import { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const StagingRevealCard = memo(function StagingRevealCard() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(0.46);
  const dragging = useRef(false);

  useEffect(() => {
    let raf = 0;
    let t = 0;
    const tick = () => {
      if (!dragging.current) {
        t += 0.012;
        setPos(0.5 + Math.sin(t) * 0.28);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    setPos(Math.max(0.04, Math.min(0.96, x)));
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="label">Virtual staging · before / after</p>
        <p className="num text-[11px] text-ink-700/55">render · 11s</p>
      </div>

      <div
        ref={ref}
        onMouseMove={(e) => dragging.current && onMove(e.clientX)}
        onMouseDown={(e) => {
          dragging.current = true;
          onMove(e.clientX);
        }}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-ink-900/8 bg-bone-100"
      >
        <EmptyRoom />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${(1 - pos) * 100}% 0 0)` }}
        >
          <StagedRoom />
        </div>

        <motion.div
          className="absolute inset-y-0 z-20 flex w-px items-center justify-center bg-white/85 shadow-[0_0_0_1px_rgba(20,24,28,0.05)]"
          style={{ left: `calc(${pos * 100}% - 0.5px)` }}
        >
          <div className="grid h-9 w-9 cursor-ew-resize place-items-center rounded-full border border-ink-900/10 bg-white/90 shadow-diffusion backdrop-blur">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-ink-900">
              <path
                d="M6 4 L3 8 L6 12 M10 4 L13 8 L10 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>

        <span className="num absolute left-3 top-3 z-10 rounded-full border border-ink-900/10 bg-white/85 px-2 py-0.5 text-[10.5px] text-ink-800 backdrop-blur">
          empty
        </span>
        <span className="num absolute right-3 top-3 z-10 rounded-full border border-moss-500/20 bg-moss-50/95 px-2 py-0.5 text-[10.5px] text-moss-700 backdrop-blur">
          staged
        </span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-ink-900/8 border-t border-ink-900/8 pt-4">
        <Stat label="time-on-mkt" value="-37.4%" />
        <Stat label="render cost" value="$48" inset />
        <Stat label="turnaround" value="18h" align="right" />
      </div>
    </div>
  );
});

function EmptyRoom() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full">
      <defs>
        <linearGradient id="floor" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e8e3d4" />
          <stop offset="100%" stopColor="#cdc6b1" />
        </linearGradient>
        <linearGradient id="wall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f4f1e8" />
          <stop offset="100%" stopColor="#e9e5d6" />
        </linearGradient>
      </defs>
      <rect width="800" height="320" fill="url(#wall)" />
      <polygon points="0,320 800,320 720,500 80,500" fill="url(#floor)" />
      <rect x="120" y="80" width="180" height="200" fill="#e9e5d6" stroke="#cfcab8" strokeWidth="2" />
      <rect x="135" y="95" width="150" height="170" fill="#dfd9c5" />
      <line x1="210" y1="95" x2="210" y2="265" stroke="#bdb6a2" strokeWidth="1" />
      <line x1="135" y1="180" x2="285" y2="180" stroke="#bdb6a2" strokeWidth="1" />
      <rect x="540" y="200" width="140" height="120" fill="#e0d9c2" stroke="#c0b9a3" strokeWidth="1.5" />
      <line x1="0" y1="320" x2="800" y2="320" stroke="#b6ad95" strokeWidth="1" />
    </svg>
  );
}

function StagedRoom() {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full">
      <defs>
        <linearGradient id="floor2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#d6cdb2" />
          <stop offset="100%" stopColor="#a8a085" />
        </linearGradient>
        <linearGradient id="wall2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f1ece0" />
          <stop offset="100%" stopColor="#e4dfce" />
        </linearGradient>
        <linearGradient id="window" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff8d6" />
          <stop offset="100%" stopColor="#f1d6a0" />
        </linearGradient>
      </defs>
      <rect width="800" height="320" fill="url(#wall2)" />
      <polygon points="0,320 800,320 720,500 80,500" fill="url(#floor2)" />
      <rect x="120" y="80" width="180" height="200" fill="url(#window)" stroke="#9c8c6b" strokeWidth="2" />
      <line x1="210" y1="80" x2="210" y2="280" stroke="#9c8c6b" strokeWidth="1.5" />
      <line x1="120" y1="180" x2="300" y2="180" stroke="#9c8c6b" strokeWidth="1.5" />
      <rect x="80" y="380" width="280" height="90" rx="8" fill="#3a3a37" />
      <rect x="92" y="345" width="36" height="40" rx="6" fill="#5a564d" />
      <rect x="312" y="345" width="36" height="40" rx="6" fill="#5a564d" />
      <rect x="120" y="360" width="180" height="22" rx="5" fill="#e8dfc7" />
      <rect x="430" y="300" width="40" height="160" rx="4" fill="#4a463d" />
      <ellipse cx="450" cy="300" rx="50" ry="14" fill="#cdc6b1" />
      <rect x="540" y="200" width="140" height="120" fill="url(#window)" stroke="#9c8c6b" strokeWidth="1.5" />
      <rect x="520" y="320" width="180" height="22" rx="3" fill="#7a6f55" />
      <rect x="560" y="280" width="100" height="40" rx="3" fill="#a89875" />
      <circle cx="610" cy="300" r="8" fill="#e0d4a8" />
      <line x1="0" y1="320" x2="800" y2="320" stroke="#86795c" strokeWidth="1.5" />
    </svg>
  );
}

function Stat({
  label,
  value,
  align = "left",
  inset,
}: {
  label: string;
  value: string;
  align?: "left" | "right";
  inset?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${align === "right" ? "items-end pl-3" : "pr-3"} ${inset ? "px-3" : ""}`}
    >
      <p className="num text-[11px] text-ink-700/55">{label}</p>
      <p className="num mt-1 text-base text-ink-900">{value}</p>
    </div>
  );
}
