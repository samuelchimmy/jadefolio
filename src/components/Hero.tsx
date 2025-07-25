
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

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="grid md:grid-cols-3 md:grid-rows-3 w-full max-w-6xl h-full">

          <div className="md:col-start-1 md:row-start-1 flex flex-col justify-end items-start p-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block text-sm text-muted-foreground border border-brand-purple/30 px-3 py-1 rounded-full animate-pulse-glow">
              AI-Native Full-Stack Developer | Vibe Coder
            </div>
          </div>

          <h1 className="md:col-start-1 md:row-start-2 text-4xl md:text-5xl lg:text-5xl font-bold text-left md:-rotate-15 animate-float" style={{ animationDelay: '0.4s' }}>
            I build <br /> beautiful,
          </h1>

          <h1 className="md:col-start-3 md:row-start-2 text-4xl md:text-5xl lg:text-5xl font-bold text-right md:rotate-15 animate-float" style={{ animationDelay: '0.6s' }}>
            fast, <br /> interactive
          </h1>

          <div className="md:col-start-2 md:row-start-2 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
             <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
                <span className="text-gradient">web apps</span>
             </h1>
          </div>

          <p className="md:col-span-3 md:row-start-3 text-lg text-muted-foreground max-w-2xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            By prompting AI like a creative partner. From Claude, ChatGPT, Cursor, Lovable, and Google Jules, to stacks like Supabase, React, Tailwind, JavaScript, Node.js, Python, and Vercel—I orchestrate AI and code to ship scalable, user-focused digital products with speed, clarity, and style.
          </p>

          <div className="md:col-start-1 md:row-start-3 flex items-end p-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-md bg-brand-purple text-white font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-purple/30"
            >
              Work With Me
            </button>
          </div>

          <div className="md:col-start-3 md:row-start-3 flex items-end justify-end p-4">
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
