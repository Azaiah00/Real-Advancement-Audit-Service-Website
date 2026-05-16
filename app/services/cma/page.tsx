import type { Metadata } from "next";
import {
  ChartBar,
  CurrencyDollar,
  MapPin,
  Lightning,
  FileMagnifyingGlass,
  Shield,
} from "@phosphor-icons/react/dist/ssr";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Process } from "@/components/service/Process";
import { FeatureGrid } from "@/components/service/FeatureGrid";
import { OutcomeStrip } from "@/components/service/OutcomeStrip";
import { PageCTA } from "@/components/service/PageCTA";
import { CmaStreamCard } from "@/components/bento/CmaStreamCard";

export const metadata: Metadata = {
  title: "CMA Engine — Real Advancement",
  description:
    "A draft comparative market analysis on your desk in under three minutes — pulled from live MLS, weighted by your team's pricing model, presented in your brand.",
};

export default function CMAPage() {
  return (
    <>
      <ServiceHero
        eyebrow="CMA Engine"
        index="/02"
        title="A draft CMA, in three minutes,"
        emphasis="defensible at the kitchen table."
        blurb="We replace the four spreadsheets every team keeps with one live CMA pipeline — pulled from your MLS, weighted to your team's pricing model, presented in your brand. The agent edits, not assembles."
        metrics={[
          { value: "2:47", label: "median draft time" },
          { value: "$321", label: "median $/sf accuracy" },
          { value: "11", label: "comps · auto-ranked" },
        ]}
        visual={<CmaStreamCard />}
        secondaryCta={{
          href: "/services/smart-profiles",
          label: "See Smart Profiles",
        }}
      />

      <FeatureGrid
        eyebrow="What's inside the engine"
        heading="The CMA the agent actually edits — not assembles from scratch."
        features={[
          {
            Icon: Lightning,
            title: "Live MLS sync",
            body: "Wired directly to your MLS feed. Comps refresh every 47 seconds. No CSV exports, no copy-paste, no stale data at the kitchen table.",
          },
          {
            Icon: ChartBar,
            title: "Your team's pricing model",
            body: "We import your weighting — beds vs. baths, kitchen vintage, school zone, lot orientation. The CMA argues the price the way your team argues it.",
          },
          {
            Icon: MapPin,
            title: "Hyperlocal context, named",
            body: "Pulls neighborhood patterns the agent already knows: walk-to-Metra premium, north-vs-south of the line, alley-load vs. front-load. Named, not abstract.",
          },
          {
            Icon: FileMagnifyingGlass,
            title: "Defensible footnotes",
            body: "Every figure traces to its source row. Open the price strip and you see the eleven comps, the weighting math, and the adjustments that produced it.",
          },
          {
            Icon: CurrencyDollar,
            title: "Branded output, no design lift",
            body: "Generates a print-ready CMA in your brokerage's brand. Letterhead, agent profile, neighborhood plate. No designer in the loop.",
          },
          {
            Icon: Shield,
            title: "Compliance, by default",
            body: "Fair-housing flags on language. Disclosures inserted from your MLS jurisdiction. The agent stops worrying about which line goes where.",
          },
        ]}
      />

      <Process
        eyebrow="How a CMA actually moves"
        heading="From sit-down"
        emphasis="to print-ready."
        intro="A real working session. The agent sits, the engine pulls, the team's pricing weights run, and a draft is on the iPad before the coffee cools."
        steps={[
          {
            tag: "Subject",
            meta: "00:18",
            title: "Address in, subject framed.",
            body: "The agent types the address. The engine pulls the public record, the last sale, the tax bill, the school zone, and the live MLS history. The subject sheet is filled before the agent finishes typing the lot dimensions.",
          },
          {
            tag: "Comps",
            meta: "01:02",
            title: "Eleven comps, ranked.",
            body: "Eleven active and sold comps surface, ranked by similarity. The agent overrides two — the engine learns the team's preference. By the third CMA, overrides drop to zero.",
          },
          {
            tag: "Price strip",
            meta: "02:14",
            title: "A defensible price range.",
            body: "Three prices: aggressive, sit-tight, and quick-move. Each traces to the comp set and the weighting math. The agent can argue any of the three at the table.",
          },
          {
            tag: "Output",
            meta: "02:47",
            title: "Branded PDF, on the iPad.",
            body: "A branded CMA exports to PDF, to the brokerage portal, and to a shareable link with the agent's Smart Profile attached. The seller leaves the kitchen with a number they trust.",
          },
        ]}
      />

      <OutcomeStrip
        items={[
          { k: "2:47", label: "median draft time", detail: "across 4,118 CMAs run, 2025" },
          { k: "92.4%", label: "list-to-close ratio", detail: "engine-priced listings versus team's prior 12 months" },
          { k: "6h → 38m", label: "listing prep per door", detail: "agent time, end-to-end" },
          { k: "$0", label: "designer cost", detail: "PDF generates in-brand, no design lift" },
        ]}
      />

      <PageCTA
        eyebrow="The engine on your stack"
        heading="Bring your MLS feed."
        emphasis="We'll wire the rest."
        blurb="A 45-minute call. We'll plug a sample listing into the engine on the call so you can see your team's pricing model run live. Most engagements have the engine in production inside two weeks."
        secondary={{
          href: "/services/smart-profiles",
          label: "See Smart Profiles",
        }}
      />
    </>
  );
}
