
import React, { useState } from 'react';
import DictionaryPopup from './DictionaryPopup';

interface BookContentProps {
  bookId: string;
}

const BookContent: React.FC<BookContentProps> = ({ bookId }) => {
  // Dictionary popup state
  const [selectedWord, setSelectedWord] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Default language (could be passed as prop if needed)
  const [language] = useState('en');
  
  const handleWordClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.tagName === 'SPAN') {
      const word = e.target.textContent || '';
      if (word.trim()) {
        setSelectedWord(word.trim());
        setIsPopupOpen(true);
      }
    }
  };
  
  // Wrap text in spans to make words clickable
  const wrapWordsInSpans = (text: string) => {
    return text.split(' ').map((word, i) => (
      <React.Fragment key={i}>
        <span 
          className="cursor-pointer hover:bg-muted hover:text-primary px-0.5 rounded"
        >
          {word}
        </span>
        {i < text.split(' ').length - 1 ? ' ' : ''}
      </React.Fragment>
    ));
  };

  return (
    <div className="prose max-w-none" onClick={handleWordClick}>
      {/* Dictionary popup */}
      <DictionaryPopup 
        word={selectedWord} 
        language={language} 
        isOpen={isPopupOpen} 
        onOpenChange={setIsPopupOpen} 
      />
      
      <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">• Introduction</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li>{wrapWordsInSpans("Small habits lead to big changes over time.")}</li>
          <li>{wrapWordsInSpans("Be aware of habits and plan when and where to act.")}</li>
          <li>{wrapWordsInSpans("Shape your environment to make good habits easier.")}</li>
          <li>{wrapWordsInSpans("Make habits appealing and simple to increase success.")}</li>
          <li>{wrapWordsInSpans("Reward yourself and track habits to keep going.")}</li>
          <li>{wrapWordsInSpans("Regularly review habits to keep improving.")}</li>
        </ol>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">• Conclusion</h4>
        <p>
          {wrapWordsInSpans("Atomic Habits provides a clear framework for improving daily. Small changes, consistently applied, lead to remarkable results over time.")}
        </p>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Similar Books</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>{wrapWordsInSpans("The Power of Habit by Charles Duhigg")}</li>
          <li>{wrapWordsInSpans("Tiny Habits by BJ Fogg")}</li>
          <li>{wrapWordsInSpans("Deep Work by Cal Newport")}</li>
        </ul>
      </div>
    </div>
  );
};

export default BookContent;
