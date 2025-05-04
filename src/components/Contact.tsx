
import React from 'react';

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
    target: "MetisCharter",
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
              
              <div className="flex items-center space-x-6">
                <a 
                  href="https://twitter.com/MetisCharter" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-terminal-green hover:text-terminal-blue transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                
                <a 
                  href="mailto:contact@metischarter.com" 
                  className="text-terminal-green hover:text-terminal-blue transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
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
