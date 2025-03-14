
import React, { useEffect } from 'react';
import { BookOpen, HeadphonesIcon, MessageSquare, Pencil, Brain, CheckCircle2 } from 'lucide-react';

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

const targetAudience = [
  {
    title: "Self-directed learners",
    description: "Those who prefer to learn at their own pace and take control of their learning journey with structured guidance."
  },
  {
    title: "Book lovers and readers",
    description: "People who enjoy reading and want to discuss ideas fluently while improving their English skills through engaging with popular literature."
  },
  {
    title: "Structured material seekers",
    description: "Learners looking for organized yet flexible study material that provides a clear path to improving their English proficiency."
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

const TargetAudienceItem = ({ title, description }: { title: string, description: string }) => {
  return (
    <li className="flex gap-4">
      <div className="flex-shrink-0 text-primary">
        <CheckCircle2 className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </li>
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
      
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Who Is This Course For?</h3>
        <ul className="space-y-6">
          {targetAudience.map((item, index) => (
            <TargetAudienceItem 
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
        
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold mb-6">Ready to transform your English skills?</p>
          <button className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
            Join the Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
