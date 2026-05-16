import { Reveal, RevealItem } from "@/components/Reveal";

type Step = {
  tag: string;
  title: string;
  body: string;
  meta?: string;
};

export function Process({
  eyebrow,
  heading,
  emphasis,
  intro,
  steps,
}: {
  eyebrow: string;
  heading: string;
  emphasis?: string;
  intro: string;
  steps: Step[];
}) {
  return (
    <section className="border-t border-ink-900/8 bg-bone-100/40">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-28">
        <div className="lg:col-span-4">
          <p className="label">{eyebrow}</p>
          <h2 className="display mt-6 text-3xl text-ink-900 md:text-4xl lg:text-[44px]">
            {heading}
            {emphasis && (
              <em className="block not-italic text-ink-700/55">{emphasis}</em>
            )}
          </h2>
          <p className="mt-6 max-w-[40ch] text-[14.5px] leading-relaxed text-ink-700/85">
            {intro}
          </p>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <ol className="flex flex-col">
              {steps.map((s, i) => (
                <RevealItem
                  key={s.title}
                  className="grid grid-cols-1 gap-6 border-b border-ink-900/8 py-9 last:border-b-0 md:grid-cols-12 md:gap-10"
                >
                  <div className="md:col-span-3">
                    <p className="num text-[11px] text-ink-700/55">
                      {String(i + 1).padStart(2, "0")} · {s.tag}
                    </p>
                    {s.meta && (
                      <p className="num mt-2 text-[11px] text-moss-700">
                        {s.meta}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="display text-2xl text-ink-900 md:text-[26px]">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-[58ch] text-[14.5px] leading-relaxed text-ink-700/85">
                      {s.body}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
