
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Clock, Calendar, Award } from 'lucide-react';

const BookInfo = () => {
  return (
    <div className="space-y-4 sticky top-24">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl flex items-center gap-2">
            <Book className="h-5 w-5 text-primary" />
            Book Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <img 
                src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg" 
                alt="Atomic Habits Book Cover" 
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">Reading Time</h4>
                  <p className="text-sm text-muted-foreground">4-5 hours (320 pages)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">Published</h4>
                  <p className="text-sm text-muted-foreground">October 16, 2018</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">Level</h4>
                  <p className="text-sm text-muted-foreground">Intermediate (B1-B2)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">About the Author</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            James Clear is an author and speaker focused on habits, decision-making, and continuous improvement. 
            His work has appeared in the New York Times, Time, and Entrepreneur. His website jamesclear.com 
            receives millions of visitors each month.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookInfo;
