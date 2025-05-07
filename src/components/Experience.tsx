
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ 
  role, 
  company, 
  duration, 
  description, 
  achievements = [],
  technologies = [],
  delay = 0,
}: { 
  role: string; 
  company: string; 
  duration: string; 
  description: string; 
  achievements?: string[];
  technologies?: string[];
  delay?: number;
}) => (
  <Card className="border border-muted bg-card/50 backdrop-blur-sm hover:border-terminal-green/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    <CardContent className="p-6">
      <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-terminal-green">{role}</h3>
          <div className="text-lg">{company}</div>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-1" />
          {duration}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      {achievements.length > 0 && (
        <div className="mb-6">
          <h4 className="text-md font-semibold mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-muted/50 text-xs rounded-md">{tech}</span>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title text-center mb-8">Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          I've helped Web3 projects across multiple niches amplify their message and grow their communities through 
          strategic content and growth initiatives.
        </p>

        <div className="space-y-8">
          <ExperienceCard 
            role="Growth Strategist & Content Creator" 
            company="EntropyFi" 
            duration="2023 - Present"
            description="Led content strategy for a DeFi protocol focused on sustainable yield generation, translating complex financial mechanisms into accessible content."
            achievements={[
              "Developed comprehensive content roadmap that grew Twitter following by 200% in 6 months",
              "Created viral educational threads that generated 50K+ impressions per post",
              "Simplified technical documentation that increased protocol adoption among non-technical users by 45%"
            ]}
            technologies={["Twitter/X", "Discord", "Notion", "Hashnode", "Markdown"]}
            delay={100}
          />
          
          <ExperienceCard 
            role="Content Writer & Community Administrator" 
            company="Metis.io" 
            duration="05/2023 - 09/2023"
            description="Managed community growth and educational content for an Ethereum L2 scaling solution, focusing on developer adoption and technical explainers."
            achievements={[
              "Created developer-focused content that drove a 3x increase in GitHub contributions",
              "Organized technical AMAs and educational workshops that onboarded 500+ new developers",
              "Led documentation overhaul that reduced support tickets by 40% and increased self-service resolution"
            ]}
            technologies={["Discord", "GitHub", "Substack", "Twitter/X", "Technical Documentation"]}
            delay={300}
          />
          
          <ExperienceCard 
            role="Copywriter" 
            company="Koris.io" 
            duration="11/2024 - 02/2025"
            description="Developed technical content strategy for a cross-chain interoperability protocol, creating educational materials and growth-focused campaigns."
            achievements={[
              "Co-authored technical whitepaper that helped secure $1.2M in early funding",
              "Created 'Bridges Explained' content series that generated 75K+ impressions",
              "Led airdrop campaign content strategy resulting in 12K+ qualified participants"
            ]}
            technologies={["Gitbook", "Twitter/X", "Farcaster", "Whitepaper", "Technical Documentation"]}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
