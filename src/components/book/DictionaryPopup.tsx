
import React from 'react';
import { BookOpen, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

interface DictionaryPopupProps {
  word: string;
  language: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const DictionaryPopup: React.FC<DictionaryPopupProps> = ({
  word,
  language,
  isOpen,
  onOpenChange
}) => {
  // Mock dictionary lookup function
  const getWordDefinition = (word: string, lang: string) => {
    // We're using mock data here as a demonstration
    const definitions: Record<string, string> = {
      'habits': {
        en: 'A settled tendency or usual manner of behavior.',
        es: 'Un patrón de comportamiento regular.',
        fr: 'Une tendance établie ou une manière habituelle de se comporter.',
        de: 'Eine etablierte Tendenz oder übliche Verhaltensweise.',
        zh: '习惯是一种定期的行为方式。',
      },
      'improvements': {
        en: 'The act or process of making something better.',
        es: 'El acto o proceso de mejorar algo.',
        fr: 'L\'acte ou le processus d\'amélioration de quelque chose.',
        de: 'Der Akt oder Prozess, etwas zu verbessern.',
        zh: '改进是使某事物变得更好的行为或过程。',
      },
      'changes': {
        en: 'To make or become different.',
        es: 'Hacer o volverse diferente.',
        fr: 'Rendre ou devenir différent.',
        de: 'Anders machen oder werden.',
        zh: '改变是使某事物变得不同的过程。',
      },
      'success': {
        en: 'The accomplishment of an aim or purpose.',
        es: 'El logro de un objetivo o propósito.',
        fr: 'L\'accomplissement d\'un but ou d\'un objectif.',
        de: 'Die Erreichung eines Ziels oder Zwecks.',
        zh: '成功是完成目标或目的的行为。',
      }
    };

    // Handle words not in our mock dictionary
    if (!definitions[word.toLowerCase()]) {
      return {
        word: word,
        definition: lang === 'en' 
          ? 'Definition not available.' 
          : `Definition not available in ${lang}.`,
        examples: []
      };
    }

    // Return the definition in the requested language or English as fallback
    return {
      word: word,
      definition: definitions[word.toLowerCase()][lang] || definitions[word.toLowerCase()].en,
      examples: []
    };
  };

  const wordInfo = getWordDefinition(word, language);

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger className="hidden"></PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="center">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <h3 className="font-medium">{wordInfo.word}</h3>
          </div>
          <button onClick={() => onOpenChange(false)} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <Separator className="my-2" />
        
        <div className="mt-2">
          <p className="text-sm">{wordInfo.definition}</p>
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground">
          Click anywhere to close
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DictionaryPopup;
