import type { Metadata } from "next";
import {
  IdentificationBadge,
  GlobeHemisphereWest,
  Storefront,
  TrendUp,
  Pulse,
  HouseLine,
} from "@phosphor-icons/react/dist/ssr";
import { ServiceHero } from "@/components/service/ServiceHero";
import { Process } from "@/components/service/Process";
import { FeatureGrid } from "@/components/service/FeatureGrid";
import { OutcomeStrip } from "@/components/service/OutcomeStrip";
import { PageCTA } from "@/components/service/PageCTA";
import { SmartProfileCard } from "@/components/bento/SmartProfileCard";

export const metadata: Metadata = {
  title: "Smart Profiles — Real Advancement",
  description:
    "A living profile per agent and team — bio, neighborhood expertise, performance, listings — wired to the brokerage site, the MLS, and search results.",
};

export default function SmartProfilesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Smart Profiles"
        index="/03"
        title="A living profile"
        emphasis="for every agent and team."
        blurb="Wired to your CRM, your MLS, and Google. Stays current without the agent touching it. Buyers and sellers see the agent the way the agent's best client would describe them — and the brokerage shows up first in search."
        metrics={[
          { value: "4.94", label: "avg client satisfaction" },
          { value: "+38%", label: "profile-to-call rate" },
          { value: "0", label: "weekly maintenance hours" },
        ]}
        visual={<SmartProfileCard />}
        secondaryCta={{
          href: "https://smartprofile-walkthrough.netlify.app/",
          label: "Open the walkthrough",
          external: true,
        }}
      />

      <FeatureGrid
        eyebrow="What the profile actually is"
        heading="Not a bio page. A standing argument for the agent."
        features={[
          {
            Icon: IdentificationBadge,
            title: "Auto-built from the agent's history",
            body: "Drafts itself from the CRM, the MLS, the past three years of closes. The agent edits tone, not facts. New listings, new closes, new reviews flow in.",
          },
          {
            Icon: HouseLine,
            title: "Neighborhood expertise, named",
            body: "Specific blocks, school catchments, micro-markets the agent actually works. Not generic city tags. Buyers find the agent who knows their block, not the agent with the biggest ad budget.",
          },
          {
            Icon: TrendUp,
            title: "Performance, plain-language",
            body: "Median DOM, list-to-close, satisfaction. Presented in plain language. Comparable to peers in the same neighborhood, not the whole MLS.",
          },
          {
            Icon: Storefront,
            title: "Active listings, on-profile",
            body: "Current listings, recent closes, an upcoming open house schedule. Wired to your MLS so the agent's profile is also their working storefront.",
          },
          {
            Icon: GlobeHemisphereWest,
            title: "SEO that earns the call",
            body: "Schema, structured data, page-speed, internal linking. The brokerage shows up first when a homeowner Googles 'who sold the most homes in Andersonville last year.'",
          },
          {
            Icon: Pulse,
            title: "Reviews that stay current",
            body: "Pulls Google, Zillow, and direct client reviews on a 4-day cadence. The profile breathes. The team lead sees red flags first, not after Yelp does.",
          },
        ]}
      />

      <Process
        eyebrow="How a profile gets built"
        heading="Three sittings."
        emphasis="Then it lives."
        intro="We don't ask agents to fill in a form. We build the first draft from the data, then sit with each agent for 30 minutes to set tone. The profile updates itself after that."
        steps={[
          {
            tag: "Draft",
            meta: "day 1",
            title: "We build it from your data.",
            body: "Pull from MLS, CRM, Google, the team's existing site. Generate a first draft per agent — bio, neighborhoods, performance, listings. No agent input yet.",
          },
          {
            tag: "Sit",
            meta: "day 2",
            title: "Thirty minutes per agent.",
            body: "We sit with each agent. They edit tone, voice, the order of neighborhoods. The facts stay. Most sessions end in twenty minutes; the heart of the work is already done.",
          },
          {
            tag: "Wire",
            meta: "day 3",
            title: "Plumb to the brokerage site.",
            body: "We replace the existing 'meet the team' page with the live profile system. Old URLs redirect. SEO is preserved. Schema is injected. Google starts re-crawling within hours.",
          },
          {
            tag: "Live",
            meta: "ongoing",
            title: "The profile updates itself.",
            body: "New close: appears on the profile within 24 hours. New review: appears within 4 days. New listing: live the moment it goes active. No agent has to touch it.",
          },
        ]}
      />

      <OutcomeStrip
        items={[
          { k: "+38.1%", label: "profile-to-call rate", detail: "vs. the brokerage's previous 'meet the team' page" },
          { k: "4.94", label: "client satisfaction", detail: "average across 86 agents in the program" },
          { k: "11s", label: "median load time", detail: "from cold cache, on a 4G phone" },
          { k: "0h", label: "agent maintenance", detail: "weekly hours spent updating profile after install" },
        ]}
      />

      <PageCTA
        eyebrow="See it before you buy it"
        heading="Open the walkthrough."
        emphasis="It's a real profile, with real data."
        blurb="A clickable walkthrough of a Smart Profile, end-to-end. See how a buyer arrives, what they see first, and how the profile breathes. Then a 45-minute call to scope it to your roster."
        primary={{
          href: "https://smartprofile-walkthrough.netlify.app/",
          label: "Open the walkthrough",
        }}
        secondary={{ href: "/#book", label: "Book the audit" }}
      />
    </>
  );
}
