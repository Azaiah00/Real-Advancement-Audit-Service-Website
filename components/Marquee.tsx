const partners = [
  "Halberg & Quinn Realty",
  "Crestmont Build Group",
  "Wendover Home Services",
  "Brookline Atelier",
  "Esquivel Property Co.",
  "Northpine Construction",
  "Ogawa-Reid Brokerage",
  "Marin Coastal Builders",
];

export function Marquee() {
  const row = [...partners, ...partners];
  return (
    <section className="border-y border-ink-900/8 bg-bone-50/80 py-6">
      <div className="mx-auto max-w-page overflow-hidden px-6 lg:px-10">
        <div className="flex items-center gap-10">
          <p className="label shrink-0">Sat with operators at</p>
          <div className="relative flex-1 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bone-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bone-50 to-transparent" />
            <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
              {row.map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="flex items-center gap-3 text-[14px] tracking-tight text-ink-800/85"
                >
                  <Dot />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-moss-500">
      <circle cx="6" cy="6" r="2" fill="currentColor" />
    </svg>
  );
}
