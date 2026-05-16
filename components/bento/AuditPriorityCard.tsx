"use client";

import { motion, AnimatePresence } from "framer-motion";
import { memo, useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
  source: string;
  minutes: number;
  badge: "AI" | "Human" | "Defer";
};

const initial: Task[] = [
  { id: "lead-follow", title: "Follow up with 7 expired leads", source: "Sierra CRM", minutes: 42, badge: "AI" },
  { id: "cma-build", title: "Draft CMA — 4218 Lawndale Ave.", source: "MLS pull", minutes: 28, badge: "AI" },
  { id: "showing", title: "Showing prep — Esquivel listing", source: "Calendar", minutes: 18, badge: "Human" },
  { id: "stager", title: "Confirm stager swap for Friday", source: "Slack", minutes: 6, badge: "Human" },
  { id: "subs", title: "Reconcile subcontractor receipts", source: "QuickBooks", minutes: 35, badge: "AI" },
  { id: "reno-vid", title: "Cut walkthrough reel — Lot 3", source: "Drive", minutes: 22, badge: "Defer" },
];

const orders = [
  ["lead-follow", "cma-build", "subs", "showing", "stager", "reno-vid"],
  ["cma-build", "lead-follow", "showing", "subs", "stager", "reno-vid"],
  ["subs", "cma-build", "lead-follow", "stager", "reno-vid", "showing"],
  ["lead-follow", "subs", "cma-build", "showing", "stager", "reno-vid"],
];

export const AuditPriorityCard = memo(function AuditPriorityCard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % orders.length), 3200);
    return () => clearInterval(id);
  }, []);

  const ordered = orders[step]
    .map((id) => initial.find((t) => t.id === id))
    .filter(Boolean) as Task[];

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 animate-breathe rounded-full bg-moss-500" />
          </span>
          <p className="label">Live priority — your Tuesday</p>
        </div>
        <p className="num text-[11px] text-ink-700/55">re-sorting · 14s</p>
      </div>

      <ul className="flex flex-col">
        <AnimatePresence initial={false}>
          {ordered.slice(0, 5).map((task, idx) => (
            <motion.li
              key={task.id}
              layout
              layoutId={task.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 110, damping: 22 }}
              className="flex items-center justify-between gap-3 border-b border-ink-900/8 py-3 last:border-b-0"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="num w-5 shrink-0 text-[11px] text-ink-700/45">
                  0{idx + 1}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-medium text-ink-900">
                    {task.title}
                  </p>
                  <p className="num truncate text-[11px] text-ink-700/55">
                    {task.source} · {task.minutes}m
                  </p>
                </div>
              </div>
              <Badge kind={task.badge} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
});

function Badge({ kind }: { kind: Task["badge"] }) {
  const styles =
    kind === "AI"
      ? "bg-moss-50 text-moss-700 border-moss-500/20"
      : kind === "Human"
        ? "bg-bone-100 text-ink-800 border-ink-900/10"
        : "bg-bone-50 text-ink-700/60 border-ink-900/8";
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10.5px] uppercase tracking-[0.14em] ${styles}`}
    >
      {kind}
    </span>
  );
}
