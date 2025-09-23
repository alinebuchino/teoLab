import { BackgroundPaths } from "@/components/ui/background-paths";
import ThemeCard from "./ThemeCard";
import doctrineIcon from "@/assets/doctrine-icon.jpg";
import christologyIcon from "@/assets/christology-icon.jpg";
import eschatologyIcon from "@/assets/eschatology-icon.jpg";
import churchHistoryIcon from "@/assets/church-history-icon.jpg";
import biblicalStudiesIcon from "@/assets/biblical-studies-icon.jpg";

const ThemesSection = () => {
  const themes = [
    {
      title: "Doutrina da Salvação",
      description: "Explore os fundamentos bíblicos da salvação, graça e justificação pela fé.",
      image: doctrineIcon,
      category: "Doutrina",
      color: "primary" as const
    },
    {
      title: "Cristologia",
      description: "Estudo profundo sobre a pessoa e obra de Jesus Cristo na teologia cristã.",
      image: christologyIcon,
      category: "Doutrina",
      color: "accent" as const
    },
    {
      title: "Escatologia",
      description: "Compreenda as profecias bíblicas e o plano divino para os últimos tempos.",
      image: eschatologyIcon,
      category: "Profecia",
      color: "warm" as const
    },
    {
      title: "História da Igreja",
      description: "Jornada através dos marcos históricos do cristianismo através dos séculos.",
      image: churchHistoryIcon,
      category: "História",
      color: "primary" as const
    },
    {
      title: "Estudos Bíblicos",
      description: "Métodos de interpretação bíblica e análise exegética das Escrituras.",
      image: biblicalStudiesIcon,
      category: "Hermenêutica",
      color: "accent" as const
    }
  ];

  return (
    <BackgroundPaths 
      title="Temas Teológicos"
      subtitle="Mergulhe em estudos profundos que fortalecem sua compreensão da fé cristã e edificam sua vida espiritual."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {themes.map((theme, index) => (
          <div 
            key={theme.title}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ThemeCard {...theme} />
          </div>
        ))}
      </div>
    </BackgroundPaths>
  );
};

export default ThemesSection;