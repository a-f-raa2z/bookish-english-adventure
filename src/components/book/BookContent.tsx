
import React, { useState } from 'react';
import DictionaryPopup from './DictionaryPopup';
import { isComplexWord } from '@/utils/complexWordsUtil';
import { Triangle } from 'lucide-react';

interface BookContentProps {
  bookId: string;
  currentPlayingParagraph?: number;
}

const BookContent: React.FC<BookContentProps> = ({ bookId, currentPlayingParagraph = -1 }) => {
  // Dictionary popup state
  const [selectedWord, setSelectedWord] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  
  // Default language (could be passed as prop if needed)
  const [language] = useState('en');
  
  const handleWordClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.tagName === 'SPAN') {
      const word = e.target.textContent || '';
      if (word.trim()) {
        // Get the position of the clicked word
        const rect = e.target.getBoundingClientRect();
        
        // Position the popup directly above the word with some space
        // Using the viewport coordinates (client coordinates)
        setPopupPosition({
          x: rect.left + (rect.width / 2),
          y: rect.top - 15 // Small space above the word
        });
        
        setSelectedWord(word.trim());
        setIsPopupOpen(true);
      }
    }
  };
  
  // Wrap text in spans to make words clickable but don't underline them in sidebar
  const wrapWordsInSpans = (text: string) => {
    return text.split(' ').map((word, i) => {
      // Check if the word is complex (removing punctuation for the check)
      const wordWithoutPunctuation = word.replace(/[.,;:!?"'()]/g, '');
      const isComplex = isComplexWord(wordWithoutPunctuation);
      
      return (
        <React.Fragment key={i}>
          <span 
            className="cursor-pointer hover:bg-muted hover:text-primary px-0.5 rounded"
          >
            {word}
          </span>
          {i < text.split(' ').length - 1 ? ' ' : ''}
        </React.Fragment>
      );
    });
  };

  // Create a paragraph renderer that shows the triangle marker if it's currently playing
  const renderParagraph = (content: JSX.Element, index: number) => {
    const isPlaying = index === currentPlayingParagraph;
    
    return (
      <div key={index} className="relative">
        {isPlaying && (
          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
            <Triangle className="h-4 w-4 text-primary/80 fill-primary/80" />
          </div>
        )}
        <div className={`${isPlaying ? 'bg-muted/30 p-1 rounded' : ''}`}>
          {content}
        </div>
      </div>
    );
  };

  return (
    <div className="prose max-w-none px-1" onClick={handleWordClick}>
      {/* Dictionary popup */}
      <DictionaryPopup 
        word={selectedWord} 
        language={language} 
        isOpen={isPopupOpen} 
        onOpenChange={setIsPopupOpen} 
        position={popupPosition}
      />
      
      <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">• Introduction</h4>
        <ol className="list-decimal pl-5 space-y-2">
          {[
            "Small habits lead to big changes over time.",
            "Be aware of habits and plan when and where to act.",
            "Shape your environment to make good habits easier.",
            "Make habits appealing and simple to increase success.",
            "Reward yourself and track habits to keep going.",
            "Regularly review habits to keep improving."
          ].map((text, index) => renderParagraph(
            <li>{wrapWordsInSpans(text)}</li>,
            index
          ))}
        </ol>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium mb-2">• Conclusion</h4>
        {renderParagraph(
          <p>
            {wrapWordsInSpans("Atomic Habits provides a clear framework for improving daily. Small changes, consistently applied, lead to remarkable results over time.")}
          </p>,
          6
        )}
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Similar Books</h4>
        <ul className="list-disc pl-5 space-y-1">
          {[
            "The Power of Habit by Charles Duhigg",
            "Tiny Habits by BJ Fogg",
            "Deep Work by Cal Newport"
          ].map((text, index) => renderParagraph(
            <li>{wrapWordsInSpans(text)}</li>,
            index + 7
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookContent;
