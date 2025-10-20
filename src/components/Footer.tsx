import { Heart } from "lucide-react";
import teolabLogo from "@/assets/teolab-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
          <img 
            src={teolabLogo} 
            alt="TeoLab" 
            className="h-11 object-contain" 
          />
          <h2 className="text-3xl font-bold">TeoLab</h2>
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed text-primary-foreground/80 mb-4">
          Dedicados ao estudo profundo e à proclamação das verdades bíblicas que transformam vidas e edificam a Igreja de Cristo.
        </p>
        <div className="flex items-center gap-1.5 text-sm text-primary-foreground/80">
          <span>Feito com</span>
          <Heart className="w-4 h-4 text-warm-accent fill-warm-accent animate-divine-pulse" />
          <span>para a glória de Deus</span>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal text-primary-foreground/70">
          TeoLab ©{currentYear}
        </div>
      </div>
    </footer>
  );
};

export default Footer;