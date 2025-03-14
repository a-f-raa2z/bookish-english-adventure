
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Timer, BadgePercent, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PricingSection = () => {
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
    <section className="py-10 px-6 md:px-8 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-8 md:p-10 border-2 border-primary/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
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
              
              <h2 className="title-small mb-4">Complete Course Package</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Access to all 12 books across 3 levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>All summaries and podcast discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Complete vocabulary lists and exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Self-assessment tools and progress tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Lifetime access to all materials</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-auto">
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
