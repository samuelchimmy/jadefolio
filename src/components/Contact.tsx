
import React from 'react';
import { Github, Mail, Send, Link, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="terminal-container animate-fade-in">
            <div className="flex items-center gap-2 mb-4 border-b border-terminal-green/20 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-sm text-muted-foreground">contact.js</div>
            </div>
            
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
            
            <div className="mt-8 space-y-4">
              <p className="text-muted-foreground">
                Ready to level up your content strategy and drive real growth?
                Let's discuss how I can help you create viral content that converts.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <a 
                  href="mailto:EdozieSammy101@gmail.com" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                  <span className="text-sm">Email</span>
                </a>
                
                <a 
                  href="https://discord.com/channels/@me/946013950246543404" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors"
                  aria-label="Discord"
                >
                  <MessageSquare size={20} />
                  <span className="text-sm">Discord</span>
                </a>
                
                <a 
                  href="https://t.me/Rundysey" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors"
                  aria-label="Telegram"
                >
                  <Send size={20} />
                  <span className="text-sm">Telegram</span>
                </a>
                
                <a 
                  href="https://jadeofwallstreet.hashnode.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors"
                  aria-label="Blog"
                >
                  <MessageSquare size={20} />
                  <span className="text-sm">Blog</span>
                </a>
                
                <a 
                  href="https://github.com/samuelchimmy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/samuelchimmy1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                
                <a 
                  href="https://link3.to/jadeofwallstreet" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-colors"
                  aria-label="Link3"
                >
                  <Link size={20} />
                  <span className="text-sm">More Links</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-card border border-muted rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terminal-green/50 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-card border border-muted rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terminal-green/50 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-card border border-muted rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-terminal-green/50 focus:border-transparent"
                  placeholder="Tell me about your project or inquiry"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-md bg-terminal-green text-background font-bold hover:bg-terminal-green/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
