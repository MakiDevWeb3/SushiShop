import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import LocationsSection from "@/components/LocationsSection";
import AboutSection from "@/components/AboutSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SakuraPetals from "@/components/SakuraPetals";
import LoadingScreen from "@/components/LoadingScreen";
import HorizontalGallery from "@/components/HorizontalGallery";
import StatsCounter from "@/components/StatsCounter";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <LoadingScreen onComplete={handleLoadComplete} />
      <PageTransition>
        <div className="min-h-screen bg-background">
          <SakuraPetals count={15} />
          <Navbar />
          <HeroSlideshow />
          <MarqueeStrip />
          <AboutSection />
          <StatsCounter />
          <HorizontalGallery />
          <LocationsSection />
          <Footer />
        </div>
      </PageTransition>
    </>
  );
};

export default Index;
