
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Metrics {
  impressions: string;
  shares: string;
  comments: string;
  likes?: string;
  bookmarks: string;
}

interface TweetCardProps {
  tweetUrl: string;
  title: string;
  description: string;
  metrics: Metrics;
  tactics: string[];
  index: number;
}

const TweetCard = ({ tweetUrl, title, description, metrics, tactics, index }: TweetCardProps) => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const tweetDivRef = useRef<HTMLDivElement>(null);
  const [maxMetric, setMaxMetric] = useState(0);
  
  useEffect(() => {
    // Find the max metric value for scaling the bars
    const numericValues = Object.values(metrics)
      .map(value => parseInt(value.replace(/[^0-9.]/g, '')))
      .filter(value => !isNaN(value));
    
    if (numericValues.length > 0) {
      setMaxMetric(Math.max(...numericValues));
    }
    
    // Set up intersection observer for animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [metrics]);

  // Improved tweet embedding
  useEffect(() => {
    const createTweetEmbed = () => {
      if (!tweetDivRef.current) return;
      
      // Clear any existing content
      tweetDivRef.current.innerHTML = '';
      
      // Extract tweet ID from URL - handling both twitter.com and x.com URLs
      const urlParts = tweetUrl.split('/');
      const tweetId = urlParts[urlParts.length - 1].split('?')[0];
      
      if (!tweetId) return;
      
      // Create the iframe directly
      const iframe = document.createElement('iframe');
      
      iframe.setAttribute('src', 
        `https://platform.twitter.com/embed/index.html?dnt=false&embedId=twitter-widget-${index}&frame=false&hideCard=false&hideThread=false&id=${tweetId}&lang=en&theme=dark&widgetsVersion=ed20a2b%3A1601588405575`
      );
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '400px');
      iframe.setAttribute('frameBorder', '0');
      iframe.setAttribute('scrolling', 'no');
      iframe.style.borderRadius = '12px';
      
      tweetDivRef.current.appendChild(iframe);
    };
    
    // Try to create the tweet embed
    createTweetEmbed();
    
    // Also try the Twitter widgets approach as fallback
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, [tweetUrl, index]);
  
  // Format metrics display
  const getPercentage = (value: string) => {
    const numValue = parseInt(value.replace(/[^0-9.]/g, ''));
    return !isNaN(numValue) && maxMetric > 0 ? (numValue / maxMetric) * 100 : 0;
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        "border border-muted rounded-lg overflow-hidden mb-20 transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        expanded ? "max-h-full" : "max-h-[500px]"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient section-title">{title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Tweet Embed */}
          <div className="tweet-card col-span-1 md:col-span-2 lg:col-span-1">
            <div 
              ref={tweetDivRef} 
              className="bg-card rounded-lg border border-terminal-green/20 h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
            >
              <div className="text-muted-foreground text-sm">Loading tweet...</div>
              <a 
                href={tweetUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 opacity-0"
              >
                View tweet on Twitter
              </a>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="tweet-card h-full flex flex-col">
              <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center">
                <span className="mr-2 text-terminal-green">&gt;</span> Results
              </h4>
              
              <div className="space-y-4 md:space-y-6 flex-1">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="capitalize text-xs md:text-sm">{key}</span>
                      <span className="text-terminal-green text-xs md:text-sm font-medium">{value}</span>
                    </div>
                    <div className="metric-bar">
                      <div 
                        className="metric-fill"
                        style={{ 
                          '--fill-percent': `${getPercentage(value)}%` 
                        } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Analysis */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="tweet-card h-full flex flex-col">
              <h4 className="text-lg md:text-xl font-semibold mb-3 flex items-center">
                <span className="mr-2 text-terminal-green">&gt;</span> Tactics
              </h4>
              
              <p className="text-muted-foreground mb-4 text-sm md:text-base">{description}</p>
              
              <h5 className="text-xs md:text-sm text-terminal-green mb-2">Tactics Used:</h5>
              <ul className="list-disc pl-5 text-xs md:text-sm text-muted-foreground space-y-1 md:space-y-2">
                {tactics.map((tactic, idx) => (
                  <li key={idx} className="leading-relaxed">{tactic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {!expanded && (
          <div className="flex justify-center mt-6">
            <button 
              onClick={toggleExpanded}
              className="px-4 py-2 rounded-md bg-transparent border border-terminal-green/50 text-terminal-green text-sm transition-all duration-300 hover:bg-terminal-green/10"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetCard;
