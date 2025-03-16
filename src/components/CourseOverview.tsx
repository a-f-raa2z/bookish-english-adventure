
import React from 'react';
import Features from './course/Features';
import CourseTags from './course/CourseTags';
import CourseTimer from './course/CourseTimer';

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
