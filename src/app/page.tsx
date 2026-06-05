import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </BackgroundGradientAnimation>
  );
}
