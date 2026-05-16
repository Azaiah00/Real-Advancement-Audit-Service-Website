import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal, RevealItem } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { ExplodingView } from "@/components/ExplodingView";
import { BentoFrame } from "@/components/bento/BentoFrame";
import { AuditPriorityCard } from "@/components/bento/AuditPriorityCard";
import { CmaStreamCard } from "@/components/bento/CmaStreamCard";
import { SmartProfileCard } from "@/components/bento/SmartProfileCard";
import { StagingRevealCard } from "@/components/bento/StagingRevealCard";

export default function Home() {
  return (
    <>
      <Hero />
      <ExplodingView />
      <Marquee />
      <AuditPhilosophy />
      <BentoServices />
      <Proof />
      <CaseStudy />
      <BookCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background video — fades inward via the radial mask so the page's bone surface owns the edges. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <video
          src="/interior_design.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        {/* Subtle warm scrim for type legibility without killing the footage. */}
        <div className="pointer-events-none absolute inset-0 bg-bone-50/35" />
        {/* Inward radial mask — visible at center, dissolves to bone at the edges. */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_58%_at_50%_46%,transparent_0%,transparent_38%,rgba(250,250,247,0.55)_62%,rgba(250,250,247,0.92)_88%,rgb(250,250,247)_100%)]" />
        {/* Top fade so the floating nav has clean ground to sit on. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-bone-50 via-bone-50/75 to-transparent" />
        {/* Bottom fade so the marquee border lands on clean bone. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bone-50 via-bone-50/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-28 pt-44 text-center lg:px-10 lg:pb-32 lg:pt-52">
        <Reveal className="flex flex-col items-center">
          <RevealItem>
            <span className="pill">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-moss-500" />
              Booking April · 3 audit slots open
            </span>
          </RevealItem>
          <RevealItem className="mt-7">
            <h1 className="display text-[44px] text-ink-900 sm:text-[56px] md:text-[72px] lg:text-[88px]">
              Audits that move real estate
              <em className="block not-italic text-moss-700">forward.</em>
            </h1>
          </RevealItem>
          <RevealItem className="mt-8 max-w-[58ch]">
            <p className="text-[17px] leading-relaxed text-ink-700/90 md:text-[18px]">
              A fifteen-minute intake call. A written audit on your desk
              in seventy-two hours — four AI tools picked to fit your
              brokerage, your build group, your home service operation.
              Two hundred dollars, fixed. Yours to run.
            </p>
          </RevealItem>
          <RevealItem className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href="#book">Reserve the 15-min intake</MagneticButton>
            <MagneticButton href="#audit" variant="ghost">
              How the audit works
            </MagneticButton>
          </RevealItem>

          <RevealItem className="mt-16 grid w-full max-w-2xl grid-cols-3 divide-x divide-ink-900/8 border-t border-ink-900/8 pt-6">
            <Metric value="$200" label="written audit · fixed price" />
            <Metric value="72h" label="intake call to delivery" />
            <Metric value="47.2%" label="median hours returned · quarter one" />
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-4">
      <p className="num display text-2xl text-ink-900">{value}</p>
      <p className="mt-2 max-w-[16ch] text-center text-[11.5px] leading-snug text-ink-700/75">
        {label}
      </p>
    </div>
  );
}

function AuditPhilosophy() {
  const steps = [
    {
      tag: "01 · 15 minutes",
      title: "The intake call.",
      body: "Our intake agent calls and runs the discovery — your CRM, your weekly listing rhythm, the tasks that eat your Tuesdays. No form, no portal, no homework. The transcript reaches our partners the moment you hang up.",
    },
    {
      tag: "02 · 24 hours",
      title: "Two partners read every line.",
      body: "We pair your transcript with public data on your market and the patterns we've logged across 47 brokerages and 23 build groups. Every recurring task lands in one of three buckets: Human, AI-leverage, or defer.",
    },
    {
      tag: "03 · 72 hours · $200",
      title: "The written audit lands on your desk.",
      body: "A single-PDF report in your name. Four AI tools picked for your stack — not the four we like, the four that fit your CRM, your MLS, your bookkeeper. A defensible quarter-one hours-returned number. Footnotes you can take to your team.",
    },
    {
      tag: "04 · Your call",
      title: "Run it in-house. Or hand it back.",
      body: "Some teams take the report and run. Some prefer the install done for them — a separate engagement, separately scoped, separately priced, decided after the audit, never before. The two hundred is yours either way.",
    },
  ];

  return (
    <section id="audit" className="border-t border-ink-900/8">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-32">
        <div className="lg:col-span-4">
          <p className="label">The Operating Audit</p>
          <h2 className="display mt-6 text-4xl text-ink-900 md:text-5xl lg:text-[56px]">
            Fifteen minutes
            <br />
            for us.
            <br />
            <em className="not-italic text-ink-700/55">
              Seventy-two hours for you.
            </em>
          </h2>
          <p className="mt-7 max-w-[42ch] text-[15px] leading-relaxed text-ink-700/85">
            The audit is a fixed instrument. Same shape every time, every team.
            The output isn&apos;t a deck — it&apos;s a written report, four
            tool picks, and an honest number for the hours we think we can
            hand back. Two hundred dollars, written, yours to run.
          </p>
        </div>

        <div className="lg:col-span-8">
          <Reveal className="flex flex-col">
            {steps.map((s, i) => (
              <RevealItem
                key={s.tag}
                className="grid grid-cols-1 gap-6 border-b border-ink-900/8 py-10 last:border-b-0 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-3">
                  <p className="label text-ink-700/75">{s.tag}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="display text-2xl text-ink-900 md:text-[28px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-ink-700/85">
                    {s.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BentoServices() {
  return (
    <section className="border-t border-ink-900/8 bg-bone-100/40">
      <div className="mx-auto max-w-page px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="label">Four installs we run end-to-end</p>
            <h2 className="display mt-5 max-w-[18ch] text-4xl text-ink-900 md:text-5xl lg:text-[56px]">
              The work, after the audit.
            </h2>
          </div>
          <p className="max-w-[42ch] text-[15px] leading-relaxed text-ink-700/85">
            Most teams pick two of the four to start. We refuse to install all
            of them at once — the team has to absorb each one before the next
            arrives.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
          <BentoFrame
            href="/services/ai-audits"
            index="/01"
            title="AI Operations Audit"
            blurb="The on-site engagement. We map every recurring task and rank it Human, AI-leverage, or Defer. You walk out with a 14-day install plan and a quarter-one hours-returned number."
            className="lg:col-span-7"
          >
            <AuditPriorityCard />
          </BentoFrame>
          <BentoFrame
            href="/services/cma"
            index="/02"
            title="CMA Engine"
            blurb="A draft comparative market analysis on your desk in under three minutes — pulled from live MLS, weighted by your team&apos;s pricing model, presented in your brand."
            className="lg:col-span-5"
          >
            <CmaStreamCard />
          </BentoFrame>
          <BentoFrame
            href="/services/smart-profiles"
            index="/03"
            title="Smart Profiles for realtors"
            blurb="A living profile per agent and team — bio, neighborhood expertise, performance, listings — wired to the brokerage&apos;s site, the MLS, and search results. See the walkthrough."
            className="lg:col-span-5"
            cta="See the walkthrough"
          >
            <SmartProfileCard />
          </BentoFrame>
          <BentoFrame
            href="/services/renderings"
            index="/04"
            title="Renderings & Virtual Staging"
            blurb="Photoreal renderings for contractors closing kitchens, additions, ADUs. Photoreal staging for listings — 18-hour turnaround at one fortieth of the price of physical staging."
            className="lg:col-span-7"
          >
            <StagingRevealCard />
          </BentoFrame>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="proof" className="border-t border-ink-900/8">
      <div className="mx-auto max-w-page px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="label">Field notes</p>
            <blockquote className="display mt-7 text-3xl leading-[1.15] text-ink-900 md:text-[40px]">
              &ldquo;They watched us work for a day, then handed us back four
              hours per agent per week. Not in a deck — actually back in the
              calendar. The CMAs alone paid for the engagement inside a
              month.&rdquo;
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-ink-900/8">
                <img
                  alt=""
                  src="https://picsum.photos/seed/beckett-halloran/120/120"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[14px] font-medium text-ink-900">
                  Beckett Halloran
                </p>
                <p className="text-[12px] text-ink-700/65">
                  Team Lead · Halberg & Quinn Realty · Evanston
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 divide-y divide-ink-900/8 border-y border-ink-900/8">
              <ProofRow
                k="47.2%"
                label="hours returned"
                detail="median across 14 brokerage engagements, quarter one of install"
              />
              <ProofRow
                k="$2.41M"
                label="GCI added"
                detail="commissions attributable to the install, 2025 cohort"
              />
              <ProofRow
                k="312"
                label="renderings shipped"
                detail="for 47 contractor clients, average 18-hour turnaround"
              />
              <ProofRow
                k="-37.4%"
                label="time on market"
                detail="virtually-staged listings versus the team&apos;s prior 12 months"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofRow({
  k,
  label,
  detail,
}: {
  k: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="grid grid-cols-12 items-baseline gap-4 py-6">
      <p className="num display col-span-4 text-3xl text-ink-900 md:text-4xl">
        {k}
      </p>
      <div className="col-span-8">
        <p className="text-[13.5px] font-medium text-ink-900">{label}</p>
        <p className="mt-1 text-[12.5px] leading-relaxed text-ink-700/75">
          {detail}
        </p>
      </div>
    </div>
  );
}

function CaseStudy() {
  const cases = [
    {
      tag: "Brokerage · 11 agents",
      name: "Halberg & Quinn Realty",
      headline: "Cut listing prep from 6 hours to 38 minutes per door.",
      detail:
        "Replaced four duplicate spreadsheets with a single live CMA pipeline. Smart Profiles published for every agent. Renderings spun up for two pre-construction listings.",
      img: "https://picsum.photos/seed/halberg-quinn/1200/800",
      span: "lg:col-span-7",
    },
    {
      tag: "Contractor · $4.8M revenue",
      name: "Crestmont Build Group",
      headline: "Renderings inside 12 hours. Close rate up 18.4 points.",
      detail:
        "We installed an in-house rendering pipeline so estimators leave the first walkthrough with a photoreal kitchen on the iPad. Homeowner decision shortened from three weeks to nine days.",
      img: "https://picsum.photos/seed/crestmont/1000/800",
      span: "lg:col-span-5",
    },
  ];

  return (
    <section className="border-t border-ink-900/8 bg-bone-100/40">
      <div className="mx-auto max-w-page px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex items-end justify-between">
          <div>
            <p className="label">Two recent engagements</p>
            <h2 className="display mt-5 text-4xl text-ink-900 md:text-5xl">
              What the install actually looks like.
            </h2>
          </div>
          <Link
            href="/#book"
            className="hidden items-center gap-1.5 text-[13px] text-ink-800 hover:text-ink-900 sm:inline-flex"
          >
            Discuss yours
            <ArrowUpRight size={14} weight="bold" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {cases.map((c) => (
            <article
              key={c.name}
              className={`group relative overflow-hidden rounded-5xl border border-ink-900/8 bg-white shadow-diffusion ${c.span}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-bone-100">
                <img
                  alt=""
                  src={c.img}
                  className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
                <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-900/55 px-2.5 py-1 text-[11px] text-bone-50 backdrop-blur">
                  <span className="inline-block h-1 w-1 rounded-full bg-moss-400" />
                  {c.tag}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-8 lg:p-10">
                <p className="num text-[11px] text-ink-700/55">{c.name}</p>
                <h3 className="display text-[26px] leading-tight text-ink-900 md:text-[30px]">
                  {c.headline}
                </h3>
                <p className="mt-1 max-w-[58ch] text-[14px] leading-relaxed text-ink-700/80">
                  {c.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookCTA() {
  return (
    <section id="book" className="border-t border-ink-900/8">
      <div className="mx-auto max-w-page px-6 py-24 lg:px-10 lg:py-32">
        <div className="relative overflow-hidden rounded-5xl border border-ink-900/10 bg-ink-900 px-8 py-16 text-bone-50 shadow-diffusion lg:px-16 lg:py-24">
          <BackgroundGrid />
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="label text-bone-50/55">
                Fifteen minutes. No form. No deck.
              </p>
              <h2 className="display mt-6 text-4xl text-bone-50 md:text-5xl lg:text-[64px]">
                Pick a window.
                <br />
                The intake will
                <em className="not-italic text-moss-400"> call you.</em>
              </h2>
              <p className="mt-7 max-w-[52ch] text-[15px] leading-relaxed text-bone-50/75">
                Our intake agent runs the discovery — your CRM, your weekly
                listing rhythm, the tasks that eat your Tuesdays. Two partners
                read the transcript inside a day and ship a written audit to
                your desk within seventy-two hours. Two hundred dollars,
                fixed. Yours to run as you see fit.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <MagneticButton
                  href="mailto:hello@realestateadvancement.com?subject=Reserve%20the%20intake%20call"
                  className="bg-bone-50 text-ink-900 shadow-[inset_0_1px_0_rgba(255,255,255,1)]"
                >
                  Reserve the intake
                </MagneticButton>
                <a
                  href="tel:+13128471928"
                  className="num inline-flex items-center gap-2 rounded-full border border-bone-50/15 px-5 py-3 text-[14px] text-bone-50/85 transition-colors hover:bg-white/5"
                >
                  +1 (312) 847-1928
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-bone-50/10 bg-white/5 p-7 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <p className="label text-bone-50/55">
                    April · intake windows
                  </p>
                  <p className="num text-[11px] text-bone-50/55">CT · 15 min</p>
                </div>
                <ul className="mt-5 flex flex-col divide-y divide-bone-50/10">
                  {[
                    { date: "Tue 04 · 09", slots: 4, range: "10:30 – 10:45" },
                    { date: "Wed 04 · 10", slots: 2, range: "13:15 – 13:30" },
                    { date: "Thu 04 · 11", slots: 3, range: "14:00 – 14:15" },
                    { date: "Tue 04 · 16", slots: 5, range: "08:45 – 09:00" },
                    { date: "Fri 04 · 19", slots: 3, range: "11:15 – 11:30" },
                  ].map((row) => (
                    <li
                      key={row.date}
                      className="flex items-center justify-between py-3"
                    >
                      <div>
                        <p className="text-[14px] text-bone-50">{row.date}</p>
                        <p className="num text-[11.5px] text-bone-50/55">
                          {row.range}
                        </p>
                      </div>
                      <span className="num inline-flex items-center gap-1.5 rounded-full border border-bone-50/12 bg-white/5 px-2.5 py-1 text-[11px] text-bone-50/75">
                        <span className="inline-block h-1 w-1 animate-breathe rounded-full bg-moss-400" />
                        {row.slots} open
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[12px] leading-relaxed text-bone-50/55">
                  The agent dials out at your chosen window. Average call,
                  twelve minutes. The audit ships before the third sunrise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundGrid() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full text-bone-50/[0.05]"
    >
      <defs>
        <pattern
          id="grid"
          width="44"
          height="44"
          patternUnits="userSpaceOnUse"
        >
          <path d="M 44 0 L 0 0 0 44" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <radialGradient id="fade" cx="20%" cy="0%" r="80%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.9)" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#fade)" />
    </svg>
  );
}
