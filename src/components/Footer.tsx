
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 border-t border-muted">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start">
            <span className="text-lg font-bold">
              <span className="text-terminal-green">Jade</span>
              <span className="text-white">ofWallstreet</span>
              <span className="text-terminal-green">_</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1 text-center md:text-left">
            Building with vibes and velocity.
          </p>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {currentYear} Samuel (JadeofWallstreet). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
