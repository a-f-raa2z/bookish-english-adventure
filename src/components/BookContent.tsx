import React, { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Translate } from 'lucide-react';

interface BookContentProps {
  currentLanguage: string;
}

const BookContent = ({ currentLanguage }: BookContentProps) => {
  // Mock dictionary data for demo
  const dictionary = {
    atomic: {
      definition: "Relating to atoms or their properties; extremely small or minute.",
      examples: ["Atomic particles", "Atomic structure"],
      synonyms: ["microscopic", "minute", "tiny"]
    },
    habits: {
      definition: "A settled or regular tendency or practice, especially one that is hard to give up.",
      examples: ["He has a habit of tapping his fingers", "Good eating habits"],
      synonyms: ["custom", "practice", "routine", "pattern"]
    },
    tiny: {
      definition: "Very small; minute.",
      examples: ["A tiny little cottage", "A tiny amount"],
      synonyms: ["minute", "little", "small", "mini"]
    },
    changes: {
      definition: "The act or instance of making or becoming different.",
      examples: ["The change from winter to spring", "A change in management"],
      synonyms: ["alteration", "variation", "transformation"]
    },
    // ...other word definitions
  };
  
  // Mock translated paragraphs
  const translations = {
    spanish: "Los hábitos atómicos son pequeños cambios que pueden llevar a resultados notables.",
    french: "Les habitudes atomiques sont de petits changements qui peuvent conduire à des résultats remarquables.",
    german: "Atomare Gewohnheiten sind kleine Änderungen, die zu bemerkenswerten Ergebnissen führen können.",
    chinese: "原子习惯是可以导致显著结果的微小变化。",
    japanese: "アトミックハビットは、顕著な結果をもたらす小さな変化です。",
    korean: "원자 습관은 주목할 만한 결과로 이어질 수 있는 작은 변화입니다.",
    russian: "Атомные привычки — это небольшие изменения, которые могут привести к заметным результатам.",
    english: "Atomic habits are tiny changes that can lead to remarkable results."
  };

  // Create word components with hover dictionary
  const renderWordWithHover = (word: string) => {
    const lowerWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
    const hasDef = dictionary[lowerWord as keyof typeof dictionary];
    
    if (hasDef) {
      return (
        <HoverCard key={`${word}-${Math.random()}`}>
          <HoverCardTrigger asChild>
            <span className="cursor-help border-b border-dotted border-primary/40 hover:border-primary transition-colors">
              {word}
            </span>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium">{lowerWord}</h4>
              <p className="text-sm">{hasDef.definition}</p>
              {hasDef.examples.length > 0 && (
                <div>
                  <h5 className="text-xs font-medium text-muted-foreground">Examples:</h5>
                  <ul className="text-xs list-disc pl-4">
                    {hasDef.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
              {hasDef.synonyms.length > 0 && (
                <div>
                  <h5 className="text-xs font-medium text-muted-foreground">Synonyms:</h5>
                  <p className="text-xs">{hasDef.synonyms.join(", ")}</p>
                </div>
              )}
            </div>
          </HoverCardContent>
        </HoverCard>
      );
    }
    
    return <span key={`${word}-${Math.random()}`}>{word}</span>;
  };

  const renderParagraphWithHoverWords = (text: string) => {
    const words = text.split(' ');
    
    return (
      <p className="mb-4 leading-relaxed">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            {renderWordWithHover(word)}
            {index < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        ))}
      </p>
    );
  };

  return (
    <div>
      <div className="flex items-start gap-6 mb-8">
        <div className="flex-shrink-0 w-48 h-64 bg-muted rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&q=80"
            alt="Atomic Habits book cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Atomic Habits</h1>
          <p className="text-muted-foreground mb-2">by James Clear</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Self-Help</span>
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Productivity</span>
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Personal Development</span>
          </div>
          <p className="text-sm text-muted-foreground">
            No matter your goals, Atomic Habits offers a proven framework for improving—every day. 
            James Clear, one of the world's leading experts on habit formation, reveals practical 
            strategies that will teach you exactly how to form good habits, break bad ones, and 
            master the tiny behaviors that lead to remarkable results.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Chapter 1: The Surprising Power of Atomic Habits</h2>
        
        <div className="relative mb-6">
          {renderParagraphWithHoverWords("Atomic habits are tiny changes that can lead to remarkable results.")}
          
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="absolute -right-12 top-0"
                title="Translate paragraph"
              >
                <Translate className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-medium">Translation</h4>
                <p className="text-sm">{translations[currentLanguage as keyof typeof translations]}</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="relative mb-6">
          {renderParagraphWithHoverWords("If you want better results, forget about setting goals. Focus on your system instead.")}
        </div>
        
        <div className="relative mb-6">
          {renderParagraphWithHoverWords("You do not rise to the level of your goals. You fall to the level of your systems.")}
        </div>
        
        <div className="relative mb-6">
          {renderParagraphWithHoverWords("Success is the product of daily habits—not once-in-a-lifetime transformations.")}
        </div>
      </div>
    </div>
  );
};

export default BookContent;
