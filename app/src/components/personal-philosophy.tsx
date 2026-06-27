import { ScrollReveal } from "./scroll-reveal";

export function PersonalPhilosophy() {
  return (
    <section
      id="philosophy"
      className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal>
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
            / Philosophy
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <ScrollReveal delay={100}>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text-primary">
              Understanding the structures that shape mind, culture, and the
              built world.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-5 font-body text-sm leading-relaxed text-text-secondary">
              <p>
                My intellectual life outside the lab is driven by a single
                question: how do systems encode knowledge? Architecture encodes
                it in stone and space. Manga encodes it in ink and panel
                rhythm. History encodes it in institutions and memory.
                Mathematics encodes it in the pure language of structure and
                transformation.
              </p>
              <p>
                Each domain informs the others. The brutalist understanding of
                material truth translates to an engineering philosophy of
                honest abstraction. The narrative architecture of Berserk
                informs how I think about systems under extreme stress. Roman
                institutional design mirrors scalable software architecture.
                Linear algebra is the language neural populations use to
                compute.
              </p>
              <p>
                I do not treat these as separate interests. They are different
                formal systems for the same underlying drive: to decode how
                things are built, why they hold together, and what happens when
                they break.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

