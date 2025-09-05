
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) setMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 md:px-12',
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-muted shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-lg sm:text-xl font-bold">
          <span className="text-terminal-green">Jade</span>
          <span className="text-white">ofWallstreet</span>
          <span className="text-terminal-green">_</span>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-terminal-green transition-colors animated-button group flex items-center gap-1"
              >
                {item.label}
                <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </button>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex px-5 py-2 rounded-full bg-gradient-to-r from-terminal-green/20 to-terminal-blue/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-terminal-green/20"
          >
            Work With Me
          </button>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-terminal-green transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-muted shadow-2xl animate-fade-in z-50">
          <div className="flex flex-col p-4 space-y-3 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-muted-foreground hover:text-terminal-green transition-colors py-3 px-2 text-base rounded-md hover:bg-muted/30"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-terminal-green/20 to-terminal-blue/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-all duration-300 text-center text-sm"
            >
              Work With Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
