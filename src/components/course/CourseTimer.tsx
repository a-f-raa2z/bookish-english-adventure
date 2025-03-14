
import React, { useState, useEffect } from 'react';
import { Timer, BadgePercent, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CourseTimer = () => {
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
  );
};

export default CourseTimer;
