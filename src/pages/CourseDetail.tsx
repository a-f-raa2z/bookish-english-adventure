
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseOverview from '@/components/CourseOverview';
import CourseLevels from '@/components/CourseLevels';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Book } from 'lucide-react';
import CourseStructure from '@/components/course/CourseStructure';

const CourseDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Course Cover Placeholder */}
        <div className="mb-8 max-w-4xl mx-auto">
          <AspectRatio ratio={16 / 9} className="bg-muted/30 rounded-lg overflow-hidden border">
            <div className="flex flex-col items-center justify-center h-full">
              <Book className="h-16 w-16 text-primary mb-2 opacity-50" />
              <h3 className="text-xl text-muted-foreground font-medium">English Learning Through Books</h3>
              <p className="text-sm text-muted-foreground mt-2">Comprehensive course with bestselling books</p>
            </div>
          </AspectRatio>
        </div>
        
        {/* Course Information */}
        <CourseOverview />
        <CourseStructure />
        <CourseLevels />
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
