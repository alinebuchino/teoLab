import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with 3D Robot */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 relative">
              <InteractiveRobotSpline
                scene={ROBOT_SCENE_URL}
                className="w-full h-full"
              />
            </div>
            <h1 className="text-xl font-bold text-foreground">
              Teologia <span className="text-accent">Cristã</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground hover:text-accent">
              Home
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-accent">
              Temas
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-accent">
              <Search className="w-5 h-5" />
            </Button>
          </nav>

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
              <Button variant="ghost" className="w-full justify-start text-foreground hover:text-accent">
                Temas
              </Button>
              <Button variant="ghost" className="w-full justify-start text-foreground hover:text-accent">
                <Search className="w-5 h-5 mr-2" />
                Pesquisa
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;