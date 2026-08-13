import { ScrollReveal } from "./scroll-reveal";
import { TextHoverViz } from "./text-hover-viz";

const circuitUrl = "https://d2ol7oe51mr4n9.cloudfront.net/user_2xwIPr50KlEwsiMAVmRtkFMSPij/2b36a9a7-79fb-4b23-8b40-8a10e3ed0eff.jpg";
const handGearsUrl = "https://d2ol7oe51mr4n9.cloudfront.net/user_2xwIPr50KlEwsiMAVmRtkFMSPij/1d03e0de-f890-424c-9a39-c78aeb2ab9b3.jpg";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36"
    >
      {/* Circuit schematic — tiled, screen-blended */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${circuitUrl})`,
            backgroundSize: "400px 400px",
            backgroundRepeat: "repeat",
            opacity: "0.12",
            mixBlendMode: "screen" as const,
            filter: "grayscale(100%) brightness(2) contrast(1.5)",
          }}
        />
        {/* Diagonal wipe fade */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #080808 20%, transparent 50%, #080808 80%)",
          }}
        />
        {/* Hand/gears wireframe — screen-blended from the right */}
        <div
          className="absolute bottom-0 right-0 h-[65%] w-[45%] bg-contain bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${handGearsUrl})`,
            opacity: "0.1",
            mixBlendMode: "screen" as const,
            filter: "grayscale(100%) brightness(1.5) contrast(1.3)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to left, transparent 40%, #080808 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <ScrollReveal>
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
            / About
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <ScrollReveal delay={100}>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text-primary">
              Treating living systems and intelligence as engineering problems to
              decode.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6 font-body text-sm leading-relaxed text-text-secondary">
              <TextHoverViz>
                <p>
                  I am a UBC biophysics undergraduate interested in neural
                  engineering, machine learning, and biological systems. I build
                  small, inspectable systems that connect signal analysis,
                  mathematical reasoning, and useful software.
                </p>
              </TextHoverViz>
              <p>
                My current public work includes an EEG spectral and coherence
                analysis project for signals collected with a Mark IV Ultracortex
                headset, plus Pattern OS, a personal intelligence dashboard that
                connects Notion, Google Calendar, and AI-assisted reflection.
              </p>
              <p>
                I am building the quantitative foundation for research in
                biophysics and neural engineering, with particular interest in
                how linear algebra, signal processing, and machine learning can
                help model living systems.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Evidence row */}
        <div className="relative mt-20 grid grid-cols-2 gap-px border-t border-border-subtle bg-border-subtle lg:grid-cols-4">
          {[
            { label: "Degree path", value: "UBC", detail: "Biophysics", icon: "◆" },
            { label: "Public projects", value: "02", detail: "documented repos", icon: "◇" },
            { label: "Signal work", value: "EEG", detail: "spectral analysis", icon: "○" },
            { label: "Availability", value: "2027", detail: "research & internships", icon: "△" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={200 + i * 100}>
              <div className="group relative bg-black-deep/90 px-6 py-8 backdrop-blur-sm transition-all duration-300 hover:bg-black-elevated/90 lg:px-10 lg:py-10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-vermilion/40 transition-all duration-300 group-hover:text-vermilion/70">
                    {stat.icon}
                  </span>
                  <span className="font-mono text-[24px] font-medium leading-none tracking-tight text-vermilion transition-all duration-300 group-hover:tracking-[-0.02em] lg:text-[30px]">
                    {stat.value}
                  </span>
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {stat.label}
                </div>
                <div className="mt-1 font-body text-xs text-text-secondary">
                  {stat.detail}
                </div>
                <div className="mt-2 h-[1px] w-0 bg-gradient-to-r from-vermilion/20 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


