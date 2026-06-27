import { createFileRoute } from "@tanstack/react-router";
import { NeuralBackground } from "../components/neural-background";
import { CursorEffects } from "../components/cursor-effects";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { SignalDivider } from "../components/signal-divider";
import { CircuitTrace } from "../components/circuit-trace";
import { ScrollReveal } from "../components/scroll-reveal";
import { PersonalHero } from "../components/personal-hero";
import { PersonalPhilosophy } from "../components/personal-philosophy";
import { InterestVisual } from "../components/interest-visual";
import { DualityBridge } from "../components/duality-bridge";

export const Route = createFileRoute("/personal")({
  component: PersonalPage,
});

const detailContent = {
  architecture: {
    subtitle: "Space, structure, ornament, and civic scale",
    description:
      "Architecture as the physical encoding of civilization. Victorian ornament, pure brutalism, and Islamic-inspired geometry represent different answers to the same question: how does space shape human behavior?",
    themes: [
      "Victorian Architecture",
      "Pure Brutalism",
      "Islamic-Inspired",
      "Monumental Space",
      "Geometry & Ornament",
      "Concrete & Arches",
      "Courtyards",
      "Civic Scale",
    ],
    details: [
      "The tension between Victorian ornamental richness and brutalist structural honesty reveals the full spectrum of architectural expression.",
      "Islamic architecture's use of geometric patterns, muqarnas vaulting, and courtyard hierarchies offers a mathematical approach to sacred space.",
      "Brutalism's raw concrete and monumental scale speaks to an architecture of truth — material, structure, and program expressed without disguise.",
      "Courtyard typologies across cultures demonstrate how enclosed space mediates between private and public, human and civic.",
      "Victorian Gothic revival, particularly the work of Pugin and the Houses of Parliament, represents architecture as moral philosophy built in stone — every ornament carries meaning, every proportion follows from theological principle.",
      "The arch as a structural and symbolic form: from Roman aqueducts to Gothic cathedrals to Islamic iwans, the arch is the simplest way to transform a gap into a threshold.",
    ],
  },
  manga: {
    subtitle: "Dark fantasy, sequential art, and the visual language of extremity",
    description:
      "Manga and sequential art as a medium for existential themes, human violence, transcendence, and the sublime. The densest storytelling per panel of any visual medium — each page is a composition problem solved under extreme constraints.",
    themes: [
      "Berserk — Dark Fantasy",
      "Naruto — Systemic Conflict",
      "Vinland Saga",
      "The Climber",
      "Samurai Jack",
      "Vagabond",
      "Marvel/DC Cosmic Lore",
    ],
    details: [
      "Berserk stands as the singular achievement in dark fantasy — Miura's linework, the Eclipse, and Guts' arc form a meditation on trauma, will, and the cost of vengeance. The quality of hatching alone is a technical masterclass.",
      "Vinland Saga's transformation from viking revenge epic to philosophical exploration of true peace is one of manga's most ambitious narrative arcs. The farm arc is a radical act of storytelling patience.",
      "The Climber's portrayal of solitary obsession and the silent dialogue between climber and mountain captures something uniquely human about the drive to transcend limits through pure will.",
      "Samurai Jack's geometric minimalism proves that formal restraint produces the most powerful visual storytelling — every frame is compositionally intentional, every color choice carries narrative weight.",
      "Naruto's system of chakra natures, clan abilities, and tailed beasts creates one of shonen's most internally consistent magic systems — a formal ruleset that enables tactical depth.",
      "Vagabond's exploration of the Way of the Sword, through Miyamoto Musashi's journey, treats combat as a spiritual and philosophical discipline rather than mere violence.",
    ],
  },
  history: {
    subtitle: "Empire, statecraft, scholarship, and the architecture of civilization",
    description:
      "History as the study of systems — how institutions rise, maintain coherence, and dissolve. Roman law, Islamic scholarship, Greek philosophy, and pre-modern statecraft as case studies in system design at civilizational scale.",
    themes: [
      "Roman Empire",
      "Greek Philosophy",
      "Islamic Golden Age",
      "Pre-Modern Statecraft",
      "Warfare & Technology",
      "Scholarship",
      "Historical Consciousness",
    ],
    details: [
      "Roman engineering, law, and institutional design created a system that sustained governance across three continents for centuries — a case study in scalable administration that modern systems architecture still has not surpassed.",
      "The Islamic Golden Age's synthesis of Greek, Persian, and Indian knowledge created the foundation for modern science. The House of Wisdom in Baghdad was the world's first great interdisciplinary research institution.",
      "Pre-modern empires understood information as infrastructure: the Roman cursus publicus, the Inca quipu, the Mongol yam system — roads, postal systems, census, and record-keeping as the backbone of state capacity.",
      "The 19th century's technological acceleration rewired human cognition and social organization. The telegraph collapsed communication time, the railway collapsed physical distance, and the factory introduced the concept of synchronized human coordination at scale.",
      "Greek phalanx and Roman legion represent two different solutions to the same problem: how to make individual humans act as a single coherent unit under extreme stress. The answer is training, discipline, and formation — principles that recur in machine learning ensembles.",
    ],
  },
  mathematics: {
    subtitle: "Algebra, computation, biophysics, and the structure of reality",
    description:
      "Mathematics as the language in which the universe is written. Linear algebra as the grammar of neural computation, algebraic theory as the architecture of thought, and higher-dimensional mathematics as the terrain yet to be mapped.",
    themes: [
      "Linear Algebra",
      "Algebraic Theory",
      "Higher-Dimensional Math",
      "Biophysical Math",
      "Quantum Systems",
      "Game Theory",
    ],
    details: [
      "Linear algebra is the hidden language of neural computation — from the dot products in artificial neurons to the eigenmodes of biological neural populations. Understanding computation means understanding linear transformations.",
      "Algebraic theory and category theory provide the most general framework for understanding structure and transformation across mathematical domains. Functors between categories are the deepest form of analogy.",
      "Biophysical mathematics demands bridging discrete (molecular) and continuous (field) descriptions — the same mathematical challenge as neural decoding. This is where differential equations meet stochastic processes.",
      "Game theory reveals the formal structure of strategic interaction — from evolutionary biology to economic systems to multi-agent AI alignment. The Nash equilibrium is a fixed point of rational behavior.",
      "Higher-dimensional geometry: visualizing 4D objects through projection and slicing trains the same cognitive muscles needed to think about high-dimensional neural representations and state spaces.",
    ],
  },
};

type DomainKey = keyof typeof detailContent;

function PersonalDomainSection({
  id,
  domain,
  index,
}: {
  id: string;
  domain: DomainKey;
  index: number;
}) {
  const data = detailContent[domain];

  return (
    <section
      id={id}
      className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Background visual */}
        <div className="relative overflow-hidden">
          <InterestVisual
            mode={domain}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30"
          />

          <div className="relative z-10">
            <ScrollReveal>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
                / {String(index + 1).padStart(2, "0")}
              </div>
            </ScrollReveal>

            <div className="grid gap-12 lg:grid-cols-[1.1fr_1.2fr]">
              <ScrollReveal delay={100}>
                <div>
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
                    {data.subtitle}
                  </div>
                  <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text-primary">
                    {domain.charAt(0).toUpperCase() + domain.slice(1)}
                  </h2>
                  <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary">
                    {data.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {data.themes.map((theme) => (
                      <span
                        key={theme}
                        className="border border-border-subtle px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:border-vermilion/30 hover:text-vermilion"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="space-y-5">
                  {data.details.map((detail, i) => (
                    <div
                      key={i}
                      className="border-l border-vermilion/30 pl-4 transition-all duration-300 hover:border-vermilion/70"
                    >
                      <p className="font-body text-sm leading-relaxed text-text-secondary transition-colors duration-300 hover:text-text-primary">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonalPage() {
  const sections: { id: string; domain: DomainKey }[] = [
    { id: "architecture", domain: "architecture" },
    { id: "manga-art", domain: "manga" },
    { id: "history", domain: "history" },
    { id: "mathematics", domain: "mathematics" },
  ];

  return (
    <>
      <NeuralBackground />
      <CursorEffects />
      <Nav mode="personal" />
      <main className="relative">
        <PersonalHero />

        <div className="relative">
          <CircuitTrace />
          <SignalDivider />
        </div>

        <PersonalPhilosophy />

        {sections.map((s, i) => (
          <div key={s.domain}>
            <div className="relative">
              <CircuitTrace />
              <SignalDivider />
            </div>
            <PersonalDomainSection id={s.id} domain={s.domain} index={i} />
          </div>
        ))}

        <div className="relative">
          <CircuitTrace />
          <SignalDivider />
        </div>

        <DualityBridge from="personal" />

        <section id="contact" className="relative z-10 border-t border-border-subtle px-6 py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1200px] text-center">
            <ScrollReveal>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
                / Contact
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text-primary">
                Reach out
              </h2>
              <p className="mx-auto mt-4 max-w-[500px] font-body text-sm leading-relaxed text-text-secondary">
                For discussions on any of these domains, research collaboration, or
                to share something you are building.
              </p>
              <a
                href="mailto:fzahee01@student.ubc.ca"
                className="mt-8 inline-block border border-vermilion/60 px-7 py-3 font-mono text-xs uppercase tracking-[0.15em] text-vermilion transition-all hover:bg-vermilion hover:text-black-deep"
              >
                fzahee01@student.ubc.ca
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PersonalPage;



