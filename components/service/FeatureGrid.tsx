import type { ComponentType } from "react";

export function FeatureGrid({
  eyebrow,
  heading,
  features,
}: {
  eyebrow: string;
  heading: string;
  features: { Icon: ComponentType<any>; title: string; body: string }[];
}) {
  return (
    <section className="border-t border-ink-900/8">
      <div className="mx-auto max-w-page px-6 py-24 lg:px-10 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="label">{eyebrow}</p>
            <h2 className="display mt-5 max-w-[24ch] text-3xl text-ink-900 md:text-4xl lg:text-[44px]">
              {heading}
            </h2>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 divide-y divide-ink-900/8 border-y border-ink-900/8 md:grid-cols-2 md:divide-x md:divide-y-0">
          {features.map((f, i) => (
            <li
              key={f.title}
              className={`flex gap-5 py-8 ${i > 0 && "md:py-8"} ${
                i % 2 === 0 ? "md:pr-10" : "md:pl-10"
              }`}
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink-900/8 bg-white text-moss-700">
                <f.Icon size={18} weight="duotone" />
              </div>
              <div>
                <h3 className="text-[16px] font-medium text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-ink-700/85">
                  {f.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
