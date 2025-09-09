import Hero from "@/components/home/hero/hero";
import AppPromoBanner from "@/components/home/AppPromoBanner";
import Banner from "@/components/home/Banner";
import BoutiqueSection from "@/components/home/BoutiqueSection";
import FoundationSection from "@/components/home/FoundationSection";
import MatchReplay from "@/components/home/MatchReplay";
import NextMatches from "@/components/home/NextMatches";
import OurTeamSection from "@/components/home/OurTeamSection";
import ClubNewsSection from "@/components/home/ClubNewsSection";
import AdBanner from "@/components/home/AdBanner";
import OSAExperienceBanner from "@/components/home/OSAExperienceBanner";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <ClubNewsSection />
      <AdBanner title="Publicité" />
      <OSAExperienceBanner />
      <MatchReplay />

      <NextMatches />
      <OurTeamSection />
      <BoutiqueSection />
      <AppPromoBanner />

      <FoundationSection />
      <Footer />
    </div>
  );
}
