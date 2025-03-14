
import React, { useState, useEffect } from 'react';
import { BookOpen, Headphones, MessageSquare, Pen, PlayCircle } from 'lucide-react';

const weeklyTopics = [
  {
    week: 1,
    book: "Super Attractor",
    activities: [
      { icon: <PlayCircle />, title: "Summary & Podcast", description: "Listen to the book summary and podcast discussion" },
      { icon: <BookOpen />, title: "Vocabulary Focus", description: "Focus on self-improvement and positive mindset vocabulary" },
      { icon: <MessageSquare />, title: "Key Phrases", description: "Identify and practice 10 key phrases from the book" },
      { icon: <Pen />, title: "Writing Task", description: "Describe a personal goal using learned vocabulary" }
    ]
  },
  {
    week: 2,
    book: "Atomic Habits",
    activities: [
      { icon: <BookOpen />, title: "Language Study", description: "Study action-based language and goal-setting terms" },
      { icon: <Headphones />, title: "Podcast Practice", description: "Listen to the podcast and practice pronunciation" },
      { icon: <MessageSquare />, title: "Comprehension", description: "Answer multiple-choice questions on key ideas" },
      { icon: <Pen />, title: "Writing Task", description: "Explain one habit you want to change" }
    ]
  },
  {
    week: 3,
    book: "The Power of Now",
    activities: [
      { icon: <BookOpen />, title: "Abstract Comprehension", description: "Improve comprehension of abstract ideas and mindfulness" },
      { icon: <MessageSquare />, title: "Idioms & Phrases", description: "Identify key idioms and phrases in the summary" },
      { icon: <Headphones />, title: "Speaking Practice", description: "Explain a key concept in your own words" },
      { icon: <Pen />, title: "Reflection", description: "Reflect on how mindfulness impacts daily life" }
    ]
  },
  {
    week: 4,
    book: "Fall and Rise",
    activities: [
      { icon: <BookOpen />, title: "Past Tense Practice", description: "Strengthen past tense and storytelling skills" },
      { icon: <MessageSquare />, title: "Historical Analysis", description: "Analyze historical events and their impact" },
      { icon: <Headphones />, title: "Speaking Practice", description: "Retell a historical event from the book" },
      { icon: <Pen />, title: "Final Writing", description: "Summarize a key lesson learned" }
    ]
  }
];

const WeeklyContent = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  
  const handleWeekChange = (week: number) => {
    setActiveWeek(week);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    const element = document.querySelector('.weekly-content');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="weekly" className="section-container">
      <div className="text-center mb-16">
        <p className="title-chip">Level 1 Details</p>
        <h2 className="title-medium mb-6">Weekly Learning Journey</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Each week focuses on a specific book with structured learning activities. 
          Here's what to expect in the first level.
        </p>
      </div>
      
      <div className="weekly-content opacity-0">
        <div className="glass-card p-6 md:p-8 mb-10">
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            {weeklyTopics.map((topic) => (
              <button
                key={topic.week}
                onClick={() => handleWeekChange(topic.week)}
                className={`py-2 px-4 md:px-6 rounded-full transition-all ${
                  activeWeek === topic.week
                    ? "bg-primary text-white shadow-md"
                    : "bg-white border hover:border-primary hover:text-primary"
                }`}
              >
                Week {topic.week}
              </button>
            ))}
          </div>
        </div>
        
        {weeklyTopics
          .filter((topic) => topic.week === activeWeek)
          .map((topic) => (
            <div key={topic.week} className="mb-8 animate-slide-in-right">
              <div className="text-center mb-10">
                <h3 className="title-small mb-3">Week {topic.week}: {topic.book}</h3>
                <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topic.activities.map((activity, index) => (
                  <div 
                    key={index}
                    className="glass-card p-6 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent rounded-full">
                        <div className="text-primary">
                          {activity.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-2">{activity.title}</h4>
                        <p className="text-muted-foreground">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 rounded-full glass-card text-foreground font-medium hover:bg-white/90 transition-all shadow-md hover:shadow-lg">
          View All Weekly Activities
        </button>
      </div>
    </section>
  );
};

export default WeeklyContent;
