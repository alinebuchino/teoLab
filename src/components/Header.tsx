import teolabLogo from "@/assets/teolab-logo.png";
import SearchDialog from "@/components/SearchDialog";
import { ThemeToggle } from "@/components/ThemeToggle";
import SearchComponent from "@/components/ui/animated-glowing-search-bar";
import { Button } from "@/components/ui/button";
import { InteractiveMenu, InteractiveMenuItem } from "@/components/ui/modern-mobile-menu";
import { BookOpen, Home, Library, Menu, Newspaper, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("Home");

  // Lógica de Scroll Spy (Intersection Observer)
  useEffect(() => {
    const sectionIds = ["home", "themes-section", "articles-section", "resources-section"];
    const idToLabel: Record<string, string> = {
      "home": "Home",
      "themes-section": "Temas",
      "articles-section": "Recentes",
      "resources-section": "Recursos"
    };

    // 1. Função para verificar se está no topo absoluto da página
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection("Home");
      }
    };

    // 2. Observer para as demais seções
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (window.scrollY >= 50) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = idToLabel[entry.target.id];
            if (label) setActiveSection(label);
          }
        });
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems: InteractiveMenuItem[] = [
    { label: 'Home', icon: Home, onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Temas', icon: BookOpen, onClick: () => scrollToSection('themes-section') },
    { label: 'Recentes', icon: Newspaper, onClick: () => scrollToSection('articles-section') },
    { label: 'Recursos', icon: Library, onClick: () => scrollToSection('resources-section') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={teolabLogo} alt="TeoLab" className="w-8 h-8 object-contain" />
            <h1 className="text-xl font-bold text-foreground">
              Teo<span className="text-accent">Lab</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <InteractiveMenu
              items={menuItems}
              accentColor="hsl(var(--accent))"
              activeTab={activeSection}
            />
            <SearchComponent onClick={() => setIsSearchOpen(true)} />
            <ThemeToggle />
          </div>

          <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background pb-4">
            <div className="px-2 pt-2 space-y-1">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className={`w-full justify-start ${activeSection === item.label
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground hover:text-accent'
                    }`}
                  onClick={() => {
                    item.onClick?.();
                    setIsMenuOpen(false);
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
              <div className="pt-4 flex items-center justify-between px-4 border-t border-border mt-2">
                <ThemeToggle />
                <div className="scale-90">
                  <SearchComponent onClick={() => setIsSearchOpen(true)} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;