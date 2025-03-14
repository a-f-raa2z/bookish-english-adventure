
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
            
            {/* Book details (9 columns) */}
            <div className="md:col-span-9">
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
              
              {/* Reading options moved below tags */}
              <div className="flex flex-col sm:flex-row gap-4">
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
                  <h4 className="font-semibold mt-4">Introduction</h4>
                  <p>In a society that often celebrates dramatic changes, the impact of small and gradual improvements is frequently overlooked. James Clear, a leading expert on habits, draws from both in-depth research and his own experiences to provide a framework for transforming productivity and personal growth. His work demonstrates how even the smallest daily decisions accumulate over time, driving significant transformations without causing major disruptions.</p>
                  
                  <p className="mt-3">The effect of improving by just 1% each day is transformative. Clear illustrates this idea through the story of the British cycling team, showing how continuous and small improvements sparked an era of extraordinary success. By distilling the habit-building process into four simple principles, Clear provides you with actionable strategies to make positive behaviors easier to adopt and negative ones more difficult to maintain.</p>
                  
                  <p className="mt-3">James Clear wrote his book after experiencing the significant changes that small habits made in his own life. His clear and relatable writing style simplifies the science of habits, transforming it into an inspiring path of self-discovery and empowerment. As you see these insights, you'll feel motivated to leverage the power of atomic habits, turning everyday routines into gateways to a remarkable life.</p>
                  
                  <h4 className="font-semibold mt-4">1. Small habits lead to big changes over time.</h4>
                  <p>Did you know that the fate of British Cycling changed dramatically thanks to tiny, almost invisible changes? In 2003, British Cycling was struggling, having won just a single Olympic gold medal in nearly a century. But when Dave Brailsford took over as performance director, he had a revolutionary idea: focus on improving everything by just 1%. This approach, known as "the aggregation of marginal gains," turned the team's fortunes around in a way that nobody could have predicted.</p>
                  
                  <p className="mt-3">Brailsford's strategy was all about finding those small, seemingly insignificant improvements in everything related to cycling. The team redesigned bike seats for comfort, used alcohol to clean tires for better grip, and even experimented with different massage gels for quicker muscle recovery. They made tiny tweaks, like painting the inside of their truck white to spot dust that could affect bike performance. Each change was minor, but together, they added up to something monumental.</p>
                  
                  <p className="mt-3">By 2008, just five years after implementing these small changes, British cyclists won 60% of the gold medals available at the Beijing Olympics. Four years later, they set nine Olympic records in London. These tiny improvements compounded over time, leading to a series of victories and world records that made British Cycling the most successful team in the sport's history.</p>
                  
                  <p className="mt-3">This story beautifully illustrates the power of small habits. We often fall into the trap of thinking that success requires massive action. But in reality, it's the small, consistent improvements that lead to significant changes over time. If you improve by just 1% each day, by the end of the year, you'll be 37 times better. On the flip side, getting 1% worse each day can lead you to almost zero progress.</p>
                  
                  <p className="mt-3">Habits are like the compound interest of self-improvement. Just as money grows over time through compound interest, the effects of your habits multiply as you repeat them. They might seem insignificant day-to-day, but over months and years, they can lead to enormous results. It's only when we look back over a long period that we can truly appreciate the impact of our habits.</p>
                  
                  <p className="mt-3">The challenge is that small changes often don't seem to matter in the moment. If you save a little money today, you're not instantly wealthy. If you exercise for a week, you might not see immediate physical changes. This slow pace can be discouraging, making it easy to revert to old habits. But remember, the impact of habits is like the effect of shifting an airplane's course by a few degrees. It might not seem like much at first, but over time, it can lead you to a completely different destination.</p>
                  
                  <p className="mt-3">The key takeaway here is to focus on your trajectory rather than your current results. Whether you're trying to save money, get fit, or learn a new skill, it's the small daily habits that determine your future. Good habits make time your ally, while bad habits make time your enemy. So, the next time you're tempted to overlook a small change, remember the British Cycling team and how those tiny improvements led to extraordinary success.</p>
                  
                  <div className="flex justify-between items-center mt-6 mb-2">
                    <h4 className="font-semibold">Paragraph Translation</h4>
                    <LanguageSelector />
                  </div>
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
