export function OutcomeStrip({
  items,
}: {
  items: { k: string; label: string; detail: string }[];
}) {
  return (
    <section className="border-t border-ink-900/8 bg-bone-100/40">
      <div className="mx-auto max-w-page px-6 py-20 lg:px-10 lg:py-24">
        <p className="label">Outcomes from the install cohort</p>
        <ul className="mt-10 grid grid-cols-1 divide-y divide-ink-900/8 border-y border-ink-900/8 md:grid-cols-4 md:divide-x md:divide-y-0">
          {items.map((it, i) => (
            <li
              key={it.label}
              className={`flex flex-col py-8 ${i > 0 ? "md:pl-8" : "md:pr-8"} ${
                i > 0 && i < items.length - 1 ? "md:px-8" : ""
              }`}
            >
              <p className="num display text-3xl text-ink-900 md:text-4xl">
                {it.k}
              </p>
              <p className="mt-3 text-[13.5px] font-medium text-ink-900">
                {it.label}
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-ink-700/75">
                {it.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
