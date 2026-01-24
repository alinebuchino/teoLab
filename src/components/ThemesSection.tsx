import themesMetadata from "@/artigos/metadatas/themesMetadata";
import { BackgroundPaths } from "@/components/ui/background-paths";
import ThemeCard from "./ThemeCard";

const ThemesSection = () => {
  const mainThemes = Object.values(themesMetadata).filter(theme => !theme.parentId);

  return (
    <section id="themes-section">
      <BackgroundPaths
        title={`Temas <gradient>Teológicos</gradient>`}
        subtitle="Mergulhe em estudos profundos que fortalecem sua compreensão da fé cristã e edificam sua vida espiritual."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mainThemes.map((theme, index) => (
            <div
              key={theme.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ThemeCard {...theme} />
            </div>
          ))}
        </div>
      </BackgroundPaths>
    </section>
  );
};

export default ThemesSection;