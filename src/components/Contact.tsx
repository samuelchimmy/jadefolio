
import React from 'react';
import { Github, Mail, Send, Link, Linkedin, MessageSquare, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title text-center">Let's Build Together</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Ready to transform your Web3 project's growth trajectory? Let's connect and discuss how my strategic content 
          can help you build engaged communities and drive protocol adoption.
        </p>
        
        <div className="terminal-container animate-fade-in flex flex-col md:flex-row gap-8">
          <div className="flex items-center gap-2 absolute top-4 left-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-muted-foreground">contact.js</div>
          </div>
          
          <div className="flex-1 pt-12 md:pr-8">
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
    nextSteps: "Strategic Consultation"
  };
}`}
              </pre>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://flowcv.com/resume/d5baa23saiuu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-terminal-green/20 to-terminal-blue/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-terminal-green/20"
              >
                <Download size={18} />
                Download My Résumé
              </a>
            </div>
          </div>
          
          <div className="flex-1 pt-4 md:pt-12">
            <p className="text-muted-foreground mb-6">
              Got a product idea and want to ship it fast with AI? Let’s turn your concept into a live, responsive web app with vibes and velocity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="mailto:EdozieSammy101@gmail.com" 
                 className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-all duration-300 p-3 transform hover:-translate-y-1 rounded-md hover:bg-muted/30"
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
                 className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-all duration-300 p-3 transform hover:-translate-y-1 rounded-md hover:bg-muted/30"
                aria-label="Discord"
              >
                <MessageSquare size={20} />
                <span className="text-sm">Discord</span>
              </a>
              
              <a 
                href="https://t.me/Rundysey" 
                target="_blank" 
                rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-all duration-300 p-3 transform hover:-translate-y-1 rounded-md hover:bg-muted/30"
                aria-label="Telegram"
              >
                <Send size={20} />
                <span className="text-sm">Telegram</span>
              </a>
              
              <a 
                href="https://jadeofwallstreet.hashnode.dev/" 
                target="_blank" 
                rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-all duration-300 p-3 transform hover:-translate-y-1 rounded-md hover:bg-muted/30"
                aria-label="Blog"
              >
                <MessageSquare size={20} />
                <span className="text-sm">Blog</span>
              </a>
              
              <a 
                href="https://github.com/samuelchimmy" 
                target="_blank" 
                rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-all duration-300 p-3 transform hover:-translate-y-1 rounded-md hover:bg-muted/30"
                aria-label="GitHub"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/samuelchimmy1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-all duration-300 p-3 transform hover:-translate-y-1 rounded-md hover:bg-muted/30"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              
              <a 
                href="https://link3.to/jadeofwallstreet" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-all duration-300 p-3 transform hover:-translate-y-1 rounded-md hover:bg-muted/30 col-span-1 sm:col-span-2"
                aria-label="Link3"
              >
                <Link size={20} />
                <span className="text-sm">More Links</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
