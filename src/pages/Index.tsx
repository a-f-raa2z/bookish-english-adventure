
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseOverview from '@/components/CourseOverview';
import CourseLevels from '@/components/CourseLevels';
import WeeklyContent from '@/components/WeeklyContent';
import TargetAudience from '@/components/TargetAudience';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CourseOverview />
      <CourseLevels />
      <WeeklyContent />
      <TargetAudience />
      <Footer />
    </div>
  );
};

export default Index;
