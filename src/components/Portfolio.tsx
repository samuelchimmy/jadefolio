
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TwitterTweetEmbed } from 'react-twitter-embed';

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

const TweetEmbed = ({ tweetId }: { tweetId: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="tweet-card h-full">
      <div className={`${loading ? 'flex items-center justify-center h-40' : 'hidden'}`}>
        <div className="animate-pulse flex space-x-1">
          <div className="h-2 w-2 bg-terminal-green rounded-full"></div>
          <div className="h-2 w-2 bg-terminal-green rounded-full"></div>
          <div className="h-2 w-2 bg-terminal-green rounded-full"></div>
        </div>
      </div>
      <div className={loading ? 'hidden' : ''}>
        <TwitterTweetEmbed
          tweetId={tweetId}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

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

const Portfolio = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-full">
                <TweetEmbed tweetId="1836891018299592900" />
                <div className="mt-4">
                  <h4 className="font-bold">Scarcity-Driven Growth Campaign</h4>
                  <p className="text-sm text-muted-foreground">Generated 6.3K+ impressions with viral engagement loop</p>
                </div>
              </div>
              
              <div className="h-full">
                <TweetEmbed tweetId="1913717855897391240" />
                <div className="mt-4">
                  <h4 className="font-bold">Technical Explainer Breakdown</h4>
                  <p className="text-sm text-muted-foreground">Simplified complex protocols for wider audience adoption</p>
                </div>
              </div>
              
              <div className="h-full">
                <TweetEmbed tweetId="1799903571670098367" />
                <div className="mt-4">
                  <h4 className="font-bold">High-Urgency CTA Campaign</h4>
                  <p className="text-sm text-muted-foreground">12.3K+ impressions driving early access signups</p>
                </div>
              </div>
              
              <div className="h-full">
                <TweetEmbed tweetId="1836622688627957843" />
                <div className="mt-4">
                  <h4 className="font-bold">Token Mechanics Breakdown</h4>
                  <p className="text-sm text-muted-foreground">54.4K+ impressions with high bookmark rate</p>
                </div>
              </div>
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
                title="Protocol Whitepaper: Koris Network"
                description="Co-authored technical whitepaper explaining novel token mechanics and incentive structures for a DeFi protocol."
                link="https://link3.to/jadeofwallstreet"
                metrics={[
                  {label: "Page Views", value: "3.2K+"},
                  {label: "Avg. Read Time", value: "12min"},
                  {label: "Citation Count", value: "7"}
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
                title="Launch Campaign: MetisDAO"
                description="Developed comprehensive messaging and copy for multi-channel product launch, including tweets, blog posts, and documentation."
                link="https://link3.to/jadeofwallstreet"
                metrics={[
                  {label: "Impressions", value: "82K+"},
                  {label: "Signups", value: "1.4K+"},
                  {label: "Conversion", value: "8.3%"}
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
