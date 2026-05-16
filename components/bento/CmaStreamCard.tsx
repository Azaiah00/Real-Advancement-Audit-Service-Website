"use client";

import { memo } from "react";

type Comp = {
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  price: number;
  dom: number;
  delta: number;
};

const comps: Comp[] = [
  { address: "4218 Lawndale Ave", beds: 4, baths: 2.5, sqft: 2412, price: 712000, dom: 11, delta: 4.2 },
  { address: "227 Crescent Row",  beds: 3, baths: 2,   sqft: 1980, price: 638500, dom: 6,  delta: -1.8 },
  { address: "1109 Northpine Dr", beds: 5, baths: 3.5, sqft: 3148, price: 894200, dom: 23, delta: 2.1 },
  { address: "612 Salter St",     beds: 3, baths: 2,   sqft: 1845, price: 599000, dom: 8,  delta: 3.4 },
  { address: "88 Brookline Ln",   beds: 4, baths: 3,   sqft: 2602, price: 768900, dom: 14, delta: -0.6 },
  { address: "3045 Marin Pl",     beds: 4, baths: 2.5, sqft: 2310, price: 689000, dom: 9,  delta: 5.7 },
];

const fmt = (n: number) => "$" + n.toLocaleString("en-US");

export const CmaStreamCard = memo(function CmaStreamCard() {
  const row = [...comps, ...comps];
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="label">CMA stream · live comps</p>
        <div className="flex items-center gap-2 text-[11px] text-ink-700/55">
          <span className="num">last sync 00:47</span>
          <span className="inline-block h-1.5 w-1.5 animate-breathe rounded-full bg-moss-500" />
        </div>
      </div>

      <div className="relative -mx-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-4 px-6">
          {row.map((c, i) => (
            <article
              key={`${c.address}-${i}`}
              className="w-[230px] shrink-0 rounded-2xl border border-ink-900/8 bg-bone-50/70 p-4"
            >
              <div className="flex items-baseline justify-between">
                <p className="num text-[11px] text-ink-700/55">/{(i % comps.length) + 1}</p>
                <p
                  className={`num text-[11px] ${c.delta >= 0 ? "text-moss-600" : "text-rose-600/80"}`}
                >
                  {c.delta >= 0 ? "+" : ""}
                  {c.delta.toFixed(1)}%
                </p>
              </div>
              <p className="mt-2 truncate text-[13.5px] font-medium tracking-tight text-ink-900">
                {c.address}
              </p>
              <p className="num mt-0.5 text-[11px] text-ink-700/60">
                {c.beds}bd · {c.baths}ba · {c.sqft.toLocaleString()} sf
              </p>
              <div className="mt-3 flex items-end justify-between">
                <p className="display text-xl text-ink-900">{fmt(c.price)}</p>
                <p className="num text-[11px] text-ink-700/55">DOM {c.dom}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-ink-900/8 border-t border-ink-900/8 pt-4">
        <Stat label="median $/sf" value="$321" />
        <Stat label="median DOM" value="11d" inset />
        <Stat label="active sample" value="312" align="right" />
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
