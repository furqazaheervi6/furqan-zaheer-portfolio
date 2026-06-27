import { createFileRoute } from "@tanstack/react-router";
import { NeuralBackground } from "../components/neural-background";
import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Projects } from "../components/projects";
import { Interests } from "../components/interests";
import { Skills } from "../components/skills";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <NeuralBackground />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Interests />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

