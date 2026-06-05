import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <Navbar />
      <Hero />
    </BackgroundGradientAnimation>
  );
}
