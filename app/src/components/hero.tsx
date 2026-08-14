"use client";

import { useEffect, useRef } from "react";
import { HeroRing } from "./hero-ring";
import { MouseTilt } from "./mouse-tilt";
import { WordReveal } from "./word-reveal";

const higgsfieldSignalFieldUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_2xwIPr50KlEwsiMAVmRtkFMSPij/hf_20260814_231724_a138573a-05c6-4dc8-a9cc-877a1d2df9e0.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, []);

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pt-24 lg:px-12"
    >
      {/* Generated signal field — designed for readable central copy */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${higgsfieldSignalFieldUrl})`,
            opacity: "0.94",
            filter: "contrast(1.12) brightness(1.08)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 50% 56% at 50% 46%, rgba(8,8,8,0.03) 0%, rgba(8,8,8,0.35) 68%, #080808 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-deep/45 via-transparent to-black-deep/70" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(78vw,820px)] w-[min(78vw,820px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-vermilion/[0.07] shadow-[0_0_120px_rgba(220,38,38,0.035)]" />
      <HeroRing />

      {/* Radial vermillion vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.02)_0%,transparent_60%)]" />

      <div
        ref={ref}
        className="relative mx-auto max-w-[1200px] text-center opacity-0 transition-all duration-1000"
        style={{ transform: "translateY(24px)" }}
      >
        {/* Scanning line */}
        <div className="relative mx-auto mb-8 h-[1px] w-32 overflow-hidden">
          <div className="absolute inset-0 animate-scan-line bg-vermilion/30" />
        </div>

        {/* Eyebrow */}
        <div
          className="mb-8 flex animate-fade-in-up items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <span>Biophysics</span>
          <span className="h-[1px] w-4 bg-text-muted/40" />
          <span>Neural Engineering</span>
          <span className="h-[1px] w-4 bg-text-muted/40" />
          <span>Assistive BCI</span>
        </div>

        {/* Name — with 3D mouse tilt */}
        <MouseTilt maxTilt={2} scale={1.005} className="inline-block cursor-default">
          <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-text-primary">
            {Array.from("Furqan").map((char, i) => (
              <span
                key={`f-${i}`}
                className="hero-letter inline-block animate-letter-fade"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <br />
            {Array.from("Zaheer").map((char, i) => (
              <span
                key={`z-${i}`}
                className="hero-letter inline-block animate-letter-fade"
                style={{ animationDelay: `${0.5 + i * 0.06}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </MouseTilt>

        {/* Vermillion accent underline */}
        <div
          className="mx-auto mt-2 h-[2px] w-0 animate-line-grow bg-vermilion/40"
          style={{ animationDelay: "1.4s", animationFillMode: "both" }}
        />

        {/* Positioning line — word-by-word reveal */}
        <div
          className="mx-auto mt-6 max-w-[600px] animate-fade-in-up"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          <WordReveal
            text="UBC biophysics undergraduate working across EEG signal processing, embedded neurotechnology, and research-grade tools for assistive communication."
            className="font-body text-[clamp(0.95rem,1.6vw,1.25rem)] font-light leading-relaxed text-text-secondary"
            wordDelay={200}
            staggerMs={50}
          />
        </div>

        {/* Academic tags */}
        <div
          className="mt-8 flex animate-fade-in-up flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted"
          style={{ animationDelay: "1s", animationFillMode: "both" }}
        >
          {["EEG Signal Processing", "Embedded Neurotech", "Assistive BCI", "Biophysics"].map((tag) => (
            <span
              key={tag}
              className="group/tag relative overflow-hidden border border-border-subtle px-3 py-1.5 transition-all hover:border-vermilion/30"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-vermilion/5 to-transparent transition-transform duration-700 group-hover/tag:translate-x-full" />
              <span className="relative">{tag}</span>
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="mt-10 flex animate-fade-in-up items-center justify-center gap-4"
          style={{ animationDelay: "1.2s", animationFillMode: "both" }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden border border-vermilion/60 px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-vermilion transition-all"
          >
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-vermilion/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-vermilion/60 transition-all group-hover:bg-vermilion" />
              View work
            </span>
          </a>
          <a
            href="https://github.com/furqazaheervi6"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 border border-border-subtle px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-all hover:border-text-secondary hover:text-text-primary"
          >
            <span className="relative z-10">GitHub</span>
          </a>
        </div>

        {/* Research profile */}
        <div
          className="portfolio-grid mx-auto mt-14 grid max-w-[760px] animate-fade-in-up overflow-hidden border border-border-subtle text-left sm:grid-cols-3"
          style={{ animationDelay: "1.4s", animationFillMode: "both" }}
        >
          {[
            { label: "Study", value: "UBC Biophysics" },
            { label: "Current role", value: "Firmware · UBC MINT" },
            { label: "Trajectory", value: "Research / co-op · 2027" },
          ].map((item) => (
            <div key={item.label} className="border-b border-border-subtle bg-black-deep/70 px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted">
                {item.label}
              </div>
              <div className="mt-1.5 font-body text-sm font-medium text-text-primary">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}








