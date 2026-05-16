"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 });

  const innerX = useTransform(sx, (v) => v * 0.45);
  const innerY = useTransform(sy, (v) => v * 0.45);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isPrimary = variant === "primary";
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  const className_ = cn(
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-[14px] font-medium transition-shadow duration-300 ease-editorial active:translate-y-[1px]",
    isPrimary
      ? "bg-ink-900 text-bone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
      : "border border-ink-900/12 bg-white/60 text-ink-900 hover:bg-white",
    className,
  );

  const innerNodes = (
    <>
      <motion.span
        style={{ x: innerX, y: innerY }}
        className="relative z-10 flex items-center gap-2"
      >
        {children}
        <ArrowRight
          size={14}
          weight="bold"
          className="translate-x-0 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5"
        />
      </motion.span>
      {isPrimary && (
        <span className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-white/0 via-white/0 to-white/[0.05]" />
      )}
    </>
  );

  return (
    <motion.span style={{ display: "inline-block" }}>
      <motion.span style={{ x: sx, y: sy, display: "inline-block" }}>
        {isExternal ? (
          <a
            ref={ref}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={className_}
          >
            {innerNodes}
          </a>
        ) : (
          <Link
            ref={ref}
            href={href}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={className_}
          >
            {innerNodes}
          </Link>
        )}
      </motion.span>
    </motion.span>
  );
}
