import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { SiteBackground } from "@/components/SiteBackground";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <Navbar />
      <Hero />
      <main className="relative z-10">
        <Projects />
        <Skills />
        <Experience />
      </main>
    </>
  );
}
