
import React, { useEffect } from 'react';
import { BookOpen, MessageSquare, Brain, CheckCircle2 } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Structured Reading",
    description: "Improve English naturally through bestselling books with structured lessons, book summaries, and podcasts. Engage with key ideas, expand vocabulary, and reinforce comprehension through guided exercises and discussions."
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
      <div>
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

      <div className="mt-8 pt-6 border-t">
        <h3 className="text-lg font-semibold mb-3">Course Structure</h3>
        <p className="text-muted-foreground mb-4">
          This self-paced course is divided into three levels, with each level lasting one month and covering four bestselling books.
          Each week focuses on one book, with structured learning activities including reading, listening, comprehension exercises,
          speaking practice, and writing tasks.
        </p>
        <p className="text-muted-foreground">
          Every book includes a summary and podcast (10-15 minutes each) to help you grasp key concepts and improve your listening skills.
        </p>
      </div>
    </div>
  );
};

export default Features;
