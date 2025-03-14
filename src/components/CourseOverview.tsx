
import React, { useEffect } from 'react';
import { BookOpen, HeadphonesIcon, MessageSquare, Pencil, Brain } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Structured Reading",
    description: "Improve English naturally through bestselling books with structured lessons and exercises."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Vocabulary Expansion",
    description: "Build your vocabulary and master expressions used in real-world contexts."
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Critical Thinking",
    description: "Develop reading comprehension and critical thinking skills through guided exercises."
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6 text-primary" />,
    title: "Listening & Speaking",
    description: "Enhance listening and speaking skills through book summaries and podcast discussions."
  },
  {
    icon: <Pencil className="h-6 w-6 text-primary" />,
    title: "Writing Improvement",
    description: "Strengthen writing abilities with structured exercises and reflections on book concepts."
  }
];

const CourseOverview = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('content-appear');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.feature-card');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="overview" className="section-container">
      <div className="text-center mb-10">
        <p className="title-chip">Course Introduction</p>
        <h2 className="title-medium mb-4">English Learning Through Books</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          This comprehensive course helps you develop English skills through engaging with popular books, 
          structured exercises, and practical activities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card flex items-center gap-3 bg-accent/30 px-4 py-3 rounded-full opacity-0 transition-all duration-300"
            >
              <div className="p-1 bg-background rounded-full">
                {feature.icon}
              </div>
              <span className="font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-accent/10 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Course Structure</h3>
        <p className="text-muted-foreground mb-4">
          This self-paced course is divided into three levels, with each level lasting one month and covering four bestselling books.
          Each week focuses on one book, with structured learning activities including reading, listening, comprehension exercises,
          speaking practice, and writing tasks.
        </p>
        <p className="text-muted-foreground">
          Every book includes a summary and podcast (10-15 minutes each) to help you grasp key concepts and improve your listening skills.
        </p>
      </div>
    </section>
  );
};

export default CourseOverview;
