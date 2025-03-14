
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseOverview from '@/components/CourseOverview';
import CourseLevels from '@/components/CourseLevels';
import WeeklyContent from '@/components/WeeklyContent';
import TargetAudience from '@/components/TargetAudience';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

const CourseDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CourseOverview />
      <PricingSection />
      <CourseLevels />
      <WeeklyContent />
      <TargetAudience />
      <Footer />
    </div>
  );
};

export default CourseDetail;
