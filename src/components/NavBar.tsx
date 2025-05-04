
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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
          <span className="text-terminal-green">Metis</span>
          <span className="text-white">Charter</span>
          <span className="text-terminal-green">_</span>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'case-studies', label: 'Case Studies' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-terminal-green transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-terminal-green/20 to-terminal-blue/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-colors">
          Get in Touch
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
