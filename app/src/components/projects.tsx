"use client";

import { useState } from "react";

type ProjectTab = "software" | "neurotech" | "coming-soon";

const tabs: { key: ProjectTab; label: string }[] = [
  { key: "software", label: "Software" },
  { key: "neurotech", label: "Neurotech" },
  { key: "coming-soon", label: "Coming Soon" },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("software");

  return (
    <section
      id="projects"
      className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
          / Projects
        </div>

        <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text-primary">
          Systems I have built
        </h2>

        {/* Tab bar */}
        <div className="mt-10 flex gap-1 border-b border-border-subtle">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 pb-3 pt-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-all ${
                activeTab === tab.key
                  ? "border-b border-vermilion text-text-primary"
                  : "border-b border-transparent text-text-muted hover:text-text-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-10">
          {activeTab === "software" && <SoftwareProjects />}
          {activeTab === "neurotech" && <NeurotechProjects />}
          {activeTab === "coming-soon" && <ComingSoonProjects />}
        </div>
      </div>
    </section>
  );
}

function SoftwareProjects() {
  return (
    <div className="space-y-16">
      {/* Pattern OS — Hero Software Project */}
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* Mock dashboard visual */}
        <div className="overflow-hidden border border-border-card bg-black-elevated">
          <div className="border-b border-border-subtle px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-vermilion/60" />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                Pattern OS — Dashboard
              </span>
            </div>
          </div>
          <div className="p-5 font-mono text-[11px] text-text-secondary">
            {/* Mock signal/data grid */}
            <div className="space-y-3">
              {/* Signal trajectory row */}
              <div className="flex items-center gap-3">
                <span className="w-20 text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  Signal Bus
                </span>
                <div className="flex-1">
                  <div className="flex h-8 items-end gap-[2px]">
                    {Array.from({ length: 36 }, (_, i) => (
                      <div
                        key={i}
                        className="w-[2px] rounded-t"
                        style={{
                          height: `${20 + Math.sin(i * 0.6 + Date.now() * 0.0001) * 12 + Math.sin(i * 1.3) * 6}px`,
                          background:
                            i > 20 && i < 28
                              ? "rgba(220,38,38,0.7)"
                              : "rgba(255,255,255,0.12)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* AI planner row */}
              <div className="flex items-center gap-3 border-t border-border-subtle pt-3">
                <span className="w-20 text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  AI Planner
                </span>
                <div className="flex flex-1 gap-2">
                  {["Schedule", "Priority", "Context"].map((l) => (
                    <span
                      key={l}
                      className="border border-border-subtle px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-text-secondary"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sync row */}
              <div className="flex items-center gap-3 border-t border-border-subtle pt-3">
                <span className="w-20 text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  Sync
                </span>
                <div className="flex flex-1 gap-3 text-[10px] uppercase tracking-[0.1em] text-text-muted">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    Notion
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    Calendar
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-vermilion/60" />
                    Pattern Detection
                  </span>
                </div>
              </div>

              {/* Pattern detection */}
              <div className="border-t border-border-subtle pt-3">
                <div className="mb-2 text-[10px] uppercase tracking-[0.12em] text-text-muted">
                  Detected Patterns
                </div>
                <div className="space-y-1.5">
                  {[
                    { label: "Productivity peak", range: "09:00 — 12:00", conf: "87%" },
                    { label: "Deep work window", range: "14:00 — 17:00", conf: "76%" },
                    { label: "Context switch cost", range: "avg 12 min", conf: "93%" },
                  ].map((p) => (
                    <div
                      key={p.label}
                      className="flex items-center justify-between border border-border-subtle px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-vermilion/50" />
                        <span className="text-[11px] text-text-secondary">
                          {p.label}
                        </span>
                      </div>
                      <span className="text-[10px] text-text-muted">
                        {p.range}
                      </span>
                      <span className="font-mono text-[10px] text-vermilion/70">
                        {p.conf}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern OS description */}
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
            An AI-native operating system for personal intelligence. Pattern OS
            continuously analyzes your digital behavior, syncs with Notion and
            Calendar, detects productivity patterns, and builds a dynamic model
            of how you work, think, and decide. It surfaces contextual
            recommendations, minimizes context-switching cost, and evolves its
            understanding of your cognitive patterns over time.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["AI Planning", "Pattern Detection", "Notion Sync", "Calendar Integration"].map(
              (tag) => (
                <span
                  key={tag}
                  className="border border-border-subtle px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NeurotechProjects() {
  const pipelineSteps = [
    {
      title: "Assistive Goal",
      desc: "Restore communication for individuals with locked-in syndrome through real-time neural decoding of imagined speech from EEG signals.",
    },
    {
      title: "Headset System",
      desc: "Custom electrode placement targeting motor cortex (C3, Cz, C4) with active shielding and 256 Hz sampling for high-fidelity signal capture.",
    },
    {
      title: "Electrode Strategy",
      desc: "14-channel dry-electrode montage optimized for signal-to-noise ratio in non-laboratory environments, with ICA-based artifact rejection.",
    },
    {
      title: "Signal Processing",
      desc: "Bandpass filtering (0.5-50 Hz), common average referencing, and wavelet denoising pipeline running at sub-100ms latency.",
    },
    {
      title: "Model Evaluation",
      desc: "CNN-LSTM hybrid architecture achieving 82% accuracy across 4-class imagined speech classification with subject-independent transfer learning.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-12">
      {/* MINT / MindTap */}
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1.3fr]">
        {/* EEG headset visual — static schematic */}
        <div className="flex items-center justify-center border border-border-card bg-black-elevated p-10">
          <div className="relative">
            {/* EEG headset schematic */}
            <svg
              viewBox="0 0 200 200"
              className="h-[200px] w-[200px] lg:h-[260px] lg:w-[260px]"
              fill="none"
            >
              {/* Head outline */}
              <ellipse cx="100" cy="105" rx="72" ry="78" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />
              {/* Electrodes */}
              {[
                { x: 100, y: 30, label: "Fz" },
                { x: 65, y: 50, label: "F3" },
                { x: 135, y: 50, label: "F4" },
                { x: 100, y: 75, label: "Cz" },
                { x: 55, y: 85, label: "C3" },
                { x: 145, y: 85, label: "C4" },
                { x: 100, y: 110, label: "Pz" },
                { x: 60, y: 120, label: "P3" },
                { x: 140, y: 120, label: "P4" },
                { x: 100, y: 150, label: "Oz" },
                { x: 72, y: 30, label: "Fp1" },
                { x: 128, y: 30, label: "Fp2" },
                { x: 45, y: 105, label: "T7" },
                { x: 155, y: 105, label: "T8" },
              ].map((el, i) => (
                <g key={i}>
                  <circle
                    cx={el.x}
                    cy={el.y}
                    r={5}
                    fill={i < 5 ? "#DC2626" : "rgba(255,255,255,0.15)"}
                    opacity={i < 5 ? 0.8 : 1}
                  />
                  <text
                    x={el.x}
                    y={el.y - 10}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.35)"
                    fontSize="8"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {el.label}
                  </text>
                </g>
              ))}
              {/* Center crosshair */}
              <line
                x1={100}
                y1={40}
                x2={100}
                y2={160}
                stroke="rgba(220,38,38,0.12)"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
              <line
                x1={40}
                y1={100}
                x2={160}
                y2={100}
                stroke="rgba(220,38,38,0.12)"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

        {/* Pipeline carousel */}
        <div className="flex flex-col justify-center">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
            Case Study
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-text-primary lg:text-3xl">
            MINT / MindTap
          </h3>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
            EEG-based BCI for Assistive Communication
          </div>

          {/* Step navigation */}
          <div className="mt-6 flex gap-2">
            {pipelineSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-1 flex-1 transition-colors ${
                  i === activeStep ? "bg-vermilion" : "bg-border-subtle"
                }`}
              />
            ))}
          </div>

          {/* Active step */}
          <div className="mt-6 min-h-[180px]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-vermilion">
                {String(activeStep + 1).padStart(2, "0")}
              </span>
              <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-text-primary">
                {pipelineSteps[activeStep].title}
              </h4>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
              {pipelineSteps[activeStep].desc}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["BCI", "EEG", "Signal Processing", "Deep Learning"].map((tag) => (
              <span
                key={tag}
                className="border border-border-subtle px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ComingSoonProjects() {
  const projects = [
    {
      title: "Neural Decoder Framework",
      desc: "A modular framework for real-time neural signal decoding, designed to generalize across EEG, ECoG, and fNIRS modalities.",
      tags: ["Neural Engineering", "Signal Processing", "Python"],
    },
    {
      title: "Biophysical Simulation Engine",
      desc: "Numerical simulation of neural population dynamics using biophysically realistic conductance-based models.",
      tags: ["Computational Neuroscience", "Simulation", "Mathematics"],
    },
    {
      title: "Cognitive Workbench",
      desc: "A unified workspace for personal intelligence — integrating knowledge graphs, task archaeology, and cognitive pattern analysis.",
      tags: ["Personal Intelligence", "Knowledge Graphs", "HCI"],
    },
    {
      title: "Algebraic Theory of Neural Computation",
      desc: "Formalizing neural computation through the lens of linear algebra, representation theory, and category theory.",
      tags: ["Mathematical Theory", "Algebra", "Neural Computation"],
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((p) => (
        <div
          key={p.title}
          className="border border-border-card bg-black-elevated p-6 transition-colors hover:border-vermilion/30"
        >
          <h4 className="font-display text-lg font-semibold tracking-[-0.01em] text-text-primary">
            {p.title}
          </h4>
          <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
            {p.desc}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="border border-border-subtle px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

