"use client";

import { useEffect, useRef } from "react";
import { HeroRing } from "./hero-ring";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, []);

  // Animated letter-by-letter reveal for the name
  useEffect(() => {
    const h1 = nameRef.current;
    if (!h1) return;

    const letters = h1.querySelectorAll(".hero-letter");
    letters.forEach((letter, i) => {
      (letter as HTMLElement).style.animationDelay = `${0.3 + i * 0.03}s`;
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pt-24 lg:px-12"
    >
      {/* Animated geometric ring backdrop */}
      <HeroRing />

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.02)_0%,transparent_60%)]" />

      <div
        ref={ref}
        className="relative mx-auto max-w-[1200px] text-center opacity-0 transition-all duration-1000"
        style={{ transform: "translateY(24px)" }}
      >
        {/* Animated scanning line across the top */}
        <div className="relative mx-auto mb-8 h-[1px] w-32 overflow-hidden">
          <div className="absolute inset-0 animate-scan-line bg-vermilion/30" />
        </div>

        {/* Eyebrow - location / academic tags */}
        <div className="mb-8 flex animate-fade-in-up items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <span>Biophysics</span>
          <span className="h-[1px] w-4 bg-text-muted/40" />
          <span>Neural Engineering</span>
          <span className="h-[1px] w-4 bg-text-muted/40" />
          <span>ML</span>
        </div>

        {/* Name — the brand mark with staggered letters */}
        <h1
          ref={nameRef}
          className="font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-text-primary"
        >
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

        {/* Vermillion accent underline on the name */}
        <div className="mx-auto mt-2 h-[2px] w-0 animate-line-grow bg-vermilion/40" style={{ animationDelay: "1.4s", animationFillMode: "both" }} />

        {/* Positioning line */}
        <p className="mx-auto mt-6 max-w-[600px] animate-fade-in-up font-body text-[clamp(0.95rem,1.6vw,1.25rem)] font-light leading-relaxed text-text-secondary" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
          Biophysics undergraduate building across neural engineering, machine
          learning, biological systems, software, mathematics, and personal
          intelligence tools.
        </p>

        {/* Academic / location tags */}
        <div className="mt-8 flex animate-fade-in-up flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted" style={{ animationDelay: "1s", animationFillMode: "both" }}>
          <span className="border border-border-subtle px-3 py-1.5 transition-colors hover:border-vermilion/30">
            Biophysics
          </span>
          <span className="border border-border-subtle px-3 py-1.5 transition-colors hover:border-vermilion/30">
            Neural Engineering
          </span>
          <span className="border border-border-subtle px-3 py-1.5 transition-colors hover:border-vermilion/30">
            Machine Learning
          </span>
          <span className="border border-border-subtle px-3 py-1.5 transition-colors hover:border-vermilion/30">
            Biological Systems
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex animate-fade-in-up items-center justify-center gap-4" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden border border-vermilion/60 px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-vermilion transition-all"
          >
            {/* Shine effect on hover */}
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-vermilion/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">View projects</span>
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 border border-border-subtle px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-all hover:border-text-secondary hover:text-text-primary"
          >
            Contact
          </a>
        </div>

        {/* Status bar with pulsing indicator */}
        <div className="mx-auto mt-16 flex animate-fade-in-up max-w-[400px] items-center justify-center gap-6 border-t border-border-subtle pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted" style={{ animationDelay: "1.4s", animationFillMode: "both" }}>
          <span className="flex items-center gap-2">
            <span className="relative">
              <span className="h-1.5 w-1.5 rounded-full bg-vermilion" />
              <span className="absolute -inset-1 animate-ping rounded-full bg-vermilion/30" />
            </span>
            Open to research
          </span>
          <span>INTELLIGENCE LAB</span>
        </div>
      </div>
    </section>
  );
}

