
import React from 'react';
import Header from '@/components/Header';
import CourseOverview from '@/components/CourseOverview';
import CourseLevels from '@/components/CourseLevels';
import Footer from '@/components/Footer';

const CourseDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Course Information */}
        <CourseOverview />
        <CourseLevels />
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
