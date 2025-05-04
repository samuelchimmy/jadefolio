
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // More robust Twitter widget script loading
    if (!window.twttr) {
      const script = document.createElement('script');
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      
      script.onload = () => {
        // Once loaded, render all tweets
        if (window.twttr) {
          window.twttr.widgets.load();
        }
      };
      
      document.body.appendChild(script);
      
      // Clean up on unmount
      return () => {
        try {
          document.body.removeChild(script);
        } catch (e) {
          console.log("Twitter script already removed");
        }
      };
    } else {
      // If script already exists, just load the widgets
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
