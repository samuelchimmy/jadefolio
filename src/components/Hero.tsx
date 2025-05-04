
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const textContent = [
    { text: "# Growth Strategist & Content Creator", delay: 200 },
    { text: "", delay: 500 },
    { text: "const expertise = ['Twitter Growth', 'Content Strategy', 'Web3 Marketing'];", delay: 100 },
    { text: "const results = {", delay: 100 },
    { text: "  impressions: '100K+',", delay: 100 },
    { text: "  engagement: 'High',", delay: 100 },
    { text: "  conversions: 'Exceptional'", delay: 100 },
    { text: "};", delay: 100 },
    { text: "", delay: 500 },
    { text: "function deliver() {", delay: 100 },
    { text: "  return 'Viral content that converts';", delay: 100 },
    { text: "}", delay: 100 },
  ];

  useEffect(() => {
    if (!terminalRef.current) return;
    
    const terminal = terminalRef.current;
    terminal.innerHTML = "";
    
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = document.createElement("div");
    currentLine.className = "h-6";
    terminal.appendChild(currentLine);
    
    const typeNextChar = () => {
      if (lineIndex >= textContent.length) return;
      
      const { text, delay } = textContent[lineIndex];
      
      if (charIndex < text.length) {
        currentLine.textContent += text[charIndex];
        charIndex++;
        setTimeout(typeNextChar, Math.random() * 30 + 20);
      } else {
        lineIndex++;
        charIndex = 0;
        
        if (lineIndex < textContent.length) {
          currentLine = document.createElement("div");
          currentLine.className = "h-6";
          terminal.appendChild(currentLine);
          setTimeout(typeNextChar, delay);
        }
      }
    };
    
    setTimeout(typeNextChar, 500);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <div className="mb-4">
            <div className="inline-block text-sm text-muted-foreground border border-terminal-green/30 px-3 py-1 rounded-full">
              Web3 & Tech Growth Specialist
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            I craft <span className="text-gradient">viral content</span> that drives real growth
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Specializing in Twitter/X growth, strategic positioning, and engagement 
            strategies that convert casual viewers into active community members.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#case-studies" className="px-6 py-3 rounded-md bg-terminal-green text-background font-bold hover:bg-terminal-green/90 transition-colors">
              View Case Studies
            </a>
            <a href="#contact" className="px-6 py-3 rounded-md bg-transparent border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 terminal-container animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center gap-2 mb-4 border-b border-terminal-green/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-muted-foreground">growth-metrics.js</div>
          </div>
          <div ref={terminalRef} className="font-mono text-sm md:text-base text-terminal-green space-y-1 overflow-hidden">
            {/* Terminal content will be typed here by useEffect */}
          </div>
          <div className="flex items-center mt-4 border-t border-terminal-green/20 pt-2">
            <div className="h-5 w-2 bg-terminal-green animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-terminal-green"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
