
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseOverview from '@/components/CourseOverview';
import CourseLevels from '@/components/CourseLevels';
import CourseStructure from '@/components/course/CourseStructure';
import Features from '@/components/course/Features';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';

const CourseDetail = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <CourseOverview />
        <div className="my-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Featured Book</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our interactive book reading experience with dictionary lookups and translations
          </p>
          <Link to="/book/atomic-habits">
            <Button size="lg" className="gap-2">
              <Book className="h-5 w-5" />
              Read Atomic Habits
            </Button>
          </Link>
        </div>
        <CourseLevels />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <CourseStructure />
          <Features />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
