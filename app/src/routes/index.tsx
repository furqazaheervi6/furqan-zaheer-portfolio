import { createFileRoute } from "@tanstack/react-router";
import { NeuralBackground } from "../components/neural-background";
import { CursorEffects } from "../components/cursor-effects";
import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Projects } from "../components/projects";
import { Interests } from "../components/interests";
import { Skills } from "../components/skills";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { SignalDivider } from "../components/signal-divider";
import { ScrollProgress } from "../components/scroll-progress";
import { CircuitTrace } from "../components/circuit-trace";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <NeuralBackground />
      <CursorEffects />
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />

        <div className="relative">
          <CircuitTrace />
          <SignalDivider />
        </div>

        <About />

        <div className="relative">
          <CircuitTrace />
          <SignalDivider />
        </div>

        <Projects />

        <div className="relative">
          <CircuitTrace />
          <SignalDivider />
        </div>

        <Interests />

        <div className="relative">
          <CircuitTrace />
          <SignalDivider />
        </div>

        <Skills />

        <div className="relative">
          <CircuitTrace />
          <SignalDivider />
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

