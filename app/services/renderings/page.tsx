import type { Metadata } from "next";
import {
  Camera,
  Hammer,
  Lightbulb,
  ImageSquare,
  PaintBrush,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Process } from "@/components/service/Process";
import { FeatureGrid } from "@/components/service/FeatureGrid";
import { OutcomeStrip } from "@/components/service/OutcomeStrip";
import { PageCTA } from "@/components/service/PageCTA";
import { StagingRevealCard } from "@/components/bento/StagingRevealCard";

export const metadata: Metadata = {
  title: "Renderings & Virtual Staging — Real Advancement",
  description:
    "Photoreal renderings for contractors closing kitchens, additions, ADUs. Photoreal staging for listings — 18-hour turnaround at a fraction of physical staging.",
};

export default function RenderingsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Renderings & Virtual Staging"
        index="/04"
        title="Photoreal kitchens by lunch."
        emphasis="Listings staged by morning."
        blurb="For contractors: the rendering arrives before the homeowner has cleared the breakfast plates. For brokers: the listing photos go up staged, on the same shoot day, at one fortieth of the cost of physical staging."
        metrics={[
          { value: "18h", label: "median turnaround" },
          { value: "$48", label: "per staged room" },
          { value: "-37.4%", label: "time on market" },
        ]}
        visual={<StagingRevealCard />}
        secondaryCta={{ href: "/services/ai-audits", label: "See the audit" }}
      />

      <FeatureGrid
        eyebrow="Two services, one pipeline"
        heading="A rendering you'd show a client. A staging buyers can't tell from real."
        features={[
          {
            Icon: Hammer,
            title: "Contractor renderings · pre-construction",
            body: "Kitchens, additions, ADUs, full remodels. From walkthrough video to photoreal in 18 hours. The estimator can leave the first sit-down with the rendering on the iPad.",
          },
          {
            Icon: ImageSquare,
            title: "Realtor staging · post-photography",
            body: "Drop the empty-room photos to us. Receive staged photos for the MLS by morning. Three style options per room — modern, traditional, transitional. No furniture moved.",
          },
          {
            Icon: Camera,
            title: "Drone & exterior",
            body: "Landscape staging, twilight conversion, snow removal, sky replacement — done right, defensible to the MLS. We refuse to retouch anything we can't show source-to-output.",
          },
          {
            Icon: PaintBrush,
            title: "Three styles, side by side",
            body: "Every staged room ships in three options. The seller picks the one that fits their buyer. Most listings publish two styles — one for the carousel hero, one inside.",
          },
          {
            Icon: Lightbulb,
            title: "Material swap, contractor-grade",
            body: "Cabinet color, countertop, backsplash, floor — swap on a click during the kitchen-table sit-down. The homeowner sees the decision before they commit.",
          },
          {
            Icon: ArrowsClockwise,
            title: "Revisions, included",
            body: "Two rounds of revisions on every render and every staging job. Most jobs are done in one. We track the revision rate per estimator so we know who's converting and who needs help.",
          },
        ]}
      />

      <Process
        eyebrow="What an 18-hour render actually does"
        heading="From walkthrough"
        emphasis="to delivered."
        intro="A real timeline. The handoff isn't a phone call — it's a Drive folder, an MLS upload, or a Slack message. Whatever your team already uses."
        steps={[
          {
            tag: "Source",
            meta: "hour 0",
            title: "Walkthrough or empty-room photos.",
            body: "For contractors: a 90-second walkthrough video, plus rough scope on a Slack message. For realtors: the post-shoot empty-room set, no prep needed.",
          },
          {
            tag: "Build",
            meta: "hours 1 — 6",
            title: "We model, light, and place.",
            body: "An in-house artist runs the model, lights, and furnishings. We do not auto-generate from scratch — every job has a named artist who signs off. The first revision is built into this window.",
          },
          {
            tag: "Review",
            meta: "hours 6 — 16",
            title: "Three styles, on a clean link.",
            body: "We send a single review link with three options per room. The realtor or estimator picks; the seller or homeowner can also vote. The link expires after 48 hours.",
          },
          {
            tag: "Deliver",
            meta: "hour 18",
            title: "MLS-ready, contract-ready.",
            body: "MLS-correct dimensions and disclosure footnotes for staging. PDF and PNG bundles for renderings, with annotated material lists for the contractor. Direct upload to your portal if we have the connector.",
          },
        ]}
      />

      <OutcomeStrip
        items={[
          { k: "-37.4%", label: "time on market", detail: "staged listings vs. team's prior 12 months" },
          { k: "+18.4pt", label: "contractor close rate", detail: "rendering-in-sit-down vs. estimate-only" },
          { k: "$48", label: "median cost / room", detail: "compared with $640 average for physical staging" },
          { k: "312", label: "renderings shipped", detail: "for 47 contractor clients in 2025" },
        ]}
      />

      <PageCTA
        eyebrow="The first render is on us"
        heading="Send one walkthrough."
        emphasis="See it back tomorrow."
        blurb="If you're a contractor, send a 90-second walkthrough of an open kitchen scope. If you're a realtor, send the empty-room set from your last listing. We'll return one render or one staged room inside 24 hours — no card, no commitment."
        primary={{
          href: "mailto:hello@realestateadvancement.com?subject=First%20render%20-%20no%20commitment",
          label: "Send the walkthrough",
        }}
        secondary={{ href: "/#book", label: "Book the audit" }}
      />
    </>
  );
}
