
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPostProps { 
  title: string; 
  excerpt: string; 
  link: string; 
  date: string;
  readTime: string;
  index?: number;
}

const BlogPost = ({ title, excerpt, link, date, readTime, index = 0 }: BlogPostProps) => (
  <Card className="h-full overflow-hidden transition-all duration-300 animate-fade-in flex flex-col group" style={{ animationDelay: `${index * 150}ms` }}>
    <CardContent className="p-6 flex flex-col h-full">
      <div className="mb-2 text-xs text-muted-foreground flex justify-between">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      <h3 className="text-lg font-bold mb-3 group-hover:text-terminal-green transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{excerpt}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-terminal-green hover:text-terminal-blue transition-all duration-300 transform hover:-translate-y-1 mt-auto"
      >
        Read Full Article <span className="ml-1">→</span>
      </a>
    </CardContent>
  </Card>
);

export default BlogPost;
