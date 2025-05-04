
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title">About My Approach</h2>
        
        <div className="terminal-container animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-2 mb-4 border-b border-terminal-green/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-2 text-sm text-muted-foreground">about.json</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-terminal-green text-xl mb-4">Hi, I'm Samuel also known as Jadeofwallstreet</div>
              <h3 className="text-xl font-bold mb-3">Content strategist | Growth hacker | Onchain storyteller</h3>
              <p className="text-muted-foreground mb-4">
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
            
            <div className="space-y-4">
              <div className="text-terminal-green text-xl mb-4">What I Do</div>
              <p className="text-muted-foreground mb-4">
                I've helped protocols generate thousands of impressions, spark user acquisition waves, and 
                drive early product traction through:
              </p>
              
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Scarcity-based thread campaigns that attract high-intent users</li>
                <li>Simplified, value-packed explainers that boost credibility</li>
                <li>DM-gated resources that build waitlists and reward curiosity</li>
                <li>Transparent breakdowns that humanize the onchain hustle</li>
              </ul>
              
              <p className="text-muted-foreground mb-4">
                I've been deep in the trenches of Web3: farming, flipping, testing, failing, learning — and documenting it 
                all in real time. My threads and content pieces regularly get bookmarked, shared by industry thought leaders, 
                and directly acknowledged by founders.
              </p>
              
              <p className="text-muted-foreground">
                Now, I'm bringing that same energy to help the next generation of crypto protocols win hearts, wallets, 
                and market share — one viral post at a time.
              </p>
              
              <div className="mt-4 p-3 border border-terminal-green/30 rounded-md bg-muted/30">
                <p className="text-terminal-green">
                  If you're building something bold in Web3 and need a loud, clear, and effective voice to tell your story:
                  <span className="font-bold"> Let's make noise.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
