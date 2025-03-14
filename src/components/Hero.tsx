
import React, { useEffect, useRef } from 'react';

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
    <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-accent/50 to-background">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=600" 
            alt="English Learning Through Books" 
            className="w-full h-auto rounded-lg shadow-lg object-cover animate-fade-in" 
          />
        </div>
        <h1 
          ref={headingRef}
          className="title-large mb-6 opacity-0"
        >
          English Learning Through Books: A Self-Paced Course
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          This course is divided into three levels, each lasting one month. Each week focuses on one book, 
          with structured learning activities including reading, listening, comprehension exercises, speaking practice, 
          and writing tasks. Each book includes a summary and podcast (10-15 minutes each).
        </p>
      </div>
    </section>
  );
};

export default Hero;
