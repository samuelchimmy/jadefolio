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
          I specialize in building apps with AI-first workflows. I guide tools like Claude, Lovable, and Cursor to ship frontend experiences that are fast, responsive, and fun. I still write just now with code and components.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            title="Vibe Coding"
            description="AI-powered development using tools like Cursor, Lovable, Claude, and Google Jules."
            icon={Zap}
            delay={100}
          />
          
          <SkillCard 
            title="Frontend Engineering"
            description="React, Tailwind, Supabase, JavaScript, and AI-assisted UI generation."
            icon={Code}
            delay={200}
          />
          
          <SkillCard 
            title="Prompt Engineering"
            description="Using LLMs to generate and refine code, debug logic, and structure web components."
            icon={MessageSquare}
            delay={300}
          />
          
          <SkillCard 
            title="Product UI/UX Design"
            description="Focus on speed, simplicity, mobile-first design, and intuitive interactions."
            icon={Users}
            delay={400}
          />
          
          <SkillCard 
            title="Technical Writing & Docs"
            description="Still sharp with documentation, readme files, API references, and onboarding tutorials."
            icon={FileText}
            delay={500}
          />
          
          <SkillCard 
            title="Legacy Skills That Still Serve"
            description="Community management, growth strategy, storytelling—now infused into the product design process."
            icon={Briefcase}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
