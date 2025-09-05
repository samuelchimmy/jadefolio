
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
    <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in" 
         style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-12 sm:w-16 text-left sm:text-right font-mono text-terminal-green text-sm">{year}</div>
      <div className="h-full flex flex-col items-center mr-4">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-muted border border-terminal-green/30 animate-pulse-glow">
          <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-terminal-green" />
        </div>
        <div className="flex-grow w-0.5 bg-gradient-to-b from-terminal-green/50 to-transparent mt-2"></div>
      </div>
      <div className="flex-1 pb-6 sm:pb-10">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-terminal-green">{title}</h3>
        <p className="text-muted-foreground text-sm sm:text-base">{description}</p>
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
              <div className="text-terminal-green text-xl mb-4">Hi, I’m Samuel also known as <strong>Jadeofwallstreet</strong></div>
              <p className="text-muted-foreground mb-4">
                I’m a Vibe Coder. I use AI like a co-pilot, transforming product ideas into live, polished web apps. Whether I’m prompting Cursor, debugging with Claude, or styling with Lovable, my dev flow is fast, creative, and effective.
              </p>
              
              <p className="text-muted-foreground mb-4">
                I come from a background in content strategy, community building, and technical storytelling and now I build apps where those skills meet code.
              </p>
              
              <p className="text-muted-foreground">
                If you're building a bold digital product and want someone who can prototype, iterate, and deploy fast (without sacrificing user delight I'm your guy.
              </p>
            </div>
          </div>
          
          <div>
            <div className="pl-4 md:pl-10">
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
                description="Led communities, ran airdrop strategies, and created viral educational content"
                icon={Star}
                delay={300}
              />
              
              <TimelineItem 
                year="2023" 
                title="Content Strategy"
                description="Focused on content strategy, writing for protocols, simplifying tokenomics"
                icon={TrendingUp}
                delay={500}
              />
              
              <TimelineItem 
                year="Mid-2024"
                title="Vibe Coding"
                description="Discovered Vibe Coding began building apps with Cursor, Lovable, Claude"
                icon={Award}
                delay={700}
              />
              
              <TimelineItem 
                year="2025"
                title="Full-Stack Development"
                description="Launched Learnable, CodeBox, and multiple AI-built apps. Fully transitioned into AI-native web development"
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
