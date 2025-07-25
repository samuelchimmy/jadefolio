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
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/E1VcB6m5N0mydlaW/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Content Above Robot */}
        <div className="mb-20">
          <div className="inline-block text-xs text-muted-foreground border border-brand-purple/30 px-3 py-1 rounded-full animate-fade-in animate-pulse-glow mb-4" style={{ animationDelay: '0.2s' }}>
            AI-Native Full-Stack Developer | Vibe Coder
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I build beautiful, <span className="text-gradient">fast, interactive</span> web apps
          </h1>
        </div>

        {/* Space for Robot */}
        <div className="h-48"></div>

        {/* Content Below Robot */}
        <div className="mt-32">
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6 animate-fade-in text-center" style={{ animationDelay: '0.6s' }}>
            By prompting AI like a creative partner. From Claude, ChatGPT, Cursor, Lovable, and Google Jules, to stacks like Supabase, React, Tailwind, JavaScript, Node.js, Python, and Vercel—I orchestrate AI and code to ship scalable, user-focused digital products with speed, clarity, and style.
          </p>
          
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-md bg-brand-purple text-white font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-purple/30"
            >
              Work With Me
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-6 py-3 rounded-md bg-transparent border border-brand-pink/50 text-brand-pink transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-pink/20 hover:bg-brand-pink/10"
            >
              Explore My Work
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-brand-purple transition-all duration-300 hover:text-brand-blue"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
