import { Heart, Book, Cross } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-divine flex items-center justify-center">
                <Cross className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold">TeoLab</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Dedicados ao estudo profundo e à proclamação das verdades bíblicas que transformam vidas e edificam a Igreja de Cristo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Doutrina
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  História da Igreja
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Estudos Bíblicos
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Recursos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Parcerias
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-primary-foreground/70">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-accent animate-divine-pulse" />
              <span>para a glória de Deus</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-primary-foreground/70">
              <Book className="w-4 h-4" />
              <span>© {currentYear} TeoLab. Soli Deo Gloria.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;