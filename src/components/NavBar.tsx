
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-muted' : 'bg-transparent'
      )}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          <span className="text-terminal-green">Jade</span>
          <span className="text-white">ofWallstreet</span>
          <span className="text-terminal-green">_</span>
        </div>
        
        {/* Desktop Navigation */}
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
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:flex px-5 py-2 rounded-full bg-gradient-to-r from-terminal-green/20 to-terminal-blue/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-terminal-green/20"
        >
          Work With Me
        </button>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-muted-foreground hover:text-terminal-green transition-colors">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 backdrop-blur-md border-l border-muted">
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="flex flex-col items-center space-y-8">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <SheetClose asChild>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="text-2xl text-foreground hover:text-terminal-green transition-colors"
                        >
                          {item.label}
                        </button>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <SheetClose asChild>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="mt-12 px-6 py-3 rounded-full bg-gradient-to-r from-terminal-green/20 to-terminal-blue/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-all duration-300"
                  >
                    Work With Me
                  </button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
