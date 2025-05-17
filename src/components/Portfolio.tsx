
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TweetCard from './portfolio/TweetCard';
import BlogPost from './portfolio/BlogPost';
import PortfolioItem from './portfolio/PortfolioItem';
import CommunityItem from './portfolio/CommunityItem';

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
          A collection of my viral growth campaigns, thought leadership content, community-building initiatives, and copywriting 
          that have driven significant engagement and adoption across the Web3 ecosystem.
        </p>

        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12">
            <TabsTrigger value="growth" className="data-[state=active]:text-terminal-green data-[state=active]:border-b-2 data-[state=active]:border-terminal-green transition-all">Growth Campaigns</TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:text-terminal-green data-[state=active]:border-b-2 data-[state=active]:border-terminal-green transition-all">Community Building</TabsTrigger>
            <TabsTrigger value="blog" className="data-[state=active]:text-terminal-green data-[state=active]:border-b-2 data-[state=active]:border-terminal-green transition-all">Blog & Thought Leadership</TabsTrigger>
            <TabsTrigger value="copywriting" className="data-[state=active]:text-terminal-green data-[state=active]:border-b-2 data-[state=active]:border-terminal-green transition-all">Copywriting</TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:text-terminal-green data-[state=active]:border-b-2 data-[state=active]:border-terminal-green transition-all">Tools Built</TabsTrigger>
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
                tweetUrl="https://x.com/MetisCharter/status/1843074517423587745"
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
            </div>
          </TabsContent>

          <TabsContent value="community" className="space-y-8">
            <div className="grid grid-cols-1 gap-8 mb-12">
              <Card className="border border-muted rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gradient section-title">0xfarmer Community</h3>
                  <p className="text-muted-foreground mb-6">
                    Founded and built the 0xfarmer community, a thriving group of over 1,000 like-minded Web3 enthusiasts and professionals. 
                    The community serves as a hub for sharing airdrop strategies, protocol tutorials, technical breakdowns, and general money-making 
                    opportunities in the Web3 ecosystem.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <CommunityItem
                      title="0xfarmer Telegram"
                      description="The primary hub for the 0xfarmer community, where members receive regular updates on airdrops, protocol insights, and exclusive alpha."
                      platform="telegram"
                      link="https://t.me/+Ma4xal22__g3OTgx"
                      memberCount="800+"
                      focus={["Airdrop Strategies", "Protocol Analysis", "Alpha Sharing", "DeFi Tactics"]}
                      index={0}
                    />
                    
                    <CommunityItem
                      title="0xfarmer WhatsApp Channel"
                      description="A complementary channel focused on broader Web3 education and immediate opportunities, making complex concepts accessible to members at all knowledge levels."
                      platform="whatsapp"
                      link="https://www.whatsapp.com/channel/0029VaAs0DMH5JLwrAD3wM1U"
                      memberCount="200+"
                      focus={["Web3 Education", "Beginner Guides", "Market Updates", "Opportunity Alerts"]}
                      index={1}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-muted rounded-lg overflow-hidden h-full bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-terminal-green">MetisDAO Community Initiatives</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    As Content Writer & Community Administrator at MetisDAO, I developed educational materials and led interactive campaigns that made Layer 2 
                    technology accessible to thousands of users. My work focused on simplifying complex concepts, enhancing transparency, and fostering 
                    an inclusive environment across all community touchpoints.
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      <li className="mb-1">Helped onboard thousands of users by creating accessible blockchain content</li>
                      <li className="mb-1">Boosted engagement metrics through gamified community events</li>
                      <li className="mb-1">Built strong community cohesion through active moderation and support</li>
                      <li className="mb-1">Created weekly updates and educational posts that simplified Layer 2 concepts</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-muted rounded-lg overflow-hidden h-full bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-terminal-green">EntropyFi Ambassador Program</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    As Ambassador Lead & Community Manager at EntropyFi, I built and managed a global network of 150+ ambassadors, 
                    creating performance-driven incentive structures and comprehensive training materials. The program significantly 
                    expanded the protocol's reach across various Web3 communities and geographical regions.
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Program Highlights:</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      <li className="mb-1">Scaled ambassador presence to 150+ active members globally</li>
                      <li className="mb-1">Created performance-based reward systems that drove consistent growth</li>
                      <li className="mb-1">Developed comprehensive onboarding materials and campaign briefs</li>
                      <li className="mb-1">Hosted regular AMAs, virtual events, and engagement campaigns</li>
                      <li className="mb-1">Built feedback loops between community and development teams</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
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

          <TabsContent value="tools" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PortfolioItem
                title="OptimumStar"
                description="A gamified quiz platform built specifically for the Optimum community. It features educational content about Optimum's RLNC technology in an interactive, fun format with leaderboards to boost community engagement and understanding."
                imageUrl="/placeholder.svg"
                link="https://optimumstar.quest/"
                metrics={[
                  {label: "User Engagement", value: "High"},
                  {label: "Educational Impact", value: "95%"},
                  {label: "Community Reach", value: "700+"}
                ]}
                tags={["Quiz App", "Gamification", "RLNC Technology", "Community Education"]}
                index={0}
              />
              
              <PortfolioItem
                title="SuccinctStar Club"
                description="A gamified quiz app built from scratch featuring leveled questions drawn from the Succinct whitepaper. Includes a leaderboard ranking players to boost community engagement and educate members about Succinct technology."
                imageUrl="/placeholder.svg"
                link="http://succinctstar.club/"
                metrics={[
                  {label: "User Engagement", value: "High"},
                  {label: "Educational Impact", value: "90%"},
                  {label: "Community Reach", value: "500+"}
                ]}
                tags={["Quiz App", "Gamification", "ZK Technology", "Community Education"]}
                index={1}
              />
              
              <PortfolioItem
                title="Layer0Dapps"
                description="A lightweight website showcasing applications built on the LayerZero tech stack. This resource was instrumental to the LayerZero community before they had an official ecosystem page, helping users discover and access LayerZero apps from one place."
                imageUrl="/placeholder.svg"
                link="https://layer0dapps.spread.name/"
                metrics={[
                  {label: "Apps Indexed", value: "45+"},
                  {label: "Monthly Visits", value: "1.2K+"},
                  {label: "Community Value", value: "Essential"}
                ]}
                tags={["Resource Directory", "LayerZero Ecosystem", "Community Tool"]}
                index={2}
              />
              
              <PortfolioItem
                title="Ultra Gigabrain Yield Farming Strategy"
                description="Designed an advanced yield farming strategy across multiple Solana lending markets including Kamino and MarginFi. Features fund looping across markets with efficient leverage optimization and interactive, clickable strategies on an implementation mind map."
                imageUrl="/placeholder.svg"
                link="https://www.canva.com/design/DAF1JuTQPLQ/Y4LZ_NkLu0TjP3qgV9ytHQ/view?utm_content=DAF1JuTQPLQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                metrics={[
                  {label: "APY Potential", value: "15-25%"},
                  {label: "Risk Level", value: "Moderate"},
                  {label: "Implementation", value: "Step-by-step"}
                ]}
                tags={["DeFi Strategy", "Solana", "Yield Farming", "Fund Looping"]}
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
