
import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const TargetAudience = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const element = document.querySelector('.target-audience');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="who" className="section-container bg-gradient-to-b from-background to-accent/30">
      <div className="target-audience opacity-0">
        <div className="text-center mb-16">
          <p className="title-chip">Ideal For You</p>
          <h2 className="title-medium mb-6">Who Is This Course For?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This course has been carefully designed for English learners who want to improve their language skills
            in a natural, engaging, and structured way.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-10">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Self-directed learners</h3>
                  <p className="text-muted-foreground">
                    Those who prefer to learn at their own pace and take control of their learning journey
                    with structured guidance.
                  </p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Book lovers and readers</h3>
                  <p className="text-muted-foreground">
                    People who enjoy reading and want to discuss ideas fluently while improving their English skills
                    through engaging with popular literature.
                  </p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Structured material seekers</h3>
                  <p className="text-muted-foreground">
                    Learners looking for organized yet flexible study material that provides a clear path
                    to improving their English proficiency.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-10 text-center">
              <p className="text-lg font-semibold mb-6">Ready to transform your English skills?</p>
              <button className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                Join the Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
