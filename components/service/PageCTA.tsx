import { MagneticButton } from "@/components/MagneticButton";

export function PageCTA({
  eyebrow,
  heading,
  emphasis,
  blurb,
  primary = { href: "/#book", label: "Book the 45-min audit" },
  secondary,
}: {
  eyebrow: string;
  heading: string;
  emphasis?: string;
  blurb: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string; external?: boolean };
}) {
  return (
    <section className="border-t border-ink-900/8">
      <div className="mx-auto max-w-page px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="label">{eyebrow}</p>
            <h2 className="display mt-6 text-4xl text-ink-900 md:text-5xl lg:text-[56px]">
              {heading}
              {emphasis && (
                <em className="block not-italic text-moss-700">{emphasis}</em>
              )}
            </h2>
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="max-w-[44ch] text-[15px] leading-relaxed text-ink-700/85">
              {blurb}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton href={primary.href}>{primary.label}</MagneticButton>
              {secondary &&
                (secondary.external ? (
                  <a
                    href={secondary.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink-900/12 bg-white/60 px-5 py-3 text-[14px] text-ink-900 transition-colors hover:bg-white"
                  >
                    {secondary.label}
                  </a>
                ) : (
                  <a
                    href={secondary.href}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-900/12 bg-white/60 px-5 py-3 text-[14px] text-ink-900 transition-colors hover:bg-white"
                  >
                    {secondary.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
