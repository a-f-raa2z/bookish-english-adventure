
import React, { useEffect, useRef } from 'react';
import { BookOpenCheck, ChevronRight, GraduationCap } from 'lucide-react';

const levels = [
  {
    title: "Foundations of Everyday English",
    duration: "4 Weeks, 4 Books",
    description: "For learners comfortable with basic English who want to build fluency. Focus on daily vocabulary, common phrases, and understanding simple ideas.",
    books: ["Super Attractor", "Atomic Habits", "The Power of Now", "Fall and Rise"],
    color: "from-blue-500/10 to-blue-500/5"
  },
  {
    title: "Deepening Understanding and Expression",
    duration: "4 Weeks, 4 Books",
    description: "For learners who can understand longer texts and want to improve critical thinking, argumentation, and professional vocabulary.",
    books: ["Thinking, Fast and Slow", "The Psychology of Money", "You Are a Badass", "Losing Earth"],
    color: "from-indigo-500/10 to-indigo-500/5"
  },
  {
    title: "Advanced Communication and Critical Thinking",
    duration: "4 Weeks, 4 Books",
    description: "For learners who are comfortable reading challenging books and want to refine their professional and academic English.",
    books: ["The Four Agreements", "Sapiens", "A Promised Land", "The Innovator's Dilemma"],
    color: "from-purple-500/10 to-purple-500/5"
  }
];

const CourseLevels = () => {
  const levelRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    
    levelRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="levels" className="section-container bg-accent/30">
      <div className="text-center mb-16">
        <p className="title-chip">Program Structure</p>
        <h2 className="title-medium mb-6">Course Levels</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The course is divided into three progressive levels, each designed to build upon your existing knowledge 
          and take your English skills to new heights.
        </p>
      </div>
      
      <div className="space-y-8 md:space-y-12">
        {levels.map((level, index) => (
          <div 
            key={index}
            ref={el => levelRefs.current[index] = el}
            className="glass-card p-8 md:p-10 opacity-0"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${level.color}`}>
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="title-small mb-1">{level.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{level.duration}</p>
                  </div>
                  <button className="mt-3 md:mt-0 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    <span>View Full Curriculum</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
                
                <p className="text-muted-foreground mb-6">{level.description}</p>
                
                <div>
                  <p className="text-sm font-medium mb-3">Featured Books:</p>
                  <div className="flex flex-wrap gap-3">
                    {level.books.map((book, bookIndex) => (
                      <div 
                        key={bookIndex}
                        className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-white text-sm font-medium border"
                      >
                        <BookOpenCheck className="h-3.5 w-3.5 text-primary" />
                        <span>{book}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
          Explore All Levels
        </button>
      </div>
    </section>
  );
};

export default CourseLevels;
