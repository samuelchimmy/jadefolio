
import React from 'react';
import TweetCard from './TweetCard';

const CaseStudies = () => {
  const caseStudies = [
    {
      tweetUrl: "https://x.com/MetisCharter/status/1836891018299592900",
      title: "Scarcity-Driven Growth Campaign",
      description: "This tweet was part of a scarcity-driven growth campaign to generate buzz for an exclusive beta access opportunity tied to @BlurCrypto. It leveraged urgency, social proof, and gated access to drive viral engagement.",
      metrics: {
        impressions: "6.3K+",
        shares: "35",
        comments: "83",
        bookmarks: "8"
      },
      tactics: [
        "Applied a viral loop strategy using a like + repost + comment call-to-action",
        "Crafted a curiosity-based hook",
        "Positioned the offer as elite and time-sensitive",
        "Attracted high-intent participants and generated organic buzz"
      ]
    },
    {
      tweetUrl: "https://x.com/MetisCharter/status/1913717855897391240",
      title: "Technical Explainer Breakdown",
      description: "This was a simplified explainer article on @get_optimum's tech stack — turning complex topics like RLNC into digestible, engaging content. The goal was to educate and activate early participants in their ecosystem.",
      metrics: {
        impressions: "1.2K+",
        shares: "11+",
        likes: "25+",
        bookmarks: "15",
        comments: "6"
      },
      tactics: [
        "Used humor, simplified analogies, and bold positioning to capture attention",
        "Balanced meme-level accessibility with genuine alpha",
        "Positioned the protocol as early-farmable",
        "Elevated the project's visibility and credibility within key crypto circles"
      ]
    },
    {
      tweetUrl: "https://x.com/MetisCharter/status/1799903571670098367",
      title: "High-Urgency CTA Campaign",
      description: "This tweet was a high-urgency, viral-style CTA targeting early access to a VC-backed project beta. The aim was to spark rapid user engagement and onboard early testers while creating buzz within the alpha-hunting community.",
      metrics: {
        impressions: "12.3K+",
        shares: "47+",
        likes: "66",
        comments: "120+",
        bookmarks: "10"
      },
      tactics: [
        "Engineered a sense of urgency and exclusivity through language",
        "Triggered the viral loop via simple social engagement steps",
        "Funneled qualified, fast-acting users to the project's beta",
        "Contributed to GTM push by providing early traction"
      ]
    },
    {
      tweetUrl: "https://x.com/MetisCharter/status/1836622688627957843",
      title: "Technical Breakdown of Token Mechanics",
      description: "This tweet broke down a complex redistribution formula for $ZRO token holders in a clear, actionable way. It helped users estimate how much extra they could claim from unclaimed token reserves — turning confusion into clarity at a key moment post-airdrop.",
      metrics: {
        impressions: "54.4K+",
        shares: "21+",
        likes: "232",
        comments: "38",
        bookmarks: "62"
      },
      tactics: [
        "Simplified onchain math into a plug-and-play format with an example",
        "Made complex calculations accessible for average users",
        "Positioned as a go-to voice for timely, accurate alpha",
        "Boosted organic distribution during critical post-airdrop window"
      ]
    },
    {
      tweetUrl: "https://x.com/MetisCharter/status/1839033794235703681",
      title: "Simplified Technical Guide",
      description: "This tweet offered a simplified, non-dev guide to creating a Hyperlane Bridge, making advanced infrastructure accessible to everyday users. The tweet used a gated CTA to distribute the guide via DMs, helping build direct engagement.",
      metrics: {
        impressions: "1.6K+",
        shares: "20+",
        likes: "44",
        comments: "44",
        bookmarks: "13"
      },
      tactics: [
        "Targeted a non-technical audience underserved by protocol documentation",
        "Created a viral loop with a \"like + comment + repost\" CTA",
        "Used a gated DM model to make the guide feel exclusive and personal",
        "Positioned the project as beginner-friendly to boost onboarding"
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading section-title mb-12">Case Studies</h2>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <TweetCard
              key={index}
              index={index}
              tweetUrl={study.tweetUrl}
              title={study.title}
              description={study.description}
              metrics={study.metrics}
              tactics={study.tactics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
