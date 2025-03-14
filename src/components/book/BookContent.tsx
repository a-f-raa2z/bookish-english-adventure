
import React, { useState } from 'react';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Globe, Book } from 'lucide-react';

// Mock book content for Atomic Habits
const bookContent = {
  'atomic-habits': {
    title: 'Atomic Habits',
    author: 'James Clear',
    chapters: [
      {
        title: 'The Fundamentals',
        paragraphs: [
          "Habits are the compound interest of self-improvement. Getting 1 percent better every day counts for a lot in the long run. The same way that money multiplies through compound interest, the effects of your habits multiply as you repeat them.",
          "But if you find yourself struggling with the same problems, again and again, then it's not your fault. Your system is your fault. You do not rise to the level of your goals. You fall to the level of your systems.",
          "The purpose of setting goals is to win the game. The purpose of building systems is to continue playing the game. True long-term thinking is goal-less thinking. It's not about any single accomplishment. It is about the cycle of endless refinement and continuous improvement."
        ]
      },
      {
        title: 'The 1st Law: Make It Obvious',
        paragraphs: [
          "The most practical way to change who you are is to change what you do. Each time you create a habit, you encode a new automatic behavior into your brain.",
          "The process of behavior change always starts with awareness. You need to be aware of your habits before you can change them. Once a habit is formed, it is unlikely to be forgotten.",
          "People with high self-control tend to spend less time in tempting situations. It's easier to avoid temptation than resist it. One of the most practical ways to eliminate a bad habit is to reduce exposure to the cue that causes it."
        ]
      }
    ]
  }
};

// Mock dictionary definitions
const dictionary: Record<string, { definition: string, examples: string[] }> = {
  'compound': {
    definition: 'Make up (a composite whole); constitute.',
    examples: ['The problems compound each other.', 'A word compounded from two others.']
  },
  'habit': {
    definition: 'A settled or regular tendency or practice, especially one that is hard to give up.',
    examples: ['He has an annoying habit of interrupting me.', 'Good eating habits.']
  },
  'system': {
    definition: 'A set of connected things or parts forming a complex whole.',
    examples: ['The nervous system.', 'A computer system.']
  },
  'awareness': {
    definition: 'Knowledge or perception of a situation or fact.',
    examples: ['There is a lack of awareness of the risks.', 'His political awareness increased during college.']
  }
};

// Mock translations
const translations: Record<string, Record<string, string>> = {
  'en': {
    'Habits are the compound interest of self-improvement.': 'Habits are the compound interest of self-improvement.',
    'Getting 1 percent better every day counts for a lot in the long run.': 'Getting 1 percent better every day counts for a lot in the long run.'
  },
  'es': {
    'Habits are the compound interest of self-improvement.': 'Los hábitos son el interés compuesto de la superación personal.',
    'Getting 1 percent better every day counts for a lot in the long run.': 'Mejorar un 1 por ciento cada día cuenta mucho a largo plazo.'
  },
  'fr': {
    'Habits are the compound interest of self-improvement.': 'Les habitudes sont l\'intérêt composé de l\'amélioration de soi.',
    'Getting 1 percent better every day counts for a lot in the long run.': 'S\'améliorer de 1 pour cent chaque jour compte beaucoup à long terme.'
  }
};

interface BookContentProps {
  bookId: string;
}

const BookContent: React.FC<BookContentProps> = ({ bookId }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const book = bookContent[bookId as keyof typeof bookContent];
  
  if (!book) {
    return <div className="text-center py-8">Book not found</div>;
  }

  const getWordDefinition = (word: string) => {
    const normalizedWord = word.toLowerCase().replace(/[.,!?;:'"()]/g, '');
    return dictionary[normalizedWord] || null;
  };

  const toggleTranslation = (paragraph: string, language: string) => {
    if (language === 'en') return null;
    return translations[language]?.[paragraph] || null;
  };

  return (
    <div className="prose max-w-none">
      {book.chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{chapter.title}</h2>
          
          {chapter.paragraphs.map((paragraph, paragraphIndex) => {
            const words = paragraph.split(' ');
            
            return (
              <div key={paragraphIndex} className="mb-6 relative">
                <p className="leading-relaxed mb-2">
                  {words.map((word, wordIndex) => {
                    const definition = getWordDefinition(word);
                    
                    return definition ? (
                      <Popover key={wordIndex}>
                        <PopoverTrigger asChild>
                          <span className="cursor-help border-b border-dotted border-primary/50 hover:text-primary">
                            {word}{' '}
                          </span>
                        </PopoverTrigger>
                        <PopoverContent className="w-72">
                          <div>
                            <h4 className="font-bold">{word}</h4>
                            <p className="text-sm">{definition.definition}</p>
                            {definition.examples.length > 0 && (
                              <div className="mt-2">
                                <h5 className="text-xs font-semibold text-muted-foreground">Examples:</h5>
                                <ul className="pl-4 text-xs text-muted-foreground">
                                  {definition.examples.map((example, i) => (
                                    <li key={i} className="mt-1">{example}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </PopoverContent>
                      </Popover>
                    ) : (
                      <span key={wordIndex}>{word}{' '}</span>
                    );
                  })}
                </p>
                
                {selectedLanguage !== 'en' && (
                  <div className="text-sm text-muted-foreground italic border-l-2 border-primary/20 pl-3 mt-1">
                    {toggleTranslation(paragraph, selectedLanguage) || 
                     `Translation not available in ${selectedLanguage}`}
                  </div>
                )}
                
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary"
                    onClick={() => setSelectedLanguage(selectedLanguage === 'en' ? 'es' : 'en')}
                  >
                    <Globe className="h-3 w-3" />
                    {selectedLanguage === 'en' ? 'Translate' : 'Show original'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default BookContent;
