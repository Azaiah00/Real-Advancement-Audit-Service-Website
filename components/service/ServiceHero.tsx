import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal, RevealItem } from "@/components/Reveal";
import type { ReactNode } from "react";

export function ServiceHero({
  eyebrow,
  index,
  title,
  emphasis,
  blurb,
  metrics,
  visual,
  primaryCta = { href: "/#book", label: "Book the audit" },
  secondaryCta,
}: {
  eyebrow: string;
  index: string;
  title: string;
  emphasis: string;
  blurb: string;
  metrics: { value: string; label: string }[];
  visual: ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string; external?: boolean };
}) {
  return (
    <section className="relative pt-36 lg:pt-44">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-28">
        <div className="lg:col-span-7">
          <Reveal>
            <RevealItem>
              <div className="flex items-center gap-3">
                <span className="num text-[11px] text-ink-700/55">{index}</span>
                <span className="h-px w-8 bg-ink-700/20" />
                <p className="label">{eyebrow}</p>
              </div>
            </RevealItem>
            <RevealItem className="mt-7">
              <h1 className="display text-[40px] text-ink-900 sm:text-[52px] md:text-[64px] lg:text-[76px]">
                {title}
                <em className="block not-italic text-moss-700">{emphasis}</em>
              </h1>
            </RevealItem>
            <RevealItem className="mt-7 max-w-[58ch]">
              <p className="text-[16px] leading-relaxed text-ink-700/90 md:text-[17px]">
                {blurb}
              </p>
            </RevealItem>
            <RevealItem className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton href={primaryCta.href}>
                {primaryCta.label}
              </MagneticButton>
              {secondaryCta &&
                (secondaryCta.external ? (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-ink-900/12 bg-white/60 px-5 py-3 text-[14px] text-ink-900 transition-colors hover:bg-white"
                  >
                    {secondaryCta.label}
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ) : (
                  <Link
                    href={secondaryCta.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-ink-900/12 bg-white/60 px-5 py-3 text-[14px] text-ink-900 transition-colors hover:bg-white"
                  >
                    {secondaryCta.label}
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5"
                    />
                  </Link>
                ))}
            </RevealItem>

            <RevealItem className="mt-12 grid w-full max-w-xl grid-cols-3 divide-x divide-ink-900/8 border-t border-ink-900/8 pt-6">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex flex-col ${i === metrics.length - 1 ? "items-end pl-4" : "pr-4"} ${i > 0 && i < metrics.length - 1 ? "px-4" : ""}`}
                >
                  <p className="num display text-2xl text-ink-900">{m.value}</p>
                  <p className="mt-2 max-w-[16ch] text-[11.5px] leading-snug text-ink-700/70">
                    {m.label}
                  </p>
                </div>
              ))}
            </RevealItem>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative h-[420px] w-full overflow-hidden rounded-5xl border border-ink-900/8 bg-white p-8 shadow-diffusion lg:h-[480px]">
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}
