
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
      <CourseOverview />
      <CourseLevels />
      <WeeklyContent />
      <Footer />
    </div>
  );
};

export default CourseDetail;
