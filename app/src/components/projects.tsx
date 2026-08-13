"use client";

import { useState, useEffect, useRef } from "react";

type ProjectTab = "software" | "neurotech" | "coming-soon";

const tabs: { key: ProjectTab; label: string }[] = [
  { key: "software", label: "Software" },
  { key: "neurotech", label: "Neurotech" },
  { key: "coming-soon", label: "Research directions" },
];

const circuitUrl = "https://d2ol7oe51mr4n9.cloudfront.net/user_2xwIPr50KlEwsiMAVmRtkFMSPij/2b36a9a7-79fb-4b23-8b40-8a10e3ed0eff.jpg";
const eyeUrl = "https://d2ol7oe51mr4n9.cloudfront.net/user_2xwIPr50KlEwsiMAVmRtkFMSPij/a714eed5-3994-49c4-83e0-0b742c3c4d72.jpg";
const torsoUrl = "https://d2ol7oe51mr4n9.cloudfront.net/user_2xwIPr50KlEwsiMAVmRtkFMSPij/5b88f9da-9452-4e06-bb8b-9007ab3988cb.jpg";

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("software");
  const tabContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tabContentRef.current) return;
    tabContentRef.current.style.opacity = "0";
    tabContentRef.current.style.transform = "translateY(8px)";
    requestAnimationFrame(() => {
      if (!tabContentRef.current) return;
      tabContentRef.current.style.opacity = "1";
      tabContentRef.current.style.transform = "translateY(0)";
    });
  }, [activeTab]);

  return (
    <section
      id="projects"
      className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36"
    >
      {/* Torso wireframe — embedded with screen blend */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full w-1/2 bg-contain bg-right bg-no-repeat"
          style={{
            backgroundImage: `url(${torsoUrl})`,
            opacity: "0.1",
            mixBlendMode: "screen" as const,
            filter: "grayscale(100%) brightness(1.5) contrast(1.3)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to left, transparent 30%, #080808 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
          / Projects
        </div>

        <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text-primary">
          Systems I have built
        </h2>

        <div className="mt-8 flex flex-col gap-4 border border-border-subtle bg-black-card/70 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl font-body text-sm leading-relaxed text-text-secondary">
            Selected public and team work, each framed with scope, methods, and
            direct evidence where it can be shared.
          </p>
          <a
            href="https://github.com/furqazaheervi6"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-vermilion transition-colors hover:text-text-primary"
          >
            Browse GitHub ↗
          </a>
        </div>

        {/* Tab bar */}
        <div className="mt-10 flex gap-1 border-b border-border-subtle">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-5 pb-3 pt-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-all ${
                activeTab === tab.key
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-vermilion" />
              )}
            </button>
          ))}
        </div>

        <div
          ref={tabContentRef}
          className="mt-10 transition-all duration-400 ease-out"
        >
          {activeTab === "software" && <SoftwareProjects />}
          {activeTab === "neurotech" && <NeurotechProjects />}
          {activeTab === "coming-soon" && <ComingSoonProjects />}
        </div>
      </div>
    </section>
  );
}

function AnimatedSignalBars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let time = 0;

    function draw() {
      if (!canvas || !ctx) return;
      time += 0.03;
      const w = canvas.width;
      const h = canvas.height;
      const barCount = 36;
      const barW = (w - (barCount - 1) * 2) / barCount;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < barCount; i++) {
        const phase = i * 0.4 + time;
        const v = Math.min(Math.sin(phase) * 0.5 + 0.5 + Math.sin(phase * 2.1 + 1.3) * 0.3 + Math.cos(phase * 0.7) * 0.2, 1);
        const barH = Math.max(2, v * h);
        const isActive = v > 0.55;
        ctx.fillStyle = isActive
          ? `rgba(220, 38, 38, ${0.4 + v * 0.4})`
          : `rgba(255, 255, 255, ${0.04 + v * 0.08})`;
        ctx.fillRect(i * (barW + 2), h - barH, barW, barH);
      }
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="h-8 w-full" />;
}

function SoftwareProjects() {
  return (
    <div className="space-y-16">
      <div className="group grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* Pattern OS dashboard with circuit background */}
        <div className="relative overflow-hidden border border-border-card bg-black-elevated transition-all duration-500 group-hover:border-vermilion/20 group-hover:shadow-[0_0_40px_rgba(220,38,38,0.04)]">
          {/* Circuit schematic — screen-blended inside the dashboard card */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `url(${circuitUrl})`,
              backgroundSize: "280px 280px",
              opacity: "0.1",
              mixBlendMode: "screen" as const,
              filter: "grayscale(100%) brightness(2) contrast(1.5)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "linear-gradient(135deg, transparent 30%, #080808 70%)",
            }}
          />

          <div className="relative border-b border-border-subtle px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-vermilion/60" />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                Pattern OS — Dashboard
              </span>
            </div>
          </div>
          <div className="relative p-5 font-mono text-[11px] text-text-secondary">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-20 text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  Correlations
                </span>
                <div className="flex-1">
                  <AnimatedSignalBars />
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-border-subtle pt-4">
                <span className="w-20 text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  AI Planner
                </span>
                <div className="flex flex-1 gap-2">
                  {["Schedule", "Priority", "Context"].map((l) => (
                    <span key={l} className="border border-border-subtle px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-text-secondary transition-colors hover:border-vermilion/30">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-border-subtle pt-4">
                <span className="w-20 text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  Sync
                </span>
                <div className="flex flex-1 gap-3 text-[10px] uppercase tracking-[0.1em] text-text-muted">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                    Notion
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" style={{ animationDelay: "0.5s" }} />
                    Calendar
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-vermilion/60 animate-pulse" style={{ animationDelay: "1s" }} />
                    Pattern Detection
                  </span>
                </div>
              </div>
              <div className="border-t border-border-subtle pt-4">
                <div className="mb-3 text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  Analysis surfaces
                </div>
                <div className="space-y-1.5">
                  {[
                    { label: "Four-pillar scoring", range: "weekly review", conf: "system", barW: "86%" },
                    { label: "Activity modifiers", range: "39-block model", conf: "inputs", barW: "72%" },
                    { label: "Pearson correlations", range: "behavior + performance", conf: "analysis", barW: "92%" },
                  ].map((p) => (
                    <div key={p.label} className="group/row overflow-hidden border border-border-subtle px-3 py-2 transition-all duration-300 hover:border-vermilion/20 hover:bg-black-surface/50">
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-vermilion/50 transition-all group-hover/row:bg-vermilion group-hover/row:shadow-[0_0_6px_rgba(220,38,38,0.4)]" />
                          <span className="text-[11px] text-text-secondary transition-colors group-hover/row:text-text-primary">{p.label}</span>
                        </div>
                        <span className="text-[10px] text-text-muted">{p.range}</span>
                        <span className="font-mono text-[10px] text-vermilion/70">{p.conf}</span>
                      </div>
                      <div className="mt-1.5 h-[2px] w-full bg-border-subtle">
                        <div className="h-full bg-vermilion/30 transition-all duration-700 group-hover/row:bg-vermilion/50" style={{ width: p.barW }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border-subtle pt-4">
                {[
                  ["Interface", "React + Vite"],
                  ["Storage", "SQLite"],
                  ["Integrations", "Notion + Calendar"],
                  ["AI layer", "Claude"],
                ].map(([label, value]) => (
                  <div key={label} className="border border-border-subtle bg-black-deep/60 px-3 py-2">
                    <div className="text-[9px] uppercase tracking-[0.1em] text-text-muted">{label}</div>
                    <div className="mt-1 text-[10px] text-text-primary">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
            Featured Project
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-text-primary lg:text-3xl">
            Pattern OS
          </h3>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
            Personal Intelligence Infrastructure
          </div>
          <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary">
            A shipped personal intelligence system organized around physical,
            mental, financial, and spiritual health. It combines a 39-block
            activity-modifier system, Pearson correlation analysis, AI-assisted
            journaling, planning, weekly digests, Google Calendar OAuth, Notion
            sync, and webhook support.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["4-pillar scoring", "39 activity modifiers", "Pearson correlations", "140+ end-to-end tests"].map((tag) => (
              <span key={tag} className="border border-border-subtle px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:border-vermilion/30 hover:text-vermilion">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/furqazaheervi6/Patttern-OS"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-vermilion/50 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-vermilion transition-colors hover:border-vermilion hover:bg-vermilion/5"
            >
              View source
            </a>
            <a
              href="https://patternos.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border-subtle px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-text-secondary transition-colors hover:border-text-secondary hover:text-text-primary"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function NeurotechProjects() {
  const contributionSteps = [
    { title: "Signal preparation", desc: "Developed EEG preprocessing and artifact-aware filtering workflows for motor-imagery BCI work." },
    { title: "Feature representations", desc: "Applied Fourier and wavelet methods, plus common spatial patterns, to prepare ML-ready representations of intended movement." },
    { title: "System handoff", desc: "Moved from signal-processing work into a firmware role, bridging EEG and sensor hardware, Bluetooth or serial communication, and downstream systems." },
    { title: "Team outcome", desc: "Contributed to MindTap, an EEG-powered assistive smartphone-control interface. The MINT team received the Innovation Award in Honour of Ari Kinarthy at the 2026 Simon Cox Student Design Competition." },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pipelineRef.current) return;
    pipelineRef.current.style.opacity = "0";
    pipelineRef.current.style.transform = "translateY(6px)";
    requestAnimationFrame(() => {
      if (!pipelineRef.current) return;
      pipelineRef.current.style.opacity = "1";
      pipelineRef.current.style.transform = "translateY(0)";
    });
  }, [activeStep]);

  return (
    <div className="space-y-12">
      <div className="group grid gap-10 lg:grid-cols-[1.2fr_1.3fr]">
        {/* Abstract assistive-neurotech signal path */}
        <div className="relative flex items-center justify-center overflow-hidden border border-border-card bg-black-elevated p-10 transition-all duration-500 group-hover:border-vermilion/20">
          <div
            className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${eyeUrl})`,
              opacity: "0.15",
              mixBlendMode: "screen" as const,
              filter: "grayscale(100%) brightness(2) contrast(1.4)",
            }}
          />
          <div className="relative">
            <svg viewBox="0 0 200 200" className="h-[200px] w-[200px] lg:h-[260px] lg:w-[260px]" fill="none">
              <g className="animate-rotate-slow origin-[100px_105px]">
                <ellipse cx="100" cy="105" rx="82" ry="88" stroke="rgba(220,38,38,0.06)" strokeWidth="0.5" strokeDasharray="3 6" fill="none" />
              </g>
              <ellipse cx="78" cy="102" rx="48" ry="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
              {[
                { x: 78, y: 46, label: "EEG" }, { x: 48, y: 72, label: "DSP" }, { x: 108, y: 72, label: "CSP" },
                { x: 48, y: 112, label: "BLE" }, { x: 108, y: 112, label: "I/O" }, { x: 78, y: 146, label: "FW" },
              ].map((el, i) => (
                <g key={i}>
                  <circle cx={el.x} cy={el.y} r={8} fill={`rgba(220,38,38,${0.02 + Math.sin(Date.now() * 0.001 + i) * 0.01})`} className="animate-pulse-node" style={{ animationDelay: `${i * 0.15}s` }} />
                  <circle cx={el.x} cy={el.y} r={5} fill={i < 5 ? "#DC2626" : "rgba(255,255,255,0.15)"} opacity={i < 5 ? 0.7 : 1} className={i < 5 ? "animate-pulse-node" : ""} style={{ animationDelay: `${i * 0.2}s` }} />
                  <text x={el.x} y={el.y - 10} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="JetBrains Mono, monospace">{el.label}</text>
                </g>
              ))}
              <path d="M 123 102 H 158" stroke="rgba(220,38,38,0.35)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-draw-line" />
              <rect x="158" y="82" width="28" height="40" rx="4" stroke="rgba(255,255,255,0.24)" strokeWidth="1" />
              <circle cx="172" cy="112" r="3" fill="rgba(220,38,38,0.7)" />
              <text x="172" y="76" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="JetBrains Mono, monospace">COMMAND</text>
            </svg>
            <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
              {["EEG workflows", "Motor imagery", "Firmware handoff", "Assistive control"].map((item) => (
                <span key={item} className="border border-border-subtle bg-black-deep/70 px-2.5 py-2 text-center">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
            Flagship team project · 2026 Simon Cox Innovation Award
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-text-primary lg:text-3xl">
            MindTap
          </h3>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
            EEG-powered assistive smartphone control · UBC MINT
          </div>
          <div className="mt-6 flex gap-2">
            {contributionSteps.map((_, i) => (
              <button key={i} onClick={() => setActiveStep(i)} className={`h-1 flex-1 transition-all duration-500 ${i === activeStep ? "bg-vermilion" : "bg-border-subtle hover:bg-text-muted/30"}`} />
            ))}
          </div>
          <div ref={pipelineRef} className="mt-6 min-h-[180px] transition-all duration-400">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-vermilion">{String(activeStep + 1).padStart(2, "0")}</span>
              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-text-primary">{contributionSteps[activeStep].title}</h4>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">{contributionSteps[activeStep].desc}</p>
          </div>
          <div className="mt-4 flex gap-2">
            {contributionSteps.map((_, i) => (
              <button key={i} onClick={() => setActiveStep(i)} className={`h-2 w-2 rounded-full transition-all duration-300 ${i === activeStep ? "bg-vermilion shadow-[0_0_8px_rgba(220,38,38,0.3)]" : "bg-border-subtle hover:bg-text-muted/40"}`} />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["EEG preprocessing", "Artifact-aware filtering", "Fourier / wavelets", "Common spatial patterns", "Firmware"].map((tag) => (
              <span key={tag} className="border border-border-subtle px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:border-vermilion/30 hover:text-vermilion">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 border-t border-border-subtle pt-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
          Supporting technical proof
        </div>
        <div>
          <h4 className="font-display text-xl font-semibold tracking-[-0.02em] text-text-primary">
            EEG Quantitative Statistical Analysis
          </h4>
          <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-text-secondary">
            A public signal-analysis project using Mark IV Ultracortex data:
            128 Hz sampling, one-second epochs, Fourier transforms, power
            spectral density, cross spectra, smoothing, coherence, and phase
            shift analysis.
          </p>
          <a
            href="https://github.com/furqazaheervi6/EEG-Quantitative-Statistical-Analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex border border-vermilion/50 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-vermilion transition-colors hover:border-vermilion hover:bg-vermilion/5"
          >
            View analysis
          </a>
        </div>
      </div>
    </div>
  );
}

function ComingSoonProjects() {
  return (
    <div className="space-y-8">
      <p className="mb-8 max-w-2xl font-body text-sm leading-relaxed text-text-secondary">
        One research build, deliberately staged to serve a future research,
        co-op, and graduate-school trajectory. This is not a clinical product
        and no clinical-performance claim is being made.
      </p>
      <div className="group/card relative overflow-hidden border border-border-card bg-black-elevated p-6 transition-all duration-500 hover:border-vermilion/25 lg:p-9">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_42%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-vermilion">
              Research build in progress
            </div>
            <h4 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-text-primary">
              Mercurion
            </h4>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              Clinical-first · non-invasive-first · message-first
            </p>
            <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-text-secondary">
              An exploration of reliable neural-intent interfaces for people
              with severe speech or motor impairment. The immediate objective is
              not a finished product: it is to record a first personal EEG
              session and establish a quality-scored acquisition pipeline.
            </p>
            <a
              href="https://mercurion-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex border border-vermilion/50 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-vermilion transition-colors hover:border-vermilion hover:bg-vermilion/5"
            >
              View research build
            </a>
          </div>
          <div className="border border-border-subtle bg-black-deep/70 p-5">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted">
              Staged path
            </div>
            <ol className="mt-5 space-y-4">
              {[
                ["Now", "Personal EEG recording"],
                ["Pipeline", "BrainFlow, artifact handling, BIDS, quality scoring"],
                ["Next", "Simple EEG / EOG event detection"],
                ["Later", "External command runtime and evidence report"],
              ].map(([stage, detail], index) => (
                <li key={stage} className="flex gap-3">
                  <span className="font-mono text-[10px] text-vermilion/80">0{index + 1}</span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-primary">{stage}</div>
                    <div className="mt-1 font-body text-xs leading-relaxed text-text-secondary">{detail}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
