
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title">About My Approach</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="tweet-card animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="text-terminal-green text-xl mb-4">Hi, I'm Samuel also known as Jadeofwallstreet</div>
            <h3 className="text-xl font-bold mb-3">Content strategist | Growth hacker | Onchain storyteller</h3>
            <p className="text-muted-foreground mb-6">
              Helping Web3 products go from overlooked to oversubscribed.
            </p>
            
            <p className="text-muted-foreground mb-4">
              I specialize in crafting viral, high-conversion content that translates complex blockchain concepts 
              into simple, engaging narratives. From simplifying advanced tokenomics to creating FOMO-fueled beta launches, 
              I know how to speak the language of crypto natives, meme-lords, degen farmers, and curious builders.
            </p>
            
            <p className="text-muted-foreground">
              My work lives at the intersection of community psychology, airdrop strategy, and technical storytelling — 
              where memes meet mechanisms, and CT meets product-market fit.
            </p>
          </div>
          
          <div className="tweet-card animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="text-terminal-green text-xl mb-4">What I Do</div>
            <p className="text-muted-foreground mb-6">
              I've helped protocols generate thousands of impressions, spark user acquisition waves, and 
              drive early product traction through:
            </p>
            
            <ul className="space-y-3 text-muted-foreground list-disc pl-6 mb-6">
              <li>Scarcity-based thread campaigns that attract high-intent users</li>
              <li>Simplified, value-packed explainers that boost credibility</li>
              <li>DM-gated resources that build waitlists and reward curiosity</li>
              <li>Transparent breakdowns that humanize the onchain hustle</li>
            </ul>
            
            <p className="text-muted-foreground">
              I've been deep in the trenches of Web3: farming, flipping, testing, failing, learning — and documenting it 
              all in real time. My threads and content pieces regularly get bookmarked, shared by industry thought leaders, 
              and directly acknowledged by founders.
            </p>
          </div>
        </div>
        
        <div className="terminal-container animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-2 mb-4 border-b border-terminal-green/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-muted-foreground">mission.json</div>
          </div>
          
          <div className="code-snippet">
            <pre className="language-json whitespace-pre-wrap">
              {`{
  "mission": "Now, I'm bringing that same energy to help the next generation of crypto protocols win hearts, wallets, and market share — one viral post at a time.",
  "core_message": "If you're building something bold in Web3 and need a loud, clear, and effective voice to tell your story: Let's make noise.",
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
