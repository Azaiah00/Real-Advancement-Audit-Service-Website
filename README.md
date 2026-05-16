# Real Advancement — site

A high-end marketing site for Real Advancement, an audit-and-install firm for
real estate teams, contractors, and home service companies adapting to the AI
era.

## Stack

- **Next.js 15** (App Router, React 19, Server Components by default)
- **Tailwind CSS v3** with a small bespoke design system (`bone`, `ink`, `moss`)
- **Framer Motion 11** for spring physics, perpetual micro-interactions, magnetic buttons, layout transitions
- **Geist** sans + mono (via the `geist` npm package — Inter is banned)
- **Phosphor Icons** (no emoji used anywhere)

## Pages

- `/` — landing (hero, audit philosophy, bento services, proof, case studies, book CTA)
- `/services/ai-audits` — the on-site operating audit
- `/services/cma` — the CMA engine
- `/services/smart-profiles` — smart profiles for realtors and teams
- `/services/renderings` — renderings and virtual staging

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Design system at a glance

| Token | Value | Where |
|---|---|---|
| Background | `#fafaf7` (bone-50) | Body, page sections |
| Ink | `#0c0c0a` (ink-900) | Display type, primary buttons — never pure black |
| Accent | desaturated emerald (moss-700, `#244231`) | Single accent; saturation < 80% |
| Display font | Geist Sans, `tracking-tighter leading-none` | All headings via `.display` |
| Numerals | Geist Mono, `tabular-nums` | All stats via `.num` |
| Surface | white card on bone, `rounded-5xl` (2.5rem), `shadow-diffusion` | Bento and hero panels |
| Hairline | `border-ink-900/8` | Cards, dividers, the audit-philosophy rhythm |

## Motion contract

- Spring physics only — `stiffness: 100–110, damping: 22`. No linear easing.
- Every bento card is its own memoized client island. Perpetual loops never trigger parent re-renders.
- Animations only on `transform` / `opacity`. Never `top`, `left`, `width`, `height`.
- The hero orbit, marquee bands, CMA stream, audit-list re-sort, profile cycle, and staging slider all loop independently. None of them mount through `useState` tweens.
- Magnetic buttons use `useMotionValue` / `useSpring` outside the React render cycle.

## Anti-slop ledger (the rules this site was built against)

- No Inter, no purple/lila gradients, no neon glows, no pure black.
- No 3-equal-card "feature row." Bento is 7/5 asymmetric, alternating.
- No `h-screen`. Full-height sections use `min-h-[100dvh]`.
- No "John Doe" or "Acme." Names and firms are invented to read like real Midwest brokerages and build groups.
- No filler verbs ("elevate," "seamless," "unleash," "next-gen"). Copy uses concrete verbs: *audit, install, hand back, earn its seat.*
- No Unsplash. Placeholders use `picsum.photos/seed/...` so the same seed always returns the same image.
- No emojis in code, markup, or copy.

## File map

```
app/
  layout.tsx                       fonts, nav, footer, grain overlay
  globals.css                      tokens, marquee/breathe/shimmer keyframes
  page.tsx                         landing page composition
  services/
    ai-audits/page.tsx
    cma/page.tsx
    smart-profiles/page.tsx
    renderings/page.tsx
components/
  Nav.tsx                          floating pill nav, mobile drawer
  Footer.tsx
  Marquee.tsx                      kinetic partner band
  MagneticButton.tsx               useMotionValue magnetic primary/ghost
  Reveal.tsx                       whileInView stagger primitives
  HeroVisual.tsx                   three-orbit operations diagram
  bento/
    BentoFrame.tsx                 the gallery frame (labels outside the card)
    AuditPriorityCard.tsx          self-sorting task list (layoutId)
    CmaStreamCard.tsx              live-comps marquee + stat strip
    SmartProfileCard.tsx           cycling profile w/ stat overshoot
    StagingRevealCard.tsx          before/after slider, drag or breathe
  service/
    ServiceHero.tsx
    Process.tsx
    FeatureGrid.tsx
    OutcomeStrip.tsx
    PageCTA.tsx
lib/
  cn.ts                            clsx + tailwind-merge
```

## External walkthrough

The Smart Profiles service page and the home bento both link out to the live
walkthrough at <https://smartprofile-walkthrough.netlify.app/>.

## Contact target

The footer and book-the-audit calendar use `hello@realestateadvancement.com`.
Phone is a placeholder.
