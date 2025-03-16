
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseOverview from '@/components/CourseOverview';
import CourseLevels from '@/components/CourseLevels';
import WeeklyContent from '@/components/WeeklyContent';
import Footer from '@/components/Footer';

const CourseDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <CourseOverview />
        <WeeklyContent />
        <CourseLevels />
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
