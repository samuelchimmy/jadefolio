
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Rocket, Star, TrendingUp, Award, Zap } from 'lucide-react';

const TimelineItem = ({ 
  year, 
  title, 
  description, 
  icon: Icon,
  delay = 0
}: { 
  year: string; 
  title: string; 
  description: string; 
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}) => (
  <div 
    className="flex gap-4 items-start animate-fade-in" 
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex-shrink-0 w-16 text-right font-mono text-terminal-green">{year}</div>
    <div className="h-full flex flex-col items-center mr-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-muted border border-terminal-green/30 animate-pulse-glow">
        <Icon className="w-6 h-6 text-terminal-green" />
      </div>
      <div className="flex-grow w-0.5 bg-gradient-to-b from-terminal-green/50 to-transparent mt-2"></div>
    </div>
    <div className="flex-1 pb-10">
      <h3 className="text-xl font-bold mb-2 text-terminal-green">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title text-center mb-16">About My Journey</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="terminal-container animate-fade-in">
            <div className="flex items-center gap-2 mb-4 border-b border-terminal-green/20 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-sm text-muted-foreground">about.tsx</div>
            </div>
            
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

              <div className="mt-4 p-3 border border-terminal-green/30 rounded-md bg-muted/30">
                <p className="text-terminal-green">
                  If you're building something bold in Web3 and need a loud, clear, and effective voice to tell your story:
                  <span className="font-bold"> Let's make noise.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="pl-10">
              <TimelineItem 
                year="2021" 
                title="Entered Web3" 
                description="Discovered blockchain technology and dove headfirst into the Web3 ecosystem, learning and building alongside the community."
                icon={Rocket}
                delay={100}
              />
              
              <TimelineItem 
                year="2022" 
                title="Community Leadership" 
                description="Led multiple Web3 communities, organizing educational events and facilitating growth through strategic content."
                icon={Star}
                delay={300}
              />
              
              <TimelineItem 
                year="2023" 
                title="Growth Campaigns" 
                description="Developed and executed viral growth campaigns for multiple protocols, driving significant user acquisition."
                icon={TrendingUp}
                delay={500}
              />
              
              <TimelineItem 
                year="2024" 
                title="Content Strategy" 
                description="Refined my approach to technical storytelling, helping projects navigate complex tokenomics and onchain narratives."
                icon={Award}
                delay={700}
              />
              
              <TimelineItem 
                year="Present" 
                title="Scaling Impact" 
                description="Now focused on helping the next generation of Web3 protocols achieve sustainable growth and community engagement."
                icon={Zap}
                delay={900}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
