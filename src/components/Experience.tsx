
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ 
  role, 
  company, 
  duration, 
  description, 
  responsibilities = [],
  achievements = [],
  technologies = [],
  delay = 0,
}: { 
  role: string; 
  company: string; 
  duration: string; 
  description?: string; 
  responsibilities?: string[];
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
      
      {description && <p className="text-muted-foreground mb-6">{description}</p>}
      
      {responsibilities.length > 0 && (
        <div className="mb-6">
          <h4 className="text-md font-semibold mb-2">Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      
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
            role="Ambassador Lead & Community Manager" 
            company="EntropyFi" 
            duration="03/2022 - 05/2023"
            responsibilities={[
              "Led the ambassador program, driving community engagement and brand advocacy in the Web3 space.",
              "Recruited, trained, and managed a global team of 150+ ambassadors with performance-driven incentives.",
              "Developed strategies to engage the community through events, contests, and educational content.",
              "Managed active communities across Discord, Telegram, and Twitter, maintaining brand tone and values.",
              "Created onboarding materials, campaign briefs, and content to support ambassador efforts.",
              "Collaborated with core teams to align ambassador activities with product and marketing goals.",
              "Facilitated feedback loops between the community and development teams for product improvements.",
              "Hosted AMAs, virtual events, and campaigns to sustain engagement and participation."
            ]}
            achievements={[
              "Scaled the ambassador program to 150+ active members, significantly boosting brand visibility.",
              "Contributed to Entropyfi's growth, driving protocol adoption, TVL expansion, and retention.",
              "Collected and analyzed feedback that led to UI/UX and feature improvements."
            ]}
            technologies={["Discord", "Telegram", "Twitter/X", "Community Management", "Ambassador Program"]}
            delay={100}
          />
          
          <ExperienceCard 
            role="Content Writer & Community Administrator" 
            company="Metis.io" 
            duration="05/2023 - 09/2023"
            responsibilities={[
              "Developed and produced blog posts, educational content, and weekly community updates to simplify blockchain and Layer 2 concepts, enhancing transparency and engagement.",
              "Led community campaigns and interactive events to foster inclusivity.",
              "Managed Discord and other platforms, offering support and enforcing guidelines.",
              "Aligned content with marketing goals and project milestones.",
              "Collected community feedback to inform product improvements."
            ]}
            achievements={[
              "Helped onboard thousands by making blockchain content accessible.",
              "Boosted engagement and retention with gamified events and updates.",
              "Built strong community cohesion through active moderation and support."
            ]}
            technologies={["Discord", "GitHub", "Substack", "Twitter/X", "Technical Documentation"]}
            delay={300}
          />
          
          <ExperienceCard 
            role="Copywriter" 
            company="Koris.io" 
            duration="11/2024 - 02/2025"
            responsibilities={[
              "Created strategic content across blogs, marketing, website copy, and grant proposals.",
              "Simplified complex blockchain and DAO concepts for diverse audiences.",
              "Ensured consistent brand voice across communications.",
              "Aligned content with strategic goals across product, marketing, and BD teams."
            ]}
            achievements={[
              "Secured grants through compelling proposals.",
              "Strengthened Koris' Web3 brand presence via clear, high-impact storytelling.",
              "Built scalable content systems for onboarding and long-term marketing."
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
