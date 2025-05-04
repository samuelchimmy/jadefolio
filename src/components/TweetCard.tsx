
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
  const cardRef = useRef<HTMLDivElement>(null);
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

  // When component mounts, directly render the embedded tweet
  useEffect(() => {
    // Clear any existing tweet widgets
    const tweetContainer = document.getElementById(`tweet-embed-${index}`);
    if (tweetContainer) {
      tweetContainer.innerHTML = '';
      
      // Create tweet embed
      const tweetEmbed = document.createElement('div');
      tweetEmbed.innerHTML = `<blockquote class="twitter-tweet" data-theme="dark"><a href="${tweetUrl}"></a></blockquote>`;
      tweetContainer.appendChild(tweetEmbed);
      
      // Load Twitter widget script
      if (window.twttr) {
        window.twttr.widgets.load(tweetContainer);
      } else {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        script.setAttribute('async', 'true');
        document.body.appendChild(script);
      }
    }
  }, [tweetUrl, index]);
  
  // Format metrics display
  const getPercentage = (value: string) => {
    const numValue = parseInt(value.replace(/[^0-9.]/g, ''));
    return !isNaN(numValue) && maxMetric > 0 ? (numValue / maxMetric) * 100 : 0;
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        "border border-muted rounded-lg overflow-hidden mb-20 transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-gradient section-title">{title}</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tweet Embed */}
          <div className="tweet-card col-span-1">
            <div id={`tweet-embed-${index}`} className="bg-card rounded-lg border border-terminal-green/20 h-[400px] flex items-center justify-center overflow-hidden">
              {/* Tweet will be embedded here */}
            </div>
          </div>
          
          {/* Metrics */}
          <div className="col-span-1">
            <div className="tweet-card h-full flex flex-col">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <span className="mr-2 text-terminal-green">&gt;</span> Results
              </h4>
              
              <div className="space-y-6 flex-1">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="capitalize text-sm">{key}</span>
                      <span className="text-terminal-green text-sm">{value}</span>
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
          <div className="col-span-1">
            <div className="tweet-card h-full flex flex-col">
              <h4 className="text-xl font-semibold mb-3 flex items-center">
                <span className="mr-2 text-terminal-green">&gt;</span> Tactics
              </h4>
              
              <p className="text-muted-foreground mb-4">{description}</p>
              
              <h5 className="text-sm text-terminal-green mb-2">Tactics Used:</h5>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {tactics.map((tactic, idx) => (
                  <li key={idx} className="mb-2">{tactic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add global Twitter types
declare global {
  interface Window {
    twttr?: any;
  }
}

export default TweetCard;
