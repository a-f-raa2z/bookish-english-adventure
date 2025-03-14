
import React, { useEffect, useState } from 'react';
import { BookOpen, HeadphonesIcon, MessageSquare, Pencil, Brain, Timer, BadgePercent, ShoppingCart, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';

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

const tags = [
  "English Learning", 
  "Literature", 
  "Self-paced", 
  "Vocabulary", 
  "Speaking Practice", 
  "Listening Skills", 
  "Writing Skills",
  "Book Club"
];

const CourseOverview = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;
        
        return {
          hours: newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const handlePurchase = () => {
    toast({
      title: "Course added to cart",
      description: "You've successfully added this course to your cart!",
    });
  };

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <section id="overview" className="section-container">
      <div className="text-center mb-10">
        <p className="title-chip">Course Introduction</p>
        <h2 className="title-medium mb-4">English Learning Through Books</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          This comprehensive course helps you develop English skills through engaging with popular books, 
          structured exercises, and practical activities.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Left column: What You Will Learn and Tags (reordered) */}
        <div className="flex-1">
          <div className="glass-card p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">What You Will Learn</h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="feature-card flex items-start gap-3 opacity-0 transition-all duration-300"
                >
                  <div className="p-1.5 bg-primary/10 rounded-full mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Course Tags</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-accent/40 hover:bg-accent">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right column: Price and Countdown */}
        <div className="lg:w-1/3">
          <div className="glass-card border-2 border-primary/20 shadow-lg p-6">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Timer className="h-5 w-5" />
                <p className="font-semibold text-sm uppercase tracking-wider">Limited Time Offer</p>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 rounded-md px-3 py-2">
                  <span className="font-mono font-bold text-lg">{formatTime(timeLeft.hours)}</span>
                  <span className="text-xs block text-center">hours</span>
                </div>
                <span className="text-xl font-bold">:</span>
                <div className="bg-primary/10 rounded-md px-3 py-2">
                  <span className="font-mono font-bold text-lg">{formatTime(timeLeft.minutes)}</span>
                  <span className="text-xs block text-center">mins</span>
                </div>
                <span className="text-xl font-bold">:</span>
                <div className="bg-primary/10 rounded-md px-3 py-2">
                  <span className="font-mono font-bold text-lg">{formatTime(timeLeft.seconds)}</span>
                  <span className="text-xs block text-center">secs</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">Don't miss this special price – offer ends soon!</p>
            </div>
                  
            <div className="flex items-center gap-2 mb-4">
              <BadgePercent className="h-5 w-5 text-primary" />
              <p className="font-medium text-sm">50% Discount</p>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-1">Regular Price</p>
              <p className="text-lg line-through text-muted-foreground">$19.99</p>
              
              <div className="mt-2">
                <p className="text-sm text-primary font-medium mb-1">Sale Price</p>
                <p className="text-3xl font-bold">$9.99</p>
              </div>
            </div>
            
            <Button 
              className="w-full py-6 text-lg font-medium"
              onClick={handlePurchase}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              30-day money-back guarantee
            </p>
          </div>
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
