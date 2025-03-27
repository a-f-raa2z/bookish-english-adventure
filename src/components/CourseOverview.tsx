
import React from 'react';
import Features from './course/Features';
import CourseTags from './course/CourseTags';
import CourseTimer from './course/CourseTimer';
import { Check, Calendar, BookOpen, Headphones, BookText, Languages, Smartphone } from 'lucide-react';

const CourseOverview = () => {
  // Split learning points into two columns
  const learningPoints = [
    "Understand big ideas from bestselling books.",
    "Improve English through immersive podcast audio.",
    "Strengthen listening and comprehension skills.",
    "Develop critical thinking through idea exploration.",
    "Build lasting knowledge with story-based learning.",
    "Gain confidence in discussing complex topics in English."
  ];
  
  const firstColumn = learningPoints.slice(0, 3);
  const secondColumn = learningPoints.slice(3);
  
  // Course content items with specific icons
  const courseContents = [
    { text: "3-month structured learning program", icon: <Calendar className="h-4 w-4" /> },
    { text: "30+ bestselling book summaries", icon: <BookOpen className="h-4 w-4" /> },
    { text: "30+ immersive podcast episodes", icon: <Headphones className="h-4 w-4" /> },
    { text: "Curated vocabulary with instant lookup", icon: <BookText className="h-4 w-4" /> },
    { text: "Paragraph-by-paragraph translation", icon: <Languages className="h-4 w-4" /> },
    { text: "Access on mobile and desktop", icon: <Smartphone className="h-4 w-4" /> }
  ];
  
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
      
      <div className="flex flex-col lg:flex-row gap-8 my-12">
        {/* Left column: What You Will Learn and Tags section below it */}
        <div className="flex-1">
          <div className="glass-card p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">What You Will Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First column */}
              <div className="space-y-3">
                {firstColumn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Check className="h-4 w-4 text-black" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              
              {/* Second column */}
              <div className="space-y-3">
                {secondColumn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Check className="h-4 w-4 text-black" />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* This Course Includes */}
          <div className="glass-card p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">This Course Includes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {courseContents.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {React.cloneElement(item.icon, { className: "h-4 w-4 text-black" })}
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {courseContents.slice(3).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {React.cloneElement(item.icon, { className: "h-4 w-4 text-black" })}
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Features />
          <CourseTags />
        </div>
        
        {/* Right column: Price and Countdown */}
        <div className="lg:w-1/3">
          <CourseTimer />
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
