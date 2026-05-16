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
        <img
          src="/staging-before.jpg"
          alt="Empty room — before staging"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${(1 - pos) * 100}% 0 0)` }}
        >
          <img
            src="/staging-after.png"
            alt="Same room — virtually staged"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
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
