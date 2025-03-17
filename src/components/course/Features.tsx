
import React, { useEffect } from 'react';
import { BookOpen, MessageSquare, Brain, CheckCircle2, Book } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
        <h3 className="text-lg font-semibold mb-4">About the Course</h3>
        
        {/* Course Cover Image - moved here from CourseDetail */}
        <div className="mb-6">
          <AspectRatio ratio={16 / 9} className="bg-muted/30 rounded-lg overflow-hidden border">
            <div className="flex flex-col items-center justify-center h-full">
              <Book className="h-16 w-16 text-primary mb-2 opacity-50" />
              <h3 className="text-xl text-muted-foreground font-medium">English Learning Through Books</h3>
              <p className="text-sm text-muted-foreground mt-2">Comprehensive course with bestselling books</p>
            </div>
          </AspectRatio>
        </div>
        
        <p className="text-muted-foreground mb-4">
          This self-paced program is structured into 3 progressive levels, each lasting one month. 
          In every level, you'll explore 4 bestselling books through concise summaries and companion podcasts (10-15 minutes each). 
          To reinforce your understanding and sharpen your listening skills, each book also includes 
          targeted Q&A practice designed to help you master key concepts.
        </p>
      </div>

      <div className="mt-8 pt-6 border-t">
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
    </div>
  );
};

export default Features;
