"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

const items = [
  { href: "/services/ai-audits", label: "AI Audits" },
  { href: "/services/cma", label: "CMA Engine" },
  { href: "/services/smart-profiles", label: "Smart Profiles" },
  { href: "/services/renderings", label: "Renderings" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 110, damping: 22 }}
        className={cn(
          "flex w-full max-w-page items-center justify-between gap-6",
          "rounded-full border border-ink-900/8 bg-white/70 px-3 py-2 pl-5 backdrop-blur-xl",
          "shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_18px_40px_-24px_rgba(20,24,28,0.18)]",
        )}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <Mark />
          <span className="text-[15px] font-medium tracking-tight">
            Real Advancement
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative rounded-full px-3 py-1.5 text-[13.5px] text-ink-700 transition-colors duration-300 ease-editorial hover:text-ink-900"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-bone-100 opacity-0 transition-all duration-300 ease-editorial group-hover:scale-100 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/#book"
            className="hidden rounded-full bg-ink-900 px-4 py-2 text-[13px] font-medium text-bone-50 transition-transform duration-200 ease-editorial active:translate-y-[1px] md:inline-flex"
          >
            Reserve the intake
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-900/8 bg-white/80 md:hidden"
          >
            {open ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            className="absolute inset-x-4 top-[72px] z-30 overflow-hidden rounded-3xl border border-ink-900/8 bg-white/95 p-2 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] text-ink-800 transition-colors hover:bg-bone-100"
                  >
                    {item.label}
                    <span className="num text-[11px] text-ink-700/50">
                      /{item.href.split("/").pop()}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="px-2 py-2">
                <Link
                  href="/#book"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-ink-900 px-4 py-3 text-[14px] font-medium text-bone-50"
                >
                  Reserve the intake
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Mark() {
  return (
    <span className="relative grid h-8 w-8 place-items-center">
      {/* Brand mark — original is gold; flattened to ink for the editorial palette. */}
      <img
        src="/logo-ra.png"
        alt="Real Advancement"
        className="h-8 w-8 object-contain [filter:brightness(0)]"
      />
    </span>
  );
}
