"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100dvh] items-center justify-center px-6 pt-24 lg:px-12"
    >
      <div
        ref={ref}
        className="mx-auto max-w-[1200px] text-center opacity-0 transition-all duration-1000"
        style={{ transform: "translateY(24px)" }}
      >
        {/* Eyebrow - location / academic tags */}
        <div className="mb-8 flex items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
          <span>Biophysics</span>
          <span className="h-[1px] w-4 bg-text-muted/40" />
          <span>Neural Engineering</span>
          <span className="h-[1px] w-4 bg-text-muted/40" />
          <span>ML</span>
        </div>

        {/* Name — the brand mark */}
        <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] text-text-primary">
          Furqan
          <br />
          Zaheer
        </h1>

        {/* Positioning line */}
        <p className="mx-auto mt-6 max-w-[600px] font-body text-[clamp(0.95rem,1.6vw,1.25rem)] font-light leading-relaxed text-text-secondary">
          Biophysics undergraduate building across neural engineering, machine
          learning, biological systems, software, mathematics, and personal
          intelligence tools.
        </p>

        {/* Academic / location tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
          <span className="border border-border-subtle px-3 py-1.5">
            Biophysics
          </span>
          <span className="border border-border-subtle px-3 py-1.5">
            Neural Engineering
          </span>
          <span className="border border-border-subtle px-3 py-1.5">
            Machine Learning
          </span>
          <span className="border border-border-subtle px-3 py-1.5">
            Biological Systems
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-vermilion/60 px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-vermilion transition-all hover:bg-vermilion hover:text-black-deep hover:shadow-[0_0_24px_rgba(220,38,38,0.15)]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border-subtle px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-all hover:border-text-secondary hover:text-text-primary"
          >
            Contact
          </a>
        </div>

        {/* Status bar */}
        <div className="mx-auto mt-16 flex max-w-[400px] items-center justify-center gap-6 border-t border-border-subtle pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-vermilion" />
            Open to research
          </span>
          <span>INTELLIGENCE LAB</span>
        </div>
      </div>
    </section>
  );
}

