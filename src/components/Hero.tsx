import React, { useState } from 'react';
import { Github, Mail, Send, Link, Linkedin, MessageSquare, Download, ExternalLink, Menu } from 'lucide-react';
const Hero = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const handleExploreClick = () => {
    setShowPortfolio(!showPortfolio);
  };
  return <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-lg md:text-xl font-bold text-primary">JadeofWallstreet</h1>
          <button className="p-2 rounded-md bg-muted/20 border border-muted hover:bg-muted/30 transition-all duration-300">
            <Menu size={20} className="text-foreground" />
          </button>
        </div>
      </header>

      {/* Main Profile Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 pt-24">
        {/* Profile Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-terminal-green/20 to-terminal-blue/20 border-2 border-terminal-green/30 flex items-center justify-center mb-6 animate-fade-in overflow-hidden">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-muted/50 flex items-center justify-center">
            <span className="text-xl md:text-2xl font-bold text-terminal-green">J</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 animate-fade-in whitespace-nowrap" style={{
        animationDelay: '0.2s'
      }}>
          Hello! I'm <span className="text-terminal-green">Samuel</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-4 whitespace-nowrap">
          Also known as JadeofWallstreet
        </p>

        {/* Role Badge */}
        <div className="inline-block text-xs sm:text-sm text-muted-foreground border border-terminal-green/30 px-3 py-1.5 rounded-full mb-4 animate-fade-in whitespace-nowrap" style={{
        animationDelay: '0.4s'
      }}>AI-Native Full-Stack Developer</div>

        {/* Description */}
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-in text-sm sm:text-base px-4" style={{
        animationDelay: '0.6s'
      }}>
          I'm a <strong>Software Engineer</strong> with passion for problem-solving, strong foundation in computer science principles and proven track record of delivering high-quality and scalable code.
        </p>

        {/* Main CTA Button */}
        <button onClick={handleExploreClick} className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-md bg-terminal-green/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-terminal-green/20 mb-8 animate-fade-in text-sm sm:text-base" style={{
        animationDelay: '0.8s'
      }}>
          {showPortfolio ? 'Hide Details' : 'Explore'} 
          <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>

        {/* Portfolio Quick Links - Shown when Explore is clicked */}
        {showPortfolio && <div className="w-full max-w-4xl animate-fade-in space-y-8">
            {/* Work With Me & Resume Section */}
            <div className="bg-muted/20 rounded-lg p-6 border border-muted">
              <h3 className="text-xl font-bold text-terminal-green mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                Got a product idea and want to ship it fast with AI? Let's turn your concept into a live, responsive web app with vibes and velocity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:EdozieSammy101@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-md bg-terminal-green/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/30 transition-all duration-300 text-center justify-center">
                  <Mail size={18} />
                  Work With Me
                </a>
                <a href="https://flowcv.com/resume/d5baa23saiuu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-terminal-blue/20 border border-terminal-blue/50 text-terminal-blue hover:bg-terminal-blue/30 transition-all duration-300 text-center justify-center">
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted/20 rounded-lg p-6 border border-muted">
                <h4 className="text-lg font-bold text-terminal-green mb-2">Learnable AI</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  A next-gen study app for Nigerian universities, built with AI-first workflows. Features quiz systems, CGPA calculation, and exam prep.
                </p>
                <a href="https://learnable.fun" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-terminal-green hover:text-terminal-blue transition-colors text-sm">
                  Visit Site <ExternalLink size={14} />
                </a>
              </div>
              
              <div className="bg-muted/20 rounded-lg p-6 border border-muted">
                <h4 className="text-lg font-bold text-terminal-green mb-2">CodeBox</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  A polished, high-speed developer toolkit made with AI-assisted development. Export-ready tools with blazing-fast UI.
                </p>
                <a href="https://codebox.help" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-terminal-green hover:text-terminal-blue transition-colors text-sm">
                  Visit Site <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Skills & Community */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted/20 rounded-lg p-6 border border-muted">
                <h4 className="text-lg font-bold text-terminal-green mb-2">0xfarmer Community</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Founded a thriving Web3 community of 1,000+ members sharing airdrop strategies and DeFi insights.
                </p>
                <div className="flex gap-3">
                  <a href="https://t.me/+Ma4xal22__g3OTgx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-terminal-green hover:text-terminal-blue transition-colors text-sm">
                    Telegram <ExternalLink size={14} />
                  </a>
                  <a href="https://www.whatsapp.com/channel/0029VaAs0DMH5JLwrAD3wM1U" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-terminal-green hover:text-terminal-blue transition-colors text-sm">
                    WhatsApp <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              
              <div className="bg-muted/20 rounded-lg p-6 border border-muted">
                <h4 className="text-lg font-bold text-terminal-green mb-2">Blog & Writing</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Technical writing and thought leadership on DeFi, Web3, and AI development.
                </p>
                <a href="https://jadeofwallstreet.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-terminal-green hover:text-terminal-blue transition-colors text-sm">
                  Read Articles <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>}
      </div>

      {/* Social Links Footer */}
      <div className="py-6 px-4">
        <div className="flex justify-center space-x-6 animate-fade-in" style={{
        animationDelay: '1s'
      }}>
          <a href="https://github.com/samuelchimmy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-terminal-green transition-colors" aria-label="GitHub">
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a href="https://x.com/MetisCharter" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-terminal-green transition-colors" aria-label="Twitter">
            <MessageSquare size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/samuelchimmy1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-terminal-green transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a href="https://link3.to/jadeofwallstreet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-terminal-green transition-colors" aria-label="More Links">
            <Link size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </div>;
};
export default Hero;