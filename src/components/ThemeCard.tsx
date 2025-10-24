import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ThemeCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  color: "primary" | "accent" | "warm";
}

const ThemeCard = ({ title, description, image, category, color }: ThemeCardProps) => {
  const navigate = useNavigate();

  // Criar slug do tema para a URL
  const themeSlug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/\s+/g, "-"); // Substitui espaços por hífens

  const handleExploreClick = () => {
    navigate(`/tema/${themeSlug}`);
  };

  const colorVariants = {
    primary: "border-primary/20 hover:border-primary/40",
    accent: "border-accent/20 hover:border-accent/40",
    warm: "border-warm-accent/20 hover:border-warm-accent/40"
  };

  const bgVariants = {
    primary: "bg-gradient-to-br from-primary/5 to-primary/10",
    accent: "bg-gradient-to-br from-accent/5 to-accent/10",
    warm: "bg-gradient-to-br from-warm-accent/5 to-warm-accent/10"
  };

  return (
    <div className={`card-sacred group cursor-pointer ${colorVariants[color]} ${bgVariants[color]}`}>
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image}
          alt={`${title} theological study icon`}
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {category}
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full mt-4 group-hover:text-accent"
          onClick={handleExploreClick}
        >
          Explorar Tema
          <ArrowRight className="w-3 h-3 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default ThemeCard;