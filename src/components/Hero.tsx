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
        {/* Empty hero section - all content removed as requested */}
      </div>
    </section>
  );
};

export default Hero;
