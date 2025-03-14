
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookContent from '@/components/book/BookContent';
import LanguageSelector from '@/components/book/LanguageSelector';
import BookInfo from '@/components/book/BookInfo';

const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-3xl font-bold">Atomic Habits</h1>
              <LanguageSelector />
            </div>
            <BookContent bookId={bookId || 'atomic-habits'} />
          </div>
          <div className="lg:col-span-4">
            <BookInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetail;
