
import React from 'react';
import { Github, Mail, Send, Link, Linkedin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-muted">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold mb-2">
              <span className="text-terminal-green">Jade</span>
              <span className="text-white">ofWallstreet</span>
              <span className="text-terminal-green">_</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Twitter Growth Specialist & Content Strategist
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-muted-foreground hover:text-terminal-green link-hover">Home</a></li>
                <li><a href="#about" className="text-sm text-muted-foreground hover:text-terminal-green link-hover">About</a></li>
                <li><a href="#case-studies" className="text-sm text-muted-foreground hover:text-terminal-green link-hover">Case Studies</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-terminal-green link-hover">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:EdozieSammy101@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-terminal-green flex items-center gap-2 icon-hover"
                  >
                    <Mail size={16} /> Email
                  </a>
                </li>
                <li>
                  <a 
                    href="https://jadeofwallstreet.hashnode.dev/" 
                    className="text-sm text-muted-foreground hover:text-terminal-green flex items-center gap-2 icon-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare size={16} /> Blog
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/samuelchimmy" 
                    className="text-sm text-muted-foreground hover:text-terminal-green flex items-center gap-2 icon-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/samuelchimmy1" 
                    className="text-sm text-muted-foreground hover:text-terminal-green flex items-center gap-2 icon-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} JadeofWallstreet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
