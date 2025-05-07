
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
                tweetUrl="https://twitter.com/JadeOfWallSt/status/1836891018299592900"
                title="Scarcity-Driven Growth Campaign"
                description="Created a viral thread explaining how scarcity drives product adoption in Web3"
                metrics={{
                  impressions: "6.3K+",
                  shares: "28",
                  comments: "12",
                  likes: "89",
                  bookmarks: "34"
                }}
                tactics={[
                  "Used scarcity principle to create FOMO",
                  "Simplified complex tokenomics concepts",
                  "Added visual examples to enhance understanding",
                  "Included clear call-to-action"
                ]}
                index={0}
              />
              
              <TweetCard
                tweetUrl="https://twitter.com/JadeOfWallSt/status/1913717855897391240"
                title="Technical Explainer Breakdown"
                description="Simplified complex protocols for wider audience adoption"
                metrics={{
                  impressions: "8.7K+",
                  shares: "42",
                  comments: "18",
                  likes: "103",
                  bookmarks: "56"
                }}
                tactics={[
                  "Translated technical jargon into accessible language",
                  "Used step-by-step explanation format",
                  "Included real-world use cases",
                  "Created engaging hook in the first tweet"
                ]}
                index={1}
              />
              
              <TweetCard
                tweetUrl="https://twitter.com/JadeOfWallSt/status/1799903571670098367"
                title="High-Urgency CTA Campaign"
                description="Time-sensitive campaign to drive early access signups"
                metrics={{
                  impressions: "12.3K+",
                  shares: "35",
                  comments: "24",
                  likes: "117",
                  bookmarks: "42"
                }}
                tactics={[
                  "Created urgency through limited-time offer",
                  "Highlighted exclusive benefits for early adopters",
                  "Used countdown mechanism",
                  "Leveraged social proof with community testimonials"
                ]}
                index={2}
              />
              
              <TweetCard
                tweetUrl="https://twitter.com/JadeOfWallSt/status/1836622688627957843"
                title="Token Mechanics Breakdown"
                description="Detailed explanation of token utility and economic design"
                metrics={{
                  impressions: "54.4K+",
                  shares: "78",
                  comments: "32",
                  likes: "221",
                  bookmarks: "87"
                }}
                tactics={[
                  "Used clear visualizations of token flows",
                  "Compared to familiar Web2 equivalents",
                  "Broke down complex mechanisms into digestible parts",
                  "Addressed common misconceptions"
                ]}
                index={3}
              />
              
              <TweetCard
                tweetUrl="https://twitter.com/JadeOfWallSt/status/1798977294624956628"
                title="Community Growth Strategy"
                description="Thread on building engaged Web3 communities"
                metrics={{
                  impressions: "9.8K+",
                  shares: "45",
                  comments: "22",
                  likes: "134",
                  bookmarks: "68"
                }}
                tactics={[
                  "Provided actionable community-building tips",
                  "Shared real examples from successful DAOs",
                  "Included engagement metrics and benchmarks",
                  "Created narrative arc through storytelling"
                ]}
                index={4}
              />
              
              <TweetCard
                tweetUrl="https://twitter.com/JadeOfWallSt/status/1818498724269945172"
                title="Airdrop Strategy Framework"
                description="Comprehensive guide to designing effective token airdrops"
                metrics={{
                  impressions: "18.5K+",
                  shares: "62",
                  comments: "29",
                  likes: "176",
                  bookmarks: "94"
                }}
                tactics={[
                  "Created framework for airdrop qualification criteria",
                  "Balanced incentives for different user segments",
                  "Addressed common pitfalls and Sybil resistance",
                  "Included post-airdrop retention strategies"
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
