import type { Metadata } from "next";
import {
  Compass,
  Calendar,
  ClipboardText,
  Stack,
  HandCoins,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Process } from "@/components/service/Process";
import { FeatureGrid } from "@/components/service/FeatureGrid";
import { OutcomeStrip } from "@/components/service/OutcomeStrip";
import { PageCTA } from "@/components/service/PageCTA";
import { AuditPriorityCard } from "@/components/bento/AuditPriorityCard";

export const metadata: Metadata = {
  title: "AI Operations Audit — Real Advancement",
  description:
    "A 15-minute intake call. A $200 written audit, on your desk in 72 hours — four AI tools picked to fit your operation. Yours to run.",
};

export default function AIAuditsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="The Operating Audit"
        index="/01"
        title="A fifteen-minute call."
        emphasis="A $200 audit. Yours in 72 hours."
        blurb="Our intake agent calls and runs the discovery — no form, no portal, no homework. Two partners read the transcript inside a day, map your operation, and ship a written report with four AI tools picked for your stack. Two hundred dollars, fixed. Yours to run as you see fit."
        metrics={[
          { value: "15 min", label: "intake call · agent-led" },
          { value: "$200", label: "written audit · fixed" },
          { value: "72h", label: "intake to delivered report" },
        ]}
        visual={<AuditPriorityCard />}
        secondaryCta={{ href: "/services/cma", label: "See CMA Engine" }}
      />

      <FeatureGrid
        eyebrow="What we're actually looking for"
        heading="Six places AI quietly earns its keep in a real estate operation."
        features={[
          {
            Icon: ClipboardText,
            title: "Listing prep · the time-eater",
            body: "Photo briefs, MLS copy, disclosures, comp pulls. Most agents spend six hours per listing. The right install takes this under forty minutes per door.",
          },
          {
            Icon: Compass,
            title: "Lead triage · the lost hour",
            body: "Sierra, Follow Up Boss, BoomTown — the leads pile up and the right one waits. A triage layer that surfaces the warm lead first, in plain language.",
          },
          {
            Icon: Stack,
            title: "Comp analysis · faster, defensible",
            body: "The four spreadsheets every team keeps, collapsed into one live CMA pipeline weighted to your pricing model. Defensible at the kitchen table.",
          },
          {
            Icon: Calendar,
            title: "Showings, lockboxes, calendar",
            body: "The boring AI win: a calendar that knows showing windows, lockbox conflicts, and traffic. We name the integration that fits your CRM, not the demo.",
          },
          {
            Icon: HandCoins,
            title: "Contractor estimating",
            body: "For build groups: photoreal kitchen renderings inside twelve hours, scope-of-work that writes itself from the walkthrough video, change-order audit.",
          },
          {
            Icon: ChartLineUp,
            title: "What we leave alone",
            body: "Every audit names what to skip. Tools we'd skip for a team your size, integrations we'd defer, vendor pitches we'd politely decline. Honest, in writing.",
          },
        ]}
      />

      <Process
        eyebrow="The shape of the engagement"
        heading="Fifteen minutes for us."
        emphasis="Seventy-two hours for you."
        intro="The audit is a fixed instrument. Same shape every time, every team, every market. The price and the timeline are the same whether you're an eleven-agent brokerage or a four-million-dollar build group."
        steps={[
          {
            tag: "Intake",
            meta: "15 min · day 0",
            title: "Our intake agent runs the discovery.",
            body: "Pick a fifteen-minute window. The agent calls and asks the specific questions your stack can't see itself — team size, CRM, MLS, weekly listing rhythm, recurring tasks, what you've tried, what you've abandoned. The transcript reaches our partners the second you hang up.",
          },
          {
            tag: "Analysis",
            meta: "24 hours · day 1",
            title: "Two partners read every line.",
            body: "We pair your transcript with public data on your market and the patterns we've logged across 47 brokerages and 23 build groups. Every recurring task lands in one of three buckets: Human, AI-leverage, or defer. The ranking is the heart of the deliverable.",
          },
          {
            tag: "Audit",
            meta: "72 hours · $200",
            title: "A written report. In your name. On your desk.",
            body: "A single-PDF audit. Four AI tools picked for your stack — not the four we like, the four that fit your CRM, your MLS, your bookkeeper. A defensible quarter-one hours-returned number. Footnotes you can take to your team. Fixed price, fixed scope.",
          },
          {
            tag: "Your call",
            meta: "as you prefer",
            title: "Run it in-house. Or hand it back.",
            body: "Some teams take the report and run. Some prefer the install done for them — a separate engagement, separately scoped, separately priced, decided after the audit lands, never before. The two hundred dollars is yours either way.",
          },
        ]}
      />

      <OutcomeStrip
        items={[
          { k: "$200", label: "written audit", detail: "fixed price, fixed scope, every engagement" },
          { k: "72h", label: "intake to delivery", detail: "median across 312 audits shipped, 2025" },
          { k: "4 / 90", label: "tools shortlisted", detail: "four picks out of roughly ninety recurring tasks" },
          { k: "47.2%", label: "hours returned", detail: "median, for teams who ran the recs themselves" },
        ]}
      />

      <PageCTA
        eyebrow="If you're still curious"
        heading="Pick a fifteen-minute window."
        emphasis="The intake will call you."
        blurb="No form, no deck, no homework. The intake agent runs the discovery; we ship the audit on day three. If we're not the right fit, the report will say so on page one."
        secondary={{ href: "/services/cma", label: "See the CMA Engine" }}
      />
    </>
  );
}
