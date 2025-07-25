
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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 -z-10"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in text-center md:text-left">
          <div className="mb-4">
            <div className="inline-block text-sm text-muted-foreground border border-terminal-green/30 px-3 py-1 rounded-full animate-pulse-glow">
              AI-Native Full-Stack Developer | Vibe Coder
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 animate-fade-in">
            I build <span className="text-gradient">beautiful, fast, interactive</span> web apps
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            By prompting AI like a creative partner. From Claude, ChatGPT, Cursor, Lovable, and Google Jules, to stacks like Supabase, React, Tailwind, JavaScript, Node.js, Python, and Vercel—I orchestrate AI and code to ship scalable, user-focused digital products with speed, clarity, and style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <Spline
            scene="https://prod.spline.design/E1VcB6m5N0mydlaW/scene.splinecode"
            className="w-full h-full spline-container"
          />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
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
