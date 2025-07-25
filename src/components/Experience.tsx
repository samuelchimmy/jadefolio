
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
        <h2 className="section-heading section-title text-center mb-8">Experience: From Growth Strategist to AI-Powered Builder</h2>

        <div className="space-y-8">
          <ExperienceCard 
            role="AI-Powered Web Builder (Freelance & Solo Projects)"
            company="Self-employed"
            duration="06/2024 – Present"
            responsibilities={[
              "Prompted and iterated with Claude, GPT, and Lovable to scaffold, generate, and debug code",
              "Built responsive, scalable UIs with Tailwind + React",
              "Managed backend setup with Supabase",
              "Integrated dev tools, dashboards, auth flows, and real-time databases",
              "Handled deployment (Vercel) and project documentation",
            ]}
            achievements={[
              "Learnable AI – EdTech for Nigerian universities",
              "CodeBox – Dev utility platform",
              "StreetQuest – AI-built GeoGuessr clone",
              "0xNotes – Anonymous journaling + daily stats",
            ]}
            technologies={["Cursor", "Supabase", "Lovable", "Google Jules", "React", "Tailwind", "Vercel"]}
            delay={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
