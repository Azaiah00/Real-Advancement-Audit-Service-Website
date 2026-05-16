import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const cols: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Services",
    links: [
      { href: "/services/ai-audits", label: "AI Operations Audit" },
      { href: "/services/cma", label: "CMA Engine" },
      { href: "/services/smart-profiles", label: "Smart Profiles" },
      { href: "/services/renderings", label: "Renderings & Staging" },
    ],
  },
  {
    title: "Firm",
    links: [
      { href: "/#audit", label: "How the audit works" },
      { href: "/#proof", label: "Outcomes" },
      { href: "/#book", label: "Book a call" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        href: "https://smartprofile-walkthrough.netlify.app/",
        label: "Smart Profile walkthrough",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-ink-900/8 bg-bone-50">
      <div className="mx-auto max-w-page px-6 pb-10 pt-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo-ra.png"
                alt="Real Advancement"
                className="h-10 w-10 object-contain [filter:brightness(0)]"
              />
              <p className="label">Intake · Audit · Hand back the time</p>
            </div>
            <h3 className="display mt-6 text-4xl text-ink-900 md:text-5xl">
              The operating system
              <br />
              for advancement.
            </h3>
            <p className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-ink-700/85">
              A fifteen-minute intake call. A written audit on your desk
              inside seventy-two hours. Two hundred dollars, fixed.
              Implementation is a separate conversation, only if you want it.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="mailto:hello@realestateadvancement.com"
                className="group inline-flex items-center justify-between gap-6 rounded-full border border-ink-900/10 bg-white px-5 py-3 text-[14px] text-ink-900 transition-colors hover:bg-bone-100"
              >
                <span className="num text-ink-700">hello@realestateadvancement.com</span>
                <ArrowUpRight size={16} weight="bold" className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {cols.map((col) => (
              <div key={col.title}>
                <p className="label">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-[14px] text-ink-800 transition-colors hover:text-ink-900"
                      >
                        {l.label}
                        <span className="h-px w-3 -translate-x-1 bg-ink-700/50 opacity-0 transition-all duration-300 ease-editorial group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ink-900/8 pt-6 text-[12px] text-ink-700/65 sm:flex-row sm:items-center">
          <p className="num">© {new Date().getFullYear()} Real Advancement, LLC</p>
          <p className="num">Chicago · Phoenix · Toronto — by referral</p>
          <p className="num">v2.41 · last review 04.18</p>
        </div>
      </div>
    </footer>
  );
}
