
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, FileText, MessageSquare, Users, Rocket, Award, Briefcase, Code } from 'lucide-react';

const SkillCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0
}: { 
  title: string; 
  description: string; 
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}) => (
  <Card className="border border-muted bg-card/50 backdrop-blur-sm hover:border-terminal-green/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    <CardContent className="p-6 flex flex-col h-full">
      <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-muted border border-terminal-green/30">
        <Icon className="w-6 h-6 text-terminal-green" />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-terminal-green transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title text-center mb-8">Skills & Roles</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          My multi-disciplinary background spans technical writing, community building, and growth strategy—allowing me to bridge 
          technical complexity with compelling narratives that drive user adoption.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <SkillCard 
            title="Web3 Growth Strategy" 
            description="Creating data-driven growth plans that align with token economics and community incentives."
            icon={Rocket}
            delay={100}
          />
          
          <SkillCard 
            title="Content Writing" 
            description="Crafting viral threads, educational content, and technical breakdowns that drive engagement."
            icon={FileText}
            delay={200}
          />
          
          <SkillCard 
            title="Developer Documentation" 
            description="Translating complex technical concepts into clear, accessible documentation for developers."
            icon={Code}
            delay={300}
          />
          
          <SkillCard 
            title="Community Management" 
            description="Building, nurturing, and scaling engaged Web3 communities through strategic content and events."
            icon={Users}
            delay={400}
          />
          
          <SkillCard 
            title="GTM Execution" 
            description="Implementing go-to-market strategies with measurable KPIs and conversion-focused content."
            icon={Briefcase}
            delay={500}
          />
          
          <SkillCard 
            title="Airdrop Campaign Strategy" 
            description="Designing token distribution strategies that balance growth, engagement, and fair economics."
            icon={Award}
            delay={600}
          />
          
          <SkillCard 
            title="Copywriting & Scripting" 
            description="Writing compelling copy for websites, whitepapers, pitchdecks, and product launches."
            icon={MessageSquare}
            delay={700}
          />
          
          <SkillCard 
            title="Technical Storytelling" 
            description="Weaving technical innovations into compelling narratives that resonate with crypto audiences."
            icon={Zap}
            delay={800}
          />
        </div>
        
        <div className="mt-12 terminal-container animate-fade-in p-8">
          <h3 className="text-xl font-bold mb-4 text-terminal-green">Tools & Platforms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Twitter/X", "Farcaster", "Discord", "Telegram", 
              "Notion", "Markdown", "Substack", "Hashnode",
              "GitHub", "Figma", "Canva", "Dune Analytics",
              "DeepDAO", "Guild.xyz", "Dework", "Mirror.xyz"
            ].map((tool, i) => (
              <div 
                key={i} 
                className="px-4 py-2 border border-terminal-green/20 rounded-md bg-muted/30 text-center hover:border-terminal-green/50 hover:bg-muted/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
