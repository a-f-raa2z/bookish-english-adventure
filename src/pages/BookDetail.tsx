
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookContent from '@/components/book/BookContent';
import LanguageSelector from '@/components/book/LanguageSelector';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Headphones, Clock, FileText } from 'lucide-react';

const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [activeTab, setActiveTab] = useState<string>("summary");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Top row with all book information */}
        <div className="mb-8 p-6 bg-card rounded-lg border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Book cover (3 columns) */}
            <div className="md:col-span-3">
              <img 
                src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg" 
                alt="Atomic Habits Book Cover" 
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
            
            {/* Book details (6 columns) */}
            <div className="md:col-span-6">
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
            </div>
            
            {/* Reading options (3 columns) */}
            <div className="md:col-span-3 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-md">
                <Headphones className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Listen to this book</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-md">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Summary</span>
                <span className="text-xs text-muted-foreground">19min</span>
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-md">
                <Headphones className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Podcast</span>
                <span className="text-xs text-muted-foreground">10min</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content area with 1/3 for book content and 2/3 for tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Book content (4 columns) */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-semibold mb-6">Content</h2>
            <BookContent bookId={bookId || 'atomic-habits'} />
          </div>
          
          {/* Summary and Podcast tabs (8 columns) */}
          <div className="lg:col-span-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Book Formats</h2>
              <LanguageSelector />
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="summary" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Summary</span>
                </TabsTrigger>
                <TabsTrigger value="podcast" className="flex items-center gap-2">
                  <Headphones className="h-4 w-4" />
                  <span>Podcast</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="summary" className="p-4 border rounded-md mt-4">
                <h3 className="text-xl font-semibold mb-4">Atomic Habits: Key Takeaways</h3>
                <div className="prose max-w-none">
                  <p>Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.</p>
                  
                  <h4 className="font-semibold mt-4">The Four Laws of Behavior Change</h4>
                  <ol className="list-decimal pl-5 mt-2 space-y-2">
                    <li><strong>Make it obvious.</strong> The more obvious a cue is, the more likely it is to trigger a habit. Design your environment to make cues for good habits visible and cues for bad habits invisible.</li>
                    <li><strong>Make it attractive.</strong> The more attractive an opportunity is, the more likely it is to become habit-forming. Pair an action you want to do with an action you need to do.</li>
                    <li><strong>Make it easy.</strong> The easier a habit is, the more likely it is to form. Reduce friction for good habits and increase friction for bad habits.</li>
                    <li><strong>Make it satisfying.</strong> We're more likely to repeat a behavior when the experience is satisfying. Use immediate rewards to increase the rate at which you perform a behavior.</li>
                  </ol>
                  
                  <h4 className="font-semibold mt-4">Identity-Based Habits</h4>
                  <p>Focus on who you want to become, not what you want to achieve. The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="podcast" className="p-4 border rounded-md mt-4">
                <h3 className="text-xl font-semibold mb-4">Atomic Habits: Podcast Script</h3>
                <div className="prose max-w-none">
                  <p><strong>Host:</strong> Welcome to today's episode where we dive into James Clear's bestselling book, Atomic Habits. This book has changed the way millions of people think about progress and personal improvement.</p>
                  
                  <p className="mt-3"><strong>Host:</strong> Clear's central idea is that small, incremental changes compound over time to produce remarkable results. He calls these small changes "atomic habits" - tiny changes that are both small and mighty.</p>
                  
                  <p className="mt-3"><strong>Guest:</strong> What I found most powerful about this book is how it breaks down the process of habit formation into practical, actionable steps. Clear doesn't just tell you to form good habits; he gives you a system to actually do it.</p>
                  
                  <p className="mt-3"><strong>Host:</strong> Exactly! And one of the most compelling concepts is the idea that habits are the compound interest of self-improvement. Just as money multiplies through compound interest, the effects of your habits multiply as you repeat them.</p>
                  
                  <p className="mt-3"><strong>Guest:</strong> I particularly like his emphasis on systems over goals. As Clear puts it, "You do not rise to the level of your goals. You fall to the level of your systems." This reframes how we should think about achievement.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetail;
