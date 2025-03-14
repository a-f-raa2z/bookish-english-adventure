
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center">
        <h1 className="title-large text-center mb-6">
          Welcome to English Learning Through Books
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-center">
          Discover our self-paced course designed to help you master English naturally through bestselling books.
        </p>
        
        <div className="glass-card p-10 w-full max-w-2xl">
          <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">English Learning Through Books</h2>
              <p className="text-muted-foreground">
                A comprehensive self-paced course to improve your English skills through engaging with popular literature.
              </p>
            </div>
          </div>
          
          <Button 
            className="w-full py-6 text-lg font-medium"
            onClick={() => navigate('/course-detail')}
          >
            View Course Details <ArrowRight className="ml-2" />
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
