
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseOverview from '@/components/CourseOverview';
import CourseLevels from '@/components/CourseLevels';
import Footer from '@/components/Footer';

const CourseDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CourseOverview />
      <CourseLevels />
      <Footer />
    </div>
  );
};

export default CourseDetail;
