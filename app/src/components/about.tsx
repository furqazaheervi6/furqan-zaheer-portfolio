export function About() {
  return (
    <section
      id="about"
      className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section label */}
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
          / About
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Left — bio */}
          <div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text-primary">
              Treating living systems and intelligence as engineering problems to
              decode.
            </h2>
          </div>

          {/* Right — detailed text */}
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
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 gap-px border-t border-border-subtle bg-border-subtle lg:grid-cols-4">
          {[
            { label: "Domains", value: "6" },
            { label: "Projects Built", value: "12+" },
            { label: "Research Areas", value: "5" },
            { label: "Active Systems", value: "4" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-black-deep px-6 py-8 lg:px-10 lg:py-10"
            >
              <div className="font-mono text-[28px] font-medium leading-none tracking-tight text-vermilion lg:text-[36px]">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

