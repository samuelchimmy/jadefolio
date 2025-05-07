
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="mb-4">
            <div className="inline-block text-sm text-muted-foreground border border-terminal-green/30 px-3 py-1 rounded-full animate-pulse-glow">
              Web3 Growth Strategist, Copywriter & Community Manager
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            I turn crypto products into <span className="text-gradient">onchain obsessions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Growth strategist, viral content creator, and builder of early-stage momentum for Web3 protocols.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-md bg-terminal-green text-background font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-terminal-green/30"
            >
              Work With Me
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-6 py-3 rounded-md bg-transparent border border-terminal-green/50 text-terminal-green transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-terminal-green/20 hover:bg-terminal-green/10"
            >
              Explore My Work
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-terminal-green transition-all duration-300 hover:text-terminal-blue"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
