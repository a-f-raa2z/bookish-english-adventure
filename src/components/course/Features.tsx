
import React, { useEffect } from 'react';
import { BookOpen, MessageSquare, Brain, Book, Circle } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Unlock Big Ideas, Effortlessly",
    description: "Bestselling books, distilled into engaging summaries and podcasts—so you learn smarter, not harder."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Train Your Ears, Tune Into Knowledge",
    description: "Absorb real-world English naturally through immersive audio, helping you understand, not just memorize."
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Think Sharper, Learn Deeper",
    description: "Go beyond passive reading—connect insights, challenge ideas, and make learning truly stick."
  }
];

const courseImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    alt: "Woman studying on laptop"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    alt: "Laptop with code"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    alt: "Circuit board"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    alt: "Programming monitor"
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
        
        <div className="mb-6 relative">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {courseImages.map((image) => (
                <CarouselItem key={image.id}>
                  <AspectRatio ratio={16 / 9} className="bg-muted/30 rounded-lg overflow-hidden border">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Hidden but needed for API functionality */}
            <div className="hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          
          {/* Custom dot pagination */}
          <CarouselDotNavigation images={courseImages} />
        </div>
        
        <p className="text-muted-foreground mb-4">
          Learn through stories, not study sessions. This self-paced program transforms bestselling books into engaging audio experiences, helping you absorb powerful ideas while naturally improving your English.
        </p>
        <p className="text-muted-foreground mb-4">
          Designed across three progressive levels (each lasting one month), the program features carefully curated book insights paired with immersive podcasts. Each week, you'll explore key themes, deepen comprehension, and expand your vocabulary—all without rote memorization or tedious grammar drills.
        </p>
        <p className="text-muted-foreground mb-4">
          Why Us? No fluff, no pressure—just powerful insights and practical language skills that stick.
        </p>
        <p className="text-muted-foreground mb-4">
          Why You? Because you're ready to learn smarter, not harder.
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

// Custom dot navigation component
const CarouselDotNavigation = ({ images }: { images: { id: number; src: string; alt: string }[] }) => {
  return (
    <Pagination className="mt-3">
      <PaginationContent className="flex justify-center space-x-1">
        {images.map((image, index) => (
          <PaginationItem key={image.id}>
            <PaginationLink 
              href={`#slide-${index}`}
              size="icon"
              className="h-2 w-2 p-0 rounded-full data-[current=true]:bg-primary data-[current=false]:bg-muted-foreground/30"
              data-carousel-slide={index}
              onClick={(e) => {
                e.preventDefault();
                const carousel = document.querySelector('[data-embla-container]');
                if (carousel) {
                  // @ts-ignore - Access the Embla API through __embla
                  const emblaApi = (carousel as any).__embla;
                  if (emblaApi) {
                    emblaApi.scrollTo(index);
                  }
                }
              }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default Features;
