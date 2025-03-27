
import React from 'react';
import Features from './course/Features';
import CourseTags from './course/CourseTags';
import CourseTimer from './course/CourseTimer';
import { Check } from 'lucide-react';

const CourseOverview = () => {
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
            <div className="space-y-3">
              {[
                "Understand big ideas from bestselling books.",
                "Improve English through immersive podcast audio.",
                "Strengthen listening and comprehension skills.",
                "Develop critical thinking through idea exploration.",
                "Build lasting knowledge with story-based learning.",
                "Gain confidence in discussing complex topics in English."
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full text-primary mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
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
