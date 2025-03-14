
import React, { useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';

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
        <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>12 Books</span>
          </div>
          <div className="w-px h-6 bg-border"></div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Self-Paced</span>
          </div>
          <div className="w-px h-6 bg-border"></div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Lifetime Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
