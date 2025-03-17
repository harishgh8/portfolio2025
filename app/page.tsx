import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import "@/styles/globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
