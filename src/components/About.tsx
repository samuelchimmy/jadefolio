
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title">About My Approach</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="tweet-card animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="text-terminal-green text-xl mb-2">01.</div>
            <h3 className="text-xl font-bold mb-3">Strategic Content</h3>
            <p className="text-muted-foreground">
              I've driven growth primarily through high-performing content and strategic positioning on X (formerly Twitter), 
              where I consistently create viral, value-packed threads that resonate with Web3, tech, and finance audiences.
            </p>
          </div>
          
          <div className="tweet-card animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="text-terminal-green text-xl mb-2">02.</div>
            <h3 className="text-xl font-bold mb-3">Data-Driven</h3>
            <p className="text-muted-foreground">
              Every tweet and thread is meticulously crafted based on audience psychology, trend analysis, and engagement patterns,
              resulting in consistently high impressions, shares, and conversions.
            </p>
          </div>
          
          <div className="tweet-card animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="text-terminal-green text-xl mb-2">03.</div>
            <h3 className="text-xl font-bold mb-3">Proven Results</h3>
            <p className="text-muted-foreground">
              My strategies have generated millions of impressions, thousands of engagements, and dozens of conversions across
              Web3 projects, tech startups, and crypto protocols.
            </p>
          </div>
        </div>
        
        <div className="mt-16 terminal-container animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-2 mb-4 border-b border-terminal-green/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-muted-foreground">expertise.json</div>
          </div>
          
          <div className="code-snippet">
            <pre className="language-json whitespace-pre-wrap">
              {`{
  "core_skills": [
    "Twitter/X Growth Strategy",
    "Viral Content Creation",
    "Web3 & Crypto Marketing",
    "Community Building",
    "Strategic Positioning"
  ],
  "specialties": {
    "content_types": [
      "High-engagement threads",
      "Educational breakdowns",
      "FOMO-driven promotions",
      "Technical explainers",
      "Growth metrics analysis"
    ],
    "industries": [
      "Web3 & DeFi",
      "Crypto Projects",
      "Tech Startups",
      "Blockchain Protocols"
    ]
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
