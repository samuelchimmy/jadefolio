
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TweetCard from './TweetCard';

const BlogPost = ({ 
  title, 
  excerpt, 
  link, 
  date, 
  readTime,
  index = 0 
}: { 
  title: string; 
  excerpt: string; 
  link: string; 
  date: string;
  readTime: string;
  index?: number;
}) => (
  <Card className="h-full overflow-hidden transition-all duration-300 animate-fade-in flex flex-col group" style={{ animationDelay: `${index * 150}ms` }}>
    <CardContent className="p-6 flex flex-col h-full">
      <div className="mb-2 text-xs text-muted-foreground flex justify-between">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      <h3 className="text-lg font-bold mb-3 group-hover:text-terminal-green transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{excerpt}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-terminal-green hover:text-terminal-blue transition-all duration-300 transform hover:-translate-y-1 mt-auto"
      >
        Read Full Article <span className="ml-1">→</span>
      </a>
    </CardContent>
  </Card>
);

const PortfolioItem = ({ 
  title, 
  description, 
  imageUrl, 
  link, 
  metrics = [], 
  index = 0 
}: { 
  title: string; 
  description: string; 
  imageUrl?: string; 
  link: string; 
  metrics?: Array<{label: string; value: string}>; 
  index?: number;
}) => (
  <Card className="overflow-hidden transition-all duration-300 group animate-fade-in border border-muted bg-card/50 backdrop-blur-sm hover:border-terminal-green/50" style={{ animationDelay: `${index * 150}ms` }}>
    <CardContent className="p-6">
      {imageUrl && (
        <div className="w-full h-40 md:h-48 mb-4 overflow-hidden rounded-md">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 group-hover:text-terminal-green transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {metrics.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center p-2 rounded-md bg-muted/50">
              <div className="text-lg font-bold text-terminal-green">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-terminal-green hover:text-terminal-blue transition-all duration-300 transform hover:-translate-y-1"
      >
        View Project <span className="ml-1">→</span>
      </a>
    </CardContent>
  </Card>
);

const Portfolio = () => {
  const [expandedTweets, setExpandedTweets] = useState<boolean[]>(Array(6).fill(false));

  const toggleTweetExpanded = (index: number) => {
    const newExpandedTweets = [...expandedTweets];
    newExpandedTweets[index] = !newExpandedTweets[index];
    setExpandedTweets(newExpandedTweets);
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title text-center mb-8">Portfolio</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          A collection of my viral growth campaigns, thought leadership content, and community-building initiatives that 
          have driven significant engagement and adoption across the Web3 ecosystem.
        </p>

        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="growth" className="data-[state=active]:text-terminal-green data-[state=active]:border-b-2 data-[state=active]:border-terminal-green transition-all">Growth Campaigns</TabsTrigger>
            <TabsTrigger value="blog" className="data-[state=active]:text-terminal-green data-[state=active]:border-b-2 data-[state=active]:border-terminal-green transition-all">Blog & Thought Leadership</TabsTrigger>
            <TabsTrigger value="copywriting" className="data-[state=active]:text-terminal-green data-[state=active]:border-b-2 data-[state=active]:border-terminal-green transition-all">Copywriting</TabsTrigger>
          </TabsList>

          <TabsContent value="growth" className="space-y-8">
            <div className="grid grid-cols-1 gap-12">
              <TweetCard
                tweetUrl="https://x.com/MetisCharter/status/1836891018299592900"
                title="Scarcity-Driven Growth Campaign"
                description="This tweet was part of a scarcity-driven growth campaign to generate buzz for an exclusive beta access opportunity tied to @BlurCrypto. It leveraged urgency, social proof, and gated access to drive viral engagement."
                metrics={{
                  impressions: "6.3K+",
                  shares: "35",
                  comments: "83",
                  likes: "89",
                  bookmarks: "8"
                }}
                tactics={[
                  "Applied a viral loop strategy using a like + repost + comment call-to-action",
                  "Crafted a curiosity-based hook",
                  "Positioned the offer as elite and time-sensitive",
                  "Attracted high-intent participants and organic buzz",
                  "Pushed demand beyond the supply cap - key for alpha-centric products"
                ]}
                index={0}
              />
              
              <TweetCard
                tweetUrl="https://x.com/MetisCharter/status/1913717855897391240"
                title="Technical Explainer Breakdown"
                description="This was a simplified explainer article on @get_optimum's tech stack — turning complex topics like RLNC into digestible, engaging content. The goal was to educate and activate early participants in their ecosystem."
                metrics={{
                  impressions: "1.2K+",
                  shares: "11+",
                  comments: "6",
                  likes: "25+",
                  bookmarks: "15"
                }}
                tactics={[
                  "Used humor, simplified analogies, and bold positioning",
                  "Balanced meme-level accessibility with genuine alpha",
                  "Positioned protocol as early-farmable",
                  "Elevated project's visibility and credibility within crypto circles",
                  "Set the tone for grassroots GTM momentum"
                ]}
                index={1}
              />
              
              <TweetCard
                tweetUrl="https://x.com/MetisCharter/status/1799903571670098367"
                title="High-Urgency CTA Campaign"
                description="This tweet was a high-urgency, viral-style CTA targeting early access to a VC-backed project beta. The aim was to spark rapid user engagement and onboard early testers while creating buzz within the alpha-hunting community."
                metrics={{
                  impressions: "12.3K+",
                  shares: "47+",
                  comments: "120+",
                  likes: "66",
                  bookmarks: "10"
                }}
                tactics={[
                  "Engineered sense of urgency and exclusivity",
                  "Used powerful language ('undiluted Alpha', 'FCFS', 'well-funded')",
                  "Triggered viral loop via simple social engagement steps",
                  "Funneled qualified, fast-acting users to project's beta",
                  "Provided early traction from engaged retail participants"
                ]}
                index={2}
              />
              
              <TweetCard
                tweetUrl="https://x.com/MetisCharter/status/1836622688627957843"
                title="Token Mechanics Breakdown"
                description="This tweet broke down a complex redistribution formula for $ZRO token holders in a clear, actionable way. It helped users estimate how much extra they could claim from unclaimed token reserves — turning confusion into clarity at a key moment post-airdrop."
                metrics={{
                  impressions: "54.4K+",
                  shares: "21+",
                  comments: "38",
                  likes: "232",
                  bookmarks: "62"
                }}
                tactics={[
                  "Simplified onchain math into a plug-and-play format with examples",
                  "Made complex formulas easy for average users to apply",
                  "Positioned as go-to voice for timely, accurate alpha",
                  "Boosted user confidence during critical post-airdrop window",
                  "Drove protocol engagement through clarity"
                ]}
                index={3}
              />
              
              <TweetCard
                tweetUrl="https://twitter.com/MetisCharter/status/1672441214159085568"
                title="Community Growth Strategy"
                description="A transparent, performance-based breakdown of crypto earnings, detailing successful airdrop farming and lessons learned. It combined storytelling with value signals to boost credibility and engagement."
                metrics={{
                  impressions: "71.8K+",
                  shares: "26+",
                  comments: "47",
                  likes: "431",
                  bookmarks: "62"
                }}
                tactics={[
                  "Used candid, relatable tone to humanize high-stakes onchain hustling",
                  "Created highly bookmarkable breakdown format",
                  "Built trust through honesty about wins, losses, and lessons",
                  "Drove massive organic reach through authenticity",
                  "Positioned as credible voice in alpha-sharing and airdrop farming niche"
                ]}
                index={4}
              />
              
              <TweetCard
                tweetUrl="https://x.com/MetisCharter/status/1839033794235703681"
                title="Hyperlane Bridge Guide"
                description="This tweet offered a simplified, non-dev guide to creating a Hyperlane Bridge, making advanced infrastructure accessible to everyday users. The tweet used a gated CTA to distribute the guide via DMs, helping build direct engagement."
                metrics={{
                  impressions: "1.6K+",
                  shares: "20+",
                  comments: "44",
                  likes: "44",
                  bookmarks: "13"
                }}
                tactics={[
                  "Targeted non-technical audience underserved by protocol documentation",
                  "Used 'like + comment + repost' CTA to create viral loop",
                  "Implemented gated DM model for exclusivity and personal connection",
                  "Positioned project as beginner-friendly",
                  "Boosted onboarding among curious users - key for infra products"
                ]}
                index={5}
              />
            </div>
          </TabsContent>

          <TabsContent value="blog" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogPost
                title="How DeFi Manifests Within Web3"
                excerpt="Exploring the world of decentralized finance and its impact on the broader Web3 ecosystem..."
                link="https://jadeofwallstreet.hashnode.dev/how-defi-manifests-within-web3"
                date="March 2024"
                readTime="5 min read"
                index={0}
              />
              
              <BlogPost
                title="How to Sell Your Soul to Crypto Without Going Broke"
                excerpt="A practical guide to navigating the crypto space sustainably while pursuing your passion..."
                link="https://jadeofwallstreet.hashnode.dev/how-to-sell-your-soul-to-crypto-without-going-broke"
                date="January 2024"
                readTime="7 min read"
                index={1}
              />
              
              <BlogPost
                title="Current State of Token Gating on Social Platforms"
                excerpt="An exploration of how token gating is reshaping social media engagement in the Web3 era..."
                link="https://jadeofwallstreet.hashnode.dev/current-state-of-tokengating-on-social-platforms"
                date="November 2023"
                readTime="6 min read"
                index={2}
              />
            </div>
          </TabsContent>

          <TabsContent value="copywriting" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PortfolioItem
                title="Technical Documentation: Bridge Integration Guide"
                description="Simplified technical documentation that transformed complex cross-chain bridge integration into accessible developer instructions."
                link="https://jadeofwallstreet.hashnode.dev/"
                metrics={[
                  {label: "Completion Rate", value: "84%"},
                  {label: "Developer Adoption", value: "High"},
                  {label: "Feedback Score", value: "9.2/10"}
                ]}
                index={0}
              />
              
              <PortfolioItem
                title="Grant Proposals"
                description="Created compelling grant proposals that helped secure thousands of dollars in funding for Koris Network. These detailed proposals balanced technical specificity with clear value propositions."
                link="https://link3.to/jadeofwallstreet"
                metrics={[
                  {label: "Funding Secured", value: "$12K+"},
                  {label: "Acceptance Rate", value: "75%"},
                  {label: "Proposals Written", value: "5"}
                ]}
                index={1}
              />
              
              <PortfolioItem
                title="DeFi Tutorial Series"
                description="Created an 8-part tutorial series breaking down complex DeFi concepts for non-technical users, driving protocol adoption."
                link="https://jadeofwallstreet.hashnode.dev/"
                metrics={[
                  {label: "Completion Rate", value: "72%"},
                  {label: "User Onboarding", value: "+245%"},
                  {label: "Series Shares", value: "1.8K"}
                ]}
                index={2}
              />
              
              <PortfolioItem
                title="Turning Optimum's whitepaper into a user digestible story"
                description="Simplified Optimum's technical whitepaper into an engaging narrative that made complex blockchain concepts accessible using storytelling techniques and clear explanations."
                link="https://jadeofwallstreet.hashnode.dev/optimum-is-quietly-solving-blockchains-biggest-flaw-early-users-could-win-big"
                metrics={[
                  {label: "Read Time", value: "7.2 min"},
                  {label: "Engagement", value: "92%"},
                  {label: "Shares", value: "45+"}
                ]}
                index={3}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
