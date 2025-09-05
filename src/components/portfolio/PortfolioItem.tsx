
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PortfolioItemProps { 
  title: string; 
  description: string; 
  imageUrl?: string; 
  link: string; 
  metrics?: Array<{label: string; value: string}>; 
  index?: number;
  tags?: string[];
  features?: string[];
}

const PortfolioItem = ({ title, description, imageUrl, link, metrics = [], index = 0, tags = [], features = [] }: PortfolioItemProps) => (
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
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-full bg-muted/70 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {features.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-terminal-green">Key Features:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-muted-foreground">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-terminal-green mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

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
