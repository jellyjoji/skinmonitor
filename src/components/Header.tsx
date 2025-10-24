import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white">AI</span>
            </div>
            <span className="text-xl">SkinMonitor AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('problem')} className="hover:text-blue-600 transition-colors">
              Problem
            </button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-blue-600 transition-colors">
              Solution
            </button>
            <button onClick={() => scrollToSection('features')} className="hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('comparison')} className="hover:text-blue-600 transition-colors">
              Comparison
            </button>
            <button onClick={() => scrollToSection('impact')} className="hover:text-blue-600 transition-colors">
              Impact
            </button>
            <Button onClick={() => scrollToSection('contact')}>Request Demo</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('problem')} className="text-left hover:text-blue-600 transition-colors">
              Problem
            </button>
            <button onClick={() => scrollToSection('solution')} className="text-left hover:text-blue-600 transition-colors">
              Solution
            </button>
            <button onClick={() => scrollToSection('features')} className="text-left hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('comparison')} className="text-left hover:text-blue-600 transition-colors">
              Comparison
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-left hover:text-blue-600 transition-colors">
              Impact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full">Request Demo</Button>
          </nav>
        )}
      </div>
    </header>
  );
}
