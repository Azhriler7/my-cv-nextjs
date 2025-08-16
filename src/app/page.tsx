import HeroSection from "@/components/Hero_Section";
import AboutSection from "@/components/About_Section";
import PortfolioSection from "@/components/Portfolio_Section";
import SkillsSection from "@/components/Skills_Section";
import ContactSection from "@/components/Contact_Section";

export default function Page() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <PortfolioSection/>
      <SkillsSection/>
      <ContactSection/>
    </main>
  );
}
