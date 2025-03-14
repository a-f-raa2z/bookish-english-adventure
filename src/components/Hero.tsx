
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-blur-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 md:px-8 bg-gradient-to-b from-accent/50 to-background">
      <div className="max-w-5xl mx-auto text-center">
        <p className="title-chip animate-fade-in">Self-Paced Learning</p>
        <h1 
          ref={headingRef}
          className="title-large mb-6 opacity-0"
        >
          English Learning Through Books
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Master English naturally with bestselling books. Build vocabulary, improve comprehension, 
          and develop critical thinking skills at your own pace.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
            Start Learning
          </button>
          <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/80 backdrop-blur text-foreground font-medium hover:bg-white/90 transition-all shadow-sm hover:shadow-md">
            View Course Structure
          </button>
        </div>
        <div className="mt-16 md:mt-24 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#overview" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Scroll to learn more</span>
            <ArrowDownCircle className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
