import { Button } from "@/components/ui/button";
import { Home, Menu, X, BookOpen, Users, Mail } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemesDropdown } from "@/components/ThemesDropdown";
import SearchComponent from "@/components/ui/animated-glowing-search-bar";
import { InteractiveMenu, InteractiveMenuItem } from "@/components/ui/modern-mobile-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: InteractiveMenuItem[] = [
    { label: 'Home', icon: Home },
    { label: 'Temas', icon: BookOpen },
    { label: 'Comunidade', icon: Users },
    { label: 'Contato', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">
              Teologia <span className="text-accent">Cristã</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <InteractiveMenu items={menuItems} accentColor="hsl(var(--accent))" />
            <SearchComponent />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start text-foreground hover:text-accent">
                Home
              </Button>
              <div className="px-4">
                <ThemesDropdown />
              </div>
              <div className="px-4 py-2">
                <SearchComponent />
              </div>
              <div className="px-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;