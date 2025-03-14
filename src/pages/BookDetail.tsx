
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookContent from '@/components/book/BookContent';
import LanguageSelector from '@/components/book/LanguageSelector';
import BookInfo from '@/components/book/BookInfo';
import { Badge } from '@/components/ui/badge';
import { Star, Headphones, Clock } from 'lucide-react';

const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Atomic Habits</h1>
              <p className="text-xl text-muted-foreground mb-4">An Easy & Proven Way to Build Good Habits & Break Bad Ones</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="text-muted-foreground">by James Clear</div>
                <div className="flex items-center">
                  <span className="mr-2 font-medium">4.34</span>
                  <div className="flex text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">productivity</Badge>
                <Badge variant="secondary">personal-development</Badge>
                <Badge variant="secondary">self-help</Badge>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-md">
                  <Headphones className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Listen to this book</span>
                </div>
                <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-md">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Summary</span>
                  <span className="text-xs text-muted-foreground">19min</span>
                </div>
                <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-md">
                  <Headphones className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Podcast</span>
                  <span className="text-xs text-muted-foreground">10min</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Book Content</h2>
                <LanguageSelector />
              </div>
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
