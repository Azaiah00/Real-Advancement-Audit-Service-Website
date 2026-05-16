"use client";

import { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Persona = {
  name: string;
  role: string;
  tag: string;
  stat: { label: string; value: string };
  bio: string;
};

const personas: Persona[] = [
  {
    name: "Marisol Esquivel",
    role: "Founding Broker · Esquivel Property Co.",
    tag: "Luxury · Lakeshore + Pilsen",
    stat: { label: "avg list-to-close", value: "21d" },
    bio: "Native-Spanish, third-generation Chicago. Closes against a tight inventory by routing buyers through neighborhoods most agents skip.",
  },
  {
    name: "Beckett Halloran",
    role: "Team Lead · Halberg & Quinn Realty",
    tag: "Suburban + new-build",
    stat: { label: "this year", value: "$41.2M" },
    bio: "Architect-turned-broker. Reads floor plans for clients before they walk a property. Strongest with families relocating in.",
  },
  {
    name: "Yuki Ogawa-Reid",
    role: "Principal · Ogawa-Reid Brokerage",
    tag: "First-time buyers + condos",
    stat: { label: "satisfaction", value: "4.94" },
    bio: "Quiet operator. Builds 30-page buyer dossiers covering HOA history, micro-comps, and resale-risk scoring before the first showing.",
  },
];

export const SmartProfileCard = memo(function SmartProfileCard() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % personas.length), 4200);
    return () => clearInterval(id);
  }, []);
  const p = personas[i];

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="label">Smart Profile · live preview</p>
        <p className="num text-[11px] text-ink-700/55">v2.41</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ type: "spring", stiffness: 110, damping: 22 }}
          className="flex flex-1 flex-col"
        >
          <div className="flex items-start gap-4">
            <Avatar name={p.name} />
            <div className="min-w-0 flex-1">
              <p className="display text-2xl text-ink-900">{p.name}</p>
              <p className="mt-1 text-[12.5px] text-ink-700/75">{p.role}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-moss-500/20 bg-moss-50 px-2 py-0.5 text-[11px] text-moss-700">
                <span className="inline-block h-1 w-1 rounded-full bg-moss-500" />
                {p.tag}
              </span>
            </div>
          </div>

          <p className="mt-5 max-w-[42ch] text-[13px] leading-relaxed text-ink-700/85">
            {p.bio}
          </p>

          <div className="mt-auto flex items-end justify-between border-t border-ink-900/8 pt-4">
            <div>
              <p className="num text-[11px] text-ink-700/55">{p.stat.label}</p>
              <p className="display text-2xl text-ink-900">{p.stat.value}</p>
            </div>
            <div className="flex items-center gap-1.5">
              {personas.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1 w-5 rounded-full transition-colors duration-500 ${idx === i ? "bg-ink-900" : "bg-ink-900/12"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

function Avatar({ name }: { name: string }) {
  const seed = encodeURIComponent(name);
  return (
    <div className="relative">
      <div className="h-16 w-16 overflow-hidden rounded-2xl border border-ink-900/8 bg-bone-100">
        <img
          alt=""
          src={`https://picsum.photos/seed/${seed}/200/200`}
          className="h-full w-full object-cover"
        />
      </div>
      <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full border border-ink-900/10 bg-white text-[10px] text-moss-700">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-moss-500" />
      </span>
    </div>
  );
}
