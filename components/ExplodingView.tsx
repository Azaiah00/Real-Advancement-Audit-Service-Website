"use client";

import { memo, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

type Phase = {
  eyebrow: string;
  headline: string;
  body: string;
  /** Four scroll-progress stops: [fade-in start, fade-in end, fade-out start, fade-out end]. */
  range: [number, number, number, number];
  /** Output opacities matched to range — usually [0, 1, 1, 0]. */
  output: [number, number, number, number];
};

const phases: Phase[] = [
  {
    eyebrow: "01 / Your operation",
    headline: "It looks like one solid thing.",
    body: "Listing prep, lead triage, CMAs, renderings, the bench. Stacked into a day that just happens to you.",
    range: [0.0, 0.04, 0.16, 0.22],
    output: [0, 1, 1, 0],
  },
  {
    eyebrow: "02 / The intake call",
    headline: "Pull it apart on a 15-minute call.",
    body: "An intake agent calls and runs the discovery — your CRM, your weekly listing rhythm, the tasks that eat your Tuesdays. No form to fill in. The transcript lands with us the second the call ends.",
    range: [0.22, 0.28, 0.4, 0.46],
    output: [0, 1, 1, 0],
  },
  {
    eyebrow: "03 / The map",
    headline: "Every recurring task — named, timed, ranked.",
    body: "Two partners read the transcript against patterns from 47 brokerages and 23 build groups. Human, AI-leverage, or defer. Most operations carry about 90 recurring tasks; roughly 28 can move on week one.",
    range: [0.46, 0.52, 0.64, 0.7],
    output: [0, 1, 1, 0],
  },
  {
    eyebrow: "04 / The audit",
    headline: "$200, written, on your desk in 72 hours.",
    body: "Four tools picked to fit your stack. A defensible hours-returned number for quarter one. The whole report on a single PDF you can hand straight to your team.",
    range: [0.7, 0.76, 0.86, 0.91],
    output: [0, 1, 1, 0],
  },
  {
    eyebrow: "05 / Your call",
    headline: "Take the report and run.",
    body: "Some teams do exactly that. Some bring us back to install it for them — a separate engagement, separately scoped, separately priced. The audit is yours either way.",
    range: [0.91, 0.95, 1, 1],
    output: [0, 1, 1, 1],
  },
];

export function ExplodingView() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Spring-smoothed scroll progress so trackpad micro-jitter doesn't translate
  // into stutter. Lag is ~80ms — imperceptible against an 8-second video.
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 38,
    mass: 0.35,
  });

  // Force the browser to actually download the video. Some browsers treat
  // preload="auto" as a hint and lazily defer fetch for paused, off-screen
  // videos — load() guarantees a fetch.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.load();
  }, []);

  // Coalesce scroll-driven seeks into one currentTime write per animation frame.
  // The all-intra encoding lets the browser seek to any frame cheaply; the rAF
  // gate just keeps us from writing redundantly within a single paint.
  useMotionValueEvent(smoothed, "change", (v) => {
    if (!duration) return;
    const target = Math.max(0, Math.min(v, 0.999)) * duration;
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const video = videoRef.current;
      if (video && !Number.isNaN(video.duration)) {
        video.currentTime = target;
      }
    });
  });

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[420vh] bg-bone-50"
      aria-label="How an audit moves — from intake call to written report"
    >
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/interior_design_exploding_view.mp4"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            onLoadedMetadata={(e) => {
              setDuration(e.currentTarget.duration);
              e.currentTarget.currentTime = 0;
            }}
            onLoadedData={() => setReady(true)}
            className={`h-full w-full object-cover transition-opacity duration-700 ease-editorial ${ready ? "opacity-100" : "opacity-0"}`}
          />
          {/* Inward radial mask — keeps the exploded interior centered, bleeds the edges back into bone. */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_92%_82%_at_50%_50%,transparent_0%,transparent_56%,rgba(250,250,247,0.45)_76%,rgba(250,250,247,0.9)_94%,rgb(250,250,247)_100%)]" />
          {/* Top + bottom bleed so the section dissolves into the page rhythm. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-bone-50 via-bone-50/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-bone-50 via-bone-50/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-page items-end px-6 pb-24 lg:px-10 lg:pb-32">
          <div className="relative w-full max-w-xl">
            {phases.map((phase, i) => (
              <PhaseCopy
                key={i}
                progress={scrollYProgress}
                phase={phase}
                stacked={i > 0}
              />
            ))}
          </div>
        </div>

        <Progress progress={scrollYProgress} count={phases.length} />
      </div>
    </section>
  );
}

const PhaseCopy = memo(function PhaseCopy({
  progress,
  phase,
  stacked,
}: {
  progress: MotionValue<number>;
  phase: Phase;
  stacked: boolean;
}) {
  const opacity = useTransform(progress, phase.range, phase.output);
  const y = useTransform(progress, phase.range, [12, 0, 0, -8]);

  return (
    <motion.div
      style={{ opacity, y }}
      className={`flex flex-col ${stacked ? "absolute inset-0" : ""}`}
    >
      <p className="label">{phase.eyebrow}</p>
      <h2 className="display mt-5 text-[34px] leading-[1.05] text-ink-900 md:text-[48px] lg:text-[56px]">
        {phase.headline}
      </h2>
      <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-ink-700/90 md:text-[16px]">
        {phase.body}
      </p>
    </motion.div>
  );
});

function Progress({
  progress,
  count,
}: {
  progress: MotionValue<number>;
  count: number;
}) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 mx-auto flex max-w-page items-center gap-4 px-6 lg:px-10">
      <p className="num text-[11px] text-ink-700/55">audit walkthrough</p>
      <div className="relative h-px flex-1 bg-ink-900/10">
        <motion.div
          style={{ width }}
          className="absolute left-0 top-0 h-px bg-ink-900"
        />
        <div className="absolute inset-0 flex items-center justify-between">
          {Array.from({ length: count }).map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 -translate-y-px rounded-full bg-bone-50 ring-1 ring-ink-900/15"
            />
          ))}
        </div>
      </div>
      <p className="num text-[11px] text-ink-700/55">scroll</p>
    </div>
  );
}
