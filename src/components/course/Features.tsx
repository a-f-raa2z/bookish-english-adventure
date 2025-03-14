
import React, { useEffect, useRef } from 'react';
import { BookOpen, HeadphonesIcon, MessageSquare, Pencil, Brain } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

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

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="feature-card flex items-start gap-3 opacity-0 transition-all duration-300">
      <div className="p-1.5 bg-primary/10 rounded-full mt-0.5">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
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
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">What You Will Learn</h3>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <Feature 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
