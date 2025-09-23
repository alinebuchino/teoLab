import HeroSection from "@/components/HeroSection";
import ThemesSection from "@/components/ThemesSection";
import ArticlesSection from "@/components/ArticlesSection";
import ResourcesSection from "@/components/ResourcesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ThemesSection />
      <ArticlesSection />
      <ResourcesSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
