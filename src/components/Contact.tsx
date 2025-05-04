
import React from 'react';
import { Github, Mail, Send, Link, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title">Get In Touch</h2>
        
        <div className="terminal-container animate-fade-in">
          <div className="flex items-center gap-2 mb-4 border-b border-terminal-green/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-muted-foreground">contact.js</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="code-snippet">
              <pre className="language-javascript">
                {`const contactMe = async () => {
  const response = await sendMessage({
    target: "JadeofWallstreet",
    platform: "Twitter/X",
    subject: "Growth Strategy Inquiry",
    priority: "High"
  });
  
  return {
    status: "Success",
    responseTime: "Within 24 hours",
    nextSteps: "Consultation Call"
  };
}`}
              </pre>
            </div>
            
            <div>
              <p className="text-muted-foreground mb-6">
                Ready to level up your content strategy and drive real growth?
                Let's discuss how I can help you create viral content that converts.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="mailto:EdozieSammy101@gmail.com" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors animated-button p-2 transform hover:-translate-y-1 duration-300"
                  aria-label="Email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={20} />
                  <span className="text-sm">Email</span>
                </a>
                
                <a 
                  href="https://discord.com/channels/@me/946013950246543404" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors animated-button p-2 transform hover:-translate-y-1 duration-300"
                  aria-label="Discord"
                >
                  <MessageSquare size={20} />
                  <span className="text-sm">Discord</span>
                </a>
                
                <a 
                  href="https://t.me/Rundysey" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors animated-button p-2 transform hover:-translate-y-1 duration-300"
                  aria-label="Telegram"
                >
                  <Send size={20} />
                  <span className="text-sm">Telegram</span>
                </a>
                
                <a 
                  href="https://jadeofwallstreet.hashnode.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors animated-button p-2 transform hover:-translate-y-1 duration-300"
                  aria-label="Blog"
                >
                  <MessageSquare size={20} />
                  <span className="text-sm">Blog</span>
                </a>
                
                <a 
                  href="https://github.com/samuelchimmy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors animated-button p-2 transform hover:-translate-y-1 duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/samuelchimmy1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors animated-button p-2 transform hover:-translate-y-1 duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                
                <a 
                  href="https://link3.to/jadeofwallstreet" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors animated-button p-2 transform hover:-translate-y-1 duration-300 col-span-2"
                  aria-label="Link3"
                >
                  <Link size={20} />
                  <span className="text-sm">More Links</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
