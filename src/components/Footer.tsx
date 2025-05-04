
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-muted">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold mb-2">
              <span className="text-terminal-green">Metis</span>
              <span className="text-white">Charter</span>
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
                <li><a href="#home" className="text-sm text-muted-foreground hover:text-terminal-green">Home</a></li>
                <li><a href="#about" className="text-sm text-muted-foreground hover:text-terminal-green">About</a></li>
                <li><a href="#case-studies" className="text-sm text-muted-foreground hover:text-terminal-green">Case Studies</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-terminal-green">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://twitter.com/MetisCharter" 
                    className="text-sm text-muted-foreground hover:text-terminal-green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@metischarter.com" 
                    className="text-sm text-muted-foreground hover:text-terminal-green"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} MetisCharter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
