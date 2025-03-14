
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookContent from '@/components/BookContent';
import LanguageSelector from '@/components/LanguageSelector';

const CourseDetail = () => {
  const [currentLanguage, setCurrentLanguage] = useState('english');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex justify-end mb-4">
          <LanguageSelector 
            currentLanguage={currentLanguage} 
            onLanguageChange={setCurrentLanguage} 
          />
        </div>
        <BookContent currentLanguage={currentLanguage} />
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
