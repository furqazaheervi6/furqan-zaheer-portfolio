import { ScrollReveal } from "./scroll-reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
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
              <p>
                I am a biophysics undergraduate focused on the intersection of
                neural engineering, machine learning, and biological systems. My
                work spans building personal intelligence infrastructure,
                brain-computer interfaces, and software that bridges the gap
                between biological signal processing and computational models.
              </p>
              <p>
                I approach every domain — whether it is neural signal processing,
                mathematical theory, or systems architecture — as an engineering
                problem to be formalized, modeled, and solved. This extends beyond
                science into the design of tools that augment human cognition and
                decision-making.
              </p>
              <p>
                Currently exploring how principles from linear algebra,
                computational theory, and biophysical mathematics can inform new
                approaches to neural decoding and personal intelligence systems.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row with staggered reveal */}
        <div className="mt-20 grid grid-cols-2 gap-px border-t border-border-subtle bg-border-subtle lg:grid-cols-4">
          {[
            { label: "Domains", value: "6", icon: "◆" },
            { label: "Projects Built", value: "12+", icon: "◇" },
            { label: "Research Areas", value: "5", icon: "○" },
            { label: "Active Systems", value: "4", icon: "△" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={200 + i * 100}>
              <div className="group bg-black-deep px-6 py-8 transition-colors hover:bg-black-elevated lg:px-10 lg:py-10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-vermilion/40 transition-all duration-300 group-hover:text-vermilion/70">
                    {stat.icon}
                  </span>
                  <div className="font-mono text-[28px] font-medium leading-none tracking-tight text-vermilion transition-all duration-300 group-hover:tracking-[-0.02em] lg:text-[36px]">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  {stat.label}
                </div>
                {/* Animated underline on hover */}
                <div className="mt-2 h-[1px] w-0 bg-vermilion/20 transition-all duration-500 group-hover:w-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

