import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ThemesSection from "@/components/ThemesSection";
import ArticlesSection from "@/components/ArticlesSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ThemesSection />
      <ArticlesSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
