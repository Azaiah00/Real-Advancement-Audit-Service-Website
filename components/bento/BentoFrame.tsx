import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function BentoFrame({
  href,
  index,
  title,
  blurb,
  children,
  className,
  cta,
}: {
  href: string;
  index: string;
  title: string;
  blurb: string;
  children: ReactNode;
  className?: string;
  cta?: string;
}) {
  return (
    <article className={cn("flex flex-col gap-5", className)}>
      <div
        className={cn(
          "relative flex min-h-[360px] flex-col rounded-5xl border border-ink-900/8 bg-white p-8 shadow-diffusion lg:p-10",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-5xl before:shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
        )}
      >
        {children}
      </div>
      <div className="flex items-end justify-between gap-6 px-1">
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="num text-[11px] text-ink-700/50">{index}</span>
            <h3 className="display text-[22px] text-ink-900">{title}</h3>
          </div>
          <p className="mt-1.5 max-w-[40ch] text-[13.5px] leading-relaxed text-ink-700/80">
            {blurb}
          </p>
        </div>
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink-900/10 bg-white/70 px-3.5 py-2 text-[12.5px] text-ink-900 transition-colors hover:bg-bone-100"
        >
          {cta ?? "See the service"}
          <ArrowUpRight
            size={14}
            weight="bold"
            className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
