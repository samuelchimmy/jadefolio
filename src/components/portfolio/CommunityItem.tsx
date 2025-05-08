
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Link } from 'lucide-react';

interface CommunityItemProps {
  title: string;
  description: string;
  platform: "telegram" | "whatsapp" | "discord" | "other";
  link: string;
  memberCount: string;
  focus: string[];
  index?: number;
}

const CommunityItem = ({
  title,
  description,
  platform,
  link,
  memberCount,
  focus,
  index = 0
}: CommunityItemProps) => {
  const platformIcons = {
    telegram: <MessageCircle className="h-5 w-5" />,
    whatsapp: <MessageCircle className="h-5 w-5" />,
    discord: <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /><path d="M16 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /><path d="M8.5 17.5 7 19l.7.7A9.7 9.7 0 0 0 12 21a9.8 9.8 0 0 0 4.3-1.3l.7-.7-1.5-1.5" /><path d="M20 10a8 8 0 0 0-4-5.3S13 3 12 3s-4 1.7-4 1.7A8 8 0 0 0 4 10a17.5 17.5 0 0 0-.3 4.4l.5 1.4a10 10 0 0 0 3.2 3.1h.4A45 45 0 0 0 12 20a45 45 0 0 0 4.2-1.1h.4a10 10 0 0 0 3.2-3.1l.5-1.4A17.5 17.5 0 0 0 20 10Z" /></svg>,
    other: <Link className="h-5 w-5" />
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 group animate-fade-in border border-muted bg-card/50 backdrop-blur-sm hover:border-terminal-green/50" style={{ animationDelay: `${index * 150}ms` }}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold group-hover:text-terminal-green transition-colors">{title}</h3>
          <span className="text-sm text-terminal-green font-semibold">{memberCount} members</span>
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Focus Areas:</h4>
          <div className="flex flex-wrap gap-2">
            {focus.map((area, i) => (
              <span key={i} className="px-2.5 py-0.5 rounded-full text-xs bg-muted text-foreground">
                {area}
              </span>
            ))}
          </div>
        </div>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-terminal-green hover:text-terminal-blue transition-all duration-300 transform hover:-translate-y-1"
        >
          {platformIcons[platform]}
          Join Community <span className="ml-1">→</span>
        </a>
      </CardContent>
    </Card>
  );
};

export default CommunityItem;
