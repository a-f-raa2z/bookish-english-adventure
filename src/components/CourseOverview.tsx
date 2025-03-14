
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
      <div className="text-center mb-16">
        <p className="title-chip">Course Overview</p>
        <h2 className="title-medium mb-6">What You Will Learn</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          This comprehensive course helps you develop English skills through engaging with popular books, 
          structured exercises, and practical activities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="feature-card glass-card p-8 opacity-0 transition-all duration-300 hover:shadow-md"
          >
            <div className="p-3 bg-accent rounded-full inline-block mb-5">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This self-paced course is divided into three levels, with each level lasting one month and covering four bestselling books.
        </p>
      </div>
    </section>
  );
};

export default CourseOverview;
