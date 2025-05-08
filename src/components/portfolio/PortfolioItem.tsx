
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PortfolioItemProps { 
  title: string; 
  description: string; 
  imageUrl?: string; 
  link: string; 
  metrics?: Array<{label: string; value: string}>; 
  index?: number;
}

const PortfolioItem = ({ title, description, imageUrl, link, metrics = [], index = 0 }: PortfolioItemProps) => (
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

export default PortfolioItem;
