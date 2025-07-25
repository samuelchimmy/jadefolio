
import React from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/E1VcB6m5N0mydlaW/scene.splinecode" />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="absolute top-1/4 left-10 md:left-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            I build <span className="text-brand-magenta">beautiful</span>,
          </h1>
        </div>

        <div className="absolute top-1/3 right-10 md:right-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-right">
            <span className="text-brand-blue">fast</span>, interactive
          </h1>
        </div>

        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
           <h1 className="text-4xl md:text-5xl font-bold text-white">
            web <span className="text-brand-purple">apps</span>
          </h1>
        </div>

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block text-sm text-gray-300 border border-brand-purple/50 px-3 py-1 rounded-full animate-pulse-glow-purple">
            AI-Native Full-Stack Developer | Vibe Coder
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/2 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-md text-gray-400">
            By prompting AI like a creative partner. I orchestrate AI and code to ship scalable, user-focused digital products with speed, clarity, and style.
          </p>
        </div>

        <div className="absolute bottom-20 flex gap-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 rounded-md bg-brand-purple text-white font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-magenta/50"
          >
            Work With Me
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-6 py-3 rounded-md bg-transparent border border-brand-blue/80 text-brand-blue transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/30 hover:bg-brand-blue/10"
          >
            Explore My Work
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-brand-pink transition-all duration-300 hover:text-white"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
