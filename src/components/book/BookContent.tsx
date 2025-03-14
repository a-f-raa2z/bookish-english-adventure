
import React from 'react';

interface BookContentProps {
  bookId: string;
}

const BookContent: React.FC<BookContentProps> = ({ bookId }) => {
  return (
    <div className="prose max-w-none">
      <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Introduction</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Small habits lead to big changes over time.</li>
          <li>Be aware of habits and plan when and where to act.</li>
          <li>Shape your environment to make good habits easier.</li>
          <li>Make habits appealing and simple to increase success.</li>
          <li>Reward yourself and track habits to keep going.</li>
          <li>Regularly review habits to keep improving.</li>
        </ol>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">Conclusion</h4>
        <p>
          Atomic Habits provides a clear framework for improving daily. Small changes, 
          consistently applied, lead to remarkable results over time.
        </p>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Similar Books</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>The Power of Habit by Charles Duhigg</li>
          <li>Tiny Habits by BJ Fogg</li>
          <li>Deep Work by Cal Newport</li>
        </ul>
      </div>
    </div>
  );
};

export default BookContent;
