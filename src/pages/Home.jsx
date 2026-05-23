import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BuildItSection from "@/components/sections/BuildItSection";
import TutorialsSection from "@/components/sections/TutorialsSection";
import GithubSection from "@/components/sections/GithubSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TutorialsSection />
      <BuildItSection />
      <GithubSection />
      <FooterSection />
    </div>
  );
}